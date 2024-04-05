function validateLogin() {
  var numeroSus = document.getElementById("numeroSus").value;
  if (numeroSus === "1234") {
    window.location.href = "feedback_medico.html";
  } else {
    alert("Número do CRM inválido. Tente novamente.");
  }
}
