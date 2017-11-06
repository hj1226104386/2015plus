/**
 * Created by huangjin on 2017/4/24.
 */
;
(function (Vue) {
    Vue.component('sidebar',{
        template:`
    <div class="sidebar">
            <ul>
                <router-link tag="li" to="/main/home" active-class="active">子组件一</router-link>
                <router-link tag="li" to="/main/product" active-class="active">子组件二</router-link>
                <router-link tag="li" to="/main/aboutUs" active-class="active">子组件三</router-link>
                <router-link tag="li" to="/main/contactUs" active-class="active">子组件四</router-link>
            </ul>
        </div>
    `
    })
})(Vue);