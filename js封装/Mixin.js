// 将多个类的接口混入另一个类
function mix(...mixins){

    class Mix{
        constructor() {
            for (let mix of mixins) {
                copyProperties(this,new mix()) // 拷贝实例属性
            }
        }
    }

    for (let mix of mixins) {
        copyProperties(Mix,mix) // 拷贝静态属性
        copyProperties(Mix.prototype,mix.prototype) // 拷贝原型属性
    }

    return Mix
}

// 拷贝类的属性
function copyProperties(target, source){

    // Reflect 映射对象 此方法返回对象所有的属性 包括Symbol属性 组成一个数组集合
    for (let key of Reflect.ownKeys(source))  {

        // 除去构造器 让构造器保持为被合并的类
        // 除去合并者的原型对象和类名
        if(key !== 'constructor' && key !== 'prototype' && key !=='name'){

            // 返回一个对象 包含了源对象所有属性的特性
            let desc = Object.getOwnPropertyDescriptor(source,key)

            // 给目标对象的属性设置与源对象属性相同的特性
            Object.defineProperty(target,key,desc)
        }
    }
}

/*
    属性特征：
        属性特性服务的对象是JavaScript解析引擎，是引擎的内部值，程序员无法直接获取
            分类：
                数据属性：包含一个属性的位置，可以读取和写入值
                    四个特性：
                           [[Configurable]]: 是否使能属性配置
                           [[Enumerable]]: 是否使能属性枚举(for in循环)
                           [[Writable]]: 是否使能属性修改权限
                           [[Value]]: 读写属性值，默认为undefined
                           内部值：[[内部特性]]
                     获取对象属性的特性：
                            Object.getOwnPropertyDescriptor({},'属性名')
                            获取自有特性的描述符，继承属性需要遍历原型链
                     设置对象属性的特性：
                            Object.defineProperty(o, 'x', {特性：是否使能})
                访问器属性：
                     访问器属性：不包含数据值
                         getter：读取访问器属性
                         setter：写入访问器属性
                              四个特性：
                                 [[Configurable]]: 是否使能属性配置
                                 [[Enumerable]]: 是否使能属性枚举(for in循环)
                                 [[Get]]: 读取属性时调用，默认undefined
                                 [[Set]]: 写入属性时调用，默认undefined
                 访问属性器不能直接定义，必须使用Object.defineProperty()定义
* */