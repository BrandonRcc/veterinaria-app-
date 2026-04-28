function registrar() {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let password = document.getElementById("password").value;

  if (!nombre || !correo || !password) {
    alert("Completa todos los campos ❌");
    return;
  }

  let usuario = {
    nombre: nombre,
    correo: correo,
    password: password
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert("Usuario creado correctamente ✅");

  window.location.href = "index.html";
}