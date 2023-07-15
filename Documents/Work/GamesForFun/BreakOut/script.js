const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20
const boardWidth = 560
const userStart = [230,10]
const ballStart = [270,40]
let currentPosition = userStart
let ballCurrentPosition = ballStart
class Block{
    constructor(xAxis,yAxis){
        this.bottomLeft = [xAxis,yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]


    }
}
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
  ]

//create a block
function addBlocks(){
    for(let i=0;i<blocks.length;i++){
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0]+'px';
        block.style.bottom = blocks[i].bottomLeft[1]+'px';
        grid.appendChild(block)
    }



}

addBlocks();

//add user

const user = document.createElement('div');
user.classList.add('user')
drawUser();
grid.appendChild(user)

//draw the user
function drawUser(){
    user.style.left = currentPosition[0]+'px';
    user.style.bottom = currentPosition[1]+'px';
}
//move user

document.addEventListener('keydown',moveUser)

function moveUser(e){
    switch(e.key){
        case 'ArrowLeft':
            if(currentPosition[0]>0){
                currentPosition[0]-=10;
                drawUser();
            }
            break; 
        case 'ArrowRight':
            if(currentPosition[0]<boardWidth-blockWidth){
                currentPosition[0]+=10;
                drawUser();
            }
            break; 


    }
}

 //add ball

 const ball = document.createElement('div');
 ball.classList.add('ball')
drawBall()
 grid.appendChild(ball)

 //draw ball
 function drawBall(){
    ball.style.left = ballCurrentPosition[0]+'px';
    ball.style.bottom = ballCurrentPosition[1]+'px';
 }

 //move ball
 function moveBall(){
    ballCurrentPosition[0]+=2;
    ballCurrentPosition[1]+=2;
    drawBall();
 }

 //setInterval(moveBall,30)

 //check for collisons

 function checkForCollisons(){
    
 }

