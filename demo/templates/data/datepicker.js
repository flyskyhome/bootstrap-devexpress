var datainfo = {
	caption:"日期选择控件(Datepicker)",
	tab_list: [{
		num: 1,
		name: "默认",
		active: "active",	
		src:
		'<input class="input-small" type="text" id="dpDefault" placeholder="输入日期">',
		js:'$("#dpDefault").datepicker("create")'
	},{
		num: 2,
		name: "右侧显示",
		src:
		'<input class="input-small mt100" type="text" id="dpRight" placeholder="输入日期">',
		js:'$("#dpRight").datepicker("create",{placement:"right"})'
	},{
		num: 3,
		name: "右侧显示(data-api)",
		src:
		'<a class="btn btn-small" data-toggle="datepicker" data-target="#dpRight02">创建</a>'+
		"<input class='input-small mt100' type='text' id='dpRight02' placeholder='输入日期' data-placement='right'>"
	},{
		num: 4,
		name: "显示农历",
		src:
		'<input class="input-small" type="text" id="dpLunar01" placeholder="输入日期">',
		js:'$("#dpLunar01").datepicker("create",{lunar:{enable:1}})'
	},{
		num: 5,
		name: "显示农历(data-api)",
		src:
		'<a class="btn btn-small" data-toggle="datepicker" data-target="#dpLunar03">创建</a><br/>'+
		"<input class='input-small' type='text' id='dpLunar03' placeholder='输入日期' data-lunar='{\"enable\":1}'>",
		note:"1、特别注意一下那个data-lunar 的引号顺序 外层单引号,属性双引号"
	},{
		num: 6,
		name: "显示农历(全月份)",
		src:
		'<input class="input-small" type="text" id="dpLunar02" placeholder="输入日期">',
		js:'$("#dpLunar02").datepicker("create",{lunar:{enable:1,showmon:1}})'
	},{
		num: 7,
		name: "显示节假日",
		src:
		'<input class="input-small" type="text" id="dpHoliday01" placeholder="输入日期">',
		js:'$("#dpHoliday01").datepicker("create",{holiday:{enable:1}})'
	},{
		num: 8,
		name: "定制节假日",
		src:
		'<input class="input-small" type="text" id="dpHoliday02" placeholder="输入日期">',
		js:'$("#dpHoliday02").datepicker("create",{holiday:{enable:1,lh:["0218 农历测试"],gh:["0218 阳历测试"]}})'
	}
	]
}

exports.data = datainfo;