(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-000a3fd4"],{"0b42":function(e,n,t){var r=t("da84"),a=t("e8b5"),o=t("68ee"),c=t("861d"),u=t("b622"),i=u("species"),l=r.Array;e.exports=function(e){var n;return a(e)&&(n=e.constructor,o(n)&&(n===l||a(n.prototype))?n=void 0:c(n)&&(n=n[i],null===n&&(n=void 0))),void 0===n?l:n}},"1dde":function(e,n,t){var r=t("d039"),a=t("b622"),o=t("2d00"),c=a("species");e.exports=function(e){return o>=51||!r((function(){var n=[],t=n.constructor={};return t[c]=function(){return{foo:1}},1!==n[e](Boolean).foo}))}},2532:function(e,n,t){"use strict";var r=t("23e7"),a=t("e330"),o=t("5a34"),c=t("1d80"),u=t("577e"),i=t("ab13"),l=a("".indexOf);r({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~l(u(c(this)),u(o(e)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,n,t){var r=t("861d"),a=t("c6b6"),o=t("b622"),c=o("match");e.exports=function(e){var n;return r(e)&&(void 0!==(n=e[c])?!!n:"RegExp"==a(e))}},"5a34":function(e,n,t){var r=t("da84"),a=t("44e7"),o=r.TypeError;e.exports=function(e){if(a(e))throw o("The method doesn't accept regular expressions");return e}},"65f0":function(e,n,t){var r=t("0b42");e.exports=function(e,n){return new(r(e))(0===n?0:n)}},"6fd7":function(e,n,t){"use strict";t("da95")},8418:function(e,n,t){"use strict";var r=t("a04b"),a=t("9bf2"),o=t("5c6c");e.exports=function(e,n,t){var c=r(n);c in e?a.f(e,c,o(0,t)):e[c]=t}},"93c2":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("测试页面3")]),t("Star"),t("br"),t("hr"),t("input",{attrs:{type:"text"},domProps:{value:e.name},on:{input:e.nameChange}}),t("hr"),e._v(" 请选择学历 "),t("select",{domProps:{value:e.level},on:{change:e.levelChange}},e._l(e.levelList,(function(n){return t("option",{key:n.value,domProps:{value:n.value}},[e._v(" "+e._s(n.label)+" ")])})),0),e._v(" 已选择学历:"+e._s(e.level)+" "),t("hr"),e._v(" 游泳"),t("input",{attrs:{type:"checkbox",value:"游泳"},domProps:{checked:e.fav.includes("游泳")},on:{change:e.hobbyChange}}),e._v(" 篮球"),t("input",{attrs:{type:"checkbox",value:"篮球"},domProps:{checked:e.fav.includes("篮球")},on:{change:e.hobbyChange}}),e._v(" 足球"),t("input",{attrs:{type:"checkbox",value:"足球"},domProps:{checked:e.fav.includes("足球")},on:{change:e.hobbyChange}}),t("hr"),e._v(" 男"),t("input",{attrs:{type:"radio",value:"man"},domProps:{checked:"man"===e.gender},on:{change:e.genderChange}}),e._v(" 女"),t("input",{attrs:{type:"radio",value:"women"},domProps:{checked:"women"===e.gender},on:{change:e.genderChange}}),e._v(" 未知"),t("input",{attrs:{type:"radio",value:"no"},domProps:{checked:"no"===e.gender},on:{change:e.genderChange}})],1)},a=[],o=(t("b0c0"),t("caad"),t("2532"),t("a434"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("ul",e._l(5,(function(n){return t("li",{key:n,class:{on:e.textValue>=n,liStyle:!0},on:{click:function(t){return e.handleValue(n)}}})})),0)])}),c=[],u={data:function(){return{textValue:1}},methods:{handleValue:function(e){this.textValue=e}}},i=u,l=(t("6fd7"),t("2877")),s=Object(l["a"])(i,o,c,!1,null,"f0d1d1ce",null),d=s.exports,f={components:{Star:d},data:function(){return{name:"jack",gender:"",level:"",fav:["篮球","足球"],levelList:[{value:1,label:"高中"},{value:2,label:"大专"},{value:3,label:"本科"},{value:4,label:"硕士"}]}},methods:{nameChange:function(e){this.name=e.target.value},levelChange:function(e){this.level=e.target.value},hobbyChange:function(e){var n=e.target.value;this.fav.includes(n)?this.fav.splice(this.fav.indexOf(n),1):this.fav.push(n)},genderChange:function(e){this.gender=e.target.value}}},h=f,v=Object(l["a"])(h,r,a,!1,null,"b8dc5b54",null);n["default"]=v.exports},a434:function(e,n,t){"use strict";var r=t("23e7"),a=t("da84"),o=t("23cb"),c=t("5926"),u=t("07fa"),i=t("7b0b"),l=t("65f0"),s=t("8418"),d=t("1dde"),f=d("splice"),h=a.TypeError,v=Math.max,p=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(e,n){var t,r,a,d,f,m,y=i(this),x=u(y),_=o(e,x),k=arguments.length;if(0===k?t=r=0:1===k?(t=0,r=x-_):(t=k-2,r=p(v(c(n),0),x-_)),x+t-r>b)throw h(g);for(a=l(y,r),d=0;d<r;d++)f=_+d,f in y&&s(a,d,y[f]);if(a.length=r,t<r){for(d=_;d<x-r;d++)f=d+r,m=d+t,f in y?y[m]=y[f]:delete y[m];for(d=x;d>x-r+t;d--)delete y[d-1]}else if(t>r)for(d=x-r;d>_;d--)f=d+r-1,m=d+t-1,f in y?y[m]=y[f]:delete y[m];for(d=0;d<t;d++)y[d+_]=arguments[d+2];return y.length=x-r+t,a}})},ab13:function(e,n,t){var r=t("b622"),a=r("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[a]=!1,"/./"[e](n)}catch(r){}}return!1}},b0c0:function(e,n,t){var r=t("83ab"),a=t("5e77").EXISTS,o=t("e330"),c=t("9bf2").f,u=Function.prototype,i=o(u.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=o(l.exec),d="name";r&&!a&&c(u,d,{configurable:!0,get:function(){try{return s(l,i(this))[1]}catch(e){return""}}})},da95:function(e,n,t){},e8b5:function(e,n,t){var r=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=chunk-000a3fd4.c9b24fb4.js.map