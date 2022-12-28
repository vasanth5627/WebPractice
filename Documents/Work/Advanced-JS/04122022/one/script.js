const digit_div =  document.querySelector('.digit');
const decrease_div = document.querySelector('.decrease');
const reset_div = document.querySelector('.reset');
const increase_div = document.querySelector('.increase');
const msg_div = document.querySelector(".msg");
console.log(msg_div)
let val = digit_div.textContent;
msg_div.style.display='none';
decrease_div.addEventListener("click",function(){
    if(val>0){
        val--;
        digit_div.textContent=val;
    }
    else{
        digit_div.style.color='red';
        msg_div.style.display = 'block';
        msgappear()
    }
});







function msgappear(){
    setTimeout(function(){
        msg_div.style.display = 'none';
    },2000);
    
}

increase_div.addEventListener("click",function(){
    val++;
    digit_div.textContent = val;
    digit_div.style.color = 'green';
    msg_div.style.display = 'none';
})

reset_div.addEventListener("click",function(){
    val=0;
    digit_div.textContent=val;
    digit_div.style.color = 'black';
    msg_div.style.display = 'none';
})