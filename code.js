// Code for the quiz - the functionality. Written in JavaScript language.


$(document).ready(runPage);


function runPage() {

    if (getCookie("answeredQ1")) {

        if (getCookie("answeredQ1") == "true")
            $("#trueButton").addClass("selected");

        else if (getCookie("answeredQ1") == "false")
            $("#falseButton").addClass("selected");

    }
    else {

        $("#question2").hide();

        addClick($("#trueButton"), trueClick);
        addClick($("#falseButton"), falseClick);
    }

    addClick($("#startAgain"), startAgainClick);
}


function trueClick() {
    
    $("#trueButton").addClass("selected");
    $("#falseButton").removeClass("selected");

    addClick($("#submitButton"), submitClick);
}


function falseClick() {

    $("#trueButton").removeClass("selected");
    $("#falseButton").addClass("selected");

    addClick($("#submitButton"), submitClick);
}


function submitClick() {
            
    if ($("#trueButton").hasClass("selected"))
        setCookie("answeredQ1", "true");

    else if ($("#falseButton").hasClass("selected"))
        setCookie("answeredQ1", "false");

    removeClick($("#trueButton"));
    removeClick($("#falseButton"));
    removeClick($("#submitButton"));

    $("#question2").show("slow");
}


function startAgainClick() {

    resetCookie("answeredQ1");
    resetCookie("doneFirst");
    resetCookie("doneNext");
            
    location.reload(false)
}
