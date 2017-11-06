/**
 * Created by huangjin on 2017/3/7.
 */

//定义一个构造函数
function SongManager() {
    //页面初始化
    this.init();
};
//扩展构造函数原型对象的属性方法
SongManager.prototype = {
    constructor: SongManager,
    //初始化页面
    init: function () {
        this.renderDOM();
        this.bindEvents();
    },
    //渲染DOM元素
    renderDOM: function () {
        //发送ajax请求拿到表格数据
        $.ajax({
            type: 'GET',
            url: '/getdata',
            dataType: 'json',
            success: function (data) {
                var html = template('RenderTable', data);
                $('.tbodys').html(html);
            },
            error: function (data) {
                throw data.status;
            }
        });
    },
    //绑定事件
    bindEvents: function () {
        var self = this;
        //给事件添加命名空间,使用事件委托
        //给删除按钮绑定事件,点击删除当前行数据
        $('.rowInfo').on('click.deleteMessage', '.deleteBtn', function () {
            self.deleteSong();
        })
    },
    //删除信息
    deleteSong: function () {
        alert('aaa');
        // $('.deleteBtn').parent().parent().remove();
    },
    //添加信息
    addSongs: function () {

    }
};


//new一个构造函数实例
var songManager = new SongManager();