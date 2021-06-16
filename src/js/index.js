// DOM元素
let doms = {
    input: document.querySelector('#in'),
    btn: document.querySelector('#btn'),
    answer: document.querySelector('#answer')
}

// 倒序方法
function reverse(n) {
    let m = 0

    while (n > 0) {
        m = m * 10 + n % 10
        n = Math.floor(n / 10)
    }

    return m
}

// 显示事件
function defaultPoint(value) {
    if (doms.input.value == '') {
        doms.answer.innerHTML = `请输入一个数字！`
        return
    }

    doms.answer.innerHTML = reverse(value)

    setTimeout(() => {
        doms.input.value = ''
    }, 1500)

}

// 监听按钮点击事件
doms.btn.addEventListener('click', () => {
    defaultPoint(doms.input.value)
})