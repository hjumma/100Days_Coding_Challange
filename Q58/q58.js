"use strict";
//Average Score Calculator : write a simple program that can make lots of scores and find their average. 
Object.defineProperty(exports, "__esModule", { value: true });
function averagescore(...score) {
    let total = score.reduce((total, score) => total + score, 0);
    return total / score.length;
}
console.log(averagescore(80, 90, 100, 120, 75, 86, 85, 101, 55, 45));
