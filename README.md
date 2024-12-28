# Runtime Type Error in TypeScript
This repository demonstrates a common runtime error in TypeScript that occurs when an argument of the incorrect type is passed to a function.  TypeScript's type system helps prevent many errors during compilation, but it doesn't inherently provide runtime type checking.  This example showcases a scenario where a type error only manifests at runtime.

## How to Reproduce
1. Clone this repository.
2. Compile and run the `bug.ts` file using the TypeScript compiler (tsc) and a JavaScript runtime (like Node.js).
3. Observe the runtime error in the console.

## Solution
The `bugSolution.ts` file demonstrates a solution using runtime type guards to prevent the error.  This is one approach to handling potential type mismatches at runtime.  Other approaches such as using a more robust input validation scheme may be preferable depending on the project's needs.