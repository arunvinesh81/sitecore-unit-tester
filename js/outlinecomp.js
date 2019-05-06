let comp = document.getElementsByClassName("component");
if (window.layoutApplied) {
    window.layoutApplied = false;
    let para = document.getElementsByClassName("col-12");
    for (elt of para) {
        elt.style["border"] = "none";
    } 
}
for (elt of comp) {
    elt.style["border"] = "solid 2px #000";
}