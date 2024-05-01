//Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.//

let countries = new Map();

countries.set("Turkey", "Istanbul");
countries.set("Afghanistan", "Kabul");
countries.set("Srilanka", "Colombo");

console.log(countries);


function CanadaInCountries(countries: Map<string, string>) {
    if (countries.has("Canada")) {
        console.log("The capital of Canada is " + countries.get("Canada"));
    } else {
        console.log("Canada is not in the Map.");
    }
}

CanadaInCountries(countries);


// // Same issue as of q112 lib missiing - 
// q113.ts:12:39 - error TS2583: Cannot find name 'Map'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.

// 12 function CanadaInCountries(countries: Map<string, string>) 