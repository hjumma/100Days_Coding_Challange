// Find the index of "Banana" in an array of fruits and replace it with "Mango".


//1st Method: 
let fruit: string []= ["Strawberry", "Apple", "Banana", "Melon", "kiwi"];
//original array
console.log("Original Array:", fruit);

//Banana Index
let bananaIndex = (fruit.indexOf("Banana"));
// replace banan with mango
if (bananaIndex !== -1) {
    fruit[bananaIndex]= "Mango";
console.log("Udated array:", fruit);
}
else {
    console.log("Banana not found in array")
};


// 2nd Mehtod via function;

function replacefruit (fruits: string[]) {
    let index= fruits.indexOf("Banana");
    if (index !== -1) fruits[index]= "mango";
return fruits;
};

let fruits = ["Apple,", "Kiwi", "Guava", " Melon", "Banana"];
console.log(replacefruit(fruits));
