define(['jquery'], function($) {

        function WaterFall($ct) {  //容器
            this.$ct = $ct
            this.init()
            this.bind()
        }
        WaterFall.prototype.init = function () {

            this.$item = this.$ct.find('.item')
            this.itemWidth = this.$item.outerWidth(true)
            this.leng = parseInt(this.$ct.width() / this.itemWidth)
            this.itemArr = []
            for (var i = 0; i < this.leng; i++) {
                this.itemArr[i] = 0
            }
        }
        WaterFall.prototype.bind = function () {
            var _this = this
            this.$item.each(function (index, ele) {
                var minItemArr = Math.min.apply(null, _this.itemArr)
                var minIndex = _this.itemArr.indexOf(minItemArr)
                var selfheight = $(ele).outerHeight(true)
                $(ele).css({
                    top: minItemArr,
                    left: _this.itemWidth * minIndex,
                    
                })
                minItemArr += selfheight
                _this.itemArr[minIndex] = minItemArr
                 
            })
            _this.$ct.height(Math.max.apply(null,_this.itemArr))
            //得出容器的高度，防止高度塌陷
        }
   
    //ajax请求

    function Ajax($btn,$ct){
        this.$btn = $btn
        this.$ct = $ct
        this.init()
        this.bind()
    }
    Ajax.prototype.init = function(){
        var _this = this
        this.isArrive = true
        this.pageindex = 0
        this.url = '/loadmore'
        this.type = 'get'
        this.dataType = 'JSON'
        this.length = 3
        this.success = function(data){
            if (data.status === 0) {
                if (data.images.length === 0) {
                    _this.$btn.text('更多图片请百度^_^···')
                    return;
                }
                var html=''
                for (var i = 0; i < 3; i++) {
                    html += '<li class="item h"><img src="'+data.images[i].img+'" alt=""></li>'
                }
                _this.$ct.append(html)
                    new WaterFall(_this.$ct)
                _this.pageindex += 3
                
            } else {
                alert('服务器出错')
            }
        }
        this.fail = function(){
            alert('请求出错···')
        }
        this.always = function(){
            _this.isArrive = true
            
        }
    }
    Ajax.prototype.bind = function(){
        var _this = this
        this.$btn.on('click', function () {
            
        if (!_this.isArrive) {
            return
        }
        _this.isArrive = false
        $.ajax({
            url: _this.url,
            type: _this.type,
            dataType: _this.dataType,
            data: {
                page: _this.pageindex,
                length: _this.length
             }
            }).done(_this.success).fail(_this.fail).always(_this.always)
        })
    }
    return {
        WaterFall:WaterFall,
        Ajax:Ajax
    }
});