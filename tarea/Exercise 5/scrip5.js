let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1. Imprimir todas las personas en la lista.
console.log(people);

document.getElementById("resultado1").textContent = `Las personas de la lista son: ${people}.`;

// 2. Eliminar "Dani" del arreglo.
const indexToRemoveDani = people.indexOf("Dani");
if (indexToRemoveDani !== -1) {
  people.splice(indexToRemoveDani, 1);
}

// 3. Eliminar "Juan" del arreglo.
const indexToRemoveJuan = people.indexOf("Juan");
if (indexToRemoveJuan !== -1) {
  people.splice(indexToRemoveJuan, 1);
}

// 4. Mover "Luis" al principio del arreglo.
const indexToMoveLuis = people.indexOf("Luis");
if (indexToMoveLuis !== -1) {
  people.splice(indexToMoveLuis, 1);
  people.unshift("Luis");
}

// 5. Agregar tu nombre al final del arreglo.
people.push("Melissa");

// 6. Usando un ciclo, imprimir "Maria" y salir del ciclo.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  }
}

// 7. Encontrar el índice donde se encuentra "Maria".
const indexOfMaria = people.indexOf("Maria");

console.log("Índice de 'Maria': " + indexOfMaria);

// Al final del ejercicio, deberían quedar 4 personas en el arreglo.
console.log(people);

document.getElementById("resultado2").textContent = `Lista modificada/actualizada: ${people}.`;
