// alert("hi");
// let myB= confirm("Ok===true\nCancel===false");
// console.log(myB);

// let name = prompt("What is your name");

// if(name){
//     console.log(name.length);
//     console.log(name.trim().length);
//     console.log(name.trim());
//     console.log(name);
// }

// else{
//     console.log("You didn't enter your name");
// }

let playGame = confirm("Shall we play Rock, Paper , Scissors?");

if(playGame){
    let playerChoice = prompt("Please Enter rock ,paper or scissors");
    if(playerChoice){
            let playerOne = playerChoice.trim().toLowerCase();
            
    } else{
        alert("I guess you changed mind.Maybe Next Time")
    }

}
else{
    alert("Ok, Next Time");
}


// const myArray = [];


// myArray.push("2");
// myArray.push("hello");
// myArray.push(false);
// myArray.unshift('hi');
// myArray.push("3");
// myArray.push("hola");
// myArray.push(true);
// myArray.unshift('amigo');
// console.log(myArray)

// myArray.splice(1,3,"new",3,5,6,10);

// console.log(myArray)



// myArray.splice(1,0,"added","now");


// console.log(myArray)

// const newArray = myArray.slice(2,5);

// console.log(newArray);


// const myArrayA = ["A","B","C"];
// const myArrayB = ["D","E","F"];
// const myArraya = ["a","b","c"];
// const myArrayb = ["d","e","f"];


// // const myArrayC = myArrayA.concat(myArrayB);

// const myArrayC = [...myArrayA, ...myArrayB];
// const myArrayD = [myArrayA,myArrayB];

// console.log(myArrayC);
// console.log(myArrayD);

// //2D arrays

// const uc = [myArrayA,myArrayB];
// const lc = [myArraya,myArrayb];

// console.log(uc);
// console.log(lc);

// console.log(uc[0][1]);
// console.log(lc[0][1]);
































// // const myObjs = {name:"vasanth"};
// // console.log(myObjs)
// // console.log(myObjs.name);

// const myObj= {
//   alive:true,
//   number:3,
//   hobbies:["eat","sleep","play"],
//   beverage:{
//     morning:"coffee",
//     afternoon:"Buttermilk",
//     night:"Milk"
//   },
//   name:"vasanth",
//   action: function(){
//     return `Time for ${this.beverage.morning}`;
//   }
// };

// // console.log(myObj);
// // console.log(myObj.alive);
// // console.log(myObj.number);
// // console.log(myObj.hobbies[2]);
// // console.log(myObj.beverage.morning);
// // console.log(myObj["alive"]);
// // console.log(myObj.action());











// const vehicle={
//   wheels:4,
//   engine:function(){
//     return "v"
//   }
  
// }

// // console.log(vehicle)
// const truck = Object.create(vehicle)
// truck.wheels = 2;
// truck.engine = function(){
//   return "t"
// }


// // console.log(truck);
// // console.log(Object.keys(myObj));
// // console.log(Object.values(myObj));

// console.log(myObj.hasOwnProperty("alive"))
// delete myObj.name;

// for(let job in myObj){
//   console.log(`on ${job}, it's ${myObj[job]}`);
// }

// const {wheels:mv, engine: mv1} = vehicle;

// const {alive,number,hobbies} = myObj;

// console.log(mv)
// console.log(mv1())

// console.log(alive+" "+number+" "+hobbies);

// function nbr({wheels}){
//   return `${wheels} wheels are there`;
// }

// console.log(nbr(vehicle));

// class pizza{
//   // constructor(){
//   //   this.size = "medium";
//   //   this.crust = "original"
//   // }
//   constructor(type,size){
//     this.type=type;
//     this.size=size;
//     this.crust = "original";
    
//   }
//   bake(){
//     console.log(`baking a ${this.size} size and ${this.crust} crust pizza`);
//   }
// }


// const myPizza = new pizza();
// myPizza.bake();

// const myPizza1 = new pizza("pep","large");
// myPizza1.bake();




