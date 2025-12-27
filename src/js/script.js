const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".header__menu");
const menuBack = document.querySelector(".menu-back");

toggle.addEventListener("click", () => {
    const isOpen = nav.hasAttribute("hidden");

    if (isOpen) {
        nav.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "true");
    } else {
        nav.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
    }
});

if (menuBack) {
    menuBack.addEventListener("click", () => {
        nav.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
    });
}