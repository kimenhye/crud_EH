(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[7913],{7913:function(t,i,o){"use strict";o.r(i),o.d(i,{progressbar:function(){return p}});var s=o(1974),e=o(5948),n=o(1454),r=o(8683),a=o(1),p=function(t,i,o){a.s.call(this,t,i,o)};s.x.extend(p.prototype,a.s.prototype),p.prototype.defaultOptions={pluginType:"uiplugin.progressbar",pluginName:"progressbar",userEvents:["ondone"],type:"bar",step:10,duration:1e3,valueType:"number",autoClose:!1,max:100,min:0,ref:"",progressClass:"type2"},p.prototype.initialize=function(t){},p.prototype.toHTML=function(){var t=[],i=""==this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+i+" class='w2progressbar w2progressbar_"+this.options.progressClass+" "+this.options.className+"'>"),t.push("<div id='"+this.id+"_progress'  class='w2progressbar_progress'>"),t.push("<div id='"+this.id+"_bar'  class='w2progressbar_bar'>"),t.push("<div id='"+this.id+"_label'>"),t.push("</div>"),t.push("</div>"),t.push("</div>"),t.push("</div>"),t.join("")},p.prototype.setPreAction=function(){this.dom.progress=this.getElementById(this.id+"_progress"),this.dom.bar=this.getElementById(this.id+"_bar"),this.dom.label=this.getElementById(this.id+"_label")},p.prototype.setAction=function(){if(this.modelControl.isBinded()){var t=this.modelControl.getData();this.set(t)}},p.prototype.set=function(t){try{var i=this.uuid;if(this.options.min>=t)"percent"==(o=WebSquare.idCache[i]).options.valueType.toLowerCase()?(o.dom.bar.style.width=this.options.min/this.options.max*100+"%",o.dom.label.innerHTML=this.options.min/this.options.max*100+"%"):(o.dom.bar.style.width=this.options.min/this.options.max*100+"%",o.dom.label.innerHTML=this.options.min/this.options.max*100);else if(this.options.max<=t){"percent"==(o=WebSquare.idCache[i]).options.valueType.toLowerCase()?(o.dom.bar.style.width=this.options.max/this.options.max*100+"%",o.dom.label.innerHTML=this.options.max/this.options.max*100+"%"):(o.dom.bar.style.width=this.options.max/this.options.max*100+"%",o.dom.label.innerHTML=this.options.max/this.options.max*100)}else{var o;"percent"==(o=WebSquare.idCache[i]).options.valueType.toLowerCase()?(o.dom.bar.style.width=(t-this.options.min)/(this.options.max-this.options.min)*100+"%",o.dom.label.innerHTML=(t-this.options.min)/(this.options.max-this.options.min)*100+"%"):(o.dom.bar.style.width=(t-this.options.min)/(this.options.max-this.options.min)*100+"%",o.dom.label.innerHTML=(t-this.options.min)/(this.options.max-this.options.min)*100)}o.options.autoClose&&WebSquare.removeNode(o.render)}catch(t){e.w.printStackTrace(t,null,this)}},p.prototype.get=function(){try{var t=0,i=this.dom.bar.style.width;return i.indexOf("%")>-1&&(t=parseInt(i)),t}catch(t){e.w.printStackTrace(t,null,this)}},p.prototype.animate=function(t,i,o,s){try{var a=this.uuid,p=(s="function"==typeof s?s:function(){},function(t){var i=WebSquare.idCache[a];return t=i.options.min>=t?i.options.min/i.options.max*100:i.options.max<=t?i.options.max/i.options.max*100:(t-i.options.min)/(i.options.max-i.options.min)*100});t=p(t),i=p(i);r.D.setInterval((function(){t>=i?(s.apply(this,[i]),this.options.autoClose&&WebSquare.removeNode(this.render),100==t&&n.B.fireEvent(this,"ondone",t),r.D.clearInterval(this.id+"_animate")):(t+=this.options.step,"percent"==this.options.valueType.toLowerCase()?(this.dom.bar.style.width=t+"%",this.dom.label.innerHTML=1*t+"%"):(this.dom.bar.style.width=t+"%",this.dom.label.innerHTML=1*t))}),{key:this.id+"_animate",caller:this,delay:o/i})}catch(t){e.w.printStackTrace(t,null,this)}},p.prototype.stop=function(){try{r.D.clearInterval(this.id+"_animate")}catch(t){e.w.printStackTrace(t,null,this)}},p.prototype.refresh=function(){try{var t=this.modelControl.getData();this.set(t)}catch(t){e.w.printStackTrace(t,null,this)}},p.prototype.setRef=function(t){try{this.modelControl.isBinded()||(this.modelControl.useRef=!0),this.options.ref=t,this.modelControl.setRef(t),this.refresh()}catch(t){
e.w.printStackTrace(t)}},p.prototype.finalize=function(){try{this.stop()}catch(t){e.w.printStackTrace(t)}}}}]);