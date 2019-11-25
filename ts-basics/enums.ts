enum DaysOfWeek {
    SUN, MON, TUE, THU, FRI, SAT
}

let day = Math.round(((Math.random())*100)) % 6;
console.log(day);

if (day === (DaysOfWeek.SUN || DaysOfWeek.SAT)) {
    console.log("Today is a Holiday!!!");
} else {
    console.log("Got to go to work!");
}