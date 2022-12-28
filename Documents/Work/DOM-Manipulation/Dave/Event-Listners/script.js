const view = document.querySelector("#view2");
console.log(view)
const div = view.querySelector("div");
console.log(div);
const h2 = div.querySelector("h2");
console.log(h2);

h2.addEventListener("click", doSomething,false)