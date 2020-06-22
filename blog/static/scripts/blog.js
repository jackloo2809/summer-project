var posts = document.getElementsByClassName("posts");
var titles = document.querySelectorAll('.post-title');
var descriptions = document.querySelectorAll('.text');
var postLinks = document.getElementsByName(".links");


/*
var minheight = 0;
var counter =0;
var maxheight = document.body.scrollHeight;
var increment = maxheight/titles.length;
var currentpost = 0;
*/
var currentpost = 0;
descriptions[currentpost].style.height =  descriptions[currentpost].scrollHeight;
var step = (document.body.scrollHeight- document.querySelector("#content img").height) / titles.length;
var counter = 0;
console.log(step);

document.body.addEventListener("wheel", ()=>{
    
    counter+= event.deltaY;

    if(counter>step){
        counter=0;
        if(currentpost!=titles.length-1){
            descriptions[currentpost].style.height = null;
            currentpost++;
            descriptions[currentpost].style.height =  descriptions[currentpost].scrollHeight;  
        }
    }
    
    if(counter < (step*-1)){
        counter=0;
        if(currentpost!=0){
            descriptions[currentpost].style.height = null;
            currentpost--;
            descriptions[currentpost].style.height =  descriptions[currentpost].scrollHeight; 
        }
    }
    /*
    if((counter + event.deltaY)>=minheight && (counter + event.deltaY)<=maxheight){
        counter += event.deltaY; 
        
        currentpost = Math.floor(counter/increment);
    }
    descriptions[currentpost].style.height =  descriptions[currentpost].scrollHeight; 
    */
});





descriptions[currentpost].style.height =  descriptions[currentpost].scrollHeight; 

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
        descriptions[index].style.height = height; 
    }else{
        descriptions[index].style.height = null;
    }
    
    
}

for(var i=0; i<titles.length; i++){
    titles[i].addEventListener("click", showText);
}