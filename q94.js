"use strict";
//Use the .map() method to create a new array that contains the length of each word from an array of words.
Object.defineProperty(exports, "__esModule", { value: true });
let fruits = ["Apple,", "Kiwi", "Guava", " Melon", "Banana"];
let lengths = fruits.map(fruits => fruits.length);
console.log(lengths);
