/*
*   hbData.js
*   海报中的数据
*   字体大小、粗细、对齐方式、公共方法
*
*   该js文件只在海报页面中引用
* */

var hb_fontSize = [12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,44,48,52,56,60];
var hb_fontWeight = ['加粗','不加粗','斜体','正常'];
var hb_alignType = ['居左','居中','居右','居上','居下'];
var hb_lineShow = ['一行展示','二行展示','三行展示','四行展示','五行展示','六行展示'];

// 设置海报整体尺寸
function set_hbsize() {
    $('.hb_size').hide();
    $('.hb_size_set').css('display','flex');
}
function set_hbSizeBtn() {
    $('.hb_size_set').hide();
    $('.hb_size').show();
    var w=$('.hbWidth').val(),
        h=$('.hbHeight').val();
    $('.hb_size .set_msg p').html('<span>宽：</span>'+ w +'px，<span style="margin-left: 16px;">高：</span>'+ h +'px');
    $('#poster').css({'width': w+'px','min-width': w+'px','height': h+'px'});
}

// 头像形状设置
function avatarCircle() {
    $('.u_pic img').css('border-radius','50%');
}
function avatarSquare() {
    $('.u_pic img').css('border-radius','0');
}

// 上传背景图
function chooseImg(files){
    var file=files.files[0];
    var reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=function(){
        var img=document.getElementById('Img');
        img.src=this.result;
    };
}
$("input[type=file]").change(function(){
    var str=$(this).val();
    if(str!==""){
        var arr=str.split("\\");
        var file_name=arr[arr.length-1];
        $(this).siblings('span').text(file_name);
    }
});

//  内容对齐方式公共方法
function alignType(item,cont) {
    var li = $(item).find('li');
    $(li).click(function(){
        var txt = $(this).text();
        // 需添加类名
        var l='align_left',
            c='align_center',
            r='align_right',
            t='align_top',
            b='align_bottom';
        // 需排除类名
        var outL = c+' '+r+' '+t+' '+b,
            outC = l+' '+r+' '+t+' '+b,
            outR = l+' '+c+' '+t+' '+b,
            outT = l+' '+c+' '+r+' '+b,
            outB = l+' '+c+' '+r+' '+t;

        switch (txt) {
            case '居左':
                cont.addClass(l).removeClass(outL);
                break;
            case '居中':
                cont.addClass(c).removeClass(outC);
                break;
            case '居右':
                cont.addClass(r).removeClass(outR);
                break;
            case '居上':
                cont.addClass(t).removeClass(outT);
                break;
            case '居下':
                cont.addClass(b).removeClass(outB);
                break;
            default:
                console.log('null');
        }
    });
}

// 字体大小公共方法
function fontSizeType(item,cont) {
    var li = $(item).find('li');
    $(li).click(function(){
        var txt = $(this).text();
        var hbH = $('.hbHeight').val();
        var font = Math.round((txt * hbH)/667);
        cont.css('font-size',font + 'px');
    });
}

// 字体粗细公共方法
function fontWeightType(item,cont) {
    var li = $(item).find('li');
    $(li).click(function(){
        var txt = $(this).text();
        switch (txt) {
            case '加粗':
                cont.css('font-weight','bold');
                break;
            case '不加粗':
                cont.css('font-weight','normal');
                break;
            case '斜体':
                cont.css('font-style','italic');
                break;
            case '正常':
                cont.css('font-style','normal');
                break;
            default:
                console.log('null');
        }
    });
}

// 文本行数展示公共方法
function contRowType(item,cont) {
    var li = $(item).find('li');
    $(li).click(function(){
        var txt = $(this).text();
        switch (txt) {
            case '一行展示':
                cont.attr('rows','1');
                break;
            case '二行展示':
                cont.attr('rows','2');
                break;
            case '三行展示':
                cont.attr('rows','3');
                break;
            case '四行展示':
                cont.attr('rows','4');
                break;
            case '五行展示':
                cont.attr('rows','5');
                break;
            case '六行展示':
                cont.attr('rows','6');
                break;
            default:
                console.log('null');
        }
    });
}




