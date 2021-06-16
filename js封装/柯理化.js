function ke(fn,args){
    var count = fn.length
    var argArr = args

    return function () {
        var _args = Array.prototype.slice.call(arguments)
        Array.prototype.unshift.apply(_args,argArr)

        if(_args.length < count){
            return arguments.callee.call(null,fn,_args)
        }
        return fn.apply(null,_args)
    }
}
