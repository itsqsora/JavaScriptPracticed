function myFunction() {
    var elem = document.getElementById("chooseMe");
    var dateshort = elem.options[elem.selectedIndex].value;
    var dayName;
    console.log(dateshort);

    switch (dateshort) {
        case "U":
            dayName = "Sunday";
            break;
        case "M":
            dayName = "Mondaday";
            break;
        case "T":
            dayName = "Tuesday";
            break;
        case "W":
            dayName = "Wednesday";
            break;
        case "R":
            dayName = "Thursday";
            break;
        case "F":
            dayName = "Friday";
            break;
        case "S":
            dayName = "Saturday";
            break;
        default:
            dayName = "Out of Range";
    } // end of switch

    document.getElementById("feedback").innerHTML = dayName;
} // end of function