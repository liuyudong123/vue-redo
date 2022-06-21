# vue_redo
vue实现业务逻辑的回滚、重做功能

1、vue实列
建一个vue实列，然后在methods中加入两个关键方法，system_record_start，system_record_end；
system_record_start 在数据可能变动前执行；
system_record_end 在数据变动后执行；

2、撤销对象
只需要改动record对象的stack_count参数为自己需要的值即可，默认20步；

3、键盘监控
在文档底部加入了keydown事件监控，其中放入ctrl+z和ctrl+y的逻辑及处理代码即可；

4、投入使用
在vue实列中有一个del方法，del方法演示了system_record_start和system_record_end的使用；
