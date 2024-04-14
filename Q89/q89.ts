// Rounding Numbers: Create a function that takes a number with decimals (e.g., 3.14159) and rounds it to two decimal places.

function roundnum( text: number) {
    return text.toFixed(2);
};

console.log(roundnum(6.55656));

console.log(roundnum(0.23566));
console.log(roundnum(3.14568));