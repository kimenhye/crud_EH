function drawChartLine_6(chart, title, legend, series, yAxisFormatter) {
    var option = {
        title: {
            text: title
        },
	    tooltip: {
	        //trigger: 'axis',
            axisPointer: {
                show: true,
                type: 'cross'
            },
            position: function (pos, params, el, elRect, size) {
	            var obj = { left: 10 };
				obj[['top', 'bottom'][+(pos[1] < size.viewSize[1] / 2)]] = 30;
				return obj;
            }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '5px',
	        containLabel: true
	    },
        xAxis: {
            show: false, 
            type: 'category',
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            axisLabel: { 
            	formatter: yAxisFormatter 
        	} 
        },
        series: series
    };
    if (yAxisFormatter.indexOf("%") != -1) {
        option.yAxis.min = 0;
        option.yAxis.max = 100;
    }  
    chart.setOption(option);
    chart.resize();
};