(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4538],{30976:function(e,t,n){Promise.resolve().then(n.bind(n,26257))},26257:function(e,t,n){"use strict";n.r(t);var r=n(9268),a=n(56008),i=n(86006),c=n(78635),s=n(80937),o=n(44334),l=n(311),d=n(22046),h=n(83192),u=n(23910),g=n(71357),f=n(78915);t.default=()=>{let e=(0,a.useRouter)(),{mode:t}=(0,c.tv)(),n=(0,a.useSearchParams)().get("spacename"),j=(0,a.useSearchParams)().get("documentid"),[m,p]=(0,i.useState)(0),[x,P]=(0,i.useState)(0),[S,b]=(0,i.useState)([]);return(0,i.useEffect)(()=>{(async function(){let e=await (0,f.PR)("/knowledge/".concat(n,"/chunk/list"),{document_id:j,page:1,page_size:20});e.success&&(b(e.data.data),p(e.data.total),P(e.data.page))})()},[]),(0,r.jsxs)("div",{className:"p-4",children:[(0,r.jsx)(s.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",sx:{marginBottom:"20px"},children:(0,r.jsxs)(o.Z,{"aria-label":"breadcrumbs",children:[(0,r.jsx)(l.Z,{onClick:()=>{e.push("/datastores")},underline:"hover",color:"neutral",fontSize:"inherit",children:"Knowledge Space"},"Knowledge Space"),(0,r.jsx)(l.Z,{onClick:()=>{e.push("/datastores/documents?name=".concat(n))},underline:"hover",color:"neutral",fontSize:"inherit",children:"Documents"},"Knowledge Space"),(0,r.jsx)(d.ZP,{fontSize:"inherit",children:"Chunks"})]})}),(0,r.jsx)("div",{className:"p-4",children:S.length?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{color:"primary",variant:"plain",size:"lg",sx:{"& tbody tr: hover":{backgroundColor:"light"===t?"rgb(246, 246, 246)":"rgb(33, 33, 40)"},"& tbody tr: hover a":{textDecoration:"underline"}},children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Content"}),(0,r.jsx)("th",{children:"Meta Data"})]})}),(0,r.jsx)("tbody",{children:S.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.doc_name}),(0,r.jsx)("td",{children:(0,r.jsx)(u.Z,{content:e.content,trigger:"hover",children:e.content.length>10?"".concat(e.content.slice(0,10),"..."):e.content})}),(0,r.jsx)("td",{children:(0,r.jsx)(u.Z,{content:JSON.stringify(e.meta_info||"{}",null,2),trigger:"hover",children:e.meta_info.length>10?"".concat(e.meta_info.slice(0,10),"..."):e.meta_info})})]},e.id))})]}),(0,r.jsx)(s.Z,{direction:"row",justifyContent:"flex-end",sx:{marginTop:"20px"},children:(0,r.jsx)(g.Z,{defaultPageSize:20,showSizeChanger:!1,current:x,total:m,onChange:async e=>{let t=await (0,f.PR)("/knowledge/".concat(n,"/chunk/list"),{document_id:j,page:e,page_size:20});t.success&&(b(t.data.data),p(t.data.total),P(t.data.page))},hideOnSinglePage:!0})})]}):(0,r.jsx)(r.Fragment,{})})]})}},78915:function(e,t,n){"use strict";n.d(t,{Tk:function(){return l},Kw:function(){return d},PR:function(){return h},Ej:function(){return u}});var r=n(21628),a=n(24214);let i=a.Z.create({baseURL:"http://127.0.0.1:5000"});i.defaults.timeout=1e4,i.interceptors.response.use(e=>e.data,e=>Promise.reject(e));var c=n(84835);let s={"content-type":"application/json"},o=e=>{if(!(0,c.isPlainObject)(e))return JSON.stringify(e);let t={...e};for(let e in t){let n=t[e];"string"==typeof n&&(t[e]=n.trim())}return JSON.stringify(t)},l=(e,t)=>{if(t){let n=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");n&&(e+="?".concat(n))}return i.get("/api"+e,{headers:s}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})},d=(e,t)=>{let n=o(t);return i.post("/api"+e,{body:n,headers:s}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})},h=(e,t)=>i.post(e,t,{headers:s}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)}),u=(e,t)=>i.post(e,t).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})}},function(e){e.O(0,[2180,3933,8942,7192,7518,4289,8635,6412,9253,5769,1744],function(){return e(e.s=30976)}),_N_E=e.O()}]);