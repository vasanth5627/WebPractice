//varibale


const acord_div = document.getElementsByClassName('content-container'); //selects all the elements with this class name


for(let i=0; i<acord_div.length;i++){
        acord_div[i].addEventListener("click",function(){
            this.classList.toggle('active')
        }); 
}