var datainfo = {
	caption:"输入框(input)",
	tab_list: [{
		num: 1,
		name: "输入框",
		active: "active",	
		src:
		'<input class="span4" type="text" id="inputEmail" placeholder="登录用户">'
	},{
		num: 2,
		name: "输入框(后缀)",
		src:
		'<div class="input-append">'+
		'	<input class="span6" id="prependedInput" type="text" placeholder="Username">'+
		'	<span class="add-on"><button class="btn"><i class="icon-th"></i></button></span>'+
		'	<span class="add-on"><button class="btn disabled"><i class="icon-th"></i></button></span>'+
		'	<span class="add-on"><button class="btn"><i class="icon-time"></i></button></span>'+
		'	<span class="add-on" style="border-right:1px solid #9f9f9f"><button class="btn disabled"><i class="icon-chevron-down"></i></button></span>'+
		'</div>'
	},{
		num: 3,
		name: "输入框(前缀)",
		src:
		'<div class="input-prepend">'+
		'	<span class="add-on"><button class="btn"><i class="icon-th"></i></button></span>'+
		'	<span class="add-on"><button class="btn disabled"><i class="icon-th"></i></button></span>'+
		'	<span class="add-on"><button class="btn"><i class="icon-fullscreen"></i></button></span>'+
		'	<span class="add-on"><button class="btn disabled"><i class="icon-chevron-down"></i></button></span>'+
		'	<input class="span6" id="prependedInput" type="text" placeholder="Username">'+
		'</div>'
	},{
		num: 4,
		name: "输入框(齐排)",
		src:
		'<input class="span2" type="text" id="inputEmail" placeholder="登录用户">											'+
		'<div class="input-append">'+
		'	<input class="span6" id="prependedInput" type="text" placeholder="Username">'+
		'	<span class="add-on"><button class="btn"><i class="icon-th"></i></button></span>'+
		'	<span class="add-on"><button class="btn disabled"><i class="icon-th"></i></button></span>'+
		'	<span class="add-on"><button class="btn"><i class="icon-time"></i></button></span>'+
		'	<span class="add-on" style="border-right:1px solid #9f9f9f"><button class="btn disabled"><i class="icon-chevron-down"></i></button></span>'+
		'</div>'+
		'<div class="ml10 input-prepend">'+
		'	<span class="add-on"><button class="btn"><i class="icon-th"></i></button></span>'+
		'	<span class="add-on"><button class="btn disabled"><i class="icon-th"></i></button></span>'+
		'	<span class="add-on"><button class="btn"><i class="icon-fullscreen"></i></button></span>'+
		'	<span class="add-on"><button class="btn disabled"><i class="icon-chevron-down"></i></button></span>'+
		'	<input class="span6" id="prependedInput" type="text" placeholder="Username">'+
		'</div>',
		todo:
		'1、合适的控制每个输入框的宽度'
	}]
}

exports.data = datainfo;