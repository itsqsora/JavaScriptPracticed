function floor(diameter) {
 
    var radius = diameter/2;
    var floorarea = Math.PI * (radius * radius);
    return (floorarea);
} //end of function

function walls(diameter, height) {
    var radius = diameter/2;
    var circumference = 2 * Math.PI * radius; 
    var wallarea = circumference * height;
    return (wallarea);  
} //end of function

function materialsNeeded() {
    var d = document.getElementById("across").value;
    var h = document.getElementById("height").value;

    var carpetNeeded = Math.ceil(floor(d));
    var paintNeeded = Math.ceil(walls(d,h));
    
    console.log("Carpet Needed Is: "+carpetNeeded+" sqft");
    console.log("Painted Needed Is: "+paintNeeded+" sqft");
} //end of function
