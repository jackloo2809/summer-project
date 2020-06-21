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