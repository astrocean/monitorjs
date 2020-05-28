!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).monitorjs=e()}(this,function(){"use strict";var a=function(){return(a=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function p(e,t,n){t.split(" ").forEach(function(t){e.addEventListener(t,n)})}function h(t,e,n){void 0===n&&(n=!1);var o=new(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver)(e);return o.observe(t,{childList:!0,subtree:n}),o}function d(t){return document.querySelector(t)}function r(t,e){var n,o;Math.random()>m.get().percent||(n=m.get().reportUrl+"?"+JSON.stringify(a(a({type:t},e),{namespace:m.get().namespace})),i?m.get().global.request({url:n}):((o=new Image).src=n,p(o,"load error complete",function(){document.body.removeChild(o),o=null}),document.body.appendChild(o)))}function c(t,e,n){var o=y()-t;o>m.get().timeoutCheck&&r(e,a(a({},n),{duration:o}))}var t,e,n={namespace:"main-site",timeoutCheck:600,reportUrl:"/",percent:1,global:"undefined"!=typeof wx?wx:"undefined"!=typeof my?my:null,fs:{enable:!1,root:"root",startParam:"fs_start",maxSpace:50}},m={get:function(){return n},set:function(t){n=a(a(a({},n),t),{fs:a(a({},n.fs),t.fs||{})})}},y=Date.now.bind(Date),i="undefined"==typeof window;(e=t=t||{}).RUNTIME_ERROR="RUNTIME_ERROR",e.LOAD_TIMEOUT="LOAD_TIMEOUT",e.FS="FS";var o,u,s,l,f,g,v=t;function w(t){return 50*Math.round(t/50)}i?((o=m.get().global).onError(function(t){r(v.RUNTIME_ERROR,{error:t,lcno:"0:0",file:""})}),u=o.request,s=function(t){var n=t.complete,o=t.url,r=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]]);return n}(t,["complete","url"]),i=y();return u(a(a({url:o},r),{complete:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];c(i,v.LOAD_TIMEOUT,{url:o,options:{data:r.data,method:r.method}}),n&&n.apply(void 0,t)}}))},Object.defineProperty(o,"request",a(a({},Object.getOwnPropertyDescriptor(o,"request")),{get:function(){return s}}))):(p(window,"error",function(t){r(v.RUNTIME_ERROR,{error:t.message,lcno:t.lineno+":"+t.colno,file:t.filename})}),"fetch"in window&&(l=window.fetch,window.fetch=function(t,e){var n=y(),o=l(t,e);return e.body instanceof FormData||o.finally(function(){return c(n,v.LOAD_TIMEOUT,{url:t,options:e})}),o}),f=XMLHttpRequest.prototype.open,g=XMLHttpRequest.prototype.send,XMLHttpRequest.prototype.open=function(t,e){for(var n=this,o=[],r=2;r<arguments.length;r++)o[r-2]=arguments[r];var i=y();return p(this,"loadend",function(){return!n.__$isUploadType&&c(i,v.LOAD_TIMEOUT,{url:e,options:{method:t}})}),f.call.apply(f,function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var o=Array(t),r=0,e=0;e<n;e++)for(var i=arguments[e],a=0,c=i.length;a<c;a++,r++)o[r]=i[a];return o}([this,t,e],o))},XMLHttpRequest.prototype.send=function(t){return t instanceof FormData&&(this.__$isUploadType=!0),g.call(this,t)});function O(t,e,n,o){void 0===e&&(e=0),void 0===n&&(n=0),void 0===o&&(o=[]),r(v.FS,{name:t,spaces:o,duration:w(e),ready:w(n)})}return i||function(){var e,t=location.href.match(new RegExp(m.get().fs.startParam+"=(\\d+)")),i=t?Number(t[1]):performance.timing.navigationStart,n=history.replaceState,o=history.pushState;history.replaceState=function(){n.apply(this,arguments),e=y()},history.pushState=function(){o.apply(this,arguments),e=y()},window.addEventListener("popstate",function(t){e=y()});var a,c="__$monitor",r="__$monitoring",u=!1;function s(){a&&a.stop();var n,o,r=d("[data-monitorjs-fs]");r&&r[c]||!r||(n=i,o=y(),u&&(n=e),u=!0,a=new l(r,function(t,e){O(r.getAttribute("data-monitorjs-fs"),t-n,o-n,e),a.stop(),a=null}))}document.addEventListener("DOMContentLoaded",function(){m.get().fs.enable&&(h(d("#"+m.get().fs.root),s),s())});var l=(f.prototype.stop=function(){this.$&&(this.$.disconnect(),this.$=null,this.infos=null,this.element=null)},f.prototype.try2collect=function(t){var e=this;t.forEach(function(t){[].forEach.call(t.addedNodes,function(t){1==t.nodeType&&e.cache(t)}),e.try2collectImage(t.target)})},f.prototype.try2collectImage=function(t){var e=this;if(t[r])return!1;t[r]=!0,setTimeout(function(){e.collectImage(t),t[r]=!1},50)},f.prototype.collectImage=function(t){var o=this;[].forEach.call(t.getElementsByTagName("img"),function(e){var n;e[r]||(e[r]=!0,(n=o.cache(e)).image=!0,e.complete||(n.wait=new Promise(function(t){p(e,"load complete error",function(){n.time=y(),t()})})))})},f.prototype.cache=function(t){var e={el:t,time:y()};return this.infos.push(e),e},f.prototype.analyse=function(){var n=this;this.$&&Promise.all(this.filter()).then(function(t){var e,o=[],r=(null===(e=t[0])||void 0===e?void 0:e.time)||0;0!=r?(t.sort(function(t,e){return t.top-e.top}).reduceRight(function(t,e){var n=t.top+t.height;return e.top>window.innerHeight||t.top<0?e:(e.top-n>m.get().fs.maxSpace&&o.push([n,e.top]),r=Math.max(r,t.time,e.time),e.top+e.height>n?e:t)}),n.callback(r,o)):n.stop()})},f.prototype.filter=function(){var a=this.element.getBoundingClientRect().top,c=window.innerWidth,u=[];return this.infos.forEach(function(t){var e=t.el.getBoundingClientRect(),n=e.height,o=e.top,r=e.width,i=e.left;if(t.height=n,t.top=o-a,t.image){if(c<r&&c<i)return;if(t.wait)return void u.push(t.wait.then(function(){return t.height=t.el.height,t}))}u.push(t)}),u},f);function f(t,e){var n=this;this.infos=[],this.element=t,this.callback=e,this.$=t[c]=h(this.element,this.try2collect.bind(this),!0),this.collectImage(t),setTimeout(function(){return n.analyse()},2500)}}(),{init:m.set,reportFs:O}});
