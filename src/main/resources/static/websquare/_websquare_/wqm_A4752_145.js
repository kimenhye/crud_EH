(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[145],{145:(t,e,i)=>{"use strict";i.r(e),i.d(e,{output:()=>l});var o=i(5405),s=i(5130),a=i(209),r=i(6247),n=i(8217),l=function(t,e,i){r.s.call(this,t,e,i);var o,s=["div","label","h1","h2","h3","h4","h5","h6"];for(this.options.tagname=""!=this.options.for?"label":this.options.tagname,o=0;o<s.length&&s[o]!=this.options.tagname;o++);o>=s.length&&(this.options.tagname=s[0])};o.x.extend(l.prototype,r.s.prototype),o.x.extend(l.prototype,n.g.prototype),l.prototype.defaultOptions={pluginType:"uiplugin.output",pluginName:"output",useConfig:!0,userEvents:[],systemEvents:["onfocus","onblur","onclick","ondblclick","onmouseup","onmousedown","onmouseout","onmouseover","onmousemove"],label:"",ioFormat:"",displayFormat:"",displayFormatter:null,dataType:"text",localeRef:"",useLocale:!1,escape:!0,escapeFormatter:"",for:"",tagname:"div",dateMask:"",timeMask:"",numberMask:"",euroMask:"",rupeeMask:"",tengeMask:"",delimeter:"",decimalDelimeter:"",delimiter:"",decimalDelimiter:""},l.prototype.initialize=function(t){try{if(this.options.delimiter=this.options.delimiter?this.options.delimiter:this.options.delimeter,this.options.decimalDelimiter=this.options.decimalDelimiter?this.options.decimalDelimiter:this.options.decimalDelimeter,this.options.delimeter=this.options.delimiter,this.options.decimalDelimeter=this.options.decimalDelimiter,""==this.options.displayFormat)switch(this.options.dataType){case"date":this.options.displayFormat=this.options.dateMask;break;case"time":this.options.displayFormat=this.options.timeMask;break;case"number":this.options.displayFormat=this.options.numberMask,this.options.delimiter||(this.options.delimiter=","),this.options.decimalDelimiter||(this.options.decimalDelimiter=".");break;case"euro":this.options.displayFormat=this.options.euroMask,this.options.delimiter||(this.options.delimiter="."),this.options.decimalDelimiter||(this.options.decimalDelimiter=",");break;case"rupee":this.options.displayFormat=this.options.rupeeMask,this.options.delimiter||(this.options.delimiter=","),this.options.decimalDelimiter||(this.options.decimalDelimiter=".");break;case"tenge":this.options.displayFormat=this.options.tengeMask,this.options.delimiter||(this.options.delimiter=" "),this.options.decimalDelimiter||(this.options.decimalDelimiter="-")}if(this.formatter=WebSquare.format.createFormatter(this.options.dataType,this.options.displayFormat,this.options.displayFormatter,this.options.ioFormat,this.options.delimiter,this.options.decimalDelimiter,this.scope_id,this.id),t){var e=WebSquare.WebSquareparser.parseLabel(t);e&&(this.options.label=e.value,this.escapeLabel=e.value)}this.useEscapeFormatter=!1}catch(t){s.w.printStackTrace(t,null,this)}},l.htmlStr=["<",null," id='",null,"'",null," class='w2output ",null,"'",null,">",null,"</",null,">"],l.prototype.toHTML=function(){try{if(null!=this.scope_obj&&this.scope_obj.id&&this.options.for){var t=a.D.getComponentById(this.options.for,this.scope_obj.id);null!=t&&(this.options.for=t.id)}var e=WebSquare.uiplugin.output.htmlStr,i="";return this.options.escapeFormatter||(i=this.options.escape?this.formatter.format(WebSquare.xml._encode(this.options.label)):this.formatter.format(this.options.label)),e[1]=this.options.tagname,e[3]=this.id,e[5]=""==this.options.style?"":" style ='"+this.options.style+"'",e[5]+=""==this.options.tabIndex?"":" tabIndex='"+this.options.tabIndex+"'",e[7]=this.options.className,e[9]="label"==this.options.tagname?" for='"+this.options.for+"'":"",e[11]=i,e[13]=this.options.tagname,e.join("")}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setAction=function(){try{if(this.setVerticalAlign(),this.modelControl.isBinded()){var t=this.modelControl.getData();this.setValueNM(t)}if(this.displayLocaleValue(),"label"!=this.options.tagname||""==this.options.for)return;var e=a.D.getComponentById(this.options.for)||null;if(null==e)return
;var i="function"==typeof e.getAccessibiltyId?e.getAccessibiltyId():this.options.for;this.render.setAttribute("for",i)}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.onComplete=function(){try{if(this.options.escapeFormatter){try{if("function"==typeof this.options.escapeFormatter)this.useEscapeFormatter=!0;else{var t=a.D.getGlobalFunction(this.options.escapeFormatter,this.scope_id);this.options.escapeFormatter=t,"function"==typeof t&&(this.useEscapeFormatter=!0)}}catch(t){s.w.printStackTrace(t,null,this)}this.setValueNM(this.options.label)}r.s.prototype.onComplete.call(this)}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.refresh=function(){try{if(this.modelControl.isBinded()){var t=this.modelControl.getData();this.setValueNM(t)}}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setVerticalAlign=function(){try{var t="top",e=this.options.style.toLowerCase();if(e.match(/vertical-align[\s]*:[\s]*middle/)?t="middle":e.match(/vertical-align[\s]*:[\s]*bottom/)&&(t="bottom"),"top"==t);else{var i=this.getStyle("height");if(i.indexOf("px")>-1){i=parseInt(i);var o=parseInt(this.getStyle("padding-top"))||0,a=parseInt(this.getStyle("font-size"))||0,r=0;"middle"==t?r=Math.floor((i-a)/2):"bottom"==t&&(r=Math.floor(i-a)),r+o>0&&i-r>0&&(this.setStyle("paddingTop",r+o+"px"),this.setStyle("height",i-r+"px"))}}}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setValue=function(t){try{this.setValueNM(t),this.modelControl.setData(t)}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setValue1=function(t){try{this.setValue(t)}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setValueNM=function(t){try{if(a.D.isNull(t))return;t=t.toString(),this.options.label=t,this.useEscapeFormatter&&(t=this.options.escapeFormatter.call(this,t)),this.escapeLabel=t,this.render.innerHTML=this.options.escape?this.formatter.format(WebSquare.xml._encode(t+"")):this.formatter.format(t)}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setWidth=function(t){try{isNaN(parseInt(t))||(this.render.style.width=t+"px")}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setHeight=function(t){try{t=parseInt(t,10),isNaN(t)||(this.render.style.height=t+"px")}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setBackgroundImage=function(t){try{this.render.style.backgroundImage=void 0===t||null==t||""==t?"":this.getImageURL(t,!0)}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.getFormatValue=function(){try{return this.formatter.format(this.escapeLabel)}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.getLabel=function(){try{return this.getValue()}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setLabel=function(t){try{this.setValue(t)}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.getValue=function(){try{return this.formatter.format(this.escapeLabel)}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setLocaleRef=function(t){try{this.options.localeRef=t,this.displayLocaleValue()}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.onPropertyChange=function(t,e){try{switch(t){case"disabled":1==e?(this.addClass(this.render,"w2output_disabled"),this.setStyle("color","#c0c0c0")):(this.removeClass(this.render,"w2output_disabled"),this.setStyle("color",""))}}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.getRawValue=function(){try{return this.options.label}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setDisplayFormat=function(t){try{this.options.displayFormat=t,this.formatter=WebSquare.format.createFormatter(this.options.dataType,this.options.displayFormat,this.options.displayFormatter,this.options.ioFormat,null,null,this.scope_id,this.id),this.setValueNM(this.options.label)}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setRef=function(t){try{this.modelControl.isBinded()||(this.modelControl.useRef=!0),this.options.ref=t,this.modelControl.setRef(t),this.refresh()}catch(t){s.w.printStackTrace(t)}},l.prototype.getDataListInfo=function(){try{var t={}
;return this.modelControl.isDataCollectionRefBinded?(t.id=this.modelControl.dataCollectionRefInfo.dataComp.id,t.ref=this.options.ref,t):null}catch(t){s.w.printStackTrace(t)}},l.prototype.unbindRef=function(){try{this.modelControl.isBinded()&&(this.options.ref="",this.modelControl.unbindRef(),this.refresh())}catch(t){s.w.printStackTrace(t)}}}}]);