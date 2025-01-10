const products = [
    { name: "Laptop", price: 1000, quantity: 5 },
    { name: "Smartphone", price: 700, quantity: 10 },
    { name: "Headphones", price: 100, quantity: 20 },
    { name: "Monitor", price: 300, quantity: 7 }
];

function calculateTotalRevenue(products) {
    if (!products || products.length === 0) {
        return 0; 
    }

    // حساب الإيرادات عن طريق جمع السعر * الكمية لكل منتج
    const totalRevenue = products.reduce((total, product) => {
        return total + (product.price * product.quantity); 
    }, 0);

    return totalRevenue;
}

const totalRevenue = calculateTotalRevenue(products);

console.log("Total Revenue: $", totalRevenue);
