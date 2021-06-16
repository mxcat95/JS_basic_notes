/* 深拷贝方法 */
let arr1 = [1,2,3,4,5,6]
// JSON方法 JSON.stringify() 和 JSON.parse() 缺点：无法拷贝undefined function RegExp
let brr1 = JSON.parse(JSON.stringify(arr1))
brr1.forEach((item, index, array) => {
    array[index] += 10
})
console.log(arr1, brr1)

// Object.assign()方法 缺点：无法深拷贝嵌套对象
let crr1 = Object.assign([], arr1)
crr1.forEach((item, index, array) => {
    array[index] += 10
})
console.log(arr1, crr1)

// 递归法 相对完美
function deepClone(target) {
    let result
    // 判断数据类型是否为对象
    if (typeof target === 'object') {
        // 是否为数组
        if (Array.isArray(target)) {
            result = []
            for (const i in target) {
                // 如果项目存在 则递归拷贝到新的数组
                if (target.hasOwnProperty(i)) {
                    result.push(deepClone(target[i]))
                }
            }
        } else if (target === null && target.constructor === RegExp) {
            // 如果是个空对象或者正则对象 直接拷贝
            result = target
        } else {
            // 如果是普通对象 遍历拷贝
            result = {}
            for(let i in target){
                if (target.hasOwnProperty(i)) {
                    result[i] = deepClone(target[i])
                }
            }
        }
    }else {
        // 不是引用类型，则直接拷贝
        result = target
    }
    return result
}