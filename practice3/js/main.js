/* var i = 5;
while (i<=100) {
    i = i + 2;
    console.log(i);
    i = i - 1;
    console.log(i);
} // end loop
 */

/* for (i=100; i>1; i=i-5) {
    console.log(i);
} */
function showstuff(el) {
var elementID = document.getElementById(el);
    for (i=0; i < elementID.length; i ++) {
        if (elementID[i].selected === true) {
            var x = elementID[i].text;
        
        } // end if
    } // end loop
    return x;
} // end function

function showMore() {
    var elementID = document.getElementsByName('bulb');
    // console.log(elementID.length);
    for (i=0; i < elementID.length; i++) {
/*         console.log(elementID[i].checked);
        console.log(elementID[i].value); */
        if (elementID[i].checked === true) {
            var mycheck = mycheck + elementID[i].value; 
        } // end if

    } // end loop
    return mycheck;
} // end of function

function evaluatePage() {
    var feedbackState = showstuff("state");
    var feedbackHome = showstuff("home");
    var feedbackLight = showMore();
    document.getElementById("output").innerHTML = feedbackState + "<br>" +feedbackHome + "<br>" + feedbackLight;
    
}
