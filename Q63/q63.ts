//Shape shifter: write a program that can describe either a cricle or a rectangle using special types alias, including unqiue properties for each shape. 

//Creating type alias
type Shape = {
kind: "circle" | "rectangle";
radius?: number;
width?: number;
lenght?: number;
}; 

//Describing Shape (Circle & Rectangle)
let circle:  Shape = {
    kind: "circle",
    radius: 5,
    };

let rectangle: Shape = {
    kind: 'rectangle',
    width: 4,
    lenght: 9,
};

// Printing Circle & Rectangle 
console.log(circle);
console.log(rectangle);

//example 2 
type Shape2 = {
    kind2: "Square" | "Triangle";
    base?: number;
    height2?: number;
    side?: number;
};

//Describing triangle & square
let triangle: Shape2 = {
    kind2: "Triangle",
    base: 7,
    height2: 9,
    side: 6,
};

let square : Shape2 ={
    kind2: "Square",
    side: 4,
};

console.log(triangle);
console.log(square);

