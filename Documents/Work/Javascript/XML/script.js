let table = document.getElementById('books');
let xmlContent = '';
let btn = document.getElementById('btn-data')

btn.addEventListener('click',getData);

function getData(){
    btn.style.display = 'none';
    const res = fetch('books.xml')
.then((res)=>{return res.text();})
.then((data)=>{
    xmlContent = data;
    let parser = new DOMParser();
    let xmlDOM = parser.parseFromString(xmlContent,'application/xml');
    let books = xmlDOM.querySelectorAll('book'); // book is the xml element, books will contain iteration

    books.forEach(bookXmlNode =>{
        let row = document.createElement('tr');

        //author

        let td = document.createElement('td');
        td.innerText = bookXmlNode.children[0].innerHTML;
        row.append(td);

        td = document.createElement('td');
        td.innerText = bookXmlNode.children[1].innerHTML;
        row.append(td);

        td = document.createElement('td');
        td.innerText = 'RS. '+ bookXmlNode.children[3].innerHTML;
        row.append(td);

        td = document.createElement('td');
        td.innerText = bookXmlNode.children[5].innerHTML;
        row.append(td);

        table.children[1].appendChild(row);

    })
})

}
