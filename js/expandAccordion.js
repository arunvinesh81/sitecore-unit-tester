//var c = document.querySelector(".card").classList.add("active");
//var d = document.querySelector(".card-collapse").classList.add("show");

function revertAccordion() {
    if (window.operations.acdExpand) {
        toggleAccordion();
        window.operations.acdExpand = false;
    }
    return window.operations;
}

function toggleAccordion() {
    var divs = document.querySelectorAll('.card');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.toggle('active');
    }

    var divs1 = document.querySelectorAll('.card-collapse');
    for (var i = 0; i < divs.length; i++) {
        divs1[i].classList.toggle('show');
    }
}


function expandAccordion() {
    window.operations = window.operations || {};
    if (window.operations.acdExpand) {
        return revertAccordion();
    }
    window.operations.acdExpand = true;
    toggleAccordion();
    return window.operations;
}

expandAccordion();
