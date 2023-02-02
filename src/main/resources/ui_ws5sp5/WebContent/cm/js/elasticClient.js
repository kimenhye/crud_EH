var elasticClient = {};
var elastic = elasticClient;
var ec = elasticClient;
var useSQLbyNLPchina = false;    // elasticsearch oss 7.10.2버전 사용으로 SQL기능을 별도 플러그인처리함. ( OpenDistro 사용 시 해결될 문제.)

elasticClient.totalCountMode = "track";	//전체 count 가져오는 방식 설정
elasticClient.totalCntFlag = false;
gcm.totalCount = 0;	//전체 count

//http://52.79.253.187:9200/{indexName}/_search
//elasticClient.elasticServerUrl = "http://52.79.253.187:9200";
//http://52.79.253.187:9200/{indexName}/_search
//elasticClient.elasticServerUrl = "http://localhost:8082/elastic";
elasticClient.elasticServerUrl = cm.logServerUrl+"/elastic";

elasticClient.createSubmissionElasticServer = function (indexName, submitDoneHandler, submitErrorHandler) {
    return cm.createSubmissionSimple(this.elasticServerUrl + "/" + indexName + "/_search", submitDoneHandler, submitErrorHandler);
}

elasticClient.executeSubmissionElasticServer = function (indexName, submitDoneHandler, submitErrorHandler, param, messageFlag, totalCntFlag) {
    var sbm = $p.getSubmission(elasticClient.createSubmissionElasticServer(indexName, elasticClient.submitDoneHandlerElasticServer(submitDoneHandler, submitErrorHandler), elasticClient.submitErrorHandlerElasticServer(submitErrorHandler)));
    
    elasticClient.totalCntFlag = totalCntFlag;
    if (totalCntFlag == true) {
    	param = elasticClient.setTotalCountMode(param);
    }
    
	if (messageFlag == true) {
		sbm.processMsg = "조회중입니다.";
	}
    $p.executeSubmission(sbm, param);
}

elasticClient.executeSubmissionElasticServerPeriod = function (submitDoneHandler, submitErrorHandler, indexName, fromDate8, toDate8) {
    fromDate8 = WebSquare.date.parseDate(fromDate8);
    toDate8 = WebSquare.date.dateAdd(toDate8, 1);
    toDate8 = WebSquare.date.parseDate(toDate8);

    indexName = indexName.toLowerCase() + "daily";
    var param = {
        "query": {
            "range": {
                "timeCreated": {
                    "gte": fromDate8,
                    "lt": toDate8
                }
            }
        },
        "size": 10000,	// 최대 10,000건 인듯, 그 이상 필요 시 search_after 기능 참조 (https://www.elastic.co/guide/en/elasticsearch/reference/current/paginate-search-results.html#search-after)
        "sort": [
            { "timeCreated": "desc" }
        ]
    };

    var sbm = $p.getSubmission(elasticClient.createSubmissionElasticServer(indexName + "_*", elasticClient.submitDoneHandlerElasticServer(submitDoneHandler, submitErrorHandler), elasticClient.submitErrorHandlerElasticServer(submitErrorHandler)));
    $p.executeSubmission(sbm, param);
}

elasticClient.submitDoneHandlerElasticServer = function (callbackDone, callbackError) {
    return function (e) {
        try {
            //debugger;
            $p.deleteSubmission(e.id);
            var data = JSON.parse(e.responseText);
            var list = data.hits.hits.map(function (e) {
                return e._source;
            });
            
            elasticClient.setTotalCount(data);
            
            callbackDone.call(this, e, list);
        } catch (ex) {
            callbackError.call(this, e, ex);
        }
    }
}

elasticClient.submitErrorHandlerElasticServer = function (callback) {
    return function (e) {
        // debugger;
        $p.deleteSubmission(e.id);
        callback.call(this, e);
        console.log(e);
    }
};

elasticClient.createSubmissionElasticServerSQL = function (submitDoneHandler, submitErrorHandler) {
    return cm.createSubmissionSimple(this.elasticServerUrl + (useSQLbyNLPchina ? "/_nlpcn/sql": "/_sql?format=json"), submitDoneHandler, submitErrorHandler);
}

