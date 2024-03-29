var dayoflife = function(birth_date, some_day) {
    var millis_in_a_day = 24 * 60 * 60 * 1000;

    var birth_time = birth_date.getTime();
    var some_time = some_day.getTime();
    var diff_time = some_time - birth_time;
    return Math.round(diff_time/millis_in_a_day) + 1;
};

var test_birth_date = new Date(2011,9,27);
var test_some_date = new Date(2011,9,28);

var day_number = dayoflife(test_birth_date, test_some_date);
var success = (day_number == 2);
function changeBackground(color) {
   document.body.style.background = color;
}
(success === true) ? color="green" : color="red";
changeBackground(color);