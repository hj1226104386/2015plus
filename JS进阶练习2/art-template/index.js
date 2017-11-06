var tpl = `{{if isAdmin}}
<ul>
     {{each list val i}}
         <li>{{i}}:{{val}}</li>
     {{/each}}
     </ul>
     {{else}}
     <p>我不是管理员</p>
{{/if}}`;
var data = {
    list: ["第一个元素", "第二个元素"],
    isAdmin: true
};
var render = template.compile(tpl);
var html = render(data);
//var html = template(tpl, data);
document.getElementById("content").innerHTML = html;