import{g as e,e as n,l as a,o as t,c as l,a as s,t as u,F as r}from"./app.2e904f8f.js";const c=e({setup(){const e=n(0);return{count:e,multiple:a((()=>2*e.value)),increase:()=>e.value++,decrease:()=>e.value--}}});c.render=function(e,n,a,c,o,i){return t(),l(r,null,[s("p",null,"count:"+u(e.count),1),s("p",null,"倍数："+u(e.multiple),1),s("div",null,[s("button",{style:{"margin-right":"10px"},onClick:n[1]||(n[1]=(...n)=>e.increase&&e.increase(...n))},"加1"),s("button",{onClick:n[2]||(n[2]=(...n)=>e.decrease&&e.decrease(...n))},"减一")])],64)};export default c;