
$.sidebarMenu = function(menu) {
    var animationSpeed = 300;
    $(menu).on('click', 'li a',
        function(e) {
            var $this = $(this);
            var checkElement = $this.next();
            if (checkElement.is('.nav') && checkElement.is(':visible')) {
                checkElement.slideUp(animationSpeed,
                    function() {
                        checkElement.removeClass('menu-open');
                    });
                checkElement.parent("li").removeClass("active");
            } else if ((checkElement.is('.nav')) && (!checkElement.is(':visible'))) {
                var parent = $this.parents('ul').first();
                var ul = parent.find('ul:visible').slideUp(animationSpeed);
                ul.removeClass('menu-open');
                var parent_li = $this.parent("li");
                checkElement.slideDown(animationSpeed,
                    function(){
                        checkElement.addClass('menu-open');
                        parent.find('li.active').removeClass('active');
                        parent_li.addClass('active');
                    });
            }
            if (checkElement.is('.nav')) {
                e.preventDefault();
            }
        });
};

$(function () {

    // MetsiMenu
    //$('#side-menu').metisMenu();

    $('.nav-second-level').hide();
    $('.nav li a').click(function (){
        $(this).find('.fa-sort-down').toggleClass('on');
        $(this).parent().siblings().children().find('.fa-sort-down').removeClass('on');
    });

    $('.nav-second-level > li > a').click(function () {
        if($(this).next('ul').length > 0){

        }else{
            $(this).parent().addClass('active3').siblings().removeClass('active3');
            $(this).parent().parent().parent().siblings().removeClass('active3');
            $(this).parent().parent().parent().siblings().find('li').removeClass('active3');
            $(this).parent().siblings().removeClass('active3 active').find('ul').slideUp('100');
            $(this).parent().siblings().find('li').removeClass('active3');
        }
    });

    $('.nav-four-level a').click(function(){
        $(this).parents('ul').find('li').removeClass('active3');
        $(this).parent().addClass('active3').siblings().removeClass('active3');
    });
    //ios浏览器兼容性处理
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        $('#content-main').css('overflow-y', 'auto');
    }

});

