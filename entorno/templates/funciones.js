// script.js

const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!usuario || !password) {
        alert('Por favor, ingresa ambos campos');
        return;
    }

    // Llamada a la función para validar los datos (opcional)
    validateData(usuario, password);

    // Llamada a la función para iniciar sesión (opcional)
    initiateSession(usuario, password);
});

function validateData(usuario, password) {
    // Verificación de datos
}

function initiateSession(usuario, password) {
    // Llamada al servidor para iniciar sesión
}