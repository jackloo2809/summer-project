const menuToggle = document.getElementById("menu-toggle");
const links = document.querySelector('#links');

menuToggle.addEventListener("click", navMenu);

function navMenu() {
    console.log(links.className)
    if(links.className != 'show-menu'){
        links.className = 'show-menu';
    }else{
        links.className = '';
    }
}



//------------------------- script for about fade ---------------- //

var featureBounds = document.getElementById("feature").getBoundingClientRect();
var info = document.getElementById("info");

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    if(scrolled >=featureBounds.height*0.3){
        info.style.opacity = 1;
    }else{
        info.style.opacity = 0;
    }
});