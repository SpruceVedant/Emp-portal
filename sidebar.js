function openNav() {
    // docume 
}

function showProfile() {
    // Hide all sections
    hideAllSections();

    // Show the Profile section
    document.getElementById("profile-section").style.display = "block";
}

function showAddEmployee() {
    // Hide all sections
    hideAllSections();

    // Show the Add Employee section
    document.getElementById("add-employee-section").style.display = "block";
}

function showEmployeeDetail() {
    // Hide all sections
    hideAllSections();

    // Show the Employee Detail section
    document.getElementById("employee-detail-section").style.display = "block";
}

function showTraining() {
    // Hide all sections
    hideAllSections();

    // Show the Training section
    document.getElementById("training-section").style.display = "block";
}

function hideAllSections() {
    // Hide all sections by default
    document.getElementById("profile-section").style.display = "none";
    document.getElementById("add-employee-section").style.display = "none";
    document.getElementById("employee-detail-section").style.display = "none";
    document.getElementById("training-section").style.display = "none";
}

function logout() {
    // Implement your logout logic here
    // For example, you can redirect the user to the login page
    window.location.href = "/login/login.html";
}

// By default, hide all sections when the page loads
window.onload = hideAllSections;
