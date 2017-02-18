// websocket.js

var host = "localhost";
var port = 3000;
var uri  = "";
var tmp_message;

// instante of WebSocket API
var ws = new Promise((success) => {
	var socket = new WebSocket(`ws://${host}:${port}/${uri}`);
	socket.onopen = (message) => {
		console.log("welcome");
	}
	socket.onmessage = (message) => {
		console.log("message: " + message);
	}
	socket.onerror = (message) => {
		console.log("error: " + message);
	}
	success(socket);
});


ws.then((success) => {
	ws.onopen = (message) => {
		console.log("welcome");
	}
	ws.onmessage = (message) => {
		console.log("message: " + message);
	}
	ws.onerror = (message) => {
		console.log("error: " + message);
	}
});


export function send(text) {
	ws.then((result) => {
		result.send(text);
	});
}