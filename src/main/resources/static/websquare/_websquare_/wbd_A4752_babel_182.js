(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[182],{7182:function(t,e,i){"use strict";i.r(e),i.d(e,{multiupload:function(){return p}});var s=i(1974),a=i(5052),o=i(5948),n=i(1454),r=i(8683),l=i(9075),h=i(1),p=function(t,e,i){h.s.call(this,t,e,i)};s.x.extend(p.prototype,h.s.prototype),p.prototype.defaultOptions={useConfig:!0,pluginType:"uiplugin.multiupload",pluginName:"multiupload",userEvents:["ondone","onComplete","onprogress","onerror"],type:"1",className:"w2multiupload_uploader",action:"",maxsize:"20000",subSize:"",maxcount:"5",sizeUnit:"Byte",displaySizeUnit:"MB",lang:"",debugmode:"false",css:"",filter:"",uploadButton:!0,wmode:!1,selectWithUpload:!1,mode:"flash",subDir:"",selectCallback:"",defaultImage:s.x._resourceURI+"uiplugin/multiupload/images/c_upload_off.gif",hoverImage:s.x._resourceURI+"uiplugin/multiupload/images/c_upload.gif",src:s.x._resourceURI+"uiplugin/multiupload/multiupload.swf?ver=2.1",transparentSrc:s.x._resourceURI+"uiplugin/multiupload/multiupload_transparent.swf?ver=2.1",fireEventOnError:!1,clearOnError:!0},p.prototype.initialize=function(t){try{this.type=this.options.type,this.style=this.options.style,this.className=this.options.className,this.options.action?this.action=this.options.action:this.action=WebSquare.baseServletURI+"upload.wq?callbackFunction="+this.id+".callback",this.count=this.options.maxcount,this.subSize=this.options.subSize,this.subSizeValue=this.subSize?a.v.getConfiguration("/WebSquare/multiUpload/"+this.subSize+"/@value"):"",this.maxsize=1024*this.options.maxsize,this.size=this.subSizeValue&&this.subSizeValue<this.maxsize?this.subSizeValue:this.maxsize,this.lang=this.options.lang||WebSquare.BootLoader.getBrowserLanguage(),this.debugmode=this.options.debugmode,this.fireEventOnError=this.options.fireEventOnError?"true":"false",this.options.css?this.css=this.options.css:this.css=s.x._resourceURI+"uiplugin/multiupload/mystyle.css",this.xmlEvents=this.options.xmlEvents,this.disabled=this.options.disabled,this.uploadButton=this.options.uploadButton,this.selectWithUpload=this.options.selectWithUpload,this.mode=this.options.mode,"transparent"!=this.mode&&"html5_transparent"!=this.mode||(this.options.wmode=!0),this.subDir=this.options.subDir,this.selectCallback=this.options.selectCallback,this.sessionId="",this.html5Upload=!1,"undefined"==typeof FormData||"flash"==this.options.mode||"transparent"==this.options.mode?this.html5Upload=!1:"html5"!=this.options.mode&&"html5_transparent"!=this.options.mode||(this.html5Upload=!0);var e=this.options.filter||WebSquare.language.getMessage("MultiUpload_image")+":*.jpg;*.gif;*.png"||"그림파일:*.jpg;*.gif;*.png",i="|"+WebSquare.language.getMessage("MultiUpload_all")+":*.*"||0;this.filter=this.html5Upload?e:e+i,this.filter=this.makeHTML5FilterString(this.filter),this._inx=0,this.fileArray=[],this.selectedRows=[],this.removeRows=[],this.fileNameArr=[],this.xhrArr=[],this.uploadParam=[],this.uploadParamJSON={},this.returnDataArr=[],this.isWork=!1,this.sizeObj={Byte:1,KB:1024,MB:1048576,GB:1073741824,TB:1099511627776},this.sizeUnit=this.sizeObj[this.options.sizeUnit],this.displaySizeUnit=this.sizeObj[this.options.displaySizeUnit]}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.toHTML=function(){try{var t=[],e=this.options.mode.toLowerCase(),i="html5"==e?"w2multiupload_html5_uploader":"",s=""==this.options.style?"":"style='"+this.options.style+"'",a=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'";if("1"==this.type)if(1==this.html5Upload)"html5"==e?(t.push(" <div id='"+this.id+"' class='"+i+" "+this.options.className+"' "+s+">"),t.push("<div id='"+this.id+"_dropZone' >"),t.push("<table id='"+this.id+"_table'>"),t.push("<thead id='"+this.id+"_thead'>"),t.push("<tr><th><input type='checkbox' id='"+this.id+"_head_chk' /></th><th>파일</th><th>크기</th><th>상태</th></tr>"),t.push("</thead>"),t.push("<tbody id='"+this.id+"_tbody'></tbody>"),t.push("</table>"),t.push("</div>"),
t.push("<div id='"+this.id+"_btnArea' style='margin-top:5px;'>"),t.push("<span class='w2multiupload_html5_inputFile'>"),t.push("<input id='"+this.id+"_btn_dumy' type='button' value='추가' class='w2multiupload_html5_control_btn' style='position:absolute;'></input>"),t.push("<input style='margin: 0pt; padding: 0pt; width:50px; height:17px;opacity: 0.01; filter : alpha(opacity=1);'  name='add' id='"+this.id+"_btn_add' type='file' multiple='multiple'></input>"),t.push("</span>"),t.push("<input id='"+this.id+"_btn_remove' type='button' value='제거' class='w2multiupload_html5_control_btn' ></input> "),t.push("<input id='"+this.id+"_btn_cancel' type='button' value='취소' class='w2multiupload_html5_control_btn' ></input>"),t.push("<input id='"+this.id+"_btn_upload' type='button' value='전송' class='w2multiupload_html5_control_btn' ></input>"),t.push("</div>")):"html5_transparent"==e&&(t.push(" <div id='"+this.id+"' class='"+i+" "+this.options.className+"' "+s+">"),t.push("<span id='"+this.id+"_popBtn' class='w2multiupload_html5_transparent'>"),t.push("<input id='"+this.id+"_file_input' type='file' multiple='multiple' style='width:100%;height:100%;opacity : 0.01;font-size:0px;' title='파일 추가' accept='"+this.filter+"'/>"),t.push("</span>"),t.push("</div>"));else{t.push("<div id='"+this.id+"' "+a+">");var n=""==this.options.defaultImage?"":"src='"+this.options.defaultImage+"'";t.push("<input type='image' id='"+this.id+"_upload' "+n+" />"),t.push("</div>")}else{t.push("<div id='"+this.id+"' "+a+">");n=""==this.options.defaultImage?"":"src='"+this.options.defaultImage+"'";t.push("<input type='image' id='"+this.id+"_upload' "+n+" />"),t.push("</div>")}return t.join("")}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setAction=function(){try{if("1"==this.type)this.html5Upload?"html5"==this.options.mode.toLowerCase()||("html5_transparent"==this.options.mode.toLowerCase()?(this.dom.inputZone=this.getElementById(this.id+"_file_input"),this.html5uploadchange=this.event.bindAsEventListener(this,this.handleOnchange),this.event.addListener2(this.dom.inputZone,"onchange",this.html5uploadchange)):a.v.setTimeout(this,(function(){this.rebuild()}),100)):a.v.setTimeout(this,(function(){this.rebuild()}),100);else{this.upload=document.getElementById(this.id+"_upload"),this.multiupload=document.getElementById(this.id+"ExExternalInterface"),a.v.browserCheck.ieAllVersion?this.setAttValue(this.upload,"className","w2multiupload_button"):this.setAttValue(this.upload,"class","w2multiupload_button");var t=this;n.B.addListener(this.upload,"onclick",(function(e){t.handleClickEvent()})),n.B.addListener(this.upload,"onmouseover",(function(e){t.upload.src=t.options.hoverImage,t.style.cursor="hand"})),n.B.addListener(this.upload,"onmouseout",(function(e){t.upload.src=t.options.defaultImage,t.style.cursor="normal"})),this.relateStyle=a.v.makeStyle(this.style,this.className),a.v.applyStyle(this.upload,this.relateStyle)}}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.getFlashString=function(){try{var t=[],e="";return 1==this.options.wmode&&(e="wmode='transparent'"),a.v.browserCheck.ieAllVersion?(a.v.browserCheck.ie?t.push("<object wmode='transparent' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'  id='"+this.id+"ExExternalInterface'     >"):t.push("<object wmode='transparent' type='application/x-shockwave-flash'  id='"+this.id+"ExExternalInterface' data='"+this.options.src+"' >"),t.push("<param name='movie' value='"+this.options.src+"' />"),t.push("<param name='quality' value='high' />"),t.push("<param name='flashVars' value='css="+this.css+"&uploadButton="+this.uploadButton+"&url="+this.action+"&size="+this.size+"&subSize="+this.subSize+"&count="+this.count+"&sizeUnit="+this.options.sizeUnit+"&displaySizeUnit="+this.options.displaySizeUnit+"&lang="+this.lang+"&id="+this.id+"&debug="+this.debugmode+"&fireEventOnError="+this.fireEventOnError+"&filter="+this.filter+"' />"),
t.push("</object>")):(t.push("<embed "+e+" src='"+this.options.src+"'  class='w2multiupload_uploader'      flashVars='css="+this.css+"&uploadButton="+this.uploadButton+"&url="+this.action+"&size="+this.size+"&subSize="+this.subSize+"&sizeUnit="+this.options.sizeUnit+"&displaySizeUnit="+this.options.displaySizeUnit+"&count="+this.count+"&lang="+this.lang+"&id="+this.id+"&debug="+this.debugmode+"&fireEventOnError="+this.fireEventOnError+"&filter="+this.filter+"' name='"+this.id+"ExExternalInterface' id='"+this.id+"ExExternalInterface' align='middle'     play='true'     loop='false'        quality='high'          allowScriptAccess='sameDomain'      type='application/x-shockwave-flash'                pluginspage='http://www.adobe.com/go/getflashplayer'>"),t.push("</embed>")),t.join("")}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.rebuild=function(){var t=[],e="";if("1"==this.type){e="";a.v.browserCheck.ieAllVersion?(1==this.options.wmode&&(e="wmode='transparent'"),a.v.browserCheck.ie?t.push("<object "+e+" classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'  id='"+this.id+"ExExternalInterface'     >"):t.push("<object "+e+" type='application/x-shockwave-flash'  id='"+this.id+"ExExternalInterface' data='"+("transparent"==this.mode||"html5_transparent"==this.mode?this.options.transparentSrc:this.options.src)+"' >"),"transparent"==this.mode||"html5_transparent"==this.mode?t.push("<param name='movie' value='"+this.options.transparentSrc+"' />"):t.push("<param name='movie' value='"+this.options.src+"' />"),1==this.options.wmode&&t.push("<param name='wmode' value='transparent' />"),t.push("<param name='quality' value='high' />"),t.push("<param name='flashVars' value='css="+this.css+"&uploadButton="+this.uploadButton+"&url="+this.action+"&size="+this.size+"&subSize="+this.subSize+"&sizeUnit="+this.options.sizeUnit+"&displaySizeUnit="+this.options.displaySizeUnit+"&count="+this.count+"&lang="+this.lang+"&id="+this.id+"&debug="+this.debugmode+"&fireEventOnError="+this.fireEventOnError+"&filter="+this.filter+"&selectWithUpload="+this.selectWithUpload+"&subDir="+this.subDir+"&selectCallback="+this.selectCallback+"' />"),a.v.browserCheck.ie&&("transparent"==this.mode||"html5_transparent"==this.mode?t.push("<embed src='"+this.options.transparentSrc+"'  class='w2multiupload_uploader'   flashVars='css="+this.css+"&uploadButton="+this.uploadButton+"&url="+this.action+"&size="+this.size+"&count="+this.count+"&lang="+this.lang+"&id="+this.id+"&debug="+this.debugmode+"&filter="+this.filter+"' name='"+this.id+"ExExternalInterface' id='"+this.id+"ExExternalInterface' align='middle'     play='true'     loop='false'        quality='high'          allowScriptAccess='sameDomain'      type='application/x-shockwave-flash'                pluginspage='http://www.adobe.com/go/getflashplayer'>"):t.push("<embed src='"+this.options.src+"'  class='w2multiupload_uploader'      flashVars='css="+this.css+"&uploadButton="+this.uploadButton+"&url="+this.action+"&size="+this.size+"&subSize="+this.subSize+"&sizeUnit="+this.options.sizeUnit+"&displaySizeUnit="+this.options.displaySizeUnit+"&count="+this.count+"&lang="+this.lang+"&id="+this.id+"&debug="+this.debugmode+"&fireEventOnError="+this.fireEventOnError+"&filter="+this.filter+"' name='"+this.id+"ExExternalInterface' id='"+this.id+"ExExternalInterface' align='middle'     play='true'     loop='false'        quality='high'          allowScriptAccess='sameDomain'      type='application/x-shockwave-flash'                pluginspage='http://www.adobe.com/go/getflashplayer'>"),t.push("</embed>")),t.push("</object>")):(1==this.options.wmode&&(e="wmode='transparent'"),
"transparent"==this.options.mode?t.push("<embed "+e+" src='"+this.options.transparentSrc+"'  class='w2multiupload_uploader'   flashVars='css="+this.css+"&uploadButton="+this.uploadButton+"&url="+this.action+"&size="+this.size+"&subSize="+this.subSize+"&sizeUnit="+this.options.sizeUnit+"&displaySizeUnit="+this.options.displaySizeUnit+"&count="+this.count+"&lang="+this.lang+"&id="+this.id+"&debug="+this.debugmode+"&fireEventOnError="+this.fireEventOnError+"&filter="+this.filter+"&selectWithUpload="+this.selectWithUpload+"&subDir="+this.subDir+"&selectCallback="+this.selectCallback+"' name='"+this.id+"ExExternalInterface' id='"+this.id+"ExExternalInterface' align='middle'        play='true'     loop='false'        quality='high'          allowScriptAccess='sameDomain'      type='application/x-shockwave-flash'                pluginspage='http://www.adobe.com/go/getflashplayer'>"):t.push("<embed "+e+" src='"+this.options.src+"'  class='w2multiupload_uploader'      flashVars='css="+this.css+"&uploadButton="+this.uploadButton+"&url="+this.action+"&size="+this.size+"&subSize="+this.subSize+"&sizeUnit="+this.options.sizeUnit+"&displaySizeUnit="+this.options.displaySizeUnit+"&count="+this.count+"&lang="+this.lang+"&id="+this.id+"&debug="+this.debugmode+"&fireEventOnError="+this.fireEventOnError+"&filter="+this.filter+"&selectWithUpload="+this.selectWithUpload+"&subDir="+this.subDir+"&selectCallback="+this.selectCallback+"' name='"+this.id+"ExExternalInterface' id='"+this.id+"ExExternalInterface' align='middle'        play='true'     loop='false'        quality='high'          allowScriptAccess='sameDomain'      type='application/x-shockwave-flash'                pluginspage='http://www.adobe.com/go/getflashplayer'>"),t.push("</embed>"));var i=document.getElementById(this.id);WebSquare.BootLoader.rebuildInnerHTML(i,t.join("")),a.v.browserCheck.ieAllVersion?this.as=document.getElementById(this.id+"ExExternalInterface"):this.as=document[this.id+"ExExternalInterface"];var s=a.v.makeStyle(this.style);i.style.position="",a.v.applyStyle(this.as,s)}},p.prototype.setParam=function(t,e){try{this.as.setParam(t,e)}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setTitleInput=function(t){try{this.html5Upload&&"html5"==this.options.mode.toLowerCase()||"html5_transparent"==this.options.mode.toLowerCase()?this.dom.inputZone&&this.dom.inputZone.setAttribute("title",t):this.as.setAttribute("title",t)}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.makeHTML5FilterString=function(t){try{if(!this.html5Upload)return t;for(var e=t.split("|"),i=[],s=0,a=e.length;s<a;s++){var o=e[s].split(":"),n=o.length>1?o[1].replaceAll("*","").replaceAll(";",","):o[0];i.push(n)}return i.join("|")}catch(e){return t}},p.prototype.onDone=function(t){try{var e=this.options.mode.toLowerCase();(this.html5Upload&&"html5"==e||"html5_transparent"==e)&&(this.uploadParam=[],this.uploadParamJSON={},this.fileArray=[],this.fileNameArr=[],this.removeRows=[]),n.B.fireEvent(this,"ondone",t)}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setCallback=function(t){try{"function"==typeof t&&(this.callbackFunction=t)}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setAttValue=function(t,e,i){try{a.v.browserCheck.ie?t[e]=i:t.setAttribute(e,i)}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.getValue=function(){try{return this.as.getValue()}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.getFileNames=function(){try{return this.html5Upload?this.fileNameArr:this.as.getFileNames()}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.getFileInfos=function(){try{var t=[];if(this.html5Upload)for(var e=0;e<this.fileArray.length;e++){var i=this.fileArray[e],s={},a=(i.size/this.displaySizeUnit).toFixed(2);s.displaySize=a+" "+this.options.displaySizeUnit,s.name=i.name,s.size=i.size,t.push(s)}else t=this.as.getFileInfos();return t}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.removeAllFiles=function(){try{if(this.html5Upload){
if("html5"==this.options.mode.toLowerCase())for(var t=this.getElementById(this.id+"_table"),e=t.rows.length,i=1;i<e;i++)t.deleteRow(1);this.fileArray=[],this.fileNameArr=[],this.selectedRows=[],this.removeRows=[],this.xhrArr=[]}else this.as.removeAllFiles()}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.removeFile=function(t){try{if(this.html5Upload){for(var e=[],i=[],s=-1,a=0;a<this.fileNameArr.length;a++)this.fileNameArr[a]!=t?(e.push(this.fileNameArr[a]),i.push(this.fileArray[a])):this.fileNameArr[a]==t&&(s=a);if(this.fileNameArr=e,this.fileArray=i,"html5"==this.options.mode.toLowerCase()&&-1==s){var n=this.getElementById(this.id+"_table"),r=n.rows.length;for(a=1;a<r;a++)if(s==a){n.deleteRow(1+s);break}}}else this.as.removeFile(t)}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.browserDisable=function(t){try{if(this.html5Upload){var e=document.getElementById(this.id+"_file_input");e.disabled=1==t||""}else this.as.browserDisable(t)}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.reset=function(){this.as.reset()},p.prototype.setDisabled=function(t){if(this.disabled=t,this.options.disabled=t,this.html5Upload){var e=document.getElementById(this.id+"_file_input");e.disabled=1==t||""}else{document[this.id+"ExExternalInterface"].setDisabled(t)}},p.prototype.disableUpload=function(t){this.as.disableUpload(t)},p.prototype.disableCancel=function(t){this.as.disableCancel(t)},p.prototype.setLeft=function(t){this.as.style.left=t+"px"},p.prototype.setTop=function(t){this.as.style.top=t+"px"},p.prototype.setWidth=function(t){this.as.style.width=t+"px"},p.prototype.setHeight=function(t){this.as.style.height=t+"px"},p.prototype.setParam=function(t,e,i){var s=this.options.mode.toLowerCase();if(this.html5Upload&&"html5"==s||"html5_transparent"==s){var a={};a[e]=i,this.uploadParam.push(a)}else this.as.setParam(t,e,i)},p.prototype.setParamJSON=function(t){var e=this.options.mode.toLowerCase();(this.html5Upload&&"html5"==e||"html5_transparent"==e)&&(this.uploadParamJSON=t)},p.prototype.getDisabled=function(){return this.html5Upload?h.s.prototype.getDisabled.call(this):this.as.getDisabled()},p.prototype.getFileCount=function(){return this.html5Upload?this.fileArray.length:this.as.getFileCount()},p.prototype.setSubDir=function(t){return!(!t||"string"!=typeof t)&&(this.options.subDir=t,this.subDir=t,!0)},p.prototype.setFAction=function(t){this.as.setUrl(t)},p.prototype.setFileParam=function(t){this.as.setUploadDataFieldName(t)},p.prototype.changeAction=function(t){try{this.html5Upload?this.action=t:this.as.setUrl(t)}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.addParam=function(t,e){l.k.printLog("* addParam not supported. Use setParam API.["+this.id+"]")},p.prototype.setButtonSize=function(t,e){try{this.as.setButtonSize(t,e)}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setMaxFileCount=function(t){this.html5Upload?this.count=t:this.as.setMaxFileCount(t)},p.prototype.setMaxFileSize=function(t){this.html5Upload?(this.maxsize=1024*t,this.size=this.subSizeValue&&this.subSizeValue<this.maxsize?this.subSizeValue:this.maxsize):this.as.setMaxFileSize(t)},p.prototype.setFilter=function(t,e){if(null!=t&&null!=e)if(this.options.filter=t+":"+e,this.html5Upload&&"html5"==this.options.mode.toLowerCase()||"html5_transparent"==this.options.mode.toLowerCase()){if(this.dom.inputZone){var i=this.makeHTML5FilterString(this.options.filter);this.dom.inputZone.setAttribute("accept",i)}}else this.as.setFileFilter(t,e)},p.prototype.startUpload=function(){"html5"==this.options.mode.toLowerCase()||(this.html5Upload&&"html5_transparent"==this.options.mode.toLowerCase()?this._startHTML5Upload():this.as.startUpload())},p.prototype.setDebugMode=function(t){this.debugmode=t},p.prototype.setColumnWidth=function(t,e){this.as.setColumnWidth(t,e)},p.prototype.callback=function(t){try{this.html5Upload&&(this.fileArray=[],this.fileNameArr=[],this.removeRows=[],this.xhrArr=[],this.uploadParam=[],this.uploadParamJSON={},this.returnDataArr=[],
this.isWork=!1),n.B.fireEvent(this,"ondone",t)}catch(t){o.w.printStackTrace(t)}},p.prototype.onSelectCallback=function(t){try{if(""==this.selectCallback)return;var e=[];try{e=r.D.isArray(t)?t:"string"==typeof t?JSON.parse(t):[]}catch(t){e=[]}var i="function"==typeof this.selectCallback?this.selectCallback:r.D.getGlobalFunction(this.selectCallback,this.scope_id);"function"==typeof i&&i.call(this,e)}catch(t){o.w.printStackTrace(t)}},p.prototype.onErrorCallback=function(t){try{if(!t)return;var e=[];try{if("string"!=typeof t)return;e=JSON.parse("["+t+"]")}catch(t){return}n.B.fireEvent(this,"onerror",e[0])}catch(t){o.w.printStackTrace(t)}},p.prototype.setSelectCallback=function(t){return!!t&&("string"==typeof t?(this.options.selectCallback=t.wq_trim(),this.selectCallback=t.wq_trim()):"function"==typeof t&&(this.selectCallback=t),!0)},p.prototype.onComplete=function(){try{n.B.fireEvent(this,"onComplete")}catch(t){o.w.printStackTrace(t)}},p.prototype.setAttValue=function(t,e,i){a.v.browserCheck.moz?t.setAttribute(e,i):a.v.browserCheck.ie?t[e]=i:a.v.browserCheck.ieAllVersion&&t.setAttribute(e,i)},p.prototype.close=function(){var t=document.getElementById("mydiv"),e=document.getElementById("myiframe");t&&(t.style.display="none"),e&&(e.style.display="none")},p.prototype.open=function(){var t=document.getElementById("mydiv"),e=document.getElementById("myiframe"),i=document.getElementById("myldiv");t&&(t.style.display="block"),e&&(e.style.display="block"),i&&(i.innerHTML=this.getFlashString())},p.prototype.setAddText=function(t){this.as.setAddText(t)},p.prototype.setCancelText=function(t){this.as.setCancelText(t)},p.prototype.setDelText=function(t){this.as.setDelText(t)},p.prototype.setUploadText=function(t){this.as.setUploadText(t)},p.prototype.setFileColumnName=function(t){this.setColumn1Text(t)},p.prototype.setColumn1Text=function(t){this.as.setColumn1Text(t)},p.prototype.setFileColumnName=function(t){this.setColumn2Text(t)},p.prototype.setColumn2Text=function(t){this.as.setColumn2Text(t)},p.prototype.setFileColumnName=function(t){this.setColumn3Text(t)},p.prototype.setColumn3Text=function(t){this.as.setColumn3Text(t)},p.prototype.setRefSuccessText=function(t){this.as.setRefSuccessText(t)},p.prototype.setRefProgressText=function(t){this.as.setRefProgressText(t)},p.prototype.setRefCancelText=function(t){this.as.setRefCancelText(t)},p.prototype.setRefUploadText=function(t){this.as.setRefUploadText(t)},p.prototype.setMessageDuplicateText=function(t){this.as.setMessageDuplicateText(t)},p.prototype.setMessageMaxCountText=function(t){this.as.setMessageMaxCountText(t)},p.prototype.setMessageMaxSizeText=function(t){this.as.setMessageMaxSizeText(t)},p.prototype.isUploading=function(){return this.html5Upload?this.isWork:this.as.isUploading()},p.prototype.handleOnchange=function(t){try{this.dom.inputZone=document.getElementById(this.id+"_file_input"),this.dom.imgZone=document.getElementById(this.id+"_popBtn");var e=t.dataTransfer&&t.dataTransfer.files?t.dataTransfer.files:this.dom.inputZone.files,i=[];if(e.length>this.dom.inputZone.count||this.fileArray.length+e.length>this.count)return this._fireError("uploadCountExceed",{count:this.count}),this.options.clearOnError&&(this.fileArray=[],this.fileNameArr=[],this.removeRows=[],this.xhrArr=[],this.uploadParam=[],this.uploadParamJSON={},this.returnDataArr=[],this.isWork=!1),void this._clearInput();if(e){for(var a=0,n=e.length;a<n;a++)if(this.size<e[a].size)return this._fireError("fileSizeExceed",{size:(this.size/this.displaySizeUnit).toFixed(2)}),void this._clearInput();for(a=0,n=e.length;a<n;a++){for(var r=!1,l=0;l<this.fileArray.length;l++)if(e[a].name===this.fileArray[l].name&&e[a].size===this.fileArray[l].size&&(p=e[a],u=this.fileArray[l],p.lastModifiedDate?p.lastModifiedDate.toString()===u.lastModifiedDate.toString():p.lastModified?p.lastModified.toString()===u.lastModified.toString():void 0)){r=!0;break}if(0==r){var h=(e[a].size/this.displaySizeUnit).toFixed(2);i.push(s.x.extend({
displaySize:h+" "+this.options.displaySizeUnit},e[a])),this.fileArray.push(e[a]),this.fileNameArr.push(e[a].name),this._inx++}else this._fireError("fileExist",{name:e[a].name})}}""!=this.selectCallback&&this.onSelectCallback(i),this._clearInput()}catch(t){o.w.printStackTrace(t,null,this)}var p,u},p.prototype._handleOndrop=function(t){try{n.B.stopEvent(t);var e=t.dataTransfer.files;if(this.html5Upload&&"html5"==this.options.mode.toLowerCase()){for(var i="",s=0;s<e.length;s++)-1==$.inArray(e[s].name,this.fileNameArr)?(i+="<tr id='_tr"+this._inx+"' trindex='"+this._inx+"'><td><input type='checkbox' name='chk' index='"+this._inx+"'/></td><td>"+e[s].name+"</td><td>"+this._byteCalc(e[s].size)+"</td><td><div id='progress_"+this._inx+"'></div></td></tr>",this.fileArray.push(e[s]),this.fileNameArr.push(e[s].name),this._inx++):this._fireError("fileExist",{name:e[s].name});this.dom.tbody&&(this.dom.tbody.innerHTML+=i,$("#"+this.id+"_tbody tr").click((function(t){$(this).addClass("w2multiupload_html5_uploader_selected").siblings().removeClass("w2multiupload_html5_uploader_selected"),"checkbox"!==t.target.type&&$(":checkbox",this).trigger("click")})))}else for(s=0;s<e.length;s++)-1==$.inArray(e[s].name,this.fileNameArr)?(this.fileArray.push(e[s]),this.fileNameArr.push(e[s].name),this._inx++):this._fireError("fileExist",{name:e[s].name})}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.dropFiles=function(t){try{this.handleOnchange(t)}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.handleOnUpload=function(t){try{for(var e=0;e<this.fileArray.length;e++){var i=this.getElementById("progress_"+e),s=new XMLHttpRequest;this.xhrArr.push(s);var a={};a.progress=i,a.xhr=s,this._handleOnUpload(this.fileArray[e],a)}}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype._handleOnUpload=function(t,e){try{var i=this.action,s=new FormData,a=e.xhr;a.open("POST",i,!0);var n=this,r=this.uuid,l=e.progress;a.onreadystatechange=function(){if(4==a.readyState&&200==a.status){var t=WebSquare.idCache[r],e=a.responseText;t.callback(e.substring(e.indexOf("<ret>"),e.indexOf("</ret>")+6))}},a.upload.addEventListener("progress",(function(t){var e=parseInt(t.loaded/t.total*100);l.innerHTML=e+"%",l.style.width=e+"%"}),!1),a.addEventListener("load",(function(t){l.innerHTML="완료",n._clearInput(),n.fileNameArr=[]}),!1),s.append("Filename",t.name),s.append("FileData",t),this.options.subDir&&s.append("subDir",this.options.subDir),this.options.subSize&&s.append("subSize",this.options.subSize),a.send(s)}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype._handleUpload=function(){},p.prototype._startHTML5Upload=function(){try{if(!this.validateFiles(this.fileArray))return;for(var t=0;t<this.fileArray.length;t++){var e=new XMLHttpRequest;this._XHRUpload(e,this.fileArray[t])}}catch(t){}},p.prototype.validateFiles=function(t,e){try{if(!t)return!1;if(t.length>this.dom.inputZone.count||this.html5Upload&&t.length>this.count)return this._fireError("uploadCountExceed",{count:this.count}),!1;for(var i=0,s=t.length;i<s;i++)if(this.size<t[i].size)return this._fireError("fileSizeExceed",{size:(this.size/this.displaySizeUnit).toFixed(2)}),!1;var a=[],n=!1;for(i=0,s=t.length;i<s;i++)for(var r=0;r<this.fileArray.length;r++)t[i].name===this.fileArray[r]&&t[i].size===this.fileArray[r].size&&a.push(t[i]);for(i=0,s=a.length;i<s;i++)this._fireError("fileExist",{name:a[i].name}),n=!0;return!n&&(e&&(this.fileArray=[],this.fileNameArr=[],this.removeRows=[],this.xhrArr=[],this.uploadParam=[],this.uploadParamJSON={},this.returnDataArr=[],this.isWork=!1,this._clearInput()),!0)}catch(t){o.w.printStackTrace(t,null,this)}return!1},p.prototype._XHRUpload=function(t,e){try{var i=this.action,s=this;t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){var e=t.responseText;s.callbackXHRHandle(e.substring(e.indexOf("<ret>"),e.indexOf("</ret>")+6)),t.onreadystatechange=function(){},t=null}else t.status>="400"&&(s._fireError("HTTPException",{name:t.status}),
t.onreadystatechange=function(){},t=null)},t.open("POST",i,!0),t.addEventListener("load",(function(t){}),!1);var l=new FormData;if(l.append("Filename",e.name),l.append("FileData",e),this.options.subDir&&l.append("subDir",this.options.subDir),this.options.subSize&&l.append("subSize",this.options.subSize),this.uploadParam.length>0)for(var h=0;h<this.uploadParam.length;h++){var p=this.uploadParam[h];for(var u in p)l.append(u,p[u])}if(this.uploadParamJSON[e.name]){p=this.uploadParamJSON[e.name];for(var u in p)l.append(u,p[u])}t.upload.addEventListener("progress",(function(t){var i=Math.round(t.loaded/t.total*100),a={};a.percentData=i,a.fileName=e.name,n.B.fireEvent(s,"onprogress",a)}),!1);var d=a.v.getConfiguration("/WebSquare/handler/requestHeaderFunction/@value");if(""!=d){var c=r.D.getGlobalFunction(d);c&&c(t,"multiupload")}this.isUploading=!0,t.send(l)}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.callbackXHRHandle=function(t){if(this.returnDataArr.push(t),this.returnDataArr.length==this.fileNameArr.length){for(var e=[],i=0;i<this.returnDataArr.length;i++){var s={},a=WebSquare.xml.parse(this.returnDataArr[i]),o=WebSquare.xml.findNode(a,"ret/deniedCodeList"),n=WebSquare.xml.findNode(a,"ret/deniedList"),r=WebSquare.xml.findNode(a,"ret/localfileList"),l=WebSquare.xml.findNode(a,"ret/key"),h=WebSquare.xml.findNode(a,"ret/storedFileList"),p=WebSquare.xml.findNode(a,"ret/maxUploadSize"),u=WebSquare.xml.findNode(a,"ret/subSize"),d=WebSquare.xml.findNode(a,"ret/fileSizeList");s.deniedCode=WebSquare.xml.getTextNodeValue(o)||WebSquare.xml.getValue(a,"ret/deniedCodeList","value")||"",s.deniedFile=WebSquare.xml.getTextNodeValue(n)||WebSquare.xml.getValue(a,"ret/deniedList","value")||"",s.file=WebSquare.xml.getTextNodeValue(h)||WebSquare.xml.getValue(a,"ret/storedFileList","value"),s.key=WebSquare.xml.getTextNodeValue(l)||WebSquare.xml.getValue(a,"ret/key","value"),s.localFile=WebSquare.xml.getTextNodeValue(r)||WebSquare.xml.getValue(a,"ret/localfileList","value"),s.maxUploadSize=WebSquare.xml.getTextNodeValue(p)/this.sizeUnit||WebSquare.xml.getValue(a,"ret/maxUploadSize","value")/this.sizeUnit,s.size=WebSquare.xml.getTextNodeValue(d)/this.sizeUnit||WebSquare.xml.getValue(a,"ret/fileSizeList","value")/this.sizeUnit,s.subSize=u?WebSquare.xml.getTextNodeValue(u)/this.sizeUnit:"",e.push(s),this.removeFile(s.file)}"function"==typeof this.callback&&this.callback(e)}},p.prototype._byteCalc=function(t){try{t=parseInt(t);var e=["bytes","KB","MB","GB","TB","PB"],i=Math.floor(Math.log(t)/Math.log(1024));return"-Infinity"==i?"0 "+e[0]:(t/Math.pow(1024,Math.floor(i))).toFixed(2)+" "+e[i]}catch(i){o.w.printStackTrace(i,null,this)}},p.prototype._clearInput=function(){try{if(this.html5Upload&&"html5"==this.options.mode.toLowerCase());else if(""!=this.dom.inputZone.value)if(a.v.browserCheck.ieAllVersion){var t=document.getElementById(this.id+"_file_input"),e=t.cloneNode(!0),i=t.parentNode;this.event.removeListener(this.dom.inputZone,"onchange",this.html5uploadchange),i.insertBefore(e,t),i.removeChild(t),this.dom.inputZone=e,this.event.addListener2(this.dom.inputZone,"onchange",this.html5uploadchange)}else this.dom.inputZone.value=""}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype._fireError=function(t,e){if(t)try{var i="",s=(e=e||{name:"",size:0,count:0},{});switch(t){case"fileExist":i=WebSquare.language.getMessage("MultiUpload_err_fileExist",e.name)||"파일이 이미 있습니다.  ("+e.name+")",s.deniedCode="1001";break;case"uploadCountExceed":i=WebSquare.language.getMessage("MultiUpload_err_maxCountExceed",e.count)||"업로드 건수가 "+e.count+"건으로 제한되어 있습니다.",s.deniedCode="1002";break;case"fileSizeExceed":i=WebSquare.language.getMessage("MultiUpload_err_fileSizeExceed",e.size+this.options.displaySizeUnit)||"업로드 파일 크기는 "+e.size+this.options.displaySizeUnit+"로 제한되어 있습니다.",s.deniedCode="1003";break;case"HTTPException":i=WebSquare.language.getMessage("MultiUpload_err_HTTPExcpetion",e.name)||"HTTP 오류가 발생했습니다. (status : "+e.name+")",s.deniedCode="1004",
s.status=e.name}this.options.fireEventOnError?(s.type=t,s.message=i,n.B.fireEvent(this,"onerror",s)):alert(i)}catch(t){o.w.printStackTrace(t,null,this)}}}}]);