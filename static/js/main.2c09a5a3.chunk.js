(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){e.exports={wrap:"Header_wrap__18tYD",a:"Header_a__2B2Tx",Active:"Header_Active__2uAFW",menu:"Header_menu__2dVU4"}},13:function(e,t,n){e.exports={messages:"Message_messages__1i2Fo",content:"Message_content__2Flnx",angle:"Message_angle__2dI2d",ava:"Message_ava__16hUc",name:"Message_name__1qE0-",text:"Message_text__1nfJ6",time:"Message_time__38lKi"}},14:function(e,t,n){e.exports={content:"Affair_content__16V8N",name:"Affair_name__1Xkaa",priority:"Affair_priority__103fa",deleteButton:"Affair_deleteButton__-vq_n",HighPriority:"Affair_HighPriority__2Qx_I",MiddlePriority:"Affair_MiddlePriority__2saCd",lowPriority:"Affair_lowPriority__2UElZ"}},15:function(e,t,n){e.exports={content:"Affairs_content__1ZYd1",affairs:"Affairs_affairs__2iCU4",filterButtons:"Affairs_filterButtons__1hd3f",active:"Affairs_active__yGrUz"}},25:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__38x8A",errorInput:"SuperInputText_errorInput__3odnu",error:"SuperInputText_error__2rcvn"}},28:function(e,t,n){e.exports={blue:"HW4_blue__3c1S7",column:"HW4_column__1VbMg",testSpanError:"HW4_testSpanError__3_7gu",Input:"HW4_Input__7wC-q"}},29:function(e,t,n){e.exports={default:"SuperButton_default__2j4B3",red:"SuperButton_red__1xUOS"}},30:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__y7baR",spanClassName:"SuperCheckbox_spanClassName__2fDDL"}},31:function(e,t,n){e.exports={dark:"HW12_dark__2xD4-","dark-text":"HW12_dark-text__mIb4V",red:"HW12_red__nJRb1","red-text":"HW12_red-text__eWKSp",some:"HW12_some__2yC05","some-text":"HW12_some-text__3FbAN"}},43:function(e,t,n){e.exports={App:"App_App__1PSNz"}},44:function(e,t,n){e.exports={span:"SuperEditableSpan_span__1TzoY"}},45:function(e,t,n){e.exports={range:"SuperRange_range__33Nq7"}},52:function(e,t,n){},57:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(22),s=n.n(r),i=(n(52),n(43)),o=n.n(i),j=n(10),l=n(4),u=n(13),d=n.n(u),b=n(0),O=function(e){return Object(b.jsxs)("div",{className:d.a.messages,children:[Object(b.jsx)("div",{className:d.a.ava,children:Object(b.jsx)("img",{src:e.avatar})}),Object(b.jsx)("div",{className:d.a.angle}),Object(b.jsxs)("div",{className:d.a.content,children:[Object(b.jsx)("div",{className:d.a.name,children:e.name}),Object(b.jsx)("div",{className:d.a.text,children:e.message}),Object(b.jsx)("div",{className:d.a.time,children:e.time})]})]})},h="https://www.meme-arsenal.com/memes/6a3fa10dd6d17518c5a55a98f819015b.jpg",x="\u0410\u0433\u0435\u043d\u0442 \u0424\u0421\u0411",m="\u042d\u0439, \u0432\u044b\u043a\u043b\u044e\u0447\u0430\u0439 \u043a\u0430\u043c\u0435\u0440\u0443 \u043a\u043e\u0433\u0434\u0430 \u0440\u0430\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u0448\u044c\u0441\u044f, \u044f \u043d\u0435 \u0445\u043e\u0447\u0443 \u043d\u0430 \u044d\u0442\u043e \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c!",f="22:00";var p=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(O,{avatar:h,name:x,message:m,time:f}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},v=n(2),g=n(14),_=n.n(g);var C=function(e){return Object(b.jsxs)("div",{className:_.a.content,children:[Object(b.jsx)("div",{className:_.a.name,children:e.affair.name}),Object(b.jsx)("div",{className:_.a.priority,children:Object(b.jsx)("div",{className:"high"===e.affair.priority?_.a.HighPriority:"middle"===e.affair.priority?_.a.MiddlePriority:"low"===e.affair.priority?_.a.lowPriority:void 0,children:e.affair.priority})}),Object(b.jsx)("button",{className:_.a.deleteButton,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},N=n(15),k=n.n(N);var y=function(e){var t=e.data.map((function(t){return Object(b.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:k.a.content,children:[Object(b.jsx)("div",{className:k.a.affairs,children:t}),Object(b.jsxs)("div",{className:k.a.filterButtons,children:[Object(b.jsx)("button",{className:"all"===e.filter?k.a.active:"",onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{className:"high"===e.filter?k.a.active:"",onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{className:"middle"===e.filter?k.a.active:"",onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{className:"low"===e.filter?k.a.active:"",onClick:function(){e.setFilter("low")},children:"Low"})]})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(a.useState)(w),t=Object(v.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(v.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(y,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},T=n(19),M=n(80),A=n(9),H=n.n(A),I=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s="".concat(H.a.error," ").concat(H.a.inputStandard),i=c?H.a.addButtonDisabled:H.a.addButton;return Object(b.jsxs)("div",{className:H.a.content,children:[Object(b.jsx)("div",{className:H.a.title,children:"Add User name"}),Object(b.jsxs)("div",{className:H.a.inputForm,children:[Object(b.jsx)("input",{value:t,onChange:n,className:c?s:H.a.inputStandard}),Object(b.jsx)("button",{className:i,disabled:!!c,onClick:a,children:"add"}),Object(b.jsxs)("span",{className:H.a.counter,children:["Total Users: ",Object(b.jsx)("span",{children:r})]})]}),Object(b.jsx)("div",{className:H.a.errorMessage,children:c})]})},P=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(v.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),j=Object(v.a)(o,2),l=j[0],u=j[1],d=t.length;return Object(b.jsx)(I,{name:s,setNameCallback:function(e){i(e.currentTarget.value),u("")},addUser:function(){if(""!==s.trim()){var e={id:Object(M.a)(),name:s};n(e),alert("Hello  ! "+e.name),i("")}else u("add current Name")},error:l,totalUsers:d})};var B=function(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(P,{users:n,addUserCallback:function(e){c([e].concat(Object(T.a)(n)))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},E=n(3),F=n(5),V=n(25),W=n.n(V),R=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(W.a.error," ").concat(i||""),l="".concat(W.a.errorInput," ").concat(s||W.a.superInput);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(E.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(b.jsx)("span",{className:j,children:r})]})},D=n(28),U=n.n(D),L=n(29),G=n.n(L),J=function(e){var t=e.red,n=e.className,a=Object(F.a)(e,["red","className"]),c="".concat(t?G.a.red:G.a.default," ").concat(n);return Object(b.jsx)("button",Object(E.a)({className:c},a))},q=n(30),K=n.n(q),z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(K.a.checkbox," ").concat(a||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(E.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s,checked:r.checked},r)),c&&Object(b.jsx)("span",{className:K.a.spanClassName,children:c})]})};var X=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(v.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:U.a.column,children:[Object(b.jsx)(R,{value:n,onChangeText:c,onEnter:s,error:r}),Object(b.jsx)(R,{className:U.a.blue}),Object(b.jsx)(J,{children:"default"}),Object(b.jsx)(J,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(J,{disabled:!0,children:"disabled"}),Object(b.jsx)(z,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(z,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Y=n(44),Z=n.n(Y),Q=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(v.a)(s,2),o=i[0],j=i[1],l=c||{},u=l.children,d=l.onDoubleClick,O=l.className,h=Object(F.a)(l,["children","onDoubleClick","className"]),x="".concat(Z.a.span," ").concat(O||"");return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(R,Object(E.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(b.jsxs)("span",Object(E.a)(Object(E.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},h),{},{children:["\u270e",u||r.value]}))})};function $(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ee(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)(Q,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsx)(J,{onClick:function(){$("editable-span-value",n)},children:"save"}),Object(b.jsx)(J,{onClick:function(){c(ee("editable-span-value",""))},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var ne=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsx)(S,{}),Object(b.jsx)(B,{}),Object(b.jsx)(X,{}),Object(b.jsx)(te,{})]})};var ae=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ce=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(F.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},"0-"+t)})):[];return Object(b.jsx)("select",Object(E.a)(Object(E.a)({value:c.value,onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},re=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=Object(F.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){c&&c(e),r&&r(e.currentTarget.value)},o=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(E.a)({type:"radio",name:t,onChange:i,checked:e===a,value:e},s)),e]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:o})},se=["x","y","z"];var ie=function(){var e=Object(a.useState)(se[1]),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(ce,{options:se,value:n,onChangeOption:c})}),Object(b.jsx)("div",{children:Object(b.jsx)(re,{name:"radio",options:se,value:n,onChangeOption:c})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},oe="check",je="down",le=function(e,t){switch(t.type){case"up":for(var n=0,a=e.length-1;n<a;n++){for(var c=!1,r=0,s=a-n;r<s;r++)if(e[r].name>e[r+1].name){var i=[e[r+1],e[r]];e[r]=i[0],e[r+1]=i[1],c=!0}if(!c)break}return Object(T.a)(e);case je:for(var o=0,j=e.length-1;o<j;o++){for(var l=!1,u=0,d=j-o;u<d;u++)if(e[u].name<e[u+1].name){var b=[e[u+1],e[u]];e[u]=b[0],e[u+1]=b[1],l=!0}if(!l)break}return Object(T.a)(e);case oe:return e.filter((function(e){return e.age>=t.age}));default:return e}},ue=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var de=function(){var e=Object(a.useState)(ue),t=Object(v.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsx)("div",{style:{width:"100px"},children:e.name}),Object(b.jsx)("div",{children:e.age})]},e._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 8",r,Object(b.jsx)("span",{children:Object(b.jsx)(J,{onClick:function(){return c(le(ue,{type:"up"}))},children:"sort up"})}),Object(b.jsx)("span",{children:Object(b.jsx)(J,{onClick:function(){return c(le(ue,{type:je}))},children:"sort Down"})}),Object(b.jsx)("span",{children:Object(b.jsx)(J,{onClick:function(){return c(le(ue,{type:oe,age:18}))},children:"age more 18"})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var be=function(){var e=Object(a.useState)(0),t=Object(v.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(new Date),s=Object(v.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(!1),l=Object(v.a)(j,2),u=l[0],d=l[1],O=function(){clearTimeout(n)},h=i.toLocaleTimeString(),x=i.toLocaleDateString();return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:h}),u&&Object(b.jsx)("div",{children:x}),Object(b.jsx)(J,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(b.jsx)(J,{onClick:O,children:"stop"})]})};var Oe=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 9",Object(b.jsx)(be,{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},he=n(12),xe="CHANGE-IS-LOADING",me={isLoading:!1},fe=function(e){return{type:xe,isLoading:e}};var pe=function(){var e=Object(he.c)((function(e){return e.loading.isLoading})),t=Object(he.b)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 10",e?Object(b.jsx)("div",{children:"\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430..."}):Object(b.jsx)("div",{children:Object(b.jsx)(J,{onClick:function(){t(fe(!0)),setTimeout((function(){t(fe(!1))}),1e3),console.log("loading...")},children:"set loading..."})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ve=n(45),ge=n.n(ve),_e=function(e){e.type;var t=e.onChange,n=e.onChangeRangeMinValue,a=e.className,c=Object(F.a)(e,["type","onChange","onChangeRangeMinValue","className"]),r="".concat(ge.a.range," ").concat(a||"");return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(E.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:r},c))})},Ce=(n(57),function(e){e.type;var t=e.onChange,n=e.onChangeRangeMinValue,c=(e.className,e.onChangeRangeMaxValue),r=Object(F.a)(e,["type","onChange","onChangeRangeMinValue","className","onChangeRangeMaxValue"]),s=100,i=Object(a.useState)(50),o=Object(v.a)(i,2),j=o[0],l=o[1],u=Object(a.useState)(j),d=Object(v.a)(u,2),O=d[0],h=d[1],x=Object(a.useState)(j),m=Object(v.a)(x,2),f=m[0],p=m[1],g=14+(j-0)/100*272,_=(f-j)/(s-j)*100,C={min:{width:g,left:0,"--minRangePercent":"".concat((O-0)/(j-0)*100,"%")},max:{width:14+(s-j)/100*272,left:g,"--maxRangePercent":"".concat(_,"%")}};return Object(a.useLayoutEffect)((function(){l((f+O)/2),h(r.minValue),p(r.maxValue)}),[O,f,r.minValue,r.maxValue]),console.log(f,j,0,s,_),Object(b.jsxs)("div",{className:"min-max-slider","data-legendnum":"2","data-rangemin":0,"data-rangemax":s,"data-thumbsize":14,"data-rangewidth":300,children:[Object(b.jsx)("input",{id:"min",className:"min",style:C.min,name:"min",type:"range",step:"1",min:0,max:j,value:O,onChange:function(e){h(Number(e.currentTarget.value)),t&&t(e),n&&n(+e.currentTarget.value)}}),Object(b.jsx)("input",{id:"max",className:"max",style:C.max,name:"max",type:"range",step:"1",min:j,max:s,value:f,onChange:function(e){p(Number(e.currentTarget.value)),t&&t(e),c&&c(Math.ceil(+e.currentTarget.value))}})]})});var Ne=function(){var e=Object(a.useState)(0),t=Object(v.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(100),s=Object(v.a)(r,2),i=s[0],o=s[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 11",Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{style:{minWidth:"40px"},children:n}),Object(b.jsx)(_e,{onChangeRangeMinValue:c,value:n})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)(Ce,{minValue:n,onChangeRangeMinValue:c,onChangeRangeMaxValue:o,maxValue:i}),Object(b.jsx)("div",{style:{paddingTop:"10px"},children:i})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var ke=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(ie,{}),Object(b.jsx)(de,{}),Object(b.jsx)(Oe,{}),Object(b.jsx)(pe,{}),Object(b.jsx)(Ne,{})]})},ye=n(31),we=n.n(ye),Se={theme:"dark"},Te=["dark","red","some"];var Me=function(){var e=Object(he.c)((function(e){return e.colorTheme.theme})),t=Object(he.b)();return Object(b.jsxs)("div",{className:we.a[e],children:[Object(b.jsx)("hr",{}),Object(b.jsx)("span",{className:we.a[e+"-text"],children:"homeworks 12"}),Object(b.jsx)(re,{value:e,options:Te,onChangeOption:function(e){t(function(e){return{type:"SWITCH_THEME",theme:e}}(e))}}),Object(b.jsx)("hr",{})]})},Ae=n(46),He=n.n(Ae).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/"}),Ie=function(e){return He.post("auth/test",{success:e})},Pe=function(){return Object(b.jsxs)(b.Fragment,{children:["HW13",Object(b.jsx)(Be,{})]})},Be=function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({message:null}),s=Object(v.a)(r,2),i=s[0],o=s[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(J,{onClick:function(){Ie(n).then((function(e){console.log(e.data),o(Object(E.a)(Object(E.a)({},i),{},{message:e.data.errorText}))})).catch((function(e){console.log(e.response?e.response.data.errorText:e.message),o(Object(E.a)(Object(E.a)({},i),{},{message:e.response.data.errorText}))}))},children:"send request"}),Object(b.jsx)(z,{checked:n,onChange:function(e){c(e.currentTarget.checked)}}),Object(b.jsx)("br",{}),i&&i.message,Object(b.jsx)("br",{})]})};var Ee=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Me,{}),Object(b.jsx)(Pe,{})]})},Fe="/pre-junior",Ve="/junior",We="/junior-plus";var Re=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(l.a,{to:Fe})}}),Object(b.jsx)(l.b,{path:Fe,render:function(){return Object(b.jsx)(ne,{})}}),Object(b.jsx)(l.b,{path:Ve,render:function(){return Object(b.jsx)(ke,{})}}),Object(b.jsx)(l.b,{path:We,render:function(){return Object(b.jsx)(Ee,{})}}),Object(b.jsx)(l.b,{render:function(){return Object(b.jsx)(ae,{})}})]})})},De=n(11),Ue=n.n(De);var Le=function(){return Object(b.jsxs)("div",{className:Ue.a.wrap,children:[Object(b.jsx)(j.c,{className:Ue.a.a,activeClassName:Ue.a.Active,to:Fe,children:Object(b.jsx)("span",{children:"PreJunior"})}),Object(b.jsx)(j.c,{className:Ue.a.a,activeClassName:Ue.a.Active,to:Ve,children:Object(b.jsx)("span",{children:"Junior"})}),Object(b.jsx)(j.c,{className:Ue.a.a,activeClassName:Ue.a.Active,to:We,children:Object(b.jsx)("span",{children:"Junior Plus"})}),Object(b.jsx)("div",{className:Ue.a.menu,children:"| Menu"})]})};var Ge=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.b,{children:[Object(b.jsx)(Le,{}),Object(b.jsx)(Re,{})]})})};var Je=function(){return Object(b.jsx)(j.a,{children:Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"React homeworks:"}),Object(b.jsx)(Ge,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=n(33),Ke=Object(qe.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(E.a)(Object(E.a)({},e),{},{isLoading:t.isLoading});default:return e}},colorTheme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SWITCH_THEME":return Object(E.a)(Object(E.a)({},e),{},{theme:t.theme});default:return e}}}),ze=Object(qe.b)(Ke),Xe=ze;window.store=ze,s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(he.a,{store:Xe,children:Object(b.jsx)(Je,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports={content:"Greeting_content__2kJjm",title:"Greeting_title__3e6P5",inputForm:"Greeting_inputForm__LMfCE",inputStandard:"Greeting_inputStandard__7rwV6",addButton:"Greeting_addButton__1KqMw",addButtonDisabled:"Greeting_addButtonDisabled__3dyMi",counter:"Greeting_counter__3_r1M",error:"Greeting_error__3Ttku",errorMessage:"Greeting_errorMessage__2X3ZD"}}},[[78,1,2]]]);
//# sourceMappingURL=main.2c09a5a3.chunk.js.map