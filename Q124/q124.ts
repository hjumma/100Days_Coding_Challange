//Create a function inside an object that returns the object's own name property using the this keyword.

let carName = {
    name: "GMC",
    getName: function() {
        return this.name;
    }
};

console.log(carName.getName()); 
