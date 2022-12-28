
const col_div1 = document.getElementById("col1")
const col_div2 = document.getElementById("col2");
function colsr(){
    col_div1.classList.remove('col');
    col_div2.classList.remove('col');
//     col_div1.remove();
//     col_div2.remove();
  }
function colsa(){
    col_div1.classList.add('col');
    col_div2.classList.add('col');
    // var tag = document.createElement("span");
    // var text = document.createTextNode(" :");
    // tag.appendChild(text);
    // col_div1.appendChild(tag)
    // col_div2.appendChild(tag);
}


function clock(){
  
    setInterval(colsr, 100);
    setInterval(colsa, 1000);
    const fullDate = new Date();
    const hours = fullDate.getHours();
    const mins = fullDate.getMinutes();
    const secs = fullDate.getSeconds();

    const hours_div = document.getElementById("hr");
    const mins_div = document.getElementById("min");
    const secs_div = document.getElementById("sec");

    if(hours < 10){
        hours_div.textContent = "0"+hours;
    }
    else{
        hours_div.textContent = hours;
    }
    if(mins < 10){
        mins_div.textContent = "0"+mins;
    }
    else{
        mins_div.textContent = mins;
    }
    if(secs < 10){
        secs_div.textContent = "0"+secs;
    }
    else{
        secs_div.textContent = secs;
    }
    
}


setInterval(clock, 100);
