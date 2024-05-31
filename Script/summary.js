

function displayRankData(top5pizza, totalRevenue, totalOrder) {
    const totalRevenueElement = document.getElementById('total-revenue');
    const totalOrderElement = document.getElementById('total-order');

    totalRevenueElement.textContent = `$ ${totalRevenue.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    totalOrderElement.textContent = `${totalOrder.toLocaleString('de-DE')}`;
    
}
