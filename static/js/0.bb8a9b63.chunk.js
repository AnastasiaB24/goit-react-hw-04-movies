(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{56:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(s){o=!0,i=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},57:function(t,e,r){"use strict";r.d(e,"e",(function(){return f})),r.d(e,"a",(function(){return h})),r.d(e,"c",(function(){return A})),r.d(e,"d",(function(){return p})),r.d(e,"b",(function(){return g}));var n=r(58),o=r.n(n);function i(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,s,"next",t)}function s(t){i(a,n,o,c,s,"throw",t)}c(void 0)}))}}var c="ffee5dec23dd816beac899d74b9c184f",s="https://api.themoviedb.org/3";function u(){return l.apply(this,arguments)}function l(){return(l=a(o.a.mark((function t(){var e,r,n,i=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",r=i.length>1&&void 0!==i[1]?i[1]:{},t.next=4,fetch(e,r);case 4:if(!(n=t.sent).ok){t.next=11;break}return t.next=8,n.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return u("".concat(s,"/trending/all/day?api_key=").concat(c,"&language=en-US"))}function h(t){return u("".concat(s,"/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"))}function A(t){return u("".concat(s,"/movie/").concat(t,"?api_key=").concat(c,"&language=en-US"))}function p(t){return u("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))}function g(t){return u("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US"))}},58:function(t,e,r){t.exports=r(59)},59:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(Q){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new I(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===A)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return D()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=B(a,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=A;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(Q){return{type:"throw",arg:Q}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",A="executing",p="completed",g={};function d(){}function y(){}function v(){}var b={};b[i]=function(){return this};var m=Object.getPrototypeOf,j=m&&m(m(L([])));j&&j!==r&&n.call(j,i)&&(b=j);var x=v.prototype=d.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function B(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,B(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:D}}function D(){return{value:e,done:!0}}return y.prototype=x.constructor=v,v.constructor=y,y.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},60:function(t,e,r){t.exports={movieDetails:"MovieDetailsPage_movieDetails__2sNAa",movieImage:"MovieDetailsPage_movieImage__1u21a",movieInformation:"MovieDetailsPage_movieInformation__1qx-F",imagesCast:"MovieDetailsPage_imagesCast__22zzn"}},61:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return i}))},63:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return g}));var n=r(61),o=r(56),i=r(0),a=r(3),c=r(9),s=r(57),u=r(60),l=r.n(u),f=r(17),h=r(1),A=Object(i.lazy)((function(){return r.e(7).then(r.bind(null,66))})),p=Object(i.lazy)((function(){return r.e(6).then(r.bind(null,67))}));function g(){var t=Object(i.useState)(null),e=Object(o.a)(t,2),r=e[0],u=e[1],g=Object(a.i)().movieId,d=Object(a.j)(),y=d.url,v=d.path,b=Object(a.g)(),m=Object(a.h)();Object(i.useEffect)((function(){s.c(g).then((function(t){u(t)}))}),[g]);return Object(h.jsxs)(h.Fragment,{children:[r&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{type:"button",onClick:function(){b.push(m.state.from)},children:"\u21d0 Go back"}),Object(h.jsxs)("div",{className:l.a.movieDetails,children:[Object(h.jsx)("img",{className:l.a.movieImage,src:r.poster_path?"https://image.tmdb.org/t/p/w185".concat(r.poster_path):"data:image/jpeg;base64,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",alt:r.title}),Object(h.jsxs)("div",{className:l.a.movieDescription,children:[Object(h.jsx)("h1",{className:l.a.title,children:r.title}),Object(h.jsxs)("p",{className:l.a.movieDescriptionText,children:["User score: ","".concat(Math.round(100*r.vote_average/9.5),"%")]}),Object(h.jsx)("h2",{className:l.a.movieDescriptionTitle,children:"Overview"}),Object(h.jsx)("p",{className:l.a.movieDescriptionText,children:r.overview}),Object(h.jsx)("h3",{className:l.a.movieSmallTitle,children:"Genres"}),Object(h.jsx)("p",{className:l.a.movieDescriptionText,children:r.genres.map((function(t){return t.name})).join(", ")})]})]}),Object(h.jsxs)("div",{className:l.a.movieInformation,children:[Object(h.jsx)("p",{className:l.a.movieDescriptionText,children:"Additional information"}),Object(h.jsxs)("ul",{className:"informationList",children:[Object(h.jsx)("li",{className:"listItem",children:Object(h.jsx)(c.b,{to:Object(n.a)(Object(n.a)({},m),{},{pathname:"".concat(y,"/cast")}),children:"Cast"})}),Object(h.jsx)("li",{className:"listItem",children:Object(h.jsx)(c.b,{to:Object(n.a)(Object(n.a)({},m),{},{pathname:"".concat(y,"/reviews")}),children:"Reviews"})})]})]})]}),Object(h.jsxs)(i.Suspense,{fallback:Object(h.jsx)(f.a,{}),children:[Object(h.jsx)(a.b,{path:"".concat(v,"/reviews"),children:Object(h.jsx)(A,{})}),Object(h.jsx)(a.b,{path:"".concat(v,"/cast"),children:Object(h.jsx)(p,{})})]})]})}}}]);
//# sourceMappingURL=0.bb8a9b63.chunk.js.map