const clickme_div = document.getElementById('click-me');
const supContainer_div = document.querySelector('.sup-container');
const text_div = document.getElementById('text');
const head_div = document.getElementsByTagName('h3');
const span_div = document.getElementsByTagName('span');
const name_div =  document.getElementById("name");

let isdisplay = false;

clickme_div.addEventListener("click", function(){
    if(!isdisplay){
        name_div.innerHTML = 'Please &nbsp<img src="grape-fruit.png" alt="disco" width="60px"> '
        supContainer_div.style.display='block';
        text_div.style.display='block';
        clickme_div.style.bottom='-50px'
        clickme_div.innerHTML = 'Thanks &nbsp <img src="octopus.png" alt="disco" width="30px">'
        clickme_div.style.display = 'flex'
        clickme_div.style.alignItems = 'center'
        head_div[0].style.display= 'none';
        isdisplay=true;
    }
    else{
        name_div.innerHTML = 'Hi Draksha!!!'
        supContainer_div.style.display='none';
        text_div.style.display='none';
        clickme_div.style.bottom='-20px';
        clickme_div.innerHTML = '<img src="disco-ball.gif" alt="disco" width="20px"> click Me!!!';
        head_div[0].style.display = 'block';
      
        isdisplay=false;
        

    }
   
    

});

let isborder  =true;
window.setInterval(blink,500);

function blink(){
    if(isborder){   
        clickme_div.style.border = 'none';
        span_div[0].style.display= 'none';
        isborder=false;
    }
    else{
        if(!isdisplay)
        clickme_div.style.border = '5px solid #1C68A0';
        span_div[0].style.display= 'inline';
        isborder=true;
    }
    
}