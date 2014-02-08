#!/usr/bin/env node

var hogan = require('hogan.js'),
  fs = require('fs'),
  title = 'Bootstrap'

// 通用布局，存在的页面数据，输出页面
var layout, datas ,outpage

// 读取布局模板
layout = fs.readFileSync(__dirname + '/../templates/layout.mustache', 'utf-8')

// 获取页面数据 datas
datas = fs.readdirSync(__dirname + '/../templates/data')

// 循环生成页面信息
datas.forEach(function(name) {
  //console.log("name:" + name);
  if (!name.match(/\.js$/)) return
  /**
   * 读取文件信息，并且找到文件中 " '+ "的信息修改成 " \r\n'+ " 
   * 目的：减少数据文件中无用的代码量,并且保证在源码和html信息中显示时的格式好看
   * @type {String}
   */
  var page = fs.readFileSync(__dirname + '/../templates/data/' + name, 'utf-8').replace(/\'\+/g, "\\r\\n'+"),
    evalOjb = eval(page),
    context = evalOjb;

  //console.log("--------page----------");
  //console.log(page);
  
  /**
   * 如若在js数据文件中已经写了那个 回车换行 \r\n 则可以用一下方式进行
   */
  //dataInfo=require(__dirname  + '/../templates/data/' + name),
  //context=dataInfo.data
  for (var key in context.tab_list) {
    // 处理非激活项，隐藏信息
    if (context.tab_list[key]["active"] != "active") {
      context.tab_list[key]["hide"] = "none";
    }
    // 生成干净的html信息
    if(context.tab_list[key]["html"]){
      context.tab_list[key]["html_src"] = context.tab_list[key]["html"].replace(/\r\n/g, "");
    }
    else{
      context.tab_list[key]["html"] = context.tab_list[key]["src"];
      // 清理源码中的回车换行和空格
      context.tab_list[key]["html_src"] = context.tab_list[key]["src"].replace(/\r\n|  /g, "");
    }
  }

  context[name.replace(/\.js$/, '')] = 'active'
  context._i = true

  context.title = name.replace(/\.js/, '').replace(/\-.*/, '').replace(/(.)/, function($1) {
    return $1.toUpperCase()
  })

  if (context.title == 'Index') {
    context.title = title
  } else {
    context.caption += ' · ' + title
    context.title += ' · ' + title
  }

  outpage = hogan.compile(layout, {
    sectionTags: [{
      o: '_i',
      c: 'i'
    }]
  })

  //console.log("--------context----------");
  //console.log(context);  
  
  page = outpage.render(context)

  //console.log("--------layout----------");
  //console.log(page); 

  fs.writeFileSync(__dirname + '/../' + name.replace(/js$/, 'html'), page, 'utf-8')

})