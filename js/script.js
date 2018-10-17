var preloaderX = document.querySelector('.preloaderX'); 
var slideShowX = document.querySelector('.slideShowX');
var captionX = document.querySelector('.captionX');
var thumbnails = document.querySelector('.thumbnails');

var slideIndex = 0;
var currentSlideX;
var autoMotionX;

var imagesX = ['bmw100.jpg', 'bmw101.jpg', 'bmw102.jpg', 'bmw103.jpg', 'bmw104.jpg'];
var captionsX = ['BMw X3', 'BMW Concept', 'BMW 5 series', 'bmw103.jpg', 'bmw104.jpg'];

for(var i = 0; i < imagesX.length; ++i) {
    thumbnails.innerHTML += '<div class="thumb"></div>';
    document.querySelector('.thumbnails div:nth-child(' + (i + 1) + ')').style.backgroundImage = "url('../assets/" + imagesX[i] + "')";
}

window.onload = function(){
    preloaderX.style.display = 'none';
    slideShowX.style.display = 'flex';
};

function changeBgImage() {
    if (slideIndex < 0) {
        slideIndex = imagesX.length - 1;
    } else if (slideIndex > imagesX.length - 1) {
        slideIndex = 0;
    }
    currentSlideX = "url('assets/" + imagesX[slideIndex] + "')";
    slideShowX.style.backgroundImage = currentSlideX;
    captionX.textContent = captionsX[slideIndex];
} 

function nextSlide() {
    clearInterval(autoMotionX);
    ++slideIndex;
    changeBgImage();
}

function prevSlide() {
    clearInterval(autoMotionX);
    --slideIndex;
    changeBgImage();
}

// autoMotionX = setInterval( function(){ 
//     ++slideIndex;
//     changeBgImage();
// }, 2500);