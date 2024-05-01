//Write an if statement that logs "Good Morning" if the current time is before 12 PM

let currentTime= new Date();

let currentHour = currentTime.getHours();

console.log(currentHour)

if(currentHour < 12) {
    console.log("Good Morning");}


//Adding More Conditoins: 

console.log("2nd Condition");

if (currentHour <12){ console.log("Good Morning"); }
else if (currentHour>12 && currentHour<18) {console.log("Good Evening");}
else {console.log("Good Afternoon")};


