//Modify a method in an object to use the this keyword to access another property in the same object.
var carName = {
    name: "MGMC",
    description: "This is GMC THADE",
    getDescription: function () {
        return "".concat(this.name, ": ").concat(this.description);
    }
};
console.log(carName.getDescription());
