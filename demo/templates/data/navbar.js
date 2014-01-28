var datainfo = {
	caption:"导航Bar",
	tab_list: [{
		num: 1,
		name: "不带图标",
		active: "active",	
		src:
		'<ul class="nav nav-pills nav-stacked">'+
		'  <li class="active">'+
		'    <a href="#">栏目一</a>'+
		'  </li>'+
		'  <li><a href="#">栏目二</a></li>'+
		'  <li><a href="#">栏目三</a></li>'+
		'</ul>'
	}, {
		num: 2,
		name: "带图标",
		src:
		'<ul class="nav nav-pills nav-stacked">'+
		'  <li class="active">'+
		'    <a href="#">栏目一<i class="icon-chevron-right fr"></i></a>'+
		'  </li>'+
		'  <li><a href="#">栏目二<i class="icon-chevron-right fr"></i></a></li>'+
		'  <li><a href="#">栏目三<i class="icon-chevron-right fr"></i></a></li>'+
		'</ul>'
	}, {
		num: 3,
		name: "不带图标(js)",
		src:
		'<div id="noicon"></div>	',
		js:
		'$("#noicon").bind("created", function (ev) {});'+
		'$("#noicon").navbar({'+
		'	items:['+
		' 		{text:"栏目一",img:"url",url:"",key:"code",active:1},'+
		'		{text:"栏目二",img:"url",url:"",key:"code"}'+
		'		{text:"栏目三",img:"url",url:"",key:"code"}'+
		'	]'+
		'});'
	}, {
		num: 3,
		name: "图标(js)",
		src:
		'<div id="noicon"></div>	',
		js:
		'$("#noicon").bind("created", function (ev) {});'+
		'$("#noicon").navbar({'+
		'	items:['+
		' 		{text:"栏目一",img:"url",url:"",key:"code",active:1},'+
		'		{text:"栏目二",img:"url",url:"",key:"code"}'+
		'		{text:"栏目三",img:"url",url:"",key:"code"}'+
		'	]'+
		'});'
	}]
}

exports.data = datainfo;