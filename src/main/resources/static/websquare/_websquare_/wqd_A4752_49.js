(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[49],{3049:(t,e,i)=>{"use strict";i.r(e),i.d(e,{editor:()=>l});var s=i(5405),n=i(465),o=i(5130),r=i(6146),a=i(209),d=i(6342),c=i(6247),l=function(t,e,i){c.s.call(this,t,e,i)};s.x.extend(l.prototype,c.s.prototype),l.prototype.defaultOptions={pluginType:"uiplugin.editor",pluginName:"editor",userEvents:["onload","onchange"],menubar:"simple",editorType:"3.0",useConfig:!0,absolutePath:!1,imageUploadURL:"",imageLoadURL:"",subDir:"",language:"en",transParentDisabled:!1,resizable:!1,version:"",editorHeight:"",editorWidth:"",useCKFinder:""},l.prototype.initialize=function(t){this.options.imageUploadURL=this.options.imageUploadURL||WebSquare.baseServletURI+"imageupload.wq",this.options.imageLoadURL=this.options.imageLoadURL||s.x._resourceURI+"externalJS/editor/loadImg.wq",this.loaded=!1,this.startText="",this.startHtml="",this.orgHTML="",this.options.version||(a.D.isSpartan()?this.options.version="4.5.1":a.D.isIEAllVersion(9)||a.D.isIEAllVersion(11)||a.D.isIEAllVersion(10)||n.v.browserCheck.ipad?this.options.version="4.3":this.options.version="")},l.prototype.initAsync=async function(){window.CKEDITOR||(void 0===window.CKEDITOR_BASEPATH&&(window.CKEDITOR_BASEPATH=s.x._resourceURI+this._getResourcePath()),await inquires(this._getResourcePath()+"ckeditor.js")),a.D.getBoolean(this.options.useCKFinder)&&!window.CKFinder&&await inquires("externalJS/ckfinder/ckfinder.js")},l.prototype.toHTML=function(){var t,e=[],i=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'";return t=""==this.options.style?"":"style='"+this.options.style+"'",e.push("<div id='"+this.id+"' "+t+" class='w2editor "+this.options.className+"' "+i+">"),e.push("<div id='"+this.id+"_'>"),e.push("</div>"),e.push("</div>"),e.join("")},l.prototype.setAction=function(){try{var t,e=this._getResourcePath(),i="skins/",n=!1;"4.17.1"==this.options.version?t="moono-lisa":"4.5.11"===this.options.version||"4.11.3"===this.options.version||"4.14.0"==this.options.version?t="moono":"4.5.1"===this.options.version?t="office2013":"4.3"===this.options.version?t="office2003":(i="",t="office2003",n=!0);var r,d,c,l,h=t+","+CKEDITOR.basePath+e+i+t+"/",p=CKEDITOR.basePath+"contents.css"+WebSquare.BootLoader.getEngineCachePostfix("");-1==CKEDITOR.basePath.indexOf(e)?(CKEDITOR.config.skin=h,CKEDITOR.basePath=CKEDITOR.basePath+e,CKEDITOR.config.contentsCss=p):!0===n&&(CKEDITOR.config.skin="office2003,"+CKEDITOR.basePath+"/office2003/",CKEDITOR.config.contentsCss=p),this.filebrowserUploadBaseUrl=this.options.imageUploadURL+"?callbackFunction="+this.id+".callback&subDir="+this.options.subDir,"4.5.11"==this.options.version?(d=69,c=102,l=72):(d=55,c=111,l=83),r="simple"==this.options.menubar?parseInt(this.render.style.height)-d+"px":parseInt(this.render.offsetWidth)<1395?parseInt(this.render.style.height)-c+"px":parseInt(this.render.style.height)-l+"px";var u={customConfig:"config_3.js",resize_enabled:this.options.resizable,width:"100%",height:r,toolbarCanCollapse:!1,toolbar:this.options.menubar,language:this.options.language,filebrowserUploadUrl:this.filebrowserUploadBaseUrl};a.D.getBoolean(this.options.useCKFinder)&&(u.filebrowserBrowseUrl=s.x._resourceURI+"externalJS/ckfinder/ckfinder.html",u.filebrowserImageBrowseUrl=s.x._resourceURI+"externalJS/ckfinder/ckfinder.html?type=Images",u.filebrowserFlashBrowseUrl=s.x._resourceURI+"externalJS/ckfinder/ckfinder.html?type=Flash",u.filebrowserUploadUrl=s.x._resourceURI+"ckfinder/core/connector/java/connector.ckfinder?command=QuickUpload&type=Files",u.filebrowserImageUploadUrl=s.x._resourceURI+"ckfinder/core/connector/java/connector.ckfinder?command=QuickUpload&type=Images",u.filebrowserFlashUploadUrl=s.x._resourceURI+"ckfinder/core/connector/java/connector.ckfinder?command=QuickUpload&type=Flash",u.image_previewText="&nbsp;"),u.id=this.id+"_";var f=CKEDITOR.replace(this.id+"_",u);a.D.getBoolean(this.options.useCKFinder)&&CKFinder.setupCKEditor(f,"/externalJS/ckfinder/")
;var g=this.uuid;CKEDITOR.instances[this.id+"_"].setData(" "),CKEDITOR.instances[this.id+"_"].on("instanceReady",(function(t){var e=WebSquare.idCache[g];if(e.handleOnLoadEvent(),"source"!==this.config.startupMode){var i=e.render.getElementsByTagName("iframe")[0].contentDocument;e.event.addListener(i,"onclick",e.event.bindAsEventListener(e,e.handleOtherClick))}})),CKEDITOR.instances[this.id+"_"].on("focus",(function(t){WebSquare.idCache[g].handleOnFocusEvent(t)})),CKEDITOR.instances[this.id+"_"].on("blur",(function(t){WebSquare.idCache[g].handleOnBlurEvent(t)}))}catch(t){o.w.printStackTrace(t)}},l.prototype.finalize=function(){try{c.s.prototype.finalize.call(this),CKEDITOR.instances[this.id+"_"]&&CKEDITOR.instances[this.id+"_"].destroy(!0)}catch(t){o.w.printStackTrace(t,null,this)}},l.prototype.setText=function(t){try{if(CKEDITOR.version.charAt(0)<"4"){var e=this.getReadOnly(),i=this.getDisabled();(e||i)&&(this.setDisabled(!1),this.options.disabled=i)}var s=this.uuid;if(!this.loaded)return void(this.startText=t);this.orgHTML=this.getHTML(),CKEDITOR.instances[this.id+"_"].setData("",(function(){this.insertText(t);var e=WebSquare.idCache[s];e.applyReadOnlyDisabled(),this.getData()!=e.orgHTML&&r.B.fireEvent(e,"onchange")}))}catch(t){o.w.printStackTrace(t)}},l.prototype.getText=function(){try{return CKEDITOR.instances[this.id+"_"].document.getBody().getText()}catch(t){o.w.printStackTrace(t)}},l.prototype.setHTML=function(t){try{if(CKEDITOR.version.charAt(0)<"4"){var e=this.getReadOnly(),i=this.getDisabled();(e||i)&&(this.setDisabled(!1),this.options.disabled=i)}var s=this.uuid,n=CKEDITOR.instances[this.id+"_"];if(CKEDITOR.version.charAt(0)<"4"){if(!this.loaded)return void(this.startHtml=t);this.orgHTML=this.getHTML(),n.setData(t,(function(){var t=WebSquare.idCache[s];t.applyReadOnlyDisabled(),this.getData()!=t.orgHTML&&r.B.fireEvent(t,"onchange"),t.resetDirty()}))}else{if(!this.loaded)return void(this.startHtml=t);this.orgHTML=this.getHTML(),n.editable().setData(t,!0),this.getHTML()!=this.orgHTML&&r.B.fireEvent(this,"onchange"),this.resetDirty()}}catch(t){o.w.printStackTrace(t)}},l.prototype.getHTML=function(){try{var t=CKEDITOR.instances[this.id+"_"].getData(),e=n.v.getConfiguration("/WebSquare/editor/tagHandler/@value")||"",i=a.D.getGlobalFunction(e,this.scope_id);return"function"==typeof i&&(t=i.call(this,t)),t}catch(t){o.w.printStackTrace(t)}},l.prototype.focus=function(){try{return CKEDITOR.instances[this.id+"_"].focus()}catch(t){o.w.printStackTrace(t)}},l.prototype.callback=function(t){var e,i,s,n,o=WebSquare.xml.parse(t);if(e=WebSquare.xml.getValue(o,"ret/key"),e=WebSquare.xml.decode(e),i=WebSquare.xml.getValue(o,"ret/storedFileList"),s=WebSquare.xml.getValue(o,"ret/funcNum"),n=WebSquare.xml.getValue(o,"ret/deniedCodeList"),i&&i.length>0)1==this.options.absolutePath?(e=e.wq_replaceAll("/","\\"),CKEDITOR.tools.callFunction(s,e+"\\"+i)):this.options.imageLoadURL.indexOf("?")>-1?CKEDITOR.tools.callFunction(s,this.options.imageLoadURL+"&subDir="+this.options.subDir+"&fileName="+escape(encodeURIComponent(i))):CKEDITOR.tools.callFunction(s,this.options.imageLoadURL+"?subDir="+this.options.subDir+"&fileName="+escape(encodeURIComponent(i)));else{var r="";r="101"==n?"Invalid file extension.":"102"==n?"File Size has been exceed.":"Unknown server error.",CKEDITOR.tools.callFunction(s,"",r)}},l.prototype.setDisabled=function(t){try{t=a.D.getBoolean(t),this.options.disabled=t;var e=null,i=null;if(CKEDITOR.version.charAt(0)<"4"){var s=document.getElementById(this.id+"_disabled_div");e=document.getElementById("cke_top_"+this.id+"_"),i=document.getElementById("cke_contents_"+this.id+"_")}else{s=document.getElementById(this.id+"_disabled_div");e=document.getElementById(CKEDITOR.instances[this.id+"_"].id+"_top"),i=document.getElementById(CKEDITOR.instances[this.id+"_"].id+"_contents")}if(!e&&!i)return;var n=i.getElementsByTagName("iframe")[0].contentWindow;if(0==t&&s)s.style.visibility="hidden",s.style.display="none",s.hidden=!0,
n&&!this.getReadOnly()&&(n.document.documentElement.contentEditable=!0,n.document.body.contentEditable=!0);else if(1!=t||s)1==t&&s&&(n.document.documentElement.contentEditable=!0,n.document.body.contentEditable=!0,s.hidden=!1,s.style.visibility="visible",s.style.display="block");else{var r=document.createElement("div");r.setAttribute("id",this.id+"_disabled_div");var d;if(CKEDITOR.version.charAt(0)<"4")var c=document.getElementById("cke_top_"+this.id+"_").offsetHeight,l=document.getElementById("cke_contents_"+this.id+"_").offsetHeight,h=document.getElementById("cke_bottom_"+this.id+"_").offsetHeight;else c=document.getElementById(CKEDITOR.instances[this.id+"_"].id+"_top").offsetHeight,l=document.getElementById(CKEDITOR.instances[this.id+"_"].id+"_contents").offsetHeight,h=document.getElementById(CKEDITOR.instances[this.id+"_"].id+"_bottom").offsetHeight;d=c+l+h;var p=null;p=1==this.options.transParentDisabled?"background-color: black; position: absolute; left:0px; top:0px; height:"+d+"px; width: 100%; filter : alpha(opacity=0); opacity : 0.0;":a.D.isSpartan()?"background-color: black; position: absolute; left:0px; top:0px; height:"+d+"px; width: 100%; filter : alpha(opacity=30); opacity : 0.3; border:1px solid black;":"background-color: black; position: absolute; left:0px; top:0px; height:"+d+"px; width: 100%; filter : alpha(opacity=30); opacity : 0.3;",r.style.cssText=p,this.render.appendChild(r),n.document.documentElement.contentEditable=!1,n.document.body.contentEditable=!1}return t}catch(t){o.w.printStackTrace(t)}},l.prototype.setReadOnly=function(t){try{return t=a.D.getBoolean(t),this.options.readOnly=t,"4.5.11"==this.options.version||"4.11.3"===this.options.version||"4.14.0"===this.options.version||"4.17.1"==this.options.version?CKEDITOR.instances[this.id+"_"].editable()&&CKEDITOR.instances[this.id+"_"].setReadOnly(t):CKEDITOR.instances[this.id+"_"].setReadOnly(t),t}catch(t){o.w.printStackTrace(t)}},l.prototype.setDomain=function(t){if(t||(t=WebSquare.domain),t&&t.wq_trim().length>0){var e=this.filebrowserUploadBaseUrl;e.indexOf("?")>-1?e+="&":e+="?",e+="domain="+WebSquare.text.URLEncoder(t),CKEDITOR.instances[this.id+"_"].config.filebrowserUploadUrl=e}else CKEDITOR.instances[this.id+"_"].config.filebrowserUploadUrl=this.filebrowserUploadBaseUrl},l.prototype.getDomain=function(){return CKEDITOR.instances[this.id+"_"].config.filebrowserUploadUrl},l.prototype.getImageLoadURL=function(){return this.options.imageLoadURL},l.prototype.setImageLoadURL=function(t){t&&(this.options.imageLoadURL=t)},l.prototype.handleOnLoadEvent=function(){try{var t=this.render.clientWidth||this.render.style.width||WebSquare.style.getComputedStyle(this.render,"width"),e=this.render.clientHeight||this.render.style.height||WebSquare.style.getComputedStyle(this.render,"height");if(this.options.editorWidth&&(t=this.options.editorWidth),this.options.editorHeight&&(e=this.options.editorHeight),CKEDITOR.instances[this.id+"_"].document&&CKEDITOR.instances[this.id+"_"].document.getWindow().$&&CKEDITOR.instances[this.id+"_"].resize(t,e),n.v.browserCheck.ipad){var i=document.getElementById(CKEDITOR.instances[this.id+"_"].id+"_contents"),s=i.getAttribute("style");i.setAttribute("style",s+"overflow-y: auto;-webkit-overflow-scrolling: touch")}this.applyReadOnlyDisabled(),this.loaded=!0,""!=this.startText&&this.setText(this.startText),""!=this.startHtml&&this.setHTML(this.startHtml),r.B.fireEvent(this,"onload")}catch(t){o.w.printStackTrace(t)}},l.prototype.handleOnFocusEvent=function(t){},l.prototype.handleOnBlurEvent=function(t){var e=this.getHTML();this.orgHTML!=e&&(r.B.fireEvent(this,"onchange"),this.orgHTML=e)},l.prototype.applyReadOnlyDisabled=function(){this.getDisabled()?this.setDisabled(!0):this.getReadOnly()&&this.setReadOnly(!0)},l.prototype.resize=function(t,e){try{this.options.resizable?CKEDITOR.instances[this.id+"_"].resize(t,e,!0):d.k.printLog("Set configuration resize true")}catch(t){o.w.printStackTrace(t)}},
l.prototype.handleOtherClick=function(t){try{WebSquare.getBody().getLayerListener().hideAll()}catch(t){o.w.printStackTrace(t)}},l.prototype.resetDirty=function(t){try{CKEDITOR.instances[this.id+"_"].resetDirty()}catch(t){o.w.printStackTrace(t)}},l.prototype.checkDirty=function(t){try{return CKEDITOR.instances[this.id+"_"].checkDirty()}catch(t){o.w.printStackTrace(t)}},l.prototype._getResourcePath=function(t){try{return!0==={"4.17.1":!0,"4.14.0":!0,"4.11.3":!0,"4.5.11":!0,"4.5.1":!0,4.3:!0}[this.options.version]?"externalJS/editor"+this.options.version+"/":"externalJS/editor/"}catch(t){o.w.printStackTrace(t)}}}}]);