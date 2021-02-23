window.onscroll = function() {myFunction()};

window.onload = function() {startFunction()};

var navbar = document.getElementById("nav");
var navimg = document.getElementById("navimg");
var imgheader = document.getElementById("imgheader");
var sticky = navbar.offsetTop;

var innerBody = document.getElementById("innerBody");


function load(e, page, id) {
  console.log("New Id = " + this.id);
  fetch(page)
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    e.innerHTML = body;
  });

  document.getElementById(id).focus();
}

function navLoad(e, page) {
  console.log('\t\t\tcase "' + e.id + '":\n\t\t\t\tbreak;')
  load(innerBody, page, e.id);
}

function subLoad(page, id, subid) {
  load(innerBody, page, id);
  //subid is to set the filters
}


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
  // document.getElementById('home').focus();
  var nav = document.getElementById('nav');
  var navul = nav.getElementsByTagName('ul');
  var nava = nav.getElementsByTagName('a');
  var navli;

  for (var i = 0; i < nava.length; i++) {
    nava[i].addEventListener('click', getPage);
  }

  for (var i = 0; i < navul.length; i++) {
    navli = navul[i].getElementsByTagName('li');

    for (var i2 = 0; i2 < navli.length; i2++) {
      navli[i2].addEventListener('click', getPage);
    }
  }

  navLoad(document.getElementById("homeMN"), '/html/home.html');
  
}

function getPage(e) {
  
  switch(this.id) {

    case "galleryMN":
      break;
      case "gl-mu":
				break;
 			case "gl-nails":
				break;
 			case "gl-hair":
				break;
 			case "gl-sfx":
				break;
 			case "gl-ws":
				break;

    case "servicesMN":
      break;
      case "bas-mu":
				break;
 			case "bas-nails":
				break;
 			case "bas-hair":
				break;
 			case "bas-sfx":
				break;
 			case "bas-ws":
				break;

    case "shopMN":
      break;
      case "sh-mu":
				break;
 			case "sh-sfx":
				break;
 			case "sh-kits":
				break;

    case "abtusMN":
      break;
    default:
      navLoad(this, '/html/home.html');      
      break;
  }

}