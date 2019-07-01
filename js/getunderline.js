function removeUnderline(para) {
    for (elt of para) {
        elt.style["color"] = "";
        elt.style["backgroundColor"] = "";
    }
}

function revertUnderline() {
    if (window.operations.getUnderline) {
        let para = document.getElementsByTagName("span");
        removeUnderline(para);
        window.operations.getUnderline = false;
         
    }     
    return window.operations;
}
    
function applyUnderline() {
    window.operations = window.operations || {};
    if (window.operations.getUnderline) {
         return revertUnderline();          
    }
    window.operations.getUnderline = true;
    var u = [],
    els = document.querySelectorAll('main span, .body-content span'),
    i = 0;
    for (i = 0; i < els.length; i++) {
        if (els[i].hasAttribute("style='text-decoration:underline'")) {
            u.push(els[i]);
        }
        els[i].style.color = "white";
        els[i].style.backgroundColor = "green";
    }
    
    return window.operations;
}


applyUnderline();
