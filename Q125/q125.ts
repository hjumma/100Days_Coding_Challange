//Modify a method in an object to use the this keyword to access another property in the same object.


const carName = {
    name: "GMC",
    description: "This is GMC THADE",
    getDescription: function() {
        return `${this.name}: ${this.description}`;
    }
};

console.log(carName.getDescription()); 