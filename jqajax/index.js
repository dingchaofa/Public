var http = require('http')
var fs = require('fs')
var url = require('url')
//console.log(Object.keys(http))
var port = process.env.PORT || 8888;
var server = http.createServer(function (request, response) {
  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method
  //从这里开始看，上面不要看

  if (path === '/') {  // 如果用户请求的是 / 路径
    var string = fs.readFileSync('./index.html')  // 就读取 index.html 的内容
    response.setHeader('Content-Type', 'text/html;charset=utf-8')  // 设置响应头 Content-Type
    response.end(string)   // 设置响应消息体
  } else if (path === '/loadmore') {   
    var index = query.page
    //here
var products = `
	{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手 猴哥款',
		price: '￥405.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金转运珠 猴哥款',
		price: '￥100.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手链 3D猴哥款',
		price: '￥45.00'
	},	{
		img: 'http://img12.360buyimg.com/N3/jfs/t2302/181/1562193880/220016/88a978ef/56cbbc11Nd6d3b04b.jpg',
		name: '珂兰 ',
		price: '￥405.00'
	},{
		img: 'http://img12.360buyimg.com/N3/jfs/t2302/181/1562193880/220016/88a978ef/56cbbc11Nd6d3b04b.jpg',
		name: '珂兰 ',
		price: '￥100.00'
	},{
		img: 'http://img12.360buyimg.com/N3/jfs/t2302/181/1562193880/220016/88a978ef/56cbbc11Nd6d3b04b.jpg',
		name: '珂兰',
		price: '￥45.00'
	},{
		img: 'http://img13.360buyimg.com/N3/jfs/t2461/336/2166939566/101221/3af27699/56c426a5N9b6673f4.jpg',
		name: '珂兰 黄金手',
		price: '￥405.00'
	},{
		img: 'http://img13.360buyimg.com/N3/jfs/t2461/336/2166939566/101221/3af27699/56c426a5N9b6673f4.jpg',
		name: '珂兰 黄金转运珠 ',
		price: '￥100.00'
	},{
		img: 'http://img13.360buyimg.com/N3/jfs/t2461/336/2166939566/101221/3af27699/56c426a5N9b6673f4.jpg',
		name: '珂兰 黄金手链 ',
		price: '￥45.00'
	}`
    //here
    response.end({
        status:0,
        data:products.slice(index*3,index*3+3)
    })
  } else if (path === '/print-style.css') {  // 如果用户请求的是 /print-style.css 路径
    var string = fs.readFileSync('./print-style.css')
    response.setHeader('Content-Type', 'text/css')
    response.end(string)
  } else if (path === '/main.js') {  // 如果用户请求的是 /main.js 路径
    var string = fs.readFileSync('./main.js')
    response.setHeader('Content-Type', 'application/javascript')
    response.end(string)
  } else {  // 如果上面都不是用户请求的路径
    response.setHeader('Content-Type', 'text/html;charset=utf-8')  // 设置响应头 Content-Type
    response.end('找不到对应的路径，你需要自行修改 index.js')
  }

  // 代码结束，下面不要看
  console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听 8888 成功')
