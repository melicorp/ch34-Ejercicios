function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Compara elementos adyacentes y los intercambia si están en el orden incorrecto
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  const entrada = [3, 6, 12, 5, 100, 1];
  const salida = bubbleSort(entrada);
  
  console.log(salida); // Debería mostrar [1, 3, 5, 6, 12, 100]
  
  document.getElementById("resultado").textContent = `Lista de salida: ${salida}.`;