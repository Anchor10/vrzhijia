
$(function(){
    if(sessionStorage.getItem("cur")){
        var cur = sessionStorage.getItem("cur");
        
        $(".zt_right").eq(cur).show();
        $(".zt_right").eq(cur).siblings(".zt_right").hide();
        $(".left_menu .cur").eq(cur).addClass("active").siblings().removeClass("active");
    }
    
})

// 专题列表Tab切换
$(".left_menu .cur").click(function(){
    $(".left_menu .cur").removeClass("active");
    $(this).addClass("active");
    $(".zt_right").hide().eq($(this).index()).show();
    sessionStorage.setItem("cur",$(this).index());
    console.log(sessionStorage.getItem("cur"));
})


