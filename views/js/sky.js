/*
 * js/sky.js - Sky Player
 *
 * This is a product create by Jeferson De Freitas
 * from Zero Online Network.
 *
 * This file is released under the GPLv3.
 */

 // strict mode
"use strict"; 

function sky() {
	var delay=setInterval(
		function() {
			if (document.getElementById('sky')!=null) {
				var sky=document.getElementById('sky');
				var audio=document.getElementById('audio');
				var state=false;
				var play=document.getElementById('play');
				var down=document.getElementById('down');
				var up=document.getElementById('up');
				var time=document.getElementById('time');
				var now=document.getElementById('now');
				var draw=null;

				play.onclick=function() {
					if (state) {
						play.innerHTML='<img src="icon/play.png" alt="Play">';
						audio.pause();
						clearInterval(draw);
					}
					else {
						play.innerHTML='<img src="icon/pause.png" alt="Pause">';
						audio.play();
						draw=setInterval(
							function() {
								var end=audio.seekable.end(0);
								var current=audio.currentTime;
								now.style.width=(current*100/end)+"%";
							} , 1000);
					}
					state=!state;
				}
				
				down.onclick=function() {
					audio.volume-=0.1;
				}

				up.onclick=function() {
					audio.volume+=0.1;
				}

				clearInterval(delay);
			}
		}, 100);
}