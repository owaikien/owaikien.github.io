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


document.querySelectorAll('.quote-word').forEach(function(word) {
  const original = word.textContent;
  const alt = word.getAttribute('data-alt');
  let isPermanent = false;

  word.addEventListener('mouseenter', function() {
    if (!isPermanent) word.textContent = alt;
  });

  word.addEventListener('mouseleave', function() {
    if (!isPermanent) word.textContent = original;
  });

  word.addEventListener('click', function() {
    isPermanent = !isPermanent;
    if (isPermanent) {
      word.textContent = alt;
      word.style.color = '#000000'; // Change color when toggled
    } else {
      word.textContent = original;
      word.style.color = '#6366f1'; // Restore original purple
    }
  });
});