// 轮播图
var mySwiper1 = new Swiper('.swiper1', {
  effect : 'fade',
  autoplay:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 10,
      loop:true,
      loopedSlides: 5, 
  });
  var mySwiper2 = new Swiper('.swiper2', {
    spaceBetween: 10,
      slidesPerView: 4,
      touchRatio: 0.2,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      slideToClickedSlide: true,
    });
    mySwiper1.controller.control = mySwiper2;
    mySwiper2.controller.control = mySwiper1;
    // nav-tab
    $(".bor_no").click(function(){
        $(".bor_no").addClass("active");
        $(".bor_no1").removeClass("active");
        $(".bor_no2").removeClass("active");
        $(".game_reco_list").css("display","block");
        $(".game_reco_list1").css("display","none");
        $(".game_reco_list2").css("display","none");
    })
    $(".bor_no1").click(function(){
        $(".bor_no1").addClass("active");
        $(".bor_no").removeClass("active");
        $(".bor_no2").removeClass("active");
        $(".game_reco_list").css("display","none");
        $(".game_reco_list1").css("display","block");
        $(".game_reco_list2").css("display","none");
    })
    $(".bor_no2").click(function(){
        $(".bor_no2").addClass("active");
        $(".bor_no1").removeClass("active");
        $(".bor_no").removeClass("active");
        $(".game_reco_list").css("display","none");
        $(".game_reco_list1").css("display","none");
        $(".game_reco_list2").css("display","block");
    })



    $(function(){
        $(".ios-rank").on("mouseover",".dds",function(){
            $(".ios-rank .dds").removeClass("hover");
            $(this).addClass("hover");
        })
        $(".android-rank").on("mouseover",".dds",function(){
            $(".android-rank .dds").removeClass("hover");
            $(this).addClass("hover");
        })
        $(".online-rank").on("mouseover",".dds",function(){
            $(".online-rank .dds").removeClass("hover");
            $(this).addClass("hover");
        })
        $(".new-rank").on("mouseover",".dds",function(){
            $(".new-rank .dds").removeClass("hover");
            $(this).addClass("hover");
        })
    })
  
  // 侧边锚点滚动floor.js
  
  var obj = new floor('.totop','.anch li','.louceng','.header_hd');
  obj.init();

// 今日热点tab
var num = 0;
var index = 0;
$(".news-top").on("click","h2",function(){
    index = 0;
    $(".news-top h2").removeClass("on");
    $(this).addClass("on");
    $(".news-box").hide();
    $(".news-box").eq($(this).index()).show();
    num = $(this).index();
    
    $(".news-box").eq(num).find(".news-list").hide(0);
    $(".news-box").eq(num).find(".news-list").eq(index).show(0);
})

//   今日热点切换效果

$(".change-one").on("click",function(){
    
    index++;
    if(index>2){
        index=0;
    }
    $(".news-box").eq(num).find(".news-list").hide(500);
    $(".news-box").eq(num).find(".news-list").eq(index).show(500);
})


// 评分
$(function(){
    // console.log($(".mask").length);
    for(var i = 0;i < $(".mask").length;i++){
        var item = $('.circle-bar').eq(i);
        // console.log(item.find('.mask'));
        var percent = parseFloat(item.find('.mask').text())*10;
        // console.log(percent);
        var baseColor = $('.circle-bar').css('background-color');
        
        if( percent<=50 ){
            item.find('.circle-bar-right').css('transform','rotate('+(percent*3.6)+'deg)');
        }else {
            item.find('.circle-bar-right').css({
                'transform':'rotate(0deg)',
                'background-color':baseColor
            });
            item.find('.circle-bar-left').css('transform','rotate('+((percent-50)*3.6)+'deg)');
        }
    }
})

// 游戏推荐tab切换
$(".recom-title").on("click",function(){
    $(".recom-title").removeClass("recom-on");
    $(this).addClass("recom-on");
    $(".recom-list").hide();
    $(".recom-list").eq($(this).index(".recom-title")).show();
})

$(".online-title").on("click",function(){
    $(".online-title").removeClass("online-on");
    $(this).addClass("online-on");
    $(".online-list").hide();
    $(".online-list").eq($(this).index(".online-title")).show();
})

$("#wy").on("click",function(){
    $("#more").attr('href','http://www.vrzhijia.com/game/bt/');
})
$("#vryx").on("click",function(){
    $("#more").attr('href','http://www.vrzhijia.com/game/');
})
$("#vryy").on("click",function(){
    $("#more").attr('href','http://www.vrzhijia.com/game/0_78_0_1_0.html');
})
