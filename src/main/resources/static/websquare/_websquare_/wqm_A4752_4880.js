(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[4880],{4880:(t,e,i)=>{"use strict";i.r(e),i.d(e,{fwPyramidChart:()=>h});var o=i(5405),a=i(465),s=i(5130),r=i(209),n=i(6342),l=i(6247),h=function(t,e,i){l.s.call(this,t,e,i)};o.x.extend(h.prototype,l.s.prototype),h.prototype.defaultOptions={pluginType:"uiplugin.fwPyramidChart",pluginName:"fwPyramidChart",useConfig:!0,accessibility:!1,seriesType:"advanced",plotColor:"2ec6c8,b5a1dd,5ab0ee,f4984e,d77a80,90bddc,fe5d55,b5dc59,9ea7b3,00ba84,878bb6,757a85",version:"3.7"},h.prototype.initialize=function(t){this.fcObj=null,this.chartObj={},this.attributeObj=null,this.plotColorObj=null},h.prototype.initAsync=async function(){"undefined"==typeof FusionCharts&&("3.15"===this.options.version||!this.options.version&&"3.15"==a.v.getConfiguration("/WebSquare/fusionchart/version/@value")?(this.options.version="3.15",await inquires("externalJS/FusionCharts3.15.2/FusionCharts_all.js")):"3.13"===this.options.version||!this.options.version&&"3.13"==a.v.getConfiguration("/WebSquare/fusionchart/version/@value")?(this.options.version="3.13",await inquires("externalJS/FusionCharts3.13/js/FusionCharts_all.js")):"3.11"==this.options.version||!this.options.version&&"3.11"==a.v.getConfiguration("/WebSquare/fusionchart/version/@value")?(this.options.version="3.11",await inquires("externalJS/FusionCharts3.11.0/FusionCharts_all.js")):await inquires("externalJS/FusionCharts3.7/FusionCharts_all.js"))},h.prototype.toHTML=function(){var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+e+" class='w2fwPyramidChart "+this.options.className+"'>"),t.push("</div>"),t.join("")},h.prototype.setAction=function(){try{if(this.fcObj=new FusionCharts("pyramid","fw_pyramid_"+this.id,"100%",this.render.offsetHeight||"100%"),this.setDefaultOption(),this.modelControl.isDataCollectionRefBinded){var t,e=this.modelControl.dataCollectionRefInfo.dataComp;if("simple"==this.options.seriesType.toLowerCase()){if(e.getRowCount()>0)(t=e.getFusionChartSimpleData("pyramid",this.options.labelNode,this.options.seriesNode,this.options.valueNode))?this.setJSONData(t):n.k.printLog(this.id+" : Simple seriesType does not support")}else if(e.getRowCount()>0)(t=e.getFusionChartData("pyramid",this.options.labelNode,this.options.seriesColumns))&&this.setJSONData(t)}}catch(t){s.w.printStackTrace(t)}},h.prototype.refresh=function(){try{if(this.modelControl.isDataCollectionRefBinded){var t,e=this.modelControl.dataCollectionRefInfo.dataComp;if("simple"==this.options.seriesType.toLowerCase())(t=e.getFusionChartSimpleData("pyramid",this.options.labelNode,this.options.seriesNode,this.options.valueNode))?this.setJSONData(t):n.k.printLog(this.id+" : Simple seriesType does not support");else(t=e.getFusionChartData("pyramid",this.options.labelNode,this.options.seriesColumns))&&this.setJSONData(t)}}catch(t){s.w.printStackTrace(t)}},h.prototype.setJSONData=function(t){try{this.chartObj=t;var e=this.options.plotColor.split(",");this.setPlotDefaultColor(e),this.draw()}catch(t){s.w.printStackTrace(t)}},h.prototype.getJSONData=function(){try{return this.fcObj.getJSONData()}catch(t){s.w.printStackTrace(t)}},h.prototype.fc=function(){try{return FusionCharts.items["fw_pyramid_"+this.id]}catch(t){s.w.printStackTrace(t)}},h.prototype.draw=function(){try{null!=this.attributeObj&&this._setChartAttribute(this.attributeObj),null!=this.plotColorObj&&this._setPlotColor(this.plotColorObj),null!=this.attributeObj&&(this.chartObj.chart=this.attributeObj);var t=this.fc();t.setJSONData(this.chartObj),t.isActive()||t.render(this.id),1==this.options.accessibility&&this.setAccessibility(!0)}catch(t){s.w.printStackTrace(t)}},h.prototype.setDefaultOption=function(){try{var t={showborder:"1",animation:"1",bgcolor:"FFFFFF",canvasbgcolor:"FFFFFF",showplotborder:"0",divlinethickness:"1",canvasbordercolor:"FFFFFF",showalternatehgridcolor:"0",showvalues:"0",plotgradientcolor:"",showalternatevgridcolor:"0",
divlinecolor:"b3b3b3",bordercolor:"b3b3b3",use3dlighting:"0",showshadow:"0",formatnumberscale:"0"};for(var e in t)this.attributeObj&&void 0!==this.attributeObj[e]&&(t[e]=this.attributeObj[e]);this.setChartAttribute(t)}catch(t){s.w.printStackTrace(t)}},h.prototype.setPlotDefaultColor=function(t){try{var e=this.chartObj;if(null!=e.dataset)for(var i=0;i<e.dataset.length&&!(i>=t.length);i++)e.dataset[i].color=t[i];else if(null!=e.data)for(var o=0;o<e.data.length&&!(o>=t.length);o++)e.data[o].color=t[o]}catch(t){s.w.printStackTrace(t)}},h.prototype.setChartAttribute=function(t){try{for(var e in null==this.attributeObj&&(this.attributeObj={}),t)t.hasOwnProperty(e)&&(this.attributeObj[e.toLowerCase()]=t[e])}catch(t){s.w.printStackTrace(t)}},h.prototype._setChartAttribute=function(t){try{this.chartObj.chart=t}catch(t){s.w.printStackTrace(t)}},h.prototype.setPlotColor=function(t){try{this.plotColorObj=t}catch(t){s.w.printStackTrace(t)}},h.prototype._setPlotColor=function(t){try{var e=this.chartObj;if(null!=e.dataset)for(var i=0;i<e.dataset.length&&!(i>=t.length);i++)e.dataset[i].color=t[i];else if(null!=e.data)for(i=0;i<e.data.length&&!(i>=t.length);i++)e.data[i].color=t[i]}catch(t){s.w.printStackTrace(t)}},h.prototype.getChartAttribute=function(t){try{return FusionCharts.items["fw_pyramid_"+this.id].getChartAttribute(t)}catch(t){s.w.printStackTrace(t)}},h.prototype.setChartColumnRef=function(t,e,i){try{if(t=r.D.isNull(t)?this.options.ref:t,e=r.D.isNull(e)?this.options.labelNode:e,i=r.D.isNull(i)?this.options.seriesColumns:i,this.options.ref!=t){""!=this.options.ref&&this.modelControl.dataCollectionRefInfo.dataComp.removeChild(this.id);var o=t.replace("data:","");WebSquare.DataCollection.comp[o].addChild(r.D.getComponentById(this.id))}this.options.ref=t,this.options.labelNode=e,this.options.seriesColumns=i,this.modelControl.useRef=!0,this.modelControl.setRef(t),this.refresh()}catch(t){s.w.printStackTrace(t)}},h.prototype.setChartColumnSimpleRef=function(t,e,i,o){try{if(t=r.D.isNull(t)?this.options.ref:t,e=r.D.isNull(e)?this.options.labelNode:e,i=r.D.isNull(i)?this.options.seriesNode:i,o=r.D.isNull(o)?this.options.valueNode:o,this.options.ref!=t){""!=this.options.ref&&this.modelControl.dataCollectionRefInfo.dataComp.removeChild(this.id);var a=t.replace("data:","");WebSquare.DataCollection.comp[a].addChild(r.D.getComponentById(this.id))}this.options.ref=t,this.options.labelNode=e,this.options.seriesNode=i,this.options.valueNode=o,this.modelControl.useRef=!0,this.modelControl.setRef(t),this.refresh()}catch(t){s.w.printStackTrace(t)}},h.prototype.exportJSChart=function(t){try{t||(t="jpg");var e=this.options.id||"fusionChart",i=this.getSVGString();if(i){var o=encodeURI(i+"ExportType="+t+"ExportFileName="+e);a.v.download("engine/servlet/exportFusionChart.jsp",o,"post")}}catch(t){s.w.printStackTrace(t)}},h.prototype.getSVGString=function(){try{var t=this.fc().getSVGString();if(t)return t=(t=(t=(t=(t=t.wq_replaceAll('shape-rendering="default"',"shape-rendering='auto'")).wq_replaceAll('visibility=""',"visibility='inherit'")).wq_replaceAll('text-anchor="undefined"',"text-anchor='start'")).wq_replaceAll("1e-006","0.000001")).wq_replaceAll('font-family="15"','font-family="Verdana"');n.k.printLog("not found svg object")}catch(t){s.w.printStackTrace(t)}},h.prototype.setAccessibility=function(t){try{if(1==t){var e="",i="";if(null==document.getElementById("accessibility_"+this.id)){var o=this.render;(p=document.createElement("ul")).id="accessibility_"+this.id,WebSquare.style.addClass(p,"w2fusionchart_accessibility");var a=this.chartObj,r=this.attributeObj.caption,n=document.createElement("li");r&&(n.innerHTML="title : "+r,p.appendChild(n));for(var l=0;l<a.data.length;l++){var h=document.createElement("li");a.data[l]?(e=a.data[l].label?a.data[l].label:a.data[l].LABEL,i=a.data[l].value?a.data[l].value:a.data[l].VALUE):(e="",i=""),h.innerHTML="label : "+e+", value : "+i,p.appendChild(h)}o.insertBefore(p,o.lastChild)}else{var p
;(p=document.getElementById("accessibility_"+this.id)).innerHTML="";a=this.chartObj,r=this.attributeObj.caption,n=document.createElement("li");r&&(n.innerHTML="title : "+r,p.appendChild(n));for(l=0;l<a.data.length;l++){h=document.createElement("li");a.data[l]?(e=a.data[l].label?a.data[l].label:a.data[l].LABEL,i=a.data[l].value?a.data[l].value:a.data[l].VALUE):(e="",i=""),h.innerHTML="label : "+e+", value : "+i,p.appendChild(h)}}}else{var c=this.render,d=c.getElementsByClassName("w2fusionchart_accessibility");null!=d&&0!=d.length&&(d=d[0],c.removeChild(d)),c=null,d=null}}catch(t){s.w.printStackTrace(t)}},h.prototype.getDataListInfo=function(){try{var t={};if(this.modelControl.isDataCollectionRefBinded){var e=this.options.ref.replace("data:","");return t.id=e.slice(0),"simple"==this.options.seriesType.toLowerCase()?(t.ref=this.options.ref,t.labelNode=this.options.labelNode,t.serieNode=this.options.seriesNode,t.valueNode=this.options.valueNode):(t.ref=this.options.ref,t.labelNode=this.options.labelNode,t.seriesColumns=this.options.seriesColumns),t}return null}catch(t){s.w.printStackTrace(t)}}}}]);