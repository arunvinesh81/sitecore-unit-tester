let para = document.getElementsByClassName("col-12");
alert(window.componentApplied);
if (window.componentApplied) {
    let comp = document.getElementsByClassName("component");
    for (elt of comp) {
        elt.style["border"] = "none";
    }
}
for (elt of para) {
    elt.style["border"] = "solid 2px #3380FF";
} 