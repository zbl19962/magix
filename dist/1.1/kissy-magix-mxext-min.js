KISSY.add("magix/magix",function(e){var t=[].slice,r=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,n=/\/[^\/]*$/,i=/[#?].*$/,a="",o=/([^=&?\/#]+)=?([^&=#?]*)/g,s="pathname",c=/^https?:\/\//i,f=0,u="/",v="vframe",m="\n",h=window.console,d=h&&h.error,l=function(){},p={tagName:v,rootId:"magix_vf_root",progress:l,coded:1,execError:function(e){d&&h.error(e)}},g=p.hasOwnProperty,x=function(e,t){return e?g.call(e,t):e},y=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=I._o(t)?$(e,t):x(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},w=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},b=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(0|t||5),void 0):new b(e,t)},$=function(e,t,r){for(var n in t)r&&x(r,n)||(e[n]=t[n]);return e};$(b.prototype,{get:function(e){var t,r=this,n=r.c;return e=s+e,x(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=f++,t=t.v)),t},list:function(){return this.c},set:function(e,t,r){var n=this,i=n.c,a=s+e,o=i[a];if(!x(i,a)){if(i.length>=n.b){i.sort(w);for(var c=n.b-n.x;c--;)o=i.pop(),delete i[o.k],o.m&&M(o.m,o.o,o)}o={},i.push(o),i[a]=o}return o.o=e,o.k=a,o.v=t,o.f=1,o.t=f++,o.m=r,t},del:function(e){e=s+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=a,delete t[e],r.m&&(M(r.m,r.o,r),r.m=a))},has:function(e){return e=s+e,x(this.c,e)}});var C=b(60),E=b(),M=function(e,t,r,n,i,a){for(I._a(e)||(e=[e]),t&&(I._a(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){p.execError(o)}return i},I={mix:$,has:x,safeExec:M,noop:l,config:y(p),start:function(e){var t=this;$(p,e),t.use(["magix/router","magix/vom",e.iniFile],function(r,n,i){p=$(p,i,e),p["!tnc"]=p.tagName!=v,r.on("!ul",n.locChged),r.on("changed",n.locChged),n.on("progress",p.progress),t.use(p.extensions,r.start)})},keys:Object.keys||function(e){var t=[];for(var r in e)x(e,r)&&t.push(r);return t},local:y({}),path:function(e,t){var o=e+m+t,s=E.get(o);if(!s){if(c.test(t))s=t;else if(e=e.replace(i,a).replace(n,a)+u,t.charAt(0)==u){var f=c.test(e)?8:0,v=e.indexOf(u,f);s=e.substring(0,v)+t}else s=e+t;for(;r.test(s);)s=s.replace(r,"$1/");E.set(o,s)}return s},pathToObject:function(e,t){var r=e+m+t,n=C.get(r);if(!n){n={};var f={},v=a;i.test(e)?v=e.replace(i,a):~e.indexOf("=")||(v=e);var h=e.replace(v,a);if(v&&c.test(v)){var d=v.indexOf(u,8);v=~d?v.substring(d):u}h.replace(o,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}f[r]=n}),n[s]=v,n.params=f,C.set(r,n)}return n},objectToPath:function(e,t,r){var n,i=e[s],a=[],o=e.params;for(var c in o)n=o[c],(!r||n||x(r,c))&&(t&&(n=encodeURIComponent(n)),a.push(c+"="+n));return a.length&&(i=i+"?"+a.join("&")),i},listToMap:function(e,t){var r,n,i,a={};if(I._s(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:b};return $(I,{use:function(r,n){e.use(r&&r+"",function(e){n&&n.apply(e,t.call(arguments,1))})},_a:e.isArray,_f:e.isFunction,_o:e.isObject,_s:e.isString,_n:e.isNumber})}),KISSY.add("magix/router",function(e,t,r,n){var i,a,o,s,c,f,u=window,v="",m="pathname",h="view",d=t.has,l=t.mix,p=t.keys,g=t.config(),x=t.cache(),y=t.cache(40),w={params:{},href:v},b=/#.*$/,$=/^[^#]*#?!?/,C="params",E=function(e,r,n){if(e){n=this[C],t._s(e)&&(e=e.split(","));for(var i=0;e.length>i&&!(r=d(n,e[i]));i++);}return r},M=function(){return this[m]},I=function(){return this[h]},P=function(e,t,r,n){return r=this,n=r[C],arguments.length>1?n[e]=t:n[e]},S=function(e){var r=t.pathToObject(e,s),n=r[m];return n&&f&&(r[m]=t.path(u.location[m],n)),r},_=l({viewInfo:function(e,r){var n,i;if(!a){a={rs:g.routes||{},nf:g.notFoundView};var o=g.defaultView;a.dv=o;var s=g.defaultPathname||v;n=a.rs,a.f=t._f(n),a.f||n[s]||!o||(n[s]=o),a[m]=s}return e||(e=a[m]),n=a.rs,i=a.f?n.call(g,e,r):n[e],{view:i||a.nf||a.dv,pathname:e}},start:function(){var e=_,t=u.history;o=g.nativeHistory,s=g.coded,c=o&&t.pushState,f=o&&!c,c?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||u.location.href;var r=_,n=x.get(e);if(!n){var i=e.replace(b,v),a=e.replace($,v),s=S(i),c=S(a),f={};l(f,s[C]),l(f,c[C]),n={get:P,set:P,href:e,refHref:w.href,srcQuery:i,srcHash:a,query:s,hash:c,params:f},x.set(e,n)}if(t&&!n[h]){var d;d=n.hash[m]||o&&n.query[m];var p=r.viewInfo(d,n);l(n,p)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=y.get(i);if(!a){var o,s,c;a={},a[h]=c,a[m]=c,a[C]={};var f,u,v=[m,h];for(f=1;f>=0;f--)u=v[f],s=e[u],c=t[u],s!=c&&(a[u]={from:s,to:c},o=1);var d=e[C],l=t[C];for(v=p(d).concat(p(l)),f=v.length-1;f>=0;f--)u=v[f],s=d[u],c=l[u],s!=c&&(a[C][u]={from:s,to:c},o=1);a.occur=o,a.isParam=E,a.isPathname=M,a.isView=I,y.set(i,a)}return a},route:function(){var e=_,t=e.parseQH(0,1),r=!w.get,n=e.getChged(w,t);w=t,n.occur&&(i=t,e.fire("changed",{location:t,changed:n,force:r}))},navigate:function(e,r,n){var a=_;if(!r&&t._o(e)&&(r=e,e=v),r&&(e=t.objectToPath({params:r,pathname:e},s)),e){var o=S(e),u={};if(u[C]=l({},o[C]),u[m]=o[m],u[m]){if(f){var h=i.query[C];for(var p in h)d(h,p)&&!d(u[C],p)&&(u[C][p]=v)}}else{var g=l({},i[C]);u[C]=l(g,u[C]),u[m]=i[m]}var x,y=t.objectToPath(u,s,i.query[C]);x=c?y!=i.srcQuery:y!=i.srcHash,x&&(c?(a.poped=1,history[n?"replaceState":"pushState"](v,v,y),a.route()):(l(u,i,u),u.srcHash=y,u.hash={params:u[C],pathname:u[m]},a.fire("!ul",{loc:i=u}),y="#!"+y,n?location.replace(y):location.hash=y))}}},r);return _.useState=function(){var e=_,t=location.href;n.on(u,"popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())})},_.useHash=function(){n.on(u,"hashchange",_.route)},_},{requires:["magix/magix","magix/event","event"]}),KISSY.add("magix/body",function(e,t){var r,n=t.has,i=t.mix,a={},o=document.body,s={},c=String.fromCharCode(26),f="mx-ei",u="mx-owner",v="addEventListener",m="removeEventListener",h=o[v],d={},l=65536,p="on",g=",",x=function(e){return e.id||(e.id="mx-e-"+l--)},y=function(e,t,r){return r?e.setAttribute(t,r):r=e.getAttribute(t),r},w=function(){this.returnValue=!1},b=function(){this.cancelBubble=!0},$={special:function(e){i(a,e)},process:function(e){if(e=e||window.event,e&&!e[p]){var t=e.target||e.srcElement||o;for(e[p]=1;t&&1!=t.nodeType;)t=t.parentNode;for(var i,a,s=t,v=e.type,m=d[v]||(d[v]=RegExp(g+v+"(?:,|$)")),l="mx-"+v,$=[];s&&1==s.nodeType&&(i=y(s,l),a=y(s,f),!i&&!m.test(a));)$.push(s),s=s.parentNode;if(i){var C,E=i.split(c);if(E.length>1&&(C=E[0],i=E.pop()),C=C||y(s,u),!C)for(var M=s,I=r.all();M;){if(n(I,M.id)){y(s,u,C=M.id);break}M=M.parentNode}if(!C)throw Error("bad:"+i);var P=r.get(C),S=P&&P.view;S&&(h||(e.preventDefault=w,e.stopPropagation=b),S.pEvt({info:i,se:e,st:v,tId:x(t),cId:x(s)}))}else{for(var _;$.length;)_=$.shift(),a=y(_,f)||p,m.test(a)||(a=a+g+v,y(_,f,a));_=null}s=t=null}},act:function(e,t,n){var i=s[e]||0,c=i>0?1:0,f=$.process;if(i+=t?-c:c,!i){n&&(r=n);var u=a[e];u?$.lib(o,e,t,f):h?o[t?m:v](e,f,!1):o[p+e]=t?null:f,t||(i=1)}s[e]=i}},C={change:1,submit:1,focusin:1,focusout:1,mouseenter:2,mouseleave:2,mousewheel:1};return $.special(C),$.lib=function(t,r,n,i){e.use("event",function(e,a){var o=C[r];1==o?(o=n?"detach":"on",a[o](t,r,i)):(o=(n?"un":"")+"delegate",a[o](t,r,"[mx-"+r+"]",i))})},$},{requires:["magix/magix"]}),KISSY.add("magix/event",function(e,t){var r=function(e){return"~"+e},n=t.safeExec,i={fire:function(e,t,i,a){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var f,u,v=c.length,m=v-1;v--;)f=a?v:m-v,u=c[f],(u.d||u.r)&&(c.splice(f,1),m--),u.d||n(u.f,t,s)}i&&delete s[o]},on:function(e,t,n){var i=r(e),a=this[i]||(this[i]=[]),o={f:t};isNaN(n)?(o.r=n,a.push(o)):a.splice(0|n,0,o)},off:function(e,t){var n=r(e),i=this[n];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,r)}};return i},{requires:["magix/magix"]}),KISSY.add("magix/vframe",function(e,t,r,n){var i,a,o,s,c,f,u,v,m,h,d=document,l=d.body,p=65536,g=t.safeExec,x=[],y=t.mix,w=t.config(),b=t.has,$=l.contains,C="querySelectorAll",E="alter",M="created",I=function(e){return"object"==typeof e?e:d.getElementById(e)},P=function(e,t,r){return t=I(e),t&&(r=o?d[C]("#"+S(t)+s):t.getElementsByTagName(i)),r||x},S=function(e){return e.id||(e.id="magix_vf_"+p--)},_=function(e,t,r){if(e=I(e),t=I(t),e&&t)if(e!==t)try{r=$?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},T=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=h};return T.root=function(e,t,r){if(!f){i=w.tagName,a=w["!tnc"],c=a?"mx-vframe":"mx-defer",o=a&&l[C],s=" "+i+"[mx-vframe]",v=t,m=r,h=e;var n=w.rootId,u=I(n);u||(u=d.createElement(i),u.id=n,l.appendChild(u),u=null),f=new T(n),e.add(f)}return f},y(y(T.prototype,r),{mountView:function(e,r){var i=this,a=I(i.id);if(i._a||(i._a=1,i._t=a.innerHTML),i.unmountView(),e){var o=t.pathToObject(e),s=o.pathname,c=--i.sign;t.use(s,function(e){if(c==i.sign){n.prepare(e);var t=new e({owner:i,id:i.id,$:I,path:s,vom:h,location:v});i.view=t;var f=function(){i.mountZoneVframes()};t.on("interact",function(e){e.tmpl||(a.innerHTML=i._t,f()),t.on("primed",function(){i.viewPrimed=1,i.fire("viewMounted")}),t.on("rendered",f),t.on("prerender",function(){i.unmountZoneVframes(0,1)||i.cAlter()})},0),r=r||{},t.load(y(r,o.params,r),m)}})}},unmountView:function(){var e=this,t=e.view;if(t){u||(u={}),e.unmountZoneVframes(0,1),e.cAlter(u),e.view=0,t.oust();var r=I(e.id);r&&e._a&&(r.innerHTML=e._t),e.viewInited=0,e.viewPrimed&&(e.viewPrimed=0,e.fire("viewUnmounted")),u=0}e.sign--},mountVframe:function(e,t,r){var n=this;n.fcc&&n.cAlter();var i=h.get(e);return i||(i=new T(e),i.pId=n.id,b(n.cM,e)||n.cC++,n.cM[e]=1,h.add(i)),i.mountView(t,r),i},mountZoneVframes:function(e,t){var r=this,n=e||r.id;r.unmountZoneVframes(n,1);var i=P(n),o=i.length,s={};if(o)for(var f,u,v,m,h=0;o>h;h++)if(f=i[h],u=S(f),!b(s,u)&&(v=f.getAttribute("mx-view"),m=!f.getAttribute(c),m=m!=a,m||v)){r.mountVframe(u,v,t);for(var d,l=P(f),p=0,g=l.length;g>p;p++)d=l[p],s[S(d)]=1}r.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=h.get(e);if(n){var i=n.fcc;n.unmountView(),h.remove(e,i);var a=h.get(n.pId);a&&b(a.cM,e)&&(delete a.cM[e],a.cC--,t||a.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i=this,a=i.cM;for(n in a)e?_(n,e)&&i.unmountVframe(n,r=1):i.unmountVframe(n,r=1);return t||i.cCreated(),r},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,t.fca=0,r.fire(M,e),t.fire(M,e)),h.vfCreated();var n=t.id,i=h.get(t.pId);i&&!b(i.rM,n)&&(i.rM[n]=i.cM[n],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;e||(e={});var r=t.fcc;if(t.fcc=0,!t.fca&&r){var n=t.view,i=t.id;n&&(t.fca=1,n.fire(E,e),t.fire(E,e));var a=h.get(t.pId);a&&b(a.rM,i)&&(a.rC--,delete a.rM[i],a.cAlter(e))}},locChged:function(){var e=this,r=e.view;if(e.viewInited&&r&&r.sign>0){var n=r.olChg(m),i={location:v,changed:m,prevent:function(){this.cs=x},to:function(e){e=e||x,t._s(e)&&(e=e.split(",")),this.cs=e}};n&&g(r.locationChange,i,r);for(var a,o=i.cs||t.keys(e.cM),s=0,c=o.length;c>s;s++)a=h.get(o[s]),a&&a.locChged()}}}),T},{requires:["magix/magix","magix/event","magix/view"]}),KISSY.add("magix/view",function(e,t,r,n,i){var a=t.safeExec,o=t.has,s=",",c=[],f=t.noop,u=t.mix,v="~",m=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},h=t.cache(40),d="<",l=">",p=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,g=String.fromCharCode(26),x={prevent:function(e){e=e||this.srcEvent,e.preventDefault()},stop:function(e){e=e||this.srcEvent,e.stopPropagation()},halt:function(e){this.prevent(e),this.stop(e)}},y=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,w=/(\w+):([^,]+)/g,b=/([$\w]+)<([\w,]+)>/,$=function(e){var t=this;u(t,e),t.$ol={ks:[]},t.sign=1,a($.ms,[e],t)};$.ms=[],$.prepare=function(e){if(!e[v]){e[v]=1;var t,r,n,i,a,o=e.prototype,c={};for(var u in o)if(t=o[u],r=u.match(b))for(n=r[1],i=r[2],i=i.split(s),a=i.length-1;a>-1;a--)r=i[a],c[r]=1,o[n+d+r+l]=t;else"render"==u&&t!=f&&(o[u]=m(t));i&&(o.$evts=c)}},$.mixin=function(e,t){t&&$.ms.push(t),u($.prototype,e)},u(u($.prototype,r),{render:f,locationChange:f,init:f,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=e.sign,i=function(i){if(n>0&&n==e.sign){t&&(e.template=e.wrapMxEvent(i)),e.dEvts(),e.fire("interact",{tmpl:t},1),a(e.init,r,e),e.fire("inited",0,1),e.owner.viewInited=1,a(e.render,c,e);var o=!t&&!e.rendered;o&&(e.rendered=1,e.fire("primed",0,1))}};t?e.fetchTmpl(e.path,i):i()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=1),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(p,"$&"+this.id+g)},wrapAsync:function(e){var t=this,r=t.sign;return function(){r==t.sign&&e&&e.apply(this,arguments)}},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign>0&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(e){var r,n=this;r=n.$ol,r.f=1;var i=r.ks;t._o(e)&&(r.pn=e.pathname,e=e.keys),e&&(r.ks=i.concat((e+"").split(s)))},olChg:function(e){var t=this,r=t.$ol,n=1;return r.f&&(n=0,r.pn&&(n=e.pathname),n||(n=e.isParam(r.ks))),n},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.dEvts(1)),e.sign--},pEvt:function(e){var t=this;if(t.sign>0){var r=e.info,n=e.se,i=h.get(r);i||(i=r.match(y),i={n:i[1],f:i[2],i:i[3],p:{}},i.i&&i.i.replace(w,function(e,t,r){i.p[t]=r}),h.set(r,i));var o=i.n+d+e.st+l,s=t[o];if(s){var c=x[i.f];c&&c.call(x,n),a(s,{currentId:e.cId,targetId:e.tId,type:e.st,srcEvent:n,halt:x.halt,prevent:x.prevent,stop:x.stop,params:i.p},t)}}},dEvts:function(e){var t=this,r=t.$evts,i=t.vom;for(var a in r)n.act(a,e,i)}});var C="?t="+e.now(),E=e.Env.mods,M={},I={};return $.prototype.fetchTmpl=function(e,t){var r=this,n="template"in r;if(n)t(r.template);else if(o(M,e))t(M[e]);else{var s,c=E[e];c&&(s=c.uri||c.fullpath,s=s.slice(0,s.indexOf(e)+e.length));var f=s+".html",u=I[f],v=function(r){t(M[e]=r)};u?u.push(v):(u=I[f]=[v],i({url:f+C,complete:function(e,t){a(u,e||t),delete I[f]}}))}},$.extend=function(t,r,n){var i=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&a(r,arguments,this)};return o.extend=i.extend,e.extend(o,i,t,n)},$},{requires:["magix/magix","magix/event","magix/body","ajax"]}),KISSY.add("magix/vom",function(e,t,r,n){var i=r.has,a=r.mix,o=0,s=0,c=0,f=0,u={},v={},m={},h=r.mix({all:function(){return u},add:function(e){i(u,e.id)||(o++,u[e.id]=e,h.fire("add",{vframe:e}))},get:function(e){return u[e]},remove:function(e,t){var r=u[e];r&&(o--,t&&s--,delete u[e],h.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){s++;var e=s/o;e>c&&h.fire("progress",{percent:c=e},f=1==e)}},locChged:function(e){var r,n=e.loc;if(n?r=1:n=e.location,a(v,n),!r){a(m,e.changed);var i=t.root(h,v,m);m.view?i.mountView(n.view):i.locChged()}}},n);return h},{requires:["magix/vframe","magix/magix","magix/event"]}),KISSY.add("mxext/mmanager",function(e,t,r){var n=t.has,i=t.safeExec,a=t._a,o=t.mix,s="mr",c=String.fromCharCode(26),f=12e5,u=function(e,t,r){t=[];for(r in e)t.push(r,s,e[r]);return t},v=function(e,t,r){for(var n,i=[t.name],a={},o=e.length-1;o>-1;o--)n=e[o],a[n]?e.splice(o,1):i.push(a[n]=u(t[n]),u(r[n]));return i.join(c)},m=function(e){var t=e.cache;if(t){var r=0|e.cacheTime;t=r?r:t===!0?f:0|t}return t},h=Date.now||function(){return+new Date},d=h(),l=function(e){throw Error(e)},p=function(e,r){var n=this;n.$mClass=e,n.$mCache=t.cache(),n.$mCacheKeys={},n.$mMetas={},r=r?a(r)?r:[r]:[],n.$sKeys=["postParams","urlParams"].concat(r),n.id="mm"+d--,i(p.ms,arguments,n)},g=[].slice,x=function(e,t,r,n){return function(){return e.apply(t,[r,n].concat(g.call(arguments)))}},y=function(e,t){var r=t.b,n=t.a,a=n[r];if(a){var o=a.q;delete n[r],i(o,e,a.e)}},w=function(e,t,r){var n,a=this,o=t.a,s=t.c,c=t.d,f=t.g,u=t.i,v=t.j,m=t.k,d=t.l,l=t.m,p=t.n,g=t.o;t.b++,delete s[a.id];var x=a.$mm,y=x.key,w=x.meta;if(c[e]=a,r)t.e=1,n=1,t.f=r,f.msg=r,f[e]=r,v.fire("fail",{model:a,meta:w,msg:r});else{if(!y||y&&!u.has(y)){y&&u.set(y,a),x.done=h();var b=x.after;b&&i(b,[a,w]),v.fire("done",{model:a,meta:w})}x.used>0&&(a.fromCache=1),x.used++}if(!o.$oust){if(m==C.ONE){var $=d?l[e]:l;$&&(p[e]=i($,[n?f:null,a,f],o))}else if(m==C.ORDER){g[e]={m:a,e:n,s:r};for(var E,M,I=g.i||0;E=g[I];I++)M=d?l[I]:l,E.e&&(f.msg=E.s,f[I]=E.s),p[I]=i(M,[E.e?f:null,E.m,f].concat(p),o);g.i=I}t.b==t.h&&(t.e||(f=null),m==C.ALL?(c.unshift(f),p[0]=f,p[1]=i(l,c,o)):p.unshift(f),o.$ntId=setTimeout(function(){o.doNext(p)},30))}},b=function(e){return function(){var t=new E(this),r=arguments,n=r[r.length-1];return n&&n.manage&&(n.manage(t),r=g.call(r,0,-1)),t[e].apply(t,r)}},$=function(e,t){return function(r,n){var i=g.call(arguments,1);return this.send(r,i.length>1?i:n,e,t)}};o(p,{create:function(e,t){return new p(e,t)},mixin:function(e,t){t&&p.ms.push(t),o(p.prototype,e)},ms:[]});var C={ALL:1,ONE:2,ORDER:4},E=function(e){var t=this;t.$host=e,t.$reqs={},t.id=s+d--,t.$queue=[]};return o(E.prototype,{send:function(e,t,r,i){var o=this;if(o.$busy)return o.next(function(){this.send(e,t,r,i)}),o;o.$busy=1;var s=o.$host,c=s.$mCache,f=s.$mCacheKeys,u=o.$reqs;a(e)||(e=[e]);var v=e.length,m=[],h=a(t);h&&(m=Array(t.length));for(var d,p={a:o,b:0,c:o.$reqs,d:Array(v),g:{},h:v,i:c,j:s,k:r,l:h,m:t,n:m,o:[]},g=0;e.length>g;g++)if(d=e[g]){var b=s.getModel(d,i),$=b.cKey,C=b.entity,E=x(w,C,g,p);E.id=o.id,$&&n(f,$)?f[$].q.push(E):b.update?(u[C.id]=C,$&&(f[$]={q:[E],e:C},E=y),C.request(E,{a:f,b:$})):E()}else l("empty model");return o},fetchAll:function(e,t){return this.send(e,t,C.ALL)},saveAll:function(e,t){return this.send(e,t,C.ALL,1)},fetchOrder:$(C.ORDER),saveOrder:$(C.ORDER,1),saveOne:$(C.ONE,1),fetchOne:$(C.ONE),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqs,a=t.$mCacheKeys;for(var o in r){var s=r[o],c=s.$mm.key;if(c&&n(a,c)){for(var f,u=a[c],v=u.q,m=[],h=[],d=0;v.length>d;d++)f=v[d],f.id!=e.id?m.push(f):h.push(f);m.length?(i(h,"abort",u.e),u.q=m):s.abort()}else s.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;if(t.$queue.push(e),!t.$busy){var r=t.$latest;t.doNext(r)}return t},doNext:function(e){var t=this;t.$busy=0;var r=t.$queue;if(r){var n=r.shift();n&&i(n,e,t)}t.$latest=e},destroy:function(){var e=this;e.$oust=1,e.stop()}}),o(o(p.prototype,r),{registerModels:function(e){var t=this,r=t.$mMetas;a(e)||(e=[e]);for(var n,i,o=0;e.length>o;o++)n=e[o],n&&(i=n.name,i?r[i]&&l("already exist:"+i):l("miss name"),n.cache=m(n),r[i]=n)},registerMethods:function(e){o(this,e)},createModel:function(e){var t,r=this,n=r.getModelMeta(e),a=m(e)||n.cache,o=new r.$mClass;o.set(n),o.$mm=t={used:0};var s=e.before||n.before;s&&i(s,[o,n]);var c=e.after||n.after;return t.after=c,a&&(t.key=v(r.$sKeys,n,e)),t.meta=n,e.name&&o.set(e),o.setUrlParams(n.urlParams),o.setPostParams(n.postParams),o.setUrlParams(e.urlParams),o.setPostParams(e.postParams),r.fire("inited",{model:o,meta:n}),o},getModelMeta:function(e){var t=this,r=t.$mMetas,n=e.name||e,i=r[n];return i||l("Unfound:"+n),i},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=1,r=i.createModel(e)),{entity:r,cKey:r.$mm.key,update:n}},saveAll:b("saveAll"),fetchAll:b("fetchAll"),saveOrder:b("saveOrder"),fetchOrder:b("fetchOrder"),saveOne:b("saveOne"),fetchOne:b("fetchOne"),createMRequest:function(e){var t=new E(this);return e&&e.manage&&e.manage(t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.list(),i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(e){var t,r=this,n=r.$mCache,i=null,a=r.getModelMeta(e),o=m(e)||a.cache;if(o&&(t=v(r.$sKeys,a,e)),t){var s=r.$mCacheKeys,c=s[t];c?i=c.e:(i=n.get(t),i&&o>0&&h()-i.$mm.done>o&&(r.clearCacheByKey(t),i=0))}return i}}),p},{requires:["magix/magix","magix/event"]}),KISSY.add("mxext/model",function(e,t){var r=function(r,n){var i=function(){i.superclass.constructor.apply(this,arguments),n&&t.safeExec(n,[],this)};return t.mix(i,this,{prototype:!0}),e.extend(i,this,r)},n=+new Date,i=encodeURIComponent,a=t.has,o=t._o,s=t.toString,c=function(e){this.set(e),this.id="m"+n--};return t.mix(c,{GET:"GET",POST:"POST",extend:r}),t.mix(c.prototype,{sync:t.noop,getPostParams:function(){return this.getParams(c.POST)},getUrlParams:function(){return this.getParams(c.GET)},getParams:function(e){var r=this;e||(e=c.GET);var n,a="$"+e,o=r[a],s=[];for(var f in o){n=o[f],t._a(n)||(n=[n]);for(var u=0;n.length>u;u++)s.push(f+"="+i(n[u]))}return s.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,c.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,c.POST,!0)},setParams:function(e,t,r,n){var i=this,s="$"+r;i[s]||(i[s]={});var c=i[s];if(!o(e)&&e){var f={};f[e]=t,e=f}for(var u in e)n&&a(c,u)||(c[u]=e[u])},setPostParams:function(e,t){var r=this;r.setParams(e,t,c.POST)},setUrlParams:function(e,t){this.setParams(e,t,c.GET)},get:function(e,t,r){var n=this,i=arguments.length,a=2==i,o=n.$attrs;if(i){for(var c=(e+"").split(".");o&&c[0];)o=o[c.shift()];c[0]&&(o=r)}return a&&s.call(t)!=s.call(o)&&(o=t),o},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),o(e))for(var n in e)r.$attrs[n]=e[n];else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,i){r.$abt||(o(i)||(i={data:i}),r.set(i),e(n,t))};r.$trans=r.sync(r.$temp=n)},abort:function(){var e=this,t=e.$trans,r=e.$temp;r&&r("abort"),e.$abt=1,t&&t.abort&&t.abort(),e.$trans=0},isAborted:function(){return this.$abt}}),c},{requires:["magix/magix"]}),KISSY.add("mxext/view",function(e,t,r,n){var i=window,a=0,o=t.safeExec,s=t.has,c=[],f="rendercall",u="destroy",v=function(e){i.clearTimeout(e),i.clearInterval(e)},m=function(e){var t=e&&e[u];t&&o(t,c,e)},h=function(e){var t=this,r=t.$res,n=e.type==f,i=e.type!=u;for(var a in r){var o=r[a];(!n||o.mr)&&t.destroyManaged(a,i)}},d=r.extend({navigate:n.navigate,manage:function(e,r,n){var i=this,o=arguments,s=1,c=i.$res;1==o.length?(r=e,e="res_"+a++,s=0):i.destroyManaged(e);var f;f=t._n(r)?v:m;var u={hk:s,res:r,ol:n,mr:r&&r.$reqs,oust:f};return c[e]=u,r},getManaged:function(e,t){var r=this,n=r.$res,i=null;if(s(n,e)){var a=n[e];i=a.res,t&&delete n[e]}return i},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e,t){var r,n=this,i=n.$res,a=i[e];return!a||t&&a.ol||(r=a.res,a.oust(r),a.hk&&t||delete i[e]),r}},function(){var e=this;e.$res={},e.on("interact",function(){e.on(f,h),e.on("prerender",h),e.on(u,h)}),o(d.ms,arguments,e)},{ms:[],mixin:function(e,r){r&&d.ms.push(r),t.mix(d.prototype,e)}});return d},{requires:["magix/magix","magix/view","magix/router"]}),document.createElement("vframe");