import{a as p,t as N,d as Ht,c as ht}from"../chunks/disclose-version.C-AW9LLf.js";import{i as tt}from"../chunks/legacy.blVK5hax.js";import{h as ut,D as Ot,au as Et,N as Gt,av as Ut,aw as Vt,ax as Kt,j as Ft,Y as Jt,O as Yt,p as et,ay as ft,az as gt,v as X,e as at,w as o,x as v,m as A,k as n,aA as ct,K as W,f as R,y as P,aB as Rt,aC as k}from"../chunks/runtime.7MmAbGM_.js";import{a as Xt,i as Zt,c as Wt,d as te,b as ee,n as ae,e as ne,l as re,f as M,s as it}from"../chunks/render.DtGCW6M2.js";import{l as D,p as b,b as se,i as lt}from"../chunks/props.D6QspFHd.js";import{o as ie}from"../chunks/index-client.DKYEbheZ.js";import{w as le}from"../chunks/index.BRcHGBKT.js";function ot(t,a,e,s,r){var d;ut&&Ot();var l=(d=a.$$slots)==null?void 0:d[e],m=!1;l===!0&&(l=a.children,m=!0),l===void 0?r!==null&&r(t):l(t,m?()=>s:s)}function Ct(t){var a,e,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(a=0;a<r;a++)t[a]&&(e=Ct(t[a]))&&(s&&(s+=" "),s+=e)}else for(e in t)t[e]&&(s&&(s+=" "),s+=e);return s}function ue(){for(var t,a,e=0,s="",r=arguments.length;e<r;e++)(t=arguments[e])&&(a=Ct(t))&&(s&&(s+=" "),s+=a);return s}function ce(t){return typeof t=="object"?ue(t):t??""}function Bt(t){if(ut){var a=!1,e=()=>{if(!a){if(a=!0,t.hasAttribute("value")){var s=t.value;$t(t,"value",null),t.value=s}if(t.hasAttribute("checked")){var r=t.checked;$t(t,"checked",null),t.checked=r}}};t.__on_r=e,Et(e),Xt()}}function oe(t,a){a?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function $t(t,a,e,s){var r=t.__attributes??(t.__attributes={});ut&&(r[a]=t.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&t.nodeName==="LINK")||r[a]!==(r[a]=e)&&(a==="style"&&"__styles"in t&&(t.__styles={}),a==="loading"&&(t[Ut]=e),e==null?t.removeAttribute(a):typeof e!="string"&&Qt(t).includes(a)?t[a]=e:t.setAttribute(a,e))}function vt(t,a,e,s,r=!1,l=!1,m=!1){var d=a||{},x=t.tagName==="OPTION";for(var w in a)w in e||(e[w]=null);e.class&&(e.class=ce(e.class));var q=Qt(t),h=t.__attributes??(t.__attributes={});for(const i in e){let g=e[i];if(x&&i==="value"&&g==null){t.value=t.__value="",d[i]=g;continue}var T=d[i];if(g!==T){d[i]=g;var u=i[0]+i[1];if(u!=="$$"){if(u==="on"){const _={},$="$$"+i;let C=i.slice(2);var f=ne(C);if(Zt(C)&&(C=C.slice(0,-7),_.capture=!0),!f&&T){if(g!=null)continue;t.removeEventListener(C,d[$],_),d[$]=null}if(g!=null)if(f)t[`__${C}`]=g,te([C]);else{let mt=function(_t){d[i].call(this,_t)};d[$]=Wt(C,t,mt,_)}else f&&(t[`__${C}`]=void 0)}else if(i==="style"&&g!=null)t.style.cssText=g+"";else if(i==="autofocus")ee(t,!!g);else if(i==="__value"||i==="value"&&g!=null)t.value=t[i]=t.__value=g;else if(i==="selected"&&x)oe(t,g);else{var c=i;r||(c=ae(c));var y=c==="defaultValue"||c==="defaultChecked";if(g==null&&!l&&!y)if(h[i]=null,c==="value"||c==="checked"){let _=t;if(c==="value"){let $=_.defaultValue;_.removeAttribute(c),_.defaultValue=$}else{let $=_.defaultChecked;_.removeAttribute(c),_.defaultChecked=$}}else t.removeAttribute(i);else y||q.includes(c)&&(l||typeof g!="string")?t[c]=g:typeof g!="function"&&(ut&&(c==="src"||c==="href"||c==="srcset")||$t(t,c,g))}i==="style"&&"__styles"in t&&(t.__styles={})}}}return d}var Pt=new Map;function Qt(t){var a=Pt.get(t.nodeName);if(a)return a;Pt.set(t.nodeName,a=[]);for(var e,s=t,r=Element.prototype;r!==s;){e=Vt(s);for(var l in e)e[l].set&&a.push(l);s=Gt(s)}return a}function At(t,a,e=a){var s=Kt();re(t,"input",r=>{var l=r?t.defaultValue:t.value;if(l=xt(t)?wt(l):l,e(l),s&&l!==(l=a())){var m=t.selectionStart,d=t.selectionEnd;t.value=l??"",d!==null&&(t.selectionStart=m,t.selectionEnd=Math.min(d,t.value.length))}}),(ut&&t.defaultValue!==t.value||Ft(a)==null&&t.value)&&e(xt(t)?wt(t.value):t.value),Jt(()=>{var r=a();xt(t)&&r===wt(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function xt(t){var a=t.type;return a==="number"||a==="range"}function wt(t){return t===""?null:+t}function ve(t){return function(...a){var e=a[0];return e.preventDefault(),t==null?void 0:t.apply(this,a)}}function de(t,a){var l;var e=(l=t.$$events)==null?void 0:l[a.type],s=Yt(e)?e.slice():e==null?[]:[e];for(var r of s)r.call(this,a)}function he(t){const a=typeof t;return t!==null&&(a==="object"||a==="function")}function qt(t,a,e){return e===!0||e===""?t?"col":`col-${a}`:e==="auto"?t?"col-auto":`col-${a}-auto`:t?`col-${e}`:`col-${a}-${e}`}function zt(t){let a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t))a=t.map(zt).filter(Boolean).join(" ");else for(let e in t)t[e]&&(a&&(a+=" "),a+=e);return a}const yt=(...t)=>t.map(zt).filter(Boolean).join(" ");var fe=N("<div><!></div>");function ge(t,a){const e=D(a,["children","$$slots","$$events","$$legacy"]),s=D(e,["class","body","color","inverse","outline","theme"]);et(a,!1);const r=ct();let l=b(a,"class",8,""),m=b(a,"body",8,!1),d=b(a,"color",8,""),x=b(a,"inverse",8,!1),w=b(a,"outline",8,!1),q=b(a,"theme",8,void 0);ft(()=>(A(l()),A(x()),A(m()),A(d()),A(w())),()=>{W(r,yt(l(),"card",x()?"text-white":!1,m()?"card-body":!1,d()?`${w()?"border":"bg"}-${d()}`:!1))}),gt(),tt();var h=fe();let T;var u=o(h);ot(u,a,"default",{},null),v(h),X(()=>T=vt(h,T,{...s,"data-bs-theme":q(),class:n(r)})),M("click",h,function(f){de.call(this,a,f)}),p(t,h),at()}var ye=N("<div><!></div>");function me(t,a){const e=D(a,["children","$$slots","$$events","$$legacy"]),s=D(e,["class"]);et(a,!1);const r=ct();let l=b(a,"class",8,"");ft(()=>A(l()),()=>{W(r,yt(l(),"card-body"))}),gt(),tt();var m=ye();let d;var x=o(m);ot(x,a,"default",{},null),v(m),X(()=>d=vt(m,d,{...s,class:n(r)})),p(t,m),at()}var _e=N("<div><!></div>");function Tt(t,a){const e=D(a,["children","$$slots","$$events","$$legacy"]),s=D(e,["class","xs","sm","md","lg","xl","xxl"]);et(a,!1);let r=b(a,"class",8,""),l=b(a,"xs",8,void 0),m=b(a,"sm",8,void 0),d=b(a,"md",8,void 0),x=b(a,"lg",8,void 0),w=b(a,"xl",8,void 0),q=b(a,"xxl",8,void 0);const h=[],T={xs:l(),sm:m(),md:d(),lg:x(),xl:w(),xxl:q()};Object.keys(T).forEach(y=>{const i=T[y];if(!i&&i!=="")return;const g=y==="xs";if(he(i)){const _=g?"-":`-${y}-`,$=qt(g,y,i.size);(i.size||i.size==="")&&h.push($),i.push&&h.push(`push${_}${i.push}`),i.pull&&h.push(`pull${_}${i.pull}`),i.offset&&h.push(`offset${_}${i.offset}`),i.order&&h.push(`order${_}${i.order}`)}else h.push(qt(g,y,i))}),h.length||h.push("col"),r()&&h.push(r()),tt();var u=_e();let f;var c=o(u);ot(c,a,"default",{},null),v(u),X(()=>f=vt(u,f,{...s,class:h.join(" ")})),p(t,u),at()}var be=N("<div><!></div>");function ke(t,a){const e=D(a,["children","$$slots","$$events","$$legacy"]),s=D(e,["class","noGutters","form","cols","inner"]);et(a,!1);const r=ct();let l=b(a,"class",8,""),m=b(a,"noGutters",8,!1),d=b(a,"form",8,!1),x=b(a,"cols",8,0),w=b(a,"inner",12,void 0);function q(f){const c=parseInt(f);if(isNaN(c)){if(typeof f=="object")return["xs","sm","md","lg","xl"].map(y=>{const g=y==="xs"?"-":`-${y}-`,_=f[y];return typeof _=="number"&&_>0?`row-cols${g}${_}`:null}).filter(y=>!!y)}else if(c>0)return[`row-cols-${c}`];return[]}ft(()=>(A(l()),A(m()),A(d()),A(x())),()=>{W(r,yt(l(),m()?"gx-0":null,d()?"form-row":"row",...q(x())))}),gt(),tt();var h=be();let T;var u=o(h);ot(u,a,"default",{},null),v(h),se(h,f=>w(f),()=>w()),X(()=>T=vt(h,T,{...s,class:n(r)})),p(t,h),at()}var pe=N('<div><span class="visually-hidden"><!></span></div>');function xe(t,a){const e=D(a,["children","$$slots","$$events","$$legacy"]),s=D(e,["class","type","size","color"]);et(a,!1);const r=ct();let l=b(a,"class",8,""),m=b(a,"type",8,"border"),d=b(a,"size",8,""),x=b(a,"color",8,"");ft(()=>(A(l()),A(d()),A(m()),A(x())),()=>{W(r,yt(l(),d()?`spinner-${m()}-${d()}`:!1,`spinner-${m()}`,x()?`text-${x()}`:!1))}),gt(),tt();var w=pe();let q;var h=o(w),T=o(h);ot(T,a,"default",{},u=>{var f=Ht("Loading...");p(u,f)}),v(h),v(w),X(()=>q=vt(w,q,{...s,role:"status",class:n(r)})),p(t,w),at()}const Dt=le(we());Dt.subscribe(t=>Te(t));function we(){var e,s,r;const t=((e=globalThis.document)==null?void 0:e.documentElement.getAttribute("data-bs-theme"))||"light",a=typeof((s=globalThis.window)==null?void 0:s.matchMedia)=="function"?(r=globalThis.window)==null?void 0:r.matchMedia("(prefers-color-scheme: dark)").matches:!1;return t==="dark"||t==="auto"&&a?"dark":"light"}function Te(t,a){var s;let e=t;if(arguments.length===1){if(e=(s=globalThis.document)==null?void 0:s.documentElement,!e)return;a=t,Dt.update(()=>a)}e.setAttribute("data-bs-theme",a)}var $e=N('<a href="javascript:void(0);" class="float-end card-button svelte-pdkpcw"><i class="ti ti-reload"></i></a>'),Ne=N("<!> <!>",1),Be=N('<div style="padding-top: 10vh;"><div class="d-flex flex-column text-center game-title svelte-pdkpcw"><span class="truth">Thật</span> <span class="or">hay</span> <span class="dare">Thách</span></div> <div class="mt-4"><form><div class="row mb-2 align-items-center"><div class="col-5 align-self-center"><label for="player1" class="form-label fw-bold text-regular svelte-pdkpcw">Tên bạn nam</label></div> <div class="col"><input type="text" class="form-control" id="player1" required></div></div> <div class="row mb-2 align-items-center"><div class="col-5 align-self-center"><label for="player2" class="form-label fw-bold text-regular svelte-pdkpcw">Tên bạn nữ</label></div> <div class="col"><input type="text" class="form-control" id="player2" required></div></div> <div class="mt-5 text-center"><button type="submit" class="btn btn-dark minw-40 text-regular btn-lg shadow svelte-pdkpcw">Bắt đầu</button></div></form></div></div>'),Pe=N('<div class="d-flex flex-column text-center game-title svelte-pdkpcw"><span class="truth">Thật</span> <span class="or">hay</span> <span class="dare">Thách</span></div> <div class="mt-5"><div class="row text-center"><span class="game-question svelte-pdkpcw">Ai sẽ là người chơi đầu tiên?</span></div> <div class="row text-center mt-3"><div class="mt-3"><button type="button" class="btn btn-dark btn-xxl minw-40 text-regular shadow svelte-pdkpcw"> </button></div> <div class="mt-3"><button type="button" class="btn btn-dark btn-xxl minw-40 text-regular shadow svelte-pdkpcw"> </button></div></div></div>',1),Ae=N('<div style="padding-top: 10vh;"><div class="row text-center mt-3"><div class="mt-3"><button type="button" class="btn btn-dark btn-xxl minw-40 text-regular shadow svelte-pdkpcw">Thật</button></div> <div class="mt-3"><span class="text-regular svelte-pdkpcw" style="font-size: 3rem">hay</span></div> <div class="mt-3"><button type="button" class="btn btn-dark btn-xxl minw-40 text-regular shadow svelte-pdkpcw">Thách</button></div></div></div>'),qe=N('<div class=" d-flex justify-content-center" style="padding-top: 10vh;"><div class="align-self-center"><!></div></div>'),Ce=N('<div><div class="row text-center" style="padding-top: 7vh;"><div class="text-center text-regular mb-2 svelte-pdkpcw" style="font-size: 3rem; font-weight: 600"> </div> <div class="text-center text-regular mb-4 svelte-pdkpcw" style="font-size: 2rem;"> </div> <span class="game-question svelte-pdkpcw" style="font-size: 1.8rem"> </span> <div class="mt-5"><button type="button" class="btn btn-dark btn-lg minw-40 text-regular shadow svelte-pdkpcw">Tiếp theo</button></div></div></div>'),Qe=N('<div class="row text-center" style="padding-top: 20vh;"><span class="game-question svelte-pdkpcw">Kết thúc</span> <div class="mt-5"><button type="button" class="btn btn-dark minw-40 text-regular svelte-pdkpcw">Bắt đầu lại</button></div></div>'),ze=N("<!> <!>",1),De=N('<div id="main-content" class="d-flex justify-content-center svelte-pdkpcw"><!></div>');function Ee(t,a){et(a,!1);let e=ct({topic:"bold",players:[{name:"",totalFailures:0,lastTurn:"truth",lastQuestion:""},{name:"",totalFailures:0,lastTurn:"truth",lastQuestion:""}],state:"new",currentPlayerTurn:-1,currentQuestion:{key:"",value:"",isUsed:!1},data:{truths:[],dares:[]},isLoading:!1});const s={dares:[{key:"dare_1",value:"Hôn người kia ở bất kỳ vị trí nào họ muốn trong 30 giây."},{key:"dare_2",value:"Liếm nhẹ lên cổ hoặc tai người kia."},{key:"dare_3",value:"Cởi một món đồ trên người bằng cách gợi cảm nhất có thể."},{key:"dare_4",value:"Nhắm mắt lại và để người kia hôn bất kỳ đâu trên cơ thể bạn."},{key:"dare_5",value:"Di chuyển bàn tay của bạn đến bất kỳ nơi nào trên cơ thể người kia và giữ nguyên trong 15 giây."},{key:"dare_6",value:"Tặng người kia một nụ hôn dài và say đắm, ít nhất 1 phút."},{key:"dare_7",value:"Dùng ngón tay viết một từ gợi cảm lên cơ thể người kia và để họ đoán từ đó."},{key:"dare_8",value:"Hãy để người kia cởi bỏ một món đồ của bạn, nhưng họ phải làm điều đó thật quyến rũ."},{key:"dare_9",value:"Để người kia vẽ một trái tim lên lưng bạn bằng đôi môi của họ."},{key:"dare_10",value:"Hôn từ cổ xuống đến vai của người kia một cách chậm rãi."},{key:"dare_11",value:"Cả hai cùng thực hiện một điệu nhảy quyến rũ trong 1 bài hát lãng mạn."},{key:"dare_12",value:"Yêu cầu người kia hôn một bộ phận cơ thể mà bạn chọn."},{key:"dare_13",value:"Hãy miêu tả chính xác điều bạn muốn làm với người kia tối nay."},{key:"dare_14",value:"Thực hiện một tư thế yoga gợi cảm cùng người kia."},{key:"dare_15",value:"Hãy chạm vào 'cậu bé/cô bé' của người kia qua lớp quần áo trong 10 giây."},{key:"dare_16",value:"Hôn vùng bụng dưới của người kia mà không chạm vào khu vực khác."},{key:"dare_17",value:"Để người kia dùng tay mơn trớn vùng đùi trong của bạn trong 20 giây."},{key:"dare_18",value:"Cởi bỏ một món đồ của người kia một cách quyến rũ, chỉ dùng miệng."},{key:"dare_19",value:"Để người kia cởi bỏ một món đồ lót của bạn mà không dùng tay."},{key:"dare_20",value:"Hôn lên 'cậu bé/cô bé' qua lớp quần áo của người kia trong 5 giây."},{key:"dare_21",value:"Nhẹ nhàng cắn môi dưới của người kia và nhìn vào mắt họ."},{key:"dare_22",value:"Ngồi lên người kia và tạo dáng gợi cảm trong 15 giây."},{key:"dare_23",value:"Thực hiện động tác mát-xa vùng vai và cổ của người kia, sau đó hôn nhẹ lên cổ."},{key:"dare_24",value:"Giả vờ làm 'trò chơi cấm' trong 30 giây (nhưng không thực sự làm)."},{key:"dare_25",value:"Để người kia đặt tay lên vùng nhạy cảm của bạn trong 10 giây."},{key:"dare_26",value:"Hãy thủ dâm trước mặt người kia trong 20 giây."},{key:"dare_27",value:"Kích thích cậu bé/cô bé của người kia khi họ đang đứng."},{key:"dare_28",value:"Kích thích cậu bé/cô bé của nhau cùng lúc."}],truths:[{key:"truth_1",value:"Điều gì là điều táo bạo nhất bạn từng làm vì tình yêu?"},{key:"truth_2",value:"Bạn có bao giờ nghĩ đến ai đó khác khi đang ở bên người yêu hiện tại không?"},{key:"truth_3",value:"Điều gì là bí mật lớn nhất mà bạn chưa bao giờ nói với ai?"},{key:"truth_4",value:"Bạn có từng giả vờ thích một món quà từ người yêu mà thực tế không thích không?"},{key:"truth_5",value:"Lần gần nhất bạn cảm thấy ngại ngùng trước mặt người yêu là khi nào?"},{key:"truth_6",value:"Bạn có bao giờ nói dối người yêu về điều gì quan trọng không?"},{key:"truth_7",value:"Điều gì khiến bạn cảm thấy hấp dẫn nhất ở người yêu của mình?"},{key:"truth_8",value:"Bạn có từng cảm thấy ghen với ai đó mà người yêu bạn quan tâm không?"},{key:"truth_9",value:"Hãy chia sẻ một lần bạn bị thu hút bởi người mà bạn không nên thích."},{key:"truth_10",value:"Bạn có từng đọc trộm tin nhắn hoặc kiểm tra điện thoại của người yêu không?"},{key:"truth_11",value:"Bạn thích điểm gì nhất ở người yêu hiện tại của mình?"},{key:"truth_12",value:"Nếu có thể thay đổi một điều về mối quan hệ hiện tại, bạn sẽ thay đổi gì?"},{key:"truth_13",value:"Điều lãng mạn nhất bạn từng làm cho người yêu là gì?"},{key:"truth_14",value:"Bạn có từng mơ về một người khác ngoài người yêu không?"},{key:"truth_15",value:"Bạn đã bao giờ nói 'Anh/Em yêu Anh/Em' mà không thực sự cảm nhận điều đó chưa?"},{key:"truth_16",value:"Điều kỳ lạ nhất bạn từng làm khi ở một mình là gì?"},{key:"truth_17",value:"Nếu phải chọn giữa tình yêu và sự nghiệp, bạn sẽ chọn gì?"},{key:"truth_18",value:"Bạn thích điều gì nhất khi người yêu chạm vào 'cậu bé/cô bé' của bạn?"},{key:"truth_19",value:"Lần gần đây nhất bạn cảm thấy 'hưng phấn' khi ở cạnh người yêu là khi nào?"},{key:"truth_20",value:"Bạn có từng giả vờ lên đỉnh chưa? Nếu có, tại sao?"},{key:"truth_21",value:"Điều gì khiến bạn cảm thấy 'gợi cảm' nhất ở cơ thể mình?"},{key:"truth_22",value:"Bạn đã từng thử điều gì táo bạo trong phòng ngủ chưa? Hãy kể chi tiết."},{key:"truth_23",value:"Bạn thích làm điều gì táo bạo nhất với người yêu?"},{key:"truth_24",value:"Bạn có thích thử một vị trí mới lạ không? Nếu có, đó là gì?"},{key:"truth_25",value:"Bạn có từng nghĩ về người yêu theo cách táo bạo khi họ không ở gần không?"},{key:"truth_26",value:"Bạn thích 'cậu bé/cô bé' của người yêu như thế nào nhất?"},{key:"truth_27",value:"Lần gần đây nhất bạn thử điều gì mới lạ với người yêu là khi nào?"},{key:"truth_28",value:"Hãy miêu tả lần bạn cảm thấy ngại ngùng nhất khi thân mật với người yêu."},{key:"truth_29",value:"Bạn thích nhất khi người yêu chạm vào vùng nào trên cơ thể bạn?"},{key:"truth_30",value:"Bạn đã từng xem nội dung táo bạo để học hỏi chưa? Nếu có, điều gì ấn tượng nhất?"},{key:"truth_31",value:"Bạn có muốn thử điều gì táo bạo mà chưa bao giờ dám nói với người yêu?"},{key:"truth_32",value:"Bạn có thích những lời khen táo bạo từ người yêu không? Nếu có, hãy chia sẻ một câu."}]};ie(()=>{let u=localStorage.getItem("gameData");u&&W(e,JSON.parse(u))});function r(){if(n(e).state==="new")k(e,n(e).state="who-first"),localStorage.setItem("gameData",JSON.stringify(n(e)));else if(n(e).state==="who-first")k(e,n(e).state="truth-or-dare");else if(n(e).state==="truth-or-dare"){switch(k(e,n(e).topic="bold"),n(e).topic){case"bold":k(e,n(e).data.dares=s.dares.map(u=>({...u,isUsed:!1}))),k(e,n(e).data.truths=s.truths.map(u=>({...u,isUsed:!1})));break}l(!0),k(e,n(e).state="question"),localStorage.setItem("gameData",JSON.stringify(n(e)))}}function l(u=!1){var g;k(e,n(e).isLoading=!0);let f=n(e).currentPlayerTurn;u||(f=n(e).currentPlayerTurn==0?1:0);let c=(g=n(e).players[f])==null?void 0:g.lastTurn,y=c==="truth"?d():x();y===""&&(y=c==="truth"?x():d(),y===""&&k(e,n(e).state="game-over"),c=c==="truth"?"dare":"truth"),k(e,n(e).players[f].lastTurn=c==="truth"?"dare":"truth"),k(e,n(e).players[f].lastQuestion=y),k(e,n(e).currentPlayerTurn=f);const i=w(c,y);if(i){k(e,n(e).currentQuestion=i);let _=n(e).data[c==="truth"?"truths":"dares"],$=_.findIndex(C=>C.key===y);$!==-1&&(_[$].isUsed=!0)}else k(e,n(e).state="game-over");setTimeout(()=>{k(e,n(e).isLoading=!1),localStorage.setItem("gameData",JSON.stringify(n(e)))},500)}function m(u="truth"){n(e).currentPlayerTurn===-1||n(e).players.length<1||(k(e,n(e).players[0].lastTurn=u),k(e,n(e).players[1].lastTurn=u))}const d=()=>{let u=n(e).data.truths.filter(y=>!y.isUsed);if(u.length<1)return"";let f=Math.floor(Math.random()*u.length);return u[f].key};function x(){let u=n(e).data.dares.filter(y=>!y.isUsed);if(u.length<1)return"";let f=Math.floor(Math.random()*u.length);return u[f].key}function w(u="truth",f=""){return u==="truth"?n(e).data.truths.find(c=>c.key===f):n(e).data.dares.find(c=>c.key===f)}const q=()=>{W(e,{topic:"bold",players:[{name:"",totalFailures:0,lastTurn:"truth",lastQuestion:""},{name:"",totalFailures:0,lastTurn:"truth",lastQuestion:""}],state:"new",currentPlayerTurn:-1,currentQuestion:{key:"",value:"",isUsed:!1},data:{truths:[],dares:[]},isLoading:!1}),localStorage.removeItem("gameData")};tt();var h=De(),T=o(h);Tt(T,{lg:6,sm:12,class:"",children:(u,f)=>{ge(u,{class:"card-content",children:(c,y)=>{me(c,{children:(i,g)=>{var _=ze(),$=R(_);ke($,{children:(S,U)=>{var V=Ne(),H=R(V);Tt(H,{sm:6});var K=P(H,2);Tt(K,{sm:6,children:(Q,I)=>{var z=$e();M("click",z,q),p(Q,z)},$$slots:{default:!0}}),p(S,V)},$$slots:{default:!0}});var C=P($,2);{var mt=S=>{var U=Be(),V=P(o(U),2),H=o(V),K=o(H),Q=P(o(K),2),I=o(Q);Bt(I),v(Q),v(K);var z=P(K,2),F=P(o(z),2),O=o(F);Bt(O),v(F),v(z),Rt(2),v(H),v(V),v(U),At(I,()=>n(e).players[0].name,B=>k(e,n(e).players[0].name=B)),At(O,()=>n(e).players[1].name,B=>k(e,n(e).players[1].name=B)),M("submit",H,ve(r)),p(S,U)},_t=S=>{var U=ht(),V=R(U);{var H=Q=>{var I=Pe(),z=P(R(I),2),F=P(o(z),2),O=o(F),B=o(O),E=o(B,!0);v(B),v(O);var J=P(O,2),L=o(J),nt=o(L,!0);v(L),v(J),v(F),v(z),X(()=>{it(E,n(e).players[0].name),it(nt,n(e).players[1].name)}),M("click",B,()=>{k(e,n(e).currentPlayerTurn=0),r()}),M("click",L,()=>{k(e,n(e).currentPlayerTurn=1),r()}),p(Q,I)},K=Q=>{var I=ht(),z=R(I);{var F=B=>{var E=Ae(),J=o(E),L=o(J),nt=o(L);v(L);var j=P(L,4),G=o(j);v(j),v(J),v(E),M("click",nt,()=>{m("truth"),r()}),M("click",G,()=>{m("dare"),r()}),p(B,E)},O=B=>{var E=ht(),J=R(E);{var L=j=>{var G=ht(),dt=R(G);{var bt=Z=>{var Y=qe(),rt=o(Y),st=o(rt);xe(st,{type:"grow",color:"dark",size:"xxl"}),v(rt),v(Y),p(Z,Y)},It=Z=>{var Y=Ce(),rt=o(Y),st=o(rt),Lt=o(st,!0);v(st);var kt=P(st,2),jt=o(kt);v(kt);var pt=P(kt,2),Mt=o(pt,!0);v(pt);var Nt=P(pt,2),St=o(Nt);v(Nt),v(rt),v(Y),X(()=>{it(Lt,n(e).players[n(e).currentPlayerTurn].lastTurn==="dare"?"Thật":"Thách"),it(jt,`Lượt của ${n(e).players[n(e).currentPlayerTurn].name??""}`),it(Mt,n(e).currentQuestion.value)}),M("click",St,()=>{l()}),p(Z,Y)};lt(dt,Z=>{n(e).isLoading?Z(bt):Z(It,!1)})}p(j,G)},nt=j=>{var G=Qe(),dt=P(o(G),2),bt=o(dt);v(dt),v(G),M("click",bt,()=>{q()}),p(j,G)};lt(J,j=>{n(e).state==="question"?j(L):j(nt,!1)},!0)}p(B,E)};lt(z,B=>{n(e).state==="truth-or-dare"?B(F):B(O,!1)},!0)}p(Q,I)};lt(V,Q=>{n(e).state==="who-first"?Q(H):Q(K,!1)},!0)}p(S,U)};lt(C,S=>{!n(e).state||n(e).state==="new"?S(mt):S(_t,!1)})}p(i,_)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),v(h),p(t,h),at()}export{Ee as component};
