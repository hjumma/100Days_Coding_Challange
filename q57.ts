//Find the average Grade: given the list of Grade, Calculate the average Grade. 

let grade = [78,88,96,65,55,43,84,85,79,69];
//calculting avg grade, 

let averagrGrade = grade.reduce((total,grade)=> total+grade,0)/grade.length;

console.log("Average Grade:", averagrGrade);

// Example 2:
//Calculating Avg Height of Students in class. 

let height = [5.4, 6.1, 5.1, 6.3, 4.9, 5.2, 5.8, 6.5, 4.9, 5.2];
//calculating avg height
let avgheight =height.reduce((total, height) => total+height,0)/height.length;
console.log(avgheight);

//rounding answer to 2 decimel

let avgheightround = avgheight.toFixed(2);

console.log(`Average Height: ${avgheightround}`);