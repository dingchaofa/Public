({
    baseUrl:'./js',
    paths:{
            'jquery':'jquery-3.2.1.min',
            'alternate':'groupware/alternate-groupware',
            'gotop':'groupware/gotop',
            'waterfall':'groupware/waterfall-groupware'
        },
    name:'main',  //解析文件
    out:'./js-merge.min.js' //输出文件
})
//配置文件，要和main.js文件的配置一样