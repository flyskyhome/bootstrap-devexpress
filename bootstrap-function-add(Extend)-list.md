新增或扩展功能列表
====================
新增用"+"标识,扩展用"*"标识

###功能列表
#### 一、Tab (js插件:标签页)
1.创建一个Tab页 (create) (+)
```javascript
$(sSign).tab('create',options)
```
2.移除某一Tab页 (remove) (+)
```javasctipt
$(sSign).tab("remove");
```
###### Bootstrap-Tab:Api
>[Bootstrap Tab Class](https://github.com/flyskyhome/bootstrap-devexpress/blob/master/apidocs/classes/Tab.html "Bootstrap Tab Class信息")

###### Bootstrap-Tab:Demo 
>[Bootstrap Tab Demo](https://github.com/flyskyhome/bootstrap-devexpress/blob/master/demo/tab.html "Bootstrap Tab Demo")  
#### 二、Modal(js插件:模态窗口)
1.扩展options参数 (*)

	content string	模态框内显示的文本内容
	frame	string	嵌入模态框内的页面地址
	height	string	模态框内容显示高度
	width	string	模态框显示宽度
###### Bootstrap-Modal:Api
>[Bootstrap Modal Class](https://github.com/flyskyhome/bootstrap-devexpress/blob/master/apidocs/classes/Modal.html "Bootstrap Modal Class信息")

###### Bootstrap-Modal:Demo 
>[Bootstrap Modal Demo](https://github.com/flyskyhome/bootstrap-devexpress/blob/master/demo/modal.html "Bootstrap Modal Demo")  
#### 三、NavBar(js插件:导航条) (+)
##### 方法
1.创建导航条
```javascript
//推荐
$(sSign).navbar({
   items:[{
       text:"我的桌面",
       imgurl:"../Resources/Images/menu/menu_desk.png",
       key:"desktop"
   }],
   remote:{
       url:"../FGQTest/ajax/contentProvide.aspx",
       param:{type:"GetModuleInfo"},
       callback:_initMenuState
});
//空列表
$(sSign).navbar("create");
```
2.激活某个导航栏
```javasctipt
$(sSign).navbar("active");
```
##### 事件(Event)
1.created 导航条创建完毕时激发
```javasctipt
$(sSign).on('created', function (ev){});
$(sSign).delegate('>div','created', function (ev){console.log(ev.log)});
```
###### Bootstrap-Navbar:Api
>[Bootstrap Navbar Class](https://github.com/flyskyhome/bootstrap-devexpress/blob/master/apidocs/classes/NavBar.html "Bootstrap Navbar Class信息")

###### Bootstrap-Navbar:Demo 
>[Bootstrap Navbar Demo](https://github.com/flyskyhome/bootstrap-devexpress/blob/master/demo/navbar.html "Bootstrap Navbar Demo")
#### 四、Splitter(js插件:区域分割) (+)
###### 方法(Methods)
1.创建 (create)
```javascript
//创建一个缺省配置的垂直分割框架 
$('#MySplitter').splitter();
//创建一个水平分割框架
$('#MySplitter').splitter({type: 'h'});
```

##### 事件(Event)
1.onresize
```javascript
$(sSign).on('onresize', function (ev){});
```
###### Bootstrap-Splitter:Api
>[Bootstrap Splitter Class](https://github.com/flyskyhome/bootstrap-devexpress/blob/master/apidocs/classes/Splitter.html "Bootstrap Splitter Class信息")

###### Bootstrap-Splitter:Demo 
>[Bootstrap Splitter Demo](https://github.com/flyskyhome/bootstrap-devexpress/blob/master/demo/splitter_frame.html "Bootstrap Splitter Demo")
#### 五、Datepicker(js插件:日期选择) (+)
###### 方法(Methods)
1.创建 (create)
```javascript
//创建一个缺省配置的垂直分割框架 
$('#MyDatepicker').datepicker("create");
//创建一个水平分割框架
$('#MyDatepicker').datepicker("create",{lunar:{create:1}});
```

######  Bootstrap-Datepicker:Api
>[Bootstrap Datepicker Class](https://github.com/flyskyhome/bootstrap-devexpress/blob/master/apidocs/classes/Datepicker.html "Bootstrap Datepicker Class信息")

######  Bootstrap-Datepicker:Demo 
>[Bootstrap Datepicker Demo](https://github.com/flyskyhome/bootstrap-devexpress/blob/master/demo/datepicker.html "Bootstrap Datepicker Demo")