// 加和函数模块化
function add(...nums) {
    let sum = nums.reduce((pre, next) => {
        return pre + next
    })
    return sum
}

// export 导出的接口 与其对应的值是动态绑定的关系 即通过该接口 可以实时获取内部的值
let a = 10

setTimeout(() => {
    a = '我发生了变化！'
}, 5000)

let obj = {
    x: 1,
    y: 2
}

// 导出模块方法
export { add, a, obj }