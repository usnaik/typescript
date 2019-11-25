"use strict";
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUN"] = 0] = "SUN";
    DaysOfWeek[DaysOfWeek["MON"] = 1] = "MON";
    DaysOfWeek[DaysOfWeek["TUE"] = 2] = "TUE";
    DaysOfWeek[DaysOfWeek["THU"] = 3] = "THU";
    DaysOfWeek[DaysOfWeek["FRI"] = 4] = "FRI";
    DaysOfWeek[DaysOfWeek["SAT"] = 5] = "SAT";
})(DaysOfWeek || (DaysOfWeek = {}));
var day = Math.round(((Math.random()) * 100)) % 6;
console.log(day);
if (day === (DaysOfWeek.SUN || DaysOfWeek.SAT)) {
    console.log("Today is a Holiday!!!");
}
else {
    console.log("Got to go to work!");
}
