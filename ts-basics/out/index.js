"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
// import * as _ from './node_modules/lodash/lodash.js';
var _ = __importStar(require("lodash"));
var p1 = new person_1.Person();
var p2 = new person_1.Person("Upendra", "Naik");
var p3 = new person_1.Person("Archana");
p1.setFirstName("Rohan");
p1.setLastName("Naik");
console.log(p1);
console.log(p2);
console.log(p3);
var array = [1, 2, 3, 4, 5];
_.reverse(array);
console.log(array);
