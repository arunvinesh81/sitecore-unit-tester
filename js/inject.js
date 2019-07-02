function revertImageInfo() {
    if (window.operations.getImage) {
        document.querySelector('#imgInfoTable').remove();
        window.operations.getImage = false;
    }
    return window.operations;
}

function showImageInfo() {
    window.operations = window.operations || {};
    if (window.operations.getImage) {
        return revertImageInfo();
    }
    window.operations.getImage = true;
    var tooltip = document.createElement('div');
    var wrapper = document.createElement('div');
    wrapper.style.cssText = 'position: relative;';
    tooltip.style.cssText = 'position:absolute;background-color: #555;color: #fff;padding: 5px 0;border-radius: 6px;z-index: 1001;';

    // just place a div at top right
    var body = document.querySelector('body');
    var table = document.createElement('table');
    table.id = 'imgInfoTable'
    table.style.cssText = 'position:absolute;top:0;left:0;z-index:1001;background:#fff;border:2px solid #ee6e73';
    var tbody = document.createElement('tbody');
    var $tr = document.createElement('tr');
    $tr.style.cssText = 'border-bottom: 1px solid #ee6e73; background-color: antiquewhite;';
    var $td = document.createElement('td');
    $td.style.cssText = 'border-right: 1px solid #ee6e73;padding: 15px;';
    var fragment = document.createDocumentFragment();


    var htr = $tr.cloneNode();
    var htd1 = $td.cloneNode();
    var htd2 = $td.cloneNode();
    var htd3 = $td.cloneNode();

    htd1.textContent = 'IMAGE'
    htd2.textContent = 'ALT'
    htd3.textContent = 'DATA SRC'
    htr.appendChild(htd1);
    htr.appendChild(htd2);
    htr.appendChild(htd3);
    fragment.appendChild(htr);

    [].forEach.call(document.querySelectorAll('.body-content img' , 'main img'), function (img) {
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
        td3.innerHTML = img.parentElement.dataset.src || img.dataset.src ? ('<pre><code>' + JSON.stringify(JSON.parse(img.parentElement.dataset.src || img.dataset.src), null, 2) + '</code></pre>') : 'No Data src found';
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        fragment.appendChild(tr);
    });

    tbody.appendChild(fragment);
    table.appendChild(tbody);
    body.appendChild(table);

    return window.operations;
};

showImageInfo();