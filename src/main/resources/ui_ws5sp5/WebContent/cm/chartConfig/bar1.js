function drawChartBar_1(chart, title, usePercentY, data, group) {
    // data: {data:[], keyName:deviceId, viewCount:5}
    // group: {keyName:"procName", valueName:"cpuUsage", viewCount:5}

    var xAxisNames = [];
    var series = [];
    for (var i = 0, iL = data.data.length; i < iL; i++) {
        var row = data.data[i];
        var keyName = row[data.keyName];

        var xAxisName;
        if (xAxisNames.length < data.viewCount) {
            xAxisName = xAxisNames.find(function (e) {
                return e.name === keyName;
            });

            if (!xAxisName) {
                xAxisName = { name: keyName, values: [] }
                xAxisNames.push(xAxisName);
            }
        }

        if (xAxisName.values) {
            if (xAxisName.values.length >= group.viewCount) {
                continue;
            }
            xAxisName.values.push({ name: row[group.keyName], value: row[group.valueName] });
        }
    }

    series = xAxisNames.map(function (e) {
        return e.values;
    });
    // 행렬 반전
    const transpose = (original) => {
        const rowOfOrigin = original.length;
        const colOfOrigin = original[0].length;
        const transposed = Array.from({ length: colOfOrigin }, () => new Array(rowOfOrigin).fill(0));
        for (let i = 0; i < rowOfOrigin; i++) {
            for (let j = 0; j < colOfOrigin; j++) {
                [transposed[j][i]] = [original[i][j]];
            }
        }
        return transposed;
    }
    series = transpose(series);

    series = series.map(function (e) {
        return { type: "bar", data: e };
    });
    xAxisNames = xAxisNames.map(function (e) {
        return e.name;
    });

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
        xAxis: { type: 'category', data: xAxisNames },
        yAxis: { type: 'value' },
        series: series
    };
    if (usePercentY) {
        option.yAxis.min = 0;
        option.yAxis.max = 100;
    }
    chart.setOption(option);
};