function addEmployee(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let employeeID = document.getElementById('employeeID').value;
    let department = document.getElementById('department').value;
    let experience = document.getElementById('exp').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mbl').value;

    // Determine role based on experience
    let role = "";
    if (experience >= 5) {
        role = "Senior";
    } else if (experience >= 2 && experience <= 5) {
        role = "Junior";
    } else {
        role = "Trainee";
    }

    // Create table row
    let table = document.querySelector('table tbody');
    let newRow = table.insertRow(table.rows.length);
    let cells = [];

    for (let i = 0; i < 8; i++) {
        cells[i] = newRow.insertCell(i);
    }

    cells[0].innerHTML = name;
    cells[1].innerHTML = employeeID;
    cells[2].innerHTML = department;
    cells[3].innerHTML = experience;
    cells[4].innerHTML = email;
    cells[5].innerHTML = mobile;
    cells[6].innerHTML = role;

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
        table.deleteRow(newRow.rowIndex);
    };

    cells[7].appendChild(deleteButton);

    document.querySelector('form').reset();
}

function filterEmployees(event) {
    let filterValue = document.querySelector("#departmentFilter").value;
    let table = document.querySelector("table tbody");
    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        let department = cells[2].innerHTML;

        if (filterValue === '' || filterValue === department) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', addEmployee);
    document.querySelector('#departmentFilter').addEventListener('change', filterEmployees);
});
