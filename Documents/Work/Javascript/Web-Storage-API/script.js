//Web Storage API

//It is not a part of DOM
//It refers to Window API
//It is currently available to js via the global variable: Window

//We do not have to type window, it is implied: 


// window.alert(window.location)
// //is equal to 
// alert("ok!")

const myObj = {
    name:'vasanth',
    hobbies:['eat','sleep','code'],
    logName:function(){
        console.log(this.name);
    }};

const myArray = ['eat','sleep','code'];
myObj.logName();
// localStorage: persistent data,  stores data in browser and we can retrieve it later.
// sessionStorage: stores data for particular session, if we logged it or stay on the page.

// sessionStorage.setItem("mySessionStore",myObj);
// const mySessionData = sessionStorage.getItem("mySessionStore");
// console.log(mySessionData);
// console.log(typeof mySessionData);



// sessionStorage.setItem("mySessionStoreArray",myArray);
// const mySessionDataArray = sessionStorage.getItem("mySessionStoreArray");
// console.log(mySessionDataArray);
// console.log(typeof mySessionDataArray);

// sessionStorage.setItem("mySessionStore1",JSON.stringify(myObj));
// const mySessionData1 = JSON.parse(sessionStorage.getItem("mySessionStore1"));
// console.log(mySessionData1);
// console.log(typeof mySessionData1);


// sessionStorage.setItem("mySessionStoreArray1",JSON.stringify(myArray));
// const mySessionDataArray1 = JSON.parse(sessionStorage.getItem("mySessionStoreArray1"));
// console.log(mySessionDataArray1);
// console.log(typeof mySessionDataArray1);

localStorage.setItem("mySessionStorel",myObj);
const mySessionDatal = localStorage.getItem("mySessionStorel");
console.log(mySessionDatal);
console.log(typeof mySessionDatal   );



localStorage.setItem("mySessionStoreArrayl",myArray);
const mySessionDataArrayl = localStorage.getItem("mySessionStoreArrayl");
console.log(mySessionDataArrayl);
console.log(typeof mySessionDataArrayl);

localStorage.setItem("mySessionStore1l",JSON.stringify(myObj));
const mySessionData1l = JSON.parse(localStorage.getItem("mySessionStore1l"));
console.log(mySessionData1l);
console.log(typeof mySessionData1l);

const key = localStorage.key(0);
console.log(key);
console.log(localStorage.length)

localStorage.setItem("mySessionStoreArray1l",JSON.stringify(myArray));

localStorage.removeItem("mySessionStoreArray1l")
const mySessionDataArray1l = JSON.parse(localStorage.getItem("mySessionStoreArray1l"));
console.log(mySessionDataArray1l);
console.log(typeof mySessionDataArray1l);


// localStorage.clear();

