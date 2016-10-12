/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */

define("videoResult",["knockout"],function(e){function t(e){var t=new Date(e);return t.toLocaleDateString()}function n(e){return"https://www.youtube.com/watch?v="+e}function r(e){return"https://www.youtube.com/channel/"+e}var s=function(s){this.videoLink=e.observable(n(s.id.videoId)),this.channelLink=e.observable(r(s.snippet.channelId)),this.channelTitle=e.observable(s.snippet.channelTitle),this.description=e.observable(s.snippet.description),this.dateInfo=e.observable(new Date(s.snippet.publishedAt)),this.publishDate=e.observable(t(s.snippet.publishedAt)),this.smallThumbnail=e.observable(s.snippet.thumbnails["default"].url),this.mediumThumbnail=e.observable(s.snippet.thumbnails.medium.url),this.title=e.observable(s.snippet.title)};return s}),define("youtube",["jquery","videoResult"],function(e,t){function n(e){return"https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyA8B9NC0lW-vqhQzWmVp8XwEMFbyg01blI&"+e}function r(e){e.sort(function(e,t){var n=e.snippet.title.toUpperCase(),r=t.snippet.title.toUpperCase();return r>n?-1:n>r?1:0})}function s(e){r(e);var n=[];return e.forEach(function(e){n.push(new t(e))}),n}function i(e){return{nextPageToken:e.nextPageToken||null,prevPageToken:e.prevPageToken||null,totalResults:e.pageInfo.totalResults||null,resultsPerPage:e.pageInfo.resultsPerPage||null}}function o(e){var t=s(e.items),n=i(e);return{videoResults:t,metaResults:n}}var a={};return a.requestVideos=function(t,r,s,i,a){var u=n(t),l={success:function(e){var t=o(e);r(t.videoResults),s(t.metaResults),i(r()[0])},error:function(){a("Sorry, there was an error in loading your results")},timeout:8e3};e.ajax(u,l)},a}),define("app",["jquery","knockout","youtube"],function(e,t,n){var r=function(){var e=this;e.searchInput=t.observable(),e.searchPageToken=t.observable(),e.videoResults=t.observableArray(),e.metaResults=t.observable(),e.currentVideoSelection=t.observable(),e.errorMessage=t.observable(),e.mobileMenu=t.observable(!1),e.toggleMobileMenu=function(){e.mobileMenu()?e.mobileMenu(!1):e.mobileMenu(!0)},e.performSearch=t.computed(function(){var t,r=e.searchInput(),s=e.searchPageToken(),i=e.videoResults,o=e.metaResults,a=e.currentVideoSelection,u=e.errorMessage;r&&s?(t="q="+r+"&pageToken="+s,e.searchPageToken(null),n.requestVideos(t,i,o,a,u)):r&&(t="q="+r,n.requestVideos(t,i,o,a,u))})};return r}),requirejs.config({baseUrl:"scripts",paths:{jquery:["https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min"],knockout:["https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min"],app:"app",videoResult:"videoResult",searchForm:"kocomponents/search-form",resultsList:"kocomponents/results-list",metaResults:"kocomponents/meta-results",currentVideoSelection:"kocomponents/current-video-selection",youtube:"api/youtube"}}),require(["knockout","app"],function(e,t){e.components.register("search-form",{require:"searchForm"}),e.components.register("results-list",{require:"resultsList"}),e.components.register("meta-results",{require:"metaResults"}),e.components.register("current-video-selection",{require:"currentVideoSelection"}),e.applyBindings(t)}),define("init",function(){}),define("text",["module"],function(e){"use strict";function t(e,t){return void 0===e||""===e?t:e}function n(e,n,r,s){if(n===s)return!0;if(e===r){if("http"===e)return t(n,"80")===t(s,"80");if("https"===e)return t(n,"443")===t(s,"443")}return!1}var r,s,i,o,a,u=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],l=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,c=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,p="undefined"!=typeof location&&location.href,d=p&&location.protocol&&location.protocol.replace(/\:/,""),f=p&&location.hostname,m=p&&(location.port||void 0),h={},v=e.config&&e.config()||{};return r={version:"2.0.15",strip:function(e){if(e){e=e.replace(l,"");var t=e.match(c);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:v.createXhr||function(){var e,t,n;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;3>t;t+=1){n=u[t];try{e=new ActiveXObject(n)}catch(r){}if(e){u=[n];break}}return e},parseName:function(e){var t,n,r,s=!1,i=e.lastIndexOf("."),o=0===e.indexOf("./")||0===e.indexOf("../");return-1!==i&&(!o||i>1)?(t=e.substring(0,i),n=e.substring(i+1)):t=e,r=n||t,i=r.indexOf("!"),-1!==i&&(s="strip"===r.substring(i+1),r=r.substring(0,i),n?n=r:t=r),{moduleName:t,ext:n,strip:s}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,t,s,i){var o,a,u,l=r.xdRegExp.exec(e);return l?(o=l[2],a=l[3],a=a.split(":"),u=a[1],a=a[0],(!o||o===t)&&(!a||a.toLowerCase()===s.toLowerCase())&&(!u&&!a||n(o,u,t,i))):!0},finishLoad:function(e,t,n,s){n=t?r.strip(n):n,v.isBuild&&(h[e]=n),s(n)},load:function(e,t,n,s){if(s&&s.isBuild&&!s.inlineText)return void n();v.isBuild=s&&s.isBuild;var i=r.parseName(e),o=i.moduleName+(i.ext?"."+i.ext:""),a=t.toUrl(o),u=v.useXhr||r.useXhr;return 0===a.indexOf("empty:")?void n():void(!p||u(a,d,f,m)?r.get(a,function(t){r.finishLoad(e,i.strip,t,n)},function(e){n.error&&n.error(e)}):t([o],function(e){r.finishLoad(i.moduleName+"."+i.ext,i.strip,e,n)}))},write:function(e,t,n,s){if(h.hasOwnProperty(t)){var i=r.jsEscape(h[t]);n.asModule(e+"!"+t,"define(function () { return '"+i+"';});\n")}},writeFile:function(e,t,n,s,i){var o=r.parseName(t),a=o.ext?"."+o.ext:"",u=o.moduleName+a,l=n.toUrl(o.moduleName+a)+".js";r.load(u,n,function(t){var n=function(e){return s(l,e)};n.asModule=function(e,t){return s.asModule(e,l,t)},r.write(e,u,n,i)},i)}},"node"===v.env||!v.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]&&!process.versions["atom-shell"]?(s=require.nodeRequire("fs"),r.get=function(e,t,n){try{var r=s.readFileSync(e,"utf8");"\ufeff"===r[0]&&(r=r.substring(1)),t(r)}catch(i){n&&n(i)}}):"xhr"===v.env||!v.env&&r.createXhr()?r.get=function(e,t,n,s){var i,o=r.createXhr();if(o.open("GET",e,!0),s)for(i in s)s.hasOwnProperty(i)&&o.setRequestHeader(i.toLowerCase(),s[i]);v.onXhr&&v.onXhr(o,e),o.onreadystatechange=function(r){var s,i;4===o.readyState&&(s=o.status||0,s>399&&600>s?(i=new Error(e+" HTTP status: "+s),i.xhr=o,n&&n(i)):t(o.responseText),v.onXhrComplete&&v.onXhrComplete(o,e))},o.send(null)}:"rhino"===v.env||!v.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?r.get=function(e,t){var n,r,s="utf-8",i=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),a=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(i),s)),u="";try{for(n=new java.lang.StringBuffer,r=a.readLine(),r&&r.length()&&65279===r.charAt(0)&&(r=r.substring(1)),null!==r&&n.append(r);null!==(r=a.readLine());)n.append(o),n.append(r);u=String(n.toString())}finally{a.close()}t(u)}:("xpconnect"===v.env||!v.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(i=Components.classes,o=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),a="@mozilla.org/windows-registry-key;1"in i,r.get=function(e,t){var n,r,s,u={};a&&(e=e.replace(/\//g,"\\")),s=new FileUtils.File(e);try{n=i["@mozilla.org/network/file-input-stream;1"].createInstance(o.nsIFileInputStream),n.init(s,1,0,!1),r=i["@mozilla.org/intl/converter-input-stream;1"].createInstance(o.nsIConverterInputStream),r.init(n,"utf-8",n.available(),o.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),r.readString(n.available(),u),r.close(),n.close(),t(u.value)}catch(l){throw new Error((s&&s.path||"")+": "+l)}}),r}),define("text!../../kotemplates/searchform.html",[],function(){return'<form class="search-form" data-bind="submit: parseSearch">\n    <input class="search-form__input" type="text" placeholder="Search Youtube" name="query">\n    <button class="search-form__btn" type="submit">Search</button>\n</form>'}),define("searchForm",["text!../../kotemplates/searchform.html"],function(e){var t=function(e){this.searchInput=e.searchInput,this.parseSearch=function(e){this.searchInput(null),e=e.query.value,this.searchInput(e)}};return{viewModel:t,template:e}}),define("text!../../kotemplates/resultslist.html",[],function(){return'<ul class="results-list" data-bind="foreach: videoResults">\n    <li class="results-list__item" data-bind="click: currentVideoSelection">\n        <img class="results-list__item__img" data-bind="attr: { src: smallThumbnail }"><p class="results-list__item__text" data-bind="text: title"></p>\n    </li>\n</ul>\n'}),define("resultsList",["text!../../kotemplates/resultslist.html"],function(e){return{template:e}}),define("text!../../kotemplates/metaresults.html",[],function(){return'<div class="meta-results" data-bind="with: metaResults">\n    <p>\n        <span>Total Results: </span>\n        <span data-bind="text: totalResults"></span>\n    </p>\n    <div>\n        <!-- ko if: prevPageToken -->\n        <button class="meta-results__btn" data-bind="click: function() { $parent.parseSearch(prevPageToken) }">Prev</button>\n        <!-- /ko -->\n        <!-- ko if: nextPageToken -->\n        <button class="meta-results__btn" data-bind="click: function() { $parent.parseSearch(nextPageToken) }">Next</button>\n        <!-- /ko -->\n    </div>\n</div>'}),define("metaResults",["text!../../kotemplates/metaresults.html"],function(e){var t=function(e){this.searchPageToken=e.searchPageToken,this.parseSearch=function(e){this.searchPageToken(e)}};return{viewModel:t,template:e}}),define("text!../../kotemplates/currentVideoSelection.html",[],function(){return'<div class="current-video" data-bind="with: currentVideoSelection">\n    <a data-bind="attr: { href: videoLink }">\n        <h2 class="current-video__heading" data-bind="text: title"></h2>\n        <img class="current-video__medium-thumbnail" data-bind="attr: { src: mediumThumbnail }">\n        <img class="current-video__small-thumbnail" data-bind="attr: { src: smallThumbnail }">\n    </a>\n    <p data-bind="text: description"></p>\n    <p><span>Published </span><span data-bind="text: publishDate"></span></p>\n    <p>\n        <a data-bind="text: channelTitle, attr: { href: channelLink}"></a>\n    </p>\n</div>\n'}),define("currentVideoSelection",["text!../../kotemplates/currentVideoSelection.html"],function(e){return{template:e}});