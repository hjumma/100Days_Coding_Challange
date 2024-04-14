//Write a condition using logical operators that checks if a number is divisible by both 2 and 3
function dividedby(number) {
    return number % 2 === 0 && number % 3 === 0;
}
;
console.log(dividedby(6));
console.log("5 is Divisible by 2 & 3:", dividedby(5));
console.log("36 is Divisible by 2 & 3:", dividedby(36));
console.log("85is Divisible by 2 & 3:", dividedby(85));
