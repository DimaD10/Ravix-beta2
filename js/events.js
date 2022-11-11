const cursor = document.querySelector(".cursor");
mouseX = 0, mouseY = 0, posX = 0, posY = 0

document.addEventListener("mousemove", (e) => {
    cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";

})

const button = document.querySelector(".slider__button");
const line = document.querySelector(".slider__live-line");

button.addEventListener("mouseover", (e) => {
    line.stop();
})
button.addEventListener("mouseout", (e) => {
    line.start();
})


const wrapper = document.querySelector(".wrapper");

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            let activeSlide = document.querySelector('.swiper-slide-active');
            let background = activeSlide.getAttribute('data-background');
            wrapper.style.cssText = "background-color: " + background + ";"
            
            let active = document.querySelector('.swiper-slide-active');
            let slides = [...document.querySelectorAll('.slider__image')];
            let index = slides.indexOf(active);

            let list = document.querySelectorAll('.list__el');
            for (let i = 0; i < list.length; i++) {
                const el = list[i];
                el.classList.remove("active-el");
            }
            list[index].classList.add("active-el");
        } else {
            wrapper.style.cssText = "background-color: #121215;"
        } 
    });
}
let options = { threshold: [0.8] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.slider__image');
for (let elm of elements) {
    observer.observe(elm);
}
