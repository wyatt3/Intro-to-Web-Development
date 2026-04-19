document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('active');
});

document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.nextElementSibling.classList.toggle('active');
    });
});
