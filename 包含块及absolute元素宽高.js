// 注意  是最近的块级元素

包含块是最近的块级祖先元素的内容区。
比如一个div的包含块是其最近的父级div的内容区。
如果一个元素没有包含块，那么它的包含块就是初始包含块，也就是浏览器窗口。
absolute元素的宽高是相对于其包含块的。（不设置 width和height的情况下）
宽度：包含块宽度 - left - right （border-box 包含边框和内边距）。
​高度：包含块高度 - top - bottom 。