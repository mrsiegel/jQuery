$('form').submit(function(event){
    var validInput = true;
    var name = $("#fullname").val()
    var address = $("#streetaddr").val()
    console.log("Here");
    console.log(name);
    console.log(address)
    if ((name.length) == 0){
        $("#nameerrormsg").css("display", "block"); 
        validInput = false;
        event.preventDefault()
        console.log(validInput);
    }
    else {
        $("#nameerrormsg").css("display", "none");
        console.log(validInput);
    }

    if ((address.length) == 0){
        event.preventDefault()
        $("#addrerrormsg").css("display", "block"); 
        validInput = false;
        console.log(validInput);
    }
    else {
        $("#addrerrormsg").css("display", "none"); 
        console.log(validInput);
    }

    return validInput;
});