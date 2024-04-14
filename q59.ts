//Add a Special Number: Make a program that creates custom adders these adders can add a specific number to any number you give them later. 



function createAdder(specialNumber: number): (number: number) => number {
    return function(number:number): number{
        return specialNumber + number;
    };
}

// Create custom adders for specific numbers
let  addFive = createAdder(5);

// Use custom adders
console.log("Add 5 Function Adder:", addFive(7)); // Output: 12 (5 + 7)

//Example 2
let  addTen = createAdder(10);
console.log("Add 10 Function Adder:",addTen(20)); // Output: 30 (10 + 20)

//Example 3: If we need to multiply instead of addition. 


function createAdderM(specialNumberM: number): (number: number) => number {
    return function(number:number): number{
        return specialNumberM * number;
    };
}

// Create custom adders for specific numbers
let  multithree = createAdderM(3);

// Use custom adders
console.log("Multiply 3 Function Adder:", multithree(21)); // Output: 12 (5 + 7)