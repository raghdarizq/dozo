window.addEventListener('load', function () {
  let navbar = document.querySelector('.navbar-nav');
  navbar.classList.add('active');
  
  setTimeout(function () {
    navbar.classList.remove('active');
    void navbar.offsetWidth;
    navbar.classList.add('active');
  }, 10); 
});
window.addEventListener('scroll', function () {
  var section = document.querySelector('.section-transition');
  var sectionPosition = section.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (sectionPosition < windowHeight * 0.75) {
    section.classList.add('active');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.count');
  const speed = 100; 

  function updateCounters() {
    counters.forEach(counter => {
      const targetValue = +counter.dataset.target;
      let currentValue = +counter.textContent;

      const increment = targetValue / (speed / 10);

      if (currentValue < targetValue) {
        counter.textContent = Math.ceil(currentValue + increment);
      }
    });
  }

  setInterval(updateCounters, speed);
});

window.addEventListener("scroll", function() {
  // حركة الصور الأولى من الأعلى
  var image1 = document.getElementById("image1");
  image1.style.marginTop = "-100%";
  image1.style.transition = "margin-top 1s";
  setTimeout(function() {
    image1.style.marginTop = "0";
  }, 100);

  // حركة الصور الثانية من الأسفل
  var image2 = document.getElementById("image2");
  image2.style.marginTop = "100%";
  image2.style.transition = "margin-top 1s";
  setTimeout(function() {
    image2.style.marginTop = "0";
  }, 100);

  // حركة الصورة الرابعة من الأعلى
  var image4 = document.getElementById("image4");
  image4.style.marginTop = "-100%";
  image4.style.transition = "margin-top 1s";
  setTimeout(function() {
    image4.style.marginTop = "0";
  }, 100);
});