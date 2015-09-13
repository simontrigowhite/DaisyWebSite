// Code for the quiz


$(function() {

    var a = getCookie('simon');

    if (a)
        alert('yes a');

    setCookie('simon', 'something', 10);

    var b = getCookie('simon');

    if (b)
        alert('yes b');

    deleteCookie('simon');


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

