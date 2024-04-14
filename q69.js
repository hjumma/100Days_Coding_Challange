"use strict";
//Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values
Object.defineProperty(exports, "__esModule", { value: true });
function returnbvalue(value1, value2) {
    let quotient = Math.floor(value1 / value2);
    let remainder = value1 % value2;
    return { quotient, remainder };
}
;
console.log(returnbvalue(45, 6));
console.log(returnbvalue(68, 3));
console.log(returnbvalue(34, 9));
