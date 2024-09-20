$(function () {
  /* ChartJS
   * -------
   * Aqui vamos criar alguns gráficos usando o ChartJS
   */

  //--------------
  //- GRÁFICO DE ÁREA -
  //--------------

  var areaChartCanvas = $('#areaChart').get(0).getContext('2d');

  var areaChartData = {
    labels  : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    datasets: [
      {
        label               : 'Ganhos',
        backgroundColor     : 'rgba(172, 60, 246, 0.9)', // Nova cor
        borderColor         : 'rgba(172, 60, 246, 0.8)', // Nova cor
        pointRadius         : false,
        pointColor          : '#3b8bba',
        pointStrokeColor    : 'rgba(172, 60, 246, 1)', // Nova cor
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgba(172, 60, 246, 1)', // Nova cor
        data                : [28, 48, 40, 19, 86, 27, 90] // Valores em milhões
      },
      {
        label               : 'Jogadores',
        backgroundColor     : 'rgba(232, 84, 107, 1)', // Nova cor
        borderColor         : 'rgba(232, 84, 107, 1)', // Nova cor
        pointRadius         : false,
        pointColor          : 'rgba(232, 84, 107, 1)', // Nova cor
        pointStrokeColor    : '#c1c7d1',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data                : [65, 59, 80, 81, 56, 55, 40] // Valores em milhões
      },
    ]
  };

  var areaChartOptions = {
    maintainAspectRatio : false,
    responsive : true,
    legend: {
      display: true, // Exibir a legenda
      labels: {
        fontColor: '#ffffff' // Texto da legenda em branco
      }
    },
    scales: {
      xAxes: [{
        gridLines : {
          display : false,
        },
        ticks: {
          fontColor: '#ffffff' // Rótulos dos eixos X em branco
        }
      }],
      yAxes: [{
        gridLines : {
          display : false,
        },
        ticks: {
          fontColor: '#ffffff', // Rótulos dos eixos Y em branco
          callback: function(value) {
            return value + 'M'; // Adiciona 'M' para milhões
          }
        }
      }]
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    elements: {
      line: {
        tension: 0.4 // Suaviza as linhas
      }
    },
    backgroundColor: 'rgba(0, 0, 0, 0.6)' // Fundo preto com transparência
  };

  new Chart(areaChartCanvas, {
    type: 'line',
    data: areaChartData,
    options: areaChartOptions
  });
});


const floatingBtn = document.getElementById('floatingBtn');
const sidebar = document.getElementById('sidebar');

floatingBtn.addEventListener('click', function() {
  sidebar.classList.toggle('active');
});