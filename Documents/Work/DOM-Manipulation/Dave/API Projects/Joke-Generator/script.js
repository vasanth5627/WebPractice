const btn_div = document.querySelector(".container button");
const joketext = document.querySelector(".container p");




// const getJoke = async ()=>{
//     const jokeData = await fetch("https://icanhazdadjoke.com/",{
//       headers: {
//         'Accept': 'application/json'
//       }
//     }
//     );
//     const jokeObj  = await jokeData.json();
//     joketext.textContent = jokeObj.joke
   
// }

const getJoke = ()=>{
    fetch("https://icanhazdadjoke.com/",{
        method:"GET",
        headers:{
            'Accept':'application/json'
        }
    }).then(data=> data.json())
      .then(obj=> joketext.textContent = obj.joke)
    
}

// const jokeObj =
//     {
//         id:"123",
//         joke:"afafaga"
//     }


// const postJoke = async ()=>{
//     const res = await fetch("https://httpbin.org/post",{
//         method:"POST",
//         headers:{
//             'content-Type':' application/json'
//         },
//         body:JSON.stringify(jokeObj)

        
//     });
//     const jsonRes = await res.json();
//     console.log(jsonRes)


// }

document.addEventListener("DOMContentLoaded",getJoke)
btn_div.addEventListener('click',getJoke);
postJoke();