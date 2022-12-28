let userScore = 0; //normal-variable
let computerScore=0; //normal-variable
let ingame=false;

//caching the DOM 
const userScore_span = document.getElementById("user-score"); //dom-variable
const compScore_span = document.getElementById("comp-score"); //dom-variale
const scoreBoard_div = document.querySelector(".score-board");
const reset_div = document.getElementById("reset");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const btn1_div = document.getElementById("btn1");
const target_div = document.getElementById("target");
const target_div1 = document.getElementById("target1");
const greet_div = document.getElementById("greet");
const action_div = document.getElementById("action-message");

// console.log(userScore_span.textContent)
// console.log(compScore_span.textContent);
// console.log(target_div.textContent);
let target = Number(target_div1.textContent);
reset_div.addEventListener('click', function(){
    location.reload();
});


    btn1_div.addEventListener('click', function(){
        if(ingame==false && (userScore==0 && computerScore==0)){
        target = prompt('please enter the target');
        if(isNaN(target)){
          alert("please enter a number")
        }
        else{
          target_div.textContent=target;
          target_div1.textContent=target;
        }
    }
    else{
        alert("already in a game");
    }
  });






    function getcomputerChoice(){
        const choices = ['r','p','s'];
        const rn = Math.floor(Math.random()*3);
        return choices[rn];
    }

    function draw(userChoice){
        result_div.textContent="NP!!! It's a Draw 🫢 🫢 🫢";
        document.getElementById(userChoice).classList.add('greyglow');
        setTimeout(function(){
            document.getElementById(userChoice).classList.remove('greyglow');
        },300);
        console.log("draw");
    }
    function win(userChoice){
    ++userScore;
    userScore_span.textContent=userScore;
    result_div.textContent="Yay! You Won this round 🔥 🔥 🔥";
    document.getElementById(userChoice).classList.add('greenglow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('greenglow');
    },300);
    console.log("us "+userScore);
    if(userScore==target){
        gameover();
        
    }

    }
    function lose(userChoice){
        ++computerScore;
    compScore_span.textContent=computerScore;
    result_div.textContent="OOPS! You Lost this round 🥲 🥲 🥲";
    document.getElementById(userChoice).classList.add('redglow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('redglow');
    },300);
    console.log("cs "+computerScore)
    if(computerScore==target){
        gameover();
        
    }
    }

    function game(userChoice){
        const compChoice = getcomputerChoice();
    
        document.getElementById(userChoice).classList.remove('greenglow');
        document.getElementById(userChoice).classList.remove('greyglow');
        if(userChoice==compChoice){
            draw(userChoice);
            return;
        } 
        switch(userChoice + compChoice){
            case "rs":
            case "pr":
            case "sp":
                win(userChoice); break;
            case "rp":
            case "ps":
            case "sr":
                lose(userChoice); break;
        }
    }



        main(); //start of code 




    function main(){

            rock_div.addEventListener('click', function(){
                if(userScore<target && computerScore<target){
                    game("r");
                    ingame=true;
                }
                else{
                    gameover();
                    ingame=false;
                }
            });
            paper_div.addEventListener('click', function(){
              
                if(userScore<target && computerScore<target){
                    game("p");
                    ingame=true;
                  
                }
                else{
                    gameover();
                  
                }
            });
            scissors_div.addEventListener('click', function(){
        
                if(userScore<target && computerScore<target){
                     game("s");
                     ingame=true;
                  
                }
                else{
                    gameover();
                    
                }
            });

        }

        function gameover(){
            ingame=false;
            console.log('game over');
            if(userScore==target){
                greet_div.textContent="YAY!!! Congratulations, You defeated Computer"
            }
            if(computerScore==target){
                greet_div.textContent="SHAME!!!! You Lost to Computer"
            }
            action_div.textContent="Click on Play Again button"
        }
        


