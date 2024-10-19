document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica de autenticación
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    // Aquí puedes agregar la lógica para validar usuario y contraseña
    if (usuario === "admin" && password === "admin") { // Ejemplo de validación simple
        mostrarMenu();
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

function mostrarMenu() {
    document.getElementById('navMenu').style.display = 'block';
    document.getElementById('login').style.display = 'none';
}

function mostrarSeccion(seccionId) {
    const secciones = ['crearCliente', 'crearCuenta', 'actualizarDatos', 'transacciones', 'retirar', 'consignar', 'consultarMovimientos', 'consultarSaldo'];
    secciones.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
    document.getElementById(seccionId).style.display = 'block';
}

function logout() {
    document.getElementById('navMenu').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    // Opcional: Limpieza de formularios y variables de sesión
}



