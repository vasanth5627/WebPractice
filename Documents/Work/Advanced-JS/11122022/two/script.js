
function onFormSubmit(){
    var formData = readFormData();
    insertNewData(formData);

}

function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById('name');
    formData["code"] = document.getElementById('code');
    formData["salary"] = document.getElementById('salary');
    formData["city"] = document.getElementById('city');
    return formData;
    
}

function insertNewData(data){
    var table = document.getElementById('employee-list').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name.value;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.code.value;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary.value;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city.value;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a>Edit</a>
                        <a>Delete</a>`;

}