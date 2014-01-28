var datainfo = {
	caption:"标签(Tab)",
	tab_list: [{
		num: 1,
		name: "普通标签",
		active: "active",	
		src:
		'<ul class="nav nav-tabs" id="g_Tab">'+
		'  <li class="active"><a href="#gtab1" data-toggle="tab">页面框架1</a></li>'+
		'  <li><a href="#gtab2" data-toggle="tab">输入框1</a></li>'+
		'  <li><a href="#gtab3" data-toggle="tab">弹出框1</a></li>'+
		'</ul>'+
		'<div class="tab-content">'+
		'  <div class="tab-pane" id="gtab1">页面框架1</div>'+
		'  <div class="tab-pane" id="gtab2">输入框1</div>'+
		'  <div class="tab-pane" id="gtab3">弹出框1</div>'+
		'</div>'
	}, {
		num: 2,
		name: "创建标签",
		src:
		'<ul class="nav nav-tabs" id="c_Tab">'+
		'  <li class="active"><a href="#ctab1" data-toggle="tab">页面框架2</a></li>'+
		'  <li><a href="#ctab2" data-toggle="tab">输入框2</a></li>'+
		'  <li><a href="#ctab3" data-toggle="tab">弹出框2</a></li>'+
		'</ul>'+
		'<div class="tab-content">'+
		'  <div class="tab-pane" id="ctab1">页面框架2</div>'+
		'  <div class="tab-pane" id="ctab2">输入框2</div>'+
		'  <div class="tab-pane" id="ctab3">弹出框2</div>'+
		'</div>',
		js:
		'$("#c_Tab").tab({name:"create",info:"新建Tab1"});'
	}, {
		num: 3,
		name: "删除标签",
		src:
		'<ul class="nav nav-tabs" id="d_Tab">'+
		'  <li class="active"><a href="#dtab1" data-toggle="tab">页面框架3</a></li>'+
		'  <li><a href="#dtab2" data-toggle="tab">输入框3</a></li>'+
		'  <li><a href="#dtab3" data-toggle="tab">弹出框3</a></li>'+
		'</ul>'+
		'<div class="tab-content">'+
		'  <div class="tab-pane" id="dtab1">页面框架3</div>'+
		'  <div class="tab-pane" id="dtab2">输入框3</div>'+
		'  <div class="tab-pane" id="dtab3">弹出框3</div>'+
		'</div>',
		js:
		'$("#d_Tab>li>a:last").tab("remove");'
	}]
}

exports.data = datainfo;