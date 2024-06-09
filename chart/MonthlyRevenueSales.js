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
              barThickness: 20,
              backgroundColor: '#FF2D2670',
          }]
      },
      options: {
        plugins: {
            legend: {
                labels: {
                    
                    font: {
                        size: 16
                    }
                }
            },
            datalabels: {
                formatter: function(value, context) {
                    return value;
                  }
            },
        },
        scales: {
            x: {
              ticks: {
                font: {
                    size: 16 
                }
              }
            },
            y: {
                ticks: {
                  font: {
                      size: 16 
                  }
                }
              }
        }
    }
    });
}