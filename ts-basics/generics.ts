import {Person} from './person';

class Student extends Person {
}

class Teacher extends Person {
}

class Citizen extends Person {
}

function PersonEcho<T extends Person> (person : T) : T {
    return person;
}

let p1 = new Person("John", "Player");
let p2 = new Student("James", "Brown");
let p3 = new Teacher("Tim", "Colllins");

var x = PersonEcho(p1);
var y = PersonEcho(p2);
var z = PersonEcho(p3);

console.log(x);
console.log(y);
console.log(z);


function MyEcho<T> (arg : T) : T {
    return arg;
}

var myValues:any [] = []; 

myValues.push(9);
myValues.push(true);
myValues.push("Hello");
myValues.push(null);
myValues.push(undefined);

let str:string = ``;
let retVal:any;

for (let val of myValues){
    retVal = MyEcho(val); 
    str += `${retVal}:${typeof(retVal)}     `;
}

console.log(`Returned [Values:Types] >>>         
${str}`); 