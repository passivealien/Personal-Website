var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  var x;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  for (x = 0; x < slides2.length; x++) {
    slides2[x].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
  for (x = 0; x < dots2.length; x++) {
    dots2[x].className = dots2[x].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active";
  setTimeout(showSlides2, 4000);

}