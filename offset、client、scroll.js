- 包含范围不同 :
- offset: 内容 + padding + border
- client: 内容 + padding
- scroll: 内容 + padding + 溢出部分

- 使用场景不同 :
- offset: 获取元素的实际大小和位置
- client: 获取元素的可视区域大小
- scroll: 处理元素的滚动和内容溢出

- 可读写性 :
- offset系列: 只读
- client系列: 只读
- scroll系列: scrollLeft/scrollTop可读可写
- 性能影响 :

所有这些属性的读取都可能导致浏览器重排(reflow)，因此应避免频繁访问