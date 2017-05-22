/**
 * Google Calender API URLs
 */
var apiURLs = {};
apiURLs.settings = 'https://www.googleapis.com/calendar/v3/users/me/settings'; 
apiURLs.calendarList = 'https://www.googleapis.com/calendar/v3/users/me/calendarList'; 
//apiURLs.events = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?`; 

var fetch = {};

// initial authentication
fetch.init = function() {
	chrome.identity.getAuthToken({'interactive': true}, function(token) {
		if (chrome.runtime.lastError || !token) {
			console.log('Access token not granted. Please reload the extension.');
		}
		window.console.log(token);
		fetch.calendars();
	});
}

fetch.calendars = function() {
	chrome.storage.local.get('calendars', function(storage) {
		if (chrome.runtime.lastError) {
			console.log('Error retrieving data');
		}

		var storedCalendars = storage['calendars'] || {};

		chrome.identity.getAuthToken({'interactive': false}, function(token) {
			if (chrome.runtime.lastError || !token) {
				console.log('Access token not granted. Please reload the extension.');
			}

			window.console.log(token);
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
							console.log('Error saving data');
							return;
						}
						// method to fetch events

					});
					console.log(storage.calendars)
				},
				error: function(response) {
					window.console.log('error');

					// token needs to be refreshed if unauthorized
					if (response.status === 401) {
						chrome.identity.removeCachedAuthToken({'token': token}, function () {});
					}
				}
			});
		});
	})
}

// for browser action
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	switch(request.ui) {
		case 'token':
			fetch.init();
			fetch.calendars();
			break;
	}

	return true;
});


// for inboxSDK
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	switch(request.date) {
		case 'Sunday':
			fetch.calendars();
			//sendResponse({farewell: 'sunday!'});
			chrome.storage.local.get('calendars', function(storage){
				if (chrome.runtime.lastError) {
					console.log('Error retrieving data');
				}
				sendResponse({farewell: storage.calendars});
			});
			break;

		case 'Monday':
			fetch.calendars();
			chrome.storage.local.get('calendars', function(storage){
				if (chrome.runtime.lastError) {
					console.log('Error retrieving data');
				}
				sendResponse({farewell: 'monday!!'});
			});
			break;
	}

	// response function is called asynchronously
	return true;
});




