requires("uiplugin.popup");

var gcm = {
    // 서버 통신 서비스 호출을 위한 Context Path
    CONTEXT_PATH: "",

    // 서버 통신 서비스 호출을 위한 Service Url (Context Path 이하 경로)
    SERVICE_URL: "",

    // 서버 통신 기본 모드 ( "asynchronous" / "synchronous") - "synchronous"는 비권장 통신 방식임
    DEFAULT_OPTIONS_MODE: "asynchronous",

    // 서버 통신 기본 미디어 타입
    DEFAULT_OPTIONS_MEDIATYPE: "application/json",

    // 통신 상태 코드
    MESSAGE_CODE: {
        STATUS_ERROR: "E",
        STATUS_SUCCESS: "S",
        STATUS_WARNING: "W",
        STATUS_INFO: "I"
    },

    // 메시지 레이어 인덱스
    MESSAGE_IDX: 1,

    // 공통 코드 저장을 위한 DataList 속성 정보
    DATA_PREFIX: "dlt_commonCode",

    COMMON_CODE_INFO: {
        LABEL: "CODE_NM",
        VALUE: "COM_CD",
        FILED_ARR: ["GRP_CD", "COM_CD", "CODE_NM"]
    },

    // 공통 코드 데이터
    commonCodeList: [],

    // 메세지 알림 콜백 Function 정보 저장
    CB_FUNCTION_MANAGER: {
        cbFuncIdx: 0, // 정보 저장 Index Key
        cbFuncSave: {} // 정보 저장 객체
    },

    FILE_DOWNLOAD_URL: "/file/downloadFile/",

    // Console Log Debugg 설정 (DEBUG_MODE가 false이면 Console 객체를 통해서 남긴 로그가 개발자 도구 Console 창에 남지 않도록 함
    DEBUG_MODE: true,

    // updateToken 중복호출 방지용 (Sync 통신임에도 중복호출된다.)
    IS_TOKEN_UPDATING: false,
    PROCESSMSGCONTROL : false
};

gcm.sbm = {};

/**
 * submission의 공통 설정에서 사용.
 * submisison 통신 직전 호출.
 * return true일 경우 통신 수행, return false일 경우 통신 중단
 *
 * @param {Object} sbmObj 서브미션 객체
 * @memberOf gcm.sbm
 * @date 2020.05.16
 * @author Inswave Systems
 * @return {Boolean} true or false
 */
gcm.sbm._preSubmitFunction = function (sbmObj) {
    cm.updateToken();

    if ((cm.isEmpty(gcm.CONTEXT_PATH) === false) && (sbmObj.action.indexOf(gcm.CONTEXT_PATH) !== 0)) {
        sbmObj.action = gcm.CONTEXT_PATH + sbmObj.action;
    }
};

/**
 * 모든 submission의 defaultCallback - com.sbm_errorHandler 보다 먼저 수행됨. (400 Error) config.xml에 설정
 *
 * @param {Object} resObj responseData 객체
 * @param {Object} sbmObj Submission 객체
 * @memberOf gcm.sbm
 * @date 2020.05.16
 * @author Inswave Systems
 */
gcm.sbm._callbackSubmitFunction = function (resObj, sbmObj) {//debugger;
    if (gcm.sbm.loadingChk) {
		setTimeout(() => {
			$('body').find('.loadingBox').remove();
		}, 1000);
	}

    if (resObj.responseStatusCode == 0 || (resObj.responseStatusCode >= 400 && resObj.responseStatusCode <= 599)) { // 0 : request fail, 4XX : client side error, 5XX server side error
        //서버 응답 오류 발생시 동적 생성한 submission 을 삭제한다
        if (sbmObj.hasOwnProperty("submitErrorHandler")) {
            console.log(sbmObj.submitErrorHandler, typeof sbmObj.submitErrorHandler);
            if(typeof sbmObj.submitErrorHandler === "string") {
                var submitErrorHandler = sbmObj.submitErrorHandler.split(".");
                // gcm.win._getScope(sbmObj)[submitErrorHandler[0]][submitErrorHandler[1]].call(gcm.win._getScope(sbmObj), resObj);
                gcm.win._getScope(sbmObj)[submitErrorHandler[0]][submitErrorHandler[1]].call(this, resObj);
            } else {
                sbmObj.submitErrorHandler.call(this, resObj);
            }
        }

        if (sbmObj.id.indexOf("submission_dynamic_") > -1) {
            gcm.win._getScope(sbmObj).$p.deleteSubmission(sbmObj.id);
        }
        return false;
    }


    var rsJSON = resObj.responseJSON || null;
    if (rsJSON && rsJSON.rsMsg) {
        //scopeCom.resultMsg(rsJSON.rsMsg);
    }
};


/**
 * submission중 에러가 발생한 경우 호출되는 함수 - 서버 오류(500 error)
 *
 * @param {Object} resObj responseData 객체
 * @memberOf gcm.sbm
 * @date 2020.05.16
 * @author Inswave Systems
 */
gcm.sbm._errorHandler = function (resObj) {
	setTimeout(() => {
		$('body').find('.loadingBox').remove();
	}, 1000);

    // var scopeCom = gcm.win._getScope(resObj.id).cm;
    var scopeCom = gcm.cm;

    var detailStr = "HTTP STATUS INFO";
    detailStr += resObj.responseReasonPhrase;
    detailStr += " ";
    detailStr += resObj.responseStatusCode;
    detailStr += "URI:";
    detailStr += resObj.resourceUri;
    detailStr += resObj.responseBody;

    var msgObj = {
        statusCode: "E",
        errorCode: "E9998",
        message: "서버 오류입니다. 자세한 내용은 관리자에게 문의하시기 바랍니다.",
        messageDetail: detailStr
    };

    scopeCom.resultMsg(msgObj);
};

//=============================================================================
/**
 * 화면 제어와 관련된 함수를 작성한다.
 *
 * @author Inswave Systems
 * @class win
 * @namespace gcm.win
 */
// =============================================================================
gcm.win = {};

/**
 * 다국어 처리함수
 *
 * @date 2016.08.02
 * @private
 * @param {String} xmlUrl 전체 URL중 w2xPath이하의 경로
 * @memberOf gcm.win
 * @author InswaveSystems
 * @example
 * com.getI18NUrl( "/ui/DEV/result.xml" );
 * //return 예시)"/websquare/I18N?w2xPath=/ui/DEV/result.xml"
 * gcm._getI18NUrl( "/ui/SW/request.xml" );
 * //return 예시)"/websquare/I18N?w2xPath=/ui/SW/request.xml"
 */
gcm.win._getI18NUrl = function (xmlUrl) {

    var baseURL = gcm.CONTEXT_PATH + "/I18N";
    var rsUrl = "";
    var locale = WebSquare.cookie.getCookie("locale");
    var bXml = "/blank.xml";

    xmlUrl = gcm.util._getParameter("w2xPath", xmlUrl) || xmlUrl;
    xmlUrl = xmlUrl.replace(/\?.*/, "");

    if (xmlUrl.search(bXml) > -1 && xmlUrl.search(WebSquare.baseURI) == -1) {
        xmlUrl = WebSquare.baseURI + "/blank.xml";
    }
    rsURL = baseURL + "?w2xPath=" + xmlUrl;

    if (locale != null && locale != '') {
        rsURL = rsURL + "&locale=" + unescape(locale);
    }

    return rsURL;
};


/**
 * 특정 컴포넌트가 속한 WFrame Scope을 반환한다.
 *
 * @param {Object} 컴포넌트 객체 또는 아이디(WFrame Scope 경로를 포함한 Full Path Id)
 * @memberOf gcm.win
 * @date 2020.05.16
 * @author Inswave Systems
 * @return {Object} Scope 객체
 */
gcm.win._getScope = function (comObj) {
    try {
        if (typeof comObj === "string") {
            var scopeObj = $p.getComponentById(comObj);
            if (scopeObj !== null) {
                return scopeObj.getScopeWindow();
            }
        } else {
            return comObj.getScopeWindow();
        }
    } catch (ex) {
        console.error(ex);
        return null;
    }
};

gcm.getServerURLWithPrefix = function(url) {
    return cm.contextPath + url;
};

var cm = {
    MESSAGE_BOX_SEQ: 1
};
gcm.cm = cm;

cm.contextPath = WebSquareExternal.contextPath;

cm.osType = "Windows";
cm.managerDefaultUrl = "/api/wem/manager";
cm.adminSelectUrl = "/api/wem/manager/dao";
cm.deployerUrl = "/api/wem/deployer";
cm.selcectLogUrl = "/api/wem/log";

cm.indexPage = "/index.xml";

cm.runMode = "";
cm.appId = "Windows.HanaBPR.Dev";
cm.deviceAppId = cm.appId;

switch (cm.runMode) {
    case "HANA" :
        cm.localManagerServerUrl = location.origin + cm.contextPath;
        cm.managerServerUrl = location.origin + cm.contextPath;
        cm.logServerUrl = "http://192.168.151.40:8080" + cm.contextPath;
        cm.deployerServerUrl = "http://192.168.151.40:8080" + cm.contextPath;
        cm.deviceMgrUrl = cm.managerServerUrl;
        cm.indexPage = cm.contextPath + "/index.xml";
    default:
        cm.localManagerServerUrl = location.origin + cm.contextPath;
        cm.managerServerUrl = location.origin + cm.contextPath;
        cm.logServerUrl = location.origin + cm.contextPath;
        cm.deployerServerUrl = location.origin + cm.contextPath;
        cm.deviceMgrUrl = cm.managerServerUrl;
        cm.indexPage = "/index.xml";
        break;
}

cm.chartIp = "";

cm.requestMsg = function (serverAddress, url, data, callbackFnStr) {
    var sbm = cm.createSubmissionSimple(serverAddress + url, callbackFnStr, function (res) {
        //console.log(res);
    });
    $p.executeSubmission(sbm, data);
}

cm.alert = function (messageStr, closeCallbackFncName) {
    cm.messagBox("alert", messageStr, closeCallbackFncName);
};

cm.confirm = function (messageStr, closeCallbackFncName) {
    cm.messagBox("confirm", messageStr, closeCallbackFncName);
};

cm.messagBox = function (messageType, messageStr, closeCallbackFncName, isReturnValue, title) {

    var messageStr = messageStr || "";
    var messageType = messageType || "alert";
    var defaultTitle = null;
    var popId = messageType || "Tmp";
//    popId = popId + cm.MESSAGE_BOX_SEQ++;
    popId = popId + (Math.random() * 16).toString().replace(".","");

    if (messageType === "alert") {
        defaultTitle = "Alert";
    } else {
        defaultTitle = "Confirm";
    }

    if (typeof isReturnValue === "undefined") {
        isReturnValue = false;
    }

    var dataObject = {
        type: "json",
        data: {
            "message": messageStr,
            "callbackFn": closeCallbackFncName,
            "isReturnValue": isReturnValue,
            "messageType": defaultTitle
        },
        name: "message_param"
    };
    var options = {
        id: popId,
        popupName: "알림",
        title: title || defaultTitle,
        useModalStack: true,
        alwaysOnTop: true,
        modal: true,
        width: 460,
        height: 250
    };
    cm.openPopup("/cm/message_box.xml", options, dataObject);
};

/**
 * statusCode값에 따라 message를 출력한다.
 *
 * @date 2020.05.16
 * @private
 * @param {Object} resultData 상태코드값 및 메시지가 담긴 JSON.
 * @param {String} resultData.message 메시지
 * @param {String} resultData.statusCode 상태코드값
 * @memberOf cm
 * @author Inswave Systems
 */
cm.resultMsg = function (resultData) {
    if (cm.isEmpty(resultData.statusCode)) {
        return;
    }

    var message = resultData.message || resultData.statusMsg || "";
    var msgCode = gcm.MESSAGE_CODE;

    switch (resultData.statusCode) {
        case msgCode.STATUS_ERROR:
            if (cm.isEmpty(message) === false) {
                cm.alert(message);
            }
            /*
            if (resultData.errorCode == "E0001") {
                var alertMsg = com.data.getMessage("MSG_CM_00003", message);
                cm.alert(alertMsg, "cm.goHome");
            } else if (resultData.errorCode == "E9998") { // HTTP ERROR ex) 404,500,0
                cm.alert(message);
            } else if (resultData.errorCode == "E9999") { // business logic error
                cm.alert(message);
            } else if (com.util.isEmpty(message) === false) {
                cm.alert(message);
            }
            */
            break;
        case "E":
            if (cm.isEmpty(message) === false) {
                cm.alert(message);
            }
            break;
        case "S" :
            if (cm.isEmpty(message) === false) {
//				cm.showToastMessage(gcm.MESSAGE_CODE.STATUS_SUCCESS, message);
                cm.alert(message);
            }
            break;
        case "I" :
//			cm.showToastMessage(gcm.MESSAGE_CODE.STATUS_INFO, message); 
            break;
        case "N":
//			cm.alert(com.data.getMessage("MSG_CM_00004"));
            break;
    }
};

