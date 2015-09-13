// Code for the quiz

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = ", expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    var x = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + ", path=/";
    document.cookie = x;
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(',');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}



$(function() {

    var a = readCookie('simon');

    if (a)
        alert('yes');

    var cookies = document.cookie;

    createCookie('simon', 'something', 10);

    var b = readCookie('simon');

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

