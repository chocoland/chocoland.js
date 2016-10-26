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

class Template {
	constructor(template) {
		this.template=template;
		this.element=this.getTemplate();
	}
	getTemplate() {
		if (this.template.id && !this.template.class && !this.template.tag)
			return document.querySelector(`#${this.template.id}`);
		else if (!this.template.id && this.template.class && !this.template.tag)
			return document.querySelector(`.${this.template.class}`);
		else if (!this.template.id && !this.template.class && this.template.tag)
			return document.querySelector(`${this.template.tag}`);
		else
			return undefined;
	}
	setChildId(id) {
		for (i in this.template.child.id) {
			if (this.template.child.id[i]==id)
				return this.element.content.querySelector(`#${this.template.child.id[i]}`);
		}
		return null;
	}
	setChildClass(_class) {
		return this.element.content.querySelector(`.${this.child.class[_class]}`);
	}
	setChildTag(tag) {
		for (var i in this.template.child.tag) {
			if (this.template.child.tag[i]==tag) {
				return this.element.content.querySelector(`${this.template.child.tag[i]}`);
			}
		}
		return undefined;
	}
	render(selector, callback) {
		// allow any order of parameters
		if (typeof selector=="function" && typeof callback=="string") {
			var exchange=selector;
			selector=callback;
			callback=exchange;
		}
		if (document.querySelector(selector).hasChildNodes()) {
			while (document.querySelector(selector).childNodes.length >= 1 ) {
				document.querySelector(selector).removeChild( document.querySelector(selector).firstChild );
			}
		}
		callback();
		var clone = document.importNode(this.element.content, true);
		document.querySelector(selector).appendChild(clone);
		sky();
	}
}
/*
 * Example
 *
 * var template=new Template({
 *  id: "video",
 *  class: "",
 *  tag: "",
 *  child: {
 *      id: [],
 *      class: [],
 *      tag: ["video"]
 *  }
 *
 * Warning... not fill the object with null elements, it's only a example
 * 
 * video.render(() => {
 *  // code to edit nodes
 *  video.setChildTag("video").src="example.webm";
 * }, "a selector css, to insert DOM element");
 *
 * good luck and much sugar
});

*/
