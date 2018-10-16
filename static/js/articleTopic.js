$(function(){
        $(".slideBox").slide({ 
            mainCell:"ul",
            autoPlay:false,
            effect:"left", 
            vis:3, 
            scroll:1, 
            autoPage:true, 
            pnLoop:true 
      })
        $('.boxer').fancybox({
            closeClick : true,
            prevEffect : 'none',
            nextEffect : 'none',
            afterLoad : function() {
                console.log(this.index);
                this.title = (this.index + 1) + ' /' + this.group.length + (this.title ? ' - ' + this.title : '');
            }
        });

});
// 返回顶部
$(function(){
    $(".go-top").on("click",function(){
        $("html,body").animate({scrollTop:0},"slow");
    })
})