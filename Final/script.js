// let images = ['img/header.jpg', 'img/header-2.jpg', 'img/header-3.jpg'];
// let currentImage = 0;
// setInterval(() => {
//     document.getElementById('headerContent').style.backgroundImage = "url(" + images[currentImage] + ")";
//     currentImage = (currentImage + 1) % images.length;
// }, 5000);

document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.nextElementSibling.classList.toggle('active');
    });
});

document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('active');
});
