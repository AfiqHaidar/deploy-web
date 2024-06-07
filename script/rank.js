

function displaySummaryData(top5pizza, totalRevenue, totalOrder) {
    const rank1pizzaNameElement = document.getElementById('rank1-pizza-name');
    const rank1pizzaOrderElement = document.getElementById('rank1-pizza-order');
    const rank2pizzaNameElement = document.getElementById('rank2-pizza-name');
    const rank2pizzaOrderElement = document.getElementById('rank2-pizza-order');
    const rank3pizzaNameElement = document.getElementById('rank3-pizza-name');
    const rank3pizzaOrderElement = document.getElementById('rank3-pizza-order');
    const rank4pizzaNameElement = document.getElementById('rank4-pizza-name');
    const rank4pizzaOrderElement = document.getElementById('rank4-pizza-order');
    const rank5pizzaNameElement = document.getElementById('rank5-pizza-name');
    const rank5pizzaOrderElement = document.getElementById('rank5-pizza-order');

    
    const top5pizzaArray = Object.entries(top5pizza)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count) 
        .slice(0, 5); 

    // Fill in the ranks
    const ranks = [
        { nameElement: rank1pizzaNameElement, orderElement: rank1pizzaOrderElement },
        { nameElement: rank2pizzaNameElement, orderElement: rank2pizzaOrderElement },
        { nameElement: rank3pizzaNameElement, orderElement: rank3pizzaOrderElement },
        { nameElement: rank4pizzaNameElement, orderElement: rank4pizzaOrderElement },
        { nameElement: rank5pizzaNameElement, orderElement: rank5pizzaOrderElement }
    ];

    ranks.forEach((rank, index) => {
        if (top5pizzaArray[index]) {
            rank.nameElement.textContent = top5pizzaArray[index].name;
            rank.orderElement.textContent = `${top5pizzaArray[index].count} orders`;
        } else {
            rank.nameElement.textContent = '-';
            rank.orderElement.textContent = '-';
        }
    });
}
