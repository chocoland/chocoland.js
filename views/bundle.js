(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _lib = require('./lib.js');

var _render = require('./js/render.js');

// index.js
(0, _lib.a)();
(0, _render.render)("main");

},{"./js/render.js":2,"./lib.js":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.render = render;

var _websocket = require("./websocket.js");

/*
var render;
var nodes = [];

function apply() {
	a.substr(a.indexOf("{{"), a.indexOf("}}") + 2);
}*/

// for more information read about DOM
function render(id) {
	// get template node by id
	var node = document.querySelector("#" + id).content;
	// if have children
	if (node.children.length > 0) {
		// for each child 
		for (var i = node.children.length - 1; i >= 0; i--) {
			// get text of node and discover the choco variable 
			// for after be processed
			var text = node.children[i].textContent;
			// space of choco variable for after be replaced
			var replace = text.substr(text.indexOf("{{"), text.indexOf("}}") + 2);
			// name of choco variable
			var name = text.substr(text.indexOf("{{") + 2, text.indexOf("}}") - 2);
			// external(name);
			var result = "test";
			console.log((0, _websocket.send)(replace));
			console.log((0, _websocket.send)(name));
			//if (node.hasChildNodes())
			//node.children[i].textContent = text.replace(replace, result);
		}
	}
} // render.js

},{"./websocket.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.send = send;
// websocket.js

// instante of WebSocket API
var ws = new WebSocket("ws://localhost/socket");
// side for message of WebSocket
var tmp_message = null;

// on message receive
ws.onmessage = function (message) {
	// the data attribute of object send by the server
	// is save into tmp_message
	tmp_message = message.data;
};

// function is use in the moment went you can know 
// if websocket is ready to use after this
function is_ready(success, err) {
	if (ws.readyState == 0) return false;else return true;
}

// function send for external uses of module
function send(message) {
	new Promise(function (callback) {});
	// set a interval data for after of websocket is ready
	// be used
	var interval1 = setInterval(function () {
		// if websocket is ready
		if (is_ready()) {
			// send a external data for WeSocket
			ws.send(message);
			// set a interval data for after response and this be
			// remove
			var interval2 = setInterval(function () {
				// if temp side of message is not null
				console.log("1");
				if (tmp_message != null) {
					console.log("2");
					// for after clear temp side of message
					var tmp_endpoint_message = tmp_message;
					tmp_message = null;
					// for now be returned
					return tmp_endpoint_message;
				}
				// interval2 is remove
				clearInterval(interval2);
				// this interval is equal at 100 ms
			}, 100);
			// interval1 is remove
			clearInterval(interval1);
		}
	}, 100);
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.a = a;
// lib.js
function a() {
	console.log("a");
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImluZGV4LmpzIiwianMvcmVuZGVyLmpzIiwianMvd2Vic29ja2V0LmpzIiwibGliLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTs7QUFDQTs7QUFGQTtBQUlBO0FBQ0Esb0JBQU8sTUFBUDs7Ozs7Ozs7UUNPZ0IsTSxHQUFBLE07O0FBWGhCOztBQUVBOzs7Ozs7OztBQVFBO0FBQ08sU0FBUyxNQUFULENBQWdCLEVBQWhCLEVBQW9CO0FBQzFCO0FBQ0EsS0FBSSxPQUFPLFNBQVMsYUFBVCxPQUEyQixFQUEzQixFQUFpQyxPQUE1QztBQUNBO0FBQ0EsS0FBSSxLQUFLLFFBQUwsQ0FBYyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzdCO0FBQ0EsT0FBSyxJQUFJLElBQUksS0FBSyxRQUFMLENBQWMsTUFBZCxHQUF1QixDQUFwQyxFQUF1QyxLQUFLLENBQTVDLEVBQStDLEdBQS9DLEVBQW9EO0FBQ25EO0FBQ0E7QUFDQSxPQUFJLE9BQU8sS0FBSyxRQUFMLENBQWMsQ0FBZCxFQUFpQixXQUE1QjtBQUNBO0FBQ0EsT0FBSSxVQUFVLEtBQUssTUFBTCxDQUFZLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBWixFQUFnQyxLQUFLLE9BQUwsQ0FBYSxJQUFiLElBQXFCLENBQXJELENBQWQ7QUFDQTtBQUNBLE9BQUksT0FBTyxLQUFLLE1BQUwsQ0FBWSxLQUFLLE9BQUwsQ0FBYSxJQUFiLElBQXFCLENBQWpDLEVBQXFDLEtBQUssT0FBTCxDQUFhLElBQWIsSUFBcUIsQ0FBMUQsQ0FBWDtBQUNBO0FBQ0EsT0FBSSxTQUFTLE1BQWI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxxQkFBSyxPQUFMLENBQVo7QUFDQSxXQUFRLEdBQVIsQ0FBWSxxQkFBSyxJQUFMLENBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNELEMsQ0FsQ0Q7Ozs7Ozs7O1FDc0JnQixJLEdBQUEsSTtBQXRCaEI7O0FBRUE7QUFDQSxJQUFJLEtBQUssSUFBSSxTQUFKLENBQWMsdUJBQWQsQ0FBVDtBQUNBO0FBQ0EsSUFBSSxjQUFjLElBQWxCOztBQUVBO0FBQ0EsR0FBRyxTQUFILEdBQWUsVUFBQyxPQUFELEVBQWE7QUFDM0I7QUFDQTtBQUNBLGVBQWMsUUFBUSxJQUF0QjtBQUNBLENBSkQ7O0FBTUE7QUFDQTtBQUNBLFNBQVMsUUFBVCxDQUFrQixPQUFsQixFQUEyQixHQUEzQixFQUFnQztBQUMvQixLQUFJLEdBQUcsVUFBSCxJQUFpQixDQUFyQixFQUF3QixPQUFPLEtBQVAsQ0FBeEIsS0FDSyxPQUFPLElBQVA7QUFDTDs7QUFFRDtBQUNPLFNBQVMsSUFBVCxDQUFjLE9BQWQsRUFBdUI7QUFDN0IsS0FBSSxPQUFKLENBQVksVUFBQyxRQUFELEVBQWMsQ0FFekIsQ0FGRDtBQUdBO0FBQ0E7QUFDQSxLQUFJLFlBQVksWUFBWSxZQUFNO0FBQ2pDO0FBQ0EsTUFBSSxVQUFKLEVBQWdCO0FBQ2Y7QUFDQSxNQUFHLElBQUgsQ0FBUSxPQUFSO0FBQ0E7QUFDQTtBQUNBLE9BQUksWUFBWSxZQUFZLFlBQU07QUFDakM7QUFDQSxZQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0EsUUFBSSxlQUFlLElBQW5CLEVBQXlCO0FBQ3hCLGFBQVEsR0FBUixDQUFZLEdBQVo7QUFDQTtBQUNBLFNBQUksdUJBQXVCLFdBQTNCO0FBQ0EsbUJBQWMsSUFBZDtBQUNBO0FBQ0EsWUFBTyxvQkFBUDtBQUNBO0FBQ0Q7QUFDQSxrQkFBYyxTQUFkO0FBQ0Q7QUFDQyxJQWRlLEVBY2IsR0FkYSxDQUFoQjtBQWVBO0FBQ0EsaUJBQWMsU0FBZDtBQUNBO0FBQ0QsRUF6QmUsRUF5QmIsR0F6QmEsQ0FBaEI7QUEwQkE7Ozs7Ozs7O1FDckRlLEMsR0FBQSxDO0FBRGhCO0FBQ08sU0FBUyxDQUFULEdBQWE7QUFDbkIsU0FBUSxHQUFSLENBQVksR0FBWjtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGluZGV4LmpzXG5pbXBvcnQge2F9IGZyb20gJy4vbGliLmpzJztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICcuL2pzL3JlbmRlci5qcyc7XG5cbmEoKTtcbnJlbmRlcihcIm1haW5cIik7IiwiLy8gcmVuZGVyLmpzXG5pbXBvcnQge3NlbmR9IGZyb20gJy4vd2Vic29ja2V0LmpzJztcblxuLypcbnZhciByZW5kZXI7XG52YXIgbm9kZXMgPSBbXTtcblxuZnVuY3Rpb24gYXBwbHkoKSB7XG5cdGEuc3Vic3RyKGEuaW5kZXhPZihcInt7XCIpLCBhLmluZGV4T2YoXCJ9fVwiKSArIDIpO1xufSovXG5cbi8vIGZvciBtb3JlIGluZm9ybWF0aW9uIHJlYWQgYWJvdXQgRE9NXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGlkKSB7XG5cdC8vIGdldCB0ZW1wbGF0ZSBub2RlIGJ5IGlkXG5cdHZhciBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuY29udGVudDtcblx0Ly8gaWYgaGF2ZSBjaGlsZHJlblxuXHRpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0Ly8gZm9yIGVhY2ggY2hpbGQgXG5cdFx0Zm9yICh2YXIgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdC8vIGdldCB0ZXh0IG9mIG5vZGUgYW5kIGRpc2NvdmVyIHRoZSBjaG9jbyB2YXJpYWJsZSBcblx0XHRcdC8vIGZvciBhZnRlciBiZSBwcm9jZXNzZWRcblx0XHRcdHZhciB0ZXh0ID0gbm9kZS5jaGlsZHJlbltpXS50ZXh0Q29udGVudDtcblx0XHRcdC8vIHNwYWNlIG9mIGNob2NvIHZhcmlhYmxlIGZvciBhZnRlciBiZSByZXBsYWNlZFxuXHRcdFx0dmFyIHJlcGxhY2UgPSB0ZXh0LnN1YnN0cih0ZXh0LmluZGV4T2YoXCJ7e1wiKSwgdGV4dC5pbmRleE9mKFwifX1cIikgKyAyKTtcblx0XHRcdC8vIG5hbWUgb2YgY2hvY28gdmFyaWFibGVcblx0XHRcdHZhciBuYW1lID0gdGV4dC5zdWJzdHIodGV4dC5pbmRleE9mKFwie3tcIikgKyAyICwgdGV4dC5pbmRleE9mKFwifX1cIikgLSAyKTtcblx0XHRcdC8vIGV4dGVybmFsKG5hbWUpO1xuXHRcdFx0dmFyIHJlc3VsdCA9IFwidGVzdFwiO1xuXHRcdFx0Y29uc29sZS5sb2coc2VuZChyZXBsYWNlKSk7XG5cdFx0XHRjb25zb2xlLmxvZyhzZW5kKG5hbWUpKTtcblx0XHRcdC8vaWYgKG5vZGUuaGFzQ2hpbGROb2RlcygpKVxuXHRcdFx0Ly9ub2RlLmNoaWxkcmVuW2ldLnRleHRDb250ZW50ID0gdGV4dC5yZXBsYWNlKHJlcGxhY2UsIHJlc3VsdCk7XG5cdFx0fVxuXHR9XHRcdFxufSIsIi8vIHdlYnNvY2tldC5qc1xuXG4vLyBpbnN0YW50ZSBvZiBXZWJTb2NrZXQgQVBJXG52YXIgd3MgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly9sb2NhbGhvc3Qvc29ja2V0XCIpO1xuLy8gc2lkZSBmb3IgbWVzc2FnZSBvZiBXZWJTb2NrZXRcbnZhciB0bXBfbWVzc2FnZSA9IG51bGw7XG5cbi8vIG9uIG1lc3NhZ2UgcmVjZWl2ZVxud3Mub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcblx0Ly8gdGhlIGRhdGEgYXR0cmlidXRlIG9mIG9iamVjdCBzZW5kIGJ5IHRoZSBzZXJ2ZXJcblx0Ly8gaXMgc2F2ZSBpbnRvIHRtcF9tZXNzYWdlXG5cdHRtcF9tZXNzYWdlID0gbWVzc2FnZS5kYXRhXG59XG5cbi8vIGZ1bmN0aW9uIGlzIHVzZSBpbiB0aGUgbW9tZW50IHdlbnQgeW91IGNhbiBrbm93IFxuLy8gaWYgd2Vic29ja2V0IGlzIHJlYWR5IHRvIHVzZSBhZnRlciB0aGlzXG5mdW5jdGlvbiBpc19yZWFkeShzdWNjZXNzLCBlcnIpIHtcblx0aWYgKHdzLnJlYWR5U3RhdGUgPT0gMCkgcmV0dXJuIGZhbHNlO1xuXHRlbHNlIHJldHVybiB0cnVlXG59XG5cbi8vIGZ1bmN0aW9uIHNlbmQgZm9yIGV4dGVybmFsIHVzZXMgb2YgbW9kdWxlXG5leHBvcnQgZnVuY3Rpb24gc2VuZChtZXNzYWdlKSB7XG5cdG5ldyBQcm9taXNlKChjYWxsYmFjaykgPT4ge1xuXG5cdH0pO1xuXHQvLyBzZXQgYSBpbnRlcnZhbCBkYXRhIGZvciBhZnRlciBvZiB3ZWJzb2NrZXQgaXMgcmVhZHlcblx0Ly8gYmUgdXNlZFxuXHR2YXIgaW50ZXJ2YWwxID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdC8vIGlmIHdlYnNvY2tldCBpcyByZWFkeVxuXHRcdGlmIChpc19yZWFkeSgpKSB7XG5cdFx0XHQvLyBzZW5kIGEgZXh0ZXJuYWwgZGF0YSBmb3IgV2VTb2NrZXRcblx0XHRcdHdzLnNlbmQobWVzc2FnZSk7XG5cdFx0XHQvLyBzZXQgYSBpbnRlcnZhbCBkYXRhIGZvciBhZnRlciByZXNwb25zZSBhbmQgdGhpcyBiZVxuXHRcdFx0Ly8gcmVtb3ZlXG5cdFx0XHR2YXIgaW50ZXJ2YWwyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHQvLyBpZiB0ZW1wIHNpZGUgb2YgbWVzc2FnZSBpcyBub3QgbnVsbFxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIjFcIik7XG5cdFx0XHRcdGlmICh0bXBfbWVzc2FnZSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCIyXCIpO1xuXHRcdFx0XHRcdC8vIGZvciBhZnRlciBjbGVhciB0ZW1wIHNpZGUgb2YgbWVzc2FnZVxuXHRcdFx0XHRcdHZhciB0bXBfZW5kcG9pbnRfbWVzc2FnZSA9IHRtcF9tZXNzYWdlO1xuXHRcdFx0XHRcdHRtcF9tZXNzYWdlID0gbnVsbDtcblx0XHRcdFx0XHQvLyBmb3Igbm93IGJlIHJldHVybmVkXG5cdFx0XHRcdFx0cmV0dXJuIHRtcF9lbmRwb2ludF9tZXNzYWdlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGludGVydmFsMiBpcyByZW1vdmVcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbDIpO1xuXHRcdFx0Ly8gdGhpcyBpbnRlcnZhbCBpcyBlcXVhbCBhdCAxMDAgbXNcblx0XHRcdH0sIDEwMCk7XG5cdFx0XHQvLyBpbnRlcnZhbDEgaXMgcmVtb3ZlXG5cdFx0XHRjbGVhckludGVydmFsKGludGVydmFsMSk7XG5cdFx0fVxuXHR9LCAxMDApO1xufSIsIi8vIGxpYi5qc1xuZXhwb3J0IGZ1bmN0aW9uIGEoKSB7XG5cdGNvbnNvbGUubG9nKFwiYVwiKTtcbn0iXX0=
