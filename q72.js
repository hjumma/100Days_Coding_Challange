"use strict";
// Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
Object.defineProperty(exports, "__esModule", { value: true });
{
    // Inside the block
    let localVar = "I'm a local variable";
    const constVar = "I'm a constant";
    console.log(localVar); // Output: I'm a local variable
    console.log(constVar); // Output: I'm a constant
}
// Outside the block
console.log(localVar); // Error: localVar is not defined
console.log(constVar); // Error: constVar is not defined
