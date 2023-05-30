function sendMail() {

  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;

  const serviceID = "service_codhxyd";
  const templateID = "template_d19lxsx";
  const regExEmail = (value) => {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
  }

  function emailControl() {
    const leMail = document.getElementById("email").value;
    if (regExEmail(leMail)) {
      return true;
    } else {
      return false;
    }
  }

  $('#myForm').on('submit', function (event) {
    event.preventDefault();
  });

  if (name != "" && emailControl() != false && message != "") {
    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    emailjs.send(serviceID, templateID, params);
    
  } else {
      swal("🤔", "Votre message ne c'est pas envoye! Verifier les champs.", "error");
  }

}