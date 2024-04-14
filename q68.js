//Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function multdec(value1, value2) {
    return +(value1 * value2).toFixed(2);
}
;
console.log(multdec(0.0256, 0.25656));
console.log(multdec(12.586, 156.58793));
