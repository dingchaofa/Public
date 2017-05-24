/*封装ajax的'get'的请求方式
function ajax(options) {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {
                var result = JSON.parse(xhr.responseText)
                options.onSuccess(result)
            } else {
                options.onError()
            }
        }
    }
    var query = '?'
    for (key in options.data) {
        query += key + '=' + options.data[key] + '&'
    }
    query = query.substr(0, query.length - 1)
    xhr.open(options.type, options.url + query, true) //请求参数
    xhr.send()  //发送请求
}
*/
//封装ajax的'get'和'post'请求方式
function ajax(options){
    options.success = options.success || function(){}
    options.error = options.error || function(){}
    options.type = options.type || 'get'
    options.datatype = options.datatype || 'JSON'
    options.data = options.data || {}
    var datastr = ''
    for(var key in options.data){
        datastr +=key + '=' + options.data[key] + '&'
    }
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200 || xhr.status === 304){
                if(options.datatype === 'text'){
                    var result = xhr.responseText
                    options.success(result)
                }
                if(options.datatype === 'JSON'){
                    var result = JSON.parse(xhr.responseText)
                    options.success(result)
                }
            }else{
                options.error()
            }
        }
    }
    datastr = datastr.substr(0,datastr.length-1)
    if(options.type.toLowerCase() === 'post'){
        xhr.open(options.type,options.url,true)
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
        xhr.send(datastr)
    }
    if(options.type.toLowerCase() === 'get'){
        xhr.open(options.type,options.url + '?' + datastr,true)
        xhr.send()
    }
}