elasticClient.executeSubmissionElasticServerSQL = function (submitDoneHandler, submitErrorHandler, sql, params, messageFlag) {
    var sbm = $p.getSubmission(elasticClient.createSubmissionElasticServerSQL(elasticClient.submitDoneHandlerElasticServerSQL(submitDoneHandler, submitErrorHandler), elasticClient.submitErrorHandlerElasticServerSQL(submitErrorHandler)));
    if(useSQLbyNLPchina) {
        param = { sql: elasticClient.mergeStatement(sql, params) };
    } else {
        param = { query: sql, params: params, field_multi_value_leniency: true };
    }
    
	if (messageFlag == true) {
		sbm.processMsg = "조회중입니다.";
	}    
    
    $p.executeSubmission(sbm, param);
}

elasticClient.submitDoneHandlerElasticServerSQL = function (callbackDone, callbackError) {
    return function (e) {
        try {
            $p.deleteSubmission(e.id);

            var data = e.responseJSON;
            var array = [];
            if(data.cursor) {
                elasticClient.clearCursor(data.cursor);
            }
            data.rows.forEach(function (r, ridx) {
                var row = {};
                data.columns.forEach(function (c, cidx) {
                    row[c.name] = r[cidx];
                });
                array.push(row);
            });

            callbackDone.call(this, e, array);
        } catch (ex) {
            callbackError.call(this, e, ex);
        }
    }
}

elasticClient.submitErrorHandlerElasticServerSQL = function (callback) {
    return function (e) {
        callback.call(this, e);
        $p.deleteSubmission(e.id);
    }
};

elasticClient.mergeStatement = function(sql, param) {
    if(Array.isArray(param)) {
        param.forEach(function(e) {
            if(typeof e === "number" || typeof instance === "bigint") {
                sql = sql.replace("?", e);
            } else {
                sql = sql.replace("?", "'" + e + "'");
            }
        });
    }
    return sql;
}

elasticClient.sql = elasticClient.executeSubmissionElasticServerSQL;
elasticClient.search = elasticClient.executeSubmissionElasticServer;
elasticClient.dsl = elasticClient.search;
elasticClient.searchPeriod = elasticClient.executeSubmissionElasticServerPeriod;

elasticClient.clearCursor = function(cursor) {
    var sbm = cm.createSubmissionSimple(this.elasticServerUrl + ("/_sql/close"),function(e){$p.deleteSubmission(e.id);},function(e){$p.deleteSubmission(e.id);});
    var param = { cursor: cursor };
    $p.executeSubmission(sbm, param);
}

//조회 total count 설정 방식 
elasticClient.setTotalCountMode = function(reqQuery) {
	if (elasticClient.totalCountMode == "cardinality") {
		reqQuery.aggs = {
			"total_count": {
			  "cardinality": {
			    "field": "_id", "precision_threshold": 100
			  }
			}
		};    	
	} else if (elasticClient.totalCountMode == "track") {
        if (typeof reqQuery.search_after != "undefined" && reqQuery.search_after[0] > 0) {
	    	reqQuery.track_total_hits = 10000;	//추가 조회시에는 10000건으로 제한한다
		} else {
			reqQuery.track_total_hits = true;
		}    	
	}
	
	return reqQuery; 
};

//total count 를 전역 변수에 저장
elasticClient.setTotalCount = function(data) {
	gcm.totalCount = 0;	//초기화

	if (elasticClient.totalCntFlag == false) {
		var totalCnt = data.hits.hits.length;
		if (totalCnt >= 10000) {
			gcm.totalCount = "10000건 이상";
		} else {
			gcm.totalCount = totalCnt;
		}
		return;
	}
	
	if (elasticClient.totalCountMode == "cardinality") {
		if (data.aggregations && data.aggregations.total_count) {
			gcm.totalCount = data.aggregations.total_count.value || 0;
		}
	} else if (elasticClient.totalCountMode == "track") {
		if (data.hits && data.hits.total) {
			gcm.totalCount = data.hits.total.value || 0;
		}
	}
};