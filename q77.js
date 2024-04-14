// Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greatmessage(text) {
    if (text === void 0) { text = "Anonymous"; }
    return "Hello ".concat(text);
}
;
console.log(greatmessage("Hafeez"));
console.log(greatmessage());
