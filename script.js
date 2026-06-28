function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    if (!email || !password) {
        msg.style.color = "red";
        msg.innerHTML = "Pfunction login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    if (!email || !password) {
        msg.style.color = "red";
        msg.innerHTML = "Please fill all fields.";
        return;
    }

    // Get registered users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check whether email is registered
    let registeredUser = users.find(u => u.email === email);

    if (!registeredUser) {
        msg.style.color = "red";
        msg.innerHTML = "Email register avvaledu. Mundhu Register avvandi!";
        return;
    }

    // Check password
    if (registeredUser.password === password) {

        msg.style.color = "green";
        msg.innerHTML = "Login Successful!";

        // Store logged in user
        localStorage.setItem("loggedInUser", JSON.stringify(registeredUser));

        // Redirect to Home Page
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);

    } else {

        msg.style.color = "red";
        msg.innerHTML = "Incorrect Password";

    }
}lease fill all fields.";
        return;
    }

    // Get registered users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check whether email is registered
    let registeredUser = users.find(u => u.email === email);

    if (!registeredUser) {
        msg.style.color = "red";
        msg.innerHTML = "Email is not registered. Please register first";
        return;
    }function register(){

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let terms = document.getElementById("terms").checked;

  // validation
  if(!name || !email || !mobile || !password || !confirmPassword){
    alert("All fields required");
    return;
  }

  if(password !== confirmPassword){
    alert("Passwords do not match");
    return;
  }

  if(!terms){
    alert("Accept Terms & Conditions");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // duplicate check
  let exists = users.find(u => u.email === email);
  if(exists){
    alert("User already exists");
    return;
  }

  users.push({
    id: Date.now(),
    name,
    email,
    mobile,
    password
  });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");
  window.location.href = "login.html";
}

// Show / Hide Password

// Show / Hide Password
function togglePassword() {

    const password = document.getElementById("password");
    const eye = document.getElementById("togglePassword");

    if (password.type === "password") {
        password.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }

}

// Show / Hide Confirm Password
function toggleConfirmPassword() {

    const confirmPassword = document.getElementById("confirmPassword");
    const eye = document.getElementById("toggleConfirmPassword");

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    } else {
        confirmPassword.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }

}

// Login Function

function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    if (!email || !password) {
        msg.style.color = "red";
        msg.innerHTML = "Please fill all fields.";
        return;
    }

    // Get registered users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check whether email is registered
    let registeredUser = users.find(u => u.email === email);

    if (!registeredUser) {
        msg.style.color = "red";
        msg.innerHTML = "Email is not registered. Please register first";
        return;
    }

    // Check password
    if (registeredUser.password === password) {

        msg.style.color = "green";
        msg.innerHTML = "Login Successful!";

        // Store logged in user
        localStorage.setItem("loggedInUser", JSON.stringify(registeredUser));

        // Redirect to Home Page
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);

    } else {

        msg.style.color = "red";
        msg.innerHTML = "Incorrect Password";

    }
}

    // Check password
    if (registeredUser.password === password) {

        msg.style.color = "green";
        msg.innerHTML = "Login Successful!";

        // Store logged in user
        localStorage.setItem("loggedInUser", JSON.stringify(registeredUser));

        // Redirect to Home Page
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);

    } else {

        msg.style.color = "red";
        msg.innerHTML = "Incorrect Password";

    }
}
