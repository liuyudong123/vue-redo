# vue-redo

vue实现业务逻辑的回滚、重做功能

# 使用

1、引入文件
```html
<script type="text/javascript" src="js/record.js"></script>
```

2、修改属性值时记录
```js
del(item){
	var _this=this;
	// 记录开始
	record.start(_this);
	// 修改了一个属性
	item.is_delete=1;
	// 记录结束
	record.end(_this);
}
```

3、监听按键
```js
$(window).keydown(function(e){
    var keyCode=e.keyCode;
    // 89 y 前进
    if(keyCode==89&&e.ctrlKey){
        record.undo(_this);
    }
    // 90 z 后退
    if(keyCode==90&&e.ctrlKey){
        record.redo(_this);
    }
})
```

# API

## Attribute

`history_count` 可撤销步数

## Methods

`start(vue实列)` 开始记录，缓存变化前的数据

`end(vue实列)` 结束记录，保存变化前的数据后变化后的数据

`redo(vue实列)` 撤销ctrl+z时使用，从记录中取出记录替换数据

`undo(vue实列)` 恢复ctrl+y时使用，从记录中取出记录替换数据
