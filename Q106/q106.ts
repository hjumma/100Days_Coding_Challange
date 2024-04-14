
// Determine if a given year is a leap year using comparison operators.


// // Leap years are divisible by 4 but not by 100 
function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

//Log
console.log(isLeapYear(2023)); 
console.log(isLeapYear(2024)); 