cm.date = function () {
    Date.prototype.format = function (f) {
        if (!this.valueOf()) return " ";

        var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        var d = this;

        return f.replace(/(yyyy|yy|MM|dd|E|HH|hh|mm|ss|a\/p)/gi, function ($1) {
            switch ($1) {
                case "yyyy":
                    return d.getFullYear();
                case "yy":
                    return (d.getFullYear() % 1000).zf(2);
                case "MM":
                    return (d.getMonth() + 1).zf(2);
                case "dd":
                    return d.getDate().zf(2);
                case "E":
                    return weekName[d.getDay()];
                case "HH":
                    return d.getHours().zf(2);
                case "hh":
                    return ((h = d.getHours() % 12) ? h : 12).zf(2);
                case "mm":
                    return d.getMinutes().zf(2);
                case "ss":
                    return d.getSeconds().zf(2);
                case "a/p":
                    return d.getHours() < 12 ? "오전" : "오후";
                default:
                    return $1;
            }
        });
    };

    String.prototype.string = function (len) {
        var s = '', i = 0;
        while (i++ < len) {
            s += this;
        }
        return s;
    };
    String.prototype.zf = function (len) {
        return "0".string(len - this.length) + this;
    };
    Number.prototype.zf = function (len) {
        return this.toString().zf(len);
    };
}

/*
    예시)
    cm.setCalendarDate("ipc_fromDate", "ipc_toDate", "today");			//오늘
    cm.setCalendarDate("ipc_fromDate", "ipc_toDate", "yesterday");		//어제
    cm.setCalendarDate("ipc_fromDate", "ipc_toDate", "thisMonth");		//이번달
    cm.setCalendarDate("ipc_fromDate", "ipc_toDate", "agoDay", -7);		//최근7일
    cm.setCalendarDate("ipc_fromDate", "ipc_toDate", "agoDay", -30);	//최근30일
    cm.setCalendarDate("ipc_fromDate", "ipc_toDate", "agoDay", -60);	//최근60일
 */
cm.setCalendarDate = function (fromCompId, toCompId, type, dayNum) {

    let offSet;
    let fromComp = $p.getComponentById(fromCompId);
    let toComp = $p.getComponentById(toCompId);
    let todayDate = new Date();
    let todayDateStr = todayDate.format("yyyyMMdd");

    if (type == "thisMonth") {  //이번달
        //let firstDate = new Date(todayDate.getYear()+1900, todayDate.getMonth(),1);
        //let lastDate = new Date(todayDate.getYear()+1900,todayDate.getMonth()+1,0);

        let fromDate = new Date(todayDate.getUTCFullYear(), todayDate.getMonth(), 1);
        let toDate = new Date(todayDate.getUTCFullYear(), todayDate.getMonth() + 1, 0);

        fromComp.setValue(fromDate.format("yyyyMMdd"));     //from
        toComp.setValue(toDate.format("yyyyMMdd"));         //to
    } else if (type == "agoDay") {  //이전 n일
        if (typeof dayNum == "undefined") {
            dayNum = -1;
        }

        let fromDate = WebSquare.date.dateTimeAdd(todayDateStr, dayNum, "day");
        fromComp.setValue(fromDate);
        toComp.setValue(todayDateStr);
    } else if (type == "today") {
        if (typeof fromComp != "undefined") {
            fromComp.setValue(todayDateStr);
        }
        if (typeof toComp != "undefined") {
            toComp.setValue(todayDateStr);
        }
    } else if (type == "yesterday") {
        let date = WebSquare.date.dateTimeAdd(todayDateStr, -1, "day");
        fromComp.setValue(date);
        toComp.setValue(date);
    }
};

/*
 * todayDateStr 20211025
 */
cm.getAllDayFromTo = function (todayDateStr) {
    var formatedDateStr = WebSquare.util.setDate(todayDateStr, "yyyyMMdd");
    var isValid = !isNaN(new Date(formatedDateStr).getTime());

    if (isValid == true) {
        var pFromDate = new Date(WebSquare.date.parseDate(todayDateStr).setHours(WebSquare.date.parseDate(todayDateStr).getHours() + 9));
        var pToDate = new Date(WebSquare.date.parseDate(todayDateStr).setHours(WebSquare.date.parseDate(todayDateStr).getHours() + 9 + 24));
        pToDate.setMilliseconds(pToDate.getMilliseconds() -1);

//		gte (Greater-than or equal to) - 이상 (같거나 큼)
//		gt (Greater-than) – 초과 (큼)
//		lte (Less-than or equal to) - 이하 (같거나 작음)
//		lt (Less-than) - 미만 (작음)	
        var parseDate = { "gte": "", "lte": "" };
        parseDate.gte = pFromDate;
        parseDate.lte = pToDate;
    }
    return parseDate;
};

/*
 * fromDateStr 20211025
 * toDateStr 20211026
 */
cm.getFromToDate = function (fromDate, toDate, fromTime, toTime, userTimeFlag) {
    var year = fromDate.substring(0, 4);
    var month = fromDate.substring(4, 6);
    var day = fromDate.substring(6);
    var formatedFromDateStr = year + "-" + month + "-" + day;

    var year = toDate.substring(0, 4);
    var month = toDate.substring(4, 6);
    var day = toDate.substring(6);
    var formatedToDateStr = year + "-" + month + "-" + day;

    var isValidFrom = !isNaN(new Date(formatedFromDateStr).getTime());
    var isValidTo = !isNaN(new Date(formatedToDateStr).getTime());

    if (isValidFrom == true && isValidTo == true) {
//		var pFromDate = WebSquare.date.parseDate(formatedFromDateStr);
//		var pFromDate = new Date(new Date(formatedFromDateStr).getTime());
//		var toAddDate = WebSquare.date.parseDate(WebSquare.date.dateAdd(formatedToDateStr,1));
//		var pToDate = new Date(toAddDate.getTime() - 1);

		var pFromDate = "";
		var pToDate = "";
		
		if (userTimeFlag == true) {
			pFromDate = formatedFromDateStr + (fromTime != "" ? "T" + fromTime + ".000Z" : "T00:00:00.000Z");
			pToDate = formatedToDateStr + (toTime != "" ? "T" + toTime + ".999Z" : "T23:59:59.999Z");
		} else {
			pFromDate = formatedFromDateStr + "T00:00:00.000Z";
			pToDate = formatedToDateStr + "T23:59:59.999Z";
		}


//		gte (Greater-than or equal to) - 이상 (같거나 큼)
//		gt (Greater-than) – 초과 (큼)
//		lte (Less-than or equal to) - 이하 (같거나 작음)
//		lt (Less-than) - 미만 (작음)	
        var parseDate = { "gte": "", "lte": "" };
        parseDate.gte = pFromDate;
        parseDate.lte = pToDate;
    }
    return parseDate;
};

cm.openPopup = function (url, opt, dataObj) {
    cm._openPopup(url, opt, dataObj);
};

cm._openPopup = function (url, opt, dataObj) {
    var _dataObj = dataObj || {};

    var width = opt.width || 500;
    var height = opt.height || 500;

    var top = ((document.body.offsetHeight / 2) - (parseInt(height) / 2) + $(document).scrollTop()) + "px";
    var left = ((document.body.offsetWidth / 2) - (parseInt(width) / 2) + $(document).scrollLeft()) + "px";

    if (typeof _dataObj.data !== "undefined") {
        if (typeof _dataObj.data.callbackFn == "function") {
            var cbFuncIdx = ++gcm.CB_FUNCTION_MANAGER["cbFuncIdx"];
            var idx = "__close_callback_Func__" + new Date().getTime() + "_" + cbFuncIdx;
            gcm.CB_FUNCTION_MANAGER["cbFuncSave"][$p.id + idx] = _dataObj.data.callbackFn;
            _dataObj.data.callbackFn = $p.id + idx;
        } else if (typeof _dataObj.data.callbackFn === "undefined") {
            _dataObj.data.callbackFn = "";
        } else if (_dataObj.data.callbackFn.indexOf("gcm") !== 0) {
            _dataObj.data.callbackFn = $p.id + _dataObj.data.callbackFn;
        }
    }


    var options = {
        //       id : $p.id + opt.id,
        id: opt.id,
        popupName: opt.popupName || "",
        type: opt.type || "wframePopup",
        width: width + "px",
        height: height + "px",
        top: opt.top || top || "140px",
        left: opt.left || left || "500px",
        popupName: opt.popupName || '',
        modal: (opt.modal == false) ? false : true,
        dataObject: _dataObj,
        alwaysOnTop: opt.alwaysOnTop || false,
        useModalStack: (opt.useModalStack == false) ? false : true,
        resizable: (opt.resizable == false) ? false : true,
        useMaximize: opt.useMaximize || false
    };

    $p.openPopup(url, options);
};

cm.closePopup = function (popId, callbackFnStr, retObj, callbackYn, selectedIdx) {
    cm._closePopup(popId, callbackFnStr, cm.strSerialize(retObj), window); // IFrame일 경우, 메모리릭을 없애기 위한 코딩. (부모/자식 간 페이지로 객체 파라미터 전달 방식은 비권장. 문자열 전달 권장.)
};

cm._closePopup = function (popId, callbackFnStr, retStr, winObj) {
    var func;

    if ((typeof callbackFnStr !== "undefined") && (callbackFnStr !== "")) {
        if (callbackFnStr.indexOf("__close_callback_Func__") > -1) {
            func = gcm.CB_FUNCTION_MANAGER["cbFuncSave"][callbackFnStr];
            delete gcm.CB_FUNCTION_MANAGER["cbFuncSave"][callbackFnStr];
        } else {
            func = window.WebSquare.util.getGlobalFunction(callbackFnStr);
        }
    }

    $p.setTimeout(function() { 
		if ($p.isWFramePopup()) {
			$p.closePopup(popId);
	        if (func) {
	            func(cm.getJSON(retStr));
	        }			
		} else {
			$w.closePopup();
	        var funcArr = callbackFnStr.split(".");
	        var caller = opener || parent;
	        if (caller[funcArr[0]] && typeof caller[funcArr[0]][funcArr[1]] == "function") {
	            caller[funcArr[0]][funcArr[1]]
	            func = caller[funcArr[0]][funcArr[1]];
	            func(cm.getJSON(retStr));
	        }			
		}
	},
	{ delay : 10, key : "closePopup" + (Math.random() * 16).toString().replace(".","") });
};

cm.strSerialize = function (object) {
    if (typeof object == 'string') {
        return object;
    } else if (cm.isJSON(object)) {
        return JSON.stringify(object);
    } else if (cm.isXmlDoc(object)) {
        return WebSquare.xml.serialize(object);
    } else {
        return object;
    }
};

/**
 * JSON Object인지 여부를 검사한다.
 *
 * @param {Object} jsonObj JSON Object가 맞는지 검사할 JSON Object
 * @memberOf cm
 * @date
 * @author Inswave Systems
 * @return {Boolean} true or false
 * @example
 cm.isJSON("");
 // return 예시) false
 com.util.isJSON( {"tbx_sPrjNm": "1", "tbx_sPrtLv": "2", "tbx_sReqLv": "3"} );
 // return 예시) true
 */
cm.isJSON = function (json) {
    try {
        if (jQuery.isPlainObject(json) === false && cm.isArray(json) === false) {
            return false;
        }

        if (typeof json === "object") {
            try {
                JSON.stringify(json);
                return true;
            } catch (ex) {
                return false;
            }
        } else if (typeof json === "string") {
            try {
                JSON.parse(json);
                return true;
            } catch (ex) {
                return false;
            }
        }
        return false;
    } catch (ex) {
        console.error(ex);
        return false;
    }
};

/**
 * 배열 객체인지 여부를 확인한다.
 *
 * @memberOf cm
 * @date
 * @param {Object}  array :: I :: N :: :: Array Object or String
 * @return {Boolean} Array 배열 판단 여부(Array 객체인 경우 true, 아닌경우 false)
 * @author Inswave Systems
 * @example
 cm.isArray(arrObject); // return true
 */
