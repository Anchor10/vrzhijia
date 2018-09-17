var mySwiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    loop:true
  });

  var li=document.getElementsByClassName('current-li');
var title=document.getElementsByClassName('current');
if(li.length>0){
    for(var x=0;x<li.length;x++){
        (function (i) {
            li[i].onmouseover=function () {
                for(var j=0;j<li.length;j++){     
                    li[j].className="current-li"; 
                }
                li[i].className="current-li current";
            }
        })(x)
    }
}