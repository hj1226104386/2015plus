var tpl = `{{if isAdmin}}
<ul>
     {{each list val i}}
         <li>{{i}}:{{val}}</li>
     {{/each}}
     </ul>
     {{else}}
     <p>我不是管理员</p>
{{/if}}`