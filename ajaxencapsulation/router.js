app.get('/loadmore',function(req,res){
    var index = req.query.index
    var leng = req.query.length
    var data = [] 
    for(var i=0;i<leng;i++){
        data.push('新闻'+(parseInt(index)+i))
    }
    res.send(data)
})