// Write a function to remove the last element from an array and return the removed element.

function removelastfruit<T>(toremov: T[]): T | undefined {
    return toremov.pop();
};

let fruit: string []= ["Banana", "Apple", "Mango", "Melon", "kiwi"];

console.log("Removed Fruit:", removelastfruit(fruit));
console.log(fruit);
