function Alert() {
    const customAlert = document.getElementById("customAlert");
    customAlert.style.display = "block";
  
    // Ocultar la alerta después de unos segundos (por ejemplo, 3 segundos)
    setTimeout(() => {
      customAlert.style.display = "none";
    }, 3000);
  }
  
  function closeCustomAlert() {
    const customAlert = document.getElementById("customAlert");
    customAlert.style.display = "none";
  }
  
export default Alert