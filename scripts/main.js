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
const counts = [963243, 23, 31];
const countElements = document.querySelectorAll('.counter h6 span');

countElements.forEach((element, index) => {
  let currentCount = 0;
  const targetCount = counts[index];
  const interval = setInterval(() => {
    currentCount += Math.ceil(targetCount / 50);
    element.textContent = currentCount.toLocaleString();
    if (currentCount >= targetCount) {
      clearInterval(interval);
    }
  }, 50);
});