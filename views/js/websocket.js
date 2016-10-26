// websocket.js

// instante of WebSocket API
var ws = new WebSocket("ws://localhost/socket");
// side for message of WebSocket
var tmp_message = null;

// on message receive
ws.onmessage = (message) => {
	// the data attribute of object send by the server
	// is save into tmp_message
	tmp_message = message.data
}

// function is use in the moment went you can know 
// if websocket is ready to use after this
function is_ready(success, err) {
	if (ws.readyState == 0) return false;
	else return true
}

// function send for external uses of module
export function send(message) {
	new Promise((callback) => {

	});
	// set a interval data for after of websocket is ready
	// be used
	var interval1 = setInterval(() => {
		// if websocket is ready
		if (is_ready()) {
			// send a external data for WeSocket
			ws.send(message);
			// set a interval data for after response and this be
			// remove
			var interval2 = setInterval(() => {
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