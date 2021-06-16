function filter(arr, n) {
    // 满足条件的
    let satisfy = arr.filter(item => (item === n))
    // 不满足条件的
    let rest = arr.filter(item => (item !== n))
    // 重组
    return satisfy.concat(rest)
}

let arr = [5, 56, 5, 78, 1, 2, 3, 5, 48, 5, 69]
console.log(filter(arr, 5)) // [5, 5, 5, 5, 56, 78, 1, 2, 3, 48, 69]