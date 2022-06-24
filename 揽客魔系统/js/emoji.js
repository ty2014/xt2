$(document).ready(function(e) {
    ImgIputHandler.Init();

});
var ImgIputHandler={
    facePath:[
        {faceName:"微笑",facePath:"icon_emotion_panel-1.png"},
        {faceName:"撇嘴",facePath:"icon_emotion_panel-2.png"},
        {faceName:"色",facePath:"icon_emotion_panel-3.png"},
        {faceName:"发呆",facePath:"icon_emotion_panel-4.png"},
        {faceName:"得意",facePath:"icon_emotion_panel-5.png"},
        {faceName:"流泪",facePath:"icon_emotion_panel-6.png"},
        {faceName:"害羞",facePath:"icon_emotion_panel-7.png"},
        {faceName:"闭嘴",facePath:"icon_emotion_panel-8.png"},
        {faceName:"睡",facePath:"icon_emotion_panel-9.png"},
        {faceName:"大哭",facePath:"icon_emotion_panel-10.png"},
        {faceName:"尴尬",facePath:"icon_emotion_panel-11.png"},
        {faceName:"调皮",facePath:"icon_emotion_panel-13.png"},
        {faceName:"呲牙",facePath:"icon_emotion_panel-14.png"},
        {faceName:"惊讶",facePath:"icon_emotion_panel-15.png"},
        {faceName:"难过",facePath:"icon_emotion_panel-16.png"},
        {faceName:"囧",facePath:"icon_emotion_panel-17.png"},
        {faceName:"抓狂",facePath:"icon_emotion_panel-18.png"},
        {faceName:"吐",facePath:"icon_emotion_panel-19.png"},
        {faceName:"偷笑",facePath:"icon_emotion_panel-20.png"},
        {faceName:"愉快",facePath:"icon_emotion_panel-21.png"},
        {faceName:"白眼",facePath:"icon_emotion_panel-22.png"},
        {faceName:"傲慢",facePath:"icon_emotion_panel-23.png"},
        {faceName:"困",facePath:"icon_emotion_panel-24.png"},
        {faceName:"惊恐",facePath:"icon_emotion_panel-25.png"},
        {faceName:"憨笑",facePath:"icon_emotion_panel-27.png"},
        {faceName:"悠闲",facePath:"icon_emotion_panel-28.png"},
        {faceName:"疑问",facePath:"icon_emotion_panel-31.png"},
        {faceName:"嘘",facePath:"icon_emotion_panel-32.png"},
        {faceName:"晕",facePath:"icon_emotion_panel-33.png"},
        {faceName:"衰",facePath:"icon_emotion_panel-34.png"},
        {faceName:"敲打",facePath:"icon_emotion_panel-36.png"},
        {faceName:"再见",facePath:"icon_emotion_panel-37.png"},
        {faceName:"擦汗",facePath:"icon_emotion_panel-38.png"},
        {faceName:"抠鼻",facePath:"icon_emotion_panel-39.png"},
        {faceName:"鼓掌",facePath:"icon_emotion_panel-40.png"},
        {faceName:"坏笑",facePath:"icon_emotion_panel-41.png"},
        {faceName:"左哼哼",facePath:"icon_emotion_panel-42.png"},
        {faceName:"右哼哼",facePath:"icon_emotion_panel-43.png"},
        {faceName:"鄙视",facePath:"icon_emotion_panel-45.png"},
        {faceName:"委屈",facePath:"icon_emotion_panel-46.png"},
        {faceName:"快哭了",facePath:"icon_emotion_panel-47.png"},
        {faceName:"阴险",facePath:"icon_emotion_panel-48.png"},
        {faceName:"亲亲",facePath:"icon_emotion_panel-49.png"},
        {faceName:"可怜",facePath:"icon_emotion_panel-50.png"},
        {faceName:"笑脸",facePath:"icon_emotion_panel-51.png"},
        {faceName:"生病",facePath:"icon_emotion_panel-52.png"},
        {faceName:"脸红",facePath:"icon_emotion_panel-53.png"},
        {faceName:"破涕为笑",facePath:"icon_emotion_panel-55.png"},
        {faceName:"恐惧",facePath:"icon_emotion_panel-56.png"},
        {faceName:"失望",facePath:"icon_emotion_panel-57.png"},
        {faceName:"无语",facePath:"icon_emotion_panel-58.png"},
        {faceName:"嘿哈",facePath:"icon_emotion_panel-59.png"},
        {faceName:"捂脸",facePath:"icon_emotion_panel-60.png"},
        {faceName:"坏笑",facePath:"icon_emotion_panel-61.png"},
        {faceName:"机智",facePath:"icon_emotion_panel-62.png"},
        {faceName:"皱眉",facePath:"icon_emotion_panel-63.png"},
        {faceName:"耶",facePath:"icon_emotion_panel-64.png"},
        {faceName:"吃瓜",facePath:"icon_emotion_panel-65.png"},
        {faceName:"加油",facePath:"icon_emotion_panel-66.png"},
        {faceName:"汗",facePath:"icon_emotion_panel-67.png"},
        {faceName:"Emm",facePath:"icon_emotion_panel-69.png"},
        {faceName:"社会社会",facePath:"icon_emotion_panel-70.png"},
        {faceName:"旺柴",facePath:"icon_emotion_panel-71.png"},
        {faceName:"好的",facePath:"icon_emotion_panel-72.png"},
        {faceName:"打脸",facePath:"icon_emotion_panel-73.png"},
        {faceName:"哇",facePath:"icon_emotion_panel-75.png"},
        {faceName:"翻白眼",facePath:"icon_emotion_panel-76.png"},
        {faceName:"666",facePath:"icon_emotion_panel-77.png"},
        {faceName:"让我看看",facePath:"icon_emotion_panel-78.png"},
        {faceName:"叹气",facePath:"icon_emotion_panel-79.png"},
        {faceName:"苦涩",facePath:"icon_emotion_panel-80.png"},
        {faceName:"裂开",facePath:"icon_emotion_panel-81.png"},
        {faceName:"嘴唇",facePath:"icon_emotion_panel-82.png"},
        {faceName:"爱心",facePath:"icon_emotion_panel-83.png"},
        {faceName:"心碎",facePath:"icon_emotion_panel-84.png"},
        {faceName:"拥抱",facePath:"icon_emotion_panel-85.png"},
        {faceName:"强",facePath:"icon_emotion_panel-86.png"},
        {faceName:"弱",facePath:"icon_emotion_panel-87.png"},
        {faceName:"握手",facePath:"icon_emotion_panel-88.png"},
        {faceName:"胜利",facePath:"icon_emotion_panel-89.png"},
        {faceName:"抱拳",facePath:"icon_emotion_panel-90.png"},
        {faceName:"勾引",facePath:"icon_emotion_panel-91.png"},
        {faceName:"拳头",facePath:"icon_emotion_panel-92.png"},
        {faceName:"OK",facePath:"icon_emotion_panel-93.png"},
        {faceName:"合十",facePath:"icon_emotion_panel-94.png"},
        {faceName:"西瓜",facePath:"icon_emotion_panel-96.png"},
        {faceName:"啤酒",facePath:"icon_emotion_panel-97.png"},
        {faceName:"咖啡",facePath:"icon_emotion_panel-98.png"},
        {faceName:"蛋糕",facePath:"icon_emotion_panel-99.png"},
        {faceName:"玫瑰",facePath:"icon_emotion_panel-100.png"},
        {faceName:"凋谢",facePath:"icon_emotion_panel-101.png"},
        {faceName:"炸弹",facePath:"icon_emotion_panel-103.png"},
        {faceName:"月亮",facePath:"icon_emotion_panel-105.png"},
        {faceName:"太阳",facePath:"icon_emotion_panel-106.png"},
        {faceName:"庆祝",facePath:"icon_emotion_panel-107.png"},
        {faceName:"礼物",facePath:"icon_emotion_panel-108.png"},
        {faceName:"红包",facePath:"icon_emotion_panel-109.png"},
        {faceName:"發",facePath:"icon_emotion_panel-110.png"},
        {faceName:"福",facePath:"icon_emotion_panel-111.png"},
        {faceName:"猪头",facePath:"icon_emotion_panel-112.png"},
        {faceName:"跳跳",facePath:"icon_emotion_panel-114.png"},
        {faceName:"发抖",facePath:"icon_emotion_panel-115.png"},
        {faceName:"转圈",facePath:"icon_emotion_panel-117.png"},
    ],
    Init:function(){
        var isShowImg=false;
        $(".emoji_btn").click(function(){
            $(this).siblings('.faceDiv').fadeToggle('fast');
            if(isShowImg==false){
                isShowImg=true;
                if($(".faceDiv").children().length==0){
                    for(var i=0;i<ImgIputHandler.facePath.length;i++){
                        $(".faceDiv").append("<img title=\""+ImgIputHandler.facePath[i].faceName+"\" src=\"http://cshtml.lkmsxy.com/my/揽客魔系统/images/face/"+ImgIputHandler.facePath[i].facePath+"\" />");
                    }
                    $(".faceDiv>img").click(function(){
                        isShowImg=false;
                        ImgIputHandler.insertAtCursor($(".Input_text")[0],"["+$(this).attr("title")+"]");
                    });
                }
            }else{
                isShowImg=false;
            }
            event.stopPropagation();
        });
    },
    insertAtCursor:function(myField, myValue) {
        if (document.selection) {
            myField.focus();
            sel = document.selection.createRange();
            sel.text = myValue;
            sel.select();
        } else if (myField.selectionStart || myField.selectionStart == "0") {
            var startPos = myField.selectionStart;
            var endPos = myField.selectionEnd;
            var restoreTop = myField.scrollTop;
            myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
            if (restoreTop > 0) {
                myField.scrollTop = restoreTop;
            }
            myField.focus();
            myField.selectionStart = startPos + myValue.length;
            myField.selectionEnd = startPos + myValue.length;
        } else {
            myField.value += myValue;
            myField.focus();
        }
    }
};
$('.faceDiv').click(function (){
    $(this).show();
    event.stopPropagation();
});
$(document).click(function(event){
    $('.faceDiv').fadeOut('fast');
    event.stopPropagation();    //  阻止事件冒泡
});