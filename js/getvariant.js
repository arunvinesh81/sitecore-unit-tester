function revertComponentVariant() {
    if (window.operations.getvariant) {
        var els = document.querySelectorAll('.dev-variant-info');
        for (el of els) {
            el.remove();
        }
        window.operations.getvariant = false;
    }
    return window.operations;
}

function applyComponentVariant() {
    window.operations = window.operations || {};
    if (window.operations.getvariant) {
        return revertComponentVariant();
    }
    window.operations.getvariant = true;


    var comp = document.querySelectorAll('.component', '.screen-title');
    var body = document.body;

    var $div = document.createElement('div');
    $div.classList.add('dev-variant-info');
    var cssText = 'position:absolute;padding:4px;background:rgba(0, 0, 0, 0.75);color:#fff;z-index:1001;';
    var ids = {};
    var tops = {};
    Array.prototype.forEach.call(comp, function (element, index) {
        var div = $div.cloneNode();
        var rect = element.getBoundingClientRect();
        var top = (rect.top + window.scrollY - 32 + 'px');
        if (tops.hasOwnProperty(top)) {
            top = (parseInt(top.replace('px', '')) + 32) + 'px';
        }
        var left = (rect.left + 'px');
        var pos = 'p-' + top + left;
        if (rect.width) {
            if (ids.hasOwnProperty(pos)) {
                var eComp = document.querySelector('#' + ids[pos]);
                if (eComp) {
                    eComp.textContent += ', ' + element.classList.item(3);
                }
            } else {
                div.id = 'compo-tip-' + index;
                div.style.cssText = cssText + 'top:' + top + ';left:' + left;
                div.textContent = element.classList.item(3);
                body.appendChild(div);
                ids[pos] = 'compo-tip-' + index;
                tops[top] = true;
            }
        }
    });

    return window.operations;
}


applyComponentVariant();