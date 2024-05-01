//Use a switch statement to log the days of the week based on a number (1-7).

function daysofWeek (dayNo: number){
    let day : string;
    switch (dayNo){
        case 1: day= "Sunday";
        break;
        case 2: day= "Monday";
        break;
        case 3: day= "Tuesday";
        break; 
        case 4: day= "Wednesday";
        break;
        case 5: day= "Thursday";
        break;
        case 6: day= "Friday";
        break;
        case 7: day= "Saturday";
        break;
        default: day= "Invalid Day";
        break;
    }
    return day;
}
    console.log(daysofWeek(1));
console.log(daysofWeek(8));
console.log(daysofWeek(3));
console.log(daysofWeek(6));
console.log(daysofWeek(2));
console.log(daysofWeek(0));
console.log(daysofWeek(7));