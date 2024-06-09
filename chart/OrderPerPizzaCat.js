var catChart = null; 

function orderPerPizzaCat(months, category, orderPerCat) {
    const ctxCat = document.getElementById('cat');

    if (catChart) {
      catChart.destroy();
    }

    const datasets = category.map(range => {
        return {
            label: range,
            data: orderPerCat[range], 
            borderWidth: 1
        };
    });

    catChart = new Chart(ctxCat, {
        type: 'line',
        data: {
            labels: months,
            datasets: datasets
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