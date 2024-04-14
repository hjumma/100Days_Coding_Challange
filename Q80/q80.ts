//Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.

let car = {
    make: "Honda",
    model: "Accord",
    year: 2022,
};

// Updating Year & Adding Color
car.year = 2021;
car.color = "Black";

console.log(car.year);
console.log(car.model);
console.log(car.make);

console.log(car);
// there is an error q80.ts:27:5 - error TS2339: Property 'color' does not exist on type '{ make: string; model: string; year: number; }'.
// car.color = "Black"; 

