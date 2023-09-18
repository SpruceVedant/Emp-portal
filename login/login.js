// // Check if the admin email exists in local storage
function isAdmin(email) {
    const adminEmail = localStorage.getItem('adminEmail');
    console.log(adminEmail);
    return email === adminEmail;
       }

      //  Employee
       function isEmployee(email) {
         const employeeData = JSON.parse(localStorage.getItem('employeeData')) || [];
         return employeeData.some(employee => employee.email === email);
       }

      //  Admin
       const adminEmail = localStorage.getItem('adminEmail');
       if (!adminEmail) {
    localStorage.setItem('adminEmail', 'admin@example.com');
       }


       // Handle login button click
       document.getElementById('login-btn').addEventListener('click', function () {
    const email = document.getElementById('email').value;

    if (isAdmin(email)) {
    //    window.location.href = '/dashboard/dashboard.html';
    location.assign('/User/index.html')
       console.log('logged in as admin')
    } else if(isEmployee(email)){
      console.log("employee logged in")
      localStorage.setItem('loggedInEmployeeEmail', email);
      location.assign('/User/index.html');
    }
    else {
       alert('Invalid email. Please try again.');
       console.log('try again email is not valid')
       }
       });










// function isAdmin(email){
//     const admin = localStorage.getItem('admin');
//     return email === admin;
// }

// // ADMIN
// const admin = localStorage.getItem('admin')
// if(!admin){
//     localStorage.setItem('admin','admin@admin.com')
// }



// // LOGIN

// document.getElementById('login-btn').addEventListener('click',function() {
//     const email = document.getElementById('email').value;
// })


// if(isAdmin(email)) {
//     window.location.href = 'dashboard/dasboard.html'
// }else{
//     alert('Invalid Email, Please try again')
// }



