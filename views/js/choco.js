/*
 * js/zero.js - Zero
 *
 * This is a product create by Jeferson De Freitas
 * from Zero Online Network.
 *
 * This file is released under the GPLv3.
 */

// strict mode
"use strict"; 


// animation
var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var isVisible = false;
menu.onclick = () => {
    if (isVisible) {
        nav.className = "hidden inline-list";
    }
    else {
        nav.className = "visible inline-list";
    }
    isVisible = !isVisible;
}

// render of template
var home = new Template({
    id: "home"
});

var docs = new Template({
    id: "docs"
});

var audio = new Template({
    id: "song",
    child: {
        tag: ["img", "audio"]
    }
});

var video = new Template({
    id: "vid",
    child: {
        tag: ["video"]
    }
});

// definition of router
var router = new Router();
router.get("/#!/", () => {
    home.render("#view", () => {});
});
router.get("/#!/docs", () => {
    docs.render("#view", () => {})
});
router.get("/#!/sky/:artist/:album/:song", () => {
    video.render("#view", () => {
        video.setChildTag("video").src="perra.webm";
    })
});
router.get("/#!/sky/song", () => {
    audio.render("#view", () => {
        audio.setChildTag("img").src="maxresdefault.jpg";
        audio.setChildTag("audio").src="blurry.mp3";
    })
});
router.noAjax();
router.run();