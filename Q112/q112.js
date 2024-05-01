"use strict";
//Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
Object.defineProperty(exports, "__esModule", { value: true });
let countries = new Map();
countries.set("Turkey", "Istanbul");
countries.set("Afganistan", "Kabul");
countries.set("Srilanka", "Colombo");
console.log(countries);
// issue with MAP function have tried to update Lib but not working. 
//q112.ts:4:21 - error TS2583: Cannot find name 'Map'. Do you need to change your target library? Try changing the 'lib' compiler 
//option to 'es2015' or later.
