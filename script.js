(function($){
        $(window).on("load",function(){
            $(".audio-box").mCustomScrollbar({
            	axis : 'y',
            	theme : 'dark'
            });
        });
})(jQuery);


displayPause.classList.add('pauseShow')
displayPlay.classList.add('playHide')

window.onscroll = function(){

	var aboutBox = document.querySelector('.about-box');
	var audioBox = document.querySelector('.audio-box');
	var check = window.pageYOffset;

	if(check >= 900){
		aboutBox.classList.add('show')
		var line =	document.querySelector('.red-line')
		 line.classList.add('lineGo')
	}
	if(check >= 1900){
		var myWorksBox = document.querySelector('.my-works-box')
		myWorksBox.classList.add('workGo');
		audioBox.classList.add('audioBoxGo')
	}

	var headBoxTxt = document.querySelector('.head-box');

	headBoxTxt.style.transform = 'translateY(' +  check / 3 + '%)'

}


// var playSong = document.querySelector('.play');

var stop = document.querySelector('.stop');

var PlayPause = document.querySelectorAll('.play');

var displayPlay = document.querySelector('.displayPlay');

var displayPause = document.querySelector('.displayPause');

var progress = document.querySelector('progress');

var volume = document.querySelector('input[type="range"]');

var audio = document.querySelectorAll('audio');

var track = document.querySelectorAll('.track');

var isPlaying = false;

track.forEach(function(elem){
	elem.onclick = function(e){
		if(e.target.classList.contains('play')){
			for(var i = 0; i < audio.length; i++){
				audio[i].onplaying = function() {
				  isPlaying = true;
				  	
				};
				audio[i].onpause = function() {
				  isPlaying = false;
				 
				};

				if (isPlaying) {
				    audio[i].pause()
				    	
				  } else {
				    audio[i].play();
				  }
			}
		}
		 

	}
})


// audio.onplaying = function() {
//   isPlaying = true;

// };
// audio.onpause = function() {
//   isPlaying = false;

// };





// function togglePlay() {

//   if (isPlaying) {
//     audio.pause()
    	
//   } else {
//     audio.play();
//   }
// };



// audio.ontimeupdate = getProgress;

// progress.onclick = audioRewind;

// stop.onclick = stopSong;

// PlayPause.onclick = togglePlay;

// function stopSong(){
// 	audio.pause();
// 	audio.currentTime = 0;
// }


// function audioRewind(){
// 	var offWid = this.offsetWidth;
// 	var progressPosition = event.offsetX;
// 	this.value = 100 * progressPosition / offWid;
// 	audio.pause();
// 	audio.currentTime =  audio.duration * (progressPosition / offWid);
// 	audio.play();
// }

// function getProgress(){
// 	var audioDuration = audio.duration;
// 	var audioCurrentTime = audio.currentTime;
// 	progress.value = (100 * audioCurrentTime) / audioDuration;
// }



// audio.onplaying = function() {
//   isPlaying = true;
//   	displayPause.classList.add('pauseShow')
//     displayPlay.classList.add('playHide')
// };
// audio.onpause = function() {
//   isPlaying = false;
//   displayPause.classList.remove('pauseShow')
//   displayPlay.classList.remove('playHide')
// };


// volume.oninput = function(){
// 	var v = this.value;
// 	audio.volume = v /100;
// }

