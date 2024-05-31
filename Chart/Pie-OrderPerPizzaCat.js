var catPiechart = null; 

function orderPerPizzaCatpie(category, orderPerCategoryPie) {
    const ctxCatpie = document.getElementById('catPie');

    if (catPiechart) {
        catPiechart.destroy();
    }

    const data = category.map(cat => orderPerCategoryPie[cat] || 0); // Map categories to corresponding order data

    catPiechart = new Chart(ctxCatpie, {
        type: 'pie',
        data: {
            labels: category,
            datasets: [{
                label: 'Orders per Category',
                data: data, // Use the mapped data
                borderWidth: 1
            }]
        }
    });
}
