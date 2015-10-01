// Code for the quiz - the functionality. Written in JavaScript language.


function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
            f.size, ' bytes, last modified: ',
            f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
            '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}



$(document).ready(runPage);


function runPage() {

    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }

    document.getElementById('files').addEventListener('change', handleFileSelect, false);


    setupQuestion({
        trueButton: $("#trueButton"),
        falseButton: $("#falseButton"),
        submitButton: $("#submitButton"),
        
        nextBit: $("#question2"),
        cookieName: "answeredQ1"
    } );

    setupQuestion( {
        trueButton: $("#trueButto"),
        falseButton: $("#falseButto"),
        submitButton: $("#submitButto"),
        
        nextBit: $("#question3"),
        cookieName: "answeredQ2"
    } );

    addClick($("#startAgain"), startAgainClick);
}


function setupQuestion(elements) {

    if (getCookie(elements.cookieName)) {

        selectTrueOrFalse();

        elements.submitButton.hide();
    }
    else {

        addClick(elements.trueButton, trueClick);
        addClick(elements.falseButton, falseClick);

        elements.nextBit.hide();
    }

    function trueClick() {

        elements.trueButton.addClass("selected");
        elements.falseButton.removeClass("selected");

        addClick(elements.submitButton, submitClick);
    }

    function falseClick() {

        elements.trueButton.removeClass("selected");
        elements.falseButton.addClass("selected");

        addClick(elements.submitButton, submitClick);
    }

    function submitClick() {

        rememberTrueOrFalse();
        
        removeClick(elements.trueButton);
        removeClick(elements.falseButton);
        removeClick(elements.submitButton);

        elements.submitButton.hide();

        elements.nextBit.show("slow");
    }
    
    function selectTrueOrFalse() {
        
        if (getCookie(elements.cookieName) == "true")
            elements.trueButton.addClass("selected");

        else if (getCookie(elements.cookieName) == "false")
            elements.falseButton.addClass("selected");
    }

    function rememberTrueOrFalse() {
        
        if (elements.trueButton.hasClass("selected"))
            setCookie(elements.cookieName, "true");

        else if (elements.falseButton.hasClass("selected"))
            setCookie(elements.cookieName, "false");
    }
}


function startAgainClick() {

    resetCookie("answeredQ1");
    resetCookie("answeredQ2");

    location.reload(false);
}
