const btn = document.getElementById('btn');

const makeRequest = ()=>{
    console.log('button clicked')
    // const data = fetch('data.txt')
    //                 .then((res)=>{ //resolve 
    //                     console.log(res);
    //                     return res.text();
    //                 })
    //                 .then((data)=>{ // data  is  returned from previous function
    //                     console.log(data)
    //                 })

    fetch('data.txt')
    .then((res)=>{
        return res.text();
    })
    .then((data)=>{
        console.log(data);
    })
                    
    
    
    
}

btn.addEventListener('click',makeRequest);

