// Code for the quiz


$(function() {

    hideBits();

    addClick("#firstPicture", function() {

            setCookie("doneFirst","yes");
            $("#nextBit").show("slow");
        }
    );

    addClick("#nextPicture", function() {

            setCookie("doneNext","yes");
            $("#lastBit").show("slow");
        }
    );
    
    addClick("#lastPicture", function() {

            $("#goHome").show();
        }
    );

    addClick("#goHome", function() {

            $("#actualLastBit").show();
        }
    );

    addClick("#startAgain", function() {

            resetCookie("doneFirst");
            resetCookie("doneNext");
            hideBits();
        }
    );

});


function addClick(element, action) {
    $(element).click(action);
    $(element).css({"cursor":"hand"});
}


function hideBits() {
    if (!getCookie("doneFirst"))
        $("#nextBit").hide();

    if (!getCookie("doneNext"))
        $("#lastBit").hide();

    $("#goHome").hide();
    
    $("#actualLastBit").hide();
}
