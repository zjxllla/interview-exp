1. !important
2. 内联样式
3. id
4. 类、伪类、属性、属性值
5. 元素、伪元素
6. 通配符、兄弟、子代


/* 相邻兄弟选择器 */
选择紧接在某个元素后的第一个同级元素。
h2 + p { margin-top: -10px; }

/* 通用兄弟选择器 */
选择某个元素后的所有同级元素。
section ~ article { padding: 20px; }

/* 后代选择器 */
nav a { color: #333; }
ul > li { list-style: none; } /* 仅 ul 的直接子 li */

/* 伪类 */
定义元素的特定状态或结构位置
button:disabled { opacity: 0.5; }
tr:nth-child(odd) { background: #f9f9f9; }

/* 伪元素 */
选择元素的特定部分或插入内容。
blockquote::after { content: "”"; }
.header::first-line { font-weight: bold; }

/* 属性选择器 */
img[alt~="logo"] { border-radius: 50%; }
input[required] { border-color: red; }