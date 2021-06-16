// 变量的导出方式 导出一个接口名 与内部变量建立一一对应关系

// 逐个导出
export var first = 1
export var second = 2

// 合并导出

var third = 3
var fouth = 4

export { third, fouth }

// 重命名导出
function f1() {
    return first + second
}

function f2() {
    return third + fouth
}

export {
    f1 as getThree,
    f2 as getSeven
}

// 下面写法是错误的 都没有对外提供接口

// export 1 直接输出1 不是接口
// export first 间接输出1 不是接口
