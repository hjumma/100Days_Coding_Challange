"use strict";
//making Enums of vehicles : lets create catageories for vehcile like cars trucks and motorcycle using enums and show once example 
Object.defineProperty(exports, "__esModule", { value: true });
var vehcileCat;
(function (vehcileCat) {
    vehcileCat[vehcileCat["car"] = 0] = "car";
    vehcileCat[vehcileCat["truck"] = 1] = "truck";
    vehcileCat[vehcileCat["Motorcycle"] = 2] = "Motorcycle";
})(vehcileCat || (vehcileCat = {}));
console.log(vehcileCat.Motorcycle);
console.log(vehcileCat.car);
