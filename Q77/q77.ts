// Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

function greatmessage (text: string= "Anonymous") : string{
    return `Hello ${text}`;
};

console.log(greatmessage("Hafeez"));
console.log(greatmessage());
