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