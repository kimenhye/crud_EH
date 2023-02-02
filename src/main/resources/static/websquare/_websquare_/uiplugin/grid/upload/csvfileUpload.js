/*amd /websquare/csvfileUpload.xml 39285 1a3c35aa0d8e950a43cbbccf2d253c8ecf987712493c1ae148afcc50147d289f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.none{display:none}.block{display:block}.exup_wrap{width:444px;min-height:106px;border:1px solid #b3b3b3}.exup_header{height:27px}.exup_header .title{padding-left:28px;font-weight:700;line-height:23px}.exup_header .title2{padding-left:28px;font-weight:700;line-height:23px;float:left}.exup_header span{padding-right:20px;float:right;display:block}.exup_header span input[type=checkbox]{position:relative;top:1px}.exup_spanGroup{background-color:transparent}.exup_content{padding:15px 10px 12px}.exup_content .filebox{padding:8px 0 0 11px;width:408px;height:33px;border:1px solid #d3d3d3;background:#f6f6f6}.exup_content .filebox input[type=file]{width:397px;height:24px;font-family:Verdana;font-size:12px;background:#fff}.exup_tbl{margin:15px auto 0;width:400px}.exup_tbl th,.tbl td{min-width:100px;height:24px;text-align:left}.exup_tbl th .dot{padding-left:14px}.exup_tbl td .ipt{width:74px;height:16px}.exup_tbl td .sel{width:80px;height:20px}.btn_exup_file{margin-bottom:14px;width:90px;position:relative;left:333px;border-radius:4px}'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
				window.WebSquare.csvPopUUID = $p.getFrameId();
				scwin.sizeInfo = {};
				scwin.osName = "";
				scwin.vActionUrl = "";
				scwin.domain = "";
				scwin.processMsg = "";
				scwin.type = "";
				scwin.vappend = "";
				scwin.gridID = "";
				scwin.vfooter = "";
				scwin.action = "";
				scwin.dataList = "";
				scwin.columnIds = "";
				scwin.expression = "";
				scwin.status = "";
				scwin.optionParam = "";
				scwin.maxFileSize = -1;
				scwin.useModalDisable = "";
				scwin.columnOrder = "";
                scwin.useXHR = false;

				// 다국어
				scwin.Upload_ignore_spaces = "";
				scwin.Upload_include_spaces = "";
				scwin.Upload_advanced = "";
				scwin.Upload_include = "";
				scwin.Upload_not_include = "";
				scwin.Upload_fill_hidden = "";
				scwin.Upload_sheet_no = "";
				scwin.Upload_starting_row = "";
				scwin.Upload_starting_col = "";
				scwin.Upload_footer = "";
				scwin.Upload_file = "";
				scwin.Upload_header = "";

				scwin.Upload_msg1 = "";
				scwin.Upload_msg2 = "";
				scwin.Upload_msg3 = "";
				scwin.Upload_msg4 = "";
				scwin.Upload_msg5 = "";
				scwin.Grid_warning9 = "";
				
				scwin.onpageload = function() {
					scwin.setImgURL();
					scwin.uploadInfo = $p.getParameter("csvPopupParam");
					try {
						scwin.domain = scwin.uploadInfo.domain;
						if(scwin.domain) {
							document.domain = scwin.domain;
						}
					} catch (e) {
					}

					scwin.postMsg = scwin.uploadInfo.postdMsg;
					if(scwin.postMsg == "true") {
						if(window.addEventListener) {
							window.addEventListener ("message", receiveMessage, false);
						} else {
							if(window.attachEvent) {  
								window.attachEvent("onmessage", receiveMessage);
							}
						}
					}

					scwin.useModalDisable = scwin.uploadInfo.useModalDisable;
					if(scwin.useModalDisable == "true") {
						WebSquare.layer.showModal();
					}
					scwin.Upload_ignore_spaces = WebSquare.language.getMessage( "Upload_ignore_spaces" ) || "공백무시";
					scwin.Upload_include_spaces = WebSquare.language.getMessage( "Upload_include_spaces" ) || "공백포함";
					scwin.Upload_advanced = WebSquare.language.getMessage( "Upload_advanced" ) || "고급설정";
					scwin.Upload_hidden_values = WebSquare.language.getMessage( "Upload_hidden_values" ) || "히든값유무";
					scwin.Upload_include = WebSquare.language.getMessage( "Upload_include" ) || "포함";
					scwin.Upload_not_include = WebSquare.language.getMessage( "Upload_not_include" ) || "미포함";
					scwin.Upload_fill_hidden = WebSquare.language.getMessage( "Upload_fill_hidden" ) || "히든 채움";
					scwin.Upload_starting_row = WebSquare.language.getMessage( "Upload_starting_row" ) || "시작 row";
					scwin.Upload_file = WebSquare.language.getMessage( "Upload_file" ) || "파일 업로드";
					scwin.Upload_fill = WebSquare.language.getMessage( "Upload_fill" ) || "채움";
					scwin.Upload_ignore = WebSquare.language.getMessage( "Upload_ignore" ) || "무시";
					scwin.Upload_header = WebSquare.language.getMessage( "Upload_header" ) || "헤더 유무";

					scwin.Upload_msg2 = WebSquare.language.getMessage( "Upload_msg2" ) || "파일 사이즈가 제한 용량을 초과 하였습니다.";
					scwin.Upload_msg3 = WebSquare.language.getMessage( "Upload_msg3" ) || "정상적으로 처리 되지 않았습니다.";
					scwin.Upload_msg4 = WebSquare.language.getMessage( "Upload_msg4" ) || "FileType에 맞지 않는 File의 확장자입니다.";
					scwin.Upload_msg5 = WebSquare.language.getMessage( "Upload_msg5" ) || "그리드 반영에 실패하였습니다";
					scwin.maxFileSize = scwin.uploadInfo.maxFileSize;
					scwin.maxFileSize = parseInt( scwin.maxFileSize, 10 );
					scwin.Grid_warning9 = WebSquare.language.getMessage( "Grid_warning9", scwin.maxFileSize ) || "전송 data가 제한 크기를 초과 하였습니다.\n 제한 크기 : %1 byte";

					setting.render.innerHTML = scwin.Upload_advanced;
					sub.render.setAttribute( "csvPop_summary", scwin.Upload_ignore_spaces + "," + scwin.Upload_hidden_values + "," + scwin.Upload_fill_hidden + "," + scwin.Upload_footer );
					advanced.render.innerHTML = scwin.Upload_advanced;
					space_option.setValue(scwin.Upload_ignore_spaces);
					
					spaceSelect.render.name = "skip_space";
					scwin.sel1 = document.getElementsByName("skip_space")[0];
					scwin.sel1[0].text = scwin.Upload_ignore_spaces;
					scwin.sel1[1].text = scwin.Upload_include_spaces;
					scwin.sel1[0].value = "true";
					scwin.sel1[1].value = "false";
					
					start_option.setValue(scwin.Upload_starting_row);
					hidden_option.setValue(scwin.Upload_hidden_values);
					
					hiddenSelect.render.name = "hidden";
					scwin.sel2 = document.getElementsByName("hidden")[0];
					scwin.sel2[0].text = scwin.Upload_include;
					scwin.sel2[1].text = scwin.Upload_not_include;
					scwin.sel2[0].value = "true";
					scwin.sel2[1].value = "false";
					
					fillHidden.render.name = "fillHidden";
					scwin.sel3 = document.getElementsByName("fillHidden")[0];
					scwin.sel3[0].text = scwin.Upload_fill;
					scwin.sel3[1].text = scwin.Upload_ignore;
					scwin.sel3[0].value = "true";
					scwin.sel3[1].value = "false";
					
					hidden_fill.setValue(scwin.Upload_hidden_values);
					sendFILE.setValue(scwin.Upload_file);
					header_option.setValue(scwin.Upload_header);
					
					header.render.name = "header";
					scwin.sel4 = document.getElementsByName("header")[0];
					scwin.sel4[0].text = scwin.Upload_include;
					scwin.sel4[1].text = scwin.Upload_not_include;
					scwin.sel4[0].value = "true";
					scwin.sel4[1].value = "false";

					scwin.sizeInfo.height = scwin.uploadInfo.sizeInfo.height;
					scwin.sizeInfo.width = scwin.uploadInfo.sizeInfo.width;
					scwin.osName = scwin.uploadInfo.osName;


					//  header, append, hidden, columnNum, hiddenColumns, action
					scwin.type = scwin.uploadInfo.type;
					scwin.uploadType = scwin.uploadInfo.uploadType;
					scwin.delim = scwin.uploadInfo.delim;
					scwin.escapeChar = scwin.uploadInfo.escapeChar;
					scwin.vheader = scwin.uploadInfo.header;
					scwin.vfooter = scwin.uploadInfo.footer;
					scwin.vappend = scwin.uploadInfo.append;
					scwin.vhidden = scwin.uploadInfo.hidden;
					scwin.fillHidden = scwin.uploadInfo.fillHidden;
					scwin.advancedHidden = scwin.uploadInfo.advancedHidden;
					scwin.skipSpace = scwin.uploadInfo.skipSpace;
					scwin.vremoveColumns = scwin.uploadInfo.removeColumns;
					scwin.actionUrl = scwin.uploadInfo.action;
					scwin.gridID = scwin.uploadInfo.gridID;
					scwin.vcolumnNum = scwin.uploadInfo.columnNum;
					scwin.expressionColumns = scwin.uploadInfo.expressionColumns;
					scwin.vhiddenColumns = scwin.uploadInfo.hiddenColumns;
					scwin.vheaderRows = scwin.uploadInfo.headerRows;
					scwin.gridStartRow = scwin.uploadInfo.gridStartRow;
					//var gridStartCol = getParameter("gridStartCol");
					
					scwin.columnIds = scwin.uploadInfo.columnIds;
					scwin.processMsg = scwin.uploadInfo.processMsg;
					scwin.processMsg = WebSquare.text.BASE64URLDecoder( scwin.processMsg );
					scwin.dataList = scwin.uploadInfo.dataList;
					scwin.expression = scwin.uploadInfo.expression;
					scwin.status = scwin.uploadInfo.status;
					scwin.optionParam = scwin.uploadInfo.optionParam;
					scwin.columnOrder = scwin.uploadInfo.columnOrder;
                    scwin.useXHR = scwin.uploadInfo.useXHR;

					domain.setValue(scwin.domain);
					delim.setValue(scwin.delim);
					escapeChar.setValue(scwin.escapeChar);
					
					// advancedHidden
					scwin.advancedSetting = advancedSetting;
					if( typeof scwin.advancedHidden == "string") {
						scwin.advancedHidden = WebSquare.util.getBoolean(scwin.advancedHidden);
					}

					if( scwin.advancedHidden ) {
						scwin.advancedSetting.setStyle("display", "none");
						scwin.advancedSetting.setStyle("visibillity", "hidden");
					}
					
					// skipSpace
					if( typeof scwin.skipSpace == "string" ) {
						scwin.skipSpace  = WebSquare.util.getBoolean(scwin.skipSpace);
					}
					
					if( scwin.skipSpace ) {
						scwin.sel1[0].selected = true;
					} else {
						scwin.sel1[1].selected = true;
					}
					
					// hidden
					if( typeof scwin.vhidden == "string") {
						scwin.vhidden  = WebSquare.util.getBoolean(scwin.vhidden);
					}

					if( scwin.vhidden ) {
						scwin.sel2[0].selected = true;
					} else {
						scwin.sel2[1].selected = true;
					}

					// fillHidden
					if( typeof scwin.fillHidden == "string" ) {
						scwin.fillHidden  = WebSquare.util.getBoolean(scwin.fillHidden);
					}
					
					if( scwin.fillHidden ) {
						scwin.sel3[0].selected = true;
					} else {
						scwin.sel3[1].selected = true;
					}
					
					//header 처리
					if( typeof scwin.vheader == "string" ) {
						scwin.vheader  = WebSquare.util.getBoolean(scwin.vheader);
					}
					
					if( scwin.vheader ) {
						scwin.sel4[0].selected = true;
						//scwin.header[0].selected;
					} else {
						scwin.sel4[1].selected = true;
						//scwin.header[1].selected;
					}

					removeColumns.setValue(scwin.vremoveColumns);
					columnNum.setValue(scwin.vcolumnNum);
					expressionColumns.setValue(scwin.expressionColumns);
					hiddenColumns.setValue(scwin.vhiddenColumns);
					//document.getElementById("footer").value = vfooter;
					//document.getElementById("header").value = scwin.vheader;
					headerRows.setValue(scwin.vheaderRows);

					// row 조회
					scwin.el = WebSquare.xml.getElementsByTagName(window[scwin.gridID].element, "w2:gBody");
					scwin.rows = WebSquare.xml.getElementsByTagName(scwin.el[0],"w2:row");
					scwin.myrows = scwin.rows.length;
					bodyRows.setValue(scwin.myrows);

					gridStartRow.setValue(scwin.gridStartRow);
					////document.getElementById("gridStartCol").value = gridStartCol;
					////document.getElementById("gridEndCol").value = gridEndCol;

					//grid style을 전송한다. 
					var elemType = window[scwin.gridID].element._elementType;
				    var gridStyleStr = "";
				    if (elemType === "json") {
				        gridStyleStr = WebSquare.xmljs.json2xml(window[scwin.gridID].element._element, {
                            "changeKey" : {
                                "w2:select" : "w2:column" 
                            } 
                        });
				    } else {
				        gridStyleStr = WebSquare.xml.noNameSpaceSerialize(window[scwin.gridID].element._element);
				    }
					gridStyle.setValue(gridStyleStr);
					expression.setValue(scwin.expression);
					optionParam.setValue(scwin.optionParam);
					columnOrder.setValue(scwin.columnOrder);
                    useXHR.setValue(scwin.useXHR);

					with( document.__uploadForm__ ) {
						action = scwin.actionUrl;
					}
				};
				
				scwin.onpageunload = function() {
					
				};

				scwin.setImgURL = function() {
					scwin.headerURL = "url(" + "'" + WebSquare.baseURI + "/_websquare_/uiplugin/grid/upload/images/bg_header.gif" + "')" + "repeat-x left top";
					scwin.titleURL = "url(" + "'" + WebSquare.baseURI + "/_websquare_/uiplugin/grid/upload/images/bul_title.gif" + "')" + "no-repeat 11px 6px";
					scwin.dotURL = "url(" + "'" + WebSquare.baseURI + "/_websquare_/uiplugin/grid/upload/images/dot.gif" + "')" + "no-repeat left center";
					
					bg_header.setStyle("background", scwin.headerURL);
					bul_title.setStyle("background", scwin.titleURL);
					space_option.setStyle("background", scwin.dotURL);
					start_option.setStyle("background", scwin.dotURL);
					hidden_option.setStyle("background", scwin.dotURL);
					hidden_fill.setStyle("background", scwin.dotURL);
					header_option.setStyle("background", scwin.dotURL);
				};

				window.returnData = function( vData ) {
					with (WebSquare.util.getComponentById(WebSquare.csvPopUUID).scope) {
						if( scwin.processMsg != "" ) {
							scwin.hideProcessMessage();
						}
				
						scwin.doc = WebSquare.xml.parse( vData );
						scwin.exception = scwin.doc.getElementsByTagName("Exception");
				
						if( scwin.exception.length > 0) {
							scwin.code = scwin.doc.getElementsByTagName("deniedCodeList")[0].firstChild;
							if( typeof scwin.code == "undefined" || scwin.code == null || scwin.code == "" ) {
								scwin.code = "";	
							} else {
								scwin.code = scwin.code.nodeValue;
							}
				
							if( scwin.code == "102" ) {
								scwin.msg = scwin.Upload_msg2;
							} else {
								scwin.msg = scwin.doc.getElementsByTagName("message")[0].firstChild;
								if( typeof scwin.msg == "undefined" || scwin.msg == null || scwin.msg == "" ) {
									scwin.msg = scwin.Upload_msg3;
								} else {
									scwin.msg = scwin.msg.nodeValue;
								}
							}
							
							alert(scwin.msg);
						} else {
							scwin.child = (scwin.doc.getElementsByTagName("array"))[0].firstChild.nodeValue;
							
							if( typeof scwin.vappend =="string" ) {
								scwin.vappend = WebSquare.util.getBoolean(scwin.vappend);
							}
							
							scwin.compId = "";
							try {
								
								scwin.jsonArray = {
										columnInfo:scwin.columnIds.split(","),
										data:scwin.child
								};
								
								if( scwin.dataList != "" ) {
									scwin.compId = scwin.dataList;
									scwin.dcComp = WebSquare.util.getComponentById(scwin.compId);
									scwin.preCnt = scwin.dcComp.getRowCount();
									
									if( scwin.uploadType == 1 || scwin.uploadType == 2 ) {
										window[scwin.compId].setArrayFile(scwin.jsonArray, scwin.vappend, scwin.gridID, scwin.uploadType);
									}else{
										window[scwin.compId].setArray(scwin.jsonArray, scwin.vappend);
									}
				
									if( status == "C" ) {
										scwin.postCnt = scwin.dcComp.getRowCount();
										if( scwin.vappend ) {
											scwin.dcComp.modifyRangeStatus( scwin.preCnt, scwin.postCnt, "C" );
										} else {
											scwin.dcComp.modifyRangeStatus( 0, scwin.postCnt, "C" );
										}
									}
				
								} else {
									scwin.compId = scwin.gridID;
									scwin.gridObj = window[scwin.compId];
									scwin.preCnt = scwin.gridObj.getRowCount();
									if( scwin.uploadType == 1 || scwin.uploadType == 2 ) {
										window[scwin.compId].setDataFile(scwin.child, scwin.vappend, scwin.jsonArray.columnInfo, scwin.compId, scwin.uploadType);
									}else{
										window[scwin.compId].setData(scwin.child, scwin.vappend);
									}
				
									if( scwin.status == "C" ) {
										scwin.postCnt = scwin.gridObj.getRowCount();
										if( scwin.vappend ) {
											scwin.gridObj.modifyRangeStatus( scwin.preCnt, scwin.postCnt, "C" );
										} else {
											scwin.gridObj.modifyRangeStatus( 0, scwin.postCnt, "C" );
										}
									}
				
								}
								
								scwin.fileNameDom = filename;
								scwin.fileName = scwin.fileNameDom.getValue();
								scwin.fileNameArr = scwin.fileName.split("\\"); //fileName에 대해서 IE에서는 파일 경로가 나오는데 FF chrome은 나오지 않는다. 따라서 '\\\\'기준으로 나눠준다.
								window[scwin.gridID].fireFileReadEnd( scwin.fileNameArr[scwin.fileNameArr.length-1] );
							} catch (e) {
								WebSquare.exception.printStackTrace(e);
								alert( scwin.Upload_msg5 );
							}
						}
						gridStyle.setValue(null);
						$p.getFrame().getParent().close();
						scwin.deleteElements();
					}
				}

				scwin.deleteElements = function() {
					if (scwin.processMsg != "") {
						scwin.parentElem.removeChild(scwin.processbar2);
						scwin.parentElem.removeChild(scwin.processbar2i);
					}
					if (!scwin.find) {
						scwin.parentElem.removeChild(scwin.layerUP);
					}
				}

				
				scwin.receiveMessage = function(retObj) {
					try {
						returnData(retObj.data);
					} catch (e) {
						WebSquare.exception.printStackTrace(e);
						alert( scwin.Upload_msg5 );
					}
				};

				scwin.showProcessMessage = function( processMsg ) {
					try {
						if(!processMsg || processMsg == "" ) { 
							return;
						}

						scwin.processbar2_main = document.getElementById( "___processbar2" );
						scwin.processbar2 = document.getElementById( "___processbar2_i" );
						scwin.processMsgURL = WebSquare.core.getConfiguration( "processMsgURL" );
						scwin.processMsgHeight = WebSquare.core.getConfiguration( "processMsgHeight" );
						scwin.processMsgWidth = WebSquare.core.getConfiguration( "processMsgWidth" );
						scwin.processMsgBackground = WebSquare.core.getConfiguration( "processMsgBackground" );
						scwin.processMsgBackgroundColor = WebSquare.core.getConfiguration( "/WebSquare/processMsgBackground/@backgroundColor" );
						if (scwin.processMsgBackgroundColor == ""){
							scwin.processMsgBackgroundColor = "#112233";	
						}
						if( scwin.processMsgURL == "" ) {
							scwin.processMsgURL = WebSquare.baseURI + WebSquare.BootLoader.inquiresPath("message/processMsg.html");
						}
						
						scwin.processMsgURL = scwin.processMsgURL + "?param=" + WebSquare.text.URLEncoder(processMsg);
						
						if( scwin.processMsgHeight == "" || scwin.processMsgWidth == "" ) {
							scwin.processMsgHeight = "74";
							scwin.processMsgWidth = "272";
						}

						WebSquare.layer.processMsg = processMsg;
						
						if(!scwin.processbar2_main){
							scwin.node2Main = document.createElement( "div" );
							scwin.node2Main.id = "___processbar2";
							scwin.node2Main.className = "w2modal";
							scwin.node2Main.style.backgroundColor = scwin.processMsgBackgroundColor;
							scwin.node2Main.tabIndex = 1;
							if(scwin.processMsgBackground == "true"){
								scwin.node2Main.style.visibility = "visible";
							} else{
								scwin.node2Main.style.visibility = "hidden";
							}
							
							scwin.node2Main.style.height = document.documentElement.clientHeight + "px";
							document.body.appendChild( scwin.node2Main );
							
							scwin.e = scwin.e || event;
							if( scwin.e.preventDefault ) {
								if( scwin.e.type == "keydown" ) {
									scwin.e.preventDefault();
								}
							} else {
								if( scwin.e.type == "keydown" ) {
									scwin.e.returnValue = false;
								}
							}
							
						} else {
							scwin.processbar2_main.tabIndex = 1;
							scwin.processbar2_main.style.zIndex = 10000;
							scwin.processbar2_main.style.display = "block";
							scwin.processbar2_main.style.top = "0px";
							scwin.processbar2_main.style.left = "0px";
						}

						if( !scwin.processbar2 ) {
							scwin.nTop = document.documentElement.scrollTop + document.documentElement.clientHeight/2 - parseInt(scwin.processMsgHeight)/2;
							scwin.nLeft = document.documentElement.scrollLeft + document.documentElement.clientWidth/2 - parseInt(scwin.processMsgWidth)/2;

							scwin.node2 = document.createElement("div");
							scwin.node2.id = "___processbar2_i";
							scwin.node2.style.position = "absolute";
							scwin.node2.style.top = parseInt(scwin.nTop) + "px";
							scwin.node2.style.left = parseInt(scwin.nLeft) + "px";
							scwin.node2.style.overflow = "hidden";
							scwin.node2.style.zIndex = 10001;
							scwin.node2.style.visibility = "visible";
							scwin.node2.style.height = scwin.processMsgHeight + "px";
							scwin.node2.style.width = scwin.processMsgWidth + "px";

							document.body.appendChild( scwin.node2 );
							scwin.node2.innerHTML = "<iframe frameborder='0' scrolling='no' name='__processbarIFrame' style='position:absolute; width:"+scwin.processMsgWidth+"px; height:"+ scwin.processMsgHeight +"px; top:0px; left:0px' src='" + scwin.processMsgURL + "'></iframe>";
							
						} else {
							scwin.nTop = document.documentElement.scrollTop + document.documentElement.clientHeight/2 - parseInt(scwin.processMsgHeight)/2;
							scwin.nLeft = document.documentElement.scrollLeft + document.documentElement.clientWidth/2 - parseInt(scwin.processMsgWidth)/2;
							scwin.processbar2.style.top = parseInt(scwin.nTop) + "px";
							scwin.processbar2.style.left = parseInt(scwin.nLeft) + "px";
							scwin.processbar2.style.zIndex = 10001;
							window.frames["__processbarIFrame"].location.replace( scwin.processMsgURL );
							scwin.processbar2.style.display = "block";
						} 
					} catch( e ) {
					}
				};
				
				scwin.hideProcessMessage = function() {
					try {
						scwin.processbar2 = document.getElementById( "___processbar2" );
						scwin.processbar2i = document.getElementById( "___processbar2_i" );
						if( typeof scwin.processbar2 != "undefined" && scwin.processbar2 != null ) {
							scwin.processbar2.style.zIndex = -1;
							scwin.processbar2.style.display = "none";
							scwin.processbar2.tabIndex = "-1";
							scwin.processbar2.innerHTML = '';
						}
						if( typeof scwin.processbar2i != "undefined" && scwin.processbar2i != null ) {
							scwin.processbar2i.style.zIndex = -1;
							scwin.processbar2i.style.display = "none";
						}
					} catch( e ) {
					}
				};

				scwin.crossBrowserHeight = function() {
                    scwin.height = 255;
                    if(WebSquare.util.isIE(6)) {
                        scwin.height = 255;
                    } else if(WebSquare.util.isIE(7)) {
                        scwin.height = 255;
                    } else if(WebSquare.util.isIE(8)) {
                        scwin.height = 255;
                    } else if(WebSquare.util.isIE(9)) {
                        scwin.height = 255;
                    } else if(WebSquare.util.isIE(10)) {
                        scwin.height = 253;
                    } else if(WebSquare.util.isIEAllVersion(11)) {
                        scwin.height = 260;
                    } else if(WebSquare.util.isFF()) {
                        if(scwin.osName == "window") {
                            scwin.height = 255;
                        } else if(scwin.osName == "mac") {
                            scwin.height = 253;
                        }
                    } else if(WebSquare.util.isChrome()) {
                        if (navigator.userAgent.indexOf("OPR") != -1) {  //opera
                            if (scwin.osName == "window") {
                                scwin.height = 307;
                            } else if (scwin.osName == "mac") {
                                scwin.height = 302;
                            }
                        } else { //chrome
                            if(scwin.osName == "window") {
                                    scwin.height = 255;
                            } else if(scwin.osName == "mac") {
                                    scwin.height = 250;
                            }
                        }
                    } else if(WebSquare.util.isSafari()) {
                        if(scwin.osName == "mac") {
                            scwin.height = 250;
                        }
                    } else if(WebSquare.util.isOpera()) {
                        if(scwin.osName == "window") {
                            scwin.height = 250;
                        } else if(scwin.osName == "mac") {
                            scwin.height = 250;
                        }
                    }
                    return scwin.height;
                };

				scwin.checkWidth = function() {
					if(scwin.uploadInfo.sFeatures.width == undefined) {
						return scwin.sizeInfo.width;
					} else {
						return scwin.uploadInfo.sFeatures.width;
					}
				};
	
				scwin.checkHeight = function(flag) {
					if(scwin.uploadInfo.sFeatures.height == undefined) {
						if(flag == true) {
							return scwin.crossBrowserHeight();
						} else {
							return scwin.sizeInfo.height;
						}
					} else {
						return scwin.uploadInfo.sFeatures.height;
					}
				};
				
				scwin.subcheck_oncheckboxclick = function(index,checked,value) {
					if(checked == true) {
						$p.getFrame().getParent().setSize(scwin.checkWidth(), scwin.checkHeight(true));
						sub.setStyle("display", "block");
					} else {
						$p.getFrame().getParent().setSize(scwin.checkWidth(), scwin.checkHeight(false));
						sub.setStyle("display", "none");
					}
				};
				
				scwin.endsWith = function(str, s) {
					return str.substring(str.length - s.length, str.length) == s;
				};

				scwin.sendFILE_onclick = function(e) {
                    try {
                        scwin.thisForm = document.getElementsByName("__uploadForm__")[0];
                        scwin.filename = filename.getValue();
                        if (!scwin.filename || scwin.filename == "") {
                            return false;
                        }
                        scwin.isCSVFile = scwin.endsWith(scwin.filename.toLowerCase(), ".csv") == true ||
                            scwin.endsWith(scwin.filename.toLowerCase(), ".txt") == true;
                        if (!scwin.isCSVFile) {
                            alert(scwin.Upload_msg4);
                            return false;
                        }
                        if (scwin.maxFileSize != -1) {
                            scwin.uploadFile = filename.getValue();
                            if (scwin.uploadFile && scwin.uploadFile.files) {
                                if (scwin.maxFileSize < scwin.uploadFile.files[0].size) {
                                    alert(scwin.Grid_warning9);
                                    return;
                                }
                            }
                        }
                        scwin.frm = window.frames;
                        scwin.find = false;
                        for (var i = 0; i < scwin.frm.length; i++) {
                            if (scwin.frm[i].name == scwin.thisForm.target) {
                                scwin.find = true;
                            }
                        }
                        if (!scwin.find) {
                            scwin.layerUP = document.createElement("div");
                            scwin.src = "";
                            scwin.layerUP.style.border = "1px solid blue";
                            scwin.layerUP.style.width = "100px";
                            scwin.layerUP.style.height = "100px";
                            scwin.layerUP.style.visibility = "hidden";
                            document.body.appendChild(scwin.layerUP);
                            scwin.src = WebSquare.net.getSSLBlankPage();
                            scwin.layerUP.innerHTML = "<iframe frameborder='0px' name='" + scwin.thisForm.target + "' scrolling='no' style='width:100px; height:100px' " + scwin.src + "></iframe>";
                            scwin.parentElem = scwin.layerUP.parentElement;
                        }
                        scwin.showProcessMessage(scwin.processMsg);
                        if (scwin.useXHR) {
                            var form = document.getElementsByName("__uploadForm__");
                            fileSelected = form[0].filename.files[0];
                            var formData = new FormData();
                            formData.append("filename", fileSelected);
                            var paramList = form[0].getElementsByTagName("input");
                            for (var i = 0; i < paramList.length; i++) {
                                formData.append(paramList[i].name, paramList[i].value);
                            }
                            var xhr = new XMLHttpRequest();
                            xhr.onreadystatechange = function() {
                                if (xhr.readyState == 4 && xhr.status == 200) {
                                    var result = xhr.responseText;
                                    var idx1 = result.indexOf("'");
                                    var idx2 = result.lastIndexOf("'");
                                    result = result.substring(idx1 + 1, idx2);
                                    returnData(result);
                                }
                            };
                            xhr.open("POST", scwin.actionUrl, true);
                            var fileName = encodeURIComponent(fileSelected.name);
                            xhr.setRequestHeader("X-File-Name", fileName);
                            var reqHeaderFuncName = WebSquare.core.getConfiguration("/WebSquare/handler/requestHeaderFunction/@value");
                            if (reqHeaderFuncName != "") {
                                var reqHeaderFunc = WebSquare.util.getGlobalFunction(reqHeaderFuncName);
                                if (reqHeaderFunc) {
                                    reqHeaderFunc(xhr, "csvupload");
                                }
                            }
                            xhr.send(formData);
                        } else {
                            scwin.thisForm.submit();
                        }
                    } catch (e) {
                        alert(e.description);
                    }
                };
			}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'form',A:{name:'__uploadForm__',method:'post',action:'',enctype:'multipart/form-data',target:'__targetFrame__'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'exup_wrap'},E:[{T:1,N:'xf:group',A:{id:'bg_header',style:'',class:'exup_header'},E:[{T:1,N:'xf:group',A:{id:'advancedSetting',style:'',tagname:'span',class:'exup_spanGroup'},E:[{T:1,N:'w2:textbox',A:{label:'고급설정',id:'setting',style:'',for:'subcheck',tagname:'p',class:'title2'}},{T:1,N:'xf:select',A:{appearance:'full',id:'subcheck',style:'',selectedindex:'-1',cols:'',rows:'',ref:'',class:'subcheck','ev:oncheckboxclick':'scwin.subcheck_oncheckboxclick',tagname:'',renderType:'native'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{id:'bul_title',style:'',class:'title',tagname:'p',text:'File Upload'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:allOption'},{T:1,N:'w2:animation'},{T:1,N:'w2:appearance',E:[{T:3,text:'minimal'}]},{T:1,N:'w2:chooseOption'},{T:1,N:'w2:chooseOptionLabel'},{T:1,N:'w2:class',E:[{T:3,text:'sel'}]},{T:1,N:'w2:closeonmouseleave'},{T:1,N:'w2:customFormatter'},{T:1,N:'w2:customLabelFormatter'},{T:1,N:'w2:dataListAutoRefresh'},{T:1,N:'w2:delimiter'},{T:1,N:'w2:direction',E:[{T:3,text:'auto'}]},{T:1,N:'w2:disabled',E:[{T:3,text:'false'}]},{T:1,N:'w2:disabledClass',E:[{T:3,text:'w2selectbox_disabled'}]},{T:1,N:'w2:displayMode'},{T:1,N:'w2:displaymessage'},{T:1,N:'w2:emptyItem'},{T:1,N:'w2:emptyValue'},{T:1,N:'w2:escape'},{T:1,N:'w2:id',E:[{T:3,text:'hiddenSelect'}]},{T:1,N:'w2:invalidMessage'},{T:1,N:'w2:invalidMessageFunc'},{T:1,N:'w2:keyMoveListSync'},{T:1,N:'w2:labelWidthAuto'},{T:1,N:'w2:mandatory'},{T:1,N:'w2:nextTabID'},{T:1,N:'w2:optionOrder'},{T:1,N:'w2:preventWheelEvent'},{T:1,N:'w2:ref'},{T:1,N:'w2:refreshSelectedIndex'},{T:1,N:'w2:renderType',E:[{T:3,text:'native'}]},{T:1,N:'w2:selectedData'},{T:1,N:'w2:setDataRemoveAll'},{T:1,N:'w2:sortMethod'},{T:1,N:'w2:sortOption'},{T:1,N:'w2:style'},{T:1,N:'w2:submenuSize',E:[{T:3,text:'auto'}]},{T:1,N:'w2:tabIndex'},{T:1,N:'w2:textAlign'},{T:1,N:'w2:title'},{T:1,N:'w2:toolTip'},{T:1,N:'w2:tooltipClass'},{T:1,N:'w2:tooltipDisplay'},{T:1,N:'w2:tooltipTime'},{T:1,N:'w2:useLocale'},{T:1,N:'w2:userData1'},{T:1,N:'w2:userData2'},{T:1,N:'w2:userData3'},{T:1,N:'w2:visibleColumn'},{T:1,N:'w2:visibleColumnFalseValue'},{T:1,N:'w2:visibleRowNum'},{T:1,N:'w2:wmode'},{T:1,N:'w2:name'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'exup_content'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'filebox'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'filename',name:'filename',style:'width:95%;',type:'file',class:'filename'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:name',E:[{T:3,text:'filename'}]}]}]}]},{T:1,N:'xf:group',A:{id:'sub',style:'width: 100%',tagname:'table',class:'exup_tbl none'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary',E:[{T:3,text:'공백무시,히든값유무,히든채움,시작Row'}]}]},{T:1,N:'xf:group',A:{tagname:'caption',id:'advanced'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{label:'',id:'space_option',style:'',for:'mf_mf_csvPop_wframe_spaceSelect',class:'dot'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'sel',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'spaceSelect',name:'skip_space',ref:'',renderType:'select',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{label:'',id:'start_option',style:'',for:'gridStartRow',class:'dot'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'gridStartRow',name:'gridStartRow',style:'',class:'ipt',type:'text'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{label:'',id:'hidden_option',style:'',class:'dot',for:'mf_mf_csvPop_wframe_hiddenSelect'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'sel',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'hiddenSelect',name:'hidden',ref:'',renderType:'select',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{label:'',id:'hidden_fill',style:'',class:'dot',for:'mf_mf_csvPop_wframe_fillHidden'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'fillHidden',name:'fillHidden',ref:'',renderType:'select',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{label:'',id:'header_option',style:'',class:'dot',for:'mf_mf_csvPop_wframe_header'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'header',name:'header',ref:'',renderType:'select',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'td'}}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'foot'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'p'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'sendFILE',name:'sendFILE',style:'',class:'btn_exup_file','ev:onclick':'scwin.sendFILE_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파일업로드'}]}]}]}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'domain',id:'domain',style:'',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'delim',id:'delim',style:'',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'escapeChar',id:'escapeChar',style:'',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'footer',id:'footer',style:'',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'removeColumns',id:'removeColumns',style:'',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'expressionColumns',id:'expressionColumns',style:'',type:'hidden',initValue:'CC'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'hiddenColumns',id:'hiddenColumns',style:'',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'headerRows',id:'headerRows',style:'',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'columnNum',id:'columnNum',style:'',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'bodyRows',id:'bodyRows',style:'',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'gridStyle',id:'gridStyle',style:'',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'expression',id:'expression',style:'',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'optionParam',id:'optionParam',style:'',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'columnOrder',id:'columnOrder',style:'',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',name:'useXHR',id:'useXHR',style:'',type:'hidden'}}]}]}]}]})