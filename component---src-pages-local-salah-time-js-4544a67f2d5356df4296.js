(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RJWs:function(t,e,r){r("rGqo"),r("yt8O"),r("a1Th"),r("h7Nl"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("8+KV"),r("hHhE"),r("rE2o"),r("ioFf");var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(t,e,r,n){var o=e&&e.prototype instanceof u?e:u,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return b()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=w(i,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=c(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=l;var s={};function u(){}function h(){}function f(){}var d={};d[o]=function(){return this};var m=Object.getPrototypeOf,p=m&&m(m(S([])));p&&p!==e&&r.call(p,o)&&(d=p);var v=f.prototype=u.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,l){var s=c(t[o],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,l)}),(function(t){n("throw",t,i,l)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,l)}))}l(s.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:b}}function b(){return{value:void 0,done:!0}}return h.prototype=v.constructor=f,f.constructor=h,f[i]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(y.prototype),y.prototype[a]=function(){return this},t.AsyncIterator=y,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new y(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(v),v[i]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"ik+x":function(t,e,r){},kD0k:function(t,e,r){t.exports=r("RJWs")},ls82:function(t,e,r){r("rGqo"),r("yt8O"),r("a1Th"),r("h7Nl"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("8+KV"),r("hHhE"),r("rE2o"),r("ioFf");var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(t,e,r,n){var o=e&&e.prototype instanceof u?e:u,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return b()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=w(i,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=c(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=l;var s={};function u(){}function h(){}function f(){}var d={};d[o]=function(){return this};var m=Object.getPrototypeOf,p=m&&m(m(S([])));p&&p!==e&&r.call(p,o)&&(d=p);var v=f.prototype=u.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t){var e;this._invoke=function(n,o){function a(){return new Promise((function(e,a){!function e(n,o,a,i){var l=c(t[n],t,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,i)}))}i(l.arg)}(n,o,e,a)}))}return e=e?e.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:b}}function b(){return{value:void 0,done:!0}}return h.prototype=v.constructor=f,f.constructor=h,f[i]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(y.prototype),y.prototype[a]=function(){return this},t.AsyncIterator=y,t.async=function(e,r,n,o){var a=new y(l(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(v),v[i]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},zsEO:function(t,e,r){"use strict";r.r(e);r("91GP");var n=r("kD0k"),o=r.n(n),a=(r("ls82"),r("VRzm"),r("Btvt"),r("q1tI")),i=r.n(a),l=r("vrFN"),c=r("HPK8"),s=function(t){var e=t.timings;return i.a.createElement(c.Columns,null,i.a.createElement(c.Column,{className:"is-6 is-offset-3"},i.a.createElement(c.Table,{className:"salahTimeTable"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Imsak"),i.a.createElement("td",null,e.Imsak)),i.a.createElement("tr",null,i.a.createElement("td",null,"Fajr"),i.a.createElement("td",null,e.Fajr)),i.a.createElement("tr",null,i.a.createElement("td",null,"Sunrise"),i.a.createElement("td",null,e.Sunrise)),i.a.createElement("tr",null,i.a.createElement("td",null,"Dhuhr"),i.a.createElement("td",null,e.Dhuhr)),i.a.createElement("tr",null,i.a.createElement("td",null,"Asr"),i.a.createElement("td",null,e.Asr)),i.a.createElement("tr",null,i.a.createElement("td",null,"Sunset"),i.a.createElement("td",null,e.Sunset)),i.a.createElement("tr",null,i.a.createElement("td",null,"Maghrib"),i.a.createElement("td",null,e.Maghrib)),i.a.createElement("tr",null,i.a.createElement("td",null,"Isha"),i.a.createElement("td",null,e.Isha)),i.a.createElement("tr",null,i.a.createElement("td",null,"Midnight"),i.a.createElement("td",null,e.Midnight))))))};s.defaultProps={Imsak:"-",Fajr:"-",Sunrise:"-",Dhuhr:"-",Asr:"-",Sunset:"-",Maghrib:"-",Isha:"-",Midnight:"-"};var u=s,h=r("17x9"),f=r.n(h),d=function(t){var e=t.data,r=t.btnTxt,n=t.stateProps,o=t.onClickHandlerForDropDown,a=t.onClickHandlerForDropDownItem;return i.a.createElement(c.Dropdown,{className:"level-item pushUp",isActive:n.toggleMenu},i.a.createElement(c.DropdownTrigger,null,i.a.createElement(c.Button,{className:"has-text-centered lowerCaseFont",onClick:o,isOutlined:!0,"aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,n.selected||"Select "+r+":"),i.a.createElement(c.Icon,{icon:"angle-down",isSize:"small"}))),i.a.createElement(c.DropdownMenu,null,i.a.createElement(c.DropdownContent,null,e.map((function(t,e){return i.a.createElement(c.DropdownItem,{isActive:t===n.selected,onClick:a,key:e},t)})))))};d.propsTypes={data:f.a.arrayOf(f.a.string).isRequired,btnTxt:f.a.string,stateProps:f.a.object.isRequired,onClickHandlerForDropDown:f.a.func.isRequired,onClickHandlerForDropDownItem:f.a.func.isRequired};var m=d,p=["University of Islamic Sciences, Karachi","Islamic Society of North America","Muslim World League","Shia Ithna-Ansari","Umm Al-Qura University, Makkah","Egyptian General Authority of Survey","Institute of Geophysics, University of Tehran","Gulf Region","Kuwait","Qatar","Majlis Ugama Islam Singapura, Singapore","Union Organization islamic de France","Diyanet İşleri Başkanlığı, Turkey","Spiritual Administration of Muslims of Russia"],v=["Hanafi","Shafi"];r("ik+x");function g(t,e,r,n,o,a,i){try{var l=t[a](i),c=l.value}catch(s){return void r(s)}l.done?e(c):Promise.resolve(c).then(n,o)}function y(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){g(a,n,o,i,l,"next",t)}function l(t){g(a,n,o,i,l,"throw",t)}i(void 0)}))}}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var E=function(t){var e,r;function n(e){var r;(r=t.call(this,e)||this).getUserLocationInPromise=function(){return new Promise((function(t,e){window.navigator.geolocation.getCurrentPosition(t,e,{enableHighAccuracy:!0,timeout:5e3})}))},r.getUserLocation=y(o.a.mark((function t(){var e,n,a,i,l,c,s,u,h;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.getUserLocationInPromise();case 3:e=t.sent,n=window,a=n.localStorage,i=e.coords,l=i.latitude,c=i.longitude,r.setState({userLocation:{lat:l,lng:c}}),a.setItem("cts_latitude",l),a.setItem("cts_longitude",c),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),s=t.t0.code,u=t.t0.msg,h=1===s?"Location is needed to get the local salah time, please try again.":"Sorry, something went wrong, please try again or try again later.",r.setState({error:s+": "+h+". "+u});case 16:case"end":return t.stop()}}),t,null,[[0,11]])}))),r.updateSalahTimes=y(o.a.mark((function t(){var e,n,a,i,l,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=r.state,n=e.userLocation,a=e.method,i=e.school,l=!1,c=Object.assign({},r.state),n.lat){t.next=6;break}return t.next=6,r.getUserLocation();case 6:a.selected||(c.method.selected=2,localStorage.setItem("cts_method",2),l=!0),i.selected||(c.school.selected=0,localStorage.setItem("cts_school",0),l=!0),l?r.setState(Object.assign({},c),(function(){r.fetchSalahTimes()})):r.fetchSalahTimes();case 9:case"end":return t.stop()}}),t)}))),r.fetchSalahTimes=function(){var t=r.state,e=t.userLocation,n=t.method,o=t.school,a=function(t){var e=t.lat,r=t.lng,n=t.method,o=t.school;return"http://api.aladhan.com/v1/timings/"+Date.now()/1e3+"?latitude="+e+"&longitude="+r+"&method="+n+"&school="+o}({lat:e.lat,lng:e.lng,method:n.selected,school:o.selected});fetch(a).then((function(t){return t.json()})).then((function(t){r.setState({fetchResponse:t})})).catch((function(t){r.setState({error:t})}))},r.toggleMenu=function(t){return function(){var e;return r.setState(((e={})[t]={toggleMenu:!r.state[t].toggleMenu},e))}},r.onClickHandler=function(t){return function(e){var n,o=Object.assign({},r.state[t]);o.selected=e.target.innerText,o.toggleMenu=!o.toggleMenu,window.localStorage.setItem("cts_"+t,e.target.innerText),r.setState(((n={})[t]=Object.assign({},o),n))}};var n=null,a=null,i=null,l=null;return"undefined"!=typeof window&&(n=window.localStorage.getItem("cts_latitude")||null,a=window.localStorage.getItem("cts_longitude")||null,i=window.localStorage.getItem("cts_method")||null,l=window.localStorage.getItem("cts_school")||null),r.state={userLocation:{lat:n,lng:a},method:{selected:i,toggleMenu:!1},school:{selected:l,toggleMenu:!1},error:"",fetchResponse:{data:{date:{},timings:{}}}},r.getUserLocationInPromise=r.getUserLocationInPromise.bind(w(r)),r.getUserLocation=r.getUserLocation.bind(w(r)),r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a=n.prototype;return a.componentDidMount=function(){this.getUserLocation()},a.render=function(){var t=this.state,e=t.userLocation,r=t.method,n=t.school,o=t.fetchResponse.data,a=o.timings,s=o.date;return i.a.createElement("div",{id:"localSalahTimeWrapper"},i.a.createElement(l.a,{title:"Local Salah Time",keywords:["salah","salaat","salat","prayer"]}),i.a.createElement(c.Title,{isSize:"2"},"Local Salah Time"),i.a.createElement(c.Section,null,i.a.createElement(c.Columns,{className:"is-vcentered",style:{flexDirection:"row-reverse"}},i.a.createElement(c.Column,{isSize:"1/2",className:"has-text-centered"},i.a.createElement("div",{className:"has-text-centered dateSection level"},i.a.createElement("div",{className:"level-left"},s.readable?s.readable:"Gregorian Date"),i.a.createElement("div",{className:"level-right"},s.hijri?s.hijri.day+" "+s.hijri.month.en+" "+s.hijri.year:"Hijri Date")),i.a.createElement("div",{className:"level userLocation",onClick:this.getUserLocation},e.lat&&e.lat.toFixed&&i.a.createElement("div",{className:"level-item"},"Your location: (lat: "+e.lat.toFixed(3)+", lng: "+e.lng.toFixed(3)+")")||void 0),i.a.createElement("div",{className:"level"},i.a.createElement(c.Title,{isSize:"6",className:"level-item is-hidden-mobile"},"Method:"),i.a.createElement(m,{data:p,btnTxt:"method",stateProps:r,onClickHandlerForDropDown:this.toggleMenu("method"),onClickHandlerForDropDownItem:this.onClickHandler("method")})),i.a.createElement("div",{className:"level"},i.a.createElement(c.Title,{isSize:"6",className:"level-item is-hidden-mobile"},"School:"),i.a.createElement(m,{data:v,btnTxt:"school",stateProps:n,onClickHandlerForDropDown:this.toggleMenu("school"),onClickHandlerForDropDownItem:this.onClickHandler("school")})),i.a.createElement(c.Button,{className:"",onClick:this.fetchSalahTimes},i.a.createElement("span",null,"Get Salaat Times"))),i.a.createElement(c.Column,{isSize:"1/2"},i.a.createElement(u,{timings:a})))))},n}(a.Component);e.default=E}}]);
//# sourceMappingURL=component---src-pages-local-salah-time-js-4544a67f2d5356df4296.js.map