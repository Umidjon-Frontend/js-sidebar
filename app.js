const menu = document.querySelector(".menu"),
    btnMenu = document.querySelector(".btn-menu"),
    closeMenu = document.querySelector(".close");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("transform");
});
closeMenu.addEventListener("click", () => {
    menu.classList.toggle("transform");
});
