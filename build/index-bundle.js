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
eval("\n\nInboxSDK.load('1.0', 'sdk_gmailCalPlugin_866256f084').then(function (sdk) {\n\n\tfunction setBodyCursorToEnd(ele) {\n\t\tvar range = document.createRange();\n\t\tvar sel = window.getSelection();\n\t\trange.setStart = range.setStart(ele, 1);\n\t\trange.collapse(true);\n\t\tsel.removeAllRanges();\n\t\tsel.addRange(range);\n\t\tele.focus();\n\t}\n\n\tfunction calendarKeyWord(composeView) {\n\t\tvar originalHTML = composeView.getHTMLContent();\n\t\t// edit the regex and replace str after date has been selected \n\t\tif (originalHTML.match(/(\\$date)/gi)) {\n\t\t\tvar linkifyHTML = originalHTML.replace(/(\\$date)/gi, '<br /><iframe src=\"https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;mode=AGENDA&amp;height=150&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=chuzi928%40gmail.com&amp;color=%232952A3&amp;ctz=America%2FLos_Angeles\" style=\"border-width:0\" width=\"420\" height=\"300\" frameborder=\"0\" scrolling=\"no\"></iframe><br /><div class=\"filler\" contenteditable=\"true\"> </div>');\n\n\t\t\tcomposeView.setBodyHTML(linkifyHTML);\n\t\t\t//composeView.insertLinkChipIntoBodyAtCursor('Select time and day', '#', 'https://cdn4.iconfinder.com/data/icons/finance-and-banking-free/64/Finance_financial_planning-32.png'); \n\t\t\t//setBodyCursorToEnd($('.inboxsdk__compose_linkChip').get(0));\n\t\t\tsetBodyCursorToEnd($('.filler').get(0));\n\t\t}\n\t}\n\n\tfunction autoLink(composeView) {\n\t\tvar originalText = composeView.getTextContent();\n\t\tif (originalText.match(/(\\$date)/gi)) {\n\t\t\tcomposeView.insertLinkChipIntoBodyAtCursor('Select time and day', '#', 'https://cdn4.iconfinder.com/data/icons/finance-and-banking-free/64/Finance_financial_planning-32.png');\n\t\t\t//composeView.insertLinkIntoBodyAtCursor('Select time and day', '#');\n\t\t}\n\t}\n\n\tsdk.Compose.registerComposeViewHandler(function (composeView) {\n\t\tvar composeBody = document.getElementById(':oy');\n\t\tvar composeSubject = document.getElementById(':nv');\n\t\t$('.editable').on('input', function () {\n\t\t\t//$('#\\\\:oy').text('Hello world');\n\t\t\t//autoLink(composeView);\n\t\t\tcalendarKeyWord(composeView);\n\t\t});\n\t});\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJJbmJveFNESy5sb2FkKCcxLjAnLCAnc2RrX2dtYWlsQ2FsUGx1Z2luXzg2NjI1NmYwODQnKS50aGVuKGZ1bmN0aW9uKHNkayl7XHJcblxyXG5cdGZ1bmN0aW9uIHNldEJvZHlDdXJzb3JUb0VuZChlbGUpIHtcclxuXHRcdGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcblx0XHRsZXQgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG5cdFx0cmFuZ2Uuc2V0U3RhcnQgPSByYW5nZS5zZXRTdGFydChlbGUsIDEpO1xyXG5cdFx0cmFuZ2UuY29sbGFwc2UodHJ1ZSk7XHJcblx0XHRzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcblx0XHRzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG5cdFx0ZWxlLmZvY3VzKCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjYWxlbmRhcktleVdvcmQoY29tcG9zZVZpZXcpIHtcclxuXHRcdGxldCBvcmlnaW5hbEhUTUwgPSBjb21wb3NlVmlldy5nZXRIVE1MQ29udGVudCgpO1xyXG5cdFx0Ly8gZWRpdCB0aGUgcmVnZXggYW5kIHJlcGxhY2Ugc3RyIGFmdGVyIGRhdGUgaGFzIGJlZW4gc2VsZWN0ZWQgXHJcblx0XHRpZiAob3JpZ2luYWxIVE1MLm1hdGNoKC8oXFwkZGF0ZSkvZ2kpKSB7XHJcblx0XHRcdGxldCBsaW5raWZ5SFRNTCA9IG9yaWdpbmFsSFRNTC5yZXBsYWNlKC8oXFwkZGF0ZSkvZ2ksICc8YnIgLz48aWZyYW1lIHNyYz1cImh0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhci9lbWJlZD9zaG93VGl0bGU9MCZhbXA7c2hvd1ByaW50PTAmYW1wO21vZGU9QUdFTkRBJmFtcDtoZWlnaHQ9MTUwJmFtcDt3a3N0PTEmYW1wO2JnY29sb3I9JTIzRkZGRkZGJmFtcDtzcmM9Y2h1emk5MjglNDBnbWFpbC5jb20mYW1wO2NvbG9yPSUyMzI5NTJBMyZhbXA7Y3R6PUFtZXJpY2ElMkZMb3NfQW5nZWxlc1wiIHN0eWxlPVwiYm9yZGVyLXdpZHRoOjBcIiB3aWR0aD1cIjQyMFwiIGhlaWdodD1cIjMwMFwiIGZyYW1lYm9yZGVyPVwiMFwiIHNjcm9sbGluZz1cIm5vXCI+PC9pZnJhbWU+PGJyIC8+PGRpdiBjbGFzcz1cImZpbGxlclwiIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIj4gPC9kaXY+Jyk7XHJcblxyXG5cdFx0XHRjb21wb3NlVmlldy5zZXRCb2R5SFRNTChsaW5raWZ5SFRNTCk7XHJcblx0XHRcdC8vY29tcG9zZVZpZXcuaW5zZXJ0TGlua0NoaXBJbnRvQm9keUF0Q3Vyc29yKCdTZWxlY3QgdGltZSBhbmQgZGF5JywgJyMnLCAnaHR0cHM6Ly9jZG40Lmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvZmluYW5jZS1hbmQtYmFua2luZy1mcmVlLzY0L0ZpbmFuY2VfZmluYW5jaWFsX3BsYW5uaW5nLTMyLnBuZycpOyBcclxuXHRcdFx0Ly9zZXRCb2R5Q3Vyc29yVG9FbmQoJCgnLmluYm94c2RrX19jb21wb3NlX2xpbmtDaGlwJykuZ2V0KDApKTtcclxuXHRcdFx0c2V0Qm9keUN1cnNvclRvRW5kKCQoJy5maWxsZXInKS5nZXQoMCkpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGF1dG9MaW5rKGNvbXBvc2VWaWV3KSB7XHJcblx0XHRsZXQgb3JpZ2luYWxUZXh0ID0gY29tcG9zZVZpZXcuZ2V0VGV4dENvbnRlbnQoKTtcclxuXHRcdGlmIChvcmlnaW5hbFRleHQubWF0Y2goLyhcXCRkYXRlKS9naSkpIHtcclxuXHRcdFx0Y29tcG9zZVZpZXcuaW5zZXJ0TGlua0NoaXBJbnRvQm9keUF0Q3Vyc29yKCdTZWxlY3QgdGltZSBhbmQgZGF5JywgJyMnLCAnaHR0cHM6Ly9jZG40Lmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvZmluYW5jZS1hbmQtYmFua2luZy1mcmVlLzY0L0ZpbmFuY2VfZmluYW5jaWFsX3BsYW5uaW5nLTMyLnBuZycpOyBcclxuXHRcdFx0Ly9jb21wb3NlVmlldy5pbnNlcnRMaW5rSW50b0JvZHlBdEN1cnNvcignU2VsZWN0IHRpbWUgYW5kIGRheScsICcjJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0c2RrLkNvbXBvc2UucmVnaXN0ZXJDb21wb3NlVmlld0hhbmRsZXIoZnVuY3Rpb24oY29tcG9zZVZpZXcpe1xyXG5cdFx0bGV0IGNvbXBvc2VCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzpveScpO1xyXG5cdFx0bGV0IGNvbXBvc2VTdWJqZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzpudicpO1xyXG5cdFx0JCgnLmVkaXRhYmxlJykub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vJCgnI1xcXFw6b3knKS50ZXh0KCdIZWxsbyB3b3JsZCcpO1xyXG5cdFx0XHQvL2F1dG9MaW5rKGNvbXBvc2VWaWV3KTtcclxuXHRcdFx0Y2FsZW5kYXJLZXlXb3JkKGNvbXBvc2VWaWV3KTtcclxuXHRcdH0pOyBcclxuXHR9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);