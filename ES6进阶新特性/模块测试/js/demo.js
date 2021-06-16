// 导入模块
import { add as MathAdd, a, obj } from './MathModule.js'

import { getThree, getSeven } from './profile.js'

// 整体导入
import * as circle from './Circle.js'

// 导入默认模块就不需要使用大括号解构了
import message from './export_default.js'

//  如果想同时导入 default 和非default的模块 可以这么写

import _mes, { each, forEach } from './export_default.js'

// 在该文件调用导入的外部方法
console.log(MathAdd(1, 2, 3, 4, 5)) // 15

console.log(getThree() + getSeven()) // 10 

console.log('a = ' + a) // 10

let timer = setInterval(() => {
    console.log('a = ' + a) // 10 10 10 10 我发生了变化
}, 1000)

setTimeout(() => {
    clearInterval(timer)
}, 6000)

try {
    a = 3 // 不可修改导入的变量值
    console.log(a)
} catch (error) {
    console.log(error) // TypeError: Assignment to constant variable.at demo.js:23   
}

// 但是当导入的是一个对象 对该对象的属性修改是合法的 但不建议这么玩 尽可能避免修改导入的变量
console.log(obj.x) // 1
obj.x = '我被外部改变了！'
console.log(obj.x) // 我被外部改变了

console.log(`圆面积： ${parseInt(circle.area(4))}`) // 50
console.log(`圆周长： ${parseInt(circle.circleLenth(4))}`) // 25

message('来了来了！') // 来了来了！

_mes('我又来了！')  // 我又来了！

each() // each

forEach() // each



