document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggleButton.addEventListener("click", function () {
        navLinks.classList.toggle("show"); // Add or remove the "show" class
    });
});
