"use strict";
// Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
Object.defineProperty(exports, "__esModule", { value: true });
function checkBothTrue(valu1, value2) {
    return valu1 && value2;
}
;
console.log(checkBothTrue(true, false));
console.log(checkBothTrue(true, true));
console.log(checkBothTrue(false, false));
console.log(checkBothTrue(false, true));
