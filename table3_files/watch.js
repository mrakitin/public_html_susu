(function(J,g,q){J.Ya=J.Ya||{};J.ya_hit_param=J.ya_hit_param||[];var v,z,o,u=J.location,I=J.navigator,t=u.protocol=="https:"?"https:":"http:",x="$Rev: 1466 $".match(/(\d+)/)[1];var A;function B(c){return I.userAgent.toLowerCase().indexOf(c)!=-1}var a=B("opera"),f=B("applewebkit/"),e=B("gecko/"),n=!a&&B("msie");var y=64,j=n?512:2048,C=n?512:2048,K=n?100:400,F="noindex",d=50,E=100,l=15000,s=new RegExp("\\.(7z|aac|ai|avi|apk|bmp|cab|csv|cdr|dmg|djvu?|doc(x|m|b)?|eps|exe|flv|gif|gz|jpe?g|js|m4a|mp(3|4|e?g)|mov|msi|ods|pdf|phps|png|ppt(x|m|b)?|psd|rar|rss|rtf|sea|sit|tar|tif?f|torrent|txt|wav|wma|wmv|xls(x|m|b)?|xpi|zip)$","i"),h=new Date().getTime();J.Ya.Metrika=function(aA,ai,aP,P){var aI=this,ap=Math.round(Math.random()*(1<<31-1)),au="",aS=u.href,at=u.href,R="";if(!J.Ya._yaCounter){J.Ya._yaCounter=aI}var az;if(typeof aA=="object"){az=aA;P=aA.defer;au=aA.ut;aP=aA.type;ai=aA.params;aA=aA.id}aA=aA||0;aP=aP||0;var aO="//mc.yandex.ru/watch/",ak="//mc.yandex.ru/clmap/";var T=[];function ac(aY,a0,aZ){var a1=aZ;T[T.length]=[aZ,a1];if(aY.addEventListener){aY.addEventListener(a0,a1,false)}else{if(aY.attachEvent){aY.attachEvent("on"+a0,a1)}}}function Q(aZ,a1,a0){for(var aY=0;aY<T.length;aY++){if(T[aY]&&T[aY][0]==a0){var a2=T[aY][1];delete T[aY];break}}if(a2){if(aZ.removeEventListener){aZ.removeEventListener(a1,a2,false)}else{if(aZ.detachEvent){aZ.detachEvent("on"+a1,a2)}}}}function aX(aZ){return 0;var a0=g.links,a2,a3=0;for(var a1=0,aY=a0.length;a1<aY;a1++){a2=a0[a1];if(a2===aZ){return aZ}if(a2.href==aZ.href){a3++}}return a3}function aj(aZ,aY){aY=aY||256;if(!aZ){return""}if(aZ.length>aY){aZ=aZ.substr(0,aY)}return(J.encodeURIComponent||J.escape)(aZ).replace(/\+/g,"%2B")}function i(a0){function a3(a4){return a4?a4.replace(/\\/g,"\\\\").replace(/"/g,'\\"'):""}switch(a0.constructor){case Boolean:return a0.toString();case Number:return isFinite(a0)?a0.toString():"null";case String:return'"'+a3(a0)+'"';case Array:var aY=[];for(var a1=0,a2=a0.length;a1<a2;a1++){aY[aY.length]=i(a0[a1])}return"["+aY.join(",")+"]";case Object:var aY="{",a1=0;for(var aZ in a0){if(!a0.hasOwnProperty(aZ)){continue}aY+=(a1?",":"")+'"'+a3(aZ)+'":'+i(a0[aZ]);a1++}aY+="}";return aY;default:return"null"}}function aH(){return Math.floor(Math.random()*1000000)}function aN(){return +new Date()}function ax(a0){var a1=aN();for(var aZ=1;aZ>0;aZ++){if(aZ%1000==0){var aY=aN();if(a1>aY){break}if(aY-a1>a0){break}}}}function ao(aY){return aY?aY.toString().replace(/<\/?[^>]+>/gi,""):""}function U(aY){return aY?aY.toString().replace(/^\s+/,"").replace(/\s+$/,""):""}function aa(aY){return U(ao(aY.innerHTML))}function aD(aY){return aY.replace(/\^/g,"\\^").replace(/\$/g,"\\$").replace(/\./g,"\\.").replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\|/g,"\\|").replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/\?/g,"\\?").replace(/\*/g,"\\*").replace(/\+/g,"\\+").replace(/\{/g,"\\{").replace(/\}/g,"\\}")}function aW(aY){return aY?aY.split(/\?/)[0]:""}function ay(aY,a0){if(!aY||!a0){return false}var a2=[];for(var aZ=0;aZ<a0.length;aZ++){a2.push(aD(a0[aZ]))}var a1=new RegExp("\\.("+a2.join("|")+")$","i");return a1.test(aY)}function al(aZ){var a1=aZ.target||aZ.srcElement;if(!a1){return false}if(a1.nodeType==3){a1=a1.parentNode}function a0(a2){return a2.nodeName.toString().toLowerCase()}var aY=a0(a1);while(a1.parentNode&&a1.parentNode.nodeName&&((aY!="a"&&aY!="area")||!a1.href)){a1=a1.parentNode;aY=a0(a1)}if(!a1.href){return false}return a1}function aU(aY,a0){function aZ(a1){return a1?a1.replace(/^www\./,""):""}return aZ(aY)==aZ(a0)?true:false}function aq(a0,aZ){if(!a0||!aZ){if(!a0&&!aZ){return true}return false}function aY(a1){a1=a1.split(":");a1=a1[1]||"";a1=a1.replace(/^\/*/,"").replace(/^www\./,"");return a1.split("/")[0]}if(aY(a0)==aY(aZ)){return true}return false}function O(a1,a0){var a2=a0.target,aY=false;if(!a0.hostname){return false}if(!a2||a2=="_self"||a2=="_top"||a2=="_parent"){aY=true}var aZ=a1.shiftKey||a1.ctrlKey||a1.altKey;if(!aZ){if(a1.modifiers&&J.Event){aZ=a1.modifiers&J.Event.CONTROL_MASK||a1.modifiers&J.Event.SHIFT_MASK||a1.modifiers&J.Event.ALT_MASK}}return aY&&!aZ}function Z(aZ,a6,a5,a8,a1){a1=a1||{};var a3=(typeof a5!="undefined")?a5:aS,a0=[];function a7(ba,a9){a0[a0.length]=ba;a0[a0.length]=a9}if(a1.ar&&!a1.onlyData){a3=aF(a3);aZ=aF(aZ)}a7("page-ref",aj(a3,j));a7("page-url",aj(aZ,j));a7("browser-info",aC(a6,a1));if(u.hostname.search(/(?:^|\.)(?:ya|yandex|narod|narod2)\.(?:\w+|com\.\w+)$/)!=-1){a7("ut",F)}else{if(typeof a1.ut!="undefined"){a7("ut",aj(""+a1.ut,y))}}if(a8){a7("site-info",aj(i(a8),C))}if(a1.saveRef){aS=a3}var aY=c(aO,a0);if(J.name!="MetrikaPlayer"){var a4=new Image();var a2=setTimeout(function(){a4.onload=a4.onerror=null;o=false},3000);a4.onload=a4.onerror=function(){clearTimeout(a2);o=true};a4.src=aY;Y(aY);if(a1.isDelay){ax(a1.delay)}}return aY}function c(a2,a3){var a1=["rn",aH(),"cnt-class",aP].concat(a3),aY=[];for(var aZ=0;aZ<a1.length;aZ+=2){var a0=a1[aZ+1];if(a0){aY[aY.length]=a1[aZ]+"="+a0}}return t+a2+aA+"?"+aY.join("&")}function aF(aZ){var a2=u.host,aY=u.href;if(!aZ){return aY}if(aZ.search(/^\w+:\/\//)!=-1){return aZ}var a1=aZ.charAt(0);if(a1=="?"){var a0=aY.search(/\?/);if(a0==-1){return aY+aZ}return aY.substr(0,a0)+aZ}if(a1=="#"){var a0=aY.search(/#/);if(a0==-1){return aY+aZ}return aY.substr(0,a0)+aZ}if(a1=="/"){var a0=aY.search(a2);if(a0!=-1){return aY.substr(0,a0+a2.length)+aZ}}else{var a3=aY.split("/");a3[a3.length-1]=aZ;return a3.join("/")}return aZ}function Y(aY){if(typeof J.ymLog=="function"){J.ymLog(aY)}}var ad=null,an=null;function aC(a5,aZ){aZ=aZ||{};var a6=[];function a7(a8,a9){if(a8&&a9){a6[a6.length]=[a8,a9].join(":")}}function a3(a8){a7(a8,aZ[a8]?"1":"")}var a1=ag(),a4=ae();if(!z){z=a4;v=a1}a7("j",I.javaEnabled()?"1":"");a7("s",screen.width+"x"+screen.height+"x"+(screen.colorDepth||screen.pixelDepth));if(ad===null){ad=aT()}a7("f",ad);a7("w",ab()+"x"+aK());a7("z",a1);a7("i",a4);if(an===null){an=aG()}a7("l",an||"");a7("en",am()||"");a7("v",x);a7("c",I.cookieEnabled?"1":"");a7("oc",J.ya_cid?"1":"");a7("hid",ap);if(W){a7("wh","1")}var aY=["ar","ln","fo","dl","ad","nb","pl","pa","ev"];for(var a2=0;a2<aY.length;a2++){a3(aY[a2])}var a0;if(typeof a5=="undefined"){a0=af();a0=a0?aj(a0,K):""}else{a0=aj(a5,K)}a7("t",a0);return a6.join(":")}function am(){var a2="",a1=g.getElementsByTagName("meta");if(a1&&a1.length>0){for(var aZ=0,aY=a1.length;aZ<aY;aZ++){if(a1[aZ].content){var a0=a1[aZ].content.match(/charset=(.*)/);if(a0){a2=a0[1];break}}}}else{a2=g.characterSet||g.charset}return a2}function aT(){var a1=null,a5=null,aZ,aY=J.navigator,a0="application/x-shockwave-flash",a3="Shockwave Flash",a4="ShockwaveFlash.ShockwaveFlash";if(typeof aY.plugins!="undefined"&&typeof aY.plugins[a3]=="object"){a1=aY.plugins[a3].description;if(a1&&!(typeof aY.mimeTypes!="undefined"&&aY.mimeTypes[a0]&&!aY.mimeTypes[a0].enabledPlugin)){a5=a1.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".")}}else{if(typeof J.ActiveXObject!="undefined"){try{aZ=new ActiveXObject(a4);if(aZ){a1=aZ.GetVariable("$version");if(a1){a5=a1.split(" ")[1].replace(/,/g,".").replace(/[^.\d]/g,"")}}}catch(a2){}}}return a5}function af(){var aZ=g.title;if(typeof aZ!="string"){var aY=g.getElementsByTagName("title");if(aY&&aY.length){aZ=aY[0].innerHTML}else{aZ=""}}return aZ}function aG(){var aY=null;if(J.ActiveXObject){try{var a3=new ActiveXObject("AgControl.AgControl");function a4(a8,a6,a5,a7){while(a0(a8,a6)){a6[a5]+=a7}a6[a5]-=a7}function a0(a6,a5){return a6.isVersionSupported(a5[0]+"."+a5[1]+"."+a5[2]+"."+a5[3])}var aZ=[1,0,0,0];a4(a3,aZ,0,1);a4(a3,aZ,1,1);a4(a3,aZ,2,10000);a4(a3,aZ,2,1000);a4(a3,aZ,2,100);a4(a3,aZ,2,10);a4(a3,aZ,2,1);a4(a3,aZ,3,1);aY=aZ.join(".")}catch(a2){}}else{var a1=I.plugins["Silverlight Plug-In"];if(a1){aY=a1.description}}return aY}function ag(){return(new Date()).getTimezoneOffset()*(-1)}function ae(){function a0(a3){return a3<10?"0"+a3:a3}var aZ=new Date(),aY=[aZ.getFullYear(),aZ.getMonth()+1,aZ.getDate(),aZ.getHours(),aZ.getMinutes(),aZ.getSeconds()],a2="";for(var a1=0;a1<aY.length;a1++){a2+=a0(aY[a1])}return a2}function ab(){var aY=-1;if(g.documentElement&&g.compatMode=="CSS1Compat"){aY=g.documentElement.clientWidth}else{if(g.body){aY=g.body.clientWidth}}return aY}function aK(){var aY=-1;if(g.documentElement&&g.compatMode=="CSS1Compat"){aY=g.documentElement.clientHeight}else{if(g.body){aY=g.body.clientHeight}}return aY}function aV(aY){return(aY==1&&J.Ya&&J.Ya.Direct)?true:false}function aw(){var aY=aA+":"+aP;if(J.ya_hit_param[aY]){return false}if(aA){Ya._metrikaCounters=Ya._metrikaCounters||{};Ya._metrikaCounters[aY]=aI;J.ya_hit_param[aY]=1;if(!P){Z(u.href,af(),g.referrer,ai,{ut:au,ad:aV(aP),saveRef:true})}ar()}if(az){if(az.enableAll){aI.enableAll()}else{if(az.clickmap){aI.clickmap(az.clickmap)}if(az.trackLinks){aI.trackLinks(az.trackLinks)}if(az.accurateTrackBounce){aI.accurateTrackBounce(az.accurateTrackBounce)}}if(az.trackHash){aI.trackHash(true)}}if(!P&&A){aI._webvisor=true;new A(aA,aP,az,ap)}}aI.reachGoal=function(a0,a2){var aY=a0?"goal://"+g.domain+"/"+a0:u.href,a1=af(),aZ=a0?u.href:g.referrer;Z(aY,a1,aZ,a2,{ar:true,isDelay:a0?true:false,delay:E});return true};var aB;function V(aY){var aZ={delay:d};switch(typeof aY){case"string":aZ.on=true;break;case"object":aZ.on=true;aZ.delay=typeof aY.delay!="number"?d:aY.delay;break;case"boolean":aZ.on=aY;break;default:return;break}aB=aZ}aI.trackLinks=V;function ar(){V(false);ac(g,"click",function(aY){if(aB.on){aJ(aY)}})}function aJ(aZ){var a3=al(aZ);if(!a3){return}var a4=false;var a1=aW(a3.href);if(s.test(a1)||ay(a1,av)){a4=true}function aY(a7){var a8=aa(a3);Z(a3.href,a3.href==a8?"":a8,u.href,null,a7)}var a5=a3.className,a6=(a5&&a5.search(/ym-disable-tracklink/)!=-1)?true:false,a0=(a5&&a5.search(/ym-external-link/)!=-1)?true:false;if(a6){return}var a2={ln:true,pl:aX(a3),dl:a4,isDelay:O(aZ,a3),delay:aB.delay};if(a0){aY(a2);return}if(aU(u.hostname,a3.hostname)){if(a4){a2.ln=false;aY(a2)}}else{if(a3.href&&a3.href.search(/^ *javascript:/i)!=-1){return}a2.ut=F;aY(a2)}}aI.hit=function(aY,a2,aZ,a1,a0){if(aY){Z(aY,a2,aZ,a1,{ut:a0,ar:true,saveRef:true})}};aI.event=function(aY,a1,aZ,a0){if(aY){Z(aY,a1,aZ,a0,{ar:true,ev:true})}};aI.params=function(aY){if(aY){Z("","","",aY,{ar:true,pa:true,onlyData:true})}};aI.file=function(aY,a1,aZ,a0){if(aY){Z(aY,"",u.href,a0,{ar:true,ln:true,dl:true})}};aI.extLink=function(aY,a1,aZ,a0){if(aY){Z(aY,"",u.href,a0,{ar:true,ln:true,ut:F})}};aI.notBounce=function(){Z("","","",null,{ar:true,nb:true,onlyData:true})};var av=[];aI.addFileExtension=function(aY){if(typeof aY=="string"){av.push(aY)}else{av=av.concat(aY)}};aI.clickmap=function(aZ){var aY="_clickmap";if(aI[aY]){aI[aY].updateStatus(aZ)}else{aI[aY]=new aL(aZ)}};function aM(bb,a4){var bc=false,aY=false,a9=true,a3=0,a1=aN(),a0=null,a5=false;function a6(){if(a5){return}if(a0){clearTimeout(a0)}var be=a4-ba();if(be<0){be=0}a0=setTimeout(function(){a5=true;a7(false);bb()},be)}function aZ(){aY=true;bc=true;a9=true;a3+=aN()-a1;a1=aN();a6()}function a8(){if(!bc&&!aY){a3=0}a1=aN();aY=true;bc=true;a9=false;a6()}function a2(){if(!aY){bc=true;a9=false;aY=true;a6()}}function ba(be){if(a9){return a3}return a3+aN()-a1}var bd=[J,"blur",aZ,J,"focus",a8,g,"click",a2,g,"mousemove",a2,g,"keydown",a2,g,"scroll",a2];function a7(bf){for(var be=0;be<bd.length;be+=3){if(bf){ac(bd[be],bd[be+1],bd[be+2])}else{Q(bd[be],bd[be+1],bd[be+2])}}}a7(true);a6()}var aQ=false;aI.accurateTrackBounce=function(aZ){if(aQ){return}aQ=true;if(aq(g.referrer,u.href)){return}if(typeof aZ!="number"){aZ=l}function aY(){aI.notBounce()}if(n){setTimeout(aY,aZ)}else{aM(aY,aZ)}};var ah=null;function X(a0){function aZ(){var a2=J.location.hash.split("#"),a4=a2[1];if(typeof a4=="undefined"){return false}var a3=a4.indexOf("?");if(a3>0){a4=a4.substring(0,a3)}return a4}var a1=aZ();(function aY(){var a2=aZ();if(a2!==a1){a0();a1=a2}ah=setTimeout(aY,200)})()}function aE(aY){if(!W){if("onhashchange" in J){ac(J,"hashchange",aY)}else{X(aY)}W=true}}function S(aY){if(W){if("onhashchange" in J){Q(J,"hashchange",aY)}else{clearInterval(ah)}W=false}}var W=false;aI.trackHash=function(aY){if(aY===false){S(aR)}else{aE(aR)}aI._trackHash=W};function aR(aY){R=aS=at;Z(u.href,af(),R,null,{ut:au,ad:aV(aP),wh:true,saveRef:true});at=u.href}aI.video=function(aZ,a0,aY,a1){};aI.enableAll=function(){aI.trackLinks(true);aI.clickmap(true);aI.accurateTrackBounce()};aI.informer=function(aY){};aI.uploadPage=function(){};function aL(a8){var bf=this,bw=128,ba=50,bb=1000,bq=2,aZ=0,a1=null;var bk=["A","B","BIG","BODY","BUTTON","DD","DIV","DL","DT","EM","FIELDSET","FORM","H1","H2","H3","H4","H5","H6","HR","I","IMG","INPUT","LI","OL","P","PRE","SELECT","SMALL","SPAN","STRONG","SUB","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TR","U","UL","ABBR","AREA","BLOCKQUOTE","CAPTION","CENTER","CITE","CODE","CANVAS","DFN","EMBED","FONT","INS","KBD","LEGEND","LABEL","MAP","OBJECT","Q","S","SAMP","STRIKE","TT","ARTICLE","AUDIO","ASIDE","FOOTER","HEADER","MENU","METER","NAV","PROGRESS","SECTION","TIME","VIDEO","NOINDEX","NOBR"];function be(bz){var by=bz.parentNode,bA=0;for(var bx=0;bx<by.childNodes.length;bx++){if(bz.nodeName==by.childNodes[bx].nodeName){if(bz==by.childNodes[bx]){return bA}bA++}}return 0}function bo(by){var bx=aY(by.nodeName);if(bx=="BODY"||bx=="HTML"){return a5()}return by.offsetWidth}function a6(by){var bx=aY(by.nodeName);if(bx=="BODY"||bx=="HTML"){return bg()}return by.offsetHeight}function a5(){var bx=g.documentElement,by=g.body;return Math.max(bx.scrollWidth,by.scrollWidth,bx.clientWidth)}function bg(){var bx=g.documentElement,by=g.body;return Math.max(bx.scrollHeight,by.scrollHeight,bx.clientHeight)}function a9(by){function bz(bA){var bC=0,bB=0;while(bA){bC=bC+parseInt(bA.offsetTop);bB=bB+parseInt(bA.offsetLeft);bA=bA.offsetParent}return{top:bC,left:bB}}function bx(bD){var bG=bD.getBoundingClientRect(),bH=g.body,bB=g.documentElement,bA=J.pageYOffset||bB.scrollTop||bH.scrollTop,bE=J.pageXOffset||bB.scrollLeft||bH.scrollLeft;var bF=bB.clientTop||bH.clientTop||0,bI=bB.clientLeft||bH.clientLeft||0,bJ=bG.top+bA-bF,bC=bG.left+bE-bI;return{top:Math.round(bJ),left:Math.round(bC)}}if(by.getBoundingClientRect){return bx(by)}return bz(by)}function aY(bx){return bx.toString().toUpperCase()}function br(bx){return bx?bx.replace(/\#.*$/,""):bx}function a0(bx){if(!bx.which&&bx.button!==q){bx.which=(bx.button&1?1:(bx.button&2?3:(bx.button&4?2:0)))}return bx.which}function bj(bz){var by=bz.offsetWidth,bx=bz.offsetHeight;return(by===0&&bx===0)||(bz.style&&bz.style.display==="none")}function bi(by){if(by){var bx=""+by.className;if(bx&&bx.search(/ym-clickmap-ignore/)!=-1){return true}}return false}function a4(bx){while(bx.parentNode){if(bi(bx)){return true}bx=bx.parentNode}return false}var a3=";".charCodeAt(0),bv=String.fromCharCode;var bh={},bu={};for(var bp=0;bp<bk.length;bp++){bh[bk[bp]]=bv(a3);bu[bv(a3)]=bk[bp];a3++}this.handler=function(by){var bx=g.getElementsByTagName("body")[0];if(J.yandex_metrika_disabled_clickmap||bi(bx)){return}if(bf._prefs.hasQuota){if(!bf._prefs.quota){return}bf._prefs.quota--}bc(by)};function a7(bx){var by=bf._prefs.ignoreTags;for(var bz=0;bz<by.length;bz++){if(aY(by[bz])==aY(bx)){return true}}return false}function bm(bx){var by="";while(bx.parentNode&&aY(bx.nodeName)!="BODY"&&aY(bx.nodeName)!="HTML"){by+=bh[bx.nodeName]||"*";by+=be(bx)||"";bx=bx.parentNode}return aj(by,bw)}function bd(){return Math.floor(aN()-h)}function bs(bz){if(bz.pageX==null&&bz.clientX!=null){var by=g.documentElement,bx=g.body;bz.pageX=bz.clientX+(by&&by.scrollLeft||bx&&bx.scrollLeft||0)-(by.clientLeft||0);bz.pageY=bz.clientY+(by&&by.scrollTop||bx&&bx.scrollTop||0)-(by.clientTop||0)}return{x:bz.pageX,y:bz.pageY}}function a2(bB){var bI=bs(bB),bE=bI.x,bD=bI.y,bz=bB.target||bB.srcElement,bK=bf._prefs,bG=a9(bz),bJ=65535,by="",bx=J.location.href;switch(bK.mode){case"fixed":by="0";if(bn(bz)){by+="u"}break;case"centered":by="1";var bH=Math.floor(a5()/2),bC=32768;bE=(bE>bH)?bE-bH+bC:bE;if(bn(bz)){by+="u"}break;default:var bF=bo(bz),bA=a6(bz);if(!bF){bF=1}if(!bA){bA=1}bE=Math.floor((bE-bG.left)*bJ/bF);bD=Math.floor((bD-bG.top)*bJ/bA);by=bm(bz);break}if(!W){bx=br(bx)}return c(ak,["page-url",aj(bx,j),"pointer-click","x:"+bE+":y:"+bD+":t:"+Math.floor(bd()/100)+":p:"+by])}function bn(bx){var by=aY(bx.nodeName);while(bx.parentNode&&by!="BODY"&&by!="HTML"){if(by=="A"||by=="INPUT"||by=="TEXTAREA"){return true}bx=bx.parentNode;by=bx.nodeName}return false}function bt(bA,bB){if(!bA){return false}var by=Math.abs(bA.x-bB.x),bx=Math.abs(bA.y-bB.y),bz=bB.time-bA.time;return(bA.dom==bB.dom&&by<bq&&bx<bq&&bz<bb)?true:false}function bc(bB){var by=bB.target||bB.srcElement;if(by.nodeType==3){by=by.parentNode}var bH=aY(by.nodeName),bG=bs(bB),bz=a0(bB),bA=2,bE=3;if((bz==bA||bz==bE)&&bH!="A"){return}if(bj(by)){return}if(a4(by)||a7(bH)||!bf._prefs.filter(by,bH)){return}var bC=aN(),bF={dom:by,x:bG.x,y:bG.y,time:bC};if(bC-aZ>ba){if(bf._prefs.ignoreSameClicks&&bt(a1,bF)){}else{if(J.name!="MetrikaPlayer"){var bx=a2(bB);new Image().src=bx;Y(bx);var bD=bl(bB);if(bD&&O(bB,bD)){ax(bf._prefs.delay)}}}}aZ=bC;a1=bF}function bl(by){var bz=by.target||by.srcElement;if(!bz){return false}if(bz.nodeType==3){bz=bz.parentNode}var bx=aY(bz.nodeName);while(bz.parentNode&&bz.parentNode.nodeName&&((bx!="A"&&bx!="AREA")||!bz.href)){bz=bz.parentNode;bx=aY(bz.nodeName)}if(!bz.href){return false}return bz}this.setPrefs=function(bx){function by(bA,bz){return true}if(typeof bx=="undefined"||bx===false||bx===true){this._prefs={filter:by,ignoreTags:[],mode:"",delay:d,quota:0,hasQuota:false,ignoreSameClicks:true};return}this._prefs={filter:bx.filter||by,ignoreTags:bx.ignoreTags||[],mode:bx.mode||"",delay:typeof bx.delay=="undefined"?d:bx.delay,quota:bx.quota||0,hasQuota:!!bx.quota,ignoreSameClicks:typeof bx.ignoreSameClicks=="undefined"?true:false}};this.updateStatus=function(bx){switch(typeof bx){case"undefined":this.start(true);break;case"boolean":if(bx){this.start(bx)}else{this.stop()}break;case"object":this.start(bx);break}};this._start=false;this.start=function(bx){this.setPrefs(bx);if(!this._start){ac(g,"click",this.handler)}this._start=true};this.stop=function(){if(this._start){Q(g,"click",this.handler)}this._start=false};this.start(a8)}aw()};if(J.ya_cid){new Ya.Metrika(J.ya_cid,J.ya_params,J.ya_class)}if(!J.ya_hit){J.ya_hit=function(c,i){if(J.Ya._yaCounter){J.Ya._yaCounter.reachGoal(c,i)}}}var H="yandex_metrika_callback",N=H+"s",k=J[H],G=J[N];if(typeof k=="function"){k()}if(typeof G=="object"){for(var L=0;L<G.length;L++){var M=G[L];if(M){G[L]=null;M()}}}function m(R){var Q="head",c=g.createElement("script");c.type="text/javascript";c.async=c.defer=true;c.src=R;try{var O=g.getElementsByTagName("html")[0];if(!g.getElementsByTagName(Q)[0]){O.appendChild(g.createElement(Q))}var i=g.getElementsByTagName(Q)[0];i.insertBefore(c,i.firstChild)}catch(P){}}function r(c){m(t+"//metrika.yandex.ru/js/"+c+"/_loader.js")}var p="linkmap",b="clickmap",D="ym_playback=",w=J.location.href;if(w.search(D+p)!=-1){r(p)}else{if(w.search(D+b)!=-1){r(b)}}J.Ya.Metrika.informer=function(c){var i=!!Ya.Metrika._informer;Ya.Metrika._informer=c;if(!i){m(t+"//bs.yandex.ru/metrika/informer.js")}}})(this,this.document);