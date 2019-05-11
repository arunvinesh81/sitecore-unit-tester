function removeComponentBorder(comp) {
    for (elt of comp) {
        elt.style["border"] = "none";
    }
}

function revertComponentBorder() {
    if (window.operations.outlinecomp) {
        removeComponentBorder(document.getElementsByClassName("component"));
        window.operations.outlinecomp = false;
    }
    return window.operations;

}


function applyOutlineComponent() {
    window.operations = window.operations || {};
    if (window.operations.outlinecomp) {
        return revertComponentBorder();
    }
    window.operations.outlinecomp = true;
    let comp = document.getElementsByClassName("component");
    removeComponentBorder(comp);
    for (elt of comp) {
        elt.style["border"] = "solid 2px #000";
    }

    return window.operations;
}

applyOutlineComponent();