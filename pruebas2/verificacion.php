<?php

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "jrrg";
$dbname = "bd_usuarios";

$conn = new mysqli($servername, $username, $password, $dbname);

// Función para verificar los datos del usuario
function verifyUser($usuario, $password) {
    global $conn;

    $sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND password = '$password'";
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

    // Generar un token de sesion
    $token = uniqid();

    // Insertar el token en la tabla conexiones
    $sql = "INSERT INTO conexiones (usuario_id, password, token) VALUES ('$usuario', '$password', '$token')";
    $conn->query($sql);

    return true;
}

// Función para cerrar sesión
function closeSession($id) {
    global $conn;

    // Eliminar la conexión de la tabla conexiones
    $sql = "DELETE FROM conexiones WHERE id = '$id'";
    $conn->query($sql);
}