# 油猴脚本 - 显示密码
双击显示密码,失去焦点隐藏

## 20201022
更新,用 MutationObserver 监听每次 dom 变化并添加显示密码的事件,理论上可以支持任何网站(百度除外,把 MutationObserver 覆盖为 null 了)
