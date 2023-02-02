function drawChartDoughnut_1(chart, title, totalCnt) {//debugger;
	
	var succTotCnt = chart.inputData[0].value;	//정상
	var failAllCnt = chart.inputData[1].value;	//비정상
	//var nonSuccCnt = chart.inputData[2].value;	//점검 미완료
	
//	var succPercent = (succTotCnt / totalCnt) * 100;

	var option = {
			title: {
				text: totalCnt,
				textStyle: {
					fontSize: 50
				},				
				subtext: "전체",
				subtextStyle: {fontSize:20},
				left: 'center',
				top: 'center',
			    itemGap: 0,
			    textVerticalAlign: "top"
			},			
		    tooltip: {
		        trigger: 'item',
		        formatter: '{a} <br/>{b}: {c} ({d}%)'
		    },
		    legend: {
		        orient: 'vertical',
		        right: 0,
		        bottom: 0,		        
		        data: ['정상' , '비정상'],
		        textStyle: {
		            fontSize: 15
		        },		        
		        formatter: function (name) {
		        	if (name == '정상') {
		        		return name + '('  + succTotCnt + ')';
		        	} else if (name == '비정상') {
		        		return name + '('  + failAllCnt + ')';
		        	}
		        }
		    },
		    series: [
		        {
		            name: title,
		            type: 'pie',
		            radius: ['75%', '95%'],
		            avoidLabelOverlap: true,
		            label: {
		                show: false,
		                position: 'center'
		            },
//		            emphasis: {
//		                label: {
//		                    show: true,
//		                    fontSize: '30',
//		                    fontWeight: 'bold'
//		                }
//		            },
//		            labelLine: {
//		                show: false
//		            },
		            data: chart.inputData
		        }
		    ]
		};
	
//	if (typeof totalCnt != "undefined" && totalCnt > 0) {
//		option.title.subtext = "전체건수 : " + totalCnt;
//		option.title.subtextStyle = {
//	        fontSize: 15
//		};
//		option.title.subtext.left = "left";
//		option.title.subtext.top = "top"		
//	}	
	
	chart.setOption(option);
};

function drawChartDoughnut_2(chart, title, totalCnt) {//debugger;

	var succTotCnt = chart.inputData[0].value;	//완료
//	var failAllCnt = chart.inputData[1].value;	//미완료

	var option = {
			title: {
				text: succTotCnt,	//완료건으로 변경 12.24
				textStyle: {
					fontSize: 50
				},				
				subtext: "자동조치",
				subtextStyle: {fontSize:20},
				left: 'center',
				top: 'center',
			    itemGap: 0,
			    textVerticalAlign: "top"		    
			},			
		    tooltip: {
		        trigger: 'item',
		        formatter: '{a} <br/>{b}: {c} ({d}%)'
		    },
		    legend: {
		        orient: 'vertical',
		        right: 0,
		        bottom: 0,
//		        data: ['완료','미완료'],
		        data: ['완료'],
		        textStyle: {
		            fontSize: 15
		        },		        
		        formatter: function (name) {
		        	if (name == '완료') {
		        		return name + '('  + succTotCnt + ')';
		        	} else if (name == '미완료') {
		        		return name + '('  + failAllCnt + ')';
		        	}
		        }
		    },
		    series: [
		        {
		            name: title,
		            type: 'pie',
		            radius: ['75%', '95%'],
		            avoidLabelOverlap: true,
		            label: {
		                show: false,
		                position: 'center'
		            },
//		            emphasis: {
//		                label: {
//		                    show: true,
//		                    fontSize: '30',
//		                    fontWeight: 'bold'
//		                }
//		            },
		            labelLine: {
		                show: false
		            },
		            data: chart.inputData, 
		        }
		    ]
		};
	chart.setOption(option);
};

function drawChartDoughnut_3(chart, title, totalCnt) {//debugger;
	
	var succTotCnt = chart.inputData[0].value;	//완료
	var failAllCnt = chart.inputData[1].value;	//미완료
	
	var option = {
			title: {
				text: totalCnt,
				textStyle: {
					fontSize: 50
				},				
				subtext: "수동조치",
				subtextStyle: {fontSize:20},
				left: 'center',
				top: 'center',
			    itemGap: 0,
			    textVerticalAlign: "top"
			},			
		    tooltip: {
		        trigger: 'item',
		        formatter: '{a} <br/>{b}: {c} ({d}%)'
		    },
		    legend: {
		        orient: 'vertical',
		        right: 0,
		        bottom: 0,
		        data: ['완료', '미완료'],
		        textStyle: {
		            fontSize: 15
		        },		        
		        formatter: function (name) {
		        	if (name == '완료') {
		        		return name + '('  + succTotCnt + ')';
		        	} else if (name == '미완료') {
		        		return name + '('  + failAllCnt + ')';
		        	}
		        }
		    },
		    series: [
		        {
		            name: title,
		            type: 'pie',
		            radius: ['75%', '95%'],
		            avoidLabelOverlap: true,
		            label: {
		                show: false,
		                position: 'center'
		            },
//		            emphasis: {
//		                label: {
//		                    show: true,
//		                    fontSize: '30',
//		                    fontWeight: 'bold'
//		                }
//		            },
		            labelLine: {
		                show: false
		            },
		            data: chart.inputData
		        }
		    ]
		};
	chart.setOption(option);
};

