//Making a student template: create a blueprint for student info includng their name age & the class they are taking and then fill in this blueprint with example student. 

// interface student {
//     name: string;
//     age: number;
//     class: string;
// }

// let student : student = {
//     name: "Bilal",
//     age: 25,
//     class: "MBA",
// };

// console.log(student);

// Creating a blueprint (interface) for student information
interface Student {
    name: string;
    age: number;
    courses: string[];
}

// Filling in the blueprint with an example student
let student: Student = {
    name: "Alice",
    age: 22,
    courses: ["Math", "Science", "History"]
};

// Showing the student's information
console.log(student);
// We're using the blueprint to make sure our student has a name, age, and list of courses.