/*
    Script by Narikso
    At end of project push project to Git portfolio as part of the learning project.

    Requirements
    1 - Get birtday of the user
    2 - Get week user was born in the year
    3 - Get Gender of the User and use the Akram naming based on user gender.
*/
// calculate age from the inserted Date Month and Year by User
// Getting var from user input and creating Var for script
var daysInput = document.getElementById("date");
var monthInput = document.getElementById("month");
var yearInput = document.getElementById("year");
//adding weekinput
var weekinput = document.getElementById("week").value;

// week days array
var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//AKRAM names array
var akramMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var akramFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

//Var Gender get element
var yourGender = document.getElementById("gender");
// var to use to display AGE
var showAge = document.getElementById("displayAge");
//var to display akram name
var weekName = document.getElementById("displayAkram")
//var to display akram week
var akramWeek = document.getElementById("displayWeek");


// button varialbe.

var btn = document.getElementById('buttonCalc');
//Form 
const akramForm = document.forms['akramForm']


// eventlistener if input is blank to display meso for user to alert the user.
btn.addEventListener("click", (days, month, year) => {

    days = daysInput.value;
    month = monthInput.value;
    year = yearInput.value;
    //adding gender input
    gender = yourGender.value;

    // Event listener for button, functions are withing the event listener.
    // using the OR logical expression ||
    if (daysInput.value == "" || monthInput.value == "" || yearInput.value == "") {
        return alert("Please enter your date of birth properly to calculate your age")
    }

    // var for current date as per w3 student learning directive link https://www.w3schools.com/js/js_dates.asp
    var today = new Date();
    //converting  laptop machine to readable date.
    var newtoday = today.toDateString();



    var d = today.getDate();
    var m = today.getMonth() + 1;
    var y = today.getFullYear();

    var maxDays = 0;
    var monthNum = 1;




    console.log(newtoday);

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

    //gender akram logic

    else { // december
        maxDays = 31;
        monthNum = 12;
    }

    // Function containing the gender input.
    function akramNames(gender, weekinput) {
        var ageYears = y - year;

        if (m <= month) {
            m = m + 12;
        }
        var ageMonths = m - month;
        var ageDays = (maxDays - d) + parseInt(days);
        // CALCULATE WEEK BOR from the AgedaysMonts.


        console.log(`Your age is ${ageYears} y , ${ageMonths} m and ${ageDays} d`);
        showAge.innerHTML = `Your age is ${ageYears} y , ${ageMonths} m and ${ageDays} d`;

    
    
        /*
/Day of the week (d) = ( ( (CC/4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD ) mod 7
where;
CC - is the century digits.For example 1989 has CC = 19
YY - is the Year digits(1989 has YY = 89)
MM - is the Month
DD - is the Day of the month
mod - is the modulus function ( % )
}
*/
        var years = year.toString();
        // get length
        console.log(years.length)
        // to get the individual first and last digits of the year
        var yu1 = years.charAt(years.length - 4);
        var yu2 = years.charAt(years.length - 3);
        var yu3 = years.charAt(years.length - 2);
        var yu4 = years.charAt(years.length - 1);
        var yearslength = yu1.concat(yu2)
        var yearslength2 = yu3.concat(yu4);
        // convert to INT
        var cc = parseInt(yearslength);
        var yy = parseInt(yearslength2);

        var dd = parseInt(ageDays);
        var mm = parseInt(ageMonths);
        console.log(yu1);
        console.log(yu2);
        console.log(yu3);
        console.log(yu4);

        // formula and variable to get the day of week
        var DayOfWeek = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
        var weekNumber = Math.round(DayOfWeek);
        console.log(DayOfWeek);

        document.getElementById("displayWeek").innerHTML = weekNumber;
        console.log(`Your age is ${ageYears} y , ${ageMonths} m and ${ageDays} d`);
        showAge.innerHTML = `Your age is ${ageYears} y , ${ageMonths} m and ${ageDays} d`;

        // Female Akram
        if (gender == 'female' && weekinput == 'sunday') {

            displayAkram.innerHTML = "Akram name: Akosua";

        }
        else if (gender == 'female' && weekinput == 'monday') {
            displayAkram.innerHTML = "Akram name: Adwoa";

        }
        else if (gender == 'female' && weekinput == 'tuesday') {
            displayAkram.innerHTML = "Akram name: Abenaa";

        }
        else if (gender == 'female' && weekinput == 'wednesday') {
            displayAkram.innerHTML = "Akram name: Akua";

        }
        else if (gender == 'female' && weekinput == 'thursday') {
            displayAkram.innerHTML = "Akram name: Yaa";

        }
        else if (gender == 'female' && weekinput == 'friday') {
            displayAkram.innerHTML = "Akram name: Afua";

        }
        else if (gender == 'female' && weekinput == 'monday') {
            displayAkram.innerHTML = "Akram name: Ama";

        }

        // Akram name for Male gender
        else if (gender == 'male' && weekinput == 'sunday') {
            displayAkram.innerHTML = "Akram name: Kwasi";

        }
        else if (gender == 'male' && weekinput == 'monday') {
            displayAkram.innerHTML = "Akram name: Kwadwo";

        }
        else if (gender == 'male' && weekinput == 'tuesday') {
            displayAkram.innerHTML = "Akram name: Kwabena";

        }
        else if (gender == 'male' && weekinput == 'wednesday') {
            displayAkram.innerHTML = "Akram name: Kwaku";

        }
        else if (gender == 'male' && weekinput == 'friday') {
            displayAkram.innerHTML = "Akram name: Kofi";

        }
        else if (gender == 'male' && weekinput == 'saturday') {
            displayAkram.innerHTML = "Akram name: Kwame";

        }
        // else for male and thursday only
        else {
            displayAkram.innerHTML = "Akram name: Yaw";

        }


    }





    akramNames(gender, weekinput);

    // Working on the Akama gender names
})