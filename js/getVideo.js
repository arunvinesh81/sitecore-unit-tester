/*
var x = document.getElementsByTagName("video")[0].getAttribute("data-video-id"); 
var x = document.getElementsByTagName("iframe")[0].getAttribute("src"); 

*/

var x = document.getElementsByTagName("iframe");
for (i = 0; i < x.length; i++) {
    var vid = x[i].getAttribute("src");
    
//alert(vid);

var newvid = document.createElement("span");  // creating span tag
newvid.innerHTML = x[i].getAttribute("src");  // parsing value to span
x.parentNode.insertBefore(newvid,x.nextSibling); // 


}


