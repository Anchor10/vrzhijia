$(function(){
    $(".game-list li").hover(function() {
        $(this).addClass("on").siblings().removeClass("on")
    })
})