cm.isArray = function (array) {
    try {
        if ((typeof array !== "undefined") && (array !== null) && (typeof array == "object")) {
            if (array.constructor.name && array.constructor.name.toLowerCase() == "array")
                return true;
            if (array.constructor && array.constructor == Array)
                return true;
        }
        return false;
    } catch (ex) {
        console.error(ex);
        return false;
    }
};

cm.getObjectType = function (obj) {
    var objType = typeof obj;
    if (objType !== 'object') {
        return objType;
    } else if (obj.constructor === {}.constructor) {
        return 'json';
    } else if (obj.constructor === [].constructor) {
        return 'array';
    } else if (obj === null) {
        return 'null';
    } else {
        var tmpDoc = WebSquare.xml.parse("<data></data>");
        if (obj.constructor === tmpDoc.constructor || obj.constructor === tmpDoc.firstElementChild.constructor) {
            return 'xml';
        } else {
            return objType;
        }
    }
};

cm.isXmlDoc = function (data) {
    if (typeof data != 'object')
        return false;
    if ((typeof data.documentElement != 'undefined' && data.nodeType == 9) || (typeof data.documentElement == 'undefined' && data.nodeType == 1)) {
        return true;
    }
    return false;
};

cm.setScopeObj = function (scopObj) {

    scwin.screenScopeObj = scopObj;
};

cm.getJSON = function (str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return str;
    }
};

cm.fillZero = function (str, maxLen) {
    var len = str;
    var zero = "";

    if (typeof str == 'number') len = '' + str;

    if (len.length < maxLen) {
        for (var i = len.length; i < maxLen; i++) {
            zero += "0";
        }
    }
    return (zero + '' + str);
}

cm.timestampDate = function (value) {
    if (value.length == 0) {

        return "";

    }
    var date = new Date(parseInt(value));
    return WebSquare.date.getFormattedDate(date, "yyyy-MM-dd HH:mm");
};

cm.getDateTimeFormatter = function(value) {
	if (value != "") {
		if (typeof value === "string") {
			value = value.substring(0,value.indexOf("."));

			return value.replaceAll("T"," ");
		} else {
			value = new Date(parseInt(value)).toISOString();
			return value.substring(0,value.indexOf(".")).replaceAll("T"," ");
		}
	} else {
		return value;
	}
};


cm.webSocketStatus = function (value) {
    if (value.length == 0 || value == "0") {

        return "미접속";

    } else {

        return "접속중";
    }
};

cm.isAlpha = function (str) {
    var code, i, len;
    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
};

cm.isAlphaNumeric = function (str) {
    var code, i, len;
    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
};

cm.validMinMax = function (str, min, max) {
    if (str.length >= min && str.length <= max) {
        return true;
    }
    return false;
}
cm.validIPv4 = function (str) {
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (ipformat.test(str)) {
        return true;
    } else {
        return false;
    }
}
cm.dontDrop = function () {
    return false;
}
cm.isEmpty = function (arg) {
    return (
        arg == null || // Check for null or undefined
        arg.length === 0 || // Check for empty String (Bonus check for empty Array)
        (typeof arg === 'object' && Object.keys(arg).length === 0) // Check for empty Object or Array
    );
}

cm.getExcelSheet = function (file, callback) {
    return cm.getExcelSheetByIndex(file, callback, 0);
}

cm.readStringFromFile = function(file, callback) {
    var reader = new FileReader();
    reader.onload = function (e) {
        callback.call(this, reader.result);
    };
    reader.readAsText(file);
}

cm.getExcelSheetByIndex = function (file, callback, sheetIdx, opts) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var fileData = reader.result;
        var wb = XLSX.read(fileData, { type: 'binary' });
        
        
        var ws = wb.Sheets[wb.SheetNames[sheetIdx]];
        var range = XLSX.utils.decode_range(ws["!ref"]);
        if(opts){
        	if(opts.range.s) range.s = opts.range.s;
            if(opts.range.e) range.e = opts.range.e;
            if(opts.range) opts.range = XLSX.utils.encode_range(range);
        }
        var sheet = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[sheetIdx]], opts);
        callback.call(this, sheet);
    };

    //파일객체를 읽는다. 완료되면 원시 이진 데이터가 문자열로 포함됨.
    reader.readAsBinaryString(file);
}

cm.getExcelSheetByName = function (file, callback, sheetName) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var fileData = reader.result;
        var wb = XLSX.read(fileData, { type: 'binary' });
        var sheet = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
        callback.call(this, sheet);
    };

    //파일객체를 읽는다. 완료되면 원시 이진 데이터가 문자열로 포함됨.
    reader.readAsBinaryString(file);
}

// 엑셀 Import Validation 체크
cm.chkExcelValidation = function(condition, data) {
    var msg = '';
    var result = true;
    condition.forEach(function(e) {
      if (!data[e.key] && typeof e.required !== 'undefined' && typeof e.type !== 'boolean' && e.required) {
        msg += (msg !== '') ? '\n' : '';
        msg += e.key + ' 데이터는 필수 항목입니다.';
        result = false;
      }

      if (data[e.key] && typeof e.length !== 'undefined' && data[e.key].length > e.length) {
        msg += (msg !== '') ? '\n' : '';
        msg += e.key + ' 데이터 자릿수(' + e.length + ')가 초과하였습니다.';
        result = false;
      }

      if (data[e.key] && typeof e.type !== 'undefined' && typeof data[e.key] !== e.type) {
        msg += (msg !== '') ? '\n' : '';
        msg += e.key + ' 데이터 타입(' + e.type + ')이 잘못되었습니다.';
        result = false;
      }
    });

    return { result: result, msg: msg };
}

cm.downloadXLSX = function (jsonArray, sheetName, fileName) {
    var wb = XLSX.utils.book_new();
    var sheet = XLSX.utils.json_to_sheet(jsonArray);
    XLSX.utils.book_append_sheet(wb, sheet, sheetName);

    const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });

    function buildArrayBuffer(s) {
        var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
        var view = new Uint8Array(buf);  //create uint8array as viewer
        for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
        return buf;
    }

    saveAs(new Blob([buildArrayBuffer(wbout)], { type: 'application/octet-stream' }), fileName + ".xlsx");
}

//엑셀 출력(스타일 적용)
cm.xlsxDownload = function(page, title, data) {
	var now = new Date();
	var today = cm.currentDateTime(3);

	var newTitle = title + '_All_' + today + '.xlsx';
	if(page !== 'all') {
		newTitle = title + '_' + page + 'p_'+ today + '.xlsx';
	}

	var wb = XLSX.utils.book_new();
	var sheets = data instanceof Array ? data : [data]; //다중시트 지원

	sheets.forEach(function(s) {
		var target = s.sheetName.split('-');
		var sheet = cm.makeSheets(s, title, target[1]);
		XLSX.utils.book_append_sheet(wb, sheet, s.sheetName ? s.sheetName : 'List');
	});

	cm.downloadExcelFile(wb, newTitle);
};

cm.downloadExcelFile = function(wb, title) {
  var wbout = XLSX.write(wb, { type: 'binary', bookSST: false, bookType: 'xlsx', cellStyles: true });

  function buildArrayBuffer(s) {
    	var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
      var view = new Uint8Array(buf);  //create uint8array as viewer
      for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
      return buf;
  }

  saveAs(new Blob([buildArrayBuffer(wbout)], { type: 'application/octet-stream' }), title);
};

//엑셀 시트 만들기
cm.makeSheets = function(data, title, target) {
	var rowData = cm.excelParseValue(data);

	var ws = null;
  var wsrows = [];
  for (let i = 0; i < data.columnInfo.length; i += 1) {
    wsrows.push({ wch: (data.columnInfo[i].width) ? data.columnInfo[i].width : 15 });
  }

  if (target === 'Import') {
    ws = XLSX.utils.json_to_sheet(rowData); // json 로 데이터 추출
    ws['!cols'] = wsrows;
  } else {
    ws = cm.sheetChangeArrays(rowData, data.columnInfo, title); // data.columnInfo
    ws['!cols'] = wsrows; // 컬럼 길이
    ws['!rows'] = [{ hpx: 20 }, { hpx: 40 }, { hpx: 20 }]; // 로우 길이
    ws['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: data.columnInfo.length - 1 } }, // 날짜,
      { s: { r: 1, c: 0 }, e: { r: 1, c: data.columnInfo.length - 1 } }, // 제목
      { s: { r: 2, c: 0 }, e: { r: 2, c: data.columnInfo.length - 1 } }, // 출력한 사람 정보
    ];
  }

  return ws;
};

//엑셀 헤더 구성 및 데이터 포멧
cm.excelParseValue = function(data) {
	var headers = [];
	if(data.columnInfo) {
		headers = data.columnInfo;
	} else {
		Object.keys(data.currentRows[0]).forEach(function(col) {
			headers.push({ dataType: '', text: col.toUpperCase(), value: col })
		});
	}

	return data.currentRows.map(function(row){
		var arr = [];
		cm.date();

		headers.forEach(function(col){
			if(row[col.value]) {
				switch (col.dataType) {
					case "date": //날짜포멧(날짜 yyyy-MM-dd)
						if(row[col.value] instanceof Date) {
							var newDate = row[col.value].toString();
						} else {
							var newDate = row[col.value].toString();
							var regExp = /[:\/\-]/gi;
							if(regExp.test(newDate)){
								newDate = newDate.replace(regExp, ""); // 찾은 특수 문자를 제거
							}

							var sYear = Number(newDate.substring(0,4));
						    var sMonth = Number(newDate.substring(4,6));
						    var sDate = Number(newDate.substring(6,8));

						    var newDate = new Date(sYear, sMonth-1, sDate);
						}

						arr[col.text] = newDate.format("yyyy-MM-dd");

						break;
					case "datetime": //날짜포멧(시간까지 yyyy-MM-dd hh:mm:ss)
						if(row[col.value] instanceof Date) {
							var newDate = row[col.value].toString();
						} else {
							var newDate = row[col.value].toString();
							var regExp = /[:\/\-]/gi;
							if(regExp.test(newDate)){
								newDate = newDate.replace(regExp, ""); // 찾은 특수 문자를 제거
							}

							var sYear = Number(newDate.substring(0,4));
						    var sMonth = Number(newDate.substring(4,6));
						    var sDate = Number(newDate.substring(6,8));

						    var sHour = Number(newDate.substring(9,11));
						    var sMin = Number(newDate.substring(11,13));
						    var sSec = Number(newDate.substring(13,15));

						    newDate = new Date(sYear, sMonth-1, sDate, sHour, sMin, sSec);
						}

						arr[col.text] = newDate.format("yyyy-MM-dd hh:mm:ss");

						break;
					case "number": //숫자포멧(3자리 콤마)
						arr[col.text] = row[col.value].toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
						break;
					default:
						arr[col.text] = row[col.value];
						break;
				}
			}
		});

		return arr;
	});
};

