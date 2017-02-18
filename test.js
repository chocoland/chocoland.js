/*var engine = require('engine.io');
var server = engine.listen(3000);

server.on('connection', function(socket){
  socket.send('utf 8 string');
  socket.send(new Buffer([0, 1, 2, 3, 4, 5])); // binary data
});
*/
var http = require('http'),
    websocket = require('websocket-driver');

var server = http.createServer(() => {});

server.on('upgrade', function(request, socket, body) {
  if (!websocket.isWebSocket(request)) return;

  var driver = websocket.http(request);

  driver.io.write(body);
  socket.pipe(driver.io).pipe(socket);

  driver.messages.on('data', function(message) {
    console.log('Got a message', message);
    driver.text("Ok");
  });

  driver.start();
});

server.listen(3000);