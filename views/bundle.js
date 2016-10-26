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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImluZGV4LmpzIiwianNcXHJlbmRlci5qcyIsImpzXFx3ZWJzb2NrZXQuanMiLCJsaWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBOztBQUNBOztBQUZBO0FBSUE7QUFDQSxvQkFBTyxNQUFQOzs7Ozs7OztRQ09nQixNLEdBQUEsTTs7QUFYaEI7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDTyxTQUFTLE1BQVQsQ0FBZ0IsRUFBaEIsRUFBb0I7QUFDMUI7QUFDQSxLQUFJLE9BQU8sU0FBUyxhQUFULE9BQTJCLEVBQTNCLEVBQWlDLE9BQTVDO0FBQ0E7QUFDQSxLQUFJLEtBQUssUUFBTCxDQUFjLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDN0I7QUFDQSxPQUFLLElBQUksSUFBSSxLQUFLLFFBQUwsQ0FBYyxNQUFkLEdBQXVCLENBQXBDLEVBQXVDLEtBQUssQ0FBNUMsRUFBK0MsR0FBL0MsRUFBb0Q7QUFDbkQ7QUFDQTtBQUNBLE9BQUksT0FBTyxLQUFLLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLFdBQTVCO0FBQ0E7QUFDQSxPQUFJLFVBQVUsS0FBSyxNQUFMLENBQVksS0FBSyxPQUFMLENBQWEsSUFBYixDQUFaLEVBQWdDLEtBQUssT0FBTCxDQUFhLElBQWIsSUFBcUIsQ0FBckQsQ0FBZDtBQUNBO0FBQ0EsT0FBSSxPQUFPLEtBQUssTUFBTCxDQUFZLEtBQUssT0FBTCxDQUFhLElBQWIsSUFBcUIsQ0FBakMsRUFBcUMsS0FBSyxPQUFMLENBQWEsSUFBYixJQUFxQixDQUExRCxDQUFYO0FBQ0E7QUFDQSxPQUFJLFNBQVMsTUFBYjtBQUNBLFdBQVEsR0FBUixDQUFZLHFCQUFLLE9BQUwsQ0FBWjtBQUNBLFdBQVEsR0FBUixDQUFZLHFCQUFLLElBQUwsQ0FBWjtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0QsQyxDQWxDRDs7Ozs7Ozs7UUNzQmdCLEksR0FBQSxJO0FBdEJoQjs7QUFFQTtBQUNBLElBQUksS0FBSyxJQUFJLFNBQUosQ0FBYyx1QkFBZCxDQUFUO0FBQ0E7QUFDQSxJQUFJLGNBQWMsSUFBbEI7O0FBRUE7QUFDQSxHQUFHLFNBQUgsR0FBZSxVQUFDLE9BQUQsRUFBYTtBQUMzQjtBQUNBO0FBQ0EsZUFBYyxRQUFRLElBQXRCO0FBQ0EsQ0FKRDs7QUFNQTtBQUNBO0FBQ0EsU0FBUyxRQUFULENBQWtCLE9BQWxCLEVBQTJCLEdBQTNCLEVBQWdDO0FBQy9CLEtBQUksR0FBRyxVQUFILElBQWlCLENBQXJCLEVBQXdCLE9BQU8sS0FBUCxDQUF4QixLQUNLLE9BQU8sSUFBUDtBQUNMOztBQUVEO0FBQ08sU0FBUyxJQUFULENBQWMsT0FBZCxFQUF1QjtBQUM3QixLQUFJLE9BQUosQ0FBWSxVQUFDLFFBQUQsRUFBYyxDQUV6QixDQUZEO0FBR0E7QUFDQTtBQUNBLEtBQUksWUFBWSxZQUFZLFlBQU07QUFDakM7QUFDQSxNQUFJLFVBQUosRUFBZ0I7QUFDZjtBQUNBLE1BQUcsSUFBSCxDQUFRLE9BQVI7QUFDQTtBQUNBO0FBQ0EsT0FBSSxZQUFZLFlBQVksWUFBTTtBQUNqQztBQUNBLFlBQVEsR0FBUixDQUFZLEdBQVo7QUFDQSxRQUFJLGVBQWUsSUFBbkIsRUFBeUI7QUFDeEIsYUFBUSxHQUFSLENBQVksR0FBWjtBQUNBO0FBQ0EsU0FBSSx1QkFBdUIsV0FBM0I7QUFDQSxtQkFBYyxJQUFkO0FBQ0E7QUFDQSxZQUFPLG9CQUFQO0FBQ0E7QUFDRDtBQUNBLGtCQUFjLFNBQWQ7QUFDRDtBQUNDLElBZGUsRUFjYixHQWRhLENBQWhCO0FBZUE7QUFDQSxpQkFBYyxTQUFkO0FBQ0E7QUFDRCxFQXpCZSxFQXlCYixHQXpCYSxDQUFoQjtBQTBCQTs7Ozs7Ozs7UUNyRGUsQyxHQUFBLEM7QUFEaEI7QUFDTyxTQUFTLENBQVQsR0FBYTtBQUNuQixTQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gaW5kZXguanNcclxuaW1wb3J0IHthfSBmcm9tICcuL2xpYi5qcyc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICcuL2pzL3JlbmRlci5qcyc7XHJcblxyXG5hKCk7XHJcbnJlbmRlcihcIm1haW5cIik7IiwiLy8gcmVuZGVyLmpzXHJcbmltcG9ydCB7c2VuZH0gZnJvbSAnLi93ZWJzb2NrZXQuanMnO1xyXG5cclxuLypcclxudmFyIHJlbmRlcjtcclxudmFyIG5vZGVzID0gW107XHJcblxyXG5mdW5jdGlvbiBhcHBseSgpIHtcclxuXHRhLnN1YnN0cihhLmluZGV4T2YoXCJ7e1wiKSwgYS5pbmRleE9mKFwifX1cIikgKyAyKTtcclxufSovXHJcblxyXG4vLyBmb3IgbW9yZSBpbmZvcm1hdGlvbiByZWFkIGFib3V0IERPTVxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGlkKSB7XHJcblx0Ly8gZ2V0IHRlbXBsYXRlIG5vZGUgYnkgaWRcclxuXHR2YXIgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApLmNvbnRlbnQ7XHJcblx0Ly8gaWYgaGF2ZSBjaGlsZHJlblxyXG5cdGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuXHRcdC8vIGZvciBlYWNoIGNoaWxkIFxyXG5cdFx0Zm9yICh2YXIgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0Ly8gZ2V0IHRleHQgb2Ygbm9kZSBhbmQgZGlzY292ZXIgdGhlIGNob2NvIHZhcmlhYmxlIFxyXG5cdFx0XHQvLyBmb3IgYWZ0ZXIgYmUgcHJvY2Vzc2VkXHJcblx0XHRcdHZhciB0ZXh0ID0gbm9kZS5jaGlsZHJlbltpXS50ZXh0Q29udGVudDtcclxuXHRcdFx0Ly8gc3BhY2Ugb2YgY2hvY28gdmFyaWFibGUgZm9yIGFmdGVyIGJlIHJlcGxhY2VkXHJcblx0XHRcdHZhciByZXBsYWNlID0gdGV4dC5zdWJzdHIodGV4dC5pbmRleE9mKFwie3tcIiksIHRleHQuaW5kZXhPZihcIn19XCIpICsgMik7XHJcblx0XHRcdC8vIG5hbWUgb2YgY2hvY28gdmFyaWFibGVcclxuXHRcdFx0dmFyIG5hbWUgPSB0ZXh0LnN1YnN0cih0ZXh0LmluZGV4T2YoXCJ7e1wiKSArIDIgLCB0ZXh0LmluZGV4T2YoXCJ9fVwiKSAtIDIpO1xyXG5cdFx0XHQvLyBleHRlcm5hbChuYW1lKTtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IFwidGVzdFwiO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhzZW5kKHJlcGxhY2UpKTtcclxuXHRcdFx0Y29uc29sZS5sb2coc2VuZChuYW1lKSk7XHJcblx0XHRcdC8vaWYgKG5vZGUuaGFzQ2hpbGROb2RlcygpKVxyXG5cdFx0XHQvL25vZGUuY2hpbGRyZW5baV0udGV4dENvbnRlbnQgPSB0ZXh0LnJlcGxhY2UocmVwbGFjZSwgcmVzdWx0KTtcclxuXHRcdH1cclxuXHR9XHRcdFxyXG59IiwiLy8gd2Vic29ja2V0LmpzXHJcblxyXG4vLyBpbnN0YW50ZSBvZiBXZWJTb2NrZXQgQVBJXHJcbnZhciB3cyA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdC9zb2NrZXRcIik7XHJcbi8vIHNpZGUgZm9yIG1lc3NhZ2Ugb2YgV2ViU29ja2V0XHJcbnZhciB0bXBfbWVzc2FnZSA9IG51bGw7XHJcblxyXG4vLyBvbiBtZXNzYWdlIHJlY2VpdmVcclxud3Mub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuXHQvLyB0aGUgZGF0YSBhdHRyaWJ1dGUgb2Ygb2JqZWN0IHNlbmQgYnkgdGhlIHNlcnZlclxyXG5cdC8vIGlzIHNhdmUgaW50byB0bXBfbWVzc2FnZVxyXG5cdHRtcF9tZXNzYWdlID0gbWVzc2FnZS5kYXRhXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGlzIHVzZSBpbiB0aGUgbW9tZW50IHdlbnQgeW91IGNhbiBrbm93IFxyXG4vLyBpZiB3ZWJzb2NrZXQgaXMgcmVhZHkgdG8gdXNlIGFmdGVyIHRoaXNcclxuZnVuY3Rpb24gaXNfcmVhZHkoc3VjY2VzcywgZXJyKSB7XHJcblx0aWYgKHdzLnJlYWR5U3RhdGUgPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG5cdGVsc2UgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gc2VuZCBmb3IgZXh0ZXJuYWwgdXNlcyBvZiBtb2R1bGVcclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmQobWVzc2FnZSkge1xyXG5cdG5ldyBQcm9taXNlKChjYWxsYmFjaykgPT4ge1xyXG5cclxuXHR9KTtcclxuXHQvLyBzZXQgYSBpbnRlcnZhbCBkYXRhIGZvciBhZnRlciBvZiB3ZWJzb2NrZXQgaXMgcmVhZHlcclxuXHQvLyBiZSB1c2VkXHJcblx0dmFyIGludGVydmFsMSA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdC8vIGlmIHdlYnNvY2tldCBpcyByZWFkeVxyXG5cdFx0aWYgKGlzX3JlYWR5KCkpIHtcclxuXHRcdFx0Ly8gc2VuZCBhIGV4dGVybmFsIGRhdGEgZm9yIFdlU29ja2V0XHJcblx0XHRcdHdzLnNlbmQobWVzc2FnZSk7XHJcblx0XHRcdC8vIHNldCBhIGludGVydmFsIGRhdGEgZm9yIGFmdGVyIHJlc3BvbnNlIGFuZCB0aGlzIGJlXHJcblx0XHRcdC8vIHJlbW92ZVxyXG5cdFx0XHR2YXIgaW50ZXJ2YWwyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIGlmIHRlbXAgc2lkZSBvZiBtZXNzYWdlIGlzIG5vdCBudWxsXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCIxXCIpO1xyXG5cdFx0XHRcdGlmICh0bXBfbWVzc2FnZSAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIjJcIik7XHJcblx0XHRcdFx0XHQvLyBmb3IgYWZ0ZXIgY2xlYXIgdGVtcCBzaWRlIG9mIG1lc3NhZ2VcclxuXHRcdFx0XHRcdHZhciB0bXBfZW5kcG9pbnRfbWVzc2FnZSA9IHRtcF9tZXNzYWdlO1xyXG5cdFx0XHRcdFx0dG1wX21lc3NhZ2UgPSBudWxsO1xyXG5cdFx0XHRcdFx0Ly8gZm9yIG5vdyBiZSByZXR1cm5lZFxyXG5cdFx0XHRcdFx0cmV0dXJuIHRtcF9lbmRwb2ludF9tZXNzYWdlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBpbnRlcnZhbDIgaXMgcmVtb3ZlXHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbDIpO1xyXG5cdFx0XHQvLyB0aGlzIGludGVydmFsIGlzIGVxdWFsIGF0IDEwMCBtc1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0XHQvLyBpbnRlcnZhbDEgaXMgcmVtb3ZlXHJcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcclxuXHRcdH1cclxuXHR9LCAxMDApO1xyXG59IiwiLy8gbGliLmpzXHJcbmV4cG9ydCBmdW5jdGlvbiBhKCkge1xyXG5cdGNvbnNvbGUubG9nKFwiYVwiKTtcclxufSJdfQ==
