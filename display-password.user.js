// ==UserScript==
// @name         双击显示密码
// @namespace    https://github.com/Tyrone2333/display-password
// @version      1.0.3
// @description  双击显示密码,失去焦点隐藏
// @author       en20
// @include      http*://*
// @exclude      *baidu.com*
// @grant        none
// @run-at		 document-end
// ==/UserScript==
function displayPassword() {
    let list = document.querySelectorAll("input[type=password]")
    for (let i = 0; i < list.length; i++) {
        list[i].ondblclick = function () {
            list[i].setAttribute("type", "text")
        }
        list[i].onblur = function () {
            list[i].setAttribute("type", "password")
        }
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(displayPassword)
