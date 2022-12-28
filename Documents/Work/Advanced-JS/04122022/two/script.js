const grey_div = document.querySelector('.grey');
const white_div = document.querySelector('.white');
const blue_div = document.querySelector('.blue');
const yellow_div = document.querySelector('.yellow');
const main_div = document.querySelector('body');
const colors_div = document.querySelector('.colors');

// grey_div.addEventListener("click", function(){
//     main_div.style.backgroundColor = 'grey';
// })
// white_div.addEventListener("click", function(){
//     main_div.style.backgroundColor = 'white';
// })
// blue_div.addEventListener("click", function(){
//     main_div.style.backgroundColor = 'blue';
// })
// yellow_div.addEventListener("click", function(){
//     main_div.style.backgroundColor = 'yellow';
// })


// for(let i=0;i<colors_div.children.length;i++){
//     console.log(colors_div.children[i].className)
// }

colors_div.addEventListener("click",function(e){
   if(e.target.className=='grey'){
    main_div.style.backgroundColor = 'grey';
   }
   if(e.target.className=='white'){
    main_div.style.backgroundColor = 'white';
   }
   if(e.target.className=='blue'){
    main_div.style.backgroundColor = 'blue';
   }
   if(e.target.className=='yellow'){
    main_div.style.backgroundColor = 'yellow';
   }
})