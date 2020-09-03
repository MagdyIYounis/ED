/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojdataprovider","ojs/ojcomponentcore","ojs/ojeventtarget","ojs/ojdataprovider"],function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}var a=function(){function e(t,n){i(this,e),this.dataProvider=t,this.options=n,this._noFilterSupport=!1,this.AsyncIterable=function(){return function t(e,n){i(this,t),this._parent=e,this._asyncIterator=n,this[Symbol.asyncIterator]=function(){return this._asyncIterator}}}(),this.AsyncIterator=function(){function t(e,n,r){i(this,t),this._parent=e,this._nextFunc=n,this._params=r}return s(t,[{key:"next",value:function(){var t=this._nextFunc(this._params);return Promise.resolve(t)}}]),t}(),this.AsyncIteratorYieldResult=function(){return function t(n,r){i(this,t),this._parent=n,this.value=r,this[e._VALUE]=r,this[e._DONE]=!1}}(),this.AsyncIteratorReturnResult=function(){return function t(n,r){i(this,t),this._parent=n,this.value=r,this[e._VALUE]=r,this[e._DONE]=!0}}(),this.FetchListResult=function(){return function t(n,r,s,a){i(this,t),this._parent=n,this.fetchParameters=r,this.data=s,this.metadata=a,this[e._FETCHPARAMETERS]=r,this[e._DATA]=s,this[e._METADATA]=a}}(),this.Item=function(){return function t(n,r,s){i(this,t),this._parent=n,this.metadata=r,this.data=s,this[e._METADATA]=r,this[e._DATA]=s}}(),this.ItemMetadata=function(){return function t(n,r){i(this,t),this._parent=n,this.key=r,this[e._KEY]=r}}(),this.FetchListParameters=function(){return function t(n,r,s,a,u,l){i(this,t),this._parent=n,this.params=r,this.size=s,this.sortCriteria=a,this.filterCriterion=u,this.attributes=l;var h=this;r&&Object.keys(r).forEach(function(t){h[t]=r[t]}),this[e._SIZE]=s,a&&(this[e._SORTCRITERIA]=a),u&&(this[e._FILTERCRITERION]=u),l&&(this[e._FETCHATTRIBUTES]=l)}}(),this.FetchByKeysParameters=function(){return function t(n,r,s,a){i(this,t),this._parent=n,this.keys=r,this.params=s,this.attributes=a;var u=this;s&&Object.keys(s).forEach(function(t){u[t]=s[t]}),r&&(this[e._KEYS]=r),a&&(this[e._FETCHATTRIBUTES]=a)}}(),this.FetchByOffsetParameters=function(){return function t(n,r,s,a,u,l,h){i(this,t),this._parent=n,this.offset=r,this.params=s,this.size=a,this.sortCriteria=u,this.filterCriterion=l,this.attributes=h;var _=this;s&&Object.keys(s).forEach(function(t){_[t]=s[t]}),a&&(this[e._SIZE]=a),u&&(this[e._SORTCRITERIA]=u),r&&(this[e._OFFSET]=r),l&&(this[e._FILTERCRITERION]=l),h&&(this[e._FETCHATTRIBUTES]=h)}}(),this.FetchByKeysResults=function(){return function t(n,r,s){i(this,t),this._parent=n,this.fetchParameters=r,this.results=s,this[e._FETCHPARAMETERS]=r,this[e._RESULTS]=s}}(),this.ContainsKeysResults=function(){return function t(n,r,s){i(this,t),this._parent=n,this.containsParameters=r,this.results=s,this[e._CONTAINSPARAMETERS]=r,this[e._RESULTS]=s}}(),this.FetchByOffsetResults=function(){return function t(n,r,s,a){i(this,t),this._parent=n,this.fetchParameters=r,this.results=s,this.done=a,this[e._FETCHPARAMETERS]=r,this[e._RESULTS]=s,this[e._DONE]=a}}(),this[e._FROM]=null==this.options?null:this.options[e._FROM],this[e._OFFSET]=null==this.options?0:this.options[e._OFFSET]>0?this.options[e._OFFSET]:0,this[e._SORTCRITERIA]=null==this.options?null:this.options[e._SORTCRITERIA],this[e._DATAMAPPING]=null==this.options?null:this.options[e._DATAMAPPING],this[e._FETCHATTRIBUTES]=null==this.options?null:this.options[e._FETCHATTRIBUTES],this[e._FILTERCRITERION]=null==this.options?null:this.options[e._FILTERCRITERION],this._addEventListeners(t),t.getCapability&&!t.getCapability("filter")&&(this._noFilterSupport=!0)}return s(e,[{key:"containsKeys",value:function(t){var n=this;return this.dataProvider[e._CONTAINSKEYS]?this.dataProvider[e._CONTAINSKEYS](t):this.fetchByKeys(t).then(function(i){var r=new Set;return t[e._KEYS].forEach(function(t){null!=i[e._RESULTS].get(t)&&r.add(t)}),Promise.resolve(new n.ContainsKeysResults(n,t,r))})}},{key:"fetchByKeys",value:function(t){var n=this,i=null!=t?t[e._KEYS]:null,r=null!=t?t[e._FETCHATTRIBUTES]:null;null==r&&(r=this[e._FETCHATTRIBUTES]);var s=new n.FetchByKeysParameters(n,i,t,r);if(this.dataProvider[e._FETCHBYKEYS])return this.dataProvider[e._FETCHBYKEYS](s).then(function(t){var i=t[e._RESULTS],r=new Map;return i.forEach(function(t,e){var i=n._getMappedItems([t]);r.set(e,i[0])}),new n.FetchByKeysResults(n,s,r)});var a=new this.FetchListParameters(this,null,e._DEFAULT_SIZE,null,null,r),u=new Map,l=this.dataProvider[e._FETCHFIRST](a)[Symbol.asyncIterator]();return this._fetchNextSet(t,l,u).then(function(t){var e=new Map;return t.forEach(function(t,i){var r=n._getMappedItems([t]);e.set(i,r[0])}),new n.FetchByKeysResults(n,s,e)})}},{key:"fetchByOffset",value:function(t){var n=this,i=null!=t?t[e._OFFSET]:null,r=null!=t?t[e._SIZE]:null,s=null!=t?t[e._FETCHATTRIBUTES]:null;null==s&&(s=this[e._FETCHATTRIBUTES]);var a=null!=t?t[e._SORTCRITERIA]:null;null==a&&(a=this[e._SORTCRITERIA]);var u=this._getMappedSortCriteria(a),l=null!=t?t[e._FILTERCRITERION]:null,h=this._getMappedFilterCriterion(l),_=new n.FetchByOffsetParameters(n,i,t,r,u,h,s);return this.dataProvider[e._FETCHBYOFFSET](_).then(function(t){var i=t[e._RESULTS],r=t[e._DONE],s=new Array;return i.forEach(function(t){var e=n._getMappedItems([t]);s.push(e[0])}),new n.FetchByOffsetResults(n,_,s,r)})}},{key:"fetchFirst",value:function(t){var n={};n[e._ITEMS]=[],n[e._DONE]=!1,n[e._STARTINDEX]=0;var i=null!=t?t[e._SIZE]:null,r=null!=t?t[e._SORTCRITERIA]:null;null==r&&(r=this[e._SORTCRITERIA]);var s=this._getMappedSortCriteria(r),a=null!=t?t[e._FILTERCRITERION]:null;null==a&&(a=this[e._FILTERCRITERION]);var u=this._getMappedFilterCriterion(a),l=null!=t?t[e._FETCHATTRIBUTES]:null;null==l&&(l=this[e._FETCHATTRIBUTES]);var h=this;if(null==h[e._FROM]&&h[e._OFFSET]>0){var _=h[e._OFFSET];return new this.AsyncIterable(this,new this.AsyncIterator(this,function(t){return function(){var n=new h.FetchByOffsetParameters(h,_,null,i,s,u,l);return h.dataProvider[e._FETCHBYOFFSET](n).then(function(n){var r=n.results;_+=r.length;var s=h._getMappedItems(r);h._cacheResult(t,s),t[e._DONE]=n[e._DONE];var a=s.map(function(t){return t[e._DATA]}),u=s.map(function(t){return t[e._METADATA]}),l=n[e._FETCHPARAMETERS],E=null!=l?l[e._SORTCRITERIA]:null,T=null!=l?l[e._FILTERCRITERION]:null,o=h._getUnmappedSortCriteria(E),A=h._getUnmappedFilterCriterion(T),c=new h.FetchByOffsetParameters(h,h[e._OFFSET],null,i,o,A);return t[e._DONE]?Promise.resolve(new h.AsyncIteratorReturnResult(h,new h.FetchListResult(h,c,a,u))):Promise.resolve(new h.AsyncIteratorYieldResult(h,new h.FetchListResult(h,c,a,u)))})}}(n),t))}var E=new this.FetchListParameters(this,t,i,s,u,l),T=this.dataProvider[e._FETCHFIRST](E)[Symbol.asyncIterator]();return new this.AsyncIterable(this,new this.AsyncIterator(this,function(n,i){return function(){return i.next().then(function(r){var s=r[e._VALUE][e._DATA],a=r[e._VALUE][e._METADATA],l=s.map(function(t,e){return new h.Item(h,a[e],s[e])});h._noFilterSupport&&h._filterResult(u,l);var _=h._getMappedItems(l);h._cacheResult(n,_),n[e._DONE]=r[e._DONE];var E=null!=t?t[e._SIZE]:null,T=(null!=t&&t[e._OFFSET],r[e._VALUE][e._FETCHPARAMETERS]),o=null!=T?T[e._SORTCRITERIA]:null,A=null!=T?T[e._FILTERCRITERION]:null,c=h._getUnmappedSortCriteria(o),f=h._getUnmappedFilterCriterion(A),R=new h.FetchListParameters(h,t,E,c,f);return h._fetchUntilKey(R,h[e._FROM],n,i).then(function(){return h._fetchUntilOffset(R,h[e._OFFSET]+n[e._STARTINDEX],s.length,n,i)})})}}(n,T),t))}},{key:"getCapability",value:function(t){return this.dataProvider.getCapability(t)}},{key:"getTotalSize",value:function(){return this.dataProvider.getTotalSize()}},{key:"isEmpty",value:function(){return this.dataProvider.isEmpty()}},{key:"_fetchNextSet",value:function(n,i,r){var s=this;return i.next().then(function(a){var u=a[e._VALUE],l=u[e._DATA],h=u[e._METADATA],_=h.map(function(t){return t[e._KEY]}),E=!0;return n[e._KEYS].forEach(function(e){r.has(e)||_.map(function(n,i){t.Object.compareValues(n,e)&&r.set(e,new s.Item(s,h[i],l[i]))}),r.has(e)||(E=!1)}),E||a[e._DONE]?r:s._fetchNextSet(n,i,r)})}},{key:"_fetchUntilKey",value:function(n,i,r,s){var a=this;if(null!=i){var u=r[e._ITEMS].filter(function(n){if(t.KeyUtils.equals(n[e._METADATA][e._KEY],i))return!0});if(u.length>0){var l=r[e._ITEMS].indexOf(u[0]);r[e._ITEMS]=r[e._ITEMS].slice(l,r[e._ITEMS].length)}else{if(!r[e._DONE])return s.next().then(function(t){var n=t[e._VALUE][e._DATA],i=t[e._VALUE][e._METADATA],u=n.map(function(t,e){return new a.Item(a,i[e],n[e])}),l=a._getMappedItems(u);return a._cacheResult(r,l),r[e._DONE]=t[e._DONE],a._fetchUntilKey(t[e._FETCHPARAMETERS],l[e._KEYS],r,s)});r[e._ITEMS]=[]}}return Promise.resolve(null)}},{key:"_fetchUntilOffset",value:function(t,n,i,r,s){var a=this,u=null!=t&&t[e._SIZE]>0?t[e._SIZE]:i;n=n>0?n:0;var l=r[e._ITEMS].slice(n,n+u);if(this._noFilterSupport){var h=this._getMappedFilterCriterion(t[e._FILTERCRITERION]);this._filterResult(h,l)}if(l.length<u){if(r[e._DONE]){r[e._STARTINDEX]=r[e._STARTINDEX]+l.length;var _=l.map(function(t){return t[e._DATA]}),E=l.map(function(t){return t[e._METADATA]});return Promise.resolve(new a.AsyncIteratorReturnResult(a,new a.FetchListResult(a,t,_,E)))}return s.next().then(function(i){var u=i[e._VALUE][e._DATA],l=i[e._VALUE][e._METADATA],h=u.map(function(t,e){return new a.Item(a,l[e],u[e])});if(a._noFilterSupport){var _=a._getMappedFilterCriterion(t[e._FILTERCRITERION]);a._filterResult(_,h)}var E=a._getMappedItems(h);return a._cacheResult(r,E),r[e._DONE]=i[e._DONE],a._fetchUntilOffset(i[e._VALUE][e._FETCHPARAMETERS],n,u.length,r,s)})}r[e._STARTINDEX]=r[e._STARTINDEX]+l.length;var T=l.map(function(t){return t[e._DATA]}),o=l.map(function(t){return t[e._METADATA]});return r[e._DONE]?Promise.resolve(new a.AsyncIteratorReturnResult(a,new a.FetchListResult(a,t,T,o))):Promise.resolve(new a.AsyncIteratorYieldResult(a,new a.FetchListResult(a,t,T,o)))}},{key:"_cacheResult",value:function(t,n){n.map(function(n){t[e._ITEMS].push(n)})}},{key:"_filterResult",value:function(t,i){if(t){t.filter||(t=n.FilterFactory.getFilter({filterDef:t}));for(var r=i.length-1;r>=0;)t.filter(i[r][e._DATA])||i.splice(r,1),r--}}},{key:"_getMappedItems",value:function(t){var n=this;if(null!=this[e._DATAMAPPING]){var i=this[e._DATAMAPPING][e._MAPFIELDS];if(null!=i&&null!=t&&t.length>0){new Array;return t.map(function(t){return i.bind(n)(t)})}}return t}},{key:"_getMappedFilterCriterion",value:function(t){if(null!=this[e._DATAMAPPING]){var n=this[e._DATAMAPPING][e._MAPFILTERCRITERION];if(null!=n&&null!=t)return n(t)}return t}},{key:"_getMappedSortCriteria",value:function(t){if(null!=this[e._DATAMAPPING]){var n=this[e._DATAMAPPING][e._MAPSORTCRITERIA];if(null!=n&&null!=t&&t.length>0)return n(t)}return t}},{key:"_getUnmappedSortCriteria",value:function(t){if(null!=this[e._DATAMAPPING]){var n=this[e._DATAMAPPING][e._UNMAPSORTCRITERIA];if(null!=n&&null!=t&&t.length>0)return n(t)}return t}},{key:"_getUnmappedFilterCriterion",value:function(t){if(null!=this[e._DATAMAPPING]){var n=this[e._DATAMAPPING][e._UNMAPFILTERCRITERION];if(null!=n&&null!=t)return n(t)}return t}},{key:"_addEventListeners",value:function(t){var n=this;t[e._ADDEVENTLISTENER](e._REFRESH,function(t){n.dispatchEvent(t)}),t[e._ADDEVENTLISTENER](e._MUTATE,function(t){n.dispatchEvent(t)})}}]),e}();
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
return a._KEY="key",a._KEYS="keys",a._DATA="data",a._STARTINDEX="startIndex",a._SORT="sort",a._SORTCRITERIA="sortCriteria",a._FILTERCRITERION="filterCriterion",a._METADATA="metadata",a._ITEMS="items",a._FROM="from",a._OFFSET="offset",a._REFRESH="refresh",a._MUTATE="mutate",a._SIZE="size",a._FETCHPARAMETERS="fetchParameters",a._VALUE="value",a._DONE="done",a._DATAMAPPING="dataMapping",a._MAPFIELDS="mapFields",a._MAPSORTCRITERIA="mapSortCriteria",a._MAPFILTERCRITERION="mapFilterCriterion",a._UNMAPSORTCRITERIA="unmapSortCriteria",a._UNMAPFILTERCRITERION="unmapFilterCriterion",a._RESULTS="results",a._CONTAINSPARAMETERS="containsParameters",a._DEFAULT_SIZE=25,a._CONTAINSKEYS="containsKeys",a._FETCHBYKEYS="fetchByKeys",a._FETCHBYOFFSET="fetchByOffset",a._FETCHFIRST="fetchFirst",a._ADDEVENTLISTENER="addEventListener",a._FETCHATTRIBUTES="attributes",t.ListDataProviderView=a,t.ListDataProviderView=a,t.EventTargetMixin.applyMixin(a),a});