(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _render = require("./js/render.js");

var render = _interopRequireWildcard(_render);

var _websocket = require("./js/websocket.js");

var socket = _interopRequireWildcard(_websocket);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//render.render("main");

socket.send("algo");

},{"./js/render.js":2,"./js/websocket.js":3}],2:[function(require,module,exports){
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

var host = "localhost";
var port = 3000;
var uri = "";
var tmp_message;

// instante of WebSocket API
var ws = new Promise(function (success) {
	var socket = new WebSocket("ws://" + host + ":" + port + "/" + uri);
	socket.onopen = function (message) {
		console.log("welcome");
	};
	socket.onmessage = function (message) {
		console.log("message: " + message);
	};
	socket.onerror = function (message) {
		console.log("error: " + message);
	};
	success(socket);
});

ws.then(function (success) {
	ws.onopen = function (message) {
		console.log("welcome");
	};
	ws.onmessage = function (message) {
		console.log("message: " + message);
	};
	ws.onerror = function (message) {
		console.log("error: " + message);
	};
});

function send(text) {
	ws.then(function (result) {
		result.send(text);
	});
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ2aWV3cy9pbmRleC5qcyIsInZpZXdzL2pzL3JlbmRlci5qcyIsInZpZXdzL2pzL3dlYnNvY2tldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0lBQVksTTs7QUFDWjs7SUFBWSxNOzs7O0FBR1o7O0FBRUEsT0FBTyxJQUFQLENBQVksTUFBWjs7Ozs7Ozs7UUNNZ0IsTSxHQUFBLE07O0FBWGhCOztBQUVBOzs7Ozs7OztBQVFBO0FBQ08sU0FBUyxNQUFULENBQWdCLEVBQWhCLEVBQW9CO0FBQzFCO0FBQ0EsS0FBSSxPQUFPLFNBQVMsYUFBVCxPQUEyQixFQUEzQixFQUFpQyxPQUE1QztBQUNBO0FBQ0EsS0FBSSxLQUFLLFFBQUwsQ0FBYyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzdCO0FBQ0EsT0FBSyxJQUFJLElBQUksS0FBSyxRQUFMLENBQWMsTUFBZCxHQUF1QixDQUFwQyxFQUF1QyxLQUFLLENBQTVDLEVBQStDLEdBQS9DLEVBQW9EO0FBQ25EO0FBQ0E7QUFDQSxPQUFJLE9BQU8sS0FBSyxRQUFMLENBQWMsQ0FBZCxFQUFpQixXQUE1QjtBQUNBO0FBQ0EsT0FBSSxVQUFVLEtBQUssTUFBTCxDQUFZLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBWixFQUFnQyxLQUFLLE9BQUwsQ0FBYSxJQUFiLElBQXFCLENBQXJELENBQWQ7QUFDQTtBQUNBLE9BQUksT0FBTyxLQUFLLE1BQUwsQ0FBWSxLQUFLLE9BQUwsQ0FBYSxJQUFiLElBQXFCLENBQWpDLEVBQXFDLEtBQUssT0FBTCxDQUFhLElBQWIsSUFBcUIsQ0FBMUQsQ0FBWDtBQUNBO0FBQ0EsT0FBSSxTQUFTLE1BQWI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxxQkFBSyxPQUFMLENBQVo7QUFDQSxXQUFRLEdBQVIsQ0FBWSxxQkFBSyxJQUFMLENBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNELEMsQ0FsQ0Q7Ozs7Ozs7O1FDb0NnQixJLEdBQUEsSTtBQXBDaEI7O0FBRUEsSUFBSSxPQUFPLFdBQVg7QUFDQSxJQUFJLE9BQU8sSUFBWDtBQUNBLElBQUksTUFBTyxFQUFYO0FBQ0EsSUFBSSxXQUFKOztBQUVBO0FBQ0EsSUFBSSxLQUFLLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFhO0FBQ2pDLEtBQUksU0FBUyxJQUFJLFNBQUosV0FBc0IsSUFBdEIsU0FBOEIsSUFBOUIsU0FBc0MsR0FBdEMsQ0FBYjtBQUNBLFFBQU8sTUFBUCxHQUFnQixVQUFDLE9BQUQsRUFBYTtBQUM1QixVQUFRLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsRUFGRDtBQUdBLFFBQU8sU0FBUCxHQUFtQixVQUFDLE9BQUQsRUFBYTtBQUMvQixVQUFRLEdBQVIsQ0FBWSxjQUFjLE9BQTFCO0FBQ0EsRUFGRDtBQUdBLFFBQU8sT0FBUCxHQUFpQixVQUFDLE9BQUQsRUFBYTtBQUM3QixVQUFRLEdBQVIsQ0FBWSxZQUFZLE9BQXhCO0FBQ0EsRUFGRDtBQUdBLFNBQVEsTUFBUjtBQUNBLENBWlEsQ0FBVDs7QUFlQSxHQUFHLElBQUgsQ0FBUSxVQUFDLE9BQUQsRUFBYTtBQUNwQixJQUFHLE1BQUgsR0FBWSxVQUFDLE9BQUQsRUFBYTtBQUN4QixVQUFRLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsRUFGRDtBQUdBLElBQUcsU0FBSCxHQUFlLFVBQUMsT0FBRCxFQUFhO0FBQzNCLFVBQVEsR0FBUixDQUFZLGNBQWMsT0FBMUI7QUFDQSxFQUZEO0FBR0EsSUFBRyxPQUFILEdBQWEsVUFBQyxPQUFELEVBQWE7QUFDekIsVUFBUSxHQUFSLENBQVksWUFBWSxPQUF4QjtBQUNBLEVBRkQ7QUFHQSxDQVZEOztBQWFPLFNBQVMsSUFBVCxDQUFjLElBQWQsRUFBb0I7QUFDMUIsSUFBRyxJQUFILENBQVEsVUFBQyxNQUFELEVBQVk7QUFDbkIsU0FBTyxJQUFQLENBQVksSUFBWjtBQUNBLEVBRkQ7QUFHQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgKiBhcyByZW5kZXIgZnJvbSBcIi4vanMvcmVuZGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBzb2NrZXQgZnJvbSBcIi4vanMvd2Vic29ja2V0LmpzXCI7XG5cblxuLy9yZW5kZXIucmVuZGVyKFwibWFpblwiKTtcblxuc29ja2V0LnNlbmQoXCJhbGdvXCIpOyIsIi8vIHJlbmRlci5qc1xuaW1wb3J0IHtzZW5kfSBmcm9tICcuL3dlYnNvY2tldC5qcyc7XG5cbi8qXG52YXIgcmVuZGVyO1xudmFyIG5vZGVzID0gW107XG5cbmZ1bmN0aW9uIGFwcGx5KCkge1xuXHRhLnN1YnN0cihhLmluZGV4T2YoXCJ7e1wiKSwgYS5pbmRleE9mKFwifX1cIikgKyAyKTtcbn0qL1xuXG4vLyBmb3IgbW9yZSBpbmZvcm1hdGlvbiByZWFkIGFib3V0IERPTVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihpZCkge1xuXHQvLyBnZXQgdGVtcGxhdGUgbm9kZSBieSBpZFxuXHR2YXIgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApLmNvbnRlbnQ7XG5cdC8vIGlmIGhhdmUgY2hpbGRyZW5cblx0aWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuXHRcdC8vIGZvciBlYWNoIGNoaWxkIFxuXHRcdGZvciAodmFyIGkgPSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHQvLyBnZXQgdGV4dCBvZiBub2RlIGFuZCBkaXNjb3ZlciB0aGUgY2hvY28gdmFyaWFibGUgXG5cdFx0XHQvLyBmb3IgYWZ0ZXIgYmUgcHJvY2Vzc2VkXG5cdFx0XHR2YXIgdGV4dCA9IG5vZGUuY2hpbGRyZW5baV0udGV4dENvbnRlbnQ7XG5cdFx0XHQvLyBzcGFjZSBvZiBjaG9jbyB2YXJpYWJsZSBmb3IgYWZ0ZXIgYmUgcmVwbGFjZWRcblx0XHRcdHZhciByZXBsYWNlID0gdGV4dC5zdWJzdHIodGV4dC5pbmRleE9mKFwie3tcIiksIHRleHQuaW5kZXhPZihcIn19XCIpICsgMik7XG5cdFx0XHQvLyBuYW1lIG9mIGNob2NvIHZhcmlhYmxlXG5cdFx0XHR2YXIgbmFtZSA9IHRleHQuc3Vic3RyKHRleHQuaW5kZXhPZihcInt7XCIpICsgMiAsIHRleHQuaW5kZXhPZihcIn19XCIpIC0gMik7XG5cdFx0XHQvLyBleHRlcm5hbChuYW1lKTtcblx0XHRcdHZhciByZXN1bHQgPSBcInRlc3RcIjtcblx0XHRcdGNvbnNvbGUubG9nKHNlbmQocmVwbGFjZSkpO1xuXHRcdFx0Y29uc29sZS5sb2coc2VuZChuYW1lKSk7XG5cdFx0XHQvL2lmIChub2RlLmhhc0NoaWxkTm9kZXMoKSlcblx0XHRcdC8vbm9kZS5jaGlsZHJlbltpXS50ZXh0Q29udGVudCA9IHRleHQucmVwbGFjZShyZXBsYWNlLCByZXN1bHQpO1xuXHRcdH1cblx0fVx0XHRcbn0iLCIvLyB3ZWJzb2NrZXQuanNcblxudmFyIGhvc3QgPSBcImxvY2FsaG9zdFwiO1xudmFyIHBvcnQgPSAzMDAwO1xudmFyIHVyaSAgPSBcIlwiO1xudmFyIHRtcF9tZXNzYWdlO1xuXG4vLyBpbnN0YW50ZSBvZiBXZWJTb2NrZXQgQVBJXG52YXIgd3MgPSBuZXcgUHJvbWlzZSgoc3VjY2VzcykgPT4ge1xuXHR2YXIgc29ja2V0ID0gbmV3IFdlYlNvY2tldChgd3M6Ly8ke2hvc3R9OiR7cG9ydH0vJHt1cml9YCk7XG5cdHNvY2tldC5vbm9wZW4gPSAobWVzc2FnZSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwid2VsY29tZVwiKTtcblx0fVxuXHRzb2NrZXQub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcIm1lc3NhZ2U6IFwiICsgbWVzc2FnZSk7XG5cdH1cblx0c29ja2V0Lm9uZXJyb3IgPSAobWVzc2FnZSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiICsgbWVzc2FnZSk7XG5cdH1cblx0c3VjY2Vzcyhzb2NrZXQpO1xufSk7XG5cblxud3MudGhlbigoc3VjY2VzcykgPT4ge1xuXHR3cy5vbm9wZW4gPSAobWVzc2FnZSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwid2VsY29tZVwiKTtcblx0fVxuXHR3cy5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwibWVzc2FnZTogXCIgKyBtZXNzYWdlKTtcblx0fVxuXHR3cy5vbmVycm9yID0gKG1lc3NhZ2UpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcImVycm9yOiBcIiArIG1lc3NhZ2UpO1xuXHR9XG59KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZCh0ZXh0KSB7XG5cdHdzLnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdHJlc3VsdC5zZW5kKHRleHQpO1xuXHR9KTtcbn0iXX0=
