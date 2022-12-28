
function setError(id,error){
    const element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function clearErrors(){
    const errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML="";
    }
}


function validateForm(){
    var retval = true;
    clearErrors()
    var name = document.forms['myform']["fname"].value;
    if(name.length<5){
        retval =false;
        setError("name","*lenght is too short");
    }
   
    var phone = document.forms['myform']["fphone"].value;
    if(phone.length!=10){
        retval =false;
        setError("phone","*lenght should be 10");
    }

    var pass = document.forms["myform"]["pass"].value;
    if(pass.length<8){
        retval =false;
        setError("pass","*Passwod too small");
    }

     var cpass = document.forms["myform"]["cpass"].value;
        if(cpass!=pass){
            retval =false;  
            setError("cpass","*Passwod donot match");
        }
    return retval;
}

