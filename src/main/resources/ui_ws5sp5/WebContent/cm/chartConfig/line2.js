function drawChartLine_2(chart, title, usePercentY, arrNamesY, arrSeries) {
    var option = {
        title: {
            text: title
        },
        tooltip: {
            trigger: 'axis',
//            showDelay	: 0,
//            formatter: function (params) {debugger;
//                return params.seriesName + ' ' + params.data.value;
//        },
//	            triggerOn: "none",
//	            alwaysShowContent: true,
//	            position: function(pt) {
//	              return [pt[0], 130];
//	            },        	
//            axisPointer: {
//                show: true,
//                type: 'cross',
//                lineStyle: {
//                    type: 'dashed',
//                    width: 1
//                }
//            },
            position: function (pos, params, el, elRect, size) {//debugger;
	            var obj = {};
	            var chartLeftPos = event.screenX > 0 ? event.screenX : 0;
	            var halfWidth = document.documentElement.clientWidth / 2;
           
	            if (halfWidth < chartLeftPos) {
	                obj.left = pos[0] - 450;
	            } else {
	            	obj.left = pos[0] + 100; 
	            }	            
				return obj;
            }            
        },
        grid: {
            left: '8px',
            right: '8px',
            bottom: '8px',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: arrNamesY
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}' + (usePercentY ? ' %' : '')
            }
        },
        series: arrSeries
    };

    if (usePercentY) {
        option.yAxis.min = 0;
        option.yAxis.max = 100;
    }
    chart.setOption(option);
};