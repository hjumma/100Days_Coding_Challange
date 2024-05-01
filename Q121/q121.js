//Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
// Skipping 5
for (var i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
// Skipping 1
for (var i = 1; i <= 7; i++) {
    if (i === 1) {
        continue;
    }
    console.log("Skinnping 1", (i));
}
