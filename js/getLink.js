function revertLink() {
    if (window.operations.getLink) {

        window.operations.getLink = false;
    }
    return window.operations;
}

function applyLink() {
    window.operations = window.operations || {};
    if (window.operations.getLink) {
        return revertLink();
    }
    window.operations.getLink = true;

    var urls = document.getElementsByTagName('a');

    for (url in urls) {
        console.log(urls[url].href);
    }


    return window.operations;
}

applyLink();