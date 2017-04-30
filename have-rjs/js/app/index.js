define(['jquery','alternate','gotop','waterfall'],function($,Alternate,GoTop,waterfall){

        new Alternate($('.carousel'))

        new GoTop($('.gotop'))

        new waterfall.Ajax($('.loadmore'),$('.waterfall'))

        var waterFall = new waterfall.WaterFall($('.waterfall'))
        $(window).on('resize','scroll',waterFall)
        })