block：
1.独占一行，宽度默认是父元素的100%
2.可以设置宽高
3.可以设置margin和padding

inline-block：
1.不独占一行，宽度默认是内容的宽度
2.可以设置宽高
3.可以设置margin和padding

inline：
1.不独占一行，宽度默认是内容的宽度
2.不能设置宽高
3.垂直方向的margin和padding不会影响布局

/* 
示例解释：
假设有以下HTML:
    <p>
      这是一段文字，包含一个<span
        style="
          padding-top: 20px;
          padding-bottom: 20px;
          margin-top: 20px;
          margin-bottom: 20px;
          background: yellow;
        "
        >inline元素</span
      >在其中。
    </p>

在这个例子中：
- span的垂直padding (top/bottom) 会使背景色向上下扩展，但不会改变行高
- span的垂直margin (top/bottom) 完全不起作用
- 只有水平方向的margin和padding会正常影响布局
- 整行的高度主要由行高(line-height)决定，而不是内部inline元素的垂直padding
*/