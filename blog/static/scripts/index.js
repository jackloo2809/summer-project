const menuToggle = document.getElementById("menu-toggle");
const links = document.querySelector('#links');

menuToggle.addEventListener("click", myFunction);

function myFunction() {
    console.log(links.className)
    if(links.className != 'show-menu'){
        links.className = 'show-menu';
    }else{
        links.className = '';
    }
}