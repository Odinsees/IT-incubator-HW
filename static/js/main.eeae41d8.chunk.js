(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,r){e.exports={messages:"Message_messages__1i2Fo",content:"Message_content__2Flnx",angle:"Message_angle__2dI2d",ava:"Message_ava__16hUc",name:"Message_name__1qE0-",text:"Message_text__1nfJ6",time:"Message_time__38lKi"}},function(e,t,r){e.exports={content:"Affair_content__16V8N",name:"Affair_name__1Xkaa",priority:"Affair_priority__103fa",deleteButton:"Affair_deleteButton__-vq_n",HighPriority:"Affair_HighPriority__2Qx_I",MiddlePriority:"Affair_MiddlePriority__2saCd",lowPriority:"Affair_lowPriority__2UElZ"}},function(e,t,r){e.exports={content:"Affairs_content__1ZYd1",affairs:"Affairs_affairs__2iCU4",filterButtons:"Affairs_filterButtons__1hd3f",active:"Affairs_active__yGrUz"}},,,,,,,,function(e,t,r){e.exports={someClass:"Greeting_someClass__lBLa9",error:"Greeting_error__3Ttku",errorMessage:"Greeting_errorMessage__2X3ZD"}},function(e,t,r){e.exports={superInput:"SuperInputText_superInput__38x8A",errorInput:"SuperInputText_errorInput__3odnu",error:"SuperInputText_error__2rcvn"}},function(e,t,r){e.exports={blue:"HW4_blue__3c1S7",column:"HW4_column__1VbMg",testSpanError:"HW4_testSpanError__3_7gu"}},function(e,t,r){e.exports={default:"SuperButton_default__2j4B3",red:"SuperButton_red__1xUOS"}},function(e,t,r){e.exports={checkbox:"SuperCheckbox_checkbox__y7baR",spanClassName:"SuperCheckbox_spanClassName__2fDDL"}},,function(e,t,r){e.exports={wrap:"Header_wrap__18tYD",menu:"Header_menu__2dVU4"}},,,,function(e,t,r){e.exports={App:"App_App__1PSNz"}},,,,,,,,function(e,t,r){},,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(26),s=r.n(c),i=(r(35),r(27)),o=r.n(i),l=r(6),j=r(2),d=r(7),u=r.n(d),b=r(0),h=function(e){return Object(b.jsxs)("div",{className:u.a.messages,children:[Object(b.jsx)("div",{className:u.a.ava,children:Object(b.jsx)("img",{src:e.avatar})}),Object(b.jsx)("div",{className:u.a.angle}),Object(b.jsxs)("div",{className:u.a.content,children:[Object(b.jsx)("div",{className:u.a.name,children:e.name}),Object(b.jsx)("div",{className:u.a.text,children:e.message}),Object(b.jsx)("div",{className:u.a.time,children:e.time})]})]})},f="https://www.meme-arsenal.com/memes/6a3fa10dd6d17518c5a55a98f819015b.jpg",x="\u0410\u0433\u0435\u043d\u0442 \u0424\u0421\u0411",O="\u042d\u0439, \u0432\u044b\u043a\u043b\u044e\u0447\u0430\u0439 \u043a\u0430\u043c\u0435\u0440\u0443 \u043a\u043e\u0433\u0434\u0430 \u0440\u0430\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u0448\u044c\u0441\u044f, \u044f \u043d\u0435 \u0445\u043e\u0447\u0443 \u043d\u0430 \u044d\u0442\u043e \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c!",m="22:00";var _=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)(h,{avatar:f,name:x,message:O,time:m}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},p=r(5),v=r(8),g=r.n(v);var N=function(e){return Object(b.jsxs)("div",{className:g.a.content,children:[Object(b.jsx)("div",{className:g.a.name,children:e.affair.name}),Object(b.jsx)("div",{className:g.a.priority,children:Object(b.jsx)("div",{className:"high"===e.affair.priority?g.a.HighPriority:"middle"===e.affair.priority?g.a.MiddlePriority:"low"===e.affair.priority?g.a.lowPriority:void 0,children:e.affair.priority})}),Object(b.jsx)("button",{className:g.a.deleteButton,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},C=r(9),k=r.n(C);var y=function(e){var t=e.data.map((function(t){return Object(b.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:k.a.content,children:[Object(b.jsx)("div",{className:k.a.affairs,children:t}),Object(b.jsxs)("div",{className:k.a.filterButtons,children:[Object(b.jsx)("button",{className:"all"===e.filter?k.a.active:"",onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{className:"high"===e.filter?k.a.active:"",onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{className:"middle"===e.filter?k.a.active:"",onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{className:"low"===e.filter?k.a.active:"",onClick:function(){e.setFilter("low")},children:"Low"})]})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(n.useState)(w),t=Object(p.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)("all"),s=Object(p.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(r,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(y,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))},filter:i}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},S=r(30),P=r(44),M=r(17),B=r.n(M),U=function(e){var t=e.name,r=e.setNameCallback,n=e.addUser,a=e.error,c=e.totalUsers,s=B.a.error;return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:t,onChange:r,className:a?s:""}),Object(b.jsx)("span",{className:B.a.errorMessage,children:a}),Object(b.jsx)("button",{disabled:!!a,onClick:n,children:"add"}),Object(b.jsx)("span",{children:c})]})},I=function(e){var t=e.users,r=e.addUserCallback,a=Object(n.useState)(""),c=Object(p.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)(""),l=Object(p.a)(o,2),j=l[0],d=l[1],u=t.length;return Object(b.jsx)(U,{name:s,setNameCallback:function(e){i(e.currentTarget.value),d("")},addUser:function(){if(""!==s.trim()){var e={id:Object(P.a)(),name:s};r(e),alert("Hello  ! "+e.name),i("")}else d("add text")},error:j,totalUsers:u})};var T=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),r=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(I,{users:r,addUserCallback:function(e){a([e].concat(Object(S.a)(r)))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},H=r(10),E=r(11),F=r(18),J=r.n(F),W=function(e){e.type;var t=e.onChange,r=e.onChangeText,n=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(E.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(J.a.error," ").concat(i||""),j="".concat(J.a.errorInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(H.a)({type:"text",onChange:function(e){t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),a&&"Enter"===e.key&&a()},className:j},o)),c&&Object(b.jsx)("span",{className:l,children:c})]})},D=r(19),G=r.n(D),K=r(20),L=r.n(K),R=function(e){var t=e.red,r=e.className,n=Object(E.a)(e,["red","className"]),a="".concat(t?L.a.red:L.a.default," ").concat(r);return Object(b.jsx)("button",Object(H.a)({className:a},n))},V=r(21),X=r.n(V),Z=function(e){e.type;var t=e.onChange,r=e.onChangeChecked,n=e.className,a=(e.spanClassName,e.children),c=Object(E.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(n||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(H.a)({type:"checkbox",onChange:function(e){t&&t(e),r&&r(e.currentTarget.checked)},className:s,checked:c.checked},c)),a&&Object(b.jsx)("span",{className:X.a.spanClassName,children:a})]})};var q=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),r=t[0],a=t[1],c=r?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(r)},i=Object(n.useState)(!1),o=Object(p.a)(i,2),l=o[0],j=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:G.a.column,children:[Object(b.jsx)(W,{value:r,onChangeText:a,onEnter:s,error:c}),Object(b.jsx)(W,{className:G.a.blue}),Object(b.jsx)(R,{children:"default"}),Object(b.jsx)(R,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(R,{disabled:!0,children:"disabled"}),Object(b.jsx)(Z,{checked:l,onChangeChecked:j,children:"some text "}),Object(b.jsx)(Z,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var z=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(_,{}),Object(b.jsx)(A,{}),Object(b.jsx)(T,{}),Object(b.jsx)(q,{})]})};var Y=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var Q=function(){return Object(b.jsx)("div",{children:"PreJunior"})};var $=function(){return Object(b.jsx)("div",{children:"JuniorPlus"})},ee="/pre-junior",te="/junior",re="/junior-plus";var ne=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(j.a,{to:ee})}}),Object(b.jsx)(j.b,{path:ee,render:function(){return Object(b.jsx)(z,{})}}),Object(b.jsx)(j.b,{path:te,render:function(){return Object(b.jsx)(Q,{})}}),Object(b.jsx)(j.b,{path:re,render:function(){return Object(b.jsx)($,{})}}),Object(b.jsx)(j.b,{render:function(){return Object(b.jsx)(Y,{})}})]})})},ae=r(23),ce=r.n(ae);var se=function(){return Object(b.jsxs)("div",{className:ce.a.wrap,children:[Object(b.jsx)(l.c,{to:ee,children:" PreJunior "}),Object(b.jsx)(l.c,{to:te,children:" Junior "}),Object(b.jsx)(l.c,{to:re,children:" JuniorPlus "}),Object(b.jsx)("div",{className:ce.a.menu,children:"| Menu"})]})};var ie=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(l.b,{children:[Object(b.jsx)(se,{}),Object(b.jsx)(ne,{})]})})};var oe=function(){return Object(b.jsx)(l.a,{children:Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"React homeworks:"}),Object(b.jsx)(ie,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(oe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.eeae41d8.chunk.js.map