// Code for the quiz

$(function() {

    $("#nextBit").hide();
    $("#lastBit").hide();
    $("#goHome").hide();
    $("#actualLastBit").hide();

    $("#firstPicture").click( 
        function() {

            $("#nextBit").show("slow");

        }
    );

    $("#nextPicture").click( 
        function() {

            $("#lastBit").show("slow");

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

});

