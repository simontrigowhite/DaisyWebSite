// Code for the quiz - the functionality
// to do: make buttons side by side, false is green, true is purple, and click makes grey border

$(function() {

    hideBits();

    addClick($("#trueButton"), function() {

            $("#trueButton").css({"background-color":"grey"});
            $("#falseButton").css({"background-color":"white"});
        }
    );

    addClick($("#falseButton"), function() {

            $("#falseButton").css({"background-color":"grey"});
            $("#trueButton").css({"background-color":"white"});
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

            $("#falseButton").css({"background-color":"white"});
            $("#trueButton").css({"background-color":"white"});
            
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
