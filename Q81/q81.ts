// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function logobjectProperties (obj: object){
    for (let property in obj){
console.log(`${property}, ${obj[property]}`);
    }
}

// Example object
let person = {
    name: "Iqbal",
    age: 30,
    city: "Karachi",
};

logobjectProperties(person);
