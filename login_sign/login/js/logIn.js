var local_email = localStorage.getItem("email");
var local_password = localStorage.getItem("password");

function toSignUp() {
  window.location.href = "../../sign_up/html/signup.html";
}

function toHome() {
  if (
    document.getElementById("email").value === local_email &&
    document.getElementById("password").value === local_password
  ) {
    console.log("valid mail");
    window.location.href = "../../../Home/html/home.html";
  } else {
    window.location.href = "../../../alerts/login-alert/html/loginAlert.html";
  }
}
