"use strict";
// Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
Object.defineProperty(exports, "__esModule", { value: true });
// let statement= "how are you Ahmed, would you like to go for lunch";
// console.log(statement.toLocaleLowerCase());
// console.log(statement.toLocaleUpperCase());
//creating function
function statement1(state) {
    let uppercase = state.toLocaleLowerCase();
    let lowercase = state.toLocaleUpperCase();
    console.log("Uppercase:", uppercase, "LowerCase:", lowercase);
}
;
statement1("How are you today!");
