/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["ojs/ojcore","jquery","hammerjs","ojs/ojcontext","ojs/ojthemeutils","ojs/ojcomponentcore","ojs/ojanimation","ojs/ojlogger","ojs/ojconfig","ojs/ojjquery-hammer","ojs/ojpopupcore","ojs/ojoption"],function(e,t,i,n,s,o,r,a,l){"use strict";var u={properties:{disabled:{type:"boolean",value:!1},openOptions:{type:"object",properties:{display:{type:"string",enumValues:["auto","dropDown","sheet"],value:"auto"},initialFocus:{type:"string",enumValues:["firstItem","menu","none"],value:"menu"},launcher:{type:"string|Element"},position:{type:"object",properties:{at:{type:"object",properties:{horizontal:{type:"string",enumValues:["center","end","left","right","start"]},vertical:{type:"string",enumValues:["bottom","center","top"]}}},collision:{type:"string",enumValues:["fit","flip","flipcenter","flipfit","none"],value:"flipfit"},my:{type:"object",properties:{horizontal:{type:"string",enumValues:["center","end","left","right","start"],value:"start"},vertical:{type:"string",enumValues:["bottom","center","top"],value:"top"}}},of:{type:"string|object"},offset:{type:"object",properties:{x:{type:"number",value:0},y:{type:"number",value:0}}}}}}},translations:{type:"object",value:{},properties:{ariaFocusSkipLink:{type:"string"},labelCancel:{type:"string"}}}},methods:{refresh:{},close:{},open:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateStart:{},ojAnimateEnd:{},ojBeforeOpen:{},ojClose:{},ojOpen:{},ojAction:{}},extension:{}};
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(){var u=[],c=!1,h="oj-menu-position",m=e.AgentUtils.getAgentInfo().os===e.AgentUtils.OS.MAC&&e.AgentUtils.getAgentInfo().browser===e.AgentUtils.BROWSER.SAFARI,d=s.parseJSONFromFontFamily("oj-menu-config")||{},p="menuItem"===d.sheetCancelAffordance,_="dismiss"===d.sheetSwipeDownBehavior,f=d.dropDownModality||"modeless",v=d.sheetModality||"modal",g="bottom-"+(d.sheetMarginBottom||0),O=_&&{recognizers:[[i.Swipe,{direction:i.DIRECTION_DOWN}]]};function b(e){var i,n=[],s=e.children("oj-defer").first();i=s.length>0?s.children(".oj-menu-item, oj-menu-select-many"):e.children(".oj-menu-item, oj-menu-select-many");for(var o=0;o<i.length;o++){var r=t(i[o]);r.is(".oj-menu-item")?n.push(r[0]):"OJ-MENU-SELECT-MANY"===r[0].nodeName&&(n=t.merge(n,r.children(".oj-menu-item")))}return n}e.__registerWidget("oj.ojMenu",t.oj.baseComponent,{defaultElement:"<ul>",delay:300,role:"menu",widgetEventPrefix:"oj",options:{menuSelector:"ul",openOptions:{display:"auto",initialFocus:"menu",launcher:null,position:{my:{horizontal:"start",vertical:"top"},offset:{x:0,y:0},at:{horizontal:"start",vertical:"bottom"},of:void 0,collision:"flipfit"}},submenuOpenOptions:{position:{my:"start top",at:"end top",collision:"flipfit"}},animateStart:null,animateEnd:null,beforeOpen:null,close:null,open:null,action:null},_ComponentCreate:function(){if(this._super(),this._focusForTesting=this._focus,this._nextForTesting=this._next,this._selectForTesting=this._select,this._IsCustomElement()){this.element.hide();var t=this.options;t.openOptions.position=e.PositionUtils.coerceToJet(t.openOptions.position);var i=this.element[0].querySelector("oj-defer");i&&i.setAttribute("data-oj-context",!0)}else this._createAsTopLevelMenu()},_createAsTopLevelMenu:function(){var e=this;this.activeMenu=this.element,this.mouseHandled=!1,this._setupSwipeBehavior(),this.element.uniqueId().addClass("oj-menu oj-component").hide().attr({role:this.role,tabIndex:"0","aria-hidden":"true"}),this._on(!0,{"mousedown .oj-menu-item":function(e){this.options.disabled&&e.preventDefault()},click:function(e){this.options.disabled&&e.preventDefault()},keydown:function(e){this.options.disabled&&(e.keyCode!==t.ui.keyCode.ESCAPE&&e.keyCode!==t.ui.keyCode.TAB||(e.keyCode===t.ui.keyCode.TAB&&e.preventDefault(),this._focusLauncherAndDismiss(e)))}}),this.options.disabled&&this.element.addClass("oj-disabled").attr("aria-disabled","true");var i=function(e){if(!this.focusHandled){this.focusHandled=!0;var i=t(e.currentTarget);try{this._focusIsFromPointer=!0,this._focus(e,i)}finally{this._focusIsFromPointer=!1}}}.bind(this),n=function(e){t(e.target).is(":visible")&&this._collapse(e,"eventSubtree")}.bind(this);this._touchStartHandler=function(){this.focusHandled=!1},this.element[0].addEventListener("touchstart",this._touchStartHandler,{passive:!0}),this._delegatedHandleMouseEnterMenuItem=function(e){const n=e.currentTarget,s=e.target.closest(".oj-menu-item");s&&n.contains(s)&&i(t.Event(e,{currentTarget:s}))},this.element[0].addEventListener("touchstart",this._delegatedHandleMouseEnterMenuItem,{passive:!0}),this._on({"click .oj-disabled > a":function(e){e.preventDefault()},click:function(){this.mouseHandled=!1},mouseover:function(){this.focusHandled=!1},"click .oj-menu-item:has(a)":function(e){var i=t(e.target).closest(".oj-menu-item");if(!this.mouseHandled&&i.not(".oj-disabled").length){if(this.mouseHandled=!0,e.preventDefault(),this.active&&this.active.closest(i).length&&this.active.get(0)!==i.get(0))return;i.has(".oj-menu").length?this._expand(e):(this._select(e),this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".oj-menu").length&&this._clearTimer&&this._clearTimer()))}},"mouseenter .oj-menu-item":i,mouseleave:n,"mouseleave .oj-menu":n,focus:function(e,i){if(!(i||e.target===this.element[0]||this._focusSkipLink&&e.target===this._focusSkipLink.getLink()[0])){var n=this.active||t(b(this.element)).first(0);this._focus(e,n)}},keydown:this._keydown,keyup:function(e){e.keyCode!==t.ui.keyCode.ENTER&&e.keyCode!==t.ui.keyCode.SPACE||(this.__spaceEnterDownInMenu=!1)}}),this._focusable({applyHighlight:!m,recentPointer:function(){return e._focusIsFromPointer},setupHandlers:function(t,i){e._focusInHandler=t,e._focusOutHandler=i}}),this._usingCallback=t.proxy(this._usingHandler,this),this._setup()},_createAsSubmenu:function(){this.element.attr(o._OJ_CONTAINER_ATTR,this.widgetName),this.element.uniqueId().addClass("oj-menu oj-component oj-menu-submenu oj-menu-dropdown").hide().attr({role:this.role,tabIndex:"0","aria-hidden":"true"}),this._setup()},__contextMenuPressHoldJustEnded:function(e){if(!arguments.length)return c;c=e},_processOjOptions:function(){this._maxEndIconCount=0,this._maxStartIconCount=0,this._startIconWidth=0,this._endIconWidth=0;var e=function(e){var i,n=[],s=e.children("oj-defer").first();i=s.length>0?s.children("oj-option, oj-menu-select-many"):e.children("oj-option, oj-menu-select-many");for(var o=0;o<i.length;o++){var r=t(i[o]);"OJ-OPTION"===r[0].nodeName?n.push(r[0]):"OJ-MENU-SELECT-MANY"===r[0].nodeName&&(n=t.merge(n,r.children("oj-option")))}return t(n)}(this.element);this._clearOption(e);for(var i=0;i<e.length;i++){e[i].customOptionRenderer=this._customOptionRenderer.bind(this)}},_customOptionRenderer:function(i){function n(e){if(e.previousElementSibling&&"OJ-OPTION"===e.previousElementSibling.nodeName)return e.previousElementSibling;if(e.previousElementSibling&&"OJ-MENU-SELECT-MANY"===e.previousElementSibling.nodeName){var t=e.previousElementSibling.lastElementChild;return"OJ-OPTION"===t.nodeName?t:t.previousElementSibling?t.previousElementSibling:n(t)}return e.previousElementSibling||"OJ-MENU-SELECT-MANY"!==e.parentElement.nodeName?void 0:n(e.parentElement)}function s(e){return e.nextElementSibling&&"OJ-OPTION"===e.nextElementSibling.nodeName?e.nextElementSibling:e.nextElementSibling&&"OJ-MENU-SELECT-MANY"===e.nextElementSibling.nodeName?e.nextElementSibling.firstElementChild:e.nextElementSibling&&"OJ-OPTION"===e.nextElementSibling.nodeName||"OJ-MENU-SELECT-MANY"!==e.parentElement.nodeName?void 0:s(e.parentElement)}var o=t(i),r="OJ-MENU-SELECT-MANY"===o.parent().prop("nodeName"),a=this;this._hasSubmenus=!1;for(var l,u,c,h,m=o.children('a[ojmenu="opt"]'),d=0;d<m.length;d++)(l=t(m[d])).children().removeClass("oj-menu-item-icon").removeClass("oj-menu-item-end-icon"),l.replaceWith(l.contents());if(o.children('span[ojmenu="opt"]').remove(),/[^\-\u2014\u2013\s]/.test(o.text())){this._initMenuItems(o);var p=document.createElement("a");p.setAttribute("href","#"),p.setAttribute("ojmenu","opt"),(l=t(p)).uniqueId().attr({tabIndex:"-1",role:this._itemRole(o)}),r&&(l.attr("aria-checked","false"),(u=i).previousElementSibling||n(u)||t(u).addClass("oj-top"),u.nextElementSibling&&"OJ-OPTION"===u.nextElementSibling.nodeName||s(u)||t(u).addClass("oj-bottom")),o.prepend(p);var _=e.BaseCustomElementBridge.getSlotMap(i),f=_.startIcon;if(f||r){if(r){var v=document.createElement("span");v.setAttribute("slot","startIcon"),v.setAttribute("ojmenu","opt"),v.setAttribute("class","oj-menucheckbox-icon"),f?f.splice(0,0,v):f=[v]}var g=f.length;a._maxStartIconCount=Math.max(a._maxStartIconCount,g),t.each(f,function(e,i){t(i).addClass("oj-menu-item-icon"),l.append(i),g>1&&a._positionStartIcon(i,e,g)})}var O=0,b=_.endIcon;b&&(O=b.length,a._maxEndIconCount=Math.max(a._maxEndIconCount,O));var j=_[""];t.each(j,function(e,i){t(i).is("oj-menu")?(a._setupSubmenu(l,t(i),0===O),a._hasSubmenus=!0):l.append(i)}),b&&t.each(b,function(e,i){t(i).addClass("oj-menu-item-end-icon"),l.append(i),O>1&&a._positionEndIcon(i,e,O)}),i.disabled?(o.addClass("oj-disabled"),l.attr("aria-disabled","true")):(o.removeClass("oj-disabled"),l.removeAttr("aria-disabled"))}else this._initDividers(o),(h=n(c=i))&&t(h).addClass("oj-menu-item-before-divider"),(h=s(c))&&t(h).addClass("oj-menu-item-after-divider")},_positionStartIcon:function(e,i,n){var s;s=this.isRtl?"margin-right":"margin-left";var o=parseInt(t(e).css(s),10);this._startIconWidth=-1*o,t(e).css(s,o*(n-i)+"px")},_positionEndIcon:function(e,i,n){var s,o;this.isRtl?(s="margin-left",o="margin-right"):(s="margin-right",o="margin-left");var r=parseInt(t(e).css(s),10);this._endIconWidth=-1*parseInt(t(e).css(o),10),t(e).css(s,r+this._endIconWidth*(n-i-1)+"px")},_updateMenuPadding:function(e){var i=t(b(e)).children(),n=i.children(".oj-menu-item-icon:not(.oj-menu-cancel-icon)").length;e.toggleClass("oj-menu-icons",!!n).toggleClass("oj-menu-text-only",!n),this._maxStartIconCount&&this._maxStartIconCount>1&&this._applyAnchorIconPadding(i,this._startIconWidth,this._maxStartIconCount,!0);var s=i.children(".oj-menu-item-end-icon").length;e.toggleClass("oj-menu-end-icons",!!s),this._maxEndIconCount&&this._maxEndIconCount>1&&this._applyAnchorIconPadding(i,this._endIconWidth,this._maxEndIconCount,!1)},_applyAnchorIconPadding:function(e,i,n,s){var o;o=this.isRtl&&s||!this.isRtl&&!s?"padding-right":"padding-left",e.each(function(){var e=parseInt(t(this).css(o),10);t(this).css(o,e+i*(n-1)+"px")})},_clickAwayHandler:function(e){if("focus"===e.type||"mousedown"===e.type||"touchstart"===e.type||121===e.keyCode&&e.shiftKey||93===e.keyCode){if("mousedown"===e.type&&c)return;var i=this,n=u.slice(0,u.length);t.each(n,function(n,s){if(!t(e.target).closest(s.element).length&&("keydown"===e.type||"mousedown"===e.type&&3===e.which||!t(e.target).closest(s._launcher).length||s._launcherClickShouldDismiss&&("mousedown"===e.type&&3!==e.which||"touchstart"===e.type))&&!s._dismissEvent){s._dismissEvent=e;var o=s._collapse(e,"eventSubtree");i._runOnPromise(o,function(){s.__dismiss(e),s._dismissEvent=null})}})}},_setOption:function(e,t){switch(this._superApply(arguments),e){case"translations":this._cancelAnchor&&this._cancelAnchor.text(this.options.translations.labelCancel)}},_destroy:function(){this.element.is(":visible")&&this.__dismiss(),this._setWhenReady("none"),this._clearTimer&&this._clearTimer(),delete this._clearTimer,this.element[0].removeEventListener("touchstart",this._touchStartHandler,{passive:!0}),delete this._touchStartHandler,this.element[0].removeEventListener("touchstart",this._delegatedHandleMouseEnterMenuItem,{passive:!0}),delete this._delegatedHandleMouseEnterMenuItem,this.element.removeAttr("aria-activedescendant").removeClass("oj-component").find(".oj-menu").addBack().removeClass("oj-menu oj-menu-submenu oj-menu-icons oj-menu-end-icons oj-menu-text-only").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("oj-ojMenu-submenu-icon")&&e.remove()}),this.element.find("a").removeAttr("aria-expanded"),this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role"),delete this._popupServiceEvents,delete this._usingCallback;var e=this._clearCloseDelayTimer;delete this._clearCloseDelayTimer,e&&e(),this.element.ojHammer("destroy"),this._super()},_keydown:function(e){var i=!0;function n(e){return e.replace(/[-\[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}switch(e.keyCode){case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this._previous(e);break;case t.ui.keyCode.DOWN:this._next(e);break;case t.ui.keyCode.LEFT:case t.ui.keyCode.RIGHT:e.keyCode===t.ui.keyCode.RIGHT!==this.isRtl?this.active&&!this.active.is(".oj-disabled")&&this._expand(e):this._collapse(e,"active");break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._handleEnterSpace(e),this.__spaceEnterDownInMenu=!0;var s=this;setTimeout(function(){s.__spaceEnterDownInMenu=!1},100);break;case t.ui.keyCode.TAB:e.preventDefault(),this._focusLauncherAndDismiss(e);break;case t.ui.keyCode.ESCAPE:if(this._launcher){var o=this.element.attr("aria-activedescendant"),r=t(document.getElementById(o)).parents(".oj-menu").first();r.length>0&&r[0]!==this.element[0]?this._collapse(e,"active"):this._focusLauncherAndDismiss(e)}else this._collapse(e,"active");break;default:i=!1;var a=this.previousFilter||"",l=String.fromCharCode(e.keyCode),u=!1;clearTimeout(this.filterTimer),l===a?u=!0:l=a+l;var c=new RegExp("^"+n(l),"i"),h=t(b(this.activeMenu)).filter(function(){return c.test(t(this).children("a").text())});(h=u&&-1!==h.index(this.active.next())?this.active.nextAll(".oj-menu-item"):h).length||(l=String.fromCharCode(e.keyCode),c=new RegExp("^"+n(l),"i"),h=t(b(this.activeMenu)).filter(function(){return c.test(t(this).children("a").text())})),h.length?(this._focus(e,h),h.length>1?(this.previousFilter=l,this.filterTimer=setTimeout(function(){delete this.previousFilter}.bind(this),1e3)):delete this.previousFilter):delete this.previousFilter}i&&e.preventDefault()},_handleEnterSpace:function(e){this.active&&!this.active.is(".oj-disabled")&&(this.active.children("a[aria-haspopup='true']").length?this._expand(e):this._select(e))},refresh:function(){function e(e){for(var i=e.element.find("oj-menu:not(.oj-menu-submenu)"),s=0;s<i.length;s++){t(i[s]).attr("aria-hidden","true").hide(),n.getContext(i[s]).getBusyContext().whenReady().then(function(e){e.refresh()}.bind(e,i[s]))}}(this._super(),this._IsCustomElement()&&!this._wasCreated)?(this.element.parent().is("oj-option")&&(this._isSubmenu=!0,this._createAsSubmenu()),this._isSubmenu||(o.subtreeShown(this.element[0]),this._createAsTopLevelMenu(),e(this)),this._wasCreated=!0):(e(this),this._setup());this._reposition()},_reposition:function(){var e=this.element;if(e.is(":visible")&&(i=e[0],!((n=i.getBoundingClientRect()).width>document.documentElement.clientWidth||n.height>document.documentElement.clientHeight))){var i,n,s=e.data(h);e.position(s),e.find(".oj-menu").each(function(){var e=t(this);e.is(":visible")&&(s=e.data(h),e.position(s))})}},_setup:function(){this.isRtl="rtl"===this._GetReadingDirection(),this._IsCustomElement()?(this._processOjOptions(),this._isSubmenu&&(this.options.openOptions.launcher=this.element.parent()),this._updateMenuPadding(this.element)):this._setupWidgetMenus(),this.active&&!t.contains(this.element[0],this.active[0])&&this._blur()},_setupWidgetMenus:function(){var e=this,i=this.element.find(this.options.menuSelector),n=i.add(this.element),s=n.children();this._hasSubmenus=!!i.length,s.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");var o=s.filter(":not(.oj-menu-item):has(a)"),r=o.children("a");this._initMenuItems(o),this._initAnchors(r);var a=s.filter(function(e,i){var n=t(i);return n.is(":not(.oj-menu-item)")&&!/[^\-\u2014\u2013\s]/.test(n.text())});this._initDividers(a),this._initDividerNeighbors(s,a),s.filter(".oj-disabled").children("a").attr("aria-disabled","true"),s.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled"),i.filter(":not(.oj-menu)").addClass("oj-menu oj-menu-submenu oj-menu-dropdown").hide().attr({role:this.role,"aria-hidden":"true"}).each(function(){var i=t(this);e._setupSubmenu(e._getSubmenuAnchor(i),i,!0)}),n.each(function(){e._updateMenuPadding(t(this))})},_setupSubmenu:function(e,i,n){if(e.attr("aria-haspopup","true").attr("aria-expanded","false"),n){var s=t("<span>");s.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon",!0),e.append(s)}i.attr("aria-labelledby",e.attr("id"))},_initMenuItems:function(e){e.addClass("oj-menu-item").attr("role","presentation")},_initAnchors:function(e){for(var i=0;i<e.length;i++){var n=t(e[i]);n.uniqueId().attr({tabIndex:"-1",role:this._itemRole(n.parent())})}},_initDividers:function(e){e.addClass("oj-menu-divider").attr("role","separator")},_initDividerNeighbors:function(e,t){e.removeClass("oj-menu-item-before-divider oj-menu-item-after-divider"),t.prev().addClass("oj-menu-item-before-divider"),t.next().addClass("oj-menu-item-after-divider")},_clearOption:function(e){e.removeClass("oj-menu-item-before-divider oj-menu-item-after-divider oj-menu-divider oj-menu-item").removeAttr("role")},_getSubmenuAnchor:function(e){return e.prev("a")},_getSubmenuWidget:function(e){return o.__GetWidgetConstructor(e,"ojMenu")("instance")},_itemRole:function(e){return"OJ-MENU-SELECT-MANY"===e.parent().prop("nodeName")?"menuitemcheckbox":"menuitem"},_getAdjacentDividers:function(e,t){var i=e.prev(".oj-menu-divider").add(e.next(".oj-menu-divider"));return t&&(i=i.add(e)),i},_focus:function(e,i){var n=this.active?this.active:t();if(!i.is(n)){e&&"focus"===e.type||this._clearTimer&&this._clearTimer(),i=i.first(),this._makeActive(i,e);var s=i.parents(".oj-menu").first(),o=s.closest(".oj-menu-item");s.find(".oj-focus-ancestor").removeClass("oj-focus-ancestor"),this._getAdjacentDividers(o,!0).addClass("oj-focus-ancestor"),e&&"keydown"===e.type?this._close():this._clearTimer=this._setTimer(function(){return delete this._clearTimer,this._close()},this._getSubmenuBusyStateDescription("closing"),this.delay);var r=this._IsCustomElement()?i.children("oj-menu"):i.children(".oj-menu"),a=r.length>0&&n.length>0&&t.contains(r[0],n[0]);r.length&&e&&/^mouse|click/.test(e.type)&&!this.active.hasClass("oj-disabled")&&!a&&this._startOpening(e,r),this.activeMenu=i.parents(".oj-menu").first()}},_makeActive:function(e,i){if(!e.is(this.active)){var n,s,o=this.active?this.active:t(),r=e.children("a");this.active=e,this.element.attr("aria-activedescendant",r.attr("id")),this._focusOutHandler(o),this._focusInHandler(e),this._getAdjacentDividers(o).removeClass("oj-focus"),this._getAdjacentDividers(e).addClass("oj-focus"),this._trigger("_activeItem",i,{previousItem:o,item:e,privateNotice:"The _activeItem event is private.  Do not use."}),i&&/^key/.test(i.type)&&(n=r[0],(s=n.getBoundingClientRect()).top<0||s.bottom>document.documentElement.clientHeight||s.left<0||s.right>document.documentElement.clientWidth)&&r[0].scrollIntoView()}},_removeActive:function(e){if(this.active){var i=this.active;this.active=null,this.element.removeAttr("aria-activedescendant"),this._focusOutHandler(i),this._getAdjacentDividers(i).removeClass("oj-focus"),this._trigger("_activeItem",e,{previousItem:i,item:t(),privateNotice:"The _activeItem event is private.  Do not use."})}},_blur:function(e){this._clearTimer&&this._clearTimer(),this._removeActive(e)},_focusLauncherAndDismiss:function(e,t){this._launcher&&this._launcher.focus(),this.__dismiss(e,t)},close:function(){this.__dismiss()},__dismiss:function(t,i){if(!this._isOperationPending("close","__dismiss",[t,i])&&e.ZOrderUtils.getStatus(this.element)===e.ZOrderUtils.STATUS.OPEN){var n=this.element.is(":visible");this._setWhenReady("close");var s={};s[e.PopupService.OPTION.POPUP]=this.element,s[e.PopupService.OPTION.CONTEXT]={event:t,selectUi:i,isOpen:n},e.PopupService.getInstance().close(s)}},_getDefaultAnimation:function(e,t){return s.parseJSONFromFontFamily("oj-menu-option-defaults").animation[e][t]},_isAnimationDisabled:function(){return!this._IsCustomElement()||this._disableAnimation},_replaceAnimationOptions:function(e,t){var i=e;if(t&&e&&"string"!=typeof e){for(var n=JSON.stringify(e),s=Object.keys(t),o=0;o<s.length;o++){var r=s[o];n=n.replace(new RegExp(r,"g"),t[r])}i=JSON.parse(n)}return i},_runOnPromise:function(e,t){return e?e.then(t):t()},_beforeCloseHandler:function(t){var i=t[e.PopupService.OPTION.POPUP];if(this._IsCustomElement()){var n=t[e.PopupService.OPTION.CONTEXT],s=n.selectUi;if(s&&s.item.length){var o={},a=s.item[0],l=n.event;o.originalEvent=l.originalEvent;var u={detail:o,cancelable:!0,bubbles:!0},c=new CustomEvent("ojAction",u);a.dispatchEvent(c),n.event=c}}if(!this._isAnimationDisabled()){var h=this._getDefaultAnimation(this._sheetMenuIsOpen?"sheet":"dropdown","close"),m=r.startAnimation(i[0],"close",e.PositionUtils.addTransformOriginAnimationEffectsOption(i,h),this);return m.then(function(){i.attr("aria-hidden","true").hide()}),m}i.attr("aria-hidden","true").hide()},_afterCloseHandler:function(t){var i=t[e.PopupService.OPTION.CONTEXT],n=i.event,s=i.selectUi,o=i.isOpen;(this.element.removeData(h),this._launcher=void 0,this._sheetMenuIsOpen=!1,!this._IsCustomElement()&&s)&&(n=this._trigger2("select",n,s).event);o&&this._trigger("close",n,{}),this._currentOpenOptions=null;var r=u.indexOf(this);u.splice(r,1),this._destroyVoiceOverAssist()},getCurrentOpenOptions:function(){return t.extend(!0,{},this._currentOpenOptions||this.options.openOptions)},open:function(i,s){var o=arguments[2];if(!this._isOperationPending("open","open",[i,s,o])){var r=function(i,n){this._IsCustomElement()&&this.refresh(),this.element.removeAttr("aria-activedescendant"),this.element.find(".oj-focus").removeClass("oj-focus"),this.focusHandled=!1,this._focusIsFromPointer=!1,this.mouseHandled=!1,this.activeMenu=this.element,this.active=null,(n=t.extend({},this.options.openOptions,n)).position=t.extend({},n.position),this._IsCustomElement()&&this._setPosition(n.position),o=t.extend({},this.options.submenuOpenOptions,o);var s=this._currentOpenOptions;this._currentOpenOptions=n,e.PositionUtils._normalizeEventForPosition(i),this._launcherClickShouldDismiss=this.element[0].__openingContextMenu;var r=this._trigger2("beforeOpen",i,{openOptions:n});if(!r.proceed)return this._currentOpenOptions=s,void(this._disableAnimation=!1);e.ZOrderUtils.getStatus(this.element)===e.ZOrderUtils.STATUS.OPEN&&(this._disableAnimation=!0,this._currentOpenOptions=s,this.__dismiss(r.event),this._dismissEvent=null,this._currentOpenOptions=n);var l=n.launcher;if(!(l=this._IsCustomElement()?"string"===t.type(l)?t(document.getElementById(l)):t(l):"string"===t.type(l)?t(l):l)||!l.length)return a.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call."),this._currentOpenOptions=null,void(this._disableAnimation=!1);var c,m,d=this._isDropDown(n.display);if(this._toggleCancelDom(d),d){this.element.addClass("oj-menu-dropdown").removeClass("oj-menu-sheet"),m=f;var p=e.PositionUtils.normalizeHorizontalAlignment(n.position,this.isRtl);this._IsCustomElement()?(p=e.PositionUtils.coerceToJet(p,this.options.openOptions.position),c=e.PositionUtils.coerceToJqUi(p)):c=p,c.of=e.PositionUtils.normalizePositionOf(c.of,l,i)}else this.element.addClass("oj-menu-sheet").removeClass("oj-menu-dropdown"),m=v,c={my:"bottom",at:g,of:window,collision:"flipfit"};var _=this.element[0],O=u.slice(0,u.length);t.each(O,function(e,t){t.element[0]!==_&&(t._collapse(i,"eventSubtree"),t.__dismiss(i))}),this._submenuPosition=e.PositionUtils.normalizeHorizontalAlignment(o.position,this.isRtl);var b=this._usingCallback;t.isFunction(c.using)&&(c.origUsing=c.using),c.using=b,this.element.data(h,c),this._setWhenReady("open");var j={};j[e.PopupService.OPTION.POPUP]=this.element,j[e.PopupService.OPTION.LAUNCHER]=l,j[e.PopupService.OPTION.POSITION]=c,j[e.PopupService.OPTION.EVENTS]=this._getPopupServiceEvents(),j[e.PopupService.OPTION.LAYER_SELECTORS]="oj-menu-layer",j[e.PopupService.OPTION.MODALITY]=m,j[e.PopupService.OPTION.CONTEXT]={event:i,initialFocus:n.initialFocus,launcher:l,isDropDown:d},j[e.PopupService.OPTION.CUSTOM_ELEMENT]=this._IsCustomElement();var E=e.PopupService.getInstance(),S=E.open.bind(E,j),C=this.element[0].querySelector("oj-defer");C?e.Context.getContext(C).getBusyContext().whenReady().then(S):S();this._disableAnimation=!1}.bind(this,i,s);if(this._dismissEvent)n.getContext(this.element[0]).getBusyContext().whenReady().then(r);else r()}},_setPosition:function(t){var i=this.options;i.openOptions.position=e.PositionUtils.coerceToJet(t,i.openOptions.position)},_beforeOpenHandler:function(t){var i,n=t[e.PopupService.OPTION.POPUP],s=t[e.PopupService.OPTION.POSITION],o=t[e.PopupService.OPTION.CONTEXT],a=o.event,l=o.isDropDown,u=o.initialFocus;if(n.show(),n.position(s),this._initVoiceOverAssist(u),"firstItem"===u){var c=this._getFirstItem();this._focus(a,c)}if(!this._isAnimationDisabled()){var h=this._getDefaultAnimation(l?"dropdown":"sheet","open");i=r.startAnimation(n[0],"open",e.PositionUtils.addTransformOriginAnimationEffectsOption(n,h),this)}return i},_afterOpenHandler:function(t){var i,n=t[e.PopupService.OPTION.CONTEXT],s=n.event,o=n.launcher,r=n.isDropDown,a=n.initialFocus;(this._launcher=o,this._sheetMenuIsOpen=!r,u.push(this),"firstItem"===a||"menu"===a)&&(i=this._focusSkipLink&&"menu"===a?this._focusSkipLink.getLink():this.element,this._IsCustomElement()?window.setImmediate(function(){i.focus()}):i.focus());this._trigger("open",s,{})},_initVoiceOverAssist:function(t){if("menu"===t&&(e.AgentUtils.getAgentInfo().os===e.AgentUtils.OS.IOS||e.AgentUtils.getAgentInfo().os===e.AgentUtils.OS.ANDROID)){var i=this._getFirstItem();if(!(i.length<1)){var n=this.element.attr("id");e.StringUtils.isEmptyOrUndefined(n)&&(n=this.uuid);var s=[n,"focusSkipLink"].join("_"),o=function(){window.setImmediate(function(e,t){t.find("a").first().focus(),e._focus(null,t)}.bind(this,this,i))}.bind(this),r=this.options.translations.ariaFocusSkipLink;this._focusSkipLink=new e.PopupSkipLink(i,r,o,s,{insertBefore:!0,preventKeyEvents:!1})}}},_destroyVoiceOverAssist:function(){this._focusSkipLink&&(this._focusSkipLink.destroy(),delete this._focusSkipLink)},_getFirstItem:function(){return this.element.find(".oj-menu-item").first()},_startOpening:function(e,t){this._clearTimer&&this._clearTimer(),this._IsCustomElement()&&t[0].refresh(),this._clearTimer=this._setTimer(function(){return delete this._clearTimer,this._close().then(function(){this._open(e,t)}.bind(this))},this._getSubmenuBusyStateDescription("closing and opening"),this.delay)},_open:function(i,s){if("true"===s.attr("aria-hidden")&&this.active){var o;if(this._IsCustomElement()){var a=this._getSubmenuWidget(s);if(!a._trigger2("beforeOpen",i).proceed)return;o=e.PositionUtils.coerceToJqUi(a.options.openOptions.position),o=e.PositionUtils.normalizeHorizontalAlignment(o,this.isRtl)}else o=this._submenuPosition;if(o=t.extend({of:this.active},o),this._clearTimer&&this._clearTimer(),this.element.find(".oj-menu").not(s.parents(".oj-menu")).hide().attr("aria-hidden","true").removeData(h),s.show().removeAttr("aria-hidden").position(o).data(h,o),this._getSubmenuAnchor(s).attr("aria-expanded","true"),!this._isAnimationDisabled()){var l=n.getContext(this.element[0]).getBusyContext().addBusyState({description:this._getSubmenuBusyStateDescription("opening")}),u=this._getDefaultAnimation("submenu","open");u=this._replaceAnimationOptions(u,{"#myPosition":o.my}),r.startAnimation(s[0],"open",u,this).then(l)}}},__collapseAll:function(e,i,s){var o;this._clearTimer&&this._clearTimer();var r=this,a=function(){delete r._clearTimer;var n=i?r.element:t(e&&e.target).closest(r.element.find(".oj-menu"));n.length||(n=r.element);var s=r._close(n);return s=r._runOnPromise(s,function(){r._blur(e),r.activeMenu=n})};if(s?this._isAnimationDisabled()?r._clearTimer=r._setTimer(a,r._getSubmenuBusyStateDescription("closing"),s):o=new Promise(function(e){r._clearTimer=r._setTimer(a,r._getSubmenuBusyStateDescription("closing"),s,function(){e(!0)})}):o=a(),o){var l=n.getContext(this.element[0]).getBusyContext().addBusyState({description:"closing submenus"});o.then(l)}return o},_close:function(e){var i;e||(e=this.active?this.active.parents(".oj-menu").first():this.element);var n=this,s=n._getDefaultAnimation("submenu","close"),o=e.find(".oj-menu"),a=function(e){e.hide().attr("aria-hidden","true").removeData(h),n._getSubmenuAnchor(e).attr("aria-expanded","false")};if(this._isAnimationDisabled())a(o),e.find(".oj-focus-ancestor").removeClass("oj-focus-ancestor"),i=Promise.resolve(!0);else{var l=function(e){var i=null;return t(b(e)).children(".oj-menu").each(function(e,o){var u=t(o);if(u.is(":visible")){var c=l(u);i=n._runOnPromise(c,function(){var e=u.data(h),t=n._replaceAnimationOptions(s,{"#myPosition":e.my});return r.startAnimation(o,"close",t,n).then(function(){a(u)})})}else a(u),i=Promise.resolve(!0)}),i};i=l(e),i=this._runOnPromise(i,function(){e.find(".oj-focus-ancestor").removeClass("oj-focus-ancestor")})}return i},_collapse:function(e,t){var i;if(null==t||"active"===t){var n=this.activeMenu&&this.activeMenu.closest(".oj-menu-item",this.element);if(n&&n.length){var s=this;i=this._close(),i=this._runOnPromise(i,function(){s._focus(e,n)})}}else"all"===t||"eventSubtree"===t?i=this.__collapseAll(e,"all"===t,this.delay):a.warn("Invalid param "+t+" passed to Menu._collapse().  Ignoring the call.");return i},_expand:function(e){var i,n;if(this.active){var s=b(n=this.active.children(".oj-menu ").first());s.length>0&&(i=t(s[0]))}i&&i.length&&(this._open(e,n),this._clearTimer&&this._clearTimer(),this._clearTimer=this._setTimer(function(){delete this._clearTimer,this._focus(e,i)},this._getBusyStateDescription("focusing an item")))},_next:function(e){this._move("next","first",e)},_previous:function(e){this._move("prev","last",e)},_move:function(e,i,n){var s,o=b(this.activeMenu),r=o.indexOf(this.active?this.active[0]:null);r>-1?"first"===e?s=o[0]:"last"===e?s=o[o.length-1]:"next"===e?s=r+1<o.length?o[r+1]:o[0]:"prev"===e&&(s=r-1>-1?o[r-1]:o[o.length-1]):s="first"===i?o[0]:o[o.length-1],this._focus(n,t(s))},_select:function(e){if(!this.active&&e&&e.target){var i=t(e.target).closest(".oj-menu-item");i.closest(this.element).length&&this._makeActive(i,e)}var n=this.active.is(this._cancelItem)?void 0:{item:this.active},s=this.__collapseAll(e,!0);this._runOnPromise(s,function(){this._focusLauncherAndDismiss(e,n)}.bind(this))},_surrogateRemoveHandler:function(){var t=this.element;e.ZOrderUtils.getStatus(t)===e.ZOrderUtils.STATUS.OPEN&&t.remove()},_getPopupServiceEvents:function(){if(!this._popupServiceEvents){var t={};this._popupServiceEvents=t,t[e.PopupService.EVENT.POPUP_CLOSE]=this._closeAll.bind(this),t[e.PopupService.EVENT.POPUP_REMOVE]=this._surrogateRemoveHandler.bind(this),t[e.PopupService.EVENT.POPUP_REFRESH]=this._reposition.bind(this),t[e.PopupService.EVENT.POPUP_AUTODISMISS]=this._clickAwayHandler.bind(this),t[e.PopupService.EVENT.POPUP_BEFORE_OPEN]=this._beforeOpenHandler.bind(this),t[e.PopupService.EVENT.POPUP_AFTER_OPEN]=this._afterOpenHandler.bind(this),t[e.PopupService.EVENT.POPUP_BEFORE_CLOSE]=this._beforeCloseHandler.bind(this),t[e.PopupService.EVENT.POPUP_AFTER_CLOSE]=this._afterCloseHandler.bind(this)}return this._popupServiceEvents},_closeAll:function(){this._disableAnimation=!0,this._close(this.element),this.__dismiss(null),this._setWhenReady("none")},_usingHandler:function(t,i){var n=i.element.element;n.css(t),e.PositionUtils.captureTransformOriginAnimationEffectsOption(n,i);var s=n.data(h).origUsing;s&&s(t,i),e.PositionUtils.isAligningPositionClipped(i)&&(this._clearCloseDelayTimer=this._setTimer(this._closeAll,this._getSubmenuBusyStateDescription("closing"),1))},getNodeBySubId:function(e){switch(e&&e.subId){case"oj-menu-cancel-command":return this._cancelDomAttached?this._cancelItem[0]:null;default:return this._super(e)}},getSubIdByNode:function(e){return this._cancelItem&&this._cancelItem.is(t(e).parents().addBack(e))?{subId:"oj-menu-cancel-command"}:this._super(e)},_isDropDown:function(e){if(this._hasSubmenus)return!0;switch(e){case"dropDown":return!0;case"sheet":return!1;default:return"phone"!==l.getDeviceRenderMode()}},_toggleCancelDom:function(e){function i(e,i){var n=b(e),s=n.indexOf(i[1]);return t(n[s-1])}if(p)if(e)this._cancelDomAttached&&(i(this.element,this._getCancelDom()).removeClass("oj-menu-item-before-divider"),this._getCancelDom().detach(),this._cancelDomAttached=!1);else{var n=this._getCancelDom();n.appendTo(this.element),i(this.element,n).addClass("oj-menu-item-before-divider"),this._cancelDomAttached=!0}},_getCancelDom:function(){if(!this._cancelDom){var e=t("<li></li>",this.document[0]),i=t("<a href='#'></a>",this.document[0]).text(this.options.translations.labelCancel);t("<span class='oj-menu-item-icon oj-component-icon oj-menu-cancel-icon'></span>",this.document[0]).prependTo(i);var n=t("<li></li>",this.document[0]).addClass("oj-menu-item-cancel oj-menu-item-after-divider").append(i);this._initDividers(e),this._initAnchors(i),this._initMenuItems(n),this._cancelAnchor=i,this._cancelItem=n,this._cancelDom=t([e[0],n[0]])}return this._cancelDom},_setupSwipeBehavior:function(){_&&(this.element.ojHammer(O),this._on({swipedown:function(e){this._sheetMenuIsOpen&&"touch"===e.gesture.pointerType&&(this.__collapseAll(e,!0),this._focusLauncherAndDismiss(e))}}))},_setWhenReady:function(t){var i=this._whenReadyMediator;i&&(i.destroy(),delete this._whenReadyMediator),["open","close"].indexOf(t)<0||(this._whenReadyMediator=new e.PopupWhenReadyMediator(this.element,t,"ojMenu",this._IsCustomElement()))},_isOperationPending:function(e,t,i){var n=this._whenReadyMediator;return!!n&&n.isOperationPending(this,e,t,i)},_setTimer:function(e,t,i,s){var o=n.getContext(this.element[0]).getBusyContext().addBusyState({description:t}),r=function(){o&&(o(),o=null,s&&s())},a=this,l=setTimeout(function(){var t=e.bind(a)();t&&t instanceof Promise?t.then(r):r()},i||0);return function(){clearTimeout(l),r()}},_getBusyStateDescription:function(e){return"Menu with id '"+this.element.attr("id")+"' is busy "+e+"."},_getSubmenuBusyStateDescription:function(e){return this._getBusyStateDescription(e+" a submenu")},_NotifyDetached:function(){e.ZOrderUtils.getStatus(this.element)===e.ZOrderUtils.STATUS.OPEN&&this._closeAll(),this._super()}}),o.setDefaultOptions({ojMenu:{openOptions:o.createDynamicPropertyGetter(function(t){return{position:null!=e.BaseCustomElementBridge.getRegistered(t.element.tagName)?t.containers.indexOf("ojMenu")>=0?{my:{horizontal:"start",vertical:"top"},at:{horizontal:"end",vertical:"top"},offset:{x:0,y:0},collision:"flipfit"}:{my:{horizontal:"start",vertical:"top"},at:{horizontal:"start",vertical:"bottom"},offset:{x:0,y:0},collision:"flipfit"}:{my:"start top",at:"start bottom",collision:"flipfit"}}})}})}(),u.extension._WIDGET_NAME="ojMenu",e.CustomElementBridge.register("oj-menu",{metadata:u})});