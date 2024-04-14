//Write a function that uses the .filter() method to return an array of numbers greater than 10.

//function Example 1. 

function filtergreator10 (num: number[]) : number [] {
    return num.filter(number=> number > 10);

};
let num = [5,6,7,9,8,9,25,12,11,20,15,18,13,15,16,18,3,25,10,36,5,10,9,6];
console.log("Number Greator Than 10:", filtergreator10(num));


//function Example 2. 

function filterless15 (num: number[]) : number [] {
    return num.filter(number=> number < 15);
};
console.log("Number Less Than 15:", filterless15(num));

//function Example 3 in between. 

function filterinbtwn (num: number[]) : number [] {
    return num.filter(number=> number >= 5 && number <= 20);
};
console.log("Number in between 5 & 20:", filterinbtwn(num));