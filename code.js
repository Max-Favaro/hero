const navSlide = () => {
    const burger = document.querySelector(".hamburger-bar");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
}

navSlide();