//엑셀 출력 스타일 적용
cm.sheetChangeArrays = function(data, header, title) {
  var ws = {};
  var range = { s: { c: 1000000, r: 1000000 }, e: { c: 0, r: 0 } };
  var today = cm.currentDateTime(2);

  //로그인정보
  var LOGIN_USER = {
  	userId: cm.getLoginUserInfo('loginId'), //"admin@inswave.com",
  	userName: cm.getLoginUserInfo('username'), //"관리자",
  	userBrnCd: "1000",
  	userBrnName: "핀테크플랫폼"
  }

  for (var R = 0; R < data.length; R++) {
    	for (var C = 0; C < header.length; C++) {
      	if (range.s.r > R) range.s.r = R;
      	if (range.s.c > C) range.s.c = C;
      	if (range.e.r < R) range.e.r = R;
      	if (range.e.c < C) range.e.c = C;

      	var cellRef = null;
      	if (R === 0 && C === 0) {
        		var dateCell = {
          		s: {
            			font: { name: 'Dotum', sz: "9", color: '#000' },
            			alignment: { vertical: 'center', horizontal: 'right', indent: 0, wrapText: true }
          		},
          		t: 's',
          		v: today
        		};

        		// cellRef
        		cellRef = XLSX.utils.encode_cell({ c: C, r: R });
        		ws[cellRef] = dateCell;

        		var titleCell = {
          		s: {
            			font: { name: 'Dotum', size: "14", color: '#000', bold: true },
            			alignment: { vertical: 'center', horizontal: 'center', indent: 0, wrapText: true }
          		},
          		t: 's',
          		v: title
        		};

        		// cellRef
        		cellRef = XLSX.utils.encode_cell({ c: C, r: R + 1 });
        		ws[cellRef] = titleCell;

        		var infoValue = LOGIN_USER.userName + '(' + LOGIN_USER.userId + ') ';
        	  		//infoValue += '\n부점정보 : ' + LOGIN_USER.userBrnName + '(' + LOGIN_USER.userBrnCd + ')';
        		var infoCell = {
        			s: {
          			font: { name: 'Dotum', sz: "9", color: '#000' },
            			alignment: { vertical: 'center', horizontal: 'left', indent: 0, wrapText: true }
          		},
          		t: 's',
          		v: infoValue
        		};

      		// cellRef
        		cellRef = XLSX.utils.encode_cell({ c: C, r: R + 2 });
        		ws[cellRef] = infoCell;
      	}

      	if (R === 0) {
        		var value = header[C].text ? header[C].text : '';
        		var type = '';
        		if (typeof value === 'number') {
          		type = 'n';
        		} else if (typeof value === 'boolean') {
          		type = 'b';
        		} else {
          		type = 's';
        		}

        		var cell = {
		            s: {
		              fill: {
		                patternType: 'solid',
		                fgColor: { rgb: 'FFdbdbdb' },
		                bgColor: { rgb: 'FFdbdbdb' },
		              },
		              font: {
		                name: 'Dotum',
		                sz: 10,
		                color: '#FF00FF',
		                bold: true,
		              },
		              alignment: {
		                vertical: 'center',
		                horizontal: 'center',
		                indent: 0,
		                wrapText: true,
		              },
		              border: {
		                top: { style: 'thin', color: { auto: 1 } },
		                right: { style: 'thin', color: { auto: 1 } },
		                bottom: { style: 'thin', color: { auto: 1 } },
		                left: { style: 'thin', color: { auto: 1 } }
		              }
		            },
		            t: type,
		            v: value
		        };

        		// cellRef
        		cellRef = XLSX.utils.encode_cell({ c: C, r: R + 3 });
        		ws[cellRef] = cell;
      	}

      	var value = data[R][header[C].text] ? data[R][header[C].text] : '';
      	var type = '';
      	if (typeof value === 'number') {
        		type = 'n';
      	} else if (typeof value === 'boolean') {
        		type = 'b';
      	} else {
        		type = 's';
      	}
      	var cell = {
        		s: {
		            fill: {
		            	patternType: 'none',
		              	fgColor: { rgb: 'FF000000' },
		              	bgColor: { rgb: 'FFFFFFFF' }
		            },
		            font: {
		              	name: 'Dotum',
		              	sz: 10,
		              	color: { rgb: '#FF000000' }
		            },
		            alignment: {
		              	vertical: 'center',
		              	horizontal: typeof header[C].align === 'undefined' ? 'left' : header[C].align,
		              	indent: 0,
		              	wrapText: true
		            },
		            border: {
		              	top: { style: 'thin', color: { auto: 1 } },
		              	right: { style: 'thin', color: { auto: 1 } },
		              	bottom: { style: 'thin', color: { auto: 1 } },
		              	left: { style: 'thin', color: { auto: 1 } }
		            },
        		},
	          	t: type,
	          	v: value
      	};

      	// cellRef
      	cellRef = XLSX.utils.encode_cell({ c: C, r: R + 4 });
      	ws[cellRef] = cell;
    	}
  }

  range.e.r += 4;
  if (range.s.c < 1000000) ws['!ref'] = XLSX.utils.encode_range(range);

  return ws;
}

//엑셀 출력 날짜
cm.currentDateTime = function(type) {
  var current = new Date();
  var nMonth = (current.getMonth() + 1).toString().length === 1 ? '0' + (current.getMonth() + 1) : (current.getMonth() + 1).toString();
  var nDay = current.getDate().toString().length === 1 ? '0' + current.getDate() : current.getDate().toString();
  var date = current.getFullYear() + '-' + nMonth + '-' + nDay;

  var nHour = current.getHours().toString().length === 1 ? '0' + current.getHours() : current.getHours().toString();
  var nMin = current.getMinutes().toString().length === 1 ? '0' + current.getMinutes() : current.getMinutes().toString();
  var nSec = current.getSeconds().toString().length === 1 ? '0' + current.getSeconds() : current.getSeconds().toString();
  var time = nHour + ':' + nMin + ':' + nSec;

  switch(type) {
  	case 1:
  		var dateTime = date + '_' + time;
  		break;
  	case 2:
  		var dateTime = date + ' ' + time;
  		break;
  	case 3:
  		date = current.getFullYear() + nMonth + nDay;
  		time = nHour + nMin + nSec;

  		var dateTime = date + time;
  		break;
  }

  return dateTime;
};

/*
 *  dataList, 그리드뷰 동적 생성
 */
cm.setGrid = function (groupId, data) {
    var dltPrefix = "dlt_";
    var queryData = data.hits.hits;     //elasticsearch query 데이터
    var dataListOption;
    var option = {
        "type": "dataList",
        "option": {
            "baseNode": "list",
            "repeatNode": "map"
        },
        "columnInfo": []
    };


    if (queryData.length > 0) {
        var columnArrInfo = queryData[0]._source;           //컬럼명 추출
        var indexName = queryData[0]._source.indexName;     //dataList ID 생성을 위한 indexName 추출
        var service = queryData[0]._source.service;         //그리드뷰ID 생성을 위한 service 명 추출

        //dataList 생성시 필요한 column 정보 생성
        for (var idx in columnArrInfo) {
//                      console.log(columnArrInfo[idx]);
//                      console.log(idx);
            option.columnInfo.push({
                "id": idx
            });
        }
        dataListOption = option;

        try {
            var dltId = dltPrefix + indexName;
            var dltComponent = $p.getComponentById(dltId);

            dataListOption.id = dltId;
            $p.data.create(dataListOption);     // 동일한 id의 DataCollection이 존재할 경우, 삭제 후 재생성함

            var jsonData = [];
            //dataList 에 매핑하기 위한 데이터 생성
            for (var i = 0; i < queryData.length; i++) {
                jsonData.push(queryData[i]._source);
            }

            var dataListObj = $p.getComponentById(dataListOption.id);
            dataListObj.setJSON(jsonData);

            cm.makeGrid(dltId, columnArrInfo, groupId, service);    //그리드뷰 생성
        } catch (ex) {
            console.error(ex);
        }

    }
};

/*
 *  dataList, 그리드뷰 동적 생성
 */
cm.makeGrid = function (dltId, columnArrInfo, groupId, service, eventStr) {
    var dataListId = dltId;         //dataList ID
    var columnInfo = columnArrInfo; //컬럼명 정보
    var gridViewId = "grd_" + service;       //그리드뷰ID 생성을 위한 service 명 추출

    if (typeof $p.getComponentById(gridViewId) != "undefined") {
        console.log("remove gridView : " + gridViewId);
        $p.getComponentById(gridViewId).remove();
    }

    var gridViewStr = "";

    gridViewStr += '<w2:gridView xmlns="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:w2="http://www.inswave.com/websquare" xmlns:xf="http://www.w3.org/2002/xforms"';
    gridViewStr += ' dataList="' + dataListId + '" keepDefaultColumnWidth="true" focusMode="row" visibleRowNum="10" class="wq_gvw" defaultCellHeight="24" rowNumHeaderValue="No" rowNumVisible="true" rowNumWidth="50" scrollByColumn="false" summaryAuto="false" scrollByColumnAdaptive="false" id="' + gridViewId + '" style="min-width:400px; min-height: 300px;" ignoreCellClick="false" ignoreToggleOnDisabled="false" fixedColumnWithHidden="true" useShiftKey="true" tooltipDisplay="true" tooltipShowAlways="true" readOnly="true" ' + (eventStr ? eventStr : "") + '>';
    gridViewStr += '<w2:header id="header1" style="">';
    gridViewStr += '<w2:row id="row1" style="">';

    for (var colName of columnInfo) {
        var tmpHeaderId = "header_" + colName;
        var headerNameObj = {}; //cm.headerName(colName);
        headerNameObj.columnName = colName;
        headerNameObj.hidden = false;
        gridViewStr += '<w2:column blockSelect="false" id="' + tmpHeaderId + '" style="height:24px" inputType="text" width="70" displayMode="label" value="' + headerNameObj.columnName + '" hidden="' + headerNameObj.hidden + '"></w2:column>';
    }

    gridViewStr += '</w2:row>';
    gridViewStr += '</w2:header>';
    gridViewStr += '<w2:gBody id="gBody1" style="">';
    gridViewStr += '<w2:row id="row2" style="">';

    for (var idx of columnInfo) {
        var tmpBodyId = idx;
        gridViewStr += '<w2:column blockSelect="false" id="' + tmpBodyId + '" style="height:24px" inputType="text" width="70" displayMode="label"></w2:column>';
    }

    gridViewStr += '</w2:row>';
    gridViewStr += '</w2:gBody>';
    gridViewStr += '</w2:gridView>';
    $p.dynamicCreate(gridViewId, "gridView", gridViewStr, $p.getComponentById(groupId));
};

/*
	columnNameEng: "cpuUsage"
	columnNameHng: "CPU 사용률 (%)"
	logNameEng: "clientPerfResource"

 */
cm.headerName = function (columnId) {
    var returnObj = {
        "hidden": "",
        "columnName": ""
    };
    var headerInfoDtl = $p.top().$p.main().index_header.getWindow().dtl_headerInfo;
    var headerInfo = headerInfoDtl.getMatchedJSON("columnNameEng", columnId, true)[0];

    if (typeof headerInfo != "undefined") {
        returnObj.columnName = headerInfo.columnNameHng;
    } else {
        returnObj.columnName = columnId;
        returnObj.hidden = "true";
    }

    return returnObj;
};

//현재 tabcontrol 화면의 title 명을 가져온다
cm.setTitleName = function () {
    var param = $p.getParameter("tabParam");
    var compId = "txt_title";
    var comp = $p.getComponentById(compId);
    comp.setValue(param.titleName);
};

cm.setLoadingBar = function(chk) {
	if(chk) {
		var innerHtml = '<div class="loadingBox">';
	    innerHtml += '<div class="spinner">';
	    innerHtml += '<div class="rect1"></div>';
	    innerHtml += '<div class="rect2"></div>';
	    innerHtml += '<div class="rect3"></div>';
	    innerHtml += '<div class="rect4"></div>';
	    innerHtml += '<div class="rect5"></div>';
	    innerHtml += '</div>';
	    innerHtml += '</div>';

	    $('body').append(innerHtml);
    } else {
        $('body').find('.loadingBox').remove();
    }
}

cm.createSubmissionDetail = function (action, method, ref, target, mediatype, encoding, mode, processMsg, submitDoneHandler, submitErrorHandler, loading) {
	loading = (typeof loading === 'undefined') ? true : loading;
	loading = (action.indexOf('elastic') > -1) ? false : loading;

	cm.setLoadingBar(loading);
	gcm.sbm.loadingChk = loading;

	var submissionObj = {
        "id": "submission_dynamic_" + new Date().getTime(),
        "ref": ref || "data:json,dc_reqDataMap",
        "target": target || "data:json,dc_resDataMap",
        "action": action,
        "method": method || "post",
        "mediatype": mediatype || "application/json",
        "encoding": encoding || "UTF-8",
        "mode": mode || "asynchronous",
        "scope_id": WebSquare.scope_obj    // TODO. ingyu. 우회처리 확인필요 : sbm 동적생성 후 getSubmission 호출 시 scope_id가 없을 경우 sbm가 있어도 무시된다.
    };
    if (processMsg) {
        submissionObj.processMsg = processMsg;
    }
    if (submitDoneHandler) {
        submissionObj.submitDoneHandler = submitDoneHandler;
    }
    if (submitErrorHandler) {
        submissionObj.submitErrorHandler = submitErrorHandler;
    }

    $p.createSubmission(submissionObj);

    return submissionObj.id;
}

cm.createSubmissionSimple = function (action, submitDoneHandler, submitErrorHandler, method, sync, loading) {
    return cm.createSubmissionDetail(action, method || "post", "data:json", "data:json", "application/json", "UTF-8", sync ? "synchronous" : "asynchronous", null, submitDoneHandler, submitErrorHandler, loading);
}

// cm.createSubmissionLogServer = function (submitDoneHandler, submitErrorHandler) {
//     return cm.createSubmissionSimple(this.logServerUrl + this.selcectLogUrl, submitDoneHandler, submitErrorHandler);
// }
//
// cm.executeSubmissionLogServer = function (param, submitDoneHandler, submitErrorHandler) {
//     var sbm = $p.getSubmission(cm.createSubmissionLogServer(submitDoneHandler, submitErrorHandler));
//     $p.executeSubmission(sbm, param);
// }

