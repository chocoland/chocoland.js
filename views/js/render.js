// render.js
import {send} from './websocket.js';

/*
var render;
var nodes = [];

function apply() {
	a.substr(a.indexOf("{{"), a.indexOf("}}") + 2);
}*/

// for more information read about DOM
export function render(id) {
	// get template node by id
	var node = document.querySelector(`#${id}`).content;
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
			var name = text.substr(text.indexOf("{{") + 2 , text.indexOf("}}") - 2);
			// external(name);
			var result = "test";
			console.log(send(replace));
			console.log(send(name));
			//if (node.hasChildNodes())
			//node.children[i].textContent = text.replace(replace, result);
		}
	}		
}