var x = document.getElementsByTagName("meta");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].getAttribute("property")=="og:description")
        {
            alert("og:description"+x[i].content);
         }
         else  if (x[i].getAttribute("property")=="og:image")
         {
              alert("og:image"+x[i].content);
         }
         else  if (x[i].getAttribute("property")=="og:title")
         {
              alert("og:title"+x[i].content);
         }
        
        else if (x[i].name=="description")
        {
             alert(x[i].content);
         }
         else  if (x[i].name=="keywords")
         {
              alert("keywords"+x[i].content);
          }
         

    } 

