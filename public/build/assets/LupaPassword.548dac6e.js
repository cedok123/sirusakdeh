import{u as p,o as n,c as u,w as m,d as a,a as t,b as e,e as f,f as _}from"./app.d01356e3.js";import{_ as w}from"./AuthenticatedLayout.358931e7.js";import{_ as i}from"./PublicInputText.55392db8.js";import{_ as c}from"./InputError.3a08ebfc.js";import{_ as x}from"./PrimaryButton.5f400a16.js";import"./NavLeftLink.2b1c518f.js";import"./index.es.a8b2b918.js";import"./cib-twitter.8a3d22db.js";import"./cil-caret-right.c95fbe62.js";import"./cil-location-pin.6971a42f.js";import"./_plugin-vue_export-helper.cdc0426e.js";const b={class:"flex flex-wrap mb-3 -mx-3"},V={class:"w-full px-3 mb-6 md:w-1/2 md:mb-0"},h={class:"w-full px-3 md:w-1/2"},v={class:"mt-6 text-center"},j={__name:"LupaPassword",props:{user:Object},setup(l){const s=p({password:"",password_confirmation:""});return(d,o)=>(n(),u(w,{href:d.route("admin.dokter.index"),text:"Data Dokter / Ubah Pasword"},{default:m(()=>[a("form",{onSubmit:o[2]||(o[2]=_(r=>e(s).put(d.route("admin.dokter.post_new_password",l.user.id),{onSuccess:()=>e(s).reset()}),["prevent"]))},[a("div",b,[a("div",V,[t(i,{label:"Password BAru",type:"password",placeholder:"Ex : *********",modelValue:e(s).password,"onUpdate:modelValue":o[0]||(o[0]=r=>e(s).password=r)},null,8,["modelValue"]),t(c,{message:e(s).errors.password,class:"mt-2"},null,8,["message"])]),a("div",h,[t(i,{label:"Konfirmasi password",type:"password",placeholder:"Ex : *********",modelValue:e(s).password_confirmation,"onUpdate:modelValue":o[1]||(o[1]=r=>e(s).password_confirmation=r)},null,8,["modelValue"])])]),a("div",v,[t(x,{disabled:e(s).processing},{default:m(()=>[f("Update")]),_:1},8,["disabled"])])],32)]),_:1},8,["href"]))}};export{j as default};
