var moment = require('moment');

var day1 = moment("2014-05-07T17:30:20+00:00");
var day2 = moment("2014-05-07T17:32:20+00:00");
console.log(moment(day1).isBefore(day2));
// console.log(day1);

// console.log(moment().format());
//
// var isSame13 = day1.isSame(day2);
// console.log('1 and 3 Same: ' +isSame13);
//
// var isBefore12 = day1.isBefore(day2);
// console.log('1 and 2 Before: ' +isBefore12);
//
// var isBefore13 = day1.isBefore(day3);
// console.log('1 and 3 Before: ' +isBefore13);

//IS SAME WORKS
// var isSame12 = day1.isSame(day2);
// console.log('1 and 2 Same: ' +isSame12);

//so if is before/after doesn't work,
