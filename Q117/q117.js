//Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
//Example 1:
function evaluateStatement(fruit) {
    switch (fruit.toLocaleLowerCase()) {
        case "apple":
            console.log("An Apple a day keeps Doctor away.");
            break;
        case "banana":
            console.log("Bananas are a great source of potassium.");
            break;
        case "orange":
            console.log("Oranges are known for their high vitamin C content.");
            break;
        default:
            console.log("I'm not sure what that fruit is.");
            break;
    }
}
evaluateStatement("kiwi");
evaluateStatement("pear");
evaluateStatement("apple");
evaluateStatement("banan");
evaluateStatement("banana");
