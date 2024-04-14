//Use the .map() method to create a new array that contains the length of each word from an array of words.

let fruits = ["Apple,", "Kiwi", "Guava", " Melon", "Banana"];

let lengths: number[] = fruits.map(fruits => fruits.length);
console.log(lengths);
