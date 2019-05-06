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
    table.style.cssText = 'position:absolute;top:0;left:0;z-index:1001;background:#fff;border:2px solid #ee6e73';
    var tbody = document.createElement('tbody');
    var $tr = document.createElement('tr');
    $tr.style.cssText = 'border-bottom: 1px solid #ee6e73;';
    var $td = document.createElement('td');
    $td.style.cssText = 'border-right: 1px solid #ee6e73;padding: 15px;';
    var fragment = document.createDocumentFragment();
    

    var htr = $tr.cloneNode();
    var htd1 = $td.cloneNode();
    var htd2 = $td.cloneNode();
    var htd3 = $td.cloneNode();

    htd1.textContent = 'Image'
    htd2.textContent = 'Alt'
    htd3.textContent = 'Data src'
    htr.appendChild(htd1);
    htr.appendChild(htd2);
    htr.appendChild(htd3);
    fragment.appendChild(htr);

    [].forEach.call(document.querySelectorAll('main img'), function (img) {
        var tr = $tr.cloneNode();
        var td1 = $td.cloneNode();
        var td2 = $td.cloneNode();
        var td3 = $td.cloneNode();    
        var image = document.createElement('img');
        image.style.width = '200px';
        image.style.height = 'auto';
        image.src = img.src;
        td1.appendChild(image);
        td2.textContent = img.alt || 'No alt found';
        td3.innerHTML = img.parentElement.dataset.src ? ('<pre><code>' + JSON.stringify(JSON.parse(img.parentElement.dataset.src), null, 2) + '</code></pre>') : 'No Data src found';
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
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
 10       // body.appendChild(tip);
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