var isIE = (document.all) ? true : false;

var dobj = function (id) {
    return "string" == typeof id ? document.getElementById(id) : id;
};

var Class = {
    create: function () {
        return function () { this.initialize.apply(this, arguments); }
    }
}

var Extend = function (destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
}

var Bind = function (object, fun) {
    return function () {
        return fun.apply(object, arguments);
    }
}
var BindAsEventListener = function (object, fun) {
    var args = Array.prototype.slice.call(arguments).slice(2);
    return function (event) {
        return fun.apply(object, [event || window.event].concat(args));
    }
}

var CurrentStyle = function (element) {
    return element.currentStyle || document.defaultView.getComputedStyle(element, null);
}

function addEventHandler(oTarget, sEventType, fnHandler) {
    if (oTarget.addEventListener) {
        oTarget.addEventListener(sEventType, fnHandler, false);
    } else if (oTarget.attachEvent) {
        oTarget.attachEvent("on" + sEventType, fnHandler);
    } else {
        oTarget["on" + sEventType] = fnHandler;
    }
};

function removeEventHandler(oTarget, sEventType, fnHandler) {
    if (oTarget.removeEventListener) {
        oTarget.removeEventListener(sEventType, fnHandler, false);
    } else if (oTarget.detachEvent) {
        oTarget.detachEvent("on" + sEventType, fnHandler);
    } else {
        oTarget["on" + sEventType] = null;
    }
};
//缂╂斁绋嬪簭
var Resize = Class.create();
Resize.prototype = {
    //缂╂斁瀵硅薄
    initialize: function (obj, options) {
        this._obj = obj.get(0);//缂╂斁瀵硅薄

        this._styleWidth = this._styleHeight = this._styleLeft = this._styleTop = 0;//鏍峰紡鍙傛暟
        this._sideRight = this._sideDown = this._sideLeft = this._sideUp = 0;//鍧愭爣鍙傛暟
        this._fixLeft = this._fixTop = 0;//瀹氫綅鍙傛暟
        this._scaleLeft = this._scaleTop = 0;//瀹氫綅鍧愭爣

        this._mxSet = function () { };//鑼冨洿璁剧疆绋嬪簭
        this._mxRightWidth = this._mxDownHeight = this._mxUpHeight = this._mxLeftWidth = 0;//鑼冨洿鍙傛暟
        this._mxScaleWidth = this._mxScaleHeight = 0;//姣斾緥鑼冨洿鍙傛暟

        this._fun = function () { };//缂╂斁鎵ц绋嬪簭

        //鑾峰彇杈规瀹藉害
        var _style = CurrentStyle(this._obj);
        this._borderX = (parseInt(_style.borderLeftWidth) || 0) + (parseInt(_style.borderRightWidth) || 0);
        this._borderY = (parseInt(_style.borderTopWidth) || 0) + (parseInt(_style.borderBottomWidth) || 0);
        //浜嬩欢瀵硅薄(鐢ㄤ簬缁戝畾绉婚櫎浜嬩欢)
        this._fR = BindAsEventListener(this, this.Resize);
        this._fS = Bind(this, this.Stop);

        this.SetOptions(options);
        //鑼冨洿闄愬埗
        this.Max = !!this.options.Max;
        this._mxContainer = $(this.options.mxContainer).get(0) || null;
        this.mxLeft = Math.round(this.options.mxLeft);
        this.mxRight = Math.round(this.options.mxRight);
        this.mxTop = Math.round(this.options.mxTop);
        this.mxBottom = Math.round(this.options.mxBottom);
        //瀹介珮闄愬埗
        this.Min = !!this.options.Min;
        this.minWidth = Math.round(this.options.minWidth);
        this.minHeight = Math.round(this.options.minHeight);
        //鎸夋瘮渚嬬缉鏀�
        this.Scale = !!this.options.Scale;
        this.Ratio = Math.max(this.options.Ratio, 0);

        this.onResize = this.options.onResize;

        this._obj.style.position = "absolute";
        !this._mxContainer || CurrentStyle(this._mxContainer).position == "relative" || (this._mxContainer.style.position = "relative");
    },
    //璁剧疆榛樿灞炴€�
    SetOptions: function (options) {
        this.options = {//榛樿鍊�
            Max: false,//鏄惁璁剧疆鑼冨洿闄愬埗(涓簍rue鏃朵笅闈x鍙傛暟鏈夌敤)
            mxContainer: "",//鎸囧畾闄愬埗鍦ㄥ鍣ㄥ唴
            mxLeft: 0,//宸﹁竟闄愬埗
            mxRight: 9999,//鍙宠竟闄愬埗
            mxTop: 0,//涓婅竟闄愬埗
            mxBottom: 9999,//涓嬭竟闄愬埗
            Min: false,//鏄惁鏈€灏忓楂橀檺鍒�(涓簍rue鏃朵笅闈in鍙傛暟鏈夌敤)
            minWidth: 50,//鏈€灏忓搴�
            minHeight: 50,//鏈€灏忛珮搴�
            Scale: false,//鏄惁鎸夋瘮渚嬬缉鏀�
            Ratio: 0,//缂╂斁姣斾緥(瀹�/楂�)
            onResize: function () { }//缂╂斁鏃舵墽琛�
        };
        Extend(this.options, options || {});
    },
    //璁剧疆瑙﹀彂瀵硅薄
    Set: function (resize, side) {
        var fun;
        if (!resize) return;
        //鏍规嵁鏂瑰悜璁剧疆
        switch (side.toLowerCase()) {
            case "up":
                fun = this.Up;
                break;
            case "down":
                fun = this.Down;
                break;
            case "left":
                fun = this.Left;
                break;
            case "right":
                fun = this.Right;
                break;
            case "left-up":
                fun = this.LeftUp;
                break;
            case "right-up":
                fun = this.RightUp;
                break;
            case "left-down":
                fun = this.LeftDown;
                break;
            case "right-down":
            default:
                fun = this.RightDown;
        };
        //璁剧疆瑙﹀彂瀵硅薄
        addEventHandler(resize.get(0), "mousedown", BindAsEventListener(this, this.Start, fun));
    },
    //鍑嗗缂╂斁
    Start: function (e, fun, touch) {

        //闃叉鍐掓场(璺熸嫋鏀鹃厤鍚堟椂璁剧疆)
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
        //璁剧疆鎵ц绋嬪簭
        this._fun = fun;
        //鏍峰紡鍙傛暟鍊�
        this._styleWidth = this._obj.clientWidth;
        this._styleHeight = this._obj.clientHeight;
        this._styleLeft = this._obj.offsetLeft;
        this._styleTop = this._obj.offsetTop;
        //鍥涙潯杈瑰畾浣嶅潗鏍�
        this._sideLeft = e.clientX - this._styleWidth;
        this._sideRight = e.clientX + this._styleWidth;
        this._sideUp = e.clientY - this._styleHeight;
        this._sideDown = e.clientY + this._styleHeight;
        //top鍜宭eft瀹氫綅鍙傛暟
        this._fixLeft = this._styleLeft + this._styleWidth;
        this._fixTop = this._styleTop + this._styleHeight;
        //缂╂斁姣斾緥
        if (this.Scale) {
            //璁剧疆姣斾緥
            this.Ratio = Math.max(this.Ratio, 0) || this._styleWidth / this._styleHeight;
            //left鍜宼op鐨勫畾浣嶅潗鏍�
            this._scaleLeft = this._styleLeft + this._styleWidth / 2;
            this._scaleTop = this._styleTop + this._styleHeight / 2;
        };
        //鑼冨洿闄愬埗
        if (this.Max) {
            //璁剧疆鑼冨洿鍙傛暟
            var mxLeft = this.mxLeft, mxRight = this.mxRight, mxTop = this.mxTop, mxBottom = this.mxBottom;
            //濡傛灉璁剧疆浜嗗鍣紝鍐嶄慨姝ｈ寖鍥村弬鏁�
            if (!!this._mxContainer) {
                mxLeft = Math.max(mxLeft, 0);
                mxTop = Math.max(mxTop, 0);
                mxRight = Math.min(mxRight, this._mxContainer.clientWidth);
                mxBottom = Math.min(mxBottom, this._mxContainer.clientHeight);
            };
            //鏍规嵁鏈€灏忓€煎啀淇
            mxRight = Math.max(mxRight, mxLeft + (this.Min ? this.minWidth : 0) + this._borderX);
            mxBottom = Math.max(mxBottom, mxTop + (this.Min ? this.minHeight : 0) + this._borderY);
            //鐢变簬杞悜鏃惰閲嶆柊璁剧疆鎵€浠ュ啓鎴恌unction褰㈠紡
            this._mxSet = function () {
                this._mxRightWidth = mxRight - this._styleLeft - this._borderX;
                this._mxDownHeight = mxBottom - this._styleTop - this._borderY;
                this._mxUpHeight = Math.max(this._fixTop - mxTop, this.Min ? this.minHeight : 0);
                this._mxLeftWidth = Math.max(this._fixLeft - mxLeft, this.Min ? this.minWidth : 0);
            };
            this._mxSet();
            //鏈夌缉鏀炬瘮渚嬩笅鐨勮寖鍥撮檺鍒�
            if (this.Scale) {
                this._mxScaleWidth = Math.min(this._scaleLeft - mxLeft, mxRight - this._scaleLeft - this._borderX) * 2;
                this._mxScaleHeight = Math.min(this._scaleTop - mxTop, mxBottom - this._scaleTop - this._borderY) * 2;
            };
        };
        //mousemove鏃剁缉鏀� mouseup鏃跺仠姝�
        addEventHandler(document, "mousemove", this._fR);
        addEventHandler(document, "mouseup", this._fS);
        if (isIE) {
            addEventHandler(this._obj, "losecapture", this._fS);
            this._obj.setCapture();
        } else {
            addEventHandler(window, "blur", this._fS);
            e.preventDefault();
        };
    },
    //缂╂斁
    Resize: function (e) {
        //娓呴櫎閫夋嫨
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        //鎵ц缂╂斁绋嬪簭
        this._fun(e);
        //璁剧疆鏍峰紡锛屽彉閲忓繀椤诲ぇ浜庣瓑浜�0鍚﹀垯ie鍑洪敊
        with (this._obj.style) {
            width = this._styleWidth + "px"; height = this._styleHeight + "px";
            top = this._styleTop + "px"; left = this._styleLeft + "px";
        }
        //闄勫姞绋嬪簭
        this.onResize();
    },
    //缂╂斁绋嬪簭
    //涓�
    Up: function (e) {
        this.RepairY(this._sideDown - e.clientY, this._mxUpHeight);
        this.RepairTop();
        this.TurnDown(this.Down);
    },
    //涓�
    Down: function (e) {
        this.RepairY(e.clientY - this._sideUp, this._mxDownHeight);
        this.TurnUp(this.Up);
    },
    //鍙�
    Right: function (e) {
        this.RepairX(e.clientX - this._sideLeft, this._mxRightWidth);
        this.TurnLeft(this.Left);
    },
    //宸�
    Left: function (e) {
        this.RepairX(this._sideRight - e.clientX, this._mxLeftWidth);
        this.RepairLeft();
        this.TurnRight(this.Right);
    },
    //鍙充笅
    RightDown: function (e) {
        this.RepairAngle(
            e.clientX - this._sideLeft, this._mxRightWidth,
            e.clientY - this._sideUp, this._mxDownHeight
        );
        this.TurnLeft(this.LeftDown) || this.Scale || this.TurnUp(this.RightUp);
    },
    //鍙充笂
    RightUp: function (e) {
        this.RepairAngle(
            e.clientX - this._sideLeft, this._mxRightWidth,
            this._sideDown - e.clientY, this._mxUpHeight
        );
        this.RepairTop();
        this.TurnLeft(this.LeftUp) || this.Scale || this.TurnDown(this.RightDown);
    },
    //宸︿笅
    LeftDown: function (e) {
        this.RepairAngle(
            this._sideRight - e.clientX, this._mxLeftWidth,
            e.clientY - this._sideUp, this._mxDownHeight
        );
        this.RepairLeft();
        this.TurnRight(this.RightDown) || this.Scale || this.TurnUp(this.LeftUp);
    },
    //宸︿笂
    LeftUp: function (e) {
        this.RepairAngle(
            this._sideRight - e.clientX, this._mxLeftWidth,
            this._sideDown - e.clientY, this._mxUpHeight
        );
        this.RepairTop(); this.RepairLeft();
        this.TurnRight(this.RightUp) || this.Scale || this.TurnDown(this.LeftDown);
    },
    //淇绋嬪簭
    //姘村钩鏂瑰悜
    RepairX: function (iWidth, mxWidth) {
        iWidth = this.RepairWidth(iWidth, mxWidth);
        //寮€鍚叏灞€缂╂斁
        /*if(this.Scale){
            var iHeight = this.RepairScaleHeight(iWidth);
            if(this.Max && iHeight > this._mxScaleHeight){
                iHeight = this._mxScaleHeight;
                iWidth = this.RepairScaleWidth(iHeight);
            }else if(this.Min && iHeight < this.minHeight){
                var tWidth = this.RepairScaleWidth(this.minHeight);
                if(tWidth < mxWidth){ iHeight = this.minHeight; iWidth = tWidth; }
            }
            this._styleHeight = iHeight;
            this._styleTop = this._scaleTop - iHeight / 2;
        }*/
        this._styleWidth = iWidth;
    },
    //鍨傜洿鏂瑰悜
    RepairY: function (iHeight, mxHeight) {
        iHeight = this.RepairHeight(iHeight, mxHeight);
        //寮€鍚叏灞€缂╂斁
        /*if(this.Scale){
            var iWidth = this.RepairScaleWidth(iHeight);
            if(this.Max && iWidth > this._mxScaleWidth){
                iWidth = this._mxScaleWidth;
                iHeight = this.RepairScaleHeight(iWidth);
            }else if(this.Min && iWidth < this.minWidth){
                var tHeight = this.RepairScaleHeight(this.minWidth);
                if(tHeight < mxHeight){ iWidth = this.minWidth; iHeight = tHeight; }
            }
            this._styleWidth = iWidth;
            this._styleLeft = this._scaleLeft - iWidth / 2;
        }*/
        this._styleHeight = iHeight;
    },
    //瀵硅鏂瑰悜
    RepairAngle: function (iWidth, mxWidth, iHeight, mxHeight) {
        iWidth = this.RepairWidth(iWidth, mxWidth);
        if (this.Scale) {
            iHeight = this.RepairScaleHeight(iHeight);
            if (this.Max && iHeight > mxHeight) {
                iHeight = mxHeight;
                iWidth = this.RepairScaleWidth(iWidth);
            } else if (this.Min && iHeight < this.minHeight) {
                var tWidth = this.RepairScaleWidth(this.minWeight);
                if (tWidth < mxWidth) { iHeight = this.minHeight; iWidth = tWidth; }
            }
        } else {
            iHeight = this.RepairHeight(iHeight, mxHeight);
        }
        this._styleWidth = iWidth;
        this._styleHeight = iHeight;
    },
    //top
    RepairTop: function () {
        this._styleTop = this._fixTop - this._styleHeight;
    },
    //left
    RepairLeft: function () {
        this._styleLeft = this._fixLeft - this._styleWidth;
    },
    //height
    RepairHeight: function (iHeight, mxHeight) {
        iHeight = Math.min(this.Max ? mxHeight : iHeight, iHeight);
        iHeight = Math.max(this.Min ? this.minHeight : iHeight, iHeight, 0);
        return iHeight;
    },
    //width
    RepairWidth: function (iWidth, mxWidth) {
        iWidth = Math.min(this.Max ? mxWidth : iWidth, iWidth);
        iWidth = Math.max(this.Min ? this.minWidth : iWidth, iWidth, 0);
        return iWidth;
    },
    //姣斾緥楂樺害
    RepairScaleHeight: function (iHeight) {
        return Math.max(Math.round((iHeight + this._borderX) / this.Ratio - this._borderY), 0);
    },
    //姣斾緥瀹藉害
    RepairScaleWidth: function (iWidth) {
        return Math.max(Math.round((iWidth + this._borderY) * this.Ratio - this._borderX), 0);
    },
    //杞悜绋嬪簭
    //杞彸
    TurnRight: function (fun) {
        if (!(this.Min || this._styleWidth)) {
            this._fun = fun;
            this._sideLeft = this._sideRight;
            this.Max && this._mxSet();
            return true;
        }
    },
    //杞乏
    TurnLeft: function (fun) {
        if (!(this.Min || this._styleWidth)) {
            this._fun = fun;
            this._sideRight = this._sideLeft;
            this._fixLeft = this._styleLeft;
            this.Max && this._mxSet();
            return true;
        }
    },
    //杞笂
    TurnUp: function (fun) {
        if (!(this.Min || this._styleHeight)) {
            this._fun = fun;
            this._sideDown = this._sideUp;
            this._fixTop = this._styleTop;
            this.Max && this._mxSet();
            return true;
        }
    },
    //杞笅
    TurnDown: function (fun) {
        if (!(this.Min || this._styleHeight)) {
            this._fun = fun;
            this._sideUp = this._sideDown;
            this.Max && this._mxSet();
            return true;
        }
    },
    //鍋滄缂╂斁
    Stop: function () {
        removeEventHandler(document, "mousemove", this._fR);
        removeEventHandler(document, "mouseup", this._fS);
        if (isIE) {
            removeEventHandler(this._obj, "losecapture", this._fS);
            this._obj.releaseCapture();
        } else {
            removeEventHandler(window, "blur", this._fS);
        }
    }
};

