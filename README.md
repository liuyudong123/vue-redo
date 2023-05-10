# vue-redo

vue实现业务逻辑的回滚、重做功能

# 使用

`<script type="text/javascript" src="js/record.js"></script>`

# API

*history_count* 可撤销步数

*start(vue实列)* 开始记录，缓存变化前的数据

*end(vue实列)* 结束记录，保存变化前的数据后变化后的数据

*redo(vue实列)* 撤销ctrl+z时使用，从记录中取出记录替换数据

*undo(vue实列)* 恢复ctrl+y时使用，从记录中取出记录替换数据
