import "./assets/css/tailwind.css";

let switchers = document.querySelectorAll(".switcher");
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

switchers.forEach((switcher) => {
  switcher.addEventListener("click", function () {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
});


//Slider portfolio

window.onload = function() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth;
  let position = 0;

  setInterval(() => {
    position -= slideWidth;
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = `translateX(${position}px)`;

    setTimeout(() => {
      const firstSlide = slides[0];
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      slider.appendChild(firstSlide);
      position += slideWidth;
    }, 1000);
  }, 3000); 
};




document.addEventListener("DOMContentLoaded", function() {
  var testimonials = document.querySelectorAll(".testimonial");
  var currentIndex = 0;

  setInterval(function() {
    testimonials[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.add("active");
  }, 3000); // Adjust slide duration (in milliseconds) as needed
});





