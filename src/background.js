// initial authentication
chrome.identity.getAuthToken({"interactive": true}, function(token) {
	if (chrome.runtime.lastError || !token) {
		alert('Access token not granted. Please reload the extension.');
	}
	window.console.log(token);
});



/**
 * Google Calender API URLs
 */
var apiURLs = {};
apiURLs.settings = 'https://www.googleapis.com/calendar/v3/users/me/settings'; 
apiURLs.calendarList = 'https://www.googleapis.com/calendar/v3/users/me/calendarList'; 
//apiURLs.events = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?`; 

var fetch = {};
fetch.calendars = function() {
	chrome.storage.local.get('calendars', function(storage) {
		if (chrome.runtime.lastError) {
			alert('Error retrieving data');
		}

		var storedCalendars = storage['calendars'] || {};

		chrome.identity.getAuthToken({"interactive": false}, function(token) {
			if (chrome.runtime.lastError || !token) {
				alert('Access token not granted. Please reload the extension.');
			}

			$.ajax(apiURLs.calendarList, {
				headers: {
					'Authorization': 'Bearer ' + token
				},
				success: function(data) {
					var calendars = {};
					for (var i = 0; i < data.items.length; i++) {
						var calendar = data.items[i];

						var serverCalendarID = calendar.id;
						var storedCalendar = storedCalendars[serverCalendarID] || {};

						var visible = (typeof storedCalendar.visible !== 'undefined') ?
							storedCalendar.visible : calendar.selected;

						var mergedCalendar = {
							id: serverCalendarID,
							title: calendar.summary,
							editable: calendar.accessRole == 'writer' || calendar.accessRole == 'owner',
							description: calendar.description || '',
							foregroundColor: calendar.foregroundColor,
							backgroundColor: calendar.backgroundColor,
							visible: visible
						}

						calendars[serverCalendarID] = mergedCalendar;
					}
					chrome.storage.local.set({'calendars': calendars}, function() {
						if (chrome.runtime.lastError) {
							alert('Error saving data');
							return;
						}
						// method to fetch events

					});
				},
				error: function(response) {
					window.console.log('error');
				}
			});
		});
	})
}

fetch.calendars();

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	switch(request.date) {
		case 'Sunday':
			fetch.calendars();
			//sendResponse({farewell: 'sunday!'});
			chrome.storage.local.get('calendars', function(storage){
				if (chrome.runtime.lastError) {
					alert('Error retrieving data');
				}
				sendResponse({farewell: 'sunday!!'});
			});
			break;

		case 'Monday':
			fetch.calendars();
			chrome.storage.local.get('calendars', function(storage){
				if (chrome.runtime.lastError) {
					alert('Error retrieving data');
				}
				sendResponse({farewell: 'monday!!'});
			});
			break;
	}

	// response function is called asynchronously
	return true;
});




