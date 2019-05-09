//var c = document.querySelector(".card").classList.add("active");
//var d = document.querySelector(".card-collapse").classList.add("show");


var divs = document.querySelectorAll('.card');
for (var i = 0; i < divs.length; i++) {
    divs[i].classList.toggle('active');
}

var divs1 = document.querySelectorAll('.card-collapse');
for (var i = 0; i < divs.length; i++) {
    divs1[i].classList.toggle('show');
}