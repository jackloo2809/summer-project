
//-------------------- Navbarhighlight ---------------//
switch(document.title){
    case "JL - Home":
        document.getElementsByClassName("nav-link")[0].classList.add("active");
        break;
    case "JL - Blog":
        document.getElementsByClassName("nav-link")[1].classList.add("active");
        break;
    case "JL - Profile":
        document.getElementsByClassName("nav-link")[2].classList.add("active");
    break;    
}

//-------------------- Navbar mobile -----------------//
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
