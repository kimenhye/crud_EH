function drawChartStack_1(chart, title) {//debugger;
var arrAxis = [];   // axis (unit chart)
var arrGroup = ["yesterdayError", "todayError"];   // group (unit axis)
var series = [];
var time = new Date();
//var time = new Date("2021-11-22T00:00:00");    
time.setHours(0);
time.setMinutes(0);
time.setSeconds(0);
time.setMilliseconds(0);

for (var i = 0, iL = 24; i < iL; i++) {
    // var timeX = $p.getFormattedDate(time, "HH:mm");
    arrAxis.push(new Date(time.getTime()));
    time.setHours(time.getHours() + 1);
}

for (var channel of arrGroup) {//debugger;
    if (channel === "yesterdayError") {
        var seriesItem = { id: channel, name: channel, type: 'line',  areaStyle : {opacity : 0}, stack: channel, data: []};
        series.push(seriesItem);
        for (var axis of arrAxis) {//debugger;
	        var chartData = chart.inputData.find(function(e){
	            if (channel == e.id) {
	                return e;
	            }
	        });
        	
            var targetValue = chartData.data.find(function (e) { 
//            	debugger;
            	seriesItem.name = "전일";
            	return new Date(e.datetimeX).getTime() + 54000000 === axis.getTime() && e.name === channel
            });
            
            if(targetValue) {
//            	debugger;
            }
            
            seriesItem.data.push(targetValue ? targetValue.count : 0);    // Security의 이벤트는 모두 정보(4)임. (감사실패와 감사성공을 구분짓는 값이 있는지 검증필요. keywords인듯한대.. 샘플 데이터가 없음)
//             seriesItem.data.push(Math.ceil(Math.random()*10));   // 테스트 값
            
            
        }
    } else {//debugger;
    	
	    var seriesItem = { id: channel, name: channel, type: 'line',  areaStyle : {opacity : 0}, stack: channel, data: []};
	    series.push(seriesItem);
	    for (var axis of arrAxis) {//debugger;
	        var chartData = chart.inputData.find(function(e){
	            if (channel == e.id) {
	                return e;
	            }
	        });
	    	
	        var targetValue = chartData.data.find(function (e) { 
	//        	debugger;
	        	seriesItem.name = "당일";
	        	return new Date(e.datetimeX).getTime() - 54000000 === axis.getTime() && e.name === channel
	        });
	        
	        if(targetValue) {
//	        	debugger;
	        }
	        
	        seriesItem.data.push(targetValue ? targetValue.count : 0);    // Security의 이벤트는 모두 정보(4)임. (감사실패와 감사성공을 구분짓는 값이 있는지 검증필요. keywords인듯한대.. 샘플 데이터가 없음)
	//         seriesItem.data.push(Math.ceil(Math.random()*10));   // 테스트 값
	        
	        
	    }    
    
    	/////////////////////////////////////////////////////////
    	// 정합성 grouping 시 참고
    	/*
	    var chartData = chart.inputData.find(function(e){
	        if (channel == e.id) {
	            return e;
	        }
	    });     
	    
	    chartData.data.map(function(chartTypeObj){//debugger;
	    	
            var seriesItem = series.find(function(e){//debugger;
            	e.id === chartTypeObj.name; 
            });
            if(!seriesItem) {
                seriesItem ={ id: chartTypeObj.name, name: chartTypeObj.name, type: 'line', emphasis: { focus: 'series' }, areaStyle : {}, stack: channel, data: []};
                series.push(seriesItem);
            }
            for (var axis of arrAxis) {//debugger;
                var targetValue = "";
                if (new Date(chartTypeObj.datetimeX).getTime() - 32400000 === axis.getTime()) {
                	targetValue = chartTypeObj;
                }
                seriesItem.data.push(targetValue ? targetValue.count : 0);
//                 seriesItem.data.push(Math.ceil(Math.random()*10));   // 테스트 값
            }	    	
	    });
	    */
    }
}
	
//debugger;
	
	var option = {
		    title: {
		        text: title
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            label: {
		                backgroundColor: '#6a7985'
		            }
		        }
		    },
		    legend: {
		    	right: 150,
		    	top: 0,
		        data: ['전일','당일']
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
//		            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
		            type: 'value'
		        }
		    ],
		    series: series
		    	
		    	/*
		    	[
		        {
		            name: '전일',
		            type: 'line',
		            stack: 'aaa',
		            areaStyle: {},
		            data: [120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name: '프린터',
		            type: 'line',
		            stack: 'aaa',
		            areaStyle: {},
		            data: [220, 182, 191, 234, 290, 330, 310]
		        },
		        {
		            name: 'BPR',
		            type: 'line',
		            stack: 'aaa',
		            areaStyle: {},
		            data: [150, 232, 201, 154, 190, 330, 410]
		        },
//		        {
//		            name: '直接访问',
//		            type: 'line',
//		            stack: 'aaa',
//		            areaStyle: {},
//		            data: [320, 332, 301, 334, 390, 330, 320]
//		        },
		        {
		            name: '통합단말',
		            type: 'line',
		            stack: 'aaa',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top'
		                }
		            },
		            areaStyle: {},
		            data: [820, 932, 901, 934, 1290, 1330, 1320]
		        }
		    ]
		    */
		};
	chart.setOption(option);
};

