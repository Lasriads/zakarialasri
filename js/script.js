// script.js
function SendMail() {
  var params = { 
    from_name: document.getElementById("Full Name").value,
    email_id : document.getElementById("Email Id").value,
    message : document.getElementById("message").value
  };

  emailjs.send("service_mv2a5np", "template_athvw5f", params).then(function (Success) {
    alert("Success! Your message has been sent.");
    document.getElementById("Full Name").value = '';
    document.getElementById("Email Id").value = '';
    document.getElementById("message").value = '';
  }).catch(function(error) {
    alert("Error: " + error.text);
  });
}