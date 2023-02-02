function drawChartLine_1(chart, title, usePercentY, series, yAxisUnit) {
	var yAxisFormatterLabel = "";
	if (yAxisUnit == "percent") {
		yAxisFormatterLabel = "{value} %";
	} else if (yAxisUnit == "Kbps"){
		yAxisFormatterLabel = "{value} Kbps/s";
	} else if (yAxisUnit == "mbyte"){
		yAxisFormatterLabel = "{value} MB/s";
	}
	
    var option = {
        title: {
            text: title
        },
        tooltip: {
            // trigger: 'axis',
            showDelay: 0,
            formatter: function (params) {
                return params.data.name + ' :<br/>'
                    + params.data.value;
            },
            axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
                }
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
            boundaryGap: false
        },
        dataset:{ source: series.data },
        yAxis: {
            type: 'value',
            scale: true,
            axisLabel: {
            	inside: false,
                formatter: yAxisFormatterLabel
            },            
        },
        series: [
            {
                type: 'line',
                areaStyle: {}
            }
        ]
    };
    if(usePercentY) {
        option.yAxis.min = 0;
        option.yAxis.max = 100;
    }
    chart.setOption(option);
};