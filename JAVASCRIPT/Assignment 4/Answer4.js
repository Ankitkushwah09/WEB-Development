function calculateTax(income) {
    let taxRate;
  
    if (income <= 10000) {
      taxRate = 0.1;
    } else if (income <= 50000) {
      taxRate = 0.2;
    } else {
      taxRate = 0.3;
    }
  
    return income * taxRate;
  }
  
  // Test the function with various incomes
  console.log(calculateTax(8000)); // Example 1: income <= 10000
  console.log(calculateTax(30000)); // Example 2: 10000 < income <= 50000
  console.log(calculateTax(75000)); // Example 3: income > 50000