cm.createSubmissionManagerServerDao = function (submitDoneHandler, submitErrorHandler) {
    return cm.createSubmissionSimple(cm.managerServerUrl + cm.adminSelectUrl, submitDoneHandler, submitErrorHandler);
}
cm.createSubmissionManagerServer = function (submitDoneHandler, submitErrorHandler) {
    return cm.createSubmissionSimple(cm.managerServerUrl + cm.managerDefaultUrl, submitDoneHandler, submitErrorHandler);
}
cm.executeSubmissionManagerServerDao = function (param, submitDoneHandler, submitErrorHandler) {
    var sbm = $p.getSubmission(cm.createSubmissionManagerServerDao(submitDoneHandler, submitErrorHandler));
    $p.executeSubmission(sbm, param);
}
cm.executeSubmissionManagerServer = function (param, submitDoneHandler, submitErrorHandler) {
    var sbm = $p.getSubmission(cm.createSubmissionManagerServer(submitDoneHandler, submitErrorHandler));
    $p.executeSubmission(sbm, param);
}
cm.executeSubmissionManagerServerDaoUpdateAll = function (entityName, entities, submitDoneHandler, submitErrorHandler) {
    var sbm = cm.createSubmissionSimple(cm.managerServerUrl + "/api/wem/u/" + entityName, submitDoneHandler, submitErrorHandler);
    $p.executeSubmission(sbm, entities);
}
cm.executeSubmissionManagerServerDaoCreateAll = function (entityName, entities, submitDoneHandler, submitErrorHandler) {
    var sbm = cm.createSubmissionSimple(cm.managerServerUrl + "/api/wem/c/" + entityName, submitDoneHandler, submitErrorHandler);
    $p.executeSubmission(sbm, entities);
}
cm.executeSubmissionManagerServerDaoSelect = function (entityName, id, submitDoneHandler, submitErrorHandler) {
    var sbm = cm.createSubmissionSimple(cm.managerServerUrl + "/api/wem/r/" + entityName + "/" + id, submitDoneHandler, submitErrorHandler, "get");
    $p.executeSubmission(sbm, param);
}
cm.executeSubmissionManagerServerDaoSelectAll = function (entityName, submitDoneHandler, submitErrorHandler) {
    var sbm = $p.getSubmission(cm.createSubmissionManagerServerDao(submitDoneHandler, submitErrorHandler));
    var param = { "header": { "source": "admin", "service": "rdbdao.StandardService", "destination": entityName, "daoOperation": "select" } };
    param.body = {};
    $p.executeSubmission(sbm, param);
}
cm.executeSubmissionManagerServerDaoDelete = function (entityName, ids, submitDoneHandler, submitErrorHandler) {
    var sbm = $p.getSubmission(cm.createSubmissionManagerServerDao(submitDoneHandler, submitErrorHandler));
    var param = { "header": { "source": "admin", "service": "rdbdao.StandardService", "destination": entityName, "daoOperation": "delete" } };
    param.body = {};
    param.body[entityName + "Rows"] = [];
    ids.forEach(function (id) {
        param.body[entityName + "Rows"].push({ id: id });
    });
    $p.executeSubmission(sbm, param);
}
cm.executeSubmissionManagerServerDaoSaveAll = function (entityName, pkCols, dcl, submitDoneHandler, submitErrorHandler) {
    var deleteIgnoreProps = function (data, ignoreProps) {
        data.forEach(function (e) {
            if (ignoreProps) {
                ignoreProps.forEach(function (p) {
                    delete e[p];
                });
            }
            delete e.rowStatus;
        });
        return data;
    }
    var sbm = cm.createSubmissionSimple(cm.managerServerUrl + "/api/wem/sa/" + entityName, submitDoneHandler, submitErrorHandler);
    $p.executeSubmission(sbm, {
        inserted: deleteIgnoreProps(dcl.getInsertedJSON(), pkCols),
        updated: deleteIgnoreProps(dcl.getUpdatedJSON()),
        deleted: deleteIgnoreProps(dcl.getDeletedJSON())
    });
}
cm.executeSubmissionManagerServerDaoSaveAllJson = function (entityName, json, submitDoneHandler, submitErrorHandler, method, sync, loading) {
	var sbm = cm.createSubmissionSimple(cm.managerServerUrl + "/api/wem/sa/" + entityName, submitDoneHandler, submitErrorHandler, method, sync, loading);
    $p.executeSubmission(sbm, json);
}


cm.executeSubmissionManagerServerDaoSelectAll2 = function (entityName, where, pageable, submitDoneHandler, submitErrorHandler) {
    var sbm = cm.createSubmissionSimple(cm.managerServerUrl + "/api/wem/ra/" + entityName, submitDoneHandler, submitErrorHandler);
    $p.executeSubmission(sbm, {
        where: where,
        pageable: pageable
    });
}

cm.dao = {};
cm.dao.manager = {};
cm.dao.manager.select = cm.executeSubmissionManagerServerDaoSelect;
cm.dao.manager.selectAll = cm.executeSubmissionManagerServerDaoSelectAll;
cm.dao.manager.selectAll2 = cm.executeSubmissionManagerServerDaoSelectAll2;
cm.dao.manager.createAll = cm.executeSubmissionManagerServerDaoCreateAll;
cm.dao.manager.updateAll = cm.executeSubmissionManagerServerDaoUpdateAll;
cm.dao.manager.delete = cm.executeSubmissionManagerServerDaoDelete;
cm.dao.manager.saveAll = cm.executeSubmissionManagerServerDaoSaveAll;
cm.dao.manager.saveAllJson = cm.executeSubmissionManagerServerDaoSaveAllJson;

cm.dao.manager.sql = function (entityName) {
    return {
        entity: entityName,
        where: [],  // [{field, operator, value]
        pageable: {
            size: 20,   // -1 : Integer.MAX
            page: 0,
            sort: []
        },
        execute: function (submitDoneHandler, submitErrorHandler) {
            cm.dao.manager.selectAll2(this.entity, this.where, this.pageable, submitDoneHandler, submitErrorHandler);
        },
        page: function (size, page) {
            this.pageable.size = size;
            this.pageable.page = page;
            return this;
        },
        order: function (column, isAscending) {
            this.pageable.sort.push({ column: column, direction: isAscending ? "ASC" : "DESC" });
            return this;
        },
        addWhere: function (field, operator, value) {
            this.where.push({ field: field, operator: operator, value: value });
            return this;
        },
        isEmpty: function (field) {
            return this.addWhere(field, "isEmpty");
        },
        isNotEmpty: function (field) {
            return this.addWhere(field, "isNotEmpty");
        },
        isNull: function (field) {
            return this.addWhere(field, "isNull");
        },
        isNotNull: function (field) {
            return this.addWhere(field, "isNotNull");
        },
        equal: function (field, value) {
            return this.addWhere(field, "equal", value);
        },
        equalBoolean: function (field, value) {
            return this.addWhere(field, "equalBoolean", value);
        },
        like: function (field, value) {
            return this.addWhere(field, "like", value);
        },
        notEqual: function (field, value) {
            return this.addWhere(field, "notEqual", value);
        },
        greaterThan: function (field, value) {  // 초과
            return this.addWhere(field, "greaterThan", value);
        },
        greaterThanOrEqualTo: function (field, value) { // 이상
            return this.addWhere(field, "greaterThanOrEqualTo", value);
        },
        lessThan: function (field, value) { // 미만
            return this.addWhere(field, "lessThan", value);
        },
        lessThanOrEqualTo: function (field, value) { // 이하
            return this.addWhere(field, "lessThanOrEqualTo", value);
        },
        between: function (field, startValue, endValue) {
            return this.addWhere(field, "between", { startValue: startValue, endValue: endValue });
        },
        betweenDate: function (field, from_yyyyMMdd, to_yyyyMMdd) {
            var fromDate = this.yyyyMMdd2Date(from_yyyyMMdd);
            var toDate = this.yyyyMMdd2Date(to_yyyyMMdd);
            return this.addWhere(field, "betweenDatetime", { startValue: fromDate.toISOString(), endValue: toDate.toISOString() });
        },
        betweenDatetime: function (field, fromDate, toDate) {
            return this.addWhere(field, "betweenDatetime", { startValue: fromDate.toISOString(), endValue: toDate.toISOString() });
        },
        greaterThanDatetime: function (field, date) {
            return this.addWhere(field, "greaterThanDatetime", date.toISOString());
        },
        greaterThanOrEqualToDatetime: function (field, date) {
            return this.addWhere(field, "greaterThanOrEqualToDatetime", date.toISOString());
        },
        lessThanDatetime: function (field, date) {
            return this.addWhere(field, "lessThanDattimee", date.toISOString());
        },
        lessThanOrEqualToDatetime: function (field, date) {
            return this.addWhere(field, "lessThanOrEqualToDatetime", date.toISOString());
        },
        greaterThanDate: function (field, yyyyMMdd) {
            var date = this.yyyyMMdd2Date(yyyyMMdd);
            return this.addWhere(field, "greaterThanDatetime", date.toISOString());
        },
        greaterThanOrEqualToDate: function (field, yyyyMMdd) {
            var date = this.yyyyMMdd2Date(yyyyMMdd);
            return this.addWhere(field, "greaterThanOrEqualToDatetime", date.toISOString());
        },
        lessThanDate: function (field, yyyyMMdd) {
            var date = this.yyyyMMdd2Date(yyyyMMdd);
            return this.addWhere(field, "lessThanDatetime", date.toISOString());
        },
        lessThanOrEqualToDate: function (field, yyyyMMdd) {
            var date = this.yyyyMMdd2Date(yyyyMMdd);
            return this.addWhere(field, "lessThanOrEqualToDatetime", date.toISOString());
        },
        yyyyMMdd2Date: function (yyyyMMdd) {
            return new Date(yyyyMMdd.substring(0, 4), new String(parseInt(yyyyMMdd.substring(4, 6) - 1)).padStart(2, "0"), yyyyMMdd.substring(6, 8));
        }
    };
}


/*주석 -> Multiline String*/
cm.comments2string = function (f, p) {
    var str = f.toString()
        .replace(/^[^\/]+\/\*!?/, '')
        .replace(/\*\/[^\/]+$/, '')
        .replace(/\n/gi, "");

    if (Array.isArray(p)) {
        p.forEach(function (e) {
            str = str.replace("?!", e);
        });
    }
    return str;
}

/*
    엑셀 다운로드 wgear
 */
