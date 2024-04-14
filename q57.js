//Find the average Grade: given the list of Grade, Calculate the average Grade. 
var grade = [78, 88, 96, 65, 55, 43, 84, 85, 79, 69];
//calculting avg grade, 
var averagrGrade = grade.reduce(function (total, grade) { return total + grade; }, 0) / grade.length;
console.log("Average Grade:", averagrGrade);
// Example 2:
//Calculating Avg Height of Students in class. 
var height = [5.4, 6.1, 5.1, 6.3, 4.9, 5.2, 5.8, 6.5, 4.9, 5.2];
//calculating avg height
var avgheight = height.reduce(function (total, height) { return total + height; }, 0) / height.length;
console.log(avgheight);
//rounding answer to 2 decimel
var avgheightround = avgheight.toFixed(2);
console.log("Average Height: ".concat(avgheightround));
