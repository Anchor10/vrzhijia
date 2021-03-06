// 滚动条插件
!function(a){function b(a){a&&a.stopPropagation?a.stopPropagation():window.event&&(window.event.cancelBubble=!0)}function c(a){return a&&a.preventDefault?a.preventDefault():window.event.returnValue=!1,!1}function d(a,b){b?a.removeAttr("unselectable").removeAttr("onselectstart").css("-moz-user-select","").css("-webkit-user-select",""):a.attr("unselectable","on").attr("onselectstart","return false;").css("-moz-user-select","none").css("-webkit-user-select","none")}a.fn.scrollbar=function(e,f){"function"==typeof e?(f=e,e={}):(e=e||{},f=f||function(){});var g={contentCls:"content",trackCls:"track",direction:"y",step:50,touchable:!0,autoReset:!0,inEndEffect:!1,slide:0},h=a.extend({},g,e),i=a("body"),j=a(document);return this.each(function(){function e(a){if("none"!=o.css("display")){a=a||window.event;var d=-a.wheelDelta/120||a.detail/3,e="y"==h.direction?-n.position().top+d*h.step:-n.position().left+d*h.step;e>D?(e=D,h.inEndEffect||(b(a),c(a))):0>e?(e=0,h.inEndEffect||(b(a),c(a))):(b(a),c(a)),r.slide(e)}}function g(a){b(a),v={pageX:a.changedTouches[0].pageX,pageY:a.changedTouches[0].pageY},t="y"==h.direction?-n.position().top||0:-n.position().left||0}function k(a){b(a);var d={pageX:a.changedTouches[0].pageX,pageY:a.changedTouches[0].pageY},e="x"==h.direction?v.pageX-d.pageX:v.pageY-d.pageY;("x"==h.direction&&Math.abs(d.pageY-v.pageY)<Math.abs(e)||"y"==h.direction)&&(e+=t,c(a),0>e?e=0:e>D&&(e=D),C>0&&(p.css("y"==h.direction?"top":"left",e*r.ratio+"px"),n.css("y"==h.direction?"top":"left",-e+"px")))}function l(a){b(a),isTouch=!1}var m=a(this),n=m.find("."+h.contentCls),o=m.find("."+h.trackCls),p=o.children(),q=this,r={},s=0,t=0,u=0,v={},w=!1;if(m.css({position:"relative",overflow:"hidden"}),n.css({position:"absolute"}),"x"==h.direction){var x=0;n.children().each(function(){var b=a(this);b.css({width:b.width()+"px"}),x+=b.outerWidth(!0)}),n.css({width:x+"px"})}p.css({position:"absolute"}),o.show();var y="y"==h.direction?o.height():o.width(),z="y"==h.direction?n.height():n.width(),A="y"==h.direction?m.height():m.width(),B=B=A/z*y,C=y-B,D=z-A;z>A?p.css("y"==h.direction?"height":"width",B+"px"):o.hide(),r.ratio=C/D,r.slide=function(a){a>D?a=D:0>a&&(a=0),D>0&&(p.css("y"==h.direction?"top":"left",a*r.ratio+"px"),n.css("y"==h.direction?"top":"left",-a+"px"))},r.resize=function(){if("x"==h.direction){var b=0;n.children().each(function(){var c=a(this);c.removeAttr("style").css({width:c.width()+"px"}),b+=c.outerWidth(!0)}),n.css({width:b+"px"})}o.show(),y="y"==h.direction?o.height():o.width(),z="y"==h.direction?n.height():n.width(),A="y"==h.direction?m.height():m.width(),B=A/z*y,C=y-B,D=z-A,z>A?p.css("y"==h.direction?"height":"width",B+"px"):o.hide(),r.ratio=C/D,h.autoReset&&r.slide(0)},r.getRatio=function(){return r.ratio=C/D},r.slide(h.slide),o.on({mousedown:function(a){w=!0,s="y"==h.direction?o.offset().top:o.offset().left,u="y"==h.direction?a.pageY-s-p.position().top:a.pageX-s-p.position().left,d(i,!1)},mouseup:function(a){if(w){var b="y"==h.direction?a.pageY-s:a.pageX-s;u>0&&B>u&&(b-=u),r.slide(b/r.ratio)}}}),j.on({mousemove:function(a){if(w){var b="y"==h.direction?a.pageY-s:a.pageX-s;u>0&&B>u&&(b-=u),r.slide(b/r.ratio)}},mouseup:function(){w=!1,u=0,d(i,!0)},resize:r.resize}),document.addEventListener&&q.addEventListener("DOMMouseScroll",e,!1),q.onmousewheel=e,q.addEventListener&&h.touchable&&(q.addEventListener("touchstart",g),q.addEventListener("touchmove",k),q.addEventListener("touchend",l)),f(r)})}}(jQuery);

