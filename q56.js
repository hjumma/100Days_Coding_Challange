//  keep only string; given a mix of differnt types of items make a new list that has only words. 
// A mixed  list 
var mixedArray = ["Peanut Butter", 2, "Knife", 1, "carrot", true, "spoon", 12, false, "Salt", "Blender"];
// Picks out only the words
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
// Shows the list of just words
console.log(stringsArray);
// if we need only number from list
var numberArray = mixedArray.filter(function (item) { return typeof item === "number"; });
console.log(numberArray);
// if we need only true fasle  from list
var booleanArray = mixedArray.filter(function (item) { return typeof item === "boolean"; });
console.log(booleanArray);
