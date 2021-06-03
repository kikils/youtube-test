// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "Qi-0CLnsw90",
    playerVars: { 'autoplay': 1, 'controls': 0, 'enablejsapi': 1, 'fs': 0, 'modestbranding': 1 },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  console.log(event.target);
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  console.log(event)
}
function startVideo() {
  player.playVideo();
}
function stopVideo() {
  player.stopVideo();
}
document.getElementById("btn-play").addEventListener("click", () => {
  startVideo();
});

document.getElementById("btn-stop").addEventListener("click", () => {
    stopVideo();
});

function to_text() {
    console.log('here')
    document.getElementById("text").textContent = player.getCurrentTime()
}
// setInterval('to_text()', 1000);