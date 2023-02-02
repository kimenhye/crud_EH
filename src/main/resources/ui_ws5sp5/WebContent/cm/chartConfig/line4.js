function drawChartLine_4(chart, title, chartType, nowDate, deviceIdArr, usePercentY, yAxisUnit) {//debugger;
		
		var yAxisFormatterLabel = "";
		if (yAxisUnit == "percent") {
			yAxisFormatterLabel = "{value} %";
		} else if (yAxisUnit == "kbyte"){
			yAxisFormatterLabel = "{value} KB/s";
		} else if (yAxisUnit == "mbyte"){
			yAxisFormatterLabel = "{value} MB/s";
		}		

		var arrAxis = [];   // axis (unit chart)
		var arrGroup = deviceIdArr;   // group (unit axis)
		var series = [];

		nowDate = nowDate.replace("Z","");
		var time = new Date(nowDate);

		for (var i = 0, iL = 12; i <= iL; i++) {
		    // var timeX = $p.getFormattedDate(time, "HH:mm");
		    arrAxis.push(new Date(time.getTime()));
		    time.setMinutes(time.getMinutes() + 5);
		}

		for (var channel of arrGroup) {
		    	
			    var seriesItem = { id: channel, name: channel, type: 'line',  areaStyle : {opacity : 0}, stack: channel, data: []};
			    series.push(seriesItem);
			    for (var axis of arrAxis) {
			        var chartData = chart.inputData.find(function(e){
			            if (channel == e.deviceId) {
			            	if (new Date(e.datetimeX).getTime() === axis.getTime()) {
			            		return e;
			            	}
			            }
			        });
			        
			        if(chartData) {
//			        	debugger;
			        }
			        
			        seriesItem.data.push(chartData ? chartData[chartType] : 0);    // Security의 이벤트는 모두 정보(4)임. (감사실패와 감사성공을 구분짓는 값이 있는지 검증필요. keywords인듯한대.. 샘플 데이터가 없음)
			//         seriesItem.data.push(Math.ceil(Math.random()*10));   // 테스트 값
			        
			        
			    }    
		}
//arrAxis.sort();
	
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
		    toolbox: {
		        feature: {
		            saveAsImage: {}
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: [
		        {
		            type: 'category',
		            boundaryGap: false,
		            data: arrAxis,
					axisLabel: {
						formatter: function (value, index) {
							value = new Date(value);
							return $p.getFormattedDate(value, "HH:mm");
						}
					}		            
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
	                axisLabel: {
	                    formatter: yAxisFormatterLabel
	                },
		        }
		    ],
		    series: series
		};
	
//    if (usePercentY) {
//        option.yAxis.min = 0;
//        option.yAxis.max = 100;
//    }	
	chart.setOption(option);
};