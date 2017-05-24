//其他地方的forEach没有替换
//DOM对象是类数组对象，但是和原生对象的用法又不同，只有采取数组角标方式才能获得DOM对象。
function $(selector) {
    var obj = {}  //数组是最好的解决方式，用对象，会迷路
    if (typeof selector === 'string') {
        var elsel = document.querySelectorAll(selector)
        obj = Object.assign(elsel, obj)  //polyfill 合并对象

    } else if ((selector instanceof Element) || (selector instanceof Object)) {
        var elsel = selector
        obj = obj = Object.assign(elsel, obj)
    } else if (selector instanceof Array) {
        for (var i = 0; i < selector.length; i++) {
            obj[i] = selector[i]
        }
    }

    obj.on = function (eventType, fn) {
        elsel.forEach(function (argu) {  //forEach方法也可以用于类似数组的对象和字符串。
            argu.addEventListener(eventType, fn)
        })
        return obj
    }
    obj.addClass = function (className) {
        Array.prototype.forEach.call(obj, function (argu, i) {
            obj[i].classList.add(className)
        })
        console.assert(this === obj)
        return obj
    }
    obj.removeClass = function (className) {
        Array.prototype.forEach.call(obj, function (argu, i) {
            obj[i].classList.remove(className)
        })
        console.assert(this === obj)
        return obj
    }
    obj.text = function (content) {

        if (content === undefined) {
            let textNode = []
            elsel.forEach(function (argu) {
                textNode.push(argu.textContent)
            })
            return textNode
        } else {
            elsel.forEach(function (argu) {
                argu.textContent = content
            })
            return obj
        }
    }
    obj.get = function (index) {
        if (index === undefined) {
            return obj
        }
        return obj[index]
    }
    obj.siblings = function () {

        var s = obj[0].parentNode.firstElementChild  //firstChild得到的结果包括，文本和注释节点
        var result = []//最好生成新的数组，才能使用classList，对象无法使用classList
        for (; s; s = s.nextElementSibling) { //nextSibling包括文本节点
            if (s.nodeType === 1 && s != obj[0]) {  //nodeType属性返回节点类型的常数值
                result.push(s)
            }
        } 
        let items = $(result)
        items.previousSelection = obj
        return items
    }
    obj.end = function () {
        return obj.previousSelection
    }

    return obj
}