function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars.lol;
}

$(document).ready(function(){
  var iframe = $('.iFrameWrapper');
  var url = getUrlVars();
  iframe.html('<iframe class="mainIframe" src="'+ url +'" width="100%" height="100%" frameborder="0"></iframe>');
});
