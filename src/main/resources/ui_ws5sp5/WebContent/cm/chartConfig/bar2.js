function drawChartBar_2(chart, title, usePercentY) {//debugger;
    // data: {data:[], keyName:deviceId, viewCount:5}
    // group: {keyName:"procName", valueName:"cpuUsage", viewCount:5}
    var arrAxis = [];   // axis (unit chart)
    var arrGroup = ["Application", "System", "Setup", "UserDefine", "Security"];   // group (unit axis)
    var arrStack = [
        { name: "information", col: "level4Count" },
        { name: "caution", col: "level3Count" },
        { name: "error", col: "level2Count" },
        { name: "warning", col: "level1Count" }
    ];   // stack (unit series)
    var series = [];
    var currDate = new Date();
    var time = new Date(currDate.setHours(currDate.getHours() - 24));
//    var time = new Date();
//    time.setMinutes(Math.floor(time.getMinutes() / 10) * 10);
    time.setMinutes(0);
    time.setSeconds(0);
    time.setMilliseconds(0);

    var totDataCnt = 0;
    var arr = chart.inputData.map(function(e){return e.totalCount});
    for(var i=0;i<arr.length;i++) {
    	totDataCnt = totDataCnt + arr[i];
    }    
    
    for (var i = 0, iL = 24; i < iL; i++) {
        // var timeX = $p.getFormattedDate(time, "HH:mm");
//    	var time = new Date(new Date('2021-11-12').setHours(new Date('2021-11-12').getHours() + i - 9));
//    	  arrAxis.push(time);
        arrAxis.push(new Date(time.getTime()));
//        time.setMinutes(time.getMinutes() + 10);
        time.setHours(time.getHours() + 1);
    }

    for (var channel of arrGroup) {
        if (channel === "Security") {
            var seriesItem = { id: channel+"-failure", name: "failure", type: 'line', emphasis: { focus: 'series' }, data: []};
            series.push(seriesItem);
            for (var axis of arrAxis) {
                var targetValue = chart.inputData.find(function (e) {return new Date(e.datetimeX).getTime() === axis.getTime() && e.channel === channel });
                seriesItem.data.push(targetValue ? targetValue.securityFailCount : 0);    // Security의 이벤트는 모두 정보(4)임. (감사실패와 감사성공을 구분짓는 값이 있는지 검증필요. keywords인듯한대.. 샘플 데이터가 없음)
//                 seriesItem.data.push(Math.ceil(Math.random()*10));   // 테스트 값
            }
        } else {
            for (var stack of arrStack) {
                var seriesItem = series.find(function(e){ e.name === stack.name && e.channel === channel });
                if(!seriesItem) {
                    seriesItem = { id: channel+"-"+stack.name, name: stack.name, type: 'bar', emphasis: { focus: 'series' }, data: [], stack: channel};
                    series.push(seriesItem);
                }
                for (var axis of arrAxis) {
                    var targetValue = chart.inputData.find(function (e) {return new Date(e.datetimeX).getTime() === axis.getTime() && e.channel === channel });
                    seriesItem.data.push(targetValue ? targetValue[stack.col] : 0);
//                     seriesItem.data.push(Math.ceil(Math.random()*10));   // 테스트 값
                }
            }
        }
    }

//    arrAxis = arrAxis.map(function(e) {return $p.getFormattedDate(e, "HH:mm"); });
//    arrAxis.reverse();

    var option = {
    		title: {
		    	text: title,
		        subtext: '전체 건수 : ' + totDataCnt,
		        left: "left",
		        top: "top",
		        textStyle: {
		          fontSize: 20
		        },
		        subtextStyle: {
		          fontSize: 15
		        }	    	
		    },
        tooltip: {
            trigger: 'item',
//            formatter: function (params) {
//                return params.name + " " + params.seriesId.split("-")[0] + "</br> - " + params.seriesName + " : " + params.value;
//            },
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        grid: {
            left: '8px',
            right: '8px',
            bottom: '8px',
            containLabel: true
        },
        xAxis: {
            type: 'category', data: arrAxis,
             axisLabel: {
                 formatter: function (value, index) {
                     value = new Date(value);
                     return $p.getFormattedDate(value, "HH:mm");
                     // return value.getHours() +":"+ value.getMinutes();
                 }
             }
        },
        yAxis: {
            type: 'value'

        },
        series: series
    };
    if (usePercentY) {
        option.yAxis.min = 0;
        option.yAxis.max = 100;
    }

    chart.setOption(option);
};