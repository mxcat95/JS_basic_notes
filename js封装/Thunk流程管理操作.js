var fs = require('fs')
var thunkify = require('thunkify')
var readFileThunk = thunkify(fs.readFile)

// 手动版管理流程

var gen = function* () {
    var r1 = yield readFileThunk('etc/fstab')
    console.log(r1.toString())

    var r2 = yield readFileThunk('etc/shells')
    console.log(r2.toString())
}

var g = gen()
var r1 = g.next()

r1.value((err, data) => {
    if (err) throw err

    var r2 = g.next(data)

    r2.value((err, data) => {

        if (err) throw err

        g.next(data)
    })
})

// 自动版本

function run(fn) {
    var gen = fn()

    function next(err, data) {
        if (err) throw err

        var result = gen.next(data)
        if (result.done) return
        result.value(next)
    }

    next()
}

var gg = function* () {
    var f1 = yield readFileThunk('fileA')
    var f2 = yield readFileThunk('fileB')
    var f3 = yield readFileThunk('fileC')
    // ...
    var fn = yield readFileThunk('fileN')

}
run(gg)