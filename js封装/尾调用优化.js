function tco(f) {
    var value
    var active = false
    var accumulated = [] // 闭包存储每次传输的数据

    return function accumulator() {
        accumulated.push(arguments) // 把每次传入的参数数组预存到数组里
        // console.log(accumulated);
        if (!active) {
            active = true
            console.log(2)
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift())
                console.log(value)
            }
            active = false
            return value
        }
    }
}
