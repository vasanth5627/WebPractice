
const book_details = document.getElementById('book-details');
const next = document.getElementById('next-btn');
const prev = document.getElementById('previous-btn')
console.log(book_details.childNodes[3].childNodes)
var i =0;
async function books(){
    const books = await fetch('books.json');
    const data  = await books.json();
    const length = data.length;
    if(i===length) i = 0;
    if(i<0) i = length-1;
    book_details.childNodes[1].setAttribute("src",data[i].image);
    book_details.childNodes[3].childNodes[1].textContent = data[i].Author;
    book_details.childNodes[3].childNodes[3].textContent = data[i].Genere;
    book_details.childNodes[3].childNodes[5].textContent = data[i].pages;
 }
books();

function nextImg(){
    i++;
    books()
}
function prevImg(){
    i--;
    books()
}


next.addEventListener('click',nextImg);
prev.addEventListener('click',prevImg);

