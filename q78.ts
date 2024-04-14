//  Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number


//  Function Expressions:

let squareExpression = function(number: number): number{
    return number*number;
};

//  Function Decleration: 
function squaredec(number: number): number{
    return number*number;
};

console.log(squareExpression(6));
console.log(squaredec(6));


