//DOM Manipulation

// Event Listners

//element.addEventListner("click", function(){});

const btn_div = document.querySelector('.btn-1');

function alertbtn(){
    alert("button-1 clicked");
}

btn_div.addEventListener("click", alertbtn);

//mouseover

btn_div.addEventListener("mouseover",(function(){
    if(btn_div.style.backgroundColor != 'red' )btn_div.style.backgroundColor = 'red';
    else{
        btn_div.style.backgroundColor = null
    }
}))

const revalbtn_div = document.querySelector('.reveal-btn');

const hidden_div  = document.querySelector('.hidden-content');


function revealcontent(){
    if(hidden_div.classList.contains('reveal-btn')){
        hidden_div.classList.remove('reveal-btn')
    }
    else{
        hidden_div.classList.add('reveal-btn')
    }
}

revalbtn_div.addEventListener("click",revealcontent)


// window.addEventListener("click",function(){
//     console.log("window");
// },false);


// document.addEventListener("click",function(){
//     console.log("document");
// },false)


// document.querySelector(".div2").addEventListener('click',function(e){
//     e.stopPropagation();
//     console.log("DIV-2");
// },{once:true});

// document.querySelector(".div1").addEventListener('click',function(){
//     console.log("DIV-1");
// },false);


// document.querySelector(".button").addEventListener("click", function(e){
//     console.log(e);
// },false);

// document.querySelector(".button").addEventListener("click", function(e){
//     console.log(e.target);
// },false);

// document.querySelector(".button").addEventListener("click", function(e){
//     e.preventDefault();
//     e.target.innerText = 'clicked'
// },false);

//event-delegation: It allows users to append a SINGLE event listner to a parent 
//to a parent element that adds it to all of its present and future descendants that match a selector.


// 


document.querySelector('#sports').addEventListener('click',function(e){
    console.log(e.target.getAttribute('id')+' is clicked');
    const target = e.target;
    if(target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
});


const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText='cricket';
newSport.setAttribute('id','cricket');

sports.appendChild(newSport);