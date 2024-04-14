// function with rest parameters: write a function that take a rest parameters representing multiple hobbies. it should log each hobby with a statement saying you enjoy your hobby,
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobbies) {
        console.log("I enjoy ".concat(hobbies, "."));
    });
}
// call the function with hobby
logHobbies("cricket", "cycling", "gardening");
// undetrstanding purpose have created more logs. 
function logbooks() {
    var books = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        books[_i] = arguments[_i];
    }
    books.forEach(function (books) {
        console.log("\nThese are some Books name ".concat(books, "!"));
    });
}
logbooks("To Kill a Mockingbird", "The Great Gatsby", "The Catcher in the Rye", "Harry Potter and the Sorcerer's Stone");
// Example2
console.log("\nExample 2");
function logplayerName() {
    var playerNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        playerNames[_i] = arguments[_i];
    }
    playerNames.forEach(function (playerNames) {
        console.log("Pakistan Team Players Name ".concat(playerNames, "."));
    });
}
logplayerName("Sarfraz", "Hafeez", "Baber", "NasimShah", "Shahid Afridi");
