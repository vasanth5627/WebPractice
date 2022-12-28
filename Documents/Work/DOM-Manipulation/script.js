const title_div =  document.querySelector('#main-heading');
//styling elements
title_div.style.color = 'red'
console.log(title_div)

const listItem_div = document.querySelectorAll('.list-items')
console.log(listItem_div);


for(let i =0; i<listItem_div.length;i++){
    listItem_div[i].style.color='green';
}

//creating elements


const ul_div = document.querySelector('ul');
const li = document.createElement('li');

ul_div.append(li);

//modifying the text

const firstlistitem_div  = document.querySelector('.list-items');

console.log(firstlistitem_div.innerText);
console.log(firstlistitem_div.innerHTML);
console.log(firstlistitem_div.textContent);
li.innerText = 'RRR'

//modifying atributes and classes

li.setAttribute('class','list-items');
li.removeAttribute('class')

console.log(title_div.getAttribute('id'))


li.classList.add('list-items')
console.log(li.classList.contains('list-items'))
li.classList.remove('list-items')

console.log(li.classList.contains('list-items'));

//Remove Elements

li.remove();

//Traverse the DOM

//Parent Node Traversal

console.log(ul_div);
console.log(ul_div.parentNode);
console.log(ul_div.parentElement);
console.log(ul_div.parentNode.parentNode);
console.log(ul_div.parentElement.parentElement);


const html_div = document.documentElement;
console.log(html_div)

//child Node Traversal

console.log(ul_div.childNodes);
console.log(ul_div.childElementCount);
console.log(ul_div.firstChild);
console.log(ul_div.lastChild);
console.log(ul_div.lastElementChild);
console.log(ul_div.firstElementChild);
console.log(ul_div.children);

ul_div.firstElementChild.style.color= 'red';
ul_div.childNodes[3].style.color='blue';
ul_div.children[0].style.backgroundColor = 'yellow';    


//Sibling Node Traversal
const div_ele = document.querySelector('div');
console.log(div_ele.childNodes)
console.log(ul_div.previousSibling);
console.log(ul_div.nextSibling);
console.log(ul_div.previousElementSibling);
console.log(ul_div.nextElementSibling);