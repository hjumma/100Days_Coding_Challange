//Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values

function returnbvalue (value1: number, value2: number): { remainder: number, quotient : number } 
{
    let quotient= Math.floor(value1/value2);
    let remainder = value1 % value2;
       return {quotient, remainder};
};

console.log(returnbvalue(45,6));

console.log(returnbvalue(68,3));
console.log(returnbvalue(34,9));