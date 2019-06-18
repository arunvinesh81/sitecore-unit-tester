function removeBold(para) {
    for (elt of para) {
        elt.style["backgroundColor"] = "";
        elt.style["color"] = "";
    }
}

function revertBold() {
    if (window.operations.getBold) {
        let para = document.getElementsByTagName("STRONG");
        removeBold(para);
        window.operations.getBold = false;
         
    }     
    return window.operations;
}

function applyBold() {
    window.operations = window.operations || {};
    if (window.operations.getBold) {
         return revertBold();          
    }
    window.operations.getBold = true;
    var b = document.getElementsByTagName("STRONG");
    for (i = 0; i < b.length; i++) {
        b[i].style.backgroundColor = "red";
        b[i].style.color = "white";
    }
    return window.operations;
}


applyBold();
