//combining arrays with spread operator: supposed  you are comparing prices of two different set of laptops, use the spread operators to combine these arrays into single array sorted in ascending order then log the result 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptopPrice1 = [37000, 36000, 48000];
var laptopPrice2 = [45000, 46000, 38000];
// console.log(laptopPrice1);
// Combine arrays using the spread operator
var combinePrices = __spreadArray(__spreadArray([], laptopPrice1, true), laptopPrice2, true);
// Sort the combined array in ascending order
combinePrices.sort(function (a, b) { return a - b; });
// Log the sorted array
console.log("Combined and Sorted Prices:", combinePrices);
