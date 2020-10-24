// ==UserScript==
// @name         双击显示密码
// @namespace    https://github.com/Tyrone2333/display-password
// @version      1.2
// @description  双击显示密码,失去焦点隐藏.不覆盖 onload,支持密码框后生成的网站
// @author       en20
// @include      http*://*
// @exclude      *baidu.com*
// @grant        none
// @run-at		 document-end
// ==/UserScript==
(function () {
    function displayPassword() {
        let list = document.querySelectorAll("input[type=password]")
        for (let i = 0; i < list.length; i++) {
            let item = list[i]
            item.ondblclick = function () {
                item.setAttribute("type", "text")
            }
            item.onblur = function () {
                item.setAttribute("type", "password")
            }
        }
    }

    // 防止覆盖 onload 事件
    function addLoadEvent(func) {
        const oldOnload = window.onload
        if (typeof window.onload != 'function') {
            window.onload = func
        } else {
            window.onload = function () {
                oldOnload()
                func()
            }
        }
    }

    // 防抖,mutationObserver 触发非常频繁
    function debounce(fn, delay) {
        // console.log(args)
        let timer = null

        return function (...args) {

            clearTimeout(timer)

            timer = setTimeout(() => {

                fn.call(this, ...args)

            }, delay)
        }
    }

    // 监听每次 dom 变化,重新寻找密码框添加事件
    const mutationObserver = new MutationObserver(debounce((mutations) => {
        displayPassword()
        // mutations.forEach(function (mutation) {
        //     console.log(mutation.addedNodes)
        // })
    }, 300))

    // 开始监听页面根元素 HTML 变化。
    mutationObserver.observe(document.documentElement, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true,
    })

    addLoadEvent(displayPassword)

})()
