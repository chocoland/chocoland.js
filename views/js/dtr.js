/*
 * js/dtr.js - Destiny To Route
 *
 * This is a product create by Jeferson De Freitas
 * from the community of open source
 *
 * This file is released under the GPLv3.
 */

// strict mode
"use strict"; 

class Router {
	constructor() {
		this.hash= "";
		this.routes= [];
		this.isDebug= false;
		this.ms= 333;
		this.request=null;
		this.response=null;
		this.status=null;
		this.sync=true;
	}
	get(url, callback) {
		this.add("GET", url, callback);
	}
	post(url, callback) {
		this.add("POST", url, callback);
	}
	put(url, callback) {
		this.add("PUT", url, callback);
	}
	delete(url, callback) {
		this.add("DELETE", url, callback);
	}
	add(method, url, callback) {
		// allow any order of parameters
		if (typeof url=="function" && typeof callback=="string") {
			var exchange=url;
			url=callback;
			callback=exchange;
		}
		this.routes.push({
			method: method,
			url: url,
			callback: callback
		});
		this.log("add()", `added a object, ${method} ${url}`);
	}
	run() {
		setInterval(this.onHashChange.bind(this), this.ms);
	}
	debug() {
		this.isDebug= true;
		this.log("DEBUG", "is active");
	}
	log(element, value) {
		if (this.isDebug)
			console.log(`the element ${element} warns that ${value}`);
	}
	setTime(ms) {
		this.ms=ms;
	}
	setStatus(status) {
		this.status=status;
	}
	onHashChange() {
		if (this.hash!=location.hash || location.hash=="") {
			if (location.hash=="")
				location.hash="#!/";
			this.hash=location.hash;
			for (var i in this.routes) {
				if (this.routes[i].url==location.hash) {
					this.ajax(this.routes[i].method, this.routes[i].url);
					this.apply(i);
					console.log(0);
				}
				else {
					var now=this.url(this.routes[i].url);
					var hash=this.url();
					var url="";
					var request=true;
					if (hash.length==now.length) {
						url="/";
					}
					else {
						request=false;
					}
					for (var j=0; j<hash.length && hash.length==now.length && request ; j++) {
						if (now[j]==hash[j]) {
							url=url+hash[j]+"/";
						}
						else if (now[j][0]==":") {
							url=url+hash[j]+"/";
						}
					}
					if (request && url[0]=="/") {
						this.ajax(this.routes[i].method, url);
						this.apply(i);
					}
				}
			}
			this.log("OnHashChange()", `this hash is change ${new Date()}`);
		}
	}
	noAjax() {
		this.sync=false;
	}
	url(url) {
		if (!url)
			var url=location.hash.split("/");
		else
			url=url.split("/");
		if (url[0]=="")
			url=url.splice(1,url.length);
		if (url[0]=="#!")
			url=url.splice(1,url.length);
		if (url[0]=="")
			url=url.splice(1,url.length);
		if (url[url.length-1]=="")
			url.pop();
		if (url[url.length-1]=="")
			return [];
		return url;
	}
	ajax(method, url) {
		if (this.sync) {
			var status=this.setStatus.bind(this);
			//status(null);
			this.response = undefined;
			this.request = new XMLHttpRequest();
			this.request.onreadystatechange = () => {
				if (this.request.readyState == 4) {
					if (this.request.status == 200) {
						status(this.request.status);
						this.response = JSON.parse(this.request.responseText);
					}
					else {
						status(this.status);
					}
				}
			}
			this.request.open(method, url, true);
			this.request.send();
		}
	}
	check() {
		if (this.response!=null) {
			return this.response;
		}
	}
	apply(i) {
		if (this.sync) {
			var check=null;
			var delay=setInterval(() => {
				check=this.check();
				if (check!=undefined) {
					if (this.status==200) {
						this.routes[i].callback( check );
						this.log("apply()", `status of ajax request is equal at ${this.status}`);
						clearInterval(delay);
					}
					else if (this.status!=null) {
						this.log("apply()", `status of ajax request is equal at ${this.status}`);
						clearInterval(delay);
					}
				}
			}, this.ms);
		}
		else
			this.routes[i].callback();
	}
}