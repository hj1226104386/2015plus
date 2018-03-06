/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2018/1/10
 */
Vue.component('login', {
    template:
        `
    <div class='login'>
    <div class="login-form">
    <div class="login-form-top">
    <p>
    <i class='iconfont icon-jiantou'></i>
</p>
<button class="login-width-f">Connect with facebook</button>
</div>
<div class="login-form-bottom">
<div class="login-title">
<span>SIGN IN</span>
</div>
<div class="form-group">
<div class="form">
<p>Email</p>
<input type="text" v-model='username'>
<i class='iconfont icon-delete' v-show='username' @click='clearUsername'></i>
</div>
<div class="form">
    <p>Password</p>
    <input type="password" v-model='password'>
    <i class='iconfont icon-delete' v-show='password' @click='clearPassword'></i>
</div>
</div>
<a class='forget' href='javascript:;' @click='toResetPassword'>Forgot your password?</a>
</div>

</div>
    <div class="login-btn">
    <button @click='doLogin'>
        <span v-show='!showLoading'>Sign In</span>
        <i class='iconfont icon-loading rotating' v-show='showLoading'></i>
    </button>
</div>
</div>
    `,
    data: function () {
        return {
            username: '用户名',
            password: '密码',
            showLoading: false
        }
    },
    methods: {
        // 清除用户名
        clearUsername: function () {
            this.username = ''
        },
        // 清除密码
        clearPassword: function () {
            this.password = ''
        },
        // 忘记密码
        toResetPassword: function () {
            alert('重置密码');
        },
        // 登录
        doLogin: function () {
            var that = this
            if(that.showLoading===true) return;
            that.showLoading = true;
            setTimeout(function () {
                that.showLoading = false;
                that.$router.push('/favorites');
            },500);
        }
    }
})