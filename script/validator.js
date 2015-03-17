function validate() {
    var theform = document.forms[0];
    
    var fname = theform.elements[0].value;
    var lname = theform.elements[1].value;
    var email = theform.elements[2].value;
    var message = theform.elements[3].value;
    
    if(fname == "" || lname == "" || email == "" || message == "") {
        alert("Please fill out the entire form");
    } else {
        console.log(fname);
        console.log(lname);
        console.log(email);
        console.log(message);
        theform.elements[0].value = "";
        theform.elements[1].value = "";
        theform.elements[2].value = "";
        theform.elements[3].value = "";
        alert("Your message has been sent! (See console)");
    }
}


        