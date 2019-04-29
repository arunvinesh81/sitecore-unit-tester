/* tab  */

$(document).ready(function(){
  $('ul.tabs').tabs();
});
$(document).ready(function(){
  $('ul.tabs').tabs;
});

/* Component name
var comp = document.getElementById("componentName").click (function(){
var testimonials = document.querySelectorAll('.component');
Array.prototype.forEach.call(testimonials, function(elements, index) {
   alert(elements.classList.item(1));
});
}*/


/* Outline Layout

let para = document.getElementsByClassName("col-12");
for (elt of para) {
    elt.style["border"] = "solid 2px #3380FF";
} 

*/


/* Outline component 
let comp = document.getElementsByClassName("component");
for (elt of comp) {
    elt.style["border"] = "solid 2px #000";
}
*/

var tab_title = '';
function display_h1(results) {
  var result = '';
  [].forEach.call(results, function (img) {
    if (img) {
      result += img.src + ': ' + img.alt + '\n';
    }
  });
  document.querySelector("#id1").innerHTML = result;
  // h1 = results;
  // document.querySelector("#id1").innerHTML = "<p>tab title: " + tab_title + "</p><p>dom h1: " + h1 + "</p>";
}
var btn = document.getElementById('getImage');
btn.addEventListener('click', function () {
  chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/inject.js'
    }, display_h1);
  });

});
