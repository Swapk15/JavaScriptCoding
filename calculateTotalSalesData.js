let salesData = [
    { name: 'John', sale: 100 },
    { name: 'Jane', sale: 300 },
    { name: 'John', sale: 200 },
    { name: 'Mike', sale: 500 },
    { name: 'Jane', sale: 400 },
    { name: 'John', sale: 150 },
    { name: 'Mike', sale: 100 },
    { name: 'Jane', sale: 250 },
    { name: 'Mike', sale: 300 },
];

function calculateTotalSalesData(salesData) {
    const totalSales = {};
    salesData.forEach(({ name, sale }) => {
        if (totalSales[name]) {
            totalSales[name] += sale;
        } else {
            totalSales[name] = sale;
        }
    });

    const result = Object.keys(totalSales).map(name => ({
        name, totalSales: totalSales[name]
    }));

    console.log(result);
}

calculateTotalSalesData(salesData)