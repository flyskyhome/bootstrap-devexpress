var datainfo = {
	caption:"折叠(collapse)",
	tab_list: [{
		num: 1,
		name: "普通(无展开)",
		active: "active",	
		src:
			'<div class="accordion" id="accordion1">'+
			'  <div class="accordion-group">'+
			'    <div class="accordion-heading">'+
			'      <a class="accordion-toggle" data-toggle="collapse" href="#c_1">'+
			'        分组一 '+
			'      </a>'+
			'    </div>'+
			'    <div id="c_1" class="accordion-body collapse">'+
			'      <div class="accordion-inner">'+
			'        子分组一'+
			'      </div>'+
			'    </div>'+
			'  </div>'+
			'  <div class="accordion-group">'+
			'    <div class="accordion-heading">'+
			'      <a class="accordion-toggle" data-toggle="collapse" href="#c_2">'+
			'        分组二'+
			'      </a>'+
			'    </div>'+
			'    <div id="c_2" class="accordion-body collapse">'+
			'      <div class="accordion-inner">'+
			'        子分组二'+
			'      </div>'+
			'    </div>'+
			'  </div>'+
			'  <div class="accordion-group">'+
			'    <div class="accordion-heading">'+
			'      <a class="accordion-toggle" data-toggle="collapse" href="#c_3">'+
			'       分组三'+
			'      </a>'+
			'    </div>'+
			'    <div id="c_3" class="accordion-body collapse">'+
			'      <div class="accordion-inner">'+
			'        子分组三'+
			'      </div>'+
			'    </div>'+
			'  </div>'+
			'</div>'
	}, {
		num: 2,
		name: "普通(全展开)",
		src:
		'<div class="accordion" id="accordion2">'+
		'  <div class="accordion-group">'+
		'    <div class="accordion-heading">'+
		'      <a class="accordion-toggle" data-toggle="collapse" href="#cp_1">'+
		'        分组一 '+
		'      </a>'+
		'    </div>'+
		'    <div id="cp_1" class="accordion-body collapse in">'+
		'      <div class="accordion-inner">'+
		'        子分组一'+
		'      </div>'+
		'    </div>'+
		'  </div>'+
		'  <div class="accordion-group">'+
		'    <div class="accordion-heading">'+
		'      <a class="accordion-toggle" data-toggle="collapse" href="#cp_2">'+
		'        分组二'+
		'      </a>'+
		'    </div>'+
		'    <div id="cp_2" class="accordion-body collapse in">'+
		'      <div class="accordion-inner">'+
		'        子分组二'+
		'      </div>'+
		'    </div>'+
		'  </div>'+
		'  <div class="accordion-group">'+
		'    <div class="accordion-heading">'+
		'      <a class="accordion-toggle" data-toggle="collapse" href="#cp_3">'+
		'        分组三'+
		'      </a>'+
		'    </div>'+
		'    <div id="cp_3" class="accordion-body collapse in">'+
		'      <div class="accordion-inner">'+
		'        子分组三'+
		'      </div>'+
		'    </div>'+
		'  </div>'+
		'</div>	'
	}, {
		num: 3,
		name: "手风琴式",
		src:
		'<div class="accordion" id="accordion3">'+
		'  <div class="accordion-group">'+
		'    <div class="accordion-heading">'+
		'      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapseOne">'+
		'        <i class="icon-chevron-up"></i>分组一 '+
		'      </a>'+
		'    </div>'+
		'    <div id="collapseOne" class="accordion-body collapse in">'+
		'      <div class="accordion-inner">'+
		'        子分组一'+
		'      </div>'+
		'    </div>'+
		'  </div>'+
		'  <div class="accordion-group">'+
		'    <div class="accordion-heading">'+
		'      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapseTwo">'+
		'        <i class="icon-chevron-down"></i>分组二'+
		'      </a>'+
		'    </div>'+
		'    <div id="collapseTwo" class="accordion-body collapse">'+
		'      <div class="accordion-inner">'+
		'        子分组二'+
		'      </div>'+
		'    </div>'+
		'  </div>'+
		'  <div class="accordion-group">'+
		'    <div class="accordion-heading">'+
		'      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapseTree">'+
		'        <i class="icon-chevron-down"></i>分组三'+
		'      </a>'+
		'    </div>'+
		'    <div id="collapseTree" class="accordion-body collapse">'+
		'      <div class="accordion-inner">'+
		'        子分组三'+
		'      </div>'+
		'    </div>'+
		'  </div>'+
		'</div>',
		todo:
		'1、指示箭头方向要能和展开收缩相配合'+
		'2、更多使用方式可参看 :http://v2.bootcss.com/javascript.html#collapse'
	}]
}

exports.data = datainfo;