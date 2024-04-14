//Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.

function sumNumbnstr (vale1: number, numstringvalue2: string): number{

    return vale1 + Number(numstringvalue2)
} ;

console.log(sumNumbnstr(12,"16"));

console.log(sumNumbnstr(101,"2569"));

console.log(sumNumbnstr(447856,"122598"));
console.log(sumNumbnstr(0.075,"0.125"));