// 选项卡
$(".nav-tabs li").on("click", function () {
    var index = $(this).index();
    $(this).parent().siblings().find(".tab-pane").hide().eq(index).show();
    $(this).addClass("active").siblings().removeClass("active");
});

//  叠加选项卡
$(document).ready(function() {
    $(".head-tab2 li,.head-tab3 li").each(function(i) {
        $(this).attr("id", i).css("z-index", 100 - i);
    });
    $(".head-tab2 li").click(function(e) {
        var currentID = parseInt($(".current").attr("id"));
        var clickedID = parseInt($(this).attr("id"));
        var index=$(this).index();
        if (currentID != clickedID) {
            e.preventDefault();
            var currentZ = 99;
            var current = $(this);
            setTimeout(function() {
                $(".current").removeClass("current active");
                current.css("z-index", currentZ).addClass("current active");
                $('.tab-content > .tab-pane').eq(index).show().siblings().hide();
            }, 0);

            if (clickedID > currentID) {
                var i = -50;
                var total = clickedID - currentID +1;   // 2
                setTimeout(function() {
                    for (j = clickedID - 1; j >= 0; j = j - 1) {
                        $("#" + j).css("z-index", total - i);
                        i = i+1;
                    }
                }, 0);
            } else {
                var i = 1;
                var total = $(".head-tab2 li").length;
                for (j = clickedID + 1; j <= total; j = j + 1) {
                    $("#" + j).css("z-index", currentZ - i);
                    i = i+1;
                }
            }
        }
    });
    $(".head-tab3 li").click(function(e) {
        var currentID = parseInt($(".current3").attr("id"));
        var clickedID = parseInt($(this).attr("id"));
        var index=$(this).index();
        console.log(index);
        if (currentID != clickedID) {
            e.preventDefault();
            var currentZ = 99;
            var current3 = $(this);
            setTimeout(function() {
                $('.current3').removeClass("current3 active");
                current3.css("z-index", currentZ).addClass("current3 active");
                $('.tab-content3 > .tab-pane').eq(index).show().siblings().hide();
            }, 0);

            if (clickedID > currentID) {
                var i = -40;
                var total = clickedID - currentID +1;   // 2
                setTimeout(function() {
                    for (j = clickedID - 1; j >= 0; j = j - 1) {
                        $("#" + j).css("z-index", total - i);
                        i = i+1;
                    }
                }, 0);
            } else {
                var i = 1;
                var total = $(".head-tab3 li").length;
                for (j = clickedID + 1; j <= total; j = j + 1) {
                    $("#" + j).css("z-index", currentZ - i);
                    i = i+1;
                }
            }
        }
    });
});


$(".table_cont tr td,.table_cont2 tr td,.normal-table tr td").each(function () {
    $(this).attr("title", $(this).text());
    $(".table_cont tr td.cz_btn,.table_cont2 tr td.cz_btn").attr("title", '');
});

$('.top_tit > a,.top_tit2 > a').click(function(){
    $(this).siblings('ul').toggle();
    $(this).children('em').toggleClass('on');
    event.stopPropagation();
});
$('.top_tit li input,.top_tit2 li input,.top_tit2 li i').click(function (e) {
    event.stopPropagation();
    $(this).parents('ul').show();
});
$('.top_tit li,.top_tit2 li').click(function (e) {
    event.stopPropagation();
    $(this).parent('ul').hide();
    $(this).parent().siblings('a').find('em').removeClass('on');
    $(this).parent().siblings('a').find('span').text($(this).children().text());
    $(this).addClass('active').siblings().removeClass('active');
});


$('.select-text').click(function (e) {
    e.stopPropagation();
    $(this).children('ul').slideToggle('fast');
    $(this).toggleClass('on');
    $(this).parents().siblings().find('.select-text').removeClass('on');
    $(this).parents().siblings().find('.select-text ul').hide();
    $(this).siblings('.select-text').removeClass('on').find('ul').hide();
});
$('.select-text ul li').click(function (e) {
    e.stopPropagation();
    $(this).parent().siblings('.select-txt').text($(this).text());
    $(this).parent().slideUp('fast');
    $(this).parents('.select-text').removeClass('on');
    $(this).addClass('active').siblings().removeClass('active');
});

$('.href_btn1').click(function (){
    $(this).siblings('.href_cont1').fadeToggle('fast');
    $(this).siblings().find('.href_cont2').hide();
    event.stopPropagation();
});
$('.href_btn2').click(function (){
    $(this).siblings('.href_cont2').fadeToggle('fast');
    $(this).siblings().find('.href_cont1').hide();
    $(this).parent().siblings('.href_cont1').hide();
    $(this).parent().siblings().find('.href_cont2').hide();
    event.stopPropagation();
});
$('.href_cont').click(function (){
    $(this).show();
    event.stopPropagation();
});

$('.rq-tab li').click(function () {
    $(this).find('i').addClass('on');
    $(this).siblings().find('i').removeClass('on');
});
$(document).click(function(event){
    $(".top_tit ul,.top_tit2 ul").hide();
    $('.top_tit2 a em').removeClass('on');
    $('.href_cont').fadeOut('fast');
    $('.page-nums ul').slideUp('fast');
    $('.page-nums div').removeClass('on');
    $('.select-text ul').hide();
    $('.select-text').removeClass('on');
    $(".table-eq").remove();
    event.stopPropagation();    //  阻止事件冒泡
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$('.slide-span span').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
});

