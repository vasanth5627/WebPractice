const btn = document.querySelectorAll('button');
const ans = document.querySelector('.ans');
const error = document.querySelector('.error');
let exp = '';


function clear(){
    exp = '';
    ans.innerText = '';
}

function result(){
    console.log(exp)
    exp = eval(exp).toString();
    ans.innerText = exp;  
}

function err(){
    error.style.display = 'block';
    error.textContent = 'Please Enter a Valid Expression';

    setTimeout(()=>{
        error.style.display = 'none';
    },2000);
}

function del(){
    exp = exp.slice(0,-1);
    ans.innerText = exp;
}

function expr(element){
    exp+=element.innerText;
    ans.innerText = exp;
}

function exprs(ele){
    exp+=ele;
    ans.innerText = exp;
}

window.addEventListener('keyup', (e)=>{
    console.log(typeof(Number(e.key)))
    if(e.key == 'Enter'){ 
        e.preventDefault();

        try{
            // exp = exp.slice(0,-1);
            result();
        }

        catch(Error){
            err();
        }
        
    }
    else if(Number(e.key) || e.key =='+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == '0'){
        exprs(e.key)
    }

    else if(e.key.toString() == 'Backspace'){
        del();
    }

})



btn.forEach(element =>{
    element.addEventListener('click',(e)=>{
        if(e.keyCode==13){
            e.preventDefault();
        }

        if(element.innerText == 'C'){
            clear();
        }
        else if(element.innerText == '='){
            try{
                
               result();
                
            }

            catch(Error){
                err();
                
            }
             
        }
        else if(element.innerText == 'delete'){
            del();
        }

        else{
            
            expr(element);
        }
    })
})
