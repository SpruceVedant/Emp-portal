document.addEventListener('DOMContentLoaded', function () {
    const employeeList = document.getElementById('employee-list');
    const savedData = JSON.parse(localStorage.getItem('employeeData')) || [];

    function display(data) {
        if (data.length === 0) {
            employeeList.innerHTML = '<tr><td colspan="7">No data</td></tr>';
            return;
        }

        data.forEach((employee, index) => {
            const employeeRow = `
                <tr>
                    <td>Employee ${index + 1}</td>
                    <td><a href="http://localhost:3000/Profile/Profile.html?employeeId=${index}">${employee.firstName} ${employee.lastName}</a></td>
                    <td>${employee.phoneNumber}</td>
                    <td>${employee.email}</td>
                    <td>${employee.country}</td>
                    <td>${employee.state}</td>
                    <td>${employee.city}</td>
                </tr>
            `;
            employeeList.innerHTML += employeeRow;
        });
    }

    display(savedData);
});




// document.addEventListener('DOMContentLoaded' , function () {
//     const employeeList = document.getElementById('employee-list');

//     const savedData = JSON.parse(localStorage.getItem('employeeData')) || [];

//     function display(data) {

//         // employeeList.innerHTML = '';

//     if(data.length === 0){
//         employeeList.innerHTML = '<p>No data<p>';
//         return;

//     }


//         data.forEach((employee, index) => {
//             const employeeInfo = `
//             <p>Employee>Employee ${index + 1}<p>
//             <p>Name : ${employee.firstName} ${employee.lastName}
//             <p>Phone No: ${employee.phoneNumber}<p>
//             <p>Email: ${employee.email}<p>
//             <p>Country ${employee.country}<p>
//             <p>State ${employee.state} <p>
//             <p> City ${employee.city} <p>
//             <hr>

//             `;
//             employeeList.innerHTML += employeeInfo;
//         });
//     }


//     display(savedData);
// })

