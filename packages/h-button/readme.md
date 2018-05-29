## 按钮组件

### 1. 使用方法
<code>
   npm install h-button
</code>

### 2. API说明
属性 | 说明 | 类型 | 默认值
:-: | :-: | :-: | :-: |
ghost | 幽灵属性，使按钮背景透明，版本 2.7 中增加 | boolean | false  
href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | -
htmlType | 设置 button 原生的 type 值 | string | button
icon | 设置按钮的图标类型 | string | -
loading | 设置按钮载入状态 | boolean | { delay: number } | false
disabled | 按钮失效状态 | boolean | false
shape | 设置按钮形状，可选值为 circle 或者不设 | string | -
size | 设置按钮大小，可选值为 small large 或者不设 | string | default
target | 相当于 a 链接的 target 属性，href 存在时生效 | string | -
type | 设置按钮类型，可选值为 primary dashed danger(版本 2.7 中增加) 或者不设 | string | -
onClick | click 事件的 handler | function | -

