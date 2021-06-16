
// 圆面积
function area(radius) {
    return Math.PI * radius ** 2
}

// 圆周长
function circleLenth(radius) {
    return Math.PI * radius * 2
}

export { area, circleLenth }

// 复合写法 但是该文件访问不到 相当于中转站 转发了接口
export { add } from './MathModule.js'

// 上述写法可拆分为
// import { add } from "./MathModule.js"
// export { add }