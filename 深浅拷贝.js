//深拷贝
function deepClone(obj, hash = new Map()) {
    if (obj === null ||  obj ===undefined ||typeof obj === "number" ||typeof obj === "string" ||typeof obj === "boolean") {
        return obj;
    }
    if (obj instanceof Date) {
      return new Date(obj.getTime());
    }
    if (obj instanceof RegExp) {
      return new RegExp(obj);
    }
    if (typeof obj === "function") {
      return function () {
        return obj.apply(this, arguments);
      };
    }
    if (hash.has(obj)) {
      return hash.get(obj);
    }
  
    const target = Array.isArray(obj) ? [] : {};
    hash.set(obj, target);
    for(const key in obj){
      if(Object.prototype.hasOwnProperty.call(obj,key)){
          target[key] = deepClone(obj[key],hash)
      }
    }
    return target
  }


  //浅拷贝
  拓展（...）运算符 及 object.assign() 及 JSON.parse(JSON.stringify()) 及 循环赋值

  注意：JSON.parse(JSON.stringify()) 会忽略 undefined、symbol 和函数。