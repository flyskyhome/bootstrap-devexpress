var datainfo = {
	caption:"按钮(button)",
	tab_list: [{
		num: 1,
		name: "按钮",
		active: "active",	
		src:
		'<a class="btn btn-mini w100 m10">mini按钮</a>'+
		'<a class="btn btn-small w100 m10">小按钮</a>'+
		'<a class="btn w100 m10">按钮</a>'+
		'<a class="btn btn-large w100 m10">大按钮</a>'
	},{
		num: 2,
		name: "按钮(带图标)",
		src:
		'<a class="btn btn-mini w100 m10"><i class="icon-user"></i>mini按钮</a>'+
		'<a class="btn btn-small w100 m10"><i class="icon-user"></i>小按钮</a>'+
		'<a class="btn w100 m10">按钮<i class="icon-user"></i></a>'+
		'<a class="btn btn-large w100 m10"><i class="icon-user"></i>大按钮</a>'
	}]
}

exports.data = datainfo;