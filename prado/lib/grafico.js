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
          label               : 'Produtos Digitais',
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
          label               : 'Eletrônicos',
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
        display: false
      },
      scales: {
        xAxes: [{
          gridLines : {
            display : false,
          }
        }],
        yAxes: [{
          gridLines : {
            display : false,
          },
          ticks: {
            callback: function(value) {
              return value + 'M'; // Adiciona 'M' para milhões
            }
          }
        }]
      }
    };

    new Chart(areaChartCanvas, {
      type: 'line',
      data: areaChartData,
      options: areaChartOptions
    });

    //-------------
    //- GRÁFICO DE LINHA -
    //--------------
    var lineChartCanvas = $('#lineChart').get(0).getContext('2d');
    var lineChartOptions = $.extend(true, {}, areaChartOptions);
    var lineChartData = $.extend(true, {}, areaChartData);
    lineChartData.datasets[0].fill = false;
    lineChartData.datasets[1].fill = false;
    lineChartOptions.datasetFill = false;

    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: lineChartData,
      options: lineChartOptions
    });

    //-------------
    //- GRÁFICO DO NINHO -
    //-------------
    var donutChartCanvas = $('#donutChart').get(0).getContext('2d');
    var donutData = {
      labels: [
          'Chrome',
          'IE',
          'FireFox',
          'Safari',
          'Opera',
          'Navigator',
      ],
      datasets: [
        {
          data: [700, 500, 400, 600, 300, 100],
          backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
        }
      ]
    };
    var donutOptions = {
      maintainAspectRatio : false,
      responsive : true,
    };
    
    new Chart(donutChartCanvas, {
      type: 'doughnut',
      data: donutData,
      options: donutOptions
    });

    //-------------
    //- GRÁFICO DE PIZZA -
    //-------------
    var pieChartCanvas = $('#pieChart').get(0).getContext('2d');
    var pieData = donutData;
    var pieOptions = {
      maintainAspectRatio : false,
      responsive : true,
    };
    
    new Chart(pieChartCanvas, {
      type: 'pie',
      data: pieData,
      options: pieOptions
    });

    //-------------
    //- GRÁFICO DE BARRAS -
    //-------------
    var barChartCanvas = $('#barChart').get(0).getContext('2d');
    var barChartData = $.extend(true, {}, areaChartData);
    var temp0 = areaChartData.datasets[0];
    var temp1 = areaChartData.datasets[1];
    barChartData.datasets[0] = temp1;
    barChartData.datasets[1] = temp0;

    var barChartOptions = {
      responsive              : true,
      maintainAspectRatio     : false,
      datasetFill             : false
    };

    new Chart(barChartCanvas, {
      type: 'bar',
      data: barChartData,
      options: barChartOptions
    });

    //---------------------
    //- GRÁFICO DE BARRAS EMPILHADAS -
    //---------------------
    var stackedBarChartCanvas = $('#stackedBarChart').get(0).getContext('2d');
    var stackedBarChartData = $.extend(true, {}, barChartData);

    var stackedBarChartOptions = {
      responsive              : true,
      maintainAspectRatio     : false,
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            callback: function(value) {
              return value + 'M'; // Adiciona 'M' para milhões
            }
          }
        }]
      }
    };

    new Chart(stackedBarChartCanvas, {
      type: 'bar',
      data: stackedBarChartData,
      options: stackedBarChartOptions
    });
});
