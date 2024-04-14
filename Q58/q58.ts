//Average Score Calculator : write a simple program that can make lots of scores and find their average. 


function averagescore(...score: number[]): number{
    let total = score.reduce((total, score)=> total+score, 0);return total/score.length;
    }
console.log(averagescore(80,90,100,120,75,86,85,101,55,45));


