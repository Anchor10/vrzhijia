// 原图轮播
  var mySwiper1 = new Swiper('#slide1', {
    width: $(window).width() * 0.95,
    hiehgt: ($(window).height() * 0.7),
    freeMode: false,
    pagination: '#pagination1',
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  })
  // 详情轮播
  $(function(){
    var mySwiper2 = new Swiper('#slide2', {
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
        freeMode: true,
        slidesPerView:'auto',
        spaceBetween: 20,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
      })
    mySwiper2.scrollbar.updateSize();
  })

    // 点击查看原图
    $("#slide2 .swiper-slide").on("click", function () {
      $(".logbg").show();
      $("#slide1").show();
      mySwiper1.slideTo($(this).index());
    })

    // 点击关闭原图
  $(function () {
    $("#slide1 .swiper-slide,.c-btn").on("click", function () {
      $(".logbg").hide();
      $("#slide1").hide();
    })
  })

//   专题切换
$(".collect-nav").on("click","a",function(){
    $(".collect-nav a").removeClass("blue");
    $(this).addClass("blue");
    $(".ol-container").hide();
    $(".ol-container").eq($(this).index()).show();
})

// 下载按钮-20181123
// $(function(){
//   $(".android").hover(function(){
//     $(this).find(".eight-ewm").stop().slideDown(200);
//   },function(){
//     $(this).find(".eight-ewm").stop().slideUp(200);
//   })
//   $(".ios").hover(function(){
//     $(this).find(".eight-ewm").stop().slideDown(200);
//   },function(){
//     $(this).find(".eight-ewm").stop().slideUp(200);
//   })
// })

$(function(){
  $('.btn-download.ios').click(function(e){
    e.stopPropagation();    
    $('.eight-ewm.box2').slideToggle(200);
    $('.eight-ewm.box1').slideUp(200);
  })
  $('.btn-download.android').click(function(e){
    e.stopPropagation();
    $('.eight-ewm.box1').slideToggle(200);
    $('.eight-ewm.box2').slideUp(200);
  })
  $('body').click(function(){$('.eight-ewm').slideUp(200);})
})