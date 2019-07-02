function revertSymbols() {
    if (window.operations.getsymbols) {
        var els = document.querySelectorAll('.dev-variant-info');
        for (el of els) {
            el.remove();
        }
        window.operations.getsymbols = false;
    }
    return window.operations;
}

function findAndReplace(searchText, replacement, searchNode) {
    if (!searchText || typeof replacement === 'undefined') {
        // Throw error here if you want...
        return;
    }
    var regex = typeof searchText === 'string' ?
                new RegExp(searchText, 'g') : searchText,
        childNodes = (searchNode || document.body).childNodes,
        cnLength = childNodes.length,
        excludes = 'html,head,style,title,link,meta,script,object,iframe';
    while (cnLength--) {
        var currentNode = childNodes[cnLength];
        if (currentNode.nodeType === 1 &&
            (excludes + ',').indexOf(currentNode.nodeName.toLowerCase() + ',') === -1) {
            arguments.callee(searchText, replacement, currentNode);
        }
        if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
            continue;
        }
        var parent = currentNode.parentNode,
            frag = (function(){
                var html = currentNode.data.replace(regex, replacement),
                    wrap = document.createElement('div'),
                    frag = document.createDocumentFragment();
                wrap.innerHTML = html;
                while (wrap.firstChild) {
                    frag.appendChild(wrap.firstChild);
                }
                return frag;
            })();
        parent.insertBefore(frag, currentNode);
        parent.removeChild(currentNode);
    }
}

function applySymbols() {
    window.operations = window.operations || {};
    if (window.operations.getsymbols) {
        return revertSymbols();
    }
    window.operations.getsymbols = true;

    var searchMatch = document.referrer.match(/[?&]q=([^&]+)/),
    searchTerm = searchMatch && searchMatch[1];
        if (searchTerm) {
         findAndReplace('(™|®|&trade;)', function(term){ return '<span class="keyword">' + term + '</span>'; });
        }       

    return window.operations;
}


applySymbols();