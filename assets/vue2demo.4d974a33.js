import{o as t,c as e,a as n,t as u}from"./app.2e904f8f.js";const c={data:()=>({count:0}),computed:{multiple(){return 2*this.count}},methods:{increase(){this.count++},decrease(){this.count--}}};c.render=function(c,o,r,s,a,i){return t(),e("div",null,[n("p",null,"count:"+u(a.count),1),n("p",null,"倍数："+u(i.multiple),1),n("div",null,[n("button",{style:{"margin-right":"10px"},onClick:o[1]||(o[1]=(...t)=>i.increase&&i.increase(...t))},"加1"),n("button",{onClick:o[2]||(o[2]=(...t)=>i.decrease&&i.decrease(...t))},"减一")])])};export default c;