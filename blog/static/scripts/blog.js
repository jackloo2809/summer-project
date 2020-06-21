var posts = document.getElementsByClassName("posts");
var titles = document.querySelectorAll('.post-title');
var descriptions = document.querySelectorAll('.text');
var postLinks = document.getElementsByName(".links");



function showText(){
    var index=0;
    for(index; index< titles.length; index++){
        if(titles[index] == event.srcElement){
            break;
        }
    }

    var height = descriptions[index].scrollHeight;
    var collapsed = Boolean(descriptions[index].clientHeight == 0);

    
    if(collapsed){

        console.log("initial height: " + descriptions[index].clientHeight);
        descriptions[index].style.height = height; 
    }else{
        descriptions[index].style.height = null;
        console.log("expanded height: " + descriptions[index].clientHeight);
    }
    
    
}

for(var i=0; i<titles.length; i++){
    titles[i].addEventListener("click", showText);
}