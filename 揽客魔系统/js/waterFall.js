// 1.瀑布流插件
// ; 用来提高兼容性
;
(function($){
    $.fn.waterFall = function(){
        // 2.声明一个对象，用来给每个盒子设置属性
        var defaults = {
            // 间距
            gap : 15
        }
        // 3.通过 $.extend() 来进行拓展
        defaults = $.extend(defaults);
        // 4.找到每个图片盒子元素
        var $this = $(this) // 获取 items 元素
        var item = $this.children();

        // 5.算出瀑布流列数（每一列能放几张图片）
        // 列数 = 大盒子的宽度 / 图片盒子的宽度
        var itemWidth = item.width();
        var itemHeight = 0;  // 默认为 0 
        var column = Math.floor(this.width() / itemWidth);

        //console.log(colum)
        // 7.寻找一行中，高度最小那一列的位置，以及这一列的高度
        var arrHeight = []  // 保存每一列的高度值

        // 6.遍历每个图片盒子，对其设置定位的 top 和 left
        item.each(function(index,element){
            // 7.1、获取第一行的高度
            itemHeight = $(element).height();
            //console.log(index)
            //console.log(itemHeight)
            // 6.1、先确定第一行图片盒子排列
            if(index < column){
                $(element).css({
                    top:0,
                    left:(itemWidth+defaults.gap) * index
                })
                // 7.2、把第一行中的每个盒子高度保存到数组中去
                arrHeight[index] = itemHeight;
                //console.log(arrHeight)
                
            }else{
                // 剩余行计算
                // 7.3、计算数组中最小值及索引值
                function getMin(arr){
                    var min = {};
                    min.index = 0;  // 最小值的索引值
                    min.value = arr[min.index];  // 最小值

                    // 遍历数组中每一项，获取最小值及对应索引值
                    for(var i=0;i<arr.length;i++){
                        if(arr[i] < min.value){
                            min.value = arr[i];
                            min.index = i;
                        }
                    }
                    return min;
                }
                var min_value = getMin(arrHeight).value;
                var min_index = getMin(arrHeight).index;
                //console.log(arrHeight)
                //console.log(min_value)
                //console.log(min_index)
                // 7.4 、 设置下一行的 top 和 left
                $(element).css({
                    top:min_value + defaults.gap,
                    left:(itemWidth+defaults.gap) * min_index
                })
                // 7.5、 更新最小列的值
                arrHeight[min_index] += itemHeight + defaults.gap;
            }
        })

        // 8.获取最大列的高度（父容器的高度就是这个高度）
        function getMax(arr){
            var max = {};
            max.index = 0;
            max.value = arr[max.index];
            for(var i=0;i<arr.length;i++){
                if(arr[i] > max.value){
                    max.value = arr[i];
                    max.index = i;
                }
            }
            return max;
        }
        var max_value = getMax(arrHeight).value; // 最大值
        $this.height(max_value);
    }
})(jQuery)





