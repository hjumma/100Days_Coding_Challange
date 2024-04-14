//Calculate and log the absolute difference between the number -5 and 5.


//Method 1:
let difference: number = Math.abs(-5-5);
console.log(difference);

//Mehtod 2:

function absdiff(numbers: number) : number {
    return Math.abs(numbers);
};

console.log(absdiff(-10-6));