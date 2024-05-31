var pricePiechart = null;

function orderPerPizzaPricepie(priceRange, orderPerPricePie) {
    const ctxPricePie = document.getElementById('pricePie');

    if (pricePiechart) {
        pricePiechart.destroy();
    }

    const data = priceRange.map(price => orderPerPricePie[price] || 0);

    pricePiechart = new Chart(ctxPricePie, {
        type: 'pie',
        data: {
            labels: priceRange,
            datasets: [{
                label: 'Orders per Price Range',
                data: data,
                borderWidth: 1
            }]
        }
    });
}