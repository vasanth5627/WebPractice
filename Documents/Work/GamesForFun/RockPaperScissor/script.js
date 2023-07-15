const cpChoice = document.getElementById('computer-choice');
const usChoice = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.choice-button');
const playGame = document.querySelector('.play')
possibleChoices.forEach(e => e.addEventListener('click',()=>{
    resultDisplay.textContent = '';
    usChoice.textContent = e.textContent
    usChoice.style.color = 'blue'
}));
resultDisplay.style.color = 'RED';
playGame.addEventListener('click',()=>{
   
    if(usChoice.textContent.length>0){
        cpChoice.textContent = possibleChoices.item(Math.floor((Math.random()*3))).textContent;
        cpChoice.style.color = 'green'

        const choice = [usChoice.textContent,cpChoice.textContent];
         if(choice[0]==choice[1]){
            resultDisplay.textContent = "It's a Draw";
            return;
         } 
         

         if(choice[0]=='Rock' || choice[1]=="Rock"){
            if(choice[0]=='Scissor'|| choice[1]=="Scissor"){
                if(usChoice.textContent == "Rock" ){
                    resultDisplay.textContent = "You Win!!"
                } 
                else{
                    resultDisplay.textContent = "Computer Wins!!"
                }                 
            }
            else{
                if(usChoice.textContent == "Rock" ){
                    resultDisplay.textContent = "Computer Win!!"
                } 
                else{
                    resultDisplay.textContent = "You Win!!"
                }   
            }
         }

         if(choice[0]=='Paper' || choice[1]=="Paper"){
            if(choice[0]=='Scissor'|| choice[1]=="Scissor"){
                if(usChoice.textContent == "Paper" ){
                    resultDisplay.textContent = "Computer Wins!!"
                } 
                else{
                    resultDisplay.textContent = "You Win!!"
                }                 
            }
            else{
                if(usChoice.textContent == "Rock" ){
                    resultDisplay.textContent = "User Wins!!"
                } 
                else{
                    resultDisplay.textContent = "Computer Wins!!"
                }   
            }
         }

         if(choice[0]=='Scissor' || choice[1]=="Scissor"){
            if(choice[0]=='Rock'|| choice[1]=="Rock"){
                if(usChoice.textContent == "Rock" ){
                    resultDisplay.textContent = "You Win!!"
                } 
                else{
                    resultDisplay.textContent = "Computer Wins!!"
                }                 
            }
            else{
                if(usChoice.textContent == "Paper" ){
                    resultDisplay.textContent = "Computer Win!!"
                } 
                else{
                    resultDisplay.textContent = "You Win!!"
                }   
            }
         }


         
       
        
    }
    else resultDisplay.textContent = 'Select User Choice';
   
})






