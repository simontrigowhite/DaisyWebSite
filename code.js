// Code for the quiz

function createCookie(name, value, days) {
    localStorage.setItem(name, value);
}

function readCookie(name) {
    return localStorage.getItem(name);
}

function eraseCookie(name) {
    localStorage.removeItem(name);
}



$(function() {

    var a = readCookie('simon');

    if (a)
        alert('yes a');

    var cookies = document.cookie;

    createCookie('simon', 'something', 10);

    var b = readCookie('simon');

    if (b)
        alert('yes b');

    eraseCookie('simon');

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

