/**
 * Created by DELL on 2017/3/31.
 */
;
(function (Vue) {
    // 注册
    Vue.component('side-bar', {
        template: `<ul class="nav nav-sidebar">
                    <!-- <router-link> 默认会被渲染成一个 a 标签 -->
                    <router-link tag="li" to="/datalist" active-class="active">
                        <a>数据列表</a>
                    </router-link>
                    <router-link tag="li" to="/tableview" active-class="active">
                        <a>可视化视图</a>
                    </router-link>
                </ul>`,
        data:function () {

            return {}
        },
        methods:{

        }
    })
})(Vue);