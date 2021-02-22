window.onscroll = function() {myFunction()};

window.onload = function() {startFunction()};

var navbar = document.getElementById("nav");
var navimg = document.getElementById("navimg");
var imgheader = document.getElementById("imgheader");
var sticky = navbar.offsetTop;

function myFunction() {
  var scrollPosition = window.pageYOffset;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    imgheader.style.opacity = 0;
    // navimg.style.opacity = 100;
  } else {
    navbar.classList.remove("sticky");
    imgheader.style.opacity = 100;
    // navimg.style.opacity = 0;
  }
}

function startFunction() {
  document.getElementById('home').focus();
}