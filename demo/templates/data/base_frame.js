var datainfo = {
	caption:"基础布局",
	tab_list: [{
		num: 1,
		name: "单页布局",
		active: "active",
		src:
		'<div class="row-fluid show-grid">'+
		'  <div class="span12">span12</div>'+
		'</div>'
	}, {
		num: 2,
		name: "上下布局",
		src:
		'<div class="row-fluid show-grid">'+
		'  <div class="span12">span12</div>'+
		'</div>'+
		'<div class="row-fluid show-grid">'+
		'  <div class="span12">span12</div>'+
		'</div>'
	}, {
		num: 3,
		name: "左右布局",
		src:
		'<h3>对等布局</h3>'+
		'<div class="row-fluid show-grid">'+
		'  <div class="span6">span6</div>'+
		'  <div class="span6">span6</div>'+
		'</div>'+
		'<h3>非对等布局</h3>'+
		'<div class="row-fluid show-grid">'+
		'  <div class="span2">span2</div>'+
		'  <div class="span10">span10</div>'+
		'</div>'
	}, {
		num: 4,
		name: "嵌套布局",
		src:
		'<div class="row-fluid show-grid">'+
		'  <div class="span12">'+
		'    span 12'+
		'    <div class="row-fluid show-grid">'+
		'      <div class="span6">'+
		'         span 6'+
		'         <div class="row-fluid show-grid">'+
		'            <div class="span6">span 6</div>'+
		'            <div class="span6">span 6</div>'+
		'         </div>'+
		'      </div>'+
		'      <div class="span6">span 6</div>'+
		'    </div>'+
		'  </div>'+
		'</div>'
	}]
}

exports.data = datainfo;