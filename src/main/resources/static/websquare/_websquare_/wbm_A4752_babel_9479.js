(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[9479],{9479:function(t,e,n){"use strict";n.r(e),n.d(e,{image:function(){return p}});var i=n(1974),s=n(5052),o=n(5948),r=n(1454),a=n(8683),c=n(9075),l=n(1),p=function(t,e,n){l.s.call(this,t,e,n)};i.x.extend(p.prototype,l.s.prototype),p.prototype.defaultOptions={useConfig:!0,pluginType:"uiplugin.image",pluginName:"image",systemEvents:["onabort","onerror","onblur","onclick","ondblclick","onfocus","onmousedown","onmouseup","onmouseout","onmouseover","onmousemove"],src:"",alt:"",usemap:"",title:"",longdesc:""},p.prototype.initialize=function(t){},p.prototype.toHTML=function(){try{var t=[],e=this.options.src?this.getImageURL(this.options.src):"",n=""==this.options.title?"":"title='"+this.options.title+"'",i=""==this.options.usemap?"":"usemap='"+this.options.usemap+"'",s=""==this.options.longdesc?"":"longdesc='"+this.options.longdesc+"'",r=""==this.options.style?"":"style='"+this.options.style+"'",a=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'",c="";if("$empty"==this.options.alt)var l="alt=''";else l=""==this.options.alt?"":"alt='"+this.options.alt+"'";return this.options.onerror&&(c=' onerror="('+this.options.onerror+').call(this,event);" '),t.push("<img id='"+this.id+"' src='"+e+"' "+r+" "+a+" class='w2image "+this.options.className+"' "+l+" "+n+" "+i+" "+s+" "+c+" />"),t.join("")}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setAction=function(){try{a.D.isIE(6)||a.D.isIE(7)||a.D.isIE(8)||a.D.isIE(9)||(this.event.addListener(this.render,"ondragover",this.event.bindAsEventListener(this,this.handleDragOverEvent)),this.event.addListener(this.render,"ondrop",this.event.bindAsEventListener(this,this.handleDropEvent))),this.refresh()}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.refresh=function(){try{if(this.modelControl.isBinded()){var t=this.modelControl.getData();this.setSrcNM(t)}}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setSrc=function(t){try{var e="";t&&(e=s.v.getImageURL(t)),this.render.src=e}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setSrcNM=function(t){try{var e=t?this.getImageURL(t):"";this.render.src=e}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.getSrc=function(){try{return this.render.src}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setLongdesc=function(t){try{this.render.longDesc=t}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.getLongdesc=function(){try{return this.render.longDesc}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setAlt=function(t){try{this.render.alt=t}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.getAlt=function(){try{return this.render.alt}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.onPropertyChange=function(t,e){try{switch(t){case"disabled":1==e?(this.setOpacity(.3),this.addClass(this.render,"w2image_disabled")):(this.setOpacity(1),this.removeClass(this.render,"w2image_disabled"))}}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.getDataListInfo=function(){try{var t={};return this.modelControl.isDataCollectionRefBinded?(t.id=this.modelControl.dataCollectionRefInfo.dataComp.id,t.ref=this.options.ref,t):null}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.handleDropEvent=function(t){try{r.B.stopEvent(t);var e=t.dataTransfer.files[0],n=new FileReader,i=this;n?(n.onload=function(t){i.setSrc(t.target.result)},n.readAsDataURL(e)):c.k.printLog("NOT SUPPORT HTML5 FILE API["+this.id+"]")}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.handleDragOverEvent=function(t){try{r.B.stopEvent(t)}catch(t){o.w.printStackTrace(t,null,this)}}}}]);