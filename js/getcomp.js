var comp = document.querySelectorAll('.component');
Array.prototype.forEach.call(comp, function(elements, index) {
   alert(elements.classList.item(1));
});