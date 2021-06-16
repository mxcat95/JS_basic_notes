class EventUtil {
    constructor(el, type, handler) {
        this.el = el
        this.type = type
        this.handler = handler
    }

    // 添加事件监听处理
    addHandler() {
        // 支持事件监听则使用事件监听
        if (this.el.addEventListener) {
            this.el.addEventListener(this.type, this.handler)
        } else if (this.el.attachEvent) {
            // 低版本浏览器使用这个方法
            this.el.attachEvent(`on${this.type}`, this.handler)
        } else {
            // 都不支持，则采用初始方式
            el[`on${this.type}`] = this.handler
        }
    }

    // 取消事件监听处理
    removeHandler() {
        // 支持事件监听则取消事件监听
        if (this.el.removeEventListener) {
            this.el.removeEventListener(this.type, this.handler)
        } else if (this.el.deleteEvent) {
            // 低版本浏览器使用这个方法
            this.el.deleteEvent(`on${this.type}`, this.handler)
        } else {
            // 都不支持，则采用初始方式
            el[`on${this.type}`] = this.handler
        }
    }
}