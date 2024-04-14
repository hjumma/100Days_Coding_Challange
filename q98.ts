//Create a JavaScript snippet that calculates and logs how many days are left until New Year.

//Current Date
let currentdate = new Date();
//Current year
let currentYear = currentdate.getFullYear();

// Set the target date to New Year's Day of the next year
let targetDate = new Date(currentYear + 1, 0, 1);

// Calculate the difference in milliseconds between the current date and the target date
let differenceInMilliseconds = targetDate.getTime() - currentdate.getTime();

// Convert milliseconds to days
let daysLeft = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

// Log the result
console.log(`There are ${daysLeft} days left until New Year.`);