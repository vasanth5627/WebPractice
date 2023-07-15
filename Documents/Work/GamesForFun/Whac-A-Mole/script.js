const play = document.getElementById('play-btn');
let playing = false;


const squares = document.querySelectorAll('.square');
const scoreDiv = document.getElementById('score')
const timeLeft = document.getElementById('time-left');
const time =  timeLeft.textContent;
let timer;
let move;
let score;


play.addEventListener('click',playGame);

function playGame(){
    if(playing===false){
        playing = true;
        let currentTime = Number(timeLeft.textContent);
       
      move =  setInterval(()=>{
            mole();},500)

         score = 0;
        let hit = null;
        function mole(){
            squares.forEach(s=>s.classList.remove('mole'))
            let ran = Math.round(Math.random()*8);
            hit = ran;
            squares[ran].classList.add('mole');
        }

        squares.forEach(s=>{
            s.addEventListener('mousedown',()=>{
                if(s.id == hit+1) {
                    score++;
                    scoreDiv.textContent = score;
                    hit = null;
                }
            })
        })

      timer =   setInterval(()=>{
            if(currentTime==0){
                endGame();
            
            
            }
            else{
                currentTime--;
                timeLeft.textContent = currentTime;
            }
       

        },1000)
    }
}

function endGame(){
    clearInterval(timer)
    clearInterval(move)
    squares.forEach(e=>e.classList.remove('mole'))
    playing = false;
    timeLeft.textContent = time;
    scoreDiv.textContent = 0;
    alert(`Game Over!! Your Score ${score}`)
    
}
