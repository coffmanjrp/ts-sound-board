"use strict";
var sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
var buttons = document.getElementById('buttons');
function stopSongs() {
    sounds.forEach(function (sound) {
        var song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}
sounds.forEach(function (sound) {
    var btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click', function () {
        stopSongs();
        var song = document.getElementById(sound);
        song.play();
    });
    buttons.appendChild(btn);
});