cm.advancedExcelDownload = function (grdObj, downloadType, options) {
    if (cm.isEmpty(options)) {
        options = {};
    }

    if (typeof infoArr === "undefined") {
        infoArr = {};
    }

    if (downloadType == "wgear") {
        options.openFile = true;
        options.useXHR = true;
        options.showDialog = true;
        options.advancedExcelDownloadURL = WGear.getExcelDownloadURL(); //link
    }

    var opts = {
        fileName: options.fileName || "excel.xlsx", //String, [defalut: excel.xlsx] 다운로드하려는 파일의 이름으로 필수 입력 값이다.
        sheetName: options.sheetName || "sheet", //String, [defalut: sheet] excel의 sheet의 이름
        type: options.type || "1", //String, [defalut: 0] type이 0인 경우 실제 데이터 1인 경우 눈에 보이는 데이터를  2이면 들어가 있는 data 그대로(filter무시 expression 타입의 셀은 나오지 않음)
        removeColumns: options.removeColumns || "", //String, [defalut: 없음] 다운로드시 excel에서 삭제하려는 열의 번호(여러 개일 경우 ,로 구분)
        removeHeaderRows: options.removeHeaderRows || "", //String, [defalut: 없음]   다운로드시 excel에서 삭제하려는 Header의 row index(여러 개일 경우 ,로 구분)
        foldColumns: options.foldColumns || "", //String, [defalut: 없음] 다운로드시 excel에서 fold하려는 열의 번호(여러 개일 경우 ,로 구분)
        useHeaderCheckBoxLabel: options.useHeaderCheckBoxLabel || "true", // String, [default: false] 다운로드시 header가 checkbox인 경우 checked 값 대신 label을 출력 할지 여부 ("true"는 value를 출력, "false"는 checked 값 출력.)
        startRowIndex: options.startRowIndex || 0, //Number, excel파일에서 그리드의 데이터가 시작되는 행의 번호(헤더 포함)
        startColumnIndex: options.startColumnIndex || 0, //Number, excel파일에서 그리드의 데이터가 시작되는 열의 번호(헤더 포함)
        headerColor: options.headerColor || "#eeeeee", //String, excel파일에서 그리드의 header부분의 색
//      headerColor: options.headerColor || "#33CCCC", //String, excel파일에서 그리드의 header부분의 색
        headerFontName: options.headerFontName || "", //String, [defalut: 없음] excel파일에서 그리드의 header부분의 font name
        headerFontSize: options.headerFontSize || "10", //String, excel파일에서 그리드의 header부분의 font size
        headerFontColor: options.headerFontColor || "", //String, excel파일에서 그리드의 header부분의 font색
        bodyColor: options.bodyColor || "#FFFFFF", //String, excel파일에서 그리드의 body부분의 색
        bodyFontName: options.bodyFontName || "", //String, [defalut: 없음] excel파일에서 그리드의 body부분의 font name
        bodyFontSize: options.bodyFontSize || "10", //String, excel파일에서 그리드의 body부분의 font size
        bodyFontColor: options.bodyFontColor || "", //String, excel파일에서 그리드의 body부분의 font색
        subTotalColor: options.subTotalColor || "#CCFFCC", //String, [defalut: #CCFFCC] excel파일에서 그리드의 subtotal부분의 색
        subTotalFontName: options.subTotalFontName || "", //String, [defalut: 없음] excel파일에서 그리드의 subtotal부분의 font name
        subTotalFontSize: options.subTotalFontSize || "10", //String, [defalut: 10] excel파일에서 그리드의 subtotal부분의 font size
        subTotalFontColor: options.subTotalFontColor || "", //String, [defalut: 없음] excel파일에서 그리드의 subtotal부분의 font색
        footerColor: options.footerColor || "#008000", //String, [defalut: #008000] excel파일에서 그리드의 footer부분의 색
        footerFontName: options.footerFontName || "", //String, [defalut: 없음] excel파일에서 그리드의 footer부분의 font name
        footerFontSize: options.footerFontSize || "10", //String, [defalut: 10] excel파일에서 그리드의 footer부분의 font size
        footerFontColor: options.footerFontColor || "", //String, [defalut: 없음] excel파일에서 그리드의 footer부분의 font색
        oddRowBackgroundColor: options.oddRowBackgroundColor || "", //String, excel파일에서 그리드 body의 홀수줄의 배경색
        evenRowBackgroundColor: options.evenRowBackgroundColor || "", //String, [defalut: 없음] excel파일에서 그리드 body의 짝수줄의 배경색
        rowNumHeaderColor: options.rowNumHeaderColor || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 배경색
        rowNumHeaderFontName: options.rowNumHeaderFontName || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 폰트이름
        rowNumHeaderFontSize: options.rowNumHeaderFontSize || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 폰트크기
        rowNumHeaderFontColor: options.rowNumHeaderFontColor || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 폰트색상
        rowNumBodyColor: options.rowNumBodyColor || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 배경색
        rowNumBodyFontName: options.rowNumBodyFontName || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 폰트이름
        rowNumBodyFontSize: options.rowNumBodyFontSize || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 폰트크기
        rowNumBodyFontColor: options.rowNumBodyFontColor || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 폰트색상
        rowNumFooterColor: options.rowNumFooterColor || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 배경색
        rowNumFooterFontName: options.rowNumFooterFontName || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 폰트이름
        rowNumFooterFontSize: options.rowNumFooterFontSize || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 폰트크기
        rowNumFooterFontColor: options.rowNumFooterFontColor || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 폰트색상
        rowNumSubTotalColor: options.rowNumSubTotalColor || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 배경색
        rowNumSubTotalFontName: options.rowNumSubTotalFontName || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 폰트이름
        rowNumSubTotalFontSize: options.rowNumSubTotalFontSize || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 폰트크기
        rowNumSubTotalFontColor: options.rowNumSubTotalFontColor || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 폰트색상
        rowNumHeaderValue: options.rowNumHeaderValue || "", //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Header 영역의 출력값
        rowNumVisible: options.rowNumVisible || "false", //String, [defalut: false] 순서출력 유무
        showProcess: WebSquare.util.getBoolean(options.showProcess) || true, //Boolean, [defalut: true] 다운로드 시 프로세스 창을 보여줄지 여부
        massStorage: WebSquare.util.getBoolean(options.massStorage) || true, //Boolean, [defalut: true] 대용량 다운로드 여부 (default는 true 이 옵션을 true로 하고 showConfirm을 false로 한 경우에 IE에서 신뢰할만한 사이트를 체크하는 옵션이 뜬다.)
        showConfirm: WebSquare.util.getBoolean(options.showConfirm) || false, //Boolean, [defalut: false] 다운로드 확인창을 띄울지 여부(옵션을 킨 경우 advancedExcelDownload를 호출후 사용자가 window의 버튼을 한번더 클릭해야 한다. massStorage는 자동으로 true가 된다)
        dataProvider: options.dataProvider || "", //String, [defalut: 없음] 대량데이터 처리 및 사용자 데이터를 가공할 수 있는 Provider Package
        splitProvider: options.splitProvider || "", // String, [defalut: 없음] 대량데이터 처리 및 사용자 데이터를 가공할 수 있는 Split Provider Package
        providerRequestXml: options.providerRequestXml || "", //String, [defalut: 없음] Provider 내부에서 사용할 XML 문자열
        userDataXml: options.userDataXml || "", //String, [defalut: 없음] 사용자가 서버모듈 개발 시 필요한 데이터를 전송 할 수 있는 변수
        bodyWordwrap: WebSquare.util.getBoolean(options.bodyWordwrap) || false, //Boolean, [defalut: false] 다운로드시 바디의 줄 바꿈 기능
        useEuroLocale: options.useEuroLocale || "false", //String, [defalut: false] 다운로드시 유로화 처리 기능(,와 .이 반대인 경우처리)
        useHeader: options.useHeader || "true", //String, [defalut: true] 다운로드시 Header를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
        useSubTotal: options.useSubTotal || "false", //String, [defalut: false] 다운로드시 SubTotal을 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력), expression을 지정한 경우 avg,sum,min,max,targetColValue,숫자를 지원 함.
        useFooter: options.useFooter || "true", //String, [defalut: true] 다운로드시 Footer를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
        separator: options.separator || ",", //String, [defalut: ,] 다운로드시 서버로 데이터 전송할때, 데이터를 구분짓는 구분자, default는 comma(,)
        subTotalScale: options.subTotalScale || -1, //Number, [defalut: -1] 다운로드시 subTotal 평균계산시 소수점 자리수를 지정
        subTotalRoundingMode: options.subTotalRoundingMode || "", //String, [defalut: 없음] 다운로드시 subTotal 평균계산시 Round를 지정 한다. ("CEILING","FLOOR","HALF_UP")
        useStyle: options.useStyle || "", //String, [defalut: false] 다운로드시 css를 제외한, style을 excel에도 적용할 지 여부 (배경색,폰트)
        freezePane: options.freezePane || "", //String, [defalut: ""] 틀고정을 위한 좌표값 및 좌표값의 오픈셋 ( ex) freezePane="3,4" X축 3, Y축 4에서 틀고정, freezePane="0,1,0,5" X축 0, Y축 1에서 X축으로 0, Y축으로 5로 틀공정  )
        autoSizeColumn: options.autoSizeColumn || "true", //String, [defalut: false] 너비자동맞춤 설정 유무 - 2016.08.18 옵션 설정을 true로 변경
        displayGridlines: options.displayGridlines || "", //String, [defalut: false] 엑셀 전체 셀의 눈금선 제거 유무
        colMerge: options.colMerge || "", //String, [defalut: false] colMerge된 컬럼을 Merge해서 출력 할 지 여부
        useDataFormat: options.useDataFormat || "", //String, [defalut: 없음] 그리드 dataType이 text인 경우, 엑셀의 표시형식 '텍스트' 출력 유무( "true"인 경우 표시형식 텍스트, "false"인 경우 표시형식 일반 출력)
        indent: options.indent || "", //String, [defalut: 없음] 그리드 dataType이 drilldown인 경우, indent 표시를 위한 공백 삽입 개수, default값은 0
        columnMove: options.columnMove || "", //String, [defalut: false] 그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
        columnOrder: options.columnOrder || "", //String, [defalut: 없음] 엑셀 다운로드시 다운로드되는 컬럼 순서를 지정 할 수 있는 속성 ( ex) "0,3,2,1"로 지정시 지정한 순서로 다운로드된다 )
        fitToPage: options.fitToPage || "false", //String, [defalut: false] 엑셀 프린터 출력시 쪽맞춤 사용 유무
        landScape: options.landScape || "false", //String, [defalut: false] 엑셀 프린터 출력시 가로 방향 출력 유무
        fitWidth: options.fitWidth || "1", //String, [defalut: 1] 엑셀 프린터 출력시 용지너비
        fitHeight: options.fitHeight || "1", //String, [defalut: 1] 엑셀 프린터 출력시 용지높이
        scale: options.scale || "100", //String, [defalut: 100] 엑셀 프린터 출력시 확대/축소 배율, scale을 사용할 경우 fitToPage는 false로 설정 해야 한다.
        pageSize: options.pageSize || "A4", //String, [defalut: A4] 엑셀 프린터 출력시 인쇄용지 설정 ( ex) "A3", "A4", "A5", "B4" )
        onSuccessCallback: function (e) {
        },
        onFailureCallback: function (e) {
        },
        openFile: options.openFile || "",
        useXHR: options.useXHR || "",
        showDialog: options.showDialog || "",
        advancedExcelDownloadURL: options.advancedExcelDownloadURL || ""
    };

    grdObj.advancedExcelDownload(opts, infoArr);

};

/*
    엑셀 업로드 wgear
 */
cm.advancedExcelUpload = function (grdObj, downloadType) {
    if (cm.isEmpty(options)) {
        options = {};
    }

    if (downloadType == "wgear") {
        options.postMsg = "true";
        options.advancedExcelUploadURL = WGear.getExcelUploadURL();
    }

    var width = "490";
    var height = "218";
    var top = ((document.body.offsetHeight / 2) - (parseInt(height) / 2) + $(document).scrollTop());
    var left = ((document.body.offsetWidth / 2) - (parseInt(width) / 2) + $(document).scrollLeft());

    var opts = {
        type: options.type || "0", //String, 1이면 엑셀 파일이 그리드의 보이는 결과로 만들어져있을때  0이면 엑셀 파일이 그리드의 실제 데이터로 구성되어있을때
        sheetNo: options.sheetNo || 0, //Number, excel파일에서 그리드의 데이터가 있는 sheet번호
        startRowIndex: options.startRowIndex || 1, //Number, [defalut:0] excel파일에서 그리드의 데이터가 시작되는 행의 번호(헤더 포함)
        startColumnIndex: options.startColumnIndex || 0, //Number, [defalut:0] excel파일에서 그리드의 데이터가 시작되는 열의 번호
        endColumnIndex: options.endColumnIndex || 0, //Number, [defalut: 0] excel파일에서 그리드의 데이터가 끝나는 열의 index
        //( 엑셀컬럼수가 그리드컬럼수 보다 작은 경우 그리드 컬러수를 설정)
        headerExist: options.headerExist || "0", //String, [defalut:0] excel파일에서 그리드의 데이터에 header가 있는지 여부
                                                 //(1이면 header 존재 0이면 없음)
        footerExist: options.footerExist || "1", //String, [defalut: 1] excel파일에서 그리드의 데이터에 footer가 있는지 여부
        //(1이면 footer 존재 0이면 없음 기본값은 1 그리드에 footer가 없으면 적용되지 않음)
        append: options.append || "0", //String, [defalut: 0] excel파일에서 가져온 데이터를 그리드에 append시킬지 여부
                                       // (1이면 현재 그리드에 데이터를 추가로 넣어줌 0이면 현재 그리드의 데이터를 삭제하고 넣음)
        hidden: options.hidden || "0", //String, [defalut: 0] 읽어들이려는 엑셀파일에 hidden column이 저장되어 있는지 여부를 설정하는 int형 숫자(0이면
                                       // 엑셀파일에 hidden 데이터가 없으므로 그리드 hidden column에 빈 데이터를 삽입
                                       // 1 : 엑셀파일에 hidden 데이터가 있으므로 엑셀 파일로부터 hidden 데이터를 삽입 )
        fillHidden: options.fillHidden || "0", //String, [defalut: 0] Grid에 hiddenColumn에 빈 값을 넣을지를 결정하기
                                               // 위한 int형 숫자(1이면 hidden Column에 빈 값을 저장하지 않음,0이면 hidden
                                               // column이 저장되어있지 않은 Excel  File이라 간주하고 hidden Column에 빈
                                               // 값을 넣어줌)(hidden이 0인 경우에는 fillhidden은 영향을 끼치지 않음)
        skipSpace: options.skipSpace || "0", //String, [defalut: 0] 공백무시 여부(1이면 무시 0이면 포함)
        insertColumns: options.insertColumns || "",//Array, radio, checkbox와 같은 컬럼을 엑셀에서 받아 오지 않고
                                                   //사용자 컬럼 설정 으로 업로드 ( 데이터 구조 : [ { columnIndex:1, columnValue:"1" } ] )
        popupUrl: options.popupUrl || "", //String, 업로드시에 호출할 popup의 url
        status: options.status || "R", //String, [defalut: R]업로드된 데이터의 초기 상태값, 설정하지 않으면 "R"로 설정되며 "C"값을 설정 할 수 있다.
        pwd: options.pwd || "", //String, 엑셀파일에 암호가 걸려 있는 경우, 비밀번호
        features: "top=" + top + ",height=" + height + ",left=" + left + ",width=" + width + ",location=no,menubar=no,resizable=yes,scrollbars=auto,status=no,titlebar=yes,toolbar=no",
        wframe: true,
        postMsg: options.postMsg || "",
        advancedExcelUploadURL: options.advancedExcelUploadURL || ""
    };

    grdObj.advancedExcelUpload(opts);
};
cm._popupMonitoring = function (id, title, url, width, height, dataObject) {
    requires("uiplugin.popup");
    var winWid = $(window).width();
    var winHei = $(window).height();
    var popWid = width;
    var popHei = height;
    var sumLeft = (winWid - popWid) / 2;
    var sumTop = (winHei - popHei) / 3;

    var opts = {
        "id": id,
        "type": "litewindow",
        "width": popWid + "px",
        "height": popHei + "px",
        "top": sumTop,
        "left": sumLeft,
        "popupName": title,
        "modal": true,
        "useIFrame": false,
        "useATagBtn": true,
        "frameMode": "wframe",
        "dataObject": dataObject
    };
    $p.openPopup(url, opts);

    return id;
}
cm.popupDeviceInfo = function (deviceId, orderTypeValue, onlyTimeCurrent) {
    var id = "popup_deviceInfo_window_wframe";
    var url = "/realtime/popup_deviceInfo.xml";
    
    if (onlyTimeCurrent) {
    	orderTypeValue = "datetimeX DESC";
    } else {
    	orderTypeValue = "datetimeX DESC, "+ orderTypeValue + " DESC";
    }
    
    cm._popupMonitoring(id, "단말정보", url, 1250, 750, {
        "type": "json",
        "name": "param",
        "data": {
            "id": id,
            "deviceId": deviceId,
            "orderTypeValue": orderTypeValue
        }
    });
}

