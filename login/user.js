// Function to save user data in localStorage
function addUser(email, userData) {
    localStorage.setItem(email, JSON.stringify(userData));
}
// Example of how the admin adds a user
const userEmail = 'user@example.com'; // Replace with the actual user's email
const userData = {
    // Include any other user data you need
    name: 'John Doe',
    // Add more user properties here
};

addUser(userEmail, userData);


// Function to check if a user with the provided email exists in localStorage
function isUser(email) {
    return localStorage.getItem(email) !== null;
}

// Handle login button click
document.getElementById('login-btn').addEventListener('click', function () {
    const email = document.getElementById('email').value;

    if (isUser(email)) {
        // Retrieve user data and perform authentication here
        const userData = JSON.parse(localStorage.getItem(email));

        // Check user's password or other credentials for authentication
        if (userData.email === document.getElementById('email').value) {
            // Redirect to the dashboard or perform other actions on successful login
            console.log('Logged in as user:', userData.name);
        } else {
            alert('Invalid password. Please try again.');
            console.log('Try again, invalid password');
        }
    } else if (isAdmin(email)) {
        // Handle admin login as you did before
        console.log('Logged in as admin');
    } else {
        alert('Invalid email. Please try again.');
        console.log('Try again, email is not valid');
    }
});
