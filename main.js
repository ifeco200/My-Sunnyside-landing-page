// Find the button and the menu on the page
const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

// When the button is clicked...
btn.addEventListener("click", function () {
  // ...add the class "open" if it's missing, remove it if it's there
  menu.classList.toggle("open");
});