cm.popupDevicesPerformenceChart = function (deviceIds, orderTypeValue, onlyTimeCurrent) {
    var id = "popup_devicesPerformenceInfo_window_wframe";
    var url = "/realtime/popup_devicesPerformenceInfo.xml";
    
    if (onlyTimeCurrent) {
    	orderTypeValue = "datetimeX DESC";
    } else {
    	orderTypeValue = "datetimeX DESC, "+ orderTypeValue + " DESC";
    }    
    
    cm._popupMonitoring(id, "단말별 사용량", url, 1250, 750, {
        "type": "json",
        "name": "param",
        "data": {
            "id": id,
            "deviceIds": deviceIds,
	        "orderTypeValue": orderTypeValue
        }
    });
}
// cm.popupDevicesChartDisk = function(deviceIds) {
//     alert("개발중, popupDevicesChartDisk\n - " + deviceIds.toString());
// }
// cm.popupDevicesChartTemperature = function(deviceIds) {
//     alert("개발중, popupDevicesChartTemperature\n - " + deviceIds.toString());
// }
// cm.popupDevicesChartThread = function(deviceIds) {
//     alert("개발중, popupDevicesChartThread\n - " + deviceIds.toString());
// }
// cm.popupDevicesChartHandle = function(deviceIds) {
//     alert("개발중, popupDevicesChartHandle\n - " + deviceIds.toString());
// }

cm.popupDevicesChartIntegrityFailure = function (type, resultData) {
    cm.openChartByTab("정합성", "/inquiry/client_integrity.xml", type, resultData);
}

cm.popupProcessPerformenceChart = function (procName, sortColumn) {
    // alert("개발중, popupProcessPerformenceChart\n - " + procName);
    var id = "popup_processPerformenceInfo_window_wframe";
    var url = "/realtime/popup_processPerformenceInfo.xml";
    cm._popupMonitoring(id, "단말별 프로세스 사용량 (" + procName + ")", url, 1250, 750, {
        "type": "json",
        "name": "param",
        "data": {
            "id": id,
            "processName": procName,
            "sortColumn": sortColumn
        }
    });
}

/**
 * 전체 데이터를 초기 설정 된 데이터(originalData)로 바꾸고 행의 상태를 초기화(R) 시킨다.
 * 초기 설정 된 데이터 란 setJSON, setXML 등과 같은 API들을 통해 설정 된 데이터가 이에 속한다.
 * 추가(C)된 행은 제거한다
 *
 * @param {String} dltId DataList 객체 또는 DataList 아이디
 * @memberOf cm
 * @date 2020.05.16
 * @author Inswave Systems
 * @example
 cm.undoAll(dlt_grdAllData);
 */
cm.undoAll = function (dltId) {
    try {
        var dltObj = null;
        if (typeof dltId === "string") {
            dltObj = $p.getComponentById(dltId);
        } else {
            dltObj = dltId;
        }

        var rowCount = dltObj.getRowCount();
        var removeIdx = [];
        var undoIdx = [];

        dltObj.setBroadcast(false);

        for (var i = 0; i < rowCount; i++) {
            if (dltObj.getRowStatus(i) == "C") {
                removeIdx.push(i);
                continue;
            }
            undoIdx.push(i)
        }

        dltObj.removeRows(removeIdx);
        dltObj.undoRows(undoIdx);

        dltObj.setBroadcast(true, true);
    } catch (ex) {
        console.error(ex)
    }
};

/**
 * 로그인후 submission 호출시 localStorage 에 저장된 AUTH-TOKEN 값을 request header 에 추가한다
 */
cm._sbm_setRequestHeader = function (obj) {
//Accept: */*
//Accept-Encoding: gzip, deflate
//Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,zh;q=0.5
//AUTH-TOKEN: null
//Connection: keep-alive
//Content-Length: 141
//Content-Type: text/plain;charset=UTF-8
//Host: 3.34.253.162:8081
//Origin: http://127.0.0.1:7312
//Referer: http://127.0.0.1:7312/
//submissionid: mf_sbm_menuList
//User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36


//Accept: application/json
//Accept-Encoding: gzip, deflate
//Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,zh;q=0.5
//Connection: keep-alive
//Content-Length: 119
//Content-Type: application/json; charset="UTF-8"
//Host: 3.34.253.162:8081
//Origin: http://127.0.0.1:7312
//Referer: http://127.0.0.1:7312/
//submissionid: mf_sbm_menuList
//User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36

    var authToken = $p.local.getItem("AUTH-TOKEN");
    obj.setRequestHeader("AUTH-TOKEN", authToken);
//    obj.setRequestHeader("Content-type","application/json;charset=UTF-8");
//    obj.setRequestHeader("Accept","application/json");
};


/*
 * 차트 클릭시 파라메터에 해당하는 화면을 오픈한다
 */
cm.openChartByTab = function (label, src, type, resultData) {
//	label = "정합성";
//	src = "/inquiry/client_integrity.xml";
    var tLabel = label;
    var tValue = src;

    var tabcId = src.replaceAll("/", "");
    tabcId = tabcId.replace(".", "");

    var rowJSON = { "titleName": tLabel };
    rowJSON.resultParam = resultData;
    rowJSON.type = type;

    $p.parent().tabc_layout.addTab(tabcId,
        {
            "label": tLabel,
            "openAction": "exist",
            "closable": "true"
        },
        {
            "src": tValue,
            "frameMode": "wframePreload",
            "scope": true,
            "alwaysDraw": "true",
            "dataObject": {
                "type": "json",
                "name": "tabParam",
                "data": rowJSON
            }
        }
    );

    var tabindex = $p.parent().tabc_layout.getTabIndex(tabcId);
    $p.parent().tabc_layout.setSelectedTabIndex(tabindex);
    $p.top().index_side.getWindow().tw_menu.findNodeByValue(tValue, true);
};

/*
 * gridView style 을 불러온다
 */
cm.loadStyle = function (gridId, inqueryCallback) {
    var gridObj = $p.getComponentById(gridId);
    var scopeId = gridObj.getID() + "_currGrid";

    //dataList1.setData([]);
//    gridObj.initGrid();
    if (!!$p.local.getItem(scopeId)) {
//        gridObj.setGridStyle(WebSquare.xml.parse($p.local.getItem(scopeId), true));
    }

    if (typeof inqueryCallback != "undefined" && typeof inqueryCallback == "function") {
        inqueryCallback();

        var gridObj2 = $p.getComponentById(gridId);
        gridObj2.options.useHeaderContextMenu = true;	//헤더 context menu 사용 여부 설정
    }
};

/*
 * gridView style 을 저장한다
 */
cm.saveStyle = function (gridId) {
    var gridObj = $p.getComponentById(gridId);
    var scopeId = gridObj.getID() + "_currGrid";

    var grdDoc = WebSquare.xml.parse(gridObj.getCurrentGridStyle(), true);
    $p.local.setItem(scopeId, WebSquare.xml.serialize(grdDoc));
};

/*
 * gridView 기본 style 을 불러온다
 */
cm.clearStyle = function (gridId) {
    var gridObj = $p.getComponentById(gridId);
    var scopeId = gridObj.getID() + "_initGrid";

    //dataList1.setData([]);
    gridObj.setGridStyle(WebSquare.xml.parse($w.local.getItem(scopeId), true));
};

/*
 * gridView 기본 style 을 저장후 기존에 저장된 style 을 불러온다
 */
cm.initStyle = function (gridId, inqueryCallback) {
    var gridObj = $p.getComponentById(gridId);
    var scopeId = gridObj.getID() + "_initGrid";

    gridObj.options.useHeaderContextMenu = true;	//헤더 context menu 사용 여부 설정

    $p.local.setItem(scopeId, gridObj.getGridStyle());	//최초 original gridStyle 을 저장
    cm.loadStyle(gridId, inqueryCallback);
};

/*
 * kbyte 를 mbyte 로 변환하여 리턴한다.
 */
cm.convertKbToMb = function (kbyte) {
//	return WebSquare.util.setNumber(Math.floor(kbyte / 1024));
    return WebSquare.util.setNumber((kbyte / 1024).toFixed(2));
};

/*
 * kbyte 를 mbyte 로 변환하여 리턴한다. 소수점 제거
 */
cm.convertKbToMbCut = function (kbyte) {
//	return WebSquare.util.setNumber(Math.floor(kbyte / 1024));
	return WebSquare.util.setNumber((kbyte / 1024).toFixed(0));
};

/*
 * kbyte 를 GB 로 변환하여 리턴한다.
 */
cm.convertKbToGb = function (kbyte) {
    return WebSquare.util.setNumber((kbyte / 1024 / 1024).toFixed(2));
//	return WebSquare.util.setNumber(kbyte / 1024 / 1024);
};

/*
 * Byte 를 MB 로 변환하여 리턴한다.
 */
cm.convertByteToMb = function (byte) {
	return WebSquare.util.setNumber((byte / 1024 / 1024).toFixed(2));
//	return WebSquare.util.setNumber(kbyte / 1024 / 1024);
};

/*
 * Byte 를 MB 로 변환하여 리턴한다. 소수점 제거
 */
cm.convertByteToMbCut = function (byte) {
	return WebSquare.util.setNumber((byte / 1024 / 1024).toFixed(0));
//	return WebSquare.util.setNumber(kbyte / 1024 / 1024);
};

/*
 * Byte 를 GB 로 변환하여 리턴한다. 소수점 제거
 */
cm.convertByteToGbCut = function (byte) {
	return WebSquare.util.setNumber((byte / 1024 / 1024 / 1024).toFixed(0));
//	return WebSquare.util.setNumber(kbyte / 1024 / 1024);
};

/*
 * Byte 를 GB 로 변환하여 리턴한다.
 */
cm.convertByteToGb = function (byte) {
	return WebSquare.util.setNumber((byte / 1024 / 1024 / 1024).toFixed(2));
//	return WebSquare.util.setNumber(kbyte / 1024 / 1024);
};

