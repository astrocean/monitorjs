!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).monitorjs=e()}(this,function(){"use strict";var i=function(){return(i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function a(e,t,n){t.split(" ").forEach(function(t){e.addEventListener(t,n)})}function o(t,e,n){void 0===n&&(n=!1);var o=new l(e);return o.observe(t,{childList:!0,subtree:n}),o}function t(t){return document.querySelector(t)}function r(t,e){var n;Math.random()>u.get().percent||((n=new Image).src=u.get().reportUrl+"?type="+t+"&data="+JSON.stringify(i(i({},e),{namespace:u.get().namespace}))+"&timestamp="+f(),a(n,"load error complete",function(){document.body.removeChild(n),n=null}),document.body.appendChild(n))}function c(t,e,n){var o=f()-t;o>u.get().timeoutCheck&&r(e,i(i({},n),{duration:o}))}var e,n,s={namespace:"main-site",timeoutCheck:600,reportUrl:"/",percent:1,fs:{enable:!1,root:"root",startParam:"fs_start",maxSpace:50}},u={get:function(){return s},set:function(t){s=i(i(i({},s),t),{fs:i(i({},s.fs),t.fs||{})})}},l=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,f=Date.now.bind(Date);(n=e=e||{}).RUNTIME_ERROR="RUNTIME_ERROR",n.LOAD_TIMEOUT="LOAD_TIMEOUT",n.FS="FS";var p,h=e;a(window,"error",function(t){r(h.RUNTIME_ERROR,{error:t.message,lcno:t.lineno+":"+t.colno,file:t.filename})}),"fetch"in window&&(p=window.fetch,window.fetch=function(t,e){var n=f(),o=p(t,e);return e.body instanceof FormData||o.finally(function(){return c(n,h.LOAD_TIMEOUT,{url:t,options:e})}),o});var d=XMLHttpRequest.prototype.open,m=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(t,e){for(var n=this,o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];var r=f();return a(this,"loadend",function(){return!n.__$isUploadType&&c(r,h.LOAD_TIMEOUT,{url:e,options:{method:t}})}),d.call.apply(d,function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var o=Array(t),i=0,e=0;e<n;e++)for(var r=arguments[e],a=0,c=r.length;a<c;a++,i++)o[i]=r[a];return o}([this,t,e],o))},XMLHttpRequest.prototype.send=function(t){return t instanceof FormData&&(this.__$isUploadType=!0),m.call(this,t)};var g=document.createElement;document.createElement=function(t){var e=g.call(this,t),n=f();return"script"==t&&a(e,"load",function(){return c(n,h.LOAD_TIMEOUT,{url:e.src})}),e};var v,y=location.href.match(new RegExp(u.get().fs.startParam+"=(\\d+)")),w=y?Number(y[1]):performance.timing.navigationStart,E=history.replaceState,O=history.pushState;history.replaceState=function(){E.apply(this,arguments),v=f()},history.pushState=function(){O.apply(this,arguments),v=f()},window.addEventListener("popstate",function(t){v=f()});var b,R="__$monitor",M="__$monitoring",T=!1;function _(){b&&b.stop();var n,o,i=t("[data-monitorjs-fs]");i&&i[R]||!i||(n=w,o=f(),T&&(n=v),T=!0,b=new I(i,function(t,e){r(h.FS,{name:i.getAttribute("data-monitorjs-fs"),spaces:e,ready:o,duration:t-n}),b.stop(),b=null}))}document.addEventListener("DOMContentLoaded",function(){u.get().fs.enable&&(o(t("#"+u.get().fs.root),_),_())});var I=(L.prototype.stop=function(){this.$&&(this.$.disconnect(),this.$=null,this.infos=null,this.element=null)},L.prototype.try2collect=function(t){var e=this;t.forEach(function(t){[].forEach.call(t.addedNodes,function(t){1==t.nodeType&&e.cache(t)}),e.try2collectImage(t.target)})},L.prototype.try2collectImage=function(t){var e=this;if(t[M])return!1;t[M]=!0,setTimeout(function(){e.collectImage(t),t[M]=!1},50)},L.prototype.collectImage=function(t){var o=this;[].forEach.call(t.getElementsByTagName("img"),function(e){var n;e[M]||(e[M]=!0,(n=o.cache(e)).image=!0,e.complete||(n.wait=new Promise(function(t){a(e,"load complete error",function(){n.time=f(),t()})})))})},L.prototype.cache=function(t){var e={el:t,time:f()};return this.infos.push(e),e},L.prototype.analyse=function(){var n=this;this.$&&Promise.all(this.filter()).then(function(t){var e,o=[],i=(null===(e=t[0])||void 0===e?void 0:e.time)||0;0!=i?(t.sort(function(t,e){return t.top-e.top}).reduceRight(function(t,e){var n=t.top+t.height;return e.top>window.innerHeight||t.top<0?e:(e.top-n>u.get().fs.maxSpace&&o.push([n,e.top]),i=Math.max(i,t.time,e.time),e.top+e.height>n?e:t)}),n.callback(i,o)):n.stop()})},L.prototype.filter=function(){var a=this.element.getBoundingClientRect().top,c=window.innerWidth,s=[];return this.infos.forEach(function(t){var e=t.el.getBoundingClientRect(),n=e.height,o=e.top,i=e.width,r=e.left;if(t.height=n,t.top=o-a,t.image){if(c<i&&c<r)return;if(t.wait)return void s.push(t.wait.then(function(){return t.height=t.el.height,t}))}s.push(t)}),s},L);function L(t,e){var n=this;this.infos=[],this.element=t,this.callback=e,this.$=t[R]=o(this.element,this.try2collect.bind(this),!0),this.collectImage(t),setTimeout(function(){return n.analyse()},2500)}return{init:u.set}});
