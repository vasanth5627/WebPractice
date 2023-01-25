const btn = document.getElementById('btn');
const body = document.getElementsByTagName('body')
console.log(body)

//=>FETCH DATA
// const makeRequest = ()=>{
//     console.log('button clicked')

    //promise then 

    // const data = fetch('data.txt')
    //                 .then((res)=>{ //resolve 
    //                     console.log(res);
    //                     return res.text();
    //                 })
    //                 .then((data)=>{ // data  is  returned from previous function
    //                     console.log(data)
    //                 })

    //prommise then and error handling

    // fetch('data.txt')
    // .then((res)=>{
    //     if(!res.ok){
    //         throw Error(res.statusText)
    //     }
    //     return res.text();
    // })
    // .then((data)=>{
    //     console.log(data);
    //     if(body[0].childElementCount<3){
    //         const para = document.createElement('p');
    //         console.log(para);
    //         para.textContent = data;
    //         body[0].prepend(para)
    //     }
      
    // }).catch((error)=>{//catch block executes for network error
    //     console.log(error)
    // })

//}
    //Async and Await || error handling

    // async function makeRequest(){
    //     console.log("button clicked")
    //     try{
    //         const res = await fetch('data.txt');
    //         if(!res.ok){
    //             throw Error(res.statusText)
    //         }
    //         console.log(res);
    //         const data = await res.text();
    //          if(body[0].childElementCount<3){
    //             const para = document.createElement('p');
    //             console.log(para);
    //             para.textContent = data;
    //             body[0].prepend(para)
    //     }
    //         console.log(data);

    //     }
    //     catch(error){
    //         console.log(error)
    //     }
        
    // }



                    
    
    // async function makeRequest(){
    //     console.log('button clicked');
    //     try{
    //         const res = await fetch('data.json');
    //         if(!res.ok){
    //             throw Error(res.statusText)
    //         }
    //         const data = await res.json();
    //                 if(body[0].childElementCount<3){
    //                     const para = document.createElement('p');
    //                     console.log(para);
    //                     para.innerText = JSON.stringify(data);
    //                     body[0].prepend(para)
    //         }
    //         console.log(JSON.stringify(data))
    //     }
    //     catch(error){
    //         console.log(error)
    //     }

    // }
    
    //using API promis | then | single Data

    // function makeRequest(){
    //     console.log('button clicked')

    //    const res =  fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     .then((res)=> {
    //         console.log(res)
    //         if(!res.ok){
    //             throw Error('Data not found')
    //         }
    //         return res.json()})
    //     .then((data)=> {
    //             if(body[0].childElementCount<3){
    //                     const para = document.createElement('p');
    //                     console.log(para);
    //                     para.innerText = JSON.stringify(data);
    //                     body[0].prepend(para)
    //         }
    //         console.log(JSON.stringify(data))})
    //         .catch((error)=>console.log(error))
    // }
    
    // async function makeRequest(){
    //     console.log('button clicked')
    //     try{
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    //         if(!res.ok){
    //             throw Error('Not found')
    //         }
    //         const data = await res.json();
    //             if(body[0].childElementCount<3){
    //                 const para = document.createElement('p');
    //                 console.log(para);
    //                 para.innerText = JSON.stringify(data);
    //                 body[0].prepend(para)
    //             }
    //         console.log(JSON.stringify(data))
    //     }
    //     catch(error){
    //         console.log(error)
    //     }

    // }

    //Multiple Records

    //     async function makeRequest(){
    //     console.log('button clicked')
    //     try{
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
    //         if(!res.ok){
    //             throw Error('Not found')
    //         }
    //         const data = await res.json();
    //             if(body[0].childElementCount<3){
    //                 const para = document.createElement('p');
    //                 console.log(para);
    //                 data.forEach(element => {

    //                     para.innerHTML += `
    //                     <div> id: ${element.id}</div>
    //                     <div> title: ${element.title}</div>
    //                     <div> body: ${element.body}</div>
    //                     <hr>
    //                     `
    //                     body[0].append(para)
    //                 });
    
    //             }
    //         // console.log(JSON.stringify(data))
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }


    //=>POST DATA

    // function makeRequest(){
    //     console.log('button clicked')
    //     const myInit = {
    //         method:'POST',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         },
    //         body:'{"name":"Kanishka Bhattathiri IV", "job":"SDE"}'
    //     }
    //    fetch('https://reqres.in/api/users',myInit)
    //    .then((res)=>{
    //     if(!res.ok){
    //         throw Error(res.statusText);
    //     }
    //     return res.json();
    //    }).then((data)=>{
    //     console.log(data);
    //    })
    //    .catch((error)=>{
    //     console.log(error)
    //    })
    // }

    //async await


    // async function makeRequest(){
    //     console.log('button clicked');
    //     const myInit = {
    //         method:'POST',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         },
    //         body:'{"name":"krishna","job":"Engineer"}'
    //     }
    //     try{
    //         const res = await fetch('https://reqres.in/api/users',myInit);
    //         if(!res.ok){
    //             throw Error(res.statusText);
    //     }
    //     const data = await res.json();
    //     console.log(data)
    //     }
    //     catch(error){
    //         console.log(error);
    //     }

    // }

    async function makeRequest(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const job = document.getElementById('job').value; 
        console.log('button clicked');
        const myInit = {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            // body:`{"name":"${name}","job":"${job}}"}`
            body: JSON.stringify({name:name , job:job})
        }
        try{
            const res = await fetch('https://reqres.in/api/users',myInit);
            if(!res.ok){
                throw Error(res.statusText);
        }
        const data = await res.json();
        console.log(data)
        }
        catch(error){
            console.log(error);
        }

    }


    
    
    


btn.addEventListener('click',makeRequest);

