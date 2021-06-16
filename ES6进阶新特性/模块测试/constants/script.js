// const声明的常量 只在当前代码块有效 如想要设置跨模块的常量
// 可以将多个常量文件导出的常量合并在一个文件里转发出去 再在其他文件里导入该转发文件

// 只需要导入一个转发文件即可
import * as network from "./index.js"

console.log(network.db, network.user)