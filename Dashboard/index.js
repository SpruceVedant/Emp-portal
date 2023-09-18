// Function to check admin privileges
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

    // Define a mapping of countries to their respective states
    const countryToStates = {
        India: ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],
        USA: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
        Canada: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"],
        // Add more countries and states as needed
    };

    // Function to update the state options based on the selected country
    function updateStateOptions() {
        const selectedCountry = countrySelect.value;
        stateSelect.disabled = !selectedCountry;

        // Clear existing state options
        stateSelect.innerHTML = "";

        // Populate state options based on the selected country
        countryToStates[selectedCountry].forEach((state) => {
            const option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }

    // Add an event listener to the country select element
    countrySelect.addEventListener('change', updateStateOptions);

    // Initial call to populate state options based on the default selected country
    updateStateOptions();

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

        if (!Array.isArray(existingData)) {
            existingData = [];
        }
        existingData.push(newEmployee);
        localStorage.setItem('employeeData', JSON.stringify(existingData));
        alert('Employee data saved successfully.');
        console.log(existingData);
        employeeForm.reset();
    });
});
