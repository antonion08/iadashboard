<?php

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bd_edudash";

$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar la conexión
if (!$conn) {
    die("Error al conectar: " . mysqli_connect_error());
  }
  
  // Función para autenticar
  function autenticar($username, $contrasena, $estatus) {
    global $conn;
    $query = "SELECT * FROM login WHERE username = '$username' AND password = '$contrasena'";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, 'i');
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
  
    if ($result->num_rows > 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Verificar la autenticación
  $usuario = $_POST['username'];
  $contrasena = $_POST['contrasena'];
  
  if (autenticar($usuario, $contrasena)) {
    header('http://localhost/Github/iadashboard/templates/dashboard.html');
    exit;
  } else {
    echo "Error al autenticar.";
  }
  ?>