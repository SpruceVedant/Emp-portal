// Function to check admin 
function hasAdminPrivileges(email) {
    return email === 'admin@example.com';   
}


document.addEventListener('DOMContentLoaded', function () {
    const profileContainer = document.querySelector('.profile');
    const employeeForm = document.getElementById('employee-form');
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('state');


    // Display admin profile details
    profileContainer.innerHTML = `
   <p>Name: Admin </p>
    <p>Position: Administrator</p>
    <p>Contact: admin@example.com</p>
   `;


    const userHasAdminPrivileges = hasAdminPrivileges('admin@example.com');

    if (!userHasAdminPrivileges) {
     
        employeeForm.innerHTML = '<p>You do not have admin privileges to add employees.</p>';
    }

    
    countrySelect.addEventListener('change', function () {
        const selectedCountry = countrySelect.value;
        stateSelect.disabled = !selectedCountry;
    });

    employeeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!userHasAdminPrivileges) {
            alert('You do not have admin privileges to add employees.');
            return;
        }
        
        var existingData = JSON.parse(localStorage.getItem('employeeData')) || [];

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const employeeEmail = document.getElementById('employeeEmail').value;
        const selectedCountry = countrySelect.value;
        const selectedState = stateSelect.value;
        const city = document.getElementById('city').value;

        const newEmployee = {
            firstName,
            lastName,
            phoneNumber,
            email: employeeEmail,
            country: selectedCountry,
            state: selectedState,
            city,
        };
   if(!Array.isArray(existingData)) {
    existingData = [];
   }
        existingData.push(newEmployee);
        localStorage.setItem('employeeData', JSON.stringify(existingData));
        alert('Employee data saved successfully.');
        console.log(existingData);
        employeeForm.reset();
    });


    
});

