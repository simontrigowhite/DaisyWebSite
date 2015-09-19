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

        setupQuestion("#trueButton", "#falseButton", "#submitButton", "answeredQ1", "#question2")

        $("#question2").hide();

    }

    if (getCookie("answeredQ2")) {

        if (getCookie("answeredQ2") == "true")
            $("#trueButto").addClass("selected");

        else if (getCookie("answeredQ2") == "false")
            $("#falseButto").addClass("selected");

    }
    else {

        setupQuestion("#trueButto", "#falseButto", "#submitButto", "answeredQ2", "#question3")

        $("#question3").hide();

    }

    addClick($("#startAgain"), startAgainClick);



}



function setupQuestion(trueId, falseId, submitId, cookieName, nextQuestionId) {

    addClick($(trueId), trueClick);
    addClick($(falseId), falseClick);


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
