/**
 * Created by huangjin on 2017/6/23.
 */
$(function () {
    //页面初始化,渲染课程列表
    $('#loadingWrapper').show();
    $.ajax({
        type: 'POST',
        url: baseUrl + '/admin/mycourses/list',
        dataType: 'json',
        success: function (res) {
            var getData = res.data;
            if (res.data.length == 0) {
                $('.h-empty').show();
                //隐藏模态框
                $('#loadingWrapper').hide();
                return false;
            }
            var html;
            for (var i = 0; i < getData.length; i++) {
                var one = getData[i];
                var classTypeStatus,buttonText;
                var rate = (one.studiedItem) / (one.totalItem);
                var completeRate = Math.floor(rate * 100) + '%';
                //判断学习状态
                if(rate=='1'){
                    buttonText = '已结课';
                }else{
                    if(rate==0){
                        buttonText = '开始学习';
                    }else{
                        buttonText = '继续学习';
                    }
                };
                //判断课程类型
                one.type==1?classTypeStatus = 'blueBg':classTypeStatus = 'orangeBg';
                //拼接
                html += `
                    <li class='oneItem'>
                        <div class="avatorMsg">
                            <img src="${one.imgCoverUrl}" alt="头像">
                            <span class='h-className'>${one.className}</span>
                            <i class="h-status ${classTypeStatus}"></i>
                        </div>
                        <div class="courseMsg">
                            <div class='courseTime'>
                                有效期截止至 <span>${one.validityDate}</span>
                            </div>
                            <div class="progressBar">
                                <span class='h-progress normalProgress' style="width:${completeRate}"></span>
                            </div>
                            <div class='studyProgress '>
                                <div class="h-left fl">
                                    <i class='iconfont icon-wancheng'></i>
                                    <span>已学${one.studiedItem}次课</span>
                                </div>
                                <div class="h-right fr">
                                    <i class='iconfont icon-shijian'></i>
                                    <span class='fr'>共${one.totalItem}次课</span>
                                </div>
                            </div>
                            <button class="btnWithRedFont" data-classId="${one.id}" data-classType="${one.type}">${buttonText}</button>
                        </div>
                    </li>
                    `
            };
            //填充数据
            $('#CourseList').html(html);
            //隐藏模态框
            $('#loadingWrapper').hide();
        },
        error: function () {
            alert("获取列表数据失败");
        }
    });
    //点击按钮,进入课程详情
    $('#CourseList').on('click', '.btnWithRedFont', function () {
        var getCourseId = $(this).attr('data-classId');
        var getClassType = $(this).attr('data-classType');
        //保存班级编码到localstorage
        localStorage.setItem('courseId',getCourseId);
        localStorage.setItem('ClassType',getClassType);
        window.location.href = baseUrl + '/admin/mycourses/toInfo ?id=' + getCourseId;
    });
})