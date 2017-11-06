/**
 * Created by huangjin on 2017/4/24.
 */
//在声明vue实例之前注册全局组件

;
(function (Vue) {
    Vue.component('top',{
        template:`
    <div class="top">
        <h3>Dashboard</h3>
    </div>
    `
    })
})(Vue);