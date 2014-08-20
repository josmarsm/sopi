/*
 * Copyright (c) 2008, Fateciens/CPD-UFSM. All Rights Reserved.
 */
function isOpera() {
    return navigator.userAgent.toLowerCase().indexOf('opera') >= 0;
}

function isFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') >= 0;
}

function isMSIE() {
    return navigator.userAgent.toLowerCase().indexOf('msie') >= 0;
}

function isSafari() {
    return navigator.userAgent.toLowerCase().indexOf('isSafari') >= 0;
}

function showHide(id, x, y, element) {
    var div = document.getElementById(id);
    var visibility = div.style.visibility;
    if (visibility == 'visible') {
        div.style.visibility = 'hidden';
    } else {
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.visibility = 'visible';
    }
}

function getPosicaoElemento(offsetTrail) {
    var offsetLeft = 0;
    var offsetTop = 0;
    while (offsetTrail) {
        offsetLeft += offsetTrail.offsetLeft;
        offsetTop += offsetTrail.offsetTop;
        offsetTrail = offsetTrail.offsetParent;
    }
    if (navigator.userAgent.indexOf("Mac") != -1 &&
        typeof document.body.leftMargin != "undefined") {
        offsetLeft += document.body.leftMargin;
        offsetTop += document.body.topMargin;
    }
    return {left:offsetLeft, top:offsetTop};
}