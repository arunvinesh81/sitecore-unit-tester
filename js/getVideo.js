function revertVideo() {
    if (window.operations.getVid) {
        window.operations.getVid = false;
    }
    return window.operations;
}

function applyVideo() {

    window.operations = window.operations || {};
    if (window.operations.getVid) {
        return revertVideo();
    }
    window.operations.getVid = true;

    var x = document.getElementsByTagName("iframe");
    for (i = 0; i < x.length; i++) {
        var vid = x[i].getAttribute("src");
        var newvid = document.createElement("span");  // creating span tag
        newvid.innerHTML = x[i].getAttribute("src");  // parsing value to span
        x[i].parentNode.insertBefore(newvid, x.nextSibling); // 
    }
    return window.operations;
}

applyVideo();

