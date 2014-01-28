var datainfo = {
	caption:"分割布局",
	tab_list: [ {
		num: 1,
		name: "上下分割(js)",
		active: "active",		
		src:
		'<div id="tbSplitter" class="h200">'+
		'  <div id="top"></div>'+
		'  <div id="bottom"></div>'+
		'</div>',
		html:
		'<div class="p5 bd1">'+
		'  <div id="tbSplitter" class="h200">'+
		'	  <div id="top"></div>'+
		'	  <div id="bottom"></div>'+
		'  </div>'+
		'</div>',		
		js:
		'$("#tbSplitter").splitter("create",{'+
		'  type: "h",'+
		'  dock: "top"'+
		'});'
	}, {
		num: 2,
		name: "上下分割(data-api)",
		src:
		'<div id="tbSplitter_api" class="h200" data-type="h" data-dock="top">'+
		'  <div id="left_api"></div>'+
		'  <div id="right_api"></div>'+
		'</div>',
		html:
		'<a class="btn btn-small" data-toggle="splitter" data-target="#tbSplitter_api">创建</a>'+
		'<div id="tbSplitter_api" class="h200" data-type="h" data-dock="top">'+
		'  <div id="left_api"></div>'+
		'  <div id="right_api"></div>'+
		'</div>'
	}, {
		num: 3,
		name: "左右分割(js)",
		src:
		'<div id="lrSplitter" class="h200">'+
		'  <div id="left"></div>'+
		'  <div id="right"></div>'+
		'</div>',
		html:
		'<div class="p5 bd1">'+
		'  <div id="lrSplitter" class="h200">'+
		'	  <div id="left"></div>'+
		'	  <div id="right"></div>'+
		'  </div>'+
		'</div>',
		js:
		'$("#lrSplitter").splitter("create",{'+
		'  type: "v",'+
		'  dock: "left"'+
		'});'
	}, {
		num: 4,
		name: "左右分割(data-api)",
		src:
		'<div id="lrSplitter_api" class="h200" data-type="v" data-dock="top">'+
		'  <div id="left_api"></div>'+
		'  <div id="right_api"></div>'+
		'</div>',
		html:
		'<a class="btn btn-small" data-toggle="splitter" data-target="#lrSplitter_api">创建</a>'+
		'<div id="lrSplitter_api" class="h200" data-type="v" data-dock="top">'+
		'  <div id="left_api"></div>'+
		'  <div id="right_api"></div>'+
		'</div>'
	}, {
		num:5,
		name: "嵌套分割(js)",
		src:
		'<div id="qtSplitter" class="h200">'+
		'  <div id="qtleft"></div>'+
		'  <div id="qtright" style="border:0">'+
		'    <div id="r1"></div>'+
		'    <div id="r2"></div>'+
		'    </div>'+
		'</div>',
		html:
		'<div class="p5 bd1">'+
		'  <div id="qtSplitter" class="h200">'+
		'	  <div id="qtleft"></div>'+
		'	  <div id="qtright" style="border:0">'+
		'	    <div id="r1"></div>'+
		'	    <div id="r2"></div>'+
		'     </div>'+
		'  </div>'+
		'</div>',
		js:
		'$("#qtSplitter").splitter("create",{'+
		'  type: "v",'+
		'  dock: "left"'+
		'});'+
		'$("#qtright").css({"overflow":"hidden"}).splitter("create",{'+
		'  type: "h",'+
		'  dock: "top"'+
		'});'
	}, {
		num:6,
		name: "嵌套分割(data-api)",
		src:
		'<div id="qtSplitter_api" class="h200" class="h200" data-type="h" data-dock="top">'+
		'  <div id="qtleft_api"></div>'+
		'  <div id="qtright_api" style="border:0" data-type="v" data-dock="top">'+
		'    <div id="r1_api"></div>'+
		'    <div id="r2_api"></div>'+
		'    </div>'+
		'</div>',
		html:
		'<a class="btn btn-small" data-toggle="splitter" data-target="[qt_api]">创建</a>'+
		'<div id="qtSplitter_api" class="h200" class="h200" qt_api data-type="h" data-dock="top">'+
		'  <div id="qtleft_api"></div>'+
		'  <div id="qtright_api" style="border:0" qt_api data-type="v" data-dock="top">'+
		'    <div id="r1_api"></div>'+
		'    <div id="r2_api"></div>'+
		'    </div>'+
		'</div>'
	}]
}

exports.data = datainfo;