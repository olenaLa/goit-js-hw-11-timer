parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ddLP":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}require("./common.css");var i=function(){function e(n){var i=n.selector,a=n.targetDate;t(this,e),this.intervalId=null,this.selector=document.querySelector("".concat(i)),this.onTick=this.updateTimeFields,this.targetDate=a,this.init()}return n(e,[{key:"init",value:function(){var t=this.getTimeComponents(this.targetDate.getTime()-Date.now());this.onTick(t)}},{key:"start",value:function(){var t=this;if(!this.isActive){var e=Date.now();this.isActive=!0,this.intervalId=setInterval(function(){var n=Date.now()-e,i=t.getTimeComponents(n);t.onTick(i)},1e3)}}},{key:"getTimeComponents",value:function(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}},{key:"pad",value:function(t){return String(t).padStart(2,"0")}}]),e}(),a=new i({selector:"#timer-1",targetDate:new Date("Nov 11, 2020")});a.startTimer.call(a);
},{"./common.css":"ddLP"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.9f4ae2ce.js.map