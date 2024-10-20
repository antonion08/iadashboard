<?php

// Conexión a la base de datos
$servername = "sql3.freesqldatabase.com";
$username = "sql3738152";
$password = "PnV6EPU17z";
$dbname = "sql3738152";

$conn = new mysqli($servername, $username, $password, $dbname);

// Función para verificar los datos del usuario
function verifyUser($usuario, $password) {
    global $conn;

    $sql = "SELECT * FROM login WHERE usuario_login = '$usuario' AND contrasena_login = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        return true;
    } else {
        return false;
    }
}

// Función para iniciar sesión
function initiateSession($usuario, $password) {
    global $conn;

    // Generar un token de sesion y el datetime de su generación
    $token = uniqid();
    $fechahora = date('Y-m-d H:i:s');

    // Insertar el token en la tabla conexiones
    $sql = "INSERT INTO sesiones (fecha_inicio, token) VALUES ('$fechahora', '$token')";
    $conn->query($sql);

    return true;
}

// Función para cerrar sesión
function closeSession($id_sesion) {
    global $conn;

    // Eliminar la conexión de la tabla conexiones
    $sql = "DELETE FROM sesiones WHERE id_sesion = '$id_sesion'";
    $conn->query($sql);
}