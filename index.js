"use strict"; 
var https = require('https');
var http = require('http');
var websocket = require('websocket-driver');
var fs = require('fs');
var url = require("url");
var path = require('path');
var mime = require('mime');
var EventEmitter = require("events").EventEmitter;
var util = require("util");
var root = {};
var options = {
	cert: fs.readFileSync('ssl/localhost.public.pem'),
	key: fs.readFileSync('ssl/localhost.private.pem')
};

class Public {
	constructor(dir, _path) {
		if (typeof dir != 'string') throw '"directory" argument is not string'; 
		EventEmitter.call(this);
		this.dir = {};
		this.path = dir;
		this.port = null;
		this.ready = false;
		if (dir) {
			if (_path) {
				this.ready = this.add(dir, _path);
				var interval = setInterval(() => {
					if (this.ready) {
						this.emit("ready", root);
						clearInterval(interval);
					}
				}, 500);
			}
			else {
				this.ready = this.add(dir);
				var interval = setInterval(() => {
					if (this.ready) {
						this.emit("ready", root);
						clearInterval(interval);
					}
				}, 500);
			}
		}
	}
	add(dir, path) {
		if (typeof dir != 'string') throw '"directory" argument is not string'; 
		path = path || '';
		var _path = path;
		path = this.toArray(path);
		/*while (path[0] == '') {
			path.reverse();
			path.pop();
			path.reverse();
		}*/
		var command = 'root';
		
		command = this.join(command, path);
		if (fs.lstatSync(dir).isDirectory()) {
			var folder = fs.readdirSync(dir);
			var folder = fs.readdir(dir, (err, folder) => {
			//if (err) throw err;
			
			for (var i in folder) {
				//root[]
				if (fs.lstatSync(dir + '/' + folder[i]).isFile())
					//fs.readFile(dir + '/' + folder[i], (err, data) => {
						//if (err) throw err;
						//eval(command + '["' + folder[i] + '"] = data;');
					//});
					eval(command + '["' + folder[i] + '"] = fs.readFileSync("' + dir + '/' + folder[i] + '");');
				else {
					eval(command + '["' + folder[i] + '"] = {};');
					this.add(dir + '/' + folder[i], _path + '/' + folder[i]);
				}
				//var file = dir + '/' + folder[i];
				//this.add(dir + '/' + folder[i], _path + '/' + folder[i]);
			}
			//this.dir[path != '' ? path : '/'] = folder;
			});
			//console.log(root);
		}
		return true;
	}
	join(string, array) {
		if (array.length != 0) {
			for (var i in array) {
				string += '["' + array[i] + '"]';
			}
		}
		return string;
	}
	toArray(string) {
		if (!string)
			return [];
		else
			string = string.split("/");
		if (string[0] == "")
			string = string.splice(1,string.length);
		if (url[0] == "#!")
			string = string.splice(1,string.length);
		if (string[0] == "")
			string = string.splice(1,string.length);
		if (string[string.length-1] == "")
			string.pop();
		if (string[string.length-1] == "")
			return [];
		return string;
	}
	toString(array) {
		if (array.length == 0) 
			return '/';
		else {
			array.reverse();
			array.push('');
			array.reverse();
			array = array.join('/');
			return array;
		}
	}
	request(url) {
		if (typeof url != 'string') throw '"url" argument is not string'; 

		// convert spaces
		url = url.split('%20');
		url = url.join(' ');

		var folder = this.toArray(url);
		var check = this.join('root', folder);
		if (typeof eval(check) == 'object') return check;
		else return undefined;
	}
}
util.inherits(Public, EventEmitter);
var folder = new Public('./views');

folder.on("ready", (res) => {
	var server = http.createServer(/*options, */function(request, response) {
		var pathname= url.parse(request.url).pathname;

		console.log('\x1b[32m' + request.headers.host + '\x1b[0m' + ' \x1b[36m' + 
			request.method + '\x1b[0m' + ' \x1b[39m' + pathname + '\x1b[0m'
			/*+" through HTTP "+ request.httpVersion*/);

		var file = folder.request(pathname != '/' ? pathname : '/index.html');
		if (file != undefined) {
			response.writeHead(200, {"Content-Type": mime.lookup(pathname != '/' ? pathname : '/index.html')});
			response.write(eval(file));
			response.end();
		}
	});
	server.listen(80, function() {
		console.log("server started on port " + this.address().port + "\n\n");
	});

	server.on('upgrade', function(request, socket, body) {
		if (!websocket.isWebSocket(request)) return;

		var driver = websocket.http(request);

		driver.io.write(body);
		socket.pipe(driver.io).pipe(socket);

		driver.messages.on('data', function(message) {
			console.log('Got a message', message);
			driver.text('Got a message ' + message);
		});

		driver.start();
	});
/*
	var redirect = http.createServer(function(request, response) {
		var pathname= url.parse(request.url).pathname;
		response.writeHead(302, {'Location': 'https://localhost' + pathname});
		response.end();
	});
	redirect.listen(80);
*/
});
