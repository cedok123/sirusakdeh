import{u as d,o as p,c as u,w as l,d as m,a as t,b as a,e as f,f as _}from"./app.d01356e3.js";import{_ as c}from"./AuthenticatedLayout.358931e7.js";import{_ as n}from"./PublicInputText.55392db8.js";import{_ as i}from"./InputError.3a08ebfc.js";import{_ as x}from"./PrimaryButton.5f400a16.js";import"./NavLeftLink.2b1c518f.js";import"./index.es.a8b2b918.js";import"./cib-twitter.8a3d22db.js";import"./cil-caret-right.c95fbe62.js";import"./cil-location-pin.6971a42f.js";import"./_plugin-vue_export-helper.cdc0426e.js";const b={class:"flex flex-wrap mb-3 -mx-3"},V={class:"w-full px-3 mb-6 md:w-1/2 md:mb-0"},w={class:"w-full px-3 md:w-1/2"},h={class:"mt-6 text-center"},S={__name:"Create",setup(g){const e=d({username:"",name:""});return(r,s)=>(p(),u(c,{href:r.route("admin.admins.index"),text:"Data admins / Tambah"},{default:l(()=>[m("form",{onSubmit:s[2]||(s[2]=_(o=>a(e).post(r.route("admin.admins.store"),{onSuccess:()=>a(e).reset()}),["prevent"]))},[m("div",b,[m("div",V,[t(n,{label:"Nama Lengkap",type:"text",placeholder:"Ex : Alzikri",modelValue:a(e).name,"onUpdate:modelValue":s[0]||(s[0]=o=>a(e).name=o)},null,8,["modelValue"]),t(i,{message:a(e).errors.name,class:"mt-2"},null,8,["message"])]),m("div",w,[t(n,{label:"Username",type:"text",placeholder:"Ex : alzikri007",modelValue:a(e).username,"onUpdate:modelValue":s[1]||(s[1]=o=>a(e).username=o)},null,8,["modelValue"]),t(i,{message:a(e).errors.username,class:"mt-2"},null,8,["message"])])]),m("div",h,[t(x,{disabled:a(e).processing},{default:l(()=>[f("Tambah")]),_:1},8,["disabled"])])],32)]),_:1},8,["href"]))}};export{S as default};