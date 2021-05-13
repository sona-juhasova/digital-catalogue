// code source:https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_gallery


function plusSlides(n,container) {
  showSlides(container.slideIndex+n,container);
}

function showSlides(n,container) {
  var i;
  var slideIndex = n;
  var slides = container.getElementsByClassName("mySlides");
  var dots = container.getElementsByClassName("demo"); 
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  container.slideIndex = slideIndex;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"; 
}