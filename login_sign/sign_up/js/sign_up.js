function submitUser() {
  if (
    document.getElementById("name_input").value === "" ||
    document.getElementById("email").value === "" ||
    document.getElementById("password").value === ""
  ) {
    window.location.href = "../../../alerts/wrong-alert/html/wrongAlerts.html";
  } else {
    localStorage.setItem("name", document.getElementById("name_input").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("password", document.getElementById("password").value);
    window.location.href = "../../../alerts/right-alert/html/rightAlerts.html";
  }
}

function toLogin() {
  window.location.href = "../../login/html/login.html";
}

function passwordLen(){
     var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{4,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{0,}).*", "g");
   //Regex: At least 8 characters with at least 2 numericals

    let inputToListen = document.getElementById('password'); // Get Input where psw is write
    let meter= document.getElementById('password-meter')
    inputToListen.addEventListener('input', function () { // Add event listener on input
         if(strongRegex.test(inputToListen.value)){
            // inputToListen.style.borderBottom = '3px solid orange';
            // meter.value=2
            // meter.setAttribute('value','3')
          document.getElementById('len-3').style.display='block'
        }
        if(mediumRegex.test(inputToListen.value)){
            // inputToListen.style.borderBottom = '3px solid green';
            // meter.value=3
            // meter.setAttribute('value','4')
document.getElementById('len-2').style.display='block'
            
        }
        if(enoughRegex.test(inputToListen.value)){
            // inputToListen.style.borderBottom = '3px solid red';
            // meter.value=4

            // meter.setAttribute('value','2')
document.getElementById('len-1').style.display='block'
        }
    });
}
       
        