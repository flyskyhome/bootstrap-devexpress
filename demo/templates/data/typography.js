var datainfo = {
	caption:"排版",
	tab_list: [{
		num: 1,
		name: "标题",
		active: "active",	
		src:
		'<h1>标题1</h1>'+
		'<h2>标题2</h2>'+
		'<h3>标题3</h3>'+
		'<h4>标题4</h4>'
	}, {
		num: 2,
		name: "字体",
		src:
		'<p><strong>加粗.</strong></p>'+
		'<p><em>斜体.</em></p>'+
		'<p class="muted">低调.</p>'+
		'<p class="text-warning">警告.</p>'+
		'<p class="text-error">出错.</p>'+
		'<p class="text-info">提示.</p>'+
		'<p class="text-success">成功.</p>'
	}, {
		num: 3,
		name: "列表",
		src:
		'<h4>无序列表</h4>'+
		'<ul>'+
		'	<li>低调.</li>'+
		'	<li>警告.</li>'+
		'	<li>出错.</li>'+
		'	<li>提示.</li>'+
		'</ul>'+
		'<h4>有序列表</h4>'+
		'<ol>'+
		'	<li>低调.</li>'+
		'	<li>警告.</li>'+
		'	<li>出错.</li>'+
		'	<li>提示.</li>'+
		'</ol>'+
		'<h4>无序列表(无样式)</h4>'+
		'<ul class="unstyled">'+
		'	<li>低调.</li>'+
		'	<li>警告.</li>'+
		'	<li>出错.</li>'+
		'	<li>提示.</li>'+
		'</ul>'+
		'<h4>有序列表(无样式)</h4>'+
		'<ol class="unstyled">'+
		'	<li>低调.</li>'+
		'	<li>警告.</li>'+
		'	<li>出错.</li>'+
		'	<li>提示.</li>'+
		'</ol>'				
	}, {
		num: 4,
		name: "表单",
		src:
		'<h4>行内表单</h4>'+
		'<div class="form-inline">'+
		'	<label class="control-label">邮箱:</label>'+
  		'	<input type="text" class="input-small" placeholder="Email">'+
		'	<label class="control-label">地址:</label>'+
  		'	<input type="password" class="input-small" placeholder="地址">'+
		'	<label class="control-label">组合:</label>'+
		'	<div class="input-append">'+
		'		<input class="span6" id="prependedInput" type="text" placeholder="Username">'+
		'		<span class="add-on add-on-fixedlast4ie78"><button class="btn"><i class="icon-chevron-down"></i></button></span>'+
		'	</div>'+  		
  		'	<label class="checkbox">'+
    	'		<input type="checkbox"> Remember me'+
  		'	</label>'+
  		'	<a herf="#" class="btn btn-small fr mr15">查询</a>'+
		'</div>'+
		'<div class="form-inline">'+
		'	<label class="control-label">邮箱:</label>'+
  		'	<input type="text" class="input-small" placeholder="Email">'+
		'	<label class="control-label">地址:</label>'+
  		'	<input type="password" class="input-small" placeholder="地址">'+
		'</div>'+
		'<h4>单列表单</h4>'+
		'<form class="form-horizontal">'+
  		'	<div class="control-group">'+
    	'		<label class="control-label" for="inputEmail">Email</label>'+
    	'		<div class="controls">'+
      	'		<input type="text" id="inputEmail" placeholder="Email">'+
    	'		</div>'+
  		'	</div>'+
  		'	<div class="control-group">'+
    	'		<label class="control-label" for="inputPassword">Password</label>'+
    	'		<div class="controls">'+
      	'		<input type="password" id="inputPassword" placeholder="Password">'+
    	'		</div>'+
  		'	</div>'+
  		'	<div class="control-group">'+
    	'		<div class="controls">'+
      	'			<label class="checkbox">'+
        '				<input type="checkbox"> Remember me'+
      	'			</label>'+
      	'			<a href="#" class="btn btn-small">登录</a>'+
    	'		</div>'+
  		'	</div>'+
		'</form>'
	}, {
		num: 5,
		name: "输入验证",
		src:''
	}]
}

exports.data = datainfo;