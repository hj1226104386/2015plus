/**
 * Created by huangjin on 2017/4/25.
 */
;
(function (Vue) {
    Vue.component('main-page',{
        template:`
        <div class="layout">
        <top></top>
        <sidebar></sidebar>
        <div class="content">
            <!--主要内容部分组件渲染在这里-->
            <router-view></router-view>
        </div>
    </div>
        `
    })
})(Vue);