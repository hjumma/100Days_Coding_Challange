//Double Number in array: Make list of numbers then use trick to make a new list where each number is twice its original value
//original list
var number = [2, 4, 8, 6, 8, 7, 10, 12, 15];
console.log(number);
// Double number list 
var doubleNumber = number.map(function (number) { return number * 2; });
console.log(doubleNumber);
