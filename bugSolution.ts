function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

let x: number = 10;
let y: number = 5;

console.log(add(x, y)); // Output: 15
console.log(subtract(x, y)); // Output: 5

//Using type guard to prevent runtime errors
let z: any = "5";

if (isNumber(z)) {
  console.log(add(x, z));
} else {
  console.log("Error: Invalid input type");
}
//Similarly this can be applied to the subtract function

if (isNumber(z)) {
  console.log(subtract(x, z));
} else {
  console.log("Error: Invalid input type");
}