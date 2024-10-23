const url = 'http://tu-servidor.com/api/Tabla';
const tablaElemento = document.getElementById('tabla');
const cuerpoTablaElemento = document.getElementById('cuerpo-tabla');

fetch(url)
  .then(response => response.json())
  .then(data => {
    const fila = document.createElement('tr');

    data.forEach((filaEnBaseDeDatos) => {
      const nombreFila = document.createElement('td');
      nombreFila.textContent = filaEnBaseDeDatos.Nombre;

      const anoFila = document.createElement('td');
      anoFila.textContent = filaEnBaseDeDatos.Año;

      const paisFila = document.createElement('td');
      paisFila.textContent = filaEnBaseDeDatos.Pais;

      fila.appendChild(nombreFila);
      fila.appendChild(anoFila);
      fila.appendChild(paisFila);
    });

    cuerpoTablaElemento.innerHTML = '';
    fila.forEach(filaReal => {
      cuerpoTablaElemento.insertAdjacentElement('beforeend', filaReal.cloneNode(true));
    });
  })
  .catch(error => console.error('Error:', error));