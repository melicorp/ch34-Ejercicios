function calculateSumAndProduct(numbers) {
    let sum = 0;
    let product = 1;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];      // Calcula la suma
      product *= numbers[i];  // Calcula el producto
    }
  
    return { sum, product };
  }
  
  const numbers = [1, 2, 3, 4];
  const results = calculateSumAndProduct(numbers);
  
  console.log(`The sum is ${results.sum}.`);
  console.log(`The product is ${results.product}.`);

  document.getElementById("resultadoSuma").textContent = `La suma es ${results.sum}.`;
  document.getElementById("resultadoProducto").textContent = `El producto es ${results.product}.`;