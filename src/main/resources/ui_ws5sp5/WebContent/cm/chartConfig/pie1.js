function drawChartPie_1(chart, title, totalCnt) {//debugger;
	var option = {
		    title: {
		    	text: title,
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
		        formatter: '{b} : {c} ({d}%)'
		    },
		    legend: {
				type:'scroll',
//		        orient: 'vertical',
		        left: 'right',
		        top: 'bottom',
				formatter: function (params) {
					return "";
				},
				tooltip: {
					show:true,
					formatter: function (params) {
						return params.name;
					},
				}
		    },
		    toolbox: {
		        show: true,
		        feature: {
		            mark: {show: true},
		            // restore: {show: true},
		            saveAsImage: {show: true}
		        }
		    },
		    series: [		        
		        {
		            type: 'pie',
		            radius: [20, 90],
		            roseType: 'area',
		            itemStyle: {
		                borderRadius: 5
		            },
                    label: {
                        formatter: '{b}: {c} ({d}%)'
                    },		            
		            data: chart.inputData
		        }
		    ]
		};
	
	if (typeof totalCnt != "undefined" && totalCnt > 0) {
		option.title.subtext = "전체건수 : " + totalCnt;
	}	
	
	chart.setOption(option);
};