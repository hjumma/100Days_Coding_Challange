//Double Number in array: Make list of numbers then use trick to make a new list where each number is twice its original value


//original list
let number =[2, 4, 8, 6, 8, 7, 10, 12, 15];
console.log(number);


// Double number list 
let doubleNumber = number.map(number => number * 2);
console.log(doubleNumber);
