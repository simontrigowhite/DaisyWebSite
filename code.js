// Code for the quiz - the functionality. Written in JavaScript language.

$(function() {

    hideBits();

    selectButtons();

    if (!getCookie("answeredQ1")) {
    
        addClick($("#trueButton"), function() {
    
                $("#trueButton").addClass("selected");
                $("#falseButton").removeClass("selected");

                addClick($("#submitButton"), submit);
            }
        );

        addClick($("#falseButton"), function() {

                $("#trueButton").removeClass("selected");
                $("#falseButton").addClass("selected");

                addClick($("#submitButton"), submit);
            }
        );
    }

    addClick($("#firstPicture"), function() {

            setCookie("doneFirst","yes");
            $("#nextBit").show("slow");
        }
    );

    addClick($("#nextPicture"), function() {

            setCookie("doneNext","yes");
            $("#lastBit").show("slow");
        }
    );
    
    addClick($("#lastPicture"), function() {

            $("#goHome").show();
        }
    );

    addClick($("#goHome"), function() {

            $("#actualLastBit").show();
        }
    );

    addClick($("#startAgain"), function() {

            resetCookie("answeredQ1");
            resetCookie("doneFirst");
            resetCookie("doneNext");
            
            location.reload(false);
        }
    );

});


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
