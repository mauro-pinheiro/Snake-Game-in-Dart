{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.ef(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.co"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.co"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.co(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={cb:function cb(){},
dC:function(a,b,c,d){P.dB(b,"start")
return new H.ba(a,b,c,[d])},
dt:function(){return new P.aq("No element")},
aI:function aI(){},
aW:function aW(){},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
an:function an(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ak:function(a){var u,t=H.eg(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
e4:function(a){return v.types[H.M(a)]},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ay(a)
if(typeof u!=="string")throw H.e(H.cR(a))
return u},
a9:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ao:function(a){return H.dy(a)+H.cl(H.aj(a),0,null)},
dy:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.r(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.x||!!l.$iac){r=C.f(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.j.an(t,0)===36){if(1>n)H.J(P.cd(1,m))
if(n>n)H.J(P.cd(n,m))
t=t.substring(1,n)}return H.ak(t)},
cY:function(a){throw H.e(H.cR(a))},
C:function(a,b){if(a==null)J.a_(a)
throw H.e(H.bY(a,b))},
bY:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.H(!0,b,s,null)
u=H.M(J.a_(a))
if(!(b<0)){if(typeof u!=="number")return H.cY(u)
t=b>=u}else t=!0
if(t)return P.cz(b,a,s,null,u)
return P.cd(b,s)},
cR:function(a){return new P.H(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.a8()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.d5})
u.name=""}else u.toString=H.d5
return u},
d5:function(){return J.ay(this.dartException)},
J:function(a){throw H.e(a)},
d4:function(a){throw H.e(P.aF(a))},
F:function(a){var u,t,s,r,q,p
a=H.ed(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.av([],[P.y])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.bc(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
bd:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
cF:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
cB:function(a,b){return new H.b_(a,b==null?null:b.method)},
cc:function(a,b){var u=b==null,t=u?null:b.method
return new H.aR(a,t,u?null:b.receiver)},
Z:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.c6(a)
if(a==null)return
if(a instanceof H.a5)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.ay(t,16)&8191)===10)switch(s){case 438:return f.$1(H.cc(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.cB(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.d7()
q=$.d8()
p=$.d9()
o=$.da()
n=$.dd()
m=$.de()
l=$.dc()
$.db()
k=$.dg()
j=$.df()
i=r.m(u)
if(i!=null)return f.$1(H.cc(H.N(u),i))
else{i=q.m(u)
if(i!=null){i.method="call"
return f.$1(H.cc(H.N(u),i))}else{i=p.m(u)
if(i==null){i=o.m(u)
if(i==null){i=n.m(u)
if(i==null){i=m.m(u)
if(i==null){i=l.m(u)
if(i==null){i=o.m(u)
if(i==null){i=k.m(u)
if(i==null){i=j.m(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.cB(H.N(u),i))}}return f.$1(new H.bg(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ap()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.H(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ap()
return a},
Y:function(a){var u
if(a instanceof H.a5)return a.b
if(a==null)return new H.as(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.as(a)},
e8:function(a,b,c,d,e,f){H.k(a,"$ic9")
switch(H.M(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.bs("Unsupported number of arguments for wrapped closure"))},
ah:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.e8)
a.$identity=u
return u},
dn:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.b5().constructor.prototype):Object.create(new H.a0(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.D
if(typeof t!=="number")return t.t()
$.D=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.cy(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.dj(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cy(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
dj:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.e4,a)
if(typeof a=="function")if(b)return a
else{u=c?H.cx:H.c8
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
dk:function(a,b,c,d){var u=H.c8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
cy:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.dm(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.dk(t,!r,u,b)
if(t===0){r=$.D
if(typeof r!=="number")return r.t()
$.D=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.a1
return new Function(r+H.d(q==null?$.a1=H.aD("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.D
if(typeof r!=="number")return r.t()
$.D=r+1
o+=r
r="return function("+o+"){return this."
q=$.a1
return new Function(r+H.d(q==null?$.a1=H.aD("self"):q)+"."+H.d(u)+"("+o+");}")()},
dl:function(a,b,c,d){var u=H.c8,t=H.cx
switch(b?-1:a){case 0:throw H.e(new H.b1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
dm:function(a,b){var u,t,s,r,q,p,o,n=$.a1
if(n==null)n=$.a1=H.aD("self")
u=$.cw
if(u==null)u=$.cw=H.aD("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.dl(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.D
if(typeof u!=="number")return u.t()
$.D=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.D
if(typeof u!=="number")return u.t()
$.D=u+1
return new Function(n+u+"}")()},
co:function(a,b,c,d,e,f,g){return H.dn(a,b,c,d,!!e,!!f,g)},
c8:function(a){return a.a},
cx:function(a){return a.c},
aD:function(a){var u,t,s,r=new H.a0("self","target","receiver","name"),q=J.cA(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
e0:function(a){if(a==null)H.dX("boolean expression must not be null")
return a},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.G(a,"String"))},
d0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.G(a,"num"))},
ez:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.G(a,"bool"))},
M:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.G(a,"int"))},
d2:function(a,b){throw H.e(H.G(a,H.ak(H.N(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.r(a)[b])return a
H.d2(a,b)},
eE:function(a){if(a==null)return a
if(!!J.r(a).$iI)return a
throw H.e(H.G(a,"List<dynamic>"))},
e9:function(a,b){var u
if(a==null)return a
u=J.r(a)
if(!!u.$iI)return a
if(u[b])return a
H.d2(a,b)},
cU:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.M(u)]
else return a.$S()}return},
au:function(a,b){var u
if(typeof a=="function")return!0
u=H.cU(J.r(a))
if(u==null)return!1
return H.cK(u,null,b,null)},
f:function(a,b){var u,t
if(a==null)return a
if($.ci)return a
$.ci=!0
try{if(H.au(a,b))return a
u=H.c5(b)
t=H.G(a,u)
throw H.e(t)}finally{$.ci=!1}},
ai:function(a,b){if(a!=null&&!H.cn(a,b))H.J(H.G(a,H.c5(b)))
return a},
G:function(a,b){return new H.be("TypeError: "+P.aJ(a)+": type '"+H.d(H.dV(a))+"' is not a subtype of type '"+b+"'")},
dV:function(a){var u,t=J.r(a)
if(!!t.$ia3){u=H.cU(t)
if(u!=null)return H.c5(u)
return"Closure"}return H.ao(a)},
dX:function(a){throw H.e(new H.bj(a))},
ef:function(a){throw H.e(new P.aG(a))},
cV:function(a){return v.getIsolateTag(a)},
av:function(a,b){a.$ti=b
return a},
aj:function(a){if(a==null)return
return a.$ti},
eC:function(a,b,c){return H.aw(a["$a"+H.d(c)],H.aj(b))},
h:function(a,b){var u=H.aj(a)
return u==null?null:u[b]},
c5:function(a){return H.L(a,null)},
L:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ak(a[0].name)+H.cl(a,1,b)
if(typeof a=="function")return H.ak(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.M(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.C(b,t)
return H.d(b[t])}if('func' in a)return H.dN(a,b)
if('futureOr' in a)return"FutureOr<"+H.L("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
dN:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.av([],[P.y])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.l(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.C(a0,m)
p=C.j.t(p,a0[m])
l=u[q]
if(l!=null&&l!==P.n)p+=" extends "+H.L(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.L(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.L(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.L(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.e1(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.N(n[g])
i=i+h+H.L(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
cl:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ab("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.L(p,c)}return"<"+u.h(0)+">"},
aw:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ag:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.aj(a)
t=J.r(a)
if(t[b]==null)return!1
return H.cQ(H.aw(t[d],u),null,c,null)},
at:function(a,b,c,d){if(a==null)return a
if(H.ag(a,b,c,d))return a
throw H.e(H.G(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ak(b.substring(2))+H.cl(c,0,null),v.mangledGlobalNames)))},
cQ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.z(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.z(a[t],b,c[t],d))return!1
return!0},
eA:function(a,b,c){return a.apply(b,H.aw(J.r(b)["$a"+H.d(c)],H.aj(b)))},
cZ:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="n"||a.name==="j"||a===-1||a===-2||H.cZ(u)}return!1},
cn:function(a,b){var u,t
if(a==null)return b==null||b.name==="n"||b.name==="j"||b===-1||b===-2||H.cZ(b)
if(b==null||b===-1||b.name==="n"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cn(a,"type" in b?b.type:null))return!0
if('func' in b)return H.au(a,b)}u=J.r(a).constructor
t=H.aj(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.z(u,null,b,null)},
i:function(a,b){if(a!=null&&!H.cn(a,b))throw H.e(H.G(a,H.c5(b)))
return a},
z:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="n"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="n"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.z(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="j")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.z("type" in a?a.type:l,b,s,d)
else if(H.z(a,b,s,d))return!0
else{if(!('$i'+"w" in t.prototype))return!1
r=t.prototype["$a"+"w"]
q=H.aw(r,u?a.slice(1):l)
return H.z(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.cK(a,b,c,d)
if('func' in a)return c.name==="c9"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.cQ(H.aw(m,u),b,p,d)},
cK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.z(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.z(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.z(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.z(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ec(h,b,g,d)},
ec:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.z(c[s],d,a[s],b))return!1}return!0},
eB:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ea:function(a){var u,t,s,r,q=H.N($.cX.$1(a)),p=$.bZ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.c3[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.N($.cP.$2(a,q))
if(q!=null){p=$.bZ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.c3[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.c4(u)
$.bZ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.c3[q]=u
return u}if(s==="-"){r=H.c4(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.d1(a,u)
if(s==="*")throw H.e(P.cG(q))
if(v.leafTags[q]===true){r=H.c4(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.d1(a,u)},
d1:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.cr(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
c4:function(a){return J.cr(a,!1,null,!!a.$iek)},
eb:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.c4(u)
else return J.cr(u,c,null,null)},
e6:function(){if(!0===$.cq)return
$.cq=!0
H.e7()},
e7:function(){var u,t,s,r,q,p,o,n
$.bZ=Object.create(null)
$.c3=Object.create(null)
H.e5()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.d3.$1(q)
if(p!=null){o=H.eb(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
e5:function(){var u,t,s,r,q,p,o=C.p()
o=H.W(C.q,H.W(C.r,H.W(C.h,H.W(C.h,H.W(C.t,H.W(C.u,H.W(C.v(C.f),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.cX=new H.c0(r)
$.cP=new H.c1(q)
$.d3=new H.c2(p)},
W:function(a,b){return a(b)||b},
ed:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bc:function bc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b_:function b_(a,b){this.a=a
this.b=b},
aR:function aR(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a){this.a=a},
a5:function a5(a,b){this.a=a
this.b=b},
c6:function c6(a){this.a=a},
as:function as(a){this.a=a
this.b=null},
a3:function a3(){},
bb:function bb(){},
b5:function b5(){},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
be:function be(a){this.a=a},
b1:function b1(a){this.a=a},
bj:function bj(a){this.a=a},
c0:function c0(a){this.a=a},
c1:function c1(a){this.a=a},
c2:function c2(a){this.a=a},
e1:function(a){return J.du(a?Object.keys(a):[],null)},
eg:function(a){return v.mangledGlobalNames[a]}},J={
cr:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cW:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.cq==null){H.e6()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.cG("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.cs()]
if(r!=null)return r
r=H.ea(a)
if(r!=null)return r
if(typeof a=="function")return C.y
u=Object.getPrototypeOf(a)
if(u==null)return C.k
if(u===Object.prototype)return C.k
if(typeof s=="function"){Object.defineProperty(s,$.cs(),{value:C.e,enumerable:false,writable:true,configurable:true})
return C.e}return C.e},
du:function(a,b){return J.cA(H.av(a,[b]))},
cA:function(a){a.fixed$length=Array
return a},
r:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.al.prototype
return J.aO.prototype}if(typeof a=="string")return J.a6.prototype
if(a==null)return J.aP.prototype
if(typeof a=="boolean")return J.aN.prototype
if(a.constructor==Array)return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a7.prototype
return a}if(a instanceof P.n)return a
return J.cW(a)},
e2:function(a){if(a==null)return a
if(a.constructor==Array)return J.K.prototype
if(!(a instanceof P.n))return J.ac.prototype
return a},
e3:function(a){if(typeof a=="string")return J.a6.prototype
if(a==null)return a
if(a.constructor==Array)return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a7.prototype
return a}if(a instanceof P.n)return a
return J.cW(a)},
c7:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).n(a,b)},
dh:function(a,b){return J.e2(a).P(a,b)},
cu:function(a){return J.r(a).gj(a)},
a_:function(a){return J.e3(a).gi(a)},
ay:function(a){return J.r(a).h(a)},
t:function t(){},
aN:function aN(){},
aP:function aP(){},
am:function am(){},
b0:function b0(){},
ac:function ac(){},
a7:function a7(){},
K:function K(a){this.$ti=a},
ca:function ca(a){this.$ti=a},
aB:function aB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aQ:function aQ(){},
al:function al(){},
aO:function aO(){},
a6:function a6(){}},P={
dD:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.dY()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ah(new P.bm(s),1)).observe(u,{childList:true})
return new P.bl(s,u,t)}else if(self.setImmediate!=null)return P.dZ()
return P.e_()},
dE:function(a){self.scheduleImmediate(H.ah(new P.bn(H.f(a,{func:1,ret:-1})),0))},
dF:function(a){self.setImmediate(H.ah(new P.bo(H.f(a,{func:1,ret:-1})),0))},
dG:function(a){H.f(a,{func:1,ret:-1})
P.dH(0,a)},
dH:function(a,b){var u=new P.bQ()
u.ag(a,b)
return u},
dP:function(a){return new P.bk(new P.p($.l,[a]),[a])},
dL:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
dI:function(a,b){P.dM(a,b)},
dK:function(a,b){b.O(0,a)},
dJ:function(a,b){b.a3(H.Z(a),H.Y(a))},
dM:function(a,b){var u,t=null,s=new P.bT(b),r=new P.bU(b),q=J.r(a)
if(!!q.$ip)a.a1(s,r,t)
else if(!!q.$iw)a.S(s,r,t)
else{u=new P.p($.l,[null])
H.i(a,null)
u.a=4
u.c=a
u.a1(s,t,t)}},
dW:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.l.a7(new P.bX(u),P.j,P.A,null)},
cH:function(a,b){var u,t,s
b.a=1
try{a.S(new P.bx(b),new P.by(b),null)}catch(s){u=H.Z(s)
t=H.Y(s)
P.ee(new P.bz(b,u,t))}},
bw:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$ip")
if(u>=4){t=b.C()
b.a=a.a
b.c=a.c
P.T(b,t)}else{t=H.k(b.c,"$iB")
b.a=2
b.c=a
a.a_(t)}},
T:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iu")
P.bV(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.T(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.k(q,"$iu")
P.bV(i,i,g.b,q.a,q.b)
return}l=$.l
if(l!==n)$.l=n
else l=i
g=b.c
if((g&15)===8)new P.bE(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.bD(u,b,q).$0()}else if((g&2)!==0)new P.bC(h,u,b).$0()
if(l!=null)$.l=l
g=u.b
if(!!J.r(g).$iw){if(g.a>=4){k=H.k(o.c,"$iB")
o.c=null
b=o.D(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.bw(g,o)
return}}j=b.b
k=H.k(j.c,"$iB")
j.c=null
b=j.D(k)
g=u.a
p=u.b
if(!g){H.i(p,H.h(j,0))
j.a=4
j.c=p}else{H.k(p,"$iu")
j.a=8
j.c=p}h.a=j
g=j}},
dR:function(a,b){if(H.au(a,{func:1,args:[P.n,P.q]}))return b.a7(a,null,P.n,P.q)
if(H.au(a,{func:1,args:[P.n]}))return H.f(a,{func:1,ret:null,args:[P.n]})
throw H.e(P.cv(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
dQ:function(){var u,t
for(;u=$.U,u!=null;){$.af=null
t=u.b
$.U=t
if(t==null)$.ae=null
u.a.$0()}},
dU:function(){$.cj=!0
try{P.dQ()}finally{$.af=null
$.cj=!1
if($.U!=null)$.ct().$1(P.cS())}},
cN:function(a){var u=new P.ar(a)
if($.U==null){$.U=$.ae=u
if(!$.cj)$.ct().$1(P.cS())}else $.ae=$.ae.b=u},
dT:function(a){var u,t,s=$.U
if(s==null){P.cN(a)
$.af=$.ae
return}u=new P.ar(a)
t=$.af
if(t==null){u.b=s
$.U=$.af=u}else{u.b=t.b
$.af=t.b=u
if(u.b==null)$.ae=u}},
ee:function(a){var u=null,t=$.l
if(C.b===t){P.V(u,u,C.b,a)
return}P.V(u,u,t,H.f(t.a2(a),{func:1,ret:-1}))},
em:function(a,b){if(a==null)H.J(P.di("stream"))
return new P.bO([b])},
bV:function(a,b,c,d,e){var u={}
u.a=d
P.dT(new P.bW(u,e))},
cL:function(a,b,c,d,e){var u,t=$.l
if(t===c)return d.$0()
$.l=c
u=t
try{t=d.$0()
return t}finally{$.l=u}},
cM:function(a,b,c,d,e,f,g){var u,t=$.l
if(t===c)return d.$1(e)
$.l=c
u=t
try{t=d.$1(e)
return t}finally{$.l=u}},
dS:function(a,b,c,d,e,f,g,h,i){var u,t=$.l
if(t===c)return d.$2(e,f)
$.l=c
u=t
try{t=d.$2(e,f)
return t}finally{$.l=u}},
V:function(a,b,c,d){var u
H.f(d,{func:1,ret:-1})
u=C.b!==c
if(u)d=!(!u||!1)?c.a2(d):c.aC(d,-1)
P.cN(d)},
bm:function bm(a){this.a=a},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
bn:function bn(a){this.a=a},
bo:function bo(a){this.a=a},
bQ:function bQ(){},
bR:function bR(a,b){this.a=a
this.b=b},
bk:function bk(a,b){this.a=a
this.b=!1
this.$ti=b},
bT:function bT(a){this.a=a},
bU:function bU(a){this.a=a},
bX:function bX(a){this.a=a},
bp:function bp(){},
bP:function bP(a,b){this.a=a
this.$ti=b},
B:function B(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
p:function p(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bt:function bt(a,b){this.a=a
this.b=b},
bB:function bB(a,b){this.a=a
this.b=b},
bx:function bx(a){this.a=a},
by:function by(a){this.a=a},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a,b){this.a=a
this.b=b},
bA:function bA(a,b){this.a=a
this.b=b},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a){this.a=a},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a){this.a=a
this.b=null},
b6:function b6(){},
b8:function b8(a,b){this.a=a
this.b=b},
b9:function b9(a,b){this.a=a
this.b=b},
b7:function b7(){},
bO:function bO(a){this.$ti=a},
u:function u(a,b){this.a=a
this.b=b},
bS:function bS(){},
bW:function bW(a,b){this.a=a
this.b=b},
bK:function bK(){},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(a,b){this.a=a
this.b=b},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
dq:function(a,b){return new P.bG([a,b])},
cg:function(a,b){var u=a[b]
return u===a?null:u},
ch:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
cI:function(){var u=Object.create(null)
P.ch(u,"<non-identifier-key>",u)
delete u["<non-identifier-key>"]
return u},
ds:function(a,b,c){var u,t
if(P.ck(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.av([],[P.y])
C.a.l($.v,a)
try{P.dO(a,u)}finally{if(0>=$.v.length)return H.C($.v,-1)
$.v.pop()}t=P.cE(b,H.e9(u,"$iQ"),", ")+c
return t.charCodeAt(0)==0?t:t},
dr:function(a,b,c){var u,t
if(P.ck(a))return b+"..."+c
u=new P.ab(b)
C.a.l($.v,a)
try{t=u
t.a=P.cE(t.a,a,", ")}finally{if(0>=$.v.length)return H.C($.v,-1)
$.v.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ck:function(a){var u,t
for(u=$.v.length,t=0;t<u;++t)if(a===$.v[t])return!0
return!1},
dO:function(a,b){var u,t,s,r,q,p,o,n=a.gE(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.k())return
u=H.d(n.gp())
C.a.l(b,u)
m+=u.length+2;++l}if(!n.k()){if(l<=5)return
if(0>=b.length)return H.C(b,-1)
t=b.pop()
if(0>=b.length)return H.C(b,-1)
s=b.pop()}else{r=n.gp();++l
if(!n.k()){if(l<=4){C.a.l(b,H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.C(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gp();++l
for(;n.k();r=q,q=p){p=n.gp();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.C(b,-1)
m-=b.pop().length+2;--l}C.a.l(b,"...")
return}}s=H.d(r)
t=H.d(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.C(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.l(b,o)
C.a.l(b,s)
C.a.l(b,t)},
dx:function(a){var u,t={}
if(P.ck(a))return"{...}"
u=new P.ab("")
try{C.a.l($.v,a)
u.a+="{"
t.a=!0
a.a4(0,new P.aY(t,u))
u.a+="}"}finally{if(0>=$.v.length)return H.C($.v,-1)
$.v.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
bG:function bG(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bH:function bH(a,b){this.a=a
this.$ti=b},
bI:function bI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aX:function aX(){},
aY:function aY(a,b){this.a=a
this.b=b},
aZ:function aZ(){},
dp:function(a){if(a instanceof H.a3)return a.h(0)
return"Instance of '"+H.d(H.ao(a))+"'"},
cE:function(a,b,c){var u=new J.aB(b,b.length,[H.h(b,0)])
if(!u.k())return a
if(c.length===0){do a+=H.d(u.d)
while(u.k())}else{a+=H.d(u.d)
for(;u.k();)a=a+c+H.d(u.d)}return a},
aJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ay(a)
if(typeof a==="string")return JSON.stringify(a)
return P.dp(a)},
cv:function(a,b,c){return new P.H(!0,a,b,c)},
di:function(a){return new P.H(!1,null,a,"Must not be null")},
dz:function(a){var u=null
return new P.aa(u,u,!1,u,u,a)},
cd:function(a,b){return new P.aa(null,null,!0,a,b,"Value not in range")},
dA:function(a,b,c,d,e){return new P.aa(b,c,!0,a,d,"Invalid value")},
dB:function(a,b){if(typeof a!=="number")return a.aa()},
cz:function(a,b,c,d,e){var u=H.M(e==null?J.a_(b):e)
return new P.aM(u,!0,a,c,"Index out of range")},
S:function(a){return new P.bh(a)},
cG:function(a){return new P.bf(a)},
cD:function(a){return new P.aq(a)},
aF:function(a){return new P.aE(a)},
dw:function(a,b,c){var u,t=H.av([],[c])
C.a.si(t,a)
for(u=0;u<a;++u)C.a.G(t,u,b.$1(u))
return t},
X:function X(){},
c_:function c_(){},
P:function P(){},
aC:function aC(){},
a8:function a8(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aM:function aM(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bh:function bh(a){this.a=a},
bf:function bf(a){this.a=a},
aq:function aq(a){this.a=a},
aE:function aE(a){this.a=a},
ap:function ap(){},
aG:function aG(a){this.a=a},
bs:function bs(a){this.a=a},
A:function A(){},
Q:function Q(){},
I:function I(){},
j:function j(){},
m:function m(){},
n:function n(){},
q:function q(){},
y:function y(){},
ab:function ab(a){this.a=a},
cJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
bJ:function bJ(){},
o:function o(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
cf:function(a,b,c,d,e){var u=W.cO(new W.br(c),W.a),t=u!=null
if(t&&!0){H.f(u,{func:1,args:[W.a]})
if(t)C.o.ah(a,b,u,!1)}return new W.bq(a,b,u,!1,[e])},
cO:function(a,b){var u=$.l
if(u===C.b)return a
return u.aD(a,b)},
c:function c(){},
az:function az(){},
aA:function aA(){},
O:function O(){},
a2:function a2(){},
aH:function aH(){},
b:function b(){},
a:function a(){},
a4:function a4(){},
aK:function aK(){},
E:function E(){},
R:function R(){},
b2:function b2(){},
x:function x(){},
ad:function ad(){},
bi:function bi(a){this.a=a},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bq:function bq(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
br:function br(a){this.a=a}},F={
d_:function(){var u,t,s=H.k(document.querySelector("#canvas"),"$iO")
$.cm=s
$.cp=H.k((s&&C.w).a9(s,"2d"),"$ia2")
s=new F.aL()
u=$.cm
t=u.width
if(typeof t!=="number")return t.ad()
s.b=C.c.a0(t,10)
u=u.height
if(typeof u!=="number")return u.ad()
s.c=C.c.a0(u,10)
s.d=F.cC()
s.sL(s.N())
s.w()},
cT:function(a,b){var u,t,s=$.cp
s.fillStyle=b
s.strokeStyle="white"
u=a.a*10
t=a.b*10
s.fillRect(u,t,10,10)
s.strokeRect(u,t,10,10)},
dv:function(){var u=new F.aS(P.dq(P.A,P.m))
u.ae()
return u},
cC:function(){var u=new F.b3(C.d)
u.af({})
return u},
aS:function aS(a){this.a=a},
aU:function aU(a){this.a=a},
aT:function aT(a){this.a=a},
aV:function aV(a){this.a=a},
b3:function b3(a){this.a=null
this.b=a},
b4:function b4(a){this.a=a},
aL:function aL(){var _=this
_.a=0
_.e=_.d=_.c=_.b=null}}
var w=[C,H,J,P,W,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.cb.prototype={}
J.t.prototype={
n:function(a,b){return a===b},
gj:function(a){return H.a9(a)},
h:function(a){return"Instance of '"+H.d(H.ao(a))+"'"}}
J.aN.prototype={
h:function(a){return String(a)},
gj:function(a){return a?519018:218159},
$iX:1}
J.aP.prototype={
n:function(a,b){return null==b},
h:function(a){return"null"},
gj:function(a){return 0},
$ij:1}
J.am.prototype={
gj:function(a){return 0},
h:function(a){return String(a)}}
J.b0.prototype={}
J.ac.prototype={}
J.a7.prototype={
h:function(a){var u=a[$.d6()]
if(u==null)return this.ac(a)
return"JavaScript function for "+H.d(J.ay(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ic9:1}
J.K.prototype={
l:function(a,b){H.i(b,H.h(a,0))
if(!!a.fixed$length)H.J(P.S("add"))
a.push(b)},
aJ:function(a){if(!!a.fixed$length)H.J(P.S("removeLast"))
if(a.length===0)throw H.e(H.bY(a,-1))
return a.pop()},
P:function(a,b){if(b<0||b>=a.length)return H.C(a,b)
return a[b]},
gq:function(a){if(a.length>0)return a[0]
throw H.e(H.dt())},
h:function(a){return P.dr(a,"[","]")},
gj:function(a){return H.a9(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.J(P.S("set length"))
if(b<0)throw H.e(P.dA(b,0,null,"newLength",null))
a.length=b},
G:function(a,b,c){H.i(c,H.h(a,0))
if(!!a.immutable$list)H.J(P.S("indexed set"))
if(b>=a.length||!1)throw H.e(H.bY(a,b))
a[b]=c},
$iQ:1,
$iI:1}
J.ca.prototype={}
J.aB.prototype={
gp:function(){return this.d},
k:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.d4(s))
u=t.c
if(u>=r){t.sZ(null)
return!1}t.sZ(s[u]);++t.c
return!0},
sZ:function(a){this.d=H.i(a,H.h(this,0))}}
J.aQ.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
a0:function(a,b){return(a|0)===a?a/b|0:this.aA(a,b)},
aA:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.S("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
ay:function(a,b){var u
if(a>0)u=this.ax(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ax:function(a,b){return b>31?0:a>>>b},
$im:1}
J.al.prototype={$iA:1}
J.aO.prototype={}
J.a6.prototype={
an:function(a,b){if(b>=a.length)throw H.e(H.bY(a,b))
return a.charCodeAt(b)},
t:function(a,b){if(typeof b!=="string")throw H.e(P.cv(b,null,null))
return a+b},
h:function(a){return a},
gj:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gi:function(a){return a.length},
$iy:1}
H.aI.prototype={}
H.aW.prototype={
gE:function(a){var u=this
return new H.an(u,u.gi(u),u.$ti)}}
H.ba.prototype={
gaq:function(){var u=J.a_(this.a)
return u},
gaz:function(){var u=J.a_(this.a),t=this.b
if(t>u)return u
return t},
gi:function(a){var u=J.a_(this.a),t=this.b
if(t>=u)return 0
return u-t},
P:function(a,b){var u,t=this,s=t.gaz()+b
if(b>=0){u=t.gaq()
if(typeof u!=="number")return H.cY(u)
u=s>=u}else u=!0
if(u)throw H.e(P.cz(b,t,"index",null,null))
return J.dh(t.a,s)}}
H.an.prototype={
gp:function(){return this.d},
k:function(){var u,t=this,s=t.a,r=s.gi(s)
if(t.b!==r)throw H.e(P.aF(s))
u=t.c
if(u>=r){t.sU(null)
return!1}t.sU(s.P(0,u));++t.c
return!0},
sU:function(a){this.d=H.i(a,H.h(this,0))}}
H.bc.prototype={
m:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.b_.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.aR.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.bg.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.a5.prototype={}
H.c6.prototype={
$1:function(a){if(!!J.r(a).$iP)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.as.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iq:1}
H.a3.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ic9:1,
gaO:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bb.prototype={}
H.b5.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ak(u)+"'"}}
H.a0.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.a0))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gj:function(a){var u,t=this.c
if(t==null)u=H.a9(this.a)
else u=typeof t!=="object"?J.cu(t):H.a9(t)
return(u^H.a9(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.ao(u))+"'")}}
H.be.prototype={
h:function(a){return this.a}}
H.b1.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.bj.prototype={
h:function(a){return"Assertion failed: "+P.aJ(this.a)}}
H.c0.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.c1.prototype={
$2:function(a,b){return this.a(a,b)},
$S:6}
H.c2.prototype={
$1:function(a){return this.a(H.N(a))},
$S:7}
P.bm.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:4}
P.bl.prototype={
$1:function(a){var u,t
this.a.a=H.f(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:8}
P.bn.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bo.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bQ.prototype={
ag:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ah(new P.bR(this,b),0),a)
else throw H.e(P.S("`setTimeout()` not found."))}}
P.bR.prototype={
$0:function(){this.b.$0()},
$S:1}
P.bk.prototype={
O:function(a,b){var u,t,s=this,r=H.h(s,0)
H.ai(b,{futureOr:1,type:r})
u=!s.b||H.ag(b,"$iw",s.$ti,"$aw")
t=s.a
if(u)t.aj(b)
else t.W(H.i(b,r))},
a3:function(a,b){var u=this.a
if(this.b)u.u(a,b)
else u.ak(a,b)}}
P.bT.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:9}
P.bU.prototype={
$2:function(a,b){this.a.$2(1,new H.a5(a,H.k(b,"$iq")))},
$S:10}
P.bX.prototype={
$2:function(a,b){this.a(H.M(a),b)},
$S:11}
P.bp.prototype={
a3:function(a,b){var u
if(a==null)a=new P.a8()
u=this.a
if(u.a!==0)throw H.e(P.cD("Future already completed"))
u.u(a,b)}}
P.bP.prototype={
O:function(a,b){var u
H.ai(b,{futureOr:1,type:H.h(this,0)})
u=this.a
if(u.a!==0)throw H.e(P.cD("Future already completed"))
u.I(b)}}
P.B.prototype={
aG:function(a){if((this.c&15)!==6)return!0
return this.b.b.R(H.f(this.d,{func:1,ret:P.X,args:[P.n]}),a.a,P.X,P.n)},
aF:function(a){var u=this.e,t=P.n,s={futureOr:1,type:H.h(this,1)},r=this.b.b
if(H.au(u,{func:1,args:[P.n,P.q]}))return H.ai(r.aK(u,a.a,a.b,null,t,P.q),s)
else return H.ai(r.R(H.f(u,{func:1,args:[P.n]}),a.a,null,t),s)}}
P.p.prototype={
S:function(a,b,c){var u,t,s,r=H.h(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.l
if(u!==C.b){H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.dR(b,u)}t=new P.p($.l,[c])
s=b==null?1:3
this.H(new P.B(t,s,a,b,[r,c]))
return t},
aN:function(a,b){return this.S(a,null,b)},
a1:function(a,b,c){var u,t=H.h(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=new P.p($.l,[c])
this.H(new P.B(u,(b==null?1:3)|16,a,b,[t,c]))
return u},
H:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$iB")
t.c=a}else{if(s===2){u=H.k(t.c,"$ip")
s=u.a
if(s<4){u.H(a)
return}t.a=s
t.c=u.c}P.V(null,null,t.b,H.f(new P.bt(t,a),{func:1,ret:-1}))}},
a_:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$iB")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$ip")
u=q.a
if(u<4){q.a_(a)
return}p.a=u
p.c=q.c}o.a=p.D(a)
P.V(null,null,p.b,H.f(new P.bB(o,p),{func:1,ret:-1}))}},
C:function(){var u=H.k(this.c,"$iB")
this.c=null
return this.D(u)},
D:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
I:function(a){var u,t,s=this,r=H.h(s,0)
H.ai(a,{futureOr:1,type:r})
u=s.$ti
if(H.ag(a,"$iw",u,"$aw"))if(H.ag(a,"$ip",u,null))P.bw(a,s)
else P.cH(a,s)
else{t=s.C()
H.i(a,r)
s.a=4
s.c=a
P.T(s,t)}},
W:function(a){var u,t=this
H.i(a,H.h(t,0))
u=t.C()
t.a=4
t.c=a
P.T(t,u)},
u:function(a,b){var u,t=this
H.k(b,"$iq")
u=t.C()
t.a=8
t.c=new P.u(a,b)
P.T(t,u)},
aj:function(a){var u=this
H.ai(a,{futureOr:1,type:H.h(u,0)})
if(H.ag(a,"$iw",u.$ti,"$aw")){u.am(a)
return}u.a=1
P.V(null,null,u.b,H.f(new P.bv(u,a),{func:1,ret:-1}))},
am:function(a){var u=this,t=u.$ti
H.at(a,"$iw",t,"$aw")
if(H.ag(a,"$ip",t,null)){if(a.a===8){u.a=1
P.V(null,null,u.b,H.f(new P.bA(u,a),{func:1,ret:-1}))}else P.bw(a,u)
return}P.cH(a,u)},
ak:function(a,b){this.a=1
P.V(null,null,this.b,H.f(new P.bu(this,a,b),{func:1,ret:-1}))},
$iw:1}
P.bt.prototype={
$0:function(){P.T(this.a,this.b)},
$S:0}
P.bB.prototype={
$0:function(){P.T(this.b,this.a.a)},
$S:0}
P.bx.prototype={
$1:function(a){var u=this.a
u.a=0
u.I(a)},
$S:4}
P.by.prototype={
$2:function(a,b){H.k(b,"$iq")
this.a.u(a,b)},
$1:function(a){return this.$2(a,null)},
$S:12}
P.bz.prototype={
$0:function(){this.a.u(this.b,this.c)},
$S:0}
P.bv.prototype={
$0:function(){var u=this.a
u.W(H.i(this.b,H.h(u,0)))},
$S:0}
P.bA.prototype={
$0:function(){P.bw(this.b,this.a)},
$S:0}
P.bu.prototype={
$0:function(){this.a.u(this.b,this.c)},
$S:0}
P.bE.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.a8(H.f(s.d,{func:1}),null)}catch(r){u=H.Z(r)
t=H.Y(r)
if(o.d){s=H.k(o.a.a.c,"$iu").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iu")
else q.b=new P.u(u,t)
q.a=!0
return}if(!!J.r(n).$iw){if(n instanceof P.p&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iu")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.aN(new P.bF(p),null)
s.a=!1}},
$S:1}
P.bF.prototype={
$1:function(a){return this.a},
$S:13}
P.bD.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.h(s,0)
q=H.i(n.c,r)
p=H.h(s,1)
n.a.b=s.b.b.R(H.f(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.Z(o)
t=H.Y(o)
s=n.a
s.b=new P.u(u,t)
s.a=!0}},
$S:1}
P.bC.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iu")
r=m.c
if(H.e0(r.aG(u))&&r.e!=null){q=m.b
q.b=r.aF(u)
q.a=!1}}catch(p){t=H.Z(p)
s=H.Y(p)
r=H.k(m.a.a.c,"$iu")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.u(t,s)
n.a=!0}},
$S:1}
P.ar.prototype={}
P.b6.prototype={
gi:function(a){var u,t,s=this,r={},q=new P.p($.l,[P.A])
r.a=0
u=H.h(s,0)
t=H.f(new P.b8(r,s),{func:1,ret:-1,args:[u]})
H.f(new P.b9(r,q),{func:1,ret:-1})
W.cf(s.a,s.b,t,!1,u)
return q}}
P.b8.prototype={
$1:function(a){H.i(a,H.h(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.j,args:[H.h(this.b,0)]}}}
P.b9.prototype={
$0:function(){this.b.I(this.a.a)},
$S:0}
P.b7.prototype={}
P.bO.prototype={}
P.u.prototype={
h:function(a){return H.d(this.a)},
$iP:1}
P.bS.prototype={$iex:1}
P.bW.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.a8():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.h(0)
throw u},
$S:0}
P.bK.prototype={
aL:function(a){var u,t,s,r=null
H.f(a,{func:1,ret:-1})
try{if(C.b===$.l){a.$0()
return}P.cL(r,r,this,a,-1)}catch(s){u=H.Z(s)
t=H.Y(s)
P.bV(r,r,this,u,H.k(t,"$iq"))}},
aM:function(a,b,c){var u,t,s,r=null
H.f(a,{func:1,ret:-1,args:[c]})
H.i(b,c)
try{if(C.b===$.l){a.$1(b)
return}P.cM(r,r,this,a,b,-1,c)}catch(s){u=H.Z(s)
t=H.Y(s)
P.bV(r,r,this,u,H.k(t,"$iq"))}},
aC:function(a,b){return new P.bM(this,H.f(a,{func:1,ret:b}),b)},
a2:function(a){return new P.bL(this,H.f(a,{func:1,ret:-1}))},
aD:function(a,b){return new P.bN(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
a8:function(a,b){H.f(a,{func:1,ret:b})
if($.l===C.b)return a.$0()
return P.cL(null,null,this,a,b)},
R:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.i(b,d)
if($.l===C.b)return a.$1(b)
return P.cM(null,null,this,a,b,c,d)},
aK:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.i(b,e)
H.i(c,f)
if($.l===C.b)return a.$2(b,c)
return P.dS(null,null,this,a,b,c,d,e,f)},
a7:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}}
P.bM.prototype={
$0:function(){return this.a.a8(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.bL.prototype={
$0:function(){return this.a.aL(this.b)},
$S:1}
P.bN.prototype={
$1:function(a){var u=this.c
return this.a.aM(this.b,H.i(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.bG.prototype={
gi:function(a){return this.a},
ga5:function(){return new P.bH(this,[H.h(this,0)])},
v:function(a){var u
if(typeof a==="number"&&(a&1073741823)===a){u=this.c
return u==null?!1:u[a]!=null}else return this.ao(a)},
ao:function(a){var u=this.d
if(u==null)return!1
return this.B(this.M(u,a),a)>=0},
F:function(a,b){var u,t,s
if(typeof b==="string"&&b!=="__proto__"){u=this.b
t=u==null?null:P.cg(u,b)
return t}else if(typeof b==="number"&&(b&1073741823)===b){s=this.c
t=s==null?null:P.cg(s,b)
return t}else return this.as(b)},
as:function(a){var u,t,s=this.d
if(s==null)return
u=this.M(s,a)
t=this.B(u,a)
return t<0?null:u[t+1]},
G:function(a,b,c){var u,t=this
H.i(b,H.h(t,0))
H.i(c,H.h(t,1))
if(typeof b==="number"&&(b&1073741823)===b){u=t.c
t.ai(u==null?t.c=P.cI():u,b,c)}else t.aw(b,c)},
aw:function(a,b){var u,t,s,r,q=this
H.i(a,H.h(q,0))
H.i(b,H.h(q,1))
u=q.d
if(u==null)u=q.d=P.cI()
t=q.X(a)
s=u[t]
if(s==null){P.ch(u,t,[a,b]);++q.a
q.e=null}else{r=q.B(s,a)
if(r>=0)s[r+1]=b
else{s.push(a,b);++q.a
q.e=null}}},
aH:function(a,b){var u,t=this
H.i(a,H.h(t,0))
H.f(b,{func:1,ret:H.h(t,1)})
if(t.v(a))return t.F(0,a)
u=b.$0()
t.G(0,a,u)
return u},
aI:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.au(this.c,b)
else return this.at(b)},
at:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.M(r,a)
t=s.B(u,a)
if(t<0)return;--s.a
s.e=null
return u.splice(t,2)[1]},
a4:function(a,b){var u,t,s,r,q=this,p=H.h(q,0)
H.f(b,{func:1,ret:-1,args:[p,H.h(q,1)]})
u=q.Y()
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(H.i(r,p),q.F(0,r))
if(u!==q.e)throw H.e(P.aF(q))}},
Y:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
u=new Array(j.a)
u.fixed$length=Array
t=j.b
if(t!=null){s=Object.getOwnPropertyNames(t)
r=s.length
for(q=0,p=0;p<r;++p){u[q]=s[p];++q}}else q=0
o=j.c
if(o!=null){s=Object.getOwnPropertyNames(o)
r=s.length
for(p=0;p<r;++p){u[q]=+s[p];++q}}n=j.d
if(n!=null){s=Object.getOwnPropertyNames(n)
r=s.length
for(p=0;p<r;++p){m=n[s[p]]
l=m.length
for(k=0;k<l;k+=2){u[q]=m[k];++q}}}return j.e=u},
ai:function(a,b,c){var u=this
H.i(b,H.h(u,0))
H.i(c,H.h(u,1))
if(a[b]==null){++u.a
u.e=null}P.ch(a,b,c)},
au:function(a,b){var u
if(a!=null&&a[b]!=null){u=H.i(P.cg(a,b),H.h(this,1))
delete a[b];--this.a
this.e=null
return u}else return},
X:function(a){return J.cu(a)&1073741823},
M:function(a,b){return a[this.X(b)]},
B:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;t+=2)if(J.c7(a[t],b))return t
return-1},
$iei:1}
P.bH.prototype={
gi:function(a){return this.a.a},
gE:function(a){var u=this.a
return new P.bI(u,u.Y(),this.$ti)}}
P.bI.prototype={
gp:function(){return this.d},
k:function(){var u=this,t=u.b,s=u.c,r=u.a
if(t!==r.e)throw H.e(P.aF(r))
else if(s>=t.length){u.sV(null)
return!1}else{u.sV(t[s])
u.c=s+1
return!0}},
sV:function(a){this.d=H.i(a,H.h(this,0))}}
P.aX.prototype={}
P.aY.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:14}
P.aZ.prototype={
a4:function(a,b){var u,t,s=this
H.f(b,{func:1,ret:-1,args:[H.h(s,0),H.h(s,1)]})
for(u=s.ga5(),u=u.gE(u);u.k();){t=u.gp()
b.$2(t,s.F(0,t))}},
gi:function(a){var u=this.ga5()
return u.gi(u)},
h:function(a){return P.dx(this)},
$iel:1}
P.X.prototype={}
P.c_.prototype={}
P.P.prototype={}
P.aC.prototype={
h:function(a){return"Assertion failed"}}
P.a8.prototype={
h:function(a){return"Throw of null."}}
P.H.prototype={
gK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gJ:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gK()+o+u
if(!q.a)return t
s=q.gJ()
r=P.aJ(q.b)
return t+s+": "+r}}
P.aa.prototype={
gK:function(){return"RangeError"},
gJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.aM.prototype={
gK:function(){return"RangeError"},
gJ:function(){var u,t=H.M(this.b)
if(typeof t!=="number")return t.aa()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gi:function(a){return this.f}}
P.bh.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.bf.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aq.prototype={
h:function(a){return"Bad state: "+this.a}}
P.aE.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aJ(u)+"."}}
P.ap.prototype={
h:function(a){return"Stack Overflow"},
$iP:1}
P.aG.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.bs.prototype={
h:function(a){return"Exception: "+this.a}}
P.A.prototype={}
P.Q.prototype={
gi:function(a){var u,t=this.gE(this)
for(u=0;t.k();)++u
return u},
h:function(a){return P.ds(this,"(",")")}}
P.I.prototype={$iQ:1}
P.j.prototype={
gj:function(a){return P.n.prototype.gj.call(this,this)},
h:function(a){return"null"}}
P.m.prototype={}
P.n.prototype={constructor:P.n,$in:1,
n:function(a,b){return this===b},
gj:function(a){return H.a9(this)},
h:function(a){return"Instance of '"+H.d(H.ao(this))+"'"},
toString:function(){return this.h(this)}}
P.q.prototype={}
P.y.prototype={}
P.ab.prototype={
gi:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.az.prototype={
h:function(a){return String(a)}}
W.aA.prototype={
h:function(a){return String(a)}}
W.O.prototype={
a9:function(a,b){return a.getContext(b)},
$iO:1}
W.a2.prototype={$ia2:1}
W.aH.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName}}
W.a.prototype={$ia:1}
W.a4.prototype={
ah:function(a,b,c,d){return a.addEventListener(b,H.ah(H.f(c,{func:1,args:[W.a]}),1),!1)},
$ia4:1}
W.aK.prototype={
gi:function(a){return a.length}}
W.E.prototype={$iE:1}
W.R.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.ab(a):u}}
W.b2.prototype={
gi:function(a){return a.length}}
W.x.prototype={}
W.ad.prototype={
gaB:function(a){var u=P.m,t=new P.p($.l,[u]),s=H.f(new W.bi(new P.bP(t,[u])),{func:1,ret:-1,args:[P.m]})
this.ar(a)
this.av(a,W.cO(s,u))
return t},
av:function(a,b){return a.requestAnimationFrame(H.ah(H.f(b,{func:1,ret:-1,args:[P.m]}),1))},
ar:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bi.prototype={
$1:function(a){this.a.O(0,H.d0(a))},
$S:15}
W.ce.prototype={}
W.bq.prototype={}
W.br.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ia"))},
$S:16}
P.bJ.prototype={
a6:function(a){if(a<=0||a>4294967296)throw H.e(P.dz("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.o.prototype={
h:function(a){return"Point("+this.a+", "+this.b+")"},
n:function(a,b){if(b==null)return!1
return!!J.r(b).$io&&this.a===b.a&&this.b===b.b},
gj:function(a){var u,t=C.c.gj(this.a),s=C.c.gj(this.b)
s=P.cJ(P.cJ(0,t),s)
u=536870911&s+((67108863&s)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)}}
F.aS.prototype={
ae:function(){var u=W.E,t={func:1,ret:-1,args:[u]}
W.cf(window,"keydown",H.f(new F.aU(this),t),!1,u)
W.cf(window,"keyup",H.f(new F.aV(this),t),!1,u)}}
F.aU.prototype={
$1:function(a){H.k(a,"$iE")
this.a.a.aH(a.keyCode,new F.aT(a))},
$S:5}
F.aT.prototype={
$0:function(){return this.a.timeStamp},
$S:17}
F.aV.prototype={
$1:function(a){this.a.a.aI(0,H.k(a,"$iE").keyCode)},
$S:5}
F.b3.prototype={
af:function(a){a.a=5
this.sal(0,P.dw(6,new F.b4(a),[P.o,P.m]))},
T:function(){var u,t,s=this.a,r=(s&&C.a).gq(s),q=this.b
r.toString
u=H.h(r,0)
t=[u]
H.at(q,"$io",t,"$ao")
t=H.i(new P.o(H.i(r.a+q.a,u),H.i(r.b+q.b,u),t),H.h(s,0))
if(!!s.fixed$length)H.J(P.S("insert"))
s.splice(0,0,t)},
ap:function(){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.d4)(u),++s)F.cT(u[s],"green")},
aE:function(){var u,t,s
for(u=this.a,u.toString,u=H.dC(u,1,null,H.h(u,0)),u=new H.an(u,u.gi(u),[H.h(u,0)]);u.k();){t=u.d
s=this.a
if(J.c7(t,(s&&C.a).gq(s)))return!0}return!1},
sal:function(a,b){this.a=H.at(b,"$iI",[[P.o,P.m]],"$aI")},
sA:function(a){this.b=H.at(a,"$io",[P.m],"$ao")}}
F.b4.prototype={
$1:function(a){return new P.o(this.a.a--,0,[P.m])},
$S:18}
F.aL.prototype={
N:function(){return new P.o(C.i.a6(this.b),C.i.a6(this.c),[P.m])},
w:function(){var u=0,t=P.dP(null),s,r=this,q,p,o
var $async$w=P.dW(function(a,b){if(a===1)return P.dJ(b,t)
while(true)switch(u){case 0:o=H
u=3
return P.dI(C.o.gaB(window),$async$w)
case 3:q=o.d0(b)
p=r.a
if(typeof q!=="number"){s=q.aP()
u=1
break}if(q-p>50){r.a=q
q=$.cp
q.fillStyle="white"
p=$.cm
q.fillRect(0,0,p.width,p.height)
F.cT(r.e,"blue")
p=r.d
p.toString
if($.ax().a.v(37)&&!p.b.n(0,C.d))p.sA(C.n)
else if($.ax().a.v(39)&&!p.b.n(0,C.n))p.sA(C.d)
else if($.ax().a.v(38)&&!p.b.n(0,C.l))p.sA(C.m)
else if($.ax().a.v(40)&&!p.b.n(0,C.m))p.sA(C.l)
p.T()
q=p.a;(q&&C.a).aJ(q)
p.ap()
q=r.d.a
if(J.c7((q&&C.a).gq(q),r.e)){r.d.T()
r.sL(r.N())}q=r.d.a
if((q&&C.a).gq(q).a>-1){q=r.d.a
if((q&&C.a).gq(q).a<r.b){q=r.d.a
if((q&&C.a).gq(q).b>-1){q=r.d.a
q=(q&&C.a).gq(q).b>=r.c||r.d.aE()}else q=!0}else q=!0}else q=!0
if(q){r.d=F.cC()
r.sL(r.N())}}r.w()
case 1:return P.dK(s,t)}})
return P.dL($async$w,t)},
sL:function(a){this.e=H.at(a,"$io",[P.m],"$ao")}};(function aliases(){var u=J.t.prototype
u.ab=u.h
u=J.am.prototype
u.ac=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0
u(P,"dY","dE",2)
u(P,"dZ","dF",2)
u(P,"e_","dG",2)
t(P,"cS","dU",1)})();(function inheritance(){var u=hunkHelpers.inherit,t=hunkHelpers.inheritMany
u(P.n,null)
t(P.n,[H.cb,J.t,J.aB,P.Q,H.an,H.bc,P.P,H.a5,H.a3,H.as,P.bQ,P.bk,P.bp,P.B,P.p,P.ar,P.b6,P.b7,P.bO,P.u,P.bS,P.aZ,P.bI,P.X,P.m,P.ap,P.bs,P.I,P.j,P.q,P.y,P.ab,P.bJ,P.o,F.aS,F.b3,F.aL])
t(J.t,[J.aN,J.aP,J.am,J.K,J.aQ,J.a6,W.a4,W.a2,W.aH,W.a])
t(J.am,[J.b0,J.ac,J.a7])
u(J.ca,J.K)
t(J.aQ,[J.al,J.aO])
u(H.aI,P.Q)
t(H.aI,[H.aW,P.bH])
u(H.ba,H.aW)
t(P.P,[H.b_,H.aR,H.bg,H.be,H.b1,P.aC,P.a8,P.H,P.bh,P.bf,P.aq,P.aE,P.aG])
t(H.a3,[H.c6,H.bb,H.c0,H.c1,H.c2,P.bm,P.bl,P.bn,P.bo,P.bR,P.bT,P.bU,P.bX,P.bt,P.bB,P.bx,P.by,P.bz,P.bv,P.bA,P.bu,P.bE,P.bF,P.bD,P.bC,P.b8,P.b9,P.bW,P.bM,P.bL,P.bN,P.aY,W.bi,W.br,F.aU,F.aT,F.aV,F.b4])
t(H.bb,[H.b5,H.a0])
u(H.bj,P.aC)
u(P.bP,P.bp)
u(P.bK,P.bS)
u(P.aX,P.aZ)
u(P.bG,P.aX)
t(P.m,[P.c_,P.A])
t(P.H,[P.aa,P.aM])
t(W.a4,[W.R,W.ad])
u(W.b,W.R)
u(W.c,W.b)
t(W.c,[W.az,W.aA,W.O,W.aK,W.b2])
u(W.x,W.a)
u(W.E,W.x)
u(W.ce,P.b6)
u(W.bq,P.b7)})()
var v={mangledGlobalNames:{A:"int",c_:"double",m:"num",y:"String",X:"bool",j:"Null",I:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.j},{func:1,ret:-1},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.j,args:[,]},{func:1,ret:P.j,args:[W.E]},{func:1,args:[,P.y]},{func:1,args:[P.y]},{func:1,ret:P.j,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[,]},{func:1,ret:P.j,args:[,P.q]},{func:1,ret:P.j,args:[P.A,,]},{func:1,ret:P.j,args:[,],opt:[P.q]},{func:1,ret:[P.p,,],args:[,]},{func:1,ret:P.j,args:[,,]},{func:1,ret:P.j,args:[P.m]},{func:1,args:[W.a]},{func:1,ret:P.m},{func:1,ret:[P.o,P.m],args:[P.A]}],interceptorsByTag:null,leafTags:null};(function constants(){C.w=W.O.prototype
C.x=J.t.prototype
C.a=J.K.prototype
C.c=J.al.prototype
C.j=J.a6.prototype
C.y=J.a7.prototype
C.k=J.b0.prototype
C.e=J.ac.prototype
C.o=W.ad.prototype
C.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.p=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.v=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.q=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.r=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.u=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.t=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.h=function(hooks) { return hooks; }

C.i=new P.bJ()
C.b=new P.bK()
C.l=new P.o(0,1,[P.m])
C.m=new P.o(0,-1,[P.m])
C.d=new P.o(1,0,[P.m])
C.n=new P.o(-1,0,[P.m])})();(function staticFields(){$.D=0
$.a1=null
$.cw=null
$.ci=!1
$.cX=null
$.cP=null
$.d3=null
$.bZ=null
$.c3=null
$.cq=null
$.U=null
$.ae=null
$.af=null
$.cj=!1
$.l=C.b
$.v=[]
$.cm=null
$.cp=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"eh","d6",function(){return H.cV("_$dart_dartClosure")})
u($,"ej","cs",function(){return H.cV("_$dart_js")})
u($,"en","d7",function(){return H.F(H.bd({
toString:function(){return"$receiver$"}}))})
u($,"eo","d8",function(){return H.F(H.bd({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ep","d9",function(){return H.F(H.bd(null))})
u($,"eq","da",function(){return H.F(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"et","dd",function(){return H.F(H.bd(void 0))})
u($,"eu","de",function(){return H.F(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"es","dc",function(){return H.F(H.cF(null))})
u($,"er","db",function(){return H.F(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ew","dg",function(){return H.F(H.cF(void 0))})
u($,"ev","df",function(){return H.F(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ey","ct",function(){return P.dD()})
u($,"eD","ax",function(){return F.dv()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.t,CanvasPattern:J.t,DOMError:J.t,MediaError:J.t,NavigatorUserMediaError:J.t,OverconstrainedError:J.t,PositionError:J.t,WebGLRenderingContext:J.t,WebGL2RenderingContext:J.t,SQLError:J.t,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.az,HTMLAreaElement:W.aA,HTMLCanvasElement:W.O,CanvasRenderingContext2D:W.a2,DOMException:W.aH,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,EventTarget:W.a4,HTMLFormElement:W.aK,KeyboardEvent:W.E,Document:W.R,HTMLDocument:W.R,Node:W.R,HTMLSelectElement:W.b2,CompositionEvent:W.x,FocusEvent:W.x,MouseEvent:W.x,DragEvent:W.x,PointerEvent:W.x,TextEvent:W.x,TouchEvent:W.x,WheelEvent:W.x,UIEvent:W.x,Window:W.ad,DOMWindow:W.ad})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,KeyboardEvent:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,TouchEvent:true,WheelEvent:true,UIEvent:false,Window:true,DOMWindow:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.d_,[])
else F.d_([])})})()
//# sourceMappingURL=main.dart.js.map
