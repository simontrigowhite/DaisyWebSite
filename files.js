// Code for files

var reader;
var progress;


function setUpFileInput() {

    $("byte_range").hide();
    $("byte_content").hide();
    $("cancel_read").hide();
    $("progress_bar").hide();

    progress = document.querySelector('.percent');

    addClick($("cancel-read"), abortRead);
    
    if (!(window.File && window.FileReader && window.FileList && window.Blob))
        alert("The File APIs are not fully supported in this browser.");

    document.getElementById("files").addEventListener("change", handleFileSelectBrowse, false);

    var dropZone = document.getElementById("drop_zone");
    dropZone.addEventListener("drop", handleFileSelectDrop, false);
    dropZone.addEventListener("dragover", handleFileSelectDragOver, false);
}

function handleFileSelectBrowse(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    showFileSummary(evt.target.files);
}

function handleFileSelectDrop(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    showFileSummary(evt.dataTransfer.files);
}

function handleFileSelectDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "copy";
}


function showFileSummary(files) {
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push("<li><strong>", escape(f.name), "</strong> (", f.type || "n/a", ") - ",
            f.size, " bytes, last modified: ",
            f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : "n/a",
            "</li>");
    }
    document.getElementById("list").innerHTML = "<ul>" + output.join("") + "</ul>";

    var file = files[0];
    
    var start = 0;
    var stop = file.size - 1;
    
    $("byte_range").show();
    $("byte_content").show();
    $("cancel_read").show();
    $("progress_bar").show();

    // Reset progress indicator on new file selection.
    progress.style.width = '0%';
    progress.textContent = '0%';

    reader = new FileReader();
    reader.onerror = errorHandler;
    reader.onprogress = updateProgress;
    reader.onabort = function(e) {
        alert('File read cancelled');
    };
    reader.onloadstart = function(e) {
        document.getElementById('progress_bar').className = 'loading';
    };
    reader.onload = function(e) {
        // Ensure that the progress bar displays 100% at the end.
        progress.style.width = '100%';
        progress.textContent = '100%';
        setTimeout("document.getElementById('progress_bar').className='';", 2000);
    };

    // If we use onloadend, we need to check the readyState.
    reader.onloadend = function (evt) {
        if (evt.target.readyState == FileReader.DONE) { // DONE == 2
            document.getElementById('byte_content').textContent = evt.target.result;
            document.getElementById('byte_range').textContent =
                ['Read bytes: ', start + 1, ' - ', stop + 1,
                 ' of ', file.size, ' byte file'].join('');
        }
    };

    var blob = file.slice(start, stop + 1);
    reader.readAsBinaryString(blob);
}

function abortRead() {
    reader.abort();
}

function errorHandler(evt) {
    switch (evt.target.error.code) {
        case evt.target.error.NOT_FOUND_ERR:
            alert('File Not Found!');
            break;
        case evt.target.error.NOT_READABLE_ERR:
            alert('File is not readable');
            break;
        case evt.target.error.ABORT_ERR:
            break; // noop
        default:
            alert('An error occurred reading this file.');
    };
}

function updateProgress(evt) {
    // evt is an ProgressEvent.
    if (evt.lengthComputable) {
        var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
        // Increase the progress bar length.
        if (percentLoaded < 100) {
            progress.style.width = percentLoaded + '%';
            progress.textContent = percentLoaded + '%';
        }
    }
}
