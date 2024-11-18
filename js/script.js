/* wait for page to be loaded */
// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenue = document.querySelector(".navbar .mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenue.classList.toggle("active");
  });
});

// Change navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
