//Compare two strings to check if they are identical, ignoring case sensitivity.

function compare(lineA, lineB) {
    return lineA.toLowerCase() === lineB.toLowerCase();
}

console.log(compare("bilal", "BILAL"));

console.log(compare("A Quick Brown Fox jump Over a LAZY DOG", "A QUICK BROWN FOX JUMP OVER A LAZY DOG"));

console.log(compare("A Quick Brown Fox jump Over a LAZY $DOG", "A QUICK BROWN FOX JUMP OVER A LAZY DOG"));

console.log(compare("SAP FEORI", "SAP FIORI"));

// IF WE NEED TO COMPARE NUMBER 

function compareNum (Line1, Line2 ){
    return Line1 === Line2 ;
    }
console.log("Compare Number", compareNum(7,7));

console.log("Compare Number", compareNum(7,9));


console.log("Compare Number", compareNum(8.1,8.0));