/*
    Script by Narikso
    At end of project push project to Git portfolio as part of the learning project.

    Requirements
    1 - Get birtday of the user
    2 - Get week user was born in the year
*/
// calculate age from the inserted Date Month and Year by User
// Getting var from user input and creating Var for script
let daysH = document.getElementById("date");
let monthH = document.getElementById("month");
let yearH = document.getElementById("year");

// var to use to display AGE
let showAge = document.getElementById("show-age");


// Const variable for the ID btn

const btn = document.getElementById("calc-btn");
// var for current date as per w3 student learning directive link https://www.w3schools.com/js/js_dates.asp
var today = new Date();

let d = today.getDate();
var m = today.getMonth() + 1;
var y = today.getFullYear();
let maxDays = 0;
let monthNum = 1;

// eventlistener if input is blank to display meso for user to alert the user.
btn.addEventListener("click", (days, month, year) => {

    days = daysH.value;
    month = monthH.value;
    year = yearH.value;

    if (daysH.value == "" || monthH.value == "" || yearH.value == "") {
        return alert("Please enter your date of birth properly to calculate your age")
    }

    // no else condition needed after this IF

    console.log(`Current Date : ${d} ${m} ${y}`);

    if (m == 1) { // january
        maxDays = 31;
        monthNum = 1;
    }
    else if (m == 2) { // february
        maxDays = 28;
        monthNum = 2;
    }
    else if (m == 3) { // march
        maxDays = 31;
        monthNum = 3;
    }
    else if (m == 4) { // april
        maxDays = 30;
        monthNum = 4;
    }
    else if (m == 5) { // may
        maxDays = 31;
        monthNum = 5;
    }
    else if (m == 6) { // june
        maxDays = 30;
        monthNum = 6;
    }
    else if (m == 7) { // july
        maxDays = 31;
        monthNum = 7;
    }
    else if (m == 8) { // august
        maxDays = 31;
        monthNum = 8;
    }
    else if (m == 9) { // september
        maxDays = 30;
        monthNum = 9;
    }
    else if (m == 10) { // october
        maxDays = 31;
        monthNum = 10;
    }
    else if (m == 11) { // november
        maxDays = 30;
        monthNum = 11;
    }

    // make december else or else if it's your choice

    else { // december
        maxDays = 31;
        monthNum = 12;
    }





    var ageYears = y - year;

    if (m <= month) {
        m = m + 12;
    }
    var ageMonths = m - month;
    var ageDays = (maxDays - d) + parseInt(days);


    // console.log(typeof days); // string why????

    console.log(`Your age is ${ageYears} y , ${ageMonths} m and ${ageDays} d`);
    showAge.innerHTML = `Your age is ${ageYears} y , ${ageMonths} m and ${ageDays} d`;
})