const ele = document.querySelector('.container');
const heading = document.querySelector(' body h1')

heading.style.color = 'white';
heading.style.textAlign = 'center'
// let customer = 'John';
let customers = ["Jhon","Mike","Vasanth"];
// const custEle = document.createElement('div');
// custEle.textContent = customer;

// ele.append(custEle); //add as last child
//ele.prepend(custEle); // add as first child

// custEle.style.color = 'red';
// custEle.style.backgroundColor = 'yellow';
// custEle.style.letterSpacing = '10px'
// custEle.style.textAlign = 'center'

// custEle.classList.add('customer','test');
// custEle.classList.remove('customer','test');

const render = (custEle)=>{
    custEle.classList.add('render');
    
}

const renderCustomers = function(value,index){
    const custEle = document.createElement('div');
    custEle.textContent = value;
    ele.append(custEle);
    custEle.classList.add('customer','test');
     setTimeout(render,2000,custEle)
   
}
customers.forEach(renderCustomers);


