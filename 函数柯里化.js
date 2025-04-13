function curry(fn) {
  return function curried(...args) {
    // 如果参数足够,就执行函数
    if (args.length >= fn.length) return fn.apply(this, args);
    // 否则返回一个新函数,等待接收参数
    return function (...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));
