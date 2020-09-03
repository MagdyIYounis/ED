/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojcontext","hammerjs","ojs/ojoffcanvas","touchr"],function(e,t,o,n,a){"use strict";e.SwipeToRevealUtils={};e.SwipeToRevealUtils;return e.SwipeToRevealUtils.setupSwipeActions=function(e,n){var s,i,r,l,c,u,p,h,d,v,f;(s=t(e)).hasClass("oj-swipetoreveal")||(s.addClass("oj-swipetoreveal"),i=s.hasClass("oj-offcanvas-start")?"end":"start",(r={}).selector=s,r._animateWrapperSelector="oj-offcanvas-inner-wrapper",a.setupPanToReveal(r),l=a._getOuterWrapper(s),p=!1,l.on("click.swipetoreveal",function(e){p&&(e.stopImmediatePropagation(),p=!1)}),l._touchStartListener=function(e){p=!1,s.hasClass("oj-offcanvas-open")&&s[0].offsetWidth>0&&!s[0].contains(e.target)&&e.preventDefault()},l[0].addEventListener("touchstart",l._touchStartListener,{passive:!1}),s.on("ojpanstart",function(e,t){t.direction!==i?e.preventDefault():(o.getContext(l.get(0)).getBusyContext().whenReady().then(function(){s.children().addClass("oj-swipetoreveal-action").css("min-width",""),v=s.children(".oj-swipetoreveal-default").get(0),null==u&&(null!=n&&(c=n.threshold),null!=c?(c=parseInt(c,10),/%$/.test(n.threshold)&&(c=c/100*l.outerWidth())):c=.55*l.outerWidth(),u=Math.min(.3*l.outerWidth(),s.outerWidth()))}),d=(new Date).getTime())}).on("ojpanmove",function(e,o){p||s.children().css("min-width",0),p=!0,null!=v&&(o.distance>c?s.children().each(function(){this!==v&&t(this).addClass("oj-swipetoreveal-hide-when-full")}):s.children().removeClass("oj-swipetoreveal-hide-when-full"))}).on("ojpanend",function(e,o){f=o.distance,null!=v&&f>c&&(h=t.Event("ojdefaultaction"),s.trigger(h,r),e.preventDefault()),f<u&&((new Date).getTime()-d>200||f<10)&&e.preventDefault()}))},e.SwipeToRevealUtils.tearDownSwipeActions=function(e){var o,n,s;(o=t(e)).removeClass("oj-swipetoreveal"),(n={}).selector=o,null!=(s=a._getOuterWrapper(o))&&s.off(".swipetoreveal"),a.tearDownPanToReveal(n),s[0].removeEventListener("touchstart",s._touchStartListener,{passive:!1}),delete s._touchStartListener},e.SwipeToRevealUtils});