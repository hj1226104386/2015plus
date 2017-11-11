/**
 * Created by huangjin on 2017/3/10.
 */
function sscManager() {
    this.init();
};
sscManager.prototype = {
    constructor: sscManager,
    //页面初始化
    init: function () {
        this.render();
        this.bindEvents();
    },
    //页面渲染
    render: function () {
        //初始化查询所有数据
        var initAllData = function () {
            $.ajax({
                type: 'GET',
                url: '/ssc/queryall',
                success: function (datas) {
                    console.log(datas);
                    var html = template('TableData', datas);
                    $('.table tbody').html(html);
                },
                error: function () {
                    alert('获取所有数据失败^_^');
                }
            })
        };
        //查询插入数据操作
        var insertOneData = function () {
            //查询到网站的一条数据
            $.ajax({
                type: 'GET',
                url: '/queryone',
                success: function (data) {
                    //处理字符串
                    var strArr = data.replace(/\,/g, '').split('|');
                    var issue = strArr[0], number = strArr[1];
                    //判断数据可是否已经存在这条数据
                    $.ajax({
                        type: 'POST',
                        url: '/ssc/queryone',
                        data: {issue: issue},
                        success: function (data) {
                            if (!data.result) {//不存在这条数据,执行插入
                                $.ajax({
                                    type: 'POST',
                                    url: '/ssc/insertone',
                                    data: {issue: issue, number: number},
                                    success: function (data) {
                                        initAllData();
                                        console.log('插入成功啦')
                                    },
                                    error: function () {
                                        alert('插入数据失败啦,赶紧去检查下')
                                    }
                                })
                            } else {
                                console.log('数据库已存在这条数据')
                            }

                        }
                    });
                }
            });
        };

        initAllData();
        insertOneData();
        setInterval(function () {
            insertOneData();
        }, 240000);
    },
    //绑定事件
    bindEvents: function () {
        //点击拿到一条新数据
        $('.btn').on('click', function () {

        })
    },
    //插入一条数据
    insertOne: function () {

    },
    //查询所有数据
    queryAll: function () {

    },
    //公共方法
    common: function () {

    }
};


//实例化一个sscManager对象
var manager = new sscManager();