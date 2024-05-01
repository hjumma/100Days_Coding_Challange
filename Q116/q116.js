// Create a switch case that matches several cases to the same code block, representing seasons.
function yearSeason(month) {
    var season;
    {
        switch (month) {
            case 1:
            case 2:
            case 12:
                season = "Winter";
                break;
            case 3:
            case 4:
            case 5:
                season = "Spring";
                break;
            case 6:
            case 7:
            case 8:
                season = "Summer";
                break;
            case 9:
            case 10:
            case 11:
                season = "Autum";
                break;
            default:
                season = "Invalid Month";
                break;
        }
        return season;
    }
}
console.log(yearSeason(6));
console.log(yearSeason(12));
console.log(yearSeason(0));
console.log(yearSeason(4));
console.log(yearSeason(9));
console.log(yearSeason(1));
