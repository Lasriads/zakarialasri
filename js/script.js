// script.js
function SendMail() {
  var params = { 
    from_name: document.getElementById("Full Name").value,
    email_id : document.getElementById("Email Id").value,
    message : document.getElementById("message").value
  };

  emailjs.send("service_mv2a5np", "template_athvw5f", params).then(function (res) {
    alert("Succes! " + res.status);
  })
}