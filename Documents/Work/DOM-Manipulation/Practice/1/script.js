btn_div = document.getElementById('btn');
console.log(btn_div);
table_div = document.getElementsByTagName('table');
console.log(table_div)
btn_div.addEventListener('click', addRow);

function addRow(){
    const tr = document.createElement('tr');
    tr.insertCell('hi')
    table_div[0].append('tr')
}