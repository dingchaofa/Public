var $ = require('./jquery-3.2.1.min.js')

var Alternate = require('./groupware/alternate-groupware.js')




    new Alternate($('.carousel'))


var GoTop = require('./groupware/gotop.js')
new GoTop($('.gotop'))

var waterfall = require('./groupware/waterfall-groupware.js')

new waterfall.Ajax($('.loadmore'),$('.waterfall'))
        function waterFall(){
            new waterfall.WaterFall($('.waterfall'))
        }
        waterFall()
        $(window).on('resize scroll',function(){
            waterFall()
        })
let $root = $('html, body')
let $achor = $('.navcontainer .navbar-right a, .navcontainer .navbar-head a')
console.log($achor)
$achor.on('click',function(){
    $root.animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);

})
