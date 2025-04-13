// =============== Vue2 响应式原理 ===============
/**
 * Vue2 使用 Object.defineProperty 来实现响应式
 * 优点：兼容性好
 * 缺点：
 * 1. 无法检测对象属性的添加和删除
 * 2. 无法直接监听数组的变化，需要重写数组方法
 * 3. 需要递归遍历对象的所有属性，性能开销大
 */

// 模拟 Vue2 响应式系统
function defineReactive(obj, key, val) {
  // 如果值是对象，需要递归处理
  if (typeof val === 'object' && val !== null) {
    observe(val);
  }
  
  // 存储依赖的地方
  const dep = new Dep();
  
  Object.defineProperty(obj, key, {
    get() {
      // 收集依赖
      if (Dep.target) {
        dep.depend();
      }
      return val;
    },
    set(newVal) {
      if (newVal === val) return;
      val = newVal;
      // 如果新值是对象，也需要做响应式处理
      if (typeof newVal === 'object' && newVal !== null) {
        observe(newVal);
      }
      // 通知依赖更新
      dep.notify();
    }
  });
}

// 观察者模式 - 依赖收集
class Dep {
  constructor() {
    this.subscribers = new Set();
  }
  
  depend() {
    if (Dep.target) {
      this.subscribers.add(Dep.target);
    }
  }
  
  notify() {
    this.subscribers.forEach(sub => sub.update());
  }
}

Dep.target = null; // 当前正在执行的 watcher

// 观察者
class Watcher {
  constructor(vm, expOrFn, cb) {
    this.vm = vm;
    this.getter = typeof expOrFn === 'function' ? expOrFn : () => vm[expOrFn];
    this.cb = cb;
    this.value = this.get();
  }
  
  get() {
    Dep.target = this;
    const value = this.getter.call(this.vm);
    Dep.target = null;
    return value;
  }
  
  update() {
    const oldValue = this.value;
    this.value = this.get();
    this.cb.call(this.vm, this.value, oldValue);
  }
}

// 将对象转换为响应式对象
function observe(obj) {
  if (typeof obj !== 'object' || obj === null) return;
  
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key]);
  });
}

// 使用示例 - Vue2
const data = { count: 0, nested: { value: 'hello' } };
observe(data);

// 创建一个 watcher 来监听 data.count 的变化
new Watcher(data, 'count', (newVal, oldVal) => {
  console.log(`Vue2 - count changed from ${oldVal} to ${newVal}`);
});

// 修改数据，触发更新
data.count = 1; // 输出: Vue2 - count changed from 0 to 1

// 添加新属性，不会触发响应
data.newProp = 'test'; // 不会触发任何响应

// =============== Vue3 响应式原理 ===============
/**
 * Vue3 使用 Proxy 来实现响应式
 * 优点：
 * 1. 可以监听对象属性的添加和删除
 * 2. 可以监听数组的变化
 * 3. 不需要递归遍历，性能更好
 * 缺点：兼容性不如 Object.defineProperty，不支持 IE
 */

// 模拟 Vue3 的 reactive 函数
function reactive(target) {
  if (typeof target !== 'object' || target === null) return target;
  
  const handler = {
    get(target, key, receiver) {
      // 收集依赖
      track(target, key);
      const result = Reflect.get(target, key, receiver);
      // 如果结果是对象，则递归设置为响应式
      return typeof result === 'object' && result !== null 
        ? reactive(result) 
        : result;
    },
    set(target, key, value, receiver) {
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);
      if (oldValue !== value) {
        // 触发更新
        trigger(target, key);
      }
      return result;
    },
    deleteProperty(target, key) {
      const hadKey = key in target;
      const result = Reflect.deleteProperty(target, key);
      if (hadKey && result) {
        // 触发更新
        trigger(target, key);
      }
      return result;
    }
  };
  
  return new Proxy(target, handler);
}

// 存储依赖关系的 WeakMap
const targetMap = new WeakMap();

// 跟踪依赖
function track(target, key) {
  if (!activeEffect) return;
  
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  
  dep.add(activeEffect);
}

// 触发更新
function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  
  const dep = depsMap.get(key);
  if (dep) {
    dep.forEach(effect => effect());
  }
}

// 当前活跃的副作用函数
let activeEffect = null;

// 创建副作用函数
function effect(fn) {
  const effectFn = () => {
    activeEffect = effectFn;
    fn();
    activeEffect = null;
  };
  
  effectFn(); // 立即执行一次，进行依赖收集
  return effectFn;
}

// 使用示例 - Vue3
const state = reactive({ count: 0, nested: { value: 'hello' } });

// 创建一个副作用函数来监听 state.count 的变化
effect(() => {
  console.log(`Vue3 - count is now: ${state.count}`);
});

// 修改数据，触发更新
state.count = 2; // 输出: Vue3 - count is now: 2

// 添加新属性，会触发响应
state.newProp = 'test'; // 如果有依赖收集这个属性，会触发更新

// 删除属性，也会触发响应
delete state.newProp; // 如果有依赖收集这个属性，会触发更新

// 嵌套属性也是响应式的
state.nested.value = 'world'; // 如果有依赖收集这个属性，会触发更新

// =============== 总结 ===============
/**
 * Vue2 vs Vue3 响应式系统对比:
 * 
 * 1. 实现方式:
 *    - Vue2: Object.defineProperty
 *    - Vue3: Proxy
 * 
 * 2. 性能:
 *    - Vue2: 需要递归遍历对象的所有属性，初始化开销大
 *    - Vue3: 惰性追踪，只有访问属性时才会转换为响应式，性能更好
 * 
 * 3. 功能:
 *    - Vue2: 无法检测对象属性的添加和删除，需要使用 Vue.set/Vue.delete
 *    - Vue3: 可以检测对象属性的添加和删除
 * 
 * 4. 数组处理:
 *    - Vue2: 需要重写数组方法来实现响应式
 *    - Vue3: 可以直接监听数组的变化
 * 
 * 5. 兼容性:
 *    - Vue2: 兼容性好，支持 IE
 *    - Vue3: 不支持 IE，因为 Proxy 无法被 polyfill
 */