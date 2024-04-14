//Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function calculatesum(num) {
    return num.reduce(function (total, num) { return total + num; }, 0);
}
;
var tobeadded = [4, 5, 6, 4, 7, 8];
console.log(calculatesum(tobeadded));
