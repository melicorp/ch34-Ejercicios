const arr = [1, 2, 4, 5];

function duplicar(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = arreglo[i] * 2;
  }
  return arreglo;
}

const resultado = duplicar(arr);
document.getElementById("resultado").textContent = JSON.stringify(resultado); //se utiliza para convertir ese arreglo en una cadena de texto en formato JSON
