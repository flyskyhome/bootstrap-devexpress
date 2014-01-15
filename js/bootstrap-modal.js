/* =========================================================
 * bootstrap-modal.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#modals
 * =========================================================
 * Copyright 2013 Twitter, Inc.
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


!function ($) {

  "use strict"; // jshint ;_;
  
  /**
   * @name Modal
   * @constructor
   * @param {string} element jQuery选择器
   * @type jQuery
   */
  var Modal = function (element) {
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
  }

  Modal.prototype = 
  /** @lends Modal.prototype */{
      /**
       * Modal 的一个实例
       * @instance
       */
      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function (options) {
        this.options=options;
        var that = this
          , e = $.Event('show');

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')
          var opt=that.options
            , ele=that.$element
            , elebody=ele.find('.modal-body')
            // 后缀
            , suf
            // 真实数字
            , num
            //  整体样式
            , hwCss={}
            // body的height样式
            , bhCss;

          if(opt.height){            
            //hwCss={"margin-top":(0-ele.height())/2)+"px"};
            bhCss={height:opt.height};
            //hwCss['margin-top']=(0-ele.height()/2)+"px";
          }

          if(opt.width){
            hwCss['width']=opt.width;

            if(opt.width.substr(opt.width.length-1,1)=='%'){
              suf="%";
              num=opt.width.substr(0,opt.width.length-1);
            }
            else{
              suf="px";
              num=opt.width.substr(0,opt.width.length-2);
            }
            
            hwCss['margin-left']=(0-num/2)+suf;
          }

          ele.removeAttr("style"); 
          if(hwCss){
            ele.css(hwCss);

//            opt.width?ele.css({width:hwCss['width'],"margin-left":hwCss['margin-left']}):ele.css({width:hwCss['width']});
            if(bhCss){
              //ele.css({"margin-top":hwCss['margin-top']});
//              elebody.css({height:hwCss['height']});          
              elebody.css(bhCss);          
            }
          }

          if(opt.remote){
            elebody.html("");
            elebody.load(that.options.remote);
          }

          if(opt.frame){
            elebody.html("");
            //elebody.css("padding","0");
            elebody.append("<iframe frameborder='0' scrolling='no' src='"+opt.frame+"' class='w_100 h_100'></iframe>");
          }
          
          if(opt.content){
            elebody.html("");
            //elebody.css("padding","0");
            elebody.append(opt.content);
          }

          if (!ele.parent().length) {
            ele.appendTo(document.body) //don't move modals dom position
          }

          ele.css({"margin-top":(0-ele.height())/2+"px"});
          ele.show()

          if (transition) {
            ele[0].offsetWidth // force reflow
          }

          ele
            .addClass('in')
            .attr('aria-hidden', false)

          that.enforceFocus()

          transition ?
            ele.one($.support.transition.end, function () {ele.focus().trigger('shown') }) :
            ele.focus().trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
          that.removeBackdrop()
          that.$element.trigger('hidden')
        })
      }

    , removeBackdrop: function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          if (!callback) return

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
//      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (!data) $this.data('modal', (data = new Modal(this)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show(options)
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL NO CONFLICT
  * ================= */

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


 /* MODAL DATA-API
  * ============== */

  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
      , option = $target.data('splitter') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);
