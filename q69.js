//Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values
function returnbvalue(value1, value2) {
    var quotient = Math.floor(value1 / value2);
    var remainder = value1 % value2;
    return { quotient: quotient, remainder: remainder };
}
;
console.log(returnbvalue(45, 6));
console.log(returnbvalue(68, 3));
console.log(returnbvalue(34, 9));
