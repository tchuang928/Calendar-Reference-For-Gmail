InboxSDK.load('1.0', 'sdk_gmailCalPlugin_866256f084').then(function(sdk){
	
	function setBodyCursorToEnd(ele) {
		let range = document.createRange();
		let sel = window.getSelection();
		range.setStart = range.setStart(ele, 1);
		range.collapse(true);
		sel.removeAllRanges();
		sel.addRange(range);
		ele.focus();
	}
	
	function requestMonday(composeView) {
		let bodyHTML = composeView.getHTMLContent();
		if (bodyHTML.match(/(Monday$)/gi)) {
			//let linkifyHTML = bodyHTML.replace(/(Sunday$)/gi, 'test');
			//composeView.setBodyHTML(linkifyHTML);
			chrome.runtime.sendMessage({date: 'Monday'}, function(response) {
				let res = response.data;
				let linkifyHTML = bodyHTML.replace(/(Monday$)/gi, response.data);
				composeView.setBodyHTML(linkifyHTML);

				// figure out how to set cursor to end 
				setBodyCursorToEnd($('.editable').get(0));
			});
		}
	}
	
	function calendarKeyWord(composeView) {
		let originalHTML = composeView.getHTMLContent();
		// edit the regex and replace str after date has been selected 
		if (originalHTML.match(/(\$date)/gi)) {
			let userEmail = composeView.getFromContact().emailAddress.replace(/@/, '%40'); 
			let linkifyHTML = originalHTML.replace(/(\$date)/gi, `<br /><iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;mode=AGENDA&amp;height=150&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=${userEmail}&amp;color=%232952A3&amp;ctz=America%2FLos_Angeles" style="border-width:0" width="420" height="300" frameborder="0" scrolling="no"></iframe><br /><div class="filler" contenteditable="true"> </div>`);

			composeView.setBodyHTML(linkifyHTML);
			//composeView.insertLinkChipIntoBodyAtCursor('Select time and day', '#', 'https://cdn4.iconfinder.com/data/icons/finance-and-banking-free/64/Finance_financial_planning-32.png'); 
			//setBodyCursorToEnd($('.inboxsdk__compose_linkChip').get(0));
			setBodyCursorToEnd($('.filler').get(0));
		}
	}
	
	sdk.Compose.registerComposeViewHandler(function(composeView){
		
		$('.editable').on('input', function() {
			calendarKeyWord(composeView);
			requestMonday(composeView);
		}); 
		
	});
});
