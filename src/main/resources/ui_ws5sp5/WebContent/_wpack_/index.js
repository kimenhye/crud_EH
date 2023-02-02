
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'meta',A:{name:'viewport',content:'width=device-width, user-scalable=no'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
            document.title = "W-EdgeManager";
            scwin.onpageload = function () {
                // Mobile일때 메뉴 동작
                if (WebSquare.util.isMobile()) {
                    $(".wrap").removeClass("show_menu");

                    $(".btn_toggle_menu").click(function () {
                        $(".wrap").toggleClass("show_menu");
                        $(".btn_toggle_menu").toggleClass("on");
                        $(".dim").toggleClass("on");
                    });
                } else {
                    // LNB닫기 함수 (화면폭이 1280 이하일 때 LNB 자동닫기)
                    scwin.closeMenu = function () {
                        var winWidth = $(window).width();
                        if (winWidth > 800 && winWidth < 1281) {
                            $(".wrap").removeClass("show_menu");
                            $(".w2treeview_child").hide();
                            $(".w2treeview_table_node").removeClass("w2treeview_open_child").addClass("w2treeview_close_child").attr("opened", "false");
                            $(".w2treeview_row_depth1").removeClass("on");
                        }
                    };

                    scwin.closeMenu(); // 초기진입시

                    $(window).resize(function () { // 화면 리사이즈시
                        scwin.closeMenu();
                    });

                    $(".w2treeview_row_depth1 > td .w2treeview_label").click(function () {
                        $(this).parents(".w2treeview_row_depth1").toggleClass("on");
                    });

                    $(".btn_toggle_menu").click(function () {
                        $(".wrap").toggleClass("show_menu");
                        $(".btn_toggle_menu").toggleClass("on");
                        $(".w2treeview_child").hide();
                        $(".w2treeview_table_node").removeClass("w2treeview_open_child").addClass("w2treeview_close_child").attr("opened", "false");
                        $(".w2treeview_row_depth1").removeClass("on");
                    });

                }

                // GNB MENU
                $(".gnb_menu a").click(function () {
                    if (!$(this).parent().hasClass("on")) {
                        $(this).parent().addClass("on").siblings().removeClass("on");
                    }
                });
                $(".dep2 li a").click(function () {
                    var pTop = $(this).parent().position().top;
                    $(this).siblings().css("top", pTop + "px");
                });
                $(".dep2").mouseleave(function () {
                    $(this).parent().removeClass("on");
                    $(this).children().removeClass("on");
                });

                // 검색영역 show/hide
                $(".btn_all_search").click(function () {

                    $(".search_field").toggleClass("active");
                });

                // 탭 타이틀 on/off
                $(".tab_tit a").click(function () {
                    $(this).parent().addClass("on").siblings().removeClass("on");
                });

                // 트리뷰 접기
                $(".btn_fold").click(function () {
                    $(this).addClass("on");
                    $(".btn_fold_list").removeClass("on");
                });
                // 트리뷰 펼치기
                $(".btn_fold_list").click(function () {
                    $(this).addClass("on");
                    $(".btn_fold").removeClass("on");
                });

                // USER NAME CLICK
                $(".btn_mypage").click(function () {
                    $(".mypage .items").toggleClass("on");
                });

				var data = {
					"header" : {
						"source":"admin",
						"service":"MenuFile"
					},
					"body":{
						"loginId": cm.getLoginUserInfo("loginId")
					}
				};
				cm.requestMsg(cm.managerServerUrl,"/api/wem", data, scwin.menuRequestDone);

			};

			scwin.menuRequestDone = function (res) {
				var res = res.responseJSON;
				console.log("res.body.path --> "+res.body.path);
				tabc_layout.getFrame(tabc_layout.getSelectedTabIndex()).setSrc(res.body.path);
			};

            scwin.onpageunload = function () {

            };


            //팝업
            scwin.openPopup_onclick = function (e) {
                requires("uiplugin.popup");
                var winWid = $(window).width();
                var winHei = $(window).height();
                var popWid = 1045;
                var popHei = 850;
                var sumLeft = (winWid - popWid) / 2;
                var sumTop = (winHei - popHei) / 2;

                var opts = {
                    "id": "popup_window_wframe",
                    "type": "litewindow",
                    "width": popWid + "px",
                    "height": popHei + "px",
                    "top": sumTop,
                    "left": sumLeft,
                    "popupName": "메뉴그룹명",
                    "modal": true,
                    "useIFrame": false,
                    "title": "focusTest",
                    "useATagBtn": true,
                    "frameMode": "wframe"
                };
                WebSquare.util.openPopup("/template/template_pop.xml", opts);
            };

            var status = "SDI";

            // Page Sample 메뉴선택시 탭추가
            scwin.loadPageSample = function (title, url) {
                var tLabel = title;
                var tValue = url.replaceAll("/", "");
                tValue = tValue.replace(".", "");

                if (status == "SDI") {
                    if (tValue != "") {  //받아온 value값이 비어있지않으면..
                        var tabObj = {	//json형태의 속성값을 tabObj 이용하여 설정
                            closable: "true",	//탭 닫기 기능 제공
                            openAction: "exist", // exist 는 기존 탭을 갱신, new 는 항상 새로, select는 동일 id 가 존재하면 선택
                            label: tLabel	//label값은 tLabel변수의 값을 대입한다.
                        };

                        var classObj = {	//json형태의 속성값을 classObj에서 설정
                            contentsClass: "w2tabcontrol_contents",
                            frameMode: "wframe",
                            src: url	//탭콘테이너의 url은 treeview의 value에서 가져온다.
                        };

                        tabc_layout.addTab(tValue, tabObj, classObj);
                        var tabindex = tabc_layout.getTabIndex(tValue);
                        tabc_layout.setSelectedTabIndex(tabindex);
                    }
                } else if (status == "MDI") {
                    if (tValue != "") {  //받아온 value값이 비어있지않으면..
                        windowContainer1.createWindow(tLabel, null, tValue);
                    }
                }
            };

            scwin.btn_tabClose_onclick = function () {
                for (var i = mf_tabc_layout.getChildrenCount(); i > 0; i--) {
                    tabc_layout.deleteTab(i);
                }
            };
            
			scwin.tabc_layout_onchange = function(tabID,idx,userTabID) {//debugger;
				console.log("onchange");
				//realtimert_integrity_devicexml			//장애 예측결과 및 조치현황
				//realtimert_device_statistics_onoffxml		//단말현황
				//realtimert_device_statistics_weventxml	//윈도우이벤트
				//realtimert_server_currentxml				//서버현황
				
				var target = tabc_layout.getWindow(userTabID).scwin;
				if(target.hasOwnProperty("chartList")) {
					if(Array.isArray(target.chartList)) {
						target.chartList.forEach(function (chart) {
							chart.resize();
						});	
					}	
				}				
				
				//dashboard 렌더링 성능을 위해 추가
				var tabCnt = tabc_layout.getTabCount();
				for (var i=0;i<tabCnt;i++) {
					var tmpTabId = $p.top().tabc_layout.getTabID(i);
					var tabWindowObj = tabc_layout.getWindow(i);
					
					if (tabWindowObj.scwin.chartList || tabWindowObj.scwin.getEventInfo) {
						if (tmpTabId != userTabID) {
							console.log("정지 : " +  tmpTabId);
							clearTimeout(tabWindowObj.scwin.searchTimerId);
							tabWindowObj.btn_play.setValue("▶");
							tabWindowObj.btn_play.setAttribute("tooltip", "새로고침");					
						} else {
							console.log("재시작 : " + tmpTabId);
							//console.log(tabWindowObj.btn_play.getAttribute("tooltip"));
							
							if (typeof tabWindowObj.scwin.query != "undefined") {
								tabWindowObj.scwin.query();
							}
																		
							tabWindowObj.scwin.search();
							tabWindowObj.btn_play.setValue("■");
							tabWindowObj.btn_play.setAttribute("tooltip", "정지");
						}					
					}					

				}						
			};
			
			scwin.toggleMenu = function(){
				$(".wrap").toggleClass("show_menu");
                $(".btn_toggle_menu").toggleClass("on");
                $(".w2treeview_child").hide();
                $(".w2treeview_table_node").removeClass("w2treeview_open_child").addClass("w2treeview_close_child").attr("opened", "false");
                $(".w2treeview_row_depth1").removeClass("on");
			};			

}}}]},{T:1,N:'style',A:{type:'text/css'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'wrap show_menu',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{style:'',id:'index_header',class:'header',scope:'true',src:'/xml/header.xml'}},{T:1,N:'xf:group',A:{class:'container',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'contents'},E:[{T:1,N:'w2:tabControl',A:{useTabKeyOnly:'true',id:'tabc_layout',useMoveNextTabFocus:'false',useConfirmMessage:'false',confirmTrueAction:'exist',confirmFalseAction:'new',alwaysDraw:'false',style:'',class:'tabc_layout',hiddenTab:'',tabPosition:'',closable:'true',useAccessibilityMenu:'false',tableRender:'',tabScroll:'true',adaptive:'layout',adaptiveThreshold:'1023','ev:onchange':'scwin.tabc_layout_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'deviceList__2',label:'단말 현황',closable:'true',useATagBtn:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content1',src:'/monitoring/deviceList.xml',scope:'true'}}]},{T:1,N:'w2:anchor',A:{outerDiv:'false',style:'',id:'btn_tabClose',class:'tab_allclose','ev:onclick':'scwin.btn_tabClose_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭전체닫기'}]}]}]}]},{T:1,N:'w2:wframe',A:{style:'',id:'index_side',class:'side',scope:'true',src:'/xml/side.xml'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'dim'}}]}]}]}]})