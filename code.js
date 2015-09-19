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

        addClick($("#trueButton"), trueClick("#trueButton", "#falseButton", "#submitButton", "answeredQ1", "#question2"));
        addClick($("#falseButton"), falseClick("#trueButton", "#falseButton", "#submitButton", "answeredQ1", "#question2"));
    }

    if (getCookie("answeredQ2")) {

        if (getCookie("answeredQ2") == "true")
            $("#trueButto2").addClass("selected");

        else if (getCookie("answeredQ2") == "false")
            $("#falseButto").addClass("selected");

    }
    else {

        $("#question3").hide();

        addClick($("#trueButto"), trueClick("#trueButto", "#falseButto", "#submitButto", "answeredQ2", "#question3"));
        addClick($("#falseButto"), falseClick("#trueButto", "#falseButto", "#submitButto", "answeredQ2", "#question3"));
    }

    addClick($("#startAgain"), startAgainClick);
}


function trueClick(trueId, falseId, submitId, cookieName, nextQuestionId) {
    
    $(trueId).addClass("selected");
    $(falseId).removeClass("selected");

    addClick($(submitId), submitClick(trueId, falseId, submitId, cookieName, nextQuestionId));
}

function falseClick(trueId, falseId, submitId, cookieName, nextQuestionId) {

    $(trueId).removeClass("selected");
    $(falseId).addClass("selected");

    addClick($(submitId), submitClick(trueId, falseId, submitId, cookieName, nextQuestionId));
}

function submitClick(trueId, falseId, submitId, cookieName, nextQuestionId) {
            
    if ($(trueId).hasClass("selected"))
        setCookie(cookieName, "true");

    else if ($(falseId).hasClass("selected"))
        setCookie(cookieName, "false");

    removeClick($(trueId));
    removeClick($(falseId));
    removeClick($(submitId));

    $(nextQuestionId).show("slow");
}

function startAgainClick() {

    resetCookie("answeredQ1");
    resetCookie("answeredQ2");
            
    location.reload(false)
}
