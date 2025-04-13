
// 1. 类型断言
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

// 2. 类型守卫
// value is string 是类型谓词(type predicate)，用于在运行时进行类型收窄
// 它告诉TypeScript：如果这个函数返回true，那么传入的value参数就是string类型
function isString(value: any): value is string {
    return typeof value === "string";
}



// 3. 联合类型转换
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";

// 4. 交叉类型转换
interface A { a: string; }
interface B { b: number; }
type C = A & B;  // { a: string; b: number; }

// 5. 泛型类型转换
// 这是一个泛型函数，用于保持输入参数的类型不变并返回
// T 是一个类型参数，可以是任何类型
// 函数接收一个类型为T的参数，并返回相同类型的值
// 这种模式常用于需要保持类型安全但又要保持类型灵活性的场景
function identity<T>(arg: T): T {
    return arg;
}
// 6. keyof 类型转换
interface Person {
    name: string;
    age: number;
}
type PersonKeys = keyof Person; // 'name' | 'age'

// 7. 映射类型
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

// 8. 条件类型
type TypeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : "object";

// 使用示例
let A:TypeName<string> = "string"