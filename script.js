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