!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n,a=document.getElementsByClassName("main__workspace__tools__items"),r=a[0].getElementsByClassName("main__workspace__tools__items__tool"),c=document.getElementsByClassName("footer_button_reset")[0];function s(){function e(e){var t=a[0].getElementsByClassName("active");t.length>0&&(t[0].className=t[0].className.replace(" active","")),r[e].className+=" active"}return function(){for(var t=function(t){r[t].addEventListener("click",function(){e(t)})},n=0;n<2;n+=1)t(n)}(),void document.addEventListener("keydown",function(t){"p"!==t.key&&"P"!==t.key&&"з"!==t.key&&"З"!==t.key||e(0),"e"!==t.key&&"E"!==t.key&&"у"!==t.key&&"У"!==t.key||e(1)})}function l(e){var t=e,n=t.getContext("2d");n.scale(10,10),t.addEventListener("mousedown",function(){t.className+=" active",n.fillStyle=document.getElementById("curr-color").getAttribute("style").slice(18).slice(0,-1)}),t.addEventListener("mouseup",function(){t.className=t.className.replace(" active","")}),t.addEventListener("mousemove",function(e){t.classList.contains("active")&&a[0].getElementsByClassName("active")[0]===r[0]&&n.fillRect(e.offsetX/10,e.offsetY/10,1,1)})}function o(e,t,n,a){var r=document.createElement(e);return r.className+=t,arguments.length>3&&(r.id=a),n.appendChild(r),r}function i(){var e,t=document.getElementsByClassName("main__workspace__layers")[0],n=t.getElementsByClassName("current")[0];n?(e="l".concat((+t.lastElementChild.getAttribute("id").slice(1)+1).toString()),n.className=n.className.replace(" current","")):e="l1";var a=o("div","main__workspace__layers__layer_wrapper",t,e);a.classList+=" current",a=o("div","main__workspace__layers__layer",t=a),(a=o("img","main__workspace__layers__layer__make-copy_icon",o("div","main__workspace__layers__layer__make-copy",t=a))).setAttribute("src","assets/pictures/copy-icon.svg"),a.setAttribute("alt",""),(a=o("img","main__workspace__layers__layer__delete_icon",o("div","main__workspace__layers__layer__delete",t))).setAttribute("src","assets/pictures/trash-icon.svg"),a.setAttribute("alt","")}function m(e){var t,n=document.getElementsByClassName("main__workspace__canvas_wrapper")[0],a=n.getElementsByClassName("current")[0];a?(t="c".concat((+n.lastElementChild.getAttribute("id").slice(1)+1).toString()),a.className=a.className.replace(" current","")):t="c1";var r=o("canvas","main__workspace__canvas",n,t);(r.setAttribute("width","580"),r.setAttribute("height","580"),r.classList+=" current",arguments.length)&&r.getContext("2d").drawImage(document.getElementById(e),0,0);l(r)}function _(){c.addEventListener("click",function(e){1===e.which&&(localStorage.clear(),document.location.reload())})}s(),document.getElementById("curr-color").style.backgroundColor=getComputedStyle(document.getElementById("curr-color")).backgroundColor,document.body.addEventListener("mouseup",function(e){var t=document.elementFromPoint(e.clientX,e.clientY).closest(".main__workspace__tools__items__tool");if(a[0].getElementsByClassName("active")[0]===r[1]&&1===e.which&&null===t){var n=getComputedStyle(document.getElementById("curr-color")).backgroundColor;document.getElementById("curr-color").style.backgroundColor=getComputedStyle(e.target).backgroundColor,document.getElementById("prev-color").style.backgroundColor=n}}),l(document.getElementsByClassName("main__workspace__canvas_wrapper")[0].getElementsByClassName("current")[0]),n=document.getElementsByClassName("main__workspace__layers")[0],document.getElementById("add-layer").addEventListener("click",function(){i(),m()}),n.addEventListener("click",function(e){var t=e.target,a=document.getElementsByClassName("main__workspace__canvas_wrapper")[0];if(t.classList.contains("main__workspace__layers__layer")){var r=n.getElementsByClassName("current")[0],c=r.getAttribute("id").slice(1),s=document.getElementById("c".concat(c));r.className=r.className.replace(" current",""),s.className=s.className.replace(" current","");var l=t.parentElement.getAttribute("id").slice(1),o=document.getElementById("c".concat(l));t.parentElement.classList+=" current",o.classList+=" current"}if(t.classList.contains("main__workspace__layers__layer__make-copy_icon")){var _="c".concat(e.target.parentElement.parentElement.parentElement.getAttribute("id").slice(1));i(),m(_)}if(t.classList.contains("main__workspace__layers__layer__delete_icon")){var u=e.target.parentElement.parentElement.parentElement,d=u.getAttribute("id").slice(1);n.removeChild(u),a.removeChild(document.getElementById("c".concat(d)))}}),_()}]);