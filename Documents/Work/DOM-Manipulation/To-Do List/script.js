//variables

const addtask_div = document.getElementById('add-task');
const taskContainer_div = document.getElementById('task-container');
const inputTask_div = document.getElementById('input-task');


//event listner for add button

addtask_div.addEventListener("click",function(){

        let task = document.createElement('div');
        task.classList.add('task');

        let li = document.createElement('li');
        li.innerText = `${inputTask_div.value}`;
        task.appendChild(li);

        let checBtn = document.createElement('button');
        checBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        checBtn.classList.add('checkTask')
        task.appendChild(checBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        deleteBtn.classList.add('deleteTask')
        task.appendChild(deleteBtn);

    if(inputTask_div.value === ""){
        alert('please Enter a Task');
    }
    else{
        taskContainer_div.appendChild(task);
    }

    inputTask_div.value=""; 


    checBtn.addEventListener("click", function(){
        checBtn.parentElement.style.textDecoration = 'line-through';
    });

    deleteBtn.addEventListener("click",function(e){

        // let target = e.target;
        // target.parentElement.remove();    
         deleteBtn.parentElement.remove();
    });
});