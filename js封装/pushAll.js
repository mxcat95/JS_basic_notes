/**
 * 
 *  使用rest参数设置 封装一个数组的pushAll方法
 *  pushAll(数组，要封装的数据或者是数组里的数据)
 * 
 *  */

function pushAll(arr, ...items) {
    items.forEach(item => {
        arr.push(item)
    })
}