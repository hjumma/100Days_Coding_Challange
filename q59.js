//Add a Special Number: Make a program that creates custom adders these adders can add a specific number to any number you give them later. 
function createAdder(specialNumber) {
    return function (number) {
        return specialNumber + number;
    };
}
// Create custom adders for specific numbers
var addFive = createAdder(5);
// Use custom adders
console.log("Add 5 Function Adder:", addFive(7)); // Output: 12 (5 + 7)
//Example 2
var addTen = createAdder(10);
console.log("Add 10 Function Adder:", addTen(20)); // Output: 30 (10 + 20)
//Example 3: If we need to multiply instead of addition. 
function createAdderM(specialNumberM) {
    return function (number) {
        return specialNumberM * number;
    };
}
// Create custom adders for specific numbers
var multithree = createAdderM(3);
// Use custom adders
console.log("Multiply 3 Function Adder:", multithree(21)); // Output: 12 (5 + 7)
