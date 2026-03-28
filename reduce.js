let sales = [4000, 5000, 6200, 7000, 4400, 3800, 5100];
let salesTotal = 0;
for (sale of sales) {
    salesTotal = salesTotal + sale;
}
console.log(salesTotal);

// Using reduce method
let totalSales = sales.reduce ((total, sale) => total + sale)
console.log(`Total Sales = Rs ${totalSales}`);

