const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector('#view2');
console.log(view2);

view1.style.display = 'flex';
view2.style.display = 'flex';


const views = document.getElementsByClassName("view");
console.log(views);

const sameviews = document.querySelectorAll(".view");
console.log(sameviews);

const divs = view1.querySelectorAll("div");
console.log(divs)

const samedivs = view1.getElementsByTagName("div");
console.log(samedivs)
console.log(samedivs.length)
console.log(divs.length)

const evendivs = view1.querySelectorAll("div:nth-of-type(2n)");//select only even divs
console.log(evendivs);

for(let i=0;i<evendivs.length;i++){
    evendivs[i].style.backgroundColor = "darkblue";
    // evendivs[i].style.width = "200px";
    // evendivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1");//inside nav tag we need h1
console.log(navText);
navText.textContent = "Hello WORLD";
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right</p>`
console.log(navbar)
navbar.style.justifyContent = 'center'


console.log(evendivs[0]);
console.log(evendivs[0].parentElement);
console.log(evendivs[0].parentElement.children);
console.log(evendivs[0].parentElement.childNodes);
console.log(evendivs[0].parentElement.lastChild);
console.log(evendivs[0].parentElement.lastElementChild);
console.log(evendivs[0].parentElement.firstChild);
console.log(evendivs[0].parentElement.firstElementChild);
console.log(evendivs[0].nextSibling);
console.log(evendivs[0].nextElementSibling);
console.log(evendivs[0].previousSibling);
console.log(evendivs[0].previousElementSibling);

view1.style.display="none";
view2.style.flexDirection="row";
view2.style.flexWrap="wrap";
view2.style.margin="10px";


while(view2.lastChild){
    view2.lastChild.remove();
}

const createDivs = (parent,iter)=>{
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width="100px";
    newDiv.style.height="100px";
    newDiv.style.margin="10px"
    newDiv.style.display="flex";
    newDiv.style.justifyContent="center";
    newDiv.style.alignItems="center";
    parent.append(newDiv);
}

//createDivs(view2,10);

for(let i=1;i<=12;i++){
    createDivs(view2,i);
}