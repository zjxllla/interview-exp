BFC：块级格式化上下文，就是一种规则 确保了bfc内部的元素布局不会被外部影响
条件：
1. 根元素
2. 浮动元素
3. absolute、fixed
4. overflow不是visible
5. 非块级盒子的块级容器，如inline-block、table-cell、table-caption、flex、inline-flex  flow-root
6. flex里的item
7. 多列容器 设置column-count


作用：
1. 不与浮动元素重叠
2. 防止兄弟、父子外边距合并
3. 防止父元素高度塌陷
4. 自适应两栏布局