/**
 * 通用的柯理化函数的封装
 */
function currying(func, args) {
    var arity = func.length // 形参个数，即func正常运行所需的参数个数
    // 柯理化时是否传入了参数，传入即保存 没传入则初始化为一个空数据
    var allArg = args || []

    return function () {
        // 把参数转换为数组
        var _args = Array.prototype.slice.call(arguments) // 私有化属性 将参数转为数组
        Array.prototype.unshift.apply(_args, allArg) // 将上次传入的参数加入到_args里

        // 如果参数不够 返回新的闭包函数继续收集参数
        if (_args.length < arity) {
            return arguments.callee.call(null,func,_args)
        }
        // 参数足够则直接执行被转化的函数
        return func.apply(null,_args)
        // 目前参数是数组 所以采用apply方式来简化代码 将参数一个个传入函数
    }
}