//鎷栨斁绋嬪簭
var Drag = Class.create();
Drag.prototype = {
    //鎷栨斁瀵硅薄
    initialize: function (drag, options) {
        this.Drag = drag.get(0);//鎷栨斁瀵硅薄
        this._x = this._y = 0;//璁板綍榧犳爣鐩稿鎷栨斁瀵硅薄鐨勪綅缃�
        this._marginLeft = this._marginTop = 0;//璁板綍margin
        //浜嬩欢瀵硅薄(鐢ㄤ簬缁戝畾绉婚櫎浜嬩欢)
        this._fM = BindAsEventListener(this, this.Move);
        this._fS = Bind(this, this.Stop);

        this.SetOptions(options);

        this.Limit = !!this.options.Limit;
        this.mxLeft = parseInt(this.options.mxLeft);
        this.mxRight = parseInt(this.options.mxRight);
        this.mxTop = parseInt(this.options.mxTop);
        this.mxBottom = parseInt(this.options.mxBottom);

        this.LockX = !!this.options.LockX;
        this.LockY = !!this.options.LockY;
        this.Lock = !!this.options.Lock;

        this.onStart = this.options.onStart;
        this.onMove = this.options.onMove;
        this.onStop = this.options.onStop;

        this._Handle = $(this.options.Handle).get(0) || this.Drag;
        this._mxContainer = $(this.options.mxContainer).get(0) || null;

        this.Drag.style.position = "absolute";
        //閫忔槑
        if (isIE && !!this.options.Transparent) {
            //濉厖鎷栨斁瀵硅薄
            with (this._Handle.appendChild(document.createElement("div")).style) {
                width = height = "100%"; backgroundColor = "#fff"; filter = "alpha(opacity:0)"; fontSize = 0;
            }
        }
        //淇鑼冨洿
        this.Repair();
        addEventHandler(this._Handle, "mousedown", BindAsEventListener(this, this.Start));
    },
    //璁剧疆榛樿灞炴€�
    SetOptions: function (options) {
        this.options = {//榛樿鍊�
            Handle: "",//璁剧疆瑙﹀彂瀵硅薄锛堜笉璁剧疆鍒欎娇鐢ㄦ嫋鏀惧璞★級
            Limit: false,//鏄惁璁剧疆鑼冨洿闄愬埗(涓簍rue鏃朵笅闈㈠弬鏁版湁鐢�,鍙互鏄礋鏁�)
            mxLeft: 0,//宸﹁竟闄愬埗
            mxRight: 9999,//鍙宠竟闄愬埗
            mxTop: 0,//涓婅竟闄愬埗
            mxBottom: 9999,//涓嬭竟闄愬埗
            mxContainer: "",//鎸囧畾闄愬埗鍦ㄥ鍣ㄥ唴
            LockX: false,//鏄惁閿佸畾姘村钩鏂瑰悜鎷栨斁
            LockY: false,//鏄惁閿佸畾鍨傜洿鏂瑰悜鎷栨斁
            Lock: false,//鏄惁閿佸畾
            Transparent: false,//鏄惁閫忔槑
            onStart: function () { },//寮€濮嬬Щ鍔ㄦ椂鎵ц
            onMove: function () { },//绉诲姩鏃舵墽琛�
            onStop: function () { }//缁撴潫绉诲姩鏃舵墽琛�
        };
        Extend(this.options, options || {});
    },
    //鍑嗗鎷栧姩
    Start: function (oEvent) {
        if (this.Lock) { return; }
        this.Repair();
        //璁板綍榧犳爣鐩稿鎷栨斁瀵硅薄鐨勪綅缃�
        this._x = oEvent.clientX - this.Drag.offsetLeft;
        this._y = oEvent.clientY - this.Drag.offsetTop;
        //璁板綍margin
        this._marginLeft = parseInt(CurrentStyle(this.Drag).marginLeft) || 0;
        this._marginTop = parseInt(CurrentStyle(this.Drag).marginTop) || 0;
        //mousemove鏃剁Щ鍔� mouseup鏃跺仠姝�
        addEventHandler(document, "mousemove", this._fM);
        addEventHandler(document, "mouseup", this._fS);
        if (isIE) {
            //鐒︾偣涓㈠け
            addEventHandler(this._Handle, "losecapture", this._fS);
            //璁剧疆榧犳爣鎹曡幏
            this._Handle.setCapture();
        } else {
            //鐒︾偣涓㈠け
            addEventHandler(window, "blur", this._fS);
            //闃绘榛樿鍔ㄤ綔
            oEvent.preventDefault();
        };
        //闄勫姞绋嬪簭
        this.onStart();
    },
    //淇鑼冨洿
    Repair: function () {
        if (this.Limit) {
            //淇閿欒鑼冨洿鍙傛暟
            this.mxRight = Math.max(this.mxRight, this.mxLeft + this.Drag.offsetWidth);
            this.mxBottom = Math.max(this.mxBottom, this.mxTop + this.Drag.offsetHeight);
            //濡傛灉鏈夊鍣ㄥ繀椤昏缃畃osition涓簉elative鎴朼bsolute鏉ョ浉瀵规垨缁濆瀹氫綅锛屽苟鍦ㄨ幏鍙杘ffset涔嬪墠璁剧疆
            !this._mxContainer || CurrentStyle(this._mxContainer).position == "relative" || CurrentStyle(this._mxContainer).position == "absolute" || (this._mxContainer.style.position = "relative");
        }
    },
    //鎷栧姩
    Move: function (oEvent) {
        //鍒ゆ柇鏄惁閿佸畾
        if (this.Lock) { this.Stop(); return; };
        //娓呴櫎閫夋嫨
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        //璁剧疆绉诲姩鍙傛暟
        var iLeft = oEvent.clientX - this._x, iTop = oEvent.clientY - this._y;
        //璁剧疆鑼冨洿闄愬埗
        if (this.Limit) {
            //璁剧疆鑼冨洿鍙傛暟
            var mxLeft = this.mxLeft, mxRight = this.mxRight, mxTop = this.mxTop, mxBottom = this.mxBottom;
            //濡傛灉璁剧疆浜嗗鍣紝鍐嶄慨姝ｈ寖鍥村弬鏁�
            if (!!this._mxContainer) {
                mxLeft = Math.max(mxLeft, 0);
                mxTop = Math.max(mxTop, 0);
                mxRight = Math.min(mxRight, this._mxContainer.clientWidth);
                mxBottom = Math.min(mxBottom, this._mxContainer.clientHeight);
            };
            //淇绉诲姩鍙傛暟
            iLeft = Math.max(Math.min(iLeft, mxRight - this.Drag.offsetWidth), mxLeft);
            iTop = Math.max(Math.min(iTop, mxBottom - this.Drag.offsetHeight), mxTop);
        }
        //璁剧疆浣嶇疆锛屽苟淇margin
        if (!this.LockX) { this.Drag.style.left = iLeft - this._marginLeft + "px"; }
        if (!this.LockY) { this.Drag.style.top = iTop - this._marginTop + "px"; }
        //闄勫姞绋嬪簭
        this.onMove();
    },
    //鍋滄鎷栧姩
    Stop: function () {
        //绉婚櫎浜嬩欢
        removeEventHandler(document, "mousemove", this._fM);
        removeEventHandler(document, "mouseup", this._fS);
        if (isIE) {
            removeEventHandler(this._Handle, "losecapture", this._fS);
            this._Handle.releaseCapture();
        } else {
            removeEventHandler(window, "blur", this._fS);
        };
        //闄勫姞绋嬪簭
        this.onStop();
    }
};