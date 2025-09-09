console.log("js loaded")

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', () => {
    const burgerToggle = document.querySelector('#mobileBurger');
    const burgerMenu = document.querySelector('.sidebar');

    burgerToggle.addEventListener('click', () => {
        burgerToggle.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });
});

document.getElementById("loginLink").addEventListener("click", function(e) {
    e.preventDefault();
    fb_Googlelogin();
});
