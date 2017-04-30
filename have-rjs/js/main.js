require.config({
        baseUrl:'./js',
        paths:{
            'jquery':'jquery-3.2.1.min',
            'alternate':'groupware/alternate-groupware',
            'gotop':'groupware/gotop',
            'waterfall':'groupware/waterfall-groupware'
        }
    })
    require(['jquery','alternate','gotop','waterfall'],function($,Alternate,GoTop,waterfall){
        new Alternate($('.carousel'))

        new GoTop($('.gotop'))

        new waterfall.Ajax($('.loadmore'),$('.waterfall'))
        function waterFall(){
            new waterfall.WaterFall($('.waterfall'))
        }
        waterFall()
        $(window).on('resize scroll',function(){
            waterFall()
        })
    })