//Converting Strings to Numbers: Write a function that takes a string representation of a number (e.g., "123") and converts it into an actual number type.

function strtoNum(text: string): number {
    return Number(text);
};

console.log(strtoNum("1234"));
