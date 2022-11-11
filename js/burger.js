const menuBurger = document.querySelector(".header__burger");
const closeBurger = document.querySelector(".header__burger-close");
const menu = document.querySelector(".header__navigation");

window.addEventListener('click', (event) => {
    if(event.target.dataset.action === 'open-menu'){
        menuBurger.classList.add("none");
        closeBurger.classList.remove("none");
        menu.classList.add("menu-active");
    }

    if(event.target.dataset.action === 'close-menu'){
        menuBurger.classList.remove("none");
        closeBurger.classList.add("none");
        menu.classList.remove("menu-active");
    }
});