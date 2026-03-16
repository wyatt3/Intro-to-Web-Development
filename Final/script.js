let images = ['img/header.jpg', 'img/header-2.jpg', 'img/header-3.jpg'];
let currentImage = 0;
setInterval(() => {
    document.getElementById('header-img').src = images[currentImage];
    currentImage = (currentImage + 1) % images.length;
}, 5000);