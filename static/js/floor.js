function floor(totop,fixedevery,louceng,header) {
    this.totop = totop;
    this.fixedevery = fixedevery;
    this.louceng = louceng;
    this.header = header;
}
floor.prototype = {
    init: function () {
        var that = this;
        that.start();
        this.totopClick();
        this.fixedeveryClick();
    },
    start: function () {
        var that = this;
        $(window).scroll(function(){
            var winH=$(window).height();
            var iTop = $(window).scrollTop();
            if(iTop>$(that.header).height()){
                $(that.fixedevery).parent().fadeIn();
                $(that.totop).fadeIn();
                $(that.louceng).each(function(){
                    if(winH+iTop - $(this).offset().top>winH/2){
                        $(that.fixedevery).removeClass('active');
                        $(that.fixedevery).eq($(this).index()).addClass('active');
                    }
                })}
            // }else{
            //     $(that.fixedevery).parent().fadeOut();
            //     $(that.totop).fadeOut();
            // }
        });
    },
    totopClick: function () {
        var that = this;
        $(that.totop).click(function(){
            $('body,html').animate({"scrollTop":0},300)
        })
    },
    fixedeveryClick: function () {
        var that = this;
        $(that.fixedevery).click(function(){
            var t = $(that.louceng).eq($(this).index()).offset().top -40;
            $('body,html').animate({"scrollTop":t},300);
            $(this).addClass('active').siblings().removeClass('active');
        });
    }

}