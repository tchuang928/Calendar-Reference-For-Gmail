/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nInboxSDK.load('1.0', 'sdk_gmailCalPlugin_866256f084').then(function (sdk) {\n\n\tfunction setBodyCursorToEnd(ele) {\n\t\tvar range = document.createRange();\n\t\tvar sel = window.getSelection();\n\t\trange.setStart = range.setStart(ele, 1);\n\t\trange.collapse(true);\n\t\tsel.removeAllRanges();\n\t\tsel.addRange(range);\n\t\tele.focus();\n\t}\n\n\tfunction requestCalendarData(dateParam, composeView) {\n\t\tvar bodyHTML = composeView.getHTMLContent();\n\t\tif (bodyHTML.match(/(Sunday$)/gi)) {\n\t\t\tchrome.runtime.sendMessage({ date: dateParam }, function (response) {\n\t\t\t\tvar res = response.farewell;\n\t\t\t\tvar linkifyHTML = bodyHTML.replace(/(Sunday$)/gi, response.farewell);\n\t\t\t\tcomposeView.setBodyHTML(linkifyHTML);\n\t\t\t\tsetBodyCursorToEnd($('.editable').get(0));\n\t\t\t});\n\t\t}\n\t}\n\n\tfunction calendarKeyWord(composeView) {\n\t\tvar originalHTML = composeView.getHTMLContent();\n\t\t// edit the regex and replace str after date has been selected \n\t\tif (originalHTML.match(/(\\$date)/gi)) {\n\t\t\tvar userEmail = composeView.getFromContact().emailAddress.replace(/@/, '%40');\n\t\t\tvar linkifyHTML = originalHTML.replace(/(\\$date)/gi, '<br /><iframe src=\"https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;mode=AGENDA&amp;height=150&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=' + userEmail + '&amp;color=%232952A3&amp;ctz=America%2FLos_Angeles\" style=\"border-width:0\" width=\"420\" height=\"300\" frameborder=\"0\" scrolling=\"no\"></iframe><br /><div class=\"filler\" contenteditable=\"true\"> </div>');\n\n\t\t\tcomposeView.setBodyHTML(linkifyHTML);\n\t\t\t//composeView.insertLinkChipIntoBodyAtCursor('Select time and day', '#', 'https://cdn4.iconfinder.com/data/icons/finance-and-banking-free/64/Finance_financial_planning-32.png'); \n\t\t\t//setBodyCursorToEnd($('.inboxsdk__compose_linkChip').get(0));\n\t\t\tsetBodyCursorToEnd($('.filler').get(0));\n\t\t}\n\t}\n\n\tfunction autoLink(composeView) {\n\t\tvar originalText = composeView.getTextContent();\n\t\tif (originalText.match(/(\\$date)/gi)) {\n\t\t\tcomposeView.insertLinkChipIntoBodyAtCursor('Select time and day', '#', 'https://cdn4.iconfinder.com/data/icons/finance-and-banking-free/64/Finance_financial_planning-32.png');\n\t\t\t//composeView.insertLinkIntoBodyAtCursor('Select time and day', '#');\n\t\t}\n\t}\n\n\tsdk.Compose.registerComposeViewHandler(function (composeView) {\n\n\t\t$('.editable').on('input', function () {\n\t\t\t//$('#\\\\:oy').text('Hello world');\n\t\t\t//autoLink(composeView);\n\t\t\tcalendarKeyWord(composeView);\n\t\t\trequestCalendarData('Sunday', composeView);\n\t\t});\n\t});\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJJbmJveFNESy5sb2FkKCcxLjAnLCAnc2RrX2dtYWlsQ2FsUGx1Z2luXzg2NjI1NmYwODQnKS50aGVuKGZ1bmN0aW9uKHNkayl7XHJcblx0XHJcblx0ZnVuY3Rpb24gc2V0Qm9keUN1cnNvclRvRW5kKGVsZSkge1xyXG5cdFx0bGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuXHRcdGxldCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblx0XHRyYW5nZS5zZXRTdGFydCA9IHJhbmdlLnNldFN0YXJ0KGVsZSwgMSk7XHJcblx0XHRyYW5nZS5jb2xsYXBzZSh0cnVlKTtcclxuXHRcdHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuXHRcdHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcblx0XHRlbGUuZm9jdXMoKTtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gcmVxdWVzdENhbGVuZGFyRGF0YShkYXRlUGFyYW0sIGNvbXBvc2VWaWV3KSB7XHJcblx0XHRsZXQgYm9keUhUTUwgPSBjb21wb3NlVmlldy5nZXRIVE1MQ29udGVudCgpO1xyXG5cdFx0aWYgKGJvZHlIVE1MLm1hdGNoKC8oU3VuZGF5JCkvZ2kpKSB7XHJcblx0XHRcdGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtkYXRlOiBkYXRlUGFyYW19LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdGxldCByZXMgPSByZXNwb25zZS5mYXJld2VsbDtcclxuXHRcdFx0XHRsZXQgbGlua2lmeUhUTUwgPSBib2R5SFRNTC5yZXBsYWNlKC8oU3VuZGF5JCkvZ2ksIHJlc3BvbnNlLmZhcmV3ZWxsKTtcclxuXHRcdFx0XHRjb21wb3NlVmlldy5zZXRCb2R5SFRNTChsaW5raWZ5SFRNTCk7XHJcblx0XHRcdFx0c2V0Qm9keUN1cnNvclRvRW5kKCQoJy5lZGl0YWJsZScpLmdldCgwKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBjYWxlbmRhcktleVdvcmQoY29tcG9zZVZpZXcpIHtcclxuXHRcdGxldCBvcmlnaW5hbEhUTUwgPSBjb21wb3NlVmlldy5nZXRIVE1MQ29udGVudCgpO1xyXG5cdFx0Ly8gZWRpdCB0aGUgcmVnZXggYW5kIHJlcGxhY2Ugc3RyIGFmdGVyIGRhdGUgaGFzIGJlZW4gc2VsZWN0ZWQgXHJcblx0XHRpZiAob3JpZ2luYWxIVE1MLm1hdGNoKC8oXFwkZGF0ZSkvZ2kpKSB7XHJcblx0XHRcdGxldCB1c2VyRW1haWwgPSBjb21wb3NlVmlldy5nZXRGcm9tQ29udGFjdCgpLmVtYWlsQWRkcmVzcy5yZXBsYWNlKC9ALywgJyU0MCcpOyBcclxuXHRcdFx0bGV0IGxpbmtpZnlIVE1MID0gb3JpZ2luYWxIVE1MLnJlcGxhY2UoLyhcXCRkYXRlKS9naSwgYDxiciAvPjxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jYWxlbmRhci5nb29nbGUuY29tL2NhbGVuZGFyL2VtYmVkP3Nob3dUaXRsZT0wJmFtcDtzaG93UHJpbnQ9MCZhbXA7bW9kZT1BR0VOREEmYW1wO2hlaWdodD0xNTAmYW1wO3drc3Q9MSZhbXA7Ymdjb2xvcj0lMjNGRkZGRkYmYW1wO3NyYz0ke3VzZXJFbWFpbH0mYW1wO2NvbG9yPSUyMzI5NTJBMyZhbXA7Y3R6PUFtZXJpY2ElMkZMb3NfQW5nZWxlc1wiIHN0eWxlPVwiYm9yZGVyLXdpZHRoOjBcIiB3aWR0aD1cIjQyMFwiIGhlaWdodD1cIjMwMFwiIGZyYW1lYm9yZGVyPVwiMFwiIHNjcm9sbGluZz1cIm5vXCI+PC9pZnJhbWU+PGJyIC8+PGRpdiBjbGFzcz1cImZpbGxlclwiIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIj4gPC9kaXY+YCk7XHJcblxyXG5cdFx0XHRjb21wb3NlVmlldy5zZXRCb2R5SFRNTChsaW5raWZ5SFRNTCk7XHJcblx0XHRcdC8vY29tcG9zZVZpZXcuaW5zZXJ0TGlua0NoaXBJbnRvQm9keUF0Q3Vyc29yKCdTZWxlY3QgdGltZSBhbmQgZGF5JywgJyMnLCAnaHR0cHM6Ly9jZG40Lmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvZmluYW5jZS1hbmQtYmFua2luZy1mcmVlLzY0L0ZpbmFuY2VfZmluYW5jaWFsX3BsYW5uaW5nLTMyLnBuZycpOyBcclxuXHRcdFx0Ly9zZXRCb2R5Q3Vyc29yVG9FbmQoJCgnLmluYm94c2RrX19jb21wb3NlX2xpbmtDaGlwJykuZ2V0KDApKTtcclxuXHRcdFx0c2V0Qm9keUN1cnNvclRvRW5kKCQoJy5maWxsZXInKS5nZXQoMCkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHJcblx0XHJcblx0ZnVuY3Rpb24gYXV0b0xpbmsoY29tcG9zZVZpZXcpIHtcclxuXHRcdGxldCBvcmlnaW5hbFRleHQgPSBjb21wb3NlVmlldy5nZXRUZXh0Q29udGVudCgpO1xyXG5cdFx0aWYgKG9yaWdpbmFsVGV4dC5tYXRjaCgvKFxcJGRhdGUpL2dpKSkge1xyXG5cdFx0XHRjb21wb3NlVmlldy5pbnNlcnRMaW5rQ2hpcEludG9Cb2R5QXRDdXJzb3IoJ1NlbGVjdCB0aW1lIGFuZCBkYXknLCAnIycsICdodHRwczovL2NkbjQuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9maW5hbmNlLWFuZC1iYW5raW5nLWZyZWUvNjQvRmluYW5jZV9maW5hbmNpYWxfcGxhbm5pbmctMzIucG5nJyk7IFxyXG5cdFx0XHQvL2NvbXBvc2VWaWV3Lmluc2VydExpbmtJbnRvQm9keUF0Q3Vyc29yKCdTZWxlY3QgdGltZSBhbmQgZGF5JywgJyMnKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0c2RrLkNvbXBvc2UucmVnaXN0ZXJDb21wb3NlVmlld0hhbmRsZXIoZnVuY3Rpb24oY29tcG9zZVZpZXcpe1xyXG5cdFx0XHJcblx0XHQkKCcuZWRpdGFibGUnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8kKCcjXFxcXDpveScpLnRleHQoJ0hlbGxvIHdvcmxkJyk7XHJcblx0XHRcdC8vYXV0b0xpbmsoY29tcG9zZVZpZXcpO1xyXG5cdFx0XHRjYWxlbmRhcktleVdvcmQoY29tcG9zZVZpZXcpO1xyXG5cdFx0XHRyZXF1ZXN0Q2FsZW5kYXJEYXRhKCdTdW5kYXknLCBjb21wb3NlVmlldyk7XHJcblx0XHR9KTsgXHJcblx0XHRcclxuXHR9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);