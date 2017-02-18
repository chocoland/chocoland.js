var spdy = require('spdy');
var	fs = require('fs');
var mime = require('mime');
var root = [];
var local = 'views/';

function readFile(file) {
	return new Promise((success, fail) => {
		fs.readFile(file, function (err, data) {
			if (err) {
				console.log(err);
				fail(err);
			}
			success(data);
		});
		//success(fs.readFileSync(file));
	});
}
function assign(i) {
	fs.stat(i, (err, stats) => {
		if (!stats.isDirectory()) {
			var file = readFile(i);
			file.then((success) => {
				root["/" + i.replace(local, "")] = success;
			});	
			file.catch((err) => {
				console.log("err");
			});
		}
	});
}

var watch = require('watch')
watch.watchTree(local, function (f, curr, prev) {
	if (typeof f == "object" && prev === null && curr === null) {
		// Finished walking the tree
		for (i in f) {
			
			assign(i);
		}
	} else if (prev === null) {
		// f is a new file
		for (i in f) {
			assign(f);
		}
	} else if (curr.nlink === 0) {
		// f was removed
		for (i in f) {
			f = f.replace(local, "");
			var index = root.indexOf(f);
			root = root.splice(index, 1);
		}
	} else {
		// f was changed
		for (i in f) {
			assign(f);
		}
	}
	
})
var options = {
	// Private key
	key: fs.readFileSync(__dirname + '/node-http/server.key'),

	// Fullchain file or cert file (prefer the former)
	cert: fs.readFileSync(__dirname + '/node-http/server.crt')
};

var server = spdy.createServer(options, function(req, res) {
	var url = req.url;
	//res.writeHead(200, {"Content-Type": mime.lookup(url != '/' ? url : '/index.html')});
	if (url.substr(-1) == "/") {
		res.writeHead(200, {"Content-Type": mime.lookup(url + "index.html")});
		res.end(root[url + "index.html"]);
		console.log(url + "index.html");
	}
	else if (root[url]) {
		res.writeHead(200, {"Content-Type": mime.lookup(url)});
		res.end(root[url]);
		console.log(url);
	}
	else {
		res.writeHead(400);
		res.write("error 404");
		res.end();
	}
});

server.listen(443);