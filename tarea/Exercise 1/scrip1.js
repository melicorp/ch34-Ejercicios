let arr = ["This", "is", "a", "sentence."];

function printOutString() {
  return arr.join(" ");
}

//console.log(printOutString());
document.getElementById("mensaje").textContent = printOutString();