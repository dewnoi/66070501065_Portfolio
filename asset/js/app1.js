var audio = document.getElementById("myAudio");
var icon = document.getElementById("icon");
            audio.volume = 0.05;
            audio.addEventListener("ended", function() {
            audio.currentTime = 0;
            audio.play();
        });

function increaseVolume() {
            var audio = document.getElementById("myAudio");
            if (audio.volume < 1.0) {
                audio.volume += 0.1; // Increase the volume by 0.1 (10%)
            }
}
function run() {
    var audio = document.getElementById("myAudio");
    var icon = document.getElementById("icon");
    if(audio.paused){
        audio.play();
        icon.src="asset/js/Pic/pause.png";
    }
    else if(audio.play){
        audio.pause();
        icon.src="asset/js/Pic/play.png";
    }
}

