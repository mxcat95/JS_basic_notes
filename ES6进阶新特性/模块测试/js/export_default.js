export function each() {
    console.log(each.name)
}

export {
    each as forEach
}

export default function (msg = '默认输出此语句！') {
    console.log(msg)
}

// export default 1 正确

// export default let a = 1 错误

// let 啊 = '啊'
// export default 啊 正确

// 并且 一个模块里 export default只能使用一次

