if(!Array.prototype.find){Array.prototype.find=function(b){if(this==null){throw new TypeError('"this" is null or not defined')
}var f=Object(this);
var a=f.length>>>0;
if(typeof b!=="function"){throw new TypeError("predicate must be a function")
}var c=arguments[1];
var d=0;
while(d<a){var e=f[d];
if(b.call(c,e,d,f)){return e
}d++
}return undefined
}
}if(!Array.prototype.includes){Array.prototype.includes=function(d,e){if(this==null){throw new TypeError('"this" is null or not defined')
}var f=Object(this);
var a=f.length>>>0;
if(a===0){return false
}var g=e|0;
var c=Math.max(g>=0?g:a-Math.abs(g),0);
function b(h,j){return h===j||(typeof h==="number"&&typeof j==="number"&&isNaN(h)&&isNaN(j))
}while(c<a){if(b(f[c],d)){return true
}c++
}return false
}
}if(!Array.prototype.forEach){Array.prototype.forEach=function(f){var c,b;
if(this==null){throw new TypeError("this is null or not defined")
}var e=Object(this);
var a=e.length>>>0;
if(typeof f!=="function"){throw new TypeError(f+" is not a function")
}if(arguments.length>1){c=arguments[1]
}b=0;
while(b<a){var d;
if(b in e){d=e[b];
f.call(c,d,b,e)
}b++
}}
}if(!Array.prototype.map){Array.prototype.map=function(h){var d,b,c;
if(this==null){throw new TypeError("this is null or not defined")
}var g=Object(this);
var a=g.length>>>0;
if(typeof h!=="function"){throw new TypeError(h+" is not a function")
}if(arguments.length>1){d=arguments[1]
}b=new Array(a);
c=0;
while(c<a){var f,e;
if(c in g){f=g[c];
e=h.call(d,f,c,g);
b[c]=e
}c++
}return b
}
}if(!Array.prototype.filter){Array.prototype.filter=function(c){if(this===void 0||this===null){throw new TypeError()
}var f=Object(this);
var a=f.length>>>0;
if(typeof c!=="function"){throw new TypeError()
}var e=[];
var b=arguments.length>=2?arguments[1]:void 0;
for(var d=0;
d<a;
d++){if(d in f){var g=f[d];
if(c.call(b,g,d,f)){e.push(g)
}}}return e
}
}if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector
}if(!Element.prototype.closest){Element.prototype.closest=function(b){var a=this;
if(!document.documentElement.contains(a)){return null
}do{if(a.matches(b)){return a
}a=a.parentElement||a.parentNode
}while(a!==null);
return null
}
}if(typeof Object.assign!="function"){Object.assign=function(d,f){if(d==null){throw new TypeError("Cannot convert undefined or null to object")
}var e=Object(d);
for(var c=1;
c<arguments.length;
c++){var b=arguments[c];
if(b!=null){for(var a in b){if(Object.prototype.hasOwnProperty.call(b,a)){e[a]=b[a]
}}}}return e
}
}if(typeof Object.create!=="function"){Object.create=function(c,a){function b(){}b.prototype=c;
if(typeof(a)==="object"){for(prop in a){if(a.hasOwnProperty((prop))){b[prop]=a[prop]
}}}return new b()
}
}(function(l){var v={};
l.respond=v;
v.update=function(){};
var c=[],d=(function(){var w=false;
try{w=new l.XMLHttpRequest()
}catch(B){w=new l.ActiveXObject("Microsoft.XMLHTTP")
}return function(){return w
}
})(),o=function(w,C){var B=d();
if(!B){return
}B.open("GET",w,true);
B.onreadystatechange=function(){if(B.readyState!==4||B.status!==200&&B.status!==304){return
}C(B.responseText)
};
if(B.readyState===4){return
}B.send(null)
},s=function(w){return w.replace(v.regex.minmaxwh,"").match(v.regex.other)
};
v.ajax=o;
v.queue=c;
v.unsupportedmq=s;
v.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g};
v.mediaQueriesSupported=l.matchMedia&&l.matchMedia("only all")!==null&&l.matchMedia("only all").matches;
if(v.mediaQueriesSupported){return
}var A=l.document,u=A.documentElement,h=[],k=[],r=[],p={},g=30,e=A.getElementsByTagName("head")[0]||u,f=A.getElementsByTagName("base")[0],b=e.getElementsByTagName("link"),m,t,q,z=function(){var C,F=A.createElement("div"),w=A.body,E=u.style.fontSize,D=w&&w.style.fontSize,B=false;
F.style.cssText="position:absolute;font-size:1em;width:1em";
if(!w){w=B=A.createElement("body");
w.style.background="none"
}u.style.fontSize="100%";
w.style.fontSize="100%";
w.appendChild(F);
if(B){u.insertBefore(w,u.firstChild)
}C=F.offsetWidth;
if(B){u.removeChild(w)
}else{w.removeChild(F)
}u.style.fontSize=E;
if(D){w.style.fontSize=D
}C=q=parseFloat(C);
return C
},j=function(M){var R="clientWidth",D=u[R],B=A.compatMode==="CSS1Compat"&&D||A.body[R]||D,P={},Q=b[b.length-1],C=(new Date()).getTime();
if(M&&m&&C-m<g){l.clearTimeout(t);
t=l.setTimeout(j,g);
return
}else{m=C
}for(var K in h){if(h.hasOwnProperty(K)){var N=h[K],G=N.minw,J=N.maxw,L=G===null,O=J===null,w="em";
if(!!G){G=parseFloat(G)*(G.indexOf(w)>-1?(q||z()):1)
}if(!!J){J=parseFloat(J)*(J.indexOf(w)>-1?(q||z()):1)
}if(!N.hasquery||(!L||!O)&&(L||B>=G)&&(O||B<=J)){if(!P[N.media]){P[N.media]=[]
}P[N.media].push(k[N.rules])
}}}for(var I in r){if(r.hasOwnProperty(I)){if(r[I]&&r[I].parentNode===e){e.removeChild(r[I])
}}}r.length=0;
for(var H in P){if(P.hasOwnProperty(H)){var F=A.createElement("style"),E=P[H].join("\n");
F.type="text/css";
F.media=H;
e.insertBefore(F,Q.nextSibling);
if(F.styleSheet){F.styleSheet.cssText=E
}else{F.appendChild(A.createTextNode(E))
}r.push(F)
}}},n=function(L,w,C){var J=L.replace(v.regex.comments,"").replace(v.regex.keyframes,"").match(v.regex.media),M=J&&J.length||0;
w=w.substring(0,w.lastIndexOf("/"));
var B=function(N){return N.replace(v.regex.urls,"$1"+w+"$2$3")
},D=!M&&C;
if(w.length){w+="/"
}if(D){M=1
}for(var G=0;
G<M;
G++){var H,I,E,K;
if(D){H=C;
k.push(B(L))
}else{H=J[G].match(v.regex.findStyles)&&RegExp.$1;
k.push(RegExp.$2&&B(RegExp.$2))
}E=H.split(",");
K=E.length;
for(var F=0;
F<K;
F++){I=E[F];
if(s(I)){continue
}h.push({media:I.split("(")[0].match(v.regex.only)&&RegExp.$2||"all",rules:k.length-1,hasquery:I.indexOf("(")>-1,minw:I.match(v.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:I.match(v.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})
}}j()
},y=function(){if(c.length){var w=c.shift();
o(w.href,function(B){n(B,w.href,w.media);
p[w.href]=true;
l.setTimeout(function(){y()
},0)
})
}},a=function(){for(var D=0;
D<b.length;
D++){var C=b[D],B=C.href,E=C.media,w=C.rel&&C.rel.toLowerCase()==="stylesheet";
if(!!B&&w&&!p[B]){if(C.styleSheet&&C.styleSheet.rawCssText){n(C.styleSheet.rawCssText,B,E);
p[B]=true
}else{if((!/^([a-zA-Z:]*\/\/)/.test(B)&&!f)||B.replace(RegExp.$1,"").split("/")[0]===l.location.host){if(B.substring(0,2)==="//"){B=l.location.protocol+B
}c.push({href:B,media:E})
}}}}y()
};
a();
v.update=a;
v.getEmValue=z;
function x(){j(true)
}if(l.addEventListener){l.addEventListener("resize",x,false)
}else{if(l.attachEvent){l.attachEvent("onresize",x)
}}})(this);
if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")
}
}if(typeof String.prototype.includes!=="function"){String.prototype.includes=function(a,b){if(typeof b!=="number"){b=0
}if(b+a.length>this.length){return false
}else{return this.indexOf(a,b)!==-1
}}
}if(!String.prototype.startsWith){Object.defineProperty(String.prototype,"startsWith",{value:function(a,b){b=!b||b<0?0:+b;
return this.substring(b,b+a.length)===a
}})
}if(!String.prototype.endsWith){String.prototype.endsWith=function(b,a){if(a===undefined||a>this.length){a=this.length
}return this.substring(a-b.length,a)===b
}
}(function(b,a){typeof exports==="object"&&typeof module!=="undefined"?module.exports=a():typeof define==="function"&&define.amd?define(a):b.moment=a()
}(this,(function(){var cg;
function eK(){return cg.apply(null,arguments)
}function aV(fd){cg=fd
}function X(fd){return fd instanceof Array||Object.prototype.toString.call(fd)==="[object Array]"
}function x(fd){return fd!=null&&Object.prototype.toString.call(fd)==="[object Object]"
}function cn(fe){if(Object.getOwnPropertyNames){return(Object.getOwnPropertyNames(fe).length===0)
}else{var fd;
for(fd in fe){if(fe.hasOwnProperty(fd)){return false
}}return true
}}function H(fd){return fd===void 0
}function s(fd){return typeof fd==="number"||Object.prototype.toString.call(fd)==="[object Number]"
}function eD(fd){return fd instanceof Date||Object.prototype.toString.call(fd)==="[object Date]"
}function bs(fd,fg){var ff=[],fe;
for(fe=0;
fe<fd.length;
++fe){ff.push(fg(fd[fe],fe))
}return ff
}function ds(fe,fd){return Object.prototype.hasOwnProperty.call(fe,fd)
}function e5(fe,fd){for(var ff in fd){if(ds(fd,ff)){fe[ff]=fd[ff]
}}if(ds(fd,"toString")){fe.toString=fd.toString
}if(ds(fd,"valueOf")){fe.valueOf=fd.valueOf
}return fe
}function cB(ff,fg,fd,fe){return af(ff,fg,fd,fe,true).utc()
}function cx(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false,parsedDateParts:[],meridiem:null,rfc2822:false,weekdayMismatch:false}
}function bg(fd){if(fd._pf==null){fd._pf=cx()
}return fd._pf
}var dw;
if(Array.prototype.some){dw=Array.prototype.some
}else{dw=function(fe){var fg=Object(this);
var fd=fg.length>>>0;
for(var ff=0;
ff<fd;
ff++){if(ff in fg&&fe.call(this,fg[ff],ff,fg)){return true
}}return false
}
}function ar(fe){if(fe._isValid==null){var ff=bg(fe);
var fg=dw.call(ff.parsedDateParts,function(fh){return fh!=null
});
var fd=!isNaN(fe._d.getTime())&&ff.overflow<0&&!ff.empty&&!ff.invalidMonth&&!ff.invalidWeekday&&!ff.weekdayMismatch&&!ff.nullInput&&!ff.invalidFormat&&!ff.userInvalidated&&(!ff.meridiem||(ff.meridiem&&fg));
if(fe._strict){fd=fd&&ff.charsLeftOver===0&&ff.unusedTokens.length===0&&ff.bigHour===undefined
}if(Object.isFrozen==null||!Object.isFrozen(fe)){fe._isValid=fd
}else{return fd
}}return fe._isValid
}function P(fe){var fd=cB(NaN);
if(fe!=null){e5(bg(fd),fe)
}else{bg(fd).userInvalidated=true
}return fd
}var cZ=eK.momentProperties=[];
function r(fh,fg){var fd,ff,fe;
if(!H(fg._isAMomentObject)){fh._isAMomentObject=fg._isAMomentObject
}if(!H(fg._i)){fh._i=fg._i
}if(!H(fg._f)){fh._f=fg._f
}if(!H(fg._l)){fh._l=fg._l
}if(!H(fg._strict)){fh._strict=fg._strict
}if(!H(fg._tzm)){fh._tzm=fg._tzm
}if(!H(fg._isUTC)){fh._isUTC=fg._isUTC
}if(!H(fg._offset)){fh._offset=fg._offset
}if(!H(fg._pf)){fh._pf=bg(fg)
}if(!H(fg._locale)){fh._locale=fg._locale
}if(cZ.length>0){for(fd=0;
fd<cZ.length;
fd++){ff=cZ[fd];
fe=fg[ff];
if(!H(fe)){fh[ff]=fe
}}}return fh
}var dk=false;
function ey(fd){r(this,fd);
this._d=new Date(fd._d!=null?fd._d.getTime():NaN);
if(!this.isValid()){this._d=new Date(NaN)
}if(dk===false){dk=true;
eK.updateOffset(this);
dk=false
}}function ch(fd){return fd instanceof ey||(fd!=null&&fd._isAMomentObject!=null)
}function dp(fd){if(fd<0){return Math.ceil(fd)||0
}else{return Math.floor(fd)
}}function cW(fd){var ff=+fd,fe=0;
if(ff!==0&&isFinite(ff)){fe=dp(ff)
}return fe
}function b4(fi,fh,fe){var fd=Math.min(fi.length,fh.length),ff=Math.abs(fi.length-fh.length),fj=0,fg;
for(fg=0;
fg<fd;
fg++){if((fe&&fi[fg]!==fh[fg])||(!fe&&cW(fi[fg])!==cW(fh[fg]))){fj++
}}return fj+ff
}function dj(fd){if(eK.suppressDeprecationWarnings===false&&(typeof console!=="undefined")&&console.warn){console.warn("Deprecation warning: "+fd)
}}function em(fe,fd){var ff=true;
return e5(function(){if(eK.deprecationHandler!=null){eK.deprecationHandler(null,fe)
}if(ff){var fh=[];
var fg;
for(var fj=0;
fj<arguments.length;
fj++){fg="";
if(typeof arguments[fj]==="object"){fg+="\n["+fj+"] ";
for(var fi in arguments[0]){fg+=fi+": "+arguments[0][fi]+", "
}fg=fg.slice(0,-2)
}else{fg=arguments[fj]
}fh.push(fg)
}dj(fe+"\nArguments: "+Array.prototype.slice.call(fh).join("")+"\n"+(new Error()).stack);
ff=false
}return fd.apply(this,arguments)
},fd)
}var ad={};
function eX(fd,fe){if(eK.deprecationHandler!=null){eK.deprecationHandler(fd,fe)
}if(!ad[fd]){dj(fe);
ad[fd]=true
}}eK.suppressDeprecationWarnings=false;
eK.deprecationHandler=null;
function bb(fd){return fd instanceof Function||Object.prototype.toString.call(fd)==="[object Function]"
}function du(fd){var ff,fe;
for(fe in fd){ff=fd[fe];
if(bb(ff)){this[fe]=ff
}else{this["_"+fe]=ff
}}this._config=fd;
this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+(/\d{1,2}/).source)
}function ee(ff,fd){var fe=e5({},ff),fg;
for(fg in fd){if(ds(fd,fg)){if(x(ff[fg])&&x(fd[fg])){fe[fg]={};
e5(fe[fg],ff[fg]);
e5(fe[fg],fd[fg])
}else{if(fd[fg]!=null){fe[fg]=fd[fg]
}else{delete fe[fg]
}}}}for(fg in ff){if(ds(ff,fg)&&!ds(fd,fg)&&x(ff[fg])){fe[fg]=e5({},fe[fg])
}}return fe
}function cI(fd){if(fd!=null){this.set(fd)
}}var b1;
if(Object.keys){b1=Object.keys
}else{b1=function(ff){var fe,fd=[];
for(fe in ff){if(ds(ff,fe)){fd.push(fe)
}}return fd
}
}var cp={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};
function e(ff,fg,fe){var fd=this._calendar[ff]||this._calendar.sameElse;
return bb(fd)?fd.call(fg,fe):fd
}var d3={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};
function cP(fd){var fe=this._longDateFormat[fd],ff=this._longDateFormat[fd.toUpperCase()];
if(fe||!ff){return fe
}this._longDateFormat[fd]=ff.replace(/MMMM|MM|DD|dddd/g,function(fg){return fg.slice(1)
});
return this._longDateFormat[fd]
}var ap="Invalid date";
function ew(){return this._invalidDate
}var cb="%d";
var fa=/\d{1,2}/;
function eI(fd){return this._ordinal.replace("%d",fd)
}var eH={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};
function V(fg,ff,fe,fh){var fd=this._relativeTime[fe];
return(bb(fd))?fd(fg,ff,fe,fh):fd.replace(/%d/i,fg)
}function d5(ff,fd){var fe=this._relativeTime[ff>0?"future":"past"];
return bb(fe)?fe(fd):fe.replace(/%s/i,fd)
}var cQ={};
function ck(ff,fd){var fe=ff.toLowerCase();
cQ[fe]=cQ[fe+"s"]=cQ[fd]=ff
}function cV(fd){return typeof fd==="string"?cQ[fd]||cQ[fd.toLowerCase()]:undefined
}function dR(ff){var fe={},fd,fg;
for(fg in ff){if(ds(ff,fg)){fd=cV(fg);
if(fd){fe[fd]=ff[fg]
}}}return fe
}var bx={};
function d2(fe,fd){bx[fe]=fd
}function bv(fd){var fe=[];
for(var ff in fd){fe.push({unit:ff,priority:bx[ff]})
}fe.sort(function(fh,fg){return fh.priority-fg.priority
});
return fe
}function cu(fi,fh,fe){var fg=""+Math.abs(fi),ff=fh-fg.length,fd=fi>=0;
return(fd?(fe?"+":""):"-")+Math.pow(10,Math.max(0,ff)).toString().substr(1)+fg
}var bV=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
var bU=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
var bT={};
var be={};
function cD(fe,ff,fd,fh){var fg=fh;
if(typeof fh==="string"){fg=function(){return this[fh]()
}
}if(fe){be[fe]=fg
}if(ff){be[ff[0]]=function(){return cu(fg.apply(this,arguments),ff[1],ff[2])
}
}if(fd){be[fd]=function(){return this.localeData().ordinal(fg.apply(this,arguments),fe)
}
}}function aA(fd){if(fd.match(/\[[\s\S]/)){return fd.replace(/^\[|\]$/g,"")
}return fd.replace(/\\/g,"")
}function bC(ff){var fg=ff.match(bV),fd,fe;
for(fd=0,fe=fg.length;
fd<fe;
fd++){if(be[fg[fd]]){fg[fd]=be[fg[fd]]
}else{fg[fd]=aA(fg[fd])
}}return function(fj){var fh="",fi;
for(fi=0;
fi<fe;
fi++){fh+=bb(fg[fi])?fg[fi].call(fj,ff):fg[fi]
}return fh
}
}function ai(fd,fe){if(!fd.isValid()){return fd.localeData().invalidDate()
}fe=bK(fe,fd.localeData());
bT[fe]=bT[fe]||bC(fe);
return bT[fe](fd)
}function bK(fg,fd){var fe=5;
function ff(fh){return fd.longDateFormat(fh)||fh
}bU.lastIndex=0;
while(fe>=0&&bU.test(fg)){fg=fg.replace(bU,ff);
bU.lastIndex=0;
fe-=1
}return fg
}var aO=/\d/;
var aN=/\d\d/;
var aM=/\d{3}/;
var aL=/\d{4}/;
var aK=/[+-]?\d{6}/;
var av=/\d\d?/;
var cq=/\d\d\d\d?/;
var el=/\d\d\d\d\d\d?/;
var au=/\d{1,3}/;
var at=/\d{1,4}/;
var aq=/[+-]?\d{1,6}/;
var t=/\d+/;
var D=/[+-]?\d+/;
var bM=/Z|[+-]\d\d:?\d\d/gi;
var cK=/Z|[+-]\d\d(?::?\d\d)?/gi;
var eY=/[+-]?\d+(\.\d{1,3})?/;
var bd=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
var a7={};
function bi(fd,fe,ff){a7[fd]=bb(fe)?fe:function(fh,fg){return(fh&&ff)?ff:fe
}
}function bJ(fe,fd){if(!ds(a7,fe)){return new RegExp(dq(fe))
}return a7[fe](fd._strict,fd._locale)
}function dq(fd){return cm(fd.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(fe,fi,fh,fg,ff){return fi||fh||fg||ff
}))
}function cm(fd){return fd.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")
}var h={};
function bZ(fe,fg){var fd,ff=fg;
if(typeof fe==="string"){fe=[fe]
}if(s(fg)){ff=function(fh,fi){fi[fg]=cW(fh)
}
}for(fd=0;
fd<fe.length;
fd++){h[fe[fd]]=ff
}}function Z(fd,fe){bZ(fd,function(ff,fi,fg,fh){fg._w=fg._w||{};
fe(ff,fg._w,fg,fh)
})
}function w(ff,fd,fe){if(fd!=null&&ds(h,ff)){h[ff](fd,fe._a,fe,ff)
}}var eZ=0;
var k=1;
var eB=2;
var eO=3;
var dO=4;
var am=5;
var bO=6;
var co=7;
var j=8;
cD("Y",0,0,function(){var fd=this.year();
return fd<=9999?""+fd:"+"+fd
});
cD(0,["YY",2],0,function(){return this.year()%100
});
cD(0,["YYYY",4],0,"year");
cD(0,["YYYYY",5],0,"year");
cD(0,["YYYYYY",6,true],0,"year");
ck("year","y");
d2("year",1);
bi("Y",D);
bi("YY",av,aN);
bi("YYYY",at,aL);
bi("YYYYY",aq,aK);
bi("YYYYYY",aq,aK);
bZ(["YYYYY","YYYYYY"],eZ);
bZ("YYYY",function(fd,fe){fe[eZ]=fd.length===2?eK.parseTwoDigitYear(fd):cW(fd)
});
bZ("YY",function(fd,fe){fe[eZ]=eK.parseTwoDigitYear(fd)
});
bZ("Y",function(fd,fe){fe[eZ]=parseInt(fd,10)
});
function dM(fd){return d6(fd)?366:365
}function d6(fd){return(fd%4===0&&fd%100!==0)||fd%400===0
}eK.parseTwoDigitYear=function(fd){return cW(fd)+(cW(fd)>68?1900:2000)
};
var cM=ej("FullYear",true);
function c2(){return d6(this.year())
}function ej(fd,fe){return function(ff){if(ff!=null){aQ(this,fd,ff);
eK.updateOffset(this,fe);
return this
}else{return dH(this,fd)
}}
}function dH(fe,fd){return fe.isValid()?fe._d["get"+(fe._isUTC?"UTC":"")+fd]():NaN
}function aQ(fe,fd,ff){if(fe.isValid()&&!isNaN(ff)){if(fd==="FullYear"&&d6(fe.year())&&fe.month()===1&&fe.date()===29){fe._d["set"+(fe._isUTC?"UTC":"")+fd](ff,fe.month(),bL(ff,fe.month()))
}else{fe._d["set"+(fe._isUTC?"UTC":"")+fd](ff)
}}}function aD(fd){fd=cV(fd);
if(bb(this[fd])){return this[fd]()
}return this
}function ax(fd,fg){if(typeof fd==="object"){fd=dR(fd);
var ff=bv(fd);
for(var fe=0;
fe<ff.length;
fe++){this[ff[fe].unit](fd[ff[fe].unit])
}}else{fd=cV(fd);
if(bb(this[fd])){return this[fd](fg)
}}return this
}function ei(fe,fd){return((fe%fd)+fd)%fd
}var cX;
if(Array.prototype.indexOf){cX=Array.prototype.indexOf
}else{cX=function(fe){var fd;
for(fd=0;
fd<this.length;
++fd){if(this[fd]===fe){return fd
}}return -1
}
}function bL(fe,ff){if(isNaN(fe)||isNaN(ff)){return NaN
}var fd=ei(ff,12);
fe+=(ff-fd)/12;
return fd===1?(d6(fe)?29:28):(31-fd%7%2)
}cD("M",["MM",2],"Mo",function(){return this.month()+1
});
cD("MMM",0,0,function(fd){return this.localeData().monthsShort(this,fd)
});
cD("MMMM",0,0,function(fd){return this.localeData().months(this,fd)
});
ck("month","M");
d2("month",8);
bi("M",av);
bi("MM",av,aN);
bi("MMM",function(fe,fd){return fd.monthsShortRegex(fe)
});
bi("MMMM",function(fe,fd){return fd.monthsRegex(fe)
});
bZ(["M","MM"],function(fd,fe){fe[k]=cW(fd)-1
});
bZ(["MMM","MMMM"],function(fd,fh,fe,ff){var fg=fe._locale.monthsParse(fd,ff,fe._strict);
if(fg!=null){fh[k]=fg
}else{bg(fe).invalidMonth=fd
}});
var b8=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var R="January_February_March_April_May_June_July_August_September_October_November_December".split("_");
function a5(fd,fe){if(!fd){return X(this._months)?this._months:this._months.standalone
}return X(this._months)?this._months[fd.month()]:this._months[(this._months.isFormat||b8).test(fe)?"format":"standalone"][fd.month()]
}var d7="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
function bf(fd,fe){if(!fd){return X(this._monthsShort)?this._monthsShort:this._monthsShort.standalone
}return X(this._monthsShort)?this._monthsShort[fd.month()]:this._monthsShort[b8.test(fe)?"format":"standalone"][fd.month()]
}function bH(fe,fj,fd){var fg,fh,fi,ff=fe.toLocaleLowerCase();
if(!this._monthsParse){this._monthsParse=[];
this._longMonthsParse=[];
this._shortMonthsParse=[];
for(fg=0;
fg<12;
++fg){fi=cB([2000,fg]);
this._shortMonthsParse[fg]=this.monthsShort(fi,"").toLocaleLowerCase();
this._longMonthsParse[fg]=this.months(fi,"").toLocaleLowerCase()
}}if(fd){if(fj==="MMM"){fh=cX.call(this._shortMonthsParse,ff);
return fh!==-1?fh:null
}else{fh=cX.call(this._longMonthsParse,ff);
return fh!==-1?fh:null
}}else{if(fj==="MMM"){fh=cX.call(this._shortMonthsParse,ff);
if(fh!==-1){return fh
}fh=cX.call(this._longMonthsParse,ff);
return fh!==-1?fh:null
}else{fh=cX.call(this._longMonthsParse,ff);
if(fh!==-1){return fh
}fh=cX.call(this._shortMonthsParse,ff);
return fh!==-1?fh:null
}}}function dh(fe,fi,fd){var ff,fh,fg;
if(this._monthsParseExact){return bH.call(this,fe,fi,fd)
}if(!this._monthsParse){this._monthsParse=[];
this._longMonthsParse=[];
this._shortMonthsParse=[]
}for(ff=0;
ff<12;
ff++){fh=cB([2000,ff]);
if(fd&&!this._longMonthsParse[ff]){this._longMonthsParse[ff]=new RegExp("^"+this.months(fh,"").replace(".","")+"$","i");
this._shortMonthsParse[ff]=new RegExp("^"+this.monthsShort(fh,"").replace(".","")+"$","i")
}if(!fd&&!this._monthsParse[ff]){fg="^"+this.months(fh,"")+"|^"+this.monthsShort(fh,"");
this._monthsParse[ff]=new RegExp(fg.replace(".",""),"i")
}if(fd&&fi==="MMMM"&&this._longMonthsParse[ff].test(fe)){return ff
}else{if(fd&&fi==="MMM"&&this._shortMonthsParse[ff].test(fe)){return ff
}else{if(!fd&&this._monthsParse[ff].test(fe)){return ff
}}}}}function aZ(fd,fe){var ff;
if(!fd.isValid()){return fd
}if(typeof fe==="string"){if(/^\d+$/.test(fe)){fe=cW(fe)
}else{fe=fd.localeData().monthsParse(fe);
if(!s(fe)){return fd
}}}ff=Math.min(fd.date(),bL(fd.year(),fe));
fd._d["set"+(fd._isUTC?"UTC":"")+"Month"](fe,ff);
return fd
}function eN(fd){if(fd!=null){aZ(this,fd);
eK.updateOffset(this,true);
return this
}else{return dH(this,"Month")
}}function bR(){return bL(this.year(),this.month())
}var dm=bd;
function dr(fd){if(this._monthsParseExact){if(!ds(this,"_monthsRegex")){dt.call(this)
}if(fd){return this._monthsShortStrictRegex
}else{return this._monthsShortRegex
}}else{if(!ds(this,"_monthsShortRegex")){this._monthsShortRegex=dm
}return this._monthsShortStrictRegex&&fd?this._monthsShortStrictRegex:this._monthsShortRegex
}}var eF=bd;
function c5(fd){if(this._monthsParseExact){if(!ds(this,"_monthsRegex")){dt.call(this)
}if(fd){return this._monthsStrictRegex
}else{return this._monthsRegex
}}else{if(!ds(this,"_monthsRegex")){this._monthsRegex=eF
}return this._monthsStrictRegex&&fd?this._monthsStrictRegex:this._monthsRegex
}}function dt(){function fi(fk,fj){return fj.length-fk.length
}var fh=[],fd=[],fg=[],fe,ff;
for(fe=0;
fe<12;
fe++){ff=cB([2000,fe]);
fh.push(this.monthsShort(ff,""));
fd.push(this.months(ff,""));
fg.push(this.months(ff,""));
fg.push(this.monthsShort(ff,""))
}fh.sort(fi);
fd.sort(fi);
fg.sort(fi);
for(fe=0;
fe<12;
fe++){fh[fe]=cm(fh[fe]);
fd[fe]=cm(fd[fe])
}for(fe=0;
fe<24;
fe++){fg[fe]=cm(fg[fe])
}this._monthsRegex=new RegExp("^("+fg.join("|")+")","i");
this._monthsShortRegex=this._monthsRegex;
this._monthsStrictRegex=new RegExp("^("+fd.join("|")+")","i");
this._monthsShortStrictRegex=new RegExp("^("+fh.join("|")+")","i")
}function ef(fk,fd,fi,fh,fj,fg,ff){var fe;
if(fk<100&&fk>=0){fe=new Date(fk+400,fd,fi,fh,fj,fg,ff);
if(isFinite(fe.getFullYear())){fe.setFullYear(fk)
}}else{fe=new Date(fk,fd,fi,fh,fj,fg,ff)
}return fe
}function dB(ff){var fe;
if(ff<100&&ff>=0){var fd=Array.prototype.slice.call(arguments);
fd[0]=ff+400;
fe=new Date(Date.UTC.apply(null,fd));
if(isFinite(fe.getUTCFullYear())){fe.setUTCFullYear(ff)
}}else{fe=new Date(Date.UTC.apply(null,arguments))
}return fe
}function bn(fe,fh,fg){var fd=7+fh-fg,ff=(7+dB(fe,0,fd).getUTCDay()-fh)%7;
return -ff+fd-1
}function bF(fg,fe,ff,fm,fk){var fl=(7+ff-fm)%7,fd=bn(fg,fm,fk),fi=1+7*(fe-1)+fl+fd,fj,fh;
if(fi<=0){fj=fg-1;
fh=dM(fj)+fi
}else{if(fi>dM(fg)){fj=fg+1;
fh=fi-dM(fg)
}else{fj=fg;
fh=fi
}}return{year:fj,dayOfYear:fh}
}function ez(fh,fj,fi){var ff=bn(fh.year(),fj,fi),fg=Math.floor((fh.dayOfYear()-ff-1)/7)+1,fd,fe;
if(fg<1){fe=fh.year()-1;
fd=fg+G(fe,fj,fi)
}else{if(fg>G(fh.year(),fj,fi)){fd=fg-G(fh.year(),fj,fi);
fe=fh.year()+1
}else{fe=fh.year();
fd=fg
}}return{week:fd,year:fe}
}function G(fe,fh,ff){var fd=bn(fe,fh,ff),fg=bn(fe+1,fh,ff);
return(dM(fe)-fd+fg)/7
}cD("w",["ww",2],"wo","week");
cD("W",["WW",2],"Wo","isoWeek");
ck("week","w");
ck("isoWeek","W");
d2("week",5);
d2("isoWeek",5);
bi("w",av);
bi("ww",av,aN);
bi("W",av);
bi("WW",av,aN);
Z(["w","ww","W","WW"],function(fd,fg,fe,ff){fg[ff.substr(0,1)]=cW(fd)
});
function bt(fd){return ez(fd,this._week.dow,this._week.doy).week
}var b7={dow:0,doy:6};
function ak(){return this._week.dow
}function df(){return this._week.doy
}function L(fd){var fe=this.localeData().week(this);
return fd==null?fe:this.add((fd-fe)*7,"d")
}function z(fd){var fe=ez(this,1,4).week;
return fd==null?fe:this.add((fd-fe)*7,"d")
}cD("d",0,"do","day");
cD("dd",0,0,function(fd){return this.localeData().weekdaysMin(this,fd)
});
cD("ddd",0,0,function(fd){return this.localeData().weekdaysShort(this,fd)
});
cD("dddd",0,0,function(fd){return this.localeData().weekdays(this,fd)
});
cD("e",0,0,"weekday");
cD("E",0,0,"isoWeekday");
ck("day","d");
ck("weekday","e");
ck("isoWeekday","E");
d2("day",11);
d2("weekday",11);
d2("isoWeekday",11);
bi("d",av);
bi("e",av);
bi("E",av);
bi("dd",function(fe,fd){return fd.weekdaysMinRegex(fe)
});
bi("ddd",function(fe,fd){return fd.weekdaysShortRegex(fe)
});
bi("dddd",function(fe,fd){return fd.weekdaysRegex(fe)
});
Z(["dd","ddd","dddd"],function(fd,fg,fe,ff){var fh=fe._locale.weekdaysParse(fd,ff,fe._strict);
if(fh!=null){fg.d=fh
}else{bg(fe).invalidWeekday=fd
}});
Z(["d","e","E"],function(fd,fg,fe,ff){fg[ff]=cW(fd)
});
function bm(fe,fd){if(typeof fe!=="string"){return fe
}if(!isNaN(fe)){return parseInt(fe,10)
}fe=fd.weekdaysParse(fe);
if(typeof fe==="number"){return fe
}return null
}function bI(fe,fd){if(typeof fe==="string"){return fd.weekdaysParse(fe)%7||7
}return isNaN(fe)?null:fe
}function ce(fd,fe){return fd.slice(fe,7).concat(fd.slice(0,fe))
}var U="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
function aB(fd,ff){var fe=X(this._weekdays)?this._weekdays:this._weekdays[(fd&&fd!==true&&this._weekdays.isFormat.test(ff))?"format":"standalone"];
return(fd===true)?ce(fe,this._week.dow):(fd)?fe[fd.day()]:fe
}var m="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
function O(fd){return(fd===true)?ce(this._weekdaysShort,this._week.dow):(fd)?this._weekdaysShort[fd.day()]:this._weekdaysShort
}var by="Su_Mo_Tu_We_Th_Fr_Sa".split("_");
function eL(fd){return(fd===true)?ce(this._weekdaysMin,this._week.dow):(fd)?this._weekdaysMin[fd.day()]:this._weekdaysMin
}function dT(fi,fj,fd){var ff,fg,fh,fe=fi.toLocaleLowerCase();
if(!this._weekdaysParse){this._weekdaysParse=[];
this._shortWeekdaysParse=[];
this._minWeekdaysParse=[];
for(ff=0;
ff<7;
++ff){fh=cB([2000,1]).day(ff);
this._minWeekdaysParse[ff]=this.weekdaysMin(fh,"").toLocaleLowerCase();
this._shortWeekdaysParse[ff]=this.weekdaysShort(fh,"").toLocaleLowerCase();
this._weekdaysParse[ff]=this.weekdays(fh,"").toLocaleLowerCase()
}}if(fd){if(fj==="dddd"){fg=cX.call(this._weekdaysParse,fe);
return fg!==-1?fg:null
}else{if(fj==="ddd"){fg=cX.call(this._shortWeekdaysParse,fe);
return fg!==-1?fg:null
}else{fg=cX.call(this._minWeekdaysParse,fe);
return fg!==-1?fg:null
}}}else{if(fj==="dddd"){fg=cX.call(this._weekdaysParse,fe);
if(fg!==-1){return fg
}fg=cX.call(this._shortWeekdaysParse,fe);
if(fg!==-1){return fg
}fg=cX.call(this._minWeekdaysParse,fe);
return fg!==-1?fg:null
}else{if(fj==="ddd"){fg=cX.call(this._shortWeekdaysParse,fe);
if(fg!==-1){return fg
}fg=cX.call(this._weekdaysParse,fe);
if(fg!==-1){return fg
}fg=cX.call(this._minWeekdaysParse,fe);
return fg!==-1?fg:null
}else{fg=cX.call(this._minWeekdaysParse,fe);
if(fg!==-1){return fg
}fg=cX.call(this._weekdaysParse,fe);
if(fg!==-1){return fg
}fg=cX.call(this._shortWeekdaysParse,fe);
return fg!==-1?fg:null
}}}}function bQ(fh,fi,fd){var fe,fg,ff;
if(this._weekdaysParseExact){return dT.call(this,fh,fi,fd)
}if(!this._weekdaysParse){this._weekdaysParse=[];
this._minWeekdaysParse=[];
this._shortWeekdaysParse=[];
this._fullWeekdaysParse=[]
}for(fe=0;
fe<7;
fe++){fg=cB([2000,1]).day(fe);
if(fd&&!this._fullWeekdaysParse[fe]){this._fullWeekdaysParse[fe]=new RegExp("^"+this.weekdays(fg,"").replace(".","\\.?")+"$","i");
this._shortWeekdaysParse[fe]=new RegExp("^"+this.weekdaysShort(fg,"").replace(".","\\.?")+"$","i");
this._minWeekdaysParse[fe]=new RegExp("^"+this.weekdaysMin(fg,"").replace(".","\\.?")+"$","i")
}if(!this._weekdaysParse[fe]){ff="^"+this.weekdays(fg,"")+"|^"+this.weekdaysShort(fg,"")+"|^"+this.weekdaysMin(fg,"");
this._weekdaysParse[fe]=new RegExp(ff.replace(".",""),"i")
}if(fd&&fi==="dddd"&&this._fullWeekdaysParse[fe].test(fh)){return fe
}else{if(fd&&fi==="ddd"&&this._shortWeekdaysParse[fe].test(fh)){return fe
}else{if(fd&&fi==="dd"&&this._minWeekdaysParse[fe].test(fh)){return fe
}else{if(!fd&&this._weekdaysParse[fe].test(fh)){return fe
}}}}}}function er(fe){if(!this.isValid()){return fe!=null?this:NaN
}var fd=this._isUTC?this._d.getUTCDay():this._d.getDay();
if(fe!=null){fe=bm(fe,this.localeData());
return this.add(fe-fd,"d")
}else{return fd
}}function ag(fd){if(!this.isValid()){return fd!=null?this:NaN
}var fe=(this.day()+7-this.localeData()._week.dow)%7;
return fd==null?fe:this.add(fd-fe,"d")
}function cz(fd){if(!this.isValid()){return fd!=null?this:NaN
}if(fd!=null){var fe=bI(fd,this.localeData());
return this.day(this.day()%7?fe:fe-7)
}else{return this.day()||7
}}var ae=bd;
function e1(fd){if(this._weekdaysParseExact){if(!ds(this,"_weekdaysRegex")){B.call(this)
}if(fd){return this._weekdaysStrictRegex
}else{return this._weekdaysRegex
}}else{if(!ds(this,"_weekdaysRegex")){this._weekdaysRegex=ae
}return this._weekdaysStrictRegex&&fd?this._weekdaysStrictRegex:this._weekdaysRegex
}}var y=bd;
function aJ(fd){if(this._weekdaysParseExact){if(!ds(this,"_weekdaysRegex")){B.call(this)
}if(fd){return this._weekdaysShortStrictRegex
}else{return this._weekdaysShortRegex
}}else{if(!ds(this,"_weekdaysShortRegex")){this._weekdaysShortRegex=y
}return this._weekdaysShortStrictRegex&&fd?this._weekdaysShortStrictRegex:this._weekdaysShortRegex
}}var d0=bd;
function F(fd){if(this._weekdaysParseExact){if(!ds(this,"_weekdaysRegex")){B.call(this)
}if(fd){return this._weekdaysMinStrictRegex
}else{return this._weekdaysMinRegex
}}else{if(!ds(this,"_weekdaysMinRegex")){this._weekdaysMinRegex=d0
}return this._weekdaysMinStrictRegex&&fd?this._weekdaysMinStrictRegex:this._weekdaysMinRegex
}}function B(){function fg(fo,fn){return fn.length-fo.length
}var fi=[],fj=[],fm=[],fd=[],fh,ff,fe,fk,fl;
for(fh=0;
fh<7;
fh++){ff=cB([2000,1]).day(fh);
fe=this.weekdaysMin(ff,"");
fk=this.weekdaysShort(ff,"");
fl=this.weekdays(ff,"");
fi.push(fe);
fj.push(fk);
fm.push(fl);
fd.push(fe);
fd.push(fk);
fd.push(fl)
}fi.sort(fg);
fj.sort(fg);
fm.sort(fg);
fd.sort(fg);
for(fh=0;
fh<7;
fh++){fj[fh]=cm(fj[fh]);
fm[fh]=cm(fm[fh]);
fd[fh]=cm(fd[fh])
}this._weekdaysRegex=new RegExp("^("+fd.join("|")+")","i");
this._weekdaysShortRegex=this._weekdaysRegex;
this._weekdaysMinRegex=this._weekdaysRegex;
this._weekdaysStrictRegex=new RegExp("^("+fm.join("|")+")","i");
this._weekdaysShortStrictRegex=new RegExp("^("+fj.join("|")+")","i");
this._weekdaysMinStrictRegex=new RegExp("^("+fi.join("|")+")","i")
}function dF(){return this.hours()%12||12
}function Q(){return this.hours()||24
}cD("H",["HH",2],0,"hour");
cD("h",["hh",2],0,dF);
cD("k",["kk",2],0,Q);
cD("hmm",0,0,function(){return""+dF.apply(this)+cu(this.minutes(),2)
});
cD("hmmss",0,0,function(){return""+dF.apply(this)+cu(this.minutes(),2)+cu(this.seconds(),2)
});
cD("Hmm",0,0,function(){return""+this.hours()+cu(this.minutes(),2)
});
cD("Hmmss",0,0,function(){return""+this.hours()+cu(this.minutes(),2)+cu(this.seconds(),2)
});
function eu(fd,fe){cD(fd,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),fe)
})
}eu("a",true);
eu("A",false);
ck("hour","h");
d2("hour",13);
function T(fe,fd){return fd._meridiemParse
}bi("a",T);
bi("A",T);
bi("H",av);
bi("h",av);
bi("k",av);
bi("HH",av,aN);
bi("hh",av,aN);
bi("kk",av,aN);
bi("hmm",cq);
bi("hmmss",el);
bi("Hmm",cq);
bi("Hmmss",el);
bZ(["H","HH"],eO);
bZ(["k","kk"],function(fe,fg,ff){var fd=cW(fe);
fg[eO]=fd===24?0:fd
});
bZ(["a","A"],function(fd,ff,fe){fe._isPm=fe._locale.isPM(fd);
fe._meridiem=fd
});
bZ(["h","hh"],function(fd,ff,fe){ff[eO]=cW(fd);
bg(fe).bigHour=true
});
bZ("hmm",function(fd,fg,fe){var ff=fd.length-2;
fg[eO]=cW(fd.substr(0,ff));
fg[dO]=cW(fd.substr(ff));
bg(fe).bigHour=true
});
bZ("hmmss",function(fd,fh,fe){var fg=fd.length-4;
var ff=fd.length-2;
fh[eO]=cW(fd.substr(0,fg));
fh[dO]=cW(fd.substr(fg,2));
fh[am]=cW(fd.substr(ff));
bg(fe).bigHour=true
});
bZ("Hmm",function(fd,fg,fe){var ff=fd.length-2;
fg[eO]=cW(fd.substr(0,ff));
fg[dO]=cW(fd.substr(ff))
});
bZ("Hmmss",function(fd,fh,fe){var fg=fd.length-4;
var ff=fd.length-2;
fh[eO]=cW(fd.substr(0,fg));
fh[dO]=cW(fd.substr(fg,2));
fh[am]=cW(fd.substr(ff))
});
function cj(fd){return((fd+"").toLowerCase().charAt(0)==="p")
}var ca=/[ap]\.?m?\.?/i;
function aX(fd,fe,ff){if(fd>11){return ff?"pm":"PM"
}else{return ff?"am":"AM"
}}var cv=ej("Hours",true);
var b6={calendar:cp,longDateFormat:d3,invalidDate:ap,ordinal:cb,dayOfMonthOrdinalParse:fa,relativeTime:eH,months:R,monthsShort:d7,week:b7,weekdays:U,weekdaysMin:by,weekdaysShort:m,meridiemParse:ca};
var bD={};
var n={};
var c4;
function dv(fd){return fd?fd.toLowerCase().replace("_","-"):fd
}function c3(fi){var fg=0,fe,fh,fd,ff;
while(fg<fi.length){ff=dv(fi[fg]).split("-");
fe=ff.length;
fh=dv(fi[fg+1]);
fh=fh?fh.split("-"):null;
while(fe>0){fd=aF(ff.slice(0,fe).join("-"));
if(fd){return fd
}if(fh&&fh.length>=fe&&b4(ff,fh,true)>=fe-1){break
}fe--
}fg++
}return c4
}function aF(fd){var fg=null;
if(!bD[fd]&&(typeof module!=="undefined")&&module&&module.exports){try{fg=c4._abbr;
var fe=require;
fe("./locale/"+fd);
C(fg)
}catch(ff){}}return bD[fd]
}function C(fe,fd){var ff;
if(fe){if(H(fd)){ff=S(fe)
}else{ff=cG(fe,fd)
}if(ff){c4=ff
}else{if((typeof console!=="undefined")&&console.warn){console.warn("Locale "+fe+" not found. Did you forget to load it?")
}}}return c4._abbr
}function cG(ff,fe){if(fe!==null){var fd,fg=b6;
fe.abbr=ff;
if(bD[ff]!=null){eX("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
fg=bD[ff]._config
}else{if(fe.parentLocale!=null){if(bD[fe.parentLocale]!=null){fg=bD[fe.parentLocale]._config
}else{fd=aF(fe.parentLocale);
if(fd!=null){fg=fd._config
}else{if(!n[fe.parentLocale]){n[fe.parentLocale]=[]
}n[fe.parentLocale].push({name:ff,config:fe});
return null
}}}}bD[ff]=new cI(ee(fg,fe));
if(n[ff]){n[ff].forEach(function(fh){cG(fh.name,fh.config)
})
}C(ff);
return bD[ff]
}else{delete bD[ff];
return null
}}function es(ff,fe){if(fe!=null){var fd,fh,fg=b6;
fh=aF(ff);
if(fh!=null){fg=fh._config
}fe=ee(fg,fe);
fd=new cI(fe);
fd.parentLocale=bD[ff];
bD[ff]=fd;
C(ff)
}else{if(bD[ff]!=null){if(bD[ff].parentLocale!=null){bD[ff]=bD[ff].parentLocale
}else{if(bD[ff]!=null){delete bD[ff]
}}}}return bD[ff]
}function S(fe){var fd;
if(fe&&fe._locale&&fe._locale._abbr){fe=fe._locale._abbr
}if(!fe){return c4
}if(!X(fe)){fd=aF(fe);
if(fd){return fd
}fe=[fe]
}return c3(fe)
}function b9(){return b1(bD)
}function cT(fd){var ff;
var fe=fd._a;
if(fe&&bg(fd).overflow===-2){ff=fe[k]<0||fe[k]>11?k:fe[eB]<1||fe[eB]>bL(fe[eZ],fe[k])?eB:fe[eO]<0||fe[eO]>24||(fe[eO]===24&&(fe[dO]!==0||fe[am]!==0||fe[bO]!==0))?eO:fe[dO]<0||fe[dO]>59?dO:fe[am]<0||fe[am]>59?am:fe[bO]<0||fe[bO]>999?bO:-1;
if(bg(fd)._overflowDayOfYear&&(ff<eZ||ff>eB)){ff=eB
}if(bg(fd)._overflowWeeks&&ff===-1){ff=co
}if(bg(fd)._overflowWeekday&&ff===-1){ff=j
}bg(fd).overflow=ff
}return fd
}function eg(fe,fd,ff){if(fe!=null){return fe
}if(fd!=null){return fd
}return ff
}function a6(fe){var fd=new Date(eK.now());
if(fe._useUTC){return[fd.getUTCFullYear(),fd.getUTCMonth(),fd.getUTCDate()]
}return[fd.getFullYear(),fd.getMonth(),fd.getDate()]
}function f(fh){var fi,fg,ff=[],fe,fj,fd;
if(fh._d){return
}fe=a6(fh);
if(fh._w&&fh._a[eB]==null&&fh._a[k]==null){c8(fh)
}if(fh._dayOfYear!=null){fd=eg(fh._a[eZ],fe[eZ]);
if(fh._dayOfYear>dM(fd)||fh._dayOfYear===0){bg(fh)._overflowDayOfYear=true
}fg=dB(fd,0,fh._dayOfYear);
fh._a[k]=fg.getUTCMonth();
fh._a[eB]=fg.getUTCDate()
}for(fi=0;
fi<3&&fh._a[fi]==null;
++fi){fh._a[fi]=ff[fi]=fe[fi]
}for(;
fi<7;
fi++){fh._a[fi]=ff[fi]=(fh._a[fi]==null)?(fi===2?1:0):fh._a[fi]
}if(fh._a[eO]===24&&fh._a[dO]===0&&fh._a[am]===0&&fh._a[bO]===0){fh._nextDay=true;
fh._a[eO]=0
}fh._d=(fh._useUTC?dB:ef).apply(null,ff);
fj=fh._useUTC?fh._d.getUTCDay():fh._d.getDay();
if(fh._tzm!=null){fh._d.setUTCMinutes(fh._d.getUTCMinutes()-fh._tzm)
}if(fh._nextDay){fh._a[eO]=24
}if(fh._w&&typeof fh._w.d!=="undefined"&&fh._w.d!==fj){bg(fh).weekdayMismatch=true
}}function c8(fg){var fj,fd,fe,fh,fm,fk,fl,fi;
fj=fg._w;
if(fj.GG!=null||fj.W!=null||fj.E!=null){fm=1;
fk=4;
fd=eg(fj.GG,fg._a[eZ],ez(dI(),1,4).year);
fe=eg(fj.W,1);
fh=eg(fj.E,1);
if(fh<1||fh>7){fi=true
}}else{fm=fg._locale._week.dow;
fk=fg._locale._week.doy;
var ff=ez(dI(),fm,fk);
fd=eg(fj.gg,fg._a[eZ],ff.year);
fe=eg(fj.w,ff.week);
if(fj.d!=null){fh=fj.d;
if(fh<0||fh>6){fi=true
}}else{if(fj.e!=null){fh=fj.e+fm;
if(fj.e<0||fj.e>6){fi=true
}}else{fh=fm
}}}if(fe<1||fe>G(fd,fm,fk)){bg(fg)._overflowWeeks=true
}else{if(fi!=null){bg(fg)._overflowWeekday=true
}else{fl=bF(fd,fe,fh,fm,fk);
fg._a[eZ]=fl.year;
fg._dayOfYear=fl.dayOfYear
}}}var l=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var aW=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var cL=/Z|[+-]\d\d(?::?\d\d)?/;
var cY=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,false],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,false],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,false],["YYYYDDD",/\d{7}/]];
var cw=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]];
var b0=/^\/?Date\((\-?\d+)/i;
function E(fe){var fi,fg,fk=fe._i,fj=l.exec(fk)||aW.exec(fk),fl,fd,fh,ff;
if(fj){bg(fe).iso=true;
for(fi=0,fg=cY.length;
fi<fg;
fi++){if(cY[fi][1].exec(fj[1])){fd=cY[fi][0];
fl=cY[fi][2]!==false;
break
}}if(fd==null){fe._isValid=false;
return
}if(fj[3]){for(fi=0,fg=cw.length;
fi<fg;
fi++){if(cw[fi][1].exec(fj[3])){fh=(fj[2]||" ")+cw[fi][0];
break
}}if(fh==null){fe._isValid=false;
return
}}if(!fl&&fh!=null){fe._isValid=false;
return
}if(fj[4]){if(cL.exec(fj[4])){ff="Z"
}else{fe._isValid=false;
return
}}fe._f=fd+(fh||"")+(ff||"");
b2(fe)
}else{fe._isValid=false
}}var dn=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
function eA(fh,fg,fi,fe,fj,ff){var fd=[ct(fh),d7.indexOf(fg),parseInt(fi,10),parseInt(fe,10),parseInt(fj,10)];
if(ff){fd.push(parseInt(ff,10))
}return fd
}function ct(fd){var fe=parseInt(fd,10);
if(fe<=49){return 2000+fe
}else{if(fe<=999){return 1900+fe
}}return fe
}function aP(fd){return fd.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")
}function az(fd,fh,ff){if(fd){var fg=m.indexOf(fd),fe=new Date(fh[0],fh[1],fh[2]).getDay();
if(fg!==fe){bg(ff).weekdayMismatch=true;
ff._isValid=false;
return false
}}return true
}var bz={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};
function e8(fi,fe,fg){if(fi){return bz[fi]
}else{if(fe){return 0
}else{var fh=parseInt(fg,10);
var fd=fh%100,ff=(fh-fd)/100;
return ff*60+fd
}}}function bX(fe){var fd=dn.exec(aP(fe._i));
if(fd){var ff=eA(fd[4],fd[3],fd[2],fd[5],fd[6],fd[7]);
if(!az(fd[1],ff,fe)){return
}fe._a=ff;
fe._tzm=e8(fd[8],fd[9],fd[10]);
fe._d=dB.apply(null,fe._a);
fe._d.setUTCMinutes(fe._d.getUTCMinutes()-fe._tzm);
bg(fe).rfc2822=true
}else{fe._isValid=false
}}function bh(fe){var fd=b0.exec(fe._i);
if(fd!==null){fe._d=new Date(+fd[1]);
return
}E(fe);
if(fe._isValid===false){delete fe._isValid
}else{return
}bX(fe);
if(fe._isValid===false){delete fe._isValid
}else{return
}eK.createFromInputFallback(fe)
}eK.createFromInputFallback=em("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(fd){fd._d=new Date(fd._i+(fd._useUTC?" UTC":""))
});
eK.ISO_8601=function(){};
eK.RFC_2822=function(){};
function b2(ff){if(ff._f===eK.ISO_8601){E(ff);
return
}if(ff._f===eK.RFC_2822){bX(ff);
return
}ff._a=[];
bg(ff).empty=true;
var fi=""+ff._i,fh,fe,fl,fg,fk,fd=fi.length,fj=0;
fl=bK(ff._f,ff._locale).match(bV)||[];
for(fh=0;
fh<fl.length;
fh++){fg=fl[fh];
fe=(fi.match(bJ(fg,ff))||[])[0];
if(fe){fk=fi.substr(0,fi.indexOf(fe));
if(fk.length>0){bg(ff).unusedInput.push(fk)
}fi=fi.slice(fi.indexOf(fe)+fe.length);
fj+=fe.length
}if(be[fg]){if(fe){bg(ff).empty=false
}else{bg(ff).unusedTokens.push(fg)
}w(fg,fe,ff)
}else{if(ff._strict&&!fe){bg(ff).unusedTokens.push(fg)
}}}bg(ff).charsLeftOver=fd-fj;
if(fi.length>0){bg(ff).unusedInput.push(fi)
}if(ff._a[eO]<=12&&bg(ff).bigHour===true&&ff._a[eO]>0){bg(ff).bigHour=undefined
}bg(ff).parsedDateParts=ff._a.slice(0);
bg(ff).meridiem=ff._meridiem;
ff._a[eO]=en(ff._locale,ff._a[eO],ff._meridiem);
f(ff);
cT(ff)
}function en(fd,ff,fg){var fe;
if(fg==null){return ff
}if(fd.meridiemHour!=null){return fd.meridiemHour(ff,fg)
}else{if(fd.isPM!=null){fe=fd.isPM(fg);
if(fe&&ff<12){ff+=12
}if(!fe&&ff===12){ff=0
}return ff
}else{return ff
}}}function dK(fd){var fh,ff,fg,fe,fi;
if(fd._f.length===0){bg(fd).invalidFormat=true;
fd._d=new Date(NaN);
return
}for(fe=0;
fe<fd._f.length;
fe++){fi=0;
fh=r({},fd);
if(fd._useUTC!=null){fh._useUTC=fd._useUTC
}fh._f=fd._f[fe];
b2(fh);
if(!ar(fh)){continue
}fi+=bg(fh).charsLeftOver;
fi+=bg(fh).unusedTokens.length*10;
bg(fh).score=fi;
if(fg==null||fi<fg){fg=fi;
ff=fh
}}e5(fd,ff||fh)
}function a8(fd){if(fd._d){return
}var fe=dR(fd._i);
fd._a=bs([fe.year,fe.month,fe.day||fe.date,fe.hour,fe.minute,fe.second,fe.millisecond],function(ff){return ff&&parseInt(ff,10)
});
f(fd)
}function ao(fd){var fe=new ey(cT(bw(fd)));
if(fe._nextDay){fe.add(1,"d");
fe._nextDay=undefined
}return fe
}function bw(fe){var fd=fe._i,ff=fe._f;
fe._locale=fe._locale||S(fe._l);
if(fd===null||(ff===undefined&&fd==="")){return P({nullInput:true})
}if(typeof fd==="string"){fe._i=fd=fe._locale.preparse(fd)
}if(ch(fd)){return new ey(cT(fd))
}else{if(eD(fd)){fe._d=fd
}else{if(X(ff)){dK(fe)
}else{if(ff){b2(fe)
}else{cA(fe)
}}}}if(!ar(fe)){fe._d=null
}return fe
}function cA(fe){var fd=fe._i;
if(H(fd)){fe._d=new Date(eK.now())
}else{if(eD(fd)){fe._d=new Date(fd.valueOf())
}else{if(typeof fd==="string"){bh(fe)
}else{if(X(fd)){fe._a=bs(fd.slice(0),function(ff){return parseInt(ff,10)
});
f(fe)
}else{if(x(fd)){a8(fe)
}else{if(s(fd)){fe._d=new Date(fd)
}else{eK.createFromInputFallback(fe)
}}}}}}}function af(fg,fh,fd,ff,fe){var fi={};
if(fd===true||fd===false){ff=fd;
fd=undefined
}if((x(fg)&&cn(fg))||(X(fg)&&fg.length===0)){fg=undefined
}fi._isAMomentObject=true;
fi._useUTC=fi._isUTC=fe;
fi._l=fd;
fi._i=fg;
fi._f=fh;
fi._strict=ff;
return ao(fi)
}function dI(ff,fg,fd,fe){return af(ff,fg,fd,fe,false)
}var cO=em("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var fd=dI.apply(null,arguments);
if(this.isValid()&&fd.isValid()){return fd<this?this:fd
}else{return P()
}});
var ev=em("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var fd=dI.apply(null,arguments);
if(this.isValid()&&fd.isValid()){return fd>this?this:fd
}else{return P()
}});
function e6(ff,fg){var fe,fd;
if(fg.length===1&&X(fg[0])){fg=fg[0]
}if(!fg.length){return dI()
}fe=fg[0];
for(fd=1;
fd<fg.length;
++fd){if(!fg[fd].isValid()||fg[fd][ff](fe)){fe=fg[fd]
}}return fe
}function p(){var fd=[].slice.call(arguments,0);
return e6("isBefore",fd)
}function bq(){var fd=[].slice.call(arguments,0);
return e6("isAfter",fd)
}var cE=function(){return Date.now?Date.now():+(new Date())
};
var e4=["year","quarter","month","week","day","hour","minute","second","millisecond"];
function aw(fe){for(var fg in fe){if(!(cX.call(e4,fg)!==-1&&(fe[fg]==null||!isNaN(fe[fg])))){return false
}}var fd=false;
for(var ff=0;
ff<e4.length;
++ff){if(fe[e4[ff]]){if(fd){return false
}if(parseFloat(fe[e4[ff]])!==cW(fe[e4[ff]])){fd=true
}}}return true
}function u(){return this._isValid
}function a0(){return dl(NaN)
}function dU(fi){var fk=dR(fi),fj=fk.year||0,fe=fk.quarter||0,ff=fk.month||0,fd=fk.week||fk.isoWeek||0,fn=fk.day||0,fl=fk.hour||0,fh=fk.minute||0,fm=fk.second||0,fg=fk.millisecond||0;
this._isValid=aw(fk);
this._milliseconds=+fg+fm*1000+fh*60000+fl*1000*60*60;
this._days=+fn+fd*7;
this._months=+ff+fe*3+fj*12;
this._data={};
this._locale=S();
this._bubble()
}function ah(fd){return fd instanceof dU
}function eq(fd){if(fd<0){return Math.round(-1*fd)*-1
}else{return Math.round(fd)
}}function bB(fd,fe){cD(fd,0,0,function(){var fg=this.utcOffset();
var ff="+";
if(fg<0){fg=-fg;
ff="-"
}return ff+cu(~~(fg/60),2)+fe+cu(~~(fg)%60,2)
})
}bB("Z",":");
bB("ZZ","");
bi("Z",cK);
bi("ZZ",cK);
bZ(["Z","ZZ"],function(fd,ff,fe){fe._useUTC=true;
fe._tzm=o(cK,fd)
});
var eJ=/([\+\-]|\d\d)/gi;
function o(fi,fe){var fg=(fe||"").match(fi);
if(fg===null){return null
}var fd=fg[fg.length-1]||[];
var fh=(fd+"").match(eJ)||["-",0,0];
var ff=+(fh[1]*60)+cW(fh[2]);
return ff===0?0:fh[0]==="+"?ff:-ff
}function aG(fd,fe){var ff,fg;
if(fe._isUTC){ff=fe.clone();
fg=(ch(fd)||eD(fd)?fd.valueOf():dI(fd).valueOf())-ff.valueOf();
ff._d.setTime(ff._d.valueOf()+fg);
eK.updateOffset(ff,false);
return ff
}else{return dI(fd).local()
}}function aS(fd){return -Math.round(fd._d.getTimezoneOffset()/15)*15
}eK.updateOffset=function(){};
function dC(fd,fg,fh){var ff=this._offset||0,fe;
if(!this.isValid()){return fd!=null?this:NaN
}if(fd!=null){if(typeof fd==="string"){fd=o(cK,fd);
if(fd===null){return this
}}else{if(Math.abs(fd)<16&&!fh){fd=fd*60
}}if(!this._isUTC&&fg){fe=aS(this)
}this._offset=fd;
this._isUTC=true;
if(fe!=null){this.add(fe,"m")
}if(ff!==fd){if(!fg||this._changeInProgress){a3(this,dl(fd-ff,"m"),1,false)
}else{if(!this._changeInProgress){this._changeInProgress=true;
eK.updateOffset(this,true);
this._changeInProgress=null
}}}return this
}else{return this._isUTC?ff:aS(this)
}}function dx(fd,fe){if(fd!=null){if(typeof fd!=="string"){fd=-fd
}this.utcOffset(fd,fe);
return this
}else{return -this.utcOffset()
}}function a4(fd){return this.utcOffset(0,fd)
}function dz(fd){if(this._isUTC){this.utcOffset(0,fd);
this._isUTC=false;
if(fd){this.subtract(aS(this),"m")
}}return this
}function cd(){if(this._tzm!=null){this.utcOffset(this._tzm,false,true)
}else{if(typeof this._i==="string"){var fd=o(bM,this._i);
if(fd!=null){this.utcOffset(fd)
}else{this.utcOffset(0,true)
}}}return this
}function aE(fd){if(!this.isValid()){return false
}fd=fd?dI(fd).utcOffset():0;
return(this.utcOffset()-fd)%60===0
}function aR(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset())
}function c(){if(!H(this._isDSTShifted)){return this._isDSTShifted
}var fe={};
r(fe,this);
fe=bw(fe);
if(fe._a){var fd=fe._isUTC?cB(fe._a):dI(fe._a);
this._isDSTShifted=this.isValid()&&b4(fe._a,fd.toArray())>0
}else{this._isDSTShifted=false
}return this._isDSTShifted
}function dD(){return this.isValid()?!this._isUTC:false
}function bW(){return this.isValid()?this._isUTC:false
}function dJ(){return this.isValid()?this._isUTC&&this._offset===0:false
}var ab=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
var cC=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function dl(ff,fi){var fj=ff,fh=null,fe,fg,fd;
if(ah(ff)){fj={ms:ff._milliseconds,d:ff._days,M:ff._months}
}else{if(s(ff)){fj={};
if(fi){fj[fi]=ff
}else{fj.milliseconds=ff
}}else{if(!!(fh=ab.exec(ff))){fe=(fh[1]==="-")?-1:1;
fj={y:0,d:cW(fh[eB])*fe,h:cW(fh[eO])*fe,m:cW(fh[dO])*fe,s:cW(fh[am])*fe,ms:cW(eq(fh[bO]*1000))*fe}
}else{if(!!(fh=cC.exec(ff))){fe=(fh[1]==="-")?-1:1;
fj={y:e0(fh[2],fe),M:e0(fh[3],fe),w:e0(fh[4],fe),d:e0(fh[5],fe),h:e0(fh[6],fe),m:e0(fh[7],fe),s:e0(fh[8],fe)}
}else{if(fj==null){fj={}
}else{if(typeof fj==="object"&&("from" in fj||"to" in fj)){fd=bS(dI(fj.from),dI(fj.to));
fj={};
fj.ms=fd.milliseconds;
fj.M=fd.months
}}}}}}fg=new dU(fj);
if(ah(ff)&&ds(ff,"_locale")){fg._locale=ff._locale
}return fg
}dl.fn=dU.prototype;
dl.invalid=a0;
function e0(ff,fd){var fe=ff&&parseFloat(ff.replace(",","."));
return(isNaN(fe)?0:fe)*fd
}function dG(ff,fd){var fe={};
fe.months=fd.month()-ff.month()+(fd.year()-ff.year())*12;
if(ff.clone().add(fe.months,"M").isAfter(fd)){--fe.months
}fe.milliseconds=+fd-+(ff.clone().add(fe.months,"M"));
return fe
}function bS(ff,fd){var fe;
if(!(ff.isValid()&&fd.isValid())){return{milliseconds:0,months:0}
}fd=aG(fd,ff);
if(ff.isBefore(fd)){fe=dG(ff,fd)
}else{fe=dG(fd,ff);
fe.milliseconds=-fe.milliseconds;
fe.months=-fe.months
}return fe
}function a9(fe,fd){return function(fi,fh){var fg,ff;
if(fh!==null&&!isNaN(+fh)){eX(fd,"moment()."+fd+"(period, number) is deprecated. Please use moment()."+fd+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
ff=fi;
fi=fh;
fh=ff
}fi=typeof fi==="string"?+fi:fi;
fg=dl(fi,fh);
a3(this,fg,fe);
return this
}
}function a3(ff,fi,fh,fg){var fe=fi._milliseconds,fj=eq(fi._days),fd=eq(fi._months);
if(!ff.isValid()){return
}fg=fg==null?true:fg;
if(fd){aZ(ff,dH(ff,"Month")+fd*fh)
}if(fj){aQ(ff,"Date",dH(ff,"Date")+fj*fh)
}if(fe){ff._d.setTime(ff._d.valueOf()+fe*fh)
}if(fg){eK.updateOffset(ff,fj||fd)
}}var a2=a9(1,"add");
var aC=a9(-1,"subtract");
function ay(ff,fd){var fe=ff.diff(fd,"days",true);
return fe<-6?"sameElse":fe<-1?"lastWeek":fe<0?"lastDay":fe<1?"sameDay":fe<2?"nextDay":fe<7?"nextWeek":"sameElse"
}function cl(fi,fd){var fg=fi||dI(),ff=aG(fg,this).startOf("day"),fh=eK.calendarFormat(this,ff)||"sameElse";
var fe=fd&&(bb(fd[fh])?fd[fh].call(this,fg):fd[fh]);
return this.format(fe||this.localeData().calendar(fh,this,dI(fg)))
}function dy(){return new ey(this)
}function cJ(fe,fd){var ff=ch(fe)?fe:dI(fe);
if(!(this.isValid()&&ff.isValid())){return false
}fd=cV(fd)||"millisecond";
if(fd==="millisecond"){return this.valueOf()>ff.valueOf()
}else{return ff.valueOf()<this.clone().startOf(fd).valueOf()
}}function eV(fe,fd){var ff=ch(fe)?fe:dI(fe);
if(!(this.isValid()&&ff.isValid())){return false
}fd=cV(fd)||"millisecond";
if(fd==="millisecond"){return this.valueOf()<ff.valueOf()
}else{return this.clone().endOf(fd).valueOf()<ff.valueOf()
}}function ex(fi,fh,fd,fg){var ff=ch(fi)?fi:dI(fi),fe=ch(fh)?fh:dI(fh);
if(!(this.isValid()&&ff.isValid()&&fe.isValid())){return false
}fg=fg||"()";
return(fg[0]==="("?this.isAfter(ff,fd):!this.isBefore(ff,fd))&&(fg[1]===")"?this.isBefore(fe,fd):!this.isAfter(fe,fd))
}function cN(fe,fd){var fg=ch(fe)?fe:dI(fe),ff;
if(!(this.isValid()&&fg.isValid())){return false
}fd=cV(fd)||"millisecond";
if(fd==="millisecond"){return this.valueOf()===fg.valueOf()
}else{ff=fg.valueOf();
return this.clone().startOf(fd).valueOf()<=ff&&ff<=this.clone().endOf(fd).valueOf()
}}function eQ(fe,fd){return this.isSame(fe,fd)||this.isAfter(fe,fd)
}function eT(fe,fd){return this.isSame(fe,fd)||this.isBefore(fe,fd)
}function M(fg,ff,fd){var fi,fh,fe;
if(!this.isValid()){return NaN
}fi=aG(fg,this);
if(!fi.isValid()){return NaN
}fh=(fi.utcOffset()-this.utcOffset())*60000;
ff=cV(ff);
switch(ff){case"year":fe=et(this,fi)/12;
break;
case"month":fe=et(this,fi);
break;
case"quarter":fe=et(this,fi)/3;
break;
case"second":fe=(this-fi)/1000;
break;
case"minute":fe=(this-fi)/60000;
break;
case"hour":fe=(this-fi)/3600000;
break;
case"day":fe=(this-fi-fh)/86400000;
break;
case"week":fe=(this-fi-fh)/604800000;
break;
default:fe=this-fi
}return fd?fe:dp(fe)
}function et(fe,fd){var fi=((fd.year()-fe.year())*12)+(fd.month()-fe.month()),ff=fe.clone().add(fi,"months"),fg,fh;
if(fd-ff<0){fg=fe.clone().add(fi-1,"months");
fh=(fd-ff)/(ff-fg)
}else{fg=fe.clone().add(fi+1,"months");
fh=(fd-ff)/(fg-ff)
}return -(fi+fh)||0
}eK.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";
eK.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";
function d8(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}function da(ff){if(!this.isValid()){return null
}var fe=ff!==true;
var fd=fe?this.clone().utc():this;
if(fd.year()<0||fd.year()>9999){return ai(fd,fe?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ")
}if(bb(Date.prototype.toISOString)){if(fe){return this.toDate().toISOString()
}else{return new Date(this.valueOf()+this.utcOffset()*60*1000).toISOString().replace("Z",ai(fd,"Z"))
}}return ai(fd,fe?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")
}function aU(){if(!this.isValid()){return"moment.invalid(/* "+this._i+" */)"
}var ff="moment";
var fd="";
if(!this.isLocal()){ff=this.utcOffset()===0?"moment.utc":"moment.parseZone";
fd="Z"
}var fg="["+ff+'("]';
var fe=(0<=this.year()&&this.year()<=9999)?"YYYY":"YYYYYY";
var fi="-MM-DD[T]HH:mm:ss.SSS";
var fh=fd+'[")]';
return this.format(fg+fe+fi+fh)
}function dd(fe){if(!fe){fe=this.isUtc()?eK.defaultFormatUtc:eK.defaultFormat
}var fd=ai(this,fe);
return this.localeData().postformat(fd)
}function dX(fe,fd){if(this.isValid()&&((ch(fe)&&fe.isValid())||dI(fe).isValid())){return dl({to:this,from:fe}).locale(this.locale()).humanize(!fd)
}else{return this.localeData().invalidDate()
}}function dS(fd){return this.from(dI(),fd)
}function al(fe,fd){if(this.isValid()&&((ch(fe)&&fe.isValid())||dI(fe).isValid())){return dl({from:this,to:fe}).locale(this.locale()).humanize(!fd)
}else{return this.localeData().invalidDate()
}}function aT(fd){return this.to(dI(),fd)
}function fc(fe){var fd;
if(fe===undefined){return this._locale._abbr
}else{fd=S(fe);
if(fd!=null){this._locale=fd
}return this
}}var A=em("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(fd){if(fd===undefined){return this.localeData()
}else{return this.locale(fd)
}});
function dY(){return this._locale
}var cU=1000;
var ac=60*cU;
var fb=60*ac;
var aj=(365*400+97)*24*fb;
function ba(fd,fe){return(fd%fe+fe)%fe
}function a(ff,fd,fe){if(ff<100&&ff>=0){return new Date(ff+400,fd,fe)-aj
}else{return new Date(ff,fd,fe).valueOf()
}}function ed(ff,fd,fe){if(ff<100&&ff>=0){return Date.UTC(ff+400,fd,fe)-aj
}else{return Date.UTC(ff,fd,fe)
}}function cc(fd){var fe;
fd=cV(fd);
if(fd===undefined||fd==="millisecond"||!this.isValid()){return this
}var ff=this._isUTC?ed:a;
switch(fd){case"year":fe=ff(this.year(),0,1);
break;
case"quarter":fe=ff(this.year(),this.month()-this.month()%3,1);
break;
case"month":fe=ff(this.year(),this.month(),1);
break;
case"week":fe=ff(this.year(),this.month(),this.date()-this.weekday());
break;
case"isoWeek":fe=ff(this.year(),this.month(),this.date()-(this.isoWeekday()-1));
break;
case"day":case"date":fe=ff(this.year(),this.month(),this.date());
break;
case"hour":fe=this._d.valueOf();
fe-=ba(fe+(this._isUTC?0:this.utcOffset()*ac),fb);
break;
case"minute":fe=this._d.valueOf();
fe-=ba(fe,ac);
break;
case"second":fe=this._d.valueOf();
fe-=ba(fe,cU);
break
}this._d.setTime(fe);
eK.updateOffset(this,true);
return this
}function eE(fd){var fe;
fd=cV(fd);
if(fd===undefined||fd==="millisecond"||!this.isValid()){return this
}var ff=this._isUTC?ed:a;
switch(fd){case"year":fe=ff(this.year()+1,0,1)-1;
break;
case"quarter":fe=ff(this.year(),this.month()-this.month()%3+3,1)-1;
break;
case"month":fe=ff(this.year(),this.month()+1,1)-1;
break;
case"week":fe=ff(this.year(),this.month(),this.date()-this.weekday()+7)-1;
break;
case"isoWeek":fe=ff(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;
break;
case"day":case"date":fe=ff(this.year(),this.month(),this.date()+1)-1;
break;
case"hour":fe=this._d.valueOf();
fe+=fb-ba(fe+(this._isUTC?0:this.utcOffset()*ac),fb)-1;
break;
case"minute":fe=this._d.valueOf();
fe+=ac-ba(fe,ac)-1;
break;
case"second":fe=this._d.valueOf();
fe+=cU-ba(fe,cU)-1;
break
}this._d.setTime(fe);
eK.updateOffset(this,true);
return this
}function d1(){return this._d.valueOf()-((this._offset||0)*60000)
}function bE(){return Math.floor(this.valueOf()/1000)
}function c7(){return new Date(this.valueOf())
}function dQ(){var fd=this;
return[fd.year(),fd.month(),fd.date(),fd.hour(),fd.minute(),fd.second(),fd.millisecond()]
}function dZ(){var fd=this;
return{years:fd.year(),months:fd.month(),date:fd.date(),hours:fd.hours(),minutes:fd.minutes(),seconds:fd.seconds(),milliseconds:fd.milliseconds()}
}function de(){return this.isValid()?this.toISOString():null
}function q(){return ar(this)
}function dL(){return e5({},bg(this))
}function cF(){return bg(this).overflow
}function eW(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}
}cD(0,["gg",2],0,function(){return this.weekYear()%100
});
cD(0,["GG",2],0,function(){return this.isoWeekYear()%100
});
function Y(fe,fd){cD(0,[fe,fe.length],0,fd)
}Y("gggg","weekYear");
Y("ggggg","weekYear");
Y("GGGG","isoWeekYear");
Y("GGGGG","isoWeekYear");
ck("weekYear","gg");
ck("isoWeekYear","GG");
d2("weekYear",1);
d2("isoWeekYear",1);
bi("G",D);
bi("g",D);
bi("GG",av,aN);
bi("gg",av,aN);
bi("GGGG",at,aL);
bi("gggg",at,aL);
bi("GGGGG",aq,aK);
bi("ggggg",aq,aK);
Z(["gggg","ggggg","GGGG","GGGGG"],function(fd,fg,fe,ff){fg[ff.substr(0,2)]=cW(fd)
});
Z(["gg","GG"],function(fd,fg,fe,ff){fg[ff]=eK.parseTwoDigitYear(fd)
});
function bu(fd){return cy.call(this,fd,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)
}function d4(fd){return cy.call(this,fd,this.isoWeek(),this.isoWeekday(),1,4)
}function dg(){return G(this.year(),1,4)
}function K(){var fd=this.localeData()._week;
return G(this.year(),fd.dow,fd.doy)
}function cy(fd,fe,fg,fi,fh){var ff;
if(fd==null){return ez(this,fi,fh).year
}else{ff=G(fd,fi,fh);
if(fe>ff){fe=ff
}return bc.call(this,fd,fe,fg,fi,fh)
}}function bc(ff,fe,fh,fj,fi){var fg=bF(ff,fe,fh,fj,fi),fd=dB(fg.year,0,fg.dayOfYear);
this.year(fd.getUTCFullYear());
this.month(fd.getUTCMonth());
this.date(fd.getUTCDate());
return this
}cD("Q",0,"Qo","quarter");
ck("quarter","Q");
d2("quarter",7);
bi("Q",aO);
bZ("Q",function(fd,fe){fe[k]=(cW(fd)-1)*3
});
function b5(fd){return fd==null?Math.ceil((this.month()+1)/3):this.month((fd-1)*3+this.month()%3)
}cD("D",["DD",2],"Do","date");
ck("date","D");
d2("date",9);
bi("D",av);
bi("DD",av,aN);
bi("Do",function(fe,fd){return fe?(fd._dayOfMonthOrdinalParse||fd._ordinalParse):fd._dayOfMonthOrdinalParseLenient
});
bZ(["D","DD"],eB);
bZ("Do",function(fd,fe){fe[eB]=cW(fd.match(av)[0])
});
var cs=ej("Date",true);
cD("DDD",["DDDD",3],"DDDo","dayOfYear");
ck("dayOfYear","DDD");
d2("dayOfYear",4);
bi("DDD",au);
bi("DDDD",aM);
bZ(["DDD","DDDD"],function(fd,ff,fe){fe._dayOfYear=cW(fd)
});
function bk(fd){var fe=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/86400000)+1;
return fd==null?fe:this.add((fd-fe),"d")
}cD("m",["mm",2],0,"minute");
ck("minute","m");
d2("minute",14);
bi("m",av);
bi("mm",av,aN);
bZ(["m","mm"],dO);
var eU=ej("Minutes",false);
cD("s",["ss",2],0,"second");
ck("second","s");
d2("second",15);
bi("s",av);
bi("ss",av,aN);
bZ(["s","ss"],am);
var bA=ej("Seconds",false);
cD("S",0,0,function(){return ~~(this.millisecond()/100)
});
cD(0,["SS",2],0,function(){return ~~(this.millisecond()/10)
});
cD(0,["SSS",3],0,"millisecond");
cD(0,["SSSS",4],0,function(){return this.millisecond()*10
});
cD(0,["SSSSS",5],0,function(){return this.millisecond()*100
});
cD(0,["SSSSSS",6],0,function(){return this.millisecond()*1000
});
cD(0,["SSSSSSS",7],0,function(){return this.millisecond()*10000
});
cD(0,["SSSSSSSS",8],0,function(){return this.millisecond()*100000
});
cD(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1000000
});
ck("millisecond","ms");
d2("millisecond",16);
bi("S",au,aO);
bi("SS",au,aN);
bi("SSS",au,aM);
var bp;
for(bp="SSSS";
bp.length<=9;
bp+="S"){bi(bp,t)
}function db(fd,fe){fe[bO]=cW(("0."+fd)*1000)
}for(bp="S";
bp.length<=9;
bp+="S"){bZ(bp,db)
}var b3=ej("Milliseconds",false);
cD("z",0,0,"zoneAbbr");
cD("zz",0,0,"zoneName");
function eR(){return this._isUTC?"UTC":""
}function eo(){return this._isUTC?"Coordinated Universal Time":""
}var ci=ey.prototype;
ci.add=a2;
ci.calendar=cl;
ci.clone=dy;
ci.diff=M;
ci.endOf=eE;
ci.format=dd;
ci.from=dX;
ci.fromNow=dS;
ci.to=al;
ci.toNow=aT;
ci.get=aD;
ci.invalidAt=cF;
ci.isAfter=cJ;
ci.isBefore=eV;
ci.isBetween=ex;
ci.isSame=cN;
ci.isSameOrAfter=eQ;
ci.isSameOrBefore=eT;
ci.isValid=q;
ci.lang=A;
ci.locale=fc;
ci.localeData=dY;
ci.max=ev;
ci.min=cO;
ci.parsingFlags=dL;
ci.set=ax;
ci.startOf=cc;
ci.subtract=aC;
ci.toArray=dQ;
ci.toObject=dZ;
ci.toDate=c7;
ci.toISOString=da;
ci.inspect=aU;
ci.toJSON=de;
ci.toString=d8;
ci.unix=bE;
ci.valueOf=d1;
ci.creationData=eW;
ci.year=cM;
ci.isLeapYear=c2;
ci.weekYear=bu;
ci.isoWeekYear=d4;
ci.quarter=ci.quarters=b5;
ci.month=eN;
ci.daysInMonth=bR;
ci.week=ci.weeks=L;
ci.isoWeek=ci.isoWeeks=z;
ci.weeksInYear=K;
ci.isoWeeksInYear=dg;
ci.date=cs;
ci.day=ci.days=er;
ci.weekday=ag;
ci.isoWeekday=cz;
ci.dayOfYear=bk;
ci.hour=ci.hours=cv;
ci.minute=ci.minutes=eU;
ci.second=ci.seconds=bA;
ci.millisecond=ci.milliseconds=b3;
ci.utcOffset=dC;
ci.utc=a4;
ci.local=dz;
ci.parseZone=cd;
ci.hasAlignedHourOffset=aE;
ci.isDST=aR;
ci.isLocal=dD;
ci.isUtcOffset=bW;
ci.isUtc=dJ;
ci.isUTC=dJ;
ci.zoneAbbr=eR;
ci.zoneName=eo;
ci.dates=em("dates accessor is deprecated. Use date instead.",cs);
ci.months=em("months accessor is deprecated. Use month instead",eN);
ci.years=em("years accessor is deprecated. Use year instead",cM);
ci.zone=em("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",dx);
ci.isDSTShifted=em("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",c);
function di(fd){return dI(fd*1000)
}function cS(){return dI.apply(null,arguments).parseZone()
}function dE(fd){return fd
}var ea=cI.prototype;
ea.calendar=e;
ea.longDateFormat=cP;
ea.invalidDate=ew;
ea.ordinal=eI;
ea.preparse=dE;
ea.postformat=dE;
ea.relativeTime=V;
ea.pastFuture=d5;
ea.set=du;
ea.months=a5;
ea.monthsShort=bf;
ea.monthsParse=dh;
ea.monthsRegex=c5;
ea.monthsShortRegex=dr;
ea.week=bt;
ea.firstDayOfYear=df;
ea.firstDayOfWeek=ak;
ea.weekdays=aB;
ea.weekdaysMin=eL;
ea.weekdaysShort=O;
ea.weekdaysParse=bQ;
ea.weekdaysRegex=e1;
ea.weekdaysShortRegex=aJ;
ea.weekdaysMinRegex=F;
ea.isPM=cj;
ea.meridiem=aX;
function J(fh,fe,fg,fi){var fd=S();
var ff=cB().set(fi,fe);
return fd[fg](ff,fh)
}function a1(fh,fe,fg){if(s(fh)){fe=fh;
fh=undefined
}fh=fh||"";
if(fe!=null){return J(fh,fe,fg,"month")
}var ff;
var fd=[];
for(ff=0;
ff<12;
ff++){fd[ff]=J(fh,ff,fg,"month")
}return fd
}function e3(fi,fk,fg,fj){if(typeof fi==="boolean"){if(s(fk)){fg=fk;
fk=undefined
}fk=fk||""
}else{fk=fi;
fg=fk;
fi=false;
if(s(fk)){fg=fk;
fk=undefined
}fk=fk||""
}var fd=S(),fe=fi?fd._week.dow:0;
if(fg!=null){return J(fk,(fg+fe)%7,fj,"day")
}var fh;
var ff=[];
for(fh=0;
fh<7;
fh++){ff[fh]=J(fk,(fh+fe)%7,fj,"day")
}return ff
}function c0(fe,fd){return a1(fe,fd,"months")
}function cH(fe,fd){return a1(fe,fd,"monthsShort")
}function dc(fe,ff,fd){return e3(fe,ff,fd,"weekdays")
}function cR(fe,ff,fd){return e3(fe,ff,fd,"weekdaysShort")
}function aa(fe,ff,fd){return e3(fe,ff,fd,"weekdaysMin")
}C("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(ff){var fd=ff%10,fe=(cW(ff%100/10)===1)?"th":(fd===1)?"st":(fd===2)?"nd":(fd===3)?"rd":"th";
return ff+fe
}});
eK.lang=em("moment.lang is deprecated. Use moment.locale instead.",C);
eK.langData=em("moment.langData is deprecated. Use moment.localeData instead.",S);
var eG=Math.abs;
function br(){var fd=this._data;
this._milliseconds=eG(this._milliseconds);
this._days=eG(this._days);
this._months=eG(this._months);
fd.milliseconds=eG(fd.milliseconds);
fd.seconds=eG(fd.seconds);
fd.minutes=eG(fd.minutes);
fd.hours=eG(fd.hours);
fd.months=eG(fd.months);
fd.years=eG(fd.years);
return this
}function aI(fh,fe,ff,fg){var fd=dl(fe,ff);
fh._milliseconds+=fg*fd._milliseconds;
fh._days+=fg*fd._days;
fh._months+=fg*fd._months;
return fh._bubble()
}function bG(fd,fe){return aI(this,fd,fe,1)
}function dV(fd,fe){return aI(this,fd,fe,-1)
}function eM(fd){if(fd<0){return Math.floor(fd)
}else{return Math.ceil(fd)
}}function c1(){var ff=this._milliseconds;
var fl=this._days;
var fd=this._months;
var fh=this._data;
var fk,fg,fj,fi,fe;
if(!((ff>=0&&fl>=0&&fd>=0)||(ff<=0&&fl<=0&&fd<=0))){ff+=eM(e7(fd)+fl)*86400000;
fl=0;
fd=0
}fh.milliseconds=ff%1000;
fk=dp(ff/1000);
fh.seconds=fk%60;
fg=dp(fk/60);
fh.minutes=fg%60;
fj=dp(fg/60);
fh.hours=fj%24;
fl+=dp(fj/24);
fe=dp(g(fl));
fd+=fe;
fl-=eM(e7(fe));
fi=dp(fd/12);
fd%=12;
fh.days=fl;
fh.months=fd;
fh.years=fi;
return this
}function g(fd){return fd*4800/146097
}function e7(fd){return fd*146097/4800
}function eP(fe){if(!this.isValid()){return NaN
}var fg;
var fd;
var ff=this._milliseconds;
fe=cV(fe);
if(fe==="month"||fe==="quarter"||fe==="year"){fg=this._days+ff/86400000;
fd=this._months+g(fg);
switch(fe){case"month":return fd;
case"quarter":return fd/3;
case"year":return fd/12
}}else{fg=this._days+Math.round(e7(this._months));
switch(fe){case"week":return fg/7+ff/604800000;
case"day":return fg+ff/86400000;
case"hour":return fg*24+ff/3600000;
case"minute":return fg*1440+ff/60000;
case"second":return fg*86400+ff/1000;
case"millisecond":return Math.floor(fg*86400000)+ff;
default:throw new Error("Unknown unit "+fe)
}}}function c9(){if(!this.isValid()){return NaN
}return(this._milliseconds+this._days*86400000+(this._months%12)*2592000000+cW(this._months/12)*31536000000)
}function ec(fd){return function(){return this.as(fd)
}
}var e9=ec("ms");
var N=ec("s");
var dA=ec("m");
var v=ec("h");
var eh=ec("d");
var dW=ec("w");
var eb=ec("M");
var ep=ec("Q");
var bo=ec("y");
function e2(){return dl(this)
}function I(fd){fd=cV(fd);
return this.isValid()?this[fd+"s"]():NaN
}function cf(fd){return function(){return this.isValid()?this._data[fd]:NaN
}
}var d=cf("milliseconds");
var bl=cf("seconds");
var aH=cf("minutes");
var W=cf("hours");
var bj=cf("days");
var eS=cf("months");
var bP=cf("years");
function ek(){return dp(this.days()/7)
}var c6=Math.round;
var dN={ss:44,s:45,m:45,h:22,d:26,M:11};
function an(fe,fg,ff,fh,fd){return fd.relativeTime(fg||1,!!ff,fe,fh)
}function dP(fh,fe,fl){var ff=dl(fh).abs();
var fm=c6(ff.as("s"));
var fg=c6(ff.as("m"));
var fk=c6(ff.as("h"));
var fn=c6(ff.as("d"));
var fd=c6(ff.as("M"));
var fi=c6(ff.as("y"));
var fj=fm<=dN.ss&&["s",fm]||fm<dN.s&&["ss",fm]||fg<=1&&["m"]||fg<dN.m&&["mm",fg]||fk<=1&&["h"]||fk<dN.h&&["hh",fk]||fn<=1&&["d"]||fn<dN.d&&["dd",fn]||fd<=1&&["M"]||fd<dN.M&&["MM",fd]||fi<=1&&["y"]||["yy",fi];
fj[2]=fe;
fj[3]=+fh>0;
fj[4]=fl;
return an.apply(null,fj)
}function eC(fd){if(fd===undefined){return c6
}if(typeof(fd)==="function"){c6=fd;
return true
}return false
}function cr(fd,fe){if(dN[fd]===undefined){return false
}if(fe===undefined){return dN[fd]
}dN[fd]=fe;
if(fd==="s"){dN.ss=fe-1
}return true
}function b(ff){if(!this.isValid()){return this.localeData().invalidDate()
}var fd=this.localeData();
var fe=dP(this,!ff,fd);
if(ff){fe=fd.pastFuture(+this,fe)
}return fd.postformat(fe)
}var aY=Math.abs;
function bY(fd){return((fd>0)-(fd<0))||+fd
}function bN(){if(!this.isValid()){return this.localeData().invalidDate()
}var fr=aY(this._milliseconds)/1000;
var fs=aY(this._days);
var fg=aY(this._months);
var fk,fq,fn;
fk=dp(fr/60);
fq=dp(fk/60);
fr%=60;
fk%=60;
fn=dp(fg/12);
fg%=12;
var ff=fn;
var fo=fg;
var fe=fs;
var fm=fq;
var fj=fk;
var ft=fr?fr.toFixed(3).replace(/\.?0+$/,""):"";
var fp=this.asSeconds();
if(!fp){return"P0D"
}var fd=fp<0?"-":"";
var fh=bY(this._months)!==bY(fp)?"-":"";
var fi=bY(this._days)!==bY(fp)?"-":"";
var fl=bY(this._milliseconds)!==bY(fp)?"-":"";
return fd+"P"+(ff?fh+ff+"Y":"")+(fo?fh+fo+"M":"")+(fe?fi+fe+"D":"")+((fm||fj||ft)?"T":"")+(fm?fl+fm+"H":"")+(fj?fl+fj+"M":"")+(ft?fl+ft+"S":"")
}var d9=dU.prototype;
d9.isValid=u;
d9.abs=br;
d9.add=bG;
d9.subtract=dV;
d9.as=eP;
d9.asMilliseconds=e9;
d9.asSeconds=N;
d9.asMinutes=dA;
d9.asHours=v;
d9.asDays=eh;
d9.asWeeks=dW;
d9.asMonths=eb;
d9.asQuarters=ep;
d9.asYears=bo;
d9.valueOf=c9;
d9._bubble=c1;
d9.clone=e2;
d9.get=I;
d9.milliseconds=d;
d9.seconds=bl;
d9.minutes=aH;
d9.hours=W;
d9.days=bj;
d9.weeks=ek;
d9.months=eS;
d9.years=bP;
d9.humanize=b;
d9.toISOString=bN;
d9.toString=bN;
d9.toJSON=bN;
d9.locale=fc;
d9.localeData=dY;
d9.toIsoString=em("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",bN);
d9.lang=A;
cD("X",0,0,"unix");
cD("x",0,0,"valueOf");
bi("x",D);
bi("X",eY);
bZ("X",function(fd,ff,fe){fe._d=new Date(parseFloat(fd,10)*1000)
});
bZ("x",function(fd,ff,fe){fe._d=new Date(cW(fd))
});
eK.version="2.24.0";
aV(dI);
eK.fn=ci;
eK.min=p;
eK.max=bq;
eK.now=cE;
eK.utc=cB;
eK.unix=di;
eK.months=c0;
eK.isDate=eD;
eK.locale=C;
eK.invalid=P;
eK.duration=dl;
eK.isMoment=ch;
eK.weekdays=dc;
eK.parseZone=cS;
eK.localeData=S;
eK.isDuration=ah;
eK.monthsShort=cH;
eK.weekdaysMin=aa;
eK.defineLocale=cG;
eK.updateLocale=es;
eK.locales=b9;
eK.weekdaysShort=cR;
eK.normalizeUnits=cV;
eK.relativeTimeRounding=eC;
eK.relativeTimeThreshold=cr;
eK.calendarFormat=ay;
eK.prototype=ci;
eK.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};
return eK
})));
(function(a,b){if(typeof module==="object"&&module.exports){module.exports=b(require("moment"))
}else{if(typeof define==="function"&&define.amd){define(["moment"],b)
}else{b(a.moment)
}}}(this,function(G){var s="0.5.25",l={},B={},M={},D={},C;
if(!G||typeof G.version!=="string"){e("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/")
}var v=G.version.split("."),n=+v[0],c=+v[1];
if(n<2||(n===2&&c<6)){e("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+G.version+". See momentjs.com")
}function b(Q){if(Q>96){return Q-87
}else{if(Q>64){return Q-29
}}return Q-48
}function y(W){var U=0,S=W.split("."),X=S[0],R=S[1]||"",Y=1,V,T=0,Q=1;
if(W.charCodeAt(0)===45){U=1;
Q=-1
}for(U;
U<X.length;
U++){V=b(X.charCodeAt(U));
T=60*T+V
}for(U=0;
U<R.length;
U++){Y=Y/60;
V=b(R.charCodeAt(U));
T+=V*Y
}return T*Q
}function q(R){for(var Q=0;
Q<R.length;
Q++){R[Q]=y(R[Q])
}}function o(S,R){for(var Q=0;
Q<R;
Q++){S[Q]=Math.round((S[Q-1]||0)+(S[Q]*60000))
}S[R-1]=Infinity
}function F(S,T){var Q=[],R;
for(R=0;
R<T.length;
R++){Q[R]=S[T[R]]
}return Q
}function z(Q){var S=Q.split("|"),R=S[2].split(" "),U=S[3].split(""),T=S[4].split(" ");
q(R);
q(U);
q(T);
o(T,U.length);
return{name:S[0],abbrs:F(S[1].split(" "),U),offsets:F(R,U),untils:T,population:S[5]|0}
}function d(Q){if(Q){this._set(z(Q))
}}d.prototype={_set:function(Q){this.name=Q.name;
this.abbrs=Q.abbrs;
this.untils=Q.untils;
this.offsets=Q.offsets;
this.population=Q.population
},_index:function(R){var S=+R,T=this.untils,Q;
for(Q=0;
Q<T.length;
Q++){if(S<T[Q]){return Q
}}},parse:function(X){var W=+X,R=this.offsets,Q=this.untils,Y=Q.length-1,T,V,S,U;
for(U=0;
U<Y;
U++){T=R[U];
V=R[U+1];
S=R[U?U-1:U];
if(T<V&&K.moveAmbiguousForward){T=V
}else{if(T>S&&K.moveInvalidForward){T=S
}}if(W<Q[U]-(T*60000)){return R[U]
}}return R[Y]
},abbr:function(Q){return this.abbrs[this._index(Q)]
},offset:function(Q){e("zone.offset has been deprecated in favor of zone.utcOffset");
return this.offsets[this._index(Q)]
},utcOffset:function(Q){return this.offsets[this._index(Q)]
}};
function f(Q){var S=Q.toTimeString();
var R=S.match(/\([a-z ]+\)/i);
if(R&&R[0]){R=R[0].match(/[A-Z]/g);
R=R?R.join(""):undefined
}else{R=S.match(/[A-Z]{3,5}/g);
R=R?R[0]:undefined
}if(R==="GMT"){R=undefined
}this.at=+Q;
this.abbr=R;
this.offset=Q.getTimezoneOffset()
}function k(Q){this.zone=Q;
this.offsetScore=0;
this.abbrScore=0
}k.prototype.scoreOffsetAt=function(Q){this.offsetScore+=Math.abs(this.zone.utcOffset(Q.at)-Q.offset);
if(this.zone.abbr(Q.at).replace(/[^A-Z]/g,"")!==Q.abbr){this.abbrScore++
}};
function m(Q,S){var R,T;
while((T=((S.at-Q.at)/120000|0)*60000)){R=new f(new Date(Q.at+T));
if(R.offset===Q.offset){Q=R
}else{S=R
}}return Q
}function p(){var Q=new Date().getFullYear()-2,U=new f(new Date(Q,0,1)),T=[U],V,S,R;
for(R=1;
R<48;
R++){S=new f(new Date(Q,R,1));
if(S.offset!==U.offset){V=m(U,S);
T.push(V);
T.push(new f(new Date(V.at+60000)))
}U=S
}for(R=0;
R<4;
R++){T.push(new f(new Date(Q+R,0,1)));
T.push(new f(new Date(Q+R,6,1)))
}return T
}function x(R,Q){if(R.offsetScore!==Q.offsetScore){return R.offsetScore-Q.offsetScore
}if(R.abbrScore!==Q.abbrScore){return R.abbrScore-Q.abbrScore
}return Q.zone.population-R.zone.population
}function H(Q,S){var R,T;
q(S);
for(R=0;
R<S.length;
R++){T=S[R];
D[T]=D[T]||{};
D[T][Q]=true
}}function P(W){var Q=W.length,V={},S=[],T,R,U;
for(T=0;
T<Q;
T++){U=D[W[T].offset]||{};
for(R in U){if(U.hasOwnProperty(R)){V[R]=true
}}}for(T in V){if(V.hasOwnProperty(T)){S.push(M[T])
}}return S
}function O(){try{var V=Intl.DateTimeFormat().resolvedOptions().timeZone;
if(V&&V.length>3){var Q=M[J(V)];
if(Q){return Q
}e("Moment Timezone found "+V+" from the Intl api, but did not have that data loaded.")
}}catch(W){}var R=p(),U=R.length,Z=P(R),Y=[],X,T,S;
for(T=0;
T<Z.length;
T++){X=new k(E(Z[T]),U);
for(S=0;
S<U;
S++){X.scoreOffsetAt(R[S])
}Y.push(X)
}Y.sort(x);
return Y.length>0?Y[0].zone.name:undefined
}function t(Q){if(!C||Q){C=O()
}return C
}function J(Q){return(Q||"").toLowerCase().replace(/\//g,"_")
}function A(Q){var T,R,S,U;
if(typeof Q==="string"){Q=[Q]
}for(T=0;
T<Q.length;
T++){S=Q[T].split("|");
R=S[0];
U=J(R);
l[U]=Q[T];
M[U]=R;
H(U,S[2].split(" "))
}}function E(S,R){S=J(S);
var Q=l[S];
var T;
if(Q instanceof d){return Q
}if(typeof Q==="string"){Q=new d(Q);
l[S]=Q;
return Q
}if(B[S]&&R!==E&&(T=E(B[S],E))){Q=l[S]=new d();
Q._set(T);
Q.name=M[S];
return Q
}return null
}function I(){var R,Q=[];
for(R in M){if(M.hasOwnProperty(R)&&(l[R]||l[B[R]])&&M[R]){Q.push(M[R])
}}return Q.sort()
}function u(Q){var S,R,U,T;
if(typeof Q==="string"){Q=[Q]
}for(S=0;
S<Q.length;
S++){R=Q[S].split("|");
U=J(R[0]);
T=J(R[1]);
B[U]=T;
M[U]=R[0];
B[T]=U;
M[T]=R[1]
}}function j(Q){A(Q.zones);
u(Q.links);
K.dataVersion=Q.version
}function N(Q){if(!N.didShowError){N.didShowError=true;
e("moment.tz.zoneExists('"+Q+"') has been deprecated in favor of !moment.tz.zone('"+Q+"')")
}return !!E(Q)
}function r(Q){var R=(Q._f==="X"||Q._f==="x");
return !!(Q._a&&(Q._tzm===undefined)&&!R)
}function e(Q){if(typeof console!=="undefined"&&typeof console.error==="function"){console.error(Q)
}}function K(R){var U=Array.prototype.slice.call(arguments,0,-1),T=arguments[arguments.length-1],Q=E(T),S=G.utc.apply(null,U);
if(Q&&!G.isMoment(R)&&r(S)){S.add(Q.parse(S),"minutes")
}S.tz(T);
return S
}K.version=s;
K.dataVersion="";
K._zones=l;
K._links=B;
K._names=M;
K.add=A;
K.link=u;
K.load=j;
K.zone=E;
K.zoneExists=N;
K.guess=t;
K.names=I;
K.Zone=d;
K.unpack=z;
K.unpackBase60=y;
K.needsOffset=r;
K.moveInvalidForward=true;
K.moveAmbiguousForward=false;
var w=G.fn;
G.tz=K;
G.defaultZone=null;
G.updateOffset=function(R,S){var Q=G.defaultZone,U;
if(R._z===undefined){if(Q&&r(R)&&!R._isUTC){R._d=G.utc(R._a)._d;
R.utc().add(Q.parse(R),"minutes")
}R._z=Q
}if(R._z){U=R._z.utcOffset(R);
if(Math.abs(U)<16){U=U/60
}if(R.utcOffset!==undefined){var T=R._z;
R.utcOffset(-U,S);
R._z=T
}else{R.zone(U,S)
}}};
w.tz=function(Q,R){if(Q){if(typeof Q!=="string"){throw new Error("Time zone name must be a string, got "+Q+" ["+typeof Q+"]")
}this._z=E(Q);
if(this._z){G.updateOffset(this,R)
}else{e("Moment Timezone has no data for "+Q+". See http://momentjs.com/timezone/docs/#/data-loading/.")
}return this
}if(this._z){return this._z.name
}};
function L(Q){return function(){if(this._z){return this._z.abbr(this)
}return Q.call(this)
}
}function a(Q){return function(){this._z=null;
return Q.apply(this,arguments)
}
}function h(Q){return function(){if(arguments.length>0){this._z=null
}return Q.apply(this,arguments)
}
}w.zoneName=L(w.zoneName);
w.zoneAbbr=L(w.zoneAbbr);
w.utc=a(w.utc);
w.local=a(w.local);
w.utcOffset=h(w.utcOffset);
G.tz.setDefault=function(Q){if(n<2||(n===2&&c<9)){e("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+G.version+".")
}G.defaultZone=Q?E(Q):null;
return G
};
var g=G.momentProperties;
if(Object.prototype.toString.call(g)==="[object Array]"){g.push("_z");
g.push("_a")
}else{if(g){g._z=null
}}j({version:"2019a",zones:["Africa/Abidjan|GMT|0|0||48e5","Africa/Nairobi|EAT|-30|0||47e5","Africa/Algiers|CET|-10|0||26e5","Africa/Lagos|WAT|-10|0||17e6","Africa/Maputo|CAT|-20|0||26e5","Africa/Cairo|EET EEST|-20 -30|01010|1M2m0 gL0 e10 mn0|15e6","Africa/Casablanca|+00 +01|0 -10|01010101010101010101010101010101|1LHC0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00|32e5","Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|11e6","Africa/Johannesburg|SAST|-20|0||84e5","Africa/Khartoum|EAT CAT|-30 -20|01|1Usl0|51e5","Africa/Sao_Tome|GMT WAT|0 -10|010|1UQN0 2q00","Africa/Tripoli|EET|-20|0||11e5","Africa/Windhoek|CAT WAT|-20 -10|010101010|1LKo0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4","America/Adak|HST HDT|a0 90|01010101010101010101010|1Lzo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326","America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1Lzn0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4","America/Santo_Domingo|AST|40|0||29e5","America/Fortaleza|-03|30|0||34e5","America/Asuncion|-03 -04|30 40|01010101010101010101010|1LEP0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0|28e5","America/Panama|EST|50|0||15e5","America/Mexico_City|CST CDT|60 50|01010101010101010101010|1LKw0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|20e6","America/Managua|CST|60|0||22e5","America/La_Paz|-04|40|0||19e5","America/Lima|-05|50|0||11e6","America/Denver|MST MDT|70 60|01010101010101010101010|1Lzl0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5","America/Campo_Grande|-03 -04|30 40|01010101010101010101010|1LqP0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0|77e4","America/Cancun|CST CDT EST|60 50 50|0102|1LKw0 1lb0 Dd0|63e4","America/Caracas|-0430 -04|4u 40|01|1QMT0|29e5","America/Chicago|CST CDT|60 50|01010101010101010101010|1Lzk0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5","America/Chihuahua|MST MDT|70 60|01010101010101010101010|1LKx0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|81e4","America/Phoenix|MST|70|0||42e5","America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1Lzm0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6","America/New_York|EST EDT|50 40|01010101010101010101010|1Lzj0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6","America/Fort_Nelson|PST PDT MST|80 70 70|0102|1Lzm0 1zb0 Op0|39e2","America/Halifax|AST ADT|40 30|01010101010101010101010|1Lzi0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4","America/Godthab|-03 -02|30 20|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|17e3","America/Grand_Turk|EST EDT AST|50 40 40|0101210101010101010|1Lzj0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2","America/Havana|CST CDT|50 40|01010101010101010101010|1Lzh0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5","America/Metlakatla|PST AKST AKDT|80 90 80|012121201212121212121|1PAa0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 uM0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Miquelon|-03 -02|30 20|01010101010101010101010|1Lzh0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2","America/Montevideo|-02 -03|20 30|0101|1Lzg0 1o10 11z0|17e5","America/Noronha|-02|20|0||30e2","America/Port-au-Prince|EST EDT|50 40|010101010101010101010|1Lzj0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","Antarctica/Palmer|-03 -04|30 40|01010|1LSP0 Rd0 46n0 Ap0|40","America/Santiago|-03 -04|30 40|010101010101010101010|1LSP0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0|62e5","America/Sao_Paulo|-02 -03|20 30|01010101010101010101010|1LqO0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0|20e6","Atlantic/Azores|-01 +00|10 0|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|25e4","America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1Lzhu 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","Antarctica/Casey|+08 +11|-80 -b0|010|1RWg0 3m10|10","Asia/Bangkok|+07|-70|0||15e6","Pacific/Port_Moresby|+10|-a0|0||25e4","Pacific/Guadalcanal|+11|-b0|0||11e4","Asia/Tashkent|+05|-50|0||23e5","Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1LKe0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00|14e5","Asia/Baghdad|+03|-30|0||66e5","Antarctica/Troll|+00 +02|0 -20|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|40","Asia/Dhaka|+06|-60|0||16e6","Asia/Amman|EET EEST|-20 -30|01010101010101010101010|1LGK0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|25e5","Asia/Kamchatka|+12|-c0|0||18e4","Asia/Baku|+04 +05|-40 -50|01010|1LHA0 1o00 11A0 1o00|27e5","Asia/Barnaul|+07 +06|-70 -60|010|1N7v0 3rd0","Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1LHy0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0|22e5","Asia/Kuala_Lumpur|+08|-80|0||71e5","Asia/Kolkata|IST|-5u|0||15e6","Asia/Chita|+10 +08 +09|-a0 -80 -90|012|1N7s0 3re0|33e4","Asia/Ulaanbaatar|+08 +09|-80 -90|01010|1O8G0 1cJ0 1cP0 1cJ0|12e5","Asia/Shanghai|CST|-80|0||23e6","Asia/Colombo|+0530|-5u|0||22e5","Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1LGK0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|26e5","Asia/Dili|+09|-90|0||19e4","Asia/Dubai|+04|-40|0||39e5","Asia/Famagusta|EET EEST +03|-20 -30 -30|0101012010101010101010|1LHB0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00","Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1LGK0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0|18e5","Asia/Hong_Kong|HKT|-80|0||73e5","Asia/Hovd|+07 +08|-70 -80|01010|1O8H0 1cJ0 1cP0 1cJ0|81e3","Asia/Irkutsk|+09 +08|-90 -80|01|1N7t0|60e4","Europe/Istanbul|EET EEST +03|-20 -30 -30|0101012|1LI10 1nA0 11A0 1tA0 U00 15w0|13e6","Asia/Jakarta|WIB|-70|0||31e6","Asia/Jayapura|WIT|-90|0||26e4","Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1LGM0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0|81e4","Asia/Kabul|+0430|-4u|0||46e5","Asia/Karachi|PKT|-50|0||24e6","Asia/Kathmandu|+0545|-5J|0||12e5","Asia/Yakutsk|+10 +09|-a0 -90|01|1N7s0|28e4","Asia/Krasnoyarsk|+08 +07|-80 -70|01|1N7u0|10e5","Asia/Magadan|+12 +10 +11|-c0 -a0 -b0|012|1N7q0 3Cq0|95e3","Asia/Makassar|WITA|-80|0||15e5","Asia/Manila|PST|-80|0||24e6","Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|35e5","Asia/Novosibirsk|+07 +06|-70 -60|010|1N7v0 4eN0|15e5","Asia/Omsk|+07 +06|-70 -60|01|1N7v0|12e5","Asia/Pyongyang|KST KST|-90 -8u|010|1P4D0 6BA0|29e5","Asia/Qyzylorda|+06 +05|-60 -50|01|1Xei0|73e4","Asia/Rangoon|+0630|-6u|0||48e5","Asia/Sakhalin|+11 +10|-b0 -a0|010|1N7r0 3rd0|58e4","Asia/Seoul|KST|-90|0||23e6","Asia/Srednekolymsk|+12 +11|-c0 -b0|01|1N7q0|35e2","Asia/Tehran|+0330 +0430|-3u -4u|01010101010101010101010|1LEku 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6","Asia/Tokyo|JST|-90|0||38e6","Asia/Tomsk|+07 +06|-70 -60|010|1N7v0 3Qp0|10e5","Asia/Vladivostok|+11 +10|-b0 -a0|01|1N7r0|60e4","Asia/Yekaterinburg|+06 +05|-60 -50|01|1N7w0|14e5","Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|27e5","Atlantic/Cape_Verde|-01|10|0||50e4","Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1LKg0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0|40e5","Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1LKgu 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0|11e5","Australia/Brisbane|AEST|-a0|0||20e5","Australia/Darwin|ACST|-9u|0||12e4","Australia/Eucla|+0845|-8J|0||368","Australia/Lord_Howe|+11 +1030|-b0 -au|01010101010101010101010|1LKf0 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu|347","Australia/Perth|AWST|-80|0||18e5","Pacific/Easter|-05 -06|50 60|010101010101010101010|1LSP0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0|30e2","Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|12e5","Etc/GMT-1|+01|-10|0|","Pacific/Fakaofo|+13|-d0|0||483","Pacific/Kiritimati|+14|-e0|0||51e2","Etc/GMT-2|+02|-20|0|","Pacific/Tahiti|-10|a0|0||18e4","Pacific/Niue|-11|b0|0||12e2","Etc/GMT+12|-12|c0|0|","Pacific/Galapagos|-06|60|0||25e3","Etc/GMT+7|-07|70|0|","Pacific/Pitcairn|-08|80|0||56","Pacific/Gambier|-09|90|0||125","Etc/UTC|UTC|0|0|","Europe/Ulyanovsk|+04 +03|-40 -30|010|1N7y0 3rd0|13e5","Europe/London|GMT BST|0 -10|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|10e6","Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1LHA0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|67e4","Europe/Kaliningrad|+03 EET|-30 -20|01|1N7z0|44e4","Europe/Kirov|+04 +03|-40 -30|01|1N7y0|48e4","Europe/Moscow|MSK MSK|-40 -30|01|1N7y0|16e6","Europe/Saratov|+04 +03|-40 -30|010|1N7y0 5810","Europe/Simferopol|EET MSK MSK|-20 -40 -30|012|1LHA0 1nW0|33e4","Europe/Volgograd|+04 +03|-40 -30|010|1N7y0 9Jd0|10e5","Pacific/Honolulu|HST|a0|0||37e4","MET|MET MEST|-10 -20|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00","Pacific/Chatham|+1345 +1245|-dJ -cJ|01010101010101010101010|1LKe0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00|600","Pacific/Apia|+14 +13|-e0 -d0|01010101010101010101010|1LKe0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00|37e3","Pacific/Bougainville|+10 +11|-a0 -b0|01|1NwE0|18e4","Pacific/Fiji|+13 +12|-d0 -c0|01010101010101010101010|1Lfp0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0|88e4","Pacific/Guam|ChST|-a0|0||17e4","Pacific/Marquesas|-0930|9u|0||86e2","Pacific/Pago_Pago|SST|b0|0||37e2","Pacific/Norfolk|+1130 +11|-bu -b0|01|1PoCu|25e4","Pacific/Tongatapu|+13 +14|-d0 -e0|010|1S4d0 s00|75e3"],links:["Africa/Abidjan|Africa/Accra","Africa/Abidjan|Africa/Bamako","Africa/Abidjan|Africa/Banjul","Africa/Abidjan|Africa/Bissau","Africa/Abidjan|Africa/Conakry","Africa/Abidjan|Africa/Dakar","Africa/Abidjan|Africa/Freetown","Africa/Abidjan|Africa/Lome","Africa/Abidjan|Africa/Monrovia","Africa/Abidjan|Africa/Nouakchott","Africa/Abidjan|Africa/Ouagadougou","Africa/Abidjan|Africa/Timbuktu","Africa/Abidjan|America/Danmarkshavn","Africa/Abidjan|Atlantic/Reykjavik","Africa/Abidjan|Atlantic/St_Helena","Africa/Abidjan|Etc/GMT","Africa/Abidjan|Etc/GMT+0","Africa/Abidjan|Etc/GMT-0","Africa/Abidjan|Etc/GMT0","Africa/Abidjan|Etc/Greenwich","Africa/Abidjan|GMT","Africa/Abidjan|GMT+0","Africa/Abidjan|GMT-0","Africa/Abidjan|GMT0","Africa/Abidjan|Greenwich","Africa/Abidjan|Iceland","Africa/Algiers|Africa/Tunis","Africa/Cairo|Egypt","Africa/Casablanca|Africa/El_Aaiun","Africa/Johannesburg|Africa/Maseru","Africa/Johannesburg|Africa/Mbabane","Africa/Lagos|Africa/Bangui","Africa/Lagos|Africa/Brazzaville","Africa/Lagos|Africa/Douala","Africa/Lagos|Africa/Kinshasa","Africa/Lagos|Africa/Libreville","Africa/Lagos|Africa/Luanda","Africa/Lagos|Africa/Malabo","Africa/Lagos|Africa/Ndjamena","Africa/Lagos|Africa/Niamey","Africa/Lagos|Africa/Porto-Novo","Africa/Maputo|Africa/Blantyre","Africa/Maputo|Africa/Bujumbura","Africa/Maputo|Africa/Gaborone","Africa/Maputo|Africa/Harare","Africa/Maputo|Africa/Kigali","Africa/Maputo|Africa/Lubumbashi","Africa/Maputo|Africa/Lusaka","Africa/Nairobi|Africa/Addis_Ababa","Africa/Nairobi|Africa/Asmara","Africa/Nairobi|Africa/Asmera","Africa/Nairobi|Africa/Dar_es_Salaam","Africa/Nairobi|Africa/Djibouti","Africa/Nairobi|Africa/Juba","Africa/Nairobi|Africa/Kampala","Africa/Nairobi|Africa/Mogadishu","Africa/Nairobi|Indian/Antananarivo","Africa/Nairobi|Indian/Comoro","Africa/Nairobi|Indian/Mayotte","Africa/Tripoli|Libya","America/Adak|America/Atka","America/Adak|US/Aleutian","America/Anchorage|America/Juneau","America/Anchorage|America/Nome","America/Anchorage|America/Sitka","America/Anchorage|America/Yakutat","America/Anchorage|US/Alaska","America/Campo_Grande|America/Cuiaba","America/Chicago|America/Indiana/Knox","America/Chicago|America/Indiana/Tell_City","America/Chicago|America/Knox_IN","America/Chicago|America/Matamoros","America/Chicago|America/Menominee","America/Chicago|America/North_Dakota/Beulah","America/Chicago|America/North_Dakota/Center","America/Chicago|America/North_Dakota/New_Salem","America/Chicago|America/Rainy_River","America/Chicago|America/Rankin_Inlet","America/Chicago|America/Resolute","America/Chicago|America/Winnipeg","America/Chicago|CST6CDT","America/Chicago|Canada/Central","America/Chicago|US/Central","America/Chicago|US/Indiana-Starke","America/Chihuahua|America/Mazatlan","America/Chihuahua|Mexico/BajaSur","America/Denver|America/Boise","America/Denver|America/Cambridge_Bay","America/Denver|America/Edmonton","America/Denver|America/Inuvik","America/Denver|America/Ojinaga","America/Denver|America/Shiprock","America/Denver|America/Yellowknife","America/Denver|Canada/Mountain","America/Denver|MST7MDT","America/Denver|Navajo","America/Denver|US/Mountain","America/Fortaleza|America/Araguaina","America/Fortaleza|America/Argentina/Buenos_Aires","America/Fortaleza|America/Argentina/Catamarca","America/Fortaleza|America/Argentina/ComodRivadavia","America/Fortaleza|America/Argentina/Cordoba","America/Fortaleza|America/Argentina/Jujuy","America/Fortaleza|America/Argentina/La_Rioja","America/Fortaleza|America/Argentina/Mendoza","America/Fortaleza|America/Argentina/Rio_Gallegos","America/Fortaleza|America/Argentina/Salta","America/Fortaleza|America/Argentina/San_Juan","America/Fortaleza|America/Argentina/San_Luis","America/Fortaleza|America/Argentina/Tucuman","America/Fortaleza|America/Argentina/Ushuaia","America/Fortaleza|America/Bahia","America/Fortaleza|America/Belem","America/Fortaleza|America/Buenos_Aires","America/Fortaleza|America/Catamarca","America/Fortaleza|America/Cayenne","America/Fortaleza|America/Cordoba","America/Fortaleza|America/Jujuy","America/Fortaleza|America/Maceio","America/Fortaleza|America/Mendoza","America/Fortaleza|America/Paramaribo","America/Fortaleza|America/Recife","America/Fortaleza|America/Rosario","America/Fortaleza|America/Santarem","America/Fortaleza|Antarctica/Rothera","America/Fortaleza|Atlantic/Stanley","America/Fortaleza|Etc/GMT+3","America/Halifax|America/Glace_Bay","America/Halifax|America/Goose_Bay","America/Halifax|America/Moncton","America/Halifax|America/Thule","America/Halifax|Atlantic/Bermuda","America/Halifax|Canada/Atlantic","America/Havana|Cuba","America/La_Paz|America/Boa_Vista","America/La_Paz|America/Guyana","America/La_Paz|America/Manaus","America/La_Paz|America/Porto_Velho","America/La_Paz|Brazil/West","America/La_Paz|Etc/GMT+4","America/Lima|America/Bogota","America/Lima|America/Eirunepe","America/Lima|America/Guayaquil","America/Lima|America/Porto_Acre","America/Lima|America/Rio_Branco","America/Lima|Brazil/Acre","America/Lima|Etc/GMT+5","America/Los_Angeles|America/Dawson","America/Los_Angeles|America/Ensenada","America/Los_Angeles|America/Santa_Isabel","America/Los_Angeles|America/Tijuana","America/Los_Angeles|America/Vancouver","America/Los_Angeles|America/Whitehorse","America/Los_Angeles|Canada/Pacific","America/Los_Angeles|Canada/Yukon","America/Los_Angeles|Mexico/BajaNorte","America/Los_Angeles|PST8PDT","America/Los_Angeles|US/Pacific","America/Los_Angeles|US/Pacific-New","America/Managua|America/Belize","America/Managua|America/Costa_Rica","America/Managua|America/El_Salvador","America/Managua|America/Guatemala","America/Managua|America/Regina","America/Managua|America/Swift_Current","America/Managua|America/Tegucigalpa","America/Managua|Canada/Saskatchewan","America/Mexico_City|America/Bahia_Banderas","America/Mexico_City|America/Merida","America/Mexico_City|America/Monterrey","America/Mexico_City|Mexico/General","America/New_York|America/Detroit","America/New_York|America/Fort_Wayne","America/New_York|America/Indiana/Indianapolis","America/New_York|America/Indiana/Marengo","America/New_York|America/Indiana/Petersburg","America/New_York|America/Indiana/Vevay","America/New_York|America/Indiana/Vincennes","America/New_York|America/Indiana/Winamac","America/New_York|America/Indianapolis","America/New_York|America/Iqaluit","America/New_York|America/Kentucky/Louisville","America/New_York|America/Kentucky/Monticello","America/New_York|America/Louisville","America/New_York|America/Montreal","America/New_York|America/Nassau","America/New_York|America/Nipigon","America/New_York|America/Pangnirtung","America/New_York|America/Thunder_Bay","America/New_York|America/Toronto","America/New_York|Canada/Eastern","America/New_York|EST5EDT","America/New_York|US/East-Indiana","America/New_York|US/Eastern","America/New_York|US/Michigan","America/Noronha|Atlantic/South_Georgia","America/Noronha|Brazil/DeNoronha","America/Noronha|Etc/GMT+2","America/Panama|America/Atikokan","America/Panama|America/Cayman","America/Panama|America/Coral_Harbour","America/Panama|America/Jamaica","America/Panama|EST","America/Panama|Jamaica","America/Phoenix|America/Creston","America/Phoenix|America/Dawson_Creek","America/Phoenix|America/Hermosillo","America/Phoenix|MST","America/Phoenix|US/Arizona","America/Santiago|Chile/Continental","America/Santo_Domingo|America/Anguilla","America/Santo_Domingo|America/Antigua","America/Santo_Domingo|America/Aruba","America/Santo_Domingo|America/Barbados","America/Santo_Domingo|America/Blanc-Sablon","America/Santo_Domingo|America/Curacao","America/Santo_Domingo|America/Dominica","America/Santo_Domingo|America/Grenada","America/Santo_Domingo|America/Guadeloupe","America/Santo_Domingo|America/Kralendijk","America/Santo_Domingo|America/Lower_Princes","America/Santo_Domingo|America/Marigot","America/Santo_Domingo|America/Martinique","America/Santo_Domingo|America/Montserrat","America/Santo_Domingo|America/Port_of_Spain","America/Santo_Domingo|America/Puerto_Rico","America/Santo_Domingo|America/St_Barthelemy","America/Santo_Domingo|America/St_Kitts","America/Santo_Domingo|America/St_Lucia","America/Santo_Domingo|America/St_Thomas","America/Santo_Domingo|America/St_Vincent","America/Santo_Domingo|America/Tortola","America/Santo_Domingo|America/Virgin","America/Sao_Paulo|Brazil/East","America/St_Johns|Canada/Newfoundland","Antarctica/Palmer|America/Punta_Arenas","Asia/Baghdad|Antarctica/Syowa","Asia/Baghdad|Asia/Aden","Asia/Baghdad|Asia/Bahrain","Asia/Baghdad|Asia/Kuwait","Asia/Baghdad|Asia/Qatar","Asia/Baghdad|Asia/Riyadh","Asia/Baghdad|Etc/GMT-3","Asia/Baghdad|Europe/Minsk","Asia/Bangkok|Antarctica/Davis","Asia/Bangkok|Asia/Ho_Chi_Minh","Asia/Bangkok|Asia/Novokuznetsk","Asia/Bangkok|Asia/Phnom_Penh","Asia/Bangkok|Asia/Saigon","Asia/Bangkok|Asia/Vientiane","Asia/Bangkok|Etc/GMT-7","Asia/Bangkok|Indian/Christmas","Asia/Dhaka|Antarctica/Vostok","Asia/Dhaka|Asia/Almaty","Asia/Dhaka|Asia/Bishkek","Asia/Dhaka|Asia/Dacca","Asia/Dhaka|Asia/Kashgar","Asia/Dhaka|Asia/Qostanay","Asia/Dhaka|Asia/Thimbu","Asia/Dhaka|Asia/Thimphu","Asia/Dhaka|Asia/Urumqi","Asia/Dhaka|Etc/GMT-6","Asia/Dhaka|Indian/Chagos","Asia/Dili|Etc/GMT-9","Asia/Dili|Pacific/Palau","Asia/Dubai|Asia/Muscat","Asia/Dubai|Asia/Tbilisi","Asia/Dubai|Asia/Yerevan","Asia/Dubai|Etc/GMT-4","Asia/Dubai|Europe/Samara","Asia/Dubai|Indian/Mahe","Asia/Dubai|Indian/Mauritius","Asia/Dubai|Indian/Reunion","Asia/Gaza|Asia/Hebron","Asia/Hong_Kong|Hongkong","Asia/Jakarta|Asia/Pontianak","Asia/Jerusalem|Asia/Tel_Aviv","Asia/Jerusalem|Israel","Asia/Kamchatka|Asia/Anadyr","Asia/Kamchatka|Etc/GMT-12","Asia/Kamchatka|Kwajalein","Asia/Kamchatka|Pacific/Funafuti","Asia/Kamchatka|Pacific/Kwajalein","Asia/Kamchatka|Pacific/Majuro","Asia/Kamchatka|Pacific/Nauru","Asia/Kamchatka|Pacific/Tarawa","Asia/Kamchatka|Pacific/Wake","Asia/Kamchatka|Pacific/Wallis","Asia/Kathmandu|Asia/Katmandu","Asia/Kolkata|Asia/Calcutta","Asia/Kuala_Lumpur|Asia/Brunei","Asia/Kuala_Lumpur|Asia/Kuching","Asia/Kuala_Lumpur|Asia/Singapore","Asia/Kuala_Lumpur|Etc/GMT-8","Asia/Kuala_Lumpur|Singapore","Asia/Makassar|Asia/Ujung_Pandang","Asia/Rangoon|Asia/Yangon","Asia/Rangoon|Indian/Cocos","Asia/Seoul|ROK","Asia/Shanghai|Asia/Chongqing","Asia/Shanghai|Asia/Chungking","Asia/Shanghai|Asia/Harbin","Asia/Shanghai|Asia/Macao","Asia/Shanghai|Asia/Macau","Asia/Shanghai|Asia/Taipei","Asia/Shanghai|PRC","Asia/Shanghai|ROC","Asia/Tashkent|Antarctica/Mawson","Asia/Tashkent|Asia/Aqtau","Asia/Tashkent|Asia/Aqtobe","Asia/Tashkent|Asia/Ashgabat","Asia/Tashkent|Asia/Ashkhabad","Asia/Tashkent|Asia/Atyrau","Asia/Tashkent|Asia/Dushanbe","Asia/Tashkent|Asia/Oral","Asia/Tashkent|Asia/Samarkand","Asia/Tashkent|Etc/GMT-5","Asia/Tashkent|Indian/Kerguelen","Asia/Tashkent|Indian/Maldives","Asia/Tehran|Iran","Asia/Tokyo|Japan","Asia/Ulaanbaatar|Asia/Choibalsan","Asia/Ulaanbaatar|Asia/Ulan_Bator","Asia/Vladivostok|Asia/Ust-Nera","Asia/Yakutsk|Asia/Khandyga","Atlantic/Azores|America/Scoresbysund","Atlantic/Cape_Verde|Etc/GMT+1","Australia/Adelaide|Australia/Broken_Hill","Australia/Adelaide|Australia/South","Australia/Adelaide|Australia/Yancowinna","Australia/Brisbane|Australia/Lindeman","Australia/Brisbane|Australia/Queensland","Australia/Darwin|Australia/North","Australia/Lord_Howe|Australia/LHI","Australia/Perth|Australia/West","Australia/Sydney|Australia/ACT","Australia/Sydney|Australia/Canberra","Australia/Sydney|Australia/Currie","Australia/Sydney|Australia/Hobart","Australia/Sydney|Australia/Melbourne","Australia/Sydney|Australia/NSW","Australia/Sydney|Australia/Tasmania","Australia/Sydney|Australia/Victoria","Etc/UTC|Etc/UCT","Etc/UTC|Etc/Universal","Etc/UTC|Etc/Zulu","Etc/UTC|UCT","Etc/UTC|UTC","Etc/UTC|Universal","Etc/UTC|Zulu","Europe/Athens|Asia/Nicosia","Europe/Athens|EET","Europe/Athens|Europe/Bucharest","Europe/Athens|Europe/Helsinki","Europe/Athens|Europe/Kiev","Europe/Athens|Europe/Mariehamn","Europe/Athens|Europe/Nicosia","Europe/Athens|Europe/Riga","Europe/Athens|Europe/Sofia","Europe/Athens|Europe/Tallinn","Europe/Athens|Europe/Uzhgorod","Europe/Athens|Europe/Vilnius","Europe/Athens|Europe/Zaporozhye","Europe/Chisinau|Europe/Tiraspol","Europe/Dublin|Eire","Europe/Istanbul|Asia/Istanbul","Europe/Istanbul|Turkey","Europe/Lisbon|Atlantic/Canary","Europe/Lisbon|Atlantic/Faeroe","Europe/Lisbon|Atlantic/Faroe","Europe/Lisbon|Atlantic/Madeira","Europe/Lisbon|Portugal","Europe/Lisbon|WET","Europe/London|Europe/Belfast","Europe/London|Europe/Guernsey","Europe/London|Europe/Isle_of_Man","Europe/London|Europe/Jersey","Europe/London|GB","Europe/London|GB-Eire","Europe/Moscow|W-SU","Europe/Paris|Africa/Ceuta","Europe/Paris|Arctic/Longyearbyen","Europe/Paris|Atlantic/Jan_Mayen","Europe/Paris|CET","Europe/Paris|Europe/Amsterdam","Europe/Paris|Europe/Andorra","Europe/Paris|Europe/Belgrade","Europe/Paris|Europe/Berlin","Europe/Paris|Europe/Bratislava","Europe/Paris|Europe/Brussels","Europe/Paris|Europe/Budapest","Europe/Paris|Europe/Busingen","Europe/Paris|Europe/Copenhagen","Europe/Paris|Europe/Gibraltar","Europe/Paris|Europe/Ljubljana","Europe/Paris|Europe/Luxembourg","Europe/Paris|Europe/Madrid","Europe/Paris|Europe/Malta","Europe/Paris|Europe/Monaco","Europe/Paris|Europe/Oslo","Europe/Paris|Europe/Podgorica","Europe/Paris|Europe/Prague","Europe/Paris|Europe/Rome","Europe/Paris|Europe/San_Marino","Europe/Paris|Europe/Sarajevo","Europe/Paris|Europe/Skopje","Europe/Paris|Europe/Stockholm","Europe/Paris|Europe/Tirane","Europe/Paris|Europe/Vaduz","Europe/Paris|Europe/Vatican","Europe/Paris|Europe/Vienna","Europe/Paris|Europe/Warsaw","Europe/Paris|Europe/Zagreb","Europe/Paris|Europe/Zurich","Europe/Paris|Poland","Europe/Ulyanovsk|Europe/Astrakhan","Pacific/Auckland|Antarctica/McMurdo","Pacific/Auckland|Antarctica/South_Pole","Pacific/Auckland|NZ","Pacific/Chatham|NZ-CHAT","Pacific/Easter|Chile/EasterIsland","Pacific/Fakaofo|Etc/GMT-13","Pacific/Fakaofo|Pacific/Enderbury","Pacific/Galapagos|Etc/GMT+6","Pacific/Gambier|Etc/GMT+9","Pacific/Guadalcanal|Antarctica/Macquarie","Pacific/Guadalcanal|Etc/GMT-11","Pacific/Guadalcanal|Pacific/Efate","Pacific/Guadalcanal|Pacific/Kosrae","Pacific/Guadalcanal|Pacific/Noumea","Pacific/Guadalcanal|Pacific/Pohnpei","Pacific/Guadalcanal|Pacific/Ponape","Pacific/Guam|Pacific/Saipan","Pacific/Honolulu|HST","Pacific/Honolulu|Pacific/Johnston","Pacific/Honolulu|US/Hawaii","Pacific/Kiritimati|Etc/GMT-14","Pacific/Niue|Etc/GMT+11","Pacific/Pago_Pago|Pacific/Midway","Pacific/Pago_Pago|Pacific/Samoa","Pacific/Pago_Pago|US/Samoa","Pacific/Pitcairn|Etc/GMT+8","Pacific/Port_Moresby|Antarctica/DumontDUrville","Pacific/Port_Moresby|Etc/GMT-10","Pacific/Port_Moresby|Pacific/Chuuk","Pacific/Port_Moresby|Pacific/Truk","Pacific/Port_Moresby|Pacific/Yap","Pacific/Tahiti|Etc/GMT+10","Pacific/Tahiti|Pacific/Rarotonga"]});
return G
}));
(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={i:e,l:false,exports:{}};
a[e].call(d.exports,d,d.exports,c);
d.l=true;
return d.exports
}c.m=a;
c.c=b;
c.d=function(e,f,d){if(!c.o(e,f)){Object.defineProperty(e,f,{enumerable:true,get:d})
}};
c.r=function(d){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})
}Object.defineProperty(d,"__esModule",{value:true})
};
c.t=function(f,g){if(g&1){f=c(f)
}if(g&8){return f
}if((g&4)&&typeof f==="object"&&f&&f.__esModule){return f
}var e=Object.create(null);
c.r(e);
Object.defineProperty(e,"default",{enumerable:true,value:f});
if(g&2&&typeof f!="string"){for(var d in f){c.d(e,d,function(h){return f[h]
}.bind(null,d))
}}return e
};
c.n=function(e){var d=e&&e.__esModule?function f(){return e["default"]
}:function g(){return e
};
c.d(d,"a",d);
return d
};
c.o=function(d,e){return Object.prototype.hasOwnProperty.call(d,e)
};
c.p="";
return c(c.s=0)
})([(function(b,a,c){b.exports=c(1)
}),(function(e,g,h){h.r(g);
var d=h(2);
var b=h.n(d);
var f=h(3);
var a=h.n(f);
var c=h(4);
new c.BrowserNotification(".browser-notification")
}),(function(b,a){window.Bootstrap=function(){return{jQuery:jQuery.noConflict()}
}()
}),(function(a,d){function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var f=Bootstrap.jQuery,g={ie:"MSIE ",edge:"rv:",ff:"Firefox/",safari:"Safari/",chrome:"Chrome/"},h={android:"Android",iphone:"iPhone OS"};
var b=function(){function k(){e(this,k);
this.setUpUserAgentString();
this.setUpUserAgent();
this.useUserAgent()
}c(k,[{key:"setUpUserAgentString",value:function o(){this.userAgentString=navigator.userAgent
}},{key:"setUpUserAgent",value:function n(){for(var s in g){var q=this.constructor.fetchBrowserVersion(this.userAgentString,g[s]);
if(q){this.userAgent=s+"-"+q
}}for(var p in h){var r=this.constructor.fetchBrowserVersion(this.userAgentString,h[p]);
if(r){this.userAgent+=" "+p+"-"+r
}}}},{key:"useUserAgent",value:function l(){f("html").addClass(this.userAgent)
}}],[{key:"fetchBrowserVersion",value:function m(r,s){var q=r.split(s);
var p;
if(q.length===2){p=parseInt(q[1],10)
}return p
}}]);
return k
}();
new b()
}),(function(c,j,b){b.r(j);
b.d(j,"BrowserNotification",function(){return f
});
var a=b(5);
function g(o,p){if(!(o instanceof p)){throw new TypeError("Cannot call a class as a function")
}}function n(r,p){for(var o=0;
o<p.length;
o++){var q=p[o];
q.enumerable=q.enumerable||false;
q.configurable=true;
if("value" in q){q.writable=true
}Object.defineProperty(r,q.key,q)
}}function e(q,o,p){if(o){n(q.prototype,o)
}if(p){n(q,p)
}return q
}var h=Bootstrap.jQuery,m={browserNotification:".browser-notification",closeButton:".close-browser-notification",oldIE:".ie7-9, .ie-10"},d={hidden:"hidden"},k={oldBrowserNotification:"oldBrowserNotification"},l={path:"/",expires:{days:1}};
var f=function(){function p(s){g(this,p);
this.$el=h(s);
this.$closeButton=this.$el.find(m.closeButton);
this.showBrowserNotification();
this.bindUiEvents()
}e(p,[{key:"bindUiEvents",value:function q(){var s=this;
this.$closeButton.on("click",function(){return s.closeBanner()
})
}},{key:"showBrowserNotification",value:function o(){if(h("html").is(m.oldIE)){this.$el.removeClass(d.hidden);
a.TealiumUtils.trackEvent({event_category:"content",event_action:"popup",event_content:"Browser update banner"})
}}},{key:"closeBanner",value:function r(){if(!this.$el.hasClass(d.hidden)){this.$el.addClass(d.hidden);
a.TealiumUtils.trackEvent({event_category:"content",event_action:"onsite",event_content:"Browser update banner close"})
}}}]);
return p
}()
}),(function(d,e,f){f.r(e);
f.d(e,"TealiumUtils",function(){return g
});
var g={trackEvent:function c(h){var j=window.TMS||null;
if(h&&j){j.trackEvent(h)
}},trackView:function b(h){var j=window.TMS||null;
if(h&&j){j.trackView(h)
}},trackEventWithInheritance:function a(j){var h={};
if(HSBC_utils.isTealiumReady){h={site_section:utag_data.site_section?utag_data.site_section:"",page_type:utag_data.page_type?utag_data.page_type:"",page_customer_group:utag_data.page_customer_group?utag_data.page_customer_group:"",page_category:utag_data.page_category?utag_data.page_category:"",page_subcategory:utag_data.page_subcategory?utag_data.page_subcategory:"",page_business_line:utag_data.page_business_line?utag_data.page_business_line:"",page_security_level:utag_data.page_security_level?utag_data.page_security_level:""}
}this.trackEvent(Bootstrap.jQuery.extend(h,j))
}}
})]);
(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={i:e,l:false,exports:{}};
a[e].call(d.exports,d,d.exports,c);
d.l=true;
return d.exports
}c.m=a;
c.c=b;
c.d=function(e,f,d){if(!c.o(e,f)){Object.defineProperty(e,f,{enumerable:true,get:d})
}};
c.r=function(d){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})
}Object.defineProperty(d,"__esModule",{value:true})
};
c.t=function(f,g){if(g&1){f=c(f)
}if(g&8){return f
}if((g&4)&&typeof f==="object"&&f&&f.__esModule){return f
}var e=Object.create(null);
c.r(e);
Object.defineProperty(e,"default",{enumerable:true,value:f});
if(g&2&&typeof f!="string"){for(var d in f){c.d(e,d,function(h){return f[h]
}.bind(null,d))
}}return e
};
c.n=function(e){var d=e&&e.__esModule?function f(){return e["default"]
}:function g(){return e
};
c.d(d,"a",d);
return d
};
c.o=function(d,e){return Object.prototype.hasOwnProperty.call(d,e)
};
c.p="";
return c(c.s=224)
})({14:(function(d,e,h){h.r(e);
h.d(e,"DataKeeper",function(){return a
});
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function c(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}var f=Bootstrap.jQuery;
var a=function(){function j(o){g(this,j);
this.lang=j.setUpLang();
this.settings=f.extend({name:"HSBC_"+this.lang+"_"+this.constructor.name,cookieSettings:{path:"/",expires:{days:365}},session:false,forceCookie:false,sessionCookieSettings:{path:"/"}},o);
this.localStorage=window.localStorage;
this.sessionStorage=window.sessionStorage;
this.hasLocalStorage=typeof this.localStorage!=="undefined";
this.hasSessionStorage=typeof this.sessionStorage!=="undefined";
this.setCookie=HSBC_utils.setCookie;
this.getCookie=HSBC_utils.getCookie
}c(j,[{key:"save",value:function m(o){var p=o||{};
if(this.settings.session){if(this.hasSessionStorage&&!this.settings.forceCookie){this.sessionStorage[this.settings.name]=JSON.stringify(p)
}else{this.setCookie(this.settings.name,JSON.stringify(p),this.settings.sessionCookieSettings)
}}else{if(this.hasLocalStorage&&!this.settings.forceCookie){this.localStorage[this.settings.name]=JSON.stringify(p)
}else{this.setCookie(this.settings.name,JSON.stringify(p),this.settings.cookieSettings)
}}}},{key:"read",value:function n(){if(this.settings.session){if(this.hasSessionStorage&&!this.settings.forceCookie){return j.parseData(this.sessionStorage[this.settings.name])
}return j.parseData(this.getCookie(this.settings.name))
}else{if(this.hasLocalStorage&&!this.settings.forceCookie){return j.parseData(this.localStorage[this.settings.name])
}return j.parseData(this.getCookie(this.settings.name))
}}}],[{key:"parseData",value:function l(o){return o?JSON.parse(o):{}
}},{key:"setUpLang",value:function k(){return f("html").attr("lang")
}}]);
return j
}()
}),224:(function(b,a,c){c(225);
c(226);
c(227);
c(228);
c(239);
c(240);
c(241);
c(242);
c(243);
c(244);
c(5);
b.exports=c(245)
}),225:(function(e,b){function h(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function d(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var g=Bootstrap.jQuery,c={fieldsForValidation:"[data-validation-message]"};
var f=function(){function k(){h(this,k)
}d(k,null,[{key:"init",value:function l(){this.bindUIEvents()
}},{key:"bindUIEvents",value:function j(){var m=g(c.fieldsForValidation);
m.on("invalid",function(o){var n=g(o.target).data("validation-message");
if(n!==""){o.target.setCustomValidity(n)
}}).on("input",function(o){var n=g(o.target).data("validation-message");
o.target.setCustomValidity("");
if(o.target.validity.valid!==undefined&&!o.target.validity.valid&&n!==""){o.target.setCustomValidity(n)
}});
g(window).on("load",function(){g.each(m,function(n,o){o.setCustomValidity("")
})
})
}}]);
return k
}();
g(document).ready(function(){return f.init()
})
}),226:(function(b,a){(function(e){var c=["Edit","Design","Developer","Preview"],d=typeof parent.Granite!=="undefined"&&typeof parent.Granite.author!=="undefined"&&typeof parent.Granite.author.layerManager!=="undefined"&&c.indexOf(parent.Granite.author.layerManager.getCurrentLayer())!==-1;
if(e("body").data("exit-intent-confirm")&&!d){if("onbeforeunload" in window){e(window).on("beforeunload",function(){return" "
})
}else{if("onunload" in window){e(window).on("onunload",function(){return" "
})
}else{e(document).on("pagehide",function(){return" "
})
}}}})(Bootstrap.jQuery)
}),227:(function(b,a){(function(){window.GPWS=window.GPWS||{}
})()
}),228:(function(b,c,g){g.r(c);
g.d(c,"HSBC_utils",function(){return h
});
var a=g(229);
var f=g(236);
var e=g(238);
function d(k){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){j=function j(l){return typeof l
}
}else{j=function j(l){return l&&typeof Symbol==="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l
}
}return j(k)
}var h=function(V){var P=[];
var ag=new e["default"]();
var I=new f["default"](P);
var ao=new a["default"](I,ag);
var L={modules:P,configuration:ag,components:I,globalComponents:ao};
var z=[],ah=["a","button","input",'[tabindex="0"]'],p={small:480,medium:960,smallModern:768,mediumModern:1024,largeModern:1366,xlargeModern:1920},Q={ENTER:13,SPACE:32,UP:38,DOWN:40,LEFT:37,RIGHT:39,ESC:27,TAB:9,SHIFT:16},aj={mobile:7,tablet:9,desktop:10,smallModern:7,mediumModern:9,largeModern:10,xlargeModern:12,xxlargeModern:14},m={globalSettings:"global-settings"},ab={SECOND_MILLISECONDS:1000,MINUTE_MILLISECONDS:60*1000,HOUR_MILLISECONDS:60*60*1000,DAY_MILLISECONDS:24*60*60*1000},W=navigator.userAgent,k=W.toLowerCase().indexOf("firefox")>-1,H=W.includes("MSIE")||navigator.appVersion.indexOf("Trident/")>0,ak=W.includes("Chrome"),r=W.includes("Safari")&&!ak&&!/(CriOS|FxiOS|OPiOS|mercury|UCBrowser|QQBrowser)/i.test(W),al=Number(W.split("OS ").slice(1).join().slice(0,3).replace("_","."))<6,ac=/iphone|ipad|ipod/i.test(W),R=/android/i.test(W),E=/Windows Phone/i.test(W),o=V("body").is('[class*="globalSmart"]'),D=typeof utag_data!=="undefined",G=M(),u=F(),j=t(),aa=C(),U=null,y=200,T=/iphone|android|webos|ipad|ipod|blackberry|iemobile|opera mini|Windows Phone/i.test(W),ad=V("html").attr("dir")=="rtl",l=V("body").hasClass("landingPageTemplate");
function B(){var ar=V("a[href^=tel]");
if(!T){ar.addClass("no-link").attr("role","presentation").click(function(at){at.preventDefault()
})
}}function Y(ar){P.push(ar);
if(ar.reinitIfParent){z.push(ar)
}}function S(ar){P.splice(ar,1)
}function n(ar,au){var at;
if(X()){at=V(au).find(ar.selector)
}else{at=V(au.querySelectorAll(ar.selector))
}at.each(function(){if(!this.gpwsInitialized){N(ar,this)
}})
}function v(ar,au){var at={name:ar.name,selector:ar.selector,instance:au};
I.addInstanceToComponentsMap(at)
}function N(ar,at){at.gpwsInitialized=true;
var au=ar.init(at,L);
v(ar,au)
}function ai(av){var au=av||document.body;
for(var at=0;
at<P.length;
at++){var ar=P[at];
if(av&&V(au).is(ar.selector)){N(ar,au)
}else{n(ar,au)
}}B()
}function x(au){do{au=au.parentNode
}while(au&&!au.gpwsInitialized);
if(!au){return
}for(var at=0;
at<z.length;
at++){var ar=z[at];
if(V(au).is(ar.selector)){ar.reinit(au);
return
}}}function an(){return ag.isEditMode()
}function A(){var ar=["Preview"];
return typeof parent.Granite!=="undefined"&&typeof parent.Granite.author!=="undefined"&&typeof parent.Granite.author.layerManager!=="undefined"&&ar.indexOf(parent.Granite.author.layerManager.getCurrentLayer())!==-1
}function Z(){return ag.isPatternLab()
}function X(){return document.addEventListener?false:true
}function ae(av){var au=P.length,at=null,ar=0;
if(av.prevLayer!==av.layer){if(av.layer==="Edit"){at="switchToEditHandler"
}else{if(av.layer==="Preview"){at="switchToPreviewHandler"
}}for(ar;
ar<au;
ar++){if(P[ar][at]){P[ar][at]()
}}}}function M(){return{mobile:t()==="mobile",tablet:t()==="tablet",desktop:t()==="desktop"}
}function F(){return{smallModern:C()==="smallModern",mediumModern:C()==="mediumModern",largeModern:C()==="largeModern",xlargeModern:C()==="xlargeModern",xxlargeModern:C()==="xxlargeModern"}
}function t(){var at="mobile",ar=window.innerWidth;
if(ar<p.small){at="mobile"
}else{if(ar>=p.medium){at="desktop"
}else{at="tablet"
}}return at
}function C(){var ar=window.innerWidth;
if(ar<p.smallModern){return"smallModern"
}else{if(ar<p.mediumModern){return"mediumModern"
}else{if(ar<p.largeModern){return"largeModern"
}else{if(ar<p.xlargeModern){return"xlargeModern"
}}}}return"xxlargeModern"
}function am(){return aj[t()]
}function O(){return aj[C()]
}function K(){var at=200,au=1,ar=300;
if(U){return
}U=setInterval(av,ar);
function av(){ai();
if(au===at){clearInterval(U);
U=null
}au++
}}function J(ar,aB,aw){var aA=aw||{};
if(!aA.domain){var ax=V(document.body).data(m.globalSettings);
if(ax&&ax.cookieDomain){aA.domain=ax.cookieDomain
}}var ay,aC,az,at,av;
aA=aA||{};
ay=aA?aA.expires:null;
if(d(ay)==="object"){var au=0;
if(ay.milliseconds){au=ay.milliseconds
}if(ay.seconds){au+=ay.seconds*ab.SECOND_MILLISECONDS
}if(ay.minutes){au+=ay.minutes*ab.MINUTE_MILLISECONDS
}if(ay.hours){au+=ay.hours*ab.HOUR_MILLISECONDS
}if(ay.days){au+=ay.days*ab.DAY_MILLISECONDS
}if(ay.months){au+=ay.months*Math.floor(30.5*ab.DAY_MILLISECONDS)
}if(ay.years){au+=ay.years*Math.floor(365.25*ab.DAY_MILLISECONDS)
}ay=au
}if(typeof ay==="number"){if(ay!==0){av=new Date();
av.setTime(av.getTime()+ay);
aA.expires=av;
ay=aA.expires
}else{aA.expires=false
}}if(ay&&ay.toUTCString){aA.expires=ay.toUTCString()
}aB=encodeURIComponent(aB);
aC=ar+"="+aB;
for(az in aA){if(aA.hasOwnProperty(az)&&aA[az]){at=aA[az];
if(at!==false){aC+="; "+az;
if(at!==true){aC+="="+at
}}}}return aC
}function w(ar,au,at){document.cookie=J(ar,au,at)
}function af(ar,au,at){w(ar,"",{domain:at,path:au,expires:"Thu, 01 Jan 1970 00:00:00 UTC"})
}function s(ar){var au=new RegExp("(?:^|; )"+ar+"=([^;]*)"),at=document.cookie.match(au);
return at?decodeURIComponent(at[1]):undefined
}function ap(at,ar){var aw,ax,av,au;
ar=ar||location.href;
at=at||"";
at=at.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
aw=new RegExp("[\\?&]"+at+"=([^&#]*)");
ax=aw.exec(ar);
av=ax==null?null:ax[1];
au=av!=null?decodeURIComponent(av.replace(/\+/g,"%20")):null;
return au
}function q(at){var ar=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;
at.animate({height:0},y,function(){if(ar){at.remove()
}})
}function aq(at){var av=V(":tabbable"),aw=av.length,ar=av.index(at),au=ar+1;
if(au<aw){av.get(au).focus()
}}V(window).on("resize",function(){var at=t();
var ar=C();
if(at!==j){j=at;
window.HSBC_utils.matchMedia=M()
}if(ar!==aa){aa=ar;
window.HSBC_utils.matchMediaModern=F()
}});
return{deregisterComponent:S,init:ai,initSegmentationFixInterval:K,isEditMode:an,isPreviewMode:A,isPatternLab:Z,registerComponent:Y,reinitializeParent:x,isIE8orLower:X,dispatchLayerSwitchEvent:ae,prepareCookieString:J,setCookie:w,getCookie:s,deleteCookie:af,keyCodes:Q,matchMedia:G,matchMediaModern:u,getMatchMediaUnit:am,getMatchMediaUnitModern:O,focusables:ah,getUrlParam:ap,collapseElement:q,isFirefox:k,isInternetExplorer:H,isChrome:ak,isSafari:r,iOSLowerVersion:al,isMobileiOS:ac,isMobileAndroid:R,isMobileWindowsPhone:E,isSmartTemplate:o,isTealiumReady:D,isRTL:ad,isCLP:l,focusOnTheNextTabbableElement:aq}
}(jQuery);
window.HSBC_utils=h
}),229:(function(c,j,b){b.r(j);
b.d(j,"default",function(){return l
});
var g=b(230);
var h=b(231);
var d=b(232);
var k=b(233);
var a=b(235);
function f(n,o){if(!(n instanceof o)){throw new TypeError("Cannot call a class as a function")
}}function m(q,o){for(var n=0;
n<o.length;
n++){var p=o[n];
p.enumerable=p.enumerable||false;
p.configurable=true;
if("value" in p){p.writable=true
}Object.defineProperty(q,p.key,p)
}}function e(p,n,o){if(n){m(p.prototype,n)
}if(o){m(p,o)
}return p
}var l=function(){function p(t,u){f(this,p);
this.components=t;
this.configuration=u;
this.hashParser=this.getHashParser();
this.scrollService=this.getScrollService();
this.headerController=this.getHeaderController();
this.anchorScrollController=this.getAnchorScrollController();
if(this.headerController.havePinnedBanner){this.windowScrollMechanism=this.getWindowScrollMechanism()
}}e(p,[{key:"getHeaderController",value:function r(){return new a["default"](this)
}},{key:"getWindowScrollMechanism",value:function q(){return new k["default"](this)
}},{key:"getScrollService",value:function n(){return new g["default"](this)
}},{key:"getHashParser",value:function s(){return new h["default"](this)
}},{key:"getAnchorScrollController",value:function o(){return new d["default"](this)
}}]);
return p
}()
}),230:(function(b,f,a){a.r(f);
a.d(f,"default",function(){return g
});
function d(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var e=jQuery;
var h={mainContainer:".O-SMARTSPCGEN-DEV",horizontalTabs:{componentSelector:".generic-tabs",tabsContainer:".tabs-container",tabTitlePrefix:"#tab-title-",mobileTitleSuffix:"-mobile-anchor",contentTab:"tab-panel"},smartTabs:{componentSelector:".O-HRZTAB-RW-RBWM",tabContent:".tab-widget-tab-content",tabsWrapper:".tab-wrapper",container:".tabsHorizontal"},accordion:{component:".O-ACCRD-RW-RBWM",contentPanel:".exp-content",expanderContainer:".expander",dropdown:".dropdown",tabPanelPrefixToRemove:"tab-panel-"}};
var g=function(){function q(z){d(this,q);
this.globalComponents=z
}c(q,[{key:"calculateTopOffset",value:function m(A){var z=e(A);
if(z.length){return z.offset().top
}return 0
}},{key:"scrollToPosition",value:function o(z){if(z&&targetScrollPosition>-1){e(document).scrollTop(targetScrollPosition)
}}},{key:"scrollToHtmlNode",value:function k(A){var z=this.calculateTopOffset(A);
if(z){var B=z-this.globalComponents.headerController.calculateHeaderHeight(A);
if(B>-1){e(document).scrollTop(B)
}}}},{key:"scrollToAccordionOrExpander",value:function y(z,A){var C=z.is(":visible")?z:e("".concat(h.accordion.component," ").concat(A));
var B=C.siblings(h.accordion.expanderContainer);
B=B.length?B:z.siblings().children(h.accordion.expanderContainer);
if(B.length){this.scrollToAccordionScrollLinkInHeader(B)
}else{this.scrollToAccordionScrollLinkInContent(C,z)
}}},{key:"scrollToAccordionScrollLinkInHeader",value:function v(z){var A=z.children(h.accordion.dropdown);
this.openAccordionAndScroll(A)
}},{key:"scrollToAccordionScrollLinkInContent",value:function s(B,A){var C=this;
var z=B.closest(h.accordion.expanderContainer).children(h.accordion.dropdown);
this.openAccordionAndScroll(z);
setTimeout(function(){e("html, body").animate({scrollTop:A.offset().top-C.globalComponents.headerController.calculateHeaderHeight(),easing:"easeOut"},500)
},500)
}},{key:"openAccordionAndScroll",value:function r(z){if(z.attr("aria-expanded")==="false"){z.click()
}else{this.scrollToHtmlNode(z)
}}},{key:"scrollToSmartTabs",value:function n(B,G){var E=B.closest(h.smartTabs.tabsWrapper);
var A=E;
var C;
var F=B.closest(h.smartTabs.tabContent);
if(F){var H=F.get(0).id;
C="#".concat(H);
if(this.isTargetInsideTabContent(F,G)){A=F.find(G)
}}var D=B.closest(h.smartTabs.componentSelector)[0];
var z=this.globalComponents.components.findComponentByHTMLNode(D);
z&&z.instance&&z.instance.activeTab(C);
this.scrollToHtmlNode(A)
}},{key:"isTargetInsideTabContent",value:function x(A,z){return A.find(z).length
}},{key:"openMobileTabsHorizontal",value:function l(z){var D,C;
if(z.hasClass("tab-title-item")){D=z.children("a");
C=e("#".concat(z.children("a").attr("aria-controls")))
}else{D=e("".concat(h.horizontalTabs.tabTitlePrefix).concat(z.first().attr("id")).concat(h.horizontalTabs.mobileTitleSuffix)).children("a");
C=e("#panel-".concat(z.first().attr("id")).concat(h.horizontalTabs.mobileTitleSuffix))
}var B=D.closest(h.horizontalTabs.componentSelector)[0];
var A=this.globalComponents.components.findComponentByHTMLNode(B);
var E=D.parent();
A.instance.cleanElements();
A.instance.setSelectedElement(E,C);
return D
}},{key:"openTabsHorizontal",value:function u(B){var C=e("".concat(h.horizontalTabs.tabTitlePrefix).concat(B.first().attr("id"))).children("a");
var A=C.closest(h.horizontalTabs.componentSelector)[0];
var z=this.globalComponents.components.findComponentByHTMLNode(A);
z&&z.instance.togglePanel(C)
}},{key:"scrollToHorizontalTabs",value:function w(z){var A=this.openMobileTabsHorizontal(z);
this.openTabsHorizontal(z);
this.scrollToHtmlNode(A.closest(h.mainContainer))
}},{key:"isExpanderOrAccordion",value:function t(z){return z.siblings(h.accordion.expanderContainer).length||z.siblings().children(h.accordion.expanderContainer).length
}},{key:"scroll",value:function p(F){var z=e(F);
if(this.globalComponents.headerController.checkMobileHeaderIsExpanded()){this.globalComponents.headerController.closeMobileHeader()
}var C=z.closest(h.horizontalTabs.tabsContainer).length;
var A=z.closest(h.smartTabs.tabsWrapper).length;
var H=z.closest(h.accordion.expanderContainer).length;
var B=this.isExpanderOrAccordion(z);
if(F.indexOf(h.accordion.tabPanelPrefixToRemove)>-1){var G=F.replace(h.accordion.tabPanelPrefixToRemove,"");
var D=G!=="#"&&e(G);
var E=D.length&&this.isExpanderOrAccordion(D);
if(E&&D.is(":visible")){this.scrollToAccordionOrExpander(D,G);
return
}}if(C){return this.scrollToHorizontalTabs(z,F)
}else{if(H||B){this.scrollToAccordionOrExpander(z,F)
}else{if(A){return this.scrollToSmartTabs(z,F)
}else{return this.scrollToHtmlNode(z,F)
}}}}}]);
return q
}()
}),231:(function(c,d,g){g.r(d);
g.d(d,"default",function(){return h
});
function f(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function b(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var e=jQuery;
var h=function(){b(n,[{key:"createEmptyHashObject",value:function l(){return{anchorString:""}
}}]);
function n(){f(this,n);
this.anchorHashSymbol="#";
this.urlSeparator="?";
this.parsedParams=this.createEmptyHashObject();
this.hashParser=this.createCallbackHandler()
}b(n,[{key:"parseParamsFromString",value:function k(o){return o
}},{key:"parseHashFromLocationHash",value:function j(s){var r=s.substring(s.indexOf(this.anchorHashSymbol),s.length);
var p=r.indexOf(this.urlSeparator);
var o;
var q="";
if(p>=0){o=r.substring(0,r.indexOf(this.urlSeparator));
q=r.substring(r.indexOf(this.urlSeparator),r.length)
}else{o=r
}this.parsedParams.anchorHash=o;
this.parsedParams.paramsString=q;
return{anchorString:o,paramsString:q}
}},{key:"createCallbackHandler",value:function m(){var o=this;
e(window).on("hashchange",function(q){q.preventDefault();
var s=window.location.hash;
var p=o.parseHashFromLocationHash(s),r=p.paramsString;
o.parseParamsFromString(r);
e(window).trigger("HashParser:hash_parsed")
})
}}]);
return n
}()
}),232:(function(c,d,g){g.r(d);
g.d(d,"default",function(){return h
});
function f(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function b(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var e=jQuery;
var h=function(){function m(n){f(this,m);
this.hashParser=n.hashParser;
this.scrollService=n.scrollService;
this.bindScrollToHashChange();
this.bindScroolToPageLoad()
}b(m,[{key:"anchorAction",value:function k(n){this.scrollService.scroll(n);
if(this.hashParser.parsedParams.hash!==n){history.replaceState(null,null,n)
}}},{key:"bindScroolToPageLoad",value:function j(){var n=this;
e(document).on("DOMContentLoaded",function(r){r.preventDefault();
var s=window.location.hash;
var q=n.hashParser.parseHashFromLocationHash(s),o=q.anchorString;
if(o&&o.length){var p=e(".pws-header").length===0;
if(p){n.scrollService.scroll(o)
}else{setTimeout(function(){n.scrollService.scroll(o)
},100)
}}})
}},{key:"bindScrollToHashChange",value:function l(){var n=this;
e(window).on("HashParser:hash_parsed",function(){var o=n.hashParser.parsedParams.anchorHash;
if(o){n.scrollService.scroll(o)
}})
}}]);
return m
}()
}),233:(function(d,j,c){c.r(j);
c.d(j,"APP_SCROLL_DOWN_EVENT",function(){return k
});
c.d(j,"APP_SCROLL_UP_EVENT",function(){return m
});
c.d(j,"default",function(){return n
});
var l=c(234);
function g(p,q){if(!(p instanceof q)){throw new TypeError("Cannot call a class as a function")
}}function o(s,q){for(var p=0;
p<q.length;
p++){var r=q[p];
r.enumerable=r.enumerable||false;
r.configurable=true;
if("value" in r){r.writable=true
}Object.defineProperty(s,r.key,r)
}}function e(r,p,q){if(p){o(r.prototype,p)
}if(q){o(r,q)
}return r
}var h=jQuery;
var b="isScrolledDown";
var a="isScrolledUp";
var k="appScroll.isScrolledDown";
var m="appScroll.isScrolledUp";
var f=2000;
var n=function(){function t(v){var w=this;
g(this,t);
this.headerController=v.headerController;
this.scrollMemoryModel=new l["default"]();
this.$document=h(document);
this.lastEvent="none";
this.dynamicBannerIsActivated=false;
this.bindScrollForBanner();
if(this.headerController.dynamicBannerShouldBeActivated()){this.dynamicBannerIsActivated=true;
setTimeout(function(){w.scrolledUpEvent()
},f)
}}e(t,[{key:"scrolledUpEvent",value:function s(){this.lastEvent=a;
h(document).trigger(m)
}},{key:"scrolledDownEvent",value:function u(){this.lastEvent=b;
h(document).trigger(k)
}},{key:"analyzeScroll",value:function q(){var w=this.scrollMemoryModel.isScrollingDown();
if(this.headerController.dynamicButtonExistOnPage&&this.headerController.pinnedBannerIsDynamicBanner&&!this.dynamicBannerIsActivated){var v=this.headerController.dynamicBannerShouldBeActivated();
if(!v){return
}else{this.dynamicBannerIsActivated=true
}}if(this.lastEvent!==b&&w){if(this.scrollMemoryModel.isScrolledDownSimple()){this.scrolledDownEvent()
}}else{if(this.lastEvent!==a&&!w){if(this.scrollMemoryModel.isScrolledUpSimple()){this.scrolledUpEvent()
}}}}},{key:"isLastScrollScrollingDown",value:function r(){return this.lastEvent===b
}},{key:"bindScrollForBanner",value:function p(){var v=this;
this.$document.scroll(function(){v.scrollMemoryModel.setScrollPosition(window.pageYOffset);
var w=window.pageYOffset>v.headerController.mainContentPadding;
if(w){v.analyzeScroll()
}else{if(v.lastEvent!==a){v.scrolledUpEvent()
}}})
}}]);
return t
}()
}),234:(function(c,d,g){g.r(d);
g.d(d,"default",function(){return e
});
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function a(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function b(k,h,j){if(h){a(k.prototype,h)
}if(j){a(k,j)
}return k
}var e=function(){function l(){f(this,l);
this.memory=[0];
this.scrollUpLength=15;
this.scrollDownLength=5;
this.maximumMemorySize=99999
}b(l,[{key:"setScrollPosition",value:function h(p){this.memory.push(p);
if(this.memory.length>this.maximumMemorySize){this.cleanMemory()
}}},{key:"getScrollPosition",value:function m(){this.memory(this.memory.length-1)
}},{key:"isScrollingDown",value:function o(){var p=this.memory.length;
return this.memory[p-1]>this.memory[p-2]
}},{key:"isScrolledDownSimple",value:function n(){var p=this.memory.length;
var q=this.memory[p-1]>this.memory[p-2]+1&&this.memory[p-2]>this.memory[p-3]+1&&this.memory[p-3]>this.memory[p-4]+1;
return q
}},{key:"isScrolledUpSimple",value:function k(){var p=this.memory.length;
var q=this.memory[p-1]<this.memory[p-2]-4&&this.memory[p-2]<this.memory[p-3]-4&&this.memory[p-3]<this.memory[p-4]-4&&this.memory[p-4]<this.memory[p-5]-4;
return q
}},{key:"cleanMemory",value:function j(){if(this.memory.length>=this.historiScrollGeterSize){var q=[];
var p=this.memory.length-this.historiScrollGeterSize;
for(i=p;
i<this.memory.length;
i++){q.push(this.memory[iterationStartIndex])
}if(this.memory.length>9999){this.memory=q
}}}}]);
return l
}()
}),235:(function(c,g,b){b.r(g);
b.d(g,"default",function(){return a
});
function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function d(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var f=jQuery;
var h={header:".header, .pws-header",pwsHeader:"pws-header",headerMessages:".header-messages",headerNavWrapper:".header-nav-wrapper",headerContainer:"header-container",introSection:".intro-section",productComparator:".product-select-container",headerTopContainer:".header-top-container",headerMainContainer:".header-main-container",mobileHeader:".header-mobile",pinnedBanner:{component:".O-PINBANNER-RW-ALL",dynamicBannerClass:"dynamic",classAddedWhenMenuIsHidden:"active-pinned",buttonForBanner:".button-for-pinned-banner"}};
var a=function(){function n(A){e(this,n);
this.globalComponents=A;
this.$header=this.findHeader();
this.isPwsHeader=this.checkPwsHeader();
this.$headerContainer=this.findHeaderContainer(this.$header);
this.havePinnedBanner=false;
this.$pinnedBanner=f(h.pinnedBanner.component);
this.$hederNavWrapper=this.$header.find(h.headerNavWrapper);
if(this.$pinnedBanner.length){this.appendPinnedBanner();
this.findDynamicButtonAndBanner()
}this.setHeaderToFixedAndAddPaddingToMainContent();
this.bindUIEvents()
}d(n,[{key:"findHeader",value:function q(){return f(h.header).first()
}},{key:"findMobileHeader",value:function u(){return f(h.mobileHeader)[0]
}},{key:"checkMobileHeaderIsExpanded",value:function x(){return f("#sidebar").hasClass("expanded")
}},{key:"closeMobileHeader",value:function r(){var B=this.findMobileHeader();
var A=this.globalComponents.components.findComponentByHTMLNode(B);
A&&A.instance&&A.instance.closeSidebar()
}},{key:"checkPwsHeader",value:function l(){return this.$header.hasClass(h.pwsHeader)
}},{key:"bindUIEvents",value:function k(){var A=this;
f(window).on("load resize headerMessageChange",function(){A.setPaddingToMainContent()
})
}},{key:"findHeaderContainer",value:function o(A){return A.parent()
}},{key:"calculatePaddingForMainContent",value:function m(A){return A.height()
}},{key:"appendPinnedBanner",value:function t(){if(this.globalComponents.configuration.checkViewTypeIsForClient()&&this.$pinnedBanner.length&&this.$hederNavWrapper){this.havePinnedBanner=true;
this.$pinnedBanner.parent().height(0);
this.$hederNavWrapper.append(this.$pinnedBanner)
}}},{key:"findDynamicButtonAndBanner",value:function p(){this.$dynamicButtonForBanner=f(h.pinnedBanner.buttonForBanner).first();
this.pinnedBannerIsDynamicBanner=this.$pinnedBanner.hasClass(h.pinnedBanner.dynamicBannerClass);
if(this.$dynamicButtonForBanner){this.dynamicButtonExistOnPage=true
}}},{key:"dynamicBannerShouldBeActivated",value:function y(){return this.pinnedBannerIsDynamicBanner&&this.$dynamicButtonForBanner.length&&this.$dynamicButtonForBanner.offset().top+this.$dynamicButtonForBanner.outerHeight()<window.pageYOffset+this.$header.height()
}},{key:"setPaddingToMainContent",value:function w(){if(this.globalComponents.configuration.checkViewTypeIsForClient()){var A=this.$header||this.findHeader();
this.mainContentPadding=this.calculatePaddingForMainContent(A);
this.$headerContainer.css("padding-top",this.mainContentPadding)
}}},{key:"setHeaderToFixedAndAddPaddingToMainContent",value:function z(){if(this.globalComponents.configuration.checkViewTypeIsForClient()){this.$header.css("position","fixed");
this.setPaddingToMainContent()
}}},{key:"addPinnedBannerCalculation",value:function s(B){var A=this.globalComponents.windowScrollMechanism.isLastScrollScrollingDown();
if(A){return B+this.$pinnedBanner.height()
}return B
}},{key:"calculateHeaderHeight",value:function v(){var B=this.$header&&this.$header.height();
if(this.isPwsHeader){var C=this.$header.siblings(h.headerMessages).first();
var E=C&&C.height();
B=E?B+E:B
}var D=f(h.productComparator);
if(D.length>0){var A=D.height()+parseInt(D.css("padding-top"),10)+4;
B=B+A
}if(this.havePinnedBanner){B=this.addPinnedBannerCalculation(B)
}return B
}}]);
return n
}()
}),236:(function(e,f,h){h.r(f);
h.d(f,"default",function(){return b
});
var a=h(237);
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function c(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function d(l,j,k){if(j){c(l.prototype,j)
}if(k){c(l,k)
}return l
}var b=function(){function j(n){g(this,j);
this.modules=n;
this.componentMap=new Map();
this.UrlHelper=a["default"]
}d(j,[{key:"addInstanceToComponentsMap",value:function m(n){var o=n.instance&&n.instance.$el&&n.instance.$el[0];
if(o){this.componentMap.set(o,n)
}}},{key:"getComponentByID",value:function l(n){this.componentMap.get(n)
}},{key:"findComponentByHTMLNode",value:function k(n){return this.componentMap.get(n)
}}]);
return j
}()
}),237:(function(c,d,f){f.r(d);
f.d(d,"default",function(){return g
});
function e(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function a(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function b(k,h,j){if(h){a(k.prototype,h)
}if(j){a(k,j)
}return k
}var g=function(){function l(){e(this,l)
}b(l,null,[{key:"checkDomain",value:function h(m){if(m.indexOf("//")===0){m=location.protocol+m
}return m.toLowerCase().replace(/([a-z])?:\/\//,"$1").split("/")[0]
}},{key:"isExternal",value:function k(m){return(m.indexOf(":")>-1||m.indexOf("//")>-1)&&l.checkDomain(location.href)!==l.checkDomain(m)
}},{key:"getAnchorIDFromHTMLNodeHref",value:function j(m){var o=m.getAttribute("href");
if(l.isExternal(o)){return null
}var n=o.substr(o.indexOf("#"));
return n
}}]);
return l
}()
}),238:(function(c,e,h){h.r(e);
h.d(e,"default",function(){return d
});
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function b(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var f=jQuery;
var d=function(){function l(o){g(this,l);
this.globalComponents=o;
this.editModes=["Edit","Design","Developer"];
this.$document=f("document");
this.onStartIsConfigPage=this.isConfigPage();
this.onStartIsEditMode=this.isEditMode();
this.onStartIsPatternLab=this.isPatternLab();
this.onStartIsForClient=this.checkViewTypeIsForClient()
}b(l,[{key:"isConfigPage",value:function n(){return f("body").hasClass(".configPage")
}},{key:"isPatternLab",value:function j(){if(this.$document&&f(this.$document.documentElement).attr("id")==="patternlab-html"){return true
}return false
}},{key:"isEditMode",value:function k(){return typeof parent.Granite!=="undefined"&&typeof parent.Granite.author!=="undefined"&&typeof parent.Granite.author.layerManager!=="undefined"&&this.editModes.indexOf(parent.Granite.author.layerManager.getCurrentLayer())!==-1
}},{key:"checkViewTypeIsForClient",value:function m(){return !this.isConfigPage()&&!this.isEditMode()&&!this.isPatternLab()
}}]);
return l
}()
}),239:(function(b,d){function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var f=Bootstrap.jQuery,h={anchorDataVisuallyHidden:'.text a[title],.text a[target="_blank"],.rich-text a[title],.rich-text a[target="_blank"],table a[title],table a[target="_blank"],[class*="A-PAR"] a[title],[class*="A-PAR"] a[target="_blank"],[class*="A-TYP"] a[title],[class*="A-TYP"] a[target="_blank"],[class*="A-BBS"] a[title],[class*="A-BBS"] a[target="_blank"]',chevronLink:'.text a[class*="A-LNKC"],.rich-text a[class*="A-LNKC"],table a[class*="A-LNKC"]',linkTextWrapper:'[aria-hidden="true"]',visuallyHidden:".visuallyhidden",body:"body"},a={visuallyHiddenTagString:'<span class="visuallyhidden"></span>',linkTextWrapperTagString:'<span aria-hidden="true"></span>',visuallyHiddenString:"visuallyhidden",title:"title",globalSettingsDataKey:"global-settings",chevronLinkSpanClass:"link",chevronTextWrapper:'<span class="link"></span>',nonBreakingSpace:"&nbsp;"};
var g=function(){function p(){e(this,p)
}c(p,null,[{key:"init",value:function o(){this.addVisuallyHiddenTag();
this.addChevronLinkSpan()
}},{key:"addVisuallyHiddenTag",value:function m(){var q=f(h.anchorDataVisuallyHidden);
var r=this.newWindowLinkText();
f.each(q,function(v,w){var A=f(w);
var x=A.text()||"";
var t=A.find(h.visuallyHidden);
var z=A.find(h.linkTextWrapper);
var y=A.attr("target")==="_blank";
var s=A.attr(a.title)||"";
var u=t.text()||"";
if((s!==""||r.length)&&x.length&&!u.length){t.remove();
x=(A.text()||"").trim();
A.empty();
u=x+" "+s+(y?" "+r:"");
z=f(a.linkTextWrapperTagString);
A.append(z);
z.html(x);
t=f(a.visuallyHiddenTagString);
A.append(t);
t.html(u);
A.removeAttr(a.title)
}})
}},{key:"addChevronLinkSpan",value:function n(){var q=f(h.chevronLink);
f.each(q,function(t,w){var v=f(w);
var r=v.find(h.linkTextWrapper);
if(r.length!=0){r.addClass(a.chevronLinkSpanClass)
}else{var u=v.text();
var s=f(a.chevronTextWrapper);
s.html(u);
v.html(s)
}v.append(a.nonBreakingSpace)
})
}},{key:"fetchGlobalSettings",value:function l(){return f(h.body).data(a.globalSettingsDataKey)||{}
}},{key:"newWindowLinkText",value:function k(){return this.fetchGlobalSettings().newWindowLinkText||""
}}]);
return p
}();
f(document).ready(function(){return g.init()
})
}),240:(function(a,d){function f(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function j(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function b(n,l,m){if(l){j(n.prototype,l)
}if(m){j(n,m)
}return n
}var c="a[target='_blank']",g="noopener",h={childList:true,attributes:true,characterData:true,subtree:true},e=Bootstrap.jQuery;
var k=function(){function o(){f(this,o)
}b(o,null,[{key:"init",value:function p(){this.timer=undefined;
this.bindUIEvents();
this.setNoOpenerAttr()
}},{key:"bindUIEvents",value:function m(){var q=this;
if(window.MutationObserver){new MutationObserver(function(){return q.handleDOMChange()
}).observe(document.body,h)
}else{e("body").on("DOMNodeInserted",c,function(r){return q.setNoOpenerAttr(e(r.target))
})
}}},{key:"setNoOpenerAttr",value:function n(){var q=arguments.length>0&&arguments[0]!==undefined?arguments[0]:e(c);
q.each(function(){var s=e(this),r=s.attr("rel");
if(typeof r==="undefined"){s.attr("rel",g)
}else{if(!r.toLowerCase().includes(g)){s.attr("rel",r+" "+g)
}}})
}},{key:"handleDOMChange",value:function l(){var q=this;
if(typeof this.timer==="undefined"){this.timer=setTimeout(function(){q.setNoOpenerAttr();
q.timer=undefined
},10)
}}}]);
return o
}();
e(document).ready(function(){return k.init()
})
}),241:(function(a,e){function f(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function b(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var g=Bootstrap.jQuery,d=g("body"),c={noOutlines:"no-outlines"};
var h=function(){function k(){f(this,k)
}b(k,null,[{key:"init",value:function l(){d.on("mousedown",function(){return d.addClass(c.noOutlines)
}).on("keydown",function(){return d.removeClass(c.noOutlines)
})
}}]);
return k
}();
h.init()
}),242:(function(e,m,d){d.r(m);
d.d(m,"default",function(){return n
});
var c=d(5);
var b=d(14);
var l=d(228);
function k(r,s){if(!(r instanceof s)){throw new TypeError("Cannot call a class as a function")
}}function p(u,s){for(var r=0;
r<s.length;
r++){var t=s[r];
t.enumerable=t.enumerable||false;
t.configurable=true;
if("value" in t){t.writable=true
}Object.defineProperty(u,t.key,t)
}}function g(t,r,s){if(r){p(t.prototype,r)
}if(s){p(t,s)
}return t
}var j=Bootstrap.jQuery,o={wrapper:".messaging-banner",smartBanner:".smart-banner",trackEvent:".smart-banner-install",closeButton:".smart-banner-close"},f={smartBanner:"smart-banner",isIOS:"has-ios-banner",isAndroid:"has-android-banner"},a={appId:j('meta[name="apple-itunes-app"]').attr("content"),iosAppUrl:j('meta[name="app-itunes"]').attr("content"),androidAppUrl:j('meta[name="app-google-play"]').attr("content"),pageUrl:l.HSBC_utils.isTealiumReady&&utag_data.page_url?utag_data.page_url:document.location.pathname,title:j('meta[name="app-title"]').attr("content"),desc:j('meta[name="app-desc"]').attr("content"),viewBtnTxt:j('meta[name="app-view-label"]').attr("content")||"View",closeLabel:j('meta[name="app-close-label"]').attr("content")||"Close",bannerImg:j('meta[name="app-img"]').attr("content")||""},h=j("body"),q=j(o.wrapper);
var n=function(){function x(){k(this,x)
}g(x,null,[{key:"init",value:function A(){this.dataKeeper=new b.DataKeeper({name:"smartAppBanner",cookieSettings:{expires:{months:6}}});
this.storedData=this.dataKeeper.read();
if(this.storedData!=a.androidAppUrl&&this.storedData!=a.iosAppUrl){this.bindUIEvents();
this.setSmartBanner()
}}},{key:"bindUIEvents",value:function r(){var E=this;
var C=q.find(o.trackEvent),D=q.find(o.closeButton);
C.on("click",function(F){c.TealiumUtils.trackEvent({event_type:"click",page_url:a.pageUrl,event_category:"content",event_action:"button click",event_content:"view smart banner"})
});
D.on("click",function(F){h.removeClass(f.isIOS+" "+f.isAndroid);
q.find(o.smartBanner).remove();
E.triggerChangeMessageEvent();
c.TealiumUtils.trackEvent({event_type:"click",page_url:a.pageUrl,event_category:"content",event_action:"button click",event_content:"close smart banner"});
if(E.isMobileiOSModeToShowBanner()){E.dataKeeper.save(a.iosAppUrl)
}else{if(E.isMobileAndroidModeToShowBanner()){E.dataKeeper.save(a.androidAppUrl)
}}})
}},{key:"triggerChangeMessageEvent",value:function v(){j(window).trigger("headerMessageChange")
}},{key:"tealiumLoadEvent",value:function z(){c.TealiumUtils.trackEvent({event_type:"load",page_url:a.pageUrl,event_category:"content",event_action:"popup",event_content:"smart banner popup"})
}},{key:"setSmartBanner",value:function w(){var C=arguments.length>0&&arguments[0]!==undefined?arguments[0]:j(o.smartBanner);
if(this.isMobileiOSModeToShowBanner()&&!l.HSBC_utils.isSafari){this.iOSBannerLoad();
this.bindUIEvents()
}else{if(this.isMobileAndroidModeToShowBanner()){this.androidBannerLoad();
this.bindUIEvents()
}}this.triggerChangeMessageEvent()
}},{key:"isMobileAndroidModeToShowBanner",value:function s(){return l.HSBC_utils.isMobileAndroid&&a.androidAppUrl
}},{key:"isMobileiOSModeToShowBanner",value:function y(){return l.HSBC_utils.isMobileiOS&&a.iosAppUrl
}},{key:"iOSBannerLoad",value:function B(){var C=this.bannerTemplate("ios");
q.prepend(C);
h.addClass(f.isIOS);
this.tealiumLoadEvent()
}},{key:"androidBannerLoad",value:function t(){var C=this.bannerTemplate("android");
q.prepend(C);
h.addClass(f.isAndroid);
this.tealiumLoadEvent()
}},{key:"bannerTemplate",value:function u(C){if(C=="ios"){return'\n<div class="'.concat(f.smartBanner,'-wrapper"><div id="').concat(f.smartBanner,'"  class="').concat(f.smartBanner,'">\n     <button id="smart-banner-close" class="smart-banner-close" role="button" aria-label=" smartBannerParam.closeLabel}">\n         <span aria-hidden="true">&times;</span>\n     </button>\n     <span class="smart-banner-logo" style="background-image: url(\'').concat(a.bannerImg,'\');"></span>\n     <p class="smart-banner-title">').concat(a.title,"\n         <span>").concat(a.desc,'</span>\n     </p>\n     <p class="smart-banner-install">\n         <a id="smart-banner-install" href="').concat(a.iosAppUrl,'" target="_blank" rel="noopener noreferrer">').concat(a.viewBtnTxt,"</a>\n     </p>\n<br /></div></div>")
}else{if(C=="android"){return'\n<div class="'.concat(f.smartBanner,'-wrapper"><div id="').concat(f.smartBanner,'"  class="').concat(f.smartBanner,'">\n     <span class="smart-banner-logo" style="background-image: url(\'').concat(a.bannerImg,'\');"></span>\n     <button id="smart-banner-close" class="smart-banner-close" role="button" aria-label="').concat(a.closeLabel,'">\n         <span aria-hidden="true">&times;</span>\n     </button>\n     <p class="smart-banner-title">').concat(a.title,"\n         <span>").concat(a.desc,'</span>\n     </p>\n     <p class="smart-banner-install">\n         <a id="smart-banner-install" href="').concat(a.androidAppUrl,'" target="_blank" rel="noopener noreferrer">').concat(a.viewBtnTxt,"</a>\n     </p>\n<br /></div></div>")
}}}}]);
return x
}();
j(window).on("load",function(){return n.init()
})
}),243:(function(a,d){function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function b(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var f=Bootstrap.jQuery,c=f("div.cc-wrapper"),g=f("div.O-SMARTSPCGEN-DEV");
var h=function(){function k(){e(this,k)
}b(k,null,[{key:"init",value:function l(){c.attr("role","region");
g.attr("role","region")
}}]);
return k
}();
h.init()
}),244:(function(f,c){function h(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function e(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}var g=Bootstrap.jQuery,d={smartTemplate:'[class*="globalSmart"]',buttons:".buttons-vertically"};
var a=function(){function j(){h(this,j)
}e(j,null,[{key:"init",value:function m(){this.$smartTemplate=g(d.smartTemplate);
this.$buttons=this.$smartTemplate.find(d.buttons);
this.setButtonsWidth(this.$buttons);
this.bindUIEvents()
}},{key:"setButtonsWidth",value:function l(n){n.width("auto");
var o=216,p=Math.max.apply(null,n.map(function(r,s){return g(s).width()
}).get()),q=100;
if(p>o&&!HSBC_utils.matchMedia.mobile){n.width(p)
}else{if(HSBC_utils.matchMedia.mobile){n.width("".concat(q,"%"))
}else{n.width(o)
}}}},{key:"bindUIEvents",value:function k(){var n=this;
g(window).on("resize",function(){return n.setButtonsWidth(n.$buttons)
})
}}]);
return j
}();
a.init()
}),245:(function(e,j,c){c.r(j);
c.d(j,"trim",function(){return f
});
c.d(j,"trimElements",function(){return a
});
var h=jQuery,g={oneWord:"one-word"},b=/^\s+/,d=/\s+$/,k=[".link-container .link"],l=[".visuallyhidden"];
function f(n){function o(r){if(r.nodeType===Node.TEXT_NODE){r.data=r.data.replace(b,"");
return r.data.length===0
}else{var p=0;
var q=r.childNodes.length;
while(p<q&&o(r.childNodes[p])){p=p+1
}return p===q
}}function m(r){if(r.nodeType===Node.TEXT_NODE){r.data=r.data.replace(d,"");
return r.data.length===0
}else{var p=1;
var q=r.childNodes.length;
while(p<=q&&m(r.childNodes[q-p])){p=p+1
}return p>q
}}m(n);
o(n)
}function a(){k.map(function(m){return h(m)
}).forEach(function(m){m.each(function(){var n=h(this),p=n.text().trim(),o=p.split(" ").length;
f(n[0]);
if(o===1){n.addClass(g.oneWord)
}})
});
l.map(function(m){return h(m)
}).forEach(function(m){m.each(function(){var n=h(this);
n.html(n.text());
n.text(n.html(n.text()).text())
})
})
}a()
}),5:(function(d,e,f){f.r(e);
f.d(e,"TealiumUtils",function(){return g
});
var g={trackEvent:function c(h){var j=window.TMS||null;
if(h&&j){j.trackEvent(h)
}},trackView:function b(h){var j=window.TMS||null;
if(h&&j){j.trackView(h)
}},trackEventWithInheritance:function a(j){var h={};
if(HSBC_utils.isTealiumReady){h={site_section:utag_data.site_section?utag_data.site_section:"",page_type:utag_data.page_type?utag_data.page_type:"",page_customer_group:utag_data.page_customer_group?utag_data.page_customer_group:"",page_category:utag_data.page_category?utag_data.page_category:"",page_subcategory:utag_data.page_subcategory?utag_data.page_subcategory:"",page_business_line:utag_data.page_business_line?utag_data.page_business_line:"",page_security_level:utag_data.page_security_level?utag_data.page_security_level:""}
}this.trackEvent(Bootstrap.jQuery.extend(h,j))
}}
})});
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
(function defineMustache(b,a){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){a(exports)
}else{if(typeof define==="function"&&define.amd){define(["exports"],a)
}else{b.Mustache={};
a(b.Mustache)
}}}(this,function mustacheFactory(G){var y=Object.prototype.toString;
var z=Array.isArray||function d(R){return y.call(R)==="[object Array]"
};
function v(R){return typeof R==="function"
}function M(R){return z(R)?"array":typeof R
}function j(R){return R.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}function K(S,R){return S!=null&&typeof S==="object"&&(R in S)
}var p=RegExp.prototype.test;
function c(S,R){return p.call(S,R)
}var t=/\S/;
function F(R){return !c(t,R)
}var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};
function A(R){return String(R).replace(/[&<>"'`=\/]/g,function S(T){return r[T]
})
}var u=/\s*/;
var D=/\s+/;
var m=/\s*=/;
var O=/\s*\}/;
var s=/#|\^|\/|>|\{|&|=|!/;
function e(ak,Z){if(!ak){return[]
}var ab=[];
var aa=[];
var W=[];
var al=false;
var ai=false;
function ah(){if(al&&!ai){while(W.length){delete aa[W.pop()]
}}else{W=[]
}al=false;
ai=false
}var ad,Y,aj;
function X(am){if(typeof am==="string"){am=am.split(D,2)
}if(!z(am)||am.length!==2){throw new Error("Invalid tags: "+am)
}ad=new RegExp(j(am[0])+"\\s*");
Y=new RegExp("\\s*"+j(am[1]));
aj=new RegExp("\\s*"+j("}"+am[1]))
}X(Z||G.tags);
var T=new a(ak);
var U,S,ac,af,V,R;
while(!T.eos()){U=T.pos;
ac=T.scanUntil(ad);
if(ac){for(var ag=0,ae=ac.length;
ag<ae;
++ag){af=ac.charAt(ag);
if(F(af)){W.push(aa.length)
}else{ai=true
}aa.push(["text",af,U,U+1]);
U+=1;
if(af==="\n"){ah()
}}}if(!T.scan(ad)){break
}al=true;
S=T.scan(s)||"name";
T.scan(u);
if(S==="="){ac=T.scanUntil(m);
T.scan(m);
T.scanUntil(Y)
}else{if(S==="{"){ac=T.scanUntil(aj);
T.scan(O);
T.scanUntil(Y);
S="&"
}else{ac=T.scanUntil(Y)
}}if(!T.scan(Y)){throw new Error("Unclosed tag at "+T.pos)
}V=[S,ac,U,T.pos];
aa.push(V);
if(S==="#"||S==="^"){ab.push(V)
}else{if(S==="/"){R=ab.pop();
if(!R){throw new Error('Unopened section "'+ac+'" at '+U)
}if(R[1]!==ac){throw new Error('Unclosed section "'+R[1]+'" at '+U)
}}else{if(S==="name"||S==="{"||S==="&"){ai=true
}else{if(S==="="){X(ac)
}}}}}R=ab.pop();
if(R){throw new Error('Unclosed section "'+R[1]+'" at '+T.pos)
}return n(q(aa))
}function q(W){var S=[];
var U,R;
for(var T=0,V=W.length;
T<V;
++T){U=W[T];
if(U){if(U[0]==="text"&&R&&R[0]==="text"){R[1]+=U[1];
R[3]=U[3]
}else{S.push(U);
R=U
}}}return S
}function n(W){var Y=[];
var V=Y;
var X=[];
var S,U;
for(var R=0,T=W.length;
R<T;
++R){S=W[R];
switch(S[0]){case"#":case"^":V.push(S);
X.push(S);
V=S[4]=[];
break;
case"/":U=X.pop();
U[5]=S[2];
V=X.length>0?X[X.length-1][4]:Y;
break;
default:V.push(S)
}}return Y
}function a(R){this.string=R;
this.tail=R;
this.pos=0
}a.prototype.eos=function L(){return this.tail===""
};
a.prototype.scan=function P(T){var S=this.tail.match(T);
if(!S||S.index!==0){return""
}var R=S[0];
this.tail=this.tail.substring(R.length);
this.pos+=R.length;
return R
};
a.prototype.scanUntil=function J(T){var S=this.tail.search(T),R;
switch(S){case -1:R=this.tail;
this.tail="";
break;
case 0:R="";
break;
default:R=this.tail.substring(0,S);
this.tail=this.tail.substring(S)
}this.pos+=R.length;
return R
};
function N(S,R){this.view=S;
this.cache={".":this.view};
this.parent=R
}N.prototype.push=function H(R){return new N(R,this)
};
N.prototype.lookup=function k(U){var S=this.cache;
var W;
if(S.hasOwnProperty(U)){W=S[U]
}else{var V=this,X,T,R=false;
while(V){if(U.indexOf(".")>0){W=V.view;
X=U.split(".");
T=0;
while(W!=null&&T<X.length){if(T===X.length-1){R=K(W,X[T])
}W=W[X[T++]]
}}else{W=V.view[U];
R=K(V.view,U)
}if(R){break
}V=V.parent
}S[U]=W
}if(v(W)){W=W.call(this.view)
}return W
};
function l(){this.cache={}
}l.prototype.clearCache=function B(){this.cache={}
};
l.prototype.parse=function w(T,S){var R=this.cache;
var U=R[T];
if(U==null){U=R[T]=e(T,S)
}return U
};
l.prototype.render=function C(U,R,T){var V=this.parse(U);
var S=(R instanceof N)?R:new N(R);
return this.renderTokens(V,S,T,U)
};
l.prototype.renderTokens=function o(Y,R,W,aa){var U="";
var T,S,Z;
for(var V=0,X=Y.length;
V<X;
++V){Z=undefined;
T=Y[V];
S=T[0];
if(S==="#"){Z=this.renderSection(T,R,W,aa)
}else{if(S==="^"){Z=this.renderInverted(T,R,W,aa)
}else{if(S===">"){Z=this.renderPartial(T,R,W,aa)
}else{if(S==="&"){Z=this.unescapedValue(T,R)
}else{if(S==="name"){Z=this.escapedValue(T,R)
}else{if(S==="text"){Z=this.rawValue(T)
}}}}}}if(Z!==undefined){U+=Z
}}return U
};
l.prototype.renderSection=function x(T,R,W,Z){var aa=this;
var V="";
var X=R.lookup(T[1]);
function S(ab){return aa.render(ab,R,W)
}if(!X){return
}if(z(X)){for(var U=0,Y=X.length;
U<Y;
++U){V+=this.renderTokens(T[4],R.push(X[U]),W,Z)
}}else{if(typeof X==="object"||typeof X==="string"||typeof X==="number"){V+=this.renderTokens(T[4],R.push(X),W,Z)
}else{if(v(X)){if(typeof Z!=="string"){throw new Error("Cannot use higher-order sections without the original template")
}X=X.call(R.view,Z.slice(T[3],T[5]),S);
if(X!=null){V+=X
}}else{V+=this.renderTokens(T[4],R,W,Z)
}}}return V
};
l.prototype.renderInverted=function b(T,S,R,V){var U=S.lookup(T[1]);
if(!U||(z(U)&&U.length===0)){return this.renderTokens(T[4],S,R,V)
}};
l.prototype.renderPartial=function I(T,S,R){if(!R){return
}var U=v(R)?R(T[1]):R[T[1]];
if(U!=null){return this.renderTokens(this.parse(U),S,R,U)
}};
l.prototype.unescapedValue=function g(S,R){var T=R.lookup(S[1]);
if(T!=null){return T
}};
l.prototype.escapedValue=function E(S,R){var T=R.lookup(S[1]);
if(T!=null){return G.escape(T)
}};
l.prototype.rawValue=function f(R){return R[1]
};
G.name="mustache.js";
G.version="2.3.0";
G.tags=["{{","}}"];
var Q=new l();
G.clearCache=function B(){return Q.clearCache()
};
G.parse=function w(S,R){return Q.parse(S,R)
};
G.render=function C(T,R,S){if(typeof T!=="string"){throw new TypeError('Invalid template! Template should be a "string" but "'+M(T)+'" was given as the first argument for mustache#render(template, view, partials)')
}return Q.render(T,R,S)
};
G.to_html=function h(U,S,T,V){var R=G.render(U,S,T);
if(v(V)){V(R)
}else{return R
}};
G.escape=A;
G.Scanner=a;
G.Context=N;
G.Writer=l;
return G
}));
/*! jQuery Mustache - v0.2.8 - 2013-06-23
 * https://github.com/jonnyreeves/jquery-Mustache
 * Copyright (c) 2013 Jonny Reeves; Licensed MIT */
(function(f,h){var b={},m=null,o={warnOnMissingTemplates:false,allowOverwrite:true,domTemplateType:"text/html",externalTemplateDataType:"text"};
function c(){if(m===null){m=h.Mustache;
if(m===void 0){f.error("Failed to locate Mustache instance, are you sure it has been loaded?")
}}return m
}function l(p){return b[p]!==void 0
}function n(p,q){if(!o.allowOverwrite&&l(p)){f.error("TemplateName: "+p+" is already mapped.");
return
}b[p]=f.trim(q)
}function e(){var p;
if(arguments.length===0){p=f('script[type="'+o.domTemplateType+'"]').map(function(){return this.id
})
}else{p=f.makeArray(arguments)
}f.each(p,function(){var q=document.getElementById(this);
if(q===null){f.error("No such elementId: #"+this)
}else{n(this,f(q).html())
}})
}function d(q){var p=b[q];
delete b[q];
return p
}function g(){b={};
c().clearCache()
}function a(p,q){if(!l(p)){if(o.warnOnMissingTemplates){f.error("No template registered for: "+p)
}return""
}return c().to_html(b[p],q,b)
}function k(p,q){return f.ajax({url:p,dataType:o.externalTemplateDataType}).done(function(r){f(r).filter("script").each(function(s,t){n(t.id,f(t).html())
});
if(f.isFunction(q)){q()
}})
}function j(){return f.map(b,function(q,p){return p
})
}f.Mustache={options:o,load:k,has:l,add:n,addFromDom:e,remove:d,clear:g,render:a,templates:j,instance:m};
f.fn.mustache=function(p,t,r){var s=f.extend({method:"append"},r);
var q=function(v,u){f(v)[s.method](a(p,u))
};
return this.each(function(){var u=this;
if(f.isArray(t)){f.each(t,function(){q(u,this)
})
}else{q(u,t)
}})
}
}(window.jQuery||Bootstrap.jQuery,window));
(function(a,b){if(typeof define==="function"&&define.amd){define(["mustache"],function(d){b(d||a.Mustache)
})
}else{if(typeof exports!=="undefined"){var c=require("mustache");
b(c)
}else{b(a.Mustache)
}}}(this,function Wax(c){c.Formatters={};
c.Context.prototype.parseParam=function b(h){var f,g,e;
f=/^[\'\"](.*)[\'\"]$/g;
g=/^[+-]?\d+$/g;
e=/^[+-]?\d*\.\d+$/g;
if(f.test(h)){return h.replace(f,"$1")
}if(g.test(h)){return parseInt(h,10)
}if(e.test(h)){return parseFloat(h)
}return this._lookup(h)
};
c.Context.prototype.applyFilter=function a(h,g){var l,k,e,f,j=[h];
l=/^\s*([^\:]+)/g;
k=/\:\s*([\'][^\']*[\']|[\"][^\"]*[\"]|[^\:]+)\s*/g;
e=l.exec(g);
f=e[1].trim();
while((e=k.exec(g))){j.push(this.parseParam(e[1].trim()))
}if(c.Formatters.hasOwnProperty(f)){g=c.Formatters[f];
return g.apply(g,j)
}return h
};
c.Context.prototype._lookup=c.Context.prototype.lookup;
c.Context.prototype.lookup=function d(g){var h,e,j,f;
f=g.split("|");
j=f.shift().trim();
j=this._lookup(j);
for(h=0,e=f.length;
h<e;
++h){j=this.applyFilter(j,f[h])
}return j
}
}));
var RadioButton=function(a,b){this.domNode=a;
this.radioGroup=b;
this.keyCode=Object.freeze({RETURN:13,SPACE:32,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})
};
RadioButton.prototype.init=function(){this.domNode.tabIndex=-1;
this.domNode.setAttribute("aria-checked","false");
this.domNode.addEventListener("keydown",this.handleKeydown.bind(this));
this.domNode.addEventListener("click",this.handleClick.bind(this));
this.domNode.addEventListener("focus",this.handleFocus.bind(this));
this.domNode.addEventListener("blur",this.handleBlur.bind(this))
};
RadioButton.prototype.handleKeydown=function(c){var d=c.currentTarget,b=false,a;
switch(c.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:this.radioGroup.setChecked(this);
b=true;
break;
case this.keyCode.UP:this.radioGroup.setCheckedToPreviousItem(this);
b=true;
break;
case this.keyCode.DOWN:this.radioGroup.setCheckedToNextItem(this);
b=true;
break;
case this.keyCode.LEFT:this.radioGroup.setCheckedToPreviousItem(this);
b=true;
break;
case this.keyCode.RIGHT:this.radioGroup.setCheckedToNextItem(this);
b=true;
break;
default:break
}if(b){c.stopPropagation();
c.preventDefault()
}};
RadioButton.prototype.handleClick=function(a){this.radioGroup.setChecked(this)
};
RadioButton.prototype.handleFocus=function(a){this.domNode.classList.add("focus")
};
RadioButton.prototype.handleBlur=function(a){this.domNode.classList.remove("focus")
};
var RadioGroup=function(a){this.domNode=a;
this.radioButtons=[];
this.firstRadioButton=null;
this.lastRadioButton=null
};
RadioGroup.prototype.init=function(){if(!this.domNode.getAttribute("role")){this.domNode.setAttribute("role","radiogroup")
}var c=this.domNode.querySelectorAll("[role=radio]");
for(var a=0;
a<c.length;
a++){var b=new RadioButton(c[a],this);
b.init();
this.radioButtons.push(b);
if(!this.firstRadioButton){this.firstRadioButton=b
}this.lastRadioButton=b
}this.firstRadioButton.domNode.tabIndex=0
};
RadioGroup.prototype.setChecked=function(b){for(var a=0;
a<this.radioButtons.length;
a++){var c=this.radioButtons[a];
c.domNode.setAttribute("aria-checked","false");
c.domNode.tabIndex=-1
}b.domNode.setAttribute("aria-checked","true");
jQuery(b.domNode).trigger("change");
b.domNode.tabIndex=0;
b.domNode.focus()
};
RadioGroup.prototype.setCheckedToPreviousItem=function(b){var a;
if(b===this.firstRadioButton){this.setChecked(this.lastRadioButton)
}else{a=this.radioButtons.indexOf(b);
this.setChecked(this.radioButtons[a-1])
}};
RadioGroup.prototype.setCheckedToNextItem=function(b){var a;
if(b===this.lastRadioButton){this.setChecked(this.firstRadioButton)
}else{a=this.radioButtons.indexOf(b);
this.setChecked(this.radioButtons[a+1])
}};
(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={i:e,l:false,exports:{}};
a[e].call(d.exports,d,d.exports,c);
d.l=true;
return d.exports
}c.m=a;
c.c=b;
c.d=function(e,f,d){if(!c.o(e,f)){Object.defineProperty(e,f,{enumerable:true,get:d})
}};
c.r=function(d){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})
}Object.defineProperty(d,"__esModule",{value:true})
};
c.t=function(f,g){if(g&1){f=c(f)
}if(g&8){return f
}if((g&4)&&typeof f==="object"&&f&&f.__esModule){return f
}var e=Object.create(null);
c.r(e);
Object.defineProperty(e,"default",{enumerable:true,value:f});
if(g&2&&typeof f!="string"){for(var d in f){c.d(e,d,function(h){return f[h]
}.bind(null,d))
}}return e
};
c.n=function(e){var d=e&&e.__esModule?function f(){return e["default"]
}:function g(){return e
};
c.d(d,"a",d);
return d
};
c.o=function(d,e){return Object.prototype.hasOwnProperty.call(d,e)
};
c.p="";
return c(c.s=6)
})([,,,,,(function(d,e,f){f.r(e);
f.d(e,"TealiumUtils",function(){return g
});
var g={trackEvent:function c(h){var j=window.TMS||null;
if(h&&j){j.trackEvent(h)
}},trackView:function b(h){var j=window.TMS||null;
if(h&&j){j.trackView(h)
}},trackEventWithInheritance:function a(j){var h={};
if(HSBC_utils.isTealiumReady){h={site_section:utag_data.site_section?utag_data.site_section:"",page_type:utag_data.page_type?utag_data.page_type:"",page_customer_group:utag_data.page_customer_group?utag_data.page_customer_group:"",page_category:utag_data.page_category?utag_data.page_category:"",page_subcategory:utag_data.page_subcategory?utag_data.page_subcategory:"",page_business_line:utag_data.page_business_line?utag_data.page_business_line:"",page_security_level:utag_data.page_security_level?utag_data.page_security_level:""}
}this.trackEvent(Bootstrap.jQuery.extend(h,j))
}}
}),(function(b,a,c){c(7);
c(10);
c(11);
c(8);
c(17);
c(18);
c(19);
c(22);
c(23);
c(24);
c(25);
c(26);
c(33);
c(35);
c(36);
c(37);
c(39);
c(42);
c(38);
c(44);
c(45);
c(47);
c(48);
c(49);
c(50);
c(51);
c(53);
c(55);
c(59);
c(61);
c(62);
c(65);
c(66);
c(67);
c(68);
c(69);
c(70);
c(71);
c(72);
c(73);
c(74);
c(75);
c(76);
c(77);
c(78);
c(132);
c(133);
c(138);
c(139);
c(140);
c(141);
c(142);
c(143);
c(144);
c(146);
c(147);
c(148);
c(149);
c(150);
c(152);
c(151);
c(153);
c(154);
c(155);
c(156);
c(157);
c(158);
c(46);
c(159);
c(160);
c(161);
c(163);
c(164);
c(165);
c(166);
c(167);
c(168);
c(169);
c(170);
c(171);
c(145);
c(172);
c(174);
c(176);
c(187);
c(189);
c(191);
c(192);
c(193);
c(194);
c(195);
c(196);
c(200);
c(201);
c(202);
c(204);
c(205);
c(207);
c(197);
c(209);
c(212);
c(213);
c(214);
c(215);
c(216);
c(219);
c(220);
c(221);
c(222);
b.exports=c(223)
}),(function(b,f,a){a.r(f);
a.d(f,"LoanRepaymentCalculationService",function(){return c
});
var j=a(8);
var g=a(9);
function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function h(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function d(m,k,l){if(k){h(m.prototype,k)
}if(l){h(m,l)
}return m
}var c=function(){function m(y){e(this,m);
this.rules=y;
this.formatUtils=new g.FormatUtils();
this.initData();
this.formatData();
this.updateRules()
}d(m,[{key:"initData",value:function x(){this.rulesData=g.FormatUtils.copyJson(this.rules.LoanCalculatorRateConfig.loanCalculatorRateTable)||[];
this.promoCodes=[].concat(this.rulesData.map(function(y){return y.promoCodeList[0]?y.promoCodeList[0]:""
}));
this.rulesWithoutPromoCode=this.rulesData.filter(function(y){return !y.promoCodeList.length
});
this.stages=j["default"]
}},{key:"updateRules",value:function w(){var y=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";
this.rules=this.getRulesByPromoCode(y);
this.setAmountRange()
}},{key:"getRulesByPromoCode",value:function n(z){var y=this.rulesData.filter(function(A){return A.promoCodeList.includes(z)
});
return(y.length?y:this.rulesWithoutPromoCode)[0].rateTable
}},{key:"formatData",value:function l(){this.rulesData.forEach(function(y){y.rateTable.forEach(function(A){var z=A.amount.split("-");
A.amount={min:z[0],max:z[1]};
A.flatRate.forEach(function(C){var B=C.months.split("-");
C.months={min:B[0],max:B[1]}
})
})
})
}},{key:"setMonthsRange",value:function p(z){var y=this.getMonthPointStages(z);
this.monthsRange={min:Math.min.apply(null,y),max:Math.max.apply(null,y)}
}},{key:"setAmountRange",value:function s(){this.amountRange={min:Math.min.apply(null,this.rules.map(function(y){return y.amount.min
})),max:Math.max.apply(null,this.rules.map(function(y){return y.amount.max
}))}
}},{key:"getApr",value:function v(A){var z=arguments.length>1&&arguments[1]!==undefined?arguments[1]:A.amount;
var B=this.getRuleByAmount(z),y=B.monthlyRepayment.find(function(C){return C.months==A.months
});
return y?y.APR:0
}},{key:"getRuleByAmount",value:function o(y){return this.rules.find(function(z){return z.amount.max>=y&&z.amount.min<=y
})
}},{key:"getAmountStages",value:function u(){return m.getStages(this.stages.amount)
}},{key:"getMonthPointStages",value:function q(y){var z=this.getRuleByAmount(y);
return z.monthlyRepayment.map(function(A){return +A.months
})
}},{key:"getMonthStages",value:function t(y){return m.getStages(this.getMonthPointStages(y))
}},{key:"getFormattedResult",value:function k(z){var y=Number(this.getRuleByAmount(z.amount).flatRate[0].rate),A=z.amount*(1+y*z.months/100);
return{monthlyRepayment:this.formatUtils.formatNumber(A/z.months),totalAmount:this.formatUtils.formatNumber(A),apr:this.getApr(z),flatRate:y}
}}],[{key:"getStages",value:function r(z){var A=[];
for(var y=1;
y<z.length;
y++){A.push({max:z[y],min:z[y-1]})
}return A
}}]);
return m
}()
}),(function(a,b,c){c.r(b);
b["default"]=({amount:[5000,210000,430000,640000,860000,1000000,1200000,1500000,1700000,1900000,2100000,2300000,2500000,2700000,3000000]})
}),(function(c,f,b){b.r(f);
b.d(f,"FormatUtils",function(){return h
});
function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function d(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var g={findDots:/(\d)(?=(\d{3})+(?:\.\d+)?$)/g},a={defaultBranch:"uk"};
var h=function(){function n(p){e(this,n);
this.branch=p||a.defaultBranch
}d(n,[{key:"formatNumber",value:function l(p){return this.branch==="uk"?this.formatNumberUK(Number(p)):p
}},{key:"formatNumberUK",value:function o(p){var q=p.toFixed(2).replace(g.findDots,"$1,");
return q.replace(/\.00$/,"")
}},{key:"formatNumberCalc",value:function m(p){return p.replace(/\,/,"")
}}],[{key:"copyJson",value:function k(p){return JSON.parse(JSON.stringify(p))
}}]);
return n
}()
}),(function(c,g,d){d.r(g);
var s=d(11);
var q=d(7);
var a=d(12);
var m=d(14);
var k=d(15);
var p=d(16);
function e(t){return l(t)||o(t)||j(t)||b()
}function b(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}function j(u,t){if(!u){return
}if(typeof u==="string"){return r(u,t)
}var v=Object.prototype.toString.call(u).slice(8,-1);
if(v==="Object"&&u.constructor){v=u.constructor.name
}if(v==="Map"||v==="Set"){return Array.from(u)
}if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)){return r(u,t)
}}function o(t){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(t)){return Array.from(t)
}}function l(t){if(Array.isArray(t)){return r(t)
}}function r(u,t){if(t==null||t>u.length){t=u.length
}for(var w=0,v=new Array(t);
w<t;
w++){v[w]=u[w]
}return v
}function f(t,u){if(!(t instanceof u)){throw new TypeError("Cannot call a class as a function")
}}function h(w,u){for(var t=0;
t<u.length;
t++){var v=u[t];
v.enumerable=v.enumerable||false;
v.configurable=true;
if("value" in v){v.writable=true
}Object.defineProperty(w,v.key,v)
}}function n(v,t,u){if(t){h(v.prototype,t)
}if(u){h(v,u)
}return v
}(function(w){var A={configHolder:".config-holder",headingLeft:".heading-left",headingRight:".heading-right",results:".placeholder-right",calculationInputs:".placeholder-left",sliderHandle:".ui-slider-handle",inputFields:".input",promoCode:".promocode-wrapper",promoCodeMessageError:".promoCode-message-error"},x={config:"config",rules:"rules",defaultAmount:"default-amount",defaultMonths:"default-months",amountPrefix:"amount-prefix",percentSufix:"percent-sufix"},y={beforeunload:"beforeunload",fieldUpdated:"fieldUpdated"},t={endpointURL:"/bin/public/gpws/calculation",amount:"amount",months:"months",auto:"auto"},v={hide:"hide"};
var z=function(){function K(N){f(this,K);
this.$el=w(N);
this.cacheDOMElements();
this.cleanInputs();
this.initSettings();
this.initObjects();
this.calculate();
this.setEqualHeadingsHeight();
this.bindUIEvents();
this.currencyFormatter=new p.CurrencyFormatter(this.$el);
this.currencyFormatter.addPrefixSpacing()
}n(K,[{key:"cacheDOMElements",value:function F(){this.$headingLeft=this.$el.find(A.headingLeft);
this.$headingRight=this.$el.find(A.headingRight);
this.$results=this.$el.find(A.results);
this.$calculationInputs=this.$el.find(A.calculationInputs);
this.$sliderHandle=this.$el.find(A.sliderHandle);
this.$inputFields=this.$el.find(A.inputFields);
this.$promoCodeWrapper=this.$el.find(A.promoCode);
this.$promoCode=this.$promoCodeWrapper.find(A.inputFields);
this.$promoCodeErrorMessage=this.$promoCodeWrapper.find(A.promoCodeMessageError)
}},{key:"cleanInputs",value:function D(){this.$inputFields.val("")
}},{key:"initSettings",value:function J(){var O=this.$el.find(A.configHolder),P=O.data(x.defaultMonths),N=O.data(x.defaultAmount);
this.rules=O.data(x.rules);
this.config={defaultMonths:P,defaultAmount:N};
this.amountPrefix=O.data(x.amountPrefix)||"";
this.percentSufix=O.data(x.percentSufix)||"";
this.dataKeeper=new m.DataKeeper();
this.state=this.dataKeeper.read();
w.extend(this.config,{defaultAmount:this.state.amount||N,defaultMonths:this.state.months||P});
w.extend(this.state,{amount:this.state.amount||N,months:this.state.months||P})
}},{key:"initObjects",value:function L(){this.calculationService=new q.LoanRepaymentCalculationService(this.rules);
this.calculationService.setMonthsRange(this.state.amount);
this.amountField=new a.InputWithSliderField(this.$el,{name:t.amount,value:this.config.defaultAmount,range:this.calculationService.amountRange},this.calculationService.stages.amount);
this.monthsField=new a.InputWithSliderField(this.$el,{name:t.months,value:this.config.defaultMonths,range:this.calculationService.monthsRange,step:1},this.calculationService.getMonthPointStages(this.state.amount));
this.amountField.setAreas(this.calculationService.getAmountStages());
this.monthsField.setAreas(this.calculationService.getMonthStages(this.state.amount));
this.resultRenderer=new k.ResultRenderer(this.$el);
new s.LoanRepaymentCalculatorAlly(this)
}},{key:"bindUIEvents",value:function C(){var N=this;
w(window).on("resize",function(){return N.setEqualHeadingsHeight()
}).on(y.beforeunload,function(){return N.dataKeeper.save(N.state)
});
this.$el.on(y.fieldUpdated,function(P,O){return N.recalculate(O)
});
this.$promoCode.on("input",function(O){return N.handlePromoCodeChange(O)
})
}},{key:"handlePromoCodeChange",value:function I(N){var O=w(N.target).val();
this.calculationService.updateRules(O);
this.$el.trigger("fieldUpdated",{name:"promoCode",value:O});
this.$promoCodeErrorMessage.addClass(v.hide);
if(!this.calculationService.promoCodes.includes(O)){this.$promoCodeErrorMessage.removeClass(v.hide)
}}},{key:"calculate",value:function H(){var N=this.calculationService.getFormattedResult(this.state);
w(document).trigger("LoansCalculator::recalculate",w.extend({},this.state));
w.extend(N,{amountPrefix:this.amountPrefix,percentSufix:this.percentSufix});
this.displayResult(N);
this.result=N
}},{key:"displayResult",value:function G(N){this.amountField.setIndicatorValue(this.calculationService.getApr(this.state)+this.percentSufix);
this.resultRenderer.render(N)
}},{key:"recalculate",value:function M(N){this.state[N.name]=N.value;
this.calculationService.setMonthsRange(this.state.amount);
this.monthsField.setRange(this.calculationService.monthsRange);
this.amountField.setAreas(this.calculationService.getAmountStages());
this.monthsField.setAreas(this.calculationService.getMonthStages(this.state.amount));
if(this.amountField.validateRange()&&this.monthsField.validateRange()){this.calculate()
}}},{key:"setEqualHeadingsHeight",value:function E(){var O=[this.$headingLeft,this.$headingRight];
O.map(function(Q){return Q.height(t.auto)
});
if(!HSBC_utils.matchMedia.mobile){if(!HSBC_utils.matchMedia.desktop&&HSBC_utils.matchMedia.tablet){O[0]=O[0].eq(0)
}var P=O.map(function(Q){return Q.outerHeight()
}),N=Math.max.apply(Math,e(P));
O.forEach(function(Q){return Q.outerHeight(N)
})
}}}]);
return K
}();
var u={name:"loanRepaymentCalculator",selector:".O-LNREPCALC-RW-DEV",init:function B(C){return new z(C)
}};
w(window).on("load",function(){return HSBC_utils.registerComponent(u)
})
})(Bootstrap.jQuery)
}),(function(b,g,a){a.r(g);
a.d(g,"LoanRepaymentCalculatorAlly",function(){return c
});
function f(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function d(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var j={hasError:"hasError",fieldUpdated:"fieldUpdated"},h=HSBC_utils.keyCodes,e=Bootstrap.jQuery;
var c=function(){function q(r){f(this,q);
this.$el=r.$el;
this.context=r;
this.bindUIEvents()
}d(q,[{key:"bindUIEvents",value:function n(){var r=this;
this.context.$inputFields.on("keydown",function(s){return r.removeAriaLive(s)
}).on("keyup",function(u){var s=u.keyCode,v=s===h.TAB,t=s===h.SHIFT;
if(!(t||v)){r.readResults()
}});
this.$el.on(j.fieldUpdated,function(){r.context.amountField.allySlider.setAriaOnSlider();
r.context.monthsField.allySlider.setAriaOnSlider()
});
this.context.$sliderHandle.on("keydown",function(s){return r.handleKeyboardNavigation(s)
}).one("mousedown",function(){return r.readResults()
});
this.$el.on(j.hasError,function(){return r.readErrorMessageOnce()
})
}},{key:"handleKeyboardNavigation",value:function l(v){var t=v.keyCode,w=t===h.TAB,s=t===h.ENTER,x=t===h.LEFT,r=t===h.RIGHT,u=v.shiftKey;
if(e(document.activeElement).is(this.context.$sliderHandle)){if(x||r){this.context.$results.attr("aria-live","polite");
this.context.$calculationInputs.attr("aria-live","polite")
}else{if(w||s||u){this.context.$results.removeAttr("aria-live");
this.context.$calculationInputs.removeAttr("aria-live")
}}}}},{key:"readResults",value:function p(){this.context.$results.attr("aria-live","polite");
this.context.$calculationInputs.attr("aria-live","polite");
r(this.context.amountField.$input);
r(this.context.monthsField.$input);
function r(s){if(e(document.activeElement).is(s)){s.attr({"aria-live":"polite","aria-atomic":"true"})
}}}},{key:"removeAriaLive",value:function o(s){var t=s.keyCode===h.TAB,r=s.shiftKey;
if(e(document.activeElement).is(this.context.$inputFields)){if(t||r){this.context.$results.removeAttr("aria-live");
this.context.$calculationInputs.removeAttr("aria-live");
this.context.amountField.$input.removeAttr("aria-live aria-atomic");
this.context.monthsField.$input.removeAttr("aria-live aria-atomic")
}}}},{key:"readErrorMessageOnce",value:function m(){this.context.$results.attr("aria-live","polite");
this.context.$calculationInputs.attr("aria-live","polite")
}}]);
return q
}()
}),(function(b,j,d){d.r(j);
d.d(j,"InputWithSliderField",function(){return c
});
var t=d(9);
var p=d(13);
d.d(j,"InputWithSliderFieldAlly",function(){return p.InputWithSliderFieldAlly
});
function e(v){return q(v)||s(v)||m(v)||a()
}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}function m(w,v){if(!w){return
}if(typeof w==="string"){return u(w,v)
}var x=Object.prototype.toString.call(w).slice(8,-1);
if(x==="Object"&&w.constructor){x=w.constructor.name
}if(x==="Map"||x==="Set"){return Array.from(w)
}if(x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x)){return u(w,v)
}}function s(v){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(v)){return Array.from(v)
}}function q(v){if(Array.isArray(v)){return u(v)
}}function u(w,v){if(v==null||v>w.length){v=w.length
}for(var y=0,x=new Array(v);
y<v;
y++){x[y]=w[y]
}return x
}function f(v,w){if(!(v instanceof w)){throw new TypeError("Cannot call a class as a function")
}}function k(y,w){for(var v=0;
v<w.length;
v++){var x=w[v];
x.enumerable=x.enumerable||false;
x.configurable=true;
if("value" in x){x.writable=true
}Object.defineProperty(y,x.key,x)
}}function r(x,v,w){if(v){k(x.prototype,v)
}if(w){k(x,w)
}return x
}var h={calcIndicator:".calc-indicator",handle:".calc-slider-handle",handleMonths:".months-slider-handle",handleInBothSliders:".ui-slider-handle",calcSlider:".calc-slider",calcAreas:".calc-areas",message:".message",headingLeft:".heading-left",headingRight:".heading-right"},o={inputInteraction:"change keyup blur"},n={hide:"hide",areaBorder:"area-border",calcIndicator:"calc-indicator",inputError:"input-error"},l={validationMessageSufix:"-validation-message"},g=Bootstrap.jQuery;
var c=function(){function w(Q,R){var P=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;
f(this,w);
this.$scope=Q;
this.fieldSettings=R;
this.customValues=P;
this.formatUtils=new t.FormatUtils();
this.setRanges();
this._initialiseInput();
this._initialiseSlider();
this.$indicator=this.$slider.find(h.calcIndicator);
this.$labelAmount=this.$scope.find(h.headingLeft);
this.$labelMonths=this.$scope.find(h.headingRight);
this.labelAmountId=this.$labelAmount.attr("id");
this.labelMonthsId=this.$labelMonths.attr("id");
this.$handleInBothSliders=this.$slider.find(h.handleInBothSliders);
this.$handleAmount=this.$slider.find(h.handle);
this.$handleMonths=this.$slider.find(h.handleMonths);
this.allySlider=new p.InputWithSliderFieldAlly(this);
this.allySlider.setAriaOnPercentageIndicator();
this.allySlider.setAriaOnSlider();
this.setCalcIndicatorPosition();
this.bindUiEvents()
}r(w,[{key:"bindUiEvents",value:function A(){var P=this;
this.$slider.on("mousedown mouseup focus",function(){return P.setCalcIndicatorPosition()
});
g(window).on("resize load",function(){return P.setCalcIndicatorPosition()
})
}},{key:"setRanges",value:function J(){this.ranges={min:this.fieldSettings.range.min,max:this.fieldSettings.range.max}
}},{key:"setRange",value:function M(P){this.fieldSettings.range=P;
this.setRanges();
this.$slider.slider(this.ranges);
this.$minLabel.html(this.formatUtils.formatNumber(this.fieldSettings.range.min));
this.$maxLabel.html(this.formatUtils.formatNumber(this.fieldSettings.range.max))
}},{key:"validateRange",value:function D(){return this._isInRange(this.fieldSettings.value)
}},{key:"setAreas",value:function G(R){var Q=this;
this.$areas.empty();
var P=R.map(function(S){if(S.min>=Q.fieldSettings.range.min&&S.max<=Q.fieldSettings.range.max){return(S.max-Q.fieldSettings.range.min)*100/(Q.fieldSettings.range.max-Q.fieldSettings.range.min)
}return null
}).filter(function(S){return S!=null
});
[0].concat(e(P)).forEach(function(S){Q.$areas.append('<span class="'.concat(n.areaBorder,'" style="margin-left:').concat(S,'%"></span>'))
})
}},{key:"setIndicatorValue",value:function E(P){this.$indicator.text(P)
}},{key:"getProperValue",value:function N(){var R=this.fieldSettings.value,Q=this.ranges.min,P=this.ranges.max;
return R>P?P:R<Q?Q:R
}},{key:"_initialiseInput",value:function I(){var P=this;
var Q="[data-calc-input=".concat(this.fieldSettings.name,"]");
this.$input=g(Q+" input",this.$scope);
this.$validationMessage=g(Q+" "+h.message,this.$scope);
g.Mustache.add(this.fieldSettings.name+l.validationMessageSufix,this.$validationMessage.html());
this.$input.val(this.formatUtils.formatNumber(this.getProperValue()));
this.$input.on(o.inputInteraction,function(){P._clearValidationMessage();
if(P._isValidNumber(P.$input.val())){P.fieldSettings.value=Number(P.$input.val().replace(/\.|,/g,""));
if(P._isInRange(P.fieldSettings.value)){P._setSliderValue(P.fieldSettings.value);
P._triggerUpdate()
}else{P._displayValidationMessage();
P._hasError()
}}else{P._displayValidationMessage();
P._hasError()
}})
}},{key:"_initialiseSlider",value:function y(){var S=this;
var Q="[data-calc-slider=".concat(this.fieldSettings.name,"]");
this.$slider=g(Q+" "+h.calcSlider,this.$scope);
this.$slider.slider({range:"min",value:this.getProperValue(),min:this.fieldSettings.range.min,max:this.fieldSettings.range.max,step:this.fieldSettings.step,slide:function P(T,U){if(S.customValues){U.value=S.findNearestValue(T,U.value);
S._setSliderValue(U.value)
}if(S.lastValue!==U.value){S.fieldSettings.value=U.value;
S._setInputValue(U.value);
S._clearValidationMessage();
S._triggerUpdate();
S.setCalcIndicatorPosition();
S.lastValue=U.value
}if(S.customValues){return false
}},create:function R(){S.$slider.find(h.handle).html('<span class="'.concat(n.calcIndicator,'">&nbsp;</span>'));
S.setCalcIndicatorPosition();
S.lastValue=S.getProperValue()
}});
this.$minLabel=g(Q+" [data-calc-label-min]",this.$scope);
this.$minLabel.html(this.formatUtils.formatNumber(this.fieldSettings.range.min));
this.$maxLabel=g(Q+" [data-calc-label-max]",this.$scope);
this.$maxLabel.html(this.formatUtils.formatNumber(this.fieldSettings.range.max));
this.$areas=this.$slider.parent().find(h.calcAreas)
}},{key:"findNearestValue",value:function L(R,S){var U=R.keyCode!=g.ui.keyCode.RIGHT,P=R.keyCode!=g.ui.keyCode.LEFT;
var Q=null,T=null;
this.customValues.forEach(function(W){if(U&&W<=S||P&&W>=S){var V=Math.abs(S-W);
if(T==null||V<T){Q=W;
T=V
}}});
return Q
}},{key:"setCalcIndicatorPosition",value:function x(){var U=this.$slider.find(h.calcIndicator).outerWidth(),W=this.$slider.find(h.handle).width(),R=this.fieldSettings.value-this.fieldSettings.range.min,Q=this.fieldSettings.range.max-this.fieldSettings.range.min,V=100*(R/Q),T=parseInt(V.toFixed(0)),P=U-W,S=T/100*P;
this.$slider.find(h.calcIndicator).css("left","-".concat(S,"px"))
}},{key:"_triggerUpdate",value:function F(){this.$scope.trigger("fieldUpdated",{name:this.fieldSettings.name,value:this.fieldSettings.value})
}},{key:"_hasError",value:function C(){this.$scope.trigger("hasError",{name:this.fieldSettings.name,value:this.fieldSettings.value})
}},{key:"_setInputValue",value:function O(P){this.$input.val(this.formatUtils.formatNumber(P))
}},{key:"_setSliderValue",value:function z(P){this.$slider.slider({value:P})
}},{key:"_isValidNumber",value:function K(P){return/^[,\.0-9]+$/.test(P)
}},{key:"_isInRange",value:function B(P){return this.fieldSettings.range.min<=P&&P<=this.fieldSettings.range.max
}},{key:"_displayValidationMessage",value:function v(){var P=this.$validationMessage.attr("id");
this.$validationMessage.empty();
this.$validationMessage.mustache(this.fieldSettings.name+l.validationMessageSufix,this.fieldSettings.range);
this.$input.addClass(n.inputError).attr("aria-describedby",P);
this.$validationMessage.removeClass(n.hide)
}},{key:"_clearValidationMessage",value:function H(){var P=this.$validationMessage.attr("id");
this.$input.removeClass(n.inputError).removeAttr("aria-describedby",P);
this.$validationMessage.addClass(n.hide)
}}]);
return w
}()
}),(function(d,e,g){g.r(e);
g.d(e,"InputWithSliderFieldAlly",function(){return a
});
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function b(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function c(k,h,j){if(h){b(k.prototype,h)
}if(j){b(k,j)
}return k
}var a=function(){function j(l){f(this,j);
this.$el=l.$el;
this.$indicator=l.$indicator;
this.$handleInBothSliders=l.$handleInBothSliders;
this.$handleAmount=l.$handleAmount;
this.$handleMonths=l.$handleMonths;
this.labelAmountId=l.labelAmountId;
this.labelMonthsId=l.labelMonthsId;
this.fieldSettings=l.fieldSettings;
this.context=l;
this.setAriaOnPercentageIndicator();
this.setAriaOnSlider()
}c(j,[{key:"setAriaOnPercentageIndicator",value:function h(){this.$indicator.attr("aria-live","off")
}},{key:"setAriaOnSlider",value:function k(){this.$handleInBothSliders.attr({role:"slider","aria-valuemin":this.fieldSettings.range.min,"aria-valuemax":this.fieldSettings.range.max,"aria-valuenow":this.fieldSettings.value});
this.$handleAmount.attr("aria-labelledby",this.labelAmountId);
this.$handleMonths.attr("aria-labelledby",this.labelMonthsId)
}}]);
return j
}()
}),(function(d,e,h){h.r(e);
h.d(e,"DataKeeper",function(){return a
});
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function c(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}var f=Bootstrap.jQuery;
var a=function(){function j(o){g(this,j);
this.lang=j.setUpLang();
this.settings=f.extend({name:"HSBC_"+this.lang+"_"+this.constructor.name,cookieSettings:{path:"/",expires:{days:365}},session:false,forceCookie:false,sessionCookieSettings:{path:"/"}},o);
this.localStorage=window.localStorage;
this.sessionStorage=window.sessionStorage;
this.hasLocalStorage=typeof this.localStorage!=="undefined";
this.hasSessionStorage=typeof this.sessionStorage!=="undefined";
this.setCookie=HSBC_utils.setCookie;
this.getCookie=HSBC_utils.getCookie
}c(j,[{key:"save",value:function m(o){var p=o||{};
if(this.settings.session){if(this.hasSessionStorage&&!this.settings.forceCookie){this.sessionStorage[this.settings.name]=JSON.stringify(p)
}else{this.setCookie(this.settings.name,JSON.stringify(p),this.settings.sessionCookieSettings)
}}else{if(this.hasLocalStorage&&!this.settings.forceCookie){this.localStorage[this.settings.name]=JSON.stringify(p)
}else{this.setCookie(this.settings.name,JSON.stringify(p),this.settings.cookieSettings)
}}}},{key:"read",value:function n(){if(this.settings.session){if(this.hasSessionStorage&&!this.settings.forceCookie){return j.parseData(this.sessionStorage[this.settings.name])
}return j.parseData(this.getCookie(this.settings.name))
}else{if(this.hasLocalStorage&&!this.settings.forceCookie){return j.parseData(this.localStorage[this.settings.name])
}return j.parseData(this.getCookie(this.settings.name))
}}}],[{key:"parseData",value:function l(o){return o?JSON.parse(o):{}
}},{key:"setUpLang",value:function k(){return f("html").attr("lang")
}}]);
return j
}()
}),(function(d,j,c){c.r(j);
c.d(j,"ResultRenderer",function(){return b
});
function h(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function e(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var a={resultTemplate:"resultTemplate"},f={resultTemplate:".result-template",result:".result"},g=Bootstrap.jQuery;
var b=function(){function l(n){h(this,l);
this.$scope=n;
this.$resultElement=g(f.result,n);
g.Mustache.add(a.resultTemplate,g(f.resultTemplate,n).html())
}e(l,[{key:"render",value:function m(n){this.$resultElement.empty();
this.$resultElement.mustache(a.resultTemplate,n)
}}]);
return l
}()
}),(function(c,g,b){b.r(g);
b.d(g,"CurrencyFormatter",function(){return a
});
function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function d(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var h={incomePrefix:".income-prefix"},f=Bootstrap.jQuery;
var a=function(){function l(m){e(this,l);
this.$el=f(m)
}d(l,[{key:"addPrefixSpacing",value:function k(){var p=this.$el.find(h.incomePrefix),m=p.next("input[name=amount]"),n=!!m.hasClass("left-placeholder-1");
var o=p.width();
if(!n){o+=18
}else{if(n){o+=14
}}m.css("padding-left",o)
}}]);
return l
}()
}),(function(d,e,g){g.r(e);
g.d(e,"CalculationRules",function(){return a
});
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function b(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function c(k,h,j){if(h){b(k.prototype,h)
}if(j){b(k,j)
}return k
}var a=function(){function j(o){f(this,j);
this.rules=o
}c(j,[{key:"calculateApr",value:function m(p){var o=this.rules.find(j.getAmountPredicate(p));
return o?o.apr:this.rules[0].apr
}},{key:"calculateAmountRange",value:function l(q){var p=this.rules.filter(j.getMonthsPredicate(q)),o=p.length?p:this.rules;
return{min:o[0].minAmount,max:o[o.length-1].maxAmount}
}},{key:"calculateMonthsRange",value:function n(p){var o=this.rules.find(j.getAmountPredicate(p)),q=o||this.rules[0];
return{min:q.minMonths,max:q.maxMonths}
}}],[{key:"getMonthsPredicate",value:function k(o){return function(p){return p.minMonths<=o.months&&o.months<=p.maxMonths
}
}},{key:"getAmountPredicate",value:function h(o){return function(p){return p.minAmount<=o.amount&&o.amount<=p.maxAmount
}
}}]);
return j
}()
}),(function(d,e,g){g.r(e);
g.d(e,"CalculationService",function(){return h
});
var b=g(9);
function f(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function c(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var h=function(){function o(p){f(this,o);
this.settings=p||{};
this.formatUtils=new b.FormatUtils(this.settings.branch)
}c(o,[{key:"getCalculationResults",value:function m(s){var t=s.apr/100,p=s.months,q=s.amount,r=o.getMonthlyRepayment(t,p,q),u=r*p;
return{amount:this.format(q),monthlyRepayment:this.format(r),totalAmount:this.format(u),apr:s.apr}
}},{key:"format",value:function n(p){return this.formatUtils.formatNumber(p)
}}],[{key:"getPmt",value:function l(r,p,q){return r*q*Math.pow(r+1,p)/(1-Math.pow(r+1,p))
}},{key:"getNominal",value:function k(q,p){return(Math.pow(q+1,1/p)-1)*p
}},{key:"getMonthlyRepayment",value:function j(r,p,q){return this.getPmt(this.getNominal(r,12)/12,p,-q)
}}]);
return o
}()
}),(function(b,g,c){c.r(g);
var s=c(12);
var q=c(20);
var r=c(17);
var a=c(18);
function k(u){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){t=function t(v){return typeof v
}
}else{t=function t(v){return v&&typeof Symbol==="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v
}
}return t(u)
}function e(t,u){if(!(t instanceof u)){throw new TypeError("Cannot call a class as a function")
}}function h(w,u){for(var t=0;
t<u.length;
t++){var v=u[t];
v.enumerable=v.enumerable||false;
v.configurable=true;
if("value" in v){v.writable=true
}Object.defineProperty(w,v.key,v)
}}function p(v,t,u){if(t){h(v.prototype,t)
}if(u){h(v,u)
}return v
}function n(u,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")
}u.prototype=Object.create(t&&t.prototype,{constructor:{value:u,writable:true,configurable:true}});
if(t){d(u,t)
}}function d(u,t){v=Object.setPrototypeOf||function v(x,w){x.__proto__=w;
return x
};
return v(u,t)
}function l(u){var v=f();
return function t(){var x=m(u),w;
if(v){var y=m(this).constructor;
w=Reflect.construct(x,arguments,y)
}else{w=x.apply(this,arguments)
}return j(this,w)
}
}function j(t,u){if(u&&(k(u)==="object"||typeof u==="function")){return u
}return o(t)
}function o(t){if(t===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return t
}function f(){if(typeof Reflect==="undefined"||!Reflect.construct){return false
}if(Reflect.construct.sham){return false
}if(typeof Proxy==="function"){return true
}try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));
return true
}catch(t){return false
}}function m(u){t=Object.setPrototypeOf?Object.getPrototypeOf:function t(v){return v.__proto__||Object.getPrototypeOf(v)
};
return t(u)
}(function(u){var w={amount:"amount",months:"months"};
var t=function(D){n(A,D);
var B=l(A);
function A(){e(this,A);
return B.apply(this,arguments)
}p(A,[{key:"initCalculationService",value:function C(){var E=this;
this.calculationService=new a.CalculationService();
this.calculationRules=new r.CalculationRules(this.config.rules);
this.amountField=new s.InputWithSliderField(this.$el,{name:w.amount,value:this.config.defaultAmount,range:this.calculationRules.calculateAmountRange(this.state),step:this.config.amountSliderStep});
this.monthsField=new s.InputWithSliderField(this.$el,{name:w.months,value:this.config.defaultMonths,range:this.calculationRules.calculateMonthsRange(this.state),step:1});
u(document).on("LoansCalculator::reinit",function(){return E.calculate()
})
}},{key:"calculate",value:function y(){var F=Object.assign({apr:this.calculationRules.calculateApr(this.state)},this.state),E=this.calculationService.getCalculationResults(F);
if(!E){return
}Object.assign(E,{amountPrefix:this.amountPrefix,percentSufix:this.percentSufix});
this.displayResult(E);
this.result=E;
u(document).trigger("LoansCalculator::recalculate",u.extend({},this.state,{amountPrefix:this.amountPrefix,percentSufix:this.percentSufix,annually:this.annually}))
}},{key:"recalculate",value:function x(E){this.state[E.name]=E.value;
this.amountField.setRange(this.calculationRules.calculateAmountRange(this.state));
this.monthsField.setRange(this.calculationRules.calculateMonthsRange(this.state));
this.setInputsAreas();
if(this.amountField.validateRange()&&this.monthsField.validateRange()){this.calculate()
}this.amountField.allySlider.setAriaOnSlider();
this.monthsField.allySlider.setAriaOnSlider()
}},{key:"displayResult",value:function z(E){this.amountField.setIndicatorValue(this.calculationRules.calculateApr(this.state)+this.percentSufix);
this.resultRenderer.render(E)
}}]);
return A
}(q.LoansCalculatorBase);
HSBC_utils.registerComponent({name:"loansCalculator",selector:".O-LNSCALC-RW-RBWM",init:function v(x){return new t(x)
}})
})(Bootstrap.jQuery)
}),(function(d,l,c){c.r(l);
c.d(l,"LoansCalculatorBase",function(){return n
});
var m=c(14);
var p=c(15);
var o=c(21);
var g=c(16);
function j(r,s){if(!(r instanceof s)){throw new TypeError("Cannot call a class as a function")
}}function q(u,s){for(var r=0;
r<s.length;
r++){var t=s[r];
t.enumerable=t.enumerable||false;
t.configurable=true;
if("value" in t){t.writable=true
}Object.defineProperty(u,t.key,t)
}}function f(t,r,s){if(r){q(t.prototype,r)
}if(s){q(t,s)
}return t
}var e={configHolder:".config-holder",headingLeft:".heading-left",headingRight:".heading-right",results:".rightholder",calculationInputs:".placeholder-left",sliderHandle:".ui-slider-handle",inputFields:".input"},k={config:"config",amountPrefix:"amount-prefix",percentSufix:"percent-sufix",annually:"annually"},b={fieldUpdated:"fieldUpdated",beforeunload:"beforeunload"},a={endpointURL:"/bin/public/gpws/calculation",auto:"auto"},h=Bootstrap.jQuery;
var n=function(){function y(D){j(this,y);
this.$el=h(D);
this.initConfig();
this.cacheDOMElements();
this.initCalculationService();
this.resultRenderer=new p.ResultRenderer(this.$el);
this.setInputsAreas();
this.calculate();
this.setEqualHeadingsHeight();
this.bindUiEvents();
this.currencyFormatter=new g.CurrencyFormatter(this.$el);
this.currencyFormatter.addPrefixSpacing();
new o.LoansCalculatorBaseAlly(this)
}f(y,[{key:"initConfig",value:function r(){var D=this.$el.find(e.configHolder);
this.config=D.data(k.config);
this.amountPrefix=D.data(k.amountPrefix)||"";
this.percentSufix=D.data(k.percentSufix)||"";
this.annually=D.data(k.annually)||"";
this.dataKeeper=new m.DataKeeper();
this.state=this.dataKeeper.read();
Object.assign(this.config,{defaultAmount:this.state.amount||this.config.defaultAmount,defaultMonths:this.state.months||this.config.defaultMonths});
Object.assign(this.state,{amount:this.state.amount||this.config.defaultAmount,months:this.state.months||this.config.defaultMonths});
this.addMinAmountToRules()
}},{key:"setInputsAreas",value:function C(){this.amountField.setAreas(this.config.rules.map(function(D){return{max:D.maxAmount,min:D.minAmount}
}))
}},{key:"cacheDOMElements",value:function t(){this.$headingLeft=this.$el.find(e.headingLeft);
this.$headingRight=this.$el.find(e.headingRight);
this.$results=this.$el.find(e.results);
this.$calculationInputs=this.$el.find(e.calculationInputs);
this.$sliderHandle=this.$el.find(e.sliderHandle);
this.$inputFields=this.$el.find(e.inputFields)
}},{key:"bindUiEvents",value:function x(){var D=this;
h(window).on("load resize",function(){return D.setEqualHeadingsHeight()
}).on(b.beforeunload,function(){return D.save()
});
this.$el.on(b.fieldUpdated,function(F,E){return D.recalculate(E)
})
}},{key:"save",value:function z(){this.dataKeeper.save(this.state)
}},{key:"setEqualHeadingsHeight",value:function s(){this.$headingLeft.height(a.auto);
this.$headingRight.height(a.auto);
if(!HSBC_utils.matchMedia.mobile){var E=[this.$headingLeft,this.$headingRight],F=[this.$headingLeft.outerHeight(),this.$headingRight.outerHeight()],D=Math.max.apply(Math,F);
E.forEach(function(G){return G.outerHeight(D)
})
}}},{key:"addMinAmountToRules",value:function A(){var D=this;
this.config.rules.forEach(function(F,E){return F.minAmount=E?D.config.rules[E-1].maxAmount+1:D.config.minAmount
})
}},{key:"calculate",value:function v(){}},{key:"initCalculationService",value:function w(){}},{key:"recalculate",value:function B(D){}},{key:"displayResult",value:function u(D){}}]);
return y
}()
}),(function(c,h,b){b.r(h);
b.d(h,"LoansCalculatorBaseAlly",function(){return g
});
function f(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function d(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var a={hasError:"hasError"},j=HSBC_utils.keyCodes,e=Bootstrap.jQuery;
var g=function(){function o(r){f(this,o);
this.$el=r.$el;
this.context=r;
this.bindUIEvents()
}d(o,[{key:"bindUIEvents",value:function n(){var r=this;
this.context.$inputFields.on("keydown",function(s){return r.removeAriaLive(s)
}).on("keyup",function(u){var s=u.keyCode,v=s===j.TAB,t=s===j.SHIFT;
if(!(t||v)){r.readResults()
}});
this.context.$sliderHandle.on("keydown",function(s){return r.handleKeyboardNavigation(s)
});
this.$el.on(a.hasError,function(){return r.readErrorMessageOnce()
})
}},{key:"removeAriaLive",value:function p(s){var t=s.keyCode===j.TAB,r=s.shiftKey;
if(e(document.activeElement).is(this.context.$inputFields)){if(t||r){this.context.$calculationInputs.removeAttr("aria-live");
this.context.amountField.$input.removeAttr("aria-live aria-atomic");
if(r){this.context.$results.removeAttr("aria-live")
}if(this.context.monthsField.$input!==undefined){this.context.monthsField.$input.removeAttr("aria-live aria-atomic")
}else{this.context.monthsField.removeAttr("aria-live aria-atomic")
}}}}},{key:"handleKeyboardNavigation",value:function l(u){var s=u.keyCode,v=s===j.TAB,w=s===j.LEFT,r=s===j.RIGHT,t=u.shiftKey;
if(e(document.activeElement).is(this.context.$sliderHandle)){if(w||r){this.context.$results.attr("aria-live","assertive");
this.context.$calculationInputs.attr("aria-live","polite")
}else{if(v||t){this.context.$results.removeAttr("aria-live");
this.context.$calculationInputs.removeAttr("aria-live")
}}}}},{key:"readResults",value:function q(){this.context.$results.attr("aria-live","assertive");
this.context.$calculationInputs.attr("aria-live","polite");
if(this.context.amountField){r(this.context.amountField.$input)
}if(this.context.monthsField){r(this.context.monthsField.$input)
}function r(s){if(e(document.activeElement).is(s)){s.attr({"aria-live":"polite","aria-atomic":"true"})
}}}},{key:"readErrorMessageOnce",value:function m(){this.context.$results.attr("aria-live","assertive");
this.context.$calculationInputs.attr("aria-live","polite")
}}]);
return o
}()
}),(function(e,f,h){h.r(f);
h.d(f,"CalculationServiceChina",function(){return a
});
var c=h(9);
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function d(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}var a=function(){function j(m){g(this,j);
this.settings=m||{};
this.formatUtils=new c.FormatUtils(this.settings.branch)
}d(j,[{key:"getCalculationResults",value:function l(q){var p=q.rate/100,m=q.months,n=q.amount,o=j.getMonthlyRepayment(p,m,n),r=o*m;
return{monthlyRepayment:this.formatUtils.formatNumber(o),totalAmount:this.formatUtils.formatNumber(r),rate:q.rate}
}}],[{key:"getMonthlyRepayment",value:function k(o,m,n){return o*n*Math.pow(o+1,m)/(Math.pow(o+1,m)-1)
}}]);
return j
}()
}),(function(c,j,b){b.r(j);
var h=b(12);
var q=b(22);
var k=b(20);
function d(t){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){s=function s(u){return typeof u
}
}else{s=function s(u){return u&&typeof Symbol==="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u
}
}return s(t)
}function g(s,t){if(!(s instanceof t)){throw new TypeError("Cannot call a class as a function")
}}function r(v,t){for(var s=0;
s<t.length;
s++){var u=t[s];
u.enumerable=u.enumerable||false;
u.configurable=true;
if("value" in u){u.writable=true
}Object.defineProperty(v,u.key,u)
}}function e(u,s,t){if(s){r(u.prototype,s)
}if(t){r(u,t)
}return u
}function o(t,s){if(typeof s!=="function"&&s!==null){throw new TypeError("Super expression must either be null or a function")
}t.prototype=Object.create(s&&s.prototype,{constructor:{value:t,writable:true,configurable:true}});
if(s){f(t,s)
}}function f(t,s){u=Object.setPrototypeOf||function u(w,v){w.__proto__=v;
return w
};
return u(t,s)
}function m(t){var u=p();
return function s(){var w=n(t),v;
if(u){var x=n(this).constructor;
v=Reflect.construct(w,arguments,x)
}else{v=w.apply(this,arguments)
}return l(this,v)
}
}function l(s,t){if(t&&(d(t)==="object"||typeof t==="function")){return t
}return a(s)
}function a(s){if(s===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return s
}function p(){if(typeof Reflect==="undefined"||!Reflect.construct){return false
}if(Reflect.construct.sham){return false
}if(typeof Proxy==="function"){return true
}try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));
return true
}catch(s){return false
}}function n(t){s=Object.setPrototypeOf?Object.getPrototypeOf:function s(u){return u.__proto__||Object.getPrototypeOf(u)
};
return s(t)
}(function(t){var v={amount:"amount",months:"months"};
var s=function(C){o(A,C);
var D=m(A);
function A(){g(this,A);
return D.apply(this,arguments)
}e(A,[{key:"initCalculationService",value:function z(){var F=this;
this.calculationService=new q.CalculationServiceChina();
this.amountField=new h.InputWithSliderField(this.$el,{name:v.amount,value:this.config.defaultAmount,range:this.calculateAmountRange(),step:this.config.amountSliderStep});
this.monthsField=this.$el.find("select[name='"+v.months+"']");
this.monthsField.val(this.config.defaultMonths);
this.monthsField.on("change",function(G){F.$el.trigger("fieldUpdated",{name:v.months,value:t(G.target).val()})
})
}},{key:"calculate",value:function y(){var G=Object.assign({rate:this.calculateRate(this.state)},this.state),F=this.calculationService.getCalculationResults(G);
if(!F){return
}Object.assign(F,{amountPrefix:this.amountPrefix,percentSufix:this.percentSufix});
this.displayResult(F);
this.result=F
}},{key:"recalculate",value:function E(F){this.state[F.name]=F.value;
this.calculate();
this.amountField.allySlider.setAriaOnSlider()
}},{key:"displayResult",value:function x(F){this.amountField.setIndicatorValue(this.calculateRate(this.state)+this.percentSufix);
this.resultRenderer.render(F)
}},{key:"calculateRate",value:function B(G){var F=this.config.rules.filter(function(H){return H.minAmount<=G.amount&&G.amount<=H.maxAmount
});
return F[0]?F[0].rate:this.config.rules[0].rate
}},{key:"calculateAmountRange",value:function w(){var F=this.config.rules;
return{min:F[0].minAmount,max:F[F.length-1].maxAmount}
}}]);
return A
}(k.LoansCalculatorBase);
HSBC_utils.registerComponent({name:"loansCalculatorChina",selector:".O-LNSCALCC-RW-RBWM",init:function u(w){return new s(w)
}})
})(Bootstrap.jQuery)
}),(function(b,f,a){a.r(f);
var d=a(25);
var g=a(18);
var h=a(17);
function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}(function(n){var k={configHolder:".config-holder",loansCalculator:".O-LNSCALC-RW-RBWM",productOffersContainer:".O-PRDOFFER-RW-RBWM"},p={config:"config",amountPrefix:"amount-prefix",percentSufix:"percent-sufix"},m={fieldUpdated:"fieldUpdated"};
var l=function(){function v(z){var A=this;
e(this,v);
this.$element=n(z);
this.$loansCalculator=this.$element.closest(k.productOffersContainer).find(k.loansCalculator);
this.readAndPrepareConfig();
if(this.config.calculate){this.state={amount:this.getAmountVal(),months:this.getMonthsVal()};
this.calculationService=new g.CalculationService();
this.calculationRules=new h.CalculationRules(this.config.rules);
this.resultRenderer=new d.OfferDetailResultRenderer(this.$element);
this.$loansCalculator.on(m.fieldUpdated,function(C,B){return A.recalculate(B)
});
this.calculate()
}}c(v,[{key:"getAmountVal",value:function u(){return Number(this.$loansCalculator.find("[data-calc-input='amount'] input").val().replace(/\.|,/g,""))
}},{key:"getMonthsVal",value:function q(){return Number(this.$loansCalculator.find("[data-calc-input='months'] input").val())
}},{key:"readAndPrepareConfig",value:function t(){var z=this.$element.find(k.configHolder),A=this.$loansCalculator.find(k.configHolder);
this.config=z.data(p.config);
this.amountPrefix=A.data(p.amountPrefix)||"";
this.percentSufix=A.data(p.percentSufix)||"";
this.addMinAmountToRules()
}},{key:"calculate",value:function s(){if(this.validate()){var A=n.extend({apr:this.calculationRules.calculateApr(this.state)},this.state),z=this.calculationService.getCalculationResults(A);
if(!z){return
}this.displayResult(z)
}else{this.resultRenderer.empty()
}}},{key:"recalculate",value:function y(z){this.state[z.name]=z.value;
this.calculate()
}},{key:"validate",value:function w(){var z=this.calculationRules.calculateAmountRange(this.state),A=this.calculationRules.calculateMonthsRange(this.state);
return z.min<=this.state.amount&&this.state.amount<=z.max&&A.min<=this.state.months&&this.state.months<=A.max
}},{key:"displayResult",value:function r(z){n.extend(z,{amount:this.state.amount,months:this.state.months,amountPrefix:this.amountPrefix,percentSufix:this.percentSufix});
this.resultRenderer.render(z)
}},{key:"addMinAmountToRules",value:function x(){var A=this.config.rules.length;
for(var z=0;
z<A;
++z){n.extend(this.config.rules[z],{minAmount:z===0?this.config.minAmount:this.config.rules[z-1].maxAmount+1})
}}}]);
return v
}();
HSBC_utils.registerComponent({name:"offerDetail",selector:".M-OFFERDETAIL-RW-RBWM",init:function o(q){return new l(q)
}})
})(Bootstrap.jQuery)
}),(function(c,j,b){b.r(j);
b.d(j,"OfferDetailResultRenderer",function(){return d
});
function h(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function e(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var a={resultBottomTemplate:"resultBottomTemplate",resultTopTemplate:"resultTopTemplate"},f={resultBottomTemplate:".result-bottom-template",resultTopTemplate:".result-top-template",resultBottom:".result-bottom",resultTop:".result-top",results:".results"},g=Bootstrap.jQuery;
var d=function(){function l(p){h(this,l);
this.$scope=p;
this.$resultElements=g(f.results,p);
this.$resultBottom=g(f.resultBottom,p);
this.$resultTop=g(f.resultTop,p);
g.Mustache.add(this.getMustacheName(a.resultBottomTemplate),g(f.resultBottomTemplate,p).html());
g.Mustache.add(this.getMustacheName(a.resultTopTemplate),g(f.resultTopTemplate,p).html())
}e(l,[{key:"render",value:function n(p){this.empty();
this.$resultBottom.mustache(this.getMustacheName(a.resultBottomTemplate),p);
this.$resultTop.mustache(this.getMustacheName(a.resultTopTemplate),p)
}},{key:"empty",value:function o(){this.$resultElements.empty()
}},{key:"getMustacheName",value:function m(p){return p+"_"+this.$scope.uniqueId().attr("id")
}}]);
return l
}()
}),(function(a,b,c){c.r(b);
var e=c(27);
if(!HSBC_utils.isEditMode()){HSBC_utils.registerComponent({name:"modal-trigger",selector:".generic-modal-setup",init:function d(f){return new e.Modals(f)
}})
}}),(function(e,f,h){h.r(f);
h.d(f,"Modals",function(){return c
});
var a=h(28);
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function d(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}var c=function(){function j(m){g(this,j);
this.$=Bootstrap.jQuery;
this.setUpModalsConfiguration();
this.createModalsFromModalsConfiguration()
}d(j,[{key:"setUpModalsConfiguration",value:function l(){this.modalsConfiguration=window.modalsConfiguration||{}
}},{key:"createModalsFromModalsConfiguration",value:function k(){this.modals={};
if(this.modalsConfiguration.modals){for(var m in this.modalsConfiguration.modals){this.modals[m]=new a.ModalTrigger(this.modalsConfiguration.modals[m])
}}}}]);
return j
}()
}),(function(e,f,h){h.r(f);
h.d(f,"ModalTrigger",function(){return a
});
var c=h(29);
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function d(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}var a=function(){function y(B){g(this,y);
this.$=Bootstrap.jQuery;
this.options={triggersSelector:'a[href]:not([href^="#"]):not(.login-button):not(.login-link):not(.except-gm)',triggerOn:"click",logoutOnAction:false,authorizedOnly:false,anonymousOnly:false,enabled:false,wildcardSymbol:"*"};
this.settings=this.$.extend({},this.options,B);
if(!this.isEnabled()){return
}this.chooseTrigger()
}d(y,[{key:"isEnabled",value:function z(){return !!this.settings.enabled
}},{key:"prepareModal",value:function v(){this.genericModal=new c.GenericModal({modalUrl:this.settings.modalUrl,showOnce:this.settings.showOnce,logoutOnAction:this.settings.logoutOnAction,authorizedOnly:this.settings.authorizedOnly,anonymousOnly:this.settings.anonymousOnly,openImmediate:this.isOnLoadTrigger(),originalPath:this.fetchPageUrl()})
}},{key:"hasWhitelist",value:function k(){return this.settings.whitelist&&!!this.settings.whitelist.length
}},{key:"hasBlacklist",value:function s(){return this.settings.blacklist&&!!this.settings.blacklist.length
}},{key:"onWhitelistMatch",value:function p(B,E,D){var C=B.url;
E=E||function(){};
if(!~this.isOnWhitelist(C)){if(D){D.preventDefault()
}E(B)
}}},{key:"isOnWhitelist",value:function n(D){var E=this;
if(!this.hasWhitelist()){return false
}var C=false,B=this.cleanUpPath(D);
if(this.hasWildcardOnWhitelist(B)){this.settings.whitelist.forEach(function(H){var G=E.buildWildcardRegexp(E.cleanUpPath(H)),F=B.match(G)||[];
if(F[0]===B&&!C){C=true
}});
return C
}else{return !!~this.settings.whitelist.indexOf(B)
}}},{key:"hasWildcardOnWhitelist",value:function t(){var B=false,C=this.settings.wildcardSymbol;
this.settings.whitelist.forEach(function(D){if(!!~D.indexOf(C)&&!B){B=true
}});
return B
}},{key:"buildWildcardRegexp",value:function q(C){C=C||"";
var B=new RegExp("\\".concat(this.settings.wildcardSymbol),"g");
return new RegExp(C.replace(B,".*"),"g")
}},{key:"onBlacklistMatch",value:function j(B,G,F){var E=this;
G=G||function(){};
var D=false,C=B.url;
this.settings.blacklist.forEach(function(H){if(!!~E.cleanUpPath(C).indexOf(H)&&!E.isOnWhitelist(C)&&!D){if(F){F.preventDefault()
}D=true;
G(B);
return
}})
}},{key:"observeTriggers",value:function w(){var B=this;
this.prepareModal();
this.$(document).on("click",this.settings.triggersSelector,function(F){var C=B.$(F.target),E,D=false;
if(B.genericModal.isAuthorizedOnly()&&!B.genericModal.isLoggedIn()||B.genericModal.isAnonymousOnly()&&B.genericModal.isLoggedIn()){return
}if(!C.attr("href")&&!C.data("href")){C=C.parents("[href]");
if(!C.length){C=C.parents("[data-href]")
}}E=C.attr("href")||C.data("href");
D=C.attr("target")=="_blank"||C.data("target")=="_blank";
B.directTrigger({url:E,isBlank:D},B.genericModal.open.bind(B.genericModal),F)
})
}},{key:"onLoad",value:function m(){var B=this;
this.$(document).ready(function(){B.directTrigger({url:B.fetchPageUrl()},B.prepareModal.bind(B))
})
}},{key:"fetchPageUrl",value:function x(){return this.$('link[rel="canonical"]').attr("href")||this.$('meta[property="og:url"]').attr("content")
}},{key:"directTrigger",value:function l(B,D,C){if(!B||!B.url){return
}if(this.hasWhitelist()&&!this.hasBlacklist()){this.onWhitelistMatch(B,D,C)
}if(this.hasBlacklist()){this.onBlacklistMatch(B,D,C)
}}},{key:"chooseTrigger",value:function r(){if(!this.settings.triggerOn){return
}if(this.isClickTrigger()){this.observeTriggers()
}else{if(this.isOnLoadTrigger()){this.onLoad()
}}}},{key:"isOnLoadTrigger",value:function o(){return this.settings.triggerOn==="load"
}},{key:"isClickTrigger",value:function u(){return this.settings.triggerOn==="click"
}},{key:"cleanUpPath",value:function A(B){B=B||"";
return B.split("#")[0].split("?")[0]
}}]);
return y
}()
}),(function(b,f,a){a.r(f);
a.d(f,"GenericModal",function(){return j
});
var d=a(30);
var h=a(31);
var g=a(32);
function e(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function c(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var j=function(){function r(H){e(this,r);
this.$=Bootstrap.jQuery;
this.options={openCssClass:"modal-show",modalSelector:".modal",proxyElement:document.body,IS_LOGGED_IN_EVENT:"dpws_authorized_true",IS_NOT_LOGGED_IN_EVENT:"dpws_authorized_false",logoutOnAction:false,authorizedOnly:false,anonymousOnly:false,showOnce:false,openImmediate:false,isBlank:false};
this.settings=this.$.extend({},this.options,H);
this.id="no-modal";
this.$proxyElement=this.$(document.body);
this.dataKeeper=new h.DataKeeper({name:"HSBC_GENERICMODAL_DATA".concat(this.modalPathToKey()),session:true,forceCookie:true});
this.storedData=this.dataKeeper.read();
this.showedOnce=!!this.storedData.showedOnce;
this.observeAuth();
this.prepare()
}c(r,[{key:"observeAuth",value:function q(){var H=this;
this.$(document).on(this.settings.IS_NOT_LOGGED_IN_EVENT,function(){if(H.isAuthorizedOnly()){H.abort()
}H.loggedIn=false
});
this.$(document).on(this.settings.IS_LOGGED_IN_EVENT,function(){if(H.isAnonymousOnly()){H.abort()
}H.loggedIn=true
})
}},{key:"onLoggedIn",value:function z(I){var H=this;
I=I||function(){};
if(this.isLoggedIn()){I()
}else{this.$(document).on(this.settings.IS_LOGGED_IN_EVENT,function(){return I.bind(H)
})
}}},{key:"onNotLoggedIn",value:function s(I){var H=this;
I=I||function(){};
this.$(document).on(this.settings.IS_NOT_LOGGED_IN_EVENT,function(){return I.bind(H)
})
}},{key:"isLoggedIn",value:function l(){return !!this.loggedIn
}},{key:"isAuthorizedOnly",value:function D(){return this.settings.authorizedOnly&&!this.settings.anonymousOnly
}},{key:"isAnonymousOnly",value:function C(){return this.settings.anonymousOnly&&!this.settings.authorizedOnly
}},{key:"modalPathToKey",value:function t(){var H=this.settings.modalUrl+"";
return H.replace(/\//g,"_")
}},{key:"setUpCurrentPath",value:function u(H){this.currentPath=H;
this.actions.currentPath=H
}},{key:"setUpIsBlank",value:function w(H){this.isBlank=H;
this.actions.isBlank=H
}},{key:"fetchModal",value:function A(){return this.$modal
}},{key:"open",value:function x(H){if(!this.$modal||this.shouldNotShowModal()){return
}this.ally.setUpLastActive();
this.setUpCurrentPath(H.url);
this.setUpIsBlank(H.isBlank);
this.$proxyElement.append(this.$modal);
this.actions.updateActionButtonAttributes();
this.actions.flagModalButtons();
this.$modal.show();
this.markAsOpen();
this.ally.setUpLastActive();
this.ally.focusOnShow();
this.ally.focusCtaOrClose();
this.ally.closeOnEsc();
this.ally.focusOnTitle();
this.stateEvent("open")
}},{key:"close",value:function y(H){if(!this.$modal){return
}if(H&&H.url){this.setUpCurrentPath(H.url)
}if(H&&H.isBlank){this.setUpIsBlank(H.isBlank)
}this.$modal.hide();
this.markAsClosed();
this.ally.backToLastActive();
this.stateEvent("close")
}},{key:"prepare",value:function m(){var I=this;
var H=this.settings.modalUrl+(document.location.port?"?wcmmode=disabled":"");
if(!~H.indexOf(this.settings.modalSelector)){H=H.replace(".html","");
H="".concat(H).concat(this.settings.modalSelector,".html")
}this.$.get(H).done(function(J){I.$modal=I.$(J);
I.identify(I.$modal);
I.actions=new d.Actions({close:I.close.bind(I),fetchModal:I.fetchModal.bind(I),showOnce:I.settings.showOnce,save:I.dataKeeper.save.bind(I.dataKeeper),logoutOnAction:I.settings.logoutOnAction,authorizedOnly:I.settings.authorizedOnly,anonymousOnly:I.settings.anonymousOnly});
I.ally=new g.Ally({fetchModal:I.fetchModal.bind(I)});
I.ally.addValidationTextToCta();
if(I.shouldOpenImmediate()){if(I.isAuthorizedOnly()){I.onLoggedIn(function(){I.open({url:I.settings.originalPath,isBlank:I.settings.isBlank})
})
}else{if(I.isAnonymousOnly()){I.onNotLoggedIn(function(){I.open({url:I.settings.originalPath,isBlank:I.settings.isBlank})
})
}else{I.open({url:I.settings.originalPath,isBlank:I.settings.isBlank})
}}}})
}},{key:"shouldOpenImmediate",value:function G(){return !!this.settings.openImmediate
}},{key:"markAsOpen",value:function E(){this.$proxyElement.addClass(this.settings.openCssClass)
}},{key:"markAsClosed",value:function n(){this.$proxyElement.removeClass(this.settings.openCssClass)
}},{key:"identify",value:function p(H){var I=H.attr("id");
if(!I){I="modal-id-".concat(Math.floor(Math.random(10000)*10000));
H.attr("id",I)
}this.id=I;
this.settings.openCssClass="".concat(this.settings.openCssClass,"-").concat(I)
}},{key:"abort",value:function o(){this.close();
this.remove();
this.stateEvent("abort")
}},{key:"remove",value:function F(){if(this.$modal&&this.$modal.length){this.$modal.remove();
this.$modal=null
}}},{key:"shouldNotShowModal",value:function v(){return this.settings.showOnce&&this.showedOnce
}},{key:"stateEvent",value:function B(H){this.$(document).trigger({type:"generic_modal_".concat(H),id:this.id})
}}]);
return r
}()
}),(function(c,d,g){g.r(d);
g.d(d,"Actions",function(){return e
});
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function a(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function b(k,h,j){if(h){a(k.prototype,h)
}if(j){a(k,j)
}return k
}var e=function(){function j(z){f(this,j);
this.$=Bootstrap.jQuery;
this.options={buttonSelector:'[class*="M-MODWIN-"] [class*="A-BT"],[class*="M-MODWIN-"] [class*="A-FSCHKB-"] [type="checkbox"],[class*="M-MODWIN-"] .close-trigger',checkboxSelector:'[class*="A-FSCHKB-"] [type="checkbox"]',actionSelector:'[class*="A-BTNP-"],[class*="A-BTNS-"]',cancelSelector:'[class*="A-BTNSO-"],[class*="A-BTNT-"]',closeSelector:".close-trigger",disabledCssClass:"disabled",exceptGmClass:"except-gm",showOnce:false,close:function C(){},fetchModal:function B(){return null
},save:function A(){},logoutOnAction:false,LOGOUT_EVENT_COMMAND:"dpws_logout_command"};
this.isBlank=false;
this.settings=this.$.extend({},this.options,z);
this.setUpModal();
this.updateButtonsSelectorWithID();
this.flagModalButtons();
this.observeButtons();
this.toggleActionButton(this.validateAsForm())
}b(j,[{key:"action",value:function p(){var z=this.validateAsForm();
if(z){this.saveShowedOnce();
if(this.shouldLogoutOnAction()){this.defer(this.logoutOnAction,1000)
}this.defer(this.settings.close)
}this.toggleActionButton(z)
}},{key:"updateActionButtonAttributes",value:function q(){this.$(this.settings.buttonSelector).filter(this.settings.actionSelector).attr({href:this.currentPath,target:this.isBlank||this.shouldLogoutOnAction()?"_blank":"_self"})
}},{key:"cancel",value:function y(){this.resetAsForm();
this.toggleActionButton(this.validateAsForm());
this.defer(this.settings.close,500)
}},{key:"updateButtonsSelectorWithID",value:function t(){if(!this.$modal){return
}this.settings.buttonSelector=this.settings.buttonSelector.replace(/\[class\*=\"M-MODWIN-\"\]/g,"#".concat(this.$modal.attr("id")))
}},{key:"observeButtons",value:function u(){var A=this;
this.$(document).on("click change",this.settings.buttonSelector,function(C){var B=A.$(C.target);
if(!z(C.target)){B=B.parents("a");
if(!B.length){B=B.parents("button")
}if(!B.length){B=B.parents("input")
}}A.dispatchAction(B)
});
function z(B){return B&&(B.tagName.toLowerCase()==="a"||B.tagName.toLowerCase()==="button"||B.tagName.toLowerCase()==="input")
}}},{key:"dispatchAction",value:function o(z){if(z.is(this.settings.actionSelector)){this.action()
}else{if(z.is(this.settings.cancelSelector)){this.cancel()
}else{if(z.is(this.settings.closeSelector)){this.callCancelButtonIfExists();
this.cancel()
}else{if(z.is(this.settings.checkboxSelector)){this.toggleActionButton(this.validateAsForm())
}}}}}},{key:"validateAsForm",value:function r(){var A=true;
if(this.$modal&&this.$modal.length){var z=this.$modal.find(this.settings.checkboxSelector);
z.each(function(C,B){A=B.checked&&A
})
}return A
}},{key:"resetAsForm",value:function s(){if(this.$modal&&this.$modal.length){this.$modal.find(this.settings.checkboxSelector).each(function(A,z){z.checked=false
})
}}},{key:"toggleActionButton",value:function w(A){var z=this.$modal.find(this.settings.actionSelector);
if(A){z.removeClass(this.settings.disabledCssClass)
}else{z.addClass(this.settings.disabledCssClass)
}}},{key:"setUpModal",value:function n(){if(typeof this.settings.fetchModal!=="function"){return
}this.$modal=this.settings.fetchModal()
}},{key:"logoutOnAction",value:function l(){this.$(document).trigger(this.settings.LOGOUT_EVENT_COMMAND)
}},{key:"shouldLogoutOnAction",value:function x(){return !!this.settings.logoutOnAction
}},{key:"saveShowedOnce",value:function m(){if(typeof this.settings.save!=="function"&&!this.settings.showOnce){return
}this.settings.save({showedOnce:true})
}},{key:"callCancelButtonIfExists",value:function v(){var z=this.$modal.find(this.settings.cancelSelector);
document.location.href=z.attr("href")
}},{key:"flagModalButtons",value:function k(){this.$(this.settings.buttonSelector).addClass(this.settings.exceptGmClass)
}},{key:"defer",value:function h(A,z){A=A||function(){};
z=z||2000;
return setTimeout(A.bind(this),z)
}}]);
return j
}()
}),(function(d,e,h){h.r(e);
h.d(e,"DataKeeper",function(){return a
});
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function c(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}var f=Bootstrap.jQuery;
var a=function(){function j(o){g(this,j);
this.lang=j.setUpLang();
this.settings=f.extend({name:"HSBC_"+this.lang+"_"+this.constructor.name,cookieSettings:{path:"/",expires:{days:365}},session:false,forceCookie:false,sessionCookieSettings:{path:"/"}},o);
this.localStorage=window.localStorage;
this.sessionStorage=window.sessionStorage;
this.hasLocalStorage=typeof this.localStorage!=="undefined";
this.hasSessionStorage=typeof this.sessionStorage!=="undefined";
this.setCookie=HSBC_utils.setCookie;
this.getCookie=HSBC_utils.getCookie
}c(j,[{key:"save",value:function m(o){var p=o||{};
if(this.settings.session){if(this.hasSessionStorage&&!this.settings.forceCookie){this.sessionStorage[this.settings.name]=JSON.stringify(p)
}else{this.setCookie(this.settings.name,JSON.stringify(p),this.settings.sessionCookieSettings)
}}else{if(this.hasLocalStorage&&!this.settings.forceCookie){this.localStorage[this.settings.name]=JSON.stringify(p)
}else{this.setCookie(this.settings.name,JSON.stringify(p),this.settings.cookieSettings)
}}}},{key:"read",value:function n(){if(this.settings.session){if(this.hasSessionStorage&&!this.settings.forceCookie){return j.parseData(this.sessionStorage[this.settings.name])
}return j.parseData(this.getCookie(this.settings.name))
}else{if(this.hasLocalStorage&&!this.settings.forceCookie){return j.parseData(this.localStorage[this.settings.name])
}return j.parseData(this.getCookie(this.settings.name))
}}}],[{key:"parseData",value:function l(o){return o?JSON.parse(o):{}
}},{key:"setUpLang",value:function k(){return f("html").attr("lang")
}}]);
return j
}()
}),(function(c,d,g){g.r(d);
g.d(d,"Ally",function(){return e
});
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function a(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function b(k,h,j){if(h){a(k.prototype,h)
}if(j){a(k,j)
}return k
}var e=function(){function p(t){f(this,p);
this.$=Bootstrap.jQuery;
this.options={focusableFrameCssClass:"M-MODWIN-RW-DEV",buttonSelector:'[class*="M-MODWIN-"] [class*="A-BT"],[class*="M-MODWIN-"] .A-FSCHKB-RW-ALL [type="checkbox"],[class*="M-MODWIN-"] .close-trigger',checkboxSelector:'[class*="A-FSCHKB-"] [type="checkbox"]',actionSelector:'[class*="A-BTNP-"],[class*="A-BTNS-"]',cancelSelector:'[class*="A-BTNSO-"],[class*="A-BTNT-"]',closeCssClass:"close-trigger",disabledCssClass:"disabled",validationMessageSelector:"[data-validation-message]",validationMessageKey:"validation-message",validationMessageCssClass:"validation-message",closeKeyboadKey:27,fetchModal:function u(){return null
}};
this.settings=this.$.extend({},this.options,t);
this.setUpLastActive();
this.setUpModal();
this.setUpCta()
}b(p,[{key:"focusOnShow",value:function q(t){var u=this.$(".".concat(this.settings.focusableFrameCssClass)).get(0);
if(u){u.focus()
}}},{key:"focusOnTitle",value:function k(){var t=this.$modal.find("h3").get(0);
if(t){t.focus()
}}},{key:"setUpModal",value:function n(){if(typeof this.settings.fetchModal!=="function"){return
}this.$modal=this.settings.fetchModal()
}},{key:"focusCtaOrClose",value:function o(){var u=this.$cta;
if(!u&&!u.length){u=this.$modal.find(".".concat(this.settings.closeTrigger))
}var t=u.get(0);
if(t){t.focus()
}}},{key:"setUpCta",value:function h(){this.$cta=this.$modal.find(".".concat(this.settings.actionCssClass))
}},{key:"closeOnEsc",value:function j(){var u=this;
var t=this.$modal.find(".".concat(this.settings.closeCssClass));
this.$(document).on("keyup",function(v){if(u.$modal.is(":visible")&&v.which==u.settings.closeKeyboadKey&&t.length){t.get(0).click()
}})
}},{key:"setUpLastActive",value:function l(){this.lastActive=document.activeElement
}},{key:"backToLastActive",value:function m(){var t=this.$(this.lastActive);
if(!t.is("a")&&!t.is("button")&&!t.is("input")&&!t.is(document.body)){t=t.parents("a");
if(!t.length){t=t.parents("button")
}if(!t.length){t=t.parents("input")
}if(!t.length){t=t.parents(document.body)
}}this.$(t.get(0)).focus()
}},{key:"fetchValidationText",value:function s(){return this.$modal.find(this.settings.validationMessageSelector).data(this.settings.validationMessageKey)||"is disabled"
}},{key:"addValidationTextToCta",value:function r(){var t=this.$cta.find(".".concat(this.settings.validationMessageCssClass));
if(!t.length){t=this.$('<span class="visuallyhidden '.concat(this.settings.validationMessageCssClass,'">').concat(this.fetchValidationText(),"</span>"));
t.appendTo(this.$cta)
}}}]);
return p
}()
}),(function(c,d,g){g.r(d);
var e=g(34);
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function a(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function b(k,h,j){if(h){a(k.prototype,h)
}if(j){a(k,j)
}return k
}(function(m){var l={expanded:"expanded"},k={accordion:".O-ACCRD-RW-RBWM",expander:".expander",dropdown:".dropdown",expandableElements:".dropdown-text, .exp-content",expandableDropdown:".exp-content"};
var h=function(){function o(s,t){f(this,o);
this.APP=t;
this.$el=m(s);
this.$dropdown=this.$el.find(k.dropdown);
this.dropdownBorder=this.$dropdown.css("border");
this.bindUiEvents();
this.tealiumObserver=new e.TealiumObserver(this.$dropdown,{event_type:"click",event_category:"content",event_action:"accordion",event_content:function u(v){return m(v).parents(".A-EXPCNT-RW-RBWM").siblings(".anchor").attr("id")
}})
}b(o,[{key:"bindUiEvents",value:function r(){var s=this;
this.$dropdown.on("click",function(t){return s.collapseOtherExpanders(t)
}).on("keydown",function(t){if(t.keyCode===HSBC_utils.keyCodes.ENTER||t.keyCode===HSBC_utils.keyCodes.SPACE){s.collapseOtherExpanders(t)
}})
}},{key:"collapseOtherExpanders",value:function q(w){var v=m(w.target).closest(k.expander);
this.$dropdown.each(function(){var x=m(this).closest(k.expander);
if(!v.is(x)){o.collapseExpander(x)
}});
this.$dropdown.css("border-bottom",this.dropdownBorder);
var s=this.APP.globalComponents.headerController.calculateHeaderHeight(v);
var t=m(w.currentTarget)[0]===window||m(w.currentTarget)[0]===document?m(w.target):m(w.currentTarget);
var u=t.offset().top-s;
window.scroll(0,u)
}}],[{key:"collapseExpander",value:function p(s){s.find(k.expandableElements).removeClass(l.expanded);
s.find(k.dropdown).attr("aria-expanded","false");
if(HSBC_utils.isMobileAndroid){s.find(k.expandableDropdown).attr("aria-hidden","true")
}}}]);
return o
}();
var j={name:"accordion",selector:k.accordion,init:function n(o,p){return new h(o,p)
}};
m(window).on("load",function(){return HSBC_utils.registerComponent(j)
})
})(Bootstrap.jQuery)
}),(function(c,d,g){g.r(d);
g.d(d,"TealiumObserver",function(){return h
});
function f(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function b(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var e=jQuery;
var h=function(){function o(r,p,q){f(this,o);
this.$=e||Bootstrap.jQuery;
this.element=r;
this.$elements=e(r);
this.config=p||{};
this.options={usePageDefaults:true,observeImmediate:true,trackViewImmediate:false,nativeObserver:false,condition:function s(){return true
}};
this.settings=this.$.extend({},this.options,q);
if(this.settings.usePageDefaults){this.fetchPageDefaults()
}if(this.settings.observeImmediate){this.observe()
}if(this.settings.trackViewImmediate){this.triggerView()
}}b(o,[{key:"fetchPageDefaults",value:function k(){if(typeof window.utag_data==="undefined"){if(window.console){console.log("TealiumObserver info: Tealium is not set up on this page and/or utag_data is not defined")
}return
}this.config=this.$.extend(this.config,{page_url:utag_data.page_url||"",site_section:utag_data.site_section||"",page_language:utag_data.page_language||"",page_type:utag_data.page_type||"",page_customer_group:utag_data.page_customer_group||"",page_business_line:utag_data.page_business_line||"",page_name:utag_data.page_name||"",page_category:utag_data.page_category||"",page_subcategory:utag_data.page_subcategory||""})
}},{key:"observe",value:function m(){var q=this;
var p=this.config.event_type||"click";
if(this.settings.nativeObserver){this.element.on(p,function(r){return q.trigger(r)
})
}else{this.$elements.on(p,function(r){return q.trigger(r)
})
}}},{key:"triggerView",value:function n(){if(!this.settings.condition()){return
}if(typeof window.TMS!="undefined"){TMS.trackView(o.updateConfig(this.config))
}}},{key:"trigger",value:function l(p){if(!this.settings.condition()){return
}if(typeof window.TMS!="undefined"){TMS.trackEvent(o.updateConfig(this.config,p.target))
}else{if(window.console){console.log("TealiumObserver info: Tealium is not set up on this page and/or TMS is not defined")
}}}}],[{key:"updateConfig",value:function j(q,r){var p=q;
if(typeof q.event_action==="function"){p=e.extend({},p,{event_action:q.event_action(r)||""})
}if(typeof q.event_subcategory==="function"){p=e.extend({},p,{event_subcategory:q.event_subcategory(r)||""})
}if(typeof q.event_content==="function"){p=e.extend({},p,{event_content:q.event_content(r)||""})
}return p
}}]);
return o
}()
}),(function(b,f,a){a.r(f);
var d=a(36);
var g=a(18);
var h=a(17);
function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}(function(n){var k={configHolder:".config-holder",loansCalculator:".O-LNSCALC-RW-RBWM",productOffersContainer:".M-PRDOFFER-RW-RBWM"},m={monthlyRepayment:"N/A",apr:"N/A",totalAmount:"N/A"},q={config:"config"},l={fieldUpdated:"fieldUpdated",calculator:{recalculate:"LoansCalculator::recalculate",reinit:"LoansCalculator::reinit"}};
var o=function(){function w(z){e(this,w);
this.$element=n(z);
this.readAndPrepareConfig();
this.calculationService=new g.CalculationService();
this.calculationRules=new h.CalculationRules(this.config.rules);
this.resultRenderer=new d.ProductDynamicRatesRenderer(this.$element);
this.hookUpOnCalculatorEvents()
}c(w,[{key:"hookUpOnCalculatorEvents",value:function r(){var z=this;
n(document).on(l.calculator.recalculate,function(A,B){z.state=B;
z.calculate()
});
n(document).trigger(l.calculator.reinit);
if(!this.state){this.displayResult(m)
}}},{key:"readAndPrepareConfig",value:function y(){var z=this.$element.find(k.configHolder);
this.config=z.data(q.config);
this.addMinAmountToRules()
}},{key:"calculate",value:function t(){if(this.validate()){var A=Object.assign({apr:this.calculationRules.calculateApr(this.state)},this.state),z=this.calculationService.getCalculationResults(A);
if(!z){return
}this.displayResult(Object.assign(z,this.state,{amount:z.amount}))
}else{this.displayResult(Object.assign(m,{amount:(this.state.amountPrefix||"")+this.calculationService.format(this.state.amount),months:this.state.months}))
}}},{key:"recalculate",value:function s(z){this.state[z.name]=z.value;
this.calculate()
}},{key:"validate",value:function x(){var z=this.calculationRules.calculateAmountRange(this.state),A=this.calculationRules.calculateMonthsRange(this.state);
return z.min<=this.state.amount&&this.state.amount<=z.max&&A.min<=this.state.months&&this.state.months<=A.max
}},{key:"displayResult",value:function v(z){this.resultRenderer.render(z)
}},{key:"addMinAmountToRules",value:function u(){var A=this.config.rules.length;
for(var z=0;
z<A;
++z){n.extend(this.config.rules[z],{minAmount:z===0?this.config.minAmount:this.config.rules[z-1].maxAmount+1})
}}}]);
return w
}();
HSBC_utils.registerComponent({name:"productDynamicRates",selector:".M-PRDDNRTS-RW-DEV",init:function p(r){return new o(r)
}})
})(Bootstrap.jQuery)
}),(function(d,j,c){c.r(j);
c.d(j,"ProductDynamicRatesRenderer",function(){return b
});
function h(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function e(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var a={resultTemplate:"resultTemplate"},f={result:".result",template:".result-template"},g=Bootstrap.jQuery;
var b=function(){function l(p){h(this,l);
this.$scope=p;
this.$result=g(f.result,p);
g.Mustache.add(this.getMustacheName(a.resultTemplate),g(f.template,p).html())
}e(l,[{key:"render",value:function n(p){this.empty();
this.$result.mustache(this.getMustacheName(a.resultTemplate),p)
}},{key:"empty",value:function o(){this.$result.empty()
}},{key:"getMustacheName",value:function m(p){return p+"_"+this.$scope.uniqueId().attr("id")
}}]);
return l
}()
}),(function(a,b,c){c.r(b);
var e=c(38);
if(!HSBC_utils.isEditMode()){HSBC_utils.registerComponent({name:"BackToTop",selector:".M-ARTICLEBACKTOTOP-ART-DEV .A-TYPS5R-RW-DEV",init:function d(f){return new e.BackToTop(f)
}})
}}),(function(d,m,c){c.r(m);
c.d(m,"BackToTop",function(){return b
});
var a=c(5);
function k(o,p){if(!(o instanceof p)){throw new TypeError("Cannot call a class as a function")
}}function n(r,p){for(var o=0;
o<p.length;
o++){var q=p[o];
q.enumerable=q.enumerable||false;
q.configurable=true;
if("value" in q){q.writable=true
}Object.defineProperty(r,q.key,q)
}}function f(q,o,p){if(o){n(q.prototype,o)
}if(p){n(q,p)
}return q
}var l=Bootstrap.jQuery;
var e={active:"active",topOfContent:"top-of-content",articleBackToTop:"M-ARTICLEBACKTOTOP-ART-DEV"},h=l("html"),j=l(document.body),g=l(document);
var b=function(){function p(t){k(this,p);
this.$backToTopLink=l(t);
this.$topOfContent=g.find(".".concat(e.topOfContent));
this.$articleBackToTop=g.find(".".concat(e.articleBackToTop));
this.bindUiEvents();
this.articleBackToTopTabindex()
}f(p,[{key:"bindUiEvents",value:function r(){var t=this;
this.$backToTopLink.on("click",function(v){var u=HSBC_utils.isChrome?j:h;
v.preventDefault();
u.animate({scrollTop:0},400,undefined,t.setFocusToTopOfContentElement.bind(t));
a.TealiumUtils.trackEvent({event_type:"click",event_category:"content",event_action:"onsite",event_content:"Back to top"})
});
g.bind("focusin click swipe",function(u){t.hideSpanWhenLosesFocus(u)
})
}},{key:"hideSpanWhenLosesFocus",value:function q(t){var u=t.target;
if(this.$topOfContent.hasClass(e.active)){if(!this.$topOfContent.is(u)){this.$topOfContent.removeClass(e.active).attr({tabindex:-1,"aria-hidden":"true"})
}}}},{key:"setFocusToTopOfContentElement",value:function o(){this.$topOfContent.addClass(e.active).attr({tabindex:0,"aria-hidden":"false"}).focus()
}},{key:"articleBackToTopTabindex",value:function s(){if(this.$articleBackToTop){this.$backToTopLink.attr("tabindex","0")
}}}]);
return p
}()
}),(function(a,b,d){d.r(b);
var c=d(40);
var f=d(41);
if(!HSBC_utils.isEditMode()){HSBC_utils.registerComponent({name:"O-ARTICLEBOOKEND-ART-DEV",selector:".O-ARTICLEBOOKEND-ART-DEV",init:function e(g){return new c.ArticleBookend(g)
}});
HSBC_utils.registerComponent({name:"social-share",selector:".social-share",init:function e(g){return new f.SocialSharing(g)
}})
}}),(function(b,g,a){a.r(g);
a.d(g,"ArticleBookend",function(){return h
});
function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var f=Bootstrap.jQuery,d={notActive:"not-active",nextStep:".next-steps",socialShare:".social-share",separatorLine:"separator-line"};
var h=function(){function m(n){e(this,m);
this.$el=f(n);
this.$findNextStep=this.$el.find(d.nextStep);
this.$findSocialShare=this.$el.find(d.socialShare);
this.addClassActive();
this.addClassSeparatorLine()
}c(m,[{key:"addClassActive",value:function l(){if(this.$el.children().length===0){this.$el.addClass(d.notActive)
}else{this.$el.removeClass(d.notActive)
}}},{key:"addClassSeparatorLine",value:function k(){if(this.$findNextStep.length>0){this.$findSocialShare.addClass(d.separatorLine)
}else{this.$findSocialShare.removeClass(d.separatorLine)
}}}]);
return m
}()
}),(function(c,j,b){b.r(j);
b.d(j,"SocialSharing",function(){return k
});
var h=b(34);
function f(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}function l(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}function e(o,m,n){if(m){l(o.prototype,m)
}if(n){l(o,n)
}return o
}var g=Bootstrap.jQuery,d={links:"a[href]",visuallyHidden:".visuallyhidden"},a={triggerPrefix:".trigger-"};
var k=function(){function u(x){f(this,u);
this.$el=g(x);
this.$links=this.$el.find(d.links);
this.facebook();
this.twitter();
this.pinterest();
this.linkedin();
new h.TealiumObserver(this.$links,{event_type:"click",event_category:"share",event_action:function w(y){return g(y).parent().find(d.visuallyHidden).text()
}})
}e(u,[{key:"facebook",value:function r(){var w=this;
this.processSocialLink("facebook",function(){return{"{{url}}":w.fetchUrl()}
})
}},{key:"twitter",value:function q(){var w=this;
this.processSocialLink("twitter",function(){return{"{{url}}":w.fetchUrl(),"{{pagetitle}}":w.fetchPageTitle()}
})
}},{key:"pinterest",value:function p(){var w=this;
this.processSocialLink("pinterest",function(){return{"{{imageurl}}":w.fetchContentImageUrl(),"{{imagename}}":w.fetchPageTitle(),"{{imagedescription}}":w.fetchPageSummary()}
})
}},{key:"linkedin",value:function n(){var w=this;
this.processSocialLink("linkedin",function(){return{"{{url}}":w.fetchUrl()}
})
}},{key:"fetchUrl",value:function t(){var w=g('[property="og:url"]').attr("content");
return w||document.location.href
}},{key:"fetchContentImageUrl",value:function m(){return g('[property="og:image"]').attr("content")
}},{key:"fetchPageTitle",value:function s(){return g('[property="og:title"]').attr("content")||g("title").text()
}},{key:"fetchPageSummary",value:function o(){return g('[property="og:description"]').attr("content")||g('[name="description"]').attr("content")
}},{key:"processSocialLink",value:function v(y,B){var x=this.$el.find(a.triggerPrefix+y);
if(x.length){var w=x.data("href-template");
var C=B();
for(var z in C){var A=C[z];
w=w.replace(z,A?encodeURIComponent(A):"")
}x.attr("href",w)
}}}]);
return u
}()
}),(function(b,c,d){d.r(c);
var a=d(43);
if(!HSBC_utils.isEditMode()){HSBC_utils.registerComponent({name:"O-ARTICLETITLE-RW-ALL",selector:".O-ARTICLETITLE-RW-ALL",init:function e(f){return new a.ArticleTitle(f)
}})
}}),(function(c,h,b){b.r(h);
b.d(h,"ArticleTitle",function(){return a
});
function f(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function e(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var g=Bootstrap.jQuery,j={selector:".O-ARTICLETITLE-RW-ALL",imgWrapper:".img-wrapper",titleWrapper:".title-wrapper",gridWrapper:".intro-title"},d={active:"active"};
var a=function(){function l(n){f(this,l);
this.$el=g(n);
this.$imgWrapper=this.$el.find(j.imgWrapper).find(".noImage");
this.$articleTitle=this.$el.find(j.titleWrapper);
this.$gridWrapper=g(j.gridWrapper);
this.addClassActive()
}e(l,[{key:"addClassActive",value:function m(){if(this.$imgWrapper.length>0){this.$articleTitle.addClass(d.active);
this.$gridWrapper.addClass(d.active)
}else{this.$articleTitle.removeClass(d.active);
this.$gridWrapper.removeClass(d.active)
}}}]);
return l
}()
}),(function(a,b,d){d.r(b);
var c=d(38);
if(!HSBC_utils.isEditMode()){HSBC_utils.registerComponent({name:"BackToTop",selector:".M-BACKTOTOP-RW-RBWM .A-LNKAU-RW-ALL",init:function e(f){return new c.BackToTop(f)
}})
}}),(function(b,g,a){a.r(g);
a.d(g,"BrightcoveVideo",function(){return h
});
var d=a(46);
function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var f=jQuery;
var h=function(){function n(q,p){e(this,n);
this.$=f||Bootstrap.jQuery;
this.wrapper=q;
this.options={accountId:"6178286542001",playerSelector:".brc-player",dataAccountSelector:"[data-account]",dataAccountKey:"account"};
this.settings=this.$.extend({},this.options,p);
this.playerElement=this.$(this.wrapper).find(this.settings.playerSelector).get(0);
this.fetchAccountId();
this.loadVideoJs()
}c(n,[{key:"fetchAccountId",value:function l(){var p=this.$(this.wrapper).find(this.settings.dataAccountSelector).data(this.settings.dataAccountKey);
this.settings.accountId=p||this.settings.accountId
}},{key:"isLibLoaded",value:function k(){return window.videojs!==undefined
}},{key:"loadVideoJs",value:function m(){var p=this;
this.video=new d.Video(this.wrapper,this.settings);
if(this.isLibLoaded()){this.observeVideo()
}else{this.video.loadVideoJs(function(){p.observeVideo()
}.bind(this))
}}},{key:"observeVideo",value:function o(){var p=this;
videojs(this.playerElement).ready(function(){p.player=videojs(p.playerElement)
})
}}]);
return n
}()
}),(function(d,e,h){h.r(e);
h.d(e,"Video",function(){return a
});
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function c(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}var f=jQuery;
var a=function(){function j(m,l){g(this,j);
this.$=f||Bootstrap.jQuery;
this.options={brightcoveDomain:"players.brightcove.net",accountId:"6178286542001",selectorPart:"default_default",brightcoveJsFileName:"index.min.js"};
this.settings=this.$.extend({},this.options,l)
}c(j,[{key:"loadVideoJs",value:function k(m){var l="//".concat(this.settings.brightcoveDomain,"/").concat(this.settings.accountId,"/").concat(this.settings.selectorPart,"/").concat(this.settings.brightcoveJsFileName);
m=m||function(){};
this.$.getScript(l,m.bind(this))
}}]);
return j
}()
}),(function(b,c,d){d.r(c);
var a=d(45);
HSBC_utils.registerComponent({name:"brightcoveVideo",selector:".brightcoveVideo",init:function e(f){return new a.BrightcoveVideo(f)
}})
}),(function(c,d,f){f.r(d);
var g=f(49);
function e(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function a(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function b(k,h,j){if(h){a(k.prototype,h)
}if(j){a(k,j)
}return k
}(function(n){if(HSBC_utils.isIE8orLower()){return
}var q={slideModule:".M-CAR3-RW-RBWM, .M-CARVID-RW-RBWM",pagination:".A-CARPAGD-RW-ALL, .A-CARPAGL-RW-ALL",threeTileSlide:"M-CAR3-RW-RBWM",videoSlide:"M-CARVID-RW-RBWM",tileMaster:".M-TILMAST-RW-RBWM",tilePanel:".A-PNL-RW-ALL",mCar:".M-CAR3-RW-RBWM",clone:".clone",row:".row"},m={carouselRow:"carousel-row",carouselHolder:"carousel-holder",initialized:"initialized",invisible:"invisible-on-mobile-tablet"},o=400,l=3;
var p=function(){function D(K){e(this,D);
this.$el=n(K);
this.$slidesContainer=this.$el.find(".carousel-inner");
this.addClassToParentRow();
this.updateTilesInRowNumber();
this.bindUiEvents();
this.createClones();
this.tileWidth=k(this.$el,"width")/this.tilesInRow;
this.setVisible();
this.updateInlineStyles();
this.initPagination();
this.toggleArrows();
this.animationComplete=true;
this.prevWindowWidth=n(window).width();
this.resize();
this.allyHelper=new g.CarouselAlly(this)
}b(D,[{key:"addClassToParentRow",value:function s(){var L=this.$el.closest(q.row),K=this.$el.parent();
L.addClass(m.carouselRow);
K.addClass(m.carouselHolder)
}},{key:"getCurrentSlide",value:function y(){var K=this.currentTile-this.leftOffset;
if(K<0){K=this.meatballsNr+K
}else{if(K>=this.meatballsNr){K=0
}}return K
}},{key:"getAdditionalTranslation",value:function B(){var K=0;
for(var L=0;
L<this.currentTile;
L++){K+=this.tileData[L].translation
}return K
}},{key:"initPagination",value:function t(){var Q=this;
var K=this.$el.find(q.pagination),L=n(document.createDocumentFragment()),N={button:"<button></button>",li:"<li></li>"};
K.empty();
for(var M=0;
M<this.meatballsNr;
M++){var P=void 0,O=void 0;
P=n(N.li);
O=n(N.button).attr("data-id",M+this.currentTile).attr("tabindex",-1).attr("title","pagination");
P.append(O);
L.append(P);
if(HSBC_utils.matchMedia.desktop){O.on("click",function(R){return Q.meatballsClickHandler(R)
})
}}K.append(L);
this.updateMeatballs();
n(q.slideModule).css("display","block")
}},{key:"meatballsClickHandler",value:function H(L){var K=n(L.target),M=parseInt(K.attr("data-id"));
this.swipe(null,M)
}},{key:"bindUiEvents",value:function v(){var M=this;
var K=this.$el.find(".next"),L=this.$el.find(".prev");
L.on("click",function(){return M.swipe(1,null)
});
K.on("click",function(){return M.swipe(-1,null)
});
this.$el.on("carousel:reinitialize",function(){return M.resize(true)
});
n(window).on("resize",function(){return M.resize()
})
}},{key:"swipe",value:function z(K,M){var Q=this;
var L=k(this.$slidesContainer,"padding-left"),N=this.$el.find(".prev"),P=this.$el.find(".next");
var R,O,S;
if(!this.animationComplete||this.arrowsHidden){return
}this.$slidesContainer.removeClass("no-transition");
this.animationComplete=false;
if(!K){S=this.calculateDistancePx(M,-L,true);
this.currentTile=M
}else{this.currentTile+=-K;
S=this.calculateDistancePx(this.currentTile,-L,true)
}this.$slidesContainer.css("margin-left",S);
R=this.currentTile===0;
O=this.currentTile===this.tileData.length-this.rightOffset;
if(R){this.currentTile=this.tileData.length-this.rightOffset-this.leftOffset
}else{if(O){this.currentTile=this.leftOffset
}}this.updateMeatballs();
N.attr("aria-hidden",true);
P.attr("aria-hidden",true);
setTimeout(function(){var T=0;
if(R){T=Q.calculateDistancePx(Q.tileData.length-Q.rightOffset-Q.leftOffset,-L,true)
}else{if(O){T=Q.calculateDistancePx(Q.leftOffset,-L,true)
}}if(R||O){Q.$slidesContainer.addClass("no-transition").css("margin-left",T)
}Q.animationComplete=true;
Q.allyHelper.setFocus();
Q.allyHelper.setTabIndexes();
Q.allyHelper.setAccessibilityTexts();
N.removeAttr("aria-hidden");
P.removeAttr("aria-hidden")
},o)
}},{key:"createClones",value:function A(){this.$slidesContainer.find(q.clone).remove();
var M=this.$el.find(q.slideModule);
var K,L,N;
if(!M.length){return
}K=M.last().clone(true,true);
L=M.first().clone(true,true);
N=K.add(L);
N.addClass("clone").find("cq").remove();
N.find("[id]").removeAttr("id");
this.$slidesContainer.prepend(K,M.first());
this.$slidesContainer.append(L)
}},{key:"updateTilesInRowNumber",value:function u(){if(HSBC_utils.matchMedia.desktop){this.tilesInRow=3
}else{if(HSBC_utils.matchMedia.tablet){this.tilesInRow=2
}else{this.tilesInRow=1
}}}},{key:"resize",value:function F(M){var L=n(window).width(),K=this.prevWindowWidth!==L;
if(!K&&this.$el.hasClass(m.initialized)&&!M){return
}this.updateTilesInRowNumber();
if(M){this.createClones()
}this.tileWidth=k(this.$el,"width")/this.tilesInRow||this.tileWidth;
this.updateInlineStyles();
this.initPagination();
this.toggleArrows();
this.currentTile=this.leftOffset;
this.prevWindowWidth=L
}},{key:"resizeTile",value:function I(){var O=this.$el.find(q.tileMaster),M=this.$el.find(q.mCar),L=[],K=2;
var N=0;
if(O.length){O.height("auto");
O.each(function(P,Q){return L.push(n(Q).outerHeight(true))
});
N=Math.max.apply(null,L);
M.height(N+K);
O.height(N)
}}},{key:"updateInlineStyles",value:function w(){var M=k(this.$slidesContainer,"padding-left"),T=this.$el.find(q.slideModule);
var K,U;
this.tileData=[];
this.meatballsNr=0;
for(var Q=0,R=T.length;
Q<R;
Q++){var P=T.eq(Q);
if(HSBC_utils.matchMedia.mobile){if(P.hasClass(q.threeTileSlide)){for(var O=0;
O<l;
O++){this.tileData.push({width:this.tileWidth,translation:0,tilesInSlide:1})
}P.width(l*this.tileWidth)
}else{if(P.hasClass(q.videoSlide)){this.tileData.push({width:this.tileWidth,translation:0,tilesInSlide:1});
P.width(this.tileWidth)
}}}else{if(HSBC_utils.matchMedia.tablet){if(P.hasClass(q.threeTileSlide)){var L=T.eq(Q+1),S=T.eq(0);
for(var N=0;
N<l;
N++){this.tileData.push({width:this.tileWidth,translation:0,tilesInSlide:2});
if(N===0&&(L.length&&L.hasClass(q.videoSlide)||Q===R-1&&S.hasClass(q.videoSlide))){this.tileData.push({width:this.tileWidth*2,translation:1,tilesInSlide:2});
break
}}P.width(l*this.tileWidth)
}else{if(P.hasClass(q.videoSlide)){this.tileData.push({width:this.tileWidth*2,translation:0,tilesInSlide:1});
P.width(this.tileWidth*2)
}}}else{if(P.hasClass(q.threeTileSlide)){this.tileData.push({width:this.tileWidth*l,translation:0,tilesInSlide:3})
}else{if(P.hasClass(q.videoSlide)){this.tileData.push({width:this.tileWidth*l,translation:0,tilesInSlide:1})
}}P.width(this.tileWidth*l)
}}if(Q===0){this.leftOffset=this.tileData.length
}if(Q===R-2){this.rightOffset=this.tileData.length
}}this.leftOffset=this.leftOffset||0;
this.rightOffset=this.tileData.length-this.rightOffset||0;
this.currentTile=this.leftOffset;
this.meatballsNr+=this.tileData.length-this.leftOffset-this.rightOffset;
K=this.calculateDistancePx(this.currentTile,-M,true);
U=this.calculateDistancePx(null,M*2);
this.$slidesContainer.addClass("no-transition").css({"margin-left":K,width:U});
this.resizeTile()
}},{key:"calculateOffset",value:function x(L){var M=0;
if(typeof L==="undefined"||L===null){L=this.tileData.length
}for(var K=0;
K<L;
K++){if(this.tileData[K]){M+=this.tileData[K].width
}}return M
}},{key:"calculateDistancePx",value:function G(N,L,K){var M=K?-1:1;
return M*this.calculateOffset(N)+L+"px"
}},{key:"toggleArrows",value:function E(){if(HSBC_utils.matchMedia.desktop&&this.tileData.length<=l){this.$el.addClass("arrows-hidden");
this.arrowsHidden=true
}else{this.$el.removeClass("arrows-hidden");
this.arrowsHidden=false
}}},{key:"updateMeatballs",value:function J(){var M=this.$el.find(q.pagination).find("button"),L=M.length;
var K=this.currentTile-this.leftOffset;
M.removeClass("active");
if(K<0){K=L+K
}else{if(K>=L){K=0
}}var N=M.eq(K);
if(N.length){N.addClass("active")
}}},{key:"setVisible",value:function C(){var K=!!window.location.hash;
this.$el.removeClass(m.invisible);
if(!HSBC_utils.matchMedia.desktop&&!K){n(window).scrollTop(0)
}}}]);
return D
}();
function k(s,t){return parseInt(s.css(t))
}function h(s){n(s).trigger("carousel:reinitialize")
}var j={name:"carousel",reinitIfParent:true,selector:".O-CAR-RW-RBWM",init:function r(s){return new p(s)
},reinit:h};
n(window).on("load",function(){return HSBC_utils.registerComponent(j)
})
})(Bootstrap.jQuery)
}),(function(b,g,a){a.r(g);
a.d(g,"CarouselAlly",function(){return d
});
function e(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function c(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var f=Bootstrap.jQuery,h=HSBC_utils.keyCodes,j={focusables:HSBC_utils.focusables.join(),tile:".tile",slidesNotCloned:".M-CAR3-RW-RBWM:not(.clone), .M-CARVID-RW-RBWM:not(.clone)"};
var d=function(){function q(r){e(this,q);
this.$el=r.$el;
this.context=r;
this.$prevButtonHiddenText=this.$el.find(".prev .visuallyhidden");
this.$nextButtonHiddenText=this.$el.find(".next .visuallyhidden");
this.initAccessibilityTexts();
this.setTabIndexes();
this.bindUIEvents()
}c(q,[{key:"initAccessibilityTexts",value:function o(){this.accessibilityTexts={prevButton:this.$prevButtonHiddenText.text(),nextButton:this.$nextButtonHiddenText.text()}
}},{key:"bindUIEvents",value:function n(){var s=this;
var r=this.context;
f(window).on("resize",function(){s.setAccessibilityTexts();
s.setTabIndexes()
});
this.$el.on("keydown",function(u){var t=u.keyCode;
if(t===h.LEFT){r.swipe(1,null)
}else{if(t===h.RIGHT){r.swipe(-1,null)
}}})
}},{key:"setAccessibilityTexts",value:function p(){var s=this.context,u=s.getCurrentSlide()+1,t=this.accessibilityTexts.prevButton.replace("{current}",u).replace("{last}",s.meatballsNr),r=this.accessibilityTexts.nextButton.replace("{current}",u).replace("{last}",s.meatballsNr);
this.$prevButtonHiddenText.text(t);
this.$nextButtonHiddenText.text(r)
}},{key:"setTabIndexes",value:function m(){var r=this.context,C=j.focusables,y=r.$slidesContainer.find(C);
if(!r.tileData.length){return
}y.attr("tabindex",-1);
if(HSBC_utils.matchMedia.desktop){var z=r.$slidesContainer.find(j.slidesNotCloned),x=z.eq(r.getCurrentSlide()),s=x.find(C);
s.attr("tabindex",0)
}else{var B=r.$slidesContainer.find(j.tile),u=r.tileData[r.currentTile].tilesInSlide,v=r.currentTile+u;
for(var w=r.currentTile;
w<v;
w++){var t=B.eq(w+r.getAdditionalTranslation()),A=t.find(C);
A.attr("tabindex",0)
}}}},{key:"setFocus",value:function l(){var s=this.context;
var u;
if(HSBC_utils.matchMedia.desktop){var t=s.$slidesContainer.find(j.slidesNotCloned),w=s.getCurrentSlide();
u=t.eq(w)
}else{var v=s.$slidesContainer.find(j.tile),r=s.currentTile+s.getAdditionalTranslation();
u=v.eq(r)
}u.find(j.focusables).first().focus()
}}]);
return q
}()
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(m){var k={richText:".rich-text",quote:".quote"},j={quote:"quote"},h={quote:"<q></q>"},f={currentDate:/\{\{currentDate\}\}/g};
var l=function(){function q(s){e(this,q);
this.$el=m(s);
this.moment=moment;
if(!HSBC_utils.isEditMode()){this.setUpCurrenDate();
this.fillCurrentDate();
this.setQuotes()
}}c(q,[{key:"setQuotes",value:function p(){var s=this.$el.find(k.quote);
s.each(function(){var v=m(this),u=v.html(),t=m(h.quote);
t.html(u).addClass(j.quote);
v.replaceWith(t)
})
}},{key:"setUpCurrenDate",value:function r(){var s=this.$el.find("[data-date-format]").data("date-format");
var t=this.$el.find("[data-zone]").data("zone");
this.currentDate=this.moment.tz(t).format(s)
}},{key:"fillCurrentDate",value:function o(){var s=this.$el.html();
this.$el.html(s.replace(f.currentDate,this.currentDate))
}}]);
return q
}();
var g={name:"richText",selector:k.richText,init:function n(o){return new l(o)
}};
HSBC_utils.registerComponent(g)
})(Bootstrap.jQuery)
}),(function(c,e,g){g.r(e);
var d=g(52);
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function a(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function b(k,h,j){if(h){a(k.prototype,h)
}if(j){a(k,j)
}return k
}(function(k){var q={smallWidth:100,mediumWidth:200,fixedSpacing:10},o={tableWrapper:".table-wrapper",adaptableTable:".adaptable-table",caption:"caption"},m={adaptableTable:"adaptable-table",adaptableTablePlaceholder:"adaptable-table-placeholder"},l={tableRendered:"table:rendered"},j=k(".tab-widget-tab-content").not(".hidden"),n=j.width();
var p=function(){function v(z){f(this,v);
if(!HSBC_utils.isEditMode()&&!HSBC_utils.isIE8orLower()){this.$el=k(z);
this.bindUIEvents();
this.bindElements();
this.parseMarkup();
this.adjustTableSize();
new d.TablesAlly(this)
}}b(v,[{key:"bindUIEvents",value:function x(){var z=this;
k(window).on("resize",function(){z.adjustTableSize()
});
this.$el.on(l.tableRendered,function(){z.bindElements();
z.generateCaption();
z.adjustTableSize()
})
}},{key:"bindElements",value:function u(){this.$tableWrapper=this.$el.find(o.tableWrapper).last();
this.$table=this.$tableWrapper.find("table").last();
this.$cells=this.$table.find("th, td");
this.$stickyColumn=this.$table.find("tr > td:first-child, tr > th:first-child");
this.columnsCount=this.$table.find("tr:first-child > th, tr:first-child > td").length;
this.$caption=this.$table.find(o.caption);
this.$adaptableTable=this.$el.find(o.adaptableTable);
if(this.$adaptableTable.length==0){this.$adaptableTable=this.$el.find(o.adaptableTablePlaceholder)
}}},{key:"parseMarkup",value:function t(){this.$table.removeAttr("height width border cellpadding cellspacing");
this.$cells.removeAttr("height width border cellpadding cellspacing")
}},{key:"resetAdaptableTable",value:function s(){if(this.$adaptableTable.length>0){this.$adaptableTable.css({"padding-left":0})
}this.$tableWrapper.css({"overflow-x":"auto"});
this.$stickyColumn.css({width:"auto",height:"auto",left:"auto",position:"static"});
this.$table.css("min-width","100%");
this.$cells.css("width","auto");
if(this.$adaptableTable.length>0){this.$adaptableTable.removeClass(m.adaptableTable);
this.$adaptableTable.addClass(m.adaptableTablePlaceholder)
}}},{key:"applyAdaptableTable",value:function y(){var A=!HSBC_utils.matchMedia.mobile?q.mediumWidth:q.smallWidth,F=this.$stickyColumn.first(),B={x:F.innerWidth()-F.width(),y:F.innerHeight()-F.height()},C=this.$table.closest(".tab-widget-tab-content").length>0?n:this.$table.width(),D=C;
if(this.columnsCount>1){D=(C/(this.columnsCount-1)).toFixed(2)
}var G=HSBC_utils.getMatchMediaUnit();
if(this.$caption){var z=2*G;
this.$caption.css("top",z);
var I=this.$caption.height()+z*2;
this.$table.css("margin-top",I)
}else{var E=2*G;
this.$table.css("margin-top",E)
}if(this.$adaptableTable.length==0){this.$adaptableTable=k('<div class="'.concat(m.adaptableTable,'"></div>'));
this.$tableWrapper.wrap(this.$adaptableTable);
this.$adaptableTable=this.$el.find(o.adaptableTable)
}else{this.$adaptableTable.addClass(m.adaptableTable);
this.$adaptableTable.removeClass(m.adaptableTablePlaceholder)
}this.$stickyColumn.each(function(J,K){var L=k(K);
if(!HSBC_utils.matchMedia.mobile&&L.width()>A){A=L.width()
}else{A=q.smallWidth
}});
this.$cells.width(D);
var H=A-q.fixedSpacing+B.x;
this.$adaptableTable.css({paddingLeft:H});
this.$tableWrapper.css({"overflow-x":"scroll"});
this.$stickyColumn.css({width:A,left:0,position:"absolute"});
this.$stickyColumn.each(function(K,M){var N=k(M),L=N.parent("tr"),J=(L.height()>N.innerHeight()?L.height():N.innerHeight())-B.y;
L.find("td,th").css({height:J})
})
}},{key:"adjustTableSize",value:function w(){this.bindElements();
this.resetAdaptableTable();
if(this.$el.width()<this.$table.width()){this.applyAdaptableTable()
}if(this.$table.closest(".hidden").length>0&&!HSBC_utils.matchMedia.mobile){this.$table.css("width",n);
this.$el.css("width",n)
}this.$el.css("width","auto");
this.$table.css("width","auto")
}}]);
return v
}();
var h={name:"smptbl",selector:".M-SMPTBL-RW-RBWM",init:function r(s){return new p(s)
}};
HSBC_utils.registerComponent(h)
})(Bootstrap.jQuery)
}),(function(c,h,b){b.r(h);
b.d(h,"TablesAlly",function(){return d
});
function f(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function e(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var g=Bootstrap.jQuery,a={iconTickText:"data-accessibility-tick-icon-text",iconCrossText:"data-accessibility-cross-icon-text"},j={iconTick:".icon-agree",iconCross:".icon-minimize",tableWrapper:".table-wrapper",visuallyhidden:".visuallyhidden"};
var d=function(){function m(n){f(this,m);
this.$el=n.$el;
this.$iconTick=this.$el.find(j.iconTick);
this.$iconCross=this.$el.find(j.iconCross);
this.$tableWrapper=this.$el.find(j.tableWrapper);
this.context=n;
this.setTablesIconCrossAndTickTexts()
}e(m,[{key:"setTablesIconCrossAndTickTexts",value:function l(){this.iconsTexts={tick:this.$tableWrapper.attr(a.iconTickText),cross:this.$tableWrapper.attr(a.iconCrossText)};
this.$iconTick.find(j.visuallyhidden).html(this.iconsTexts.tick);
this.$iconCross.find(j.visuallyhidden).html(this.iconsTexts.cross)
}}]);
return m
}()
}),(function(b,c,d){d.r(c);
var a=d(54);
if(!HSBC_utils.isEditMode()){HSBC_utils.registerComponent({name:"M-CNT-ITEM-ART-DEV",selector:".M-CNT-ITEM-ART-DEV",init:function e(f){return new a.ContainerItem(f,{clickableImage:false})
}})
}}),(function(c,d,g){g.r(d);
g.d(d,"ContainerItem",function(){return e
});
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function a(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function b(k,h,j){if(h){a(k.prototype,h)
}if(j){a(k,j)
}return k
}var e=function(){function p(s,r){f(this,p);
this.$=Bootstrap.jQuery;
this.options={titleLinkSelector:".item-title a.A-TYPS4L-RW-DEV",imageSelector:"img",selector:".M-CNT-ITEM-ART-DEV",focusCssClass:"has-focus",hoverCssClass:"has-hover",hasLinkCssClass:"has-link",clickableImage:true};
this.settings=this.$.extend({},this.options,r);
this.makeImagesFocusable();
this.observeImages();
this.observeLinks()
}b(p,[{key:"makeImagesFocusable",value:function q(){var s=this;
var r=this.$("".concat(this.settings.selector," ").concat(this.settings.titleLinkSelector));
if(!this.settings.clickableImage){return
}r.each(function(u,t){s.$(t).parents(s.settings.selector).find(s.settings.imageSelector).addClass(s.settings.hasLinkCssClass)
})
}},{key:"observeImages",value:function o(){var r=this;
var s="".concat(this.settings.selector," ").concat(this.settings.imageSelector);
if(!this.settings.clickableImage){return
}this.$(document).on("click",s,function(t){r.clickLink(t.target)
}).on("focus",s,function(t){r.markAsFocused(t.target)
}).on("blur",s,function(t){r.unmarkAsFocused(t.target);
r.unmarkAsHovered(t.target)
}).on("hover",s,function(t){r.markAsHovered(t.target)
})
}},{key:"observeLinks",value:function n(){var r=this;
var s="".concat(this.settings.selector," ").concat(this.settings.titleLinkSelector);
this.$(document).on("focus",s,function(t){r.markAsFocused(t.target)
}).on("blur",s,function(t){r.unmarkAsFocused(t.target);
r.unmarkAsHovered(t.target)
}).on("hover",s,function(t){r.markAsHovered(t.target)
})
}},{key:"clickLink",value:function m(s){var r=this.$(s).parents(this.settings.selector).find(this.settings.titleLinkSelector).get(0);
if(r){r.click()
}}},{key:"markAsFocused",value:function h(t,v){var u=this.$(t).parents(this.settings.selector),s=u.find(this.settings.imageSelector),r=u.find(this.settings.titleLinkSelector);
if(!v){if(this.settings.clickableImage){s.addClass(this.settings.focusCssClass)
}r.addClass(this.settings.focusCssClass)
}else{if(this.settings.clickableImage){s.removeClass(this.settings.focusCssClass)
}r.removeClass(this.settings.focusCssClass)
}}},{key:"markAsHovered",value:function k(t,v){var u=this.$(t).parents(this.settings.selector),s=u.find(this.settings.imageSelector),r=u.find(this.settings.titleLinkSelector);
if(!v){if(this.settings.clickableImage){s.addClass(this.settings.hoverCssClass)
}r.addClass(this.settings.hoverCssClass)
}else{if(this.settings.clickableImage){s.removeClass(this.settings.hoverCssClass)
}r.removeClass(this.settings.hoverCssClass)
}}},{key:"unmarkAsFocused",value:function j(r){this.markAsFocused(r,"blur")
}},{key:"unmarkAsHovered",value:function l(r){this.markAsHovered(r,"blur")
}}]);
return p
}()
}),(function(b,c,e){e.r(c);
var d=e(56);
var a=e(57);
if(!HSBC_utils.isEditMode()){HSBC_utils.registerComponent({name:"M-CNT-ART-DEV",selector:".M-CNT-ART-DEV",init:function f(g){return new d.Container(g)
}});
HSBC_utils.registerComponent({name:"container-more",selector:".M-CNT-ART-DEV .button-wrapper a",init:function f(g){return new a.More(g)
}})
}}),(function(d,e,g){g.r(e);
g.d(e,"Container",function(){return a
});
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function b(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function c(k,h,j){if(h){b(k.prototype,h)
}if(j){b(k,j)
}return k
}var a=function(){function h(m,l){f(this,h);
this.$=Bootstrap.jQuery;
this.options={moduleSelector:".M-CNT-ART-DEV",wrapperSelector:".container-content",itemSelector:".M-CNT-ITEM-ART-DEV, .M-HERO-ART-DEV",containerItemSelector:".M-CNT-ITEM-ART-DEV",imgSmallXsSelector:".item-layout__oposite-img-small",spacingCssClass:"f-spacing"};
this.$el=this.$(m);
this.settings=this.$.extend({},this.options,l);
this.updateRoles();
this.updateSpacings()
}c(h,[{key:"updateRoles",value:function k(){var l=this.$el.parent(),n=l.find(this.settings.itemSelector);
m(l,n);
function m(o,p){if(p.length>1){p.attr("role","listitem");
o.attr("role","list")
}else{p.removeAttr("role");
o.removeAttr("role")
}}}},{key:"updateSpacings",value:function j(){this.$containerItemChild=this.$el.find(this.settings.containerItemSelector);
this.$imgXS=this.$containerItemChild.find(this.settings.imgSmallXsSelector);
if(this.$imgXS.length){this.$el.addClass(this.settings.spacingCssClass)
}else{this.$el.removeClass(this.settings.spacingCssClass)
}}}]);
return h
}()
}),(function(b,e,a){a.r(e);
a.d(e,"More",function(){return k
});
var f=a(58);
var h=a.n(f);
var g=a(34);
function d(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function j(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function c(n,l,m){if(l){j(n.prototype,l)
}if(m){j(n,m)
}return n
}var k=function(){function D(P,O){d(this,D);
this.$=h.a||Bootstrap.jQuery;
this.options={containerSelector:".M-CNT-ART-DEV",buttonSelector:'.M-CNT-ART-DEV .button-wrapper[data-show-more-enabled*="true"] a',startSelector:".M-CNT-ART-DEV .container-title-wrapper",buttonsWrapperSelector:".button-wrapper",containerContentSelector:".container-content",hiddenSetSelector:"[data-container-hidden-set]",dataContainerHiddenSetKey:"container-hidden-set",dataEnabledKey:"show-more-enabled",dataContainersSetSize:"show-more-containers-set-size",dataEndSetMessage:"end-set-message",containersSetSize:3,rootPath:"/_jcr_content/par-main-content",articleRootPath:"/_jcr_content/par-additional-content",setAemSelector:"set",containerCurtainCssClass:"container-curtain",showMoreSetEndMessageCssClass:"show-more-set-end-message A-TYPS5R-RW-DEV A-DIVHL-RW-ALL",endSetMessage:"No more articles",articlePageCssClass:"articlePage",bottomSpacingCssClass:"A-DIVHLFOO-RW-DEV",loadedSetSelector:".loaded-set"};
this.settings=this.$.extend({},this.options,O);
this.setUpConfigButtonContainer(P);
if(!this.isEnabled(P)){return
}this.updateSetSize();
this.updateEndSetMessage();
this.observeButton();
this.setOffset();
this.setEndState();
this.cleanUpEmpty()
}c(D,[{key:"setUpConfigButtonContainer",value:function F(O){this.$configButtonWrapper=this.$(O).parents(this.settings.buttonsWrapperSelector)
}},{key:"isArticlePage",value:function v(){return this.$(document.body).hasClass(this.settings.articlePageCssClass)
}},{key:"isEnabled",value:function M(O){return !!this.$configButtonWrapper.data(this.settings.dataEnabledKey)
}},{key:"updateSetSize",value:function l(O){this.settings.containersSetSize=this.$configButtonWrapper.data(this.settings.dataContainersSetSize)||this.settings.containersSetSize
}},{key:"updateEndSetMessage",value:function z(O){this.settings.endSetMessage=this.$configButtonWrapper.data(this.settings.dataEndSetMessage)||this.settings.endSetMessage
}},{key:"cleanUpEmpty",value:function n(O){var Q=this;
var P=O||document.body;
this.$(P).find(this.settings.containerSelector).each(function(R,T){var S=Q.$(T);
if(!S.find("div").length){S.remove()
}})
}},{key:"populate",value:function w(O){this.cleanUpEmpty(O);
this.$containersCollection=O.find(this.settings.containerSelector)
}},{key:"setUpCurrentButton",value:function t(O){this.$currentButton=this.$(O)
}},{key:"getCurrentButton",value:function B(){return this.$(this.$currentButton)
}},{key:"observeButton",value:function p(){var O=this;
this.$(document).on("click",this.settings.buttonSelector,function(P){P.preventDefault();
O.setUpCurrentButton(P.target);
O.load()
});
this.tealium(this.$(this.settings.buttonSelector).get(0))
}},{key:"load",value:function y(){var P=this;
var O=this.$('<div class="container-set-proxy hidden"></div>');
if(this.isLoaded()){this.out();
this.moveButton();
this.showEndSetMessage();
this.moveBottomSpacing();
return
}this.curtain();
O.load("".concat(this.fetchUrl()),function(){P.populate(O);
P.setCurrentControllContainer();
P.out();
P.moveButton();
P.showEndSetMessage();
P.moveBottomSpacing();
P.setLoaded();
P.curtain("hide")
});
this.defer(function(){P.curtain("hide")
},5000)
}},{key:"out",value:function I(){var S=this.$container,Q=this.$containersCollection.length,O=this.offset+this.settings.containersSetSize>Q?Q:this.offset+this.settings.containersSetSize,P;
this.$prevContainer=S;
for(P=this.offset;
P<O;
P++){var R=this.$containersCollection.get(P);
S.after(R);
S=this.$(R)
}this.focusOnFirstFocusableOrContainer();
this.setEndState(P==Q);
this.setCurrentControllContainer(S);
this.setOffset(P)
}},{key:"focusOnFirstFocusableOrContainer",value:function C(){var O=this.$containersCollection.get(this.offset);
if(!O){return
}var P=this.$(O).find("a").get(0);
if(P){P.focus()
}else{this.$(O).attr("tabindex",0);
O=this.$(O).get(0);
if(O){O.focus()
}}}},{key:"setCurrentControllContainer",value:function E(O){this.$container=O||this.fetchContainerComponent()
}},{key:"setOffset",value:function N(O){this.offset=O||0
}},{key:"setLoaded",value:function A(){this.loaded=true
}},{key:"setEndState",value:function s(O){this.endState=!!O
}},{key:"isSetEnd",value:function G(){return this.endState
}},{key:"isLoaded",value:function r(){return !!this.loaded
}},{key:"moveButton",value:function K(){var O=this;
var P=this.fetchButtonsComponent();
P=P.remove();
if(this.isSetEnd()){return
}this.defer(function(){O.$container.find(O.settings.containerContentSelector).after(P);
O.tealium(P.get(0))
})
}},{key:"showEndSetMessage",value:function L(){var O=this;
if(!this.isSetEnd()){return
}this.defer(function(){O.$container.find(O.settings.containerContentSelector).after('<p class="'.concat(O.settings.showMoreSetEndMessageCssClass,'">').concat(O.settings.endSetMessage,"</p>"))
})
}},{key:"fetchUrl",value:function u(){var P="".concat(this.isArticlePage()?this.settings.articleRootPath:this.settings.rootPath,".").concat(this.settings.setAemSelector,".html");
var O=document.location.pathname;
O=O.split(".html")[0];
return"".concat(O).concat(P).concat(document.location.port?"?wcmmode=disabled":"")
}},{key:"fetchContainerComponent",value:function o(){return this.getCurrentButton().parents(this.settings.containerSelector)
}},{key:"fetchButtonsComponent",value:function H(){return this.getCurrentButton().parents(this.settings.buttonsWrapperSelector)
}},{key:"curtain",value:function q(P){var Q=this.fetchContainerComponent();
Q=Q.length?Q:this.$container;
var O=Q.parent().find(".".concat(this.settings.containerCurtainCssClass));
if(!O.length&&!P){O=this.$('<div class="'.concat(this.settings.containerCurtainCssClass,'"></div>'));
Q.parent().append(O)
}if(!P){O.show()
}else{O.hide()
}}},{key:"defer",value:function m(R,O){var P=R||function(){},Q=O||1;
return setTimeout(P.bind(this),Q)
}},{key:"moveBottomSpacing",value:function J(){var O=this;
if(!this.$prevContainer||!this.$prevContainer.length){return
}var P=this.$(this.$prevContainer).find(".".concat(this.settings.bottomSpacingCssClass));
if(!P.length){return
}this.defer(function(){O.$container.find(O.settings.loadedSetSelector).after(P.remove())
})
}},{key:"tealium",value:function x(O){new g.TealiumObserver(O,{event_type:"click",event_action:"button",tealium_event:"link",event_category:"content",event_content:"view more",raw_datalayer:"3684v5"})
}}]);
return D
}()
}),(function(b,a){b.exports=jQuery
}),(function(b,c,d){d.r(c);
var a=d(60);
if(!HSBC_utils.isEditMode()){HSBC_utils.registerComponent({name:"M-HERO-ART-DEV",selector:".M-HERO-ART-DEV",init:function e(f){return new a.Hero(f)
}})
}}),(function(b,e,a){a.r(e);
a.d(e,"Hero",function(){return g
});
var f=a(58);
var h=a.n(f);
function d(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var g=function(){function q(u,t){d(this,q);
this.$=h.a||Bootstrap.jQuery;
this.options={titleLinkSelector:".hero-content a.A-TYPS2L-RW-DEV",imageSelector:"img",selector:".M-HERO-ART-DEV",focusCssClass:"has-focus",hoverCssClass:"has-hover",hasLinkCssClass:"has-link"};
this.settings=this.$.extend({},this.options,t);
this.makeImagesFocusable();
this.observeImages();
this.observeLinks()
}c(q,[{key:"makeImagesFocusable",value:function s(){var u=this;
var t=this.$("".concat(this.settings.selector," ").concat(this.settings.titleLinkSelector));
t.each(function(w,v){u.$(v).parents(u.settings.selector).find(u.settings.imageSelector).addClass(u.settings.hasLinkCssClass)
})
}},{key:"observeImages",value:function r(){var t=this;
this.$(document).on("click","".concat(this.settings.selector," ").concat(this.settings.imageSelector),function(u){t.clickLink(u.target)
}).on("focus","".concat(this.settings.selector," ").concat(this.settings.imageSelector),function(u){t.markAsFocused(u.target)
}).on("blur","".concat(this.settings.selector," ").concat(this.settings.imageSelector),function(u){t.unmarkAsFocused(u.target);
t.unmarkAsHovered(u.target)
}).on("hover","".concat(this.settings.selector," ").concat(this.settings.imageSelector),function(u){t.markAsHovered(u.target)
})
}},{key:"observeLinks",value:function p(){var t=this;
this.$(document).on("focus","".concat(this.settings.selector," ").concat(this.settings.titleLinkSelector),function(u){t.markAsFocused(u.target)
}).on("blur","".concat(this.settings.selector," ").concat(this.settings.titleLinkSelector),function(u){t.unmarkAsFocused(u.target);
t.unmarkAsHovered(u.target)
}).on("hover","".concat(this.settings.selector," ").concat(this.settings.titleLinkSelector),function(u){t.markAsHovered(u.target)
})
}},{key:"clickLink",value:function o(u){var t=this.$(u).parents(this.settings.selector).find(this.settings.titleLinkSelector).get(0);
if(t){t.click()
}}},{key:"markAsFocused",value:function k(v,x){var w=this.$(v).parents(this.settings.selector),u=w.find(this.settings.imageSelector),t=w.find(this.settings.titleLinkSelector);
if(!x){u.addClass(this.settings.focusCssClass);
t.addClass(this.settings.focusCssClass)
}else{u.removeClass(this.settings.focusCssClass);
t.removeClass(this.settings.focusCssClass)
}}},{key:"markAsHovered",value:function m(v,x){var w=this.$(v).parents(this.settings.selector),u=w.find(this.settings.imageSelector),t=w.find(this.settings.titleLinkSelector);
if(!x){u.addClass(this.settings.hoverCssClass);
t.addClass(this.settings.hoverCssClass)
}else{u.removeClass(this.settings.hoverCssClass);
t.removeClass(this.settings.hoverCssClass)
}}},{key:"unmarkAsFocused",value:function l(t){this.markAsFocused(t,"blur")
}},{key:"unmarkAsHovered",value:function n(t){this.markAsHovered(t,"blur")
}}]);
return q
}()
}),(function(b,f){function h(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}function l(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}function c(o,m,n){if(m){l(o.prototype,m)
}if(n){l(o,n)
}return o
}var j=Bootstrap.jQuery,e={cookieBanner:"#cookie-banner",bannerDismissOpt:".cookie-banner-optout",submitButton:"#cmSubmitButton"},d={hidden:"hidden"},a={props:{path:"/",expires:{months:6}},dismissName:"cookie_banner_dismiss"};
var g=function(){function o(p){h(this,o);
this.$submitButton=j(p);
this.$cookieBanner=j(e.cookieBanner);
this.$bannerDismissOpt=j(e.bannerDismissOpt);
this.$form=this.$submitButton.closest("form");
this.$radios=j("input:radio",this.$form);
this.bindUIEvents()
}c(o,[{key:"bindUIEvents",value:function n(){var p=this;
this.$form.on("submit",function(q){p.clicked();
q.preventDefault()
})
}},{key:"clicked",value:function m(){var p;
if(!this.$cookieBanner.hasClass(d.hidden)){this.$cookieBanner.addClass(d.hidden)
}if(!this.$bannerDismissOpt.hasClass(d.hidden)){this.$bannerDismissOpt.addClass(d.hidden)
}if(this.$radios&&(p=this.$radios.filter(":checked")).length){HSBC_utils.setCookie(p.attr("name"),p.val(),a.props)
}var q=new Date().getTime();
HSBC_utils.setCookie(a.dismissName,q,a.props)
}}]);
return o
}();
HSBC_utils.registerComponent({name:"CookieManagementSubmitButton",selector:e.submitButton,init:function k(m){return new g(m)
}})
}),(function(b,c,d){d.r(c);
var f=d(63);
var a=d(64);
if(!HSBC_utils.isEditMode()){HSBC_utils.registerComponent({name:"expander-toggle",selector:".M-CNT-EXPLIN-DEV .element",init:function e(g){new f.ExpanderLink(g);
new a.ExpanderLinkTealium(g)
}})
}}),(function(c,k,b){b.r(k);
b.d(k,"ExpanderLink",function(){return d
});
function h(n,o){if(!(n instanceof o)){throw new TypeError("Cannot call a class as a function")
}}function m(q,o){for(var n=0;
n<o.length;
n++){var p=o[n];
p.enumerable=p.enumerable||false;
p.configurable=true;
if("value" in p){p.writable=true
}Object.defineProperty(q,p.key,p)
}}function e(p,n,o){if(n){m(p.prototype,n)
}if(o){m(p,o)
}return p
}var f={expanded:"is-expanded",hidden:"hidden-desc"},l={expanderItem:".element",expanderLinkTitle:".expanderLink-title",expanderDescription:".content-description",expanderLinkIcon:".icon"},j={up:"icon-new-chevron_up",down:"icon-new-chevron_down"},a={expand:"custom:expand"};
var g=Bootstrap.jQuery;
var d=function(){function r(t){h(this,r);
this.$el=g(t);
this.$el.addClass(f.hidden);
this.isExpanded=false;
this.$arrowIcon=this.$el.find(l.expanderLinkIcon).first();
this.expanderLinkTitle=this.$el.find(l.expanderLinkTitle);
this.expanderLinkTitle.attr("aria-expanded","false");
this.bindUIEvents()
}e(r,[{key:"toggleExpander",value:function n(){if(this.isExpanded){this.collapse()
}else{this.expand();
this.triggerExpandEvent()
}}},{key:"expand",value:function q(){this.$el.addClass(f.expanded);
this.expanderLinkTitle.attr("aria-expanded","true");
this.$arrowIcon.addClass(j.up).removeClass(j.down);
this.isExpanded=true
}},{key:"collapse",value:function s(){this.$el.removeClass(f.expanded);
this.expanderLinkTitle.attr("aria-expanded","false");
this.$arrowIcon.addClass(j.down).removeClass(j.up);
this.isExpanded=false
}},{key:"bindUIEvents",value:function o(){var t=this;
this.expanderLinkTitle.on("click",function(){t.toggleExpander()
}).on("keydown",function(u){if(u.keyCode===HSBC_utils.keyCodes.ENTER){t.toggleExpander(u)
}})
}},{key:"triggerExpandEvent",value:function p(){g(this.expanderLinkTitle).trigger(a.expand)
}}]);
return r
}()
}),(function(b,e,a){a.r(e);
a.d(e,"ExpanderLinkTealium",function(){return j
});
var f=a(58);
var h=a.n(f);
var g=a(34);
function d(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function c(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var j=function(){function n(o,p){d(this,n);
this.el=o;
this.$=h.a||Bootstrap.jQuery;
this.options={expanderLinkTitleSelector:".expanderLink-title",expanderLinkTitleTextElementSelector:".A-TYPS4L-RW-DEV"};
this.settings=this.$.extend({},this.options,p);
this.setUpTrigger();
this.observeTrigger()
}c(n,[{key:"setUpTrigger",value:function l(){this.$trigger=this.$(this.el).find(this.settings.expanderLinkTitleSelector)
}},{key:"observeTrigger",value:function m(){var p=this;
new g.TealiumObserver(this.$trigger,{event_type:"custom:expand",event_action:"accordion",tealium_event:"link",event_category:"content",event_content:function o(){return p.$trigger.find(p.settings.expanderLinkTitleTextElementSelector).text().trim()
},raw_datalayer:"3685v2"})
}}]);
return n
}()
}),(function(b,g,a){a.r(g);
a.d(g,"Feedback",function(){return j
});
var c=a(66);
function e(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}function l(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}function d(o,m,n){if(m){l(o.prototype,m)
}if(n){l(o,n)
}return o
}var f=jQuery;
var k={component:".M-LIKE-AND-FEEDBACK-DPWS",dislikeButton:".dislike-btn",likeAndFeedbackWrapper:".like-and-feedback-wrapper",mainQuestionWrapper:".main-question-wrapper",likeButton:".like-btn",feedbackOptionsWrapper:".feedback-options-wrapper",feedbackButton:".feedback-btn",confirmationMessageWrapper:".confirmation-message-wrapper ",confirmationMessage:".confirmation-message"},h={confirmationMessageText:"confirmation-message"};
var j=function(){function t(v){e(this,t);
this.$el=f(v);
this.$dislikeButton=this.$el.find(k.dislikeButton);
this.$likeAndFeedbackWrapper=this.$el.find(k.likeAndFeedbackWrapper);
this.$mainQuestionWrapper=this.$el.find(k.mainQuestionWrapper);
this.$likeButton=this.$el.find(k.likeButton);
this.$feedbackOptionsWrapper=this.$el.find(k.feedbackOptionsWrapper);
this.$feedbackButtons=this.$el.find(k.feedbackButton);
this.$confirmationMessage=this.$el.find(k.confirmationMessage);
this.$confirmationMessageWrapper=this.$el.find(k.confirmationMessageWrapper);
this.$confirmationMessageText=this.$confirmationMessage.data(h.confirmationMessageText);
this.setUpFeedbackTracking();
this.bindUIEvents();
this.setAriaLive()
}d(t,[{key:"setUpFeedbackTracking",value:function r(){this.feedbackTracking=new c.FeedbackTracking()
}},{key:"bindUIEvents",value:function n(){var w=this;
this.$dislikeButton.on({click:function v(){w.showFeedbackOptions()
}});
this.$likeButton.on({click:function v(){w.hideMainQuestion();
w.showConfirmationMessage()
}});
this.$feedbackButtons.on({click:function v(x){w.showConfirmationMessage()
}});
this.feedbackTracking.trackLikeAndDislikeClick(this.$dislikeButton,"no");
this.feedbackTracking.trackLikeAndDislikeClick(this.$likeButton);
this.feedbackTracking.trackFeedbackClick(this.$feedbackButtons)
}},{key:"setAriaLive",value:function q(){if(HSBC_utils.isMobileiOS||HSBC_utils.isMobileAndroid||HSBC_utils.isSafari){this.$likeAndFeedbackWrapper.removeAttr("aria-live")
}if(HSBC_utils.isSafari&&!HSBC_utils.isMobileiOS){this.$confirmationMessage.attr("aria-live","assertive")
}}},{key:"showFeedbackOptions",value:function o(){this.hideMainQuestion();
this.$feedbackOptionsWrapper.show();
this.$feedbackButtons.get(0).focus()
}},{key:"hideMainQuestion",value:function m(){this.$mainQuestionWrapper.attr("aria-hidden",true);
this.$mainQuestionWrapper.hide()
}},{key:"hideFeedbackOptions",value:function u(){this.$feedbackOptionsWrapper.attr("aria-hidden",true);
this.$feedbackOptionsWrapper.hide()
}},{key:"showConfirmationMessage",value:function s(){this.hideFeedbackOptions();
this.$confirmationMessage.text(this.$confirmationMessageText);
this.$confirmationMessageWrapper.show();
this.focusConfirmationMessageOnMobile()
}},{key:"focusConfirmationMessageOnMobile",value:function p(){var v=HSBC_utils.isMobileAndroid||HSBC_utils.isMobileiOS;
if(v){this.$confirmationMessage.attr("tabindex",-1).get(0).focus()
}}}]);
return t
}()
}),(function(b,g,a){a.r(g);
a.d(g,"FeedbackTracking",function(){return f
});
var h=a(34);
function d(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var e=jQuery;
var f=function(){function k(o){d(this,k);
this.options={eventContentPrefix:"useful:",eventContentSufix:"|feedback-component",debug:false};
this.settings=e.extend({},this.options,o)
}c(k,[{key:"trackLikeAndDislikeClick",value:function n(o,p){new h.TealiumObserver(o,{event_category:"content",event_action:"button",event_content:p?"".concat(this.settings.eventContentPrefix,"no").concat(this.settings.eventContentSufix):"".concat(this.settings.eventContentPrefix,"yes").concat(this.settings.eventContentSufix),raw_datalayer:p?"3684v9":"3684v7"});
this.log("trackLikeAndDislikeClick")
}},{key:"trackFeedbackClick",value:function m(o){var q=this.settings.eventContentSufix;
new h.TealiumObserver(o,{event_category:"content",event_action:"button",event_content:function p(s){var r=e(s).text().trim().toLowerCase();
return"reason:".concat(r).concat(q)
},raw_datalayer:"3684v10"});
this.log("trackFeedbackClick")
}},{key:"log",value:function l(p){if(!window.console||!this.settings.debug){return
}console.log(p)
}}]);
return k
}()
}),(function(b,c,d){d.r(c);
var a=d(65);
if(!HSBC_utils.isEditMode()){HSBC_utils.registerComponent({name:"Feedback",selector:".M-LIKE-AND-FEEDBACK-DPWS",init:function e(f){return new a.Feedback(f)
}})
}}),(function(c,h,b){b.r(h);
var j=b(69);
function f(o,p){if(!(o instanceof p)){throw new TypeError("Cannot call a class as a function")
}}function n(r,p){for(var o=0;
o<p.length;
o++){var q=p[o];
q.enumerable=q.enumerable||false;
q.configurable=true;
if("value" in q){q.writable=true
}Object.defineProperty(r,q.key,q)
}}function d(q,o,p){if(o){n(q.prototype,o)
}if(p){n(q,p)
}return q
}var g=Bootstrap.jQuery,k=HSBC_utils.keyCodes,l={component:".O-FOOTNOTES-RW-DEV",footnotesData:"#footnotes-data",footnotesList:".footnotes-list",sectionContainer:".accordion-section-container",anchorLink:'a[href^="#fn"]'},a={footnotePattern:/\[@.+?\]/g,anchorPrefix:"fn-",hidden:"hidden",disableFootnotes:"data-disable-footnotes",refsVisuallyHidden:"data-refs-visually-hidden"};
var e=function(){function o(u){f(this,o);
if(!HSBC_utils.isEditMode()){this.$el=g(u);
this.$footnotesList=this.$el.find(l.footnotesList);
this.$sectionContainer=this.$el.closest(l.sectionContainer);
this.$sectionContainer.addClass(a.hidden);
this.lastFootnote=0;
this.refsList=[];
this.footnotesData=JSON.parse(g(l.footnotesData).html());
this.refsVisuallyHidden=this.$el.attr(a.refsVisuallyHidden);
if(this.refsVisuallyHidden===undefined){this.refsVisuallyHidden=""
}this.observeChanges();
this.rerenderFootnotes()
}}d(o,[{key:"rerenderFootnotes",value:function t(){var u=arguments.length>0&&arguments[0]!==undefined?arguments[0]:document.body;
new j.FootnoteRefsGenerator(a.footnotePattern,a.anchorPrefix,a.disableFootnotes,this.pushRef.bind(this),u,this.refsVisuallyHidden);
this.showFootnotes()
}},{key:"pushRef",value:function s(v){var w=this.footnotesData[v];
if(w){var u=this.refsList.indexOf(v);
if(u==-1){this.refsList.push(v);
return{number:this.refsList.length,anchor:w.anchor,name:w.name}
}else{return{number:u+1,anchor:w.anchor,name:w.name}
}}return false
}},{key:"showFootnotes",value:function p(){var u=this.refsList.length;
var x=false;
while(this.lastFootnote<u){var v=this.refsList[this.lastFootnote];
var w=this.footnotesData[v];
this.$footnotesList.append(g('<li id="'.concat(a.anchorPrefix).concat(w.anchor,'" tabindex="-1">').concat(w.text,"</li>")));
this.lastFootnote++;
x=true
}if(x){this.$sectionContainer.removeClass(a.hidden);
g(window).trigger("footnotesRerendered");
this.moveFocusToFootnote()
}}},{key:"moveFocusToFootnote",value:function q(){var u=this;
g(l.anchorLink).on("click",function(v){v.preventDefault();
u.$anchorId=g(v.currentTarget).attr("href");
u.$footnoteRef=v.currentTarget;
g(u.$anchorId).get(0).focus()
});
this.$el.on("keydown",function(v){if(v.keyCode===k.TAB&&g(u.$anchorId).is(":focus")){u.$footnoteRef.focus()
}v.preventDefault()
})
}},{key:"observeChanges",value:function r(){var v=this;
var u=new MutationObserver(function(x){for(var w=0;
w<x.length;
++w){v.rerenderFootnotes(x[w].target)
}});
u.observe(document.body,{childList:true,subtree:true})
}}]);
return o
}();
HSBC_utils.registerComponent({name:"footnote",selector:l.component,init:function m(o){return new e(o)
}})
}),(function(c,e,h){h.r(e);
h.d(e,"FootnoteRefsGenerator",function(){return d
});
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function b(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var f=Bootstrap.jQuery;
var d=function(){function n(q,p,t,r,s,o){g(this,n);
this.footnotePattern=q;
this.anchorPrefix=p;
this.disableFootnotes=t;
this.pushRef=r;
this.refsArea=s;
this.refsVisuallyHidden=o;
this.processTextNodes()
}b(n,[{key:"processTextNodes",value:function l(){var q=this;
var o=f(this.refsArea).find("*:not(script, [".concat(this.disableFootnotes,"], [").concat(this.disableFootnotes,"] *)")).contents().filter(function(r,s){return q.filterTextNodes(s)
});
var p=f(this.refsArea).find("[".concat(this.disableFootnotes,"], [").concat(this.disableFootnotes,"] *")).contents().filter(function(r,s){return q.filterTextNodes(s)
});
o.each(function(r,s){q.processFootnoteRefs(s)
});
p.each(function(r,s){q.processFootnoteRefs(s,true)
})
}},{key:"filterTextNodes",value:function k(o){return o.nodeType===3&&/\S/.test(o.nodeValue)
}},{key:"processFootnoteRefs",value:function j(t){var q=this;
var p=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;
var s=t.textContent;
var r=false;
var o="";
if(p){o=s.replace(this.footnotePattern,"");
r=true
}else{o=s.replace(this.footnotePattern,function(u){var v=u.substring(2,u.length-1);
var w=q.createFootnoteRef(v);
if(w){r=true;
return w
}return u
})
}if(r){f(t).replaceWith(o)
}}},{key:"createFootnoteRef",value:function m(o){var p=this.pushRef(o);
if(p){return'<sup><a href="#'.concat(this.anchorPrefix).concat(p.anchor,'"><span aria-hidden="true">').concat(p.number,'</span><span class="visuallyhidden">').concat(this.refsVisuallyHidden," ").concat(p.number,", ").concat(p.name,"</span></a></sup>")
}return false
}}]);
return n
}()
}),(function(b,e){function f(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}function k(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}function c(o,m,n){if(m){k(o.prototype,m)
}if(n){k(o,n)
}return o
}var g=Bootstrap.jQuery,d={introSection:".intro-section",heroBannerContainer:".hero-banner-container",heroBannerContent:".O-HEROBAN-RW-RBWM",heroBanner:".O-HEROBAN2-RW-DEV",noImage:".noImage"},l={hasNewHero:"has-hero-2"},a={units4:40};
var h=function(){function p(q){f(this,p);
this.$homePageHero=g(q);
this.$introSection=this.$homePageHero.parents(d.introSection);
this.updateIntroSection();
this.updateEmptyHeight();
this.bindUIEvents()
}c(p,[{key:"updateIntroSection",value:function o(){this.$introSection.addClass(l.hasNewHero)
}},{key:"updateEmptyHeight",value:function m(){var r=this.$introSection.find(d.noImage),q=this.$introSection.find(d.heroBannerContainer);
if(!r.length){return
}r.css("min-height","".concat(q.find(d.heroBannerContent).height()+a.units4,"px"))
}},{key:"bindUIEvents",value:function n(){var q=this;
g(window).on("resize",function(){q.updateEmptyHeight()
})
}}]);
return p
}();
HSBC_utils.registerComponent({name:"heroBanner_rev2",selector:d.heroBanner,init:function j(m){return new h(m)
}})
}),(function(b,g,a){a.r(g);
a.d(g,"default",function(){return h
});
function e(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function d(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var f=jQuery,j={introSection:".intro-section"},c={hasHeroNoImage:"hero-no-image"};
var h=function(){function m(n){e(this,m);
this.$el=f(n);
this.$introSection=this.$el.parents(j.introSection);
this.updateIntroSection()
}d(m,[{key:"updateIntroSection",value:function l(){this.$introSection.addClass(c.hasHeroNoImage)
}}]);
return m
}()
}),(function(a,b,c){c.r(b);
var e=c(71);
HSBC_utils.registerComponent({name:"heronoimage",selector:".O-HEROBANNOIMG-RW-DEV",init:function d(f){return new e["default"](f)
}})
}),(function(b,f,a){a.r(f);
a.d(f,"HeroImage",function(){return g
});
function e(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function j(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function c(n,l,m){if(l){j(n.prototype,l)
}if(m){j(n,m)
}return n
}var h={heroImage:".O-HEROIMG-RW-RBWM",parentWrapper:".intro-section",updatedElement:".sm-12",heroBanner:".O-HEROBAN-RW-RBWM"},k={toRemoveInParent:"sm-12",toRemoveInWrapper:"row"},d=Bootstrap.jQuery;
var g=function(){function m(n){e(this,m);
this.$el=d(n);
this.$parentWrapper=this.$el.parents(h.parentWrapper);
this.$heroBanner=this.$parentWrapper.find(h.heroBanner);
this.updateStructure()
}c(m,[{key:"updateStructure",value:function l(){this.$parentWrapper.removeClass(k.toRemoveInWrapper);
this.$el.unwrap();
this.$heroBanner.wrap(d('<div class="grid"></div>'))
}}]);
return m
}();
(function(){HSBC_utils.registerComponent({name:"heroimage",selector:h.heroImage,init:function l(m){return new g(m)
}})
})()
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(j){var f={introSection:".intro-section",heroBanner:".O-HPHERO-RW-DEV"},g={hasNewHero:"has-home-page-hero"};
var h=function(){function m(n){e(this,m);
this.$homePageHero=j(n);
this.$introSection=this.$homePageHero.parents(f.introSection);
this.updateIntroSection()
}c(m,[{key:"updateIntroSection",value:function l(){this.$introSection.addClass(g.hasNewHero)
}}]);
return m
}();
function k(l){new h(l)
}HSBC_utils.registerComponent({name:"heroBanner",selector:f.heroBanner,init:k})
})(Bootstrap.jQuery)
}),(function(b,a){(function(d){var c=function c(f){var e=d(f).find("fieldset:not(:has(input))");
e.replaceWith(function(){return d("<div />").append(d(this).contents())
})
};
c(".O-SMARTSPCGEN-DEV")
})(Bootstrap.jQuery)
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(g){var f={radioWrapper:".A-FSRADB-RW-ALL",input:"input[type=radio]"};
var j=function(){function l(m){e(this,l);
this.$radioWrapper=g(m);
this.$input=this.$radioWrapper.find(f.input);
this.bindUI()
}c(l,[{key:"bindUI",value:function k(){var m=this;
this.$radioWrapper.on("click",function(){return m.$input.get(0).checked=true
}).on("keydown",function(n){if(n.keyCode===HSBC_utils.keyCodes.ENTER||n.keyCode===HSBC_utils.keyCodes.SPACE){if(!HSBC_utils.isEditMode()){m.$input.get(0).checked=true;
n.preventDefault()
}}})
}}]);
return l
}();
function h(k){new j(k)
}HSBC_utils.registerComponent({name:"radioButton",selector:f.radioWrapper,init:h})
})(Bootstrap.jQuery)
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(h){var g={callToAction:".O-CTAPARAM-RW-DEV",callToActionWrapper:".cta-wrapper",ctaMobile:".cta-mobile",ctaDesktop:".cta-desktop"},l={dataParamName:"data-param-name",dataMobileUrls:"data-mobile-urls",idPlaceholder:/\[ID\]/g,waitTime:5000,waitLimit:5500};
var k=function(){function w(x){e(this,w);
if(!HSBC_utils.isEditMode()){this.$el=h(x);
this.$callToActionWrapper=this.$el.find(g.callToActionWrapper);
this.$ctaMobile=this.$callToActionWrapper.find(g.ctaMobile);
this.$ctaDesktop=this.$callToActionWrapper.find(g.ctaDesktop);
this.mobileAgent=false;
this.transactionId=this.fetchTransactionId();
if(this.transactionId){if(!this.desktopRedirect()){this.generateUrls()
}}}}c(w,[{key:"fetchTransactionId",value:function s(){var x=this.$callToActionWrapper.attr(l.dataParamName);
var y=HSBC_utils.getUrlParam(x);
if(y!==null&&y.length){return y
}return false
}},{key:"passTransactionIdToURL",value:function r(x){if(x){return x.replace(l.idPlaceholder,this.transactionId)
}return""
}},{key:"generateUrls",value:function t(){this.generateDesktopUrl();
this.generateMobileUrl();
this.$callToActionWrapper.show()
}},{key:"generateDesktopUrl",value:function m(){var x=this.$ctaDesktop.attr("href");
if(x){x=this.passTransactionIdToURL(x);
this.$ctaDesktop.attr("href",x)
}}},{key:"generateMobileUrl",value:function n(){this.mobileAgentCheck();
if(this.mobileAgent){this.parseMobileUrls();
this.bindMobileUIEvents();
this.$ctaMobile.show()
}}},{key:"mobileAgentCheck",value:function u(){if(!HSBC_utils.isMobileWindowsPhone&&this.$ctaMobile.length){if(HSBC_utils.isMobileiOS){this.mobileAgent="iOS"
}else{if(HSBC_utils.isMobileAndroid){if(HSBC_utils.isChrome){this.mobileAgent="androidChrome"
}else{this.mobileAgent="android"
}}}}}},{key:"parseMobileUrls",value:function o(){var y=this.$callToActionWrapper.attr(l.dataMobileUrls);
var x=JSON.parse(y);
y=x[this.mobileAgent];
y.appUrl=this.passTransactionIdToURL(y.appUrl);
this.mobileUrls=y
}},{key:"bindMobileUIEvents",value:function v(){var x=this;
this.$ctaMobile.on("click",function(y){return x.mobileRedirect(y)
}).on("keydown",function(y){if(y.keyCode===HSBC_utils.keyCodes.ENTER||y.keyCode===HSBC_utils.keyCodes.SPACE){x.mobileRedirect(y)
}})
}},{key:"mobileRedirect",value:function q(A){var z=this;
var x=+new Date();
try{window.location=this.mobileUrls.appUrl
}catch(y){}setTimeout(function(){if(+new Date()-x<l.waitLimit){if(document.visibilityState=="visible"){window.location=z.mobileUrls.appStoreUrl
}}},l.waitTime)
}},{key:"desktopRedirect",value:function p(){var x=this.$callToActionWrapper.attr("data-redirect-url");
if(!x){return false
}x=this.passTransactionIdToURL(x);
window.location=x;
return true
}}]);
return w
}();
var f={name:"callToAction",selector:g.callToAction,init:function j(m){return new k(m)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(c,g,b){b.r(g);
var h=b(52);
var e=b(79);
var a=b.n(e);
function f(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function d(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}(function(m){var l={basicTable:".M-BSCTBL-RW-RBWM",desktopHeadingCells:"table.desktop th:not([scope])"};
var k=function(){function p(r){f(this,p);
this.element=r;
if(!HSBC_utils.isEditMode()){this.$el=m(r);
new h.TablesAlly(this)
}this.removeAdditionalSpaces();
this.applyHeadingScopeAttribute()
}d(p,[{key:"removeAdditionalSpaces",value:function o(){var r=this.element.getElementsByTagName("td");
Array.from(r).forEach(function(s){s.innerHTML=s.innerHTML.replace(/&nbsp;/g," ").trim()
})
}},{key:"applyHeadingScopeAttribute",value:function q(){var r=m(this.element).find(l.desktopHeadingCells);
r.attr("scope","col")
}}]);
return p
}();
HSBC_utils.registerComponent({name:"bsctbl",selector:l.basicTable,init:function n(o){return new k(o)
}})
})(Bootstrap.jQuery)
}),(function(b,a,c){c(80);
c(125);
b.exports=c(88).Array.from
}),(function(b,a,c){var d=c(81)(true);
c(84)(String,"String",function(e){this._t=String(e);
this._i=0
},function(){var g=this._t;
var f=this._i;
var e;
if(f>=g.length){return{value:undefined,done:true}
}e=d(g,f);
this._i+=e.length;
return{value:e,done:false}
})
}),(function(c,b,d){var a=d(82);
var e=d(83);
c.exports=function(f){return function(n,o){var m=String(e(n));
var k=a(o);
var j=m.length;
var h,g;
if(k<0||k>=j){return f?"":undefined
}h=m.charCodeAt(k);
return h<55296||h>56319||k+1===j||(g=m.charCodeAt(k+1))<56320||g>57343?f?m.charAt(k):h:f?m.slice(k,k+2):(h-55296<<10)+(g-56320)+65536
}
}
}),(function(b,a){var c=Math.ceil;
var d=Math.floor;
b.exports=function(e){return isNaN(e=+e)?0:(e>0?d:c)(e)
}
}),(function(b,a){b.exports=function(c){if(c==undefined){throw TypeError("Can't call method on  "+c)
}return c
}
}),(function(d,g,c){var e=c(85);
var f=c(86);
var n=c(99);
var j=c(89);
var h=c(106);
var b=c(107);
var l=c(121);
var p=c(123);
var k=c(122)("iterator");
var r=!([].keys&&"next" in [].keys());
var a="@@iterator";
var q="keys";
var o="values";
var m=function(){return this
};
d.exports=function(A,x,y,D,G,F,L){b(y,x,D);
var t=function(O){if(!r&&O in C){return C[O]
}switch(O){case q:return function P(){return new y(this,O)
};
case o:return function N(){return new y(this,O)
}
}return function M(){return new y(this,O)
}
};
var u=x+" Iterator";
var z=G==o;
var J=false;
var C=A.prototype;
var I=C[k]||C[a]||G&&C[G];
var w=I||t(G);
var s=G?!z?w:t("entries"):undefined;
var E=x=="Array"?C.entries||I:I;
var H,K,B;
if(E){B=p(E.call(new A()));
if(B!==Object.prototype&&B.next){l(B,u,true);
if(!e&&typeof B[k]!="function"){j(B,k,m)
}}}if(z&&I&&I.name!==o){J=true;
w=function v(){return I.call(this)
}
}if((!e||L)&&(r||J||!C[k])){j(C,k,w)
}h[x]=w;
h[u]=m;
if(G){H={values:z?w:t(o),keys:F?w:t(q),entries:s};
if(L){for(K in H){if(!(K in C)){n(C,K,H[K])
}}}else{f(f.P+f.F*(r||J),x,H)
}}return H
}
}),(function(b,a){b.exports=false
}),(function(c,g,b){var a=b(87);
var d=b(88);
var h=b(89);
var j=b(99);
var k=b(104);
var f="prototype";
var e=function(x,n,l){var m=x&e.F;
var p=x&e.G;
var u=x&e.S;
var o=x&e.P;
var t=x&e.B;
var v=p?a:u?a[n]||(a[n]={}):(a[n]||{})[f];
var s=p?d:d[n]||(d[n]={});
var w=s[f]||(s[f]={});
var y,z,r,q;
if(p){l=n
}for(y in l){z=!m&&v&&v[y]!==undefined;
r=(z?v:l)[y];
q=t&&z?k(r,a):o&&typeof r=="function"?k(Function.call,r):r;
if(v){j(v,y,r,x&e.U)
}if(s[y]!=r){h(s,y,q)
}if(o&&w[y]!=r){w[y]=r
}}};
a.core=d;
e.F=1;
e.G=2;
e.S=4;
e.P=8;
e.B=16;
e.W=32;
e.U=64;
e.R=128;
c.exports=e
}),(function(b,a){var c=b.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();
if(typeof __g=="number"){__g=c
}}),(function(c,b){var a=c.exports={version:"2.6.12"};
if(typeof __e=="number"){__e=a
}}),(function(c,b,d){var e=d(90);
var a=d(98);
c.exports=d(94)?function(f,g,h){return e.f(f,g,a(1,h))
}:function(f,g,h){f[g]=h;
return f
}
}),(function(e,c,g){var b=g(91);
var f=g(93);
var d=g(97);
var h=Object.defineProperty;
c.f=g(94)?Object.defineProperty:function a(l,j,m){b(l);
j=d(j,true);
b(m);
if(f){try{return h(l,j,m)
}catch(k){}}if("get" in m||"set" in m){throw TypeError("Accessors not supported!")
}if("value" in m){l[j]=m.value
}return l
}
}),(function(c,b,d){var a=d(92);
c.exports=function(e){if(!a(e)){throw TypeError(e+" is not an object!")
}return e
}
}),(function(b,a){b.exports=function(c){return typeof c==="object"?c!==null:typeof c==="function"
}
}),(function(b,a,c){b.exports=!c(94)&&!c(95)(function(){return Object.defineProperty(c(96)("div"),"a",{get:function(){return 7
}}).a!=7
})
}),(function(b,a,c){b.exports=!c(95)(function(){return Object.defineProperty({},"a",{get:function(){return 7
}}).a!=7
})
}),(function(b,a){b.exports=function(c){try{return !!c()
}catch(d){return true
}}
}),(function(d,c,f){var b=f(92);
var a=f(87).document;
var e=b(a)&&b(a.createElement);
d.exports=function(g){return e?a.createElement(g):{}
}
}),(function(c,b,d){var a=d(92);
c.exports=function(g,e){if(!a(g)){return g
}var f,h;
if(e&&typeof(f=g.toString)=="function"&&!a(h=f.call(g))){return h
}if(typeof(f=g.valueOf)=="function"&&!a(h=f.call(g))){return h
}if(!e&&typeof(f=g.toString)=="function"&&!a(h=f.call(g))){return h
}throw TypeError("Can't convert object to primitive value")
}
}),(function(b,a){b.exports=function(d,c){return{enumerable:!(d&1),configurable:!(d&2),writable:!(d&4),value:c}
}
}),(function(e,f,d){var b=d(87);
var g=d(89);
var k=d(100);
var j=d(101)("src");
var h=d(102);
var l="toString";
var a=(""+h).split(l);
d(88).inspectSource=function(m){return h.call(m)
};
(e.exports=function(o,m,q,n){var p=typeof q=="function";
if(p){k(q,"name")||g(q,"name",m)
}if(o[m]===q){return
}if(p){k(q,j)||g(q,j,o[m]?""+o[m]:a.join(String(m)))
}if(o===b){o[m]=q
}else{if(!n){delete o[m];
g(o,m,q)
}else{if(o[m]){o[m]=q
}else{g(o,m,q)
}}}})(Function.prototype,l,function c(){return typeof this=="function"&&this[j]||h.call(this)
})
}),(function(b,a){var c={}.hasOwnProperty;
b.exports=function(e,d){return c.call(e,d)
}
}),(function(c,a){var d=0;
var b=Math.random();
c.exports=function(e){return"Symbol(".concat(e===undefined?"":e,")_",(++d+b).toString(36))
}
}),(function(b,a,c){b.exports=c(103)("native-function-to-string",Function.toString)
}),(function(d,c,g){var a=g(88);
var e=g(87);
var f="__core-js_shared__";
var b=e[f]||(e[f]={});
(d.exports=function(h,j){return b[h]||(b[h]=j!==undefined?j:{})
})("versions",[]).push({version:a.version,mode:g(85)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})
}),(function(c,b,d){var a=d(105);
c.exports=function(e,g,f){a(e);
if(g===undefined){return e
}switch(f){case 1:return function(h){return e.call(g,h)
};
case 2:return function(j,h){return e.call(g,j,h)
};
case 3:return function(j,h,k){return e.call(g,j,h,k)
}
}return function(){return e.apply(g,arguments)
}
}
}),(function(b,a){b.exports=function(c){if(typeof c!="function"){throw TypeError(c+" is not a function!")
}return c
}
}),(function(b,a){b.exports={}
}),(function(e,b,g){var d=g(108);
var f=g(98);
var c=g(121);
var a={};
g(89)(a,g(122)("iterator"),function(){return this
});
e.exports=function(k,j,h){k.prototype=d(a,{next:f(1,h)});
c(k,j+" Iterator")
}
}),(function(b,e,a){var h=a(91);
var l=a(109);
var k=a(119);
var g=a(118)("IE_PROTO");
var c=function(){};
var d="prototype";
var j=function(){var p=a(96)("iframe");
var o=k.length;
var m="<";
var n=">";
var q;
p.style.display="none";
a(120).appendChild(p);
p.src="javascript:";
q=p.contentWindow.document;
q.open();
q.write(m+"script"+n+"document.F=Object"+m+"/script"+n);
q.close();
j=q.F;
while(o--){delete j[d][k[o]]
}return j()
};
b.exports=Object.create||function f(o,n){var m;
if(o!==null){c[d]=h(o);
m=new c();
c[d]=null;
m[g]=o
}else{m=j()
}return n===undefined?m:l(m,n)
}
}),(function(d,c,e){var f=e(90);
var a=e(91);
var g=e(110);
d.exports=e(94)?Object.defineProperties:function b(n,h){a(n);
var l=g(h);
var k=l.length;
var j=0;
var m;
while(k>j){f.f(n,m=l[j++],h[m])
}return n
}
}),(function(c,b,f){var a=f(111);
var e=f(119);
c.exports=Object.keys||function d(g){return a(g,e)
}
}),(function(d,a,f){var b=f(100);
var g=f(112);
var e=f(115)(false);
var c=f(118)("IE_PROTO");
d.exports=function(j,n){var m=g(j);
var l=0;
var h=[];
var k;
for(k in m){if(k!=c){b(m,k)&&h.push(k)
}}while(n.length>l){if(b(m,k=n[l++])){~e(h,k)||h.push(k)
}}return h
}
}),(function(b,a,c){var e=c(113);
var d=c(83);
b.exports=function(f){return e(d(f))
}
}),(function(b,a,c){var d=c(114);
b.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return d(e)=="String"?e.split(""):Object(e)
}
}),(function(b,a){var c={}.toString;
b.exports=function(d){return c.call(d).slice(8,-1)
}
}),(function(c,b,e){var f=e(112);
var a=e(116);
var d=e(117);
c.exports=function(g){return function(o,k,j){var n=f(o);
var l=a(n.length);
var h=d(j,l);
var m;
if(g&&k!=k){while(l>h){m=n[h++];
if(m!=m){return true
}}}else{for(;
l>h;
h++){if(g||h in n){if(n[h]===k){return g||h||0
}}}}return !g&&-1
}
}
}),(function(d,b,e){var a=e(82);
var c=Math.min;
d.exports=function(f){return f>0?c(a(f),9007199254740991):0
}
}),(function(e,c,f){var b=f(82);
var a=Math.max;
var d=Math.min;
e.exports=function(g,h){g=b(g);
return g<0?a(g+h,0):d(g,h)
}
}),(function(c,a,e){var d=e(103)("keys");
var b=e(101);
c.exports=function(f){return d[f]||(d[f]=b(f))
}
}),(function(b,a){b.exports=("constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf").split(",")
}),(function(c,b,d){var a=d(87).document;
c.exports=a&&a.documentElement
}),(function(c,a,f){var d=f(90).f;
var b=f(100);
var e=f(122)("toStringTag");
c.exports=function(j,g,h){if(j&&!b(j=h?j:j.prototype,e)){d(j,e,{configurable:true,value:g})
}}
}),(function(d,b,g){var a=g(103)("wks");
var c=g(101);
var e=g(87).Symbol;
var f=typeof e=="function";
var h=d.exports=function(j){return a[j]||(a[j]=f&&e[j]||(f?e:c)("Symbol."+j))
};
h.store=a
}),(function(e,a,g){var b=g(100);
var f=g(124);
var d=g(118)("IE_PROTO");
var c=Object.prototype;
e.exports=Object.getPrototypeOf||function(h){h=f(h);
if(b(h,d)){return h[d]
}if(typeof h.constructor=="function"&&h instanceof h.constructor){return h.constructor.prototype
}return h instanceof Object?c:null
}
}),(function(b,a,c){var d=c(83);
b.exports=function(e){return Object(d(e))
}
}),(function(b,d,a){var j=a(104);
var c=a(86);
var l=a(124);
var m=a(126);
var e=a(127);
var h=a(116);
var f=a(128);
var k=a(129);
c(c.S+c.F*!a(131)(function(n){Array.from(n)
}),"Array",{from:function g(y){var v=l(y);
var o=typeof this=="function"?this:Array;
var s=arguments.length;
var r=s>1?arguments[1]:undefined;
var n=r!==undefined;
var w=0;
var t=k(v);
var p,x,q,u;
if(n){r=j(r,s>2?arguments[2]:undefined,2)
}if(t!=undefined&&!(o==Array&&e(t))){for(u=t.call(v),x=new o();
!(q=u.next()).done;
w++){f(x,w,n?m(u,r,[q.value,w],true):q.value)
}}else{p=h(v.length);
for(x=new o(p);
p>w;
w++){f(x,w,n?r(v[w],w):v[w])
}}x.length=w;
return x
}})
}),(function(c,b,d){var a=d(91);
c.exports=function(j,h,k,f){try{return f?h(a(k)[0],k[1]):h(k)
}catch(l){var g=j["return"];
if(g!==undefined){a(g.call(j))
}throw l
}}
}),(function(d,c,f){var e=f(106);
var b=f(122)("iterator");
var a=Array.prototype;
d.exports=function(g){return g!==undefined&&(e.Array===g||a[b]===g)
}
}),(function(d,b,e){var c=e(90);
var a=e(98);
d.exports=function(g,f,h){if(f in g){c.f(g,f,a(0,h))
}else{g[f]=h
}}
}),(function(d,b,f){var c=f(130);
var a=f(122)("iterator");
var e=f(106);
d.exports=f(88).getIteratorMethod=function(g){if(g!=undefined){return g[a]||g["@@iterator"]||e[c(g)]
}}
}),(function(b,a,f){var g=f(114);
var e=f(122)("toStringTag");
var d=g(function(){return arguments
}())=="Arguments";
var c=function(j,h){try{return j[h]
}catch(k){}};
b.exports=function(j){var k,h,l;
return j===undefined?"Undefined":j===null?"Null":typeof(h=c(k=Object(j),e))=="string"?h:d?g(k):(l=g(k))=="Object"&&typeof k.callee=="function"?"Arguments":l
}
}),(function(f,b,h){var a=h(122)("iterator");
var d=false;
try{var c=[7][a]();
c["return"]=function(){d=true
};
Array.from(c,function(){throw 2
})
}catch(g){}f.exports=function(l,m){if(!m&&!d){return false
}var n=false;
try{var j=[7];
var k=j[a]();
k.next=function(){return{done:n=true}
};
j[a]=function(){return k
};
l(j)
}catch(o){}return n
}
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(k){var f={template:".dynamic-table-template",targetContainer:".nomustache-content",targetContent:".M-SMPTBL-RW-RBWM"},j={source:"source"},g={tableRendered:"table:rendered"};
var l=function(){function o(r){e(this,o);
this.$el=k(r);
this.$targetContainer=this.$el.find(f.targetContainer);
this.$targetContent=this.$targetContainer.find(f.targetContent);
this.dataSourceUrl=this.$targetContainer.data(j.source);
this.tableTemplate=this.$el.find(f.template).html();
this.readDataFromUrl();
this.initializeMustacheFormatter()
}c(o,[{key:"readDataFromUrl",value:function q(){var r=this;
k.ajax(this.dataSourceUrl,{dataType:"json",cache:false}).done(function(s){r.replaceWithData(false,s)
}).fail(function(s,u,t){r.replaceWithData(true,{textStatus:u,errorThrown:t})
})
}},{key:"initializeMustacheFormatter",value:function p(){if(Mustache){if(Mustache.Formatters&&!Mustache.Formatters.threeDecimal){Mustache.Formatters.threeDecimal=function(r){return(Math.round(Number(r)*1000)/1000).toFixed(3)
}
}}}},{key:"replaceWithData",value:function n(s,t){var r=this;
if(s){console.log("Error: "+JSON.stringify(t))
}else{this.$targetContent.html(Mustache.render(this.tableTemplate,t)).promise().done(function(){r.$targetContent.trigger(g.tableRendered);
k(window).trigger("resize")
})
}}}]);
return o
}();
var h={name:"dynamictable",selector:".M-DYNTBL-RW-RBWM",init:function m(n){return new l(n)
}};
HSBC_utils.registerComponent(h)
})(Bootstrap.jQuery)
}),(function(d,e,g){g.r(e);
var h=g(134);
var a=g.n(h);
function f(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function c(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}(function(m){var l={description:".text-container",oneClickButtons:".oneClickButton",modal:"oneClickModal",close:".close-trigger",oneStepButton:"a.continue",multipleStepsButton:"button.options"};
var k={formName:"nb",cookieName:"FromWebSite",cookieSettings:{path:"/",secure:true},dataLinks:{oneClickLinkPath:"data-oneClickLinkPath",fewStepsLinkPath:"data-fewStepsLinkPath",languageTag:"data-languageTag",countryTag:"data-countryTag",fromWebSite:"data-fromWebSite",modalPath:"data-modalPath"},cookies:{languageTag:"LANGTAG=",countryTag:"COUNTRYTAG="},onEnter:{13:1,Enter:1},onEscape:{27:1,Escape:1},onTab:{9:1,Tab:1}};
var n=function(){function S(T){f(this,S);
this.button=T
}c(S,[{key:"subscribeOnClicks",value:function E(T){var U=this;
T.addEventListener("click",function(V){U.onClick(V)
});
return this
}},{key:"subscribeOnKeyPress",value:function p(T){var U=this;
this.onKeyDown(T,k.onEnter,function(V){U.onClick(V)
});
return this
}},{key:"onKeyDown",value:function r(V,T,U){V.addEventListener("keydown",function(W){if(T[W.which]||T[W.keyCode]||T[W.key]){W.preventDefault();
U(W)
}});
return V
}},{key:"popUpConfiguration",value:function P(){return["status=yes","location=no","scrollbars=yes","menubar=no","toolbar=no","resizable=yes","height=".concat(screen.height),"width=".concat(screen.width),"left=0","top=0"].join(",")
}},{key:"onClick",value:function t(){var V=this;
var U=this.extractAttributes(this.button,k.dataLinks);
var T=this.buildUrlWithParameters(U);
if(!this.needToShowPopUp(U.fewStepsLinkPath)){this.focusOnEl(this.windowOpen(window)).submitForm(T,this.prepareForm(document,this.createForm(document),this.createInput(document))).setCookiesIfValueExists(U.fromWebSite);
return
}this.requestPopUp(U.modalPath,function(W){var X=V.whenLoadedPopUp(T,U,V.parseModal(W));
V.showModalToUser(X,document);
V.modalAccessibilityHandler(X)
},Bootstrap.jQuery)
}},{key:"focusOnEl",value:function u(T){T.focus();
return this
}},{key:"modalAccessibilityHandler",value:function s(T){var U=T.querySelector(l.description);
this.focusOnEl(U)
}},{key:"requestPopUp",value:function H(W,V,T){T.ajax({type:"GET",url:W+".html",data:{wcmmode:"disabled"},success:V,error:function U(X){return console.error("Please configure one click button modal window",X)
}})
}},{key:"whenLoadedPopUp",value:function Q(T,W,V){var U=this;
try{var Y=this.cyclicIterator(V.querySelectorAll("button,a"));
this.modalCloseButton(V).addEventListener("click",function(){U.closeModal(V)
});
this.onKeyDown(this.modalCloseButton(V),k.onEnter,function(){U.closeModal(V)
});
this.onKeyDown(document,k.onEscape,function(){U.closeModal(V)
});
this.modalOneStepButton(V).addEventListener("click",function(){U.oneStepAction(T,W)
});
this.onKeyDown(this.modalOneStepButton(V),k.onEnter,function(){U.oneStepAction(T,W)
});
this.modalMultipleStepsButton(V).addEventListener("click",function(){U.multipleStepsAction(W)
});
this.onKeyDown(this.modalMultipleStepsButton(V),k.onEnter,function(){U.multipleStepsAction(W)
});
this.onKeyDown(V,k.onTab,function(){Y.next().focus()
})
}catch(X){console.error("Not expected pop-up",X)
}return V
}},{key:"closeModal",value:function v(T){T.parentNode.removeChild(T)
}},{key:"cyclicIterator",value:function F(V){var T=0;
return{next:function U(){return T<V.length?V[T++]:(T=0)||V[T++]
}}
}},{key:"multipleStepsAction",value:function D(T){this.focusOnEl(this.windowOpen(window)).submitForm(T.fewStepsLinkPath,this.prepareForm(document,this.createForm(document),this.createInput(document))).setCookiesIfValueExists(T.fromWebSite)
}},{key:"oneStepAction",value:function I(T,U){this.focusOnEl(this.windowOpen(window)).submitForm(T,this.prepareForm(document,this.createForm(document),this.createInput(document))).setCookiesIfValueExists(U.fromWebSite)
}},{key:"buildUrlWithParameters",value:function M(T){return this.appendGetParameters(T.oneClickLinkPath,Object.keys(T).filter(function(U){return k.cookies[U]&&T[U]
}).reduce(function(V,U){V.push((k.cookies[U]||"").concat(T[U]));
return V
},[]))
}},{key:"submitForm",value:function y(T,U){U.action=T;
U.submit();
U.parentNode.removeChild(U);
return this
}},{key:"setAttributes",value:function L(U,T){Object.entries(T).forEach(function(V){U.setAttribute(V[0],V[1])
});
return U
}},{key:"extractAttributes",value:function K(U,T){var V={};
Object.entries(T).reduce(function(W,X){W[X[0]]=U.getAttribute(X[1]);
return W
},V);
return V
}},{key:"setCookiesIfValueExists",value:function B(T){if(!T){console.info("Can't set one click button cookie, because value is empty");
return
}HSBC_utils.setCookie(k.cookieName,T,k.cookieSettings)
}},{key:"createInput",value:function N(T){return this.setAttributes(T.createElement("input"),{WithCookie:"true"})
}},{key:"createForm",value:function w(T){return this.setAttributes(T.createElement("form"),{method:"post",name:k.formName,target:k.formName})
}},{key:"windowOpen",value:function A(T){return T.open("",k.formName,this.popUpConfiguration())
}},{key:"showModalToUser",value:function x(U,T){T.body.appendChild(U);
return U
}},{key:"parseModal",value:function O(T){return new DOMParser().parseFromString(T,"text/html").getElementById(l.modal)
}},{key:"prepareForm",value:function z(T,U,V){U.appendChild(V);
T.body.appendChild(U);
return U
}},{key:"appendGetParameters",value:function C(T,U){if(T.indexOf("?")){return"".concat(T,"&").concat(U.join("&"))
}return"".concat(T,"?").concat(U.join("&"))
}},{key:"needToShowPopUp",value:function J(T){return !!T
}},{key:"modalMultipleStepsButton",value:function G(T){return T.querySelector(l.multipleStepsButton)
}},{key:"modalOneStepButton",value:function q(T){return T.querySelector(l.oneStepButton)
}},{key:"modalCloseButton",value:function R(T){return T.querySelector(l.close)
}}]);
return S
}();
var j={name:"one-click-button",selector:l.oneClickButtons,init:function o(p){return new n(p).subscribeOnClicks(p).subscribeOnKeyPress(p)
}};
HSBC_utils.registerComponent(j)
})(Bootstrap.jQuery)
}),(function(b,a,c){c(135);
b.exports=c(88).Object.entries
}),(function(c,b,e){var f=e(86);
var d=e(136)(true);
f(f.S,"Object",{entries:function a(g){return d(g)
}})
}),(function(c,b,d){var a=d(94);
var g=d(110);
var f=d(112);
var e=d(137).f;
c.exports=function(h){return function(m){var p=f(m);
var o=g(p);
var n=o.length;
var l=0;
var j=[];
var k;
while(n>l){k=o[l++];
if(!a||e.call(p,k)){j.push(h?[k,p[k]]:p[k])
}}return j
}
}
}),(function(b,a){a.f={}.propertyIsEnumerable
}),(function(e,c){function g(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function b(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function d(k,h,j){if(h){b(k.prototype,h)
}if(j){b(k,j)
}return k
}var a="appScroll.isScrolledDown";
var f="appScroll.isScrolledUp";
(function(m){var l={pinnedBanner:".O-PINBANNER-RW-ALL",header:".header",headerWrapper:".header-wrapper-main",headerNav:".header-nav-wrapper",introSection:".intro-section",pinnedWrapper:".pinned-wrapper",titleForBanner:".title-for-pinned-banner",buttonForBanner:".button-for-pinned-banner"},k={active:"active-pinned",introHero:"has-hero-2",dynamic:"dynamic",hidden:"hidden",title:"A-PINBANNER-TITLE-RW-ALL",actionButtons:"action-buttons",buttonForBanner:"button-for-pinned-banner"};
var h=function(){function y(B,C){g(this,y);
if(!HSBC_utils.isEditMode()){this.APP=C;
this.$el=this.APP.globalComponents.headerController.$pinnedBanner;
this.$pinnedWrapper=this.$el.find(l.pinnedWrapper);
this.$header=m(l.header);
this.$headerWrapper=m(l.headerWrapper);
this.$headerNav=m(l.headerNav);
this.$introSection=m(l.introSection);
this.dynamicHidden=true;
this.dynamicJustFinished=false;
this.resizeStarted=false;
this.prevWindowWidth=m(window).width();
this.isDynamic();
this.introSectionPinnedActive();
this.bindUIEvents()
}}d(y,[{key:"bindUIEvents",value:function o(){var C=this;
var B;
m(window).on("resize",function(){C.resizeStarted=true;
clearTimeout(B);
B=setTimeout(function(){C.windowWidth=m(window).width();
if(C.prevWindowWidth!==C.windowWidth){C.prevWindowWidth=C.windowWidth;
C.recalculateAfterResize()
}C.resizeStarted=false
},250)
});
m(document).on(f,function(){if(!C.resizeStarted){C.showBanner()
}});
m(document).on(a,function(){if(!C.resizeStarted){C.hideBanner()
}})
}},{key:"introSectionPinnedActive",value:function t(){var B=this.$introSection;
if(B&&!m(".intro-section.hero-no-image").length){B.addClass(k.introHero)
}}},{key:"isDynamic",value:function u(){if(this.$el.hasClass(k.dynamic)){if(this.captureDynamicTitle()&&this.captureDynamicButton()){this.dynamicHidden=true
}}}},{key:"captureDynamicHeight",value:function q(){this.$el.css({borderBottom:0,height:0,visibility:"hidden",display:"block"});
this.dynamicHeight=this.$el.children().height()+1;
this.$el.css({display:"",borderBottom:"",height:"",visibility:""})
}},{key:"captureDynamicTitle",value:function s(){var C=m(l.titleForBanner).first();
if(C.length){var B=C.text();
var D=m("<p/>");
D.addClass(k.title);
D.text(B);
this.$pinnedWrapper.prepend(D);
return true
}return false
}},{key:"captureDynamicButton",value:function A(){this.$buttonForBanner=m(l.buttonForBanner).first();
if(this.$buttonForBanner.length){var D=m("<div/>");
var C=this.$buttonForBanner.clone();
D.addClass(k.actionButtons);
C.attr("id","pp_intro_button_1");
C.removeClass(k.buttonForBanner);
D.append(m("<div/>").append(C));
this.$pinnedWrapper.append(D);
var B=C.find("span").first().text().toLowerCase();
C.attr("data-event-name","button:".concat(B,"|component:pinned-dynamic|colour:red"));
return true
}return false
}},{key:"showBanner",value:function z(){this.showPinnedBanner()
}},{key:"hideBanner",value:function x(){if(this.dynamicHidden){this.showDynamicBanner()
}else{this.hidePinnedBanner()
}}},{key:"showDynamicBanner",value:function w(){var B=this;
if(!this.dynamicJustFinished){this.dynamicJustFinished=true;
this.captureDynamicHeight();
this.$el.removeClass(k.hidden);
this.$el.attr("aria-hidden","false");
this.$el.animate({bottom:-this.dynamicHeight},400,function(){B.$el.removeClass(k.dynamic);
B.dynamicHidden=true;
B.hidePinnedBanner()
})
}}},{key:"hidePinnedBanner",value:function r(){var B=this.$el.height();
var C=this.$headerNav.height()-B;
this.$headerNav.addClass(k.active).css({position:"absolute",transform:"translateY(-".concat(C,"px)")})
}},{key:"showPinnedBanner",value:function v(){this.$headerNav.removeClass(k.active).css({position:"",transform:"none"});
if(this.dynamicJustFinished){this.dynamicJustFinished=false;
m(window).trigger("headerMessageChange")
}}},{key:"recalculateAfterResize",value:function p(){if(!this.dynamicHidden){if(this.$headerNav.hasClass(k.active)){this.dynamicJustFinished=true;
this.showFixedBanner()
}}}}]);
return y
}();
var j={name:"pinnedBanner",selector:l.pinnedBanner,init:function n(o,p){return new h(o,p)
}};
HSBC_utils.registerComponent(j)
})(Bootstrap.jQuery)
}),(function(c,d,g){g.r(d);
g.d(d,"ComparatorAjax",function(){return a
});
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var e=Bootstrap.jQuery,b={productSelectContainer:".product-select-container",productImagesContainer:".product-images-container",sectionColumnsContainer:".section-columns-container",slideArea:".slide-area",temporaryContainer:".temporary-container"};
var a=function a(m,k,j,l,h){var n=this;
f(this,a);
this.ajaxDoneCallbacks=h;
l.load(location.href+" ".concat(b.slideArea),function(){m.html("");
k.html("");
m.append(e("".concat(b.temporaryContainer," ").concat(b.productSelectContainer," > *")));
k.append(e("".concat(b.temporaryContainer," ").concat(b.productImagesContainer," > *")));
j.each(function(o,q){var p=e(q),r=p.attr("id");
p.html("");
p.append(e("".concat(b.temporaryContainer," #").concat(r," > *")))
});
l.html("");
n.ajaxDoneCallbacks()
})
}
}),(function(b,e){function f(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}function l(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}function c(o,m,n){if(m){l(o.prototype,m)
}if(n){l(o,n)
}return o
}var g=Bootstrap.jQuery,d={footnotes:"O-FOOTNOTES-RW-DEV"},j={component:".O-PRODCMP-RW-DEV .slide-area",mainContent:'.grid[role="main"]',paginationWrapper:".pagination-wrapper",productSelectContainer:".product-select-container",addImage:".add-image",smartImage:".smart-image",section:".section",sectionTitle:".section-title",sectionHeading:".section-heading",dropdown:".dropdown",dropdownContent:"exp-content",advExpander:".O-ADVEXP-RW-RBWM",productSelect:".product-select",expanderContent:".exp-content",paginationNext:".pagination .next",paginationPrev:".pagination .prev",paginationNumbers:".pagination-numbers",header:".header"},a={moveCatchMargin:20,slidingDelay:500,disabled:"disabled",pinned:"pinned",released:"released"};
var h=function(){function w(C){f(this,w);
if(!HSBC_utils.isEditMode()){this.$el=g(C);
this.$mainContent=g(j.mainContent);
this.$absoluteElements=this.$el.find(j.paginationWrapper+", "+j.sectionTitle+", "+j.sectionHeading+", "+".".concat(d.footnotes));
this.$dropdownElements=this.$el.find(j.dropdown);
this.$paginationNext=this.$el.find(j.paginationNext);
this.$paginationPrev=this.$el.find(j.paginationPrev);
this.$paginationNumbers=this.$el.find(j.paginationNumbers);
this.$paginationWrapper=this.$el.find(j.paginationWrapper);
this.$productSelectContainer=this.$el.find(j.productSelectContainer);
this.$header=g(".header");
this.prevWindowWidth=0;
this.windowWidth=0;
this.columnWidth=0;
this.currentColumn=0;
this.sliderPosition=0;
this.pageYOffset=0;
this.pinPosition=0;
this.topOffsetMainContent=0;
this.topOffset=0;
this.edge="left";
this.scrollVerticalStarted=false;
if(HSBC_utils.isRTL){if(HSBC_utils.matchMedia.tablet){this.currentColumn=1
}else{this.currentColumn=2
}this.edge="right"
}this.touchFinished=true;
this.scrolledByScript=false;
this.renderPaginationNumbers();
this.addExpanderClass();
this.calculateSpacings();
if(HSBC_utils.isRTL){this.calculatePosition()
}this.scrollVerticalFrame=this.scrollVertical.bind(this);
window.requestAnimationFrame(this.scrollVerticalFrame);
this.bindUIEvents()
}}c(w,[{key:"addExpanderClass",value:function o(){var C=this.$el.find(j.advExpander);
C.each(function(){g(this).parent().addClass("has-expander")
})
}},{key:"bindUIEvents",value:function m(){var E=this;
var D,C;
g(window).on("footnotesRerendered",function(){E.calculateSpacings()
});
g(window).resize(function(){clearTimeout(D);
D=setTimeout(function(){E.windowWidth=g(window).width();
if(E.prevWindowWidth!==E.windowWidth){E.prevWindowWidth=E.windowWidth;
E.calculateSpacings();
E.calculatePosition();
E.moveSlider(0);
E.calculateColumn();
E.paginationStateUpdate();
E.renderPaginationNumbers();
E.pinNavigation();
E.releaseNavigation()
}},250)
});
g(window).on("scroll",function(){clearTimeout(C);
E.scrollVerticalStarted=true;
C=setTimeout(function(){E.scrollVerticalStarted=false;
E.releaseNavigation()
},250)
});
g(window).on("headerResize",function(){E.calculateOffsets()
});
this.$el.on("touchstart",function(){E.scrolledByScript=false;
E.touchFinished=false
});
g(window).on("touchend",function(){E.touchFinished=true
});
this.$el.on("scroll",function(){clearTimeout(D);
clearInterval(D);
D=setTimeout(function(){if(E.scrolledByScript){E.scrolledByScript=false
}else{D=setInterval(function(){if(E.touchFinished){clearInterval(D);
E.snapToNewPosition()
}},100)
}},100)
});
this.$paginationNext.on("click",function(){E.snapToNewPosition(1)
});
this.$paginationPrev.on("click",function(){E.snapToNewPosition(-1)
});
this.$dropdownElements.on("click",function(){E.calculatePosition();
E.moveSlider(a.slidingDelay)
})
}},{key:"calculateSpacings",value:function s(){this.$absoluteElements.each(function(E,G){var H=g(G);
H.css("position","absolute");
var D=H.height();
if(H.hasClass(d.footnotes)){H.parent().css("height",D)
}if(D===0){var F=H.closest(j.expanderContent);
F.css({height:0,visibility:"hidden",display:"block"});
D=H.outerHeight();
F.css({height:"",visibility:"",display:""})
}else{D=H.outerHeight()
}H.next().css("padding-top",D)
});
this.$dropdownElements.each(function(E,F){var G=g(F),D=G.outerHeight();
G.parent().css("min-height",D);
G.next().css("margin-top",D);
G.css("position","absolute")
});
this.$productSelectContainer.css("width","");
var C=this.$productSelectContainer.innerWidth();
this.$productSelectContainer.css("width",C);
this.sliderSteps={mobile:{0:0,1:1+Math.floor(C/4),2:1+Math.floor(C/2)},tablet:{0:0,1:Math.floor(C-this.$el.innerWidth())}};
this.columnWidth=this.$el.find(j.productSelect).outerWidth();
this.productSelectContainerHeight=this.$productSelectContainer.innerHeight();
this.calculateOffsets()
}},{key:"calculateOffsets",value:function n(){this.topOffsetMainContent=this.$header.height()-1;
this.topOffset=this.$el.offset().top-this.topOffsetMainContent
}},{key:"calculateColumn",value:function A(){var D=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;
if(D===0){var C=this.$el.scrollLeft();
var E=this.sliderPosition-C;
if(E>a.moveCatchMargin){this.currentColumn=Math.floor(C/this.columnWidth)
}else{if(E<-a.moveCatchMargin){this.currentColumn=Math.ceil(C/this.columnWidth)
}}}else{if(HSBC_utils.isRTL){this.currentColumn=this.currentColumn-D
}else{this.currentColumn=this.currentColumn+D
}}}},{key:"calculatePosition",value:function B(){if(HSBC_utils.matchMedia.mobile){this.sliderPosition=this.sliderSteps.mobile[this.currentColumn]
}else{this.sliderPosition=this.sliderSteps.tablet[this.currentColumn]
}}},{key:"moveSlider",value:function y(C){var D=Math.floor(this.$el.scrollLeft());
if(D!==this.sliderPosition){this.scrolledByScript=true;
this.$el.animate({scrollLeft:this.sliderPosition},C)
}}},{key:"paginationStateUpdate",value:function q(){if(this.currentColumn<1){this.currentColumn=0;
this.edge="left"
}else{if(HSBC_utils.matchMedia.mobile&&this.currentColumn>1){this.currentColumn=2;
this.edge="right"
}else{if(HSBC_utils.matchMedia.tablet&&this.currentColumn>0){this.currentColumn=1;
this.edge="right"
}else{this.edge=false
}}}if(HSBC_utils.isRTL){if(this.edge==="left"){this.edge="right"
}else{if(this.edge==="right"){this.edge="left"
}}}if(this.edge==="left"){this.$paginationPrev.prop("disabled",true);
this.$paginationNext.prop("disabled",false)
}else{if(this.edge==="right"){this.$paginationPrev.prop("disabled",false);
this.$paginationNext.prop("disabled",true)
}else{this.$paginationPrev.prop("disabled",false);
this.$paginationNext.prop("disabled",false)
}}}},{key:"renderPaginationNumbers",value:function u(){var C="";
if(HSBC_utils.isRTL){if(HSBC_utils.matchMedia.tablet){C=2-this.currentColumn+", "
}C+=3-this.currentColumn+", "+Number(4-this.currentColumn)
}else{C=this.currentColumn+1+", "+Number(this.currentColumn+2);
if(HSBC_utils.matchMedia.tablet){C+=", "+Number(this.currentColumn+3)
}}this.$paginationNumbers.text(C)
}},{key:"snapToNewPosition",value:function z(){var C=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;
this.calculateColumn(C);
this.paginationStateUpdate();
this.renderPaginationNumbers();
this.calculatePosition();
this.moveSlider(a.slidingDelay)
}},{key:"calculatePinPosition",value:function v(){this.pageYOffset=window.pageYOffset;
this.pinPosition=this.pageYOffset-this.topOffset
}},{key:"pinNavigation",value:function x(){this.calculatePinPosition();
if(this.pinPosition>0){this.$el.css({top:this.topOffsetMainContent,"padding-top":this.productSelectContainerHeight,left:HSBC_utils.matchMedia.desktop?"initial":-this.$el.scrollLeft()});
this.$productSelectContainer.addClass(a.pinned);
this.$paginationWrapper.css({position:"fixed",top:this.topOffsetMainContent})
}else{this.resetNavigation()
}}},{key:"releaseNavigation",value:function p(){this.calculatePinPosition();
if(this.pinPosition>0){this.$el.css({top:this.pinPosition,"padding-top":""});
this.$productSelectContainer.addClass(a.released);
this.$productSelectContainer.removeClass(a.pinned)
}else{this.resetNavigation()
}}},{key:"resetNavigation",value:function t(){this.$el.css({"padding-top":"",top:""});
this.$productSelectContainer.removeClass(a.released);
this.$productSelectContainer.removeClass(a.pinned);
this.$paginationWrapper.css({position:"absolute",top:""})
}},{key:"scrollVertical",value:function r(){if(this.scrollVerticalStarted){this.pinNavigation()
}window.requestAnimationFrame(this.scrollVerticalFrame)
}}]);
return w
}();
HSBC_utils.registerComponent({name:"comparatorSlider",selector:j.component,init:function k(m){return new h(m)
}})
}),(function(c,j,b){b.r(j);
b.d(j,"ComparatorTealium",function(){return h
});
var a=b(5);
function f(n,o){if(!(n instanceof o)){throw new TypeError("Cannot call a class as a function")
}}function m(q,o){for(var n=0;
n<o.length;
n++){var p=o[n];
p.enumerable=p.enumerable||false;
p.configurable=true;
if("value" in p){p.writable=true
}Object.defineProperty(q,p.key,p)
}}function e(p,n,o){if(n){m(p.prototype,n)
}if(o){m(p,o)
}return p
}var g=Bootstrap.jQuery,d={textContainer:"text-container",expanded:"expanded"},l={removeLink:".clear-icon",expander:".exp-comparator"},k=HSBC_utils.keyCodes;
var h=function(){function o(t){var u=this;
f(this,o);
this.$el=t.$el;
this.context=t;
this.$expander=this.context.$comparator.find(l.expander);
if(!HSBC_utils.isEditMode()){this.$expander.on("click",function(v){return u.accordionExpansionTealium(v)
}).on("keydown",function(w){var v=w.keyCode,y=v===k.ENTER,x=v===k.SPACE;
if(y||x){w.preventDefault();
u.accordionExpansionTealium(w)
}})
}}e(o,[{key:"openModalTealium",value:function q(){a.TealiumUtils.trackView({page_url:"/product-comparator/credit-cards/select-cards-popup",site_section:"pws",page_type:"tool",page_customer_group:"general",page_business_line:"rbwm",page_name:"pws:product comparator:credit cards:select cards popup",page_category:"product comparator",page_subcategory:"credit cards",raw_datalayer:"3486v3"})
}},{key:"repeatStr",value:function s(v,u){var w=[];
for(var t=0;
t<u;
){w[t++]=v
}return w.join(",")
}},{key:"productSubcategory",value:function n(u){this.$removeLink=this.context.$productSelectContainer.find(l.removeLink);
var t=[];
this.$removeLink.each(function(v,w){t.push(g(w).attr(u))
});
return t.join(",")
}},{key:"resultPageTealium",value:function r(v){var u=this.productSubcategory("data-card-subcategory"),t=this.productSubcategory("data-card-id");
a.TealiumUtils.trackView({page_url:"/product-comparator/credit-cards/result",site_section:"pws",page_type:"tool",page_customer_group:"general",page_business_line:"rbwm",page_name:"pws:product comparator:credit cards:result",page_category:"product comparator",page_subcategory:"credit cards",tool_name:"credit card comparator",tool_type:"comparator",tool_event:"completed",product_category:this.repeatStr("credit cards",v),product_subcategory:u,product_id:t,raw_datalayer:"3486v4"})
}},{key:"accordionExpansionTealium",value:function p(x){var t=g(x.target),y=false,w=t.get(0).innerText.toLowerCase(),v=this.productSubcategory("data-card-subcategory"),u=this.productSubcategory("data-card-id");
if(t.hasClass(d.textContainer)&&t.parent().hasClass(d.expanded)||t.attr("aria-expanded")==="true"){y=true
}if(!y){a.TealiumUtils.trackEventWithInheritance({page_url:"/product-comparator/credit-cards/result",site_section:"pws",page_type:"tool",page_customer_group:"general",page_business_line:"rbwm",product_category:this.repeatStr("credit cards",this.context.countOfCards),product_subcategory:v,product_id:u,page_name:"pws:product comparator:credit cards:result",page_category:"product comparator",page_subcategory:"credit cards",event_category:"content",event_subcategory:"expand",event_action:"accordion",event_content:w,raw_datalayer:"3486v5"})
}}}]);
return o
}()
}),(function(b,l,a){a.r(l);
var n=a(139);
var c=a(141);
function k(r,s){if(!(r instanceof s)){throw new TypeError("Cannot call a class as a function")
}}function q(u,s){for(var r=0;
r<s.length;
r++){var t=s[r];
t.enumerable=t.enumerable||false;
t.configurable=true;
if("value" in t){t.writable=true
}Object.defineProperty(u,t.key,t)
}}function f(t,r,s){if(r){q(t.prototype,r)
}if(s){q(t,s)
}return t
}var j=Bootstrap.jQuery,m=HSBC_utils.keyCodes,e={isVisible:"is-visible",overflowHidden:"hide-overflow",selected:"selected",addIcon:"add-icon",addImage:"add-image",removeIcon:"clear-icon",disabled:"disabled",addCard:"add-card",visuallyHidden:"visuallyhidden",pinned:"pinned"},o={component:".productComparator",modalWindow:".modal-window",outsideModal:".main-modal",modalContainer:".modal-container",modalDialog:".modal-dialog",modalButton:".modal-button",closeButton:".close-button",compareButton:".A-BTNP-RW-ALL",sectionColumnsContainer:".section-columns-container",productSelectContainer:".product-select-container",productImagesContainer:".product-images-container",tileSelector:".tile-selector",productSelect:".product-select",linkIcon:".link-icon",imageSelect:".image-select",titleLoaded:".title-loaded",sectionColumn:".section-column",modalCheckbox:".modal-checkbox",labelForCheckbox:".label-for-checkbox",descriptionForCheckbox:".description-for-checkbox",temporaryContainer:".temporary-container"},h=j("body"),g=j(document);
var d=function(){function z(N){k(this,z);
this.$comparator=j(N);
this.$modalWindow=this.$comparator.find(o.modalWindow);
this.$outsideModal=this.$modalWindow.find(o.outsideModal);
this.$modalContainer=this.$modalWindow.find(o.modalContainer);
this.$modalDialog=this.$modalContainer.find(o.modalDialog);
this.$modalButton=this.$modalContainer.find(o.modalButton);
this.$closeButton=this.$modalWindow.find(o.closeButton);
this.$compareButton=this.$modalDialog.find(o.compareButton);
this.$removeIcon=this.$comparator.find(".".concat(e.removeIcon));
this.$sectionColumnsContainer=this.$comparator.find(o.sectionColumnsContainer);
this.$productSelectContainer=this.$comparator.find(o.productSelectContainer);
this.$temporaryContainer=this.$comparator.find(o.temporaryContainer);
this.$productImagesContainer=this.$comparator.find(o.productImagesContainer);
this.$tileSelector=this.$modalDialog.find(o.tileSelector);
this.$tileSelector.find(o.modalCheckbox).attr("tabindex","-1");
this.hasParam=false;
this.isLoad=false;
this.isEmptyComparator=false;
this.index=0;
this.countOfCards=0;
this.modalScrollStarted=false;
this.modalResizeStarted=false;
this.prevWindowWidth=j(window).width();
this.modalScrollFrame=this.modalScroll.bind(this);
window.requestAnimationFrame(this.modalScrollFrame);
this.comparatorTealium=new c.ComparatorTealium(this);
this.setIdForLabel();
this.bindUIEvents();
this.removeCards()
}f(z,[{key:"bindUIEvents",value:function G(){var P=this;
var N,O;
this.$outsideModal.on("scroll",function(){clearTimeout(N);
P.modalScrollStarted=true;
N=setTimeout(function(){P.modalScrollStarted=false
},250)
});
j(window).resize(function(){clearTimeout(O);
P.modalResizeStarted=true;
O=setTimeout(function(){P.modalResizeStarted=false
},250)
});
j(window).on("load",function(){P.isLoad=true;
P.markEmptySlotForCard();
P.addHiddenCardNamesToColumns();
P.calculateCards();
if(P.isEmptyComparator){P.comparatorTealium.openModalTealium()
}});
this.$comparator.on("click",function(Q){if(P.addCardPressed(Q)){P.comparatorTealium.openModalTealium();
P.focusedElBeforeOpen=j(o.productSelect).eq(P.index).find(".".concat(e.addIcon));
P.openModal();
Q.preventDefault()
}});
g.on("click",function(Q){if(P.outsideModal(Q)){P.closeModal()
}});
this.$outsideModal.on("keydown",function(S){var R=S.keyCode,Q=R===m.ESC&&P.$outsideModal.parent().hasClass(e.isVisible);
if(Q){P.closeModal();
S.preventDefault()
}});
this.$compareButton.on("click",function(){return P.closeModal()
});
this.$tileSelector.on("click",function(Q){return P.markSelectedCards(Q)
}).on("keydown",function(T){var S=T.keyCode,R=S===m.ENTER,Q=S===m.SPACE;
if(R||Q){P.markSelectedCards(T)
}})
}},{key:"ajaxEvent",value:function t(){var O=this;
var N=arguments.length>0&&arguments[0]!==undefined?arguments[0]:function(){return false
};
new n.ComparatorAjax(this.$productSelectContainer,this.$productImagesContainer,this.$sectionColumnsContainer,this.$temporaryContainer,function(){O.markEmptySlotForCard();
O.addHiddenCardNamesToColumns();
O.comparatorTealium.resultPageTealium(O.countOfCards);
N()
})
}},{key:"setIdForLabel",value:function C(){this.$tileSelector.each(function(){var O=j(this).find(o.labelForCheckbox).get(0).id,N=j(this).find(o.descriptionForCheckbox).get(0).id;
j(this).find(o.modalCheckbox).attr({"aria-labelledby":O,"aria-describedby":N})
})
}},{key:"addHiddenCardNamesToColumns",value:function s(){var N=this;
var O=this.$productSelectContainer.find(o.titleLoaded);
this.productTitles=[];
O.each(function(P,Q){N.productTitles.push(j(Q).text())
});
this.titleNo=this.productTitles.length;
this.$sectionColumnsContainer.each(function(P,S){var Q=j(S);
var T=Q.find(o.sectionColumn);
for(var R=0;
R<N.titleNo;
R++){j(T[R]).prepend('<span class="'.concat(e.visuallyHidden,'">').concat(N.productTitles[R],"</span>"))
}})
}},{key:"markSelectedCards",value:function H(N){var O=j(N.currentTarget);
N.preventDefault();
if(!O.hasClass(e.disabled)){if(O.hasClass(e.selected)){O.removeClass(e.selected);
O.find(o.modalCheckbox).attr("aria-checked","false");
this.hasParam=false
}else{O.addClass(e.selected);
O.find(o.modalCheckbox).attr("aria-checked","true");
this.hasParam=true
}this.updateUrl(O,this.hasParam)
}}},{key:"removeCards",value:function w(){var N=this;
this.$comparator.on("click",this.$removeIcon,function(P){if(N.removeCardPressed(P)){var O=j(P.target);
if(O.is("span")){O=O.parent(".".concat(e.removeIcon))
}N.hasParam=false;
N.updateUrl(O,N.hasParam);
N.ajaxEvent();
P.preventDefault()
}})
}},{key:"updateUrl",value:function x(Q,S){this.isLoad=false;
var R=j(Q).attr("data-card-type"),T=window.location.pathname,N,O,P;
if(T.includes(".html")){N=T.replace(".html","")
}else{N=T.replace(/\/(?=[^\/]*$)/,"")
}if(S){O="".concat(N,".").concat(R)
}else{O=N.replace(".".concat(R),"")
}P=O+".html"+window.location.search;
history.pushState(null,null,P);
this.calculateCards()
}},{key:"calculateCards",value:function I(){var R=this;
var Q=window.location.pathname,P,O,T,N,S;
if(Q.includes(".html")){O=Q.replace(".html","")
}else{O=Q.replace(/\/(?=[^\/]*$)/,"")
}P=O.split("/");
T=P.slice(-1)[0];
N=T.split(".");
S=N.filter(function(W,V,U){return V===U.indexOf(W)
});
this.countOfCards=S.length-1;
this.pinCTAToggle();
this.$tileSelector.each(function(U,V){var X=j(V);
if(S.length>4){if(!X.hasClass(e.selected)){X.addClass(e.disabled);
X.find(o.modalCheckbox).attr("tabindex","-1")
}if(S.length>5){var W;
S.length=5;
P.pop();
P.push(S.join("."));
W=P.join("/")+".html"+window.location.search;
history.pushState(null,null,W);
R.ajaxEvent()
}}else{if(S.length===1&&R.isLoad){R.openModal();
R.isEmptyComparator=true
}X.removeClass(e.disabled)
}})
}},{key:"addClassForSelectedItem",value:function K(){this.$tileSelector.each(function(N,O){var P=j(O);
if(window.location.pathname.includes(P.attr("data-card-type"))){P.addClass(e.selected);
P.find(o.modalCheckbox).attr("aria-checked","true")
}else{P.removeClass(e.selected);
P.find(o.modalCheckbox).attr("aria-checked","false")
}})
}},{key:"markEmptySlotForCard",value:function u(){j(".".concat(e.addIcon)).closest(o.productSelect).addClass(e.addCard);
j(".".concat(e.addImage)).closest(o.imageSelect).addClass(e.addCard);
if(!this.isLoad){j(o.linkIcon).get(0).focus()
}}},{key:"openModal",value:function D(){this.addClassForSelectedItem();
this.locationUrl=window.location.pathname;
this.$modalWindow.addClass(e.isVisible);
h.addClass(e.overflowHidden);
this.$modalDialog.attr({"aria-hidden":"false","aria-modal":"true"});
this.$closeButton.get(0).focus();
j(o.modalCheckbox).attr("tabindex","0");
this.setFocusLoop()
}},{key:"setFocusLoop",value:function y(){var O=this.$closeButton,N=this.$compareButton;
this.$modalDialog.get(0).addEventListener("keydown",function(P){if(P.keyCode===m.TAB&&!P.shiftKey){if(N.is(":focus")){O.get(0).focus();
P.preventDefault()
}}else{if(P.keyCode===m.TAB&&P.shiftKey){if(O.is(":focus")){N.get(0).focus();
P.preventDefault()
}}}})
}},{key:"closeModal",value:function B(){this.$modalWindow.removeClass(e.isVisible);
h.removeClass(e.overflowHidden);
this.$modalDialog.attr({"aria-hidden":"true","aria-modal":"false"});
if(this.focusedElBeforeOpen){this.focusedElBeforeOpen.get(0).focus()
}if(this.locationUrl!==window.location.pathname){this.ajaxEvent()
}j(o.modalCheckbox).attr("tabindex","-1")
}},{key:"addCardPressed",value:function L(P){var O=j(P.target),N,Q;
if(O.closest(o.productSelect).length){Q=O.closest(o.productSelect);
N=j(o.productSelect)
}else{if(O.closest(o.imageSelect).length){Q=O.closest(o.imageSelect);
N=j(o.imageSelect)
}else{return false
}}if(Q.find(".".concat(e.addIcon)).length||Q.find(".".concat(e.addImage)).length){this.index=N.index(Q);
return true
}return false
}},{key:"removeCardPressed",value:function F(O){var N=j(O.target);
return N.hasClass(e.removeIcon)||N.parent(".".concat(e.removeIcon)).length
}},{key:"outsideModal",value:function J(N){return N.target===this.$outsideModal.get(0)||N.target===this.$modalContainer.get(0)||N.target===this.$closeButton.get(0)
}},{key:"modalScroll",value:function E(){if(this.modalScrollStarted){this.pinCTAToggle(true)
}else{if(this.modalResizeStarted){this.resizeCTA()
}}window.requestAnimationFrame(this.modalScrollFrame)
}},{key:"resizeCTA",value:function A(){var N=j(window).width();
if(this.prevWindowWidth!==N){this.prevWindowWidth=N;
this.unpinCTA(true);
this.pinCTAToggle(true)
}}},{key:"pinCTAToggle",value:function M(){var O=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;
var N=this.$outsideModal.prop("scrollHeight")-this.$outsideModal.prop("scrollTop")-60<this.$outsideModal.prop("clientHeight");
if(this.countOfCards>0&&!N){this.pinCTA(O)
}else{if(N){this.unpinCTA(true)
}else{this.unpinCTA()
}}}},{key:"pinCTA",value:function v(){var O=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;
if(!this.$modalButton.hasClass(e.pinned)){var N=this.$modalDialog.outerWidth();
var P=this.$modalButton.outerHeight(true);
this.$modalDialog.css("padding-bottom",P);
this.$modalButton.addClass(e.pinned);
this.$modalButton.css("width",N);
if(O){this.$modalButton.css({bottom:0})
}else{P=this.$modalButton.outerHeight();
this.$modalButton.css("bottom",-P);
this.$modalButton.animate({bottom:0})
}}}},{key:"unpinCTA",value:function r(){var N=this;
var O=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;
if(this.$modalButton.hasClass(e.pinned)){if(O){this.$modalButton.css("width","");
this.$modalButton.removeClass(e.pinned);
this.$modalDialog.css("padding-bottom",0)
}else{var P=this.$modalButton.outerHeight();
this.$modalButton.animate({bottom:-P},function(){N.unpinCTA(true)
})
}}}}]);
return z
}();
HSBC_utils.registerComponent({name:"productComparator",selector:o.component,init:function p(r){return new d(r)
}})
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(j){var h={quickLinksWithIcon:".M-QCKLKSWICN-RW-RBWM",quickLinkWithIcon:".M-QCKLKWICN-RW-RBWM",gridClasses:".grid-classes",linkContainer:".link-container"},g={linksWithDivider:"links-with-divider",divider:"A-DIVHL-RW-ALL"};
var l=function(){function v(w){e(this,v);
this.$el=j(w);
this.$gridClasses=this.$el.find(h.gridClasses);
this.$allLinks=this.$el.find(h.quickLinkWithIcon);
this.$linkContainers=this.$el.find(h.linkContainer);
this.initClasses();
this.addDivider();
this.setHeights();
this.removeLastRowDivider();
this.bindUIEvents()
}c(v,[{key:"initClasses",value:function p(){var w=this.$gridClasses.data("grid-classes");
if(w){this.$allLinks.addClass(w)
}}},{key:"bindUIEvents",value:function m(){var w=this;
j(window).on("resize",function(){w.setHeights();
w.addDivider();
w.removeLastRowDivider()
})
}},{key:"addDivider",value:function o(){this.$allLinks.find("span.A-DIVHL-RW-ALL").remove();
if(this.$gridClasses.hasClass(g.linksWithDivider)){this.$allLinks.append('<span class="'.concat(g.divider,'"></span>'))
}}},{key:"setHeights",value:function q(){this.$linkContainers.height("auto");
if(HSBC_utils.matchMedia.desktop||HSBC_utils.matchMedia.tablet){this.equalizeElementsInitialHeight();
this.equalizeElementsHeight()
}}},{key:"equalizeElementsInitialHeight",value:function u(){var w=v.getHighestElement(this.$linkContainers);
this.$linkContainers.outerHeight(w.outerHeight());
w.height("auto");
this.$linkContainers.outerHeight(w.outerHeight())
}},{key:"equalizeElementsHeight",value:function s(){var w=this.getVerticallyGroupedColumns();
this.$linkContainers.height("auto");
w.forEach(function(x){var y=Math.max.apply(null,x.map(function(z){return z.height()
}));
x.forEach(function(z){return z.height(y)
})
})
}},{key:"getVerticallyGroupedColumns",value:function t(){var w={};
this.$linkContainers.each(function(){var y=j(this),x=y.offset().top;
if(!w[x]){w[x]=[]
}w[x].push(y)
});
return j.map(w,function(x){return[x]
})
}},{key:"removeLastRowDivider",value:function n(){if(this.$allLinks.length){var w=this.$allLinks.last().offset().top;
this.$allLinks.each(function(x,y){var z=j(y);
if(z.offset().top===w){z.find("span.A-DIVHL-RW-ALL").remove()
}})
}}}],[{key:"getHighestElement",value:function r(w){return w.toArray().reduce(function(z,y){var x=j(y);
return z.height()<x.height()?x:z
},w.first())
}}]);
return v
}();
var f={name:"quickLinksWithIcon",selector:h.quickLinksWithIcon,init:function k(m){return new l(m)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(c,d,g){g.r(d);
var e=g(145);
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function a(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function b(k,h,j){if(h){a(k.prototype,h)
}if(j){a(k,j)
}return k
}(function(o){var s={recentArticles:".O-RCNART-RW-RBWM",articlesDataSource:".articles-data-source",wrapper:".recent-articles-wrapper",pagination:".generic-pagination",pageSwitchers:".number a, .arrow a",customSelect:"select.A-FSSINGSEL-RW-ALL",selectedOption:"option:selected",pageHeader:".header"},r={articles:"recent-articles"},k={common:{tiles:"O-MASTERTILE-DEV",grid:"sm-12 md-6 lg-3"},featured:{tiles:"O-MASTERTILE-DEV",grid:"sm-12 md-6"}},n={emptyResults:"empty-results",selected:"selected"},p={source:"source",tagNames:"tag-names",displayMode:"display-mode",page:"page"},v={topFour:"topFour"},h="lll",m="all",t=6;
var q=function(){function N(P,Q){f(this,N);
this.APP=Q;
this.$el=o(P);
this.$articlesDataSource=this.$el.find(s.articlesDataSource);
this.$wrapper=this.$el.find(s.wrapper);
this.$pagination=this.$el.find(s.pagination);
this.$customSelect=this.$el.find(s.customSelect);
this.prepare();
this.init();
this.bindUiEvents()
}b(N,[{key:"prepare",value:function y(){this.setData();
this.setMustacheTemplates();
if(this.articles.length>0){this.$el.removeClass(n.emptyResults);
this.prepareSettings()
}else{this.$el.addClass(n.emptyResults)
}}},{key:"prepareSettings",value:function C(){var P=this;
if(this.displayMode===v.topFour){this.articlesPerPage={first:4,any:4};
this.articleRowsMap={first:[4,0,0]};
this.selectedCategory=m;
this.$pagination.hide()
}else{this.articlesPerPage={first:10,any:12};
this.articleRowsMap={first:[2,4,4],any:[4,4,4]};
this.selectedCategory=this.$customSelect.length>0?this.$customSelect.find(s.selectedOption).val():m;
this.$customSelect.on("change",function(){return P.setSelectedCategory()
})
}}},{key:"setData",value:function D(){this.articles=this.$articlesDataSource.data(p.source)||[];
this.categories=this.$articlesDataSource.data(p.tagNames);
this.displayMode=this.$articlesDataSource.data(p.displayMode);
this.$articlesDataSource.remove();
this.filterOutdatedArticles();
this.setArticlesDate()
}},{key:"setArticlesDate",value:function w(){this.articles.forEach(function(P){if(P.publishDate){P.date=moment(P.publishDate,h).fromNow()
}})
}},{key:"filterOutdatedArticles",value:function J(){var P=this;
this.articles.filter(function(Q){return !Q.publishDate||Q.publishDate&&P.isArticleDateValid(Q.publishDate,t)
})
}},{key:"isArticleDateValid",value:function H(S,P){var R=new Date(),Q=R.setMonth(R.getMonth()-P);
return new Date(S).getTime()>Q
}},{key:"init",value:function K(){this.currentPage=1;
this.setFilteredArticles();
this.initPagination();
this.render()
}},{key:"setFilteredArticles",value:function I(){var P=this;
this.filteredArticles=this.articles.filter(function(Q){return P.isInSelectedCategory(Q)
})
}},{key:"setSelectedCategory",value:function F(){var P=this.$customSelect.find(s.selectedOption).val();
if(this.selectedCategory!=P){this.selectedCategory=P;
this.init()
}}},{key:"initPagination",value:function z(){var P=this.getPageNumber();
if(this.paginationObject){this.paginationObject.elNum=P;
this.paginationObject.currentEl=this.currentPage
}else{this.paginationObject=new e.Pagination(this.$pagination,P,this.currentPage)
}if(P>0){this.paginationObject.initElements();
this.bindPaginationUIEvents()
}else{this.paginationObject.destroy()
}}},{key:"getPageNumber",value:function A(){var P=this.filteredArticles.length,Q=P<this.articlesPerPage.first?"first":"any";
return Math.ceil((P-this.articlesPerPage.first)/this.articlesPerPage[Q])+1
}},{key:"bindUiEvents",value:function E(){var P=this;
o(window).on("resize",function(){if(P.paginationObject.getPaginationControls()){P.bindPaginationUIEvents()
}})
}},{key:"bindPaginationUIEvents",value:function G(){var P=this;
this.paginationObject.getPaginationControls().on("click",function(Q){P.currentPage=o(Q.target).data(p.page);
P.render();
P.scrollToTop();
P.bindPaginationUIEvents()
})
}},{key:"scrollToTop",value:function M(){window.scrollTo(0,this.$el.offset().top-j())
}},{key:"render",value:function O(){var Q=this;
var P=this.currentPage===1;
this.$wrapper.empty();
this.getArticleRows().forEach(function(T,R){var S=P&&Q.articleRowsMap.first[R]===2?k.featured:k.common;
Q.$wrapper.mustache(r.articles,{articles:T,classes:S})
})
}},{key:"getArticleRows",value:function x(){var R=this.currentPage===1?"first":"any",T=this.articlesPerPage.first+this.articlesPerPage[R]*(this.currentPage-2),Q=T+this.articlesPerPage[R],P=this.filteredArticles.filter(function(V,U){return U>=T&&U<Q
}),S=[];
this.articleRowsMap[R].map(function(U){S.push(P.filter(function(W,V){return V<U
}));
P.splice(0,U)
});
return S
}},{key:"setMustacheTemplates",value:function L(){o.Mustache.add(r.articles,this.$el.find(".".concat(r.articles)).html())
}},{key:"isInSelectedCategory",value:function B(P){return P.categories.indexOf(this.selectedCategory)!=-1&&P.categories.length||this.selectedCategory===m
}}]);
return N
}();
function j(){return this.APP.globalComponents.headerController.calculateHeaderHeight(this.$el)
}var l={name:"recent-articles",selector:s.recentArticles,init:function u(w,x){return new q(w,x)
}};
o(window).on("load",function(){return HSBC_utils.registerComponent(l)
})
})(Bootstrap.jQuery)
}),(function(c,h,b){b.r(h);
b.d(h,"Pagination",function(){return j
});
function g(p,q){if(!(p instanceof q)){throw new TypeError("Cannot call a class as a function")
}}function o(s,q){for(var p=0;
p<q.length;
p++){var r=q[p];
r.enumerable=r.enumerable||false;
r.configurable=true;
if("value" in r){r.writable=true
}Object.defineProperty(s,r.key,r)
}}function d(r,p,q){if(p){o(r.prototype,p)
}if(q){o(r,q)
}return r
}var l={arrow:"pagination-arrow",number:"pagination-number",dots:"pagination-dots"},m={pagination:".A-PAGMAN-RW-ALL",pageSwitchers:".number a, .arrow a"},f={page:"page",currentPageText:"current-page-text",pageText:"page-text"},n={disabled:"disabled",active:"active"},a={desktop:2,tablet:1,mobile:0},e=Bootstrap.jQuery;
var k=2;
var j=function(){function A(E,G,F){g(this,A);
this.$el=e(E);
this.$wrapper=this.$el.find(m.pagination);
this.elNum=G;
this.currentEl=F;
this.allyTexts=this.getAccessibilityTexts();
this.setMustacheTemplates();
this.initElements()
}d(A,[{key:"destroy",value:function C(){this.$wrapper.empty()
}},{key:"getAccessibilityTexts",value:function q(){var E=this.$el.data(f.currentPageText)||"",F=this.$el.data(f.pageText)||"";
return{currentPage:E,page:F}
}},{key:"setMustacheTemplates",value:function v(){var E=this;
Object.keys(l).forEach(function(F){var G=l[F],H=E.$el.find(".".concat(G));
e.Mustache.add(G,H.html())
})
}},{key:"initElements",value:function w(){if(this.elNum>1){this.setVisibleElCount();
this.render(this.getPaginationMap());
this.bindPaginationUIEvents()
}else{this.destroy()
}}},{key:"bindPaginationUIEvents",value:function t(){var E=this;
this.$pageSwitchers=this.$wrapper.find(m.pageSwitchers);
this.$pageSwitchers.on("click",function(G){G.preventDefault();
var F=e(G.target);
E.currentEl=F.data(f.page);
E.initElements()
})
}},{key:"setVisibleElCount",value:function D(){k=HSBC_utils.matchMedia.mobile?a.mobile:HSBC_utils.matchMedia.tablet?a.tablet:a.desktop
}},{key:"render",value:function s(E){var F=this;
this.destroy();
E.forEach(function(G){return F.$wrapper.mustache(G.template,G.data)
})
}},{key:"getPaginationMap",value:function u(){var H=[];
H.push(this.getArrowElement("left"));
for(var I=1;
I<=this.elNum;
I++){var G=I===1,L=I===this.elNum,F=this.getElementVisibilityCondition(I),J=this.getDotElement(L,I,-1),E=this.getDotElement(G,I,1);
if(J!==null){H.push(J)
}if(F||G||L){var K=I===this.currentEl?n.active:"";
H.push(this.getNumberElement(I,K))
}if(E!==null){H.push(E)
}}H.push(this.getArrowElement("right"));
return H
}},{key:"getDotVisibilityCondition",value:function x(E){return Math.abs(this.currentEl-E)>k+1
}},{key:"getElementVisibilityCondition",value:function r(E){return Math.abs(this.currentEl-E)<=k
}},{key:"getPaginationControls",value:function B(){if(this.$pageSwitchers===undefined){return{on:function E(){}}
}else{return this.$pageSwitchers
}}},{key:"getArrowElement",value:function p(I){var E=this.currentEl===1&&I==="left"||this.currentEl===this.elNum&&I==="right",H=E?n.disabled:"",G=this.currentEl+(I==="left"?-1:1),F=I==="right";
return{template:l.arrow,data:{direction:I,page:G,isDisabled:E,state:H,isRight:F}}
}},{key:"getDotElement",value:function z(J,F,I){if(J&&this.getDotVisibilityCondition(F)){var H=F+I,G=this.getElementVisibilityCondition(H*2)?l.number:l.dots,E=this.allyTexts.page;
return{template:G,data:{page:H,accessibilityText:E}}
}return null
}},{key:"getNumberElement",value:function y(G,F){var E=F===n.active?this.allyTexts.currentPage:this.allyTexts.page;
return{template:l.number,data:{page:G,state:F,accessibilityText:E}}
}}]);
return A
}()
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(k){var j={introSection:".intro-section",heroBannerWithSearch:".O-HEROBANWSRCH-RW-DEV",heroSearchBox:'input[type="search"]',clearCircle:".A-BTNCLR-RW-DEV"},h={hasHeroWithSearch:"hero-with-search"};
var f=function(){function n(s){e(this,n);
this.$el=k(s);
this.$introSection=this.$el.parents(j.introSection);
this.$heroSearchBox=this.$el.find(j.heroSearchBox);
this.$clearCircle=this.$el.find(j.clearCircle);
this.bindUIEvents();
this.manageClearCircleVisibility();
this.updateIntroSection()
}c(n,[{key:"bindUIEvents",value:function q(){var s=this;
this.$clearCircle.on("click",function(){s.clearHeroSearchBox();
s.manageClearCircleVisibility()
});
this.$heroSearchBox.on("input",function(){return s.manageClearCircleVisibility()
});
k(window).on("load",function(){return s.manageClearCircleVisibility()
})
}},{key:"clearHeroSearchBox",value:function r(){this.$heroSearchBox.val("").focus()
}},{key:"isSearchBoxEmpty",value:function m(){return !this.$heroSearchBox.val().length
}},{key:"manageClearCircleVisibility",value:function p(){var s=this.isSearchBoxEmpty()?"none":"inline-block";
this.$clearCircle.css("display",s)
}},{key:"updateIntroSection",value:function o(){this.$introSection.addClass(h.hasHeroWithSearch)
}}]);
return n
}();
var g={name:"herowithseach",selector:j.heroBannerWithSearch,init:function l(m){return new f(m)
}};
HSBC_utils.registerComponent(g)
})(Bootstrap.jQuery)
}),(function(c,d,g){g.r(d);
g.d(d,"AwsSearchService",function(){return h
});
function f(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function b(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var e=Bootstrap.jQuery;
var h=function(){function o(p,q){f(this,o);
this.config=p||{};
this.resultsPageSize=q;
this.currentId=0
}b(o,[{key:"getSuggestions",value:function k(t){var v=this;
var s=e.Deferred(),p=this.config.suggestionsEndpointURL,r=t.query,u=this.getNextId();
if(p&&r&&r.trim()){var q={q:r.trim(),size:4};
this.getRequest(p,q).done(function(x){if(u===v.currentId){var w=x.suggest.suggestions.map(function(y){return y.suggestion
});
s.resolve(w)
}}).fail(s.reject)
}else{s.resolve([])
}return s.promise()
}},{key:"getNextId",value:function l(){return isFinite(this.currentId)?++this.currentId:0
}},{key:"getSearchResults",value:function j(w){var q=this;
var v=e.Deferred(),u=w.query;
if(u&&u.trim()){var p=this.config.endpointURL,t=parseInt(w.page,10),s=!isNaN(t)&&t>1?(t-1)*this.resultsPageSize:0,r={q:u.trim(),size:this.resultsPageSize,start:s};
this.getRequest(p,r).done(function(x){v.resolve({results:q.formatSearchRequest(u,x),params:w})
}).fail(v.reject)
}else{v.resolve([])
}return v.promise()
}},{key:"formatSearchRequest",value:function m(q,p){return{queryString:q,numberOfResults:p.hits.found,rows:p.hits.hit.map(function(r){return{url:r.fields.url,title:r.fields.title,summary:r.fields.description}
})}
}},{key:"getRequest",value:function n(p,q){return e.ajax({method:"GET",url:p,data:q})
}}]);
return o
}()
}),(function(c,d,g){g.r(d);
g.d(d,"QueryStringState",function(){return h
});
function f(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function b(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var e=jQuery;
var h=function(){function m(q,p,o){var r=this;
f(this,m);
this.paramConfig=this.objectToKeyValuePairs(q);
this.pageNameBuilder=p||function(s,t){return s+": "+t
};
this.changePageStateHandler=o?[o]:[];
this.currentState=this.readAllParams();
e(window).on("popstate",function(s){r.currentState=r.readAllParams();
r.changePageStateHandler.forEach(function(t){return t(e.extend({},r.currentState))
})
})
}b(m,[{key:"readAllParams",value:function n(){var o=this;
return this.paramConfig.map(function(p){return[p[0],o.parseParameter(p[1])]
}).reduce(function(q,p){q[p[0]]=p[1];
return q
},{})
}},{key:"parseParameter",value:function l(p){var o=HSBC_utils.getUrlParam(p,location.search);
if(o){return o.replace("+"," ")
}else{return null
}}},{key:"updateParameter",value:function j(o,p){if(history&&history.pushState){history.pushState("",this.pageNameBuilder(o,p),"?".concat(o,"=").concat(encodeURIComponent(p)));
this.currentState=this.readAllParams()
}}},{key:"objectToKeyValuePairs",value:function k(o){return Object.keys(o).map(function(p){return[p,o[p]]
})
}}]);
return m
}()
}),(function(b,l,a){a.r(l);
a.d(l,"SearchField",function(){return f
});
var k=a(150);
var e=a(5);
function j(p,q){if(!(p instanceof q)){throw new TypeError("Cannot call a class as a function")
}}function o(s,q){for(var p=0;
p<q.length;
p++){var r=q[p];
r.enumerable=r.enumerable||false;
r.configurable=true;
if("value" in r){r.writable=true
}Object.defineProperty(s,r.key,r)
}}function d(r,p,q){if(p){o(r.prototype,p)
}if(q){o(r,q)
}return r
}var c={queryParamName:"q",moduleName:"heroSearch",moduleSelector:".O-HEROBANWSRCH-RW-DEV",searchQuery:"SEARCH_QUERY",empty:""},n={form:"form",searchInput:'input[type="search"]',tagsInput:'input[type="hidden"]',dataConfig:".O-SRCHRES-RW-RBWM [data-config]"},h={config:"config"},m=168,g=Bootstrap.jQuery;
var f=function(){function s(z,B,y){var A=this;
j(this,s);
this.$el=g(z);
this.config=g(n.dataConfig).data(h.config);
this.$searchInput=this.$el.find(n.searchInput);
this.$tagsInput=this.$el.find(n.tagsInput);
this.$form=this.$el.find(n.form);
this.onSubmit=B;
this.notInteracted=true;
this.trackFirstInteraction();
this.setInputMaxLength();
this.disableAutocomplete();
this.suggestions=new k.SearchFieldSuggestions(this.$el,this.config);
this.$el.find("form").on("submit",function(C){C.preventDefault();
A.handleSubmit()
});
this.setSearchField(y);
this.trigger="free text"
}d(s,[{key:"trackFirstInteraction",value:function w(){var y=this;
this.$searchInput.on("focus",function(z){if(y.notInteracted){y.notInteracted=false;
e.TealiumUtils.trackEventWithInheritance({event_category:"tool",event_subcategory:"search",event_action:"start",tool_name:"internal search",tool_type:"search",tool_event:"interaction"})
}})
}},{key:"setInputMaxLength",value:function p(){this.$searchInput.attr("maxlength",m)
}},{key:"disableAutocomplete",value:function t(){this.$searchInput.attr("autocomplete","off")
}},{key:"handleSubmit",value:function r(){var y=this.$searchInput.val(),z=this.validateEmpty(y);
if(!z){this.setSearchField(c.empty)
}else{this.onSubmit(y)
}}},{key:"setSearchField",value:function u(y){this.$searchInput.val(y);
this.$searchInput.attr("aria-controls","search-results-container")
}},{key:"setTrigger",value:function v(y){this.trigger=y
}},{key:"updateTags",value:function q(y){this.$tagsInput.val(y)
}},{key:"validateEmpty",value:function x(y){y=y||"";
return !!y.trim().length
}}]);
return s
}()
}),(function(c,j,b){b.r(j);
b.d(j,"SearchFieldSuggestions",function(){return l
});
var a=b(151);
function g(p,q){if(!(p instanceof q)){throw new TypeError("Cannot call a class as a function")
}}function o(s,q){for(var p=0;
p<q.length;
p++){var r=q[p];
r.enumerable=r.enumerable||false;
r.configurable=true;
if("value" in r){r.writable=true
}Object.defineProperty(s,r.key,r)
}}function e(r,p,q){if(p){o(r.prototype,p)
}if(q){o(r,q)
}return r
}var n={searchContainer:".search-panel",suggestions:".search-suggestions",suggestionList:".suggestion-list",searchField:".search-form .input",suggestionItem:".suggestion-item",helper:".search-suggestions-helper",suggestionsTotal:".suggestions-total"},d={hidden:"hidden",suggestionItem:"suggestion-item"},h={globalSettings:"global-settings"},m="search-suggestion-template",k=HSBC_utils.keyCodes,f=Bootstrap.jQuery;
var l=function(){function z(C,B){g(this,z);
this.$el=C;
this.config=B;
this.setUpGlobalSettings();
this.$suggestions=this.$el.find(n.suggestions);
this.$suggestionList=this.$suggestions.find(n.suggestionList);
this.$searchField=this.$el.find(n.searchField);
this.$suggestionsTotal=this.$el.find(n.suggestionsTotal);
this.$helper=this.$el.find(n.helper);
this.searchService=new a.SearchService(this.config);
this.results=[];
this.triggered=false;
this.setMustacheTemplates();
this.bindUIEvents()
}e(z,[{key:"bindUIEvents",value:function p(){var B=this;
this.$searchField.on("input",function(){return B.resolveSuggestions()
});
f(window).on("click",function(D){var C=f(D.target);
if(!C.parents(n.searchContainer).length){B.removeSuggestions()
}})
}},{key:"resolveSuggestions",value:function w(){var B=this;
this.triggered=false;
this.searchService.getSuggestions({query:this.$searchField.val()}).done(function(C){B.results=C||[];
if(B.results.length){B.showSuggestions()
}else{B.$helper.empty().html(0);
B.hideSuggestions()
}})
}},{key:"setUpGlobalSettings",value:function A(){this.globalSettings=f(document.body).data(h.globalSettings)
}},{key:"fetchTotalSuggestionsAllyText",value:function x(){return this.globalSettings&&this.globalSettings.totalSuggestions?this.globalSettings.totalSuggestions:""
}},{key:"showSuggestions",value:function y(){this.$suggestions.removeClass(d.hidden);
this.$helper.empty().html(this.results.length);
this.render()
}},{key:"render",value:function q(){var B=this;
this.$suggestionList.empty();
this.results.forEach(function(C){return B.$suggestionList.mustache(m,{text:C})
});
this.$suggestionsTotal.html("".concat(this.results.length," ").concat(this.fetchTotalSuggestionsAllyText()));
this.$suggestionItems=this.$suggestionList.find(n.suggestionItem);
this.bindSuggestionsUIEvents()
}},{key:"bindSuggestionsUIEvents",value:function v(){var B=this;
this.$suggestionItems.on("click",function(C){return B.handleSuggestionChoice(f(C.target))
}).on("keydown",function(D){var C=D.keyCode;
if(C===k.ENTER||C===k.SPACE){B.handleSuggestionChoice(f(D.target))
}}).on("focusout",function(D){var C=f(D.relatedTarget);
if(!C.hasClass(d.suggestionItem)){B.hideSuggestions()
}})
}},{key:"handleSuggestionChoice",value:function s(B){var C=B.text();
this.hideSuggestions();
this.triggered=true;
this.$searchField.val(C)
}},{key:"hideSuggestions",value:function u(){this.removeSuggestions();
this.$searchField.focus()
}},{key:"removeSuggestions",value:function r(){this.$suggestions.addClass(d.hidden)
}},{key:"setMustacheTemplates",value:function t(){f.Mustache.add(m,this.$el.find(".".concat(m)).html())
}}]);
return z
}()
}),(function(d,f,h){h.r(f);
h.d(f,"SearchService",function(){return e
});
var b=h(147);
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function c(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var e=function(){function l(m,n){g(this,l);
if(m&&m.aws){this.searchService=new b.AwsSearchService(m,n)
}}c(l,[{key:"getSuggestions",value:function k(m){return this.searchService.getSuggestions(m)
}},{key:"getSearchResults",value:function j(m){return this.searchService.getSearchResults(m)
}}]);
return l
}()
}),(function(c,f,b){b.r(f);
var a=b(151);
var j=b(149);
var l=b(145);
var h=b(5);
var g=b(148);
function e(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}function k(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}function d(o,m,n){if(m){k(o.prototype,m)
}if(n){k(o,n)
}return o
}(function(r){var u={results:".search-results",pagination:".generic-pagination",dataConfig:"[data-config]",dataServerErrorPageUrl:"[data-server-error-page-url]",noResults:".no-results",spellingSuggestionLink:".search-spelling-suggestion-link",spellingSuggestionContainer:".search-spelling-suggestion-container",resultItemLink:".search-result-item a[data-result-position]"},q={hidden:"hidden"},s={page:"page",config:"config",serverErrorPageUrl:"server-error-page-url",resultPosition:"data-result-position"},p={resultsPageSize:8,moduleName:"searchRender",moduleSelector:".O-SRCHRES-RW-RBWM",moduleSearchField:".O-HEROBANWSRCH-RW-DEV"},t={spinner:"search-spinner",resultsNumber:"search-results-number",result:"search-result",noResults:"search-no-results",spellingSuggestion:"search-spelling-suggestion"},m={query:"q",tags:"tags"};
var o=function(){function T(V,X){var W=this;
e(this,T);
this.$el=r(V);
this.queryStringState=new g.QueryStringState(m,this.buildSearchName.bind(this),this.updateSearchState.bind(this));
this.searchField=new j.SearchField(r(p.moduleSearchField),this.onSubmit.bind(this),this.queryStringState.currentState.query);
this.config=this.$el.find(u.dataConfig).data(s.config);
this.serverErrorPageUrl=this.$el.find(u.dataServerErrorPageUrl).data(s.serverErrorPageUrl);
this.$pagination=this.$el.find(u.pagination);
this.$results=this.$el.find(u.results);
this.resultsPageSize=X||p.resultsPageSize;
this.$spellingSuggestionContainer=this.$el.find(u.spellingSuggestionContainer);
this.searchService=new a.SearchService(this.config,this.resultsPageSize);
r(window).on("load",function(){W.setMustacheTemplates();
W.displayPageResult(W.queryStringState.currentState.query,1)
})
}d(T,[{key:"buildSearchName",value:function U(W,V){return"Search: "+V
}},{key:"updateSearchState",value:function R(V){this.displayPageResult(V.query,V.page||0);
this.searchField.setSearchField(V.query)
}},{key:"setMustacheTemplates",value:function N(){var V=this;
r.Mustache.options.warnOnMissingTemplates=true;
Object.keys(t).forEach(function(W){var X=t[W],Y=V.$el.find(".".concat(X));
r.Mustache.add(X,Y.html())
})
}},{key:"displaySpinner",value:function A(){this.$results.empty().mustache(t.spinner,{})
}},{key:"displayPageResult",value:function F(X,V){var W=this;
var Y={page:V||1,query:X,requiredfields:this.getRequiredFields()};
this.searchField.updateTags(Y.requiredfields);
if(Y.query){this.displaySpinner(Y.query);
this.searchService.getSearchResults(Y).done(function(aa){var Z=aa.results.numberOfResults;
W.renderSpellingSuggestion(aa.results);
if(Z==0){W.renderNoResults({query:aa.results.queryString})
}else{W.renderSearchResults(aa);
W.$resultItemLink=W.$el.find(u.resultItemLink);
W.trackResultClickEvent(aa);
if(Z>W.resultsPageSize){W.renderSearchPagination(aa).done(function(ab){return W.displayPageResult(X,ab.page)
})
}else{W.removePagination()
}}W.trackSearchEvent(aa);
W.rememberSuggestionOrEmpty(window.sessionStorage,W.suggestionWordOrEmpty(aa));
W.searchField.setTrigger("free text")
}).fail(function(){return W.redirectToServerErrorPage()
})
}}},{key:"trackSearchEvent",value:function C(V){h.TealiumUtils.trackEventWithInheritance({event_category:"tool",event_subcategory:"search",event_action:"complete",event_content:"search input type: "+(this.searchField.suggestions.triggered?"autofill":"free text"),tool_name:"internal search",tool_type:"search",search_results:V.results.numberOfResults,search_term:V.results.queryString,form_field_1:"page number: "+V.params.page,tool_event:"completed"})
}},{key:"trackResultClickEvent",value:function y(V){this.$resultItemLink.on("click keydown",function(W){if(W.type==="click"||W.keyCode===keyCodes.ENTER){h.TealiumUtils.trackEventWithInheritance({event_category:"tool",event_subcategory:"search",event_action:"result-click",tool_name:"internal search",tool_type:"search",search_results:V.results.numberOfResults,search_result_position:r(W.currentTarget).attr(s.resultPosition),search_term:V.results.queryString})
}})
}},{key:"rememberSuggestionOrEmpty",value:function O(W,V){return W.setItem(p.spellingSuggestion,V)
}},{key:"rememberedSuggestionOrEmpty",value:function H(V){return V.getItem(p.spellingSuggestion)||""
}},{key:"suggestionWordOrEmpty",value:function Q(V){return V&&V.results&&V.results.suggestion?V.results.suggestion:""
}},{key:"previousPageOrRollBackToCurrent",value:function K(V){return V.referrer||V.URL
}},{key:"emptyResultSetAndNoSuggestions",value:function G(V){return !(V&&V.results&&(V.results.numberOfResults||V.results.suggestion))
}},{key:"setCountOfSearchesPerformed",value:function J(W,V){W.setItem(p.moduleName,V)
}},{key:"countOfSearchesPerformed",value:function D(W){var V=W.getItem(p.moduleName);
return V>0?V:0
}},{key:"redirectToServerErrorPage",value:function L(){document.location=this.serverErrorPageUrl
}},{key:"renderNoResults",value:function E(V){this.$results.empty().mustache(t.noResults,V);
this.$results.find(u.noResults).removeClass(q.hidden);
this.removePagination()
}},{key:"removePagination",value:function w(){if(this.pagination){this.pagination.destroy()
}}},{key:"renderSpellingSuggestion",value:function S(W){var V=this;
this.$spellingSuggestionContainer.empty();
if(W.suggestion){this.$spellingSuggestionContainer.mustache(t.spellingSuggestion,W);
this.$el.find(u.spellingSuggestionLink).on("click",function(X){V.searchField.setSearchField(W.suggestion);
V.searchField.setTrigger("autofill");
V.searchField.$form.trigger("submit");
X.preventDefault();
V.$spellingSuggestionContainer.empty()
})
}}},{key:"renderSearchResults",value:function B(W){var V=this;
this.$results.empty().mustache(t.resultsNumber,{count:W.results.numberOfResults});
r(W.results.rows).each(function(X,Y){V.$results.mustache(t.result,{url:Y.url,title:Y.title,screenReaderText:Y.screenReaderText||"",summary:Y.summary,resultPosition:X+1})
});
this.$results.find("a").first().focus()
}},{key:"renderSearchPagination",value:function I(X){var V=this.countOfPages(X.results.numberOfResults,p.resultsPageSize),W=X.params.page||1,Y=r.Deferred();
this.pagination=new l.Pagination(this.$pagination,V,W);
this.pagination.getPaginationControls().on("click",function(Z){Y.resolve(r(Z.target).data(X.page));
Z.preventDefault()
});
return Y.promise()
}},{key:"countOfPages",value:function z(V,W){return Math.ceil(V/W)
}},{key:"onSubmit",value:function M(V){this.queryStringState.updateParameter("q",V);
this.displayPageResult(V,1)
}},{key:"getTags",value:function x(){return this.queryStringState.currentState.tags
}},{key:"getRequiredFields",value:function P(){var V=this.getTags();
if(V){return"tag:"+V
}return undefined
}}]);
return T
}();
var n={name:"search-render",selector:".O-SRCHRES-RW-RBWM",init:function v(w){return new o(w)
}};
HSBC_utils.registerComponent(n)
})(Bootstrap.jQuery)
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(h){var g={simpCon3ColKey:".O-SIMPCNT3COLKEY-RW-RBWM"};
var k=function(){function p(q){e(this,p);
this.$el=h(q);
this.$columnWrapper=this.$el.find(".module-wrapper");
if(HSBC_utils.matchMedia.desktop){this.equalizeColumnHeight()
}this.bindUIEvents()
}c(p,[{key:"equalizeColumnHeight",value:function o(){var q=this.$columnWrapper,r=Math.max.apply(null,q.map(function(s,t){return h(t).height()
}).get());
q.each(function(s,t){var u=h(t);
u.height(r)
})
}},{key:"resetInlineHeights",value:function l(q){q.each(function(r,t){var s=h(t);
s.height("")
})
}},{key:"resize",value:function m(){var q=this.$columnWrapper;
if(!HSBC_utils.matchMedia.desktop){this.resetInlineHeights(q)
}else{this.equalizeColumnHeight()
}}},{key:"bindUIEvents",value:function n(){var r=this;
h(window).on({resize:function q(){r.resize()
}})
}}]);
return p
}();
var f={name:"simpleContent3ColumnKeyLine",selector:g.simpCon3ColKey,init:function j(l){return new k(l)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(c,k,b){b.r(k);
var h=b(155);
var a=b(34);
function l(p){return d(p)||m(p)||o(p)||e()
}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}function o(q,p){if(!q){return
}if(typeof q==="string"){return g(q,p)
}var r=Object.prototype.toString.call(q).slice(8,-1);
if(r==="Object"&&q.constructor){r=q.constructor.name
}if(r==="Map"||r==="Set"){return Array.from(q)
}if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)){return g(q,p)
}}function m(p){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(p)){return Array.from(p)
}}function d(p){if(Array.isArray(p)){return g(p)
}}function g(q,p){if(p==null||p>q.length){p=q.length
}for(var s=0,r=new Array(p);
s<p;
s++){r[s]=q[s]
}return r
}function j(p,q){if(!(p instanceof q)){throw new TypeError("Cannot call a class as a function")
}}function n(s,q){for(var p=0;
p<q.length;
p++){var r=q[p];
r.enumerable=r.enumerable||false;
r.configurable=true;
if("value" in r){r.writable=true
}Object.defineProperty(s,r.key,r)
}}function f(r,p,q){if(p){n(r.prototype,p)
}if(q){n(r,q)
}return r
}(function(t){var p={activeClass:"is-active",hidden:"hidden"},v={headerToHideOnMobileDataAttr:"data-heading-level",hideOnMobileAndTablet:"hide-on-mobile-and-tablet",desktopTargetTab:"data-desktop-target"},s={pageHeader:".header",tabTitleItemLink:".tab-widget-link",tabTitleItemClass:".tab-widget-item",tabContent:".tab-widget-tab-content",tabsContainer:".tab-widget-tabs",tabListContainer:".tab-widget-list",headerToHideOnMobileTab:".sm-12[".concat(v.headerToHideOnMobileDataAttr,"]"),heading:".heading"};
var q=function(){function I(J,K){j(this,I);
this.APP=K;
this.$el=t(J);
this.findComponentElements();
this.smartTabsAlly=new h.SmartTabsAlly(this);
this.$outerAnchorLinks=this.findTabsOuterAnchors();
if(!HSBC_utils.isEditMode()){this.viewportResolver();
this.hideDuplicatedHeadersOnMobileAndTablet();
this.bindUIEvents();
this.activeTab(window.location.hash);
this.setHeight(this.$elementsWithInlineStyleHeight);
this.tealiumObserver=new a.TealiumObserver(this.$tabsMenuLinks,{event_type:"click",event_category:"content",event_action:"tab",event_content:function L(M){return decodeURI(t(M).attr("href")||t(M).parents(".A-EXPCNT-RW-RBWM").siblings(".anchor").attr("id")).replace("#","")
}})
}}f(I,[{key:"setAriaSelectedToTabPanel",value:function G(J){for(var K=0;
K<this.$tabsMenuLinks.length;
K++){this.$tabsMenuLinks[K].setAttribute("aria-selected","false");
this.$tabsMenuLinks[K].setAttribute("aria-expanded","false")
}J.attr("aria-selected","true");
J.attr("aria-expanded","true")
}},{key:"findComponentElements",value:function H(){this.$tabsMenuItem=this.$el.find(s.tabTitleItemClass);
this.$tabsMenuLinks=this.$el.find(s.tabTitleItemLink);
this.$tabsContent=this.$el.find(s.tabContent);
this.$tabsContainer=this.$el.find(s.tabsContainer);
this.$elementsWithInlineStyleHeight=this.$tabsContent.find("[style*='height']");
this.$tabListContainer=this.$el.find(s.tabListContainer)
}},{key:"activeTab",value:function x(K){var J=this.$tabsMenuItem.find('a[data-target="'.concat(K,'"]'));
if(J.length){this.setAriaSelectedToTabPanel(J);
this.togglePanel(J);
J.focus()
}}},{key:"findTabsOuterAnchors",value:function A(){var J=[];
this.$tabsMenuLinks.each(function(L,M){var K=t(M);
var N=K.attr("data-target");
var O=t("a:not(".concat(s.tabTitleItemLink,')[href="').concat(N,'"]'));
J=[].concat(l(J),l(O.toArray()))
});
return t(J)
}},{key:"bindUIEvents",value:function w(){var K=this;
var J;
this.smartTabsAlly.bindUIEvents();
this.$tabsMenuItem.find("a").on("click",function(M){var L=t(M.target);
var N=L.attr("data-target");
K.activeTab(N);
L.focus();
K.APP.globalComponents.anchorScrollController.anchorAction(N);
M.preventDefault()
});
t(window).on("resize",function(){clearTimeout(J);
J=setTimeout(function(){K.viewportResolver();
K.regenerateDesktopViewport();
K.setHeight(K.$elementsWithInlineStyleHeight)
},250)
})
}},{key:"togglePanel",value:function E(J){var L=J.attr("data-target");
var K=this.$el.find(L);
if(!J.hasClass(p.activeClass)){this.cleanElements();
this.setSelectedElement(J,K)
}}},{key:"cleanElements",value:function C(){this.$tabsMenuLinks.removeClass(p.activeClass);
this.$tabsContent.addClass(p.hidden)
}},{key:"setSelectedElement",value:function B(K,J){K.addClass(p.activeClass);
J.removeClass(p.hidden)
}},{key:"setHeight",value:function F(J){J.height("auto")
}},{key:"hideDuplicatedHeadersOnMobileAndTablet",value:function y(){var J=t(this.$el.find(s.headerToHideOnMobileTab));
J.each(function(L,P){var N=t(P);
var K=N.attr(v.headerToHideOnMobileDataAttr);
var O=t(N.find("".concat(K).concat(s.heading)).first());
var M=O.parent();
M.addClass(v.hideOnMobileAndTablet)
})
}},{key:"viewportResolver",value:function z(){if(HSBC_utils.matchMedia.desktop){this.$tabsContent.each(function(K,M){var L=t(M);
var J=L.attr(v.desktopTargetTab);
if(J){L.attr("id",J)
}})
}else{this.$tabsContent.each(function(K,M){var L=t(M);
var J=L.attr("id");
if(J){L.attr(v.desktopTargetTab,J);
L.attr("id","")
}})
}}},{key:"regenerateDesktopViewport",value:function D(){if(HSBC_utils.matchMedia.desktop){var L=this.$tabsMenuItem.find("".concat(s.tabTitleItemLink,'[data-target="').concat(window.location.hash,'"]'));
var J=this.$tabsMenuItem.find("".concat(s.tabTitleItemLink,".").concat(p.activeClass));
var K=this.$tabsMenuItem.find(s.tabTitleItemLink).first();
var M=K;
if(L.length){M=L
}else{if(J.length){M=J
}}this.cleanElements();
this.togglePanel(M)
}}}]);
return I
}();
var r={name:"Smart Horizontal Tabs",selector:".O-HRZTAB-RW-RBWM",init:function u(w,x){return new q(w,x)
}};
HSBC_utils.registerComponent(r)
})(Bootstrap.jQuery)
}),(function(c,g,b){b.r(g);
b.d(g,"SmartTabsAlly",function(){return a
});
function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function d(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var h=HSBC_utils.keyCodes,f=Bootstrap.jQuery;
var a=function(){function m(x){e(this,m);
this.$el=x.$el;
this.context=x;
this.ariaSelectedfirstchild()
}d(m,[{key:"bindUIEvents",value:function l(){var y=this;
this.context.$tabsMenuItem.find("a").on({keydown:function x(z){y.catchDataTarget(z);
y.keyboardNavigationMenu(z)
}});
this.context.$tabsContainer.on({keydown:function x(z){y.keyboardNavigationContainer(z)
}});
this.context.$tabsContent.on({keydown:function x(z){y.keyboardNavigationContent(z)
}})
}},{key:"changeAriaSelectState",value:function v(y){var x=f(y.target);
this.context.setAriaSelectedToTabPanel(x)
}},{key:"changeAriaHiddenTabindexState",value:function w(z){var x=f(z.target),y=x.attr("data-target");
this.context.$tabsContent.attr({"aria-hidden":true});
f(y).attr({"aria-hidden":false})
}},{key:"ariaSelectedfirstchild",value:function n(){this.context.$tabsMenuItem.first().find("a").attr("aria-selected",true)
}},{key:"goBackToTabMenuFromLastChild",value:function k(A){var y=f(A.target),z=y.closest(this.context.$tabsContent).attr("id"),x=y.closest(this.context.$tabsContent).find(HSBC_utils.focusables.join()),B=x.first().is(":focus");
if(B){this.context.$tabsContainer.attr("tabindex",-1);
f('[data-target="#'+z+'"]').focus();
A.preventDefault()
}}},{key:"focusTabPanel",value:function u(){this.context.$tabsContainer.attr("tabindex",0)
}},{key:"goBackToSelectedTab",value:function p(z){var x=f(z.target),y=x.find(this.context.$tabsContent).not(".hidden").attr("id");
f('[data-target="#'+y+'"]').focus();
z.preventDefault()
}},{key:"goBackToSelectedTabFromFirstChild",value:function s(A){var x=f(A.target),y=x.find(this.context.$tabsContent).not(".hidden").attr("id"),z=x.closest(this.context.$tabsContent).find(HSBC_utils.focusables.join());
if(z.length<1){A.preventDefault()
}this.context.$tabsContainer.attr("tabindex",-1);
f('[data-target="#'+y+'"]').focus()
}},{key:"keyboardNavigationMenu",value:function q(z){var A=z.keyCode,y=A===h.ENTER,x=A===h.SPACE;
if(y||x){this.changeAriaSelectState(z);
this.changeAriaHiddenTabindexState(z);
this.focusTabPanel();
z.preventDefault()
}}},{key:"keyboardNavigationContent",value:function o(A){var C=A.keyCode,z=A.shiftKey,y=C===h.ESC,B=C===h.TAB,x=B&&z;
if(x){this.goBackToTabMenuFromLastChild(A)
}if(y){this.goBackToSelectedTab(A)
}}},{key:"keyboardNavigationContainer",value:function r(z){var B=z.keyCode,y=z.shiftKey,A=B===h.TAB,x=A&&y;
if(x){this.goBackToSelectedTabFromFirstChild(z)
}}},{key:"catchDataTarget",value:function t(B){var z=f(B.target),C=z.attr("data-target"),A=B.keyCode,y=A===h.SPACE,x=A===h.ENTER;
if(x||y){this.context.APP.globalComponents.anchorScrollController.anchorAction(C);
this.changeAriaSelectState(B);
B.preventDefault()
}}}]);
return m
}()
}),(function(c,g,b){b.r(g);
var h=b(52);
var e=b(79);
var a=b.n(e);
function f(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function d(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}(function(n){var m={basicTable:".M-TABINS-ART-DEV",desktopHeadingCells:"table.desktop th:not([scope])",desktopTh:"table.desktop tbody tr th",nonDesktop:"table.non-desktop tbody tr th",nonDesktopTr:"table.non-desktop tbody tr",nonDesktopSeparator:"tr.hidden-row"};
var l={subheader:"subheader",tdSubheader:"td-subheader"};
var k=function(){function q(t){f(this,q);
this.$el=n(t);
this.$desktopTh=this.$el.find(m.desktopTh);
this.$nonDesktop=this.$el.find(m.nonDesktop);
this.$nonDesktopTr=this.$el.find(m.nonDesktopTr);
this.$nonDesktopSeparator=this.$el.find(m.nonDesktopSeparator);
if(!HSBC_utils.isEditMode()){new h.TablesAlly(this)
}this.removeAdditionalSpaces();
this.applyHeadingScopeAttribute();
this.subheaderBackground()
}d(q,[{key:"subheaderBackground",value:function r(){if(this.$el.find(this.$desktopTh).length>0){this.$nonDesktop.first().addClass(l.subheader);
this.$nonDesktopTr.first().find("td").addClass(l.tdSubheader);
this.$nonDesktopSeparator.next().find(n("th")).addClass(l.subheader);
this.$nonDesktopSeparator.next().find(n("td")).addClass(l.tdSubheader)
}else{this.$el.find(n(m.nonDesktop)).first().removeClass(l.subheader)
}}},{key:"removeAdditionalSpaces",value:function p(){var t=this.$el.find("td");
t.each(function(v,u){var w=n(u);
w.html(w.html().replace(/&nbsp;/g," ").trim())
})
}},{key:"applyHeadingScopeAttribute",value:function s(){var t=this.$el.find(m.desktopHeadingCells);
t.attr("scope","col")
}}]);
return q
}();
HSBC_utils.registerComponent({name:"tableinsert",selector:m.basicTable,init:function o(p){return new k(p)
}})
})(Bootstrap.jQuery)
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(){var k=Bootstrap.jQuery,j={masterTile:".O-MASTERTILE-DEV",img:"img"},h={edge11:"edge-11",ie10:"ie-10"},l=k(window),f=k("html");
var g=function(){function m(r){e(this,m);
if(this.isEdge11OrIE10()){this.$el=k(r);
this.updateAllImagesHeight();
this.updateAllImagesHeightOnResize()
}}c(m,[{key:"isEdge11OrIE10",value:function p(){return f.hasClass(h.edge11)||f.hasClass(h.ie10)
}},{key:"updateAllImagesHeight",value:function o(){var r=this;
this.$el.find(j.img).each(function(t,s){r.updateImageHeight(s)
})
}},{key:"updateAllImagesHeightOnResize",value:function n(){l.on("resize",this.updateAllImagesHeight.bind(this))
}},{key:"updateImageHeight",value:function q(r){var s=k(r);
s.height("").height(s.height())
}}]);
return m
}();
k(window).on("load",function(){return HSBC_utils.registerComponent({name:"mastertile-iefix",selector:j.masterTile,init:function m(n){return new g(n)
}})
})
})()
}),(function(b,c,d){d.r(c);
var a=d(159);
HSBC_utils.registerComponent({name:"M-VIDINS-ART-DEV",selector:".M-VIDINS-ART-DEV",init:function e(f){return new a.VideoInsert(f)
}})
}),(function(d,h,c){c.r(h);
c.d(h,"VideoInsert",function(){return b
});
var j=c(46);
var a=c(34);
function g(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function e(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var f=jQuery;
var b=function(){function m(s,r){g(this,m);
this.$=f||Bootstrap.jQuery;
this.wrapper=s;
this.options={accountId:"6178286542001",playerSelector:".brc-player",titleSelector:".title .A-TYPS5R-RW-DEV",dataAccountSelector:"[data-account]",dataAccountKey:"account"};
this.settings=this.$.extend({},this.options,r);
this.playerElement=this.$(this.wrapper).find(this.settings.playerSelector).get(0);
this.fetchAccountId();
this.loadVideoJs()
}e(m,[{key:"fetchAccountId",value:function o(){var r=this.$(this.wrapper).find(this.settings.dataAccountSelector).data(this.settings.dataAccountKey);
this.settings.accountId=r||this.settings.accountId
}},{key:"isLibLoaded",value:function n(){return window.videojs!==undefined
}},{key:"loadVideoJs",value:function p(){var r=this;
this.video=new j.Video(this.wrapper,this.settings);
if(this.isLibLoaded()){this.observeVideo()
}else{this.video.loadVideoJs(function(){r.observeVideo()
}.bind(this))
}}},{key:"observeVideo",value:function q(){var r=this;
videojs(this.playerElement).ready(function(){r.player=videojs(r.playerElement);
new a.TealiumObserver(r.player,{event_type:"play",event_action:"play",tealium_event:"link",event_category:"video",event_subcategory:"",event_content:function s(){return r.$(r.wrapper).find(r.settings.titleSelector).text()
},raw_datalayer:"3684v1"},{nativeObserver:true});
new a.TealiumObserver(r.player,{event_type:"pause",event_action:"stop",tealium_event:"link",event_category:"video",event_subcategory:function t(){return m.composeTimeData(r.player)
},event_content:function s(){return r.$(r.wrapper).find(r.settings.titleSelector).text()
},raw_datalayer:"3684v2"},{nativeObserver:true});
new a.TealiumObserver(r.player,{event_type:"playerresize",event_action:"size",tealium_event:"link",event_category:"video",event_subcategory:function t(){return r.player.isFullscreen()?"fullscreen":"inpage"
},event_content:function s(){return r.$(r.wrapper).find(r.settings.titleSelector).text()
},raw_datalayer:"3684v3"},{nativeObserver:true});
new a.TealiumObserver(r.player,{event_type:"ended",event_action:"action",tealium_event:"link",event_category:"video",event_subcategory:"ended",event_content:function s(){return r.$(r.wrapper).find(r.settings.titleSelector).text()
},raw_datalayer:"3684v4"},{nativeObserver:true});
new a.TealiumObserver(r.player,{event_type:"seeking",event_action:"action",tealium_event:"link",event_category:"video",event_subcategory:"seeking",event_content:function s(){return r.$(r.wrapper).find(r.settings.titleSelector).text()
},raw_datalayer:"3684v4"},{nativeObserver:true})
})
}}],[{key:"composeTimeData",value:function l(r){return"seconds:".concat(Math.round(r.currentTime()),"|interval:").concat(Math.round(r.currentTime()/r.duration()*100))
}}]);
return m
}()
}),(function(b,a){function d(e,f){if(!(e instanceof f)){throw new TypeError("Cannot call a class as a function")
}}var c=jQuery;
(function(){var e=function e(f,g){d(this,e);
setTimeout(function(){var k=window.location.hash;
var j=g.globalComponents.hashParser.parseHashFromLocationHash(k),h=j.anchorString;
g.globalComponents.scrollService.scroll(h)
},100)
};
c(window).on("load",function(){return HSBC_utils.registerComponent({name:"XOnLoadScroll",selector:"body > div:first-of-type",init:function f(g,h){return new e(g,h)
}})
})
})()
}),(function(b,a,c){(function(f){function g(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function d(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function e(k,h,j){if(h){d(k.prototype,h)
}if(j){d(k,j)
}return k
}(function(l){var k={guideContainerForm:".globalSmartAtmError #guideContainerForm",amountErr:{yes:'.amountError > .XfaCheckBox[data-id="1"] input',no:'.amountError > .XfaCheckBox[data-id="2"] input',inf:"#guideContainer-rootPanel-informationBanner___guide-item"},stolen:{yes:'.stolen > .XfaCheckBox[data-id="1"] input',no:'.stolen > .XfaCheckBox[data-id="2"] input',inf:"#guideContainer-rootPanel-columncontrol___guide-item, #guideContainer-rootPanel-richtext_cardstolen___guide-item"},hsbcAtm:{yes:'.hsbcATM > .XfaCheckBox[data-id="1"] input',no:'.hsbcATM > .XfaCheckBox[data-id="2"] input',atmIdField:"#guideContainer-rootPanel-guidetextbox_atmId___guide-item",financialInstField:"#guideContainer-rootPanel-guidetextbox_financialInstitution___guide-item",atmIdExpander:"#guideContainer-rootPanel-expander___guide-item",atmLocationHeading:"#guideContainer-rootPanel-heading___guide-item",streetAddressField:"#guideContainer-rootPanel-guidetextbox_streetAddress___guide-item",cityField:"#guideContainer-rootPanel-guidetextbox_city___guide-item",stateField:"#guideContainer-rootPanel-guidedropdownlist_state___guide-item",countryField:"#guideContainer-rootPanel-guidedropdownlist_country___guide-item",sequenceNumberField:"#guideContainer-rootPanel-guidenumericbox_sequence___guide-item",sequenceNumberExpander:"#guideContainer-rootPanel-expander_sequence___guide-item"},depositOrWithdrawal:{deposit:'.operation > .XfaCheckBox[data-id="1"] input',withdrawal:'.operation > .XfaCheckBox[data-id="2"] input',section:"#guideContainer-rootPanel-radiobutton_operation___guide-item",withdrawalAmountField:"#guideContainer-rootPanel-guidenumericbox_withdrawalAmount___guide-item",dispensedAmountField:"#guideContainer-rootPanel-guidenumericbox_dispensedAmount___guide-item",cashOrCheckSection:"#guideContainer-rootPanel-radiobutton_deposit___guide-item",depositAmountField:"#guideContainer-rootPanel-guidenumericbox_depositAmount___guide-item",creditAmountField:"#guideContainer-rootPanel-guidenumericbox_creditAmoount___guide-item"},time:{container:".time-select",hour:".hour",minute:".minute",period:".period",inputName:"time"}};
var m,p,j,h;
var o=function(){function s(E){g(this,s);
this.$el=l(E);
this.$amountErrorYesButton=this.$el.find(k.amountErr.yes);
this.$amountErrorNoButton=this.$el.find(k.amountErr.no);
this.$amountErrorInf=this.$el.find(k.amountErr.inf);
this.$stolenYesButton=this.$el.find(k.stolen.yes);
this.$stolenNoButton=this.$el.find(k.stolen.no);
this.$stolenInf=this.$el.find(k.stolen.inf);
this.$hsbcAtmYesButton=this.$el.find(k.hsbcAtm.yes);
this.$hsbcAtmNoButton=this.$el.find(k.hsbcAtm.no);
this.$atmIdField=this.$el.find(k.hsbcAtm.atmIdField);
this.$financialInstField=this.$el.find(k.hsbcAtm.financialInstField);
this.$atmIdExpander=this.$el.find(k.hsbcAtm.atmIdExpander);
this.$atmLocationHeading=this.$el.find(k.hsbcAtm.atmLocationHeading);
this.$streetAddressField=this.$el.find(k.hsbcAtm.streetAddressField);
this.$cityField=this.$el.find(k.hsbcAtm.cityField);
this.$stateField=this.$el.find(k.hsbcAtm.stateField);
this.$countryField=this.$el.find(k.hsbcAtm.countryField);
this.$sequenceNumberField=this.$el.find(k.hsbcAtm.sequenceNumberField);
this.$sequenceNumberExpander=this.$el.find(k.hsbcAtm.sequenceNumberExpander);
this.$cashOrCheckSection=this.$el.find(k.depositOrWithdrawal.cashOrCheckSection);
this.$depositAmountField=this.$el.find(k.depositOrWithdrawal.depositAmountField);
this.$creditAmountField=this.$el.find(k.depositOrWithdrawal.creditAmountField);
this.$depositButton=this.$el.find(k.depositOrWithdrawal.deposit);
this.$withdrawalButton=this.$el.find(k.depositOrWithdrawal.withdrawal);
this.$depositOrWithdrawalSection=this.$el.find(k.depositOrWithdrawal.section);
this.$withdrawalAmountField=this.$el.find(k.depositOrWithdrawal.withdrawalAmountField);
this.$dispensedAmountField=this.$el.find(k.depositOrWithdrawal.dispensedAmountField);
var D=this.$el.find(k.time.container);
this.$hourSelect=D.find(k.time.hour);
this.$minuteSelect=D.find(k.time.minute);
this.$periodSelect=D.find(k.time.period);
this.timeSomExpression=guidelib.runtime[k.time.inputName].somExpression;
this.bindUIEvents()
}e(s,[{key:"showEl",value:function x(D){D.css("display","block")
}},{key:"hideEl",value:function C(D){D.css("display","none")
}},{key:"isRadioButtonChecked",value:function r(D){return D.attr("checked")==="checked"
}},{key:"isStolen",value:function v(){if(this.isRadioButtonChecked(this.$stolenYesButton)){m=true
}else{if(this.isRadioButtonChecked(this.$stolenNoButton)){m=false
}}}},{key:"isAmountError",value:function A(){if(this.isRadioButtonChecked(this.$amountErrorYesButton)){p=true
}else{if(this.isRadioButtonChecked(this.$amountErrorNoButton)){p=false
}}}},{key:"isHsbcAtm",value:function B(){if(this.isRadioButtonChecked(this.$hsbcAtmYesButton)){j=true
}else{if(this.isRadioButtonChecked(this.$hsbcAtmNoButton)){j=false
}}}},{key:"isDeposit",value:function w(){if(this.isRadioButtonChecked(this.$depositButton)){h=true
}else{if(this.isRadioButtonChecked(this.$withdrawalButton)){h=false
}}}},{key:"displayInformationWhenStolen",value:function z(){if(m){this.showEl(this.$stolenInf)
}else{if(!m){this.hideEl(this.$stolenInf)
}}}},{key:"displayInformationWhenAmountError",value:function t(){if(m===false&&p===false){this.showEl(this.$amountErrorInf)
}else{this.hideEl(this.$amountErrorInf)
}}},{key:"displayInformationWhenHsbcAtm",value:function y(){if(j){this.hideEl(this.$financialInstField);
this.showEl(this.$atmIdField);
this.showEl(this.$atmIdExpander);
this.showEl(this.$atmLocationHeading);
this.showEl(this.$streetAddressField);
this.showEl(this.$cityField);
this.showEl(this.$stateField);
this.showEl(this.$countryField);
this.showEl(this.$sequenceNumberField);
this.showEl(this.$sequenceNumberExpander)
}else{this.hideEl(this.$atmIdField);
this.hideEl(this.$atmIdExpander);
this.hideEl(this.$sequenceNumberField);
this.hideEl(this.$sequenceNumberExpander);
this.showEl(this.$financialInstField);
this.showEl(this.$atmLocationHeading);
this.showEl(this.$streetAddressField);
this.showEl(this.$cityField);
this.showEl(this.$stateField);
this.showEl(this.$countryField)
}this.displayInformationWhenDepositOrWithdrawal()
}},{key:"displayInformationWhenDepositOrWithdrawal",value:function u(){this.hideEl(this.$depositOrWithdrawalSection);
this.hideEl(this.$cashOrCheckSection);
this.hideEl(this.$depositAmountField);
this.hideEl(this.$creditAmountField);
this.hideEl(this.$withdrawalAmountField);
this.hideEl(this.$dispensedAmountField);
if(j){this.showEl(this.$depositOrWithdrawalSection);
if(h){this.showEl(this.$cashOrCheckSection);
this.showEl(this.$depositAmountField);
this.showEl(this.$creditAmountField)
}else{if(h!==undefined){this.showEl(this.$withdrawalAmountField);
this.showEl(this.$dispensedAmountField)
}}}else{if(j!==undefined){this.showEl(this.$withdrawalAmountField);
this.showEl(this.$dispensedAmountField)
}}}},{key:"bindUIEvents",value:function q(){var E=this;
this.$stolenYesButton.change(function(){E.isStolen();
E.displayInformationWhenStolen();
E.displayInformationWhenAmountError()
});
this.$stolenNoButton.change(function(){E.isStolen();
E.displayInformationWhenStolen();
E.displayInformationWhenAmountError()
});
this.$amountErrorYesButton.change(function(){E.isAmountError();
E.displayInformationWhenAmountError()
});
this.$amountErrorNoButton.change(function(){E.isAmountError();
E.displayInformationWhenAmountError()
});
this.$hsbcAtmYesButton.change(function(){E.isHsbcAtm();
E.displayInformationWhenHsbcAtm()
});
this.$hsbcAtmNoButton.change(function(){E.isHsbcAtm();
E.displayInformationWhenHsbcAtm()
});
this.$depositButton.change(function(){E.isDeposit();
E.displayInformationWhenDepositOrWithdrawal()
});
this.$withdrawalButton.change(function(){E.isDeposit();
E.displayInformationWhenDepositOrWithdrawal()
});
var D=function D(){var F=E.$hourSelect.val(),I=E.$minuteSelect.val(),H=E.$periodSelect.val();
if(F&&I&&H){var G=F+":"+I+H;
guideBridge.setProperty([E.timeSomExpression],"value",[G])
}};
this.$hourSelect.change(D);
this.$minuteSelect.change(D);
this.$periodSelect.change(D)
}}]);
return s
}();
f={name:"guideContainerForm",selector:k.guideContainerForm,init:function n(q){return new o(q)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery);
(function(h){if(!(document.documentMode&&h(".globalSmartCcpa").length)){return
}window.guideBridge.submit=function(l){window.guideBridge.submitOverride=true;
var k=this;
function j(O){var E=false;
if(l){E=l.success?true:false
}var s={};
var u=window.guideBridge.getGuidePath();
var t=window.guideBridge._getGuidePathUrl(".af.submit.jsp");
s.guideContainerPath=u;
s._asyncSubmit=E;
s._charset_="UTF-8";
var A=guidelib.runtime.guideContext.customPropertyMap||{};
for(var o in A){if(A.hasOwnProperty(o)){s[o]=A[o]
}}s.afSubmissionInfo=guidelib.runtime.guideContext.afSubmissionInfo||{};
var Q=O,H,v,I,M=[],L=0;
if(Q.hasOwnProperty("guideValue")){H=Q.guideValue
}if(Q.hasOwnProperty("dataXml")){v=Q.dataXml
}if(Q.hasOwnProperty("fileAttachmentsList")){I=Q.fileAttachmentsList
}for(var P in H){if(H.hasOwnProperty(P)){s[P]=H[P]
}}if(v){s["jcr:data"]=v;
s["jcr:data@TypeHint"]="Binary"
}if(_.isUndefined(s.fileAttachmentMap)){var N={},I=[];
window.guideBridge._getFileAttachmentsList(I);
for(var G=0;
G<I.length;
G++){var C=I[G];
if(!_.isUndefined(C.value)&&C.value.length>0){var w=C.value.split("\n");
for(var D=0;
D<w.length;
D++){w[D]=C.name+"/"+w[D]
}N[C.somExpression]=w.join("\n")
}}s.fileAttachmentMap=JSON.stringify(N)
}var x=h("#actionField");
var p=x.find("input").each(function(){s[h(this).attr("name")]=h(this).val();
if(h(this).attr("name")=="_guideValueMap"&&h(this).val()=="yes"){var R={};
k._guide._collectValues(R);
s._guideValuesMap=JSON.stringify(R)
}});
if(E&&E===true){var m=[];
var n=0;
window.guideBridge._getFileAttachmentsList(m);
_.each(m,function(R){var S=R.fileAttachment.value;
if(S){n++
}});
if(n>0){var F=window.guideBridge._getUUIDForAjaxSubmit();
if(F){var y=GUIDE_TEMP_STORAGE_PATH+"/"+F;
l.ajaxSubmitObject={fileAttachmentsList:I,submitData:s,actionUrl:t,ajaxSubmitDataHandler:window.guideBridge.updateSubmitData};
window.guideBridge._getGuideAttachments(m,y,window.guideBridge._collectFileUrls,l)
}}else{k.doAjaxSubmit(t,s,l)
}}else{var r=h("<form method='post' enctype='multipart/form-data'/>");
r.attr("action",t);
for(var z in s){if(s.hasOwnProperty(z)){var B=s[z];
h("<input>").attr("type","hidden").attr("name",z).val(_.isObject(B)?JSON.stringify(B):B).appendTo(r)
}}var J=guideBridge._getFileNameFileDomMap(),K=[],q="";
if(J&&J.fileDom){K=J.fileName;
_.each(J.fileDom,function(T,S){if(T){T.attr("name",K[S]).attr("class","hidden").appendTo(r);
q+=K[S]+","
}else{if(K[S]){var R=K[S].substring(K[S].indexOf("/fileupload")+1);
h("<input>").attr("type","hidden").attr("name","_guideFileAttachment."+R).attr("value",K[S]).appendTo(r);
q+=R+","
}}})
}h("<input>").attr("type","hidden").attr("name","_guideAttachments").attr("value",q).appendTo(r);
r.appendTo(h("body"));
r.submit()
}}if(guidelib.util.GuideUtil){guidelib.util.GuideUtil.showGuideLoading(true).showMessages(guidelib.i18n.strings.validatingForm)
}setTimeout(function(){if(guideBridge._guide.allLazyChildren.length>0){guidelib.internal.liveXmlUtils.updateLiveXml()
}var o=false;
try{o=k.validate(null,null,true,false)
}catch(n){o=false
}finally{if(guidelib.util.GuideUtil){guidelib.util.GuideUtil.removeAllMessages()
}}if(o){if(guidelib.util.GuideUtil){guidelib.util.GuideUtil.showMessages(guidelib.i18n.strings.submittingForm)
}k._guide._triggerOnBridge("submitStart","","","","");
try{k._submitInternal({success:function p(){try{j.apply(k,arguments)
}catch(q){if(guidelib.util.GuideUtil){guidelib.util.GuideUtil.showGuideLoading(false);
guidelib.util.GuideUtil.showMessages("")
}}},error:function m(){try{k._handleSubmitError.apply(k,arguments);
if(guidelib.util.GuideUtil){guidelib.util.GuideUtil.showGuideLoading(false);
guidelib.util.GuideUtil.showMessages("")
}}catch(q){if(guidelib.util.GuideUtil){guidelib.util.GuideUtil.showGuideLoading(false);
guidelib.util.GuideUtil.showMessages("")
}}},async:true})
}catch(n){if(guidelib.util.GuideUtil){guidelib.util.GuideUtil.showGuideLoading(false);
guidelib.util.GuideUtil.showMessages("")
}}}else{if(guidelib.util.GuideUtil){guidelib.util.GuideUtil.showGuideLoading(false);
guidelib.util.GuideUtil.showMessages("")
}return
}},1)
}
})(Bootstrap.jQuery)
}.call(this,c(162)(b)))
}),(function(b,a){b.exports=function(c){if(!c.webpackPolyfill){c.deprecate=function(){};
c.paths=[];
if(!c.children){c.children=[]
}Object.defineProperty(c,"loaded",{enumerable:true,get:function(){return c.l
}});
Object.defineProperty(c,"id",{enumerable:true,get:function(){return c.i
}});
c.webpackPolyfill=1
}return c
}
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(g){var f=function(){function j(m,n){e(this,j);
this.APP=n;
this.$link=g(m);
this.anchorId=this.APP.components.UrlHelper.getAnchorIDFromHTMLNodeHref(m);
if(this.anchorId){this.bindUiEvents(this.anchorId)
}}c(j,[{key:"uiClickEvent",value:function k(o,m){if(m==="#"){o.preventDefault();
return
}var n=g(m).length;
if(!n){return
}o.preventDefault();
this.APP.globalComponents.anchorScrollController.anchorAction(m)
}},{key:"bindUiEvents",value:function l(m){var n=this;
this.$link.on("click",function(o){n.uiClickEvent(o,m)
})
}}]);
return j
}();
HSBC_utils.registerComponent({name:"anchor",selector:'a[href*="#"]',init:function h(j,k){return new f(j,k)
}})
})(Bootstrap.jQuery)
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(j){var h={backgroundImage:".background-image",imageData:".image-data"};
var f=function(){function l(n){e(this,l);
this.$el=j(n);
this.$imageData=this.$el.find(h.imageData);
this.imageLazyLoad()
}c(l,[{key:"imageLazyLoad",value:function m(){var o=this;
var n=this.$imageData.attr("data-src");
j(window).on("load",function(){return o.$imageData.css("background-image",n)
})
}}]);
return l
}();
function k(l){new f(l)
}var g={name:"Background Image",selector:h.backgroundImage,init:k};
HSBC_utils.registerComponent(g)
})(Bootstrap.jQuery)
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(k){var j={brandBarFont16:".A-BBST16R-RW-ALL"},h={firefoxFix:"firefoxFix"};
var g=function(){function m(o){e(this,m);
this.$el=k(o);
this.$brandBarFont16=this.$el.find(j.brandBarFont16);
this.setClass()
}c(m,[{key:"setClass",value:function n(){this.$brandBarFont16.addClass(h.firefoxFix)
}}]);
return m
}();
var f={name:"brandBar",selector:".O-BRBAR-RW-RBWM",init:function l(m){return new g(m)
}};
if(HSBC_utils.isFirefox){HSBC_utils.registerComponent(f)
}})(Bootstrap.jQuery)
}),(function(d,e,h){h.r(e);
var f=h(167);
var b=h(34);
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function c(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}(function(m){var k={expanded:"expanded",wrapper:"A-WRAPPER-RW-ALL",notWrapper:"no-wrapper",smallExpander:"A-SMLEXP-RW-ALL",comparatorExpander:"exp-comparator"},r={AEMLayerChanged:"expander:AEMLayerChanged"},p={expander:".expander",expanded:".expanded",selectBar:".dropdown",wrapperDropdown:".wrapper-dropdown",collapsibleElement:".exp-content",expanderHeading:".dropdown-text",advancedExpander:".O-ADVEXP-RW-RBWM",accordion:".O-ACCRD-RW-RBWM",header:".header"},n=HSBC_utils.keyCodes;
var o=function(){function u(A,C){g(this,u);
this.APP=C;
this.$el=m(A);
this.$selectBar=this.$el.children(p.selectBar);
this.$collapsibleEl=this.$el.children(p.collapsibleElement);
this.$expanderHeading=this.$selectBar.children(p.expanderHeading);
this.$smallExpander=this.$el.hasClass(k.smallExpander);
this.isWrapper=this.$el.hasClass(k.wrapper);
this.editMode=HSBC_utils.isEditMode();
var B=this.$el.find(p.expander),E=B.find(HSBC_utils.focusables.join());
this.$focusableNodes=this.$collapsibleEl.find(HSBC_utils.focusables.join()).not(E);
this.expanderAlly=new f.ExpanderAlly(this);
this.bindUiEvents();
this.setInitialState();
this.expanderAlly.setAccessibilityAttributes(this.isExpanded());
this.expanderAlly.removeScreenReaderText();
if(this.$el.parents(p.advancedExpander).length&&!this.$el.parents(p.accordion).length&&!this.$selectBar.hasClass(k.comparatorExpander)){this.tealiumObserver=new b.TealiumObserver(this.$selectBar,{event_type:"click",event_category:"content",event_action:"advance expander",event_content:function D(F){return m(F).closest(p.advancedExpander).children("div").children("div.anchor").attr("id")
}})
}}c(u,[{key:"bindUiEvents",value:function x(){var A=this;
if(!this.editMode){this.$selectBar.on("click",function(){return A.toggle()
}).on("keydown",function(C){var B=C.keyCode,E=B===n.ENTER,D=B===n.SPACE;
if(E||D){C.preventDefault();
A.toggle()
}})
}this.$el.on(r.AEMLayerChanged,function(){return A.setInitialState()
});
m(window).on("resize",function(){return A.expanderAlly.updateModulesAccessibility(A.isExpanded())
})
}},{key:"setInitialState",value:function t(){if(HSBC_utils.isEditMode()||this.$expanderHeading.hasClass(k.expanded)){this.expand()
}else{this.collapse()
}}},{key:"expand",value:function w(){this.$expanderHeading.addClass(k.expanded);
this.$collapsibleEl.addClass(k.expanded)
}},{key:"collapse",value:function z(){this.$expanderHeading.removeClass(k.expanded);
this.$collapsibleEl.removeClass(k.expanded)
}},{key:"isExpanded",value:function y(){return this.$collapsibleEl.hasClass(k.expanded)
}},{key:"toggle",value:function s(){var A=this;
if(this.isExpanded()){this.collapse()
}else{this.expand();
if(!this.$selectBar.hasClass(k.comparatorExpander)){this.$collapsibleEl.focus();
setTimeout(function(){var B=A.APP.globalComponents.headerController.calculateHeaderHeight(A.$expanderHeading);
var C=A.$expanderHeading.offset().top-B-A.$selectBar.height();
window.scroll(0,C)
},100)
}}this.styleSmallExpander();
this.expanderAlly.setAccessibilityAttributes(this.isExpanded())
}},{key:"styleSmallExpander",value:function v(){if(this.$smallExpander){var A=this.isExpanded()?"none":this.$selectBar.css("border");
this.$selectBar.css("border-bottom",A)
}}}]);
return u
}();
function l(){m(p.expander).trigger(r.AEMLayerChanged)
}var j={name:"exp",selector:p.expander,switchToEditHandler:l,switchToPreviewHandler:l,init:function q(s,t){return new o(s,t)
}};
HSBC_utils.registerComponent(j)
})(Bootstrap.jQuery)
}),(function(b,g,a){a.r(g);
a.d(g,"ExpanderAlly",function(){return h
});
function e(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function c(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var f=Bootstrap.jQuery,d={expanded:"expanded",wrapper:"A-WRAPPER-RW-ALL",notWrapper:"no-wrapper",brandBar:"O-BRBAR-RW-RBWM"},j={wrapperDropdown:".wrapper-dropdown",expanderHeading:".dropdown-text"};
var h=function(){function n(t){e(this,n);
this.$el=t.$el;
this.$selectBar=t.$selectBar;
this.$collapsibleEl=t.$collapsibleEl;
this.$focusableNodes=t.$focusableNodes;
this.isExpandedByDefault=t.isExpandedByDefault;
this.isExpanded=t.isExpandedByDefault;
this.isWrapper=t.isWrapper;
this.context=t;
this.bindUiEvents()
}c(n,[{key:"bindUiEvents",value:function q(){var t=this;
f(window).on("resize",function(){return t.updateModulesAccessibility()
})
}},{key:"setTabIndexes",value:function p(t){if(t){this.$focusableNodes.removeAttr("tabindex")
}}},{key:"setAccessibilityAttributes",value:function m(t){this.$collapsibleEl.attr("aria-hidden",!t);
this.setTabIndexes(t);
this.updateModulesAccessibility(t)
}},{key:"removeScreenReaderText",value:function s(){if(!HSBC_utils.matchMedia.mobile){var t=f(j.wrapperDropdown),u=t.eq(0);
u.find(".visuallyhidden").text("")
}}},{key:"updateModulesAccessibility",value:function r(t){if(this.isWrapper){this.updateWrapperAccessibility()
}else{this.updateExpanderAccessibility(t)
}}},{key:"updateExpanderAccessibility",value:function l(t){if(!HSBC_utils.matchMedia.mobile){this.$selectBar.attr("tabindex",0);
this.setTabIndexes(true)
}else{this.setTabIndexes(this.isExpanded)
}this.$selectBar.attr("aria-expanded",t)
}},{key:"updateWrapperAccessibility",value:function o(){if(!HSBC_utils.matchMedia.mobile||this.$collapsibleEl.hasClass(d.notWrapper)){this.$selectBar.removeAttr("tabindex");
if(this.$collapsibleEl.parents().eq(2).hasClass(d.brandBar)){this.$collapsibleEl.attr({"aria-hidden":false})
}}else{this.$selectBar.attr("tabindex",0);
if(this.$collapsibleEl.parents().eq(2).hasClass(d.brandBar)){this.$collapsibleEl.attr({"aria-hidden":!(this.$selectBar.attr("aria-expanded")==="true")})
}if(!this.isExpanded){this.setTabIndexes(!this.isExpanded)
}}}}]);
return n
}()
}),(function(d,e,g){g.r(e);
var b=g(169);
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function a(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function c(k,h,j){if(h){a(k.prototype,h)
}if(j){a(k,j)
}return k
}(function(k){var j={nativeSelectClass:"native-select",customSelectButtonClass:"custom-select-button",customSelectIconClass:"custom-select-icon icon",customSelectTextClass:"custom-select-text",customSelectContainerClass:"custom-select-container",customSelectMenuContainerClass:"custom-select-menu-container",customSelectMenuItemClass:"custom-select-menu-item",customSelectMenuClass:"custom-select-menu",activeClass:"is-active",selectedClass:"selected",focusedClass:"focused",replacedClass:"replaced"};
var m=function(){function u(v){f(this,u);
this.$el=k(v);
this.isOpen=false;
this.id=this.$el.attr("id").replace(/select-/,"");
this.customSelectAlly=new b.CustomSelectAlly(this);
this.createCustomSelectElements();
this.buildCustomSelect();
this.updateSelectValue();
this.customSelectAlly.keyboardEvents();
this.bindUIEvents()
}c(u,[{key:"createCustomSelectElements",value:function q(){this.$customSelectButton=k("<div>",{tabindex:"0",role:"combobox","class":j.customSelectButtonClass,"aria-expanded":"false","aria-autocomplete":"list","aria-readonly":"true","aria-labelledby":this.$el.data("label"),"aria-describedby":"select-text-"+this.id,"aria-activedescendant":"select-text-"+this.id,"aria-owns":j.customSelectMenuClass});
this.$customSelectContainer=k("<div>",{"class":j.customSelectContainerClass,tabindex:"-1"});
this.$customSelectIcon=k("<span>",{"class":j.customSelectIconClass});
this.$customSelectText=k("<span>",{"class":j.customSelectTextClass,id:"select-text-"+this.id,"aria-hidden":"true","aria-disabled":"true"});
this.$customSelectMenu=k("<ul>",{"class":j.customSelectMenuClass,"aria-hidden":"true",role:"listbox","aria-disabled":"false"})
}},{key:"buildCustomSelect",value:function t(){var v=this.$el.attr("class"),w=null;
this.$el.wrap(this.$customSelectContainer);
w=this.$el.closest(".".concat(j.customSelectContainerClass));
this.$customSelectButton.insertAfter(this.$el);
this.$customSelectIcon.appendTo(this.$customSelectButton);
this.$customSelectText.appendTo(this.$customSelectButton);
this.$customSelectMenuContainer=k("<div>").append(this.$customSelectMenu);
this.$customSelectMenuContainer.addClass(j.customSelectMenuContainerClass);
this.$customSelectMenuContainer.insertAfter(this.$customSelectButton);
w.addClass(v);
this.$el.addClass(j.replacedClass);
this.renderMenu()
}},{key:"renderMenu",value:function s(){var x=this;
var w=this.$el.find("option"),v=this.$el.prop("selectedIndex");
k.each(w,function(z,A){var B=k(A),y=k("<li>",{text:B.text(),tabindex:-1,role:"option","aria-selected":"false","aria-disabled":"false"});
y.addClass(j.customSelectMenuItemClass);
y.appendTo(x.$customSelectMenu);
if(z===v){y.addClass(j.selectedClass)
}})
}},{key:"updateSelectValue",value:function n(y){var v=this.$el.find("option"),z=this.$el.closest(".".concat(j.customSelectContainerClass)),w=null,x=k(y),A=z.find(".".concat(j.customSelectMenuItemClass));
if(y!==undefined){k.each(A,function(C,D){var B=k(D);
B.removeClass(j.selectedClass);
B.removeClass(j.focusedClass);
x.attr("aria-selected",false)
});
x.addClass(j.selectedClass);
x.addClass(j.focusedClass);
x.attr("aria-selected",true);
k.each(v,function(B,C){var D=k(C);
if(D.text()===x.text()){D.prop("selected",true)
}else{D.prop("selected",false)
}})
}w=z.find("option:selected",this.$el).text();
z.find(".".concat(j.customSelectTextClass)).text(w)
}},{key:"toggleCustomSelectMenu",value:function p(){var A=this.$el.closest(".".concat(j.customSelectContainerClass)),x=A.find(".".concat(j.customSelectMenuContainerClass)),w=A.find(".".concat(j.customSelectMenuClass)),y=w.find(".".concat(j.customSelectMenuItemClass)),v=A.find(".".concat(j.customSelectButtonClass)),z=v.find(".".concat(j.customSelectTextClass)).text();
if(x.hasClass(j.activeClass)){v.attr("aria-expanded","false");
w.attr("aria-hidden","true");
this.isOpen=false;
y.attr("tabindex","-1");
this.$customSelectButton.focus()
}else{v.attr("aria-expanded","true");
w.attr("aria-hidden","false");
this.isOpen=true;
y.attr("tabindex","0");
k.each(y,function(C,D){var B=k(D);
if(B.text()===z){B.addClass(j.focusedClass);
B.focus()
}else{B.removeClass(j.focusedClass)
}})
}x.toggleClass(j.activeClass);
this.$el.change()
}},{key:"focusSelectMenuItem",value:function r(y){var w=null,x=this.$el.closest(".".concat(j.customSelectContainerClass)).find(".".concat(j.customSelectMenuItemClass)),v=x.filter(".".concat(j.focusedClass));
if(y==="next"){w=v.next()
}else{if(y==="prev"){w=v.prev()
}}if(w.length){v.removeClass(j.focusedClass);
w.addClass(j.focusedClass);
w.focus();
if(!this.isOpen){this.updateSelectValue(w)
}}}},{key:"bindUIEvents",value:function o(){var x=this;
var w=this.$el,z=this.$el.not(".disabled, .error").closest(".".concat(j.customSelectContainerClass)),v=z.find(".".concat(j.customSelectButtonClass)),y=z.find(".".concat(j.customSelectMenuItemClass));
w.on("change",function(){return x.updateSelectValue()
});
v.on("click",function(){return x.toggleCustomSelectMenu()
});
y.on("click",function(A){x.updateSelectValue(A.target);
x.toggleCustomSelectMenu()
});
k(document).on("click",function(A){if(!x.$customSelectButton.is(A.target)&&!x.$customSelectMenuContainer.is(A.target)&&x.$customSelectButton.has(A.target).length===0&&x.$customSelectMenuContainer.has(A.target).length===0&&x.isOpen){x.toggleCustomSelectMenu()
}})
}}]);
return u
}();
var h={name:"fssingsel",selector:"select.A-FSSINGSEL-RW-ALL",init:function l(n){return new m(n)
}};
HSBC_utils.registerComponent(h)
})(Bootstrap.jQuery)
}),(function(b,h,a){a.r(h);
a.d(h,"CustomSelectAlly",function(){return e
});
function g(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function c(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var d={customSelectContainerClass:"custom-select-container",customSelectMenuItemClass:"custom-select-menu-item",customSelectButtonClass:"custom-select-button"},j=HSBC_utils.keyCodes,f=Bootstrap.jQuery;
var e=function(){function m(n){g(this,m);
this.$el=n.$el;
this.context=n;
this.keyboardEvents()
}c(m,[{key:"keyboardEvents",value:function l(){var u=this;
var p=this.$el,s=this.$el.not(".disabled, .error").closest(".".concat(d.customSelectContainerClass)),o=s.find(".".concat(d.customSelectButtonClass)),q=s.find(".".concat(d.customSelectMenuItemClass));
p.on({change:function t(){return u.context.updateSelectValue()
},keyup:function r(){u.context.updateSelectValue()
}});
o.on({keydown:function n(v){if(v.keyCode===j.SPACE||v.keyCode===j.ENTER){u.context.toggleCustomSelectMenu()
}else{if(v.keyCode===j.UP||v.keyCode===j.LEFT){v.preventDefault();
u.context.focusSelectMenuItem("prev")
}else{if(v.keyCode===j.DOWN||v.keyCode===j.RIGHT){v.preventDefault();
u.context.focusSelectMenuItem("next")
}else{if(v.keyCode===j.ESC){if(u.context.isOpen){u.context.toggleCustomSelectMenu()
}}else{if(o.is(":focus")&&v.keyCode===j.TAB&&v.shiftKey){if(u.context.isOpen){u.context.toggleCustomSelectMenu()
}}}}}}}});
q.on({keydown:function n(v){if(v.keyCode===j.SPACE||v.keyCode===j.ENTER){u.context.updateSelectValue(v.target);
if(u.context.isOpen){u.context.toggleCustomSelectMenu()
}}else{if(v.keyCode===j.UP||v.keyCode===j.LEFT){u.context.focusSelectMenuItem("prev")
}else{if(v.keyCode===j.DOWN||v.keyCode===j.RIGHT){u.context.focusSelectMenuItem("next")
}else{if(v.keyCode===j.ESC){if(u.context.isOpen){u.context.toggleCustomSelectMenu()
}}else{if(q.last().is(":focus")&&v.keyCode===j.TAB&&!v.shiftKey){if(u.context.isOpen){u.context.toggleCustomSelectMenu()
}}}}}}}})
}}]);
return m
}()
}),(function(c,d,f){f.r(d);
var g=f(171);
function e(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function a(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function b(k,h,j){if(h){a(k.prototype,h)
}if(j){a(k,j)
}return k
}(function(m){var k={link:"A-MODLNK-RW-ALL",modal:"A-MOD-RW-ALL",modalOverlay:"modal-overlay",closeTrigger:"close-trigger",isVisible:"is-visible",hide:"hidden",modalAnnouncement:"modal-announcement-sr-text"},j={animation:200},l=m("body");
var n=function(){function x(A){e(this,x);
this.$link=m(A);
this.$modal=null;
this.bindUIEvents();
this.allyModule=new g.ModalAlly(this)
}b(x,[{key:"bindUIEvents",value:function r(){var A=this;
this.$link.on("click",function(B){return A.linkClickHandler(B)
});
this.$link.on("modal:switchedToEdit",function(B){return A.close()
})
}},{key:"linkClickHandler",value:function z(A){A.preventDefault();
if(!HSBC_utils.isEditMode()){if(!this.$modal){this.getMarkup()
}else{this.open()
}}}},{key:"getMarkup",value:function w(){var C=this;
var B=this.$link.attr("href");
if(!B){return
}m.ajax({type:"GET",dataType:"HTML",url:B,success:function D(E){C.setUpModalWindow(E);
C.open()
},error:function A(E){return console.error(E)
}})
}},{key:"open",value:function v(){var A=this.$closeTriggers.first();
this.$modal.addClass(k.isVisible).siblings().attr("aria-hidden","true");
setTimeout(function(){return A.focus()
},j.animation)
}},{key:"close",value:function y(){if(this.$modal){var A=this.$modal.find("."+k.modalAnnouncement);
A.removeClass(k.hide);
this.$modal.removeClass(k.isVisible).siblings().removeAttr("aria-hidden")
}this.$link.focus()
}},{key:"setUpModalWindow",value:function s(B){var A=m(B).filter("."+k.modalOverlay);
A.removeClass(k.isVisible);
l.append(A);
this.$modal=l.children().last("."+k.modalOverlay);
this.cacheModalElements();
this.lateBindUIEvents()
}},{key:"cacheModalElements",value:function t(){this.$closeTriggers=this.$modal.find("."+k.closeTrigger)
}},{key:"lateBindUIEvents",value:function u(){var A=this;
this.$closeTriggers.on("click",function(B){return A.close()
});
this.$modal.on("click",function(C){var B=m(C.target);
if(!o(B)&&!B.hasClass(k.modal)){A.close()
}});
this.allyModule.bindUIEvents()
}}]);
return x
}();
function o(r){return r.parents("."+k.modal).length
}function p(){m("."+k.link).trigger("modal:switchedToEdit")
}var h={name:"modal",selector:".A-MODLNK-RW-ALL[href*='/configuration/modals/']",init:function q(r){return new n(r)
},switchToEditHandler:p};
HSBC_utils.registerComponent(h)
})(Bootstrap.jQuery)
}),(function(b,g,a){a.r(g);
a.d(g,"ModalAlly",function(){return h
});
function e(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function d(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var j=HSBC_utils.keyCodes,f=Bootstrap.jQuery,c={hide:"hidden",modalAnnouncement:"modal-announcement-sr-text"};
var h=function(){function n(o){e(this,n);
this.$el=o.$el;
this.context=o
}d(n,[{key:"bindUIEvents",value:function l(){var p=this;
var o=this.context;
this.$focusables=o.$modal.find(HSBC_utils.focusables.join());
o.$modal.on("keydown",function(t){var v=f(document.activeElement),s=t.keyCode,r=s===j.ESC&&o.$modal.hasClass(c.isVisible),q=s===j.ENTER&&v.hasClass(c.closeTrigger),u=s===j.TAB;
if(r||q){t.preventDefault();
o.close()
}else{if(u){p.handleKeyPress(t)
}}})
}},{key:"handleKeyPress",value:function m(r){var o=this.context,t=document.activeElement,s=this.$focusables.first()[0],q=this.$focusables.last()[0],p=o.$modal.find(".".concat(c.modalAnnouncement));
p.addClass(c.hide);
if(t==q&&!r.shiftKey){s.focus();
r.preventDefault()
}else{if(t==s&&r.shiftKey){q.focus();
r.preventDefault()
}}}}]);
return n
}()
}),(function(d,e,g){g.r(e);
var a=g(173);
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function b(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function c(k,h,j){if(h){b(k.prototype,h)
}if(j){b(k,j)
}return k
}(function(n){var k={activeClass:"is-active",expandedClass:"is-expanded",selectedClass:"is-selected",onTop:"on-top"},m={tabTitleItemClass:".tab-title-item",tabPanelItemClass:".tab-panel",pageHeader:".header",tabsMenu:".tabs",tabsContent:".tabs-content",simpleTable:".M-SMPTBL-RW-RBWM",calculatorLabelLeft:".heading-left",calculatorLabelRight:".heading-right"},j={tabSwitched:"tabs:tabSwitched"};
var h=function(){function q(x,y){f(this,q);
this.APP=y;
this.$el=n(x);
this.$tabsMenu=this.$el.find(m.tabsMenu);
this.$tabsContent=this.$el.find(m.tabsContent);
this.$tabs=this.$tabsMenu.find(m.tabTitleItemClass);
this.$tabsLinks=this.$tabs.find("a");
this.$panels=this.$tabsContent.find(m.tabPanelItemClass);
this.$activePanel=this.$tabsContent.find(".".concat(k.activeClass));
this.$simpleTables=this.$tabsContent.find(m.simpleTable);
this.bindUIEvents();
this.ally=new a.TabsAlly(this)
}c(q,[{key:"bindUIEvents",value:function s(){var x=this;
this.$tabsMenu.find("a").on("click",function(y){return x.tabsMenuClickHandler(y)
});
n(window).on("hashchange",function(y){x.ally.setAriaSelectedTags();
y.preventDefault()
})
}},{key:"tabsMenuClickHandler",value:function t(y){var x=n(y.target);
this.togglePanel(x);
this.tabsMenuEvents(x);
this.setEqualHeightsOfLabelsInChinaCalculator();
this.$simpleTables.trigger(j.tabSwitched);
y.preventDefault()
}},{key:"tabsMenuEvents",value:function v(y){var A=this.$tabsContent.find(".".concat(k.activeClass)),x=A.find(HSBC_utils.focusables.join()).add(this.$tabsContent);
x.attr("tabindex",0);
this.ally.setTabIndexesOnFocusLeave();
var z=y.attr("data-target");
this.APP.globalComponents.anchorScrollController.anchorAction(z)
}},{key:"togglePanel",value:function u(x){var y=x.attr("data-target").replace("#","#panel-"),A=this.$tabsContent.find(y),z=x.parent();
if(!z.hasClass(k.activeClass)){this.cleanElements();
q.setSelectedElement(z,A);
this.ally.setAriaSelectedTags()
}}},{key:"cleanElements",value:function w(){this.$panels.removeClass(k.activeClass);
this.$tabs.removeClass("".concat(k.activeClass," ").concat(k.selectedClass))
}},{key:"setEqualHeightsOfLabelsInChinaCalculator",value:function r(){var z=this.$tabsContent.find(".".concat(k.activeClass)),x=z.find(m.calculatorLabelLeft),y=z.find(m.calculatorLabelRight);
x.height("auto");
y.height("auto");
if(!HSBC_utils.matchMedia.mobile){var B=[x,y],C=[x.outerHeight(),y.outerHeight()],A=Math.max.apply(Math,C);
B.forEach(function(D){return D.outerHeight(A)
})
}}}],[{key:"setSelectedElement",value:function p(x,y){y.addClass(k.activeClass);
x.addClass(k.activeClass)
}}]);
return q
}();
var l={name:"tabs-tablet-desktop",selector:".generic-tabs.hide-on-mobile",init:function o(p,q){return new h(p,q)
}};
HSBC_utils.registerComponent(l)
})(Bootstrap.jQuery)
}),(function(b,g,a){a.r(g);
a.d(g,"TabsAlly",function(){return c
});
function e(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function d(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var f=Bootstrap.jQuery,h=HSBC_utils.keyCodes,j={activeClass:"is-active"};
var c=function(){function o(r){e(this,o);
this.$el=r.$el;
this.$tabsMenu=r.$tabsMenu;
this.$tabsContent=r.$tabsContent;
this.$tabsLinks=r.$tabsLinks;
this.$panelFocusables=this.$tabsContent.find(HSBC_utils.focusables.join()).add(this.$tabsContent);
this.context=r;
this.setAriaSelectedTags();
this.bindUIEvents()
}d(o,[{key:"bindUIEvents",value:function m(){var s=this;
var r=this.$tabsContent.find(HSBC_utils.focusables.join()).add(this.$tabsContent);
r.on("keydown",function(t){return s.tabsContentKeyEvents(t)
});
this.$tabsMenu.find("a").on("keydown",function(t){return s.tabsMenuKeyHandler(t)
});
this.$tabsLinks.on("focus",function(){s.$tabsContent.attr("tabindex",0);
s.$tabsLinks.attr("tabindex",0)
})
}},{key:"tabsMenuKeyHandler",value:function n(w){var u=w.keyCode,t=f(w.target),s=u===h.SPACE,r=u===h.ENTER,x=u===h.TAB&&!w.shiftKey,v=t.is(this.$tabsLinks.last());
if(r||s){this.context.tabsMenuClickHandler(w)
}else{if(x&&v){this.setTabIndexesOnFocusLeave()
}}}},{key:"tabsContentKeyEvents",value:function q(t){var r=t.keyCode,s=this.$tabsMenu.find(".".concat(j.activeClass," a"));
if(r===h.ESC){this.context.focusWithoutScrolling(s);
t.preventDefault()
}}},{key:"setTabIndexesOnFocusLeave",value:function l(){var r=this.$tabsMenu.find(".".concat(j.activeClass," a"));
this.$tabsContent.attr("tabindex",-1);
this.$tabsLinks.attr("tabindex",-1);
r.attr("tabindex",0)
}},{key:"setAriaSelectedTags",value:function p(){this.$tabsLinks.attr("aria-selected",false);
this.$tabsMenu.find(".".concat(j.activeClass," a")).attr("aria-selected",true)
}}]);
return o
}()
}),(function(c,d,g){g.r(d);
var f=g(175);
function e(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function a(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function b(k,h,j){if(h){a(k.prototype,h)
}if(j){a(k,j)
}return k
}(function(o){var k={activeClass:"is-active",expandedClass:"is-expanded",selectedClass:"is-selected",onTop:"on-top"},m={tabTitleItemClass:".tab-title-item",tabPanelItemClass:".tab-panel",pageHeader:".header",tabsMenu:".tabs",tabsContent:".tabs-content",simpleTable:".M-SMPTBL-RW-RBWM"},h={tabSwitched:"tabs:tabSwitched"};
var j=false;
var n=function(){function w(C,D){e(this,w);
this.APP=D;
this.$el=o(C);
this.$tabsMenu=this.$el.find(m.tabsMenu);
this.$tabsContent=this.$el.find(m.tabsContent);
this.$tabs=this.$tabsMenu.find(m.tabTitleItemClass);
this.$tabsLinks=this.$tabs.find("a");
this.$panels=this.$tabsContent.find(m.tabPanelItemClass);
this.$simpleTables=this.$tabsContent.find(m.simpleTable);
this.bindUIEvents();
this.ally=new f.TabsMobileAlly(this);
this.activeTab()
}b(w,[{key:"activeTab",value:function r(){var E="".concat(window.location.hash,"-mobile-anchor"),D=this.$tabsMenu.find('a[data-target="'.concat(E,'"]')),C=this.$tabsContent.find(E.replace("#","#panel-"));
if(D.length){this.cleanElements();
this.setSelectedElement(D.parent(),C)
}this.ally.setAriaSelectedTags()
}},{key:"bindUIEvents",value:function q(){var C=this;
this.$tabsMenu.find("a").on("click",function(D){return C.tabsMenuClickHandler(D)
});
o(window).on("resize",function(){return w.resizeHandler()
}).on("hashchange",function(D){if(HSBC_utils.matchMedia.mobile){C.activeTab();
C.ally.setUpAttributes();
D.preventDefault()
}})
}},{key:"tabsMenuClickHandler",value:function u(D){var C=o(D.target);
this.toggleDropdown(C);
this.tabsMenuEvents(C);
this.$simpleTables.trigger(h.tabSwitched);
D.preventDefault()
}},{key:"tabsMenuEvents",value:function v(D){var E=D.parent()[0].id;
var G=this.$tabsContent.find(".".concat(k.activeClass)),H=this.$tabsMenu.find(".".concat(k.activeClass," a")),C=G.find(HSBC_utils.focusables.join()).add(this.$tabsContent),F=this.$tabsMenu.hasClass(k.expandedClass);
C.attr("tabindex",F?-1:0);
if(!F){this.$tabsContent.attr("tabindex",0);
this.ally.setTabIndexesOnFocusLeave();
this.APP.globalComponents.anchorScrollController.anchorAction("#".concat(E))
}}},{key:"toggleDropdown",value:function B(C){var E=C.attr("data-target").replace("#","#panel-"),G=this.$tabsContent.find(E),F=C.parent(),D=this.$tabsMenu.hasClass(k.expandedClass);
if(D){this.collapse(F,G)
}else{this.expand()
}}},{key:"expand",value:function A(){var C=this.$tabsMenu.find(".".concat(k.activeClass));
this.$tabsMenu.addClass(k.expandedClass);
this.moveElementToTheTop(C);
this.$tabsMenu.addClass(k.onTop)
}},{key:"collapse",value:function z(D,E){var C=this.$tabsMenu.find(".".concat(k.activeClass));
C.remove();
if(D.hasClass(k.activeClass)){this.$tabsMenu.find(".".concat(k.selectedClass)).addClass(k.activeClass)
}this.$tabs.removeClass(k.selectedClass);
this.$tabsMenu.removeClass(k.onTop).removeClass(k.expandedClass);
if(!D.hasClass(k.activeClass)){this.cleanElements();
this.setSelectedElement(D,E);
this.ally.setAriaSelectedTags()
}this.ally.setUpAttributes()
}},{key:"moveElementToTheTop",value:function s(C){var D=C.clone(true,true);
D.find("span.active-tab-hidden-text").text(this.ally.accessibility.expandedText);
f.TabsMobileAlly.cleanAccessibilityAttributes(C);
C.parent().prepend(D)
}},{key:"cleanElements",value:function y(){var C=this.$tabsMenu.find(".".concat(k.activeClass));
f.TabsMobileAlly.cleanAccessibilityAttributes(C);
this.$panels.removeClass(k.activeClass);
this.$tabs.removeClass("".concat(k.activeClass," ").concat(k.selectedClass))
}},{key:"setSelectedElement",value:function x(C,D){D.addClass(k.activeClass);
if(C.length>1){C.each(function(E,G){var F=o(G);
if(!F.hasClass(k.selectedClass)){F.addClass(k.activeClass)
}})
}else{C.addClass(k.activeClass)
}}}],[{key:"resizeHandler",value:function t(){if(!HSBC_utils.matchMedia.mobile){return
}}}]);
return w
}();
var l={name:"tabs-mobile",selector:".generic-tabs.hide-on-tablet-and-desktop",init:function p(q,r){return new n(q,r)
}};
HSBC_utils.registerComponent(l)
})(Bootstrap.jQuery)
}),(function(c,h,b){b.r(h);
b.d(h,"TabsMobileAlly",function(){return d
});
function f(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}function k(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}function e(o,m,n){if(m){k(o.prototype,m)
}if(n){k(o,n)
}return o
}var l={activeClass:"is-active",expandedClass:"is-expanded",selectedClass:"is-selected",onTop:"on-top"},g=Bootstrap.jQuery,j=HSBC_utils.keyCodes,a={defaultPhrases:{collapsed:"Dropdown menu, collapsed",expanded:"Dropdown menu, expanded",selected:"Selected"},properties:{collapsed:"dropdown-collapsed-text",expanded:"dropdown-expanded-text",selected:"dropdown-selected-text"}};
var d=function(){function n(w){f(this,n);
this.$el=w.$el;
this.$tabsMenu=w.$tabsMenu;
this.$tabsContent=w.$tabsContent;
this.$tabsLinks=w.$tabsLinks;
this.context=w;
this.accessibility=this.readAccessibility();
this.setUpAttributes();
this.bindUIEvents()
}e(n,[{key:"setUpAttributes",value:function o(){var x=this.$tabsMenu.find(".".concat(l.activeClass)),w=x.find("a");
if(w.find(".active-tab-hidden-text").length){return
}w.prepend('<span class="visuallyhidden active-tab-hidden-text"> '.concat(this.accessibility.collapsedText,", ").concat(this.accessibility.selectedText,"</span>")).attr({"aria-haspopup":"true",role:"button"}).find("span.active-tab-selected-text").attr("aria-hidden","true")
}},{key:"bindUIEvents",value:function m(){var x=this;
var w=this.$tabsContent.find(HSBC_utils.focusables.join()).add(this.$tabsContent);
this.$tabsMenu.find("a").on("keydown",function(y){return x.tabsMenuKeyHandler(y)
});
this.$tabsLinks.on("focus",function(){return x.$tabsLinks.attr("tabindex",0)
});
w.on("keydown",function(y){return x.tabsContentKeyEvents(y)
})
}},{key:"tabsMenuKeyHandler",value:function t(x){var F=x.keyCode,A=g(x.target),B=A.parent(),y=F===j.SPACE,C=F===j.ENTER,z=F===j.DOWN,E=F===j.UP,w=F===j.TAB&&!x.shiftKey,D=A.is(this.$tabsLinks.last());
if(C||y){this.context.tabsMenuClickHandler(x)
}else{if(w&&D){this.setTabIndexesOnFocusLeave()
}else{if(z){this.handleArrowKeyEvent(B,x,true)
}else{if(E){this.handleArrowKeyEvent(B,x,false)
}}}}}},{key:"handleArrowKeyEvent",value:function s(y,A,z){var x=z?"next":"prev",B=y[x](),w=B.hasClass(l.selectedClass)?B[x]().find("a"):B.find("a");
w.focus();
A.preventDefault()
}},{key:"setTabIndexesOnFocusLeave",value:function v(){var w=this.$tabsMenu.find(".".concat(l.activeClass," a"));
this.$tabsContent.attr("tabindex",-1);
this.$tabsLinks.attr("tabindex",-1);
w.attr("tabindex",0)
}},{key:"tabsContentKeyEvents",value:function u(y){var w=y.keyCode,x=this.$tabsMenu.find(".".concat(l.activeClass," a"));
if(w===j.ESC){this.context.focusWithoutScrolling(x);
y.preventDefault()
}}},{key:"setAriaSelectedTags",value:function r(){this.$tabsMenu.find(".".concat(l.activeClass," a")).attr("role","button").find("span.active-tab-selected-text").attr("aria-hidden","true")
}},{key:"readAccessibility",value:function q(){return{expandedText:this.$el.data(a.properties.expanded)||a.defaultPhrases.expanded,collapsedText:this.$el.data(a.properties.collapsed)||a.defaultPhrases.collapsed,selectedText:this.$el.data(a.properties.selected)||a.defaultPhrases.selected}
}}],[{key:"cleanAccessibilityAttributes",value:function p(w){w.removeClass(l.activeClass).addClass(l.selectedClass).find("a").removeAttr("aria-haspopup").attr("role","menuitem").find("span.active-tab-hidden-text").remove();
w.find("span.active-tab-selected-text").attr("aria-hidden","false")
}}]);
return n
}()
}),(function(b,j,a){a.r(j);
var f=a(177);
var h=a(178);
var c=a(180);
var k=a(183);
var d=a(184);
var e=a(185);
var g=a(186);
HSBC_utils.registerComponent({name:"callbackForm",selector:".callback-form-sht",init:function l(m){return new f.CallBackForm(m)
}});
HSBC_utils.registerComponent({name:"contactDateFieldSHT",selector:".sht-callbackform-text-field.contact-date",init:function l(m){return new h.CallBackFormInputContactDate(m)
}});
HSBC_utils.registerComponent({name:"dropdownSelectSHT",selector:".sht-callbackform-select-field",init:function l(m){return new c.CallBackFormInputDropdown(m)
}});
HSBC_utils.registerComponent({name:"phoneNumberFieldSHT",selector:".sht-callbackform-text-field.email",init:function l(m){return new k.CallBackFormInputEmail(m)
}});
HSBC_utils.registerComponent({name:"phoneNumberFieldSHT",selector:".sht-callbackform-text-field.phone-number",init:function l(m){return new d.CallBackFormInputPhoneNumber(m)
}});
HSBC_utils.registerComponent({name:"radioSelectSHT",selector:".sht-callbackform-radio-field",init:function l(m){return new e.CallBackFormInputRadio(m)
}});
HSBC_utils.registerComponent({name:"simpleTextFieldSHT",selector:".sht-callbackform-text-field.simple-text",init:function l(m){return new g.CallBackFormInpuSimpleText(m)
}})
}),(function(a,g,b){b.r(g);
b.d(g,"CallBackForm",function(){return m
});
var p=b(5);
function d(u,v){if(!(u instanceof v)){throw new TypeError("Cannot call a class as a function")
}}function j(x,v){for(var u=0;
u<v.length;
u++){var w=v[u];
w.enumerable=w.enumerable||false;
w.configurable=true;
if("value" in w){w.writable=true
}Object.defineProperty(x,w.key,w)
}}function q(w,u,v){if(u){j(w.prototype,u)
}if(v){j(w,v)
}return w
}var f=Bootstrap.jQuery,e={callbackFormWrapper:".callback-form-sht",callbackFormTemplate:".callbackFormPage",servicesInput:'input[name="services"]',existingCustomerInput:'input[name="existing-customer"]',countryOfResidenceInput:'input[name="country-residence"]',destinationInput:'input[name="destination"]',contactTimeInput:'input[name="contact-time"]',preferredBranchInput:'input[name="preferred-branch"]',dayInputElement:'input[name="contact-date-day"]',monthInputElement:'input[name="contact-date-month"]',yearInputElement:'input[name="contact-date-year"]',submitMainButtonWrapper:".submit-main-button-wrapper",submitMainButton:"button",firstPathWrapper:".first-path-wrapper",secondPathWrapper:".second-path-wrapper",formUpdateSrtInfo:".form-update-srt-info",confirmationStatus:".confirmation-status-publish",errorStatus:".error-status-publish",titleWithSubtitle:".title-with-subtitle-wrapper",statusViews:".status-views",input:"input",spinnerContainer:".spinner-container"},r={formUpdateFirstPathSrt:"form-update-first-path-srt",formUpdateSecondPathSrt:"form-update-second-path-srt",submitMainButtonDisabledSrt:"disabled-srt",apiDetails:"form-api-details"},c=["OVERSEAS_ACCOUNT_OPENING","EDUCATION","MORTGAGES","RELOCATION","MOVING_FINANCES_GLOBALLY","MANAGING_INVESTMENTS_ABROAD"],s={validationError:"validationError"};
var l,o,h=false,t=false,n=false,k=false;
var m=function(){function G(P){d(this,G);
this.$elem=f(P);
this.firstInteraction=false;
this.errorCodeText=null;
this.findFormElements();
this.disableSubmitMainButton();
this.bindUIEvents();
this.resetRadioButtonValue()
}q(G,[{key:"findFormElements",value:function K(){this.$servicesInput=this.$elem.find(e.servicesInput);
this.$existingCustomerInput=this.$elem.find(e.existingCustomerInput);
this.$countryOfResidenceInput=this.$elem.find(e.countryOfResidenceInput);
this.$destinationInput=this.$elem.find(e.destinationInput);
this.$contactTimeInput=this.$elem.find(e.contactTimeInput);
this.$preferredBranchInput=this.$elem.find(e.preferredBranchInput);
this.$dayInputElement=this.$elem.find(e.dayInputElement);
this.$monthInputElement=this.$elem.find(e.monthInputElement);
this.$yearInputElement=this.$elem.find(e.yearInputElement);
this.$formUpdateSrtInfo=this.$elem.find(e.formUpdateSrtInfo);
this.formUpdateFirstPathSrt=this.$elem.data(r.formUpdateFirstPathSrt);
this.formUpdateSecondPathSrt=this.$elem.data(r.formUpdateSecondPathSrt);
this.$firstPathWrapper=this.$elem.find(e.firstPathWrapper);
this.$secondPathWrapper=this.$elem.find(e.secondPathWrapper);
this.$submitMainButtonWrapper=this.$elem.find(e.submitMainButtonWrapper);
this.$submitMainButton=this.$submitMainButtonWrapper.find(e.submitMainButton);
this.$submitMainButtonDisabledScreenReaderText=this.$submitMainButtonWrapper.data(r.submitMainButtonDisabledSrt);
this.$statusViewsContainer=this.$elem.parent().find(e.statusViews);
this.$confirmationStatus=this.$elem.parent().find(e.confirmationStatus);
this.$errorStatus=this.$elem.parent().find(e.errorStatus);
this.$statusButtons=this.$statusViewsContainer.find(".btn");
this.$titlesWithSubtitle=this.$elem.parents().find(e.titleWithSubtitle);
this.$insideCallbackFormTemplate=this.$elem.parents(e.callbackFormTemplate)||null;
this.$titlesWithSubtitle=this.$insideCallbackFormTemplate.find(e.titleWithSubtitle)||null;
this.$allInputs=this.$elem.find(e.input);
this.$callbackForm=this.$elem.find("form");
this.$spinnerContainer=this.$elem.find(e.spinnerContainer);
this.apiDetails=this.$elem.data(r.apiDetails)
}},{key:"bindUIEvents",value:function y(){var T=this;
this.$servicesInput.on({change:function S(){return T.checkValuesOfInputsAndShowProperContent()
}});
this.$existingCustomerInput.on({change:function S(){return T.checkValuesOfInputsAndShowProperContent()
}});
this.$submitMainButton.on({click:function Q(U){U.preventDefault();
if(!n&&k){n=true;
T.showStatusPage(U)
}}});
this.$elem.on({validateAll:function P(){return T.validateAll()
}});
this.$elem.one({"click keydown touchstart":function R(){return T.trackFirstInteractionWithCallBackForm()
}})
}},{key:"resetRadioButtonValue",value:function D(){this.$existingCustomerInput.val("")
}},{key:"showStatusPage",value:function B(Q){var P=HSBC_utils.matchMedia.mobile;
Q.preventDefault();
if(P){f(window).scrollTop(0);
if(f(window).scrollTop()===0){this.showMessageAfterSubmission();
this.$statusViewsContainer.get(0).focus()
}}else{this.showMessageAfterSubmission();
if(HSBC_utils.isSafari){this.$statusButtons.get(0).focus()
}}}},{key:"showConfirmationPage",value:function H(){this.$confirmationStatus.attr("aria-hidden",false).show();
this.trackConfirmationView()
}},{key:"showErrorPage",value:function N(){this.$errorStatus.attr("aria-hidden",false).show();
this.trackTechnicalErrorView()
}},{key:"hideForm",value:function O(){var P=[this.$titlesWithSubtitle.eq(0),this.$elem];
P.forEach(function(Q){Q.attr("aria-hidden",true).hide()
})
}},{key:"checkValuesOfInputsAndShowProperContent",value:function z(){l=this.$servicesInput.val().trim().toLocaleUpperCase();
o=this.$existingCustomerInput.val().trim().toLocaleLowerCase();
if(l!==""&&o!==""){if(l===c[0]||l===c[1]||l===c[3]){this.showSubmitMainButtonAndInputs()
}else{this.showLivePersonChatButton()
}}}},{key:"showSubmitMainButtonAndInputs",value:function M(){var P=this;
this.$secondPathWrapper.fadeOut(100,function(){P.$firstPathWrapper.fadeIn(100,function(){if(!h){P.announceFormChange(P.formUpdateFirstPathSrt);
h=true;
t=false
}})
})
}},{key:"showLivePersonChatButton",value:function F(){var P=this;
this.$firstPathWrapper.fadeOut(100,function(){P.$secondPathWrapper.fadeIn(100,function(){if(!t){P.announceFormChange(P.formUpdateSecondPathSrt);
h=false;
t=true
}})
})
}},{key:"announceFormChange",value:function v(P){this.$formUpdateSrtInfo.text(P)
}},{key:"enableSubmitMainButton",value:function x(){k=true;
this.$submitMainButton.removeClass("disabled-btn");
this.$submitMainButton.removeAttr("aria-disabled");
if(HSBC_utils.isMobileAndroid){this.$submitMainButton.find(".android-srt").remove()
}}},{key:"disableSubmitMainButton",value:function L(){k=false;
this.$submitMainButton.addClass("disabled-btn");
this.$submitMainButton.attr("aria-disabled",true);
if(HSBC_utils.isMobileAndroid){var P='<span class="visuallyhidden android-srt">'.concat(this.$submitMainButtonDisabledScreenReaderText,"</span>"),Q=this.$submitMainButton.find(".android-srt").length;
if(!Q){this.$submitMainButton.append(P)
}}}},{key:"validateAll",value:function C(){var P=true;
f.each(this.$allInputs,function(S,R){var U=f(R),T=U.val().length,Q=U.hasClass(s.validationError);
if(T===0||Q){P=false
}});
if(P){this.enableSubmitMainButton()
}else{this.disableSubmitMainButton()
}}},{key:"trackFirstInteractionWithCallBackForm",value:function E(){if(this.firstInteraction===false){p.TealiumUtils.trackEventWithInheritance({event_category:"form",event_action:"start"});
this.firstInteraction=true
}}},{key:"getFormData",value:function I(){var P=this.$callbackForm.serializeArray();
var S={},Q={};
f.each(this.apiDetails.requestHeaders,function(U,V){S[V.name]=V.value
});
f.each(P,function(U,V){Q[V.name]=V.value
});
S["X-HSBC-Session-Correlation-Id"]="sht".concat(Date.now().toString());
var T=moment("".concat(Q["contact-date-year"].trim(),"-").concat(Q["contact-date-month"].trim(),"-").concat(Q["contact-date-day"].trim()),"YYYY-MM-DD");
var R={consent:true,customerDetails:{countryOfResidence:Q["country-residence"].trim().toLocaleUpperCase(),firstName:Q["first-name"].trim(),lastName:Q["last-name"].trim()},referralDetails:{sourceOfReferral:"ISW",destination:Q.destination.trim().toLocaleUpperCase(),interestInternationalService:Q.services.trim().toLocaleUpperCase(),preferredBranchOfAccountOpening:Q["preferred-branch"].trim(),iswReferralCode:window.utag_data?window.utag_data.adobe_mcvid||"0":"0",existingCustomer:Q["existing-customer"].trim()==="yes"},contactDetails:{phoneNumber:"".concat(Q["phone-number-prefix"].trim()).concat(Q["phone-number"].trim()),emailAddress:Q.email.trim(),preferredContactDate:T.format("YYYY-MM-DD"),preferredContactTime:Q["contact-time"].trim().toLocaleUpperCase()}};
return f.ajax({url:this.apiDetails.apiUrl,type:"POST",crossDomain:true,dataType:"json",data:JSON.stringify(R),headers:S})
}},{key:"showMessageAfterSubmission",value:function A(){var P=this;
this.showSpinner();
this.getFormData().done(function(Q){P.hideForm();
n=false;
if(Q.referralId){P.showConfirmationPage()
}else{try{P.errorCodeText=Q.errorInfo[0].code||""
}catch(R){P.errorCodeText=""
}P.showErrorPage()
}}).fail(function(Q){try{P.errorCodeText=Q.statusText||""
}catch(R){P.errorCodeText=""
}P.hideForm();
P.showErrorPage();
n=false
})
}},{key:"showSpinner",value:function w(){this.$spinnerContainer.show()
}},{key:"trackConfirmationView",value:function u(){var V=this.$countryOfResidenceInput.val().trim().toLocaleLowerCase(),T=this.$destinationInput.val().trim().toLocaleLowerCase(),R=this.$contactTimeInput.val().trim().toLocaleLowerCase(),Q=this.$preferredBranchInput.val().trim().toLocaleLowerCase(),P=this.$dayInputElement.val(),W=this.$monthInputElement.val(),U=this.$yearInputElement.val(),S=moment("".concat(U,"-").concat(W,"-").concat(P),"MM-DD-YYYY").toDate();
if(HSBC_utils.isTealiumReady){p.TealiumUtils.trackView({event_category:"form",event_action:"submit",event_content:"completed",page_name:"".concat(window.utag_data.page_name," : confirmation")||false,page_url:"".concat(window.utag_data.page_url,"confirmation")||false,form_field_1:"services interested in: ".concat(l),form_field_2:"existing customer: ".concat(o),form_field_3:"country of residence: ".concat(V," & preferred branch: ").concat(Q),form_field_4:"destination: ".concat(T),form_field_5:"contact date: ".concat(S," & contact time: ").concat(R)})
}}},{key:"trackTechnicalErrorView",value:function J(){if(HSBC_utils.isTealiumReady){p.TealiumUtils.trackView({event_category:"error",event_subcategory:this.errorCodeText,event_action:"system",event_content:"technical error",error_type:"system",page_type:"error",page_name:"".concat(window.utag_data.page_name," : technical error")||false,page_url:"".concat(window.utag_data.page_url,"technical-error")||false})
}}}]);
return G
}()
}),(function(b,g,a){a.r(g);
a.d(g,"CallBackFormInputContactDate",function(){return h
});
var c=a(179);
function e(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function d(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var f=Bootstrap.jQuery,j={callbackFormWrapper:".callback-form-sht",contactDateField:".sht-callbackform-text-field.contact-date",dayInputElement:".contact-date-day",monthInputElement:".contact-date-month",yearInputElement:".contact-date-year"};
var h=function(){function r(s){e(this,r);
this.$elem=f(s);
this.$dayInputElement=this.$elem.find(j.dayInputElement);
this.$monthInputElement=this.$elem.find(j.monthInputElement);
this.$yearInputElement=this.$elem.find(j.yearInputElement);
this.inputsArray=[this.$dayInputElement.get(0),this.$monthInputElement.get(0),this.$yearInputElement.get(0)];
this.$validation=new c.CallBackFormValidation(this.$elem,f(this.inputsArray));
this.bindUIEvents()
}d(r,[{key:"bindUIEvents",value:function p(){var v=this;
this.$dayInputElement.on({keyup:function t(w){return v.formatNumber(w,2)
},blur:function s(){return v.checkIfValidateDate()
},change:function u(){return v.checkIfValidateDate()
}});
this.$monthInputElement.on({keyup:function t(w){return v.formatNumber(w,2)
},blur:function s(){return v.checkIfValidateDate()
},change:function u(){return v.checkIfValidateDate()
}});
this.$yearInputElement.on({keyup:function t(w){return v.formatNumber(w,4)
},blur:function s(){return v.checkIfValidateDate()
},change:function u(){return v.checkIfValidateDate()
}})
}},{key:"checkIfValidateDate",value:function o(){var s=this;
setTimeout(function(){var t=document.activeElement;
if(!s.inputsArray.includes(t)){s.validateDate()
}},0)
}},{key:"validateDate",value:function n(){var s=this.$dayInputElement.val(),w=this.$monthInputElement.val(),v=this.$yearInputElement.val(),u=moment("".concat(v,"-").concat(w,"-").concat(s),"YYYY-MM-DD"),t=moment();
if(s===""||w===""||v===""){this.$validation.setErrorMessage("incompleteFieldError");
this.$validation.showErrorMessage()
}else{if(u.isValid()&&this.validateRangeOfDate(v,w,s)){if(u.isAfter(t)){this.$validation.hideErrorMessage()
}else{this.$validation.setErrorMessage("contactDateError");
this.$validation.showErrorMessage()
}}else{this.$validation.setErrorMessage("contactDateError");
this.$validation.showErrorMessage()
}}}},{key:"validateRangeOfDate",value:function q(u,v,s){var t=moment().year();
return u>=t&&u<=9999&&v>=1&&v<=12&&s>=1&&s<=31&&u.toString().length>0&&u.toString().length<=4&&v.toString().length>0&&v.toString().length<=2&&s.toString().length>0&&s.toString().length<=2
}},{key:"formatNumber",value:function m(v,t){var s=f(v.target),u=window.getSelection().toString(),w=s.val();
if(u!==""){return
}if(f.inArray(v.keyCode,[38,40,37,39])!==-1){return
}w=this.getCleanNumber(w,t);
s.val(function(){return w
})
}},{key:"getCleanNumber",value:function l(t,s){t=t.replace(/\D+/g,"").substr(0,s);
return t
}}]);
return r
}()
}),(function(b,f,a){a.r(f);
a.d(f,"CallBackFormValidation",function(){return h
});
function e(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function d(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var j={callbackFormWrapper:".callback-form-sht",validationErrorWrapper:".validationError-wrapper",errorDescription:".error-description"},g={errorsMap:"errors-map"},c={validationError:"validationError"};
var h=function(){function n(q,p){e(this,n);
this.$inputElements=p;
this.$callbackFormWrapper=q.parents(j.callbackFormWrapper);
this.$validationErrorWrapper=q.find(j.validationErrorWrapper);
this.$errorDescription=this.$validationErrorWrapper.find(j.errorDescription);
this.$errorsMap=this.$callbackFormWrapper.data(g.errorsMap)
}d(n,[{key:"setErrorMessage",value:function l(p){this.$errorDescription.text(this.$errorsMap[p])
}},{key:"showErrorMessage",value:function o(){this.$validationErrorWrapper.show();
this.$inputElements.addClass(c.validationError);
this.$inputElements.attr("aria-invalid",true);
this.$callbackFormWrapper.trigger("validateAll")
}},{key:"hideErrorMessage",value:function m(){this.$validationErrorWrapper.hide();
this.$inputElements.removeClass(c.validationError);
this.$inputElements.attr("aria-invalid",false);
this.$callbackFormWrapper.trigger("validateAll")
}}]);
return n
}()
}),(function(b,l,a){a.r(l);
a.d(l,"CallBackFormInputDropdown",function(){return k
});
var e=a(181);
var h=a(179);
var m=a(182);
function j(p,q){if(!(p instanceof q)){throw new TypeError("Cannot call a class as a function")
}}function o(s,q){for(var p=0;
p<q.length;
p++){var r=q[p];
r.enumerable=r.enumerable||false;
r.configurable=true;
if("value" in r){r.writable=true
}Object.defineProperty(s,r.key,r)
}}function f(r,p,q){if(p){o(r.prototype,p)
}if(q){o(r,q)
}return r
}var g=Bootstrap.jQuery,n={dropdownSelect:".sht-callbackform-select-field",dropdownSelectButton:".dropdown-select-button",dropdownSelectButtonText:".dropdown-select-button-text",dropdownSelectList:".dropdown-select-list",dropdownSelectOptions:".dropdown-select-option",dropdownSelectWrapper:".dropdown-select-wrapper",dropdownSelectHiddenInput:".dropdown-select-input"};
var d,c;
var k=function(){function s(A){j(this,s);
this.$elem=g(A);
this.findDropdownElements();
this.dropdownOpened=false;
if(this.checkIfCountryAndDestination()){this.$countryAndDestinationValidation=new m.CallBackFormDestinationAndCountryValidation(this.$elem)
}this.bindUIEvents();
this.ally=new e.CallBackFormInputDropdownAlly(this)
}f(s,[{key:"findDropdownElements",value:function t(){this.$dropdownSelectButton=this.$elem.find(n.dropdownSelectButton);
this.$dropdownSelectButtonText=this.$elem.find(n.dropdownSelectButtonText);
this.$dropdownSelectList=this.$elem.find(n.dropdownSelectList);
this.$dropdownSelectOptions=this.$dropdownSelectList.find(n.dropdownSelectOptions);
this.$dropdownSelectWrapper=this.$elem.find(n.dropdownSelectWrapper);
this.$dropdownSelectHiddenInput=this.$elem.find(n.dropdownSelectHiddenInput);
this.$validation=new h.CallBackFormValidation(this.$elem,g([this.$dropdownSelectButton.get(0),this.$dropdownSelectHiddenInput.get(0)]))
}},{key:"bindUIEvents",value:function p(){var E=this;
this.$dropdownSelectButton.on({click:function C(F){return E.toggleDropdown(F)
},keydown:function A(F){return e.CallBackFormInputDropdownAlly.openWithArrows(F,E.openDropdown.bind(E,F))
}});
this.$dropdownSelectList.on({keydown:function A(F){E.ally.updateMainDropdownValueByKeyDown(F,E.updateMainDropdownValue.bind(E,F));
E.ally.moveThroughItemsInList(F);
E.ally.checkForSelection(F);
E.ally.closeWithTab(F,E.closeDropdown.bind(E));
E.ally.closeWithEscapeOrShiftTab(F,E.closeDropdown.bind(E))
}});
this.$dropdownSelectOptions.on({click:function C(F){return E.updateMainDropdownValue(F)
}});
this.$dropdownSelectHiddenInput.on({change:function D(){return E.validateValue()
}});
g(document).on({"touchstart touchmove touchend click":function B(F){return E.closeOnOutsideClick(F)
}})
}},{key:"toggleDropdown",value:function y(A){this.$elem.hasClass("expanded")?this.closeDropdown():this.openDropdown(A)
}},{key:"openDropdown",value:function w(){this.dropdownOpened=true;
this.$elem.addClass("expanded");
this.$dropdownSelectList.attr({"aria-hidden":false,"aria-expanded":true});
this.$dropdownSelectButton.attr("aria-expanded",true);
this.ally.focusAfterOpening()
}},{key:"closeDropdown",value:function q(){this.dropdownOpened=false;
this.$elem.removeClass("expanded");
this.$dropdownSelectList.attr({"aria-hidden":true,"aria-expanded":false});
this.$dropdownSelectButton.attr("aria-expanded",false);
this.ally.cancelHighlightForNotChosenOption();
this.$dropdownSelectHiddenInput.trigger("change")
}},{key:"updateMainDropdownValue",value:function u(A){d=g(A.target).text().trim();
c=g(A.target).closest(".dropdown-select-option").attr("data-value");
this.$dropdownSelectButtonText.text(d);
this.updateHiddenInputValue(c);
this.ally.updateSelectedItemAria(A);
this.closeDropdown();
this.ally.closeListAndFocusButton()
}},{key:"updateHiddenInputValue",value:function z(B){var A=B.trim().toLocaleLowerCase();
this.$dropdownSelectHiddenInput.attr("value",A)
}},{key:"validateValue",value:function r(){var A=this.$dropdownSelectHiddenInput.val();
if(A!==""){if(this.checkIfCountryAndDestination()){this.$countryAndDestinationValidation.validate()
}else{this.$validation.hideErrorMessage()
}}else{this.$validation.setErrorMessage("incompleteFieldError");
this.$validation.showErrorMessage()
}}},{key:"checkIfCountryAndDestination",value:function x(){return this.$dropdownSelectHiddenInput.attr("name")==="destination"||this.$dropdownSelectHiddenInput.attr("name")==="country-residence"
}},{key:"closeOnOutsideClick",value:function v(A){if(this.dropdownOpened&&!g(A.target).closest(this.$dropdownSelectWrapper).length&&!g(A.target).is(this.$dropdownSelectButton)){this.closeDropdown()
}}}]);
return s
}()
}),(function(b,g,a){a.r(g);
a.d(g,"CallBackFormInputDropdownAlly",function(){return c
});
function f(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function d(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var j={itemHighlighted:".highlighted"},h=HSBC_utils.keyCodes,e=Bootstrap.jQuery;
var c=function(){function r(D){f(this,r);
this.$elem=D.$elem;
this.$itemSelected=null;
this.findDropdownElements(D)
}d(r,[{key:"findDropdownElements",value:function w(D){this.$dropdownSelectHiddenInput=D.$dropdownSelectHiddenInput;
this.$dropdownSelectButton=D.$dropdownSelectButton;
this.$dropdownSelectButtonText=D.$dropdownSelectButtonText;
this.$dropdownSelectList=D.$dropdownSelectList;
this.$dropdownSelectOptions=D.$dropdownSelectOptions;
this.$dropdownSelectWrapper=D.$dropdownSelectWrapper;
this.$firstOption=this.$dropdownSelectOptions.first();
this.$lastOption=this.$dropdownSelectOptions.last();
this.$itemHighlighted=this.$elem.find(j.itemHighlighted)||null
}},{key:"moveThroughItemsInList",value:function p(F){var G=F.keyCode,D=G===h.DOWN,E=G===h.UP;
if(D||E){F.preventDefault();
this.moveHighlight(F)
}}},{key:"focusAfterOpening",value:function t(){if(this.$elem.is(".expanded")){if(this.$dropdownSelectOptions.length===1){return
}if(this.$itemSelected){this.$itemSelected.get(0).focus()
}else{r.selectItem(this.$firstOption);
this.$firstOption.get(0).focus();
this.$itemHighlighted=this.$firstOption
}}}},{key:"updateMainDropdownValueByKeyDown",value:function C(F,H){var G=F.keyCode,E=G===h.ENTER,D=G===h.SPACE;
if(E||D){F.preventDefault();
if(typeof H==="function"){H()
}}}},{key:"closeWithEscapeOrShiftTab",value:function y(F,J){var I=F.keyCode,D=I===h.ESC,E=F.shiftKey,G=I===h.TAB,H=G&&E;
if(D||H){F.preventDefault();
this.closeListAndFocusButton(J)
}}},{key:"closeWithTab",value:function z(D,G){var F=D.keyCode,E=F===h.TAB;
if(E){D.preventDefault();
if(typeof G==="function"){G()
}HSBC_utils.focusOnTheNextTabbableElement(this.$dropdownSelectButton)
}}},{key:"cancelHighlightForNotChosenOption",value:function o(){var D=this;
this.$dropdownSelectOptions.each(function(E,F){if(!e(F).is(D.$itemSelected)){e(F).removeClass("highlighted")
}})
}},{key:"closeListAndFocusButton",value:function s(E){var D=this;
if(typeof E==="function"){E()
}if(HSBC_utils.isFirefox){setTimeout(function(){return D.$dropdownSelectButton.focus()
},150)
}else{this.$dropdownSelectButton.get(0).focus()
}}},{key:"selectFirstItem",value:function l(){this.$itemHighlighted=this.$firstOption;
r.selectItem(this.$itemHighlighted)
}},{key:"selectLastItem",value:function v(){this.$itemHighlighted=this.$lastOption;
r.selectItem(this.$itemHighlighted)
}},{key:"selectNextItem",value:function A(D){this.$itemHighlighted=D;
r.selectItem(D)
}},{key:"checkForSelection",value:function n(D){var F=D.which===36,E=D.which===35;
if(F){D.preventDefault();
r.deSelectItem(this.$itemHighlighted);
this.selectFirstItem()
}if(E){D.preventDefault();
r.deSelectItem(this.$itemHighlighted);
this.selectLastItem()
}}},{key:"moveHighlight",value:function m(G){var H=G.keyCode,D=H===h.DOWN,E=H===h.UP;
var F;
if(D){if(this.$itemHighlighted.length){r.deSelectItem(this.$itemHighlighted);
F=e(this.$itemHighlighted).next();
if(F.length){this.selectNextItem(F)
}else{this.selectFirstItem()
}}else{this.selectFirstItem()
}}else{if(E){if(this.$itemHighlighted.length){r.deSelectItem(this.$itemHighlighted);
F=e(this.$itemHighlighted).prev();
if(F.length){this.selectNextItem(F)
}else{this.selectLastItem()
}}else{this.selectLastItem()
}}}this.$dropdownSelectList.attr("aria-activedescendant",e(this.$itemHighlighted).attr("id"))
}},{key:"updateSelectedItemAria",value:function x(D){var E=e(D.target).closest(".dropdown-select-option"),F=this.$elem.find('[aria-selected="true"]');
F.removeAttr("aria-selected").removeClass("highlighted");
E.attr("aria-selected",true).addClass("highlighted");
this.$itemSelected=E;
this.$itemHighlighted=this.$itemSelected;
this.$dropdownSelectList.attr("aria-activedescendant",E.attr("id"))
}}],[{key:"openWithArrows",value:function u(F,H){var G=F.keyCode,D=G===h.DOWN,E=G===h.UP;
if(D||E){F.preventDefault();
if(typeof H==="function"){H()
}}}},{key:"selectItem",value:function q(D){e(D).addClass("highlighted").attr("aria-selected","true").focus();
this.$itemHighlighted=e(D)
}},{key:"deSelectItem",value:function B(D){e(D).removeClass("highlighted").removeAttr("aria-selected")
}}]);
return r
}()
}),(function(c,h,b){b.r(h);
b.d(h,"CallBackFormDestinationAndCountryValidation",function(){return d
});
var a=b(179);
function f(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function e(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var g=Bootstrap.jQuery,j={callbackFormWrapper:".callback-form-sht",selectFieldWrapper:".sht-callbackform-select-field",dropdownSelectButton:".dropdown-select-button",countryResidenceInput:'input[name="country-residence"]',destinationInput:'input[name="destination"]'};
var d=function(){function l(o){f(this,l);
this.$el=o;
this.findFormElements()
}e(l,[{key:"findFormElements",value:function n(){this.$callbackFormWrapper=this.$el.parents(j.callbackFormWrapper);
this.$countryResidenceInput=this.$callbackFormWrapper.find(j.countryResidenceInput);
this.$destinationInput=this.$callbackFormWrapper.find(j.destinationInput);
this.$destinationInputParent=this.$destinationInput.parents(j.selectFieldWrapper);
this.$countryResidenceInputParent=this.$countryResidenceInput.parents(j.selectFieldWrapper);
this.$validationDestination=new a.CallBackFormValidation(this.$destinationInputParent,g([this.$destinationInputParent.find(j.dropdownSelectButton).get(0),this.$destinationInput.get(0)]));
this.$validationcountryResidence=new a.CallBackFormValidation(this.$countryResidenceInputParent,g([this.$countryResidenceInputParent.find(j.dropdownSelectButton).get(0),this.$countryResidenceInput.get(0)]))
}},{key:"validate",value:function m(){var p=this.$countryResidenceInput.val().trim().toLocaleLowerCase(),o=this.$destinationInput.val().trim().toLocaleLowerCase();
if(p!==""){this.$validationcountryResidence.hideErrorMessage()
}if(o==="other"){this.$validationDestination.setErrorMessage("destinationError");
this.$validationDestination.showErrorMessage()
}else{if(o===p){this.$validationDestination.setErrorMessage("destinationAndCountryError");
this.$validationDestination.showErrorMessage()
}else{this.$validationDestination.hideErrorMessage()
}}}}]);
return l
}()
}),(function(b,g,a){a.r(g);
a.d(g,"CallBackFormInputEmail",function(){return h
});
var c=a(179);
function e(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function d(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var f=Bootstrap.jQuery,j={phoneNumberField:".sht-callbackform-text-field.email",inputElement:'input[type="email"]'};
var h=function(){function m(p){e(this,m);
this.$elem=f(p);
this.$inputElement=this.$elem.find(j.inputElement);
this.$validation=new c.CallBackFormValidation(this.$elem,this.$inputElement);
this.bindUIEvents()
}d(m,[{key:"bindUIEvents",value:function n(){var q=this;
this.$inputElement.on({blur:function p(){return q.validateInput()
}})
}},{key:"validateInput",value:function o(){var p=this.$inputElement.val();
if(p!==""){if(this.validateEmail(p)){this.$validation.hideErrorMessage()
}else{this.$validation.setErrorMessage("emailError");
this.$validation.showErrorMessage()
}}else{this.$validation.setErrorMessage("incompleteFieldError");
this.$validation.showErrorMessage()
}}},{key:"validateEmail",value:function l(p){var q=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return q.test(String(p).trim().toLowerCase())
}}]);
return m
}()
}),(function(b,g,a){a.r(g);
a.d(g,"CallBackFormInputPhoneNumber",function(){return h
});
var c=a(179);
function e(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function d(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var f=Bootstrap.jQuery,j={phoneNumberField:".sht-callbackform-text-field.phone-number",prefixInputElement:".phone-number-prefix",inputElement:".phone-number"};
var h=function(){function n(r){e(this,n);
this.$elem=f(r);
this.$prefixInputElement=this.$elem.find(j.prefixInputElement);
this.$inputElement=this.$elem.find(j.inputElement);
this.inputsArray=[this.$prefixInputElement.get(0),this.$inputElement.get(0)];
this.$validation=new c.CallBackFormValidation(this.$elem,f(this.inputsArray));
this.bindUIEvents()
}d(n,[{key:"bindUIEvents",value:function p(){var t=this;
this.$prefixInputElement.on({keyup:function s(u){return t.formatNumber(u,true)
},blur:function r(){return t.checkIfValidateNumber()
}});
this.$inputElement.on({keyup:function s(u){return t.formatNumber(u)
},blur:function r(){return t.checkIfValidateNumber()
}})
}},{key:"checkIfValidateNumber",value:function q(){var r=this;
setTimeout(function(){var s=document.activeElement;
if(!r.inputsArray.includes(s)){r.validateNumber()
}},0)
}},{key:"validateNumber",value:function m(){var s=this.$prefixInputElement.val(),r=this.$inputElement.val();
if(s!=="+"&&r!==""){this.$validation.hideErrorMessage()
}else{this.$validation.setErrorMessage("incompleteFieldError");
this.$validation.showErrorMessage()
}}},{key:"formatNumber",value:function o(t){var v=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;
var r=f(t.target),s=window.getSelection().toString(),u=r.val();
if(s!==""){return
}if(f.inArray(t.keyCode,[38,40,37,39])!==-1){return
}u=this.getCleanNumber(u);
r.val(function(){return v?"+".concat(u):u
})
}},{key:"getCleanNumber",value:function l(r){r=r.replace(/\D+/g,"");
return r
}}]);
return n
}()
}),(function(c,h,b){b.r(h);
b.d(h,"CallBackFormInputRadio",function(){return a
});
var d=b(179);
function f(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function e(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var g=Bootstrap.jQuery,j={radioField:".sht-callbackform-radio-field",inputFiled:"input",radioGroup:'[role="radiogroup"]',radioButtons:'[role="radio"]'};
var a=function(){function m(o){f(this,m);
this.$elem=g(o);
this.$inputField=this.$elem.find(j.inputFiled);
this.radioGroup=this.$elem.find(j.radioGroup).get(0);
this.$radioButtons=g(this.radioGroup).find(j.radioButtons);
this.radioGroupAlly=null;
this.radioGroupAlly=new RadioGroup(this.radioGroup);
this.radioGroupAlly.init();
this.$validation=new d.CallBackFormValidation(this.$elem,this.$inputField);
this.bindUIEvents()
}e(m,[{key:"bindUIEvents",value:function n(){var p=this;
this.$radioButtons.on({change:function o(q){return p.updateInputVal(q)
}})
}},{key:"updateInputVal",value:function l(o){var p=g(o.target).data("value");
this.$inputField.val(p.trim().toLocaleLowerCase());
this.$inputField.trigger("change");
if(p!==""){this.$validation.hideErrorMessage()
}else{this.$validation.setErrorMessage("incompleteFieldError");
this.$validation.showErrorMessage()
}}}]);
return m
}()
}),(function(b,j,a){a.r(j);
a.d(j,"CallBackFormInpuSimpleText",function(){return h
});
var c=a(179);
function f(n,o){if(!(n instanceof o)){throw new TypeError("Cannot call a class as a function")
}}function m(q,o){for(var n=0;
n<o.length;
n++){var p=o[n];
p.enumerable=p.enumerable||false;
p.configurable=true;
if("value" in p){p.writable=true
}Object.defineProperty(q,p.key,p)
}}function d(p,n,o){if(n){m(p.prototype,n)
}if(o){m(p,o)
}return p
}var g=Bootstrap.jQuery,l={simpleTextField:".sht-callbackform-text-field.simple-text",inputElement:"input",alphanumeric:"alphanumeric-input"},k=/[\!\@\#\$\%\^\&\*\(\)\_\+\=\[\]\{\}\;\'\\\:\"\|\,\.\/\<\>\?\~\`0-9]/g,e=/[\!\@\#\$\%\^\&\*\(\)\_\+\=\[\]\{\}\;\'\\\:\"\|\,\.\/\<\>\?\~\`]/g;
var h=function(){function p(r){f(this,p);
this.$elem=g(r);
this.$inputElement=this.$elem.find(l.inputElement);
this.$validation=new c.CallBackFormValidation(this.$elem,this.$inputElement);
this.regExp=this.$elem.hasClass(l.alphanumeric)?e:k;
this.bindUIEvents()
}d(p,[{key:"bindUIEvents",value:function o(){var u=this;
this.$inputElement.on({keyup:function s(){return u.formatTextInput()
},change:function t(){return u.formatTextInput()
},blur:function r(){return u.validateInput()
}})
}},{key:"validateInput",value:function q(){var r=this.$inputElement.val();
if(r!==""){this.$validation.hideErrorMessage()
}else{this.$validation.setErrorMessage("incompleteFieldError");
this.$validation.showErrorMessage()
}}},{key:"formatTextInput",value:function n(){this.$inputElement.val(this.$inputElement.val().replace(this.regExp,"").substr(0,60))
}}]);
return p
}()
}),(function(a,b,c){c.r(b);
var e=c(188);
HSBC_utils.registerComponent({name:"cookieBanner",selector:".cookie-banner.hidden",init:function d(f){return new e.CookieBanner(f)
}})
}),(function(b,g,a){a.r(g);
a.d(g,"CookieBanner",function(){return k
});
function e(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}function l(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}function d(o,m,n){if(m){l(o.prototype,m)
}if(n){l(o,n)
}return o
}var f=Bootstrap.jQuery,h={bannerClosed:"banner_enabled_status_close",bannerClosedLegacy:"opt_in_status"},j={cookieBanner:".cookie-banner.hidden",closeButton:".close-cookie-banner",cookieBannerText:".cookie-banner-text"},c={hidden:"hidden"};
var k=function(){function u(w){e(this,u);
this.$cookieBanner=f(w);
this.$closeButton=this.$cookieBanner.find(j.closeButton);
this.cookieValue=HSBC_utils.getCookie(h.bannerClosed);
this.hasHash=document.location.hash.length>0;
this.showCookieNotification();
this.bindUiEvents();
this.setLinkAttributes()
}d(u,[{key:"showCookieNotification",value:function r(){if(!this.cookieValue){this.$cookieBanner.removeClass(c.hidden)
}}},{key:"bindUiEvents",value:function t(){var w=this;
if(!this.cookieValue){f(window).on("scroll",function(){return w.bannerOnScroll()
});
this.$closeButton.on("click",function(){return w.accept()
})
}}},{key:"bindTriggeredEvents",value:function q(){f(window).trigger("headerMessageChange")
}},{key:"bannerOnScroll",value:function o(){if(!this.isCloseBlocked()){this.accept()
}}},{key:"isCloseBlocked",value:function m(){if(this.hasHash){this.hasHash=false;
return true
}return false
}},{key:"accept",value:function n(){this.setCookies();
this.closeBanner();
this.bindTriggeredEvents()
}},{key:"closeBanner",value:function p(){if(!this.$cookieBanner.hasClass(c.hidden)){this.$cookieBanner.addClass(c.hidden)
}}},{key:"setCookies",value:function s(){var w={path:"/",expires:{months:6}};
HSBC_utils.setCookie(h.bannerClosedLegacy,1,w);
HSBC_utils.setCookie(h.bannerClosed,Date.now(),w)
}},{key:"setLinkAttributes",value:function v(){var w=f(j.cookieBannerText).find("a");
if(w){w.attr("rel","nofollow")
}}}]);
return u
}()
}),(function(a,b,d){d.r(b);
var c=d(190);
HSBC_utils.registerComponent({name:"cookieBannerOptout",selector:".cookie-banner-optout.hidden",init:function e(f){return new c.CookieBannerOptout(f)
}})
}),(function(b,f,a){a.r(f);
a.d(f,"CookieBannerOptout",function(){return h
});
function d(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var e=Bootstrap.jQuery,g={bannerDismiss:"cookie_banner_dismiss",legacyBanner:"banner_enabled_status_close",trackingFlag:"opt_in_status"};
var h=function(){function k(n){var o=this;
d(this,k);
if(HSBC_utils.getCookie(g.bannerDismiss)){return
}this.$cookieBanner=e(n);
this.$cookieBanner.find("button.accept").on("click",function(){return o.accept()
});
this.$cookieBanner.removeClass("hidden");
this.checkLegacyCookieBanner()
}c(k,[{key:"checkLegacyCookieBanner",value:function m(){if(HSBC_utils.getCookie(g.legacyBanner)){HSBC_utils.deleteCookie(g.legacyBanner,"/");
HSBC_utils.deleteCookie(g.trackingFlag,"/")
}}},{key:"accept",value:function l(){var n={path:"/",expires:{months:6}};
HSBC_utils.setCookie(g.bannerDismiss,new Date().getTime(),n);
HSBC_utils.setCookie(g.trackingFlag,1,n);
this.$cookieBanner.addClass("hidden");
e(window).trigger("headerMessageChange")
}}]);
return k
}()
}),(function(d,e,g){g.r(e);
var a=g(192);
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function b(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function c(k,h,j){if(h){b(k.prototype,h)
}if(j){b(k,j)
}return k
}(function(n){var l={active:"active"},k={doormatMenu:".doormat-menu",headerMainMenu:".header-main-navigation",doormatMainColumn:".doormat-main-column",navigationItem:".header-main-navigation-item",hideOnMobileAndTablet:".hide-on-mobile-and-tablet",columnContent:".doormat-column-content",doormatHeading:".doormat-heading"},m=n("body");
var j=function(){function u(z){f(this,u);
this.$el=n(z);
this.$navigationItem=this.$el.closest(k.navigationItem);
this.$headerMainMenu=this.$el.parents(k.headerMainMenu);
this.$doormatHeading=this.$navigationItem.find(k.doormatHeading);
this.$allDoormatLinks=this.$headerMainMenu.find("a");
this.isEnterHandlerEnabled=false;
this.isInMenu=false;
this.equalizeColumnHeight();
this.bindUiEvents();
this.updateMaxHeight();
new a.DoormatAlly(this)
}c(u,[{key:"equalizeColumnHeight",value:function w(){var z=this.$el.find(k.doormatMainColumn),A=Math.max.apply(null,z.map(function(B,C){return n(C).find(k.columnContent).height()
}).get());
z.height(A)
}},{key:"updateMaxHeight",value:function y(){var z=n(window).height()-this.$el.offset().top;
this.$el.css("max-height",z)
}},{key:"removeActiveClass",value:function t(){this.$el.removeClass(l.active);
this.$navigationItem.removeClass(l.active)
}},{key:"removeActiveClassState",value:function q(z){z.attr("tabindex",-1);
this.toggleMenuStatusText(true);
this.removeActiveClass();
this.isEnterHandlerEnabled=false;
this.isInMenu=false
}},{key:"resize",value:function s(){this.equalizeColumnHeight();
this.updateMaxHeight()
}},{key:"bindUiEvents",value:function v(){var z=this;
if(HSBC_utils.isInternetExplorer){this.$doormatHeading.prepend('<span class="visuallyhidden">Heading level 2</span>')
}n(window).on("resize",function(){return z.resize()
});
this.$navigationItem.on("focus",function(){if(z.getFocusCondition()){z.toggleMenuStatusText();
z.$el.addClass(l.active);
z.$navigationItem.addClass(l.active)
}}).on("focusout",function(){if(z.getFocusCondition()){z.removeActiveClass();
z.toggleMenuStatusText()
}});
this.$el.on("mouseout",function(){return z.removeActiveClassState(z.$allDoormatLinks)
});
m.on("click",function(B){var A=n(B.target);
if(!u.isInDoormat(A)&&!A.hasClass(l.headerMainMenu)){z.removeActiveClassState(z.$allDoormatLinks)
}})
}},{key:"toggleMenuStatusText",value:function x(){var z=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;
if(z){this.$navigationItem.attr("aria-expanded",false)
}else{this.$navigationItem.attr("aria-expanded",true)
}}},{key:"getFocusCondition",value:function p(){return !(this.isInMenu||this.isEnterHandlerEnabled)
}}],[{key:"isInDoormat",value:function r(z){return !!z.parents(k.headerMainMenu).length
}}]);
return u
}();
var h={name:"doormat",selector:"".concat(k.hideOnMobileAndTablet," ").concat(k.doormatMenu),init:function o(p){return new j(p)
}};
HSBC_utils.registerComponent(h)
})(Bootstrap.jQuery)
}),(function(b,g,a){a.r(g);
a.d(g,"DoormatAlly",function(){return j
});
function f(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function c(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var d={active:"active",navigationItemClass:"header-main-navigation-item",headerDoormatMobileTitle:"header-doormat-mobile-title",headerMainNavigationTitle:"header-main-navigation-title",headerMainNavigationSubtitle:"header-main-navigation-subtitle"},h=HSBC_utils.keyCodes,e=Bootstrap.jQuery;
var j=function(){function l(o){f(this,l);
this.$el=o.$el;
this.$navigationItem=o.$navigationItem;
this.$navigationItemLinks=this.$navigationItem.find("a");
this.$firstDoormatLink=this.$navigationItemLinks.first();
this.$lastDoormatLink=this.$navigationItemLinks.last();
this.$doormatMenuLink=this.$el.find("a");
this.context=o;
o.$allDoormatLinks.attr("tabindex",-1);
this.bindUIEvents()
}c(l,[{key:"eventFunction",value:function n(q){var p=this.context,o=e(q.target);
if(!p.isEnterHandlerEnabled){p.isEnterHandlerEnabled=true;
p.isInMenu=true;
if(!o.hasClass(d.active)){this.$el.addClass(d.active);
this.$navigationItem.addClass(d.active)
}p.toggleMenuStatusText();
this.$el.attr("aria-hidden",false);
this.$doormatMenuLink.attr("tabindex",0);
this.$doormatMenuLink.first().focus();
q.preventDefault()
}else{p.removeActiveClassState(this.$doormatMenuLink)
}}},{key:"bindUIEvents",value:function m(){var p=this;
var o=this.context;
this.$navigationItem.on("keydown",function(t){var q=e(t.target),s=t.keyCode,r=q.prop("tagName");
if(s===h.ENTER||s===h.SPACE){p.eventFunction(t)
}else{if(s===h.TAB&&r==="LI"){o.removeActiveClass();
o.toggleMenuStatusText();
o.isEnterHandlerEnabled=false
}}}).on("click",function(r){var q=e(r.target);
if(q.hasClass(d.navigationItemClass)||q.hasClass(d.headerDoormatMobileTitle)||q.hasClass(d.headerMainNavigationTitle)||q.hasClass(d.headerMainNavigationSubtitle)){p.eventFunction(r)
}else{o.removeActiveClassState(o.$allDoormatLinks)
}}).on("focus",function(){if(o.getFocusCondition()){p.$doormatMenuLink.attr("tabindex",-1);
o.toggleMenuStatusText()
}}).on("focusout",function(){if(o.getFocusCondition()){p.$doormatMenuLink.attr("tabindex",-1)
}}).on("mouseout",function(){o.removeActiveClassState(o.$allDoormatLinks)
});
this.$doormatMenuLink.on("keydown",function(r){var q=r.keyCode;
if(q===h.ESC){o.isInMenu=false;
p.$doormatMenuLink.attr("tabindex",-1);
p.$navigationItem.focus();
r.preventDefault()
}});
this.$firstDoormatLink.on("keydown",function(s){var q=s.keyCode,r=s.shiftKey;
if(r&&q===h.TAB){o.isInMenu=false;
p.$doormatMenuLink.attr("tabindex",-1);
p.$el.attr("aria-hidden",true);
p.$navigationItem.focus();
s.preventDefault()
}});
this.$lastDoormatLink.on("keydown",function(s){var q=s.keyCode,r=s.shiftKey;
if(!r&&q===h.TAB){o.removeActiveClassState(p.$doormatMenuLink)
}})
}}]);
return l
}()
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(j){var g={placeholderLeft:".placeholder-left",placeholderRight:".lg-4",cta:".O-PRIMCTA-RW-RBWM"};
var h=function(){function m(o){e(this,m);
this.$el=j(o);
k(this.$el);
this.bindUiEvents()
}c(m,[{key:"bindUiEvents",value:function n(){var o=this;
j(window).on("resize",function(){k(o.$el)
})
}}]);
return m
}();
function k(m){var p=m.find(g.placeholderLeft),o=m.find(g.placeholderRight),n=o.find(g.cta),q=n.outerHeight(true)-n.outerHeight(false);
p.height("auto");
if(HSBC_utils.matchMedia.tablet||HSBC_utils.matchMedia.desktop){if(o.outerHeight()-q>=p.outerHeight()){p.height(o.outerHeight()-q)
}}}var f={name:"equalize",selector:".equalize",init:function l(m){return new h(m)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(j){var g={footer:"footer",footerMobileSubmenuWrapper:"sidebar-submenu-wrapper",mobileSidebar:"header-mobile-sidebar",headerDoormatMobile:"header-mobile-doormat",headerMobileFooterItem:"header-mobile-footer-item",headerMobileFooterItemWrapper:"header-mobile-footer-item-wrapper",footerLarge:"footer-large",footerSupplementary:"footer-supplementary",headerMobileFooterMenu:"header-mobile-footer-menu",footerTrigger:"sidebar-submenu-trigger",headerMobileTitle:"header-doormat-mobile-title",opinionLabTrigger:"opinion-lab-trigger"};
var h=function(){function o(r){e(this,o);
this.$el=j(r);
this.bindUIElements();
this.createFooterMobileElements();
this.buildFooterMobile();
this.bindUIEvents()
}c(o,[{key:"bindUIElements",value:function l(){this.$mobileSidebar=j("."+g.mobileSidebar);
this.$headerDoormatMobile=this.$mobileSidebar.find("."+g.headerDoormatMobile);
this.$headerMobileFooterItem=this.$el.find("."+g.headerMobileFooterItem);
this.$headerMobileFooterItemWrapper=this.$el.find("."+g.headerMobileFooterItemWrapper);
this.$footerLarge=this.$el.find("."+g.footerLarge).clone();
this.$footerSupplementary=this.$el.find("."+g.footerSupplementary).clone()
}},{key:"bindUIEvents",value:function m(){var r=this;
j(document).on("click","."+g.opinionLabTrigger,function(s){s.preventDefault();
r.opinionLabShow(s)
})
}},{key:"createFooterMobileElements",value:function q(){this.$footerMobileMenu=j("<div>",{"class":"".concat(g.headerMobileFooterMenu," ").concat(g.footerMobileSubmenuWrapper),"data-source":"mobile-footer"})
}},{key:"buildFooterMobile",value:function p(){this.$headerMobileFooterItem.find(".".concat(g.headerMobileTitle)).data("target","mobile-footer").addClass(g.footerTrigger);
this.$headerDoormatMobile.append(this.$headerMobileFooterItem);
this.$headerMobileFooterItemWrapper.remove();
this.$footerMobileMenu.insertAfter(this.$headerDoormatMobile);
this.$footerMobileMenu.append(this.$footerLarge).append(this.$footerSupplementary)
}},{key:"opinionLabShow",value:function n(s){var r=window.oo_feedback||(window.OOo?window.OOo.oo_feedback:null);
if(r){r.show(s)
}}}]);
return o
}();
var f={name:"footer",selector:"."+g.footer,init:function k(l){return new h(l)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(b,a){(function(){if(window.cpiUtils==undefined){if(window.console){console.log("cpiUtils is not defined")
}return
}var d=document.querySelectorAll(".cpi-masthead-logoff__button-dpws");
function e(){cpiUtils.logoffUser()
}if(d&&d.length){for(var c=0;
c<d.length;
c++){cpiUtils.eventHandler.addEvent(d[c],"click",function(f){cpiUtils.navigateAway(f,e)
})
}}})()
}),(function(b,e,a){a.r(e);
var g=a(197);
var h=a(199);
var f=a(5);
function d(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}(function(q){var p={active:"is-active",hidden:"hidden",headerSearchBlack:"header-search-black"},o={desktopClearCircle:".header-clear-container",searchBox:".search-box",searchButton:".header-search-button",pageOverlay:".page-overlay",headerSearch:".header-search"},l=q(o.pageOverlay),m=HSBC_utils.keyCodes;
var k=function(){function y(D){d(this,y);
this.$el=q(D);
this.$desktopClearCircle=this.$el.find(o.desktopClearCircle);
this.$searchBox=this.$el.find(o.searchBox);
this.$searchButton=this.$el.find(o.searchButton);
this.notInteracted=true;
if(!y.isVirtualAssistant()){this.suggestions=new g.SearchMobileSuggestions(this.$el)
}this.bindUIEvents();
this.manageClearCircleVisibility();
this.manageTypeOfSearchButton();
new h.DesktopSearchAlly(this)
}c(y,[{key:"bindUIEvents",value:function t(){var D=this;
this.$searchButton.on("click",function(){return D.toggleSearchBox()
});
this.$desktopClearCircle.on("click",function(){D.clearSearchBox();
D.manageClearCircleVisibility()
});
this.$el.on("focusout",function(E){var F=q(E.relatedTarget).closest(o.headerSearch).length;
if(!F){l.addClass(p.hidden);
if(HSBC_utils.isInternetExplorer){D.$searchBox.removeAttr("required");
D.$searchBox.attr("value","Search")
}}}).on("focusin",function(F){D.trackFirstInteraction();
var E=q(F.target).is(D.$searchButton),G=D.$searchBox.val()==="";
if(!(E&&G)){l.removeClass(p.hidden);
if(HSBC_utils.isInternetExplorer){D.$searchBox.removeAttr("value");
D.$searchBox.attr("required","")
}}else{l.addClass(p.hidden)
}});
if(y.isVirtualAssistant()){q(document).on("keyup",function(E){if(E.keyCode===m.ESC){D.fixVirtualAssistantSearchExit()
}}).on("mouseup",function(){return D.fixVirtualAssistantSearchExit()
})
}}},{key:"clearSearchBox",value:function w(){this.$searchBox.val("").focus();
this.manageTypeOfSearchButton()
}},{key:"isExpanded",value:function s(){return this.$searchBox.hasClass(p.active)
}},{key:"isSearchBoxEmpty",value:function u(){return !this.$searchBox.val().length
}},{key:"toggleSearchBox",value:function z(){if(this.isExpanded()&&this.isSearchBoxEmpty()){this.$searchBox.removeClass(p.active);
this.$el.addClass(p.headerSearchBlack);
if(HSBC_utils.isInternetExplorer){this.$searchBox.blur()
}}else{this.$searchBox.addClass(p.active);
this.$el.removeClass(p.headerSearchBlack);
this.$searchBox.focus();
if(HSBC_utils.isInternetExplorer){this.$searchBox.removeAttr("placeholder")
}}}},{key:"manageClearCircleVisibility",value:function A(){var D=this.isSearchBoxEmpty()?"none":"inline-block";
this.$desktopClearCircle.css("display",D)
}},{key:"manageTypeOfSearchButton",value:function v(){var D=this.isSearchBoxEmpty()?"button":"submit";
this.$searchButton.attr("type",D)
}},{key:"trackFirstInteraction",value:function B(){if(this.notInteracted){this.notInteracted=false;
f.TealiumUtils.trackEventWithInheritance({event_category:"tool",event_subcategory:"search",event_action:"start",event_content:"masthead",tool_name:"internal search",tool_type:"search",tool_event:"interaction"})
}}},{key:"fixVirtualAssistantSearchExit",value:function C(){var D=this;
setTimeout(function(){if(D.$searchBox.val()==="Search"){D.$searchBox.val("").change();
D.manageClearCircleVisibility()
}},1)
}}],[{key:"isVirtualAssistant",value:function x(){return !!q("#virtual-assistant-search").length
}}]);
return y
}();
var n={name:"Desktop Search",selector:o.headerSearch,init:function r(s){return new k(s)
}};
HSBC_utils.registerComponent(n)
})(Bootstrap.jQuery)
}),(function(c,k,b){b.r(k);
b.d(k,"SearchMobileSuggestions",function(){return f
});
var a=b(151);
var p=b(198);
function h(q,r){if(!(q instanceof r)){throw new TypeError("Cannot call a class as a function")
}}function o(t,r){for(var q=0;
q<r.length;
q++){var s=r[q];
s.enumerable=s.enumerable||false;
s.configurable=true;
if("value" in s){s.writable=true
}Object.defineProperty(t,s.key,s)
}}function e(s,q,r){if(q){o(s.prototype,q)
}if(r){o(s,r)
}return s
}var n={searchContainer:".header-mobile-search-container",suggestions:".search-suggestions",suggestionList:".suggestion-list",searchBox:".search-box",suggestionItem:".suggestion-item",helper:".search-suggestions-helper",suggestionsTotal:".suggestions-total"},j={globalSettings:"global-settings",config:"config"},d={hidden:"hidden",suggestionItem:"suggestion-item"},m="search-suggestion-template",l=HSBC_utils.keyCodes,g=Bootstrap.jQuery;
var f=function(){function y(D){h(this,y);
this.$el=D;
this.$suggestions=this.$el.find(n.suggestions);
this.$suggestionList=this.$suggestions.find(n.suggestionList);
this.$searchBox=this.$el.find(n.searchBox);
this.$helper=this.$el.find(n.helper);
this.searchService=new a.SearchService(this.getConfig());
this.setUpGlobalSettings();
this.$suggestionsTotal=this.$el.find(n.suggestionsTotal);
this.results=[];
this.setMustacheTemplates();
this.bindUIEvents();
this.ally=new p.SearchMobileSuggestionsAlly(this)
}e(y,[{key:"bindUIEvents",value:function q(){var D=this;
this.$searchBox.on("input",function(){return D.resolveSuggestions()
});
g(window).on("click",function(F){var E=g(F.target);
if(!E.parents(n.searchContainer).length){D.removeSuggestions()
}})
}},{key:"setUpGlobalSettings",value:function C(){this.globalSettings=g(document.body).data(j.globalSettings)
}},{key:"fetchTotalSuggestionsAllyText",value:function z(){return this.globalSettings&&this.globalSettings.totalSuggestions?this.globalSettings.totalSuggestions:""
}},{key:"resolveSuggestions",value:function x(){var D=this;
this.searchService.getSuggestions({query:this.$searchBox.val()}).done(function(E){D.results=E||[];
if(D.results.length){D.showSuggestions()
}else{D.$helper.empty().html(0);
D.hideSuggestions()
}})
}},{key:"showSuggestions",value:function A(){this.$suggestions.removeClass(d.hidden).attr("aria-hidden",false);
this.$helper.empty().html(this.results.length);
this.$helper.parent().attr("aria-hidden",false);
this.render()
}},{key:"render",value:function r(){var D=this;
this.$suggestionList.empty();
this.results.forEach(function(E){return D.$suggestionList.mustache(m,{text:E})
});
this.$suggestionsTotal.html("".concat(this.results.length," ").concat(this.fetchTotalSuggestionsAllyText()));
this.$suggestionItems=this.$suggestionList.find(n.suggestionItem);
this.bindSuggestionsUIEvents()
}},{key:"bindSuggestionsUIEvents",value:function w(){var D=this;
this.$suggestionItems.on("click",function(E){return D.handleSuggestionChoice(g(E.target))
}).on("keydown",function(F){var E=F.keyCode;
if(E===l.ENTER||E===l.SPACE){D.handleSuggestionChoice(g(F.target))
}}).on("focusout",function(F){var E=g(F.relatedTarget);
if(!E.hasClass(d.suggestionItem)){D.hideSuggestions()
}});
this.ally.bindSuggestionsUIEvents()
}},{key:"handleSuggestionChoice",value:function t(D){var E=D.text();
this.hideSuggestions();
this.$searchBox.val(E)
}},{key:"hideSuggestions",value:function v(){this.removeSuggestions();
this.$searchBox.focus()
}},{key:"removeSuggestions",value:function s(){this.$suggestions.addClass(d.hidden).attr("aria-hidden",true);
this.$helper.parent().attr("aria-hidden",true)
}},{key:"getConfig",value:function B(){return this.$el.data(j.config)
}},{key:"setMustacheTemplates",value:function u(){g.Mustache.add(m,this.$el.find(".".concat(m)).html())
}}]);
return y
}()
}),(function(b,g,a){a.r(g);
a.d(g,"SearchMobileSuggestionsAlly",function(){return j
});
function c(n,l,m){if(l in n){Object.defineProperty(n,l,{value:m,enumerable:true,configurable:true,writable:true})
}else{n[l]=m
}return n
}function e(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function d(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var f=Bootstrap.jQuery,h=HSBC_utils.keyCodes;
var j=function(){function p(q){e(this,p);
this.$el=q.$el;
this.$suggestionItems=q.$suggestionItems;
this.context=q;
this.bindUIEvents()
}d(p,[{key:"bindUIEvents",value:function n(){var q=this;
this.context.$searchBox.on("keyup",function(s){if(q.context.results.length){var r;
var t=(r={},c(r,h.DOWN,function(){return q.$suggestionItems.first().focus()
}),c(r,h.ESC,function(){return q.context.hideSuggestions()
}),r);
q.handleKeyPress(s,t)
}})
}},{key:"bindSuggestionsUIEvents",value:function m(){var q=this;
this.context.$suggestionItems.on("keydown",function(r){var s;
var t=(s={},c(s,h.ENTER,q.context.handleSuggestionChoice),c(s,h.ESC,q.context.hideSuggestions),c(s,h.DOWN,function(u){return u.next().focus()
}),c(s,h.UP,function(u){return u.prev().focus()
}),s);
q.handleKeyPress(r,t)
});
this.context.$suggestionItems.first().on("keydown",function(r){return q.handleArrowKeys(r,true)
});
this.context.$suggestionItems.last().on("keydown",function(r){return q.handleArrowKeys(r,false)
})
}},{key:"handleArrowKeys",value:function l(r,q){var s=r.keyCode===(q?h.UP:h.DOWN);
if(s){this.hideSuggestions()
}}},{key:"handleKeyPress",value:function o(s,t){var r=s.keyCode,q=f(s.target);
if(t.hasOwnProperty(r)){s.preventDefault();
t[r].call(this,q)
}}}]);
return p
}()
}),(function(e,f,h){h.r(f);
h.d(f,"DesktopSearchAlly",function(){return c
});
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function d(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}var a={openSearchBox:"data-aria-label-open-searchbox",closeSearchBox:"data-aria-label-close-searchbox",displaySearchResults:"data-aria-label-display-search-results"};
var c=function(){function m(p){g(this,m);
this.$el=p.$el;
this.$searchButton=p.$searchButton;
this.$searchBox=p.$searchBox;
this.context=p;
this.setSearchButtonAriaLabelTexts();
this.bindUIEvents()
}d(m,[{key:"setSearchButtonAriaLabelTexts",value:function l(){this.searchButtonAriaLabels={open:this.$searchButton.attr(a.openSearchBox),close:this.$searchButton.attr(a.closeSearchBox),displayResults:this.$searchButton.attr(a.displaySearchResults)}
}},{key:"bindUIEvents",value:function n(){var q=this;
var p=this.context;
this.$searchBox.on("keyup",function(){p.manageClearCircleVisibility();
p.manageTypeOfSearchButton();
q.setSearchButtonTabindex()
}).on("change",function(){return q.submitText()
});
this.$searchButton.on("click",function(){return q.toggleSearchButtonText()
});
p.$desktopClearCircle.on("click",function(){q.$searchButton.attr("aria-label",q.searchButtonAriaLabels.close);
q.setSearchButtonTabindex()
})
}},{key:"toggleSearchButtonText",value:function k(){var p=this.context.isExpanded()?this.searchButtonAriaLabels.close:this.searchButtonAriaLabels.open;
this.$searchButton.attr("aria-label",p);
this.setSearchButtonTabindex()
}},{key:"submitText",value:function o(){this.$searchButton.attr("aria-label",this.searchButtonAriaLabels.displayResults)
}},{key:"setSearchButtonTabindex",value:function j(){if(this.context.isExpanded()&&this.context.isSearchBoxEmpty()){this.$searchButton.attr("tabindex",-1);
this.$searchButton.attr("aria-hidden","true")
}else{this.$searchButton.attr("tabindex",0);
this.$searchButton.attr("aria-hidden","false")
}}}]);
return m
}()
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(j){var h={skipToContentLink:".skip-to-content-link",topOfContent:".top-of-content",configPage:".configPage",headerMain:".header-main",headerNav:".header-main-navigation",logoWrapper:".header-logo"},g={active:"active",patternLab:"header-patternlab",noPatternLab:"header-no-patternlab"};
var l=function(){function r(t,u){e(this,r);
this.APP=u;
this.$header=j(t);
this.$headerNav=this.$header.find(h.headerNav);
this.$logoWrapper=this.$header.find(h.logoWrapper);
this.cacheDomElements();
this.bindUiEvents();
this.detectPatternLab();
this.zoomDetectionTimeout();
this.toggleLogo()
}c(r,[{key:"detectPatternLab",value:function n(){if(HSBC_utils.isPatternLab()){this.$header.addClass(g.patternLab)
}else{this.$header.addClass(g.noPatternLab)
}}},{key:"cacheDomElements",value:function m(){this.$skipToContentLink=this.$header.find(h.skipToContentLink);
this.$topOfContent=j(document).find(h.topOfContent)
}},{key:"setContentPadding",value:function s(){if(this.APP.globalComponents.configuration.checkViewTypeIsForClient()){this.APP.globalComponents.headerController.setPaddingToMainContent()
}}},{key:"bindUiEvents",value:function q(){var t=this;
this.$skipToContentLink.on("click",function(u){t.$topOfContent.addClass(g.active).focus();
u.preventDefault()
});
j(window).on("resize headerMessageChange",function(){t.setContentPadding()
})
}},{key:"zoomDetectionTimeout",value:function p(){var u=this;
var t=j(h.headerMain);
t.resize(function(){u.setContentPadding()
})
}},{key:"toggleLogo",value:function o(){var t=this;
j(window).on("load",function(){t.$logoWrapper.toggle().toggle()
})
}}]);
return r
}();
var f={name:"header",selector:".header",init:function k(m,n){return new l(m,n)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(l){var j={HTML_SEP:"-",ISO_SEP:"_",HSBC_CLIENT_COOKIE:"HSBC_CLIENT_COOKIE",PREFERRED_LOCALE_PREFIX:"PreferredLocale="},h={localeManagement:".locale-management",selectedTriggerLink:".is-selected a[lang]",triggerLink:"a[lang]"};
var k={path:"/",expires:{days:365}};
var g=function(){function p(u){e(this,p);
this.$el=l(u);
this.$selectedTriggerLink=this.$el.find(h.selectedTriggerLink);
this.fetchGlobalSettings();
this.observeTriggers();
this.initLocale()
}c(p,[{key:"initLocale",value:function o(){this.updateLocale(this.$selectedTriggerLink.attr("lang"))
}},{key:"fetchGlobalSettings",value:function r(){var u=l("body").data("global-settings");
if(u&&u.cookieDomain){k.domain=u.cookieDomain
}}},{key:"observeTriggers",value:function q(){var u=this;
this.$el.find(h.triggerLink).on("click",function(v){u.updateLocale(v.target.lang)
})
}},{key:"updateLocale",value:function t(w){var v=this.getLocale(),u=f(w)||"";
if(u.length&&v!=u){this.setLocale(u)
}}},{key:"setLocale",value:function n(v){var x=HSBC_utils.getCookie(j.HSBC_CLIENT_COOKIE),u;
var w=new RegExp("^(.*,)?"+j.PREFERRED_LOCALE_PREFIX+"[^,]*(,.*)?$");
v=v||"";
u=j.PREFERRED_LOCALE_PREFIX+v;
if(!x){x=u
}else{if(x.indexOf(j.PREFERRED_LOCALE_PREFIX)!==-1){x=x.replace(w,"$1"+u+"$2")
}else{x=x+","+u
}}HSBC_utils.deleteCookie(j.HSBC_CLIENT_COOKIE,k.path);
HSBC_utils.setCookie(j.HSBC_CLIENT_COOKIE,x,k)
}},{key:"getLocale",value:function s(){var v=HSBC_utils.getCookie(j.HSBC_CLIENT_COOKIE),u=new RegExp("^(.*,)?"+j.PREFERRED_LOCALE_PREFIX+"([^,]*)(,.*)?$");
if(v&&v.indexOf(j.PREFERRED_LOCALE_PREFIX)!==-1){return v.replace(u,"$2")
}return null
}}]);
return p
}();
function f(o){var n=o;
if(o&&o.indexOf(j.HTML_SEP)!==-1){n=o.split(j.HTML_SEP)[0];
n+=j.ISO_SEP;
n+=o.split(j.HTML_SEP)[1].toUpperCase()
}return n
}HSBC_utils.registerComponent({name:"localemanagement",selector:h.localeManagement,init:function m(n){return new g(n)
}})
})(Bootstrap.jQuery)
}),(function(e,f,h){h.r(f);
var a=h(203);
var d=h(204);
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function c(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}(function(n){var l={expanded:"is-expanded",hidden:"hidden",onlyOneLink:"only-one-link"},k={selectedItem:".selected-item",itemList:".item-list",items:".item",loginButtonExpanded:".login-button-expanded",loginButtonCollapsed:".login-button-collapsed"},m={up:"icon-chevron-up-small",down:"icon-chevron-down-small"};
var p=function(){function u(v){g(this,u);
this.$el=n(v);
this.isExpanded=false;
this.$arrowIcon=this.$el.find(".icon").first();
this.$menuItems=this.$el.find("".concat(k.items," a"));
this.$selectedItem=this.$el.find(k.selectedItem);
this.$loginButtonExpanded=this.$selectedItem.find(k.loginButtonExpanded);
this.$loginButtonCollapsed=this.$selectedItem.find(k.loginButtonCollapsed);
if(!this.$selectedItem.hasClass(l.onlyOneLink)){this.$selectedItem.attr("aria-expanded","false");
this.bindUIEvents()
}new a.HeaderDropdownAlly(this);
new d.HeaderLoggedUserState(this)
}c(u,[{key:"bindUIEvents",value:function q(){var v=this;
this.$selectedItem.on("click",function(){v.toggleDropdown()
});
this.$menuItems.on("click",function(){return v.collapse()
});
n(document).on("click",function(w){var x=w.target;
if(!v.$el.is(x)&&!v.$el.has(x).length){v.collapse()
}})
}},{key:"toggleDropdown",value:function s(){if(this.isExpanded){this.collapse()
}else{this.expand()
}}},{key:"expand",value:function r(){this.$el.addClass(l.expanded);
this.$selectedItem.attr("aria-expanded","true");
this.$arrowIcon.addClass(m.up).removeClass(m.down);
this.$loginButtonExpanded.removeClass(l.hidden);
this.$loginButtonCollapsed.addClass(l.hidden);
this.isExpanded=true
}},{key:"collapse",value:function t(){this.$el.removeClass(l.expanded);
this.$selectedItem.attr("aria-expanded","false");
this.$arrowIcon.addClass(m.down).removeClass(m.up);
this.$loginButtonExpanded.addClass(l.hidden);
this.$loginButtonCollapsed.removeClass(l.hidden);
this.isExpanded=false
}}]);
return u
}();
var j={name:"header-dropdown",selector:".header-dropdown",init:function o(q){return new p(q)
}};
HSBC_utils.registerComponent(j)
})(Bootstrap.jQuery)
}),(function(b,f,a){a.r(f);
a.d(f,"HeaderDropdownAlly",function(){return j
});
function e(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function c(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var h={itemList:".item-list",items:".item",onlyOneLink:"only-one-link"},g=HSBC_utils.keyCodes,d=Bootstrap.jQuery;
var j=function(){function o(p){e(this,o);
this.context=p;
this.$el=p.$el;
this.$menuItems=this.$el.find("".concat(h.items," a"));
this.bindUIEvents()
}c(o,[{key:"bindUIEvents",value:function m(){var q=this;
var p=this.context;
this.$menuItems.on("keydown",function(r){return q.handleItemsKeyEvent(r)
});
p.$selectedItem.on("click",function(){if(p.isExpanded){if(HSBC_utils.isInternetExplorer){setTimeout(function(){q.$menuItems.first().focus()
},700)
}else{q.$menuItems.first().focus()
}}}).on("keydown",function(u){var t=u.keyCode,s=t===g.SPACE,r=t===g.ENTER;
if(s||r){p.$selectedItem.trigger("click");
if(q.isLogonWithOnlyOneLink(u)){return
}u.preventDefault()
}})
}},{key:"isLogonWithOnlyOneLink",value:function n(p){return p.target.classList.contains(h.onlyOneLink)
}},{key:"handleItemsKeyEvent",value:function l(q){var r=this.context,z=q.keyCode,u=q.shiftKey,x=z===g.ENTER,t=z===g.DOWN,y=z===g.UP,p=z===g.TAB,w=p&&u,s=d(q.target),v=s.parent();
if(t){v.next().find("a").focus()
}else{if(y||w){if(this.$menuItems.first().is(s)){r.toggleDropdown();
r.$selectedItem.focus()
}else{v.prev().find("a").focus()
}}}if(p&&!u){if(this.$menuItems.last().is(s)){r.toggleDropdown()
}}else{if(!x){q.preventDefault()
}}}}]);
return o
}()
}),(function(b,k,a){a.r(k);
a.d(k,"HeaderLoggedUserState",function(){return o
});
function c(t){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){s=function s(u){return typeof u
}
}else{s=function s(u){return u&&typeof Symbol==="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u
}
}return s(t)
}function j(s,t){if(!(s instanceof t)){throw new TypeError("Cannot call a class as a function")
}}function p(v,t){for(var s=0;
s<t.length;
s++){var u=t[s];
u.enumerable=u.enumerable||false;
u.configurable=true;
if("value" in u){u.writable=true
}Object.defineProperty(v,u.key,u)
}}function e(u,s,t){if(s){p(u.prototype,s)
}if(t){p(u,t)
}return u
}var f={hidden:"hidden"},n={accountsButton:"my-accounts-button",loginButton:".login-button",registerButton:".register-button",logoutButton:".logout-button",pagePath:"[data-page-path]",loginLinks:".login-links"},l="ICIPDOMAINCOOKIE",r="dpws_logout_command",m="dpws_authorized_true",d="dpws_authorized_false",h=Bootstrap.jQuery,g=h(document.body);
var q={checked:false,during:false,authorized:false,delayed:[]};
var o=function(){function A(C){j(this,A);
this.context=C;
this.$el=C.$el;
this.$logoutButton=this.$el.find(n.logoutButton);
this.$loginButton=this.$el.find(n.loginButton);
this.$loginLinks=this.$el.find(n.loginLinks);
this.$mobileAccountsButton=this.$el.find("."+n.accountsButton);
this.$registerButton=g.find(n.registerButton);
if(this.$el.hasClass(n.accountsButton)){this.$accountsButton=this.$el
}else{this.$accountsButton=h("<div></div>")
}this.adjustHeaderElements(this.$loginButton,this.$logoutButton);
this.adjustHeaderElements(this.$registerButton,this.$accountsButton);
this.adjustHeaderElements(h(),this.$mobileAccountsButton);
this.bindUiEvents()
}e(A,[{key:"bindUiEvents",value:function x(){var C=this;
if(c(this.$logoutButton.attr("href"))===(true?"undefined":undefined)||this.$logoutButton.attr("href")===false){this.$logoutButton.on("click",function(){return C.redirectOnLogout()
})
}h(document).on(r,function(){return C.logout()
})
}},{key:"adjustHeaderElements",value:function z(D,E){var F=this;
var C=HSBC_utils.getCookie(l);
if(q.checked){this.changeLoggedState(q.authorized,D,E);
this.isLoggedInEvent(q.authorized)
}else{if(q.during){q.delayed.push(function(G){return F.changeLoggedState(G,D,E)
})
}else{q.during=true;
h.ajax("/authorize.auth.json?q",{cache:false,contentType:"json"}).done(function(H){var G=H&&H.authorized;
F.changeLoggedState(H&&H.authorized,D,E);
F.isLoggedInEvent(G);
q.during=false;
q.checked=true;
q.authorized=G;
q.delayed.forEach(function(I){return I(G)
});
q.delayed=[]
})
}}}},{key:"changeLoggedState",value:function u(E,C,D){if(E){C.addClass(f.hidden);
D.removeClass(f.hidden);
this.$loginLinks.remove()
}else{C.removeClass(f.hidden);
D.addClass(f.hidden)
}}},{key:"getPagePath",value:function t(){var C=h(document).find(n.pagePath);
return C?C.data("page-path"):""
}},{key:"redirectOnLogout",value:function w(){h("<form>",{method:"post",action:"/bin/logout."+this.getPagePath()}).appendTo("body").submit()
}},{key:"isLoggedInEvent",value:function y(C){h(document).trigger(C?m:d)
}},{key:"logout",value:function B(){this.redirectTo(this.fetchLogoutUrl())
}},{key:"redirectTo",value:function s(C){C=C||"";
document.location.href=C
}},{key:"fetchLogoutUrl",value:function v(){return this.$logoutButton.attr("href")||"/bin/logout"
}}]);
return A
}()
}),(function(e,f,h){h.r(f);
var a=h(206);
var d=h(204);
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function c(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}(function(n){if(HSBC_utils.isIE8orLower()){return
}var k={sidebar:"header-mobile-sidebar",sidebarTrigger:"header-sidebar-trigger",sidebarOpen:"sidebar-open",sidebarOverlay:"header-mobile-overlay",logoMobile:"header-mobile-logo",expanded:"expanded",active:"active",expandedAndActive:"expanded active",safariFixPadding:"safari-fix-padding",submenuTrigger:"sidebar-submenu-trigger",submenu:"sidebar-submenu-wrapper",doormatTrigger:"header-main-navigation-item",doormatSidebarTitle:"header-doormat-mobile-title",sidebarLinks:"header-mobile-sidebar-footer",sidebarHiddenCloseButton:"sidebar-hidden-close-button",closeSubmenuTrigger:"close-submenu-trigger",submenuExpanded:"submenu-expanded",doormatContainer:"doormat-container",doormatMenu:"doormat-menu",searchBox:"search-box",headerSearchButton:"header-search-button",contentOverlay:"header-mobile-overlay"},l=n("html"),m=n("body"),q={doormatSectionHeading:".sidebar-submenu-label, .footer-section-title",doormatSidebarItems:".header-doormat-mobile-title, .header-mobile-selected-item, .search-box, .header-mobile-search-container"};
var o;
var p=function(){function H(J){g(this,H);
H.initSelectorsObject();
this.cacheDomElements(J);
this.bindUIEvents();
this.ally=new a.MobileHeaderAlly(this);
new d.HeaderLoggedUserState(this)
}c(H,[{key:"cacheDomElements",value:function w(J){this.$el=n(J);
this.$sidebarTrigger=this.$el.find(q.sidebarTrigger);
this.$sidebar=this.$el.find(q.sidebar);
this.$header=this.$el.parent();
this.$sidebarOverlay=this.$el.find(q.sidebarOverlay);
this.$logoMobile=this.$el.find(q.logoMobile);
this.$sidebarLinks=this.$el.find(q.sidebarLinks);
this.$sidebarHiddenCloseButton=this.$el.find(q.sidebarHiddenCloseButton);
this.$submenuWrapper=this.$el.find(q.submenu);
this.$doormatContainer=this.$el.find(q.doormatContainer);
this.$doormatMenu=this.$el.find(q.doormatMenu);
this.$doormatSidebarTitle=this.$el.find(q.doormatSidebarTitle);
this.$doormatSidebarItems=this.$el.find(q.doormatSidebarItems);
this.$submenuTrigger=this.$el.find(q.submenuTrigger);
this.$closeSubmenuTrigger=this.$el.find(q.closeSubmenuTrigger);
this.$searchBox=this.$el.find(q.searchBox);
this.$doormatSectionHeading=this.$el.find(q.doormatSectionHeading);
this.$headerSearchButton=this.$el.find(q.headerSearchButton);
this.$contentOverlay=this.$el.find(q.contentOverlay)
}},{key:"bindUIEvents",value:function t(){var J=this;
this.$el.on("click",q.submenuTrigger,function(K){return J.toggleSubmenu(K)
}).on("click",q.closeSubmenuTrigger,function(){return J.collapseSubmenu()
});
this.$sidebarTrigger.on("click",function(K){K.preventDefault();
J.toggleSidebar()
});
this.$sidebarHiddenCloseButton.on("click",function(K){K.preventDefault();
J.closeSidebar();
J.$sidebarTrigger.focus()
});
this.$sidebarOverlay.on("click",function(){return J.closeSidebar()
});
n(window).on("resize",function(){return J.resizeEventHandler()
}).on("load",function(){return J.applyFixes()
}).on("resize resize_when_banner_closed",function(){J.calculateOverlayPosition();
J.ally.calculatePositionSidebarHiddenCloseButton()
})
}},{key:"toggleSidebar",value:function B(){if(this.isExpanded()){this.closeSidebar()
}else{this.openSidebar()
}}},{key:"isExpanded",value:function s(){return this.$sidebar.hasClass(k.expandedAndActive)
}},{key:"openSidebar",value:function G(){this.$sidebar.addClass(k.expandedAndActive);
o=m.scrollTop()||l.scrollTop();
m.addClass(k.sidebarOpen).css("marginTop",-o);
this.positionSidebarLinks();
this.ally.openSidebar();
this.calculateOverlayPosition();
this.ally.makePageContentInaccessible();
this.$sidebarHiddenCloseButton.addClass(k.sidebarOpen);
this.ally.calculatePositionSidebarHiddenCloseButton()
}},{key:"closeSidebar",value:function A(){m.css("marginTop",0);
this.$sidebar.removeClass("".concat(k.expandedAndActive," ").concat(k.submenuExpanded));
m.removeClass(k.sidebarOpen);
this.$sidebar.find(q.expandedOrActive).removeClass(k.expandedAndActive);
H.scrollTop();
this.ally.closeSidebar();
this.ally.makePageContentAccessible();
this.$sidebarHiddenCloseButton.removeClass(k.sidebarOpen)
}},{key:"toggleSubmenu",value:function y(O){var L=n(O.target),K=L.hasClass(k.submenuTrigger)?L:L.closest(q.submenuTrigger),J=K.data("target"),N=this.$el.find("[data-source="+J+"]"),M=N.hasClass(k.expandedAndActive);
this.collapseSubmenu();
if(!M){K.addClass(k.expandedAndActive).attr("aria-expanded","true");
this.ally.openSubmenu();
N.removeAttr("tabindex").addClass(k.expandedAndActive).attr("aria-hidden","false").find(HSBC_utils.focusables.join()).first().focus();
this.$sidebar.addClass(k.submenuExpanded);
O.preventDefault()
}this.ally.updateFocusables()
}},{key:"collapseSubmenu",value:function D(){var J=this.$submenuTrigger.filter(".expanded");
this.$sidebar.removeClass(k.submenuExpanded).find(q.expandedOrActive).removeClass(k.expandedAndActive);
this.ally.closeSubmenu();
if(n(document.activeElement).is(this.$closeSubmenuTrigger)){J.focus()
}this.ally.updateFocusables()
}},{key:"fixPaddingSafari",value:function I(){if(HSBC_utils.isSafari){this.$doormatContainer.addClass(k.safariFixPadding)
}}},{key:"fixSvgLogoIssue",value:function F(){this.$logoMobile.toggle().toggle()
}},{key:"applyFixes",value:function C(){this.fixPaddingSafari();
this.fixSvgLogoIssue()
}},{key:"positionSidebarLinks",value:function x(){var K=this.$sidebarLinks.siblings(":visible").eq(-2),M=K.outerHeight(),L=this.$sidebarLinks.outerHeight();
var J=0;
if(this.$sidebar.hasClass(k.expandedAndActive)){J=n(window).height()-K.offset().top-M-L
}if(J>0){this.$sidebarLinks.css("top",J)
}}},{key:"resizeEventHandler",value:function E(){if(HSBC_utils.matchMedia.desktop){this.closeSidebar()
}else{this.positionSidebarLinks()
}}},{key:"calculateOverlayPosition",value:function z(){this.$contentOverlay.css("top",this.$header.innerHeight())
}}],[{key:"initSelectorsObject",value:function u(){Object.keys(k).map(function(J){return q[J]=".".concat(k[J])
});
q.expandedOrActive=".".concat(k.expanded,",.").concat(k.active)
}},{key:"scrollTop",value:function v(){m.scrollTop(o);
l.scrollTop(o)
}}]);
return H
}();
var j={name:"Mobile Header",selector:".header-mobile",init:function r(s){return new p(s)
}};
HSBC_utils.registerComponent(j)
})(Bootstrap.jQuery)
}),(function(b,h,a){a.r(h);
a.d(h,"MobileHeaderAlly",function(){return c
});
function g(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}function l(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}function d(o,m,n){if(m){l(o.prototype,m)
}if(n){l(o,n)
}return o
}var e={sidebarTrigger:"header-sidebar-trigger",submenuTrigger:"sidebar-submenu-trigger",closeSubmenuTrigger:"close-submenu-trigger",expanded:"expanded",hidden:"hidden",expandedAndActive:"expanded active",submenuExpanded:"submenu-expanded"},k={doormatTrigger:".header-main-navigation-item"},f=Bootstrap.jQuery,j=HSBC_utils.keyCodes;
var c=function(){function r(D){g(this,r);
this.$el=D.$el;
this.$target=D.$target;
this.$sidebar=D.$sidebar;
this.$header=D.$header;
this.$sidebarTrigger=D.$sidebarTrigger;
this.$doormatMenu=D.$doormatMenu;
this.$doormatSidebarTitle=D.$doormatSidebarTitle;
this.$doormatSidebarItems=D.$doormatSidebarItems;
this.$submenuTrigger=D.$submenuTrigger;
this.$closeSubmenuTrigger=D.$closeSubmenuTrigger;
this.$submenuWrapper=D.$submenuWrapper;
this.$searchBox=D.$searchBox;
this.$doormatSectionHeading=D.$doormatSectionHeading;
this.$headerSearchButton=D.$headerSearchButton;
this.$sidebarHiddenCloseButton=D.$sidebarHiddenCloseButton;
this.context=D;
this.updateDoormatAccessibility();
this.setSidebarAriaLabelTexts();
this.updateFocusables();
this.bindUIEvents()
}d(r,[{key:"bindUIEvents",value:function m(){var D=this;
this.$el.on("keydown",function(E){return D.keydownEventHandler(E)
});
this.$sidebarTrigger.on("click",function(){return D.updateDoormatAccessibility()
})
}},{key:"keydownEventHandler",value:function B(F){var E=F.keyCode,G=E===j.TAB,D=E===j.ENTER;
if(G){this.tabPressedEventHandler(F)
}else{if(D){this.enterPressedEventHandler(F)
}}}},{key:"tabPressedEventHandler",value:function A(H){var J=H.target,K=this.$sidebar.hasClass(e.expanded),G=J===this.$firstFocusable[0]&&H.shiftKey,E=J===this.$lastFocusable[0]&&!H.shiftKey,I=f(J).hasClass(e.sidebarTrigger),D=this.$sidebar.hasClass(e.submenuExpanded);
if(K&&I&&!D){var F=H.shiftKey?this.$lastFocusable:this.$firstFocusable;
F.focus();
H.preventDefault()
}else{if(K&&I&&D){this.$closeSubmenuTrigger.focus();
H.preventDefault()
}else{if(G||E){this.$sidebarTrigger.focus();
H.preventDefault()
}}}}},{key:"enterPressedEventHandler",value:function n(F){var E=this.context,D=f(F.target);
if(D.hasClass(e.submenuTrigger)){E.toggleSubmenu(F)
}else{if(D.hasClass(e.closeSubmenuTrigger)){E.collapseSubmenu()
}}}},{key:"updateDoormatAccessibility",value:function p(){this.$sidebar.find(k.doormatTrigger).removeAttr("tabindex aria-expanded").attr("role","presentation").children(this.$doormatSidebarTitle).attr("tabindex",0);
this.$submenuTrigger.attr({role:"menuitem","aria-haspopup":true})
}},{key:"setSidebarAriaLabelTexts",value:function v(){this.sideBarAriaLabels={open:this.$sidebarTrigger.attr("data-aria-label-open-menu"),close:this.$sidebarTrigger.attr("data-aria-label-close-menu")}
}},{key:"updateFocusables",value:function s(){var E=this.$sidebar.find(HSBC_utils.focusables.join()),D=E.filter(function(F,G){return f(G).css("display")!=="none"
});
this.$firstFocusable=D.first();
this.$lastFocusable=D.last()
}},{key:"closeSidebar",value:function t(){this.$sidebarTrigger.attr("aria-label",this.sideBarAriaLabels.open)
}},{key:"openSidebar",value:function y(){this.$sidebarTrigger.attr("aria-label",this.sideBarAriaLabels.close);
this.showSidebarForScreenReaders()
}},{key:"closeSubmenu",value:function q(){this.$submenuTrigger.attr("aria-expanded","false");
this.$closeSubmenuTrigger.addClass(e.hidden);
this.showSidebarForScreenReaders()
}},{key:"openSubmenu",value:function x(){this.$closeSubmenuTrigger.removeClass(e.hidden);
this.hideSidebarForScreenReaders()
}},{key:"hideSidebarForScreenReaders",value:function z(){this.$doormatSectionHeading.attr("tabindex",0);
this.$doormatSidebarItems.attr({tabindex:-1,"aria-hidden":"true"});
this.$submenuWrapper.attr("aria-hidden","false")
}},{key:"showSidebarForScreenReaders",value:function w(){this.$doormatMenu.attr("aria-hidden","true");
this.$doormatSectionHeading.attr("tabindex",-1);
this.$doormatSidebarItems.attr({tabindex:0,"aria-hidden":"false"});
this.$submenuWrapper.attr("aria-hidden","true")
}},{key:"makePageContentInaccessible",value:function C(){this.$header.nextAll("div").wrapAll(f("<div>").addClass("page"));
this.$header.siblings(".page").attr("aria-hidden","true");
this.$sidebar.siblings("div").attr("aria-hidden","true")
}},{key:"makePageContentAccessible",value:function u(){this.$header.siblings(".page").children().unwrap();
this.$sidebar.siblings("div").removeAttr("aria-hidden")
}},{key:"calculatePositionSidebarHiddenCloseButton",value:function o(){this.$sidebarHiddenCloseButton.css("top",this.$header.innerHeight()-28)
}}]);
return r
}()
}),(function(b,f,a){a.r(f);
var h=a(197);
var d=a(208);
var g=a(5);
function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}(function(p){var o={searchContainer:".header-mobile-search-container",clearCircle:".clear-container",searchBox:".search-box",searchOverlay:".search-overlay"},n={hidden:"hidden"};
var l=function(){function r(y){e(this,r);
this.$el=p(y);
this.$clearCircle=this.$el.find(o.clearCircle);
this.$searchBox=this.$el.find(o.searchBox);
this.$searchOverlay=this.$el.find(o.searchOverlay);
this.suggestions=new h.SearchMobileSuggestions(this.$el);
this.notInteracted=true;
this.bindUIEvents();
this.manageClearCircleVisibility();
new d.SearchMobileAlly(this)
}c(r,[{key:"bindUIEvents",value:function t(){var B=this;
this.$clearCircle.on("click",function(){B.clearSearchBox();
B.manageClearCircleVisibility()
});
this.$searchBox.on({blur:function A(){return B.setOverlayVisibility(false)
},focusin:function z(){B.setOverlayVisibility(true);
B.trackFirstInteraction()
},input:function y(){return B.handleInputChange()
}})
}},{key:"handleInputChange",value:function x(){this.manageClearCircleVisibility()
}},{key:"clearSearchBox",value:function u(){this.$searchBox.val("").focus()
}},{key:"manageClearCircleVisibility",value:function s(){k(this.$clearCircle,this.$searchBox.val().length)
}},{key:"setOverlayVisibility",value:function w(y){k(this.$searchOverlay,y)
}},{key:"trackFirstInteraction",value:function v(){if(this.notInteracted){this.notInteracted=false;
g.TealiumUtils.trackEventWithInheritance({event_category:"tool",event_subcategory:"search",event_action:"start",event_content:"masthead",tool_name:"internal search",tool_type:"search",tool_event:"interaction"})
}}}]);
return r
}();
function k(s,r){if(r){s.removeClass(n.hidden)
}else{s.addClass(n.hidden)
}}var m={name:"Mobile Search",selector:o.searchContainer,init:function q(r){return new l(r)
}};
HSBC_utils.registerComponent(m)
})(Bootstrap.jQuery)
}),(function(e,f,h){h.r(f);
h.d(f,"SearchMobileAlly",function(){return b
});
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function d(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var c={searchButton:".header-search-button"};
var b=function(){function k(m){g(this,k);
this.$el=m.$el;
this.context=m;
this.$searchButton=this.$el.find(c.searchButton);
this.changeSearchButtonBehavior();
this.bindUIEvents()
}d(k,[{key:"bindUIEvents",value:function j(){var n=this;
var m=this.context;
m.$searchBox.on("input",function(){return n.changeSearchButtonBehavior()
});
m.$clearCircle.on("click",function(){return n.changeSearchButtonBehavior()
})
}},{key:"changeSearchButtonBehavior",value:function l(){var m=this.context,o=!m.$searchBox.val().length?-1:0,n=!m.$searchBox.val().length?"true":"false";
this.$searchButton.attr("tabindex",o);
this.$searchButton.attr("aria-hidden",n)
}}]);
return k
}()
}),(function(b,c,d){d.r(c);
var a=d(210);
HSBC_utils.registerComponent({name:"messagingBanner",selector:".messaging-banner.pub",init:function e(f){return new a.MessagingBanner(f)
}})
}),(function(b,g,a){a.r(g);
a.d(g,"MessagingBanner",function(){return f
});
var h=a(211);
function d(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function c(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}var e=Bootstrap.jQuery,j={messagingBanner:".messaging-banner.pub",critical:".A-PNLDRED-RW-ALL",warning:".A-PNLGLD-RW-ALL",general:".A-PNLDSPHR-RW-ALL",closeButton:".close-message-button"};
var f=function(){function l(p){d(this,l);
this.$el=e(p);
this.processGroup(j.critical,sessionStorage,"HSBC_msgs_critical");
this.processGroup(j.warning,sessionStorage,"HSBC_msgs_warning");
this.processGroup(j.general,localStorage,"HSBC_msgs_general");
this.showMessage()
}c(l,[{key:"showMessage",value:function o(){this.$el.show();
e(window).trigger("headerMessageChange")
}},{key:"processGroup",value:function n(p,t,q){var s=this.$el.children(p);
var r=new h.MessageIdManager(t,q);
this.processMessages(s.children(),r)
}},{key:"processMessages",value:function m(r,q){var p=[];
r.each(function(t,v){var s=e(v),u=s.find(j.closeButton),w=u.data("messageId");
if(q.has(w)){s.hide();
p.push(w)
}else{u.click(function(){s.hide();
q.add(w);
e(window).trigger("headerMessageChange")
})
}});
e(window).trigger("headerMessageChange");
q.updateAll(p)
}}]);
return l
}()
}),(function(d,e,g){g.r(e);
g.d(e,"MessageIdManager",function(){return b
});
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function a(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function c(k,h,j){if(h){a(k.prototype,h)
}if(j){a(k,j)
}return k
}var b=function(){function j(p,n){f(this,j);
this.storage=p;
this.key=n;
if(this.storage){var o=p.getItem(n);
this.ids=o?JSON.parse(o):[]
}else{this.ids=[]
}}c(j,[{key:"has",value:function h(n){return this.ids.includes(n)
}},{key:"add",value:function l(n){this.ids.push(n);
this.save()
}},{key:"updateAll",value:function m(n){this.ids=n;
this.save()
}},{key:"save",value:function k(){if(this.storage){if(this.ids.length){this.storage.setItem(this.key,JSON.stringify(this.ids))
}else{this.storage.removeItem(this.key)
}}}}]);
return j
}()
}),(function(d,j,e){e.r(j);
var a=e(213);
function f(z,A){if(!(z instanceof A)){throw new TypeError("Cannot call a class as a function")
}}function l(C,A){for(var z=0;
z<A.length;
z++){var B=A[z];
B.enumerable=B.enumerable||false;
B.configurable=true;
if("value" in B){B.writable=true
}Object.defineProperty(C,B.key,B)
}}function w(B,z,A){if(z){l(B.prototype,z)
}if(A){l(B,A)
}return B
}var h=Bootstrap.jQuery,x={description:"text-container",modalWindow:"M-MODWIN-DEV",modalWindowOverlay:"modal-window-overlay",externalLinkModal:"external-link-modal",cancelTrigger:"mw-cancel-trigger",allowTrigger:"mw-allow-trigger",isVisible:"is-visible",hide:"hidden",modalAnnouncement:"modal-announcement-sr-text",scrollbarHidden:"vertical-scrollbar-hidden"},u="data-content-id",p="default",g={link:"a",component:"[data-external-link-modal-url]",allContents:"[data-content-id]",allNonDefaultContents:"["+u+"]["+u+' != "'+p+'"]'},b="external-link-modal-url",m={animation:200},t=h("body"),y=h(document);
var n=function(){function J(Q){f(this,J);
this.$moduleElement=h(Q);
this.modalSource=this.$moduleElement.data(b);
this.$link=null;
this.$modal=null;
this.bindUIEvents();
this.allyModule=new a.ModalWindowAlly(this)
}w(J,[{key:"bindUIEvents",value:function A(){var Q=this;
if(this.modalSource){y.on("click",g.link,function(R){return Q.linkClickHandler(R)
}).on("modalWindow:switchedToEdit",g.link,function(R){return Q.close()
})
}}},{key:"linkClickHandler",value:function P(S){this.$link=h(S.target);
if(S.target.tagName.toLowerCase()!==g.link){this.$link=this.$link.parents(g.link)
}var Q=this.$link.attr("href")||"";
if(!Q.length||Q.indexOf("#")===0){return
}this.$link.data("which",S.which);
if(S.which!=1){S.preventDefault()
}var R=this.analyzeUrl(Q,window.dpwsExternalLinkConfiguration);
if(R.isModal){S.preventDefault();
if(!HSBC_utils.isEditMode()){if(!this.$modal){this.getMarkup();
q(t,x.scrollbarHidden)
}else{this.open();
q(t,x.scrollbarHidden)
}}}if(S.isDefaultPrevented()&&!R.isModal&&R.inWhiteList){this.leave()
}}},{key:"analyzeUrl",value:function M(S,X){var T=new RegExp("(^#)|(^/)|(^../)|(^mailto:)|(^tel:)|(^javascript*)((?!.location=).)*$"),W=new RegExp("(^http)|(^ftp)|(^//)|(^javascript.*.location=)");
if(W.test(S)){var R=S.split("//").slice(1)[0],U=R.split("/")[0],V=R.split("/").slice(1).join("/");
this.contentId=c(U,V,X.blacklist);
var Q=s(U,V,X.whitelist);
return this.linkCharacteristics(this.contentId||!Q,Q)
}else{if(T.test(S)){return this.linkCharacteristics(false,false)
}}return this.linkCharacteristics(true,false)
}},{key:"linkCharacteristics",value:function F(R,Q){return{isModal:R,inWhiteList:Q}
}},{key:"getMarkup",value:function I(){var R=this;
if(!this.modalSource){return
}h.ajax({type:"GET",dataType:"HTML",url:this.modalSource,success:function S(T){R.setUpModalWindow(h('<div class="'.concat(x.modalWindowOverlay," ").concat(x.externalLinkModal,'"><div class="').concat(x.modalWindow,'">').concat(T,"</div></div>")));
R.open()
},error:function Q(T){return console.error(T)
}})
}},{key:"open",value:function H(){var Q=this;
this.setSpecificContent();
this.$modal.addClass(x.isVisible).removeAttr("aria-hidden").removeAttr("aria-disabled").siblings().attr("aria-hidden","true").css("display","none");
this.setTabIndexElementValue(-1,this.$descriptionEl);
this.defer(function(){return Q.$descriptionEl.focus()
},m.animation);
this.focusedElBeforeOpen=document.activeElement
}},{key:"setSpecificContent",value:function D(){this.$modal.find(g.allContents).addClass(x.hide);
this.$modal.find("["+u+'="'+(this.contentId||p)+'"]').removeClass(x.hide)
}},{key:"close",value:function N(){if(this.$modal){var R=this.$modal.find(".".concat(x.modalAnnouncement));
R.removeClass(x.hide);
this.$modal.removeClass(x.isVisible).attr("aria-hidden","true").attr("aria-disabled","true").siblings().removeAttr("aria-hidden").css("display","")
}if(this.$link){this.$link.removeAttr("data-which");
var Q=this;
this.defer(function(){Q.$link.get(0).focus()
})
}q(t,x.scrollbarHidden);
this.bringBackFocus()
}},{key:"bringBackFocus",value:function O(){if(!this.focusedElBeforeOpen){return
}this.focusedElBeforeOpen.focus();
var R=h(this.focusedElBeforeOpen);
if(R.is(":focusable")){R.get(0).focus()
}else{while(true){var Q=R.siblings(":focusable");
if(Q.length>0){Q.get(0).focus();
break
}if(R.is("body")){R.get(0).focus();
break
}R=R.parent()
}}}},{key:"defer",value:function z(R,Q){setTimeout(R||function(){},Q||5)
}},{key:"linkReferrerPolyfillForExplorerToRedirect",value:function G(R,T){var Q=document.createElement("a");
Q.setAttribute("href",R);
Q.setAttribute("target",T);
Q.style.display="block";
document.body.appendChild(Q);
var S=h(Q);
S.bind("click",function(U){U.stopPropagation()
});
Q.click()
}},{key:"leave",value:function L(){var Q=this.$link.attr("href"),R=this.$link.data("which")==2?"_blank":this.$link.attr("target");
if(HSBC_utils.isInternetExplorer&&R){this.linkReferrerPolyfillForExplorerToRedirect(Q,R)
}else{if(R){window.open(Q,R)
}else{window.location.href=Q
}}this.close()
}},{key:"setUpModalWindow",value:function B(Q){this.$modal=y.find(x.externalLinkModal);
if(!this.$modal.length){this.$modal=Q;
this.$modal.appendTo(t)
}this.$modal.removeClass(x.isVisible);
this.cacheModalElements();
this.lateBindUIEvents();
this.$modal.find(g.allNonDefaultContents).each(function(){h(this).parent().replaceWith(this)
})
}},{key:"setTabIndexElementValue",value:function K(R,Q){if(!Q.attr("tabindex")){Q.attr("tabindex",R)
}else{return
}}},{key:"cacheModalElements",value:function C(){this.$cancelTriggers=this.$modal.find(".".concat(x.cancelTrigger));
this.$allowTriggers=this.$modal.find(".".concat(x.allowTrigger));
this.$descriptionEl=this.$modal.find(".".concat(x.description))
}},{key:"lateBindUIEvents",value:function E(){var Q=this;
this.$cancelTriggers.on("click",function(R){return Q.close()
});
this.$allowTriggers.on("click",function(R){return Q.leave()
});
this.$modal.on("click",function(S){var R=h(S.target);
if(!k(R)&&!R.hasClass(x.modalWindowOverlay)){Q.close()
}});
this.allyModule.bindUIEvents()
}}]);
return J
}();
function q(A,z){A.hasClass(z)?A.removeClass(z):A.addClass(z)
}function k(z){return z.parents(".".concat(x.modalWindow)).length
}function r(){h(g.link).trigger("modalWindow:switchedToEdit")
}function c(D,E,C){for(var z in C){var A=C[z];
for(var B=0;
B<A.length;
B++){if(o(D,E,A[B])){return z
}}}return null
}function s(B,C,A){for(var z=0;
z<A.length;
z++){if(o(B,C,A[z])){return true
}}return false
}function o(D,E,A){var z=A,C="",B=false;
if(A.indexOf("://")>=0){A=z=A.split("://").slice(1)[0]
}if(A.indexOf("/")>=0){z=A.split("/")[0];
C=A.split("/").slice(1).join("/")
}if(D.length>=z.length){if(D==z){B=true
}else{if(D.indexOf(z)>=0){if(D.lastIndexOf("."+z)==D.length-z.length-1){B=true
}}}if(B){if(C.length==0||E.indexOf(C)==0){return true
}}}return false
}HSBC_utils.registerComponent({name:"externalLinkModalWindow",selector:g.component,init:function v(z){return new n(z)
},switchToEditHandler:r})
}),(function(b,l,a){a.r(l);
a.d(l,"ModalWindowAlly",function(){return k
});
function n(r){return d(r)||o(r)||q(r)||c()
}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}function q(s,r){if(!s){return
}if(typeof s==="string"){return g(s,r)
}var t=Object.prototype.toString.call(s).slice(8,-1);
if(t==="Object"&&s.constructor){t=s.constructor.name
}if(t==="Map"||t==="Set"){return Array.from(s)
}if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)){return g(s,r)
}}function o(r){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(r)){return Array.from(r)
}}function d(r){if(Array.isArray(r)){return g(r)
}}function g(s,r){if(r==null||r>s.length){r=s.length
}for(var u=0,t=new Array(r);
u<r;
u++){t[u]=s[u]
}return t
}function j(r,s){if(!(r instanceof s)){throw new TypeError("Cannot call a class as a function")
}}function p(u,s){for(var r=0;
r<s.length;
r++){var t=s[r];
t.enumerable=t.enumerable||false;
t.configurable=true;
if("value" in t){t.writable=true
}Object.defineProperty(u,t.key,t)
}}function f(t,r,s){if(r){p(t.prototype,r)
}if(s){p(t,s)
}return t
}var m=HSBC_utils.keyCodes,h=Bootstrap.jQuery,e={hide:"hidden",modalAnnouncement:"modal-announcement-sr-text",isVisible:"is-visible",cancelTrigger:"mw-cancel-trigger"};
var k=function(){function s(u){j(this,s);
this.$el=u.$el;
this.context=u
}f(s,[{key:"bindUIEvents",value:function r(){var v,x=this;
var w=this.context,u=w.$modal.find(e.cancelTrigger);
this.$focusables=(v=this.context.$modal).find.apply(v,n(HSBC_utils.focusables));
u.on("click",function(){x.$focusables.first()[0].focus()
});
w.$modal.on("keydown",function(B){var D=h(document.activeElement),A=B.keyCode,z=A===m.ESC&&w.$modal.hasClass(e.isVisible),y=A===m.ENTER&&D.hasClass(e.cancelTrigger),C=A===m.TAB;
if(z||y){B.preventDefault();
w.close()
}else{if(C){x.handleKeyPress(B)
}}})
}},{key:"handleKeyPress",value:function t(x){var u=this.context,z=document.activeElement,y=this.$focusables.first()[0],w=this.$focusables.last()[0],v=u.$modal.find(".".concat(e.modalAnnouncement));
v.addClass(e.hide);
if(z==w&&!x.shiftKey){y.focus();
x.preventDefault()
}else{if(z==y&&x.shiftKey){w.focus();
x.preventDefault()
}}}}]);
return s
}()
}),(function(b,a){}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(j){var g={footer:"footer",footerMobileSubmenuWrapper:"sidebar-submenu-wrapper",mobileSidebar:"header-mobile-sidebar",headerDoormatMobile:"header-mobile-doormat",headerMobileFooterItem:"header-mobile-footer-item",headerMobileFooterItemWrapper:"header-mobile-footer-item-wrapper",footerLarge:"footer-large",footerSupplementary:"footer-supplementary",headerMobileFooterMenu:"header-mobile-footer-menu",footerTrigger:"sidebar-submenu-trigger",headerMobileTitle:"header-doormat-mobile-title",opinionLabTrigger:"opinion-lab-trigger"};
var h=function(){function o(r){e(this,o);
this.$el=j(r);
this.bindUIElements();
this.createFooterMobileElements();
this.buildFooterMobile();
this.bindUIEvents()
}c(o,[{key:"bindUIElements",value:function l(){this.$mobileSidebar=j("."+g.mobileSidebar);
this.$headerDoormatMobile=this.$mobileSidebar.find("."+g.headerDoormatMobile);
this.$headerMobileFooterItem=this.$el.find("."+g.headerMobileFooterItem);
this.$headerMobileFooterItemWrapper=this.$el.find("."+g.headerMobileFooterItemWrapper);
this.$footerLarge=this.$el.find("."+g.footerLarge).clone();
this.$footerSupplementary=this.$el.find("."+g.footerSupplementary).clone()
}},{key:"bindUIEvents",value:function m(){var r=this;
j(document).on("click","."+g.opinionLabTrigger,function(s){s.preventDefault();
r.opinionLabShow(s)
})
}},{key:"createFooterMobileElements",value:function q(){this.$footerMobileMenu=j("<div>",{"class":"".concat(g.headerMobileFooterMenu," ").concat(g.footerMobileSubmenuWrapper),"data-source":"mobile-footer"})
}},{key:"buildFooterMobile",value:function p(){this.$headerMobileFooterItem.find(".".concat(g.headerMobileTitle)).data("target","mobile-footer").addClass(g.footerTrigger);
this.$headerDoormatMobile.append(this.$headerMobileFooterItem);
this.$headerMobileFooterItemWrapper.remove();
this.$footerMobileMenu.insertAfter(this.$headerDoormatMobile);
this.$footerMobileMenu.append(this.$footerLarge).append(this.$footerSupplementary)
}},{key:"opinionLabShow",value:function n(s){var r=window.oo_feedback||(window.OOo?window.OOo.oo_feedback:null);
if(r){r.show(s)
}}}]);
return o
}();
var f={name:"footer",selector:"."+g.footer,init:function k(l){return new h(l)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(b,c,d){d.r(c);
var a=d(217);
if(!HSBC_utils.isEditMode()){HSBC_utils.registerComponent({name:"navigation",selector:".pws-header.lite-version",init:function e(){return new a.Navigation()
}})
}}),(function(d,e,h){h.r(e);
h.d(e,"Navigation",function(){return f
});
var a=h(218);
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function c(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}var f=function(){function k(v){g(this,k);
this.$=jQuery;
this.Utils=HSBC_utils;
this.options={headerSelector:".pws-header",headerBanner:"header",headerOverlay:".header-mobile-overlay",sidebarContainer:".sidebar-container",mobileNavOpenCssClass:"mobile-nav-open",mobileMenuTriggerSelector:".mobile-menu-trigger",focusablesSelector:'a, input, button, [tabindex]:not([tabindex="-1"])',ctaButton:".masthead-cta a, .masthead-cta button"};
this.settings=this.$.extend({},this.options,v);
this.$body=this.$(document.body);
this.$header=this.$(this.settings.headerSelector);
this.$mobileMenuTrigger=this.$header.find(this.settings.mobileMenuTriggerSelector);
this.$headerBanner=this.$(this.settings.headerBanner);
this.$headerOverlay=this.$(this.settings.headerOverlay);
this.$sidebarContainer=this.$(this.settings.sidebarContainer);
this.$ctaButton=this.$(this.options.ctaButton);
this.bindUIEvents();
this.observeMainTriggers();
this.observeMobileMenuTrigger();
this.navigationAlly=new a.NavigationAlly()
}c(k,[{key:"bindUIEvents",value:function l(){var v=this;
this.$(window).on("load resize headerMessageChange",function(){v.setHeightOfMobileHeader();
v.returnToDesktop()
});
this.$(document).on("click",function(){return v.setHeightOfMobileHeader()
});
this.$ctaButton.on("click",function(){if(v.$body.hasClass(v.settings.mobileNavOpenCssClass)){v.$mobileMenuTrigger.click()
}})
}},{key:"isTablet",value:function p(){if(this.Utils.isCLP){return this.Utils.matchMediaModern.mediumModern
}else{return this.Utils.matchMedia.tablet
}}},{key:"isDesktop",value:function o(){if(this.Utils.isCLP){return this.Utils.matchMediaModern.largeModern||this.Utils.matchMediaModern.xlargeModern||this.Utils.matchMediaModern.xxlargeModern
}else{return this.Utils.matchMedia.desktop
}}},{key:"observeMainTriggers",value:function u(){var v=this;
this.$(document).on("click",function(){if(!v.isDesktop()){return
}v.triggerDocumentEvent("pws-panel-close-all")
})
}},{key:"observeMobileMenuTrigger",value:function q(){var v=this;
this.$mobileMenuTrigger.on("click",function(z){z.preventDefault();
var y="-100%";
if(v.isTablet()){y="-320px"
}var w={left:"0"},x={left:y},A={left:"",display:""};
if(HSBC_utils.isRTL){w={right:"0"};
x={right:y};
A={right:"",display:""}
}if(!v.$body.hasClass(v.settings.mobileNavOpenCssClass)){v.markBody();
v.setHeightOfMobileHeader();
v.navigationAlly.setAriaExpanded(true);
v.navigationAlly.makeContentInaccessible();
v.triggerDocumentEvent("pws-mobile-menu-open");
v.$headerOverlay.show().stop().animate({opacity:0.75},500);
v.$sidebarContainer.stop().show().animate(w,500)
}else{v.markBody("close");
v.setHeightOfMobileHeader();
v.navigationAlly.setAriaExpanded(false);
v.navigationAlly.makeContentAccessible();
v.$headerOverlay.stop().animate({opacity:0},500,function(){v.$headerOverlay.hide()
});
v.$sidebarContainer.stop().animate(x,500,function(){v.$sidebarContainer.css(A)
})
}})
}},{key:"setHeightOfMobileHeader",value:function m(){var v=this.$headerBanner.height()+this.$header.height();
this.$header.parent().css("padding-top",v);
this.$header.css("top",this.$headerBanner.height());
this.$headerOverlay.css("top",v);
this.$sidebarContainer.css("top",v)
}},{key:"returnToDesktop",value:function s(){if(this.isDesktop()&&this.$body.hasClass(this.settings.mobileNavOpenCssClass)){this.$mobileMenuTrigger.click()
}}},{key:"focusOn",value:function t(w){var v=this;
this.defer(function(){v.$(w).focus()
})
}},{key:"markBody",value:function r(v){if(!v){this.$body.addClass(this.settings.mobileNavOpenCssClass)
}else{this.$body.removeClass(this.settings.mobileNavOpenCssClass)
}}},{key:"triggerDocumentEvent",value:function n(v,w){this.$(document).trigger({type:v,hashId:w})
}},{key:"defer",value:function j(w,v){w=w||function(){};
v=v||100;
return setTimeout(w.bind(this),v)
}}]);
return k
}()
}),(function(e,f,h){h.r(f);
h.d(f,"NavigationAlly",function(){return a
});
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function d(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}var c=HSBC_utils.keyCodes;
var a=function(){function l(o){g(this,l);
this.$=jQuery;
this.options={headerSelector:".pws-header",mobileMenuTriggerSelector:".mobile-menu-trigger",sidebarContainer:".sidebar-container",mobileNavOpenCssClass:"mobile-nav-open",headerMobileOverlay:".header-mobile-overlay",button:".A-BTNP-RW-ALL, .A-BTNP-CLP-ALL",focusablesSelector:'a, input, button, [tabindex]:not([tabindex="-1"])'};
this.settings=this.$.extend({},this.options,o);
this.$body=this.$(document.body);
this.$header=this.$(this.settings.headerSelector);
this.$sidebarContainer=this.$(this.settings.sidebarContainer);
this.$mobileMenuTrigger=this.$(this.settings.mobileMenuTriggerSelector);
this.$headerMobileOverlay=this.$(this.settings.headerMobileOverlay);
this.$focusablesSelector=this.$sidebarContainer.find(this.settings.focusablesSelector);
this.$lastFocusable=this.$focusablesSelector.last();
this.bindUIEvents()
}d(l,[{key:"bindUIEvents",value:function m(){var o=this;
this.$sidebarContainer.get(0).addEventListener("keydown",function(q){if(q.keyCode===c.TAB&&!q.shiftKey){var p=o.$body.hasClass(o.options.mobileNavOpenCssClass);
if(p&&o.$lastFocusable.is(":focus")){o.$mobileMenuTrigger.get(0).focus();
q.preventDefault()
}}})
}},{key:"setAriaExpanded",value:function n(o){this.$mobileMenuTrigger.attr("aria-expanded",o)
}},{key:"makeContentInaccessible",value:function k(){this.$header.nextAll("div").wrapAll(this.$("<div>").addClass("page"));
this.$header.siblings(".page").attr("aria-hidden","true");
this.$headerMobileOverlay.attr("aria-hidden","true")
}},{key:"makeContentAccessible",value:function j(){this.$header.siblings(".page").children().unwrap();
this.$headerMobileOverlay.removeAttr("aria-hidden")
}}]);
return l
}()
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(k){var h={notificationBanner:".notification-banner",closeButton:".close-notification-banner",row:".row"},g={hidden:"hidden"},j={sessionDismissal:"session-dismissal"},f={name:"notification_banner_dismissed",value:"hide"};
var m=function(){function o(q){e(this,o);
this.$el=k(q);
this.$closeButton=this.$el.find(h.closeButton);
this.$parentRow=this.$el.closest(h.row);
if(HSBC_utils.getCookie(f.name)===f.value&&!HSBC_utils.isEditMode()){this.closeBanner()
}else{this.$el.removeClass(g.hidden);
this.bindUIEvents()
}}c(o,[{key:"bindUIEvents",value:function n(){var r=this;
var q=this.$el.data(j.sessionDismissal);
this.$closeButton.on("click",function(){r.closeBanner();
if(q){HSBC_utils.setCookie(f.name,f.value)
}})
}},{key:"closeBanner",value:function p(){HSBC_utils.collapseElement(this.$parentRow,true)
}}]);
return o
}();
HSBC_utils.registerComponent({name:"notificationBanner",selector:h.notificationBanner,init:function l(n){return new m(n)
}})
})(Bootstrap.jQuery)
}),(function(b,e,a){a.r(e);
var h=a(34);
function c(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}var d=Bootstrap.jQuery,g=HSBC_utils,j={socialMediaFooter:".socialMediaFooter",link:"a"};
var f=function f(m){c(this,f);
this.$el=d(m);
this.$links=this.$el.find(j.link);
this.tealiumObserver=new h.TealiumObserver(this.$links,{event_type:"click",event_category:"follow",event_action:function l(n){return d(n).parent().find(".visuallyhidden").text()
}})
};
g.registerComponent({name:"socialMediaFooter",selector:j.socialMediaFooter,init:function k(l){return new f(l)
}})
}),(function(d,j,c){c.r(j);
var m=c(34);
function g(q,r){if(!(q instanceof r)){throw new TypeError("Cannot call a class as a function")
}}function o(t,r){for(var q=0;
q<r.length;
q++){var s=r[q];
s.enumerable=s.enumerable||false;
s.configurable=true;
if("value" in s){s.writable=true
}Object.defineProperty(t,s.key,s)
}}function f(s,q,r){if(q){o(s.prototype,q)
}if(r){o(s,r)
}return s
}var h=Bootstrap.jQuery,e={socialSharing:".social-media-sharing",dropTrigger:".drop-trigger",dropContent:".drop-content",links:"a[href]",visuallyHidden:".visuallyhidden"},p={open:"open"},a={triggerPrefix:".trigger-"},b={ariaExpanded:"aria-expanded",ariaHidden:"aria-hidden"},l=HSBC_utils.keyCodes;
var k=function(){function z(D){g(this,z);
this.$el=h(D);
this.$links=this.$el.find(e.links);
this.$dropTrigger=this.$el.find(e.dropTrigger);
this.$dropContent=this.$el.find(e.dropContent);
this.showHideDropdown();
this.facebook();
this.twitter();
this.pinterest();
this.linkedin();
new m.TealiumObserver(this.$links,{event_type:"click",event_category:"share",event_action:function C(E){return h(E).parent().find(e.visuallyHidden).text()
}});
this.ally()
}f(z,[{key:"ally",value:function w(){var F=this;
this.$dropTrigger.open=this.$dropTrigger.hasClass(p.open);
this.expandedFlag=this.$dropTrigger.open;
D(this,this.expandedFlag);
this.$dropTrigger.on("click",function(G){G.preventDefault();
F.expandedFlag=F.$dropTrigger.open;
if(F.expandedFlag){F.$dropTrigger.focus()
}D(F,!F.expandedFlag);
if(!F.expandedFlag){C(F)
}});
function D(H,G){H.$dropTrigger.open=G;
E(H,G)
}function E(H,G){H.$dropTrigger.attr(b.ariaExpanded,G);
H.$dropContent.attr(b.ariaHidden,!G)
}function C(G){var H=G.$dropContent.find(e.links).get(0);
if(H){setTimeout(function(){H.focus()
},3)
}}}},{key:"showHideDropdown",value:function A(){var C=this;
this.$dropContent.hide();
this.$dropTrigger.on("click",function(D){D.preventDefault();
if(C.$dropTrigger.hasClass(p.open)){C.$dropContent.slideUp(function(){C.$dropTrigger.removeClass(p.open)
})
}else{C.$dropContent.slideDown();
C.$dropTrigger.addClass(p.open)
}}).on("keydown",function(G){var F=G.keyCode,E=F===l.SPACE,D=F===l.ENTER;
if(E||D){G.preventDefault();
C.$dropTrigger.trigger("click")
}})
}},{key:"facebook",value:function v(){var C=this;
this.processSocialLink("facebook",function(){return{"{{url}}":C.fetchUrl()}
})
}},{key:"twitter",value:function u(){var C=this;
this.processSocialLink("twitter",function(){return{"{{url}}":C.fetchUrl(),"{{pagetitle}}":C.fetchPageTitle()}
})
}},{key:"pinterest",value:function t(){var C=this;
this.processSocialLink("pinterest",function(){return{"{{imageurl}}":C.fetchContentImageUrl(),"{{imagename}}":C.fetchPageTitle(),"{{imagedescription}}":C.fetchPageSummary()}
})
}},{key:"linkedin",value:function r(){var C=this;
this.processSocialLink("linkedin",function(){return{"{{url}}":C.fetchUrl()}
})
}},{key:"fetchUrl",value:function y(){var C=h('[property="og:url"]').attr("content");
return C||document.location.href
}},{key:"fetchContentImageUrl",value:function q(){return h('[property="og:image"]').attr("content")
}},{key:"fetchPageTitle",value:function x(){return h('[property="og:title"]').attr("content")||h("title").text()
}},{key:"fetchPageSummary",value:function s(){return h('[property="og:description"]').attr("content")||h('[name="description"]').attr("content")
}},{key:"processSocialLink",value:function B(E,H){var D=this.$el.find(a.triggerPrefix+E);
if(D.length){var C=D.data("href-template");
var I=H();
for(var F in I){var G=I[F];
C=C.replace(F,G?encodeURIComponent(G):"")
}D.attr("href",C)
}}}]);
return z
}();
function n(q){new k(q)
}HSBC_utils.registerComponent({name:"socialSharing",selector:e.socialSharing,init:n})
}),(function(d,b){function e(f,g){if(!(f instanceof g)){throw new TypeError("Cannot call a class as a function")
}}function a(j,g){for(var f=0;
f<g.length;
f++){var h=g[f];
h.enumerable=h.enumerable||false;
h.configurable=true;
if("value" in h){h.writable=true
}Object.defineProperty(j,h.key,h)
}}function c(h,f,g){if(f){a(h.prototype,f)
}if(g){a(h,g)
}return h
}(function(j){var g={loanCalculator:".loan-calculator-tool",inputs:"input",deptToIncomeRatio:"input[name=lc-dept-to-income-ratio]",income:"input[name=lc-income]",rate:"input[name=lc-rate]",idPeriod:"label[for=lc-period]",period:"input[name=lc-period]",sliderPeriod:"div[data-name=lc-sliderPeriod]",sliderPeriodHandle:"div[data-name=lc-sliderPeriod] > .ui-slider-handle",tablesContainerMedium:"div[data-name=lc-tablesContainerMedium]",tablesContainerLarge:"div[data-name=lc-tablesContainerLarge]",tablesWrapper:"div[data-name=lc-tablesWrapper]",inputsDiv:".lc-inputs",resultsDiv:".lc-results",ratePostfix:".lc-rate-postfix",inputBox:".lc-input-box",rangeError:"div[data-name=lc-range-error]",lettersError:"div[data-name=lc-letters-error]",syntaxError:"div[data-name=lc-syntax-error]",maximumLoanAmount:"p[data-name=lc-maximumLoanAmount]",monthlyRepaymentAmount:"span[data-name=lc-monthlyRepaymentAmount]",monthlyLoanPeriod:"td[data-name=lc-monthlyLoanPeriod]",monthlyInterestPayable:"td[data-name=lc-monthlyInterestPayable]",monthlyTotalRepayment:"td[data-name=lc-monthlyTotalRepayment]",fortnightlyRepaymentAmount:"span[data-name=lc-fortnightlyRepaymentAmount]",fortnightlyLoanPeriod:"td[data-name=lc-fortnightlyLoanPeriod]",fortnightlyInterestPayable:"td[data-name=lc-fortnightlyInterestPayable]",fortnightlyTotalRepayment:"td[data-name=lc-fortnightlyTotalRepayment]",headLoanCalculator:".lc-head-info",errorTextContainer:".lc-error-text",errorMessage:".lc-error-message"};
var h=function(){function z(C){e(this,z);
this.$lc=j(C);
this.$idPeriod=this.$lc.find(g.idPeriod).text();
this.$sliderPeriod=j(this.getElement(g.sliderPeriod));
this.$period=j(this.getElement(g.period));
this.$rate=j(this.getElement(g.rate));
this.$income=j(this.getElement(g.income));
this.$deptToIncomeRatio=Number(this.getValue(g.deptToIncomeRatio));
this.$ratePostfix=j(this.getElement(g.ratePostfix));
this.tablesContainerMedium=this.getElement(g.tablesContainerMedium);
this.tablesContainerLarge=this.getElement(g.tablesContainerLarge);
this.tablesWrapper=this.getElement(g.tablesWrapper);
this.$headLoanCalculator=this.$lc.find(g.headLoanCalculator);
this.$errorTextContainer=this.$lc.find(g.errorTextContainer);
this.$inputs=this.$lc.find(g.inputs);
this.value=this.$sliderPeriod.data("lc-value");
this.min=this.$sliderPeriod.data("lc-min");
this.max=this.$sliderPeriod.data("lc-max");
this.mq=null;
this.hasErrors={"lc-income-range":false,"lc-income-syntax":false,"lc-income-letters":false,"lc-rate-range":false,"lc-rate-syntax":false,"lc-rate-letters":false,"lc-period-range":false,"lc-period-syntax":false,"lc-period-letters":false};
this.createAndSetSlider();
this.bindUIEvents();
this.changeWidth();
this.resizeColumns();
this.calculate()
}c(z,[{key:"createAndSetSlider",value:function y(){var D=this;
this.$sliderPeriod.slider({range:"min",value:this.value,min:this.min,max:this.max,step:1});
this.$sliderHandle=this.$lc.find(g.sliderPeriodHandle);
this.$sliderPeriod.slider({slide:function C(E,F){D.$period.val(F.value);
D.$sliderHandle.attr("aria-valuenow",F.value);
D.calculate()
}});
this.$period.val(this.$sliderPeriod.slider("value"));
this.$sliderHandle.attr({role:"slider","aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.value,"aria-labelledby":this.$idPeriod})
}},{key:"bindUIEvents",value:function l(){var C=this;
this.$period.on("change keyup blur",function(){var E=C.$period.val(),D=C.$lc.find(g.sliderPeriodHandle);
C.$sliderPeriod.slider("option","value",E);
D.attr("aria-valuenow",E)
});
this.$rate.on("change keyup blur",function(){var H=C.$rate.val(),D=30,F=9,E=H.replace(".","").length,G=E*F+D;
C.$ratePostfix.css("left",G)
});
this.$inputs.on("focus",function(){return C.$headLoanCalculator.attr("aria-hidden","true")
}).on("focusout",function(){return C.$headLoanCalculator.attr("aria-hidden","false")
});
this.$income.on("change keyup",function(){if(C.validateNumbers(C.$income)){var D=Number(C.$income.val().replace(/\.|,/g,""));
C.parseNumericWithoutLosingCursorPosition(C.$income,D,"locale");
if(C.$income.data("lc-min")<=D&&D<=C.$income.data("lc-max")){C.toggleError(C.$income,"hide","range");
C.calculate()
}else{C.toggleError(C.$income,"show","range")
}}else{C.toggleError(C.$income,"hide","range")
}});
this.$rate.on("change keyup",function(){if(C.validateNumbers(C.$rate)){var H=C.$rate.val();
C.parseNumericWithoutLosingCursorPosition(C.$rate,null,"replace");
if(j.isNumeric(H)){var E=Number(H),I=E.toString().split("."),D=2,F=3;
var G=0;
if(I.length===D){G=I[1].length
}if(G>F){C.toggleError(C.$rate,"hide","range");
C.toggleError(C.$rate,"show","syntax")
}else{C.toggleError(C.$rate,"hide","syntax");
if(C.$rate.data("lc-min")<=E&&E<=C.$rate.data("lc-max")){C.toggleError(C.$rate,"hide","range");
C.calculate()
}else{C.toggleError(C.$rate,"show","range")
}}}else{C.toggleError(C.$rate,"show","syntax");
C.toggleError(C.$rate,"hide","range")
}}else{C.toggleError(C.$rate,"hide","range");
C.toggleError(C.$rate,"hide","syntax")
}});
this.$period.on("change keyup",function(){if(C.validateNumbers(C.$period)){var D=Number(C.$period.val().replace(/\.|,/g,""));
C.parseNumericWithoutLosingCursorPosition(C.$period,D,"numericValue");
if(C.$period.data("lc-min")<=D&&D<=C.$period.data("lc-max")){C.toggleError(C.$period,"hide","range");
C.calculate()
}else{C.toggleError(C.$period,"show","range")
}}else{C.toggleError(C.$period,"hide","range")
}});
j(window).on("resize",function(){C.changeWidth();
C.resizeColumns()
})
}},{key:"parseNumericWithoutLosingCursorPosition",value:function A(E,F){var G=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"locale";
var I=E[0].selectionStart,D=E[0].selectionEnd,C=0;
var H=E.val().length;
if(G==="locale"){E.val(F.toLocaleString("en"))
}else{if(G==="replace"){E.val(E.val().replace(",","."))
}else{if(G==="numericValue"){E.val(F)
}}}C=E.val().length-H;
I+=C;
D+=C;
E[0].setSelectionRange(I,D)
}},{key:"getElement",value:function o(C){return this.$lc.find(C)[0]
}},{key:"getValue",value:function v(C){return this.$lc.find(C).eq(0).val()
}},{key:"setText",value:function w(C,D){this.$lc.find(C).eq(0).find("span").text(D)
}},{key:"setError",value:function q(C,D){this.hasErrors[C.attr("name")+"-"+D]=true
}},{key:"removeError",value:function r(C,D){this.hasErrors[C.attr("name")+"-"+D]=false
}},{key:"checkIfHasErrors",value:function m(){var C=false;
j.each(this.hasErrors,function(D,E){if(E===true){C=true;
return false
}});
return C
}},{key:"calculateTotalAmount",value:function t(){var E,H=this.getValue(g.income).replace(/,/g,""),D=this.getValue(g.rate)/1200,G=this.getValue(g.period),I=12,C=G*I,F=this.$deptToIncomeRatio;
E=Math.round(H*F*(1-Math.pow(1+D,-C))/D);
return E
}},{key:"calculateRepaymentResult",value:function p(D,I){var E=12,L=this.getValue(g.rate),O=L/E/100,N=this.getValue(g.period),R=N*E,G=D*O/(1-Math.pow(1+O,-R)),J,M,H=0,C=0,Q=0,P=0,K=0,F=0;
if(I==="fr"){G=G/2
}J=G;
if(I==="mr"){K=12
}else{K=26
}L=L/100/K;
while(D>0){Q=D*L;
M=G-Q;
D=D-M;
if(D<=0){G=G+D
}C=C+G;
P=P+Q;
F++
}if(F%K===0){H=F/K
}else{H=Math.round(10*(F/K))/10
}if(I==="mr"){H=Math.round(H)
}return{repayment:Number(Math.round(J)),period:Number(Number(H).toFixed(1)),totalInterest:Number(Math.round(P)),totalRepayment:Number(Math.round(C))}
}},{key:"calculate",value:function u(){if(!this.checkIfHasErrors()){var E=this.calculateTotalAmount(),D=this.calculateRepaymentResult(E,"mr"),C=this.calculateRepaymentResult(E,"fr");
this.setText(g.maximumLoanAmount,E.toLocaleString("en"));
this.setText(g.monthlyRepaymentAmount,D.repayment.toLocaleString("en"));
this.setText(g.monthlyLoanPeriod,D.period.toLocaleString("en"));
this.setText(g.monthlyInterestPayable,D.totalInterest.toLocaleString("en"));
this.setText(g.monthlyTotalRepayment,D.totalRepayment.toLocaleString("en"));
this.setText(g.fortnightlyRepaymentAmount,C.repayment.toLocaleString("en"));
this.setText(g.fortnightlyLoanPeriod,C.period.toLocaleString("en"));
this.setText(g.fortnightlyInterestPayable,C.totalInterest.toLocaleString("en"));
this.setText(g.fortnightlyTotalRepayment,C.totalRepayment.toLocaleString("en"))
}}},{key:"changeWidth",value:function B(){if(!HSBC_utils.matchMedia.desktop){this.tablesContainerMedium.appendChild(this.tablesWrapper)
}else{this.tablesContainerLarge.appendChild(this.tablesWrapper)
}}},{key:"resizeColumns",value:function x(){var D=j(this.getElement(g.inputsDiv)),C=D.outerHeight(true),E=j(this.getElement(g.resultsDiv)).outerHeight(true);
if(C<=E){D.outerHeight(E)
}else{D.outerHeight("auto")
}}},{key:"validateNumbers",value:function n(C){if(!/^[,\.0-9]+$/.test(C.val())){this.toggleError(C,"show","letters");
return false
}else{this.toggleError(C,"hide","letters");
return true
}}},{key:"toggleError",value:function s(L,D,G){var I,F=L.closest(g.inputBox).find(g.errorMessage),E=F.find(this.$errorTextContainer),C=L.attr("name"),J=C+"-range",H=C+"-letters",K=C+"-syntax";
if(D==="show"){this.setError(L,G)
}else{this.removeError(L,G)
}if(this.hasErrors[J]||this.hasErrors[H]||this.hasErrors[K]){if(this.hasErrors[J]){I=F.data("temp_error_1")
}else{if(this.hasErrors[H]){I=F.data("temp_error_2")
}else{if(this.hasErrors[K]){I=F.data("temp_error_3")
}}}E.text(I);
F.show()
}else{E.text("");
F.hide()
}}}]);
return z
}();
var f={name:"loanCalculator",selector:g.loanCalculator,init:function k(l){return new h(l)
}};
HSBC_utils.registerComponent(f)
})(Bootstrap.jQuery)
}),(function(b,a){jQuery(window).on("load",function(){if(HSBC_utils.isEditMode()||HSBC_utils.isPreviewMode()){setTimeout(HSBC_utils.init,300)
}else{HSBC_utils.initSegmentationFixInterval()
}});
HSBC_utils.init()
})]);