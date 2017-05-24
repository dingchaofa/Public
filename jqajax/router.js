app.get('/loadmore',function(req,res){
    var index = req.query.page
    var length = req.query.length

    var products = [
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
	}
];

    res.send({
        status:0,
        data:products.slice(index*3,index*3+3)
    })
})