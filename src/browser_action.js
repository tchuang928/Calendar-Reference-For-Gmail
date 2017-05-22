var browserAction = {};

browserAction.init = function() {
	browserAction.notYetAuth();
	browserAction.initAuth();
}

browserAction.notYetAuth = function() {
	chrome.identity.getAuthToken({'interactive': false}, function(token) {
		if (chrome.runtime.lastError || !token) {
			$('#error').show();
			$('#actionBar').hide();
		} else {
			$('#error').hide();
			$('#actionBar').show();
			console.log(token);
		}
	})
}

browserAction.initAuth = function() {
	$('#authRequired').on('click', function() {
		$('#authRequired').text('AUTHORIZATION IN PROGRESS...')
		chrome.runtime.sendMessage({ui: 'token'});
	});
}

window.addEventListener('load', function() {
	browserAction.init();
}, false);
