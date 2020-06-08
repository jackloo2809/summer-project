const container = document.querySelector('#post-container');
const posts = document.querySelectorAll('.post');

const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
var counter = 0;

console.log(posts[counter]);


nextBtn.addEventListener('click',()=>{
	if(counter == posts.length-1){
		return;
	}
	posts[counter].style.opacity = 0;
	counter++;
	posts[counter].style.opacity=1;
});


prevBtn.addEventListener('click',()=>{
	if(counter == 0){
		return;
	}
	posts[counter].style.opacity = 0;
	counter--;
	posts[counter].style.opacity=1;
});