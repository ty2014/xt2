// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++
!function ($) {
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return - c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return - c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) { //..
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return - c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return - c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return - c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return - c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b: c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c: c * ( - Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * ( - Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return - c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return - c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return - (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return - .5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});
$.fn.DynamicToTop = function(options) {
	var defaults = {
		text: "",
		min: "200",
		fade_in: 600,
		fade_out: 100,
		speed: "100",
		easing: "easeInOutExpo",
		version: "",
		id: 'dynamic-to-top'
	};
	var settings = $.extend(defaults, options);
	if (settings.version == "") {
		settings.text = '';
	}
	var $toTop = $('<a href=\"#\" id=\"' + settings.id + '\"></a>').html(settings.text);
	$toTop.appendTo(document.body);
	$toTop.hide().click(function() {
		$('html, body').stop().animate({
			scrollTop: 0
		},
		settings.speed, settings.easing);
		return false;
	});
	$(window).scroll(function() {
		var sd = $(window).scrollTop();
		if (typeof document.body.style.maxHeight === "undefined") {
			$toTop.css({
				'position': 'absolute',
				'top': $(window).scrollTop() + $(window).height() - mv_dynamic_to_top.margin
			});
		}
		if (sd > settings.min) {
			$toTop.fadeIn(settings.fade_in);
		} else {
			$toTop.fadeOut(settings.fade_out);
		}
	});
};
$('body').DynamicToTop();
$(function(){
	$('.jumbotron').outerHeight($(window).height()-$('.footer').height() - $('.navbar').height());
	
	$(window).resize(function() {
		$('.jumbotron').outerHeight($(window).height()-$('.footer').height() - $('.navbar').height());
	});

	var $window = $(window);
	// Disable certain links in docs
	$('section [href^=#]').click(function (e) {
	  e.preventDefault()
	});

	// side bar
	$('.bs-docs-sidenav').affix();

	// make code pretty
	window.prettyPrint && prettyPrint();

// example
var content = '老粉丝是否算作邀请数，有关邀请奖励发放',
    content2='用户扫描活动二维码，关注公众号后，推送以下回复',
    content3='删除',
    content4='当好友扫码关注后，推送以下回复给邀请人',
    content5='用户完成该阶段任务时，推送此提示',
    content6='用户完成任务但奖品库存为0时，推送奖品发完提示（不再推送相应奖品）',
    content7='自动推送：直接推送奖品\n' +
            '主动申领：需用户填写信息后再领取奖品',
    content8='用户领奖时需要填写的内容',
    content9='信息提交后显示的内容\n'+'\n'+'虚拟商品（会员、积分）提交后则自动领取成功，提示信息可以填写，让用户加微信，\n'+'再次把用户转到另一个微信号，多微信号（鱼塘）进行培育。',
    content10='查看/编辑',
    content11='活动数据',
    content12='完成任务自动推送的具体奖品信息',
    content13= '固定模式：分渠道回复并统计渠道流量带入（未设置渠道，推默认回复）\n' +
            '循环模式： 每扫码人数=循环人数时，即推送下一渠道回复\n' +
            '                   为微信群二次引流设计，循环推送不同群二维码回复，避免微信群满100人无法再扫码加入\n' +
            '                   另：继续引流到微信群时，回复可附上“若扫码无法进群，请添加xxx微信号拉群进入”',

    content14='链接',
    content15='表情',
    content16='邀请人昵称',
    content17='邀请人数',
    content18='被邀请人昵称',
    content19='奖励';

$('.tooltips').pt({position: 't',align: 'l',content: content});
$('.tooltips2').pt({position: 't',align: 'l',content: content2});
$('.tooltips3').pt({content: content3});
$('.tooltips4').pt({position: 't',align: 'l',content: content4});
$('.tooltips5').pt({position: 't',align: 'l',content: content5});
$('.tooltips6').pt({position: 't',align: 'l',content: content6});
$('.tooltips7').pt({position: 't',align: 'l',content: content7});
$('.tooltips8').pt({position: 't',align: 'l',content: content8});
$('.tooltips9').pt({position: 't',align: 'l',content: content9});
$('.tooltips10').pt({content: content10});
$('.tooltips11').pt({content: content11});
$('.tooltips12').pt({position: 't',align: 'l',content: content12});
$('.tooltips13').pt({position: 't',align: 'l',content: content13});
$('.tooltips14').pt({content: content14});
$('.tooltips15').pt({content: content15});
$('.tooltips16').pt({content: content16});
$('.tooltips17').pt({content: content17});
$('.tooltips18').pt({content: content18});
$('.tooltips19').pt({content: content19});


$('#tooltips-top').pt({position: 't', content: content});
$('#tooltips-bottom').pt({position: 'b', content: content});
$('#tooltips-left').pt({
	position: 'l',
	content: content
});
$('#tooltips-right').pt({
	position: 'r',
	content: content
});
$('#tooltips-top-left').pt({
	position: 't',
	align: 'l',
	content: content
});
$('#tooltips-top-right').pt({
	position: 't',
	align: 'r',
	content: content
});
$('#tooltips-bottom-left').pt({
	position: 'b',
	align: 'l',
	content: content
});
$('#tooltips-bottom-right').pt({
	position: 'b',
	align: 'r',
	content: content
});
$('#tooltips-left-top').pt({
	position: 'l',
	align: 't',
	content: content
});
$('#tooltips-left-bottom').pt({
	position: 'l',
	align: 'b',
	content: content
});
$('#tooltips-right-top').pt({
	position: 'r',
	align: 't',
	content: content
});
$('#tooltips-right-bottom').pt({
	position: 'r',
	align: 'b',
	content: content
});
$('#tooltips-top-right-long').pt({
	position: 't',
	align: 'r',
	content: content
});
$('#tooltips-right-top-high').pt({
	position: 'r',
	align: 't',
	content: content
});

$('#tooltips-mouse').pt({
	content: content
});
$('#tooltips-click').click(function() {
	var self = this;
	$.pt({
		target: self,
		content: content
	});
});
$('#tooltips-square').pt({
	width: 100,
	height: 100,
	content: content
});
$('#tooltips-close-callback').pt({
	content:content,
	close:function() {
		alert('closed');
	}
});
$('#tooltips-no-arrow').pt({
	arrow:false,
	content:content
});

});
}(window.jQuery)