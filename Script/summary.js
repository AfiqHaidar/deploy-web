function displaySummaryData(top5pizza, totalRevenue, totalOrder) {

    const totalRevenueElement = document.getElementById('total-revenue');
    const totalOrderElement = document.getElementById('total-order');
    const top5pizzaElement = document.getElementById('top-5-pizza');

    totalRevenueElement.textContent = `Total Revenue: $${totalRevenue.toFixed(2)}`;
    totalOrderElement.textContent = `Total Orders: ${totalOrder}`;
    
   const top5pizzaArray = Object.entries(top5pizza)
   .map(([name, count]) => ({ name, count }))
   .sort((a, b) => b.count - a.count) 
   .slice(0, 5); 


    const top5pizzaString = top5pizzaArray.map(item => `${item.name}: ${item.count} orders`).join(', ');


    top5pizzaElement.textContent = top5pizzaString || 'No data available';
    };