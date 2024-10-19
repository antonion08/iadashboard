function buscarImagen() {
    const rutaActual = window.location.pathname;
    const rutaImagen = `./${rutaActual.replace(/^\/+|\/+$/g, '')}/imagen.png`;
    console.log(rutaImagen);
  
    const image = new Image();
    image.src = rutaImagen;
  
    // Agrega un evento de carga para mostrar la imagen
    image.onload = function() {
      document.body.appendChild(image);
    };

const boton = document.getElementById('boton');
              
                boton.addEventListener('click', function() {
                  window.open('materias.html', '_blank');
                });