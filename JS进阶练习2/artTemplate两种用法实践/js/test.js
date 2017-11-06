/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/9/7
 */
var tpl = `
    <h3>{{title}}</h3>
    <ul>
    {{if datas.length>0}}
        {{each datas value i}}
            <li>游戏{{i+1}}：{{value}}</li>
         {{/each}}
     {{/if}}   
`;

var data = {
    datas:['英雄联盟','剑灵','使命召唤','魔兽'],
    title:'游戏集合'
};

var render = template.compile(tpl);
var html = render(data);
document.getElementById('box').innerHTML = html;
