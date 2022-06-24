// 选项卡
$(".nav-tabs li").on("click", function () {
    var index = $(this).index();
    $(this).parent().siblings().find(" > .tab-pane").hide().eq(index).show();
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
                $('.current').removeClass("current active");
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
    // $(this).attr("title", $(this).text());
    // $(".table_cont tr td.cz_btn,.table_cont2 tr td.cz_btn").attr("title", '');
});

$('.top_tit > a,.top_tit2 > a').on('click',function(){
    $(this).siblings('ul').toggle();
    $(this).children('em').toggleClass('on');
    event.stopPropagation();
});
$('.top_tit li input,.top_tit2 li input,.top_tit2 li i').on('click',function (e) {
    event.stopPropagation();
    $(this).parents('ul').show();
});
$('.top_tit li,.top_tit2 li').on('click',function (e) {
    event.stopPropagation();
    $(this).parent('ul').hide();
    $(this).parent().siblings('a').find('em').removeClass('on');
    $(this).parent().siblings('a').find('span').text($(this).children().text());
    $(this).addClass('active').siblings().removeClass('active');
});


$('.select-text').on('click',function (e) {
    e.stopPropagation();
    $(this).children('ul').slideToggle('fast');
    $(this).toggleClass('on');
    $(this).parents().siblings().find('.select-text').removeClass('on');
    $(this).parents().siblings().find('.select-text ul').hide();
    $(this).siblings('.select-text').removeClass('on').find('ul').hide();
});
$('.select-text ul li').on('click',function (e) {
    e.stopPropagation();
    $(this).parent().siblings('.select-txt').text($(this).text());
    $(this).parent().slideUp('fast');
    $(this).parents('.select-text').removeClass('on');
    $(this).addClass('active').siblings().removeClass('active');
});

$(function () {
    //$('[data-toggle="tooltip"]').tooltip();

});


//  表格竖向滚动时头部固定，横向滚动时头部跟随滑动
$('.table-tbody').on('scroll',function(){
    $(this).siblings(".table-thead").scrollLeft(this.scrollLeft);
    // 固定列表格中，竖向滚动时，左右固定列跟随滚动
    $('.table-fixed .table-tbody').scrollTop(this.scrollTop);
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
    $('.tab-tips.column .table-tool').hide();
    event.stopPropagation();    //  阻止事件冒泡
});

$('.slide-span span').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});

$('.copy-btn').on('click', function(){
    var that = this;
    layer.tips('复制成功', that,{
        tips: [1, '#0FA6D8'],
        time: 1000
    });
});
$('.download-btn').on('click', function(){
    var that = this;
    layer.tips('下载成功', that,{
        tips: [1, '#0FA6D8'],
        time: 1000
    });
});
/* 表格选择按钮 */
/*$('.chose-btn').click(function () {
    if($(this).text()==="选入"){
        $(this).text('已选入').addClass('on');
    }else{
        $(this).text('选入').removeClass('on');
    }
});*/

// 文本框内容颜色
/*$('.txt_cont').focus(function () {
    $(this).css('color','#333');
}).blur(function () {
    $(this).css('color','#999');
});*/

//  可编辑div换行后添加br标签
function fixLineBreak() {
    var sel, range;
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            // Range.createContextualFragment() would be useful here but is
            // only relatively recently standardized and is not supported in
            // some browsers (IE9, for one)
            var el = document.createElement("div");
            el.innerHTML = '<br>';
            var frag = document.createDocumentFragment(),
                node, lastNode;
            while ((node = el.firstChild)) {
                lastNode = frag.appendChild(node);
            }
            var firstNode = frag.firstChild;
            range.insertNode(frag);

            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if ((sel = document.selection) && sel.type != "Control") {
        // IE < 9
        var originalRange = sel.createRange();
        originalRange.collapse(true);
        sel.createRange().pasteHTML('<br>');
    }
}
$(document).ready(function() {
    $('.text_contentditable').on('keydown', function(e) {
        if (e.keyCode == 13) {
            fixLineBreak();
            e.preventDefault();
        }
    });
});


// 关闭弹出层
function cancel(){
    $(".layui-layer-close1").trigger('click');
    $(".layui-layer-shade").trigger('click');
}
$('.btn-list2 .btn').on('click',function () {
    cancel();
});
$('.model .mark,.model .close_tip').on('click',function () {
    $(this).parents('.model').hide();
    cancel();
    showScrol();
});

