// const view = document.querySelector('#view2');
// const div = view.querySelector("div");
// const h2 = div.querySelector('h2');

const doSomething=()=>{
    alert("doing something");
};
// addEventListener('event',function,useCapture);
// h2.addEventListener('click',doSomething,false);
// h2.removeEventListener('click',doSomething,false);

// h2.addEventListener('click',function(event){
//     console.log(event.target);
//     event.target.textContent="clicked";
// });

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        console.log("readyState:Complete");
        intitApp();
    }
})

const intitApp=()=>{
    const view = document.querySelector('#view2');
    const div = view.querySelector("div");
    const h2 = div.querySelector('h2');
    view.addEventListener('click', (event)=>{
        //event.stopPropagation();
        console.log("view2");
        console.log(event.target);
        // view.style.backgroundColor = "purple";
        // event.target.style.backgroundColor = "purple";
        // view.style.backgroundColor ='none'
        // view.classList.remove("darkblue")
        // view.classList.add("purple");
        view.classList.toggle("purple") //adds and removes class(if it is not there it will add else it will remove)
        view.classList.toggle("darkblue")
    },false)
    div.addEventListener('click', (event)=>{
        // event.stopPropagation();
        console.log("div");
        console.log(event.target);
        // div.style.backgroundColor = "blue";
        // event.target.style.backgroundColor = "blue";
        div.classList.toggle("blue");
        div.classList.toggle("black");
    },false)
    h2.addEventListener('click', (event)=>{
       //event.stopPropagation();
       console.log("h2");
       console.log(event.target);
        // h2.textContent = "clicked";
        // event.target.textContent = "clicked";
        const myText = event.target.textContent;
        myText === "My 2nd View" ? event.target.textContent="Clicked":event.target.textContent="My 2nd View";
    },false)

    const nav = document.querySelector('nav');
    nav.addEventListener('mousemove',(event)=>{
        event.target.classList.add('height100');

    });

    nav.addEventListener('mouseout',(event)=>{
        event.target.classList.remove('height100');
    });

    const view3 = document.querySelector('#view3');
    console.log(view3)
    const myForm = view3.querySelector('#myForm');
    console.log(myForm)
    myForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        console.log("submit event");
    })
};