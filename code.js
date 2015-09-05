// Code for the quiz

$(function() {

    $("#nextBit").hide();
    $("#lastBit").hide();
    $("#goHome").hide();
    

    $("#startClick").click( 
        function() {
            $("#nextBit").show("slow");
        }
    );

    $("#nextClick").click( 
        function() {
            $("#lastBit").show("slow");
        }
    );
    
    $("#lastClick").click( 
        function() {
            $("#goHome").show();
        }
    );

});

