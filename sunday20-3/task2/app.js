'use strict';
let day=prompt("please Enter the number of day");
switch (day) {
    case '1':
        console.log("The Day is Sunday");
        document.getElementById("sun").innerHTML="The Day is Sunday";
        break;
    case '2':
        console.log("The Day is Monday");
        document.getElementById("mon").innerHTML="The Day is Monday";
        break;
    case '3':
        console.log("The Day is Tuesday");
        document.getElementById("tue").innerHTML="The Day is Tuesday";
        break;
    case '4':
        console.log("The Day is Wednesday");
        document.getElementById("wed").innerHTML="The Day is Wednesday";
        break;
    case '5':
        console.log("The Day is Thursday");
        document.getElementById("thu").innerHTML="The Day is Thursday";
        break;
    case '6':
        console.log("The Day is Friday");
        document.getElementById("fri").innerHTML="The Day is Friday";
        break;
    case '7':
        console.log("The Day is Saturday");
        document.getElementById("sat").innerHTML="The Day is Saturday";
        break;

    default:
        console.log("The Number must be between 1-7");
        document.getElementById("error").innerHTML="The Number must be between 1-7";
        break;
}