function login() {
  let correo = document.getElementById("correo").value;
  let password = document.getElementById("password").value;

  let usuario = JSON.parse(localStorage.getItem("usuario"));

  // 🔴 No hay ningún usuario guardado
  if (!usuario) {
    alert("No hay usuarios registrados ❌");
    return;
  }

  // 🔴 Usuario no existe (correo no coincide)
  if (correo !== usuario.correo) {
    alert("Usuario no registrado ❌");
    return;
  }

  // 🔴 Contraseña incorrecta
  if (password !== usuario.password) {
    alert("Contraseña incorrecta ❌");
    return;
  }

  // 🟢 Todo correcto
  alert("Bienvenido " + usuario.nombre + " 🐾");
  window.location.href = "menu.html";
}
function login() {
  let correo = document.getElementById("correo").value;
  let password = document.getElementById("password").value;

  // USUARIO FIJO
  if (correo === "admin@gmail.com" && password === "123456") {
    alert("Bienvenido Admin 🐾");
    window.location.href = "menu.html";
  } else {
    alert("Usuario o contraseña incorrectos ❌");
  }
}