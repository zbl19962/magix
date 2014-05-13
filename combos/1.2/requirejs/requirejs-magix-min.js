(function(e,t,r,n,a,i){i=0,a=function(e){return e.id||(e.id="mx_n_"+ ++i)},n("magix/magix",function(){var r=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,n=/\/[^\/]*$/,a=/[#?].*$/,i="",o=/([^=&?\/#]+)=?([^&=#?]*)/g,s="path",c=/^https?:\/\//i,u=0,f="/",v="vframe",h="\n",l=t.console,m=l&&l.error,d=function(){},g={tagName:v,rootId:"magix_vf_root",coded:1,error:function(e){m&&l.error(e)}},p=g.hasOwnProperty,y=function(e,t){return e&&p.call(e,t)},x=function(t){return function(r,n,a){switch(arguments.length){case 0:a=t;break;case 1:a=O._o(r)?C(t,r):y(t,r)?t[r]:e;break;case 2:n===e?(delete t[r],a=n):t[r]=a=n}return a}},w=function(e,t){return t.f-e.f||t.t-e.t},b=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(0|t||5)):r=new b(e,t),r},C=function(e,t,r){for(var n in t)r&&y(r,n)||(e[n]=t[n]);return e};C(b.prototype,{get:function(e){var t,r=this,n=r.c;return e=s+e,y(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=u++,t=t.v)),t},list:function(){return this.c},set:function(e,t,r){var n=this,a=n.c,i=s+e,o=a[i];if(!y(a,i)){if(a.length>=n.b){a.sort(w);for(var c=n.b-n.x;c--;)o=a.pop(),delete a[o.k],o.m&&P(o.m,o.o,o)}o={},a.push(o),a[i]=o}return o.o=e,o.k=i,o.v=t,o.f=1,o.t=u++,o.m=r,t},del:function(e){e=s+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=i,delete t[e],r.m&&(P(r.m,r.o,r),r.m=i))},has:function(e){return y(this.c,s+e)}});var M=b(40),_=b(),P=function(e,t,r,n,a,i){for(O._a(e)||(e=[e]),t&&(O._a(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{i=e[n],a=i&&i.apply(r,t)}catch(o){g.error(o)}return a},O={mix:C,has:y,tryCall:P,noop:d,config:x(g),start:function(e){var t=this;C(g,e),t.use(["magix/router","magix/vom",e.iniFile],function(r,n,a){g=C(g,a,e),g["!tnc"]=g.tagName!=v,r.on("!ul",n.locChged),r.on("changed",n.locChged),t.use(g.extensions,r.start)})},keys:Object.keys||function(e){var t=[];for(var r in e)y(e,r)&&t.push(r);return t},local:x({}),path:function(e,t){var o=e+h+t,s=_.get(o);if(!s){if(c.test(t))s=t;else if(e=e.replace(a,i).replace(n,i)+f,t.charAt(0)==f){var u=c.test(e)?8:0,v=e.indexOf(f,u);s=e.substring(0,v)+t}else s=e+t;for(;r.test(s);)s=s.replace(r,"$1/");_.set(o,s)}return s},toObject:function(e){var t=e+h,r=M.get(t);if(!r){r={};var n={},u=i;a.test(e)?u=e.replace(a,i):~e.indexOf("=")||(u=e);var v=e.replace(u,i);if(u&&c.test(u)){var l=u.indexOf(f,8);u=~l?u.substring(l):f}v.replace(o,function(e,t,r){if(g.coded)try{r=decodeURIComponent(r)}catch(a){}n[t]=r}),r[s]=u,r.params=n,M.set(t,r)}return r},toUrl:function(e,t,r){var n,a=[];for(var i in t)n=t[i],(!r||n||y(r,i))&&(g.coded&&(n=encodeURIComponent(n)),a.push(i+"="+n));return a.length&&(e+="?"+a.join("&")),e},toMap:function(e,t){var r,n,a,i={};if(O._s(e)&&(e=e.split(",")),e&&(a=e.length))for(r=0;a>r;r++)n=e[r],i[t?n[t]:n]=t?n:1;return i},cache:b},k=Object.prototype.toString,I=function(){};return C(O,{use:function(e,t){e?($.isArray(e)||(e=[e]),require(e,t)):t&&t()},_a:$.isArray,_f:$.isFunction,_o:function(e){return"[object Object]"==k.call(e)},_s:function(e){return"[object String]"==k.call(e)},_n:function(e){return"[object Number]"==k.call(e)},extend:function(e,t,r,n){var a=t.prototype,i=e.prototype;return e.superclass=a,a.constructor=t,I.prototype=a,i=new I,O.mix(i,r),O.mix(e,n),i.constructor=e,e}})}),n("magix/router",["magix/magix","magix/event"],function(e,r){var n,a,i,o,s,c,u="",f="path",v="view",h=e.has,l=e.mix,m=e.keys,d=e.config(),g=e.cache(),p=e.cache(40),y={params:{},href:u},x=/#.*$/,w=/^[^#]*#?!?/,b="params",C=function(e,t,r){if(e){r=this[b],e=(e+u).split(",");for(var n=0;e.length>n&&!(t=h(r,e[n]));n++);}return t},M=function(){return this[f]},_=function(){return this[v]},P=function(e,t,r,n){return r=this,n=r[b],arguments.length>1?n[e]=t:n[e]},O=function(r){var n=e.toObject(r),a=n[f];return a&&s&&(n[f]=e.path(t.location.pathname,a)),n},k=l({viewInfo:function(t,r){var n,i;if(!a){a={rs:d.routes||{},nf:d.notFound};var o=d.defaultView;a.dv=o;var s=d.defaultPath||u;n=a.rs,a.f=e._f(n),a.f||n[s]||!o||(n[s]=o),a[f]=s}return t||(t=a[f]),n=a.rs,i=a.f?n.call(d,t,r):n[t],{view:i||a.nf||a.dv,path:t}},start:function(){var e=t.history;i=d.edge,o=i&&e.pushState,s=i&&!o,c=o?"srcQuery":"srcHash",o?k.useState():k.useHash(),k.route()},parseQH:function(e,r){e=e||t.location.href;var n=g.get(e);if(!n){var a=e.replace(x,u),o=e.replace(w,u),s=O(a),c=O(o),h={};l(h,s[b]),l(h,c[b]),n={get:P,set:P,href:e,refHref:y.href,srcQuery:a,srcHash:o,query:s,hash:c,params:h},g.set(e,n)}if(r&&!n[v]){var m;m=n.hash[f]||i&&n.query[f];var d=k.viewInfo(m,n);l(n,d)}return n},getChged:function(e,t){var r=e.href,n=t.href,a=r+"\n"+n,i=p.get(a);if(!i){var o,s,c;i={},i[v]=c,i[f]=c,i[b]={};var u,h,l=[f,v];for(u=1;u>=0;u--)h=l[u],s=e[h],c=t[h],s!=c&&(i[h]={from:s,to:c},o=1);var d=e[b],g=t[b];for(l=m(d).concat(m(g)),u=l.length-1;u>=0;u--)h=l[u],s=d[h],c=g[h],s!=c&&(i[b][h]={from:s,to:c},o=1);i.occur=o,i.isParam=C,i.isPath=M,i.isView=_,p.set(a,i)}return i},route:function(){var e=k.parseQH(0,1),t=!y.get,r=k.getChged(y,e);y=e,r.occur&&(n=e,k.fire("changed",{location:e,changed:r,force:t}))},navigate:function(t,r,a){if(!r&&e._o(t)&&(r=t,t=u),r&&(t=e.toUrl(t,r)),t){var i=O(t),v={};v[b]=l({},i[b]),v[f]=i[f];var m=n.query[b];if(v[f]){if(s)for(var d in m)h(m,d)&&!h(v[b],d)&&(v[b][d]=u)}else{var g=l({},n[b]);v[b]=l(g,v[b]),v[f]=n[f]}var p,$=e.toUrl(v[f],v[b],m);p=$!=n[c],p&&(o?(k.poped=1,history[a?"replaceState":"pushState"](u,u,$),k.route()):(l(v,n,v),v.srcHash=$,v.hash={params:v[b],path:v[f]},k.fire("!ul",{loc:n=v}),$="#!"+$,a?location.replace($):location.hash=$))}}},r);return k.useState=function(){var e=k,t=location.href;$(WIN).on("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())})},k.useHash=function(){$(WIN).on("hashchange",k.route)},k}),n("magix/body",["magix/magix"],function(t){var n,i=t.has,o={},s=String.fromCharCode(26),c=t.noop,u="mx-ei",f="mx-owner",v=r.body,h="parentNode",l={},m="on",d=",",g=function(e,t,r){return r?e.setAttribute(t,r):r=e.getAttribute(t),r},p=function(){this.prevent(),this.stop()},y={process:function(t){if(t&&!t[m]){var r=t.target||t.srcElement||v;for(t[m]=1;r&&1!=r.nodeType;)r=r[h];for(var o,$,y=r,x=t.type,w=l[x]||(l[x]=RegExp(d+x+"(?:,|$)")),b="mx-"+x,C=[];y&&1==y.nodeType&&(o=g(y,b),$=g(y,u),!o&&!w.test($));)C.push(y),y=y[h];if(o){var M,_=o.split(s);if(_.length>1&&(M=_[0],o=_.pop()),M=g(y,f)||M,!M)for(var P=y,O=n.all();P;){if(i(O,P.id)){g(y,f,M=P.id);break}P=P[h]}if(!M)throw Error("bad:"+o);var k=n.get(M),I=k&&k.view;I&&(t.currentId=a(y),t.targetId=a(r),t.prevent=t.preventDefault||c,t.stop=t.stopPropagation||c,t.halt=p,I.pEvt(o,x,t))}else{for(var T;C.length;)T=C.pop(),$=g(T,u)||m,w.test($)||($=$+d+x,g(T,u,$));T=e}y=r=e}},act:function(e,t,r){var a=o[e]||0,i=a>0?1:0,s=y.process;a+=t?-i:i,a||(r&&(n=r),y.lib(v,e,s,t),t||(a=1)),o[e]=a}},x={focus:2,blur:2,mouseenter:2,mouseleave:2},w=$.now();return y.lib=function(e,t,r,n,a,i){var o=x[t];if(a){r.$n||(r.$n=w--);var s="_$"+r.$n;a[s]||(a[s]=function(){r.apply(a,arguments)}),r=a[s]}i||2!=o?$(e)[n?"off":"on"](t,r):$(e)[(n?"un":"")+"delegate"]("[mx-"+t+"]",t,r)},y}),n("magix/event",["magix/magix"],function(e){var t=function(e){return"~"+e},r=e.tryCall,n={fire:function(e,n,a,i){var o=t(e),s=this,c=s[o];if(c){n||(n={}),n.type||(n.type=e);for(var u,f,v=c.length,h=v-1;v--;)u=i?v:h-v,f=c[u],(f.d||f.r)&&(c.splice(u,1),h--),f.d||r(f.f,n,s);a=a||0>h}a&&delete s[o]},on:function(e,r,n){var a=t(e),i=this[a]||(this[a]=[]),o={f:r};isNaN(n)?(o.r=n,i.push(o)):i.splice(0|n,0,o)},rely:function(e,r,n,a,i){var o=this;o.on(e,r,i),n.on(a,function(){o.off(e,r)},t)},off:function(e,r){var n=t(e),a=this[n];if(a)if(r){for(var i,o=a.length-1;o>=0;o--)if(i=a[o],i.f==r&&!i.d){i.d=1;break}}else delete this[n]},once:function(e,r){this.on(e,r,t)}};return e.mix(e.local,n),n}),n("magix/vframe",["magix/magix","magix/event","magix/view"],function(t,n,i){var o,s,c,u,f,v,h,l,m,d,g,p=t.tryCall,$=[],y=t.mix,x=t.config(),w="mx-vframe",b=t.has,C="querySelectorAll",M="alter",_="created",P=function(e){return"object"==typeof e?e:r.getElementById(e)},O=function(e,t,n){return t=P(e),t&&(n=c?r[C]("#"+a(t)+f):t.getElementsByTagName(o)),n||$},k=function(e,t,r){if(e=P(e),t=P(t),e&&t)if(e!==t)try{r=v?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},I=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=g,g.add(e,t)};return I.root=function(t,n,a){if(!h){o=x.tagName,s=x["!tnc"],c=s&&r[C],f=" "+o+"["+w+"=true]",u=s&&!c;var i=r.body;v=i.contains,m=n,d=a,g=t;var l=x.rootId,p=P(l);p||(p=r.createElement(o),p.id=l,i.appendChild(p),p=e),h=new I(l)}return h},y(y(I.prototype,n),{mountView:function(e,r,n){var a=this,o=P(a.id);if(a._a||(a._a=1,a._t=o.innerHTML),a.unmountView(n),a._d=0,e){var s=t.toObject(e),c=s.path,u=--a.sign;t.use(c,function(e){if(u==a.sign){i.prepare(e);var t=new e({owner:a,id:a.id,$:P,$c:k,path:c,vom:g,location:m});a.view=t;var n=function(e){a.mountZoneVframes(e.id)};t.on("interact",function(e){e.tmpl||(o.innerHTML=a._t,n(P)),t.on("primed",function(){a.viewPrimed=1,a.fire("viewMounted")}),t.on("rendered",n),t.on("prerender",function(e){a.unmountZoneVframes(e.id,e.keep,1)||a.cAlter()})},0),r=r||{},t.load(y(r,s.params,r),d)}})}},unmountView:function(e){var t=this,r=t.view;if(r){l||(l={}),t._d=1,t.unmountZoneVframes(0,e,1),t.cAlter(l),t.view=0,r.oust();var n=P(t.id);n&&t._a&&!e&&(n.innerHTML=t._t),t.viewInited=0,t.viewPrimed&&(t.viewPrimed=0,t.fire("viewUnmounted")),l=0}t.sign--},mountVframe:function(e,t,r,n,a){var i=this;i.fcc&&!n&&i.cAlter();var o=g.get(e);return o||(o=new I(e),o.pId=i.id,b(i.cM,e)||i.cC++,i.cM[e]=1),o._p=n,o.mountView(t,r,a),o},mountZoneVframes:function(e,t,r,n){var i=this;e=e||i.id,i.unmountZoneVframes(e,n,1);var o=O(e),s=o.length,c={};if(s)for(var f,v,h,l,m=0;s>m;m++)if(f=o[m],v=a(f),!b(c,v)&&(h=f.getAttribute("mx-view"),l=u?f.getAttribute(w):1,l||h)){i.mountVframe(v,h,t,r,n);for(var d,g=O(f),p=0,$=g.length;$>p;p++)d=g[p],c[a(d)]=1}i.cCreated()},unmountVframe:function(e,t,r){var n=this;e=e||n.id;var a=g.get(e);if(a){var i=a.fcc;a.unmountView(t),g.remove(e,i);var o=g.get(a.pId);o&&b(o.cM,e)&&(delete o.cM[e],o.cC--,r||n._d||o.cCreated())}},unmountZoneVframes:function(e,t,r){var n,a,i=this,o=i.cM;for(a in o)(!e||k(a,e))&&i.unmountVframe(a,t,n=1);return r||i._d||i.cCreated(),n},invokeView:function(e,t){var r,n=this;if(n.viewInited){var a=n.view,i=a&&a[e];i&&(r=p(i,t||$,a))}return r},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,t.fca=0,r.fire(_,e),t.fire(_,e));var n=t.id,a=g.get(t.pId);a&&!b(a.rM,n)&&(a.rM[n]=a.cM[n],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),!t.fca&&t.fcc){t.fcc=0;var r=t.view,n=t.id;r&&(t.fca=1,r.fire(M,e),t.fire(M,e));var a=g.get(t.pId);a&&b(a.rM,n)&&(a.rC--,delete a.rM[n],t._p||a.cAlter(e))}},locChged:function(){var e=this,r=e.view;if(e.viewInited&&r&&r.sign>0){var n=r.olChg(d),a={location:m,changed:d,prevent:function(){this.cs=$},to:function(e){t._s(e)&&(e=e.split(",")),this.cs=e||$}};n&&r.render(a);for(var i,o=a.cs||t.keys(e.cM),s=0,c=o.length;c>s;s++)i=g.get(o[s]),i&&i.locChged()}}}),I}),n("magix/view",["magix/magix","magix/event","magix/body","magix/router"],function(n,a,i,o){var s=n.tryCall,c=n.has,u=",",f=[],v=n.noop,h=n.mix,l=0,m="~",d="destroy",g=function(e){return function(){var t=this,r=t.notifyUpdate();r>0&&s(e,arguments,t)}},p=function(e){var t=e&&e[d];t&&s(t,f,e)},y=function(e){clearTimeout(e),clearInterval(e)},x=function(e,t){var r=this,n=r.$res;for(var a in n){var i=n[a];(!e||i.mr)&&r.destroyManaged(a,t)}},w=n.cache(40),b=/\smx-(?!view|owner|vframe)[a-z]+\s*=\s*"/g,C=String.fromCharCode(26),M=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,_=/(\w+):(['"]?)([^,]+)\2/g,P=/([$\w]+)<([\w,]+)>/,O=function(e){var t=this;h(t,e),t.$ol={ks:[]},t.$ns={},t.$res={},t.sign=1,t.addNode(t.id),s(O._,[e],t)},k=O.prototype,I={$win:t,$doc:r};O._=[],O.prepare=function(e){if(!e[m]){e[m]=1;var t,r,n,a,i,o,s=e.prototype,c={},f=[];for(var h in s)if(t=s[h],r=h.match(P))for(n=r[1],a=r[2],a=a.split(u),i=a.length-1;i>-1;i--)r=a[i],o=I[n],o?f.push({n:n,t:r,h:o,f:t}):(c[r]=1,s[n+C+r]=t);else"render"==h&&t!=v&&(s[h]=g(t));s.$evts=c,s.$sevts=f}},O.mixin=function(e,t){t&&O._.push(t),h(k,e)},h(h(k,a),{render:v,init:v,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=function(n){t&&(e.template=e.wrapMxEvent(n)),e.dEvts(),e.fire("interact",{tmpl:t},1),s(e.init,r,e),e.fire("inited",0,1),e.owner.viewInited=1,e.render();var a=!t&&!e.rendered;a&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(n)):n()},beginUpdate:function(e,t){var r=this;r.sign>0&&r.rendered&&(r.fire("prerender",{id:e,keep:t}),x.call(r,0,1))},endUpdate:function(e){var t=this;t.sign>0&&(t.rendered||(t.fire("primed",0,1),t.rendered=1),t.fire("rendered",{id:e}))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall"),x.call(e,1,1)),e.sign},wrapMxEvent:function(e){return(e+"").replace(b,"$&"+this.id+C)},wrapAsync:function(e){var t=this,r=t.sign;return function(){r>0&&r==t.sign&&e&&e.apply(this,arguments)}},setViewHTML:function(e,t){var r,n=this;n.beginUpdate(e),n.sign>0&&(r=n.$(e),r&&(r.innerHTML=t)),n.endUpdate(e)},observeLocation:function(e){var t,r=this;t=r.$ol,t.f=1;var a=t.ks;n._o(e)&&(t.pn=e.path,e=e.keys),e&&(t.ks=a.concat((e+"").split(u)))},olChg:function(e){var t,r=this,n=r.$ol;return n.f&&(n.pn&&(t=e.path),t||(t=e.isParam(n.ks))),t},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire(d,0,1,1),x.call(e),e.dEvts(1)),e.sign--},parentView:function(){var t=this,r=t.vom,n=t.owner,a=r.get(n.pId),i=e;return a&&a.viewInited&&(i=a.view),i},pEvt:function(e,t,r){var n=this;if(n.sign>0){var a=w.get(e);a||(a=e.match(M),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(_,function(e,t,r,n){a.p[t]=n}),w.set(e,a));var i=a.n+C+t,o=n[i];if(o){var c=r[a.f];c&&c.call(r),r.params=a.p,s(o,r,n)}}},dEvts:function(e){var t=this,r=t.$evts,n=t.vom;for(var a in r)i.act(a,e,n);for(r=t.$sevts,a=r.length;a-->0;)n=r[a],i.lib(n.h,n.t,n.f,e,t,1)},addNode:function(e){this.$ns[e]=1},removeNode:function(e){delete this.$ns[e]},inside:function(e){var t,r=this;for(var n in r.$ns)if(t=r.$c(e,n))break;if(!t)for(var a in r.cM){var i=r.owner.get(a);if(t=i.inside(e))break}return t},navigate:o.navigate,manage:function(e,t,r){var a=this,i=arguments,o=1,s=a.$res;1==i.length?(t=e,e="res_"+l++,o=0):a.destroyManaged(e);var c;c=n._n(t)?y:p;var u={hk:o,res:t,ol:r,mr:t&&t.$reqs,oust:c};return s[e]=u,t},getManaged:function(t,r){var n=this,a=n.$res,i=e;if(c(a,t)){var o=a[t];i=o.res,r&&delete a[t]}return i},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e,t){var r,n=this,a=n.$res,i=a[e];return!i||t&&i.ol||(r=i.res,i.oust(r),i.hk&&t||delete a[e]),r},dispatch:function(e,t,r){r=this,t||(t={}),t.type=e,t.target=r.$(r.id),i.process(t)}});var T={},q="?t="+Math.random(),A={},E={};return k.fetchTmpl=function(e,t){var r=this,n="template"in r;if(n)t(r.template);else if(c(A,e))t(A[e]);else{var a=e.indexOf("/"),i=e.substring(0,a);T[i]||(T[i]=require.s.contexts._.config.paths[i]);var o=T[i]+e.substring(a+1)+".html",u=E[o],f=function(r){t(A[e]=r)};u?u.push(f):(u=E[o]=[f],$.ajax({url:o+q,success:function(e){s(u,e),delete E[o]},error:function(e,t){s(u,t),delete E[o]}}))}},O.extend=function(e,t,r){var a=this,i=function(){i.superclass.constructor.apply(this,arguments),r&&s(r,arguments,this)};return i.extend=a.extend,n.extend(i,a,e,t)},O}),n("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e,t,r){var n=t.has,a=t.mix,i={},o={},s={},c=t.mix({all:function(){return i},add:function(e,t){n(i,e)||(i[e]=t,c.fire("add",{vframe:t}))},get:function(e){return i[e]},remove:function(e,t){var r=i[e];r&&(delete i[e],c.fire("remove",{vframe:r,fcc:t}))},locChged:function(t){var r,n=t.loc;if(n?r=1:n=t.location,a(o,n),!r){a(s,t.changed);var i=e.root(c,o,s);s.view?i.mountView(n.view):i.locChged()}}},r);return c}),n("magix/mmanager",["magix/magix","magix/event"],function(r,n){var a=r.has,i=r.tryCall,o=r._a,s=r._f,c=r._o,u=1,f=2,v=4,h=Date.now||function(){return+new Date},l=h(),m=t.JSON,d=r.mix,g="mr",p=String.fromCharCode(26),$=12e5,y=function(e,t,r,n){if(s(e))t&&(r=y(i(e)));else if(m)r=m.stringify(e);else if(c(e)||o(e)){r=[];for(n in e)a(e,n)&&r.push(n,g,y(e[n]))}else r=e;return r},x=function(e,t,r){for(var n,a=[t.name,y(r)],i={},o=e.length-1;o>-1;o--)n=e[o],i[n]||a.push(i[n]=y(t[n],1),y(r[n],1));return a.join(p)},w=function(e){var t=e.cache;return t&&(t=t===!0?$:0|t),t},b=function(e){throw Error(e)},C=function(e,t){var n=this;n.$mClass=e,n.$mCache=r.cache(),n.$mCacheKeys={},n.$mMetas={},n.$sKeys=["postParams","urlParams"].concat(t?o(t)?t:[t]:[]),n.id="mm"+l--,i(C.ms,arguments,n)},M=[].slice,_=function(e,t,r,n){return function(){return e.apply(t,[r,n].concat(M.call(arguments)))}},P=function(e,t){var r=t.b,n=t.a,a=n[r];if(a){var o=a.q;delete n[r],i(o,e,a.e)}},O=function(t,r,n){var a,o=this,s=r.a,c=r.c,l=r.d,m=r.g,d=r.i,g=r.j,p=r.k,$=r.l,y=r.m,x=r.n,w=r.o;r.b++,delete c[o.id];var b=o.$mm,C=b.key;if(l[t]=o,n)r.e=1,a=1,r.f=n,m.msg=n,m[t]=n,g.fire("fail",{model:o,msg:n});else{if(!C||C&&!d.has(C)){C&&d.set(C,o),b.time=h();var M=b.done;M&&i(M,o),g.fire("done",{model:o})}b.used>0&&(o.fromCache=1),b.used++}if(!s.$oust){if(p==u){var _=$?y[t]:y;_&&(x[t]=i(_,[a?m:e,o,m],s))}else if(p==f){w[t]={m:o,e:a,s:n};for(var P,O,k=w.i||0;P=w[k];k++)O=$?y[k]:y,P.e&&(m.msg=P.s,m[k]=P.s),x[k]=i(O,[P.e?m:e,P.m,m].concat(x),s);w.i=k}r.b==r.h&&(r.e||(m=e),p==v?(l.unshift(m),x[0]=m,x[1]=i(y,l,s)):x.unshift(m),s.$ntId=setTimeout(function(){s.doNext(x)},30))}},k=function(e){return function(){var t=new T(this),r=arguments,n=r[r.length-1];return n&&n.manage&&(n.manage(t),r=M.call(r,0,-1)),t[e].apply(t,r)}},I=function(e,t){return function(r,n){var a=M.call(arguments,1);return this.send(r,a.length>1?a:n,e,t)}};d(C,{create:function(e,t){return new C(e,t)},mixin:function(e,t){t&&C.ms.push(t),d(C.prototype,e)},ms:[]});var T=function(e){var t=this;t.$host=e,t.$reqs={},t.id=g+l--,t.$queue=[]};return d(T.prototype,{send:function(e,t,r,n){var i=this;if(i.$busy)return i.next(function(){this.send(e,t,r,n)}),i;i.$busy=1;var s=i.$host,c=s.$mCache,u=s.$mCacheKeys,f=i.$reqs;o(e)||(e=[e]);var v=e.length,h=[],l=o(t);l&&(h=Array(t.length));for(var m,d={a:i,b:0,c:i.$reqs,d:Array(v),g:{},h:v,i:c,j:s,k:r,l:l,m:t,n:h,o:[]},g=0;e.length>g;g++)if(m=e[g]){var p=s.getModel(m,n),$=p.cKey,y=p.entity,x=_(O,y,g,d);x.id=i.id,$&&a(u,$)?u[$].q.push(x):p.update?(f[y.id]=y,$&&(u[$]={q:[x],e:y},x=P),y.request(x,{a:u,b:$})):x()}else b("empty model");return i},fetchAll:function(e,t){return this.send(e,t,v)},saveAll:function(e,t){return this.send(e,t,v,1)},fetchOrder:I(f),saveOrder:I(f,1),saveOne:I(u,1),fetchOne:I(u),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqs,n=t.$mCacheKeys;for(var o in r){var s=r[o],c=s.$mm.key;if(c&&a(n,c)){for(var u,f=n[c],v=f.q,h=[],l=[],m=0;v.length>m;m++)u=v[m],u.id!=e.id?h.push(u):l.push(u);h.length?(i(l,"abort",f.e),f.q=h):s.abort()}else s.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;if(t.$queue.push(e),!t.$busy){var r=t.$args;t.doNext(r)}return t},doNext:function(e){var t=this;t.$busy=0;var r=t.$queue;if(r){var n=r.shift();n&&i(n,e,t)}t.$args=e},destroy:function(){var e=this;e.$oust=1,e.stop()}}),d(d(C.prototype,n),{registerModels:function(e){var t=this,r=t.$mMetas;o(e)||(e=[e]);for(var n,a,i,s=0;e.length>s;s++)n=e[s],n&&(a=n.name,a?r[a]&&b("already exist:"+a):b("miss name"),i=w(n),i&&(n.cache=i),r[a]=n)},registerMethods:function(e){d(this,e)},createModel:function(e){var t,r=this,n=r.getModelMeta(e),a=w(e)||n.cache,i=new r.$mClass;return i.set(n),i.$mm=t={used:0,done:n.done},a&&(t.key=x(r.$sKeys,n,e)),e.name&&i.set(e),i.setUrlParams(n.urlParams),i.setPostParams(n.postParams),i.setUrlParams(e.urlParams),i.setPostParams(e.postParams),r.fire("inited",{model:i}),i},getModelMeta:function(e){var t=this,r=t.$mMetas,n=e.name||e,a=r[n];return a||b("Unfound:"+n),a},getModel:function(e,t){var r,n,a=this;return t||(r=a.getCachedModel(e)),r||(n=1,r=a.createModel(e)),{entity:r,cKey:r.$mm.key,update:n}},saveAll:k("saveAll"),fetchAll:k("fetchAll"),saveOrder:k("saveOrder"),fetchOrder:k("fetchOrder"),saveOne:k("saveOne"),fetchOne:k("fetchOne"),createMRequest:function(e){var t=new T(this);return e&&e.manage&&e.manage(t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.list(),a=0;n.length>a;a++){var i=n[a],o=i.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(t){var r,n=this,a=n.$mCache,i=e,o=n.getModelMeta(t),s=w(t)||o.cache;if(s&&(r=x(n.$sKeys,o,t)),r){var c=n.$mCacheKeys,u=c[r];u?i=u.e:(i=a.get(r),i&&s>0&&h()-i.$mm.time>s&&(n.clearCacheByKey(r),i=0))}return i}}),C}),n("magix/model",["magix/magix"],function(e){var t=function(t,r,n){var a=this,i=function(){i.superclass.constructor.apply(this,arguments),n&&n.apply(this,arguments)};return e.extend(i,a,t,r)},r=+new Date,n=e.has,a=e._o,i=e.toString,o=function(e){this.set(e),this.id="m"+r--},s=function(e,t){return function(r,n){this.setParams(r,n,e,t)}},c="&",u="",f=/^\?|=(?=&|$)/g;return e.mix(o,{GET:"GET",POST:"POST",extend:t}),e.mix(o.prototype,{sync:e.noop,getPostParams:function(){return this.getParams(o.POST)},getUrlParams:function(){return this.getParams(o.GET)},getParams:function(t){var r=e.toUrl(u,this[c+(t||o.GET)]);return r=r.replace(f,u)},setUrlParamsIf:s(o.GET,1),setPostParamsIf:s(o.POST,1),setParams:function(t,r,a,i){var o,s,f,v=this,h=c+a;v[h]||(v[h]={}),f=v[h],e._f(t)&&(t=e.tryCall(t)),t&&e._s(t)&&(o={},o[t]=~t.indexOf("=")?u:r,t=o);for(s in t)i&&n(f,s)||(f[s]=t[s])},setPostParams:s(o.POST),setUrlParams:s(o.GET),get:function(e,t,r){var n=this,a=arguments.length,o=2==a,s=n.$attrs;if(a){for(var c=(e+"").split(".");s&&c[0];)s=s[c.shift()];c[0]&&(s=r)}return o&&i.call(t)!=i.call(s)&&(s=t),s},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),a(e))for(var n in e)r.$attrs[n]=e[n];else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,i){r.$abt||(a(i)||(i={data:i}),r.set(i),e(n,t))};r.$trans=r.sync(r.$temp=n)},abort:function(){var e=this,t=e.$trans,r=e.$temp;r&&r("abort"),e.$abt=1,t&&t.abort&&t.abort(),e.$trans=0},isAborted:function(){return this.$abt}}),o}),r.createElement("vframe")})(null,this,document,define);