/**
 * Created by Administrator on 2019/1/29 0029.
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Qs=e()}}(function(){return function i(a,c,l){function s(r,e){if(!c[r]){if(!a[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(f)return f(r,!0);var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}var n=c[r]={exports:{}};a[r][0].call(n.exports,function(e){return s(a[r][1][e]||e)},n,n.exports,i,a,c,l)}return c[r].exports}for(var f="function"==typeof require&&require,e=0;e<l.length;e++)s(l[e]);return s}({1:[function(e,r,t){"use strict";var o=String.prototype.replace,n=/%20/g;r.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},{}],2:[function(e,r,t){"use strict";var o=e("./stringify"),n=e("./parse"),i=e("./formats");r.exports={formats:i,parse:n,stringify:o}},{"./formats":1,"./parse":3,"./stringify":4}],3:[function(e,r,t){"use strict";var y=e("./utils"),h=Object.prototype.hasOwnProperty,m={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,decoder:y.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e,r,t){if(e){var o=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/g,i=/(\[[^[\]]*])/.exec(o),a=i?o.slice(0,i.index):o,c=[];if(a){if(!t.plainObjects&&h.call(Object.prototype,a)&&!t.allowPrototypes)return;c.push(a)}for(var l=0;null!==(i=n.exec(o))&&l<t.depth;){if(l+=1,!t.plainObjects&&h.call(Object.prototype,i[1].slice(1,-1))&&!t.allowPrototypes)return;c.push(i[1])}return i&&c.push("["+o.slice(i.index)+"]"),function(e,r,t){for(var o=r,n=e.length-1;0<=n;--n){var i,a=e[n];if("[]"===a&&t.parseArrays)i=[].concat(o);else{i=t.plainObjects?Object.create(null):{};var c="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,l=parseInt(c,10);t.parseArrays||""!==c?!isNaN(l)&&a!==c&&String(l)===c&&0<=l&&t.parseArrays&&l<=t.arrayLimit?(i=[])[l]=o:i[c]=o:i={0:o}}o=i}return o}(c,r,t)}};r.exports=function(e,r){var t=r?y.assign({},r):{};if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(t.ignoreQueryPrefix=!0===t.ignoreQueryPrefix,t.delimiter="string"==typeof t.delimiter||y.isRegExp(t.delimiter)?t.delimiter:m.delimiter,t.depth="number"==typeof t.depth?t.depth:m.depth,t.arrayLimit="number"==typeof t.arrayLimit?t.arrayLimit:m.arrayLimit,t.parseArrays=!1!==t.parseArrays,t.decoder="function"==typeof t.decoder?t.decoder:m.decoder,t.allowDots=void 0===t.allowDots?m.allowDots:!!t.allowDots,t.plainObjects="boolean"==typeof t.plainObjects?t.plainObjects:m.plainObjects,t.allowPrototypes="boolean"==typeof t.allowPrototypes?t.allowPrototypes:m.allowPrototypes,t.parameterLimit="number"==typeof t.parameterLimit?t.parameterLimit:m.parameterLimit,t.strictNullHandling="boolean"==typeof t.strictNullHandling?t.strictNullHandling:m.strictNullHandling,void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");if(void 0===t.charset&&(t.charset=m.charset),""===e||null==e)return t.plainObjects?Object.create(null):{};for(var o="string"==typeof e?function(e,r){var t,o={},n=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=r.parameterLimit===1/0?void 0:r.parameterLimit,a=n.split(r.delimiter,i),c=-1,l=r.charset;if(r.charsetSentinel)for(t=0;t<a.length;++t)0===a[t].indexOf("utf8=")&&("utf8=%E2%9C%93"===a[t]?l="utf-8":"utf8=%26%2310003%3B"===a[t]&&(l="iso-8859-1"),c=t,t=a.length);for(t=0;t<a.length;++t)if(t!==c){var s,f,u=a[t],p=u.indexOf("]="),d=-1===p?u.indexOf("="):p+1;(f=-1===d?(s=r.decoder(u,m.decoder,l),r.strictNullHandling?null:""):(s=r.decoder(u.slice(0,d),m.decoder,l),r.decoder(u.slice(d+1),m.decoder,l)))&&r.interpretNumericEntities&&"iso-8859-1"===l&&(f=f.replace(/&#(\d+);/g,function(e,r){return String.fromCharCode(parseInt(r,10))})),h.call(o,s)?o[s]=y.combine(o[s],f):o[s]=f}return o}(e,t):e,n=t.plainObjects?Object.create(null):{},i=Object.keys(o),a=0;a<i.length;++a){var c=i[a],l=s(c,o[c],t);n=y.merge(n,l,t)}return y.compact(n)}},{"./utils":5}],4:[function(e,r,t){"use strict";var x=e("./utils"),N=e("./formats"),D={brackets:function(e){return e+"[]"},indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},o=Array.isArray,n=Array.prototype.push,P=function(e,r){n.apply(e,o(r)?r:[r])},i=Date.prototype.toISOString,C={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:x.encode,encodeValuesOnly:!1,indices:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},E=function e(r,t,o,n,i,a,c,l,s,f,u,p,d){var y=r;if("function"==typeof c?y=c(t,y):y instanceof Date&&(y=f(y)),null===y){if(n)return a&&!p?a(t,C.encoder,d):t;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||x.isBuffer(y))return a?[u(p?t:a(t,C.encoder,d))+"="+u(a(y,C.encoder,d))]:[u(t)+"="+u(String(y))];var h,m=[];if(void 0===y)return m;if(Array.isArray(c))h=c;else{var b=Object.keys(y);h=l?b.sort(l):b}for(var g=0;g<h.length;++g){var v=h[g];i&&null===y[v]||(Array.isArray(y)?P(m,e(y[v],o(t,v),o,n,i,a,c,l,s,f,u,p,d)):P(m,e(y[v],t+(s?"."+v:"["+v+"]"),o,n,i,a,c,l,s,f,u,p,d)))}return m};r.exports=function(e,r){var t=e,o=r?x.assign({},r):{};if(null!==o.encoder&&void 0!==o.encoder&&"function"!=typeof o.encoder)throw new TypeError("Encoder has to be a function.");var n=void 0===o.delimiter?C.delimiter:o.delimiter,i="boolean"==typeof o.strictNullHandling?o.strictNullHandling:C.strictNullHandling,a="boolean"==typeof o.skipNulls?o.skipNulls:C.skipNulls,c="boolean"==typeof o.encode?o.encode:C.encode,l="function"==typeof o.encoder?o.encoder:C.encoder,s="function"==typeof o.sort?o.sort:null,f=void 0===o.allowDots?C.allowDots:!!o.allowDots,u="function"==typeof o.serializeDate?o.serializeDate:C.serializeDate,p="boolean"==typeof o.encodeValuesOnly?o.encodeValuesOnly:C.encodeValuesOnly,d=o.charset||C.charset;if(void 0!==o.charset&&"utf-8"!==o.charset&&"iso-8859-1"!==o.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");if(void 0===o.format)o.format=N.default;else if(!Object.prototype.hasOwnProperty.call(N.formatters,o.format))throw new TypeError("Unknown format option provided.");var y,h,m=N.formatters[o.format];"function"==typeof o.filter?t=(h=o.filter)("",t):Array.isArray(o.filter)&&(y=h=o.filter);var b,g=[];if("object"!=typeof t||null===t)return"";b=o.arrayFormat in D?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var v=D[b];y||(y=Object.keys(t)),s&&y.sort(s);for(var O=0;O<y.length;++O){var j=y[O];a&&null===t[j]||P(g,E(t[j],j,v,i,a,c?l:null,h,s,f,u,m,p,d))}var w=g.join(n),A=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&(A+="iso-8859-1"===d?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),0<w.length?A+w:""}},{"./formats":1,"./utils":5}],5:[function(e,r,t){"use strict";var a=Object.prototype.hasOwnProperty,c=function(){for(var e=[],r=0;r<256;++r)e.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return e}(),l=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(t[o]=e[o]);return t};r.exports={arrayToObject:l,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},combine:function(e,r){return[].concat(e,r)},compact:function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],o=0;o<r.length;++o)for(var n=r[o],i=n.obj[n.prop],a=Object.keys(i),c=0;c<a.length;++c){var l=a[c],s=i[l];"object"==typeof s&&null!==s&&-1===t.indexOf(s)&&(r.push({obj:i,prop:l}),t.push(s))}return function(e){for(;1<e.length;){var r=e.pop(),t=r.obj[r.prop];if(Array.isArray(t)){for(var o=[],n=0;n<t.length;++n)void 0!==t[n]&&o.push(t[n]);r.obj[r.prop]=o}}}(r),e},decode:function(e,r,t){var o=e.replace(/\+/g," ");if("iso-8859-1"===t)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,r,t){if(0===e.length)return e;var o="string"==typeof e?e:String(e);if("iso-8859-1"===t)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var n="",i=0;i<o.length;++i){var a=o.charCodeAt(i);45===a||46===a||95===a||126===a||48<=a&&a<=57||65<=a&&a<=90||97<=a&&a<=122?n+=o.charAt(i):a<128?n+=c[a]:a<2048?n+=c[192|a>>6]+c[128|63&a]:a<55296||57344<=a?n+=c[224|a>>12]+c[128|a>>6&63]+c[128|63&a]:(i+=1,a=65536+((1023&a)<<10|1023&o.charCodeAt(i)),n+=c[240|a>>18]+c[128|a>>12&63]+c[128|a>>6&63]+c[128|63&a])}return n},isBuffer:function(e){return null!=e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function o(t,n,i){if(!n)return t;if("object"!=typeof n){if(Array.isArray(t))t.push(n);else{if("object"!=typeof t)return[t,n];(i&&(i.plainObjects||i.allowPrototypes)||!a.call(Object.prototype,n))&&(t[n]=!0)}return t}if("object"!=typeof t)return[t].concat(n);var e=t;return Array.isArray(t)&&!Array.isArray(n)&&(e=l(t,i)),Array.isArray(t)&&Array.isArray(n)?(n.forEach(function(e,r){a.call(t,r)?t[r]&&"object"==typeof t[r]?t[r]=o(t[r],e,i):t.push(e):t[r]=e}),t):Object.keys(n).reduce(function(e,r){var t=n[r];return a.call(e,r)?e[r]=o(e[r],t,i):e[r]=t,e},e)}}},{}]},{},[2])(2)});