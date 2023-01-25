let i=0;
let length = 0;

let score = 0;
const btn  = document.querySelector('.btn');
const box = document.querySelector('.box');

btn.addEventListener('click', nextq);
async function nextq(){
    if(i<length){
        const res = await fetch('questions.json');
        const data = await res.json();
        const correct = data[i].correct;
        const input = document.querySelectorAll('input[type=radio]')
    input.forEach(element =>{
        if(element.checked){
            if(element.value == correct){
                score++;
               
            }
            if(i<length){
                i++;
                element.checked = false;
               if(i<length) getData();
               else end();
            }
            
        }
        
    })
   
    }


}

function end(){
box.style.display = 'none';
const score_div = document.querySelector('.score');
score_div.style.display='block';
console.log(score_div)
score_div.textContent = "You Scored: "+score +" points";


}

//  function getRight(i){
  
//     fetch('questions.json').then((res)=> {return res.json()}).then((data)=>{
//         console.log(data[i].correct)
//         return data[i].correct})
// }

async function getData(){
    const res = await fetch('questions.json');
    const data = await res.json();
    length = data.length;
    const head = document.getElementById('head');
    head.innerText = data[i].question;
    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }
    let c  ='a';
    const label = document.querySelectorAll('label')
    let k=0;
    label.forEach(element =>{
        element.innerText = data[i][c]
        c=nextChar(c);
    })
}

getData();



