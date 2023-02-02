function drawChartLine_3(chart, title, usePercentY, series, intervalSeconds, rangeMinutes, yAxisUnit) {//debugger;
	
	var yAxisFormatterLabel = "";
	if (yAxisUnit == "percent") {
		yAxisFormatterLabel = "{value} %";
	} else if (yAxisUnit == "Kbps"){
		yAxisFormatterLabel = "{value} Kbps/s";
	} else if (yAxisUnit == "mbyte"){
		yAxisFormatterLabel = "{value} MB/s";
	}
	debugger;	
    var intervalSeconds = intervalSeconds ? intervalSeconds : 5 * 60;
    var rangeMinutes = rangeMinutes ? rangeMinutes : 60;
    var arrAxis = [];
    var time = new Date();
    

    time.setHours(time.getHours() - 1);
//  time.setSeconds(Math.floor(time.getSeconds() / intervalSeconds) * intervalSeconds);
  
  var minutesStr = time.getMinutes() + "";
  var num1 = minutesStr.length > 1 ? minutesStr.slice(-2,1) : "";
  var num2 = minutesStr.slice(-1);
  
  if (num2 < 5 ) {
  	time.setMinutes(parseInt(num1 + "0"));
  } else if (num2 > 5 ) {
  	time.setMinutes(parseInt(num1 + "5"));
  }    
    
//    time.setSeconds(Math.floor(time.getSeconds() / intervalSeconds) * intervalSeconds);
//    time.setMilliseconds(0);
//console.log((rangeMinutes * 60) / intervalSeconds);
    for (var i = 0, iL = 12; i <= iL; i++) {
        // var timeX = $p.getFormattedDate(time, "HH:mm");
    	arrAxis.push(new Date(time.getTime()));
        time.setSeconds(time.getSeconds() + intervalSeconds);
    }
    debugger;
    arrAxis.sort();
    var option = {
        title: {
            text: title
        },
        tooltip: {
            //trigger: 'axis',
            showDelay: 0,
            formatter: function (params) {
                return 'IP: ' + params.data.ip + '<br/>이름: ' + params.data.userName + '<br/>점번: ' + params.data.brNo + '<br/>value: ' + params.data.value + '<br/>발생시간: ' + $p.getFormattedDate(new Date(params.name.replace("Z","")), "HH:mm:ss") 
            },
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
	                obj.left = pos[0] - 200;
	            } else {
	            	obj.left = pos[0] + 50; 
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
            data: arrAxis,
            boundaryGap: true,
            axisLabel: {
                formatter: function (value, index) {
                    // return new Date(value).toISOString();
                    // return value;
                    return $p.getFormattedDate(new Date(value), "HH:mm");
                    // return value.getHours() +":"+ value.getMinutes();
                }
            },
            scale: false,
            splitLine: {
                show: false
            }
        },
        // dataset:{ source: series.data },
        yAxis: {
            type: 'value',
            scale: false,
            axisLabel: {
            	inside: false,
                formatter: yAxisFormatterLabel
            },
            splitLine: {
                show: false
            }
        },
        series: series
    };
    if (usePercentY) {
        option.yAxis.min = 0;
        option.yAxis.max = 100;
    }
    chart.setOption(option);
};