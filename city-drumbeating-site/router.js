app.get('/public/loadmore',function(req,res){
    var index = req.query.page
    var leng = req.query.length
    var data = [{
        img:'img/12.jpg'
    },
    {
        img:'img/13.jpg'
    },{
        img:'img/14.jpg'
    },{
        img:'img/15.jpg'
    },{
        img:'img/16.jpg'
    },{
        img:'img/17.jpg'
    },{
        img:'img/18.jpg'
    },{
        img:'img/19.jpg'
    },{
        img:'img/21.jpg'
    },{
        img:'img/23.jpg'
    },{
        img:'img/24.jpg'
    },{
        img:'img/25.jpg'
    },{
        img:'img/26.jpg'
    },{
        img:'img/27.jpg'
    },{
        img:'img/28.jpg'
    }
    ] 
    var images = data.slice(index,index*3+3)
    res.send({
        status:0,
        images:images
    })
})