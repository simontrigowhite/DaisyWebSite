// Code for the quiz

$(function() {

    var a = Cookies.get('simon');

    if (a)
        alert('yes');

    Cookies.set('simon', 'something');

    var b = Cookies.get('simon');

    if (b)
        alert('yes');

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

