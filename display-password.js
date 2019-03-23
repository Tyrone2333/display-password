// ==UserScript==
// @name         双击显示密码
// @namespace    http://undefined.ga
// @version      1.0.0
// @description  双击显示密码,失去焦点隐藏
// @author       en20
// @include      http*://*
// @exclude      *baidu.com*
// @grant        none
// @run-at		 document-end
// ==/UserScript==

window.onload = function () {
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
