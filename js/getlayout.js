function removeBorder(para) {
    for (elt of para) {
        elt.style["border"] = "none";
    }
}

function revertOutline() {
    if (window.operations.getLayout) {
        let para = document.getElementsByClassName("col-12");
        removeBorder(para);
        window.operations.getLayout = false;
    }
    return window.operations;
}


function applyOutline() {
    window.operations = window.operations || {};
    if (window.operations.getLayout) {
        return revertOutline();
    }
    window.operations.getLayout = true;
    let para = document.getElementsByClassName("col-12");
    removeBorder(para);
    for (elt of para) {
        elt.style["border"] = "solid 2px #3380FF";
    }

    return window.operations;
}

applyOutline();