/*
 * 소수점2자리남 남기고 리턴한다.
 */
cm.convertDecimalCut = function (value) {
	if (typeof value === "string") {
		return value = parseFloat(value).toFixed(2);
	} else {
		return value.toFixed(2);
	}
};
cm.router = {
    indexPage: function () {
        location.replace(`${WebSquareExternal.contextPath}/websquare.html?w2xPath=${cm.indexPage}`);
    },
    loginPage: function () {
        location.replace(`${WebSquareExternal.contextPath}/websquare.html?w2xPath=/cm/main/login.xml`);
    }
};

cm.updateToken = function () {
    if (location.search.indexOf("/login.xml") == -1) {  // 로그인 페이지 제외
        var token = localStorage.getItem('AUTH-TOKEN');
        var tokenExpiredDate = localStorage.getItem('AUTH-TOKEN-EXPIRED-DATE');

        if (cm.isEmpty(token) || cm.isEmpty(tokenExpiredDate)) {    //토큰이 없다? -> 로그인페이지
            cm.router.loginPage();
        }

        var expiredDate = new Date(Number(tokenExpiredDate));
        var currentDate = new Date();
//        console.log("expiredDate, currentDate : ", expiredDate, currentDate);
        if (expiredDate.getTime() < currentDate.getTime()) {    //토큰 유효시간이 지났다. -> 로그인페이지
            cm.router.loginPage();
        }

        //토큰 유효시간이 10분 이하로 남았다? || 한번도 업데이트 안받았다? (로그인 시 업데이트 받은것으로 간주) -> 업데이트 요청 -> 성공:서버 값으로 갱신, 실패: 로그인페이지
        expiredDate.setMinutes(expiredDate.getMinutes() - 10);
        if (expiredDate.getTime() < currentDate.getTime()) {
            // TODO 토큰 전송!
            var sbm = cm.createSubmissionSimple(cm.managerServerUrl + "/api/wem/authentication/update-token",
                function (e) {
                    gcm.IS_TOKEN_UPDATING = false;
                    if(e.responseJSON.isValid) {
                        console.log("done", e);
                        localStorage.setItem('AUTH-TOKEN', e.responseJSON.token);
                        localStorage.setItem('AUTH-TOKEN-EXPIRED-DATE', e.responseJSON.tokenExpiredDate);
                    }else{
                        cm.router.loginPage();
                    }
                },
                function (e) {
                    gcm.IS_TOKEN_UPDATING = false;
                    console.log("error", e);
                },
                "get",
                true);
            if(!gcm.IS_TOKEN_UPDATING) {
                gcm.IS_TOKEN_UPDATING = true;
                $p.executeSubmission(sbm);
            }
        }
    }
}

cm.getLoginUserInfo = function (fieldName,whole) {
    var userInfo = localStorage.getItem('userInfo');
    userInfo = JSON.parse(userInfo);
    if (userInfo instanceof Object) {
        return whole ? userInfo : userInfo[fieldName];
    }
    return null;
}

cm.getLoginUserId = function () {
    return cm.getLoginUserInfo("loginId");
}
cm.getLoginUserName = function (fieldName) {
    return cm.getLoginUserInfo("username");
}

cm.getDateStr = function(dateObj){
    var mm = dateObj.getMonth() + 1;
    var dd = dateObj.getDate();
    return [dateObj.getFullYear(),
        (mm>9 ? '' : '0') + mm,
        (dd>9 ? '' : '0') + dd
    ].join('');
}

var commonHolidays = ['20220909', '20220910', '20220911', '20220912', '20221003', '20221010', '20221225'];

cm.isHolidayWeekendCheck = function(dateObj) {
    let now = dateObj;
    let dateStr = cm.getDateStr(now);
    let nowDay = now.getDay();

    for (var i = 0; i < commonHolidays.length; i++) {
        if (commonHolidays[i] == dateStr) {
            return true;
        }
    }
    if(nowDay == 6 || nowDay == 0){
        return true;
    }
    else {
        return false;
    }
}
cm.getWorkingDate = function(dateObj) {
    let now = dateObj;
    let yesterday = new Date(now.setDate(now.getDate() - 1));

    while (cm.isHolidayWeekendCheck(yesterday)) {
        yesterday = new Date(yesterday.setDate(yesterday.getDate()-1));
    }
    return WebSquare.date.getFormattedDate(yesterday, "yyyyMMdd");
};

//1영업일 이전 wokringday 를 가져온다
cm.getWorkingDay = function(dateObj) {
    var day = -1;
    var now = dateObj;
    var nowDate = now.getDate();
    var nowDay = now.getDay();
    var before = now;

    if (day > 0) {
    } else {
        var calcDay = Math.abs(day);
        var cnt = 0;
        for (var i=1;i<=calcDay;i++) {
            nowDay = nowDay - 1;
            cnt = cnt - 1;

            if (nowDay == 0) {
                nowDay = nowDay - 2;
                cnt = cnt - 2;
                nowDay = 5;
            }

            if (nowDay == 6) {
                nowDay = nowDay - 1;
                cnt = cnt - 1;
            }
        }
        before.setDate(nowDate - Math.abs(cnt));
        return WebSquare.date.getFormattedDate(before,"yyyyMMdd");
    }
};

//지난달의 workingday 를 count 한다
cm.getLastMonthWorkingDayCnt = function() {
    var nowDate = new Date();
    nowDate.setDate(0);	//지난달 말일 설정

    var lastDay = nowDate.getDate();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1;

    var dayCnt = 0;	//지난달 토일을 제외한 wokringday
    var beforeLastDay = 32;	//workingday 가 1보다 커지면 break 하기 위한 변수

    while (lastDay > 0) {//debugger;
        var dateObj = new Date(year+"-"+month+"-"+lastDay);
        var dateStr = cm.getWorkingDay(dateObj);

        if (dateStr != "" && dateStr != null) {
            lastDay = parseInt(dateStr.substring(6,8));

            //if (lastDay == 1) {debugger;}
            dayCnt++;
            if (lastDay > beforeLastDay) {
                break;
            }

            beforeLastDay = lastDay;
        }
    }
    return dayCnt;
};

cm.getGridViewColumnInfo = function(gridViewObj) {
	var columnInfo = [];
	var colCnt = gridViewObj.getTotalCol();
	for (var i=0;i<colCnt;i++) {
		var columnId = gridViewObj.getColumnID(i);
		var columnName = WebSquare.xml.findNode(WebSquare.xml.parse(gridViewObj.headerXml),"w2:header/w2:row/w2:column[" + (i+1) + "]/@value").nodeValue;
		var columnVisible = gridViewObj.getColumnVisible(i).toString();
		columnInfo.push({"columnId" : columnId, "columnVisible":columnVisible, "columnName":columnName});
	}
	return columnInfo;
};

cm.setGridViewColumnPop = function(gridViewId) {
	var gridViewObj = $p.getComponentById(gridViewId);
	var columnInfo = cm.getGridViewColumnInfo(gridViewObj);

	var closeCallbackFncName = "scwin.setGridCallback";

    var dataObject = {
        type: "json",
        data: {
            "message": columnInfo,
            "gridViewId": gridViewObj.getID(),
            "callbackFn": closeCallbackFncName
        },
        name: "columninfo_param"
    };
    var options = {
        id: "popup_columnSettingPop",
        popupName: "그리드뷰 컬럼 설정",
        title: "그리드뷰 컬럼 설정",
        width: 650,
        height: 700
    };
    cm.openPopup("/inquiry/columnSettingPop.xml", options, dataObject);
};

cm.setGridViewColumnVisible = function(setYnObj) {
	var scopeId = setYnObj.gridViewId + "_columnVisibleInfo";
	if (setYnObj.setYn == true) {

		var gridViewObj = $p.top().$p.getComponentById(setYnObj.gridViewId);
		var columnVisibleInfo = JSON.parse($p.top().$p.local.getItem(scopeId));

		columnVisibleInfo.forEach(function(rowData,rowIndex){
			gridViewObj.setColumnVisible(gridViewObj.getColumnIndex(rowData.columnId), rowData.columnVisible);
		});
	}
};

cm.getGridViewColumnVisible = function(gridViewId, inqueryCallback, searchFlag) {
	var gridViewObj = $p.getComponentById(gridViewId);
	var scopeId = gridViewObj.getID() + "_columnVisibleInfo";

	if ($p.top().$p.local.getItem(scopeId) != null) {
		var columnVisibleInfo = JSON.parse($p.top().$p.local.getItem(scopeId));

		columnVisibleInfo.forEach(function(rowData,rowIndex){
			gridViewObj.setColumnVisible(gridViewObj.getColumnIndex(rowData.columnId), rowData.columnVisible);
		});
	}

    if (typeof inqueryCallback != "undefined" && typeof inqueryCallback == "function") {
    	if (typeof searchFlag != "undefined" && searchFlag == true) {
    		inqueryCallback();
    	}
    }
};

cm.initGridViewColumnInfo = function(gridViewId) {

    cm.confirm("컬럼 정보를 초기화하겠습니까?", function(flag){
        if (flag) {
            var gridViewObj = $p.getComponentById(gridViewId);
            var scopeId = gridViewObj.getID() + "_columnVisibleInfo";
            $p.local.removeItem(scopeId);
            
            gridViewObj.setGridStyle(WebSquare.xml.parse(gridViewObj.getGridStyle()));
            
            /*
            var columnInfo = [];
            var colCnt = gridViewObj.getTotalCol();
            for (var i=0;i<colCnt;i++) {
                var columnId = gridViewObj.getColumnID(i);

                if (WebSquare.xml.findNode(WebSquare.xml.parse(gridViewObj.headerXml),"w2:header/w2:row/w2:column[" + (i+1) + "]/@hidden") != null || WebSquare.xml.findNode(WebSquare.xml.parse(gridViewObj.bodyXml),"w2:gBody/w2:row/w2:column[" + (i+1) + "]/@hidden") != null) {debugger;
                    var columnVisible = WebSquare.xml.findNode(WebSquare.xml.parse(gridViewObj.bodyXml),"w2:gBody/w2:row/w2:column[" + (i+1) + "]/@hidden").nodeValue;

                    if (columnVisible == "true") {
                        console.log(columnId + "_" + i + "_" +columnVisible);
                        gridViewObj.setColumnVisible(gridViewObj.getColumnIndex(columnId), "false");
                    } else {
                        console.log(columnId + "_" + i + "_" +columnVisible);
                        gridViewObj.setColumnVisible(gridViewObj.getColumnIndex(columnId), "true");
                    }
                } else {
                    console.log(columnId + "_" + i + "_" +columnVisible);
                    gridViewObj.setColumnVisible(gridViewObj.getColumnIndex(columnId), "true");
                }
            }
            */
        }
    });
};

cm.shbox_reset = function(e) {
    // 리셋 타입 추가 inputCalendar
    var rsComps = ["input","selectbox","calendar","inputCalendar"];

    var shbox = $(e.target).parents(".shbox")[0];
    var id = shbox.id;
    var shcomps = $w.getComponentById(id).getAllChildren();
    shcomps.forEach(function(elm,i){
        if(rsComps.indexOf(elm.options.pluginName) != -1){
            if(elm.options.pluginName == "calendar"){
                elm.parentControl.setValue("");
            }else{
                elm.setValue("");
            }
        }
    });
};

// 엔터키 체크 함수
cm.enter_check = function() {
    if(window.event.keyCode == 13) {
        // 엔터키를 눌렀을시 실행
    }
}
cm.chunkString = function(str, length) {
    //length의 길이 만큼 글자를 자른다.
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
    // 정규식으로 length의 길이만 큼 자라서 배열로 return 합니다.
}

cm.getOffset = function(component, positionName) {
    var offset = 0;
    offset += parseInt(component.getPosition(positionName));

    if(component.getParent() != null) {
        offset += cm.getOffset(component.getParent(), positionName);
    }

    return offset;
}

cm.isEmptyThen = function(v, def) {
    return cm.isEmpty(v) ? def : v;
}

cm.getGridColumnNames = function(gridId) {
	var columns = "";
	var grdObj = $p.getComponentById(gridId);
	for(var i=0;i<grdObj.getColumnCount();i++) {
	    if (grdObj.getColumnVisible(i) == true) {
	    	if (i == 0) {
	    		columns += "\t " + grdObj.getColumnID(i) + "\n\t,"
	    	} else {
	    		columns += grdObj.getColumnID(i) + "\n\t,"
	    	}
	    }
	}
    console.log(columns.substring(0,columns.length-1));
    return columns.substring(0,columns.length-1);
} 