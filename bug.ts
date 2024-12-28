function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let x: number = 10;
let y: number = 5;

console.log(add(x, y)); // Output: 15
console.log(subtract(x, y)); // Output: 5

// This will cause a runtime error because TypeScript doesn't perform runtime type checking by default
console.log(add(x, "5"));