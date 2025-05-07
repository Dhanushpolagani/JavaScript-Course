let mysteryVariable;
console.log(mysteryVariable); // undefined
mysteryVariable = 10;
console.log(mysteryVariable); // 10

function revealMystery() {
  let mysteryVariable;
  console.log("Inside revealMystery:", mysteryVariable); // undefined
  mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable); // 20
}
revealMystery();
console.log("After revealMystery:", mysteryVariable); // 10
