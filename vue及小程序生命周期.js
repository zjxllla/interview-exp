vue：
    vue2：
        1. beforeCreate 此时data和methods都还没有初始化
        2. created   此时data和methods都已经初始化，可以使用this访问data和methods
        3. beforeMount 此时template已经编译完成，但是还没有挂载到dom上
        4. mounted  dom已经挂载到页面上，可以使用this访问dom
        5. beforeUpdate
        6. updated
        7. beforeDestroy
        8. destroyed
        9. activated
    
    vue3：
        1. onBeforeMount  组件已经完成响应式状态设置，但没有创建dom节点
        2. onMounted    dom已挂载
        3. onBeforeUpdate
        4. onUpdated
        5. onBeforeUnmount
        6. onUnmounted
        7. onActivated
        8. onDeactivated

小程序：
    小程序的生命周期：
        1. onLaunch: 小程序初始化完成时触发，全局只触发一次
        2. onShow: 小程序启动或从后台进入前台显示时触发
        3. onHide: 小程序从前台进入后台时触发
        4. onError: 小程序发生脚本错误或API调用报错时触发
        5. onPageNotFound: 小程序要打开的页面不存在时触发
        6. onUnhandledRejection: 小程序有未处理的Promise拒绝时触发
        7. onThemeChange: 系统主题变更时触发

    小程序页面的生命周期：
        1. onLoad: 页面加载时触发，一个页面只会调用一次
        2. onShow: 页面显示/切入前台时触发
        3. onReady: 页面初次渲染完成时触发，一个页面只会调用一次
        4. onHide: 页面隐藏/切入后台时触发
        5. onUnload: 页面卸载时触发
        6. onPullDownRefresh: 用户下拉刷新时触发
        7. onReachBottom: 用户上拉触底时触发
        8. onShareAppMessage: 用户点击右上角分享时触发
        9. onPageScroll: 页面滚动时触发
        10. onResize: 页面尺寸变化时触发
        11. onTabItemTap: 当前是tab页时，点击tab时触发