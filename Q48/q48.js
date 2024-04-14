"use strict";
//combining arrays with spread operator: supposed  you are comparing prices of two different set of laptops, use the spread operators to combine these arrays into single array sorted in ascending order then log the result 
Object.defineProperty(exports, "__esModule", { value: true });
let laptopPrice1 = [37000, 36000, 48000];
let laptopPrice2 = [45000, 46000, 38000];
// console.log(laptopPrice1);
// Combine arrays using the spread operator
let combinePrices = [...laptopPrice1, ...laptopPrice2];
// Sort the combined array in ascending order
combinePrices.sort((a, b) => a - b);
// Log the sorted array
console.log("Combined and Sorted Prices:", combinePrices);
