1. 基本插槽 子使用slot占位符 父在子标签中写入内容 
2. 具名插槽 子使用slot=“name” 父在子标签中写入内容 可以用template标签包裹内容，在template标签上使用v-slot:name指定位置 语法糖 #name
3. 作用域插槽 子可以在slot上绑定数据，父在子标签中使用v-slot="slotProps"接收子组件传递的数据，slotProps是一个对象，包含子组件传递的数据
4. 动态插槽 插槽名可以是动态的，父在子标签中使用v-slot:[动态插槽名]接收子组件传递的数据
5. 具名作用域插槽 子可以在slot上绑定数据，父在子标签中使用v-slot:name="slotProps"接收子组件传递的数据，slotProps是一个对象，包含子组件传递的数据，同时指定插槽位置。