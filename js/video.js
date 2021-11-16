var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


document.querySelector("#slower").addEventListener("click", function() {
	// console.log(video.playbackRate);
	// var rate = video.playbackRate - 0.05;
	var rate = video.playbackRate * 0.95;
	console.log("Playback speed:", rate);
	video.playbackRate = rate;
});

document.querySelector("#faster").addEventListener("click", function() {
	// console.log(video.playbackRate);
	var rate = video.playbackRate * 1.05;
	console.log("Playback speed:", rate);
	video.playbackRate = rate;
});

document.querySelector("#skip").addEventListener("click", function() {
	var time = video.currentTime + 15;
	if (time > video.duration) {
		time = 0;
	}
	console.log("Current location in video:", time, "seconds");
	video.currentTime = time;
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		console.log("Video unmuted");

	}
	else {
		video.muted = true;
		console.log("Video muted");
	}
});

document.querySelector("#slider").addEventListener("click", function() {

	// slider.oninput = function() {
	// 	output.innerHTML = this.value;
	//   }
	var volume = slider.value / 100;
	video.volume = volume;
	// console.log(document.getElementById("#volume"));
	// document.getElementById("#volume").textContent("hello");
	volume = volume * 100;
	var volumestring = volume + "%";
	console.log("Volume is:", volumestring);
	document.getElementById("volume").innerHTML = volumestring;
	// console.log(document.getElementById("#volume"));
	// ADD THE VOLUME DOWN BELOW WRITTEN ON THE PAGE
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
	console.log("Changed to Old School style")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
	console.log("Changed back from Old School style")
});
