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
eval("\n\nInboxSDK.load('1.0', 'sdk_gmailCalPlugin_866256f084').then(function (sdk) {\n\n\tfunction setBodyCursorToEnd(ele) {\n\t\tvar range = document.createRange();\n\t\tvar sel = window.getSelection();\n\t\trange.setStart = range.setStart(ele, 1);\n\t\trange.collapse(true);\n\t\tsel.removeAllRanges();\n\t\tsel.addRange(range);\n\t\tele.focus();\n\t}\n\n\tfunction requestMonday(composeView) {\n\t\tvar bodyHTML = composeView.getHTMLContent();\n\t\tif (bodyHTML.match(/(Monday$)/gi)) {\n\t\t\t//let linkifyHTML = bodyHTML.replace(/(Sunday$)/gi, 'test');\n\t\t\t//composeView.setBodyHTML(linkifyHTML);\n\t\t\tchrome.runtime.sendMessage({ date: 'Monday' }, function (response) {\n\t\t\t\tvar res = response.data;\n\t\t\t\tvar linkifyHTML = bodyHTML.replace(/(Monday$)/gi, response.data);\n\t\t\t\tcomposeView.setBodyHTML(linkifyHTML);\n\n\t\t\t\t// figure out how to set cursor to end \n\t\t\t\tsetBodyCursorToEnd($('.editable').get(0));\n\t\t\t});\n\t\t}\n\t}\n\n\tfunction calendarKeyWord(composeView) {\n\t\tvar originalHTML = composeView.getHTMLContent();\n\t\t// edit the regex and replace str after date has been selected \n\t\tif (originalHTML.match(/(\\$date)/gi)) {\n\t\t\tvar userEmail = composeView.getFromContact().emailAddress.replace(/@/, '%40');\n\t\t\tvar linkifyHTML = originalHTML.replace(/(\\$date)/gi, '<br /><iframe src=\"https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;mode=AGENDA&amp;height=150&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=' + userEmail + '&amp;color=%232952A3&amp;ctz=America%2FLos_Angeles\" style=\"border-width:0\" width=\"420\" height=\"300\" frameborder=\"0\" scrolling=\"no\"></iframe><br /><div class=\"filler\" contenteditable=\"true\"> </div>');\n\n\t\t\tcomposeView.setBodyHTML(linkifyHTML);\n\t\t\t//composeView.insertLinkChipIntoBodyAtCursor('Select time and day', '#', 'https://cdn4.iconfinder.com/data/icons/finance-and-banking-free/64/Finance_financial_planning-32.png'); \n\t\t\t//setBodyCursorToEnd($('.inboxsdk__compose_linkChip').get(0));\n\t\t\tsetBodyCursorToEnd($('.filler').get(0));\n\t\t}\n\t}\n\n\tsdk.Compose.registerComposeViewHandler(function (composeView) {\n\n\t\t$('.editable').on('input', function () {\n\t\t\tcalendarKeyWord(composeView);\n\t\t\trequestMonday(composeView);\n\t\t});\n\t});\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJJbmJveFNESy5sb2FkKCcxLjAnLCAnc2RrX2dtYWlsQ2FsUGx1Z2luXzg2NjI1NmYwODQnKS50aGVuKGZ1bmN0aW9uKHNkayl7XHJcblx0XHJcblx0ZnVuY3Rpb24gc2V0Qm9keUN1cnNvclRvRW5kKGVsZSkge1xyXG5cdFx0bGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuXHRcdGxldCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblx0XHRyYW5nZS5zZXRTdGFydCA9IHJhbmdlLnNldFN0YXJ0KGVsZSwgMSk7XHJcblx0XHRyYW5nZS5jb2xsYXBzZSh0cnVlKTtcclxuXHRcdHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuXHRcdHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcblx0XHRlbGUuZm9jdXMoKTtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gcmVxdWVzdE1vbmRheShjb21wb3NlVmlldykge1xyXG5cdFx0bGV0IGJvZHlIVE1MID0gY29tcG9zZVZpZXcuZ2V0SFRNTENvbnRlbnQoKTtcclxuXHRcdGlmIChib2R5SFRNTC5tYXRjaCgvKE1vbmRheSQpL2dpKSkge1xyXG5cdFx0XHQvL2xldCBsaW5raWZ5SFRNTCA9IGJvZHlIVE1MLnJlcGxhY2UoLyhTdW5kYXkkKS9naSwgJ3Rlc3QnKTtcclxuXHRcdFx0Ly9jb21wb3NlVmlldy5zZXRCb2R5SFRNTChsaW5raWZ5SFRNTCk7XHJcblx0XHRcdGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtkYXRlOiAnTW9uZGF5J30sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0bGV0IHJlcyA9IHJlc3BvbnNlLmRhdGE7XHJcblx0XHRcdFx0bGV0IGxpbmtpZnlIVE1MID0gYm9keUhUTUwucmVwbGFjZSgvKE1vbmRheSQpL2dpLCByZXNwb25zZS5kYXRhKTtcclxuXHRcdFx0XHRjb21wb3NlVmlldy5zZXRCb2R5SFRNTChsaW5raWZ5SFRNTCk7XHJcblxyXG5cdFx0XHRcdC8vIGZpZ3VyZSBvdXQgaG93IHRvIHNldCBjdXJzb3IgdG8gZW5kIFxyXG5cdFx0XHRcdHNldEJvZHlDdXJzb3JUb0VuZCgkKCcuZWRpdGFibGUnKS5nZXQoMCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gY2FsZW5kYXJLZXlXb3JkKGNvbXBvc2VWaWV3KSB7XHJcblx0XHRsZXQgb3JpZ2luYWxIVE1MID0gY29tcG9zZVZpZXcuZ2V0SFRNTENvbnRlbnQoKTtcclxuXHRcdC8vIGVkaXQgdGhlIHJlZ2V4IGFuZCByZXBsYWNlIHN0ciBhZnRlciBkYXRlIGhhcyBiZWVuIHNlbGVjdGVkIFxyXG5cdFx0aWYgKG9yaWdpbmFsSFRNTC5tYXRjaCgvKFxcJGRhdGUpL2dpKSkge1xyXG5cdFx0XHRsZXQgdXNlckVtYWlsID0gY29tcG9zZVZpZXcuZ2V0RnJvbUNvbnRhY3QoKS5lbWFpbEFkZHJlc3MucmVwbGFjZSgvQC8sICclNDAnKTsgXHJcblx0XHRcdGxldCBsaW5raWZ5SFRNTCA9IG9yaWdpbmFsSFRNTC5yZXBsYWNlKC8oXFwkZGF0ZSkvZ2ksIGA8YnIgLz48aWZyYW1lIHNyYz1cImh0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhci9lbWJlZD9zaG93VGl0bGU9MCZhbXA7c2hvd1ByaW50PTAmYW1wO21vZGU9QUdFTkRBJmFtcDtoZWlnaHQ9MTUwJmFtcDt3a3N0PTEmYW1wO2JnY29sb3I9JTIzRkZGRkZGJmFtcDtzcmM9JHt1c2VyRW1haWx9JmFtcDtjb2xvcj0lMjMyOTUyQTMmYW1wO2N0ej1BbWVyaWNhJTJGTG9zX0FuZ2VsZXNcIiBzdHlsZT1cImJvcmRlci13aWR0aDowXCIgd2lkdGg9XCI0MjBcIiBoZWlnaHQ9XCIzMDBcIiBmcmFtZWJvcmRlcj1cIjBcIiBzY3JvbGxpbmc9XCJub1wiPjwvaWZyYW1lPjxiciAvPjxkaXYgY2xhc3M9XCJmaWxsZXJcIiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+IDwvZGl2PmApO1xyXG5cclxuXHRcdFx0Y29tcG9zZVZpZXcuc2V0Qm9keUhUTUwobGlua2lmeUhUTUwpO1xyXG5cdFx0XHQvL2NvbXBvc2VWaWV3Lmluc2VydExpbmtDaGlwSW50b0JvZHlBdEN1cnNvcignU2VsZWN0IHRpbWUgYW5kIGRheScsICcjJywgJ2h0dHBzOi8vY2RuNC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2ZpbmFuY2UtYW5kLWJhbmtpbmctZnJlZS82NC9GaW5hbmNlX2ZpbmFuY2lhbF9wbGFubmluZy0zMi5wbmcnKTsgXHJcblx0XHRcdC8vc2V0Qm9keUN1cnNvclRvRW5kKCQoJy5pbmJveHNka19fY29tcG9zZV9saW5rQ2hpcCcpLmdldCgwKSk7XHJcblx0XHRcdHNldEJvZHlDdXJzb3JUb0VuZCgkKCcuZmlsbGVyJykuZ2V0KDApKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0c2RrLkNvbXBvc2UucmVnaXN0ZXJDb21wb3NlVmlld0hhbmRsZXIoZnVuY3Rpb24oY29tcG9zZVZpZXcpe1xyXG5cdFx0XHJcblx0XHQkKCcuZWRpdGFibGUnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y2FsZW5kYXJLZXlXb3JkKGNvbXBvc2VWaWV3KTtcclxuXHRcdFx0cmVxdWVzdE1vbmRheShjb21wb3NlVmlldyk7XHJcblx0XHR9KTsgXHJcblx0XHRcclxuXHR9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);