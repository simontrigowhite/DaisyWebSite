// Code for the quiz - the functionality. Written in JavaScript language.


$(document).ready(runPage);


function runPage() {

    setupQuestion($("#trueButton"), $("#falseButton"), $("#submitButton"), $("#question2"), "answeredQ1")
    setupQuestion($("#trueButto"), $("#falseButto"), $("#submitButto"), $("#question3"), "answeredQ2")

    addClick($("#startAgain"), startAgainClick);
}


function setupQuestion(trueButton, falseButton, submitButton, nextQuestion, cookieName) {

    if (getCookie(cookieName)) {

        if (getCookie(cookieName) == "true")
            trueButton.addClass("selected");

        else if (getCookie(cookieName) == "false")
            falseButton.addClass("selected");

    }
    else {

        addClick(trueButton, trueClick);
        addClick(falseButton, falseClick);

        nextQuestion.hide();
    }

    function trueClick() {
    
        trueButton.addClass("selected");
        falseButton.removeClass("selected");

        addClick(submitButton, submitClick);
    }

    function falseClick() {

        trueButton.removeClass("selected");
        falseButton.addClass("selected");

        addClick(submitButton, submitClick);
    }

    function submitClick() {
            
        if (trueButton.hasClass("selected"))
            setCookie(cookieName, "true");

        else if (falseButton.hasClass("selected"))
            setCookie(cookieName, "false");

        removeClick(trueButton);
        removeClick(falseButton);
        removeClick(submitButton);

        nextQuestion.show("slow");
    }
}


function startAgainClick() {

    resetCookie("answeredQ1");
    resetCookie("answeredQ2");
            
    location.reload(false)
}
