/* Nav bar */
let hamIcon = document.getElementsByClassName("hamIcon")[0];
let navBarLinks = document.getElementsByClassName("navBar-links")[0];

hamIcon.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});

/* Slider */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(slide) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slide > slides.length) {
    slideIndex = 1;
  }
  if (slide < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* Slider2 */
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}
function showSlides2(slide2) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dots2");
  if (slide2 > slides2.length) {
    slideIndex2 = 1;
  }
  if (slide2 < 1) {
    slideIndex2 = slides.length;
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active";
}
/* Slider3*/
let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3((slideIndex3 += n));
}

function currentSlide3(n) {
  showSlides3((slideIndex3 = n));
}
function showSlides3(slide3) {
  let i;
  let slides3 = document.getElementsByClassName("mySlides3");
  let dots3 = document.getElementsByClassName("dots3");
  if (slide3 > slides3.length) {
    slideIndex3 = 1;
  }
  if (slide3 < 1) {
    slideIndex3 = slides3.length;
  }
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndex3 - 1].style.display = "block";
  dots3[slideIndex3 - 1].className += " active";
}
