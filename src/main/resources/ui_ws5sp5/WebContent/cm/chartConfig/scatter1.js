function drawChartScatter_1(chart, title, maxCauObj, chartName) {//debugger;
	var yAxisFormatter = "";
	var xyExplain = {};
	var normalDataArr = [];
	var warnDataArr = [];
	normalDataArr = chart.inputDataNormal;
	warnDataArr = chart.inputDataWarn;
	
	if (chartName == "cpuNmem") {
		xyExplain = {x:"MEMORY" ,y:"CPU"};
		xAxisFormatterLabel = "{value} %";		//mem
		yAxisFormatterLabel = "{value} %";		//cpu
	} else if (chartName == "diskNnetwork") {
		xyExplain = {x:"NETWORK" ,y:"DISK"};
		xAxisFormatterLabel = "{value} Kbps";		//network
		yAxisFormatterLabel = "{value} %";		//disk
	} else if (chartName == "threadNhandle") {
		xyExplain = {x:"HANDLE" ,y:"THREAD"};
		xAxisFormatterLabel = "{value}";		//handle
		yAxisFormatterLabel = "{value}";		//thread
	}

    var option = {
        title: {
            text: title,
        },
        grid: {
            left: '58px',
            right: '38px',
            bottom: '38px',
            containLabel: false
        },
        tooltip: {
            showDelay: 0,
            formatter: function (params) {
                if (params.value.length > 1) {
                    return 'IP: ' + params.value[5] + '<br/>이름: ' + params.value[4] + '<br/>점번: ' + params.value[3];  
                } else {
                    return params.seriesName;
                }
            },
            axisPointer: {
                show: true,
                type: 'cross'
            },
//            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            position: function (pos, params, el, elRect, size) {
	            var obj = { left: 10 };
				obj[['top', 'bottom'][+(pos[1] < size.viewSize[1] / 2)]] = 30;
				return obj;
            }
        },
        xAxis: [
            {
                type: 'value',
                scale: true,
                axisLabel: {
                    formatter: xAxisFormatterLabel
                },
                splitLine: {
                    show: true
                },
                name: xyExplain.x,
                nameLocation : 'middle',
                nameGap: 25,
                nameTextStyle: {fontSize:10} 
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                axisLabel: {
                	inside: false,
                    formatter: yAxisFormatterLabel
                },
                splitLine: {
                    show: true
                },
                name: xyExplain.y,
                nameLocation : 'middle',
                nameRotate: 90,
                nameGap: 40,
                nameTextStyle: {fontSize:10}
            }
        ],
        series: [
        	{
        		name: "strong",
                type: 'scatter',
                symbolSize: 10,
                itemStyle: {
                	shadowBlur: 10,
                	shadowColor: 'rgba(120, 36, 50, 0.5)',
                	shadowOffsetY: 5,
                	color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
	                	{
	                		offset: 0,
	                		color: 'rgb(251, 118, 123)'
	                	},
	                	{
	                		offset: 1,
	                		color: 'rgb(204, 46, 72)'
	                	}
                	])
                }, data: warnDataArr
            },         	
            {
                name: "Device",
                type: 'scatter',
//                emphasis: {
//                    focus: 'series'
//                },                
//                itemStyle: {
//                    shadowBlur: 10,
//                    shadowColor: 'rgba(120, 36, 50, 0.5)',
//                    shadowOffsetY: 5,
//                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//                        offset: 0,
//                        color: 'rgb(251, 118, 123)'
//                    }, {
//                        offset: 1,
//                        color: 'rgb(204, 46, 72)'
//                    }])
//                },                
                data: normalDataArr	//chart.inputData
            }
        ],
        brush: {
            toolbox: ['rect', 'clear'],
            // toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            xAxisIndex: 0
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true}
            }
        }
    };
    chart.setOption(option);
};