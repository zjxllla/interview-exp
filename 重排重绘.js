重绘：dom元素的位置和大小没有改变，只是外观发生了变化
重排（回流）：dom的变化影响了元素的几何信息（位置和大小，文字数量或图片大小），浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置


优化：
1.避免频繁修改样式，尽量通过class及cssText属性修改样式
2.修改样式前先设置display:none,操作结束后再显示
3.将要修改的DOM脱标
4.使用 transform、opacity、filters（滤镜）、will-change 属性
5.防抖节流
6.利用DocumentFragment，统一插入dom 