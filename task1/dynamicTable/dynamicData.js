selectedRow = null;

function onFormSubmit() {
    var formData = readFormData();
    if(selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData)
    resetForm();
}

function readFormData() {
    var formData = []
    formData["name"] = document.getElementById("name").value;
    formData["age"] = document.getElementById("age").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("getTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3)
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.email;
}

function onDelete(td) {
    if(confirm('Are you sure you want to delete this record')) {
        del = td.parentElement.parentElement;
        document.getElementById("getTable").deleteRow(del.rowIndex);
        resetForm();
    }

}