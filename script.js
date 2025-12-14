const songs = [
  {
    title: "Khaleja Epic BGM",
    artist: "Listen By GVS",
    file: "khaleja_sada_siva_epic_bgm.mp3",
    youtubeId: "m4qKrVQ6TRw"
  },
  {
    title: "Sooreede",
    artist: "Salaar",
    file: "Sooreede Song.mp3",
    youtubeId: "2n7lsBRfmA0"
  },
  {
    title: "Satranga",
    artist: "Animal",
    file: "ANIMAL_SATRANGA(Song).mp3",
    youtubeId: "KGXSGtukDh0"
  },
  {
    title: "Humsafar",
    artist: "Saiyaara",
    file: "Humsafar Song.mp3",
    youtubeId: "D9DiMnlpFK8"
  },
  {
    title: "Aavan Jaavan",
    artist: "War 2",
    file: "Aavan Jaavan Song.mp3",
    youtubeId: "enjkcCdAlXc"
  },
  {
    title: "Powerhouse",
    artist: "Coolie",
    file: "Powerhouse Song.mp3",
    youtubeId: "6mWQq4VZKRU"
  },
  {
    title: "Sarkaaru Raa",
    artist: "Daaku Maharaaj",
    file: "Sarkaru Raa Song.mp3",
    youtubeId: "YB4U_RpbuQQ"
  }
];

const audio = document.getElementById("audio");
const songList = document.getElementById("songList");
const miniPoster = document.getElementById("miniPoster");
const miniTitle = document.getElementById("miniTitle");
const miniArtist = document.getElementById("miniArtist");
const playBtn = document.getElementById("playBtn");

let currentIndex = -1;
let isPlaying = false;

/* RENDER SONGS */
songs.forEach((song, index) => {
  const card = document.createElement("div");
  card.className = "song-card";

  const poster = document.createElement("div");
  poster.className = "song-poster";
  poster.style.backgroundImage =
    `url(https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg)`;

  const info = document.createElement("div");
  info.className = "song-info";
  info.innerHTML = `<h3>${song.title}</h3><p>${song.artist}</p>`;

  card.appendChild(poster);
  card.appendChild(info);

  card.onclick = () => playSong(index);

  songList.appendChild(card);
});

/* PLAY SONG */
function playSong(index) {
  currentIndex = index;
  audio.src = songs[index].file;
  audio.play();
  isPlaying = true;
  updateMini();
}

/* UPDATE MINI PLAYER */
function updateMini() {
  const song = songs[currentIndex];
  miniPoster.style.backgroundImage =
    `url(https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg)`;
  miniTitle.textContent = song.title;
  miniArtist.textContent = song.artist;
  playBtn.textContent = "⏸";
}

/* CONTROLS */
playBtn.onclick = () => {
  if (currentIndex === -1) return;
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶";
  } else {
    audio.play();
    playBtn.textContent = "⏸";
  }
  isPlaying = !isPlaying;
};

/* TABS */
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  };
});

