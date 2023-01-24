const btn = document.getElementById('btn');
const body = document.getElementsByTagName('body')
console.log(body)

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



                    
    
    async function makeRequest(){
        console.log('button clicked');
        try{
            const res = await fetch('data.json');
            if(!res.ok){
                throw Error(res.statusText)
            }
            const data = await res.json();
                    if(body[0].childElementCount<3){
                        const para = document.createElement('p');
                        console.log(para);
                        para.textContent = JSON.stringify(data);
                        body[0].prepend(para)
            }
            console.log(JSON.stringify(data))
        }
        catch(error){
            console.log(error)
        }

    }
    
    


btn.addEventListener('click',makeRequest);

