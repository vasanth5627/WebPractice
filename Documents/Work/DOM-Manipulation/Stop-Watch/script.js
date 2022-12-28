const startstopbtn_div = document.querySelector('#startstopbtn');
const resetbtn_div = document.querySelector('#resetbtn');



let seconds = 0;
let minutes = 0;
let hours  = 0;

let timeInterval = null;
let timerStatus = "stopped";

function stopwatch(){
  
    seconds++;
    if(seconds/60==1){
        seconds=0;
        minutes++;
    
    if(minutes/60==1){
        minutes=0;
        hours++;
    }
}


    let displaytimer = document.getElementById('timer').innerText= addzero(hours)+":"+addzero(minutes)+":"+addzero(seconds);
}

function addzero(time){
 if(time<=9){
    return "0"+time;
 }
 else{
    return time;
 }
}

// window.setInterval(stopwatch, 1000);

startstopbtn_div.addEventListener("click", function(){
    if(timerStatus=="stopped"){
        timeInterval = window.setInterval(stopwatch,1000);
        document.getElementById('startstopbtn').innerHTML = '<i class = "fa-solid fa-pause" id = "pause"></i>'
        timerStatus = "started";
        }
        else{
            window.clearInterval(timeInterval);
            document.getElementById('startstopbtn').innerHTML = `<i class = "fa-solid fa-play" id = "play"></i>`
            timerStatus = "stopped";

        }

});


resetbtn_div.addEventListener("click", function(){
    window.clearInterval(timeInterval);
    seconds=0;
    minutes=0;
    hours=0;

    document.getElementById('timer').innerText = "00:00:00";
    document.getElementById('startstopbtn').innerHTML = `<i class = "fa-solid fa-play" id = "play"></i>`
    timerStatus = "stopped";

})

