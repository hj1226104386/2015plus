/**
 * 公共方法&jQuery插件
 * @modified 2018/1/20
 */
// 从地址栏获取参数，name为要获取的参数名
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return decodeURI(r[2]);
    return null; //返回参数值
}

/**
 * @author huangjin
 * jQuery组件
 * [function] showAlert 成功/失败提示
 */
$.extend({
    showAlert: function (options) {
        /**
         * @type {{type: string, alertText: string, duration: number}}
         * @params [option]
         * type:元素样式，分为success和fail两种
         * alertText：显示文本
         * duration：显示到隐藏的时间差
         * @example {type:'fail'，alertText：'操作失败',duration:1500}
         * @date 2018/1/20
         */
        var defaultOption = {
            type: 'success',
            alertText: '操作成功',
            duration: 2000
        };
        // 合并选项，保留默认选项
        var currentOptions = $.extend({}, defaultOption, options || {});
        var bgClass = 'success';
        if (currentOptions.type === 'fail') {
            bgClass = 'fail'
        }
        var html =
            '<div id="_showAlert">' +
                '<div class="alert-content ' + bgClass + '">' +
                    '<p>'+currentOptions.alertText+'</p>' +
                    '<span class="hide-alert fa fa-times"></span>' +
                '</div>' +
            '</div>';
        // 节流阀
        if($('#_showAlert').length>0){
            return false;
        }
        // 挂载到DOM树
        $('body').append(html);
        // 显示
        $('#_showAlert').fadeIn('slow');
        setTimeout(function () {
            $('#_showAlert').animate({top: '-70px'}, 500, 'linear', function () {
                $('#_showAlert').remove();
            });
        }, currentOptions.duration);
        // 绑定事件
        $('.hide-alert').click(function () {
            $('#_showAlert').remove();
        })
    }
});
