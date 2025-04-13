https://juejin.cn/post/7133250560441974798#heading-3

1.父传子：
vue2：props
vue3：defineProps

vue2：$attrs（属性）、$listeners（事件）   
vue3：useAttrs（属性方法合并）   Vue3中使用attrs调用父组件方法时，方法前需要加上on；如parentFun->onParentFun


2.子传父：
vue2：$emit
vue3：defineEmits


3.祖先传子孙：
vue2：provide/inject
vue3：provide/inject

4.兄弟传兄弟：
vue2：EventBus
vue3：mitt

vuex、pinia

利用共同父组件


5.子访问父
vue2：$parent


6.父访问子
vue2：$children

vue2：$ref
vue3：defineExpose、ref
