(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[4816],{4816:function(t,e,i){"use strict";i.r(e),i.d(e,{gridLayout:function(){return h}});var o=i(1974),r=i(5052),s=i(5948),a=i(1454),n=i(8683),l=i(1),u=i(9075),h=function(t,e,i){l.s.call(this,t,e,i)};o.x.extend(h.prototype,l.s.prototype),h.prototype.defaultOptions={pluginType:"uiplugin.gridLayout",pluginName:"gridLayout",gridTemplateColumns:"",gridTemplateRows:"",gridColumnGap:"",gridRowGap:"",gridRow:"",gridColumn:"",defaultClassPostfix:null,parseChild:!0,parseAttributes:!0},h.prototype.initialize=function(t){try{var e=null;if(this.adaptive=[],this.isIE=null,this.gridLayout={},this.updatedGridLayout={templateColumns:[],templateRows:[],column:[],row:[]},this.layoutStyle=document.getElementById(this.id+"_style"),null==this.layoutStyle){var i=document.createElement("style");i.type="text/css",i.id=this.id+"_style",document.getElementsByTagName("head")[0].appendChild(i),this.layoutStyle=i}this.adaptive=r.v.getChildConfiguration("/WebSquare/mediaInfo",{singleMode:!0}),0===this.adaptive.length&&this.adaptive.push({name:"default"}),n.D.isIEAllVersion()||/Edge/.test(navigator.userAgent)?this.isIE=!0:this.isIE=!1,this.gridLayout={templateColumns:this.options.gridTemplateColumns.split(";"),templateRows:this.options.gridTemplateRows.split(";"),column:this.options.gridColumn.split(";"),row:this.options.gridRow.split(";"),columnGap:this.options.gridColumnGap.split(";"),rowGap:this.options.gridRowGap.split(";")},this.gridLayout.templateColumns[0]=this.gridLayout.templateColumns[0].wq_trim().split(" "),this.gridLayout.templateRows[0]=this.gridLayout.templateRows[0].wq_trim().split(" "),this.gridLayout.column[0]=this.gridLayout.column[0].wq_trim().split(":"),this.gridLayout.row[0]=this.gridLayout.row[0].wq_trim().split(":"),this.updatedGridLayout.column[0]=this.gridLayout.column[0],this.updatedGridLayout.row[0]=this.gridLayout.row[0],e=null;for(var o=1;o<this.adaptive.length;o++)null==this.gridLayout.templateColumns[o]?this.gridLayout.templateColumns[o]=this.gridLayout.templateColumns[0].slice():(e=this.gridLayout.templateColumns[o].replace(/(\s*)/g,""),this.gridLayout.templateColumns[o]=""==e?this.gridLayout.templateColumns[0].slice():this.gridLayout.templateColumns[o].wq_trim().split(" ")),null==this.gridLayout.templateRows[o]?this.gridLayout.templateRows[o]=this.gridLayout.templateRows[0].slice():(e=this.gridLayout.templateRows[o].replace(/(\s*)/g,""),this.gridLayout.templateRows[o]=""==e?this.gridLayout.templateRows[0].slice():this.gridLayout.templateRows[o].wq_trim().split(" ")),null==this.gridLayout.column[o]?this.gridLayout.column[o]=this.gridLayout.column[0].slice():(e=this.gridLayout.column[o].replace(/(\s*)/g,""),this.gridLayout.column[o]=""==e?this.gridLayout.column[0].slice():this.gridLayout.column[o].wq_trim().split(":")),this.updatedGridLayout.column[o]=this.gridLayout.column[o],null==this.gridLayout.row[o]?this.gridLayout.row[o]=this.gridLayout.row[0].slice():(e=this.gridLayout.row[o].replace(/(\s*)/g,""),this.gridLayout.row[o]=""==e?this.gridLayout.row[0].slice():this.gridLayout.row[o].wq_trim().split(":")),this.updatedGridLayout.row[o]=this.gridLayout.row[o],null==this.gridLayout.columnGap[o]?this.gridLayout.columnGap[o]=this.gridLayout.columnGap[0].slice():(e=this.gridLayout.columnGap[o].replace(/(\s*)/g,""),this.gridLayout.columnGap[o]=""==e?this.gridLayout.columnGap[0].slice():this.gridLayout.columnGap[o].wq_trim()),null==this.gridLayout.rowGap[o]?this.gridLayout.rowGap[o]=this.gridLayout.rowGap[0].slice():(e=this.gridLayout.rowGap[o].replace(/(\s*)/g,""),this.gridLayout.rowGap[o]=""==e?this.gridLayout.rowGap[0].slice():this.gridLayout.rowGap[o].wq_trim());this._initializeIE(),this._resizeObj=null,this._bResizeInit=!1,this._resizeInfo={row:{},col:{},orgInfoStr:"",resizeComp:[]}}catch(t){s.w.printStackTrace(t)}},h.prototype._initializeIE=function(t){try{if(!this.isIE)return;for(var e=0;e<this.adaptive.length;e++){
for(var i=this.gridLayout.templateColumns[e].slice(),o=this.gridLayout.templateRows[e].slice(),r=2*Math.max(i.length,o.length)-1,a=1;a<r;a++)n.D.isOdd(a)&&(null!=i[a]&&i.splice(a,0,this.gridLayout.columnGap[e]),null!=o[a]&&o.splice(a,0,this.gridLayout.rowGap[e]));for(var l=this.gridLayout.row[e].slice(),u=0;u<l.length;u++){var h=l[u].wq_trim();if(-1==h.indexOf("/")){var p=parseInt(o.length/2)+1,d=Number(h);d>p&&(d=p),l[u]=String(2*d-1)}}for(var c=this.gridLayout.column[e].slice(),m=0;m<c.length;m++){var g=c[m].wq_trim();if(-1==g.indexOf("/")){p=parseInt(i.length/2)+1;var y=Number(g);y>p&&(y=p),c[m]=String(2*y-1)}}if(null==t)this.gridLayout.templateColumns[e]=i,this.gridLayout.templateRows[e]=o,this.gridLayout.column[e]=c,this.gridLayout.row[e]=l;else{if(e!=t)continue;this.gridLayout.templateColumns[e]=i,this.gridLayout.templateRows[e]=o,this.gridLayout.column[e]=c,this.gridLayout.row[e]=l}}}catch(t){s.w.printStackTrace(t)}},h.prototype.toHTML=function(){var t=[],e=this.getChildren(),i=e.length,o=""==this.options.style?"":"style='"+this.options.style+"'",r=null==this.options.defaultClassPostfix?"":this.options.defaultClassPostfix;t.push("<div id='"+this.id+"' class='w2gridLayout"+r+" "+this.id+" "+this.options.className+"'"+o+">"),this._createTemplateRules(0),this._createItemRules(0,e),this._createMediaRules();for(var s=0;s<i;s++){if(e[s]._isTag)if(null==e[s].element.getAttribute("class"))e[s].element.setAttribute("class",e[s].id);else{var a=e[s].element.getAttribute("class")+" "+e[s].id;e[s].element.setAttribute("class",a)}else""==e[s].options.className?e[s].options.className=e[s].id:e[s].options.className+=" "+e[s].id;t.push([e[s].toHTML()])}return t.push("</div>"),t.join("")},h.prototype.setAction=function(){},h.prototype._createMediaRules=function(t,e){try{for(var i=null==t?this.adaptive.length:t+1,o=this.getChildren(),r=[],a=null,n=null,l=1;l<i;l++){a=this._createTemplateRules(l),n=this._createItemRules(l,o);var u=this.adaptive[l];u.maxWidth?r[l]="@media all and (max-width: "+u.maxWidth+"px) { ":u.minWidth&&(r[l]="@media all and (min-width: "+u.minWidth+"px) { "),this.isIE,r[l]+=a,r[l]+=n,r[l]+="}",null==e?this.layoutStyle.sheet.insertRule(r[l],this.layoutStyle.sheet.cssRules.length):l==t&&this.layoutStyle.sheet.insertRule(r[l],e)}}catch(t){s.w.printStackTrace(t)}},h.prototype._createTemplateRules=function(t){try{var e=[];if(e[0]="",e[0]+="."+this.id+"{",this.isIE){var i=this._getTemplateIE(t);e[0]+="display: -ms-grid;",e[0]+="-ms-grid-columns:"+i.ieColumns+";",e[0]+="-ms-grid-rows:"+i.ieRows+";"}else e[0]+="display: grid;",e[0]+="grid-template-columns:"+this.gridLayout.templateColumns[t].join(" ")+";",e[0]+="grid-template-rows:"+this.gridLayout.templateRows[t].join(" ")+";",e[0]+="grid-column-gap:"+this.gridLayout.columnGap[t]+";",e[0]+="grid-row-gap:"+this.gridLayout.rowGap[t]+";";if(e[0]+="}",0!=t)return e;this.layoutStyle.sheet.insertRule(e,0)}catch(t){s.w.printStackTrace(t)}},h.prototype._createItemRules=function(t,e,i){try{var o=[],r=e.length;if(this.isIE)var a=this._getItemIE(e,t,"column"),n=this._getItemIE(e,t,"row");else this._getItemNotIE(e,t,"column"),this._getItemNotIE(e,t,"row");for(var l=0;l<r;l++)if(o[l]="",o[l]+="."+e[l].id+"{",this.isIE?(""==a.itemSpanSection[l]?o[l]+="-ms-grid-column:"+a.itemSection[l]+";-ms-grid-column-span: 1;":o[l]+="-ms-grid-column:"+a.itemSection[l]+";-ms-grid-column-span: "+a.itemSpanSection[l]+";",""==n.itemSpanSection[l]?o[l]+="-ms-grid-row:"+n.itemSection[l]+";-ms-grid-row-span: 1;":o[l]+="-ms-grid-row:"+n.itemSection[l]+";-ms-grid-row-span: "+n.itemSpanSection[l]+";"):(o[l]+="grid-column:"+this.gridLayout.column[t][l]+";",o[l]+="grid-row:"+this.gridLayout.row[t][l]+";"),o[l]+="}",0==t){if(null!=i){this.layoutStyle.sheet.insertRule(o[l],i);break}this.layoutStyle.sheet.insertRule(o[l],l+1)}return o.join(" ")}catch(t){s.w.printStackTrace(t)}},h.prototype._getTemplateIE=function(t){try{var e={};return e.ieColumns=this.gridLayout.templateColumns[t].join(" "),
e.ieRows=this.gridLayout.templateRows[t].join(" "),e}catch(t){s.w.printStackTrace(t)}},h.prototype._getItemIE=function(t,e,i){try{i="row"==i.toLowerCase()?i:"column";var o=this.gridLayout[i][e],r="row"==i?"templateRows":"templateColumns",a=n.D.parseInt(this.gridLayout[r][e].length/2)+1,l=this.gridLayout[r][e].length,u={},h=null,p=t.length;u.itemSection=[],u.itemSpanSection=[];for(var d=0;d<p;d++)h=null,n.D.isNull(o[d])||NaN==o[d]?(u.itemSection[d]=l,u.itemSpanSection[d]="",o.push(String(a))):-1==o[d].indexOf("/")?(o[d]<=0&&(u.itemSection[d]="1"),u.itemSection[d]=o[d].wq_trim(),u.itemSpanSection[d]=""):((h=o[d].split("/"))[0]<=0&&(h[0]="1"),u.itemSection[d]=h[0].wq_trim(),u.itemSpanSection[d]=h[1].wq_trim(),1!=u.itemSection[d]&&u.itemSection[d]<u.itemSpanSection[d]?u.itemSpanSection[d]=Number(u.itemSpanSection[d])-Number(u.itemSection[d]):u.itemSection[d]==u.itemSpanSection[d]&&(u.itemSpanSection[d]="1"),u.itemSection[d]>a&&(u.itemSection[d]=a),u.itemSection[d]=2*Number(u.itemSection[d])-1,u.itemSpanSection[d]>l?u.itemSpanSection[d]=l:n.D.isOdd(u.itemSpanSection[d])||(u.itemSpanSection[d]=Number(u.itemSpanSection[d])+1)),u.itemSection[d]=String(u.itemSection[d]),u.itemSpanSection[d]=String(u.itemSpanSection[d]),""==u.itemSpanSection[d]?o.splice(d,1,u.itemSection[d]):o.splice(d,1,u.itemSection[d]+" / "+u.itemSpanSection[d]);return u}catch(t){s.w.printStackTrace(t)}},h.prototype._getItemNotIE=function(t,e,i){try{for(var o="row"==(i="row"==i.toLowerCase()?i:"column")?"templateRows":"templateColumns",r=this.gridLayout[o][e].length,a=this.gridLayout[i][e],l=[],u=t.length,h=0;h<u;h++)n.D.isNull(a[h])||NaN==a[h]?a.push(String(r)):-1==a[h].indexOf("/")?(a[h]<=0?a[h]="1":a[h]>r&&(a[h]=r),a[h]=String(a[h])):((l=a[h].split("/"))[0]<=0?l[0]="1":l[0]>r&&(l[0]=String(r)),l[1]>r+1&&(l[1]=" "+(r+1)),a[h]=l.join("/"),l=[])}catch(t){s.w.printStackTrace(t)}},h.prototype.setActiveLayout=function(t,e,i){try{var o=this.getScreenIdx(),r=!1,a=this.getChildren(),n=a.length;if(n>t&&(0!=e&&(this.gridLayout.column[o].splice(t,1,String(e)),r=!0),0!=i&&(this.gridLayout.row[o].splice(t,1,String(i)),r=!0)),r)if(0==o)this.layoutStyle.sheet.deleteRule(t+1),this._createItemRules(o,[a[t]],t+1);else for(var l=this.layoutStyle.sheet.cssRules.length,u=0,h=n+1;h<l;h++)if(4==this.layoutStyle.sheet.cssRules[h].type&&++u==o){this.layoutStyle.sheet.deleteRule(h),this._createMediaRules(o,h);break}}catch(t){s.w.printStackTrace(t)}},h.prototype.setLayout=function(t,e,i){try{this.setActiveLayout(t,e,i);for(var o={},r=[],a=[],n=0;n<this.adaptive.length;n++)r[n]=this.gridLayout.column[n][t],a[n]=this.gridLayout.row[n][t];return o.column=r.join(":"),o.row=a.join(":"),"columnInfo: "+o.column+", rowInfo: "+o.row}catch(t){s.w.printStackTrace(t)}},h.prototype.getScreenIdx=function(){try{this.adaptive;for(var t,e,i=Number(top.document.documentElement.clientWidth||top.document.body.clientWidth),o=0,r=0;r<this.adaptive.length;r++){var a=parseInt(this.adaptive[r].minWidth,10),n=parseInt(this.adaptive[r].maxWidth,10);n>=0&&i<=n?(null==t||t>n)&&(o=r,t=n):a>=0&&i>=a&&(null==e||e<a)&&(o=r,e=a)}return o}catch(t){s.w.printStackTrace(t)}},h.prototype.getLayout=function(t){try{for(var e={},i=[],o=[],r=0;r<this.adaptive.length;r++)i[r]=this.gridLayout.column[r][t],o[r]=this.gridLayout.row[r][t];return e.column=i.join(":"),e.row=o.join(":"),"columnInfo: "+e.column+", rowInfo: "+e.row}catch(t){s.w.printStackTrace(t)}},h.prototype.setGap=function(t,e){try{var i=this.getScreenIdx(),o="columnGap"==(t="col"==t?"columnGap":"rowGap")?"templateColumns":"templateRows";if(this.isIE){var r=this.gridLayout[t][i],a=this.gridLayout[o][i].map((function(t){return t==r&&(t=e),t}));this.gridLayout[o][i]=a}this.gridLayout[t][i]=e,this._changeRules(i)}catch(t){s.w.printStackTrace(t)}},h.prototype.getTemplate=function(){try{for(var t={},e=[],i=[],o=0;o<this.adaptive.length;o++)e[o]=this.gridLayout.templateColumns[o].join(" "),i[o]=this.gridLayout.templateRows[o].join(" ");return t.templateColumns=e.join(":"),
t.templateRows=i.join(":"),"templateColumnsInfo: "+t.templateColumns+", templateRowsInfo: "+t.templateRows}catch(t){s.w.printStackTrace(t)}},h.prototype._changeRules=function(t,e){try{var i=this.getChildren();if(this.isIE&&this._initializeIE(t),0==t)if(e){for(var o=this.layoutStyle.sheet.rules.length,r=o-1;r>=0;r--)4!=this.layoutStyle.sheet.rules[r].type&&this.layoutStyle.sheet.deleteRule(r);this._createTemplateRules(0),this._createItemRules(0,i)}else this.layoutStyle.sheet.deleteRule(t),this._createTemplateRules(t,1);else{var a=this.layoutStyle.sheet.cssRules.length,n=0;for(r=i.length+1;r<a;r++)if(4==this.layoutStyle.sheet.cssRules[r].type&&++n==t){this.layoutStyle.sheet.deleteRule(r),this._createMediaRules(t,r);break}}}catch(t){s.w.printStackTrace(t)}},h.prototype.setTemplate=function(t,e,i){try{if(Math.sign||(Math.sign=function(t){return(t>0)-(t<0)||+t}),e="col"==e?"templateColumns":"templateRows",-1!=Math.sign(t)){var o=this.getScreenIdx(),r=this.gridLayout[e][o].length;this.isIE?r>2*t&&(t*=2,this.gridLayout[e][o][t]=i,this._changeRules(o)):r>t&&(this.gridLayout[e][o][t]=i,this._changeRules(o))}}catch(t){s.w.printStackTrace(t)}},h.prototype.setAllTemplate=function(t,e){try{var i=this.getScreenIdx(),o=e.split(" ");if(t="col"==t?"templateColumns":"templateRows",this.isIE)for(var r=2*o.length-1,a="templateColumn"==t?"columnGap":"rowGap",l=1;l<r;l++)n.D.isOdd(l)&&o.splice(l,0,this.gridLayout[a][i]);this.gridLayout[t][i]=o,this._changeRules(i)}catch(t){s.w.printStackTrace(t)}},h.prototype._copyLayout=function(){try{if(!this.isIE)return t={templateColumns:this.gridLayout.templateColumns,templateRows:this.gridLayout.templateRows,row:this.gridLayout.row,column:this.gridLayout.column};for(var t={templateColumns:[],templateRows:[],row:[],column:[]},e=this.getChildren(),i=0;i<this.adaptive.length;i++){for(var o=this.gridLayout.templateColumns[i].slice(),r=this.gridLayout.templateRows[i].slice(),a=Math.max(o.length,r.length);a>0;a--)n.D.isOdd(a)&&(null!=o[a]&&o.splice(a,1),null!=r[a]&&r.splice(a,1));t.templateColumns.push(o),t.templateRows.push(r),this.updatedGridLayout.templateColumns.push(o),this.updatedGridLayout.templateRows.push(r);for(var l="column",u="templateColumns",h=0;h<2;h++){var p=this.updatedGridLayout[u][i].length,d=this.updatedGridLayout[l][i],c=[],m=e.length;for(a=0;a<m;a++)n.D.isNull(d[a])||NaN==d[a]?d.push(String(p)):-1==d[a].indexOf("/")?(d[a]<=0?d[a]="1":d[a]>p&&(d[a]=p),d[a]=String(d[a])):((c=d[a].split("/"))[0]<=0?c[0]="1":c[0]>p&&(c[0]=String(p)),c[1]>p+1&&(c[1]=" "+(p+1)),d[a]=c.join("/"),c=[]);t[l].push(d),l="row",u="templateRows"}}return t}catch(t){s.w.printStackTrace(t)}},h.prototype.getLayoutInfo=function(){try{for(var t=this.getChildren(),e=t.length,i=this.getScreenIdx(),o=this._copyLayout(),r={layout:"grid",currentScreen:this.adaptive[i].name,layoutInfo:[]},a=0;a<this.adaptive.length;a++){var n={name:this.adaptive[a].name,minWidth:this.adaptive[a].minWidth,maxWidth:this.adaptive[a].maxWidth,templateColumns:o.templateColumns[a],templateRows:o.templateRows[a],itemInfo:[]};r.layoutInfo.push(n);for(var l=0;l<e;l++){var u={id:t[l].id,rowStart:"",rowEnd:"",colStart:"",colEnd:""},h=null;-1==o.row[a][l].indexOf("/")?u.rowStart=o.row[a][l]:(h=o.row[a][l].split("/"),u.rowStart=h[0].wq_trim(),u.rowEnd=h[1].wq_trim()),h=null,-1==o.column[a][l].indexOf("/")?u.colStart=o.column[a][l]:(h=o.column[a][l].split("/"),u.colStart=h[0].wq_trim(),u.colEnd=h[1].wq_trim()),r.layoutInfo[a].itemInfo.push(u)}}return r}catch(t){s.w.printStackTrace(t)}},h.prototype._checkId=function(t){try{var e=t.length,i=this.getChildren(),o={},r=[];for(var a in i)o[i[a].id]=i[a];for(a=0;a<e;a++)if(null!=t[a].itemInfo){var n={},l=t[a].itemInfo;for(var u in l){if(null==l[u].id)return!1;null!=o[l[u].id]?n[l[u].id]=l[u]:console.log("id["+l[u].id+"]와 일치하는 항목이 없습니다.")}r.push(n)}else t[a].itemInfo=[],r.push("dumy");return r}catch(t){s.w.printStackTrace(t)}},h.prototype._setEmptyScreenInfo=function(t){try{var e={};for(var i in t.layoutInfo){
e[t.layoutInfo[i].name]=t.layoutInfo[i].name}for(i=0;i<this.adaptive.length;i++)null==e[this.adaptive[i].name]&&t.layoutInfo.splice(i,0,new Object({name:void 0}));return t}catch(t){s.w.printStackTrace(t)}},h.prototype.setLayoutInfo=function(t){try{t=this._setEmptyScreenInfo(t);var e=this._checkId(t.layoutInfo);if(0==e)return;for(var i=0;i<this.adaptive.length;i++){var o=t.layoutInfo[i];if(null!=o.name){this.isIE&&(this.gridLayout.templateColumns[i]=this.updatedGridLayout.templateColumns[i],this.gridLayout.templateRows[i]=this.updatedGridLayout.templateRows[i]);var r=o.itemInfo;if(0==r.length)continue;for(var a in r){var n=r[a].id;e[i][n]&&(""==r[a].rowEnd?this.gridLayout.row[i].splice(a,1,r[a].rowStart):this.gridLayout.row[i].splice(a,1,r[a].rowStart+" / "+r[a].rowEnd),this.updatedGridLayout.row[i]=this.gridLayout.row[i],""==r[a].colEnd?this.gridLayout.column[i].splice(a,1,r[a].colStart):this.gridLayout.column[i].splice(a,1,r[a].colStart+" / "+r[a].colEnd),this.updatedGridLayout.column[i]=this.gridLayout.column[i])}o.templateColumns&&o.templateColumns.constructor,o.templateRows&&o.templateRows.constructor,this._changeRules(i,!0)}}}catch(t){s.w.printStackTrace(t)}},h.prototype._updateLayoutInfo=function(t){},h.prototype.addResizeBar=function(t,e,i){try{if(isNaN(t)||t<=0)return void u.k.printLog("gridLayout.addResizeBar error : invalid index.");"row"!==e&&(e="col");var r=this.id+"_resizeBar_"+e+"_"+t,l=this.scope_id+"_"+r;if(null!=n.D.getComponentById(r))return;void 0!==i&&null!=i||(i={});var h=this.getLayoutInfo(),p=o.x.extend({},h),d=p.layoutInfo,c=-1,m=this.getScreenIdx(),g=d[m],y=!1;if(this._resizeInfo.orgInfoStr||(this._resizeInfo.orgInfoStr=JSON.stringify(g)),"row"===e){if(t>=g.templateRows.length)return void u.k.printLog("gridLayout.addResizeBar error : invalid index.");var w=t;for(var f in this._resizeInfo.row)this._resizeInfo.row[f]>w?this._resizeInfo.row[f]++:t++;g.templateRows.splice(t,0,i.size||"5px"),this._resizeInfo.row[r]=t;for(var S=0;S<g.itemInfo.length;S++){var L=g.itemInfo[S],v=Number(L.rowStart),I=Number(L.rowEnd||L.rowStart);if(v>t){if(!1===y)y=!0,(C={}).id=l,C.rowStart=L.rowStart,C.rowEnd="",C.colStart=i.start||"1",C.colEnd=i.end||String(g.templateColumns.length+1),g.itemInfo.splice(S,0,C),c=S,S++;L.rowStart=String(v+1),L.rowEnd=String(I+1)}else I>t+1&&(L.rowEnd=String(I+1))}}else{if(t>=g.templateColumns.length)return void u.k.printLog("gridLayout.addResizeBar error : invalid index.");w=t;for(var f in this._resizeInfo.col)this._resizeInfo.col[f]>w?this._resizeInfo.col[f]++:t++;g.templateColumns.splice(t,0,i.size||"5px"),this._resizeInfo.col[r]=t;for(S=0;S<g.itemInfo.length;S++){L=g.itemInfo[S];var _=Number(L.colStart),R=Number(L.colEnd||L.colStart);if(_>t){var C;if(!1===y)y=!0,(C={}).id=l,C.colStart=L.colStart,C.colEnd="",C.rowStart=i.start||"1",C.rowEnd=i.end||String(g.templateRows.length+1),g.itemInfo.splice(S,0,C),c=S,S++;L.colStart=String(_+1),L.colEnd=String(R+1)}else R>t+1&&(L.colEnd=String(R+1))}}var E="w2gridLayout_resizeBarH";"row"===e&&(E="w2gridLayout_resizeBarV");var z=WebSquare.controlFactory.create(r,{className:"w2gridLayout_resizeBar "+E+" "+l,pluginName:"group",parseChild:!1},null,this.scope_obj,this.parentFrame,!0);z.bind("onmousedown",function(t,e,i,o,r,s,n){return function(l){var u=WebSquare.idCache[t],h=WebSquare.idCache[s],p=WebSquare.idCache[n];"row"!==i&&(i="col");var d=u._resizeInfo[i][e];u._resizeObj={index:d-1,direction:i,screenIdx:o,cssStr:r,startX:a.B.getMouseX(l),startY:a.B.getMouseY(l),heightFront:h.render.offsetHeight,heightBack:p.render.offsetHeight,widthFront:h.render.offsetWidth,widthBack:p.render.offsetWidth},u.addClass(r)}}(this.uuid,r,e,m,E,this.childControlList[c-1].uuid,this.childControlList[c].uuid)),z.bind("onmouseup",(b=this.uuid,x=E,function(){var t=WebSquare.idCache[b];t._resizeObj=null,t.removeClass(x)})),z.writeTo(this,null,this.parentFrame,{index:c}),z.activate(),this.addControl(z,void 0,void 0,{index:c}),this._resizeInfo.resizeComp.push(z.uuid),
this.setLayoutInfo(p),!1===this._bResizeInit&&(this.event.addListener(this.render,"onmousemove",this.event.bindAsEventListener(this,this.handleMousemoveEvent)),this.event.addListener(this.render,"onmouseup",this.event.bindAsEventListener(this,this.handleMouseupEvent)),this._bResizeInit=!0)}catch(t){s.w.printStackTrace(t)}var b,x},h.prototype.clearResizeBar=function(){try{if(!this._resizeInfo.orgInfoStr&&0===this._resizeInfo.resizeComp.length)return;var t=this.getLayoutInfo(),e=o.x.extend({},t),i=e.layoutInfo,r=this.getScreenIdx();this._resizeInfo.orgInfoStr&&(i[r]=JSON.parse(this._resizeInfo.orgInfoStr),this.gridLayout.templateColumns[r]=i[r].templateColumns,this.gridLayout.templateRows[r]=i[r].templateRows);for(var a=0;a<this._resizeInfo.resizeComp.length;a++){var n=WebSquare.idCache[this._resizeInfo.resizeComp[a]];n&&n.remove()}this._resizeInfo={row:{},col:{},orgInfoStr:"",resizeComp:[]},this.setLayoutInfo(e)}catch(t){s.w.printStackTrace(t)}},h.prototype.handleClickEvent=function(t){for(var e=this.event.getTargetIterator(t,this.render);e.next(););e=null},h.prototype.handleMouseoverEvent=function(t){a.B.stopEvent(t);for(var e=this.event.getTargetIterator(t,this.render);e.next();)e.match("w2gridLayout")&&this.addClass(e.getElement(),"w2gridLayout_over");e=null},h.prototype.handleMouseoutEvent=function(t){a.B.stopEvent(t);for(var e=this.event.getTargetIterator(t,this.render);e.next();)e.match("w2gridLayout")&&this.removeClass(e.getElement(),"w2gridLayout_over");e=null},h.prototype.handleMousemoveEvent=function(t){try{if(this._resizeObj){var e=this._resizeObj.screenIdx,i=this._resizeObj.index,o=this._resizeObj.direction,r=this._resizeObj.startX,n=this._resizeObj.startY,l=this._resizeObj.heightFront,u=this._resizeObj.heightBack,h=this._resizeObj.widthFront,p=this._resizeObj.widthBack,d=this.getLayoutInfo(),c=d.layoutInfo[e];if("row"===o){var m=u-(g=a.B.getMouseY(t)-n);l+g>5&&m>5&&(c.templateRows[i]=l+g+"px",c.templateRows[i+2]=u-g+"px")}else{var g;m=u-(g=a.B.getMouseX(t)-r);l+g>5&&m>5&&(c.templateColumns[i]=h+g+"px",c.templateColumns[i+2]=p-g+"px")}this.setLayoutInfo(d)}}catch(t){s.w.printStackTrace(t)}},h.prototype.handleMouseupEvent=function(t){try{this._resizeObj&&this.removeClass(this._resizeObj.cssStr),this._resizeObj=null}catch(t){s.w.printStackTrace(t)}},h.prototype.finalize=function(){try{null!=this.layoutStyle&&null!=this.layoutStyle.parentNode&&this.layoutStyle.parentNode.removeChild(this.layoutStyle)}catch(t){s.w.printStackTrace(t)}}}}]);