$(".table_cont tr td").each(function () {
    $(this).attr("title", $(this).text());
    $(".table_cont tr td.cz_btn").attr("title", '');
});

$('.top_tit > a').click(function(){
    $('.top_tit ul').toggle();
    event.stopPropagation();
});
$('.top_tit li input').click(function (e) {
    event.stopPropagation();
    $(this).parents('ul').show();
});
$('.top_tit li a').click(function () {$(this).parents('ul').hide();});



$('.href_btn1').click(function (){
    $(this).parent().siblings('.href_cont1').fadeToggle('fast');
    $(this).parent().siblings('.href_cont2').hide();
    event.stopPropagation();
});
$('.href_btn2').click(function (){
    $(this).parent().siblings('.href_cont2').fadeToggle('fast');
    $(this).parent().siblings('.href_cont1').hide();
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
    $(".top_tit ul").hide();
    $('.href_cont').fadeOut('fast');
    event.stopPropagation();    //  阻止事件冒泡
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$('.slide-span span').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
});

