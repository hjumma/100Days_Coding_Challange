"use strict";
//Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
Object.defineProperty(exports, "__esModule", { value: true });
function calculatesum(num) {
    return num.reduce((total, num) => total + num, 0);
}
;
let tobeadded = [4, 5, 6, 4, 7, 8];
console.log(calculatesum(tobeadded));
