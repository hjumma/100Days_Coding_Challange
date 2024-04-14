//Refractoring to Arrow Function: take a simple function that calculates the area of rectualgle and refractor into  an arrow function.
//Area= length * width
// Rectangle area original Function
function calculateArea(width, height) { return width * height; }
console.log(calculateArea(7, 8));
// Refractored in Arrow Function
var calculateareaArrow = function (width, height) { return width * height; };
console.log(calculateareaArrow(5, 6));
