//Higher Order Functions

// A higher order function is a function that does atleast one of the following:
// ** Take one or more functions as argument(parameter)
// ** retrurns function as the result

import {posts} from "./posts.js";
//for-each()


posts.forEach(post => {
    console.log(post);
})

console.clear();


const filterPosts = posts.filter(post =>{
    return post.userId===10 ;
});

console.log(filterPosts);

const mappedPosts = filterPosts.map(post =>{
    return post.id*10;
});

console.log(mappedPosts);

const reducedPosts = mappedPosts.reduce((sum,post)=>{
    return sum+post;
});

console.log(reducedPosts)


const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //forEach - (function(element,index,array))
  //filter
  //map
  //sort
  //reduce

//   companies.forEach(function(element,index){
//    if(element.category==='Finance' && index>3) console.log(element.name)
//    });

// const fil = companies.filter(function(element){
//     let nam;
//     if(element.category==="Finance")
//     return true;    
    
//    })


const fil = companies.filter(element => element.category==='Finance')
   console.log(fil)

//  const canDrink = ages.filter(function(age){
//     return age >=21?true:false;
//  })


const canDrink = ages.filter( age => age>=21)
 console.log(canDrink) 

 const last10years = companies.filter(company=> company.end-company.start>=10)
 console.log(last10years)


 //create an arrray of company names

 const compNames = companies.map(element => `${element.name} lasted for ${element.end-element.start} years`);
 console.log(compNames)


 const agesMap = ages
                    .map(element => Math.sqrt(element))
                    .map(element => element*2)
 console.log(agesMap)

//sort

const sortedComapnies = companies.sort(function(c1,c2){
  //return c2.start-c1.start; //descending order
  return c1.start-c2.start; //ascending order

})//manipulates original array

console.log(sortedComapnies)

// const sortedages = ages.sort((a,b)=>b-a)//descending
// console.log(sortedages)

//reduce

//add all the ages in ages array

const ageSum = ages.reduce((total,age)=>total+=age,0)
console.log(ageSum)

//total years for all comapnies(add all the ranges of each compnay)

const compSum = companies.reduce((total,company)=> total+=(company.end-company.start),0);

console.log(compSum);

//map ages*2 and filter 40 and over

const ageMap = ages.map((element)=>element*2)
                    .filter(element => element>=40)
                    .sort((a,b)=>a-b)
                    .reduce((total,element)=>total+=element,0)

console.log(ageMap)


