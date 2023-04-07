document.addEventListener("contextmenu", function(e){
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);

window.onscroll = function() {onScroll()};

var navbar = document.getElementById("topnav");
var sticky = navbar.offsetTop;


function topnavBurger() {
    var x = document.getElementById("topnav");
        
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function onScroll() {
    if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
    } else {
            navbar.classList.remove("sticky");
    }
}