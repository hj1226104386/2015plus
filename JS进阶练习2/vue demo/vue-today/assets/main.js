/**
 * Created by huangjin on 2017/4/24.
 */
//路由
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {path: '/login', component: Vue.component('login')},
    {
        path: '/main', component: Vue.component('main-page'),
        children: [{
            path: 'home',
            component: Vue.component('home')
        },
            {
                path: 'product',
                component: Vue.component('product')
            },
            {
                path: 'aboutUs',
                component: Vue.component('about-us')
            },
            {
                path: 'contactUs',
                component: Vue.component('contact-us')
            },
        ]
    },


]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes: routes // （缩写）相当于 routes: routes
})
//在渲染之前先判断路由，默认跳到登录页
router.beforeEach((to, from, next) => {
    if (to.fullPath == '/') {
        next({
            path: '/login'
        })
        return
    }
    next()
})


//实例化一个vue
const app = new Vue({
    router
}).$mount('#app')
