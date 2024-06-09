var priceChart = null; 

function orderPerPizzaPrice(months, priceRange, orderPerPrice) {
    const ctxPrice = document.getElementById('price');

    if (priceChart) {
        priceChart.destroy();
    }

    const datasets = priceRange.map(range => {
        return {
            label: range,
            data: orderPerPrice[range], 
            borderWidth: 1
        };
    });

    priceChart = new Chart(ctxPrice, {
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