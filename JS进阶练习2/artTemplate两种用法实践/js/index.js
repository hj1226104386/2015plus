/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/9/7
 */

//添加配置
require.config({
    paths:{
        artTemplate:'../lib/template-web',
        jquery:'../lib/jquery.min',
    },
    /*shim:{
        artTemplate:{
            export:'art'
        }
    }*/
})
//引入依赖
require(['artTemplate','jquery'],function (template,$) {
    var tpl = `{{if isAdmin}}
                     <ul>
                    {{each list val i}}
                        <li>{{i}}:{{val}}</li>
                    {{/each}}
                    </ul>
                {{/if}}
        `;
    var data = {
        list: ["第一个元素", "第二个元素", "第三个元素"],
        isAdmin: true
    };
    var render = template.compile(tpl);
    var html = render(data);
    $('#box').html(html);
})




