/*!
   JW Player version 8.25.1
   Copyright (c) 2022, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.25.1/notice.txt
*/
"use strict";(self.webpackChunkjwplayer=self.webpackChunkjwplayer||[]).push([[347],{2776:function(e,t,r){r.r(t);var n=r(1776),i=r(7477),a=/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/,s=/^-?\d+$/,u=/\r\n|\n/,o=/^NOTE($|[ \t])/,c=/^[^\sa-zA-Z-]+/,l=/:/,f=/\s/,h=/^\s+/,g=/-->/,d=/^WEBVTT([ \t].*)?$/,p=function(e,t,r){this.window=e,this.state="INITIAL",this.buffer="",this.decoder=t||new b,this.syncCueParsing=r,this.regionList=[],this.maxCueBatch=1e3};function b(){return{decode:function(e){if(!e)return"";if("string"!=typeof e)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}}function v(){this.values=Object.create(null)}v.prototype={set:function(e,t){this.get(e)||""===t||(this.values[e]=t)},get:function(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,r){for(var n=0;n<r.length;++n)if(t===r[n]){this.set(e,t);break}},integer:function(e,t){s.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return(t=parseFloat(t))>=0&&t<=100&&(this.set(e,t),!0)}};var E=new i.Z(0,0,0),T="middle"===E.align?"middle":"center";function m(e,t,r){var n=e;function i(){var t=function(e){function t(e,t,r,n){return 3600*(0|e)+60*(0|t)+(0|r)+(0|n)/1e3}var r=e.match(a);return r?r[3]?t(r[1],r[2],r[3].replace(":",""),r[4]):r[1]>59?t(r[1],r[2],0,r[4]):t(0,r[1],r[2],r[4]):null}(e);if(null===t)throw new Error("Malformed timestamp: "+n);return e=e.replace(c,""),t}function s(){e=e.replace(h,"")}if(s(),t.startTime=i(),s(),"--\x3e"!==e.substr(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): "+n);e=e.substr(3),s(),t.endTime=i(),s(),function(e,t){var n=new v;!function(e,t,r,n){for(var i=n?e.split(n):[e],a=0;a<=i.length;a+=1)if("string"==typeof i[a]){var s=i[a].split(r);2===s.length&&t(s[0],s[1])}}(e,(function(e,t){switch(e){case"region":for(var i=r.length-1;i>=0;i--)if(r[i].id===t){n.set(e,r[i].region);break}break;case"vertical":n.alt(e,t,["rl","lr"]);break;case"line":var a=t.split(","),s=a[0];n.integer(e,s),n.percent(e,s)&&n.set("snapToLines",!1),n.alt(e,s,["auto"]),2===a.length&&n.alt("lineAlign",a[1],["start",T,"end"]);break;case"position":var u=t.split(",");n.percent(e,u[0]),2===u.length&&n.alt("positionAlign",u[1],["start",T,"end","line-left","line-right","auto"]);break;case"size":n.percent(e,t);break;case"align":n.alt(e,t,["start",T,"end","left","right"])}}),l,f),t.region=n.get("region",null),t.vertical=n.get("vertical","");var i=n.get("line","auto");"auto"===i&&-1===E.line&&(i=-1),t.line=i,t.lineAlign=n.get("lineAlign","start"),t.snapToLines=n.get("snapToLines",!0),t.size=n.get("size",100),t.align=n.get("align",T);var a=n.get("position","auto");"auto"===a&&50===E.position&&(a="start"===t.align||"left"===t.align?0:"end"===t.align||"right"===t.align?100:50),t.position=a}(e,t)}p.prototype={parse:function(e,t){var r,a=this;function s(){for(var e=a.buffer,t=0;t<e.length&&"\r"!==e[t]&&"\n"!==e[t];)++t;var r=e.substr(0,t);return"\r"===e[t]&&++t,"\n"===e[t]&&++t,a.buffer=e.substr(t),r}function c(){"CUETEXT"===a.state&&a.cue&&a.oncue&&a.oncue(a.cue),a.cue=null,a.state="INITIAL"===a.state?"BADWEBVTT":"BADCUE"}e&&(a.buffer+=a.decoder.decode(e,{stream:!0}));try{if("INITIAL"===a.state){if(!u.test(a.buffer))return this;var f=(r=s()).match(d);if(!f||!f[0])throw new Error("Malformed WebVTT signature.");a.state="HEADER"}}catch(e){return c(),this}var h=!1,p=0;!function e(){try{for(;a.buffer&&(p<=a.maxCueBatch||a.syncCueParsing);){if(!u.test(a.buffer))return a.flush(),this;switch(h?h=!1:r=s(),a.state){case"HEADER":l.test(r)||r||(a.state="ID");break;case"NOTE":r||(a.state="ID");break;case"ID":if(o.test(r)){a.state="NOTE";break}if(!r)break;if(a.cue=new i.Z(0,0,""),a.state="CUE",!g.test(r)){a.cue.id=r;break}case"CUE":try{m(r,a.cue,a.regionList)}catch(e){a.cue=null,a.state="BADCUE";break}a.state="CUETEXT";break;case"CUETEXT":var f=g.test(r);if(!r||f&&(h=!0)){a.oncue&&(p+=1,a.oncue(a.cue)),a.cue=null,a.state="ID";break}a.cue.text&&(a.cue.text+="\n"),a.cue.text+=r;break;case"BADCUE":r||(a.state="ID")}}if(p=0,a.buffer)(0,n.U)(e);else if(!t)return a.flush(),this}catch(e){return c(),this}}()},flush:function(){var e=this;if(e.buffer+=e.decoder.decode(),(e.cue||"HEADER"===e.state)&&(e.buffer+="\n\n",e.parse(void 0,!0)),"INITIAL"===e.state)throw new Error("Malformed WebVTT signature.");return e.onflush&&e.onflush(),this}},t.default=p}}]);