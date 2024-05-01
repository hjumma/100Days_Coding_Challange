// Create a function that assigns a grade (A, B, C, D, F) based on a student's score
function studenGrade(score) {
    if (score >= 90) {
        return "A+";
    }
    else if (score >= 80 && score < 80) {
        return "A";
    }
    else if (score >= 70 && score <= 79) {
        return "B";
    }
    else if (score >= 60 && score <= 69) {
        return "C";
    }
    else if (score >= 49 && score <= 59) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log("Studen Score: 65, Grade", studenGrade(65));
console.log("Studen Score: 95, Grade", studenGrade(95));
console.log("Studen Score: 73, Grade", studenGrade(73));
console.log("Studen Score: 42, Grade", studenGrade(42));
console.log("Studen Score: 51, Grade", studenGrade(51));
