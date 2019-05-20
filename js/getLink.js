 /* for (url in urls) {
        console.log(urls[url].href);
    }
*/

function revertLink() {
    if (window.operations.getLink) {
        Array.prototype.forEach.call(document.querySelectorAll('.dev-link-info'),
            function(element) {
                element.remove();
            });;
        window.operations.getLink = false;
    }
    return window.operations;
}

function applyLink() {
    window.operations = window.operations || {};
    if (window.operations.getLink) {
        return revertLink();
    }
    window.operations.getLink = true;

  var urls = document.getElementsByTagName('a');
  var body = document.body;
  
  var $div = document.createElement('div');
    $div.classList.add('dev-link-info');
    var cssText = 'position:absolute;padding:4px;background:rgba(0, 0, 0, 0.75);color:#fff;z-index:1001;';
    var ids = {};
    var tops = {};
    Array.prototype.forEach.call(urls, function (element, index) {
        var div = $div.cloneNode();
        var rect = element.getBoundingClientRect();
        var top = (rect.top + window.scrollY - 32 + 'px');
        if (tops.hasOwnProperty(top)) {
            top = (parseInt(top.replace('px', '')) + 32) + 'px';
        }
        var left = (rect.left + 'px');
        var pos = 'p-' + top + left;
        var href = element.href.replace(/^http(.+)\.com/, '');
        if (rect.width) {
            if (ids.hasOwnProperty(pos)) {
                var eComp = document.querySelector('' + ids[pos]);
                if (eComp) {
                    eComp.textContent += ', ' + href;
                }
            } else {
                div.id = 'compo-tip-' + index;
                div.style.cssText = cssText + 'top:' + top + ';left:' + left;
                div.textContent = href;
                body.appendChild(div);
                ids[pos] = 'compo-tip-' + index;
                tops[top] = true;
            }
        }
    });

    return window.operations;
}

applyLink();
