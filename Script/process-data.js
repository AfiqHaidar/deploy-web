
function processData({ months: selectedMonths, days: selectedDays, priceRange: selectedPriceRange, periods: selectedPeriods, category: selectedCategory, sizep: selectedSize } ) {

    console.log("Selected months:", selectedMonths);
    console.log("Selected days:", selectedDays);
    console.log("Selected price ranges:", selectedPriceRange);
    console.log("Selected periods:", selectedPeriods);
    console.log("Selected categories:", selectedCategory);
    console.log("Selected sizes:", selectedSize);

    // ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const months = selectedMonths;

    // [ "< 10", "10 - 15", "15 - 20","20 - 25","25 - 30","> 30",];
    const priceRange = selectedPriceRange;

    // ['Monday', 'Wednesday', 'Tuesday','Sunday', 'Thursday', 'Friday', 'Saturday'];
    const days = selectedDays;

    // ['Morning', 'Night', 'Afternoon', 'Evening'];
    const periods = selectedPeriods;

    // ['Classic', 'Veggie', 'Supreme', 'Chicken'];
    const category = selectedCategory;

    // ['S', 'M', 'L', 'XL', 'XXL'];
    const sizep = selectedSize;

     // data prep
     let totalRevenue = 0.0;
     let totalOrder = 0;
     const revenuePerMonths = {};
     const orderPerMonths = {};
     const orderPerPrice = {};
     const orderPerPricePie = {};
     const orderPerSize = {};
     const orderPerSizePie = {};
     const orderPerCategory = {};
     const orderPerCategoryPie = {};
     const pizzaTypeCount  = {};
    
    fetch('/data/pizza_sales_data.json')
    .then(response => response.json())
    .then(data => {

        // filtered
        const filteredData = data.filter(order => 
            days.includes(order.Day) 
            && periods.includes(order.Period) 
            && months.includes(order.Month) 
            &&  priceRange.includes(order.PriceRange) 
            && category.includes(order.Category)
            && sizep.includes(order.Size)

        );

        // data init
        months.forEach(month => {
            revenuePerMonths[month] = 0;
            orderPerMonths[month] = 0;
        });
        

        priceRange.forEach(price => {
            orderPerPricePie[price] = 0;
            orderPerPrice[price] = {}; 
            months.forEach(month => {
                orderPerPrice[price][month] = 0; 
            });
        });

        sizep.forEach(size => {
            orderPerSizePie[size] = 0;
            orderPerSize[size] = {}; 
            months.forEach(month => {
                orderPerSize[size][month] = 0; 
            });
        });

        category.forEach(category => {
            orderPerCategoryPie[category] = 0;
            orderPerCategory[category] = {}; 
            months.forEach(month => {
                orderPerCategory[category][month] = 0;
            });
        });

        const uniqueOrders = new Set();

        filteredData.forEach(order => {
            const month = order.Month;
            const price = parseFloat(order.TotalPrice);
            const orderId = order.OrderID;
            const pr = order.PriceRange;
            const cat = order.Category;
            const sz = order.Size;
            const pizzaType = order.PizzaType;

            //  total revenue
            totalRevenue += price;

            //  unique orders
            if (!uniqueOrders.has(orderId)) {
                uniqueOrders.add(orderId);
                totalOrder++;

                //  unique orders related
                orderPerMonths[month] += 1;
               
            }
            orderPerPrice[pr][month] += parseInt(order.Quantity);
            orderPerPricePie[pr] += parseInt(order.Quantity);
            orderPerCategory[cat][month] += parseInt(order.Quantity);
            orderPerCategoryPie[cat] += parseInt(order.Quantity);
            orderPerSize[sz][month] += parseInt(order.Quantity);
            orderPerSizePie[sz] += parseInt(order.Quantity); 

            revenuePerMonths[month] += price;

            if (!pizzaTypeCount[pizzaType]) {
                pizzaTypeCount[pizzaType] = 0;
            }
            pizzaTypeCount[pizzaType] += parseInt(order.Quantity);
        })

        const sortedPizzaTypes = Object.entries(pizzaTypeCount).sort((a, b) => b[1] - a[1]);

        const top5pizza = sortedPizzaTypes.slice(0, 5).reduce((acc, [pizzaType, count]) => {
                acc[pizzaType] = count;
                return acc;
            }, {});

        console.log("total rev :", totalRevenue);
        console.log("total order: ", totalOrder);
        console.log(revenuePerMonths);
        console.log(orderPerMonths);
        console.log(orderPerPrice);
        console.log(pizzaTypeCount);
        console.log(top5pizza);
        console.log(orderPerCategoryPie);

        
        
        function safeFunctionCall(functionName, ...args) {
            if (typeof window[functionName] === 'function') {
                window[functionName](...args);
            } else {
                console.warn(`Function ${functionName} does not exist.`);
            }
        }
        
        safeFunctionCall('orderPerPizzaPrice', months, priceRange, orderPerPrice);
        safeFunctionCall('orderPerPizzaSize', months, sizep, orderPerSize);
        safeFunctionCall('orderPerPizzaCat', months, category, orderPerCategory);
        safeFunctionCall('monthlyRevenue', months, revenuePerMonths);
        safeFunctionCall('displaySummaryData', top5pizza, totalRevenue, totalOrder);
        safeFunctionCall('displayRankData', top5pizza, totalRevenue, totalOrder);
        
        safeFunctionCall('orderPerPizzaCatpie', category, orderPerCategoryPie);
        safeFunctionCall('orderPerPizzaPricepie', priceRange, orderPerPricePie);
        safeFunctionCall('orderPerPizzaSizepie', sizep, orderPerSizePie);
        
    });    
}
