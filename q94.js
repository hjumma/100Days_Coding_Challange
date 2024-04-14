//Use the .map() method to create a new array that contains the length of each word from an array of words.
var fruits = ["Apple,", "Kiwi", "Guava", " Melon", "Banana"];
var lengths = fruits.map(function (fruits) { return fruits.length; });
console.log(lengths);
