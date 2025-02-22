const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const small_title = document.querySelector(".small-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector("nav").classList.add("show");
    }, 0); // Le menu apparaît légèrement avant les titres

    setTimeout(() => {
        document.querySelector(".big-title").classList.add("show");
    }, 500); // Titre principal après 700ms

    setTimeout(() => {
        document.querySelector(".small-title").classList.add("show");
    }, 1000); // Petit titre après 1.2s
});



window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    small_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})


