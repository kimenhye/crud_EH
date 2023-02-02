function linkIframe(iframe, src) {
    window['sessionStorage'][iframe.getID()] = src;
    iframe.setSrc(src);
}

function link(src) {
    window['sessionStorage']['w2xpath'] = src;
    var str1 = location.toString();
    var idx = (str1.indexOf("?"));
    if (idx < 0) {
        idx = str1.length;
    }
    var str = str1.substring(0, idx);
    var path = str.substring(0, idx);
    var idx2 = path.indexOf("#w2xPath=");
    if (idx2 < 0) {
        idx2 = path.length;
    }
    path = path.substring(0, idx2);
    location.href = path;
}