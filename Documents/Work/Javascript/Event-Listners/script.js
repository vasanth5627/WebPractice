const grandParent = document.querySelector('.grandparent');
const Parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// grandParent.addEventListener('click',e => {
//     console.log("grandparent capture");
// },{capture:true});

// grandParent.addEventListener('click',e => {
//     console.log("grandparent bubble");
// });

// Parent.addEventListener('click',e =>{
//    // e.stopPropagation() //stops propgation at parent
//     console.log("parent capture");
// },{capture:true})


// Parent.addEventListener('click',printhi);

// setTimeout(() => {
//     Parent.removeEventListener('click',printhi)
// },2000)

// child.addEventListener('click',e =>{
//     console.log("child capture");
// },{capture:true})

// child.addEventListener('click',e =>{
//     console.log("child bubble");
// })

// document.addEventListener("click", e =>{
//     console.log("document capture")
// },{capture:true})

// document.addEventListener("click", e =>{
//     console.log("document bubble")
// })

// function printhi(){
//     console.log("hi");
// }

const divs = document.querySelectorAll("div");

// divs.forEach(div => {
//     div.addEventListener('click',()=>{
//         console.log("hi")
//     })
// })

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";
document.body.appendChild(newDiv);


// document.addEventListener("click",function(e){
//     if(e.target.matches('div')){ //can we use class instead of element
//         console.log("hi")
//     }
// })

addGlobalEventListner("click",'div',function(){
    console.log("hi");
})

function addGlobalEventListner(type, selector, callback){
    document.addEventListener(type,function(e){
        if(e.target.matches(selector)) callback(e)
    })
}