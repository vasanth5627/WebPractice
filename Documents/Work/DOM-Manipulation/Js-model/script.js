
let openbtn_div = document.getElementById('open-btn');
let modalcontainer_div = document.querySelector('#modal-container');
let closebtn_div = document.getElementById("close-btn");


openbtn_div.addEventListener("click", function(){
    modalcontainer_div.style.display = 'block';
});

closebtn_div.addEventListener("click", function(){
    modalcontainer_div.style.display = 'none';
});


window.addEventListener("click",function(e){
    if(e.target === modalcontainer_div){
        modalcontainer_div.style.display='none';
    }
});

