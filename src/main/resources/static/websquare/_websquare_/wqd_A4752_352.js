(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[352],{5352:(e,t,a)=>{"use strict";a.r(t),a.d(t,{iframe:()=>m});var o=a(5405),n=a(465),r=a(5130),i=a(6146),s=a(209),c=a(6342),l=a(6247),m=function(e,t,a){l.s.call(this,e,t,a)};o.x.extend(m.prototype,l.s.prototype),m.prototype.defaultOptions={pluginType:"uiplugin.iframe",pluginName:"iframe",userEvents:["oniframeload","oniframeunload"],src:"",scrolling:"",title:"",name:"",allowTransparency:"",spa:!1,spaParam:"wq_spaParam",relativePath:!1,spaReplaceHistory:!1},m.prototype.initialize=function(e){try{"true"==n.v.getConfiguration("/WebSquare/spa/@value")&&(this.options.spa=!0),"true"==n.v.getConfiguration("/WebSquare/iframe/relativePath/@value")&&(this.options.relativePath=!0),this.options.dataObject&&this.setDataObject(this.options.dataObject)}catch(e){r.w.printStackTrace(e,null,this)}},m.prototype.toHTML=function(){try{var e="."+WebSquare.w2xExtension,t=this.options.src;if(""!=t){var a,o=t.slice(0),i=-1;(a=t.indexOf("?"))>-1?o=o.substring(0,a):(i=t.indexOf("#"))>-1&&(o=o.substring(0,i)),o.indexOf("&")>-1&&(o=o.substring(0,o.indexOf("&")));var c="w2xPath";if(s.D.getEncodeParameterOption("pathName")?c=s.D.getEncodeParameterOption("pathName"):s.D.isEncodeParameter()&&(c=s.D.encodeParameter("w2xPath")),".xml"===o.substring(o.lastIndexOf(".")))if(this.options.spa){var l="?"+this.options.spaParam+"="+(this.uuid||this.id),m=this.getURL(t),g=location.toString();(b=g.indexOf("?"))<0&&(b=g.indexOf("#")),b<0&&(b=g.length);var u=g.substring(0,b);if(s.D.getEncodeParameterOption("onlyParam")){for(var d=m.split(/[\&\?]/),f=0;f<d.length;f++)(D=d[f].indexOf("="))>=0&&(d[f]=s.D.encodeParameter(d[f].substring(0,D))+d[f].substring(D));m=d.join("&")}if(u.indexOf(e)>=0){var h=m.substring(0,m.lastIndexOf(".xml"))+e;if(s.D.getBoolean(n.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))t=h;else{var w="?w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();s.D.isEncodeParameter()&&(w=s.D.getEncodeParameterOption("onlyParam")?s.D.encodeParameter("?w2xHome=")+WebSquare.w2xHome+s.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():s.D.encodeParameter(w)),t=h+w}}else if(WebSquare.isHoneyComb){window.frameElement?window.sessionStorage[window.frameElement.id]=m:window.sessionStorage.w2xpath=m;var p=u.indexOf("?");p>=0&&(u=u.substring(0,p)),t=u+l}else if(s.D.getBoolean(n.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))t=s.D.isEncodeParameter()?s.D.getEncodeParameterOption("onlyParam")?u+l+"#"+c+"="+m:u+l+"#"+c+"="+s.D.encodeParameter(m):u+l+"#"+c+"="+m;else{w="&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();t=s.D.isEncodeParameter()?s.D.getEncodeParameterOption("onlyParam")?u+l+"#"+c+"="+m+(w=s.D.encodeParameter("?w2xHome=")+WebSquare.w2xHome+s.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config()):u+l+"#"+c+"="+s.D.encodeParameter(m+w):u+l+"#"+c+"="+m+w}}else{var b;t=this.getURL(t),(b=location.toString().indexOf("?"))<0&&(b=location.toString().indexOf("#"));var x=location.toString().substring(0,b);if(b<0&&(x=location.toString()),t=t.replace("?","&"),s.D.getEncodeParameterOption("onlyParam")){var D;for(d=t.split(/[\&\?]/),f=0;f<d.length;f++)(D=d[f].indexOf("="))>=0&&(d[f]=s.D.encodeParameter(d[f].substring(0,D))+d[f].substring(D));t=d.join("&")}if(x.indexOf(e)>=0){h=t.substring(0,t.lastIndexOf(".xml"))+e;if(s.D.getBoolean(n.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))t=h;else{w="?w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();s.D.isEncodeParameter()&&(w=s.D.getEncodeParameterOption("onlyParam")?s.D.encodeParameter("?w2xHome=")+WebSquare.w2xHome+s.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():s.D.encodeParameter(w)),t=h+w}
}else WebSquare.isHoneyComb?(window.frameElement?window.sessionStorage[window.frameElement.id]=t:window.sessionStorage.w2xpath=t,t=x):t=s.D.getBoolean(n.v.getConfiguration("/WebSquare/stylesheet/@relativePath"))?s.D.isEncodeParameter()?s.D.getEncodeParameterOption("onlyParam")?x+"?"+c+"="+t+this._getW2Config():x+"?"+c+"="+s.D.encodeParameter(t)+this._getW2Config():x+"?"+c+"="+t+this._getW2Config():s.D.isEncodeParameter()?s.D.getEncodeParameterOption("onlyParam")?x+"?"+c+"="+t+s.D.encodeParameter("&w2xHome=")+WebSquare.w2xHome+s.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():x+"?"+c+"="+s.D.encodeParameter(t+"&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config()):x+"?"+c+"="+t+"&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config()}else this.options.relativePath&&(t=this.getURL(t));t="src='"+t+"'"}else""==(t=WebSquare.net.getSSLBlankPage())&&(t="src='about:blank'");var S=""==this.options.allowTransparency?"":"allowTransparency='"+this.options.allowTransparency+"'",P=""==this.options.name?"":"name='"+this.options.name+"'",W=""==this.options.scrolling?"":"scrolling='"+this.options.scrolling+"'",y=""==this.options.style?"":"style='"+this.options.style+"'",O=""==this.options.title?"":"title='"+this.options.title+"'";return"<iframe id='"+this.id+"' "+t+" "+y+" class='w2iframe "+this.options.className+"' frameBorder='0' "+O+" "+S+" "+P+" "+W+"></iframe>"}catch(e){r.w.printStackTrace(e,null,this)}},m.prototype.setAction=function(){},m.prototype.finalize=function(){try{this.fireIframeunload(),this.activeStatus="finalize"}catch(e){r.w.printStackTrace(e,null,this)}},m.prototype.setSrc=function(e,t){try{"object"==typeof t&&null!=t&&"object"==typeof t.dataObject&&(this._removeDataObject(),this.setDataObject(t.dataObject));var a,o,i="."+WebSquare.w2xExtension,l=!1,m=s.D.getBoolean(t),g=e.slice(0),u=-1;if((a=e.indexOf("?"))>-1?g=g.substring(0,a):(u=e.indexOf("#"))>-1&&(g=g.substring(0,u)),(o=g.indexOf("&"))>-1&&(g=g.substring(0,o)),".xml"===g.substring(g.lastIndexOf(".")))t="1",l=this.options.spa;else{var d=this.getWindow(),f=this.getSrc();try{null!=d&&null!=d.WebSquare&&(f=d.location.toString());var h=f.indexOf("#"),w=e.indexOf("#");h<0&&(h=f.length),w<0&&(w=e.length),l=f.substring(0,h)==e.substring(0,w)}catch(e){c.k.printLog("warning : cross-origin frame["+this.id+"]")}}var p="w2xPath";s.D.getEncodeParameterOption("pathName")?p=s.D.getEncodeParameterOption("pathName"):s.D.isEncodeParameter()&&(p=s.D.encodeParameter("w2xPath"));try{if(!l)"true"!=n.v.getConfiguration("/WebSquare/clearMemory/@value")&&this.getWindow().WebSquare&&"function"==typeof this.getWindow().WebSquare.clearMemory&&this.getWindow().WebSquare.clearMemory()}catch(e){}"about:blank"==e||l||("https:"==location.protocol?this.render.setAttribute("src",WebSquare.net.getSSLBlankPage(!0)):this.render.setAttribute("src","about:blank"));g=e;if(e.indexOf("?")>-1&&(g=g.substring(0,g.indexOf("?"))),null!=e){d=this.getWindow();var b=location.toString();try{null!=d&&null!=d.WebSquare&&(b=d.location.toString(),d.WebSquare.pageXMLString=null)}catch(e){c.k.printLog("warning : cross-origin frame["+this.id+"]")}if("1"===t&&l){var x=this.getURL(e);(C=b.indexOf("#"))<0&&(C=b.length);var D=b.substring(0,C),S="",P="";if(this.options.spaParam){P="?"+this.options.spaParam+"="+(this.uuid||this.id);var W=new RegExp("\\?"+this.options.spaParam+"=wq_uuid_[0-9]+","g");D=D.replace(W,"")}if(s.D.getEncodeParameterOption("onlyParam")){for(var y=x.split(/[\&\?]/),O=0;O<y.length;O++)(R=y[O].indexOf("="))>=0&&(y[O]=s.D.encodeParameter(y[O].substring(0,R))+y[O].substring(R));x=y.join("&")}if(P&&D.indexOf(i)>=0){var q=x.substring(0,x.lastIndexOf(".xml"))+i;if(s.D.getBoolean(n.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))e=q;else{S="?w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config()
;s.D.isEncodeParameter()&&(S=s.D.getEncodeParameterOption("onlyParam")?s.D.encodeParameter("?w2xHome=")+WebSquare.w2xHome+s.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():s.D.encodeParameter(S)),e=q+S}}else if(WebSquare.isHoneyComb){window.frameElement?window.sessionStorage[window.frameElement.id]=x:window.sessionStorage.w2xpath=x;var v=D.indexOf("?");v>=0&&(D=D.substring(0,v)),e=D+P}else s.D.getBoolean(n.v.getConfiguration("/WebSquare/stylesheet/@relativePath"))?e=s.D.isEncodeParameter()?s.D.getEncodeParameterOption("onlyParam")?D+P+"#"+p+"="+x:D+P+"#"+p+"="+s.D.encodeParameter(x):D+P+"#"+p+"="+x:(S="&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config(),e=s.D.isEncodeParameter()?s.D.getEncodeParameterOption("onlyParam")?D+P+"#"+p+"="+x+(S=s.D.encodeParameter("&w2xHome=")+WebSquare.w2xHome+s.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config()):D+P+"#"+p+"="+s.D.encodeParameter(x+S):D+P+"#"+p+"="+x+S);if((e==b+S||e==b)&&d&&d.WebSquare)d.util.reinitialize(m);else if(m&&d&&d.WebSquare)"onhashchange"in d.window?d.window.onhashchange=null:clearInterval(d.util._hashTestKey),d.core.finalize(),this.render.setAttribute("src",e),d.location.reload();else{d&&d.WebSquare&&(d.WebSquare.w2xPath="");try{(this.options.spaReplaceHistory||"https:"==location.protocol&&WebSquare.net.isSSLBlankPage(d.location.toString()))&&d.location.replace(e)}catch(e){c.k.printLog("warning : cross-origin frame["+this.id+"]")}this.render.setAttribute("src",e)}return}if("1"===t){var C;e=this.getURL(e),(C=b.indexOf("?"))<0&&(C=b.indexOf("#"))<0&&(C=b.length);var E=b.substring(0,C);if(e=e.replace("?","&"),s.D.getEncodeParameterOption("onlyParam")){var R;for(y=e.split(/[\&\?]/),O=0;O<y.length;O++)(R=y[O].indexOf("="))>=0&&(y[O]=s.D.encodeParameter(y[O].substring(0,R))+y[O].substring(R));e=y.join("&")}if(E.indexOf(i)>=0){q=e.substring(0,e.lastIndexOf(".xml"))+i;if(s.D.getBoolean(n.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))e=q;else{S="?w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();s.D.isEncodeParameter()&&(S=s.D.getEncodeParameterOption("onlyParam")?s.D.encodeParameter("&w2xHome=")+WebSquare.w2xHome+s.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():s.D.encodeParameter(S)),e=q+S}}else WebSquare.isHoneyComb?(window.frameElement?window.sessionStorage[window.frameElement.id]=e:window.sessionStorage.w2xpath=e,e=E):e=s.D.getBoolean(n.v.getConfiguration("/WebSquare/stylesheet/@relativePath"))?s.D.isEncodeParameter()?s.D.getEncodeParameterOption("onlyParam")?E+"?"+p+"="+e:E+"?"+p+"="+s.D.encodeParameter(e):E+"?"+p+"="+e:s.D.isEncodeParameter()?s.D.getEncodeParameterOption("onlyParam")?E+"?"+p+"="+e+s.D.encodeParameter("&w2xHome=")+WebSquare.w2xHome+s.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():E+"?"+p+"="+s.D.encodeParameter(e+"&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config()):E+"?"+p+"="+e+"&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();try{"https:"==location.protocol&&WebSquare.net.isSSLBlankPage(d.location.toString())&&d.location.replace(e)}catch(e){c.k.printLog("warning : cross-origin frame["+this.id+"]")}return void this.render.setAttribute("src",e)}try{"https:"==location.protocol&&WebSquare.net.isSSLBlankPage(d.location.toString())&&d.location.replace(e)}catch(e){c.k.printLog("warning : cross-origin frame["+this.id+"]")}this.options.relativePath&&""!=e&&(e=this.getURL(e)),this.render.setAttribute("src",e),l&&e==b&&d&&d.WebSquare&&d.util.reinitialize(m)}}catch(e){r.w.printStackTrace(e,null,this)}},m.prototype.getSrc=function(){try{var e;return this.render&&(e=this.render.getAttribute("src")),e}catch(e){r.w.printStackTrace(e,null,this)}},m.prototype.getWindow=function(){try{return this.render.contentWindow}catch(e){
r.w.printStackTrace(e,null,this)}},m.prototype.setDisabled=function(){$l("iframe에서는 setDisabled를 사용하실 수 없습니다.["+this.id+"]")},m.prototype.setReadOnly=function(){$l("iframe에서는 setReadOnly를 사용하실 수 없습니다.["+this.id+"]")},m.prototype.fireIframeload=function(){i.B.fireEvent(this,"oniframeload",this.getSrc())},m.prototype.fireIframeunload=function(){"finalize"!==this.activeStatus&&i.B.fireEvent(this,"oniframeunload",this.getSrc())},m.prototype._getW2Config=function(){try{var e="",t=-1;if(s.D.isEncodeParameter()){if((t=location.toString().indexOf(s.D.encodeParameter("w2Config")))>=0)(o=(a=location.toString().slice(t+"w2Config=".length)).slice(0,a.indexOf(s.D.encodeParameter("config.xml"))+"config.xml".length))&&(e=s.D.encodeParameter("&w2Config=")+o);else if(s.D.getBoolean(n.v.getConfiguration("/WebSquare/encodeParameter/@fallback"))){var a,o;if((t=location.toString().indexOf("w2Config"))>=0)(o=(a=location.toString().slice(t+"w2Config=".length)).slice(0,a.indexOf("config.xml")+"config.xml".length))&&(e=s.D.getEncodeParameterOption("onlyParam")?s.D.encodeParameter("&w2Config=")+o:s.D.encodeParameter("&w2Config="+o))}}else if((t=location.toString().indexOf("w2Config"))>=0)(o=(a=location.toString().slice(t+"w2Config=".length)).slice(0,a.indexOf("config.xml")+"config.xml".length))&&(e="&w2Config="+o);return e}catch(e){r.w.printStackTrace(e,null,this)}},m.prototype.setDataObject=function(e){try{if("string"==typeof e&&(e=JSON.parse(e)),null==e||"string"!=typeof e.name||0===e.name.length)return;var t=e.type||"string";t=t.toLowerCase();var a,o=e.data,n=e.name;switch(t){case"json":a=JSON.stringify(o);break;case"xml":a=WebSquare.xml.serialize(o);break;case"array":a=s.D.parseArray(o);break;default:a=o}this._dataObject={type:t,name:n,data:a}}catch(e){r.w.printStackTrace(e,null,this)}},m.prototype._getDataObject=function(e){try{var t;return this._dataObject&&"string"==typeof this._dataObject.name&&this._dataObject.name.length>0&&this._dataObject.data&&(t=null==e?this._dataObject:this._dataObject[e]),t}catch(e){r.w.printStackTrace(e,null,this)}},m.prototype._removeDataObject=function(){try{this._dataObject&&(this._dataObject=null,delete this._dataObject)}catch(e){r.w.printStackTrace(e,null,this)}}}}]);