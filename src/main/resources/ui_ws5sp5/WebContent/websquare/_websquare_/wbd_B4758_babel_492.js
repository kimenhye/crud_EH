(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[492],{2492:function(t,e,i){"use strict";i.r(e),i.d(e,{fwSparkChart:function(){return u}});var s=i(2137),o=i(7757),a=i.n(o),r=i(9122),n=i(7827),l=i(1160),h=i(8754),p=i(6079),c=i(7870),u=function(t,e,i){c.s.call(this,t,e,i)};r.x.extend(u.prototype,c.s.prototype),u.prototype.defaultOptions={pluginType:"uiplugin.fwSparkChart",pluginName:"fwSparkChart",useConfig:!0,accessibility:!1,chartType:"sparkline",seriesType:"simple",version:"3.7"},u.prototype.initialize=function(t){this.fcObj=null,this.chartObj={},this.attributeObj=null},u.prototype.initAsync=(0,s.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("undefined"!=typeof FusionCharts){t.next=21;break}if("3.15"!==this.options.version&&(this.options.version||"3.15"!=n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=7;break}return this.options.version="3.15",t.next=5,inquires("externalJS/FusionCharts3.15.2/FusionCharts_all.js");case 5:t.next=21;break;case 7:if("3.13"!==this.options.version&&(this.options.version||"3.13"!=n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=13;break}return this.options.version="3.13",t.next=11,inquires("externalJS/FusionCharts3.13/js/FusionCharts_all.js");case 11:t.next=21;break;case 13:if("3.11"!=this.options.version&&(this.options.version||"3.11"!=n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=19;break}return this.options.version="3.11",t.next=17,inquires("externalJS/FusionCharts3.11.0/FusionCharts_all.js");case 17:t.next=21;break;case 19:return t.next=21,inquires("externalJS/FusionCharts3.7/FusionCharts_all.js");case 21:case"end":return t.stop()}}),t,this)}))),u.prototype.toHTML=function(){var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+e+" class='w2fwSparkChart "+this.options.className+"'>"),t.push("</div>"),t.join("")},u.prototype.setAction=function(){try{if(this.fcObj=new FusionCharts(this.options.chartType,"fw_spark_"+this.id,"100%",this.render.offsetHeight||"100%"),this.setDefaultOption(),this.modelControl.isDataCollectionRefBinded){var t,e=this.modelControl.dataCollectionRefInfo.dataComp;if("simple"==this.options.seriesType.toLowerCase()){if(e.getRowCount()>0)(t=e.getFusionChartSimpleData(this.options.chartType,this.options.labelNode,this.options.seriesNode,this.options.valueNode))?("3"===FusionCharts.version[0]&&"13"===FusionCharts.version[1]&&(t={dataset:[t]}),this.setJSONData(t)):p.k.printLog(this.id+" : Simple seriesType does not support")}else if(e.getRowCount()>0)(t=e.getFusionChartData(this.options.chartType,this.options.labelNode,this.options.seriesColumns))&&("3"===FusionCharts.version[0]&&"13"===FusionCharts.version[1]&&(t={dataset:[t]}),this.setJSONData(t))}}catch(t){l.w.printStackTrace(t)}},u.prototype.refresh=function(){try{if(this.modelControl.isDataCollectionRefBinded){var t,e=this.modelControl.dataCollectionRefInfo.dataComp;if("simple"==this.options.seriesType.toLowerCase())(t=e.getFusionChartSimpleData(this.options.chartType,this.options.labelNode,this.options.seriesNode,this.options.valueNode))?("3"===FusionCharts.version[0]&&"13"===FusionCharts.version[1]&&(t={dataset:[t]}),this.setJSONData(t)):p.k.printLog(this.id+" : Simple seriesType does not support");else(t=e.getFusionChartData(this.options.chartType,this.options.labelNode,this.options.seriesColumns))&&("3"===FusionCharts.version[0]&&"13"===FusionCharts.version[1]&&(t={dataset:[t]}),this.setJSONData(t))}}catch(t){l.w.printStackTrace(t)}},u.prototype.setJSONData=function(t){try{this.chartObj=t,this.draw()}catch(t){l.w.printStackTrace(t)}},u.prototype.getJSONData=function(){try{return this.fcObj.getJSONData()}catch(t){l.w.printStackTrace(t)}},u.prototype.fc=function(){try{return FusionCharts.items["fw_spark_"+this.id]}catch(t){l.w.printStackTrace(t)}},u.prototype.draw=function(){try{
null!=this.attributeObj&&this._setChartAttribute(this.attributeObj),null!=this.attributeObj&&(this.chartObj.chart=this.attributeObj);var t=this.fc();t.setJSONData(this.chartObj),t.isActive()||t.render(this.id),1==this.options.accessibility&&this.setAccessibility(!0)}catch(t){l.w.printStackTrace(t)}},u.prototype.setDefaultOption=function(){try{var t={showborder:"1",animation:"1",bgcolor:"FFFFFF",canvasbgcolor:"FFFFFF",showplotborder:"0",divlinethickness:"1",canvasbordercolor:"FFFFFF",showalternatehgridcolor:"0",showvalues:"0",plotgradientcolor:"",showalternatevgridcolor:"0",divlinecolor:"b3b3b3",bordercolor:"b3b3b3",use3dlighting:"0",showshadow:"0",formatnumberscale:"0",plotFillColor:"#0075c2",highColor:"#1aaf5d",lowColor:"#8e0000",showHoverEffect:"1"};for(var e in t)this.attributeObj&&void 0!==this.attributeObj[e]&&(t[e]=this.attributeObj[e]);this.setChartAttribute(t)}catch(t){l.w.printStackTrace(t)}},u.prototype.setChartAttribute=function(t){try{for(var e in null==this.attributeObj&&(this.attributeObj={}),t)t.hasOwnProperty(e)&&(this.attributeObj[e.toLowerCase()]=t[e])}catch(t){l.w.printStackTrace(t)}},u.prototype._setChartAttribute=function(t){try{this.chartObj.chart=t}catch(t){l.w.printStackTrace(t)}},u.prototype.getChartAttribute=function(t){try{return FusionCharts.items["fw_spark_"+this.id].getChartAttribute(t)}catch(t){l.w.printStackTrace(t)}},u.prototype.setChartColumnRef=function(t,e,i){try{if(t=h.D.isNull(t)?this.options.ref:t,e=h.D.isNull(e)?this.options.labelNode:e,i=h.D.isNull(i)?this.options.seriesColumns:i,this.options.ref!=t){""!=this.options.ref&&this.modelControl.dataCollectionRefInfo.dataComp.removeChild(this.id);var s=t.replace("data:","");WebSquare.api.data[s].addChild(h.D.getComponentById(this.id))}this.options.ref=t,this.options.labelNode=e,this.options.seriesColumns=i,this.modelControl.useRef=!0,this.modelControl.setRef(t),this.refresh()}catch(t){l.w.printStackTrace(t)}},u.prototype.setChartColumnSimpleRef=function(t,e,i,s){try{if(t=h.D.isNull(t)?this.options.ref:t,e=h.D.isNull(e)?this.options.labelNode:e,i=h.D.isNull(i)?this.options.seriesNode:i,s=h.D.isNull(s)?this.options.valueNode:s,this.options.ref!=t){""!=this.options.ref&&this.modelControl.dataCollectionRefInfo.dataComp.removeChild(this.id);var o=t.replace("data:","");WebSquare.api.data[o].addChild(h.D.getComponentById(this.id))}this.options.ref=t,this.options.labelNode=e,this.options.seriesNode=i,this.options.valueNode=s,this.modelControl.useRef=!0,this.modelControl.setRef(t),this.refresh()}catch(t){l.w.printStackTrace(t)}},u.prototype.exportJSChart=function(t){try{t||(t="jpg");var e=this.options.id||"fusionChart",i=this.getSVGString();if(i){var s=encodeURI(i+"ExportType="+t+"ExportFileName="+e),o=r.x._resourceURI+"engine/servlet/exportFusionChart.jsp";n.v.download(o,s,"post")}}catch(t){l.w.printStackTrace(t)}},u.prototype.getSVGString=function(){try{var t=this.fc().getSVGString();if(t)return t=(t=(t=(t=(t=t.wq_replaceAll('shape-rendering="default"',"shape-rendering='auto'")).wq_replaceAll('visibility=""',"visibility='inherit'")).wq_replaceAll('text-anchor="undefined"',"text-anchor='start'")).wq_replaceAll("1e-006","0.000001")).wq_replaceAll('font-family="15"','font-family="Verdana"');p.k.printLog("not found svg object")}catch(t){l.w.printStackTrace(t)}},u.prototype.setAccessibility=function(t){try{if(1==t){var e="",i="";if(null==document.getElementById("accessibility_"+this.id)){var s=this.render;(p=document.createElement("ul")).id="accessibility_"+this.id,WebSquare.style.addClass(p,"w2fusionchart_accessibility");var o=this.chartObj,a=this.attributeObj.caption,r=document.createElement("li");a&&(r.innerHTML="title : "+a,p.appendChild(r));for(var n=0;n<o.data.length;n++){var h=document.createElement("li");o.data[n]?(e=o.data[n].label?o.data[n].label:o.data[n].LABEL,i=o.data[n].value?o.data[n].value:o.data[n].VALUE):(e="",i=""),h.innerHTML="label : "+e+", value : "+i,p.appendChild(h)}s.insertBefore(p,s.lastChild)}else{var p
;(p=document.getElementById("accessibility_"+this.id)).innerHTML="";o=this.chartObj,a=this.attributeObj.caption,r=document.createElement("li");a&&(r.innerHTML="title : "+a,p.appendChild(r));for(n=0;n<o.data.length;n++){h=document.createElement("li");o.data[n]?(e=o.data[n].label?o.data[n].label:o.data[n].LABEL,i=o.data[n].value?o.data[n].value:o.data[n].VALUE):(e="",i=""),h.innerHTML="label : "+e+", value : "+i,p.appendChild(h)}}}else{var c=this.render,u=c.getElementsByClassName("w2fusionchart_accessibility");null!=u&&0!=u.length&&(u=u[0],c.removeChild(u)),c=null,u=null}}catch(t){l.w.printStackTrace(t)}},u.prototype.getDataListInfo=function(){try{var t={};if(this.modelControl.isDataCollectionRefBinded){var e=this.options.ref.replace("data:","");return t.id=e.slice(0),"simple"==this.options.seriesType.toLowerCase()?(t.ref=this.options.ref,t.labelNode=this.options.labelNode,t.serieNode=this.options.seriesNode,t.valueNode=this.options.valueNode):(t.ref=this.options.ref,t.labelNode=this.options.labelNode,t.seriesColumns=this.options.seriesColumns),t}return null}catch(t){l.w.printStackTrace(t)}}}}]);