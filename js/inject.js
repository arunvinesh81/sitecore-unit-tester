function absolutePosition(el) {
    var
        found,
        left = 0,
        top = 0,
        width = 0,
        height = 0,
        offsetBase = absolutePosition.offsetBase;
    if (!offsetBase && document.body) {
        offsetBase = absolutePosition.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
    if (el && el.ownerDocument === document && 'getBoundingClientRect' in el && offsetBase) {
        var boundingRect = el.getBoundingClientRect();
        var baseRect = offsetBase.getBoundingClientRect();
        found = true;
        left = boundingRect.left - baseRect.left;
        top = boundingRect.top - baseRect.top;
        width = boundingRect.right - boundingRect.left;
        height = boundingRect.bottom - boundingRect.top;
    }
    return {
        found: found,
        left: left,
        top: top,
        width: width,
        height: height,
        right: left + width,
        bottom: top + height
    };
}

(function () {

    var tooltip = document.createElement('div');
    var wrapper = document.createElement('div');
    wrapper.style.cssText = 'position: relative;';
    tooltip.style.cssText = 'position:absolute;background-color: #555;color: #fff;padding: 5px 0;border-radius: 6px;z-index: 1001;';

    // just place a div at top right
    var body = document.querySelector('body');
    var table = document.createElement('table');
    table.style.cssText = 'position:absolute;top:0;left:0;z-index:1001;background:#fff;border:1px solid #000';
    var tbody = document.createElement('tbody');
    var $tr = document.createElement('tr');
    $tr.style.cssText = 'border-bottom: 1px solid #000';
    var $td = document.createElement('td');
    var fragment = document.createDocumentFragment();

    [].forEach.call(document.querySelectorAll('img'), function (img) {
        var tr = $tr.cloneNode();
        var td1 = $td.cloneNode();
        var td2 = $td.cloneNode();
        var image = document.createElement('img');
        image.style.width = '150px';
        image.style.height = 'auto';
        image.src = img.src;
        td1.appendChild(image);
        td2.textContent = img.alt || 'No alt found';
        tr.appendChild(td1);
        tr.appendChild(td2);
        fragment.appendChild(tr);

        // imgRect = img.getBoundingClientRect();
        // img.style.border = '1px solid #000';
        // var pos = absolutePosition(img);
        // var tip = tooltip.cloneNode();
        // tip.textContent = 'Alt: ' + (img.alt || 'No alt text found');

        // tip.style.left = pos.left + 'px';
        // tip.style.width = img.width + 'px';
        // tip.style.top = '39px';
        // wrapper.appendChild(tip);

        // // img.parentNode.insertBefore(tip, img.nextSibling);
        // body.appendChild(tip);
    });

    tbody.appendChild(fragment);
    table.appendChild(tbody);
    body.appendChild(table);
    // var div = document.createElement('div');
    // div.style.position = 'fixed';
    // div.style.top = 0;
    // div.style.right = 0;
    // div.textContent = 'Injected!';
    // document.body.appendChild(div);

    // alert('inserted self... giggity');

})();