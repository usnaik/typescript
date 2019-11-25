"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Student;
}(person_1.Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(person_1.Person));
var Citizen = /** @class */ (function (_super) {
    __extends(Citizen, _super);
    function Citizen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Citizen;
}(person_1.Person));
function PersonEcho(person) {
    return person;
}
var p1 = new person_1.Person("John", "Player");
var p2 = new Student("James", "Brown");
var p3 = new Teacher("Tim", "Colllins");
var x = PersonEcho(p1);
var y = PersonEcho(p2);
var z = PersonEcho(p3);
console.log(x);
console.log(y);
console.log(z);
function MyEcho(arg) {
    return arg;
}
var myValues = [];
myValues.push(9);
myValues.push(true);
myValues.push("Hello");
myValues.push(null);
myValues.push(undefined);
var str = "";
var retVal;
for (var _i = 0, myValues_1 = myValues; _i < myValues_1.length; _i++) {
    var val = myValues_1[_i];
    retVal = MyEcho(val);
    str += retVal + ":" + typeof (retVal) + "     ";
}
console.log("Returned [Values:Types] >>>         \n" + str);
