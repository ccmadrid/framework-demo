function vidplay() {
       var video = document.getElementById("banner");
       var button = document.getElementById("play");
       if (video.paused) {
          video.play();
          button.textContent = "||";
       } else {
          video.pause();
          button.textContent = ">";
       }
    }

    function restart() {
        var video = document.getElementById("banner");
        video.currentTime = 0;
    }

    function skip(value) {
        var video = document.getElementById("banner");
        video.currentTime += value;
    }

// $("#banner").mouseover(function() {
//   var video = document.getElementById("banner");
//   video.playbackRate = 0.5;
// });

// $("#banner").mouseout(function() {
//   var video = document.getElementById("banner");
//   video.playbackRate = 1;
// });

$("#test-1").mouseover(function(){
  var video = document.getElementById("banner");
  video.currentTime = 0.75;
  video.playbackRate = 0.70;
  setTimeout(function(){
    video.pause()}, 650);
});



$("#test-1").mouseout(function() {
  var video = document.getElementById("banner");
  video.currentTime = 4.75;
  video.play();
  video.playbackRate = 1;
});

$("#test-2").mouseover(function(){
  var video = document.getElementById("banner");
  video.currentTime = 1.89;
  video.playbackRate = 0.70;
  setTimeout(function(){
    video.pause()}, 650);
});

$("#test-2").mouseout(function() {
  var video = document.getElementById("banner");
  video.currentTime = 4.75;
  video.play();
  video.playbackRate = 1;
});

$("#test-3").mouseover(function(){
  var video = document.getElementById("banner");
  video.currentTime = 4.;
  video.playbackRate = 0.70;
  setTimeout(function(){
    video.pause()}, 650);
});

$("#test-3").mouseout(function() {
  var video = document.getElementById("banner");
  video.currentTime = 4.75;
  video.play();
  video.playbackRate = 1;
});

$(".magic").click(function(e){
  e.preventDefault();
  $("body").toggleClass("test");
})
