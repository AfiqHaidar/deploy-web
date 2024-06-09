var sizeChart = null; 

function orderPerPizzaSize(months, size, orderPerSize) {
    const ctxSize = document.getElementById('size');

    if (sizeChart) {
      sizeChart.destroy();
    }

    const datasets = size.map(range => {
        return {
            label: range,
            data: orderPerSize[range], 
            borderWidth: 1
        };
    });

    sizeChart = new Chart(ctxSize, {
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