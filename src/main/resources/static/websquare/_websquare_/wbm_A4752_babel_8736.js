(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[8736],{8736:function(t,e,i){"use strict";i.r(e),i.d(e,{list:function(){return u}});var s=i(484),n=i(1974),o=i(5948),r=i(1454),l=i(8683),h=i(9075),a=i(1),d=i(5373),u=function(t,e,i){a.s.call(this,t,e,i)};n.x.extend(u.prototype,a.s.prototype),n.x.extend(u.prototype,d.E.prototype),u.prototype.defaultOptions={pluginType:"uiplugin.list",pluginName:"list",userEvents:["onrowclick"],tagName:"div",sortable:!1,virtualized:!1,visibleRowNum:10,useSearch:!1,_listRowHeight:0,wheelRows:0,placeholder:"",useCloseButton:!1,selectedCellColor:"#FCA73C"},u.prototype.initialize=function(t){if(this.uniqueIdSequence=0,this.listRowInfo=WebSquare.xml.getChildren(t.parentNode,"w2:list")[0],this.listColumnInfo=WebSquare.xml.getChildren(t,"w2:listRow"),this.options.nodeset&&(this.modelDataXMLArr=WebSquare.ModelUtil.findInstanceNodes(this.options.nodeset,null,this.scope_id),this.modelControl.itemsetObj={nodeset:this.options.nodeset,label:"",value:""}),this.options.virtualized){this.options.rowHeight=21;for(var e=this.listRowInfo.style.split(";"),i=0;i<e.length;i++){var s=e[i];if(s.indexOf("height")>-1&&s.indexOf(":")>-1){var n=parseInt(s.split(":")[1].wq_trim().replaceAll("px",""));isNaN(n)||(this.options.rowHeight=n+1)}}}this.listRowObjArr=[],this.isIE67=l.D.isIEAllVersion("6 7"),this.options.useSearch&&(this.myhelper=new WebSquare.korHelper)},u.prototype.toHTML=function(){var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'";if(t.push("<"+this.options.tagName+" id='"+this.id+"' "+e+" class='w2list w2noselect "+this.options.className+"' tabIndex='0'>"),this.options.virtualized){var i=this.isIE67?"position:relative;height:100%;background-color:white;":"position:relative;width:100%;height:100%;box-sizing:border-box;background-color:white;",s=this.isIE67?"position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%'":"";if(t.push("<div id='"+this.id+"_main' style='"+i+"'>"),this.options.useSearch){var n="height:"+(parseInt(this.options._listRowHeight)-3)+"px;";t.push("<input id='"+this.id+"_input' name='"+this.id+"_input' style='"+n+"'class='w2list_input' placeholder='"+this.options.placeholder+"'></input>")}t.push("<div id='"+this.id+"_items_main' style='"+s+"'>")}if(this.options.nodeset){var o=this.modelDataXMLArr.length;this.options.virtualized&&(o=Math.min(this.modelDataXMLArr.length,this.options.visibleRowNum));for(var r=0;r<o;r++){var h=""==this.listRowInfo.style?"":"style='"+this.listRowInfo.style+"'";t.push("<"+this.listRowInfo.tagName+" "+h+" class='w2list_listRow "+this.listRowInfo.class+"' >");for(var a=0;a<this.listColumnInfo.length;a++){var d=this.listColumnInfo[a],u=d.value,c=WebSquare.xml.getValue(this.modelDataXMLArr[r],d.ref);switch(""!=c&&(u=c),d.inputType){case"checkbox":var p=l.D.getBoolean(u)?'checked="checked"':"",f=""==d.style?"":" style='"+d.style+"' ";t.push("<input type='checkbox' "+p),t.push(f),t.push(" class='w2list_listColumn w2list_listColumn_checkbox "+d.class+"' >"),t.push("</input>");break;case"text":f=""==d.style?"":" style='"+d.style+"' ";t.push("<span "),t.push(f),t.push(" class='w2list_listColumn w2list_listColumn_text "+d.class+"' >"),t.push(u),t.push("</span>");break;case"button":f=""==d.style?"":" style='"+d.style+"' ";t.push("<input type='button'"),t.push(" value='"+u+"' "),t.push(f),t.push(" class='w2list_listColumn w2list_listColumn_button "+d.class+"' >"),t.push("</input>")}}t.push("</"+this.listRowInfo.tagName+">")}}return this.options.virtualized&&(t.push("</div>"),t.push("<div id='"+this.id+"_scroll_main' class='w2list_scroll_main' style='position:absolute;right:0;top:0;height:100%;padding:1px;background-color:#ccc;box-sizing:border-box;'>"),t.push("<div id='"+this.id+"_scroll_track' class='w2list_scroll_track' style='position:relative;width:100%;height:100%;background-color:#eee;box-sizing:border-box;'>"),
t.push("<div id='"+this.id+"_scroll_thumb' class='w2list_scroll_thumb' style='position:absolute;width:100%;height:100%;left:1px;width:8px;background-color:#bbb;border-radius:3px'>"),t.push("</div>"),t.push("</div>"),t.push("</div>"),t.push("</div>")),t.push("</"+this.options.tagName+">"),t.join("")},u.prototype.setPreAction=function(){try{this.options.useSearch&&(this.dom.input=this.getElementById(this.id+"_input"))}catch(t){o.w.printStackTrace(t,null,this)}},u.prototype.setAction=function(){if(this.initializeListInfo(),this.options.virtualized){var t=this.getElementById(this.id+"_items_main");this.event.addListener(t,"onclick",this.event.bindAsEventListener(this,this.handleClickEvent)),this.event.addListener(t,"onmouseover",this.event.bindAsEventListener(this,this.handleMouseoverEvent)),this.event.addListener(t,"onmouseout",this.event.bindAsEventListener(this,this.handleMouseoutEvent)),l.D.isIE()?this.event.addListener(t,"onmousewheel",this.event.bindAsEventListener(this,this.handleMousewheelEvent)):this.event.addListener(t,"onwheel",this.event.bindAsEventListener(this,this.handleMousewheelEvent)),this.event.addListener(this.render,"onkeydown",this.event.bindAsEventListener(this,this.handleKeydownEvent))}else this.event.addListener(this.render,"onclick",this.event.bindAsEventListener(this,this.handleClickEvent)),this.event.addListener(this.render,"onmouseover",this.event.bindAsEventListener(this,this.handleMouseoverEvent)),this.event.addListener(this.render,"onmouseout",this.event.bindAsEventListener(this,this.handleMouseoutEvent));if(this.options.sortable&&(1==this.isMobile||this.event.addListener(this.render,"onmousedown",this.event.bindAsEventListener(this,this.handleDragEvent))),this.options.virtualized){this.adjustRender();var e=this.getElementById(this.id+"_scroll_thumb"),i=this.getElementById(this.id+"_scroll_track");this.event.addListener(e,"onmouseenter",this.event.bindAsEventListener(this,(function(t){e.style.backgroundColor="#aaa"}))),this.event.addListener(e,"onmouseleave",this.event.bindAsEventListener(this,(function(t){this.scrollStarted||(e.style.backgroundColor="#bbb")}))),this.event.addListener(e,"onmousedown",this.event.bindAsEventListener(this,(function(t){this.listRowObjArr.length>0&&(this.scrollStarted=!0,this.scrollStartMouseEvent={},this.scrollStartMouseEvent.clientY=t.clientY,this.scrollStartMouseEvent.original_top=e.offsetTop,this.scrollStartMouseEvent.max_top=e.parentElement.offsetHeight-e.offsetHeight,e.style.backgroundColor="#999")}))),this.event.addListener(i,"onclick",this.event.bindAsEventListener(this,(function(t){if(!this.scrollStarted){if((l.D.isIE()?t.srcElement:t.target)!=i)return;r.B.stopPropagation(t);var s=t.offsetY-e.offsetHeight/2;if(s<0&&(s=0),s>e.parentElement.offsetHeight-e.offsetHeight&&(s=e.parentElement.offsetHeight-e.offsetHeight),e.offsetTop!=s){e.style.top=s+"px";var n=this.listRowObjArr.length-this.options.visibleRowNum;if(n>0){var o=(i.offsetHeight-e.offsetHeight)/n,h=Math.floor(s/o);this.setFirstRowIndex(h,!0)}else this.setFirstRowIndex(0,!0)}}}))),this.event.addListener(this.parentControl.render,"onmouseup",this.event.bindAsEventListener(this,(function(t){this.scrollStarted&&(this.scrollStarted=!1,e.style.backgroundColor="#bbb")}))),this.event.addListener(this.parentControl.render,"onmouseleave",this.event.bindAsEventListener(this,(function(t){this.scrollStarted&&(this.scrollStarted=!1,e.style.backgroundColor="#bbb")}))),this.event.addListener(this.parentControl.render,"onmousemove",this.event.bindAsEventListener(this,(function(t){if(this.scrollStarted){var s=t.clientY-this.scrollStartMouseEvent.clientY,n=this.scrollStartMouseEvent.original_top+s;if(n<0&&(n=0),n>this.scrollStartMouseEvent.max_top&&(n=this.scrollStartMouseEvent.max_top),e.offsetTop!=n){e.style.top=n+"px";var o=this.listRowObjArr.length-this.options.visibleRowNum;if(o>0){var r=(i.offsetHeight-e.offsetHeight)/o,l=Math.floor(n/r);this.setFirstRowIndex(l,!0)}else this.setFirstRowIndex(0,!0)}}})))}},
u.prototype.setLayout=function(){},u.prototype.initializeListInfo=function(){try{if(this.options.nodeset){for(var t=0;t<this.modelDataXMLArr.length;t++){var e,i,s,n=this.id+"_"+this.uniqueIdSequence;WebSquare.xml.setAttribute(this.modelDataXMLArr[t],"unique_id",n),this.render.childNodes[t].setAttribute("unique_id",n);for(var r={},l=0;l<this.listColumnInfo.length;l++)i=(e=this.listColumnInfo[l]).value,""!=(s=WebSquare.xml.getValue(this.modelDataXMLArr[t],e.ref))&&(i=s),r[e.id]=i;r.unique_id=n,this.listRowObjArr.push(r),this.uniqueIdSequence++}this.onListRowObjArrChanged()}}catch(t){o.w.printStackTrace(t)}},u.prototype.refreshItemset=function(){try{if(this.modelControl.isItemsetBinded()){var t=WebSquare.ModelUtil.findInstanceNodes(this.options.nodeset,null,this.scope_id);this.modelDataXMLArr=t;var e=this.listRowObjArr;this.listRowObjArr=[];for(var i=0;i<this.modelDataXMLArr.length;i++)this.listRowObjArr[i]=this.createObjByXML(this.modelDataXMLArr[i]);for(i=0;i<e.length;i++)for(var s=0;s<this.listRowObjArr.length;s++)if(e[i].unique_id==this.listRowObjArr[s].unique_id){e[i].exist=!0;break}for(i=0;i<e.length;i++)if(1!=e[i].exist){var n=this.getRenderByUniqueId(e[i].unique_id);n.parentNode.removeChild(n)}for(i=0;i<this.listRowObjArr.length;i++){var r=this.listRowObjArr[i],h=this.getRenderByUniqueId(r.unique_id);if(h){for(s=0;s<e.length;s++){var a=e[s];if(a.unique_id==r.unique_id)for(var d=0;d<this.listColumnInfo.length;d++){var u=r[this.listColumnInfo[d].id];if(a[this.listColumnInfo[d].id]!=u)switch(this.listColumnInfo[d].inputType){case"checkbox":h.childNodes[d].checked=l.D.getBoolean(u);break;case"text":h.childNodes[d].innerHTML=u;break;case"button":h.childNodes[d].value=u}}}var c;for(s=0;s<this.getLength();s++){var p=this.render.childNodes[s];h.getAttribute("unique_id")==p.getAttribute("unique_id")&&(c=s)}this.moveRowRender(c,i)}else this.insertRowRender(i,this.listRowObjArr[i])}this.onListRowObjArrChanged()}}catch(t){o.w.printStackTrace(t)}},u.prototype.refresh=function(){},u.prototype.insertInModel=function(t,e,i){try{switch(i){case"append":var s=this.options.nodeset.split("/");s.splice(s.length-1,1);var n=s;n=n.join("/"),WebSquare.ModelUtil.setInstanceNode(e,n,null,"append");break;case"insertBeforeSibling":WebSquare.ModelUtil.setInstanceNode(e,this.options.nodeset+"["+(t+1)+"]",null,"insertBeforeSibling");break;case"appendSibling":WebSquare.ModelUtil.setInstanceNode(e,this.options.nodeset+"["+t+"]",null,"appendSibling");break;default:return}}catch(t){o.w.printStackTrace(t)}},u.prototype.removeFromModel=function(t){try{WebSquare.ModelUtil.removeInstanceNode(this.options.nodeset+"["+(t+1)+"]")}catch(t){o.w.printStackTrace(t)}},u.prototype.insertRow=function(t,e){try{var i=this.getChildNodes(),s=i.length;if(t<0)return;if(t>s&&(t=s),this.options.nodeset){var n=this.createXMLByObj(e);0==i.length?this.insertInModel(t,n,"append"):i.length>t&&t>=0?this.insertInModel(t,n,"insertBeforeSibling"):this.insertInModel(t,n,"appendSibling")}else this.insertRowNM(t,e)}catch(t){o.w.printStackTrace(t)}},u.prototype.insertRowNM=function(t,e){try{var i=this.getLength();e.unique_id=this.id+"_"+this.uniqueIdSequence,this.uniqueIdSequence++,i>t&&t>=0?this.listRowObjArr.splice(t,0,e):this.listRowObjArr.push(e),this.onListRowObjArrChanged(),this.insertRowRender(t,e)}catch(t){o.w.printStackTrace(t)}},u.prototype.insertRenderStr=function(t){try{var e,i;t.unique_id=this.id+"_"+this.uniqueIdSequence,this.uniqueIdSequence++,this.listRowObjArr.push(t),this.onListRowObjArrChanged();for(var s="<"+this.listRowInfo.tagName+" class='w2list_listRow "+this.listRowInfo.class+"' style='"+this.listRowInfo.style+"' unique_id='"+t.unique_id+"'>",n=0;n<this.listColumnInfo.length;n++){var r=this.listColumnInfo[n].id;null!=t[r]||null!=t[r]?e=t[r]:(e=this.listColumnInfo[n].value,t[this.listColumnInfo[n].id]=this.listColumnInfo[n].value),i=this.listColumnInfo[n],s+=this.createItemNodeStr(i,e)}return s+="</"+this.listRowInfo.tagName+">"}catch(t){o.w.printStackTrace(t)}},
u.prototype.insertRowRender=function(t,e){try{var i=this.getChildNodes(),s=i.length;if(t<0)return;t>s&&(t=s);var n=this.createRenderByObj(e);i.length>t&&t>=0?this.render.insertBefore(n,i[t]):this.render.appendChild(n)}catch(t){o.w.printStackTrace(t)}},u.prototype.removeRow=function(t){try{this.getChildNodes().length>t&&t>=0&&(this.options.nodeset?this.removeFromModel(t):this.removeRowNM(t))}catch(t){o.w.printStackTrace(t)}},u.prototype.removeRowNM=function(t){try{this.removeRowRender(t),this.listRowObjArr.splice(t,1),this.onListRowObjArrChanged()}catch(t){o.w.printStackTrace(t)}},u.prototype.removeRowRender=function(t){try{var e=this.options.virtualized?this.getElementById(this.id+"_items_main"):this.getElementById(this.id),i=e.children;i.length>t&&t>=0&&e.removeChild(i[t])}catch(t){o.w.printStackTrace(t)}},u.prototype.removeAll=function(){try{this.options.nodeset?WebSquare.ModelUtil.removeInstanceNodes(this.options.nodeset):(this.listRowObjArr=[],this.render.innerHTML=""),this.onListRowObjArrChanged()}catch(t){o.w.printStackTrace(t)}},u.prototype.moveRow=function(t,e){try{var i=this.getChildNodes(),s=i.length;if(t>s||e>s)return;if(t>=0&&e>=0)if(this.options.nodeset){var n=this.modelDataXMLArr[t];i.length-1>e&&e>=0?(this.removeFromModel(t),this.insertInModel(e,n,"insertBeforeSibling")):(this.removeFromModel(t),this.insertInModel(e,n,"appendSibling"))}else this.moveRowNM(t,e)}catch(t){o.w.printStackTrace(t)}},u.prototype.moveRowNM=function(t,e){try{this.moveRowRender(t,e);var i=this.listRowObjArr.splice(t,1)[0];this.listRowObjArr.splice(e,0,i),this.onListRowObjArrChanged()}catch(t){o.w.printStackTrace(t)}},u.prototype.moveRowRender=function(t,e){try{var i=this.getChildNodes(),s=i.length;if(t>s||e>s)return;if(t>=0&&e>=0){var n=i[t];if(i.length-1>e&&e>=0){var r=e>t?e+1:e;this.render.insertBefore(n,i[r])}else this.render.appendChild(n)}}catch(t){o.w.printStackTrace(t)}},u.prototype.getLength=function(){try{return this.options.virtualized?this.listRowObjArr?this.listRowObjArr.length:0:this.getChildNodes().length}catch(t){o.w.printStackTrace(t)}},u.prototype.getChildNodes=function(){try{if("dl"==this.options.tagName||this.options.useCloseButton){for(var t=[],e=0;e<this.render.childNodes.length;e++){var i=this.render.childNodes[e];"3"!=i.nodeType&&t.push(i)}return t}return this.render.getElementsByTagName(this.listRowInfo.tagName)}catch(t){o.w.printStackTrace(t)}},u.prototype.getRenderByUniqueId=function(t){try{for(var e=0;e<this.getLength();e++){var i=this.render.childNodes[e];if(i.getAttribute("unique_id")==t)return i}}catch(t){o.w.printStackTrace(t)}},u.prototype.getCellData=function(t,e){try{var i,s=this.getLength();if("string"==typeof t||!(s>t&&t>=0))return;"string"==typeof e?i=e:"number"==typeof e&&(i=this.listColumnInfo[e].id);var n=this.listRowObjArr[t];return n?n[i]:""}catch(t){o.w.printStackTrace(t)}},u.prototype.setCellData=function(t,e,i){try{var s,n,r,h=this.getLength();if("string"==typeof t||!(h>t&&t>=0))return;if("string"==typeof e){s=e;for(var a=0;a<this.listColumnInfo.length;a++)if(s==this.listColumnInfo[a].id){n=a;break}}else"number"==typeof e&&(n=e,s=this.listColumnInfo[e].id);if(r=this.getCellData(t,s),this.options.nodeset){var d,u;for(a=0;a<this.listColumnInfo.length;a++)if(s==(u=this.listColumnInfo[a]).id){d=u.ref;break}if(!d)return;WebSquare.ModelUtil.setInstanceValue(this.options.nodeset+"["+(t+1)+"]/"+d,i),r!==i&&this.fireOnchange()}else if(this.listRowObjArr[t][s]=i,this.options.virtualized)this.setFirstRowIndex(this.firstListIndex);else{var c=this.getChildNodes()[t],p=this.listColumnInfo[n].inputType,f=c.childNodes[n];switch(p){case"checkbox":f.checked=l.D.getBoolean(i);break;case"text":f.innerHTML=i;break;case"button":f.value=i}}}catch(t){o.w.printStackTrace(t)}},u.prototype.getRowData=function(t){try{var e=this.getLength();if("string"==typeof t||!(e>t&&t>=0))return;var i={},s=this.listRowObjArr[t];for(var n in s)"unique_id"!=n&&"render"!=n&&(i[n]=s[n]);return i}catch(t){o.w.printStackTrace(t)}},
u.prototype.setRowData=function(t,e,i){try{var n=this.getLength();if("string"==typeof t||!(n>=t&&t>=0)||"object"!=(0,s.Z)(e))return;if(!i)return void(this.options.nodeset?this.insertRow(n,e):this.insertRowNM(n,e));e&&(this.options.nodeset?(this.removeRow(t),this.insertRow(t,e)):(this.removeRowNM(t),this.insertRowNM(t,e)))}catch(t){o.w.printStackTrace(t)}},u.prototype.setXML=function(t,e){null!=t||h.k.printLog("[WebSquare.uiplugin.list.setXML] XML is null["+this.id+"]")},u.prototype.setJSON=function(t,e){try{if(null==t)return void h.k.printLog("[WebSquare.uiplugin.list.setJSON] data is null["+this.id+"]");if(e&&0==t.length)return;var i,s="";if(e||(this.listRowObjArr=[],this.options.virtualized&&(this.getElementById(this.id+"_items_main").innerHTML="")),this.options.virtualized)i=e?this.listRowObjArr.length:0,this.listRowObjArr=this.listRowObjArr.concat(t),this.adjustRender(),this.setFirstRowIndex(i);else{for(var n=0;n<t.length;n++)i=e?this.getLength+n:n,this.options.nodeset?this.insertRow(i,t[n]):e?this.insertRowNM(i,t[n]):s+=this.insertRenderStr(t[n]);e||(this.render.innerHTML=s)}}catch(t){o.w.printStackTrace(t)}},u.prototype.toggleCheckbox=function(t,e){try{var i=this.getLength();if("string"==typeof t||"number"==typeof e)return;if(i>t&&t>=0){var s=l.D.getBoolean(this.getCellData(t,e));this.setCellData(t,e,!s)}}catch(t){o.w.printStackTrace(t)}},u.prototype.createItemNode=function(t,e){try{if(t){var i;switch(t.inputType){case"checkbox":(i=document.createElement("input")).setAttribute("type","checkbox"),i.setAttribute("itemid",t.id),i.setAttribute("class","w2list_listColumn w2list_listColumn_checkbox "+t.class),this.isIE67&&(i.className="w2list_listColumn w2list_listColumn_checkbox "+t.class),!0===(e=l.D.getBoolean(e))&&i.setAttribute("checked","checked");break;case"text":(i=document.createElement("span")).setAttribute("itemid",t.id),i.setAttribute("class","w2list_listColumn w2list_listColumn_text "+t.class),this.isIE67&&(i.className="w2list_listColumn w2list_listColumn_text "+t.class),t.check_id&&i.setAttribute("check_id",t.check_id),null!=e&&null!=e&&(i.innerHTML=e.toString());break;case"button":(i=document.createElement("input")).setAttribute("type","button"),i.setAttribute("itemid",t.id),i.setAttribute("class","w2list_listColumn w2list_listColumn_button "+t.class),this.isIE67&&(i.className="w2list_listColumn w2list_listColumn_button "+t.class),e&&i.setAttribute("value",e)}return i&&t.style&&i.setAttribute("style",t.style),i}}catch(t){o.w.printStackTrace(t)}},u.prototype.createItemNodeStr=function(t,e){try{if(t){var i;switch(t.inputType){case"checkbox":i="<input type='checkbox' class='w2list_listColumn w2list_listColumn_checkbox "+t.class+"'' style='"+t.style+"'",!0===(e=l.D.getBoolean(e))&&(i+=" checked='checked'"),i+="/>";break;case"text":var s="w2list_listColumn_text";this.options.useCloseButton&&(s="w2list_listColumn_text_with_closeButton"),i="<span class='w2list_listColumn "+s+" "+t.class+"' style='"+t.style+"'>",null!=e&&null!=e&&(i+=WebSquare.xml.encode(e.toString())),i+="</span>",this.options.useCloseButton&&(i+="<div class='w2list_listColumn_close'></div>");break;case"button":i="<input type='button' class='w2list_listColumn w2list_listColumn_button "+t.class+"'' style='"+t.style+"'",(e=l.D.getBoolean(e))&&(i+=" value='checked'"),i+="/>"}return i}}catch(t){o.w.printStackTrace(t)}},u.prototype.getAllData=function(){try{if(this.options.virtualized)return this.listRowObjArr;for(var t=[],e=this.getLength(),i=0;i<e;i++){var s=this.getRowData(i);t.push(s)}return t}catch(t){o.w.printStackTrace(t)}},u.prototype.createXMLByObj=function(t){try{var e=this.options.nodeset.split("/"),i=e[e.length-1],s=WebSquare.xml.parse("<"+i+" />").documentElement;t.unique_id?WebSquare.xml.setAttribute(s,"unique_id",t.unique_id):(WebSquare.xml.setAttribute(s,"unique_id",this.id+"_"+this.uniqueIdSequence),this.uniqueIdSequence++);for(var n=0;n<this.listColumnInfo.length;n++){var r=this.listColumnInfo[n].ref,l=r.lastIndexOf("/");if(l>0){
var h=r.substring(0,l),a=r.substring(l+1);if(a.match(/[@'"()=]/i).length>0){var d=WebSquare.xml.createNode(s,h,!1);(u=t[this.listColumnInfo[n].id])||(u=this.listColumnInfo[n].value),a=a.replace(/[@'"()=]/i,""),WebSquare.xml.setAttribute(d,a,u)}else WebSquare.xml.createNode(s,r,!1)}else{var u,c=this.listColumnInfo[n].ref.replace(/[@'"()=]/i,"");(u=t[this.listColumnInfo[n].id])||(u=this.listColumnInfo[n].value),WebSquare.xml.setAttribute(s,c,u)}}return s}catch(t){o.w.printStackTrace(t)}},u.prototype.createRenderByObj=function(t,e){try{if(t){t.unique_id||(t.unique_id=this.id+"_"+this.uniqueIdSequence,this.uniqueIdSequence++);var i,s,n,r=document.createElement(this.listRowInfo.tagName);r.setAttribute("class","w2list_listRow "+this.listRowInfo.class),r.setAttribute("style",this.listRowInfo.style),this.isIE67&&(r.className="w2list_listRow "+this.listRowInfo.class,r.style.cssText=this.listRowInfo.style),r.setAttribute("unique_id",t.unique_id),this.listRowInfo.check_id&&r.setAttribute("check_id",this.listRowInfo.check_id);for(var l=[],h=0;h<this.listColumnInfo.length;h++){var a=this.listColumnInfo[h].id;null!=t[a]||null!=t[a]?i=t[a]:(i=this.listColumnInfo[h].value,t[this.listColumnInfo[h].id]=this.listColumnInfo[h].value),n=this.listColumnInfo[h],s=this.createItemNode(n,i),l[h]=s}if(0!=l.length)for(h=0;h<l.length;h++)l[h]&&r.appendChild(l[h]);this.options.virtualized&&(r.style.backgroundColor=e?this.options.selectedCellColor:"")}return r}catch(t){o.w.printStackTrace(t)}},u.prototype.createObjByXML=function(t){try{for(var e,i,s,n={},r=0;r<this.listColumnInfo.length;r++)i=(e=this.listColumnInfo[r]).value,""!=(s=WebSquare.xml.getValue(t,e.ref))&&(i=s),n[e.id]=i;return n.unique_id=t.getAttribute("unique_id"),n}catch(t){o.w.printStackTrace(t)}},u.prototype.handleClickEvent=function(t){try{if(this.options.virtualized){for(var e,i,s,n="",l=this.getElementById(this.id+"_items_main"),h=this.event.getTargetIterator(t,this.render);h.next()&&!h.match(null,this.id)&&!h.match(null,l.id);){if(h.match("w2list_listRow")){""==n&&(n="w2list_listRow"),e=(d=h.getElement()).getAttribute("unique_id"),this.options.labelCheck&&(s=d.getAttribute("check_id"));break}if(h.match("w2list_listColumn_checkbox"))n="w2list_listColumn_checkbox",i=(d=h.getElement()).getAttribute("itemid");else if(h.match("w2list_listColumn_text")){n="w2list_listColumn_text",i=(d=h.getElement()).getAttribute("itemid"),this.options.labelCheck&&(s=d.getAttribute("check_id"))}else if(h.match("w2list_listColumn_button")){n="w2list_listColumn_button",i=(d=h.getElement()).getAttribute("itemid")}}if(h=null,""!=n&&e)for(var a=0;a<this.listRowObjArr.length;a++)if(this.listRowObjArr[a].unique_id==e){switch(n){case"w2list_listRow":r.B.fireEvent(this,"onrowclick",a),this.options.labelCheck&&this.toggleCheckbox(a,s);break;case"w2list_listColumn_text":this.options.labelCheck&&this.toggleCheckbox(a,s);break;case"w2list_listColumn_checkbox":this.toggleCheckbox(a,i)}this.selectedIndex=a;break}this.setFirstRowIndex(this.firstListIndex,!0)}else{for(h=this.event.getTargetIterator(t,this.render);h.next()&&!h.match(null,this.id);){if(h.match("w2list_listRow")){var d=h.getElement();for(a=0;a<this.listRowObjArr.length;a++)if(this.getRenderByUniqueId(this.listRowObjArr[a].unique_id)==d)return u=a,void r.B.fireEvent(this,"onrowclick",u)}if(h.match("w2list_listColumn_checkbox")){var u,c;for(d=h.getElement(),a=0;a<this.listRowObjArr.length;a++)for(var p=0;p<this.listColumnInfo.length;p++)if(this.getRenderByUniqueId(this.listRowObjArr[a].unique_id)&&this.getRenderByUniqueId(this.listRowObjArr[a].unique_id).childNodes[p]==d)return u=a,c=this.listColumnInfo[p].id,void this.toggleCheckbox(u,c)}}h=null}}catch(t){o.w.printStackTrace(t,null,this)}},u.prototype.fireOnchange=function(){try{r.B.fireEvent(this,"onchange")}catch(t){o.w.printStackTrace(t,null,this)}},u.prototype.handleMouseoverEvent=function(t){try{
for(var e=this.event.getTargetIterator(t,this.render);e.next()&&!e.match(null,this.id);)e.match("w2list_listRow")&&this.addClass(e.getElement(),"w2list_listRow_over");e=null}catch(t){o.w.printStackTrace(t,null,this)}},u.prototype.handleMouseoutEvent=function(t){try{for(var e=this.event.getTargetIterator(t,this.render);e.next()&&!e.match(null,this.id);)e.match("w2list_listRow")&&this.removeClass(e.getElement(),"w2list_listRow_over");e=null}catch(t){o.w.printStackTrace(t,null,this)}},u.prototype.handleMousewheelEvent=function(t){try{var e;r.B.stopEvent(t),this.options.wheelRows>0?(e=r.B.getMouseWheelDelta(t),e=-1*Math.round(this.options.wheelRows*e)):e=l.D.isFF()?t.deltaY:l.D.isIEAllVersion(11)?t.deltaY/40:t.wheelDelta/-40;var i=Math.floor(e),s=this.firstListIndex+i;this.setFirstRowIndex(s)}catch(t){o.w.printStackTrace(t,null,this)}},u.prototype.handleKeydownEvent=function(t){try{if(this.options.useSearch&&this.event.isMe(t,this.dom.input)&&(this.editmode=!0,this.inputKeyDown(t,!1)),this.options.virtualized){var e=t.charCode?t.charCode:t.keyCode;if(38==e){var i=this.firstListIndex?this.firstListIndex:0;null!=this.selectedIndex?(this.selectedIndex--,this.selectedIndex<0&&(this.selectedIndex=0),(this.selectedIndex<this.firstListIndex||this.selectedIndex>this.firstListIndex+(this.options.visibleRowNum-1))&&(i=this.selectedIndex)):i--,this.setFirstRowIndex(i)}else if(40==e){i=this.firstListIndex?this.firstListIndex:0;null!=this.selectedIndex?(this.selectedIndex++,this.selectedIndex>=this.listRowObjArr.length&&(this.selectedIndex=this.listRowObjArr.length-1),(this.selectedIndex<this.firstListIndex||this.selectedIndex>this.firstListIndex+(this.options.visibleRowNum-1))&&(i=this.selectedIndex-(this.options.visibleRowNum-1))):i++,this.setFirstRowIndex(i)}}}catch(t){o.w.printStackTrace(t,null,this)}},u.prototype.inputKeyDown=function(t,e){},u.prototype.handleDragEvent=function(t){for(var e=this.event.getTargetIterator(t);e.next();)if(e.match("w2list_listRow")){if(!this.options.sortable)return;e.getElement().style.cursor="pointer",l.D.emptySelection();for(var i,n=this.id,o=e.getElement(),r=this.getChildNodes(),h=0;h<r.length;h++)if(r[h]==o){i=h;break}var a=this;return void WebSquare.dragdrop.gDragManager.activate(t,o,{id:this.id+"_drag",className:"w2list w2list_listRow w2list_drag",contents:this.options.detachMessage||" detached item ",delay:15,detachIdx:i,detachListId:n,applyMousePosition:!0,onDrop:function(t,e,i,n,o,r,h){var d,u,c,p,f=!1,m=this.detachIdx,v=this.detachListId,g=a,w=null;for(this.isMobile?(w=new WebSquare.targetIterator(document.elementFromPoint(h.changedTouches[0].clientX,h.changedTouches[0].clientY)),h.preventDefault()):w=a.event.getTargetIterator(h);w.next();){if(w.match("w2list_listRow")){f=!0;for(var b=(p=w.getElement()).parentNode.childNodes,y=0;y<b.length;y++)if(b[y]==p){c=y;break}}if(w.match("w2list")){f=!0,u=w.getElement().id,d=l.D.getComponentById(u);break}if(w.match(null,null,"body"))return}if(f){var I=!1;if("object"==(0,s.Z)(p)&&"number"==typeof c||(I=!0,p=t,c=d?0==d.getLength()?0:d.getLength():0),v==u)m!=(c=I?c-1:c)&&(g.options.nodeset?g.moveRow(m,c):g.moveRowNM(m,c));else{var _=g.listRowObjArr[m];if(g.options.nodeset?g.removeRow(m):g.removeRowNM(m),delete _.unique_id,!d)return;d.options.nodeset?d.insertRow(c,_):d.insertRowNM(c,_)}}}})}},u.prototype.getMaxItemWidth=function(t){try{var e,i=0;e=this.options.virtualized?document.getElementById(this.id+"_items_main"):this.render;for(var s=0;s<e.childNodes.length;s++){for(var n=0,r=e.childNodes[s],l=0;l<r.childNodes.length;l++)n+=WebSquare.style.getSize(r.childNodes[l],"width");n>i&&(i=n)}return i+10}catch(t){o.w.printStackTrace(t,null,this)}},u.prototype.setFirstRowIndex=function(t,e){try{t=Math.max(0,Math.min(this.listRowObjArr.length-this.options.visibleRowNum,t)),this.firstListIndex=t;var i=this.getAllData();if(i.length>0){e||this.adjustScrollYThumb(t);for(var s=0;s<Math.min(this.options.visibleRowNum,this.listRowObjArr.length);s++){
if(this.fastDrawRawData(s,t+s),this.isIE67)this.getElementById(this.id+"_items_main").getElementsByTagName("input")[s].checked=i[s].id1}}}catch(t){o.w.printStackTrace(t,null,this)}},u.prototype.adjustRender=function(){var t=this.options.rowHeight,e=this.options.useSearch?1:0;this.render.style.height=t*(Math.min(this.listRowObjArr.length,this.options.visibleRowNum)+e)+"px";var i=this.getElementById(this.id+"_main"),s=this.getElementById(this.id+"_scroll_main"),n=this.listRowObjArr.length>this.options.visibleRowNum;if(i&&s){var o=12;n?(o=12,i.style.paddingRight=this.isIE67?"0":"12px",s.style.width=o+"px",s.style.display="block"):(o=0,i.style.paddingRight="0",s.style.width=o+"px",s.style.display="none"),this.options.useSearch}this.onListRowObjArrChanged()},u.prototype.adjustScrollYThumb=function(t){if(this.options.virtualized){var e=this.getElementById(this.id+"_scroll_thumb"),i=this.getElementById(this.id+"_scroll_track"),s=this.listRowObjArr.length-this.options.visibleRowNum;if(t>s)e.style.top=i.offsetHeight-i.offsetHeight+"px";else{var n=(i.offsetHeight-e.offsetHeight)/s;isNaN(n)&&(n=0),e.style.top=t*n+"px"}}},u.prototype.fastDrawRawData=function(t,e){var i,s=this.getElementById(this.id+"_items_main");if(s.children.length>t){var n=s.children[t];this.selectedIndex===e?n.style.backgroundColor=this.options.selectedCellColor:n.style.backgroundColor="";var o=this.listRowObjArr[e];o.unique_id||(o.unique_id=this.id+"_"+this.uniqueIdSequence,this.uniqueIdSequence++),s.children[t].setAttribute("unique_id",o.unique_id);for(var r=0;r<this.listColumnInfo.length;r++){var l=this.listColumnInfo[r].id;null!=o[l]||null!=o[l]?i=o[l]:(i=this.listColumnInfo[r].value,o[this.listColumnInfo[r].id]=this.listColumnInfo[r].value);var h=this.listColumnInfo[r];this.updateItemNode(h,i,t,r)}}else{var a=this.createRenderByObj(this.listRowObjArr[e],this.selectedIndex===e);s.appendChild(a)}},u.prototype.updateItemNode=function(t,e,i,s){try{if(t){var n=this.getElementById(this.id+"_items_main").children[i].children[s];switch(t.inputType){case"checkbox":e=l.D.getBoolean(e),n.checked=!0===e;break;case"text":null!=e&&null!=e&&(n.innerHTML=e.toString());break;case"button":e&&n.setAttribute("value",e)}}}catch(t){o.w.printStackTrace(t)}},u.prototype.saveState=function(t){try{if(null==t)return;t=t.toString(),this.state||(this.state={}),this.state[t]={selectedIndex:this.selectedIndex,firstListIndex:this.firstListIndex}}catch(t){o.w.printStackTrace(t)}},u.prototype.loadState=function(t){try{if(null==t)return;t=t.toString(),this.state||(this.state={}),this.state[t]?(this.selectedIndex=this.state[t].selectedIndex,this.firstListIndex=this.state[t].firstListIndex):(this.selectedIndex=void 0,this.firstListIndex=0),this.setFirstRowIndex(this.firstListIndex)}catch(t){o.w.printStackTrace(t)}},u.prototype.onListRowObjArrChanged=function(){try{if(this.options.virtualized){var t=this.getElementById(this.id+"_scroll_thumb"),e=this.getElementById(this.id+"_scroll_track");if(this.options.visibleRowNum>=this.listRowObjArr.length)t.style.height="100%";else{var i=e.offsetHeight*(this.options.visibleRowNum/this.listRowObjArr.length);i<28&&(i=28),i=i.toString()+"px",t.style.height=i}}}catch(t){o.w.printStackTrace(t)}},u.prototype.setCellDataNM=function(t,e,i){try{var s,n,r=this.getLength();if("string"==typeof t||!(r>t&&t>=0))return;if("string"==typeof e){s=e;for(var h=0;h<this.listColumnInfo.length;h++)if(s==this.listColumnInfo[h].id){n=h;break}}else"number"==typeof e&&(n=e,s=this.listColumnInfo[e].id);if(this.options.virtualized){this.getElementById(this.id+"_items_main").children.length>t&&this.updateItemNode(this.listColumnInfo[n],i,t,n)}else{var a=this.getChildNodes()[t],d=this.listColumnInfo[n].inputType,u=a.childNodes[n];switch(d){case"checkbox":u.checked=l.D.getBoolean(i);break;case"text":u.innerHTML=i;break;case"button":u.value=i}}}catch(t){o.w.printStackTrace(t)}}}}]);