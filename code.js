// Code for the quiz - the functionality. Written in JavaScript language.


$(document).ready(runPage);


function runPage() {

    hideBits();

    selectButtons();

    if (!getCookie("answeredQ1")) {
    
        addClick($("#trueButton"), trueClick);
        addClick($("#falseButton"), falseClick);
    }

    addClick($("#firstPicture"), firstPictureClick);
    addClick($("#nextPicture"), nextPictureClick);
    addClick($("#lastPicture"), lastPictureClick);
    addClick($("#goHome"), goHomeClick);

    addClick($("#startAgain"), startAgainClick);
}


function trueClick() {
    
    $("#trueButton").addClass("selected");
    $("#falseButton").removeClass("selected");

    addClick($("#submitButton"), submit);
}


function falseClick() {

    $("#trueButton").removeClass("selected");
    $("#falseButton").addClass("selected");

    addClick($("#submitButton"), submit);
}


function firstPictureClick() {

    setCookie("doneFirst","yes");
    $("#nextBit").show("slow");
}


function nextPictureClick() {

    setCookie("doneNext","yes");
    $("#lastBit").show("slow");
}


function lastPictureClick() {

    $("#goHome").show();
}


function goHomeClick() {

    $("#actualLastBit").show();
}


function startAgainClick() {

    resetCookie("answeredQ1");
    resetCookie("doneFirst");
    resetCookie("doneNext");
            
    location.reload(false)
}


function hideBits() {
    
    if (!getCookie("answeredQ1"))
        $("#firstBit").hide();

    if (getCookie("doneFirst") != "yes")
        $("#nextBit").hide();

    if (getCookie("doneNext") != "yes")
        $("#lastBit").hide();

    $("#goHome").hide();
    
    $("#actualLastBit").hide();
}


function selectButtons() {

    if (getCookie("answeredQ1") == "true")
        $("#trueButton").addClass("selected");

    else if (getCookie("answeredQ1") == "false")
        $("#falseButton").addClass("selected");
}


function submit() {
            
    removeClick($("#trueButton"));
    removeClick($("#falseButton"));
    removeClick($("#submitButton"));

    if ($("#trueButton").hasClass("selected"))
        setCookie("answeredQ1", "true");

    else if ($("#falseButton").hasClass("selected"))
        setCookie("answeredQ1", "false");

    $("#firstBit").show("slow");
}
