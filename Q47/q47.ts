//advance array destructuring: given an array of object representing different laptop each with properties make, model, year use array destructuring to assgin the first and second laptop variable, then log these variable

//Array of laptop Object:

let laptop = [
    {make : "Dell", model: "XPS15", year: 2021},
    {make : "HP", model: "Probook", year: 2022},
    {make : "HP", model: "Sepctre", year: 2024},
];

//destructuring to assgin properties of 1 & 2nd Laptop. 

let[firstlaptop, secondlaptop] = laptop

//Printing or loging name of each laptop. 

console.log("1st Laptop",firstlaptop);

console.log("\n2nd Laptop",secondlaptop);
