// Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.


function extract10char(statement : string): string{
    return statement.substring(0,10);
};



let originalString = "Hello, World!";
let extractedString = extract10char(originalString);

console.log(extractedString); 


// example 2

console.log(extract10char("I Love Javascript"));