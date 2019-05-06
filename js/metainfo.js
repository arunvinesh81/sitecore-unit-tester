var x = document.getElementsByTagName("meta");
    var txt = "";
    var i;
    var body = document.querySelector('body');
    var table = document.createElement('table');
    table.style.cssText = 'position:absolute;top:0;left:0px;z-index:1001;background:#fff;border:2px solid #ee6e73';
    var tbody = document.createElement('tbody');
    var $tr = document.createElement('tr');
    $tr.style.cssText = 'border-bottom: 1px solid #ee6e73;padding: 16px;';
    var $td = document.createElement('td');
    $td.style.cssText = 'border-right: 1px solid #ee6e73;padding: 16px;';
    var fragment = document.createDocumentFragment();

    for (i = 0; i < x.length; i++) {
         var tr = $tr.cloneNode();
         var td1 = $td.cloneNode();
         var td2 = $td.cloneNode();
         var hasAppendChild = false;
         if (x[i].name=="description")
        {
          td1.textContent =  "Meta Description";
          td2.textContent = x[i].content;
          hasAppendChild = true;
         }
         else  if (x[i].name=="keywords")
         {
          td1.textContent =  "Meta Keywords";
          td2.textContent = x[i].content;
          hasAppendChild = true;
          }
          else  if (x[i].getAttribute("property")=="og:title")
         {
          td1.textContent =  "og:title";
          td2.textContent = x[i].content;
          hasAppendChild = true;
         }
        else if (x[i].getAttribute("property")=="og:description")
        {
          td1.textContent =  "og:description";
          td2.textContent = x[i].content;
          hasAppendChild = true;
         }
         else  if (x[i].getAttribute("property")=="og:image")
         {
          td1.textContent =  "og:image";
          td2.textContent = x[i].content;
          hasAppendChild = true;
         }
        
         if(hasAppendChild) {
              tr.appendChild(td1);
              tr.appendChild(td2);
              fragment.appendChild(tr);
         }

    } 

    tbody.appendChild(fragment);
    table.appendChild(tbody);
    body.appendChild(table);

