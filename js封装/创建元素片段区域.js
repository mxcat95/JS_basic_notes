function creatArea(n, el) {
    let txtArea = document.createDocumentFragment()
    for (let i = 0; i < n; i++) {
        txtArea.appendChild(document.createElement(el))
    }
    return txtArea
}