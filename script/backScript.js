function addName() {
    var theform = document.forms[0];
    
    var name = theform.elements[0].value;
    
    if(name == "") {
        alert("Please fill out the entire form");
    } else {
        var currentBackers = document.getElementById("backers").innerHTML;
        document.getElementById("backers").innerHTML = currentBackers + "<br>" + name;
        theform.elements[0].value = "";
    }
}