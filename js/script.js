console.log("this is in working condition");

var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

sideNav.style.right = "-250px"

menuBtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src = "img/close.png";
} 
else {
    sideNav.style.right = "-250px";
    menu.src = "img/menu.png";
    
  }
};

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 600,
  speedAsDuration:true
});

// window.scroll({
//   top: 1000,
//   behavior: 'smooth'  // 👈 
// });

// document
//   .getElementById('footer')
//   .scrollIntoView({ behavior: 'smooth' });