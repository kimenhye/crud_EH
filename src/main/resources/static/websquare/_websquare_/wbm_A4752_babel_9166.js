(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[9166],{9166:function(t,l,o){"use strict";o.r(l),o.d(l,{balloonTip:function(){return p}});var i=o(1974),s=o(5948),e=o(1),p=function(t,l,o){e.s.call(this,t,l,o)};i.x.extend(p.prototype,e.s.prototype),p.prototype.defaultOptions={pluginType:"uiplugin.balloonTip",pluginName:"balloonTip",editable:!0},p.prototype.initialize=function(t){},p.prototype.toHTML=function(){try{var t=[],l=""==this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+l+" class='w2balloonTip'>"),t.push("<table id='"+this.id+"_mytable' class='w2balloonTip_table'>"),t.push("<tr>"),t.push("<td class='w2balloonTip_col_topleft'></td>"),t.push("<td class='w2balloonTip_col_topcenter'></td>"),t.push("<td class='w2balloonTip_col_topright'></td>"),t.push("</tr>"),t.push("<tr>"),t.push("<td class='w2balloonTip_col_centerleft'><div class='w2balloonTip_left'></div></td>"),t.push("<td class='w2balloonTip_col_centercenter'>"),t.push("<div id='"+this.id+"_label' role='tooltip' class='w2balloonTip_label'>12121212</div>"),t.push("</td>"),t.push("<td class='w2balloonTip_col_centerright'><div class='w2balloonTip_right'></div></td>"),t.push("</tr>"),t.push("<tr>"),t.push("<td id='bleft' class='w2balloonTip_col_bottomleft'></td>"),t.push("<td class='w2balloonTip_col_bottomcenter'></td>"),t.push("<td id='bright' class='w2balloonTip_col_bottomright'></td>"),t.push("</tr>"),t.push("</table>"),t.push("</div>"),t.join("")}catch(t){s.w.printStackTrace(t,null,this)}},p.prototype.setAction=function(){try{this.dom.label=document.getElementById(this.id+"_label")}catch(t){s.w.printStackTrace(t,null,this)}},p.prototype.setValue=function(t){try{this.dom.label.innerHTML=t}catch(t){s.w.printStackTrace(t,null,this)}},p.prototype.getValue=function(){try{return this.dom.label.innerHTML}catch(t){s.w.printStackTrace(t,null,this)}}}}]);