// 轮播插件
!function(a){function b(a){a&&a.stopPropagation?a.stopPropagation():window.event&&(window.event.cancelBubble=!0)}function c(a){return a&&a.preventDefault?a.preventDefault():window.event.returnValue=!1,!1}a.fn.slider=function(d,e){"function"==typeof d?(e=d,d={}):(d=d||{},e=e||function(){});var f={contentCls:"content",navCls:"nav",prevBtnCls:"prev",nextBtnCls:"next",activeTriggerCls:"active",disableBtnCls:"disable",hoverCls:"hover",step:1,view:0,direction:"x",inEndEffect:"switch",hasTriggers:!0,triggerCondition:"*",triggerType:"mouse",activeIndex:0,pointerType:"click",auto:!1,animate:!0,delay:3e3,duration:500,easing:"easeIn",keyboardAble:!1,touchable:!0,sensitivity:.4,scrollable:!1,beforeEvent:function(){},afterEvent:function(){}},g=a.extend({},f,d),h=a(window);return this.each(function(){function d(a,b){if(x>y){var c=0!=a?b||g.duration:0,d={};switch(g.inEndEffect){case"switch":w%=v,r.removeClass(g.activeTriggerCls).eq(w).addClass(g.activeTriggerCls),d="left"==E?{left:-w*u}:{top:-w*u},n.stop().animate(d,{easing:g.easing,duration:c,complete:function(){var a={index:w,count:v};g.afterEvent(a)}});break;case"cycle":r.removeClass(g.activeTriggerCls).eq(w%v).addClass(g.activeTriggerCls),d="left"==E?{left:-w*u}:{top:-w*u},n.stop().animate(d,{easing:g.easing,duration:c,complete:function(){var a={index:w%v,count:v};g.afterEvent(a)}}),d="left"==E?{left:(v-w)*u}:{top:(v-w)*u},I.stop().animate(d,{easing:g.easing,duration:c,complete:function(){w>=v&&(w%=v,n.css(E,(v-w)*u+"px"),n=[I,I=n][0])}});break;default:w=Math.min(w,v-z),r.removeClass(g.activeTriggerCls).eq(w).addClass(g.activeTriggerCls),p.toggleClass(g.disableBtnCls,0==w),q.toggleClass(g.disableBtnCls,w==v-z),d="left"==E?{left:-w*u}:{top:-w*u},n.stop().animate(d,{easing:g.easing,duration:c,complete:function(){var a={index:w,count:v};g.afterEvent(a)}})}}}function f(a){if(a=a||window.event,b(a),c(a),!n.is(":animated")){var d=-a.wheelDelta/120||a.detail/3;d>0?t.next(a):t.prev(a)}}function i(a){C=new Date,b(a),t.stop(),A={pageX:a.changedTouches[0].pageX,pageY:a.changedTouches[0].pageY},B[0]=n.position(),"cycle"==g.inEndEffect&&(B[1]=I.position())}function j(a){b(a);var d={pageX:a.changedTouches[0].pageX,pageY:a.changedTouches[0].pageY},e="x"==g.direction?d.pageX-A.pageX:d.pageY-A.pageY,f=Math.ceil(Math.abs(e/u));("x"==g.direction&&Math.abs(d.pageY-A.pageY)<Math.abs(e)||"y"==g.direction)&&(c(a),"cycle"==g.inEndEffect?(e>0?0>w-f&&(B[1][E]=-(w+v)*u,I.css(E,B[1][E]+"px"),n=[I,I=n][0],B[0][E]=[B[1][E],B[1][E]=B[0][E]][0],w+=v):w+f>v&&(B[0][E]=(2*v-w)*u,n.css(E,B[0][E]+"px"),n=[I,I=n][0],B[0][E]=[B[1][E],B[1][E]=B[0][E]][0],w-=v),n.css(E,B[0][E]+e),I.css(E,B[1][E]+e)):((0===w&&e>0||w===v-z&&0>e)&&(e*=.25),n.css(E,B[0][E]+e)))}function k(a){var b=new Date;g.auto&&t.start();var c={pageX:a.changedTouches[0].pageX,pageY:a.changedTouches[0].pageY},e="x"==g.direction?c.pageX-A.pageX:c.pageY-A.pageY,f=Math.abs(e/u),h=f-Math.floor(f)>g.sensitivity?Math.ceil(f):Math.floor(f);if(h)if("cycle"==g.inEndEffect)e>0?w-=h:w+=h;else if(e>0)w&&(w-=Math.min(h,w));else{var i=v-w-z;i&&(w+=Math.min(h,i))}else if(250>b-C&&Math.abs(e)>10)if(e>0)w&&(w-=Math.min(1,w));else{var i=v-w-z;i&&(w+=Math.min(1,i))}d(!0,300)}function l(a){switch(a.which){case 37:t.prev(a);break;case 39:t.next(a)}}var m=a(this),n=m.find("."+g.contentCls),o=n.children(),p=m.find("."+g.prevBtnCls),q=m.find("."+g.nextBtnCls),r=a(),s=this,t={},u="x"==g.direction?o.outerWidth(!0):o.outerHeight(!0),v=o.length,w=g.activeIndex<0?v+g.activeIndex:g.activeIndex,x=v*u,y="x"==g.direction?m.width():m.height(),z=g.view||parseInt(y/u)||1,A={},B=[],C=0,D=null,E="x"==g.direction?"left":"top",F=n.css("position","absolute").parent();if("static"==F.css("position")&&F.css("position","relative"),"left"==E&&n.css("width",x),g.hasTriggers){if(!m.find("."+g.navCls).length){for(var G="",H=1;v>=H;H++)G+="<li>"+H+"</li>";m.append("<ul class='"+g.navCls+"'>"+G+"</ul>")}g.triggerType+="mouse"===g.triggerType?"enter":"",r=m.find("."+g.navCls+" > "+g.triggerCondition).bind(g.triggerType,function(a){var b=r.index(this),c={index:w,count:v,destination:b,event:a};g.beforeEvent(c)!==!1&&(w="cycle"===g.inEndEffect?b:Math.min(v-z,b),d(g.animate))})}if("cycle"===g.inEndEffect)var I=n.clone().insertAfter(n);var J=m.find("."+g.contentCls);t.prev=function(a){var b={index:w,count:v,destination:"prev",event:a};if(g.beforeEvent(b)!==!1){switch(g.inEndEffect){case"switch":w?w-=Math.min(g.step,w):w=v-z;break;case"cycle":if(J.is(":animated"))return!1;w-g.step<0?(I.css(E,-(v+w)*u+"px"),n=[I,I=n][0],w+=v-g.step):w-=g.step;break;default:w&&(w-=Math.min(g.step,w))}d(g.animate)}},t.next=function(a){var b={index:w,count:v,destination:"next",event:a};if(g.beforeEvent(b)!==!1){switch(g.inEndEffect){case"switch":var c=v-w-z;c?w+=Math.min(g.step,c):w=0;break;case"cycle":if(J.is(":animated"))return!1;w+=g.step;break;default:var c=v-w-z;c&&(w+=Math.min(g.step,c))}d(g.animate)}},t.start=function(){t.stop(),D=setInterval(t.next,g.delay)},t.stop=function(){D&&clearInterval(D)},t.setIndex=function(a,b){w=a%v,d(b)},t.setStep=function(a){g.step=a},t.setView=function(a){z=g.view=a},t.setDelay=function(a){g.delay=a},t.setDuration=function(a){g.duration=a},t.getIndex=function(){return w},t.resize=function(){u="x"==g.direction?o.outerWidth(!0):o.outerHeight(!0),x=v*u,y="x"==g.direction?m.width():m.height(),z=g.view||parseInt(y/u)||1,"left"==E&&J.css("width",x),d(!1)},d(!1),g.auto&&(t.start(),m.hover(t.stop,t.start)),m.hover(function(){m.addClass(g.hoverCls)},function(){m.removeClass(g.hoverCls)}),"click"===g.pointerType?(p.bind("click",t.prev).hover(function(){p.toggleClass(g.hoverCls)}),q.bind("click",t.next).hover(function(){q.toggleClass(g.hoverCls)})):(p.on({mouseenter:function(){w=0,d()},mouseleave:function(){w=Math.floor(-n.position().left/u),d(!0,g.duration/2)}}),q.on({mouseenter:function(){w=v-z,d()},mouseleave:function(){w=Math.ceil(-n.position().left/u),d(!0,g.duration/2)}})),s.addEventListener&&g.touchable&&(s.addEventListener("touchstart",i),s.addEventListener("touchmove",j),s.addEventListener("touchend",k)),h.resize(t.resize),g.keyboardAble&&h.keydown(l),g.scrollable&&(document.addEventListener&&s.addEventListener("DOMMouseScroll",f,!1),s.onmousewheel=f),e(t)})},a.extend(a.easing,{def:"easeIn",swing:function(b,c,d,e,f){return a.easing[a.easing.def](b,c,d,e,f)},easeIn:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOut:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},expoin:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},expoout:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},expoinout:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},elasin:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},elasout:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},elasinout:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*.3*1.5),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c},backin:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},backout:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},backinout:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},bouncein:function(b,c,d,e,f){return e-a.easing.bounceout(b,f-c,0,e,f)+d},bounceout:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},bounceinout:function(b,c,d,e,f){return f/2>c?.5*a.easing.bouncein(b,2*c,0,e,f)+d:.5*a.easing.bounceout(b,2*c-f,0,e,f)+.5*e+d}})}(jQuery);


