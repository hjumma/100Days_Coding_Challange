//Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
function replaceword(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceword("I love JavaScript & JavaScript is good"));
