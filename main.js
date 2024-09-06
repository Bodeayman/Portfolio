console.log("Welcome to my portfolio");

let aboutPage = document.querySelector(".about");

let ecpcImg = document.querySelector(".about img");
let profileImage = document.querySelector(".profileImage");
profileImage.style.setProperty("animation-play-state", "running");

window.onscroll = function () {
    if (window.scrollY >= (aboutPage.scrollTop + 400)) {
        console.log("Reached");
        ecpcImg.style.setProperty("animation-play-state", "running");
    }
}