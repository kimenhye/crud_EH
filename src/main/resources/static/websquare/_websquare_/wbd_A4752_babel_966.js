(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[966],{8966:function(t,e,i){"use strict";i.r(e),i.d(e,{repeat:function(){return p},repeatAPI:function(){return h}});var n=i(1974),o=i(5948),s=i(1454),r=i(8683),a=i(1),h={getRepeatIndex:function(){return this.__repeat.repeatComponents[this.id].repeatIndex},getSiblingId:function(t){var e=this.getRepeatIndex();return this.__repeat.repeatIds[e].hashPreFix+t},getSibling:function(t){var e=this.getRepeatIndex(),i=this.__repeat.repeatIds[e];return r.D.getComponentById(i.hashPreFix+t,this.scope_id)},getRepeatInstanceNode:function(){var t=this.getRepeatIndex(),e=this.__repeat.nodeset+"[@"+this.__repeat.options.repeatKey+"='"+t+"']";return WebSquare.ModelUtil.findInstanceNode(e,void 0,this.scope_id)},getInstanceValue:function(){return WebSquare.ModelUtil.getInstanceValue(this.options.ref)},getRepeat:function(){return this.__repeat}},p=function(t,e,i){a.s.call(this,t,e,i)};n.x.extend(p.prototype,a.s.prototype),p.prototype.defaultOptions={pluginType:"uiplugin.repeat",pluginName:"repeat",userEvents:["onrepeatdone"],nodeset:"",repeatKey:"index",cols:"",rows:"",autoCount:!1,direction:"horizontal"},p.prototype.initialize=function(t){try{this.repeatComponents={},this.repeatIds=[],this.templateElement=t,this.rowCount=void 0,this.colCount=void 0}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.toHTML=function(){try{var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'",i=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'";return t.push("<div id='"+this.id+"' "+e+" class='w2repeat "+this.options.className+"' "+i+">"),t.push("</div>"),t.join("")}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setAction=function(){try{this.refreshRepeat()}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.refreshItemset=function(){try{this.refreshRepeat()}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.drawContents=function(){try{var t=[];t.push("<table class='w2repeat_table'>");for(var e=this.getChildren(),i=e.length,n=0;n<this.rowCount;n++){t.push("<tr class='w2repeat_row'>");for(var s=0;s<this.colCount;s++){var r=n*this.colCount+s;"vertical"==this.options.direction&&(r=n+this.rowCount*s),r<i?(t.push("<td class=''>"),t.push(e[r].toHTML()),t.push("</td>")):t.push("<td class=''></td>")}t.push("</tr>")}t.push("</table>"),this.render.innerHTML=t.join("");for(var a=0;a<e.length;a++)e[a].activate(),e[a].onComplete()}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.refreshRepeat=function(){try{if(""!=this.options.nodeset){if(this.nodeset=this.options.nodeset,this.nodeset.match("data:")){this.modelControl.setItemset(this.nodeset,"",""),this.modelControl.getDataCollectionItemsetData(this.modelControl.id);var t=this.modelControl.getDataComp();this.nodeset=this.uuid+"/"+t.options.baseNode+"/"+t.options.repeatNode,WebSquare.ModelUtil.setInstanceNode(t.getAllXML(),this.uuid,"","replace",void 0,this.scope_id)}var e=WebSquare.ModelUtil.findInstanceNodes(this.nodeset,null,this.scope_id);this.initialize(this.templateElement);for(var i=this.childControlList.length-1;i>=0;i--)this.childControlList[i].remove();if(e.length>0){for(i=0;i<e.length;i++)this.parseChild(this,this.templateElement,i);if(this.setTableCount(),1==this.options.autoCount)for(i=0;i<e.length;i++)e[i].setAttribute(this.options.repeatKey,i);this.drawContents(),s.B.fireEvent(this,"onrepeatdone")}}}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setTableCount=function(){try{var t=this.getChildrenCount();if(this.rowCount=t,this.colCount=1,""!=this.options.rows){var e=parseInt(this.options.rows);this.rowCount=e,this.colCount=Math.ceil(t/e)}if(""!=this.options.cols){var i=parseInt(this.options.cols);this.colCount=i,this.rowCount=Math.ceil(t/i)}}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.parseChild=function(t,e,i){try{for(var s=e.getChildNodes(),a=0;a<s.length;a++){var h=s[a];if(1==h.nodeType){var p=h.getLocalName(),l=h.getAttribute("id"),c=h.getAttribute("ref")
;if("repeat"==p&&(c=h.getAttribute("nodeset")),c){var u=c.indexOf("data:");u>=0&&(c=c.slice("data:".length+u))}if(l){var d=this.id+"_"+i+"_"+l;c=c?this.nodeset+"[@"+this.options.repeatKey+"='"+i+"']/"+c:"";var f=null;"repeat"==p?(f=WebSquare.controlFactory.createByJSON(d,null,h._element,this.scope_obj,this.parentFrame)).options.nodeset=c:(f=WebSquare.controlFactory.createControl(d,{ref:c},h._element,this.scope_obj),this.parseChild(f,h,i)),t.addControl(f),this.repeatComponents[d]={},this.repeatComponents[d].repeatIndex=i,this.repeatIds[i]={},this.repeatIds[i].hashPreFix=this.id+"_"+i+"_",r.D.getComponentById(d,this.scope_id).__repeat=this,n.x.extend(r.D.getComponentById(d,this.scope_id),WebSquare.uiplugin.repeatAPI)}}}}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.getRepeatChildren=function(t){try{for(var e=[],i=this.getChildrenCount(),n=0;n<i;n++){var s=this.id+"_"+n+"_"+t;e.push(r.D.getComponentById(s,this.scope_id))}return e}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setInitValue=function(t){try{this.init(t)}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.init=function(t){try{t=n.x.extend({excludePlugin:"",excludeId:"",fireEvent:!1},t||{});for(var e=this.getChildren(),i=0;i<e.length;i++)e[i].setInitValue&&-1==(" "+t.excludePlugin+" ").indexOf(" "+e[i].options.pluginName+" ")&&-1==(" "+t.excludeId+" ").indexOf(" "+e[i].id+" ")&&e[i].setInitValue(t)}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.invoke=function(t,e,i,n){try{return a.s.prototype.invoke.call(this,t,e,i,n)}catch(t){o.w.printStackTrace(t,null,this)}}}}]);