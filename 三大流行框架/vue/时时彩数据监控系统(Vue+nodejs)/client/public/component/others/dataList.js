/**
 * Created by huangjin on 2017/3/31.
 */
;
(function (Vue) {
    // 注册
    Vue.component('data-list', {
        template: `<div>
                     <h3 class="sub-header">数据列表</h3>
                     <div class="table-responsive">
                         <table class="table table-striped">
                             <thead>
                             <tr>
                                 <th>序号</th>
                                 <th>期数</th>
                                 <th>号码</th>
                                 <th>操作</th>
                             </tr>
                             </thead>
                             <tbody>
                               <tr class="dataList" v-for="(one,index) in allData" >
                                 <td>{{index+1}}</td>
                                 <td>{{one.qishu}}</td>
                                 <td>
                                    <span>{{one.haoma | qishuNum(0)}}</span>
                                    <span>{{one.haoma | qishuNum(1)}}</span>
                                    <span>{{one.haoma | qishuNum(2)}}</span>
                                    <span>{{one.haoma | qishuNum(3)}}</span>
                                    <span>{{one.haoma | qishuNum(4)}}</span>
                                 </td>
                                 <td>
                                     <button class="btn btn-success" @click="deleteOne(index,one)">删除</button>
                                 </td>
                               </tr>
                             </tbody>
                         </table>
                     </div>
                    </div>`,
        data: function () {
            return {
                allData:''//保存查询到的所有数据
            }
        },
        filters: {
            qishuNum:function (value,ind) {
                return value.charAt(ind);
            }
        },
        beforeCreate:function () {
            var that = this;
            //初始化查询所有数据
            var initAllData = function () {
                that.$http.get('/ssc/queryall').then((response) => {
                    // 响应成功回调
                    that.allData = response.data.result.reverse();
                }, (response) => {
                    // 响应错误回调
                    alert('获取所有数据失败^_^');
                });
            };
            //查询插入数据操作
            var insertOneData = function (){
                that.$http.get('/queryone').then((response) => {
                    // 响应成功回调
                    var strArr = response.body.replace(/\,/g, '').split('|');
                    var issue = strArr[0], number = strArr[1];
                    that.$http.post('/ssc/queryone',{issue: issue}).then((response) => {
                        if (!response.body.result){//不存在这条数据,执行插入
                            that.$http.post('/ssc/insertone', {issue: issue, number: number}).then((response) => {
                                initAllData();
                                console.log('插入成功啦')
                            }, (response) => {
                                alert('插入数据失败啦,赶紧去检查下')
                            });
                        }else{
                            console.log('数据库已存在这条数据');
                        }

                    });

                });
            };

            initAllData();
            insertOneData();
            setInterval(function () {
                insertOneData();
            }, 240000);

        },
        methods: {
            deleteOne:function (index,one) {
                this.allData.splice(index,1);
                //发送请求删除一条数据;
                this.$http.delete('/ssc/deleteone/'+one._id+'').then((response) => {
                    // 响应成功回调
                    alert('删除成功');
                }, (response) => {
                    alert('删除失败,请检查网络!')
                });

            }
        }
    })
})(Vue);