const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numberSet = '0123456789';
const symbolSet = '~!@#$%^&*()_+=-<>?/,.';


const length  = document.getElementById('total-char').value;
let choices = document.querySelectorAll('input[type=checkbox]')




let random = (dataset)=>{
    return dataset[Math.floor(Math.random() * dataset.length)]
}
let btn = document.getElementById('btn');

btn.addEventListener('click', genearePassword);

function genearePassword(){
    let selected = [];
    let password = '';
    let value = document.getElementById('total-char').value;
    if(value<8){
        console.log('min 8 characters required')
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.error').textContent = 'Minimum length of strong password is 8 characters';
        setTimeout(()=>{
            document.querySelector('.error').style.display = 'none';
        },4000)

        value=8;
        document.getElementById('total-char').value = 8;
    }
choices.forEach(element=>{
    if(element.checked){
      selected.push(element);
      
    }
    
  })
  console.log(selected)
  if(selected.length==0){
        console.log('please select atleast one option')
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.error').textContent = 'please select atleast one option';
        setTimeout(()=>{
            document.querySelector('.error').style.display = 'none';
        },4000)

        
  }
  else{
    while(password.length<value){
   
        let choice = Math.floor(Math.random() * selected.length)
        let name_inp = selected[choice].name;
     
        if(name_inp == 'upper-case'){
            password+= random(upperCase)
        }
        else if(name_inp == 'lower-case'){
            password+= random(lowerCase)
        }
         else if(name_inp == 'numbers'){
            password+= random(numberSet)
         }
         else if(name_inp == 'symbols'){
             password+= random(symbolSet)
         }
         
         
     }
  }
  


console.log(password)
document.getElementById('pass-box').innerText = password;
}

console.log(document.querySelector('.main').children)