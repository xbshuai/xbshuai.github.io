import{f as j,ag as E,u as x,Q as h,q as P,g as w,as as K,H as N,h as B,o,i as c,a as p,t as C,k as r,F as k,j as S,at as U,c as $,w as g,l as L,d as _,aj as F,z as R,au as T,af as V,aq as D,ar as H,ao as W}from"./app-d1fce95c.js";import{_ as M}from"./YunCard.vue_vue_type_script_setup_true_lang-ff4b468b.js";import{_ as O}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-1df6f729.js";import{_ as Q}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-9068a4eb.js";const G={class:"category-list-item inline-flex items-center cursor-pointer"},J={key:0,"i-ri-folder-add-line":""},X={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},Z={key:0},I={m:"l-1",font:"serif black"},ee=j({__name:"YunCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(b){const u=b,m=E(),n=x(),y=h(()=>{const e=n.query.category||"";return Array.isArray(e)?[e]:e.split("/")}),t=P(u.collapsable),{t:i}=w(),{locale:f}=w();function Y(e){const s=f.value==="zh-CN"?"zh":f.value;return e[`title_${s}`]?e[`title_${s}`]:e.title}const d=P(),{show:l}=K(d);function v(e){m.push({query:{category:e}}),l()}return N(()=>{const e=document.querySelector(".post-collapse-container");e&&(d.value=e)}),(e,s)=>{const z=B("YunCategory",!0),q=B("router-link");return o(),c(k,null,[p("li",G,[p("span",{class:"folder-action inline-flex",onClick:s[0]||(s[0]=a=>t.value=!t.value)},[t.value?(o(),c("div",J)):(o(),c("div",X))]),p("span",{class:"category-name",m:"l-1",onClick:s[1]||(s[1]=a=>v(e.parentKey))},C(e.category.name==="Uncategorized"?r(i)("category.uncategorized"):e.category.name)+" ["+C(e.category.total)+"] ",1)]),t.value?L("v-if",!0):(o(),c("ul",Z,[(o(!0),c(k,null,S(e.category.children,(a,A)=>(o(),c("li",{key:A,class:"post-list-item",m:"l-4"},[r(U)(a)?(o(),$(z,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${a.name}`:a.name,category:a,collapsable:!y.value.includes(a.name)},null,8,["parent-key","category","collapsable"])):(o(),c(k,{key:1},[a.title?(o(),$(q,{key:0,to:a.path||"",class:"inline-flex items-center"},{default:g(()=>[s[2]||(s[2]=p("div",{"i-ri-file-text-line":""},null,-1)),p("span",I,C(Y(a)),1)]),_:2},1032,["to"])):L("v-if",!0)],64))]))),128))]))],64)}}}),te=j({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(b){const u=x(),m=h(()=>{const n=u.query.category||"";return Array.isArray(n)?[n]:n.split("/")});return(n,y)=>{const t=ee;return o(!0),c(k,null,S(n.categories,i=>(o(),c("ul",{key:i.name,class:"category-list",m:"l-4"},[_(t,{"parent-key":i.name,category:i,level:n.level+1,collapsable:!m.value.includes(i.name)},null,8,["parent-key","category","level","collapsable"])]))),128)}}});const oe={text:"center",class:"yun-text-light",p:"2"},re=j({__name:"categories",setup(b){const{t:u}=w(),m=F(),n=R(),y=x(),t=h(()=>y.query.category||""),i=T(),f=h(()=>m.postList.filter(l=>l.categories&&t.value!=="Uncategorized"?typeof l.categories=="string"?l.categories===t.value:l.categories.join("/").startsWith(t.value)&&l.categories[0]===t.value.split("/")[0]:!l.categories&&t.value==="Uncategorized"?l.categories===void 0:!1)),Y=V(n);return D([H({"@type":"CollectionPage"})]),(d,l)=>{const v=Q,e=te,s=B("router-view"),z=O,q=M,a=W;return o(),$(a,null,{"main-header":g(()=>[_(v,{title:r(Y)||r(u)("menu.categories"),icon:r(n).icon||"i-ri-folder-2-line",color:r(n).color},null,8,["title","icon","color"])]),"main-content":g(()=>[p("div",oe,C(r(u)("counter.categories",r(i).children.length)),1),_(e,{categories:r(i).children},null,8,["categories"]),_(s)]),"main-nav-before":g(()=>[t.value?(o(),$(q,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:g(()=>[_(v,{title:t.value==="Uncategorized"?r(u)("category.uncategorized"):t.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),_(z,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:f.value},null,8,["posts"])]),_:1})):L("v-if",!0)]),_:1})}}});export{re as default};