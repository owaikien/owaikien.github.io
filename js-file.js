document.addEventListener("DOMContentLoaded", function() {
  // For each slider on the page
  document.querySelectorAll('.slider').forEach(function(slider) {
    let slides = slider.querySelectorAll('.slide');
    let index = 0;

    function showSlide(n) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === n);
      });
    }

    // Initial display
    showSlide(index);

    // Button event listeners
    slider.querySelector('.prev').addEventListener('click', function() {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });
    slider.querySelector('.next').addEventListener('click', function() {
      index = (index + 1) % slides.length;
      showSlide(index);
    });
  });
});



