// 1.右侧固定内容，滚动页面后内容跟随滚动
// ; 用来提高兼容性
;
(function($){
    $.fn.slideFixed = function(item){
        // 2.声明一个对象，用来给每个盒子设置属性
        var defaults = {
            // 间距
            gap : 10
        };
        // 3.通过 $.extend() 来进行拓展
        defaults = $.extend(defaults);

        var $this = $(this); //

        var offset = $this.offset();
        //var position = ($(window).scrollTop() - offset.top) + defaults.gap;
        var win;
        if(!item){
            win = window;
        }else{
            win = item;
        }

        var position = ($(win).scrollTop());
        console.log(position);

        $this.stop().animate({
            marginTop: position
        });

        $(win).scroll(function() {

            if ($(win).scrollTop() > offset.top) {
                var newPosition = ($(win).scrollTop()) ;
                $this.stop().animate({
                    marginTop: newPosition - 180
                });
            } else {
                $this.stop().animate({
                    marginTop: 0
                });
            }
        });

    };
})(jQuery);

