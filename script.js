let hamIcon = document.getElementsByClassName("hamIcon")[0];
let navBarLinks = document.getElementsByClassName("navBar-links")[0];

hamIcon.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
