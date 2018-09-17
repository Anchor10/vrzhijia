// 分页tab切换
$(".page-num").on("click","a",function(){
    $(".page-num a").removeClass("page-cur");
    $(this).addClass("page-cur");
    $(".list").hide();
    var num = $(this).html();
    var str = `.list${num}`;
    $(str).show();
})