// Code for the quiz - the functionality


$(function() {

    hideBits();

    addClick($("#true"), function() {

         $("#true").css({"background-color":"grey"});
         $("#false").css({"background-color":"white"});
        }
    );

    addClick($("#false"), function() {

         $("#false").css({"background-color":"grey"});
         $("#true").css({"background-color":"white"});
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

         $("#false").css({"background-color":"white"});
         $("#true").css({"background-color":"white"});
            
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
