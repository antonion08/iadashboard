function generarCalendario(mes, anio) {
  // Obtener el primer día del mes
  const primerDia = new Date(anio, mes - 1, 1);
  const diaSemana = primerDia.getDay(); // 0 (domingo) a 6 (sábado)
  const diasMes = new Date(anio, mes, 0).getDate(); // Número de días del mes

  // Obtener la referencia al tbody del calendario
  const tbody = document.getElementById('calendario').getElementsByTagName('tbody')[0];

  // Crear la primera fila y completarla con celdas vacías hasta el primer día del mes
  let fila = tbody.insertRow();
  for (let i = 0; i < diaSemana; i++) {
    let celda = fila.insertCell();
    celda.textContent = '';
  }

  // Crear las filas restantes y llenarlas con los días del mes
  let dia = 1;
  while (dia <= diasMes) {
    fila = tbody.insertRow();
    for (let j = 0; j < 7 && dia <= diasMes; j++) {
      let celda = fila.insertCell();
      celda.textContent = dia;
      dia++;
    }
  }
}

// Ejemplo para generar el calendario del mes actual y año actual
const fechaActual = new Date();
const mesActual = fechaActual.getMonth() + 1;
const anioActual = fechaActual.getFullYear();
generarCalendario(mesActual, anioActual);