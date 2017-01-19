var gallery_messages =  new  Array(
    "It's awesome. Simple interface, works great, lots of features... it rocks."
    , "Just wanted to let you know how much I love your icon editor. The best out there by far."
);

function switchMsg()
{
  var r = Math.ceil(Math.random() * gallery_messages.length);
  document.getElementById('textslide').innerHTML = gallery_messages[r];

  setTimeout("switchMsg()", 5000);
}

function writeFlagcount()
{
    if(window.location.href!="http://127.0.0.1:4000/")
        document.write("<a href=\"http://info.flagcounter.com/ZHAO\"><img src=\"https://s10.flagcounter.com/count2/ZHAO/bg_FFFFFF/txt_000000/border_CCCCCC/columns_6/maxflags_40/viewers_0/labels_1/pageviews_1/flags_0/percent_0/\" alt=\"Flag Counter\" border=\"0\"></a>");
}