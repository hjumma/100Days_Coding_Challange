//Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.//
var countries = new Map();
countries.set("Turkey", "Istanbul");
countries.set("Afghanistan", "Kabul");
countries.set("Srilanka", "Colombo");
console.log(countries);
function CanadaInCountries(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of Canada is " + countries.get("Canada"));
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
CanadaInCountries(countries);
