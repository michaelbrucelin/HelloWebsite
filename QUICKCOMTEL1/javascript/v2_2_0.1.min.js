(function(b,c){var a={};
b.PubSub=a;
var d=b.define;
c(a);
if(typeof d==="function"&&d.amd){d(function(){return a
})
}else{if(typeof exports==="object"){if(module!==undefined&&module.exports){exports=module.exports=a
}exports.PubSub=a;
module.exports=exports=a
}}}((typeof window==="object"&&window)||this,function(m){var e={},i=-1;
function h(o){var n;
for(n in o){if(o.hasOwnProperty(n)){return true
}}return false
}function l(o){return function n(){throw o
}
}function b(o,p,q){try{o(p,q)
}catch(n){setTimeout(l(n),0)
}}function f(n,o,p){n(o,p)
}function d(o,q,r,u){var t=e[q],n=u?f:b,p;
if(!e.hasOwnProperty(q)){return
}for(p in t){if(t.hasOwnProperty(p)){n(t[p],o,r)
}}}function c(n,o,q){return function p(){var s=String(n),r=s.lastIndexOf(".");
d(n,n,o,q);
while(r!==-1){s=s.substr(0,r);
r=s.lastIndexOf(".");
d(n,s,o,q)
}}
}function g(p){var o=String(p),q=Boolean(e.hasOwnProperty(o)&&h(e[o])),n=o.lastIndexOf(".");
while(!q&&n!==-1){o=o.substr(0,n);
n=o.lastIndexOf(".");
q=Boolean(e.hasOwnProperty(o)&&h(e[o]))
}return q
}function a(p,q,o,s){p=(typeof p==="symbol")?p.toString():p;
var r=c(p,q,s),n=g(p);
if(!n){return false
}if(o===true){r()
}else{setTimeout(r,0)
}return true
}m.publish=function(n,o){return a(n,o,false,m.immediateExceptions)
};
m.publishSync=function(n,o){return a(n,o,true,m.immediateExceptions)
};
m.subscribe=function(p,o){if(typeof o!=="function"){return false
}p=(typeof p==="symbol")?p.toString():p;
if(!e.hasOwnProperty(p)){e[p]={}
}var n="uid_"+String(++i);
e[p][n]=o;
return n
};
m.subscribeOnce=function(p,o){var n=m.subscribe(p,function(){m.unsubscribe(n);
o.apply(this,arguments)
});
return m
};
m.clearAllSubscriptions=function j(){e={}
};
m.clearSubscriptions=function k(o){var n;
for(n in e){if(e.hasOwnProperty(n)&&n.indexOf(o)===0){delete e[n]
}}};
m.unsubscribe=function(s){var o=function(x){var t;
for(t in e){if(e.hasOwnProperty(t)&&t.indexOf(x)===0){return true
}}return false
},r=typeof s==="string"&&(e.hasOwnProperty(s)||o(s)),p=!r&&typeof s==="string",n=typeof s==="function",w=false,q,v,u;
if(r){m.clearSubscriptions(s);
return
}for(q in e){if(e.hasOwnProperty(q)){v=e[q];
if(p&&v[s]){delete v[s];
w=s;
break
}if(n){for(u in v){if(v.hasOwnProperty(u)&&v[u]===s){delete v[u];
w=true
}}}}}return w
}
}));
(function(){if(typeof window.CustomEvent==="function"){return false
}function a(c,d){var b;
d=d||{bubbles:false,cancelable:false,detail:null};
b=document.createEvent("CustomEvent");
b.initCustomEvent(c,d.bubbles,d.cancelable,d.detail);
return b
}a.prototype=window.Event.prototype;
window.CustomEvent=a
})();
var cpiUtils={};
cpiUtils.forEach=function(d,c,b){var a;
for(a=0;
a<d.length;
a++){c.call(b,a,d[a])
}};
cpiUtils.closest=function(a,b){if(typeof a.closest==="function"){return a.closest(b)||null
}while(a){if(cpiUtils.matches(a,b)){return a
}a=a.parentElement
}return null
};
cpiUtils.matches=function(b,d){var a;
var c;
if(typeof b.matches==="function"){return b.matches(d)||null
}c=document.querySelectorAll(d);
a=c.length;
while(--a>=0&&c.item(a)!==b){}return a>-1
};
cpiUtils.templateReplace=function(e,a){var d=Object.keys(a);
var c;
var b=null;
for(c=0;
c<d.length;
c++){b=d[c];
e=e.replace("${"+b+"}",a[b])
}return e
};
cpiUtils.getElementsFromSelector=function(a,c){var b=null;
c=c||document;
if(/^(#?[\w-]+|\.[\w-.]+)$/.test(a)){switch(a.charAt(0)){case"#":return[c.getElementById(a.substr(1))];
case".":b=a.substr(1).replace(/\./g," ");
return[].slice.call(c.getElementsByClassName(b));
default:return[].slice.call(c.getElementsByTagName(a))
}}return[].slice.call(c.querySelectorAll(a))
};
cpiUtils.getCookieValue=function(c){var a=new RegExp(c+"=([^;]+)");
var b=a.exec(document.cookie);
return b?decodeURI(b[1]):null
};
cpiUtils.isMobile=function(){var a=navigator.userAgent||navigator.vendor||window.opera;
if(/windows phone/i.test(a)){return true
}if(/android/i.test(a)){return true
}if(/iPad|iPhone|iPod/.test(a)&&!window.MSStream){return true
}return false
};
cpiUtils.eventHandler={addEvent:function addEvent(e,d,c){function a(g){var f=c.apply(this,arguments);
if(f===false){g.stopPropagation();
g.preventDefault()
}return f
}function b(){var f=c.call(e,window.event);
if(f===false){window.event.returnValue=false;
window.event.cancelBubble=true
}return f
}if(e){if(e.attachEvent){e.attachEvent("on"+d,b);
return{elem:e,handler:b,event:d}
}e.addEventListener(d,a,false);
return{elem:e,handler:a,event:d}
}return null
},removeEvent:function removeEvent(a){if(a.elem.removeEventListener){a.elem.removeEventListener(a.event,a.handler)
}else{a.elem.detachEvent("on"+a.event,a.handler)
}}};
cpiUtils.minimalAjax=function(b,h,d,f){var c=document.getElementById("cpiAPIConfigScript");
var a=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("MicrosoftXMLHTTP");
var i={method:"GET",setHeaders:e};
function g(j){if(j.method){i.method=j.method
}if(j.setHeaders){i.setHeaders=j.setHeaders
}}function e(l){var j;
var k={"X-HSBC-Locale":c.getAttribute("data-header-locale"),"X-HSBC-Chnl-CountryCode":c.getAttribute("data-header-channel-country-code"),"X-HSBC-Chnl-Group-Member":c.getAttribute("data-header-channel-group-member"),"X-HSBC-Channel-Id":c.getAttribute("data-header-channel-id")};
for(j in k){if({}.hasOwnProperty.call(k,j)){l.setRequestHeader(j,k[j])
}}}a.onreadystatechange=function(){if(this.readyState===4){if(this.status===200){h(this.responseText)
}else{d()
}}};
if(f){g(f)
}a.open(i.method,b,true);
i.setHeaders(a);
a.send()
};
cpiUtils.topic={NAVIGATE_AWAY:"navigate-away",NAVIGATE_AWAY_MODAL_SHOW:"navigate-away.modal-show",NAVIGATE_AWAY_LEAVE:"navigate-away.leave",publish:function publish(a,b){window.PubSub.publish(a,b)
},publishSync:function publishSync(a,b){window.PubSub.publishSync(a,b)
},subscribe:function subscribe(a,b){window.PubSub.subscribe(a,b)
}};
cpiUtils.logoffUser=function(){var d=document.getElementById("cpiLogoffScript");
var b={retail:d.getAttribute("data-retail-logoff-url"),advance:d.getAttribute("data-advance-logoff-url"),premier:d.getAttribute("data-premier-logoff-url")};
function a(){var e=cpiUtils.getCookieValue("segment-hint");
return e?e:"retail"
}function c(){var e=a();
var g=b[e];
var f=document.createElement("form");
document.body.appendChild(f);
f.setAttribute("method","post");
f.setAttribute("action",g);
f.submit()
}c()
};
cpiUtils.cpiModal={};
cpiUtils.cpiModal={cpiDisplayedModal:null,cpiTemporaryModal:null,cpiHiddenModal:null};
cpiUtils.cpiModal.modalInstances=[];
cpiUtils.cpiModal.nodesUpdatedWithAriaHidden=[];
cpiUtils.cpiModal._registerEvents=function(f,a,e,d){var c=function(h){if(h&&typeof h.focus==="function"){h.focus()
}};
var b=function(h,i){if(typeof a==="function"){a(h,i)
}if(cpiUtils.cpiModal.cpiDisplayedModal){cpiUtils.cpiModal.cpiTemporaryModal=cpiUtils.cpiModal.cpiDisplayedModal;
cpiUtils.cpiModal.cpiDisplayedModal.hide();
cpiUtils.cpiModal.cpiHiddenModal=cpiUtils.cpiModal.cpiTemporaryModal;
cpiUtils.cpiModal.cpiTemporaryModal=null
}cpiUtils.cpiModal._getBodyChildNodes();
cpiUtils.cpiModal._addAriaHidden();
h.setAttribute("aria-hidden","false");
c(d)
};
var g=function(h,i){if(typeof e==="function"){e(h,i)
}cpiUtils.cpiModal.cpiDisplayedModal=null;
if(cpiUtils.cpiModal.cpiHiddenModal){cpiUtils.cpiModal.cpiHiddenModal.show();
cpiUtils.cpiModal.cpiDisplayedModal=cpiUtils.cpiModal.cpiHiddenModal;
cpiUtils.cpiModal.cpiHiddenModal=null
}else{cpiUtils.cpiModal._removeAriaHidden()
}h.setAttribute("aria-hidden","true")
};
f.on("show",b);
f.on("hide",g)
};
cpiUtils.cpiModal._addClickHandler=function(a,b){if(typeof b==="function"&&a){cpiUtils.eventHandler.addEvent(a,"click",b)
}};
cpiUtils.cpiModal._registerModalButtonEvents=function(e,g,d,f){var c=e.querySelector(".button--primary");
var b=e.querySelector(".button--secondary");
var a=e.querySelector(".cpi-modal-dialog__close-icon");
cpiUtils.cpiModal._addClickHandler(c,g);
cpiUtils.cpiModal._addClickHandler(b,d);
cpiUtils.cpiModal._addClickHandler(a,f)
};
cpiUtils.cpiModal.show=function(a,d,m,j,g,k,f,e){var c=null;
function l(){var n;
for(n=0;
n<cpiUtils.cpiModal.modalInstances.length;
n++){if(cpiUtils.cpiModal.modalInstances[n].container.id===d.id){return true
}}return false
}function h(){c=new window.A11yDialog(d);
cpiUtils.cpiModal._registerEvents(c,j,g,m);
cpiUtils.cpiModal._registerModalButtonEvents(d,k,f,e);
cpiUtils.cpiModal.modalInstances.push(c)
}function i(){var n;
for(n=0;
n<cpiUtils.cpiModal.modalInstances.length;
n++){if(cpiUtils.cpiModal.modalInstances[n].container.id===d.id){c=cpiUtils.cpiModal.modalInstances[n];
break
}}}function b(){if(l()){i()
}else{h()
}}b();
c.show(a);
cpiUtils.cpiModal.cpiDisplayedModal=c
};
cpiUtils.cpiModal.hide=function(a){function b(){var c;
for(c=0;
c<cpiUtils.cpiModal.modalInstances.length;
c++){if(cpiUtils.cpiModal.modalInstances[c].container.id===a.id){return cpiUtils.cpiModal.modalInstances[c]
}}}b().hide()
};
cpiUtils.cpiModal._getBodyChildNodes=function(){var a;
if(!cpiUtils.cpiModal.cpiHiddenModal){a=[].slice.call(document.body.children);
cpiUtils.cpiModal.nodesUpdatedWithAriaHidden=a.filter(function(b){return(!b.getAttribute("aria-hidden")||b.getAttribute("aria-hidden")==="false")&&b.getAttribute("id")!=="cpi-modal-wrapper"
})
}};
cpiUtils.cpiModal._addAriaHidden=function(){cpiUtils.cpiModal.nodesUpdatedWithAriaHidden.forEach(function(a){a.setAttribute("aria-hidden","true")
})
};
cpiUtils.cpiModal._removeAriaHidden=function(){cpiUtils.cpiModal.nodesUpdatedWithAriaHidden.forEach(function(a){a.setAttribute("aria-hidden","false")
})
};
cpiUtils.DataStore=(function(){function d(h,i){this.owner=h;
this.group=i
}d.prototype._getKeyPrefix=function e(){return this.owner+"."+this.group
};
d.prototype.getFullKey=function c(h){return this.owner+"."+this.group+"."+h
};
d.prototype.setItem=function b(h,i){window.localStorage.setItem(this.getFullKey(h),i)
};
d.prototype.getItem=function g(h){return window.localStorage.getItem(this.getFullKey(h))
};
d.prototype.removeItem=function f(h){window.localStorage.removeItem(this.getFullKey(h))
};
d.prototype.clear=function a(){var h=this._getKeyPrefix();
Object.keys(window.localStorage).forEach(function(i){if(i.substr(0,h.length)===h){window.localStorage.removeItem(i)
}})
};
return d
}());
(function(){var c="session-cookie-timeout-value";
var f="countdown-message-html";
var g="countdown-a11y-message-html";
var d="popup-window-action";
var a=new cpiUtils.DataStore("cpi","session-timeout-popup");
var e=new cpiUtils.DataStore("cpi","session-timeout-timer");
function h(l){var i=document.querySelector(".cpi-modal-dialog__text");
var n=document.querySelector(".button--primary");
var p=document.querySelector(".button--secondary");
var k=l.querySelector(".cpi-modal-dialog__a11y-text");
var m=k.innerHTML;
var o=l.getAttribute("data-counter-time")?Number(l.getAttribute("data-counter-time")):60000;
function j(q){a.setItem(d,q);
if(window===window.parent){window.close()
}}cpiUtils.eventHandler.addEvent(window,"DOMContentLoaded",function(){window.focus();
n.focus();
k.innerHTML=cpiUtils.templateReplace(m,{noOfSecondsRemaining:o})
});
cpiUtils.eventHandler.addEvent(window,"unload",function(){a.setItem(d,"extend")
});
cpiUtils.eventHandler.addEvent(n,"click",function(){j("extend")
});
cpiUtils.eventHandler.addEvent(p,"click",function(){j("logout")
});
cpiUtils.eventHandler.addEvent(window,"storage",function(q){if(q.key===a.getFullKey(f)){i.innerHTML=q.newValue
}else{k.innerHTML=q.newValue
}})
}function b(t){var w=t.getAttribute("data-counter-time")?Number(t.getAttribute("data-counter-time"))*1000:60000;
var v=t.getAttribute("data-default-time-out")?Number(t.getAttribute("data-default-time-out"))*1000:0;
var z;
var J=t.querySelector(".cpi-modal-dialog__title");
var x=t.querySelector(".cpi-modal-dialog__text");
var B=t.querySelector(".cpi-modal-dialog__a11y-text");
var q=t.querySelector(".button--primary");
var H=x.innerHTML;
var u="Notification" in window;
var j;
var r;
var A=[];
var p={noOfSecondsRemaining:""};
var K=[10,w/3000,w*2/3000,w/1000];
function y(){var Q=document.cookie.replace(/(?:(?:^|.*;\s*)session-expiry-hint\s*\=\s*([^;]*).*$)|^.*$/,"$1");
if(Q){return Number(Q)
}return v
}function P(){return Number(e.getItem(c))-w
}function O(){if(y()<w){w=y()
}return w/1000
}function I(){var R=y();
var Q=new Date().getTime();
e.setItem(c,R+Q)
}function F(Q){if(u&&!cpiUtils.isMobile()){if(Notification.permission==="granted"){j=new Notification(J.innerText,{body:cpiUtils.templateReplace(H,{noOfSecondsRemaining:O()}),icon:window.origin+t.getAttribute("data-notification-icon")});
setTimeout(j.close.bind(j),8000);
cpiUtils.eventHandler.addEvent(j,"click",function(){this.close();
Q.focus()
})
}else{u=false
}}}function N(){if(r&&!r.closed){r.close()
}}function o(){if(u&&!cpiUtils.isMobile()){j.close()
}}function n(){window.clearInterval(z);
while(A.length>0){cpiUtils.eventHandler.removeEvent(A.pop())
}}function m(){N();
o();
n();
e.clear();
a.clear();
cpiUtils.logoffUser()
}function L(){var Q=t.getAttribute("data-keep-session-alive-page-url")+".html";
N();
a.clear();
o();
n();
cpiUtils.cpiModal.hide(t);
cpiUtils.minimalAjax(Q,function(){I();
i()
},m)
}function E(Q){if(K.indexOf(Q)!==-1){B.innerHTML=cpiUtils.templateReplace(H,p);
a.setItem(g,B.innerHTML)
}}function D(){x.innerHTML=cpiUtils.templateReplace(H,p);
a.setItem(f,x.innerHTML)
}function l(){E(p.noOfSecondsRemaining);
D();
z=window.setInterval(function(){p.noOfSecondsRemaining--;
E(p.noOfSecondsRemaining);
D();
if(p.noOfSecondsRemaining<=0){m()
}},1000)
}function C(Q){switch(Q.newValue){case"extend":L();
break;
case"logout":m();
break;
default:break
}}function M(){A.push(cpiUtils.eventHandler.addEvent(window,"storage",function(Q){if(Q.key===a.getFullKey(d)){C(Q)
}}))
}function s(){if(u&&!cpiUtils.isMobile()){if(Notification.permission==="default"){Notification.requestPermission()
}}}function G(){if(r){return r
}return window
}function k(){if(!cpiUtils.isMobile()){r=window.open(t.getAttribute("data-session-timeout-popup-url"),"_cpiSessionTimeout","menubar=no,toolbar=no,personalbar=no,location=no,scrollbars=no,status=yes,resizable=no,left=400,top=200,width=700,height=350")
}a.setItem(d,"waiting");
M();
l();
cpiUtils.cpiModal.show(null,t,q,{},{},L,m);
F(G())
}function i(){window.setTimeout(function(){a.clear();
p.noOfSecondsRemaining=O();
if(P()>new Date().getTime()){i()
}else{k()
}},P()-new Date().getTime())
}I();
s();
i()
}document.addEventListener("DOMContentLoaded",function(){var j=document.getElementById("cpi-session-timeout-modal");
var i=document.getElementById("cpi-session-timeout-popup");
if(j){b(j)
}if(i){h(i)
}})
}());
(function(){var b;
var d;
var f=function(g){if(g.id===null||g.contentUrl===null){return false
}return true
};
var e=function(g){document.getElementById(this.id).innerHTML=g
};
var a=function(){};
var c=function(){var g;
d=JSON.parse(b.getAttribute("data-slots-data"));
for(g=0;
g<d.length;
g++){if(f(d[g])){cpiUtils.minimalAjax(d[g].contentUrl+".html",e.bind(d[g]),a,{setHeaders:a})
}}};
document.addEventListener("DOMContentLoaded",function(){b=document.getElementById("cpiVAMConfigScript");
if(b!==null){c()
}})
})();
(function(){var f;
var d;
function c(){var g=d.getAttribute("data-redirect-on-2nd-logon-url");
if(g){cpiUtils.eventHandler.addEvent(window,"storage",function(h){if(h.key===f.getFullKey("id")&&window.trackingID!==h.newValue){window.location=g
}})
}}function e(h){var g=JSON.parse(h);
if(g.trackingID){window.trackingID=g.trackingID;
f.setItem("id",window.trackingID);
c()
}}function a(){}function b(){var g=d.getAttribute("data-encrypted-cin-url");
if(g){f=new cpiUtils.DataStore("cpi","tracking");
cpiUtils.minimalAjax(g,e,a,{method:"POST"})
}}document.addEventListener("DOMContentLoaded",function(){d=document.getElementById("cpiAPIConfigScript");
if(d){b(d)
}})
})();
cpiUtils.page={changesEnabled:false,hasChanges:function hasChanges(a){cpiUtils.page.changesEnabled=a
},changesDetected:function changesDetected(){return cpiUtils.page.changesEnabled
}};
cpiUtils.navigateAway=function(f,h){var e=cpiUtils.closest(f.target,"a");
cpiUtils.navigateAway.triggerEl=e;
cpiUtils.navigateAway.callback=h;
cpiUtils.navigateAway.checkForCallBack=function c(j){var i=cpiUtils.navigateAway.callback;
if(i&&typeof i==="function"){i(f)
}else{j()
}};
function b(){return e&&e.getAttribute("data-external-url")?true:false
}function g(){return e&&e.getAttribute("href")!=="#"||h?true:false
}function d(){function j(){var m=cpiUtils.navigateAway.triggerEl.getAttribute("href");
var n=cpiUtils.navigateAway.triggerEl.getAttribute("target")?cpiUtils.navigateAway.triggerEl.getAttribute("target"):"_self";
window.open(m,n)
}function i(){cpiUtils.topic.publishSync(cpiUtils.topic.NAVIGATE_AWAY_LEAVE,{changes:true,external:false});
j()
}function k(){cpiUtils.topic.publish(cpiUtils.topic.NAVIGATE_AWAY_MODAL_SHOW,{changes:true,external:false})
}function l(){var n=document.getElementById("cpi-modal-navigate-away-internal");
var m=n.querySelector(".cpi-modal-dialog__close-icon");
if(n){cpiUtils.cpiModal.show(f,n,m,k,{},function(){cpiUtils.navigateAway.checkForCallBack(i)
})
}}if(cpiUtils.page.changesDetected()){l()
}else{cpiUtils.navigateAway.checkForCallBack(j)
}}function a(){function j(){var n="/bin/logout.";
var o=document.createElement("form");
var m=cpiUtils.navigateAway.triggerEl.getAttribute("data-external-url");
document.body.appendChild(o);
o.setAttribute("method","post");
o.setAttribute("action",n+m);
o.submit()
}function i(){cpiUtils.topic.publishSync(cpiUtils.topic.NAVIGATE_AWAY_LEAVE,{changes:cpiUtils.page.changesDetected(),external:true});
j()
}function l(o){var n=o.querySelector(".cpi-modal-dialog__sub-text");
var m=o.querySelector(".cpi-modal-dialog__wrapper");
cpiUtils.topic.publish(cpiUtils.topic.NAVIGATE_AWAY_MODAL_SHOW,{changes:cpiUtils.page.changesDetected(),external:true});
if(cpiUtils.page.changesDetected()&&!n.classList.contains("cpi-modal-dialog__sub-text--visible")){m.setAttribute("aria-describedby","external-link-modal-text external-link-modal-sub-text");
n.classList.add("cpi-modal-dialog__sub-text--visible")
}else{m.setAttribute("aria-describedby","external-link-modal-text");
n.classList.remove("cpi-modal-dialog__sub-text--visible")
}}function k(){var n=document.getElementById("cpi-modal-navigate-away-external");
var m=null;
if(n){m=n.querySelector(".cpi-modal-dialog__close-icon");
cpiUtils.cpiModal.show(f,n,m,l,{},function(){cpiUtils.navigateAway.checkForCallBack(i)
})
}}k()
}if(b()){f.preventDefault();
a()
}else{if(g()){f.preventDefault();
d()
}}};