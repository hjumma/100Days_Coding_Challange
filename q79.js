"use strict";
// Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
Object.defineProperty(exports, "__esModule", { value: true });
let car = {
    make: "Honda",
    Model: "Accord",
    Year: 2022,
};
console.log(car.Year);
console.log(car.Model);
console.log(car.make);
