// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function logobjectProperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, ", ").concat(obj[property]));
    }
}
// Example object
var person = {
    name: "Iqbal",
    age: 30,
    city: "Karachi"
};
logobjectProperties(person);
