//Generating Random Numbers: Write a function that generates a random number between 1 and 10, inclusive.
function generateRandomNumber() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    var randomNumber = Math.random();
    // Scale the random number to be between 1 and 10 (inclusive)
    var RNumber = Math.floor(randomNumber * 10) + 1;
    return RNumber;
}
console.log(generateRandomNumber());