function drawChartStack_2(chart, title) {//debugger;
var arrAxis = [];   // axis (unit chart)
var arrGroup = ["PCON", "PCOFF"];   // group (unit axis)
var series = [];
var time = new Date();
//var time = new Date("2021-11-19T00:00:00");    
time.setHours(0);
time.setMinutes(0);
time.setSeconds(0);
time.setMilliseconds(0);    

for (var i = 0, iL = 24; i < iL; i++) {
    // var timeX = $p.getFormattedDate(time, "HH:mm");
    arrAxis.push(new Date(time.getTime()));
    time.setHours(time.getHours() + 1);
}

for (var channel of arrGroup) {//debugger;
		
		var seriesItem = series.find(function(e){ return e.id === channel });
		
		if(!seriesItem) {
			var seriesItem = { id: channel, name: channel, type: 'line',  areaStyle : {}, stack: channel, data: []};
        	series.push(seriesItem);
		}
        for (var axis of arrAxis) {//debugger;
            var targetValue = chart.inputData.find(function (e) {
            	//debugger;
            	return new Date(e.datetimeX).getTime() === axis.getTime() && e.id === channel });
            
            if(targetValue) {
            	//debugger;
            }
            
            seriesItem.data.push(targetValue ? targetValue.count : 0);    // Security의 이벤트는 모두 정보(4)임. (감사실패와 감사성공을 구분짓는 값이 있는지 검증필요. keywords인듯한대.. 샘플 데이터가 없음)
//             seriesItem.data.push(Math.ceil(Math.random()*10));   // 테스트 값
            
            
        }
}
	

	
	var option = {
		    title: {
		        text: title
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            label: {
		                backgroundColor: '#6a7985'
		            }
		        }
		    },
		    legend: {
		    	right: 150,
		    	top: 0,
		        data: ['PCON','PCOFF']
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
//		            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
		            type: 'value'
		        }
		    ],
		    series: series
		    	
		    	/*
		    	[
		        {
		            name: '전일',
		            type: 'line',
		            stack: 'aaa',
		            areaStyle: {},
		            data: [120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name: '프린터',
		            type: 'line',
		            stack: 'aaa',
		            areaStyle: {},
		            data: [220, 182, 191, 234, 290, 330, 310]
		        },
		        {
		            name: 'BPR',
		            type: 'line',
		            stack: 'aaa',
		            areaStyle: {},
		            data: [150, 232, 201, 154, 190, 330, 410]
		        },
//		        {
//		            name: '直接访问',
//		            type: 'line',
//		            stack: 'aaa',
//		            areaStyle: {},
//		            data: [320, 332, 301, 334, 390, 330, 320]
//		        },
		        {
		            name: '통합단말',
		            type: 'line',
		            stack: 'aaa',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top'
		                }
		            },
		            areaStyle: {},
		            data: [820, 932, 901, 934, 1290, 1330, 1320]
		        }
		    ]
		    */
		};
	chart.setOption(option);
};