"use strict";
//Refractoring to Arrow Function: take a simple function that calculates the area of rectualgle and refractor into  an arrow function.
//Area= length * width
Object.defineProperty(exports, "__esModule", { value: true });
// Rectangle area original Function
function calculateArea(width, height) { return width * height; }
console.log(calculateArea(7, 8));
// Refractored in Arrow Function
let calculateareaArrow = (width, height) => width * height;
console.log(calculateareaArrow(5, 6));
