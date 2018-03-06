/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2018/1/10
 */
Vue.component('favorites', {
    template:
        `
        <div class='favorites'>
            <div class="favorites-header">Favorites</div>
            <div class="favorites-title">YOU LIKED</div>
            <ul class="favorites-list">
                <li v-for='one in listData' @click='go'>
                    <div class="avator-wrapper">
                        <img :src="one.link">
                    </div>
                    <p>{{one.name}}</p>
                </li>
            </ul>
        </div>
        `,
    data: function () {
        return {
            listData:[
                {
                    link:'http://placehold.it/700x700/000000/ffffff',
                    name:'这是名字1'
                },
                {
                    link:'http://placehold.it/700x700/000000/ffffff',
                    name:'这是名字1'
                },
                {
                    link:'http://placehold.it/700x700/000000/ffffff',
                    name:'这是名字1'
                },
                {
                    link:'http://placehold.it/700x700/000000/ffffff',
                    name:'这是名字1'
                }
            ]
        }
    },
    methods: {
        go:function () {
            this.$router.push('/profile');
        }
    }
})