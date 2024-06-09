var catPiechart = null; 

function orderPerPizzaCatpie(category, orderPerCategoryPie) {
    const ctxCatpie = document.getElementById('catPie');

    if (catPiechart) {
        catPiechart.destroy();
    }

    const data = category.map(cat => orderPerCategoryPie[cat] || 0); 

    catPiechart = new Chart(ctxCatpie, {
        type: 'pie',
        data: {
            labels: category,
            datasets: [{
                label: 'Orders per Category',
                data: data,
                borderWidth: 1
            }]
        }
    });
}
