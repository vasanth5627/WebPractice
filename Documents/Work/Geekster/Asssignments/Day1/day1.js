//scope

var a = 100;
let b = 200;
const c = 300;
console.log('global')
console.log(a);
console.log(b);
console.log(c);

//block
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log('block')
    console.log(a);
    console.log(b);
    console.log(c);
}

function f(){
    // var a = 1;
    // let b = 2;
    // const c = 3;
    console.log('function')
    console.log(a);
    console.log(b);
    console.log(c);
}

f();

{
    // var a = 10;
    // let b = 20;
    // const c = 30;
    console.log('block')
    console.log(a);
    console.log(b);
    console.log(c);
}

{
    var d =400;
    let e = 500;
    const fv = 600;
}

function fvd(){
    console.log(d);
    // console.log(e); we cannot access as let is block scoped.
    //console.log(fv);  we cannot access as const is block scoped.
}
console.log(d);
// console.log(e); we cannot access as let is block scoped.
// console.log(fv); we cannot access as const is block scoped.
fvd();