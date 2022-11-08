var slideIndex3 = 0;
showSlides3();

function showSlides3() {
  var x;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots3 = document.getElementsByClassName("dot3");
  for (x = 0; x < slides3.length; x++) {
    slides3[x].style.display = "none";  
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {slideIndex3 = 1}    
  for (x = 0; x < dots3.length; x++) {
    dots3[x].className = dots3[x].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";  
  dots3[slideIndex3-1].className += " active";
  setTimeout(showSlides3, 4000);

}