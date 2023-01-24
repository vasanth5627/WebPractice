button_div = document.getElementsByClassName('button');
inp_div = document.getElementById("inp");
var values=[];
var val='';
var tval='';
var result=0;



button_div[0].addEventListener('click', function(){
    val='';
    tval='';
    values=[];
    inp.value='';
})

button_div[1].addEventListener('click',function(){
    val+=button_div[1].value;
    tval+=button_div[1].value;
     inp.value=tval;
    console.log(button_div[1].value);
});


button_div[2].addEventListener('click',function(){
    val+=button_div[2].value;
    tval+=button_div[2].value;
    inp.value=tval;
    console.log(button_div[2].value);
});


button_div[3].addEventListener('click',function(){
    val+=button_div[3].value;
    tval+=button_div[3].value;
    inp.value=tval;
    console.log(button_div[3].value);
});


button_div[4].addEventListener('click',function(){
    if(val.length>0){
    tval+=button_div[4].value;
    values.push(Number(val));
    val='';
    values.push('/');
    inp.value=tval;
    }
   console.log(button_div[4].value);
   console.log(values);
});



button_div[5].addEventListener('click',function(){
    val+=button_div[5].value;
    tval+=button_div[5].value;
    inp.value=tval;
   console.log(button_div[5].value);
});


button_div[6].addEventListener('click',function(){
    val+=button_div[6].value;
    tval+=button_div[6].value;
    inp.value=tval;
    console.log(button_div[6].value);
});


button_div[7].addEventListener('click',function(){
    val+=button_div[7].value;
    tval+=button_div[7].value;
    inp.value=tval;
     console.log(button_div[7].value);
});




button_div[8].addEventListener('click',function(){
    if(val.length>0){
    values.push(Number(val));
    val='';
    values.push('-');
    tval+=button_div[8].value;
    inp.value=tval;
    }
    console.log(values);
    console.log(button_div[8].value);
});



button_div[9].addEventListener('click',function(){
    val+=button_div[9].value;
    tval+=button_div[9].value;
    inp.value=tval;
    console.log(button_div[9].value);
});




button_div[10].addEventListener('click',function(){
    val+=button_div[10].value;
    tval+=button_div[10].value;
    inp.value=tval;
    console.log(button_div[10].value);

});



button_div[11].addEventListener('click',function(){
    val+=button_div[11].value;
    tval+=button_div[11].value;
    inp.value=tval;
    console.log(button_div[11].value);
});



button_div[12].addEventListener('click',function(){
    if(val.length>0){
    tval+=button_div[12].value;
    values.push(Number(val));
    val='';
    values.push('+');
    inp.value=tval;
    }
    console.log(values);
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
    tval+=button_div[14].value;
    inp.value=tval;
    }
    console.log(button_div[14].value)
});




button_div[15].addEventListener('click',function(){
    // if(values.length>0 && Number(val)>0){

    // }
    if(values.length>1 && Number(val)!=0){
        tval='';
        if(Number(val)>0){
            values.push(Number(val));
        }
           
        calculate1(values);
       
    }
    console.log(button_div[15].value);
    
});


    
button_div[16].addEventListener('click',function(){
    if(val.length>0){
    tval+=button_div[16].value;
    values.push(Number(val));
    val='';
    values.push('*');
    inp.value=tval;
    }
   


    console.log(values);
    console.log(button_div[16].value)
});


function calculate1(values){
     if(values.length<3){
        if(values.length>1)
        values.pop();
        inp.value=values[0];
        console.log(values);
        return;
     }
     else{
            if(Number(values[values.length-1]==0)){
                values.pop();
            }

            for(var i=0;i < values.length;i++){
                if(values[i]=='/'){
                        values.splice(i,1);
                        var a = Number(values.splice(i-1,1));
                        var b  = Number(values.splice(i+1,1));
                        values.splice(i,0,Number(a/b));
                }
            }
            if(values.length>1){
                for(var i=0;i < values.length;i++){
                    if(values[i]=='*'){
                            values.splice(i,1);
                            var a = Number(values.splice(i-1,1));
                            var b  = Number(values.splice(i+1,1));
                            values.splice(i,0,Number(a*b));
                    }
                }
            }

            if(values.length>1){
                for(var i=0;i < values.length;i++){
                    if(values[i]=='+'){
                            values.splice(i,1);
                            var a = Number(values.splice(i-1,1));
                            var b  = Number(values.splice(i+1,1));
                            values.splice(i,0,Number(a+b));
                    }
                }
            }
            if(values.length>1){
                for(var i=0;i < values.length;i++){
                    if(values[i]=='-'){
                            values.splice(i,1);
                            var a = Number(values.splice(i-1,1));
                            var b  = Number(values.splice(i+1,1));
                            values.splice(i,0,Number(a-b));
                    }
                }
            }
            
            tval=values[0];
            val='';
            inp.value=values[0];
            values=[];
            console.log(val+" "+tval)
    }
    console.log(values);
}

function calculate(){
    var ans= eval()
}