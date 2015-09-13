// Code for the quiz


$(function() {

    if (!getCookie("doneFirst"))
        $("#nextBit").hide();

    if (!getCookie("doneNext"))
        $("#lastBit").hide();

    $("#goHome").hide();
    
    $("#actualLastBit").hide();


    $("#firstPicture").click( 
        function() {

            $("#nextBit").show("slow");
            setCookie("doneFirst","yes");
        }
    );

    $("#nextPicture").click( 
        function() {

            $("#lastBit").show("slow");
            setCookie("doneNext","yes");
        }
    );
    
    $("#lastPicture").click( 
        function() {

            $("#goHome").show();
        }
    );

    $("#goHome").click( 
        function() {

            $("#actualLastBit").show();
        }
    );

    $("#startAgain").click(
        function() {

            resetCookie("doneFirst");
            resetCookie("doneNext");

    if (!getCookie("doneFirst"))
        $("#nextBit").hide();

    if (!getCookie("doneNext"))
        $("#lastBit").hide();

    $("#goHome").hide();
    
    $("#actualLastBit").hide();
        }
    );

});

