import{u as d,o as r,c as u,w as m,a,b as s,H as c,g as _,t as f,l as p,d as t,e as w,n as g,f as b}from"./app.d01356e3.js";import{_ as y}from"./GuestLayout.502f334f.js";import{_ as x}from"./InputError.3a08ebfc.js";import{_ as k}from"./InputLabel.d024d3f0.js";import{_ as h}from"./PrimaryButton.d2d32afa.js";import{_ as V}from"./TextInput.a446cfc1.js";const v=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},q={__name:"ForgotPassword",props:{status:String},setup(o){const e=d({email:""}),i=()=>{e.post(route("password.email"))};return(F,l)=>(r(),u(y,null,{default:m(()=>[a(s(c),{title:"Forgot Password"}),v,o.status?(r(),_("div",N,f(o.status),1)):p("",!0),t("form",{onSubmit:b(i,["prevent"])},[t("div",null,[a(k,{for:"email",value:"Email"}),a(V,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(x,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",B,[a(h,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:m(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{q as default};