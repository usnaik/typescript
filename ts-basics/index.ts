import {Person} from './person';
// import * as _ from './node_modules/lodash/lodash.js';
import * as _ from 'lodash';

let p1 = new Person();
let p2 = new Person("Upendra","Naik");
let p3 = new Person("Archana");


p1.setFirstName("Rohan");
p1.setLastName("Naik");

console.log(p1);
console.log(p2);
console.log(p3);

var array = [1,2,3,4,5];
_.reverse(array);

console.log(array);

