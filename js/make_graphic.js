// URL de ejemplo para la API. Cambia esta URL por la que necesites usar.
const apiUrl = 'https://smati-victors-projects-4d00ac16.vercel.app/api/xbee/registros';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const labels = data.registros.map(item => item.fecha); // Asumiendo que 'label' es el campo para etiquetas
    const values = data.registros.map(item => item.nivel); // Asumiendo que 'value' es el campo para valores

    crearGrafico(labels, values);
  })
  .catch(error => console.error('Error al obtener los datos:', error));

function crearGrafico(labels, values) {
  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar', // Tipo de gráfico
    data: {
      labels: labels,
      datasets: [{
        label: 'Nivel del cauce',
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}