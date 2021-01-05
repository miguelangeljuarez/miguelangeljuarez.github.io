document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
    console.log("Click");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cards', {delay: 500});
ScrollReveal().reveal('.banner', {delay: 500});
ScrollReveal().reveal('.title-packages');
ScrollReveal().reveal('.card', {delay: 500});
ScrollReveal().reveal('.installation-card', {delay: 500});
ScrollReveal().reveal('.payment-card', {delay: 500});
ScrollReveal().reveal('.contact-us-content', {delay: 500});
ScrollReveal().reveal('.footer-links', {delay: 500});
ScrollReveal().reveal('.footer', {delay: 500});