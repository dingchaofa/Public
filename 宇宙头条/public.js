//channels modul 添加和移除频道
let addList = $('.addChannels'),
    removeChannels = $('.removeChannels'),
    removeList = $('.removeChannels'),
    addChannels = $('.addChannels')
    //console.log(addList)

    addList.on('touchstart','li',toRemove)

function toRemove(){
    $(this).appendTo(removeChannels)
}

removeList.each((index,ele)=>{
    $(ele).on('touchstart','li',toAdd)
})
function toAdd(){
    $(this).appendTo(addChannels)
}
console.log(removeList)
// navbar modul
let allBar = $('.allBar'),
    barUl = $('.allBar>ul')
    barUl.remove()
    removeList.appendTo(allBar)