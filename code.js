// Code for the quiz - the functionality
// to do: make buttons side by side, false is green, true is purple, and click makes grey border

$(function() {

    hideBits();

    addClick($("#trueButton"), function() {

            $("#trueButton").addClass("selected");
            $("#falseButton").removeClass("selected");
        }
    );

    addClick($("#falseButton"), function() {

            $("#trueButton").removeClass("selected");
            $("#falseButton").addClass("selected");
        }
    );

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

            resetCookie("doneFirst");
            resetCookie("doneNext");
            hideBits();

            $("#falseButton").removeClass("selected");
            $("#trueButton").removeClass("selected");
            
        }
    );

});


function hideBits() {
    if (!getCookie("doneFirst"))
        $("#nextBit").hide();

    if (!getCookie("doneNext"))
        $("#lastBit").hide();

    $("#goHome").hide();
    
    $("#actualLastBit").hide();
}
