/**
 * Created by huangjin on 2017/6/24.
 * CourseDetail：课程详情构造函数
 * constructor：指向构造函数本身
 * init:初始化
 * renderDOM：页面初始化
 * bindEvents:事件绑定
 */
function CourseDetail() {
    this.init();
};
//构造函数+原型 继承
CourseDetail.prototype = {
    constructor: CourseDetail,
    init: function () {
        this.renderDOM();
        this.bindEvents();
    },
    publicProps:{
        ClassType:''//课程类型（直播、录播）
    },
    //公共变量
    publicProps:{
        wareItemId:'',//回放项的id
    },
    //页面加载时渲染
    renderDOM: function () {
        //loading加载
        // $('#loadingWrapper').show();
        this.initData();
    },
    //事件绑定
    bindEvents: function () {
        //tab切换
        this.tabSwitch();
        //下载课程文件
        this.downLoadFile();
        //录播点击学习跳转到视频播放
        this.toWatchvideo();
        //点击回放弹出回放列表模态框
        this.goBackToWatch();
        //点击进入直播间
        this.intoBroadcast();
        //点击回放列表视频，跳到视频播放页
        this.turnToWatch();
    },
    tabSwitch:function () {
        $('.tabs').on('click', 'li', function () {
            var getInd = $(this).index();
            $(this).siblings('li').removeClass('activeTab');
            $(this).addClass('activeTab');
            $('.tabPanes').children('li').addClass('hide');
            $('.tabPanes').children('li').eq(getInd).removeClass();
        });
    },
    initData:function () {
        var that = this;
        //获取班级编码
        var localCorseId =localStorage.getItem('courseId');
        var localClassType =localStorage.getItem('ClassType');
        this.publicProps.ClassType = localClassType;
        //基本信息
        $.get(baseUrl +'/admin/mycourses/info',{id:localCorseId},function (res) {
            if(res.status==1){
                var data = res.data;
                var classTypeStatus;
                $('.h-imgCover').prop('src',data.imgCoverUrl);
                $('.courseDetailTitle').text(data.className);
                $('.h-classCode').text('班级编码：'+data.classCode);
                $('.h-classTeacher').text('授课教师：'+data.nickName);
                $('.h-courseTime').text('上课时间：'+data.beginDate+' '+data.endDate);
                $('.h-endTime').text('有效期截止至：'+data.validityDate);
                $('.h-studiedItem').text('已学'+data.studiedItem+'次课');
                $('.h-totalItem').text('共'+data.totalItem+'次课');
                //保存当前课程的截止最后日期
                localStorage.setItem('endTimeDate',data.validityDate);
                //模态框中信息
                $('.videoTitle').text(data.className);
                $('.videoTime').text('直播时间：'+data.beginDate);
                //判断课程类型
                data.type==1?classTypeStatus = 'blueBg':classTypeStatus = 'orangeBg';
                $('.h-status').addClass(classTypeStatus);
                //计算进度条进度
                var progressBarStyle,html;
                var rate = (data.studiedItem) / (data.totalItem);
                var completeRate = Math.floor(rate * 100) + '%';
                if(rate=='1'){
                    progressBarStyle = 'grayProgress';
                }else{
                    progressBarStyle = 'normalProgress';
                };
                html = `
                    <span class='h-progress ${progressBarStyle}' style='width:${completeRate}'></span>
                `;
                $('.progressBar').html(html);
                //课程详情填充
                var content = `
                    <li>班级编码：<span>${data.classCode}</span></li>
                    <li>授课教师：<span>${data.nickName}</span></li>
                    <li>课次：<span>${data.totalItem}</span></li>
                    <li>上课时间：<span>${data.beginDate}-${data.endDate}</span></li>
                    <li>有效期截止至：<span>${data.validityDate}</span></li>
                `;
                $('.h-detailList').html(content);
                $('.h-applyCrowd').html(that.newLine(data.applyCrowd));
                $('.h-description').html(that.newLine(data.objective));
                $('.h-objective').html(that.newLine(data.description));
                //教师介绍部分填充
                $('.h-teacherName').find('span').html(that.newLine(data.teacher.name));
                $('.h-school').find('span').html(that.newLine(data.teacher.academies));
                $('.h-awards').html(that.newLine(data.teacher.awards));
                $('.h-breifIntro').html(that.newLine(data.teacher.summary));
                $('.h-detailedIntro').html(that.newLine(data.teacher.details));
            }else{
                alert('获取课程基本数据失败');
            };
        });
        //课程表
        $.get(baseUrl +'/admin/mycourses/timetable',{id:localCorseId},function (res) {
            if(res.status==1){
                var data = res.data;
                var html = '';
                    $.each(data,function (i,v) {
                        var getTime = v.startTime.toString();
                        var hour = getTime.slice(-4,-2);
                        var minutes = getTime.slice(-2);
                        var btnStyle,btnText;
                        if(localClassType==1) {//录播
                            btnText = "学习";
                            v.isStart==0?btnStyle = 'btnWithGrayFont':btnStyle = 'btnWithRedFont h-toWatchVideo';
                        }else{//直播
                            if(v.isStart==0){//未开始
                                btnText = "未开始";
                                btnStyle = 'btnWithGrayFont';
                            }else{//已开始
                                if(v.status==3){//直播结束了
                                    //判断视频是否已同步（1:已同步，2:未同步）
                                    if(v.hasSyncCourseware==0){
                                        btnStyle = 'btnWithGrayFont';
                                        btnText = "直播已结束";
                                    }else{
                                        btnStyle = 'btnWithRedFont h-backToWatch';
                                        btnText = "回放";
                                    }
                                }else{//上课中
                                    btnText = "进入直播";
                                    btnStyle = 'btnWithRedFont h-intoBroadcast';
                                }
                            }
                        }
                        html+=`
                        <li>
                            <div class='fl courseInd'>${i+1}</div>
                            <span class='fl courseName'>${v.name}</span>
                            <span class='fl courseTime'>上课时间：${v.startDate} ${hour}:${minutes}</span>
                            <div class="startStudy fl">
                                <button class='${btnStyle}' data-id="${v.id}" data-videoKey="${v.videoKey}" data-roomId="${v.roomId}">${btnText}</button>
                            </div>
                        </li>
                    `;
                    });
                    $('.h-scheduleList').html(html);
            }else{
                alert('获取课程表数据失败');
            };
        });
        //课程资料
        $.get(baseUrl +'/admin/mycourses/datum',{id:localCorseId},function (res) {
            if(res.status==1){
                var data = res.data;
                var html = '';
                $.each(data,function (i,v) {
                    html+=`
                        <li>
                            <div class='fl courseInd'>${i+1}</div>
                            <span class='fl courseName fileName'>${v.fileName}</span>
                            <div class="startStudy fr">
                                <button class='btnWithRedFont h-downLoad' data-ext="${v.ext}" data-fileFullPath="${v.fileFullPath}" data-fileName="${v.fileName}">下载</button>
                            </div>
                        </li>
                    `;
                });
                $('.h-courseData').html(html);

            }else{
                alert('获取课程资料数据失败');
       };
        });

    },
    downLoadFile:function () {
        $('.h-courseData').on('click','button.h-downLoad',function () {
            var $this = $(this);
            var getExt = $this.attr('data-ext');
            var getFileFullPath= $this.attr('data-fileFullPath');
            var getFileName = $this.attr('data-fileName');
            window.open(baseUrl+'/admin/mycourses/toFileUrl?ext='+getExt+'&fileFullPath='+getFileFullPath+'&fileName='+getFileName);
        });
    },
    toWatchvideo:function () {
        $('.h-scheduleList').on('click','button.h-toWatchVideo',function () {
            var $this = $(this);
            var getCourseId = $this.attr('data-id');
            var getVideoKey = $this.attr('data-videoKey');
            window.location.href = baseUrl+"/admin/mycourses/toLearning?id="+getCourseId+"&videoKey="+getVideoKey;
            //保存当前视频的videoKey和id
            localStorage.setItem('currentVideoKey',getVideoKey);
            localStorage.setItem('currentVideoId',getCourseId);
        });
    },
    goBackToWatch:function () {
        var that = this;
        $('.h-scheduleList').on('click','button.h-backToWatch',function () {
            var $this = $(this);
            var getRoomId = $this.attr('data-roomId');
            //保存回放项id
            that.publicProps.wareItemId = $this.attr('data-id');
            $.get(baseUrl+'/admin/mycourses/courseware',{roomId:getRoomId},function (res) {
                var html = '';
                $.each(res.data,function (i,v) {
                    html+=`
                        <li class='h-turnToWatch' data-wareId="${v.wareId}" data-id="${v.id}">
                            <i>${i+1}</i>
                            <a href="javascript:;">${v.subject}</a>
                        </li>
                    `;
                });
                $('.classList').html(html);
                //显示模态框
                $('#myModal').fadeIn();
            });
        });
        //关闭模态框
        $('.h-close').click(function () {
            $('#myModal').fadeOut('slow');
        });
        $('#myModal').click(function () {
            $('#myModal').fadeOut('slow');
        });
        //点击中间内容部分阻止事件冒泡
        $('#VideoList').click(function (e) {
            e.stopPropagation();
        })
    },
    intoBroadcast:function () {
        var that = this;
        $('.h-scheduleList').on('click','button.h-intoBroadcast',function () {
            var $this = $(this);
            var getRoomId = $this.attr('data-roomId');
            //将当前视频的id通过参数传递过去
            var getVideoId = $this.attr('data-id');
            var newWin = window.open(baseUrl+"/admin/mycourses/toDirect?roomId="+getRoomId+"&currentVideoId="+getVideoId);
            that.refreshPage(newWin);
        });
    },
    turnToWatch:function () {
        var that = this;
        $('.classList').on('click','li',function () {
            var getWareId = $(this).attr('data-wareId');
            //将当前视频的id通过参数传递过去
            var getVideoId = $(this).attr('data-id');
            var getWareItemId = that.publicProps.wareItemId;
            var newWin = window.open(baseUrl+"/admin/mycourses/toCourseware?wareId="+getWareId+"&currentVideoId="+getVideoId+"&itemId="+getWareItemId);
            that.refreshPage(newWin);
        })
    },
    /**
     * 工具类
     *newLine:长文本换行，保持格式
     *refreshPage:判断window.open新窗口是否已被关闭,刷新父页面
     */
    newLine:function (text) {
        if(text){
            var newText = text.replace(/\n/g,"<br/>");
            return newText;

        }else{
            return "暂无";
        }
    },
    refreshPage:function (newWin) {
        var timer = setInterval(function() {
            //若子页面关闭，则刷新父页面，清空
            if(newWin.closed) {
                clearInterval(timer);
                window.location.reload();
            }
        }, 1000);
    }


};
var courseDetail = new CourseDetail();