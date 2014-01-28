var datainfo = {
	caption:"模态窗口(modal window)",
	tab_list: [{
		num: 1,
		name: "嵌入内容(html)",
		active: "active",	
		src:
		'<div id="htmlModal" class="modal hide" tabindex="-1" role="dialog" aria-hidden="true">'+
		'	<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icon-fullscreen"></i></button></div>'+
		'	<div class="modal-body"></div>'+
		'	<div class="modal-footer">'+
		'		<button class="btn btn-small">保存</button>'+
		'		<button class="btn btn-small" data-dismiss="modal" aria-hidden="true">关闭</button>'+
		'	</div>'+
		'</div>',
		js:
		'$("#htmlModal").modal({'+
		'	keyboard: true,'+
		'	backdrop:true,'+
		'	show:true,'+
		'	content:"O(∩_∩)O哈哈哈~",'+
		'	title:"看开点",'+
		'	width:"300px",'+
		'	height:"300px"'+
		'});'
	},{
		num: 2,
		name: "嵌入内容(iframe)",
		src:
		'<div id="ifrmaeModal" class="modal hide" tabindex="-1" role="dialog" aria-hidden="true">'+
		'	<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icon-fullscreen"></i></button></div>'+
		'	<div class="modal-body"></div>'+
		'	<div class="modal-footer">'+
		'		<button class="btn btn-small">保存</button>'+
		'		<button class="btn btn-small" data-dismiss="modal" aria-hidden="true">关闭</button>'+
		'	</div>'+
		'</div>',
		js:
		'$("#ifrmaeModal").modal({'+
		'	keyboard: true,'+
		'	backdrop:true,'+
		'	show:true,'+
		'	title:"凤凰网",'+
		'	frame:"http://www.ifeng.com/",'+
		'	height:"450px",'+
		'	width:"50%"'+
		'})'
	},{
		num: 3,
		name: "事件响应",
		src:
		'<div id="evtModal" class="modal hide" tabindex="-1" role="dialog" aria-hidden="true">'+
		'	<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icon-fullscreen"></i></button></div>'+
		'	<div class="modal-body"></div>'+
		'	<div class="modal-footer">'+
		'		<button class="btn btn-small">保存</button>'+
		'		<button class="btn btn-small" data-dismiss="modal" aria-hidden="true">关闭</button>'+
		'	</div>'+
		'</div>',
		js:
		'// 取消已绑定的show,shown事件，然后再绑定show,shown事件'+
		'$("#evtModal").off("show").off("shown").on("show", function (ev) {'+
		'	alert("show")'+
		'}).on("shown", function (ev) {'+
		'	alert("shown")'+
		'})'+
		'// 创建窗口'+
		'$("#evtModal").modal({'+
		'  keyboard: true,'+
		'  backdrop:true,'+
		'  show:true,'+
		'  title:"凤凰网",'+
		'  frame:"http://www.ifeng.com/",'+
		'  height:"450px",'+
		'  width:"50%"'+
		'});'+
		'// 取消已绑定的hide,hidden事件，然后再绑定hide,hidden事件'+
		'$("#evtModal").off("hide").off("hidden").on("hide", function (ev) {'+
		'	alert("hide")'+
		'}).on("hidden", function (ev) {'+
		'	alert("hidden")'+
		'})'
	},{
		num: 4,
		name: "无底部(footer)",
		src:
		'<div id="noFooterModal" class="modal hide" tabindex="-1" role="dialog" aria-hidden="true">'+
		'	<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icon-fullscreen"></i></button></div>'+
		'	<div class="modal-body"></div>'+
		'</div>',
		js:
		'$("#noFooterModal").modal({'+
		'	keyboard: true,'+
		'	backdrop:true,'+
		'	show:true,'+
		'	title:"凤凰网",'+
		'	frame:"http://www.ifeng.com/",'+
		'	height:"450px",'+
		'	width:"50%"'+
		'})'
	},{
		num: 5,
		name: "无遮罩层(背景)",
		src:
		'<div id="noBackModal" class="modal hide" tabindex="-1" role="dialog" aria-hidden="true">'+
		'	<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icon-fullscreen"></i></button></div>'+
		'	<div class="modal-body"></div>'+
		'	<div class="modal-footer">'+
		'		<button class="btn btn-small" data-dismiss="modal" aria-hidden="true">关闭</button>'+
		'	</div>'+
		'</div>',
		js:
		'$("#noBackModal").modal({'+
		'	keyboard: true,'+
		'	backdrop:false,'+
		'	show:true,'+
		'	title:"凤凰网",'+
		'	frame:"http://www.ifeng.com/",'+
		'	height:"450px",'+
		'	width:"50%"'+
		'})'
	}]
}

exports.data = datainfo;