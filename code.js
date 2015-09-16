// Code for the quiz - the functionality. Written in JavaScript language.


$(document).ready(runPage);


function runPage() {

    hideBits();

    selectButtons();

    if (!getCookie("answeredQ1")) {
    
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


function startAgainClick() {

    resetCookie("answeredQ1");
    resetCookie("doneFirst");
    resetCookie("doneNext");
            
    location.reload(false)
}


function submitClick() {
            
    removeClick($("#trueButton"));
    removeClick($("#falseButton"));
    removeClick($("#submitButton"));

    if ($("#trueButton").hasClass("selected"))
        setCookie("answeredQ1", "true");

    else if ($("#falseButton").hasClass("selected"))
        setCookie("answeredQ1", "false");

    $("#firstBit").show("slow");
}


function hideBits() {
    
    if (!getCookie("answeredQ1"))
        $("#firstBit").hide();

}


function selectButtons() {

    if (getCookie("answeredQ1") == "true")
        $("#trueButton").addClass("selected");

    else if (getCookie("answeredQ1") == "false")
        $("#falseButton").addClass("selected");
}
