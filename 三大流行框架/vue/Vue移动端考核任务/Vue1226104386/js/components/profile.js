/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2018/1/10
 */
Vue.component('profile', {
    template:
        `
        <div class='profile'>
            <div class="profile-header">
                <span>Profile</span>
                <div class="profile-icon fr">
                    <span>1.5K</span>
                    <i class='iconfont icon-zuanshi'></i>
                </div>
            </div>
            <div class="profile-pic">
                <div class="profile-left">
                    <img src="http://placehold.it/700x700/000000/ffffff">
                </div>
                <ul class="profile-right">
                    <li>
                        <img src="./image/avator.jpg">
                    </li>
                    <li>
                        <img src="./image/avator.jpg">
                    </li>
                    <li>
                        <img src="./image/avator.jpg">
                    </li>
                </ul>
            </div>
            <ul class="interactive">
                <li>
                    <dl>
                        <dt>134</dt>
                        <dd>Liked you</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>134</dt>
                        <dd>You liked</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>Matched</dt>
                        <dd>Matched</dd>
                    </dl>
                </li>
            </ul>
            <div class="about">
                <h4 class="about-title">ABOUT</h4>
                <p class="about-desc">Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <ul class="sharing-ways">
                    <li>
                        <i class='iconfont icon-facebookf'></i>
                    </li>
                    <li>
                        <i class='iconfont icon-twitter'></i>
                    </li>
                    <li>
                        <i class='iconfont icon-googleplus'></i>
                    </li>
                    <li>
                        <i class='iconfont icon-linkedin'></i>
                    </li>
                </ul>
            </div>
        </div>
        `,
    data: function () {
        return {}
    },
    methods: {}
})