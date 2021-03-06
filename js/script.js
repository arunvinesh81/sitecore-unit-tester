/* tab  */

$(document).ready(function () {
  $('ul.tabs').tabs();
});
$(document).ready(function () {
  $('ul.tabs').tabs;
});


var tab_title = '';
function display_h1(result) {
  console.log(result);
  if (result && result.length) {
    var operations = result[0] || {};
    var keys = Object.keys(operations);
    keys.forEach((operation) => {
      var el = document.querySelector('#' + operation);
      if (operations[operation]) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
  // var result = '';
  // [].forEach.call(results, function (img) {
  //   if (img) {
  //     result += img.src + ': ' + img.alt + '\n';
  //   }
  // });
  // document.querySelector("#id1").innerHTML = result;
  // h1 = results;
  // document.querySelector("#id1").innerHTML = "<p>tab title: " + tab_title + "</p><p>dom h1: " + h1 + "</p>";
}
var btn = document.getElementById('getImage');
btn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/inject.js'
    }, display_h1);
  });

});

var btn1 = document.getElementById('getLayout');
btn1.addEventListener('click', function () {
  window.layoutApplied = true;
  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/getlayout.js'
    }, display_h1);
  });

});

var btn2 = document.getElementById('outlinecomp');
btn2.addEventListener('click', function () {
  window.componentApplied = true;
  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/outlinecomp.js'
    }, display_h1);
  });

});

var btn3 = document.getElementById('getcomp');
btn3.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/getcomp.js'
    }, display_h1);
  });

});


var btn4 = document.getElementById('getmeta');
btn4.addEventListener('click', function () {

  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/metainfo.js'
    }, display_h1);
  });

});

var btn6 = document.getElementById('acdExpand');
btn6.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/expandAccordion.js'
    }, display_h1);
  });

});

var btn7 = document.getElementById('getVid');
btn7.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/getVideo.js'
    }, display_h1);
  });

});

var btn8 = document.getElementById('getLink');
btn8.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/getLink.js'
    }, display_h1);
  });

});

var btn8 = document.getElementById('getvariant');
btn8.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/getvariant.js'
    }, display_h1);
  });

});

var btn9 = document.getElementById('getBold');
btn9.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/getbold.js'
    }, display_h1);
  });

});

var btn10 = document.getElementById('getItalics');
btn10.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/getitalics.js'
    }, display_h1);
  });

});

var btn11 = document.getElementById('getUnderline');
btn11.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/getunderline.js'
    }, display_h1);
  });

});

var btn12 = document.getElementById('getSup');
btn12.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/getsup.js'
    }, display_h1);
  });

});

var btn13 = document.getElementById('getSymbols');
btn13.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/getsymbol.js'
    }, display_h1);
  });

});

chrome.tabs.query({ active: true }, function (tab) {
  chrome.tabs.executeScript(tab.id, {
    file: 'js/getOperations.js'
  }, display_h1);
})