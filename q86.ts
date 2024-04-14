// Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false

// function checkforword (sentence: string): boolean{

//     let convertolowercase= sentence.toLocaleLowerCase();
// return convertolowercase.includes("javascript");
// };


// was having this issue thats why could not use includes command q86.ts:6:26 - error TS2550: Property 'includes' does not exist on type 'string'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.

// 6 return convertolowercase.includes("javascript");
// ~~~~~~~~


function checkForWord(sentence: string, word: string): boolean {
    let lowerCaseSentence = sentence.toLowerCase();
    return lowerCaseSentence.indexOf(word.toLowerCase()) !== -1;
}


let sentence1 = "I love Javascript";
let sentence2 = "TypeScript is a superset of JavaScript";

console.log(checkForWord(sentence1, "javascript")); 
console.log(checkForWord(sentence2, "javascript")); 