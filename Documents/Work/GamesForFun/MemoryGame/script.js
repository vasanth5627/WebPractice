const cardArray = [
    {
        name : 'fries',
        img: 'images/fries.png'
    },
    {
        name : 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name : 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name : 'pizza',
        img: 'images/pizza.png'
    },
    {
        name : 'fries',
        img: 'images/fries.png'
    },
    {
        name : 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name : 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img: 'images/milkshake.png'
    },  
    {
        name : 'pizza',
        img: 'images/pizza.png'
    }

]

cardArray.sort(()=>0.5-Math.random());

const gridDisplay  = document.querySelector('#grid');
const score = document.getElementById('result');
let s = 0;
createBoard();

function createBoard(){
    let i=1;
    cardArray.forEach((e)=>{
        const ele = document.createElement('img');
        ele.src = 'images/blank.png';
        ele.className = "image"
        ele.id = i++;
        ele.addEventListener('click' ,flipCard)
        gridDisplay.appendChild(ele)
       
    })

   
}
let cardArrayChosen = [];
let cardIds = [];
function flipCard(){
   const imgId =  this.getAttribute('id');
   cardArrayChosen.push(cardArray[imgId-1]); 
   cardIds.push(imgId-1);
   this.src = cardArray[imgId-1].img;
   console.log(cardArrayChosen)
  if(cardArrayChosen.length==2){
    setTimeout(checkMatch,500);

  }
   
}

function checkMatch(){
    const cardEle = document.querySelectorAll('.image');
    if(cardArrayChosen[0].name==cardArrayChosen[1].name && cardIds[0]!=cardIds[1]){
        alert('You found a match');
        s++;
        cardIds.forEach(e=>{
            cardEle[e].src = 'images/white.png';
            cardEle[e].removeEventListener('click',flipCard)
        })
        if(s==cardArray.length/2) score.textContent = 'Congratulations, You found them All!!'
        else score.textContent = s;
    }
    else{
        cardIds.forEach(e=>{cardEle[e].src = 'images/blank.png'})
        alert('You failed to find a match')
    }
    cardArrayChosen = [];
    cardIds = [];
}