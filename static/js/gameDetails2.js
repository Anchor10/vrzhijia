var mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  loop: true
});

// 游戏系统tab
$(".d_tab_g").on("click",function(){
  $(".d_tab_g").removeClass("d_tab_hover");
  $(this).addClass("d_tab_hover");
  $(".d_tabs_main").hide();
  $(".d_tabs_main").eq($(this).index()).show();
})

// 错误反馈
$('.fankui').click(function(){
	$('.box').hide();
	$(".hpopBox").show();
})
$('.guanbifankui').click(function(){
	$(".hpopBox").hide();
})

$('.fankui1').click(function(){
	$('.box').hide();
	$(".fxTcBox").show();
})
$('.guanbifankui1').click(function(){
	$(".fxTcBox").hide();
})

// 查看安装教程
$("#problem").on("click",function(){
  $("body,html").animate({"scrollTop":"1300px"});
})
// 下载按钮
$(function(){
  $('#xiazaila').click(function(e){
    e.stopPropagation();
    $('.eight-ewm.box1').slideToggle(200);
  })
  $('body').click(function(){$('.eight-ewm').slideUp(200);})
})