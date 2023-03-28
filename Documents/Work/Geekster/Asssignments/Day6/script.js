let num = 10;

let sqrt  = Math.sqrt(num);

console.log(sqrt);

let random = Math.round(Math.random()*10);


console.log(random)
 

const today = new Date();

console.log(today);

console.log(today.getFullYear());
console.log(today.getMonth()+1);
console.log(today.getDate());
console.log(today.getDay());

today.setFullYear(2022)
today.setMonth(11);
today.setDate(31);

console.log(today.getFullYear());
console.log(today.getMonth()+1);
console.log(today.getDate());
console.log(today.getDay());

let birthDay = new Date("1997-07-02");

console.log(birthDay)

const millsecDiff = today.getTime()-birthDay.getTime();

console.log(millsecDiff);

const daysDiff = Math.round(millsecDiff / (1000 * 60 * 60 * 24));

console.log(daysDiff);

