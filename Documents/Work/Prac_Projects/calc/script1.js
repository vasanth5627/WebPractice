button_div = document.getElementsByClassName('button');
inp_div = document.getElementById("inp");
var val='';

button_div[1].addEventListener('click',function(){
    val+=button_div[1].value;
    inp.value=val;
    console.log(button_div[1].value);
});


button_div[2].addEventListener('click',function(){
    val+=button_div[2].value;
    inp.value=val;
    console.log(button_div[2].value);
});


button_div[3].addEventListener('click',function(){
    val+=button_div[3].value;
    inp.value=val;
    console.log(button_div[3].value);
});


button_div[4].addEventListener('click',function(){
    if(val.length>0){
    val+=button_div[4].value;
    inp.value=val;
    }
   console.log(button_div[4].value);
  
});



button_div[5].addEventListener('click',function(){
    val+=button_div[5].value;
    inp.value=val;
   console.log(button_div[5].value);
});


button_div[6].addEventListener('click',function(){
    val+=button_div[6].value;
    inp.value=val;
    console.log(button_div[6].value);
});


button_div[7].addEventListener('click',function(){
    val+=button_div[7].value;
    inp.value=val;
     console.log(button_div[7].value);
});




button_div[8].addEventListener('click',function(){
    if(val.length>0){
    val+=button_div[8].value;
    inp.value=val;
    }
    console.log(values);
    console.log(button_div[8].value);
});



button_div[9].addEventListener('click',function(){
    val+=button_div[9].value;
    inp.value=val;
    console.log(button_div[9].value);
});




button_div[10].addEventListener('click',function(){
    val+=button_div[10].value;
    inp.value=val;
    console.log(button_div[10].value);

});



button_div[11].addEventListener('click',function(){
    val+=button_div[11].value;
    inp.value=val;
    console.log(button_div[11].value);
});



button_div[12].addEventListener('click',function(){
    if(val.length>0){
    val+=button_div[12].value;
    inp.value=val;
    }
  
    console.log(button_div[12].value);
});




button_div[13].addEventListener('click',function(){
    if(val.length>0){
    val+=button_div[13].value;
    tval+=button_div[13].value;
    inp.value=tval;
    }
    console.log(button_div[13].value);
});




button_div[14].addEventListener('click',function(){
    if(val.length>0){
    val+=button_div[14].value;
    inp.value=val;
    }
    console.log(button_div[14].value)
});




button_div[15].addEventListener('click',function(){
    // if(values.length>0 && Number(val)>0){

    // }
    if(val.length>2){
    
        calculate(val);
       
    }
    console.log(button_div[15].value);
    
});



button_div[16].addEventListener('click',function(){
    if(val.length>0){
        val+=button_div[16].value;
        inp.value=val;
    }

    console.log(button_div[16].value)
});



function calculate(val){
    var ans= eval(val)
  
    inp.value=ans;
    val=ans;
    console.log(val);
}

