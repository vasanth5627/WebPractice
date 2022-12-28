
    function onFormSubmit(retval){
        if(retval){
            var formData = readFormData();
            insertNewData(formData);
            clearFormData();
        }
    

    }
    function clearFormData(){
        const form_div = document.querySelectorAll('input');
            for(let item of form_div){
                item.value="";
            }
    }

    function readFormData(){
        var formData = {};
        formData["name"] = document.getElementById('name');
        formData["email"] = document.getElementById('email');
        formData["setpassword"] = document.getElementById('pass');
        formData["cpass"] = document.getElementById('cpass');
        return formData;
        
    }

    function insertNewData(data){
        var table = document.getElementById('employee-list').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.name.value;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.email.value;

    }

    function setError(id,error){
        const element = document.getElementById(id);
        console.log(element);
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
        var name = document.forms['myform']["name"].value;
        if(name.length<5){
            
            retval =false;
            setError("name1","*length is too short");
        }
    
        

        var pass = document.forms["myform"]["password"].value;
        if(pass.length<8){
            retval =false;
            setError("passid","*Passwod too small");
        }

        var cpass = document.forms["myform"]["cpass"].value;
            if(cpass!=pass){
                retval =false;  
                setError("cpassid","*Passwod don't match");
            }
        return onFormSubmit(retval);
    }

