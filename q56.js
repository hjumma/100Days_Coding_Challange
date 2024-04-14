"use strict";
//  keep only string; given a mix of differnt types of items make a new list that has only words. 
Object.defineProperty(exports, "__esModule", { value: true });
// A mixed  list 
let mixedArray = ["Peanut Butter", 2, "Knife", 1, "carrot", true, "spoon", 12, false, "Salt", "Blender"];
// Picks out only the words
let stringsArray = mixedArray.filter(item => typeof item === "string");
// Shows the list of just words
console.log(stringsArray);
// if we need only number from list
let numberArray = mixedArray.filter(item => typeof item === "number");
console.log(numberArray);
// if we need only true fasle  from list
let booleanArray = mixedArray.filter(item => typeof item === "boolean");
console.log(booleanArray);