//截图展示
var $window = $(window);
var $document = $(document);
var u = navigator.appVersion;
var isIE6 = u.indexOf("MSIE 6") > -1;
var $showcase = $(".showcase");
if ($showcase.length > 0) {
    var _showcase_top = $showcase.offset().top;
} 
(function() {
    var $scrollbar = $showcase.find(".scrollbar");
    var $slider = $showcase.find(".slider");
    var _scrollbar_api;
    var _slider_api;
    function imageDownload($obj, callback) {
        var len = $obj.length;
        var num = 0;
        var list = [];
        $obj.each(function() {
            if (this.complete && this.width) {
                doSomething();
            } else {
                this.onload = doSomething;
            }
            function doSomething() {
                num++;
                list.push(this);
                if (num == len) {
                    callback(list);
                }
            }
        });
    }
    imageDownload($scrollbar.find("li img"),
    function() {
        $scrollbar.scrollbar({
            contentCls: "s-content",
            direction: "x",
            inEndEffect: true
        },
        function(api) {
            _scrollbar_api = api;
        });
    });
    $scrollbar.find(".s-content li").each(function(i) {
        var $this = $(this);
        $this.click(function() {
            $scrollbar.hide();
            $slider.fadeIn("fast");
            if (_slider_api) {
                _slider_api.setIndex(i, false);
            }
        }).mouseenter(function() {
            $this.addClass('active').siblings().removeClass('active');
        }).mouseleave(function() {
            if ($this.hasClass('video')) {
                $this.removeClass('active');
                $(".picture").eq(0).addClass('active');
            }
        });
    });
    $slider.slider({
        contentCls: "s-content",
        navCls: "s-nav",
        triggerCondition: "span span",
        triggerType: "click",
        duration: 300,
        keyboardAble: true,
        beforeEvent: function() {}
    },
    function(api) {
        _slider_api = api;
    });
    $slider.find(".s-content li").click(function() {
        _slider_api.next();
    });
    $slider.find(".trigger").click(function() {
        $scrollbar.fadeIn("fast");
        $slider.hide();
        if (_scrollbar_api) {
            _scrollbar_api.resize();
        }
    });
    imageDownload($slider.find("li img"),
    function(list) {
        var $box = $slider.find(".s-box");
        var $list = $box.find(".s-content li");
        reset();
        $window.on('resize', reset);
        function reset() {
            var box_height = 0;
            var box_width = $box.width();
            $list.children().each(function(i) {
                var width = this.width;
                var height = this.height;
                if (width > box_width) {
                    height *= box_width / width;
                }
                if (height > box_height) {
                    box_height = height;
                }
            });
            if (box_height > 600) {
                box_height = 600;
            }
            if (box_height < 375) {
                box_height = 375;
            }
            $slider.find(".s-box").css({
                'height': box_height + 'px'
            });
            $slider.find(".prev,.next").css({
                'height': 128 + 'px'
            });
            $list.css({
                'height': box_height + 'px'
            }).children().removeAttr('style').each(function() {
                var $this = $(this);
                var width = this.width;
                var height = this.height;
                if (height > width) {
                    if (height > box_height) {
                        $this.css({
                            'height': box_height + 'px'
                        });
                    } else {
                        $this.css({
                            'margin-top': (box_height - height) / 2 + 'px'
                        });
                    }
                } else {
                    if (width > box_width) {
                        $this.css({
                            'width': box_width + 'px',
                            'margin-top': (box_height - box_width / width * height) / 2 + 'px'
                        });
                    } else {
                        $this.css({
                            'margin-top': (box_height - height) / 2 + 'px'
                        });
                    }
                }
            });
        }
    });
})(); 






