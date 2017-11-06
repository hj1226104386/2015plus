/**
 * Created by huangjin on 2017/4/25.
 */
;
(function (Vue) {
    Vue.component('login',{
        template:`
    <div class="login">
        <div class="login-form">
            <h4>用户登录</h4>
            <form>
                <div class="form-group">
                    <input v-model='username' type="text" class="form-control" id="exampleInputEmail1" placeholder="用户名">
                </div>
                <div class="form-group">
                    <input v-model='password' type="password" class="form-control" id="exampleInputPassword1" placeholder="密码">
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-primary" @click="login">登录</button>
                    <a href="#">点击注册</a>
                    <span class="tip" v-text="tip"></span>
                </div>
            </form>
        </div>
    </div>
    `,
        data:function () {
            return {
                username:'',
                password:'',
                tip:''
            }
        },
        methods:{
            login:function () {
                let that = this;
                if(this.username !='黄锦'||this.password!=666){
                    that.tip = "用户名：黄锦，密码：666";
                }else{
                    that.tip = "登录成功，3s后自动跳转至首页";
                    setTimeout(function () {
                        that.$router.push({path:'/main/home'})
                    },3000)
                }
            }
        }
    })
})(Vue);