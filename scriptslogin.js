// Registrar Usuario
document.getElementById("btnRegistrar").addEventListener("click", function() {
    let nombre = document.getElementById("regNombre").value;
    let email = document.getElementById("regEmail").value;
    let usuario = document.getElementById("regUsuario").value;
    let pass = document.getElementById("regPass").value;

    if (nombre === "" || email === "" || usuario === "" || pass === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el usuario ya existe
    if (usuarios.some(u => u.email === email)) {
        alert("El correo ya está registrado.");
        return;
    }

    usuarios.push({ nombre, email, usuario, pass });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("✅ Registro exitoso, ahora puedes iniciar sesión");
});


// Iniciar Sesión
document.getElementById("btnLogin").addEventListener("click", function() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let user = usuarios.find(u => u.email === email && u.pass === pass);

    if (user) {
        alert("✅ Bienvenido " + user.nombre);
        // Redirigir a tu página principal
        window.location.href = "index.html";
    } else {
        alert("❌ Correo o contraseña incorrectos");
    }
});