"use strict";
//Calculate and log the absolute difference between the number -5 and 5.
Object.defineProperty(exports, "__esModule", { value: true });
//Method 1:
let difference = Math.abs(-5 - 5);
console.log(difference);
//Mehtod 2:
function absdiff(numbers) {
    return Math.abs(numbers);
}
;
console.log(absdiff(-10 - 6));
