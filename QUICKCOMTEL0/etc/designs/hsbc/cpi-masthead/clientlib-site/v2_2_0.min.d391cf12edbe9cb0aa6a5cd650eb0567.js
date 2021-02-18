(function(){var e=document.querySelector(".cpi-skip-to-main-content");
var d;
function b(){document.getElementById("cpiMainContent").focus()
}function c(){d=cpiUtils.eventHandler.addEvent(e,"click",b)
}function a(){if(d&&Object.keys(d).length>0){cpiUtils.eventHandler.removeEvent(d);
d=null
}}cpiUtils.eventHandler.addEvent(e,"focus",c);
cpiUtils.eventHandler.addEvent(e,"blur",a)
})();
(function(){var j=new RegExp("^Enter$");
var i=new RegExp("^Escape$|^Esc$");
var R=new RegExp("^ $|^Spacebar$");
var aa=new RegExp("^ $|^Tab$");
var ao=document.querySelector(".cpi-masthead-navigation");
var u=document.querySelector(".cpi-menubar");
var d=document.querySelector(".cpi-masthead-logo");
var ad=document.querySelectorAll(".cpi-notifications, .cpi-masthead-logoff__button");
var c=null;
var E=759;
var ap=document.querySelector(".cpi-hamburger-button");
var A=document.querySelector(".cpi-main-header");
var F=document.querySelectorAll(".cpi-hamburger-menu-button--close-doormat");
var T=document.querySelectorAll(".cpi-hamburger-menu-button--cancel-doormat");
var al=document.querySelector(".cpi-hamburger-menu-button--cancel-main-menu");
var M=document.querySelector(".cpi-wrapper__journey");
var r=document.querySelector(".cpi-main-footer");
var K=null;
var aj={activeMenubarItem:null,savedMenubarItem:null,doormatLinks:null,focusedDoormatItem:null};
var G={group:function(){},groupEnd:function(){},log:function(){}};
function y(aw){G.group("_eventOutsideMenu");
G.groupEnd();
return !u.contains(aw.target)
}function B(aw){var ax=document.querySelector(".cpi-modal-wrapper");
G.group("_eventOutsideModal");
G.groupEnd();
return !ax.contains(aw.target)
}function m(){G.group("_focusDoormatItem");
G.log("menuState.activeMenubarItem",aj.activeMenubarItem);
G.log("menuState.focusedDoormatItem",aj.focusedDoormatItem);
if(aj.focusedDoormatItem&&aj.activeMenubarItem.parentNode.contains(aj.focusedDoormatItem)){G.log("focusing","yes");
aj.focusedDoormatItem.focus()
}G.groupEnd()
}function C(){G.group("_isHamburgerMenuActive");
G.groupEnd();
return window.innerWidth<=E
}function e(){return aj.activeMenubarItem.getAttribute("href")==="#"
}function q(){G.group("_showHamburgerDoormatTitle");
aj.activeMenubarItem.classList.add("cpi-menubar--hide-from-screenreader");
aj.activeMenubarItem.nextElementSibling.classList.remove("cpi-hidden-content");
aj.activeMenubarItem.nextElementSibling.classList.remove("cpi-menubar--hide-from-screenreader");
aj.activeMenubarItem.nextElementSibling.classList.add("cpi-menubar__menu-item--active");
G.groupEnd()
}function ak(){G.group("_hideHamburgerDoormatMenubarItem");
aj.activeMenubarItem.classList.remove("cpi-menubar--hide-from-screenreader");
aj.activeMenubarItem.nextElementSibling.classList.add("cpi-hidden-content");
aj.activeMenubarItem.nextElementSibling.classList.add("cpi-menubar--hide-from-screenreader");
aj.activeMenubarItem.nextElementSibling.classList.remove("cpi-menubar__menu-item--active");
G.groupEnd()
}function o(){G.group("_hideHamburgerMenu");
r.classList.remove("cpi-main-footer--hamburger-expanded");
A.classList.remove("cpi-main-header--hamburger-vp");
M.classList.remove("cpi-hide-block");
ap.setAttribute("aria-expanded","false");
ap.focus();
G.groupEnd()
}function ar(){if(e()){aj.activeMenubarItem.tabIndex=-1
}else{aj.activeMenubarItem.parentNode.classList.remove("cpi-menubar__menu-item-wrapper--active");
aj.activeMenubarItem.classList.remove("cpi-menubar__menu-item--active");
o()
}}function z(){G.group("resizeEventHandler");
if(aj.activeMenubarItem){if(C()){ar()
}else{ak();
aj.activeMenubarItem.tabIndex=0
}}G.groupEnd()
}function ai(){var aw;
G.group("_setExpandedDoormatForHamburger");
aw=cpiUtils.closest(aj.activeMenubarItem.parentElement,"li").querySelector(".cpi-hamburger-menu-button--close-doormat");
aj.activeMenubarItem=cpiUtils.closest(aj.activeMenubarItem.parentElement,".cpi-menubar__menu-item-wrapper").querySelector(".cpi-menubar__menu-item");
aj.activeMenubarItem.removeAttribute("aria-expanded");
aj.activeMenubarItem.removeAttribute("aria-haspopup");
aj.activeMenubarItem.tabIndex=-1;
aw.focus();
G.groupEnd()
}function P(){G.group("_setExpandedDoormatForMenubar");
G.log("menuState.activeMenubarItem",aj.activeMenubarItem);
if(e()){aj.activeMenubarItem.setAttribute("aria-expanded","true")
}G.groupEnd()
}function x(){G.group("_setExpandedDoormat");
G.log("menuState.activeMenubarItem",aj.activeMenubarItem);
A.classList.add("cpi-main-header--hamburger-vp");
r.classList.add("cpi-main-footer--hamburger-expanded");
if(e()){A.classList.add("cpi-main-header--expanded-doormat")
}K=cpiUtils.eventHandler.addEvent(window,"resize",z);
aj.activeMenubarItem.parentNode.classList.add("cpi-menubar__menu-item-wrapper--active");
if(C()){ai();
q()
}else{aj.activeMenubarItem.classList.add("cpi-menubar__menu-item--active");
P()
}m();
G.groupEnd()
}function ac(){G.group("_removeActiveMenubarItemForHamburger");
aj.activeMenubarItem=cpiUtils.closest(aj.activeMenubarItem.parentElement,".cpi-menubar__menu-item-wrapper").querySelector(".cpi-menubar__menu-item");
aj.activeMenubarItem.parentNode.classList.remove("cpi-menubar__menu-item-wrapper--active");
aj.activeMenubarItem.setAttribute("aria-expanded","false");
aj.activeMenubarItem.setAttribute("aria-haspopup","true");
if(C()){ak()
}else{aj.activeMenubarItem.classList.remove("cpi-menubar__menu-item--active")
}if(e()){aj.activeMenubarItem.parentNode.querySelector(".cpi-menubar__menu-item").focus()
}aj.activeMenubarItem.tabIndex=0;
G.groupEnd()
}function au(){G.group("_activeMenubarItem");
G.log("menuState.activeMenubarItem",aj.activeMenubarItem);
aj.activeMenubarItem.classList.remove("cpi-menubar__menu-item--active");
if(C()){ac()
}else{aj.activeMenubarItem.parentNode.classList.remove("cpi-menubar__menu-item-wrapper--active");
aj.activeMenubarItem.setAttribute("aria-expanded","false")
}if(K){cpiUtils.eventHandler.removeEvent(K);
K=null
}G.groupEnd()
}function ag(){G.group("_removeActiveMenubarItem");
if(!C()){A.classList.remove("cpi-main-header--hamburger-vp");
r.classList.remove("cpi-main-footer--hamburger-expanded");
M.classList.remove("cpi-hide-block")
}A.classList.remove("cpi-main-header--expanded-doormat");
if(aj.activeMenubarItem){au()
}aj.activeMenubarItem=null;
G.groupEnd()
}function V(){G.group("_resetDoormatFocus");
aj.focusedDoormatItem=null;
G.groupEnd()
}function I(){G.group("_removeDoormatTabbing");
if(aj.doormatLinks){cpiUtils.forEach(aj.doormatLinks,function(aw,ax){ax.tabIndex=-1
});
aj.doormatLinks=null
}G.groupEnd()
}function av(){G.group("_addDoormatTabbing");
I();
aj.doormatLinks=aj.activeMenubarItem.parentNode.querySelectorAll(".cpi-doormat__menu-item");
cpiUtils.forEach(aj.doormatLinks,function(aw,ax){ax.tabIndex=0
});
G.groupEnd()
}function b(aw){G.group("_setActiveMenubarItem");
G.log("element",aw);
if(aj.activeMenubarItem!==aw){if(aj.activeMenubarItem){ag();
I()
}aj.activeMenubarItem=aw
}else{I()
}G.groupEnd()
}function aq(){G.group("_removeGlobalEventListners");
if(c){c.forEach(function(aw){cpiUtils.eventHandler.removeEvent(aw)
})
}c=null;
G.groupEnd()
}function h(){G.group("getActiveMenubarItem");
G.groupEnd();
return aj.activeMenubarItem
}function Z(aw){G.group("expandDoormatNoTabbing");
b(aw);
if(aj.focusedDoormatItem){aj.focusedDoormatItem=null
}x();
G.groupEnd()
}function v(aw){G.group("expandDoormatWithTabbing");
b(aw);
if(aj.focusedDoormatItem){av()
}x();
G.groupEnd()
}function g(){G.group("expandSavedMenubarItem");
G.log("menuState.activeMenubarItem",aj.activeMenubarItem);
G.log("menuState.savedMenubarItem",aj.savedMenubarItem);
if(aj.activeMenubarItem){ag()
}if(aj.savedMenubarItem){aj.activeMenubarItem=aj.savedMenubarItem;
av();
x()
}else{aj.activeMenubarItem=null
}G.groupEnd()
}function a(){G.group("hasSavedMenubarItem");
G.log("menuState.activeMenubarItem",aj.activeMenubarItem);
G.log("menuState.savedMenubarItem",aj.savedMenubarItem);
G.log("returns",!!(aj.savedMenubarItem&&aj.activeMenubarItem!==aj.savedMenubarItem));
G.groupEnd();
return !!aj.savedMenubarItem
}function U(){G.group("setSavedMenubarItem");
G.log("menuState.savedMenubarItem",aj.savedMenubarItem);
G.log("menuState.activeMenubarItem",aj.activeMenubarItem);
if(aj.savedMenubarItem!==aj.activeMenubarItem){aj.savedMenubarItem=aj.activeMenubarItem
}G.log("menuState.savedMenubarItem",aj.savedMenubarItem);
G.groupEnd()
}function H(aw){G.group("setActiveDoormatItem");
aj.focusedDoormatItem=aw?aw:document.activeElement;
G.log("setActiveDoormatItem",aj.focusedDoormatItem);
G.groupEnd()
}function af(){G.group("setFocusToFirstDoormatItem");
av();
G.log("menuState.doormatLinks[0]",aj.doormatLinks[0]);
aj.focusedDoormatItem=aj.doormatLinks[0];
G.log("menuState.focusedDoormatItem",aj.focusedDoormatItem);
m();
G.groupEnd()
}function an(){G.group("menubarHasFocus");
G.log("menuState.focusedDoormatItem",aj.focusedDoormatItem);
G.log("document.activeElement",document.activeElement);
G.log("returns",document.activeElement!==aj.focusedDoormatItem&&u.contains(document.activeElement));
G.groupEnd();
return document.activeElement!==aj.focusedDoormatItem&&u.contains(document.activeElement)
}function O(){G.group("doormatHasFocus");
G.log("menuState.focusedDoormatItem",aj.focusedDoormatItem);
G.log("returns",!!aj.focusedDoormatItem);
G.groupEnd();
return !!aj.focusedDoormatItem
}function k(){G.group("resetMenuState");
aq();
I();
ag();
V();
G.groupEnd()
}function w(){G.group("addGlobalListeners");
if(!c){c=[cpiUtils.eventHandler.addEvent(document,"keyup",J),cpiUtils.eventHandler.addEvent(document,"click",L)]
}G.groupEnd()
}function p(aw){G.group("getKeyFromEvent");
G.log("key",aw.key||String.fromCharCode(aw.keyCode));
G.groupEnd();
return aw.key||String.fromCharCode(aw.keyCode)
}function ah(){G.group("mouseenterEventHandler");
if(!C()){w()
}G.groupEnd()
}function t(){G.group("_expandMenubarItems");
if(O()&&a()){g()
}else{if(an()){v(document.activeElement)
}else{k()
}}G.groupEnd()
}function f(aw){G.group("mouseleaveEventHandler");
if(!C()){G.log("event.target",aw.target);
t()
}G.groupEnd()
}function W(aw){G.group("_hamburgerNavigationOnEscape");
if(aw.target.classList.contains("cpi-menubar__menu-item")||aw.target.classList.contains("cpi-hamburger-menu-button--cancel-main-menu")){o()
}else{ag()
}G.groupEnd()
}function Y(ax){var aw;
G.group("navigationKeyupEventHandler");
aw=p(ax);
if(C()&&i.test(aw)){W(ax)
}G.groupEnd()
}function S(ax){var aw;
G.group("menubarItemClickEventHandler");
aw=cpiUtils.closest(ax.target,"a");
if(C()){setTimeout(function(){Z(aw);
w();
av()
},100)
}else{U();
af();
ax.preventDefault()
}G.groupEnd()
}function Q(ax){var aw;
G.group("menubarItemKeyupEventHandler");
aw=p(ax);
if(C()){if(R.test(aw)){S(ax)
}}G.groupEnd()
}function s(ax){var aw=cpiUtils.closest(ax.target,"a");
if(!C()&&aw!==h()){G.group("menubarItemMousemoveEventHandler");
G.log("targetMenubarItem",aw);
G.log("getActiveMenubarItem()",h());
v(aw);
G.groupEnd()
}}function X(aw){G.group("menubarItemFocusEventHandler");
if(!C()){G.log("event.target",aw.target);
G.log("menuState.activeMenubarItem",aj.activeMenubarItem);
Z(aw.target);
w()
}G.groupEnd()
}function ab(aw){G.group("keyupMenubarEventHandler");
if(j.test(aw)||R.test(aw)){G.group("keyupMenubarEventHandler");
af()
}G.groupEnd()
}function D(aw,ax){G.group("keyupDoormatEventHandler");
if(aa.test(aw)&&ax.className==="cpi-doormat__menu-item"){H()
}G.groupEnd()
}function N(aw,ax){G.group("_checkHamburgerAndMenubarState");
if(!C()&&aj.activeMenubarItem===ax){ab(aw)
}G.groupEnd()
}function am(ax){var aw;
G.group("keyupEventHandler");
aw=p(ax);
if(aj.activeMenubarItem&&u.contains(ax.target)){D(aw,ax.target);
N(aw,ax.target)
}G.groupEnd()
}function J(aw){G.group("globalKeyupEventHandler");
if(!C()&&y(aw)&&B(aw)&&!O()){k()
}G.groupEnd()
}function L(aw){G.group("globalClickEventHandler");
if(!C()&&y(aw)&&B(aw)){k()
}G.groupEnd()
}function at(){G.group("hamburgerButtonClickHandler");
r.classList.add("cpi-main-footer--hamburger-expanded");
A.classList.add("cpi-main-header--hamburger-vp");
M.classList.add("cpi-hide-block");
ap.setAttribute("aria-expanded","true");
al.focus();
G.groupEnd()
}function n(){G.group("hamburgerCancelButtonClickHandler");
o();
G.groupEnd()
}function l(){G.group("doormatCancelButtonsClickHandler");
ag();
o();
G.groupEnd()
}function ae(){G.group("doormatCloseButtonClickEventHandler");
ag();
G.groupEnd()
}if(u){cpiUtils.forEach(u.querySelectorAll(".cpi-menubar__menu-item"),function(aw,ax){cpiUtils.eventHandler.addEvent(ax,"click",S);
cpiUtils.eventHandler.addEvent(ax,"keyup",Q);
cpiUtils.eventHandler.addEvent(ax,"focus",X);
cpiUtils.eventHandler.addEvent(ax,"mousemove",s)
});
cpiUtils.eventHandler.addEvent(ao,"mouseenter",ah);
cpiUtils.eventHandler.addEvent(ao,"mouseleave",f);
cpiUtils.eventHandler.addEvent(ao,"keyup",Y);
cpiUtils.eventHandler.addEvent(u,"keyup",am);
cpiUtils.eventHandler.addEvent(d,"focus",k);
cpiUtils.eventHandler.addEvent(ap,"click",at);
cpiUtils.eventHandler.addEvent(al,"click",n);
cpiUtils.forEach(T,function(aw,ax){cpiUtils.eventHandler.addEvent(ax,"click",l)
});
cpiUtils.forEach(ad,function(aw,ax){cpiUtils.eventHandler.addEvent(ax,"focus",k)
});
cpiUtils.forEach(F,function(aw,ax){cpiUtils.eventHandler.addEvent(ax,"click",ae)
})
}})();
(function(){var c=document.getElementById("cpiAPIConfigScript");
var a=document.querySelector(".cpi-notifications__badge");
var f=document.querySelectorAll(".cpi-notifications__accessible");
var d=null;
function h(k,l){var j=null;
cpiUtils.forEach(f,function(m,n){if(n.getAttribute("data-notification-type")===k){n.setAttribute("aria-hidden",false)
}else{n.setAttribute("aria-hidden",true)
}if(n.getAttribute("data-notification-type")==="many"){j=n.innerHTML;
n.innerHTML=cpiUtils.templateReplace(j,{notificationsCount:l})
}})
}function e(j){if(j>1){h("many",j)
}else{if(j===1){h("one",j)
}else{h("zero")
}}}function b(j){if(j!==0){a.setAttribute("data-cpi-badge",j);
a.classList.add("cpi-notifications__badge--visible")
}else{a.setAttribute("data-cpi-badge","");
a.classList.remove("cpi-notifications__badge--visible")
}}function i(m){var k=JSON.parse(m);
var l=k.responseInfo.reasons[0];
var n=k.messagesStatistics;
var j;
if(l.code==="000"&&l.type==="SUCCESS"){j=parseInt(n.unreadCount,10);
b(j);
e(j)
}else{b("!");
h("error")
}}function g(){b("!");
h("error")
}if(c){document.addEventListener("DOMContentLoaded",function(){d=c.getAttribute("data-notifications-url");
if(a&&f){cpiUtils.minimalAjax(d,i,g)
}})
}})();
(function(){var b=document.querySelector(".cpi-masthead-logoff__button");
function a(){cpiUtils.logoffUser()
}if(b){cpiUtils.eventHandler.addEvent(b,"click",function(c){cpiUtils.navigateAway(c,a)
})
}})();
(function(){document.addEventListener("DOMContentLoaded",function(){var a=document.querySelectorAll(".cpi-masthead-logo, .cpi-menubar, .cpi-notifications, .cpi-hamburger-legal, .cpi-hamburger-social-links");
cpiUtils.forEach(a,function(b,c){cpiUtils.eventHandler.addEvent(c,"click",cpiUtils.navigateAway)
})
})
})();