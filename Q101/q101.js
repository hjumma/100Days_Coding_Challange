"use strict";
//Generate a random integer between 1 and 10.
Object.defineProperty(exports, "__esModule", { value: true });
function genRandom() {
    return Math.floor(Math.random() * 10) + 1;
}
;
console.log(genRandom());
