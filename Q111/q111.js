//Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function humanAge(age) {
    if (age <= 12) {
        return "Child";
    }
    else if (age >= 13 && age <= 19) {
        return "TeenAge";
    }
    else {
        return "Adult";
    }
}
console.log("Age is 14:", humanAge(14));
console.log("Age is 6:", humanAge(6));
console.log("Age is 40:", humanAge(40));
