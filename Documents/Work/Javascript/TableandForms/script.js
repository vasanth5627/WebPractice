const btn_div = document.getElementById('btn');

btn_div.addEventListener('click',addData,false);

function addData(){
    const data=[];
    const inp_div = document.getElementsByTagName('input');
    for(let i=0;i<inp_div.length;i++){
        data[i]=inp_div[i].value;
    }
    console.log(data)
    const table_div = document.getElementsByTagName('table');
    // console.log(table_div[0].children);

    // var row = table_div[0].insertRow();
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);
    // cell1.innerHTML = `<td>${data[0]}<td>`;
    // cell2.innerHTML = `<td>${data[1]}<td>`;
    // cell3.innerHTML = `<td>${data[2]}<td>`;
    
    var row = table_div[0].insertRow();
    for(let i=0;i<inp_div.length;i++){
       row.insertCell(i).innerHTML=`<td>${data[i]}<td>`;
    }

    for(let i=0;i<inp_div.length;i++){
        inp_div[i].value="";
    }
};

// let btnAdd = document.querySelector('button');
// let table = document.querySelector('table');


// let nameInput = document.querySelector('#name');
// let ageInput = document.querySelector('#age');
// let countryInput = document.querySelector('#country');


// btnAdd.addEventListener('click', () => {
//     let name = nameInput.value;
//     let age = ageInput.value;
//     let country = countryInput.value;

//     let template = `
//                 <tr>
//                     <td>${name}</td>
//                     <td>${age}</td>
//                     <td>${country}</td>
//                 </tr>`;

//     table.innerHTML += template;
// });