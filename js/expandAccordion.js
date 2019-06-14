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
    var divs2 = document.querySelectorAll('.panel');
    for (var i = 0; i < divs2.length; i++) {
        divs2[i].classList.toggle('active');
    }

    var divs3 = document.querySelectorAll('.panel-collapse');
    for (var i = 0; i < divs3.length; i++) {
        divs3[i].classList.toggle('in');
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
