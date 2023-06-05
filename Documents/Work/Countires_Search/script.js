const inp  = document.getElementById('search');

inp.addEventListener('keyup',search);

function search(){
const item = inp.value.toUpperCase();
console.log(item);
const names = document.querySelectorAll('.table_data');

names.forEach((ele)=>{
    if(ele.textContent.toUpperCase().indexOf(item)>-1){
        ele.style.display = '';
    }
    else{
        ele.style.display = 'none';
    }
})
}
