function comprobarClave()
{
  let clave1 = document.getElementById('password-1').value
  let clave2 = document.getElementById('password-2').value

  if(clave1 == clave2) {
    alert == null;
  } else{
    alert("Compruebe que sus claves coinciden") 
  }
}

function validarForm() {
  nombre.addEventListener("input", validarNombre);
  email.addEventListener("input", validarEmail);
  validarNombre();
  validarEmail();
 }

 function validarNombre() {
  if(nombre.value=="") {
    nombre.style.borderColor="#e17777"; 
    nombre.style.borderWidth="3px";
  } else if(nombre.value!="") {
    nombre.style.borderColor="#4eca64";
    nombre.style.borderWidth="3px";
  }
 }
 window.addEventListener("load", validarForm);


  function validarEmail() {
  if(email.value=="") {
    email.style.borderColor="#e17777"; 
    email.style.borderWidth="3px";
  } else if(nombre.value!="") {
    email.style.borderColor="#4eca64";
    email.style.borderWidth="3px";
  }
 }
 window.addEventListener("load", validarForm);

