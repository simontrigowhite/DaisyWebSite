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
    
    addClick($("#trueButto"), trueClic);
    addClick($("#falseButto"), falseClic);

    if (getCookie("answeredQ2")) {

        if (getCookie("answeredQ2") == "true")
            $("#trueButto").addClass("selected");

        else if (getCookie("answeredQ2") == "false")
            $("#falseButto").addClass("selected");

    }
}


function trueClick() {
    
    $("#trueButton").addClass("selected");
    $("#falseButton").removeClass("selected");

    addClick($("#submitButton"), submitClick);
}

function trueClic() {
    
    $("#trueButto").addClass("selected");
    $("#falseButto").removeClass("selected");

    addClick($("#submitButto"), submitClic);
}

function falseClick() {

    $("#trueButton").removeClass("selected");
    $("#falseButton").addClass("selected");

    addClick($("#submitButton"), submitClick);
}

function falseClic() {

    $("#trueButto").removeClass("selected");
    $("#falseButto").addClass("selected");

    addClick($("#submitButto"), submitClic);
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

function submitClic() {
            
    if ($("#trueButto").hasClass("selected"))
        setCookie("answeredQ2", "true");

    else if ($("#falseButto").hasClass("selected"))
        setCookie("answeredQ2", "false");

    removeClick($("#trueButto"));
    removeClick($("#falseButto"));
    removeClick($("#submitButto"));

    $("#question3").show("slow");
}

function startAgainClick() {

    resetCookie("answeredQ1");
    resetCookie("doneFirst");
    resetCookie("doneNext");
            
    location.reload(false)
}
