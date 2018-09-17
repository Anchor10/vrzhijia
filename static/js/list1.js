// 应用TOP榜
$(function(){
    $(".rank-list").on("mouseover",".dds",function(){
        $(".rank-list .dds").removeClass("hover");
        $(this).addClass("hover");
    })
})


//最近更新和人气排行Tab切换
$(".main-nav a").click(function(){
    $(".main-nav a").removeClass("cur");
    $(this).addClass("cur");
    console.log($(this).index());
    $(".uls").hide().eq($(this).index()).show();
    // $(".uls").eq($(this).index()).show();
    sessionStorage.setItem("curIndex",$(this).index());
})
$(function(){
    var curIndex = sessionStorage.getItem("curIndex");
    $(".uls").eq(curIndex).show().siblings().hide();
    // $(".uls").eq(curIndex).siblings().hide();
    // $(".main-nav a").eq(curIndex).siblings().removeClass("cur");
    $(".main-nav a").eq(curIndex).addClass("cur").siblings().removeClass("cur");
})
