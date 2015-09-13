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
    $("#firstPicture").css({"cursor":"hand"});

    $("#nextPicture").click( 
        function() {

            $("#lastBit").show("slow");
            setCookie("doneNext","yes");
        }
    );
    $("#nextPicture").css({"cursor":"hand"});
    
    $("#lastPicture").click( 
        function() {

            $("#goHome").show();
        }
    );
    $("#lastPicture").css({"cursor":"hand"});

    $("#goHome").click( 
        function() {

            $("#actualLastBit").show();
        }
    );
    $("#goHome").css({"cursor":"hand"});

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
    $("#startAgain").css({"cursor":"hand"});

});

