(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[3043],{3043:(t,i,e)=>{"use strict";e.r(i),e.d(i,{widgetContainer:()=>d,widget:()=>l});var s=e(2981),n=e(2085),o=e(1960),r=e(3082),h=e(6615),d=function(t,i,e){WebSquare.uiplugin.widgetContainer.isImported||(WebSquare.uiplugin.widgetContainer.isImported=!0),h.s.call(this,t,i,e)};s.x.extend(d.prototype,h.s.prototype),d.prototype.defaultOptions={pluginType:"uiplugin.widgetContainer",pluginName:"widgetContainer",useConfig:!0,userEvents:["onload","onwidgetload","onwidgetmove","onwidgetresize","onwidgetopen","onwidgetfix","onwidgetmaximize","onwidgetminimize","onbeforewidgetclose","onafterwidgetclose","onwidgetrestore","onclickcustombtn"],mode:"pushpull",threshold:null,cols:1,unitHeightPixel:25,verticalMargin:0,horizontalMargin:0,minUnitWidth:1,minUnitHeight:1,maxUnitWidth:null,maxUnitHeight:null,widgetMove:!0,widgetResize:!0,forceMinMax:!1,popupEvent:"",async:!1,preventMaximizeByTitle:!1},d.prototype.initialize=function(t){this.widgetIdCount=0,this.widgetLoadedCount=0,this.widgets=[],this.dirtyArr=[],this.changingWidget=null,this.oneColumn=!1,this.widgetMove=this.options.widgetMove,this.widgetResize=this.options.widgetResize,this.preventMaximizeByTitle=this.options.preventMaximizeByTitle},d.prototype.toHTML=function(){var t=[],i=""===this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+i+" class='w2widgetContainer "+this.options.className+"'>"),t.push("<div id='"+this.id+"_content'  class='w2widgetContainer_content'>"),t.push("</div>"),t.push("</div>"),t.join("")},d.prototype.setAction=function(){this.unitWidth=100/this.options.cols,this.unitHeightPixel=this.options.unitHeightPixel,this.contentRender=this.getElementById(this.id+"_content"),this.redraw(),this.event.addListener(window,"onresize",this.event.bindAsEventListener(this,this.handleResizeEvent)),this.event.addListener(this.render,"ontouchstart",this.event.bindAsEventListener(this,this.handleMousedownEvent)),this.event.addListener(this.render,"onMSPointerDown",this.event.bindAsEventListener(this,this.handleMousedownEvent)),this.event.addListener(this.render,"onmousedown",this.event.bindAsEventListener(this,this.handleMousedownEvent))},d.prototype.checkResize=function(t){this.handleResizeEvent()},d.prototype.handleResizeEvent=function(){this.redraw()},d.prototype._changeWidget=function(t,i,e,s,n,o){return o||(o={}),!(t.isFixed()&&!o.force)&&(!0===t.dirty?(r="number"==typeof i?i:t.x,h="number"==typeof e?e:t.y,d="number"==typeof s?s:t.unitWidth,l="number"==typeof n?n:t.unitHeight):(r="number"==typeof i?i:t.oriX,h="number"==typeof e?e:t.oriY,d="number"==typeof s?s:t.oriUnitWidth,l="number"==typeof n?n:t.oriUnitHeight,t.dirty=!0,this.dirtyArr.push(t)),!!this.isValidPos(r,h,d,l)&&(t.x=r,t.y=h,t.unitWidth=d,t.unitHeight=l,!0));var r,h,d,l},d.prototype._commit=function(){for(var t,i=0;i<this.dirtyArr.length;i++)(t=this.dirtyArr[i])&&(t.oriX=t.x,t.oriY=t.y,t.oriUnitWidth=t.unitWidth,t.oriUnitHeight=t.unitHeight,t.dirty=!1);this.dirtyArr.splice(0,this.dirtyArr.length)},d.prototype._rollback=function(){for(var t,i=0;i<this.dirtyArr.length;i++)(t=this.dirtyArr[i])&&(t.x=t.oriX,t.y=t.oriY,t.unitWidth=t.oriUnitWidth,t.unitHeight=t.oriUnitHeight,t.dirty=!1);this.dirtyArr.splice(0,this.dirtyArr.length)},d.prototype._getMaxRect=function(t){var i=t.getMaximizeConfig(),e=t.getRect(),s=i.left<0?0:e.x-i.left,n=i.right<0?this.options.cols-e.x:e.unitWidth+i.right;s<=0?(n=n+e.x-s,s=0):n+=i.left,s+n>this.options.cols&&(s<n-this.options.cols?(s=0,n=this.options.cols):s=this.options.cols-n);var o=i.top<0?0:e.y-i.top,r=e.unitHeight+i.bottom;return o<=0?(r=r+e.y-o,o=0):r+=i.top,i.bottom<0&&(r=1/0),{x:s,y:o,unitWidth:n,unitHeight:r}},d.prototype._getMarginedWidth=function(t){return"number"==typeof t?t-this.verticalMargin:parseInt(t,10)-this.verticalMargin},d.prototype._getMarginedHeight=function(t){return"number"==typeof t?t-this.horizontalMargin:parseInt(t,10)-this.horizontalMargin},
d.prototype._getMarginedLeft=function(t){return"number"==typeof t?t+this.verticalMargin/2:parseInt(t,10)+this.verticalMargin/2},d.prototype._getMarginedTop=function(t){return"number"==typeof t?t+this.horizontalMargin/2:parseInt(t,10)+this.horizontalMargin/2},d.prototype._recalcSize=function(){if(this.render){this.fullWidth=Math.max(this.render.scrollWidth,this.render.clientWidth),this.fullWidth<=0&&(this.fullWidth=parseInt(this.render.style.width,10)),this.verticalMargin=this.options.verticalMargin/this.fullWidth*100,this.horizontalMargin=this.options.horizontalMargin;for(var t=0,i=0;i<this.widgets.length;i++){var e=this.widgets[i],s=e.isMaximized()?this._getMaxRect(e):e.getRect();s&&s.unitHeight!==1/0&&t<s.y+s.unitHeight&&(t=s.y+s.unitHeight)}var n=t*this.unitHeightPixel;this.fullHeight=Math.max(this.render.scrollHeight,this.render.clientHeight,n),WebSquare.BootLoader.fullViewRatio&&(this.zoomLevel=WebSquare.BootLoader.fullViewRatio),this.options.threshold&&this.options.threshold>this.fullWidth?(this.oneColumn=!0,this.widgetMove=!1,this.widgetResize=!1):(this.oneColumn=!1,this.widgetMove=this.options.widgetMove,this.widgetResize=this.options.widgetResize)}},d.prototype._renderWithRect=function(t,i,e){if(null!=e){if(t||"object"!=typeof e||e.appendTo(this),!e.parentControl)return void(e.render=void 0);t=e.render}"number"==typeof i.unitWidth?t.style.width=this._getMarginedWidth(i.unitWidth*this.unitWidth)+"%":t.style.width=this._getMarginedWidth(i.unitWidth)+"%","number"==typeof i.unitHeight?t.style.height=this._getMarginedHeight(i.unitHeight*this.unitHeightPixel)+"px":t.style.height=this._getMarginedHeight(i.unitHeight)+"px","number"==typeof i.x?t.style.left=this._getMarginedLeft(i.x*this.unitWidth)+"%":t.style.left=this._getMarginedLeft(i.x)+"%","number"==typeof i.y?t.style.top=this._getMarginedTop(i.y*this.unitHeightPixel)+"px":t.style.top=this._getMarginedTop(i.y)+"px"},d.prototype.redraw=function(){if(this._recalcSize(),this.oneColumn){var t=0;this.widgets.sort((function(t,i){return t.y===i.y?t.x-i.x:t.y-i.y}))}for(var i=0;i<this.widgets.length;i++){var e=this.widgets[i],s=e.getRect();if(this.oneColumn){if(s.x=0,s.unitWidth=this.options.cols,s.y=t,t+=s.unitHeight,this.options.forceMinMax){if(e.isMaximized()){(n=this._getMaxRect(e)).x=s.x,n.unitWidth=s.unitWidth,n.unitHeight=n.unitHeight===1/0?this.fullHeight+"px":n.unitHeight,this._renderWithRect(e.render,n,e);continue}if(e.isMinimized()){o=this.getElementById(e.id+"_title"),r=parseInt(o.offsetHeight||WebSquare.style.getStyle(o,"height"),10);s.unitHeight=r+this.horizontalMargin+"px",this._renderWithRect(e.render,s,e)}}}else{if(e.isMaximized()){var n;(n=this._getMaxRect(e)).unitHeight=n.unitHeight===1/0?this.fullHeight+"px":n.unitHeight,this._renderWithRect(e.render,n,e);continue}if(e.isMinimized()){var o=this.getElementById(e.id+"_title"),r=parseInt(o.offsetHeight||WebSquare.style.getStyle(o,"height"),10);s.unitHeight=r+this.horizontalMargin+"px",this._renderWithRect(e.render,s,e)}}this.ghost&&e.id===this.dragDropElem.id?this._renderWithRect(this.ghost,s,null):(this._renderWithRect(e.render,s,e),e._setTitleEllipsis())}},d.prototype.setCols=function(t){var i=this.unitWidth,e=this.options.cols,s=!0;this.unitWidth=100/t,this.options.cols=t;for(var n=0;n<this.widgets.length;n++)if(!this.isValidPos(this.widgets[n].x,this.widgets[n].y,this.widgets[n].unitWidth,this.widgets[n].unitHeight)){s=!1;break}s?this.redraw():(this.unitWidth=i,this.options.cols=e,$l(WebSquare.language.getMessage("WidgetContainer_setCols_warning")))},d.prototype.isValidPos=function(t,i,e,s){if(t!==parseInt(t,10)||i!==parseInt(i,10)||e!==parseInt(e,10)||s!==parseInt(s,10))return!1;var n=t>=0&&t+e<=this.options.cols,o=i>=0,r=e>=(this.options.minUnitWidth||1),h=s>=(this.options.minUnitHeight||1);return n&&o&&r&&h},d.prototype._checkInclusion=function(t,i){return t.x<=i.x&&t.y<=i.y&&t.x+t.unitWidth>=i.x+i.unitWidth&&t.y+t.unitHeight>=i.y+i.unitHeight},d.prototype._checkCollision=function(t,i){
return t.x+t.unitWidth>i.x&&t.x<i.x+i.unitWidth&&t.y+t.unitHeight>i.y&&t.y<i.y+i.unitHeight},d.prototype._checkSwitchable=function(t,i){var e=t._getOriRect();if(!this._checkInclusion(e,i)||this._checkCollision(t,i))return!1;for(var s=0;s<this.widgets.length;s++){var n=this.widgets[s],o=n._getOriRect();if(n.id!==t.id&&n.id!==i.id&&this._checkCollision(i,o))return!1}return!0},d.prototype._getColArr=function(t){for(var i=[],e=0;e<this.widgets.length;e++){var s=this.widgets[e];if(s&&s.id!==t.id){var n=this._getMaxRect(s);if(s.isMaximized()&&(!n||this._checkCollision(t,n)))return!1;if(this._checkCollision(t,s)){if(s.isFixed()&&this.changingWidget===t)return!1;i.push(s)}}}return i},d.prototype._pushWidgets=function(t){var i=[],e=this._getColArr(t);if(!1===e)return!1;e.sort((function(t,i){return i.y-t.y}));for(var s=0;s<e.length;s++){var n=e[s];if(n&&n.id!==t.id)if(n.isFixed())i.push(n);else if(this._changeWidget(n,null,t.y+t.unitHeight,null,null),!this._pushWidgets(n))return!1}for(var o=0;o<i.length;o++)this._pushWidgets(i[o]);return!0},d.prototype._pullWidgets=function(){if("pushpull"===this.options.mode){this.widgets.sort((function(t,i){return t.y-i.y}));for(var t=0;t<this.widgets.length;t++){var i=0,e=this.widgets[t];if(!e.isFixed()){for(var s=0;s<t;s++){var n=this.widgets[s];if(e.x+e.unitWidth>n.x&&e.x<n.x+n.unitWidth){if(n.isFixed()&&i+e.unitHeight<=n.y){var o=this.widgets.splice(t,1)[0];this.widgets.splice(s,0,o);break}n.y+n.unitHeight>i&&(i=n.y+n.unitHeight)}}e.y!==i&&this._changeWidget(e,null,i,null,null)}}}},d.prototype._calcSwitchPos=function(t,i,e,s,n){var o,r,h=t._getOriRect();if(this._checkCollision(t,h)){var d=0,l=0;t.oriX>t.x&&t.x+t.unitWidth>t.oriX&&(d=t.x+t.unitWidth-t.oriX),t.oriY>t.y&&t.y+t.unitHeight>t.oriY&&(l=t.y+t.unitHeight-t.oriY);for(var a=e[0],g=e[0],u=1;u<e.length;u++)a=s(a,e[u]),g=n(g,e[u]);a=a.oriX,g=g.oriY,o=t.oriX+d+(i.oriX-a),r=t.oriY+l+(i.oriY-g)}else o=t.oriX+(i.oriX-t.x),r=t.oriY+(i.oriY-t.y);return{newX:o,newY:r}},d.prototype._resolveCollision=function(t){try{if("pushpull"===this.options.mode){if(!1===this._pushWidgets(t))return!1;this._pullWidgets()}else{if("switch"!==this.options.mode)return!1;var i=this._getColArr(t);if(!1===i)return!1;for(var e=function(t,i){return t.oriX<=i.oriX?t:i},s=function(t,i){return t.oriY<=i.oriY?t:i},o=0;o<i.length;o++){var r=i[o];if(!r||r.isFixed())return!1;var h=this._calcSwitchPos(t,r,i,e,s),d=h.newX,l=h.newY;if(!this.isValidPos(d,l,r.unitWidth,r.unitHeight))return!1;if(this._changeWidget(r,d,l,null,null),!this._checkSwitchable(t,r))return!1}}return!0}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.getWidgetById=function(t){for(var i=0;i<this.widgets.length;i++){var e=this.widgets[i];if(e.id===t||e.id===this.id+"_"+t)return e}return null},d.prototype.getWidgetByTitle=function(t){for(var i=0;i<this.widgets.length;i++){var e=this.widgets[i];if(e.title===t)return e}return null},d.prototype.importWidgets=function(t,i){try{return i&&this._removeWidgets(this.widgets),this.addWidgets(t||[])}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.importWidget=function(t,i){try{for(var e=0;e<this.widgets.length;e++){var s=this.widgets[e];if((s.id===t||s.id===this.id+"_"+t)&&(i.id=t,this.removeWidgets([s.id])&&this.addWidgets(i)))return!0}return!1}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.exportWidgets=function(){try{for(var t=[],i=0;i<this.widgets.length;i++){var e=this.widgets[i];t.push(e.getWidgetInfo())}return t}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.setTitleClass=function(t,i){try{for(var e=0;e<this.widgets.length;e++){var s=this.widgets[e];if(s.id===t||s.id===this.id+"_"+t){var o=this.getElementById(s.id+"_title");s.titleClass=i,this.addClass(o,i)}}}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.removeTitleClass=function(t,i){try{for(var e=0;e<this.widgets.length;e++){var s=this.widgets[e];if(s.id===t||s.id===this.id+"_"+t){var o=this.getElementById(s.id+"_title");this.removeClass(o,i)}}}catch(t){
n.w.printStackTrace(t,null,this)}},d.prototype.exportWidget=function(t){try{for(var i=null,e=0;e<this.widgets.length;e++){var s=this.widgets[e];if(s.id===t||s.id===this.id+"_"+t){i=s.getWidgetInfo();break}}return i}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.addWidgets=function(t){try{r.D.isArray(t)||(t=[t]);for(var i=null,e=[],s=!0,h=0;h<t.length;h++){if((i=t[h]).x=parseInt(i.x,10)||0,i.y=parseInt(i.y,10)||0,i.unitWidth=parseInt(i.unitWidth,10),i.unitHeight=parseInt(i.unitHeight,10),!this.isValidPos(i.x,i.y,i.unitWidth,i.unitHeight)){s=!1;break}if(i.id){if(null!==this.getWidgetById(i.id))return void $l("["+this.id+"] 중복된 widget id를 사용했습니다.");i.org_id=i.id,i.id=this.id+"_"+i.id}else{for(var d="widget"+this.widgetIdCount++;null!==this.getWidgetById(d);)d="widget"+this.widgetIdCount++;i.id=this.id+"_"+d,i.org_id=d}var l=new WebSquare.uiplugin.widget(i.id,i);if(l.appendTo(this,this.parentFrame),this.widgets.push(l),e.push(l),!this._resolveCollision(l)){s=!1;break}}if(s){for(var a=0;a<e.length;a++){e[a].activate()}this._commit()}else $l("["+this.id+"] 해당 위치에 widget을 추가할 수 없습니다."),this.widgetIdCount--,this._rollback(),this._removeWidgets(e),e=null;return this.redraw(),o.B.fireEvent(this,"onload"),e}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.removeWidgets=function(t){try{r.D.isArray(t)||(t=[t]);for(var i=[],e=0;e<t.length;e++){var s=t[e];"object"==typeof s&&null!==s&&(s=s.id);var o=this.getWidgetById(s);if(!o)return null;i.push(o)}return this._removeWidgets(i)}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype._removeWidgets=function(t){try{r.D.isArray(t)||(t=[t]);for(var i=[],e=0;e<t.length;e++)i.push(t[e].id);for(e=0;e<i.length;e++)for(var s=0;s<this.widgets.length;s++)if(this.widgets[s].id===i[e]){this.widgets.splice(s,1)[0].remove();break}return this._commit(),this._pullWidgets(),this.redraw(),i}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.removeWidgetsAll=function(){try{for(var t=this.widgets.length,i=0;i<t;i++)this.widgets[i].remove();return void(this.widgets=[])}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.moveWidget=function(t,i,e){try{if(!this.widgetMove)return!1;var s=this.getWidgetById(t);if(s.isFixed())return!1;if(this.changingWidget=s,this._rollback(),!this._changeWidget(s,i,e,null,null))return!1;var r=this._resolveCollision(s);if(r){var h=s._getOriRect();this._commit(),o.B.fireEvent(this,"onwidgetmove",t,s.getRect(),h)}else this._rollback();return this.redraw(),this.changingWidget=null,r}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype._moveWidget=function(t,i,e){try{if(!this.widgetMove)return!1;var s=this.getWidgetById(t);if(s.isFixed())return!1;if(this.changingWidget=s,this._rollback(),!this._changeWidget(s,i,e,null,null))return!1;var o=this._resolveCollision(s);return o||this._rollback(),this.redraw(),this.changingWidget=null,o}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.resizeWidget=function(t,i,e,s){try{if(s||(s={}),!this.widgetResize&&!s.force)return!1;var r=this.getWidgetById(t);if(r.isFixed()&&!r.options.minimizeonfixed)return!1;if(this.changingWidget=r,this._rollback(),!this._changeWidget(r,null,null,i,e,s))return!1;var h=this._resolveCollision(r);if(h){var d=r._getOriRect();this._commit(),o.B.fireEvent(this,"onwidgetresize",t,r.getRect(),d)}else this._rollback();return this.redraw(),this.changingWidget=null,h}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype._resizeWidget=function(t,i,e){try{if(!this.widgetResize)return!1;var s=this.getWidgetById(t);if(s.isFixed()||s.isMinimized())return!1;if(this.changingWidget=s,this._rollback(),!this._changeWidget(s,null,null,i,e))return!1;var o=this._resolveCollision(s);return o||this._rollback(),this.redraw(),this.changingWidget=null,o}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype._getClickPos=function(t){var i,e;return t.touches&&1==t.touches.length?(i=t.touches[0].pageX,e=t.touches[0].pageY):window.navigator.msPointerEnabled&&"touch"==t.pointerType?(i=t.pageX,
e=t.pageY):(i=o.B.getMouseX(t),e=o.B.getMouseY(t)),this.zoomLevel&&(i/=this.zoomLevel,e/=this.zoomLevel),{posX:i,posY:e}},d.prototype._makeGhost=function(t){this.ghost=document.createElement("div"),this.contentRender.appendChild(this.ghost),this.ghost.style.left=this.dragDropElem.style.left,this.ghost.style.top=this.dragDropElem.style.top,this.ghost.style.width=this.dragDropElem.style.width,this.ghost.style.height=this.dragDropElem.style.height,this.ghost.className="w2widget_ghost";var i=this._getClickPos(t);this.ghost.oriX=i.posX-this.dragDropElem.offsetLeft,this.ghost.oriY=i.posY-this.dragDropElem.offsetTop},d.prototype.enableWidgetTitle=function(t){if("boolean"==typeof t)for(var i=0,e=this.widgets.length;i<e;i++)this.widgets[i].showTitle(t)},d.prototype.enableWidgetMove=function(t){"boolean"==typeof t&&(this.options.widgetMove=t,this.widgetMove=t)},d.prototype.enableWidgetResize=function(t){if("boolean"==typeof t){this.options.widgetResize=t,this.widgetResize=t;for(var i=0,e=this.widgets.length;i<e;i++)this.widgets[i].setResizable(t)}},d.prototype.handleMousedownEvent=function(t){for(var i=this.event.getTargetIterator(t,this.render);i.next();)if(i.match("w2widget_title_buttons")&&(this.dragDropElem=null,i.stop()),i.match("w2widget_btnResize"))this.options.widgetResize?(this.dragDropElem=i.getElement().parentNode,this.isResizing=!0):(this.dragDropElem=null,this.isResizing=!1),i.stop();else if(i.match("w2widget_title"))this.options.widgetMove?(this.dragDropElem=i.getElement().parentNode,this.isMoving=!0):(this.dragDropElem=null,this.isMoving=!1),i.stop();else if(i.match("w2widget_btnMinimize")){i.element.className.indexOf("w2widget_btnMinimizeOn")>-1?WebSquare.style.removeClass(i.element,"w2widget_btnMinimizeOn"):WebSquare.style.addClass(i.element,"w2widget_btnMinimizeOn")}else if(i.match("w2widget_btnMaximize")){i.element.className.indexOf("w2widget_btnMaximizeOn")>-1?WebSquare.style.removeClass(i.element,"w2widget_btnMaximizeOn"):WebSquare.style.addClass(i.element,"w2widget_btnMaximizeOn")}i=null;var e=function(){var t=this;t.dragDropElem=null,t.isResizing=!1,t.isMoving=!1};if(this.dragDropElem){o.B.stopEvent(t);var s=this.getWidgetById(this.dragDropElem.id);(this.isResizing||this.isMoving)&&(!this.isResizing||this.widgetResize&&s.isResizable())&&(!this.isMoving||this.widgetMove&&s.isMovable())?(s.addClass("w2widget_changing"),t.touches&&1==t.touches.length?(this.event.addListener(this.render,"ontouchmove",this.event.bindAsEventListener(this,this.handleMousemoveEvent)),this.event.addListener(this.render,"ontouchend",this.event.bindAsEventListener(this,this.handleMouseupEvent))):window.PointerEvent?(this.event.addListener(this.render,"onpointermove",this.event.bindAsEventListener(this,this.handleMousemoveEvent)),this.event.addListener(this.render,"onpointerup",this.event.bindAsEventListener(this,this.handleMouseupEvent)),this.event.addListener(this.render,"onpointerleave",this.event.bindAsEventListener(this,this.handleMouseupEvent))):window.navigator.msPointerEnabled&&"touch"==t.pointerType?(this.event.addListener(this.render,"onMSPointerMove",this.event.bindAsEventListener(this,this.handleMousemoveEvent)),this.event.addListener(this.render,"onMSPointerUp",this.event.bindAsEventListener(this,this.handleMouseupEvent))):(this.event.addListener(this.render,"onmousemove",this.event.bindAsEventListener(this,this.handleMousemoveEvent)),this.event.addListener(this.render,"onmouseup",this.event.bindAsEventListener(this,this.handleMouseupEvent)),this.event.addListener(this.render,"onmouseleave",this.event.bindAsEventListener(this,this.handleMouseupEvent)))):e.call(this)}else e.call(this)},d.prototype.handleMousemoveEvent=function(t){if(this.dragDropElem){this.ghost||this._makeGhost(t);var i=this._getClickPos(t),e=i.posX,s=i.posY;if(!0===this.isResizing){this.getWidgetById(this.dragDropElem.id)._setTitleEllipsis(),e-=WebSquare.style.getAbsoluteLeft(this.contentRender),s-=WebSquare.style.getAbsoluteTop(this.contentRender)
;var n=parseFloat(this.ghost.style.left),r=100*(e/this.fullWidth-n/100)+this.verticalMargin,h=s-parseInt(this.ghost.style.top,10)+this.horizontalMargin;r=(r=r<this.unitWidth?this.unitWidth:r)+n>100?100-n:r,h=h<this.unitHeightPixel?this.unitHeightPixel:h,this.dragDropElem.style.width=r-this.verticalMargin+"%",this.dragDropElem.style.height=h-this.horizontalMargin+"px",r=Math.round(r/this.unitWidth),h=Math.round(h/this.unitHeightPixel),this.ghost.oldWidth===r&&this.ghost.oldHeight===h||(this.ghost.oldWidth=r,this.ghost.oldHeight=h,this.relocResult=this._resizeWidget(this.dragDropElem.id,r,h))}else if(!0===this.isMoving){e-=this.ghost.oriX,s-=this.ghost.oriY,this.dragDropElem.style.left=e+"px",this.dragDropElem.style.top=s+"px";var d=Math.round((e/this.fullWidth*100-this.verticalMargin/2)/this.unitWidth),l=Math.round((s-this.horizontalMargin/2)/this.unitHeightPixel),a=Math.round(parseFloat(this.ghost.style.width)/this.unitWidth);d=(d=d<0?0:d)+a>this.options.cols?this.options.cols-a:d,l=l<0?0:l,this.ghost.oldX===d&&this.ghost.oldY===l||(this.ghost.oldX=d,this.ghost.oldY=l,this.relocResult=this._moveWidget(this.dragDropElem.id,d,l))}o.B.preventDefault(t)}},d.prototype.handleMouseupEvent=function(){if(this.dragDropElem){this.ghost&&(this.dragDropElem.parentNode.removeChild(this.ghost),this.ghost=null);var t=this.getWidgetById(this.dragDropElem.id);if(t.removeClass("w2widget_changing"),this.dragDropElem=null,this.relocResult){var i=t._getOriRect();this._commit(),this.isMoving?o.B.fireEvent(this,"onwidgetmove",t.id,t.getRect(),i):this.isResizing&&o.B.fireEvent(this,"onwidgetresize",t.id,t.getRect(),i)}this.isResizing=!1,this.isMoving=!1,this.redraw()}},d.prototype.refreshAdaptive=function(){try{this.redraw();for(var t=0;t<this.childControlList.length;t++)this.childControlList[t].refreshAdaptive&&this.childControlList[t].refreshAdaptive()}catch(t){n.w.printStackTrace(t)}};var l=function(t,i,e){h.s.call(this,t,i,e)};s.x.extend(l.prototype,h.s.prototype),l.prototype.defaultOptions={pluginType:"uiplugin.widget",pluginName:"widget",title:"",titleClass:"",hasTitleBar:!0,src:"",x:0,y:0,unitWidth:1,unitHeight:1,scope:!1,params:void 0,fixed:!1,minimizeonfixed:!1,maximizeonfixed:!1,oriFixed:!1,minimized:!1,maximized:!1,resized:!1,maxConfig:{left:-1,right:-1,top:-1,bottom:-1},buttons:[{useAPI:"toggleFixed",id:"btnFix",className:"w2widget_btnFix",isCustom:!1},{useAPI:"toggleMinimized",id:"btnMinimize",className:"w2widget_btnMinimize",isCustom:!1},{useAPI:"toggleMaximized",id:"btnMaximize",className:"w2widget_btnMaximize",isCustom:!1},{useAPI:"closeWidget",id:"btnClose",className:"w2widget_btnClose",isCustom:!1}],maximizeFormatter:null,buttonFormatter:null},l.prototype.initialize=function(t){this.src=this.options.src,this.scope=this.options.scope,this.params=this.options.params,this.minimized=this.options.minimized,this.maximized=this.options.maximized,this.x=this.options.x,this.y=this.options.y,this.unitWidth=this.options.unitWidth,this.unitHeight=this.options.unitHeight,this.fixed=this.options.fixed,this.oriFixed=this.options.oriFixed,this.oriX=this.x,this.oriY=this.y,this.oriUnitWidth=this.unitWidth,this.oriUnitHeight=this.unitHeight,this.dirty=!1,this.title=this.options.title,this.resized=this.options.resized,this.savedUnitHeight=null,this.buttons=this.options.buttons,this.maxConfig=this.options.maxConfig,this.maximizeFormatter=this.options.maximizeFormatter,this.buttonFormatter=this.options.buttonFormatter,this.titleClass=this.options.titleClass,this.maximizeFormatter&&this.setMaximizeFormatter(this.maximizeFormatter),this.buttonFormatter&&this.setButtonFormatter(this.buttonFormatter)},l.prototype.toHTML=function(){var t=[],i=""===this.options.style?"":"style='"+this.options.style+"'";if(this.isFixed())var e="w2widget w2widget_fixed";else e="w2widget";if(this.options.className&&(e+=" "+this.options.className),t.push("<div id='"+this.id+"' "+i+" class='"+e+"'>"),this.options.hasTitleBar){
t.push("<div id='"+this.id+"_title' class='w2widget_title "+this.options.titleClass+"'>"),t.push("<div id='"+this.id+"_title_icon' class='w2widget_icon'></div>"),t.push("<span id='"+this.id+"_title_text' class='w2widget_title_text'>"+this.options.title+"</span>"),t.push("<div id='"+this.id+"_title_buttons' class='w2widget_title_buttons'>");for(var s=0;s<this.buttons.length;s++){var n=this.buttons[s];t.push("<div id='"+this.id+"_title_"+n.id+"' class='"+n.className+"'></div>")}t.push("</div>"),t.push("</div>")}return t.push("<div id='"+this.id+"_btnResize' class='w2widget_btnResize'></div>"),t.push("</div>"),t.join("")},l.prototype.setAction=function(){var t=this.parentControl.options&&this.parentControl.options.async,i=new WebSquare.uiplugin.wframe(this.id+"_content",{className:this.options.hasTitleBar?"w2widget_content":"w2widget_content_notitlebar",src:this.options.src,scope:this.options.scope,mode:t?"async":"sync",isWidget:!0});try{var e=this.options.org_id,s=this.parentControl.id,h=this.parentControl.uuid;if(i.options.scope&&i.options.scopeFunction)for(var d in i.scopeVariable)i.scopeVariable[d][i.options.scopeFunction].widget={},i.scopeVariable[d][i.options.scopeFunction].widget.getWidgetId=function(){return e},i.scopeVariable[d][i.options.scopeFunction].widget.getWidgetContainerId=function(){return s},i.scopeVariable[d][i.options.scopeFunction].widget.getWidgetContainer=function(){return WebSquare.idCache[h]}}catch(t){n.w.printStackTrace(t,null,this)}i.appendTo(this,this.parentFrame),i.makeFrame(!0),i.activeStatus="active",o.B.fireEvent(this.parentControl,"onwidgetload",this.options.id,this.options.org_id),this.resized=this.parentControl.widgetResize,this.isResizable()&&!1!==this.parentControl.widgetResize||this.addClass(document.getElementById(this.id+"_btnResize"),"w2widget_btnResize_halt"),this.event.addListener(this.render,"onclick",this.event.bindAsEventListener(this,this.handleTitleClick)),this.event.addListener(this.render,"ontouchend",this.event.bindAsEventListener(this,this.handleTitleClick)),this.event.addListener(this.render,"ondblclick",this.event.bindAsEventListener(this,this.handleDblClickEvent)),!1===t&&r.D.isIEAllVersion("6 7")&&this.parentControl.redraw()},l.prototype.handleTitleClick=function(t){if(this.parentControl&&void 0!==WebSquare.idCache[this.parentControl.uuid]){for(var i=this.event.getTargetIterator(t,this.render);i.next();)for(var e=0;e<this.buttons.length;e++){var s=this.buttons[e];if(i.match(null,this.id+"_title_"+s.id)||i.match(null,s.id)){s.isCustom&&o.B.fireEvent(this.parentControl,"onclickcustombtn",this.id,s.id),s.useAPI&&"function"==typeof this[s.useAPI]&&this[s.useAPI](),i.stop();break}}i=null}},l.prototype.handleDblClickEvent=function(t){for(var i=this.parentControl.options.preventMaximizeByTitle,e=this.event.getTargetIterator(t,this.render);e.next();)e.match("w2widget_title")&&!i&&this.toggleMaximized();e=null},l.prototype.isFixed=function(){return this.fixed},l.prototype.toggleFixed=function(){this.isFixed()?this.unsetFixed():this.setFixed()},l.prototype.setFixed=function(){return!this.isFixed()&&(this.fixed=!0,this.addClass("w2widget_fixed"),this.addClass(document.getElementById(this.id+"_btnResize"),"w2widget_btnResize_halt"),o.B.fireEvent(this.parentControl,"onwidgetfix",this.id),!0)},l.prototype.unsetFixed=function(){return!(!this.isFixed()||this.isMaximized())&&(this.fixed=!1,this.removeClass("w2widget_fixed"),this.isResizable()&&this.removeClass(document.getElementById(this.id+"_btnResize"),"w2widget_btnResize_halt"),!0)},l.prototype.isMaximized=function(){return this.maximized},l.prototype.setMaximized=function(){return!(this.isMaximized()||this.isFixed()&&!this.options.maximizeonfixed)&&(this.maximized=!0,this.addClass("w2widget_maximized"),this.isFixed()?this.oriFixed=!0:this.setFixed(),o.B.fireEvent(this.parentControl,"onwidgetmaximize",this.id),this.parentControl.redraw(),!0)},l.prototype.unsetMaximized=function(){return!!this.isMaximized()&&(this.maximized=!1,
this.removeClass("w2widget_maximized"),this.oriFixed?this.oriFixed=!1:this.unsetFixed(),o.B.fireEvent(this.parentControl,"onwidgetrestore",this.id),this.parentControl.redraw(),!0)},l.prototype.toggleMaximized=function(){return this.isMaximized()?this.unsetMaximized():this.setMaximized()},l.prototype.isMinimized=function(){return this.minimized},l.prototype._calcMinimizedUnitHeight=function(){for(var t=this.getElementById(this.id+"_title"),i=parseInt(WebSquare.style.getStyle(t,"height"),10),e=0,s=this.parentControl.unitHeightPixel,n=this.parentControl._getMarginedHeight;n.call(this.parentControl,e*s)<i;)e+=1;return e},l.prototype.setMinimized=function(){if(this.isMinimized()||this.isFixed()&&!this.options.minimizeonfixed)return!1;this.savedUnitHeight=this.unitHeight;var t=this.parentControl.resizeWidget(this.id,this.width,this._calcMinimizedUnitHeight(),{force:this.parentControl.oneColumn&&this.parentControl.options.forceMinMax||this.options.minimizeonfixed});return t?(this.minimized=!0,this.addClass("w2widget_minimized"),this.addClass(document.getElementById(this.id+"_btnResize"),"w2widget_btnResize_halt"),o.B.fireEvent(this.parentControl,"onwidgetminimize",this.id)):this.savedUnitHeight=null,t},l.prototype.unsetMinimized=function(){if(!this.isMinimized()||this.isFixed()&&!this.options.minimizeonfixed)return!1;var t=this.parentControl.resizeWidget(this.id,this.width,this.savedUnitHeight,{force:this.parentControl.oneColumn&&this.parentControl.options.forceMinMax||this.options.minimizeonfixed});return t&&(this.savedUnitHeight=null,this.minimized=!1,this.removeClass("w2widget_minimized"),this.removeClass(document.getElementById(this.id+"_btnResize"),"w2widget_btnResize_halt"),o.B.fireEvent(this.parentControl,"onwidgetrestore",this.id)),t},l.prototype.toggleMinimized=function(){var t=!1;return(t=this.isMinimized()?this.unsetMinimized():this.setMinimized())&&this.parentControl.redraw(),t},l.prototype.isMovable=function(){return!this.isFixed()},l.prototype.isResizable=function(){return!this.isFixed()&&!this.isMinimized()&&(!this.parentControl||!1!==this.parentControl.widgetResize)&&this.resized},l.prototype.setTitle=function(t){var i=this.getElementById(this.id+"_title_text");return!!i&&(i["textContent"in i?"textContent":"innerText"]=t+"",this.title=t+"",!0)},l.prototype.getTitle=function(){var t=this.getElementById(this.id+"_title_text");return!!t&&t["textContent"in t?"textContent":"innerText"]},l.prototype.setParams=function(t){var i=this.getChild(this.id+"_content");return this.params=t,"object"!=typeof i.paramObj&&(i.paramObj={}),i.paramObj.params=this.params,!0},l.prototype.getParams=function(){return this.params},l.prototype.closeWidget=function(){var t=this.parentControl,i=this.id;if(!1===o.B.fireEvent(t,"onbeforewidgetclose",i))return!1;var e=this.parentControl._removeWidgets(this);return o.B.fireEvent(t,"onafterwidgetclose",i),e},l.prototype.getWidgetInfo=function(){var t=this.parentControl.id,i={};return i.id=this.id.slice(t.length+1),i.src=this.src,i.scope=this.options.scope,i.minimized=this.minimized,i.maximized=this.maximized,i.x=this.x,i.y=this.y,i.unitWidth=this.unitWidth,i.unitHeight=this.unitHeight,i.fixed=this.fixed,i.oriFixed=this.oriFixed,i.title=this.title,i.className=this.render.className.replace("w2widget ",""),i.maximizeFormatter=this.maximizeFormatter,i.buttonFormatter=this.buttonFormatter,i.params=this.params,i.titleClass=this.titleClass,i.onWidgetLoad=this.onWidgetLoad,i},l.prototype.setSrc=function(t){return!!this.getChild(this.id+"_content").setSrc(t)&&(this.src=t,!0)},l.prototype.getSrc=function(){return this.getChild(this.id+"_content").getSrc()},l.prototype.getObj=function(t){return this.getChild(this.id+"_content").getObj(t)},l.prototype.getObjList=function(){return this.getChild(this.id+"_content").getObjList()},l.prototype.refresh=function(){if(!this.getChild(this.id+"_content").setSrc(this.src))return!1},l.prototype.getRect=function(){return{x:this.x,y:this.y,unitWidth:this.unitWidth,
unitHeight:this.unitHeight}},l.prototype._getOriRect=function(){return{x:this.oriX,y:this.oriY,unitWidth:this.oriUnitWidth,unitHeight:this.oriUnitHeight}},l.prototype.getRectByPx=function(){return{x:this.render.offsetLeft,y:this.render.offsetTop,width:this.render.clientWidth,height:this.render.clientHeight}},l.prototype.setButtonFormatter=function(t){var i=r.D.getGlobalFunction(t,this.scope_id);if("function"!=typeof i)return!1;for(var e=this.defaultOptions.buttons,s=i(this.id),n=0;n<s.length;n++){var o=s[n];if(o.useDefault)switch(o.useDefault){case"fix":s[n]=e[0];break;case"minimize":s[n]=e[1];break;case"maximize":s[n]=e[2];break;case"close":s[n]=e[3];break;default:return!1}}return this.buttons=s,!0},l.prototype.setMaximizeFormatter=function(t){var i=r.D.getGlobalFunction(t,this.scope_id);if("function"!=typeof i)return!1;var e=i(this.id);if(!e)return!1;for(var s=["left","right","top","bottom"],n=0;n<s.length;n++){var o=s[n];e[o]!==parseInt(e[o],10)&&(e[o]=0)}return this.maxConfig=e,!0},l.prototype.getMaximizeConfig=function(){return this.maxConfig},l.prototype.showTitle=function(t){var i=document.getElementById(this.id+"_title"),e=document.getElementById(this.id+"_content");if(!i){if(!t)return;var s=document.getElementById(this.id+"_btnResize"),n=document.createElement("div"),o=[];o.push("<div id='"+this.id+"_title' class='w2widget_title "+this.options.titleClass+"'>"),o.push("<div id='"+this.id+"_title_icon' class='w2widget_icon'></div>"),o.push("<span id='"+this.id+"_title_text' class='w2widget_title_text'>"+this.options.title+"</span>"),o.push("<div id='"+this.id+"_title_buttons' class='w2widget_title_buttons'>");for(var r=0;r<this.buttons.length;r++){var h=this.buttons[r];o.push("<div id='"+this.id+"_title_"+h.id+"' class='"+h.className+"'></div>")}o.push("</div>"),o.push("</div>"),n.innerHTML=o.join("");var d=n.firstChild;this.render.insertBefore(d,s),i=document.getElementById(this.id+"_title");var l=document.getElementById(this.id+"_title_text");if(!l.style.width){var a=document.getElementById(this.id+"_title_icon"),g=document.getElementById(this.id+"_title_buttons");l.style.width=i.clientWidth-15-a.clientWidth-g.clientWidth+"px"}}t?(i.style.display="block",e.style.top=i.clientHeight+"px",this.addClass(e,"w2widget_content"),this.removeClass(e,"w2widget_content_notitlebar"),this.options.hasTitleBar=!0):(i.style.display="none",e.style.top="0px",this.addClass(e,"w2widget_content_notitlebar"),this.removeClass(e,"w2widget_content"),this.options.hasTitleBar=!1)},l.prototype.setResizable=function(t){if("boolean"==typeof t){var i=document.getElementById(this.id+"_btnResize"),e=t&&0!=this.parentControl.widgetResize;e?this.removeClass(i,"w2widget_btnResize_halt"):this.addClass(i,"w2widget_btnResize_halt"),this.resized=e}},l.prototype._setTitleEllipsis=function(){try{var t=document.getElementById(this.id+"_title");if(!t)return;var i=document.getElementById(this.id+"_title_icon"),e=document.getElementById(this.id+"_title_text"),s=document.getElementById(this.id+"_title_buttons");e.style.width=t.clientWidth-15-i.clientWidth-s.clientWidth+"px"}catch(t){n.w.printStackTrace(t,null,this)}},l.prototype.getWindow=function(){try{var t,i=this.getChild(this.id+"_content");return i&&(t=i.getWindow()),t}catch(t){n.w.printStackTrace(t,null,this)}}}}]);