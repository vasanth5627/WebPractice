//fetch API requires a discussion of ...
//callbacks, Promises, Thenables , and Async/Await

//callbacks - functions that are passed to other functions as parameters so that they will call that 
//function after doing their other stuff.- promises are designed to get rid of this.



function firstFunction(parameters,callback){
    //do stuff
    callback();
}

//AKA callback()  hell.--promises are designed to get rid of callback hell

// first(parameters, function(){
//     //do stuff
//     second(para, function(){
//         third(para,function(){

//         });
//     });
// });


//promises - have 3 states 
//1. pending, 2. fullfilled, 3.rejected

// const myPromise = new Promise((resolve,reject)=>{
//     const error = false;
//     if(!error){
//         resolve("yes! resolved the promise");
//     }
//     else{
//         reject("NO! rejected the promise");
//     }
// });

// console.log(myPromise);
// myPromise.then(value=>{
//     return value+1;
// })
// .then(newValue =>{
//     console.log(newValue);
// })
// .catch(err=>{
//     console.error(err);
// })


// const myNextPromise = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve("My next Promise resolved")
//     },3000)
// });

// myNextPromise.then(value=>{
//     console.log(value);
// });

// myPromise.then(value=>{
//     console.log(value);
// })

const myUsers = {
    userList:[]
}

// async function mycoolFunction(){

// }
//2nd parameter of fetch is a object.

const mycoolFunction = async ()=>{
    const respone = await fetch("https://jsonplaceholder.typicode.com/users");//await will tel the code to wait till we get the result
    const jsonUserData= await respone.json();
    // console.log(jsonUserData);
    return jsonUserData;
}
//await should always be within async function
mycoolFunction();

const anotherFunc = async () =>{
   const data =  await mycoolFunction();
    // console.log(data);
    myUsers.userList = data;
    console.log(myUsers.userList)
}

anotherFunc();
console.log(myUsers.userList)

// const users = fetch("https://jsonplaceholder.typicode.com/users");

// console.log(users);

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response =>{
//     // console.log(respone);
//     return response.json();
// })
// .then(data=>{
//     // console.log(data);
//     data.forEach(element => {
//         console.log(element)
//     });
// });

//.then is used if we have a promise , it will execute only once the promise is fullfilled.

// async and await are a thing to say to wait for something to happen

// const getALlUserEmails = async () =>{
//     const respone = await fetch("https://jsonplaceholder.typicode.com/users");
//     const Userdata =  await respone.json();
//     const emails = [];
//     let i=0;
//     Userdata.forEach(element => {
//         emails[i] = element.email;
//         i++;
       
//     });
//     console.log(emails);

    
// }

// const getALlUserEmails = async ()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const Userdata = await response.json();
//     const UserEmails = Userdata.map(user=> {
//         return user.email;
//     })

//     // console.log(UserEmails);
//     postToWebPage(UserEmails)
// }
// getALlUserEmails();
// const postToWebPage = (data)=>{
//     console.log(data);
// }



// const getDadJoke = async () =>{
//     const response = await fetch("https://icanhazdadjoke.com",{
//         method:"GET",
//         headers:{
//             Accept:"Application/json"
//         }
//     });
//     const jsonJokeData  =  await response.json()
//     console.log(jsonJokeData);
// }

// const getDadJoke = async () =>{
//     const response = await fetch("https://icanhazdadjoke.com",{
//         method:"GET",
//         headers:{
//             Accept:"text/plain"
//         }
//     });
//     const textJokeData  =  await response.text()
//     console.log(textJokeData);
// }
// getDadJoke();


// const jokeObj = {
//     id: 'VDYgib2T7wc', 
//     joke: 'When you have a bladder infection, urine trouble.'
//    };

// const postData = async(jokeObj) =>{
//      const response = await fetch("https://httpbin.org/post",{
//         method:"POST",
//         headers:{
//             "content-Type":"application/json"
//         },
//         body: JSON.stringify(jokeObj)
//      });
//      const jsonResponse = await response.json();
//      console.log(jsonResponse);
// }

// postData(jokeObj);

const requestJoke = async (firstName, lastName) =>{
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);

}

requestJoke("Clint","Eastwood");