const dropdownMenu = document.querySelector(".header__dropdown");
const btnMenu = document.querySelector(".header__menu");
const closeMenu = document.querySelector(".header__menu--close");

btnMenu.addEventListener("click", () => {
    dropdownMenu.classList.toggle("visually-hidden");
});

closeMenu.addEventListener("click", () => {
    dropdownMenu.classList.toggle("visually-hidden");
});