// 表格 更新、同步按钮
// var timer;
// $('.tab_content2 .update').on('click',function () {
//     clearInterval(timer);
//     var that = this;
//     $(that).addClass('on');
//     timer = setInterval(function () {
//         layer.msg('更新完成', {
//             icon: 1,
//             time: 2000 //2秒关闭（如果不配置，默认是3秒）
//         }, function(){
//             //do something
//         });
//         $(that).removeClass('on');
//         clearInterval(timer);
//     },1000);
//
// });


$(function (){
    // 加载页面后判断输入框是否有内容
    $('.a_list .edit_cont').each(function (){
        if($(this).find('input').val().length > 0){
            $(this).siblings('.edit_icon').show();
            $(this).find('input').attr('readonly','readonly');
        }else{
            $(this).siblings('.edit_icon').hide();
        }
    });
    // 点击输入框，失去焦点后判断是否有内容
    $('.edit_cont input').focus(function (){

    }).blur(function (){
        var remain = $(this).val().length;
        if(remain > 0){
            $(this).parent().siblings('.edit_icon').show();
            $(this).attr('readonly','readonly');
        }else{
            $(this).parent().siblings('.edit_icon').hide();
        }
    });
    //
    $('textarea').focus(function (){
        $(this).css('border-color','#f80');
    }).blur(function (){
        $(this).css('border-color','#e5e5e5');
    });
    //
    $('.edit_icon').click(function () {
        var txt = $(this).siblings('.edit_cont').find('input').val();
        $(this).siblings('.edit_cont').find('input').removeAttr('readonly').val('').focus().val(txt);
    });

    // 表格头部筛选列
    $('.tab-tips.column span').on('click',function () {
        $(this).siblings('.table-tool').toggle();
        event.stopPropagation();
    });
    $('.tab-tips.column .table-tool').on('click',function () {
        $(this).show();
        event.stopPropagation();
    });

    // 模板输入框监听，显隐颜色值选取框
    $('.code-write li').each(function (){
        var i = $(this).find('input').eq(0).val().length;
        if(i > 0){
            $(this).find('input').eq(1).show();
        }else{
            $(this).find('input').eq(1).hide();
        }
    });
    $('.code-write input').keyup(function(){
        var that = this;
        var remain = $(that).val().length;
        if(remain > 0){
            $(that).siblings('.color').find('input').show();
        }else{
            $(that).siblings('.color').find('input').hide();
        }
    });
});



// 禁止页面滚动
function disScrol() {
    document.body.parentNode.style.overflow = "hidden";
}
// 允许页面滚动
function showScrol() {
    document.body.parentNode.style.overflow = "auto";
}


//  表格中展示二维码、链接；  参数（点击元素，二维码地址，链接地址）
function mDoubPic(className,showImg,hrefValue) {
    // console.log(className);
    // console.log(showImg);
    if(showImg === null || showImg === undefined){
        showImg = 'http://cshtml.lkmsxy.com/eq.jpg';
    }
    if(hrefValue === null || hrefValue === undefined){
        hrefValue = 'http://cshtml.lkmsxy.com/404.html';
    }
    $(className).on('click',function (e) {
        e.stopPropagation();
        //console.log(e.pageX + '--' + e.pageY);
        var html='<div class="table-eq">'+
                    '<div class="show-pic">'+
                        '<em></em>'+
                        '<img src="" alt="">' +
                        '<div><input type="text" value="http://ht.lkmsxy.com/Main2/main.aspx"><span>复制</span></div>' +
                    '</div>' +
                '</div>';
        $('.table-eq').remove();
        $('body').append(html);
        $(".table-eq .show-pic img").attr('src',showImg);
        $(".table-eq .show-pic input").val(hrefValue);
        $('.show-pic').click(function (e) {
            e.stopPropagation();
            $(this).show();
        });
        // 判断临界点，展示位置
        if($(window).height() - e.pageY >= 307){
            $(".table-eq").css({
                "left": e.pageX-180,
                "top": e.pageY+20,
            });
        }else{
            $(".table-eq").css({
                "left": e.pageX-180,
                "top": e.pageY - 327,
            });
            $(".table-eq .show-pic em").css({
                "border-top": '14px solid #fff',
                "bottom": '-10px',
                'border-bottom':'none',
                'top':'unset'
            });
        }

    });
}







