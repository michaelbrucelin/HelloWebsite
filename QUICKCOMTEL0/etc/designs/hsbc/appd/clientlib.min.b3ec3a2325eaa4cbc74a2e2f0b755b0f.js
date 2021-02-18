(function(){new function(){if(!window.ADRUM&&!0!==window["adrum-disable"]){var b=window.ADRUM={};
window["adrum-start-time"]=window["adrum-start-time"]||(new Date).getTime();
(function(c){(function(d){d.Zc=function(){for(var f=[],g=0;
g<arguments.length;
g++){f[g-0]=arguments[g]
}for(g=0;
g<f.length;
g++){var e=f[g];
e&&e.setUp()
}}
})(c.monitor||(c.monitor={}))
})(b||(b={}));
(function(e){e=e.conf||(e.conf={});
e.beaconUrlHttp="http://col.eum-appdynamics.com";
e.beaconUrlHttps="https://col.eum-appdynamics.com";
e.corsEndpointPath="/eumcollector/beacons/browser/v1";
e.imageEndpointPath="/eumcollector/adrum.gif?";
e.appKey=window["adrum-app-key"]||"AD-AAB-AAC-WHN";
var h="https:"===document.location.protocol;
e.adrumExtUrl=(h?"https://cdn.appdynamics.com":"http://cdn.appdynamics.com")+"/adrum-ext.0086dbec5e8a6e717bf36d3a06b62042.js";
e.adrumXdUrl="https://cdn.appdynamics.com/adrum-xd.0086dbec5e8a6e717bf36d3a06b62042.html";
e.agentVer="4.2.7.1";
e.sendImageBeacon="false";
if(window["adrum-geo-resolver-url"]){var g=window["adrum-geo-resolver-url"],i=g.indexOf("://");
-1!=i&&(g=g.substring(i+3));
g=(h?"https://":"http://")+g
}else{g=h?"":""
}e.geoResolverUrl=g;
e.useStrictDomainCookies=!0===window["adrum-use-strict-domain-cookies"];
e.userConf=window["adrum-config"];
e.$d=10
})(b||(b={}));
(function(c){(function(o){function k(d){return"undefined"!==typeof d&&null!==d
}function q(d){return"[object Array]"===Object.prototype.toString.apply(d)
}function g(d){return"object"==typeof d&&!q(d)&&null!==d
}function n(d){return"string"==typeof d
}function j(h,s){for(var t in s){var r=s[t];
if(i(s,t)){var l=h[t];
g(r)&&g(l)?j(l,r):h[t]=q(l)&&q(r)?l.concat(r):r
}}return h
}function i(d,e){return Object.prototype.hasOwnProperty.call(d,e)&&k(d[e])
}function m(d){return n(d)?d.replace(/^\s*/,"").replace(/\s*$/,""):d
}o.isDefined=k;
o.isArray=q;
o.isObject=g;
o.isFunction=function(d){return"function"==typeof d||!1
};
o.isString=n;
o.isNumber=function(d){return"number"==typeof d
};
o.Ta=function(d){setTimeout(d,0)
};
o.addEventListener=function(p,r,d){function f(){try{return d.apply(this,Array.prototype.slice.call(arguments))
}catch(e){c.exception(e,"M1",r,p,e)
}}c.isDebug&&c.log("M0",r,p);
p.addEventListener?p.addEventListener(r,f,!1):p.attachEvent&&p.attachEvent("on"+r,f)
};
o.loadScriptAsync=function(f){var l=document.createElement("script");
l.async=!0;
l.src=f;
var d=document.getElementsByTagName("script")[0];
d?(d.parentNode.insertBefore(l,d),c.log("M2",f)):c.log("M3",f)
};
o.mergeJSON=j;
o.hasOwnPropertyDefined=i;
o.od=function(d){var e=[];
d&&(o.isObject(d)?e=[d]:o.isArray(d)&&(e=d));
return e
};
o.generateGUID="undefined"!==typeof window.crypto&&"undefined"!==typeof window.crypto.getRandomValues?function(){function d(f){for(f=f.toString(16);
4>f.length;
){f="0"+f
}return f
}var e=new Uint16Array(8);
window.crypto.getRandomValues(e);
return d(e[0])+d(e[1])+"_"+d(e[2])+"_"+d(e[3])+"_"+d(e[4])+"_"+d(e[5])+d(e[6])+d(e[7])
}:function(){return"xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g,function(d){var e=16*Math.random()|0;
return("x"==d?e:e&3|8).toString(16)
})
};
o.fd=function(d){return d?(d=d.stack)&&"string"===typeof d?d:null:null
};
o.trim=m;
o.xg=function(r){var s={},t,f;
if(!r){return s
}var p=r.split("\n");
for(f=0;
f<p.length;
f++){var u=p[f];
t=u.indexOf(":");
r=m(u.substr(0,t)).toLowerCase();
t=m(u.substr(t+1));
r&&(s[r]=s[r]?s[r]+(", "+t):t)
}return s
};
o.tryPeriodically=function(r,s,t,f){function p(){if(s()){t&&t()
}else{var d=r(++u);
0<d?setTimeout(p,d):f&&f()
}}var u=0;
p()
};
o.Qb=function(d){return d.charAt(0).toUpperCase()+d.slice(1)
};
o.Ic=function(d){for(var f=[],l=1;
l<arguments.length;
l++){f[l-1]=arguments[l]
}return function(){for(var p=[],h=0;
h<arguments.length;
h++){p[h-0]=arguments[h]
}return d.apply(this,f.concat(p))
}
};
o.now=Date&&Date.now||function(){return(new Date).getTime()
}
})(c.utils||(c.utils={}))
})(b||(b={}));
(function(h){function k(f,m,c,n){f=h.conf.beaconUrlHttps+"/eumcollector/error.gif?version=1&appKey="+c+"&msg="+encodeURIComponent(f.substring(0,500));
n&&(f+="&stack=",f+=encodeURIComponent(n.substring(0,1500-f.length)));
return f
}function i(d,c){2<=j||(document.createElement("img").src=k(d,0,h.conf.appKey,c),j++)
}function l(c){return 0<=c.location.search.indexOf("ADRUM_debug=true")||0<=c.cookie.search(/(^|;)\s*ADRUM_debug=true/)
}h.iDR=l;
h.isDebug=l(document);
var g=[];
h.logMessages=g;
h.log=function(c){for(var d=1;
d<arguments.length;
d++){}h.isDebug&&g.push(Array.prototype.slice.call(arguments).join(" | "))
};
h.error=function(c){for(var d=1;
d<arguments.length;
d++){}d=Array.prototype.slice.call(arguments).join(" | ");
h.log(d);
i(d,null)
};
h.exception=function(){for(var c=[],d=0;
d<arguments.length;
d++){c[d-0]=arguments[d]
}1>arguments.length||(c=Array.prototype.slice.call(arguments),d=h.utils.fd(c[0]),c=c.slice(1).join(" | "),h.log(c),i(c,d))
};
h.assert=function(c,d){c||h.error("Assert fail: "+d)
};
h.dumpLog=h.isDebug?function(){for(var c="",d=0;
d<g.length;
d++){c+=g[d].replace(RegExp("<br/>","g"),"\n\t")+"\n"
}return c
}:function(){};
h.cIEBU=k;
var j=0;
h.log("M4")
})(b||(b={}));
(function(c){var g=function(){function d(f){this.max=f;
this.za=0
}d.prototype.Mf=function(){this.ka()||this.za++
};
d.prototype.ka=function(){return this.za>=this.max
};
d.prototype.reset=function(){this.za=0
};
return d
}(),e=function(){function d(){this.ha=[];
this.Va=new g(d.oe);
this.Ka=new g(d.ce)
}d.prototype.submit=function(f){this.push(f)&&c.initEXTDone&&this.processQ()
};
d.prototype.processQ=function(){for(var f=this.ef(),j=0;
j<f.length;
j++){var i=f[j];
"function"===typeof c.commands[i[0]]?(c.isDebug&&c.log("M5",i[0],i.slice(1).join(", ")),c.commands[i[0]].apply(c,i.slice(1))):c.error("M6",i[0])
}};
d.prototype.ag=function(f){return"reportXhr"===f||"reportPageError"===f
};
d.prototype.push=function(f){var j=f[0],i=this.ag(j),k=i?this.Va:this.Ka;
if(k.ka()){return c.log("M7",i?"spontaneous":"non spontaneous",j),!1
}this.ha.push(f);
k.Mf();
return !0
};
d.prototype.ef=function(){var f=this.ha;
this.reset();
return f
};
d.prototype.size=function(){return this.ha.length
};
d.prototype.reset=function(){this.ha=[];
this.Va.reset();
this.Ka.reset()
};
d.prototype.isSpontaneousQueueDead=function(){return this.Va.ka()
};
d.prototype.isNonSpontaneousQueueDead=function(){return this.Ka.ka()
};
d.oe=100;
d.ce=100;
return d
}();
c.Cd=e
})(b||(b={}));
(function(c){c.q=new c.Cd;
c.command=function(g){for(var e=1;
e<arguments.length;
e++){}c.isDebug&&c.log("M8",g,Array.prototype.slice.call(arguments).slice(1).join(", "));
c.q.submit(Array.prototype.slice.call(arguments))
}
})(b||(b={}));
(function(c){(function(d){var e=function(){function f(){this.status={}
}f.prototype.setUp=function(){};
f.prototype.set=function(g,h){this.status[g]=h
};
return f
}();
d.mb=e
})(c.monitor||(c.monitor={}))
})(b||(b={}));
(function(c){(function(e){window.ADRUM.aop=e;
e.support=function(d){return !d||"apply" in d
};
e.around=function(g,i,d,h){c.assert(e.support(g),"aop.around called on a function which does not support interception");
g=g||function(){};
return function(){c.isDebug&&c.log("M9",h,Array.prototype.slice.call(arguments).join(", "));
var l=Array.prototype.slice.call(arguments),o;
try{i&&(o=i.apply(this,l))
}catch(n){c.exception(n,"M10",h,n)
}c.assert(!o||"[object Array]"===Object.prototype.toString.call(o));
var j=void 0;
try{j=g.apply(this,o||l)
}finally{try{d&&d.apply(this,l)
}catch(f){c.exception(f,"M11",h,f)
}}return j
}
};
e.before=function(d,f){return e.around(d,f)
};
e.after=function(d,f){return e.around(d,null,f)
}
})(c.aop||(c.aop={}))
})(b||(b={}));
(function(c){c=c.EventType||(c.EventType={});
c[c.BASE_PAGE=0]="BASE_PAGE";
c[c.IFRAME=1]="IFRAME";
c[c.XHR=2]="XHR";
c[c.VIRTUAL_PAGE=3]="VIRTUAL_PAGE";
c[c.PAGE_ERROR=4]="PAGE_ERROR";
c[c.ABSTRACT=100]="ABSTRACT";
c[c.ADRUM_XHR=101]="ADRUM_XHR";
c[c.NG_VIRTUAL_PAGE=102]="NG_VIRTUAL_PAGE"
})(b||(b={}));
(function(c){c=c.events||(c.events={});
c.l={};
c.l[100]={guid:"string",url:"string",parentGUID:"string",parentUrl:"string",parentType:"number",timestamp:"number"};
c.l[3]={resTiming:"object"};
c.l[102]={digestCount:"number"};
c.l[2]={method:"string",parentPhase:"string",parentPhaseId:"number",error:"object"};
c.l[101]={xhr:"object"};
c.l[4]={msg:"string",line:"number",stack:"string"}
})(b||(b={}));
(function(c){var g=function(){function d(){this.w={}
}d.prototype.mark=function(f,h){e.mark.apply(this,arguments)
};
d.prototype.getTiming=function(f){return(f=this.getEntryByName(f))&&f.startTime
};
d.prototype.measure=function(f,j,i){e.measure.apply(this,arguments)
};
d.prototype.getEntryByName=function(f){return e.getEntryByName.call(this,f)
};
d.ya=function(f){return e.ya(f)
};
return d
}();
c.PerformanceTracker=g;
var e;
(function(m){var f=c.utils.hasOwnPropertyDefined,k=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance,j=k&&k.timing&&k.timing.navigationStart?k.timing.navigationStart:window["adrum-start-time"],i=c.utils.now;
m.mark=function(l,d){this.w[l]={name:l,entryType:"mark",startTime:c.utils.isDefined(d)?d:i(),duration:0}
};
m.measure=function(h,l,n){f(this.w,l)&&f(this.w,n)?this.w[h]={name:h,entryType:"measure",startTime:l?this.w[l].startTime:j,duration:(n?this.w[n].startTime:i())-(l?this.w[l].startTime:j)}:c.error("M12",f(this.w,l)?n:l)
};
m.getEntryByName=function(d){return this.w[d]||null
};
m.ya=function(d){return d+j
}
})(e||(e={}))
})(b||(b={}));
(function(c){(function(h){function g(j,f){j=j||{};
for(var d in j){f[d]=function(){var k=d,l=j[d];
return function(o){var m="_"+k,n=this[m];
if(c.utils.isDefined(o)){if(typeof o===l){this[m]=o
}else{throw TypeError("wrong type of "+k+" value, "+typeof o+" passed in but should be a "+l+".")
}}return n
}
}()
}}function i(j){var k={},f;
for(f in j){var l=j[f];
k[l.start]=!0;
k[l.end]=!0
}return k
}var e=function(){function d(f){this.perf=new c.PerformanceTracker;
this.timestamp(c.utils.now());
this.guid(c.utils.generateGUID());
this.url(document.URL);
this.Yc(f)
}d.prototype.type=function(){return 100
};
d.prototype.Yc=function(j){if(c.utils.isObject(j)){for(var f in j){var k=this[f]||this["mark"+c.utils.Qb(f)];
k&&c.utils.isFunction(k)&&k.call(this,j[f])
}}};
d.Mb=function(j,k,f){return{guid:function(){return j
},url:function(){return k
},type:function(){return f
}}
};
d.prototype.Cf=function(){return d.Mb(this.parentGUID(),this.parentUrl(),this.parentType())
};
d.prototype.parent=function(j){var f=this.Cf();
c.utils.isDefined(j)&&(this.parentGUID(j.guid()),this.parentUrl(j.url()),this.parentType(j.type()));
return f
};
return d
}();
h.EventTracker=e;
h.W=g;
h.Nb=function(k,j){k=k||{};
var f=i(k),l;
for(l in f){f=c.utils.Qb(l),j["mark"+f]=c.utils.Ic(function(d,m){this.perf.mark(d,m)
},l),j["get"+f]=c.utils.Ic(function(d){return this.perf.getTiming(d)
},l)
}};
g(h.l[100],e.prototype)
})(c.events||(c.events={}))
})(b||(b={}));
var a=this.He||function(e,h){function g(){this.constructor=e
}for(var i in h){h.hasOwnProperty(i)&&(e[i]=h[i])
}g.prototype=h.prototype;
e.prototype=new g
};
(function(c){(function(d){var e=function(g){function f(h){g.call(this,h)
}a(f,g);
f.prototype.type=function(){return 4
};
return f
}(d.EventTracker);
d.Error=e;
d.W(d.l[4],e.prototype)
})(c.events||(c.events={}))
})(b||(b={}));
(function(c){(function(g){var e=function(h){function f(){h.apply(this,arguments)
}a(f,h);
f.prototype.setUp=function(){h.prototype.setUp.call(this);
c.listenForErrors=this.Ac;
this.Ac()
};
f.prototype.Ac=function(){if(c.aop.support(window.onerror)){var d=this;
window.onerror=c.aop.around(window.onerror,function(i,l,m,k,j){f.Ia||(f.errorsSent>=c.conf.$d?c.log("M13"):(k=c.utils.fd(j),c.command("reportPageError",new c.events.Error(c.utils.mergeJSON({msg:i,url:l,line:m,stack:k},d.status))),f.errorsSent++,f.Ia=!0))
},function(){f.Ia=!1
},"onerror");
c.log("M14")
}else{c.log("M15")
}};
f.Ia=!1;
f.errorsSent=0;
return f
}(g.mb);
g.ErrorMonitor=e;
g.Zb=new g.ErrorMonitor
})(c.monitor||(c.monitor={}))
})(b||(b={}));
(function(c){var e=function(){function f(){this.sa=[];
this.na(f.va,0)
}f.prototype.pg=function(d){this.na(f.Gb,d)
};
f.prototype.rg=function(d){this.na(f.Ob,d)
};
f.prototype.qg=function(d){this.na(f.Ib,d)
};
f.prototype.na=function(g,h){this.sa.push({og:(new Date).getTime(),mg:h,Jc:g});
this.af=g
};
f.prototype.getPhaseName=function(){return this.af
};
f.prototype.getPhaseID=function(g){for(var d=0;
d<f.Lb.length;
d++){if(f.Lb[d]===g){return d
}}return null
};
f.prototype.getPhaseCallbackTime=function(g){for(var i=this.sa,h=0;
h<i.length;
h++){if(i[h].Jc===g){return i[h].og
}}return null
};
f.prototype.findPhaseAtNominalTime=function(h){c.assert(0<=h);
for(var d=this.sa,g=d.length-1;
0<=g;
g--){if(h>=d[g].mg){return d[g].Jc
}}c.error("M16",h,c.utils.ff(d));
return f.va
};
f.va="AFTER_FIRST_BYTE";
f.Gb="AFTER_DOM_INTERACTIVE";
f.Ob="AT_ONLOAD";
f.Ib="AFTER_ONLOAD";
f.Lb=[f.va,f.Gb,f.Ob,f.Ib];
return f
}();
c.ph=e;
c.lifecycle=new e;
c.lifecycle=c.lifecycle
})(b||(b={}));
(function(c){(function(d){var e=function(f){function g(){f.apply(this,arguments)
}a(g,f);
g.prototype.type=function(){return 0
};
return g
}(d.EventTracker);
d.PageView=e
})(c.events||(c.events={}))
})(b||(b={}));
(function(c){(function(g){var e=function(){function d(){}d.prototype.setUp=function(){d.Lg();
d.Kg()
};
d.Kg=function(){c.utils.addEventListener(window,"load",d.oa);
c.utils.addEventListener(window,"load",d.ug)
};
d.ug=function(f){c.lifecycle.rg(f&&f.timeStamp);
c.utils.Ta(function(){var h=(new Date).getTime();
c.lifecycle.qg(h);
c.command("mark","onload",h);
g.yb.perf&&(g.perfMonitor.Xe(),g.perfMonitor.Ye());
c.command("reportOnload",new c.events.PageView);
c.utils.loadScriptAsync(c.conf.adrumExtUrl)
});
c.log("M17")
};
d.Lg=function(){if(document.addEventListener){document.addEventListener("DOMContentLoaded",d.ca,!1)
}else{document.attachEvent("onreadystatechange",d.ca);
var i=null;
try{i=null===window.frameElement?document.documentElement:null
}catch(h){}null!=i&&i.doScroll&&function f(){if(!d.isReady){try{i.doScroll("left")
}catch(j){setTimeout(f,10);
return
}d.oa()
}}()
}c.log("M18")
};
d.oa=function(f){d.Dc||(c.lifecycle.pg(f&&f.timeStamp),c.command("mark","onready",(new Date).getTime()),d.Dc=!0)
};
d.ca=function(f){document.addEventListener?(document.removeEventListener("DOMContentLoaded",d.ca,!1),d.oa(f)):"complete"===document.readyState&&(document.detachEvent("onreadystatechange",d.ca),d.oa(f))
};
d.isReady=!1;
d.Dc=!1;
return d
}();
g.Ed=e;
g.df=new g.Ed
})(c.monitor||(c.monitor={}))
})(b||(b={}));
(function(c){(function(g){var e=function(){function f(){this.navTiming=this.resTiming=null
}f.prototype.setUp=function(){f.perf=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance
};
f.prototype.Xe=function(){var d=f.perf;
if(d=d&&d.timing){if(d.navigationStart&&d.navigationStart<=d.loadEventEnd){var k={},j;
for(j in d){var i=d[j];
"number"===typeof i&&(k[j]=i)
}this.navTiming=k
}else{c.log("M20")
}}else{c.log("M19")
}};
f.prototype.Ye=function(){this.resTiming=this.hc()
};
f.prototype.hc=function(){var d=f.perf,h=[];
d&&d.getEntriesByType&&(d=d.getEntriesByType("resource"))&&d.length&&0<d.length&&d.unshift&&(h=d);
0==h.length&&c.log("M21");
return h
};
f.perf=null;
return f
}();
g.yb=e;
g.perfMonitor=new g.yb
})(c.monitor||(c.monitor={}))
})(b||(b={}));
(function(c){c=c.events||(c.events={});
c=c.b||(c.b={});
c.navigationStart="navigationStart";
c.domainLookupStart="domainLookupStart";
c.domainLookupEnd="domainLookupEnd";
c.connectStart="connectStart";
c.secureConnectionStart="secureConnectionStart";
c.connectEnd="connectEnd";
c.requestStart="requestStart";
c.responseStart="responseStart";
c.responseEnd="responseEnd";
c.domContentLoadedEventStart="domContentLoadedEventStart";
c.loadEventEnd="loadEventEnd";
c.Wc="sendTime";
c.ac="firstByteTime";
c.Sc="respAvailTime";
c.Tc="respProcTime";
c.cb="viewChangeStart";
c.kd="viewChangeEnd";
c.eb="viewDOMLoaded";
c.qd="xhrRequestsCompleted";
c.Wh="viewFragmentsLoaded";
c.Xh="viewResourcesLoaded";
c.fb="virtualPageStart";
c.eh="virtualPageEnd"
})(b||(b={}));
(function(c){c=c.events||(c.events={});
c.B={};
c.B[0]={lf:{start:c.b.navigationStart,end:c.b.loadEventEnd,name:"PLT"},qf:{start:c.b.navigationStart,end:c.b.responseStart,name:"FBT"},Sh:{start:c.b.navigationStart,end:c.b.requestStart,name:"SCT"},Th:{start:c.b.secureConnectionStart,end:c.b.connectEnd,name:"SHT"},zh:{start:c.b.domainLookupStart,end:c.b.domainLookupEnd,name:"DLT"},Vh:{start:c.b.connectStart,end:c.b.connectEnd,name:"TCP"},Qh:{start:c.b.requestStart,end:c.b.responseStart,name:"RAT"},Bh:{start:c.b.responseStart,end:c.b.loadEventEnd,name:"FET"},Dh:{start:c.b.responseStart,end:c.b.domContentLoadedEventStart,name:"DRT"},th:{start:c.b.responseStart,end:c.b.responseEnd,name:"DDT"},xh:{start:c.b.responseEnd,end:c.b.domContentLoadedEventStart,name:"DPT"},Ph:{start:c.b.domContentLoadedEventStart,end:c.b.loadEventEnd,name:"PRT"},yh:{start:c.b.navigationStart,end:c.b.domContentLoadedEventStart,name:"DOM"}};
c.B[2]={qf:{start:c.b.Wc,end:c.b.ac,name:"FBT"},Ch:{start:c.b.ac,end:c.b.Sc,name:"DDT"},sh:{start:c.b.Sc,end:c.b.Tc,name:"DPT"},lf:{start:c.b.Wc,end:c.b.Tc,name:"PLT"}};
c.B[3]={Jh:{start:c.b.fb,end:c.b.eh,name:"PLT"},vh:{start:c.b.cb,end:c.b.kd,name:"DDT"},Gh:{start:c.b.cb,end:c.b.eb,name:"DRT"},kh:{start:c.b.kd,end:c.b.eb,name:"DPT"},lh:{start:c.b.cb,end:c.b.eb,name:"DOM"},Oh:{start:"viewChangeEnd",end:"xhrRequestsCompleted",name:null},Hh:{start:"viewChangeEnd",end:"viewPartialsLoaded",name:null},Fh:{start:"viewPartialsLoaded",end:"viewFragmentsLoaded",name:null},Ih:{start:"viewPartialsLoaded",end:"viewResourcesLoaded",name:null}};
c.B[102]=c.B[3]
})(b||(b={}));
(function(c){(function(d){var e=function(f){function g(h){f.call(this,h)
}a(g,f);
g.prototype.type=function(){return 2
};
return g
}(d.EventTracker);
d.Ajax=e;
d.W(d.l[2],e.prototype);
d.Nb(d.B[2],e.prototype)
})(c.events||(c.events={}))
})(b||(b={}));
(function(c){(function(d){var e=function(f){function g(h){f.call(this,h)
}a(g,f);
g.prototype.type=function(){return 2
};
return g
}(d.Ajax);
d.AdrumAjax=e;
d.W(d.l[101],e.prototype)
})(c.events||(c.events={}))
})(b||(b={}));
(function(c){(function(g){var e=function(h){function f(){h.call(this);
this.conf=null;
this.Wa=!1;
!0===window["adrum-xhr-disable"]?c.log("M22"):window.XMLHttpRequest?(this.conf={exclude:[{urls:[{pattern:c.conf.beaconUrlHttp+c.conf.corsEndpointPath},{pattern:c.conf.beaconUrlHttps+c.conf.corsEndpointPath}]}],include:[]},f.Mc(this.conf,c.conf.userConf&&c.conf.userConf.xhr),(this.d=window.XMLHttpRequest.prototype)?"open" in this.d&&"send" in this.d?(this.Wa=c.aop.support(this.d.open)&&c.aop.support(this.d.send))||c.log("M26"):c.log("M25"):c.log("M24")):c.log("M23")
}a(f,h);
f.Mc=function(k,m){m&&(m.include=c.utils.od(m.include),m.exclude=c.utils.od(m.exclude),c.utils.mergeJSON(k,m));
var i=k.exclude;
if(i){for(var j=0;
j<i.length;
j++){var n=i[j].urls;
n&&0<n.length&&(i[j].urls=f.Ub(n))
}}if(i=k.include){for(j=0;
j<i.length;
j++){(n=i[j].urls)&&0<n.length&&(i[j].urls=f.Ub(n))
}}};
f.Ub=function(k){for(var l=[],i=0;
i<k.length;
i++){var j=k[i].pattern;
if("string"===typeof j){try{l.push(new RegExp(j))
}catch(m){c.exception(m,"Parse regex pattern failed.")
}}else{c.error("xhr filter pattern should be a string")
}}return l
};
f.$c=function(j,m,i){var k=i&&i.include;
i=i&&i.exclude;
return k&&0<k.length&&!f.xc(m,j,k)||i&&0<i.length&&f.xc(m,j,i)
};
f.prototype.setUp=function(){if(this.Wa){c.log("M27");
c.xhrConstructor=window.XMLHttpRequest;
c.xhrOpen=this.xhrOpen=this.d.open;
c.xhrSend=this.xhrSend=this.d.send;
var d=this;
this.d.open=c.aop.around(this.d.open,function(){var j=1<=arguments.length?String(arguments[0]):"",i=2<=arguments.length?String(arguments[1]):"";
f.$c(i,j,d.conf)||(this._adrumAjaxT=new c.events.AdrumAjax(c.utils.mergeJSON({method:j,url:i,xhr:this},d.status)))
},null,"XHR.open");
this.d.send=c.aop.around(this.d.send,function(){var n=this,i=n._adrumAjaxT;
if(i){var m=c.utils.now(),o=i.getSendTime();
c.assert(null===o,"M28");
i.timestamp(m);
i.markSendTime(o||m);
i.parentPhase(c.lifecycle.getPhaseName());
f.Zf(i.url())?n.setRequestHeader("ADRUM","isAjax:true"):c.log("M29",document.location.href,i.url());
var k=0,j=function(){if(4==n.readyState){c.log("M30"),d.ta(n)
}else{var q=null;
try{q=n.onreadystatechange
}catch(r){c.log("M31",r);
d.ta(n);
return
}k++;
q?c.aop.support(q)?(n.onreadystatechange=d.Vb(q,n,"XHR.onReadyStateChange"),c.log("M32",k)):(c.log("M33"),d.ta(n)):k<f.Fe?c.utils.Ta(j):(c.log("M34"),d.ta(n))
}};
j()
}},null,"XHR.send");
"addEventListener" in this.d&&"removeEventListener" in this.d&&c.aop.support(this.d.addEventListener)&&c.aop.support(this.d.removeEventListener)?(this.d.addEventListener=c.aop.around(this.d.addEventListener,this.$e(),null,"XHR.addEventListener"),this.d.removeEventListener=c.aop.around(this.d.removeEventListener,function(k,j){if(this._adrumAjaxT){var i=Array.prototype.slice.call(arguments);
j.__adrumInterceptor?(i[1]=j.__adrumInterceptor,c.log("M35")):c.log("M36");
return i
}},null,"XHR.removeEventListener")):c.log("M37");
c.log("M38")
}};
f.jg=function(j,l){for(var i=!1,k=0;
k<l.length;
k++){var m=l[k];
if(m&&m.test(j)){i=!0;
break
}}return i
};
f.xc=function(j,n,i){var m=!1;
if(n&&i){for(var o=0;
o<i.length;
o++){var k=i[o];
if(!(k.method&&j!==k.method||k.urls&&!f.jg(n,k.urls))){m=!0;
break
}}}return m
};
f.Zf=function(i){var j=document.createElement("a");
j.href=i;
i=document.location;
return":"===j.protocol&&""===j.hostname&&""===j.port||j.protocol===i.protocol&&j.hostname===i.hostname&&j.port===i.port
};
f.nc=function(k){var j=k._adrumAjaxT;
if(j){var i=(new Date).getTime();
2==k.readyState?j.markFirstByteTime(j.getFirstByteTime()||i):4==k.readyState&&(c.assert(null===j.getRespAvailTime(),"M39"),j.markRespAvailTime(j.getRespAvailTime()||i),j.markFirstByteTime(j.getFirstByteTime()||i))
}};
f.prototype.Vb=function(k,j,i){return f.ih(k,function(){f.nc(this)
},function(){var m=j._adrumAjaxT;
if(m&&4==j.readyState){var l=(new Date).getTime();
c.assert(null===m.getRespProcTime(),"M40");
m.markRespProcTime(m.getRespProcTime()||l);
f.a(j,m)
}},i)
};
f.a=function(k,i){var j=k.status;
if(400<=j){var m=k.responseText;
i.error({status:j,msg:c.utils.isString(m)?m:""})
}c.command("reportXhr",i)
};
f.prototype.ta=function(k){if(k._adrumAjaxT){var j=(new Date).getTime()+30000,i=function(){f.nc(k);
var l=k._adrumAjaxT;
if(l){var d=(new Date).getTime();
4==k.readyState?(c.assert(null===l.getRespProcTime(),"M41"),l.markRespProcTime(l.markRespProcTime()||d),c.log("M42"),f.a(k,l),delete k._adrumAjaxT):d<j?setTimeout(i,f.lb):(delete k._adrumAjaxT,c.log("M43"))
}};
i()
}};
f.ih=function(m,i,j,n){var k=m;
m&&"object"===typeof m&&"toString" in m&&"[xpconnect wrapped nsIDOMEventListener]"===m.toString()&&"handleEvent" in m&&(k=function(){m.handleEvent.apply(this,Array.prototype.slice.call(arguments))
});
return c.aop.around(k,i,j,n)
};
f.prototype.$e=function(){for(var j=0;
j<arguments.length;
j++){}var i=this;
return function(m,l){if(("load"===m||"error"===m)&&l&&this._adrumAjaxT){var n;
n=l;
if(n.__adrumInterceptor){n=n.__adrumInterceptor
}else{if(c.aop.support(n)){var k=i.Vb(n,this,"XHR.invokeEventListener");
n=n.__adrumInterceptor=k
}else{n=null
}}if(n){return k=Array.prototype.slice.call(arguments),k[1]=n,c.log("M44"),k
}c.log("M45",m,l)
}}
};
f.Fe=5;
f.lb=50;
return f
}(g.mb);
g.fa=e;
g.hb=new g.fa
})(c.monitor||(c.monitor={}))
})(b||(b={}));
(function(c){(function(j){function h(l,o){var e=[],p=/^\s*(ADRUM_BT\w*)=(.*)\s*$/i.exec(l);
if(p){var n=p[1],p=p[2].replace(/^"|"$/g,""),p=decodeURIComponent(p).split("|"),m=p[0].split(":");
if("R"===m[0]&&Number(m[1])===o){for(i(n),n=1;
n<p.length;
n++){e.push(p[n])
}}}return e
}function k(l,o){var e=/^\s*(ADRUM_(\d+)_(\d+)_(\d+))=(.*)\s*$/i.exec(l);
if(e){var p=e[1],n=e[4],m=e[5];
if(Number(e[3])===o){return i(p),{index:Number(n),value:m}
}}return null
}function g(f){var e=/^\s*ADRUM=s=([\d]+)&r=(.*)\s*/.exec(f);
if(e){c.log("M48",f);
if(3===e.length){return i("ADRUM"),{startTime:Number(e[1]),startPage:e[2]}
}c.error("M49",f);
return null
}}function i(l){c.log("M47",l);
var f=new Date;
f.setTime(f.getTime()-1000);
document.cookie=l+"=;Expires="+f.toUTCString()
}j.startTimeCookie=null;
j.cookieMetadataChunks=null;
j.Xb=function(v,f){c.log("M46");
for(var u=f?f.length:0,r=[],d=v.split(";"),s=0;
s<d.length;
s++){var w=d[s],o=k(w,u);
o?r.push(o):(w=g(w),null!=w&&(j.startTimeCookie=w))
}Array.prototype.sort.call(r,function(e,l){return e.index-l.index
});
w=[];
for(s=0;
s<r.length;
s++){w.push(r[s].value)
}for(s=0;
s<d.length;
s++){(r=h(d[s],u))&&0<r.length&&(w=w.concat(r))
}j.cookieMetadataChunks=w
};
c.correlation.eck=j.Xb
})(c.correlation||(c.correlation={}))
})(b||(b={}));
(function(c){c.report=function(e){c.utils.Ta(function(){c.command("reportEvent",e)
})
}
})(b||(b={}));
(function(c){"APP_KEY_NOT_SET"===c.conf.appKey&&"undefined"!==typeof console&&"undefined"!==typeof console.log&&console.log("AppDynamics EUM cloud application key missing. Please specify window['adrum-app-key']");
c.correlation.Xb(document.cookie,document.referrer);
c.command("mark","firstbyte",window["adrum-start-time"]);
c.monitor.Zc(c.monitor.Zb,c.monitor.df,c.monitor.perfMonitor,c.monitor.hb)
})(b||(b={}));
(function(c){c=c.ng||(c.ng={});
c=c.c||(c.c={});
c.Bc="locationChangeStart";
c.gg="locationChangeSuccess";
c.Uc="routeChangeStart";
c.Vc="routeChangeSuccess";
c.bd="stateChangeStart";
c.cd="stateChangeSuccess";
c.ld="viewContentLoaded";
c.Jf="includeContentRequested";
c.If="includeContentLoaded";
c.Wb="digest";
c.Lh="outstandingRequestsComplete";
c.Pb="beforeNgXhrRequested";
c.Hb="afterNgXhrRequested";
c.Kh="ngXhrLoaded";
c.Sb="$$completeOutstandingRequest"
})(b||(b={}));
(function(c){(function(h){function g(k,j,p,o,l,d){if(j){try{return j.apply(k,[p,o,l].concat(d))
}catch(n){return k.error(p,o,l,d,h.Error.Md,"an exception occurred in a caller-provided callback function",n)
}}}function i(f,d){return function(){var n=this.current,l=d[n]||d[h.ea]||n,k=Array.prototype.slice.call(arguments);
if(this.Ve(f)){return this.error(f,n,l,k,h.Error.Nd,"event "+f+" inappropriate in current state "+this.current)
}if(!1===g(this,this["onbefore"+f],f,n,l,k)){return h.da.ib
}l===h.ea&&(l=n);
if(n===l){return g(this,this["onafter"+f]||this["on"+f],f,n,l,k),h.da.qe
}var j=this;
this.transition=function(){j.transition=null;
j.current=l;
g(j,j["onenter"+l]||j["on"+l],f,n,l,k);
g(j,j["onafter"+f]||j["on"+f],f,n,l,k);
return h.da.ye
};
if(!1===g(this,this["onleave"+n],f,n,l,k)){return this.transition=null,h.da.ib
}if(this.transition){return this.transition()
}}
}var e=c.utils.hasOwnPropertyDefined;
h.VERSION="2.3.5";
h.da={ye:1,qe:2,ib:3,nh:4};
h.Error={Nd:100,oh:200,Md:300};
h.ea="*";
h.create=function(w,p){function o(l){var f=l.from instanceof Array?l.from:l.from?[l.from]:[h.ea];
j[l.name]=j[l.name]||{};
for(var m=0;
m<f.length;
m++){y[f[m]]=y[f[m]]||[],y[f[m]].push(l.name),j[l.name][f[m]]=l.to||f[m]
}}var u="string"==typeof w.initial?{state:w.initial}:w.initial,r=p||w.target||{},k=w.events||[],d=w.callbacks||{},j={},y={};
u&&(u.event=u.event||"startup",o({name:u.event,from:"none",to:u.state}));
for(var z=0;
z<k.length;
z++){o(k[z])
}for(var x in j){e(j,x)&&(r[x]=i(x,j[x]))
}for(x in d){e(d,x)&&(r[x]=d[x])
}r.current="none";
r.Eh=function(f){return f instanceof Array?0<=f.indexOf(this.current):this.current===f
};
r.Ue=function(f){return !this.transition&&(e(j[f],this.current)||e(j[f],h.ea))
};
r.Ve=function(f){return !this.Ue(f)
};
r.sa=function(){return y[this.current]
};
r.error=w.error||function(n,t,f,s,q,v,m){throw m||v
};
if(u&&!u.defer){r[u.event]()
}return r
}
})(c.Bb||(c.Bb={}))
})(b||(b={}));
(function(c){(function(g){var e=function(f){function d(h){f.call(this,h);
this.perf=new c.PerformanceTracker;
this.start()
}a(d,f);
d.prototype.type=function(){return 3
};
d.prototype.yf=function(){return g.EventTracker.Mb(this.guid(),this.url(),this.type())
};
d.prototype.ad=function(i){var h=this.yf();
i.set("parent",h);
c.log("M50",h.guid(),h.url())
};
d.prototype.startCorrelatingXhrs=function(){c.log("M51");
this.ad(c.monitor.hb)
};
d.prototype.stopCorrelatingXhrs=function(){c.monitor.hb.set("parent",null);
c.log("M52")
};
d.prototype.Og=function(){c.log("M53");
this.ad(c.monitor.Zb)
};
d.prototype.start=function(){this.markVirtualPageStart();
this.startCorrelatingXhrs()
};
d.prototype.end=function(){this.markVirtualPageEnd();
this.stopCorrelatingXhrs()
};
return d
}(g.EventTracker);
g.VPageView=e;
g.W(g.l[3],e.prototype);
g.Nb(g.B[3],e.prototype)
})(c.events||(c.events={}))
})(b||(b={}));
(function(c){var e=c.ng||(c.ng={}),e=e.conf||(e.conf={});
e.disabled=c.conf.userConf&&c.conf.userConf.spa&&c.conf.userConf.spa.angular&&c.conf.userConf.spa.angular.disable;
e.distinguishVPwithItsTemplateUrl=c.conf.userConf&&c.conf.userConf.spa&&c.conf.userConf.spa.angular&&!0===c.conf.userConf.spa.angular.distinguishVPwithItsTemplateUrl?!0:!1;
e.xhr={};
e.metrics={includeResTimingInEndUserResponseTiming:!0};
c.conf.userConf&&c.conf.userConf.spa&&c.conf.userConf.spa.angular&&c.conf.userConf.spa.angular.vp&&(c.conf.userConf.spa.angular.vp.xhr&&c.monitor.fa.Mc(e.xhr,c.conf.userConf.spa.angular.vp.xhr),c.conf.userConf.spa.angular.vp.metrics&&c.utils.mergeJSON(e.metrics,c.conf.userConf.spa.angular.vp.metrics))
})(b||(b={}));
(function(c){(function(g){var e=function(f){function d(h){f.call(this,h);
this.vc=!0;
this.Y={};
this.U=0;
this.stopCorrelatingXhrs()
}a(d,f);
d.prototype.type=function(){return 3
};
d.prototype.fb=function(){this.markViewChangeStart();
this.markVirtualPageStart(this.getViewChangeStart());
this.timestamp(this.getViewChangeStart())
};
d.prototype.Kf=function(){this.digestCount(this.digestCount()+1)
};
d.prototype.Lf=function(){this.U++;
c.log("increasing xhr count "+this.U+" pending xhr requests")
};
d.prototype.bf=function(){this.U--;
c.log("decreasing xhr count "+this.U+" pending xhr requests")
};
d.prototype.Ff=function(){var h=this.perf.getEntryByName(c.events.b.qd);
c.log("xhrCount "+this.U+" xhrReuqestCompleted "+h);
return 0<this.U
};
d.prototype.Re=function(){var i={ra:0},n=document.querySelectorAll("ng-view, [ng-view], .ng-view, [ui-view]");
if(n&&0<n.length){for(var o in d.Rc){for(var l=0;
l<n.length;
l++){var j=angular.element(n[l]).find(o);
if(0<j.length){for(var h=0;
h<j.length;
h++){var k=j[h][d.Rc[o].Ya];
(k=k?decodeURIComponent(k):null)&&!i[k]&&(i[k]=o,i.ra++)
}}}}}this.Y=i
};
d.prototype.Qe=function(h){return !!this.Y[decodeURIComponent(h.name)]
};
d.prototype.Se=function(){var i=[],h=this;
0<this.Y.ra&&(i=c.monitor.perfMonitor.hc().filter(function(j){return h.Qe(j)
}));
this.resTiming(i)
};
d.nf=function(i){for(var j=[],l=0;
l<i.length;
l++){var k=i[l];
2!==i[l].eventType&&101!==i[l].eventType||c.monitor.fa.$c(k.eventUrl,k.method,g.conf.xhr)||j.push(i[l])
}return j
};
d.zf=function(i){var j,h,k=-1;
j=0;
for(h=i.length;
j<h;
j++){k=Math.max(k,i[j].timestamp+i[j].metrics.PLT)
}return k
};
d.prototype.Le=function(){if(g.conf.xhr){var j=d.nf(c.channel.getEventsWithParentGUID(this.guid())),j=d.zf(j);
if(0<j){var i=this.perf.getEntryByName(c.events.b.qd);
this.markXhrRequestsCompleted(Math.min(i&&i.startTime||Number.MAX_VALUE,j))
}}};
d.prototype.adjustTimings=function(){this.Le();
var i=this.getViewDOMLoaded(),j=this.getXhrRequestsCompleted(),i=Math.max(i,j);
g.conf.metrics.includeResTimingInEndUserResponseTiming&&(this.Ke(),j=this.getViewResourcesLoaded(),j=Math.max(i,j),c.log("adjust this.end from %s to %s",i,j),i=j);
this.markVirtualPageEnd(i)
};
d.prototype.Ke=function(){if(0<this.Y.ra){this.Se();
var i=this.resTiming();
if(i&&i.length>=this.Y.ra){for(var h=[],j=0;
j<i.length;
j++){h.push(i[j].responseEnd)
}i=Math.max.apply(Math,h);
this.markViewResourcesLoaded(c.PerformanceTracker.ya(i))
}}};
d.prototype.identifier=function(h){var i=this.nd;
c.utils.isDefined(h)&&(this.nd=d.mf(h),this.url(this.nd.url));
return i
};
d.mf=function(i){var h={};
i&&i.g?(h.g={Ma:""},c.utils.mergeJSON(h.g,{Ma:i.g.originalPath,Z:i.g.template,$:i.g.templateUrl})):i&&i.state&&(h.state={url:""},c.utils.mergeJSON(h.state,{url:i.state.url,name:i.state.name,Z:i.state.template,$:i.state.templateUrl}));
return h
};
d.Rc={img:{Ya:"src"},script:{Ya:"src"},link:{Ya:"href"}};
return d
}(c.events.VPageView);
g.NgVPageView=e;
c.events.W(c.events.l[102],e.prototype)
})(c.ng||(c.ng={}))
})(b||(b={}));
(function(c){(function(g){var e=function(){function d(){this.e=new g.NgVPageView
}d.prototype.Eg=function(){var f=this;
g.conf.metrics.includeResTimingInEndUserResponseTiming?(c.log("M54"),setTimeout(function(){f.Pa()
},d.Ae)):setTimeout(function(){f.Pa()
},d.Be)
};
d.prototype.Pa=function(){c.log("M55");
var f=this.e;
c.command("call",function(){f.adjustTimings();
c.reporter.reportEvent(f)
})
};
d.prototype.Jg=function(f){this.e=f
};
d.Ae=5000;
d.Be=2*c.monitor.fa.lb;
return d
}();
g.VirtualPageStateMachine=e;
c.Bb.create({events:[{name:"start",from:"none",to:"ChangeView"},{name:"viewLoaded",from:"ChangeView",to:"XhrPending"},{name:"xhrCompleted",from:"XhrPending",to:"End"},{name:"abort",from:"*",to:"none"},{name:"init",from:"*",to:"none"},{name:"locChange",from:"*",to:"*"},{name:"beforeXhrReq",from:"*",to:"*"},{name:"afterXhrReq",from:"*",to:"*"}],error:function(f){c.log("M56"+f)
},callbacks:{onChangeView:function(){this.e.fb();
this.e.Og()
},onviewLoaded:function(){this.e.markViewDOMLoaded()
},onXhrPending:function(){this.e.vc&&this.xhrCompleted()
},onleaveXhrPending:function(f,i,h){if("abort"===f){return this.Pa(),!0
}if("xhrCompleted"===f&&"End"===h){if(this.e.Ff()){return !1
}this.e.markXhrRequestsCompleted();
return !0
}},onEnd:function(){this.e.Re();
this.Eg()
},oninit:function(f,k,j,i){this.Jg(i)
},onlocChange:function(f,k,j,i){this.e.identifier.url=i
},onbeforeXhrReq:function(m,i,l,j){var k=this.e;
k.vc=!1;
c.log("M57",j&&j[1]||"",k.guid());
k.Lf();
k.startCorrelatingXhrs();
j[3]&&(j[3]=c.aop.before(j[3],function(n,f,h){c.log("M58");
k.bf();
h&&(n=c.utils.xg(h)["content-type"])&&0<=n.indexOf("text/html")&&k.markViewFragmentsLoaded()
}));
return j
},onafterXhrReq:function(){this.e.stopCorrelatingXhrs()
}}},e.prototype)
})(c.ng||(c.ng={}))
})(b||(b={}));
(function(c){(function(g){var e=function(){function d(){this.k=new g.VirtualPageStateMachine;
this.distinguishVPwithItsTemplateUrl=c.ng.conf.distinguishVPwithItsTemplateUrl
}d.prototype.h=function(f,j){c.log("M59",f);
switch(f){case g.c.Uc:case g.c.bd:this.k.start();
var i=new g.NgVPageView({url:j.next.url,identifier:j.next});
this.distinguishVPwithItsTemplateUrl&&d.Tf(this.k.e,i)?this.k.e.Yc({url:j.next.url,identifier:j.next}):this.Tg(i);
break;
case g.c.Vc:case g.c.cd:this.k.e.markViewChangeEnd();
break;
case g.c.ld:this.k.viewLoaded();
break;
case g.c.Pb:this.k.beforeXhrReq(j);
break;
case g.c.Hb:this.k.afterXhrReq();
break;
case g.c.Sb:this.k.xhrCompleted();
break;
case g.c.Bc:this.k.locChange(j.next.url);
break;
case g.c.Wb:this.k.e.Kf()
}};
d.prototype.Tg=function(f){this.k.abort();
this.k.init(f);
this.k.start()
};
d.Tf=function(k,j){var l=k.identifier(),i=j.identifier(),h=!1;
return h=!c.utils.isDefined(l)&&!c.utils.isDefined(i)||l===i?!0:c.utils.isDefined(l)&&c.utils.isDefined(i)?l.state||i.state?c.utils.isDefined(l.state)&&c.utils.isDefined(i.state)?l.state.name===i.state.name&&l.state.Z===i.state.Z&&l.state.$===i.state.$&&l.state.url===i.state.url:!1:l.g&&i.g?l.g.Ma===i.g.Ma&&l.g.Z===i.g.Z&&l.g.$===i.g.$:l.url===i.url:!1
};
return d
}();
g.De=e
})(c.ng||(c.ng={}))
})(b||(b={}));
(function(c){(function(g){var e=function(){function d(){this.j=new g.De
}d.prototype.setUp=function(){var f=this;
c.utils.addEventListener(document,"DOMContentLoaded",function(){c.log("M60");
f.init()
})
};
d.prototype.init=function(){if("undefined"!=typeof angular){c.log("M61");
var h=this,f=angular.module("ng");
f.config(["$provide",function(i){h.Qf(i);
h.Pf(i)
}]);
f.run(["$browser",function(i){h.Of(i)
}]);
c.log("M62")
}};
d.prototype.Pf=function(f){var h=c.aop,i=this;
f.decorator("$httpBackend",["$delegate",function(j){return j=h.around(j,function(){var k=Array.prototype.slice.call(arguments);
i.j.h(g.c.Pb,k);
return k
},function(){i.j.h(g.c.Hb)
})
}])
};
d.prototype.Qf=function(f){var h=c.aop,i=this;
f.decorator("$rootScope",["$delegate",function(j){j.$digest=h.after(j.$digest,function(){i.j.h(g.c.Wb)
});
j.$on("$locationChangeStart",function(l,k){var n={url:k},m=l&&l.X&&l.X.$state&&l.X.$state.current;
m&&(n.state=m);
i.j.h(g.c.Bc,{next:n})
});
j.$on("$locationChangeSuccess",function(){i.j.h(g.c.gg)
});
j.$on("$routeChangeStart",function(l,k){var n={url:location.href},m=k&&k.$$route;
m&&(n.g=m);
i.j.h(g.c.Uc,{next:n})
});
j.$on("$routeChangeSuccess",function(){i.j.h(g.c.Vc)
});
j.$on("$stateChangeStart",function(l,k){i.j.h(g.c.bd,{next:{state:k}})
});
j.$on("$stateChangeSuccess",function(){i.j.h(g.c.cd)
});
j.$on("$viewContentLoaded",function(l){var k={url:location.href};
if(l=l&&l.X&&l.X.$state&&l.X.$state.current){k.state=l
}i.j.h(g.c.ld,{next:k})
});
j.$on("$includeContentRequested",function(){i.j.h(g.c.Jf)
});
j.$on("$includeContentLoaded",function(){i.j.h(g.c.If)
});
return j
}])
};
d.prototype.Of=function(f){var h=this;
f.$$completeOutstandingRequest=c.aop.before(f.$$completeOutstandingRequest,function(){h.j.h(g.c.Sb)
})
};
return d
}();
g.jh=e;
g.ngMonitor=new e
})(c.ng||(c.ng={}))
})(b||(b={}));
(function(c){var e=c.ng||(c.ng={});
e.conf.disabled||c.monitor.Zc(e.ngMonitor)
})(b||(b={}))
}}
})();