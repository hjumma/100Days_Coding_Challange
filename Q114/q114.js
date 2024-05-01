//iterate over a Map of student IDs and names, and log each pair to the console.
var students = new Map();
students.set(1, "Ahmed");
students.set(2, "Bilal");
students.set(3, "Rizwan");
students.forEach(function (name, id) {
    console.log("StudentID: ".concat(id, ", Name: ").concat(name));
});
