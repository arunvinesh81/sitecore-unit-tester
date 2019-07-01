function removeSup(para) {
    for (elt of para) {
        elt.style["backgroundColor"] = "";
        elt.style["color"] = "";
    }
}

function revertSup() {
    if (window.operations.getSup) {
        let para = document.getElementsByTagName("SUP");
        removeSup(para);
        window.operations.getSup = false;
         
    }     
    return window.operations;
}

function applySup() {
    window.operations = window.operations || {};
    if (window.operations.getSup) {
         return revertSup();          
    }
    window.operations.getSup = true;
    var b = document.getElementsByTagName("SUP");
    for (i = 0; i < b.length; i++) {
        b[i].style.backgroundColor = "#000";
        b[i].style.color = "white";
    }
    return window.operations;
}


applySup();
