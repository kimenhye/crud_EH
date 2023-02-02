function drawChartBar_3(chart, title, usePercentY) {//debugger;
    var arrAxis = [];
    var series = [];
    var time = new Date();
//  var time = new Date('2021-11-18T09:00:00.000');    
    time = new Date(time.setHours(time.getHours() - 1));
    time.setMinutes(Math.floor(time.getMinutes() / 10) * 10);
    time.setSeconds(0);
    time.setMilliseconds(0);    

    for (var i = 0, iL = 7; i < iL; i++) {
        // var timeX = $p.getFormattedDate(time, "HH:mm");
        arrAxis.push(new Date(time.getTime()));
        time.setMinutes(time.getMinutes() + 10);
    }

    for (var group of chart.inputData) {
        var seriesItem = series.find(function(e){ return e.id === group.id });
        
        if(!seriesItem) {
            seriesItem = { id:group.id, type: 'bar', emphasis: { focus: 'series' }, data: [] };
            series.push(seriesItem);
        }
        for (var axis of arrAxis) {
            var targetValue = group.data.find(function (e) {return new Date(e.datetimeX).getTime() === axis.getTime() });
            console.log(targetValue);            
            	seriesItem.data.push(targetValue ? 1 : 0);
            // seriesItem.data.push(Math.ceil(Math.random()*10));   // 테스트 값
        }
    }
//    arrAxis = arrAxis.map(function(e) { return $p.getFormattedDate(e, "HH:mm"); });
//    arrAxis.reverse();
    series.sort(function (a, b) {if (a.id > b.id) {return 1;}if (a.id < b.id) {return -1;}return 0;});  // asc 정렬

    var option = {
        title: {
            text: title
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
//                return params.id + " " + "</br> - " + params.seriesId + " : " + params.value;
                return params.seriesId + " : " + params.value;
            },
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