function removeItalics(para) {
    for (elt of para) {
        elt.style["color"] = "";
        elt.style["backgroundColor"] = "";
    }
}

function revertItalics() {
    if (window.operations.getItalics) {
        let para = document.getElementsByTagName("EM");
        removeItalics(para);
        window.operations.getItalics = false;
         
    }     
    return window.operations;
}

function applyItalics() {
    window.operations = window.operations || {};
    if (window.operations.getItalics) {
         return revertItalics();          
    }
    window.operations.getItalics = true;
    var it = document.getElementsByTagName("EM");
    for (i = 0; i < it.length; i++) {
        it[i].style.color = "white";
        it[i].style.backgroundColor = "blue";
    }
    return window.operations;
}


applyItalics();
