var comp = document.querySelectorAll('.component');
var body = document.body;

var $div = document.createElement('div');
var cssText = 'position:absolute;padding:4px;background:rgba(0, 0, 0, 0.75);color:#fff;z-index:1001;';

Array.prototype.forEach.call(comp, function (element, index) {
var div = $div.cloneNode();
var rect = element.getBoundingClientRect();
if (rect.width) {
console.log(element.classList.item(1) + ': ' + element.offsetTop);
div.style.cssText = cssText + 'top:' + (rect.top - 48 + 'px') + ';left:' + (rect.left + 'px');
div.textContent = element.classList.item(1);
body.appendChild(div);
// alert(element.classList.item(1));
}
});
