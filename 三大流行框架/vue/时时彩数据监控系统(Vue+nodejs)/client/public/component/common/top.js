/**
 * Created by DELL on 2017/3/31.
 */
;
(function (Vue) {
    // 注册
    Vue.component('top-nav', {
            template: `<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">数据监控系统</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="avator"><img src="./public/images/1.jpeg" alt=""></li>
                <li><a href="http://buy.cqcp.net/game/cqssc/">去官网</a></li>
                <router-link tag="li" to="/contectme">
                    <a>联系我</a>
                </router-link>
                <li><a href="http://www.baidu.com">帮助</a></li>
            </ul>
        </div>
    </div>
</nav>`,
        data:function () {

            return {}
        },
        methods:{

        }
    })
})(Vue);