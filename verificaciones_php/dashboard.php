<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bd_edudash";

$conn = new mysqli($servername, $username, $password, $dbname);

// Consulta SQL para obtener el nombre del estudiante
$sql = "SELECT nombre_datos_personales FROM datos_personales WHERE id_datos_personales = 1"; // Ajusta la consulta según tu estructura de tabla
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Obtener el nombre del primer resultado
    $row = $result->fetch_assoc();
    $nombreEstudiante = $row["nombre_datos_personales"];
} else {
    echo "No se encontró ningún estudiante";
}

/*
Consulta para obtener la ruta de la imagen
$sql = "SELECT imagen FROM tu_tabla WHERE id = 1";
$result = $conn->query($sql);
*/

/*
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $rutaImagen = $row["imagen"];

    // Mostrar la imagen en la página
    echo "<img src='ruta_a_tu_carpeta_de_imagenes/" . $rutaImagen . "' alt='Imagen desde la base de datos'>";
} else {
    echo "No se encontró la imagen";
}
*/
?>