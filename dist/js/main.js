"use strict";
var sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
sounds.forEach(function (sound) {
    var _a;
    var btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click', function () {
        var _a;
        stopSongs();
        (_a = document.getElementById(sound)) === null || _a === void 0 ? void 0 : _a.play();
    });
    (_a = document.getElementById('buttons')) === null || _a === void 0 ? void 0 : _a.appendChild(btn);
});
function stopSongs() {
    sounds.forEach(function (sound) {
        var song = document.getElementById(sound);
        song === null || song === void 0 ? void 0 : song.pause();
        song === null || song === void 0 ? void 0 : song.currentTime = 0;
    });
}
