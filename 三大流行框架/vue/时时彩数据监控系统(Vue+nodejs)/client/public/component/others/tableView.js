/**
 * Created by huangjin on 2017/3/31.
 */
;
(function (Vue) {
    // 注册
    Vue.component('table-view', {
        template: `<div id="main" style="width: 100%;height:650px;">
        </div>`,
        data: function () {
            return {
                qishu:[],//保存需要展示的数据
                haoma:[]
            }
        },
        mounted: function () {
            let that = this;
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'));


            that.$http.get('/ssc/queryall').then((response) => {
                //5条数据为一小组,5小组为一大组
                //每次只取数组前25条数据
                let showData = response.data.result.reverse().slice(0,59).reverse();
                that.qishu = [];
                that.haoma=[];
                for(let i = 0;i<showData.length;i++){
                    that.qishu.push(showData[i].qishu);
                    that.haoma.push(showData[i].haoma);
                };
                // echarts(this.qishu,this.haoma);
                console.log(that.qishu);
                console.log(that.haoma);

                option = {
                    title: {
                        text: '多期号码展示'
                    },
                    legend: {
                        data: ['号码'],
                        align: 'left'
                    },
                    toolbox: {
                        // y: 'bottom',
                        feature: {
                            magicType: {
                                type: ['stack', 'tiled']
                            },
                            dataView: {},
                            saveAsImage: {
                                pixelRatio: 2
                            }
                        }
                    },
                    tooltip: {},
                    xAxis: {
                        data: that.qishu,
                        silent: false,
                        splitLine: {
                            show: false
                        },
                        axisLabel:{
                            rotate:45,//倾斜度 -90 至 90 默认为0
                        }
                    },
                    yAxis: {
                    },
                    series: [{
                        name: '号码',
                        type: 'bar',
                        data: that.haoma,
                        animationDelay: function (idx) {
                            return idx * 10;
                        }
                    }],
                    animationEasing: 'elasticOut',
                    animationDelayUpdate: function (idx) {
                        return idx * 5;
                    }
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);


            }, (response) => {
                // 响应错误回调
                alert('获取所有数据失败^_^');
            });


        },
        methods: {}
    })
})(Vue);