function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var typed = new Typed('#element', {
    strings: ['MERN stack developer', 'AIML Enthusiastic', 'Competitive Programmer'],
    typeSpeed: 100,
    loop: true // Add this option to make it run continuously
});
