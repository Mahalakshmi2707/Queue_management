// auth.js
function loginUser() {
  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;

  localStorage.setItem("role", role);

  if (role === "patient") {
    window.location.href = "pages/patient-profile.html";
  } else if (role === "doctor") {
    window.location.href = "pages/doctor-dashboard.html";
  } else {
    window.location.href = "pages/admin-dashboard.html";
  }
}

// REGISTER
function registerUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (!name || !email || !password || !role) {
    alert("Please fill all fields");
    return;
  }

  const user = { name, email, password, role };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration successful!");
  window.location.href = "login.html";
}

// LOGIN
function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No user found. Please register.");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
    window.location.href = "pages/doctor-dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "../login.html";
}

