$(document).ready(function() {
	let video = $("#video")[0];
	let bouton = $("#bouton-play");
  
	bouton.on("click", function() {
	  if (video.paused) {
		video.play();
		bouton.text("Stop");
	  } else {
		video.pause();
		bouton.text("Play");
	  }
	});
  });
