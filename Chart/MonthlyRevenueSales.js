var revenueChart = null; 

function monthlyRevenue(months, revenuePerMonths) {
    const ctxRevenue = document.getElementById('revenue');

    if (revenueChart) {
      revenueChart.destroy();
    }

    revenueChart = new Chart(ctxRevenue, {
        type: 'bar',
        data: {
          labels: months,
          datasets: [{
              label: 'Revenue',
              data: revenuePerMonths, 
              borderWidth: 1,
              barThickness: 20 
          }]
      },
      plugins: [ChartDataLabels],
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
              datalabels: {
                  anchor: 'end',
                  align: 'end',
                  color: 'black',
                  font: {
                      weight: 'bold'
                  },
                  formatter: function(value, context) {
                      return value;
                  }
              }
          }
        }
    });
}