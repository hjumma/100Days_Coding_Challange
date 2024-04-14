// Write a function to remove the last element from an array and return the removed element.
function removelastfruit(toremov) {
    return toremov.pop();
}
;
var fruit = ["Banana", "Apple", "Mango", "Melon", "kiwi"];
console.log("Removed Fruit:", removelastfruit(fruit));
console.log(fruit);
