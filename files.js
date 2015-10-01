// Code for files


function setUpFileInput() {
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
}
