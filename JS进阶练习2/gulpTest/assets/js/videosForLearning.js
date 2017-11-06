/**
 * @author:huangjin
 * VideoPlaying:视频播放对象构造函数
 * @Date:2017/6/28
 */

function VideoPlaying() {
    this.init();
};
VideoPlaying.prototype = {
    constructor: VideoPlaying,
    init: function () {
        this.renderDOM();
        this.bindEvents();
    },
    renderDOM: function () {
        //加载选中的视频源
        var getCurrentVideoKey = localStorage.getItem('currentVideoKey');
        //初始化videojs
        this.initVideoJs(getCurrentVideoKey);
        //获取当前视频所在课程的id
        var localCorseId = localStorage.getItem('courseId');
        $.get(baseUrl + '/admin/mycourses/timetable', {id: localCorseId}, function (res) {
            var html = "";
            $.each(res.data, function (i, v) {
                var isStart;//判断是否能学习
                v.isStart == 0 ? isStart = "videoBtnGrayBg" : isStart = "videoBtnOrangeBg";
                html += `
                    <li>
                        <span class='fl h-orderNumber'>${i + 1}</span>
                        <div class='courseName fl'>
                            <h6>${v.name}</h6>
                            <span>上课时间：${v.startTimeStr}</span>
                        </div>
                        <div class="h-toStudy fr">
                            <button class="${isStart}" data-id="${v.id}" data-videoKey="${v.videoKey}" data-duration="${v.durationSec}">学习</button>
                        </div>
                    </li>
                `;
            })
            $('.h-videos').html(html);
            //填充视频列表标题信息
            $('.h-totalTimes').text(res.data.length > 0 ? res.data.length : '0');
            $('.h-lastTimePoint').text(localStorage.getItem('endTimeDate'));
            //给列表中当前播放的视频列表添加背景色
            $('.h-videos').find('button[data-videokey="' + getCurrentVideoKey + '"]').parents('li').addClass('videoListBg');
        });
    },
    bindEvents: function () {
        //动态切换可学习视频
        this.changeVideo();
    },
    initVideoJs: function (getCurrentVideoKey) {
        if (!getCurrentVideoKey) {
            //隐藏暂停图标
            $('.vjs-big-play-button').css('display','none!important');
            alert('视频暂未上传，请联系课程老师！');
            return false;
        }
        //动态添加视频源
        $('#VideoMP4').attr('src',baseUrl + '/admin/mycourses/toVideoUrl?videoKey=' + getCurrentVideoKey);
        //执行初始化
        var myPlayer = videojs('MyVideo');
        videojs("MyVideo").ready(function () {
            var myPlayer = this;
            //存放已标识的视频的id
            var maskedVideoIds = [];
            //在timeupdate事件中请求了一次？
            var hasMaskedOnce = false;
            myPlayer.play();
            var duration;
            myPlayer.on('durationchange', function () {
                //计算当前视频的总时长
                duration = myPlayer.duration();
            })
            myPlayer.on('timeupdate', function () {
                //计算播放进度，达到80%则发送标识请求
                var currentTime = myPlayer.currentTime();
                if(duration){
                    var rate = currentTime/duration;
                    if(rate>=0.8){
                        //判断是否已标识过
                        var getThisId = localStorage.getItem('currentVideoId');
                        $.each(maskedVideoIds,function (i,v) {
                            if(v==getThisId){//已标识过
                                return false;
                            }
                        })
                        var params = {};
                        params.classId = localStorage.getItem('courseId');
                        params.itemId = getThisId;
                        //在timeupdate事件中只能标识一次
                        if(!hasMaskedOnce){
                            $.post(baseUrl+"/admin/mycourses/leaningProcess",params,function () {
                                hasMaskedOnce = true;
                            });
                        };
                        //将当前已标识视频id保存，防止重复标识
                        maskedVideoIds.push(params.itemId);

                    }
                }

            })
        });
        //配置
        videojs("MyVideo", {
            autoplay: true,
            bigPlayButton: true,
            textTrackDisplay: false,
            posterImage: false,
            errorDisplay: false,
            control: {
                captionsButton: false,
                chaptersButton: false,
                liveDisplay: false,
                playbackRateMenuButton: false,
                subtitlesButton: false
            }

        }, function () {
            //播放完毕就停止，videojs没有stop方法，使用pause
            this.on('ended', function () {
                this.pause();
            })
        });
    },
    changeVideo: function () {
        var that = this;
        $('.h-videos').on('click', 'button.videoBtnOrangeBg', function () {
            var $this = $(this);
            var getVideoKey = $this.attr('data-videoKey');
            $this.parents('li').addClass('videoListBg').siblings().removeClass('videoListBg');
            //保存当前视频的id，作为播放80%标识请求参数
            localStorage.setItem('currentVideoId',$this.attr('data-id'));
            //动态添加视频源
            var myPlayer = videojs('MyVideo');
            myPlayer.src({
                "type": "video/mp4",
                "src": baseUrl + '/admin/mycourses/toVideoUrl?videoKey=' + getVideoKey
            });
            myPlayer.load();//使video重新加载
            myPlayer.play();
            //动态切换视频源,先判断视频是否存在
            if (!getVideoKey) {
                //动态添加视频源
                alert('视频暂未上传，请联系课程老师！');
            }
        })
    }
};
var videoPlaying = new VideoPlaying();