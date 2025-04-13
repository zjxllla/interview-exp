1. reactive
proxy
get track and set trigger

2. ref对基础数据类型通过proxy代理 value 实现响应式 对对象、及其包装类型的.value走reactive实现

const convert = (val) => isObject(val) ? reactive(val) : val; // 递归响应式
class RefImpl {
    private _value;
    public readonly __v_isRef = true; // 产生的实例会被添加 __v_isRef 表示是一个 ref 属性
    constructor(private _rawValue, public readonly _shallow) {
        // 如果是深度，需要把里面的都变成响应式的
        this._value = _shallow ? _rawValue : convert(_rawValue)
    }
    // 类的属性访问器
    get value() {    // 代理 去value 会帮我们代理到 _value 上
        track(this, TrackOpTypes.GET, 'value');
        return this._value;
    }
    set value(newVal) {
        if (hasChanged(newVal, this._rawValue)) { // 判断新老值是否有变化
            this._rawValue = newVal; // 保存值
            this._value = this._shallow ? newVal : convert(newVal);
            trigger(this, TriggerOpTypes.SET, 'value', newVal);
        }
    }
}