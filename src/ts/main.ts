const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.getElementById('buttons') as HTMLDivElement;

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound) as HTMLMediaElement;

    song.pause();
    song.currentTime = 0;
  });
}

sounds.forEach((sound) => {
  const btn = document.createElement('button') as HTMLButtonElement;
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs();

    const song = document.getElementById(sound) as HTMLMediaElement;

    song.play();
  });

  buttons.appendChild(btn);
});
