// Code for the quiz - the functionality. Written in JavaScript language.


$(document).ready(runPage);


function runPage() {

    setupQuestion("#trueButton", "#falseButton", "#submitButton", "answeredQ1", "#question2")
    setupQuestion("#trueButto", "#falseButto", "#submitButto", "answeredQ2", "#question3")

    addClick($("#startAgain"), startAgainClick);
}


function setupQuestion(trueId, falseId, submitId, cookieName, nextQuestionId) {

    if (getCookie(cookieName)) {

        if (getCookie(cookieName) == "true")
            $(trueId).addClass("selected");

        else if (getCookie(cookieName) == "false")
            $(falseId).addClass("selected");

    }
    else {

        addClick($(trueId), trueClick);
        addClick($(falseId), falseClick);

        $(nextQuestionId).hide();
    }

    function trueClick() {
    
        $(trueId).addClass("selected");
        $(falseId).removeClass("selected");

        addClick($(submitId), submitClick);
    }

    function falseClick() {

        $(trueId).removeClass("selected");
        $(falseId).addClass("selected");

        addClick($(submitId), submitClick);
    }

    function submitClick() {
            
        if ($(trueId).hasClass("selected"))
            setCookie(cookieName, "true");

        else if ($(falseId).hasClass("selected"))
            setCookie(cookieName, "false");

        removeClick($(trueId));
        removeClick($(falseId));
        removeClick($(submitId));

        $(nextQuestionId).show("slow");
    }
}


function startAgainClick() {

    resetCookie("answeredQ1");
    resetCookie("answeredQ2");
            
    location.reload(false)
}
