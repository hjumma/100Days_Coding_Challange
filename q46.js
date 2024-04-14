"use strict";
// Enhance Laptop Object : Construct an object for a laptop including properties inc, make, model, year & method describe () that a log scentence about laptop. 
Object.defineProperty(exports, "__esModule", { value: true });
//Define the laptop object:
let laptop = {
    make: "Dell",
    model: "Wasio",
    year: 2024,
    describe: function () {
        console.log(`This laptop is ${this.make}, ${this.model} of ${this.year} .`);
    }
};
//Call the describe method to log a statement abt laptop. 
laptop.describe();
