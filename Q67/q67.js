"use strict";
//Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.
Object.defineProperty(exports, "__esModule", { value: true });
function sumNumbnstr(vale1, numstringvalue2) {
    return vale1 + Number(numstringvalue2);
}
;
console.log(sumNumbnstr(12, "16"));
console.log(sumNumbnstr(101, "2569"));
console.log(sumNumbnstr(447856, "122598"));
console.log(sumNumbnstr(0.075, "0.125"));
