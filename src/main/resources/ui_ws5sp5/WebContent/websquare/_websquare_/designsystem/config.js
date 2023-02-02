export default {
  "WebSquare": {
    "convertPageXML": {
      "@value": "true"
    },
    "wpack": {
      "@use": "true",
      "contextRoot": {
        "@value": "/"
      },
      "srcExtension": {
        "@value": "xml"
      },
      "destExtension": {
        "@value": "js"
      },
      "destRoot": {
        "@value": "_wpack_"
      }
    },
    "allValue": {
      "@value": "all"
    },
    "docType": {
      "@value": "standard"
    },
    "debug": {
      "@remoteConsole": "false",
      "@value": "true"
    },
    "debugKey": {
      "@value": ""
    },
    "language": {
      "@value": "ko"
    },
    "useItemLocale": {
      "@value": "false"
    },
    "date": {
      "serverDate": {
        "@enable": "false",
        "@localInterval": "5000",
        "@requestInterval": "60000"
      }
    },
    "exceptionHandler": {
      "@value": "websquare"
    },
    "debugMenu": {
      "@value": "use"
    },
    "welcome-file": {},
    "postDrawMode": {
      "@value": "synchronous"
    },
    "forcedValueSetting": {
      "@value": "true"
    },
    "processMsgHeight": {
      "@value": "81"
    },
    "processMsgWidth": {
      "@value": "295"
    },
    "processMsgBackground": {
      "@backgroundColor": "#112233",
      "@value": "true"
    },
    "byteCheckEncoding": {
      "@value": "euc-kr"
    },
    "initScript": {
      "@value": "false"
    },
    "clearMemory": {
      "@value": "false"
    },
    "stylesheet": {
      "@earlyImportList": "/cm/css/all.css,/cm/css/contents.css,/cm/css/print.min.css,/cm/css/atom-one-dark.min.css,/cm/js/diff2html/css/diff2html.min.css",
      "@enable": "true",
      "@import": "link",
      "@value": "stylesheet_ext.css"
    },
    "style": {
      "removeDefaultClass": {
        "@value": "true"
      }
    },
    "engine": {
      "module": [
        {
          "@src": "./cm/js/common.js"
        },
        {
          "@src": "./cm/js/FileSaver.js"
        },
        {
          "@src": "./cm/js/elasticClient.js"
        },
        {
          "@src": "./cm/js/wgear.js"
        },
        {
          "@src": "./cm/js/highlight.min.js"
        },
        {
          "@src": "./cm/js/xlsx/xlsx.js"
        },
        {
          "@src": "./cm/js/xlsx/jszip.js"
        },
        {
          "@src": "./cm/js/xlsx/dist/cpexcel.js"
        },
        {
          "@src": "./cm/js/sheetjs-style/xlsx.js"
        },
        {
          "@src": "./cm/js/sheetjs-style/jszip.js"
        },
        {
          "@src": "./cm/js/sheetjs-style/dist/cpexcel.js"
        },
        {
          "@src": "./cm/js/context-menu/context-menu.js"
        },
        {
          "@src": "./cm/js/timeago.full.min.js"
        },
        {
          "@src": "./cm/js/cron-schedule.iife.min.js"
        },
        {
          "@src": "./cm/js/diff2html/js/diff2html-ui.min.js"
        },
        {
          "@src": "./cm/js/timeago.full.min.js"
        },
        {
          "@src": "./cm/js/echarts.min.js"
        },
        {
          "@src": "./cm/chartConfig/doughnut1.js"
        },
        {
          "@src": "./cm/chartConfig/stack1.js"
        },
        {
          "@src": "./cm/chartConfig/bar1.js"
        },
        {
          "@src": "./cm/chartConfig/bar2.js"
        },
        {
          "@src": "./cm/chartConfig/bar3.js"
        },
        {
          "@src": "./cm/chartConfig/line1.js"
        },
        {
          "@src": "./cm/chartConfig/line2.js"
        },
        {
          "@src": "./cm/chartConfig/line3.js"
        },
        {
          "@src": "./cm/chartConfig/line4.js"
        },
        {
          "@src": "./cm/chartConfig/pie1.js"
        },
        {
          "@src": "./cm/chartConfig/scatter1.js"
        },
        {
          "@src": "./cm/js/download.js"
        },
        {
          "@src": "./scm/accessMap.js"
        }
      ]
    },
    "ModelUtil": {
      "copyChildrenNodes": {
        "@refresh": "false"
      }
    },
    "preProcessor": {
      "systemPreProcessor": {
        "@value": ""
      },
      "businessPreProcessor": {
        "@value": ""
      }
    },
    "workflow": {
      "processMsg": {
        "@value": ""
      },
      "makeGlobalObject": {
        "@value": "true"
      }
    },
    "submission": {
      "processMsg": {
        "@value": ""
      },
      "showSubmissionTime": {
        "@value": "true"
      },
      "requestHeaderFunction": {
        "@value": "cm._sbm_setRequestHeader"
      },
      "preSubmitFunction": {
        "@value": "gcm.sbm._preSubmitFunction"
      },
      "callbackSubmitFunction": {
        "@value": "gcm.sbm._callbackSubmitFunction"
      },
      "submitErrorHandler": {
        "@value": "gcm.sbm._errorHandler"
      },
      "requestID": {
        "@value": ""
      },
      "makeGlobalObject": {
        "@value": "true"
      }
    },
    "visibleHelper": {
      "targetHandler": {
        "@value": ""
      }
    },
    "spa": {
      "onpageunload": {
        "@value": ""
      },
      "variable": {
        "@clone": "cm, elasticClient",
        "@value": "scwin"
      },
      "scriptCache": {
        "@value": "true"
      },
      "autoReload": {
        "@count": "50",
        "@value": "true"
      }
    },
    "scriptLoading": {
      "@merge": "true"
    },
    "scriptPrecedence": {
      "@value": "true"
    },
    "strictMode": {
      "@id": "mf",
      "@value": "true"
    },
    "engineCache": {
      "@compression": "true",
      "@enable": "true",
      "@postfix": "month"
    },
    "userAgentPattern": {
      "@XPathParser": "Edge|Trident|MSIE"
    },
    "preserveWhiteSpace": {
      "@value": "false"
    },
    "environment": {
      "@cache": "nocache",
      "@mode": "production",
      "@postfix": "day"
    },
    "script": {
      "@postfix": "environment"
    },
    "emptyTag": {
      "@value": "area,base,basefont,br,col,frame,hr,img,input,link,meta,param"
    },
    "engineLoadingMode": {
      "@android": "0",
      "@chrome": "0",
      "@ie": "0",
      "@iphone": "0",
      "@moz": "0",
      "@opera": "0",
      "@safari": "0"
    },
    "engineChunkNum": {
      "@value": "1"
    },
    "dataList": {
      "removeDummyRowStatus": {
        "@value": "true"
      },
      "removedDataMatch": {
        "@value": "true"
      },
      "saveRemovedDataDeletedInsertedRow": {
        "@value": "false"
      }
    },
    "grid": {
      "noSelect": {
        "@value": "true"
      },
      "rowNumStatusUniqueId": {
        "@value": "true"
      },
      "drilldownRealRowIndexAll": {
        "@value": "true"
      },
      "collectGarbage": {
        "@value": "none"
      },
      "fastScroll": {
        "@value": "true"
      },
      "dataType": {
        "date": {
          "@displayFormat": "yyyy-MM-dd"
        }
      },
      "editType": {
        "@value": "focus"
      },
      "rowNumBackgroundColor": {
        "@value": "#e5eff7"
      },
      "selectedRowColor": {
        "@value": "#fcf8e3"
      },
      "oddEvenColorDisplay": {
        "@value": "true"
      },
      "evenRowBackgroundColor": {
        "@value": "#f5f5f5"
      },
      "oddRowBackgroundColor": {
        "@value": "#ffffff"
      },
      "rowMouseOver": {
        "@value": "true"
      },
      "rowMouseOverColor": {
        "@value": "#edf3fb"
      },
      "tooltipStyle": {
        "@value": "padding:1px 3px 0;line-height:14px;font-size:12px;border:0;background-color:#5c85d4;color:#fff"
      },
      "noResultMessageVisible": {
        "@value": "true"
      },
      "noResultMessage": {
        "@value": "데이터가 없음"
      },
      "noResultMessageStyle": {
        "@value": "position:absolute; left:40%; width:20%; top:40%; border:1px solid #b3b3b3; color:#383d41; font-size:12px; padding:5px; text-align:center; background:#fafafa"
      },
      "pasteMessage": {
        "@value": "데이터 붙이는 중"
      },
      "getColumnVisible": {
        "@useRealColIndex": "true"
      },
      "checkDisabledOnPaste": {
        "@value": "true"
      },
      "checkReadOnlyOnPaste": {
        "@value": "true"
      },
      "colIdToColIndex": {
        "@value": "true"
      },
      "column": [
        {
          "@inputType": "text",
          "editType": {
            "@value": "select"
          }
        },
        {
          "@inputType": "select",
          "chooseOptionLabel": {
            "@value": "-선택-"
          }
        },
        {
          "@inputType": "calendar",
          "dataType": {
            "@value": "date"
          },
          "displayFormat": [
            {
              "@value": "yyyy-MM",
              "@valueType": "yearMonth"
            },
            {
              "@value": "yyyy-MM-dd",
              "@valueType": "yearMonthDate"
            },
            {
              "@value": "yyyy-MM-dd HH:mm",
              "@valueType": "yearMonthDateTime"
            },
            {
              "@value": "yyyy-MM-dd HH:mm:SS",
              "@valueType": "yearMonthDateTimeSec"
            }
          ]
        }
      ]
    },
    "gridView": {
      "copyOption": {
        "@value": "dataList"
      },
      "sortable": {
        "@value": "true"
      },
      "noSelect": {
        "@value": "true"
      },
      "drilldownFooterExpressionAllData": {
        "@value": "true"
      },
      "rowNumStatusUniqueId": {
        "@value": "true"
      },
      "preventMultipleClick": {
        "@value": "true"
      },
      "drilldownRealRowIndexAll": {
        "@value": "true"
      },
      "collectGarbage": {
        "@value": "none"
      },
      "fastScroll": {
        "@value": "true"
      },
      "dataType": {
        "date": {
          "@displayFormat": "yyyy-MM-dd"
        }
      },
      "editType": {
        "@value": "focus"
      },
      "rowNumBackgroundColor": {
        "@value": "#e5eff7"
      },
      "selectedRowColor": {
        "@value": "#fcf8e3"
      },
      "oddEvenColorDisplay": {
        "@value": "true"
      },
      "evenRowBackgroundColor": {
        "@value": "#f5f5f5"
      },
      "oddRowBackgroundColor": {
        "@value": "#ffffff"
      },
      "rowMouseOver": {
        "@value": "true"
      },
      "rowMouseOverColor": {
        "@value": "#edf3fb"
      },
      "tooltipStyle": {
        "@value": "padding:1px 3px 0;line-height:14px;font-size:12px;border:0;background-color:#5c85d4;color:#fff"
      },
      "noResultMessageVisible": {
        "@value": "true"
      },
      "noResultMessage": {
        "@value": "데이터가 없음"
      },
      "noResultMessageStyle": {
        "@value": "position:absolute; left:40%; width:20%; top:40%; border:1px solid #b3b3b3; color:#383d41; font-size:12px; padding:5px; text-align:center; background:#fafafa"
      },
      "pasteMessage": {
        "@value": "데이터 붙이는 중"
      },
      "getColumnVisible": {
        "@useRealColIndex": "true"
      },
      "checkDisabledOnPaste": {
        "@value": "true"
      },
      "checkReadOnlyOnPaste": {
        "@value": "true"
      },
      "colIdToColIndex": {
        "@value": "true"
      },
      "column": [
        {
          "@inputType": "text",
          "editType": {
            "@value": "select"
          }
        },
        {
          "@inputType": "select",
          "chooseOptionLabel": {
            "@value": "-선택-"
          },
          "eventPriority": {
            "@value": "oneditend"
          }
        },
        {
          "@inputType": "calendar",
          "dataType": {
            "@value": "date"
          },
          "displayFormat": [
            {
              "@value": "yyyy",
              "@valueType": "year"
            },
            {
              "@value": "yyyy-MM",
              "@valueType": "yearMonth"
            },
            {
              "@value": "yyyy-MM-dd",
              "@valueType": "yearMonthDate"
            },
            {
              "@value": "yyyy-MM-dd HH:mm",
              "@valueType": "yearMonthDateTime"
            },
            {
              "@value": "yyyy-MM-dd HH:mm:SS",
              "@valueType": "yearMonthDateTimeSec"
            }
          ]
        }
      ]
    },
    "inputCalendar": {
      "validCheck": {
        "@value": "false"
      },
      "dataType": {
        "@value": "date"
      },
      "delimiter": {
        "@value": "-"
      },
      "mask": {
        "@value": "MM-dd-yyyy"
      },
      "delimiterLocaleKey": {
        "@value": "IC_Delimiter"
      },
      "maskLocaleKey": {
        "@value": "IC_Mask"
      },
      "calendarImage": {
        "@value": ""
      },
      "calendarImageOver": {
        "@value": ""
      }
    },
    "input": {
      "focusStyle": {
        "@value": ""
      },
      "dateMask": {
        "@value": "yyyy-MM-dd"
      },
      "timeMask": {
        "@value": "HH:mm"
      },
      "focusCalcSize": {
        "@value": "false"
      }
    },
    "calendar": {
      "minYear": {
        "@value": "1978"
      },
      "maxYear": {
        "@value": "2030"
      }
    },
    "selectbox": {
      "visibleRowNum": {
        "@value": "10"
      },
      "dataListAutoRefresh": {
        "@value": "true"
      }
    },
    "tabControl": {},
    "treeview": {
      "tooltipGroupClass": {
        "@value": "false"
      }
    },
    "trigger": {
      "preventMultipleClick": {
        "@value": "true"
      }
    },
    "anchor": {
      "preventMultipleClick": {
        "@value": "true"
      }
    },
    "wframe": {
      "mode": {
        "@value": "sync"
      },
      "scope": {
        "@value": "true"
      }
    },
    "pageInherit": {
      "mode": {
        "@value": "sync"
      }
    },
    "windowContainer": {
      "tooltipGroupClass": {
        "@value": "false"
      },
      "getWindow": {
        "@searchTarget": "windowId"
      },
      "displayOnlyTopWindow": {
        "@value": "true"
      }
    },
    "pageList": {},
    "radio": {
      "nameScope": {
        "@value": "true"
      }
    },
    "body": {
      "toolTipSec": {
        "@value": "1"
      }
    },
    "editor": {
      "version": {
        "@value": "4.11.3"
      }
    },
    "fusionchart": {},
    "languagePack": {
      "@useLanguagePack": "false",
      "url": [
        {
          "@lang": "ko",
          "@value": "/langpack/ko.js"
        },
        {
          "@lang": "en",
          "@value": "/langpack/en.js"
        },
        {
          "@lang": "ch",
          "@value": "/langpack/ch.js"
        }
      ]
    },
    "license": {
      "@value": "true"
    },
    "pageURLPrefix": {
      "@ignoreW2xPath": "true",
      "@type": "function",
      "@value": "gcm.getServerURLWithPrefix"
    }
  }
}