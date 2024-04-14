//Average Score Calculator : write a simple program that can make lots of scores and find their average. 
function averagescore() {
    var score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score[_i] = arguments[_i];
    }
    var total = score.reduce(function (total, score) { return total + score; }, 0);
    return total / score.length;
}
console.log(averagescore(80, 90, 100, 120, 75, 86, 85, 101, 55, 45));
