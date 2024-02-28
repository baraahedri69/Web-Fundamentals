console.log("page loaded...");

const video = document.getElementById('main-video');

video.addEventListener('mouseover', function() {
    video.play(); 
});

video.addEventListener('mouseout', function() {
    video.pause(); 
});