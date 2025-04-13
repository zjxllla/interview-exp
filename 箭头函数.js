特点：
1. 没有自己的this，this指向定义时所在的上下文环境
2. 没有arguments对象，可以用拓展运算符代替
3. 不能作为构造函数使用，没有prototype （因为构造函数需要this来设置实例属性，且new需要设置prototype对象）
4. 不能使用yield命令