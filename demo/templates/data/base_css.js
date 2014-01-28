var datainfo = {
	caption:"样式元素(unit)",
	tab_list: [{
		num: 1,
		name: "字体",
		active: "active",	
		src:
		'<h4>尺寸</h4>'+
		'<p class="f12">中国12px</p>'+
		'<p class="f13">中国13px</p>'+
		'<p class="f14">中国14px</p>'+
		'<p class="f16">中国16px</p>'+
		'<p class="f20">中国20px</p>'+
		'<h4>重量</h4>'+
		'<p class="fb">中国 粗体</p>'+
		'<p class="fn">中国 正常</p>'+
		'<h4>是否有下划线</h4>'+
		'<p class="unl">中国</p>'+
		'<p class="no_unl">中国</p>'
	},{
		num: 2,
		name: "定位",
		src:
		'<h4>文字、img对齐</h4>'+
		'<p class="bd1 w200 tl">左对齐 tl</p>'+
		'<p class="bd1 w200 tc">居中对齐 tc</p>'+
		'<p class="bd1 w200 tr">右对齐 tr</p>'+
		'<p class="bd1 w200 h100 vm" style="line-height:100px">垂直居中 vm</p>'+
		'<h4>浮动</h4>'+
		'<p class="bd1 w200 fl">中国 左</p>'+
		'<p class="bd1 w200 fr">中国 右</p>'+
		'<h4 class="cb">清除</h4>'+
		'<h4>定位</h4>'+
		'<p class="pr">相对定位(需要和top之类的联合使用才见效果)</p>'+
		'<p class="pa">绝对定位(需要和top之类的联合使用才见效果)</p>'+
		'<h4>隐藏</h4>'+
		'<p class="none">不占位隐藏</p>'+
		'<p class="hidden">占位隐藏</p>'		
	},{
		num: 3,
		name: "宽度",
		src:
		'<h4>10px - 100px (间隔10)</h4>'+
		'<p class="bd1 w50">宽度50</p>'+
		'<p class="bd1 w60">宽度60</p>'+
		'<p class="bd1 w80">宽度80</p>'+
		'<h4>120px</h4>'+
		'<p class="bd1 w120">宽度50</p>'+
		'<h4>200px - 800px (间隔100)</h4>'+
		'<p class="bd1 w200">宽度200</p>'+
		'<p class="bd1 w400">宽度400</p>'+
		'<p class="bd1 w800">宽度800</p>'+
		'<h4>98% - 100% (间隔1)</h4>'+
		'<p class="bd1 w_98">宽度98%</p>'+
		'<p class="bd1 w_99">宽度99%</p>'
	},{
		num: 4,
		name: "高度",
		src:
		'<h4>100px - 300px (间隔100)</h4>'+
		'<p class="bd1 w50 h100 fl">高度200</p>'+
		'<p class="bd1 w50 h200 fl ml5">高度400</p>'+
		'<p class="bd1 w50 h300 fl ml5">高度800</p>'+
		'<h4>98% - 100% (间隔1)</h4>'+
		'<div class="h300 fl"><p class="bd1 w50 h_98 ml5">高度98%</p></div>'+
		'<div class="h300 fl"><p class="bd1 w50 h_99 ml5">高度99%</p></div>'
	},{
		num: 5,
		name: "外边距",
		src:
		'<h4>整体 10px、15px、30px</h4>'+
		'<p class="bd1 m10">外边距10</p>'+
		'<p class="bd1 m15">外边距15</p>'+
		'<p class="bd1 m30">外边距30</p>'+
		'<h4>顶部 5 - 20(间距5)</h4>'+
		'<p class="bd1 mt5">外边距顶 5</p>'+
		'<p class="bd1 mt15">外边距顶 15</p>'+
		'<h4>顶部 30、50、100</h4>'+
		'<p class="bd1 mt30">外边距顶 30</p>'+
		'<p class="bd1 mt50">外边距顶 50</p>'+
		'<h4>底部(mbX,数值同顶)</h4>'+		
		'<h4>左(mlX,数值同顶)</h4>'+
		'<h4>右(mrX,数值同顶)</h4>'
	},{
		num: 6,
		name: "内边距",
		src:
		'<h4>整体 0、5px、10px、15px、30px</h4>'+
		'<p class="bd1 p10">内边距10</p>'+
		'<p class="bd1 p15">内边距15</p>'+
		'<p class="bd1 p30">内边距30</p>'+
		'<h4>顶部 5 - 20(间距5)</h4>'+
		'<p class="bd1 pt5">内边距顶 5</p>'+
		'<p class="bd1 pt15">内边距顶 15</p>'+
		'<h4>顶部 30、50、100</h4>'+
		'<p class="bd1 pt30">内边距顶 30</p>'+
		'<p class="bd1 pt50">内边距顶 50</p>'+
		'<h4>底部(pbX,数值同顶)</h4>'+		
		'<h4>左(plX,数值同顶)</h4>'+
		'<h4>右(prX,数值同顶)</h4>'
	}]
}

exports.data = datainfo;