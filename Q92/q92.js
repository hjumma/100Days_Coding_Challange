"use strict";
// Write a function to remove the last element from an array and return the removed element.
Object.defineProperty(exports, "__esModule", { value: true });
function removelastfruit(toremov) {
    return toremov.pop();
}
;
let fruit = ["Banana", "Apple", "Mango", "Melon", "kiwi"];
console.log("Removed Fruit:", removelastfruit(fruit));
console.log(fruit);
