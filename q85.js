//Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
function findposition(sentence) {
    return sentence.indexOf("Code");
}
;
console.log(findposition("Coding is fun, but decoding is challenging."));
console.log(findposition("Code is fun, but decoding is challenging."));
console.log(findposition("it good to learn Code language"));
