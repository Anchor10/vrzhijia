
最近更新和人气排行Tab切换
$(".left-top a").click(function(){
    $(".left-top a").removeClass("cur");
    $(this).addClass("cur");
    console.log($(this).index());
    $(".uls").hide().eq($(this).index()).show();
    sessionStorage.setItem("curIndex",$(this).index());
})

$(function(){
    var curIndex = sessionStorage.getItem("curIndex");
    $(".uls").eq(curIndex).show().siblings().hide();
    $(".left-top a").eq(curIndex).addClass("cur").siblings().removeClass("cur");
})

