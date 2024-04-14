//Make a smartphone object create a simple way to keep track of a smartphone details, include details like mode, brand & other key feature like how much storage it has the size of screen & how long its battery last. 
//Smartphone details:
var smartphone = {
    brand: "Sony",
    model: "Xperia",
    specs: {
        storage: "256GB",
        screenSize: "6.5 Inches",
        batteryLife: "Up to 2 days"
    }
};
console.log("Smartphone Details:");
console.log("Brand:", smartphone.brand);
console.log("Model:", smartphone.model);
console.log("Storage:", smartphone.specs.storage);
console.log("Screen Size:", smartphone.specs.screenSize);
console.log("Battery Life:", smartphone.specs.batteryLife);
