// function with rest parameters: write a function that take a rest parameters representing multiple hobbies. it should log each hobby with a statement saying you enjoy your hobby,

function logHobbies(...hobbies: string[]){

    hobbies.forEach(hobbies => {
    console.log(`I enjoy ${hobbies}.`);    
    });
}
// call the function with hobby
logHobbies("cricket", "cycling", "gardening");


// undetrstanding purpose have created more logs. 

function logbooks(...books: string[]){

    books.forEach(books => {
        console.log(`\nThese are some Books name ${books}!`);
    });

}
logbooks("To Kill a Mockingbird", "The Great Gatsby", "The Catcher in the Rye", "Harry Potter and the Sorcerer's Stone");

// Example2
console.log("\nExample 2");

function logplayerName(...playerNames: string[]){
    playerNames.forEach(playerNames => {
        console.log(`Pakistan Team Players Name ${playerNames}.`);
    });
}

logplayerName("Sarfraz","Hafeez", "Baber", "NasimShah", "Shahid Afridi");

