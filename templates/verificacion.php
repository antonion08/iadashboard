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
    $query = "SELECT * FROM usuarios WHERE username = '$username' AND contraseña = '$contrasena' AND estatus = ?;";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, 'i', $estatus);
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
  $estatus = $_POST['estatus'];
  
  if (autenticar($usuario, $contrasena, $estatus)) {
    // Si el estatus es 1, envíame a la URL 1
    if ($estatus == 1) {
      header('Location: http://example.com/url1');
      exit;
    }
    // Si el estatus es 2, envíame a la URL 2
    elseif ($estatus == 2) {
      header('Location: http://example.com/url2');
      exit;
    } else {
      echo "No has sido autenticado";
    }
  } else {
    echo "Error al autenticar";
  }
  
  ?>