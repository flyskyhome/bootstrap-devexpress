/* =========================================================
 * bootstrap-navbar.js v0.0.1
 * http://getbootstrap.com/2.3.2/javascript.html#NavBars
 * =========================================================
 * Copyright 2014 Flyskyhome, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function($) {

  "use strict"; // jshint ;_;
  /**
   * @name NavBar
   * @constructor
   * @param {string} element jQuery选择器
   * @type jQuery
   */
  var NavBar = function(element) {
      this.$element = $(element);
    }

  NavBar.prototype = /** @lends NavBar.prototype */
  {
    /**
     * NavBar 的一个实例
     * @instance
     */
    constructor: NavBar,
    /**
     * @name NavBar#items.item
     * @desc 列表项
     * @type {Object}
     * @inner
     * @example
     * {
     *   text:"index", //文本
     *   active:true,  //是否激活
     *   imgurl:"",    //图片路径
     *   url:"",       //链接路径
     *   key:""        //唯一标识
     * }
     */

    /**
     * 手工显示模态框
     * @param {object} options 显示方式配置信息
     * @param {bool} options.create 是否创建,是缺省参数,当传入参数非string类型时
     * @param {string} options.direction 排列方向,v:竖排,h:横排 ,default:v
     * @param {Array} options.items 列表项，可以和remote同时使用，同时时,该项内容放在remote信息之上
     * @param {string} options.remote 获取远程列表数据
     * @param {string} options.remote.url 远程数据获取url
     * @param {Object} options.remote.param 数据获取参数信息
     * @param {Function} options.remote.callback 回调函数,远程数据获取成功后执行,通过返回数据对象中的itemList项生成列表
     * @example
     *  $(sSign).navbar(
     *  {
     *     items:[{
     *         text:"我的桌面",
     *         imgurl:"../Resources/Images/menu/menu_desk.png",
     *         key:"desktop"
     *     }],
     *     remote:{
     *         url:"../FGQTest/ajax/contentProvide.aspx",
     *         param:{type:"GetModuleInfo"},
     *         callback:_initMenuState
     *     }
     *   )  :推荐
     *  $(sSign).navbar("create") :空列表
     */
    create: function(options) {
      this.options = options;
      var that = this,
        items = options ? options.items : [];

      /**
       * 创建形成Dom对象的字符串
       * @param {Object} data remote获取数据返回数据对象
       * @param {Array} data.itemList 需要生成的项目信息列表
       * @return {string}   domStr
       */

      function createDomStr(data) {
        var items=data.itemList,
            iCount = items.length,        
            sufclass = options.direction == "h" ? "" : "nav-stacked",
            domStr = "<ul class='nav nav-pills " + sufclass + "'>",
            // 列表串
            listStr = "",
            // 临时项
            item, activeSign = " class='active'";

        for (var i = 0; i < iCount; i++) {
          item = items[i];
          listStr = listStr + "<li" + (item.key ? " id='" + item.key + "'" : "") + (item.active ? activeSign : "") + "><a href='" + (item.url ? item.url : "#") + "'>" + (item.imgurl ? "<img src='" + item.imgurl + "'>" : "") + item.text + "</a></li>";
        }

        that.$element.append(domStr = domStr + listStr + "</ul>");
        that.options.remote && that.options.remote.callback?that.options.remote.callback(data):"";
      }

      if (options && options.remote) {
        $.ajax({
          dataType: "json",
          url: options.remote.url,
          data: options.remote.param,
          success: function(data, status) {
            if (options.items) {
              data.itemList = options.items.concat(data.itemList);
            }
            createDomStr(data);            
          },
          error: function(xmlReq, status, error) {
            that.$element.append("传入参数:" + this + "<br/>错误信息:" + error);
          },
          complete: function(xhr, ts) {}
        });
      } else {
        createDomStr({itemList:items});
      }
    },
    /**
     * 设置选中项 
     * @description 此时this.$element 应该是 li 元素
     * @example
     *  $(sSign).navbar("active");
     */
    active: function() {
      this.$element.parent().find(">li").removeClass("active");
      this.$element.addClass("active");
    }
  }


  /* NavBar PLUGIN DEFINITION
   * ======================= */

  var old = $.fn.navbar

  $.fn.navbar = function(option) {
      return this.each(function() {
        var $this = $(this),
          data = $this.data('navbar'),
          options = $.extend({}, $.fn.navbar.defaults, $this.data(), typeof option == 'object' && option)
          //      if (!data) $this.data('NavBar', (data = new NavBar(this, options)))
        if (!data) $this.data('navbar', (data = new NavBar(this)))
        if (typeof option == 'string') data[option]()
        else if (options.create) data.create(options)
      })
    }
  /**
   * 缺省参数
   * @type {Object}
   */
  $.fn.navbar.defaults = {
    // 是否创建
    create: true,
    // 排列方式 v:竖排,h:横排
    direction: "v"
  }

  $.fn.navbar.Constructor = NavBar


  /* NavBar NO CONFLICT
   * ================= */

  $.fn.navbar.noConflict = function() {
    $.fn.navbar = old
    return this
  }


  /* NavBar DATA-API
   * ============== */

  $(document).on('click.navbar.data-api', '[data-toggle="navbar"]', function(e) {
    var $this = $(this),
      href = $this.attr('href'),
      $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
      //还需要修改
      ,
      option = $target.data('navbar') ? 'toggle' : $.extend({}, $target.data(), $this.data())

      e.preventDefault()

      $target.navbar(option).one('hide', function() {
        $this.focus()
      })
  })

}(window.jQuery);