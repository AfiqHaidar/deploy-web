var sizePiechart = null;

function orderPerPizzaSizepie(sizep, orderPerSizePie) {
    const ctxSizePie = document.getElementById('sizePie');

    if (sizePiechart) {
        sizePiechart.destroy();
    }

    const data = sizep.map(size => orderPerSizePie[size] || 0);

    sizePiechart = new Chart(ctxSizePie, {
        type: 'pie',
        data: {
            labels: sizep,
            datasets: [{
                label: 'Orders per Pizza Size',
                data: data,
                borderWidth: 1
            }]
        }
    });
}