function drawChartDoughnutAgoDay_1(chart, title, totalCnt) {//debugger;

var succTotCnt = chart.inputData[0].value;	//정상
var failAllCnt = chart.inputData[1].value;	//비정상
//var nonSuccCnt = chart.inputData[2].value;	//점검 미완료

//var succPercent = (succTotCnt / totalCnt) * 100;

var option = {
		title: {
			text: totalCnt,
			textStyle: {
				fontSize: 30
			},				
			subtext: "전체",
			subtextStyle: {fontSize:15},
			left: 'center',
			top: 'center',
		    itemGap: 0,
		    textVerticalAlign: "top"
		},			
	    tooltip: {
	        trigger: 'item',
	        formatter: '{a} <br/>{b}: {c} ({d}%)'
	    },
	    legend: {
	        orient: 'vertical',
	        right: 0,
	        bottom: 0,		        
	        data: ['정상', '비정상'],
	        textStyle: {
	            fontSize: 15
	        },		        
	        formatter: function (name) {
	        	if (name == '정상') {
	        		return name + '('  + succTotCnt + ')';
	        	} else if (name == '비정상') {
	        		return name + '('  + failAllCnt + ')';
	        	}
	        }
	    },
	    series: [
	        {
	            name: title,
	            type: 'pie',
	            radius: ['75%', '95%'],
	            avoidLabelOverlap: true,
	            label: {
	                show: false,
	                position: 'center'
	            },
//	            emphasis: {
//	                label: {
//	                    show: true,
//	                    fontSize: '30',
//	                    fontWeight: 'bold'
//	                }
//	            },
//	            labelLine: {
//	                show: false
//	            },
	            data: chart.inputData
	        }
	    ]
	};

//if (typeof totalCnt != "undefined" && totalCnt > 0) {
//	option.title.subtext = "전체건수 : " + totalCnt;
//	option.title.subtextStyle = {
//        fontSize: 15
//	};
//	option.title.subtext.left = "left";
//	option.title.subtext.top = "top"		
//}	

chart.setOption(option);
};

function drawChartDoughnutAgoDay_2(chart, title, totalCnt) {//debugger;

var succTotCnt = chart.inputData[0].value;	//완료
//var failAllCnt = chart.inputData[1].value;	//미완료

var option = {
		title: {
			text: succTotCnt,	//완료건으로 변경 12.24
			textStyle: {
				fontSize: 30
			},				
			subtext: "자동조치",
			subtextStyle: {fontSize:15},
			left: 'center',
			top: 'center',
		    itemGap: 0,
		    textVerticalAlign: "top"
		},			
	    tooltip: {
	        trigger: 'item',
	        formatter: '{a} <br/>{b}: {c} ({d}%)'
	    },
	    legend: {
	        orient: 'vertical',
	        right: 0,
	        bottom: 0,
//	        data: ['완료','미완료'],
	        data: ['완료'],
	        textStyle: {
	            fontSize: 15
	        },		        
	        formatter: function (name) {
	        	if (name == '완료') {
	        		return name + '('  + succTotCnt + ')';
	        	} else if (name == '미완료') {
	        		return name + '('  + failAllCnt + ')';
	        	}
	        }
	    },
	    series: [
	        {
	            name: title,
	            type: 'pie',
	            radius: ['75%', '95%'],
	            avoidLabelOverlap: true,
	            label: {
	                show: false,
	                position: 'center'
	            },
//	            emphasis: {
//	                label: {
//	                    show: true,
//	                    fontSize: '30',
//	                    fontWeight: 'bold'
//	                }
//	            },
	            labelLine: {
	                show: false
	            },
	            data: chart.inputData, 
	        }
	    ]
	};
chart.setOption(option);
};

function drawChartDoughnutAgoDay_3(chart, title, totalCnt) {//debugger;

var succTotCnt = chart.inputData[0].value;	//완료
var failAllCnt = chart.inputData[1].value;	//미완료

var option = {
		title: {
			text: totalCnt,
			textStyle: {
				fontSize: 30
			},				
			subtext: "수동조치",
			subtextStyle: {fontSize:15},
			left: 'center',
			top: 'center',
		    itemGap: 0,
		    textVerticalAlign: "top"
		},			
	    tooltip: {
	        trigger: 'item',
	        formatter: '{a} <br/>{b}: {c} ({d}%)'
	    },
	    legend: {
	        orient: 'vertical',
	        right: 0,
	        bottom: 0,
	        data: ['완료', '미완료'],
	        textStyle: {
	            fontSize: 15
	        },		        
	        formatter: function (name) {
	        	if (name == '완료') {
	        		return name + '('  + succTotCnt + ')';
	        	} else if (name == '미완료') {
	        		return name + '('  + failAllCnt + ')';
	        	}
	        }
	    },
	    series: [
	        {
	            name: title,
	            type: 'pie',
	            radius: ['75%', '95%'],
	            avoidLabelOverlap: true,
	            label: {
	                show: false,
	                position: 'center'
	            },
//	            emphasis: {
//	                label: {
//	                    show: true,
//	                    fontSize: '30',
//	                    fontWeight: 'bold'
//	                }
//	            },
	            labelLine: {
	                show: false
	            },
	            data: chart.inputData
	        }
	    ]
	};
chart.setOption(option);
};