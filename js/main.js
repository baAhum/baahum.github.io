window.onscroll = function() {myFunction()};

window.onload = function() {startFunction()};

var navbar = document.getElementById("nav");
var curPage = "home";
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
  console.log('\t\t\tcase "' + e.id + '":\n\t\t\t\tbreak;');
  load(innerBody, page, e.id);
}

function subLoad(page, id, subid) {
  load(innerBody, page, id);
  //subid is to set the filters
}


function myFunction() {
  var scrollPosition = window.pageYOffset;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    imgheader.style.opacity = 0;
    

    sidenavs = document.getElementById('catnav');
    if (sidenavs) {
      sidenavs.classList.add("sticky");
      innerBody.classList.add("sticky_offsetS");
    } else {
      innerBody.classList.add("sticky_offset");
    }
    
    
    // navimg.style.opacity = 100;
  } else {
    navbar.classList.remove("sticky");
    imgheader.style.opacity = 100;
    

    sidenavs = document.getElementById('catnav');
    if (sidenavs) {
      sidenavs.classList.remove("sticky");
      innerBody.classList.remove("sticky_offsetS");
    } else {
      innerBody.classList.remove("sticky_offset");
    }
    
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
      navLoad(this, '/html/gallery.html');
      break;
      case "gl-mu":
        subLoad('/html/gallery.html', "galleryMN", "gl-mu");
				break;
 			case "gl-nails":
        subLoad('/html/gallery.html', "galleryMN", "gl-nails");
				break;
 			case "gl-hair":
        subLoad('/html/gallery.html', "galleryMN", "gl-hair");
				break;
 			case "gl-sfx":
        subLoad('/html/gallery.html', "galleryMN", "gl-sfx");
				break;
 			case "gl-ws":
        subLoad('/html/gallery.html', "galleryMN", "gl-ws");
				break;

    case "servicesMN":
      navLoad(this, '/html/services.html');
      break;
      case "bas-mu":
        subLoad('/html/services.html', "servicesMN", "bas-mu");
				break;
 			case "bas-nails":
        subLoad('/html/services.html', "servicesMN", "bas-nails");
				break;
 			case "bas-hair":
        subLoad('/html/services.html', "servicesMN", "bas-hair");
				break;
 			case "bas-sfx":
        subLoad('/html/services.html', "servicesMN", "bas-sfx");
				break;
 			case "bas-ws":
        subLoad('/html/services.html', "servicesMN", "bas-ws");
				break;

    case "shopMN":
      navLoad(this, '/html/shop.html');
      break;
      case "sh-mu":
        subLoad('/html/shop.html', "shopMN", "sh-mu");
				break;
 			case "sh-sfx":
        subLoad('/html/shop.html', "shopMN", "sh-sfx");
				break;
 			case "sh-kits":
        subLoad('/html/shop.html', "shopMN", "sh-kits");
				break;

    case "abtusMN":
      navLoad(this, '/html/about_us.html');
      break;
    default:
      navLoad(this, '/html/home.html');      
      break;
  }

}

function filtFunc(e) {
  console.log("Check box id =" + e.id);
}