(this.webpackJsonpunique=this.webpackJsonpunique||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t(4),l=t.n(c),n=t(2),r=t(0),o=function(e){var a=Object(s.useState)("Dark Mode"),t=Object(n.a)(a,2),c=t[0],l=t[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark p-3",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsxs)("a",{className:"navbar-brand primary",href:"#",children:[Object(r.jsxs)("span",{class:"badge bg-secondary p-2",children:[" ",e.title," "]})," "]}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active",href:"#",children:"Home"})})}),Object(r.jsx)("button",{type:"btn",class:"btn d-flex btn-primary ",onClick:function(){"black"==e.currentMode.color?(e.setMode({color:"white",backgroundColor:"black"}),document.body.style.backgroundColor="black",document.body.style.color="white",l("Light Mode")):(e.setMode({color:"black",backgroundColor:"white"}),document.body.style.backgroundColor="white",document.body.style.color="black",l("Dark Mode"))},children:c})]})]})})})},d=o;o.defaultProps={title:"Default"};var i=function(e){var a=Object(s.useState)(""),t=Object(n.a)(a,2),c=t[0],l=t[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"mb-3 my-5",style:e.style,children:[Object(r.jsxs)("div",{className:"container text-center",children:[Object(r.jsx)("p",{children:"Hey! This is a simple text util app made with React. Here you can do some simple editings with your text. This app is just a practice project and it is still under development. Checkout all the features and especially the Dark mode. If you find any bug please report it to the developer. Karan Sharma ig. karan_sharma.02"}),Object(r.jsx)("label",{for:"exampleFormControlTextarea1",className:"form-label",children:Object(r.jsx)("h2",{children:e.heading})}),Object(r.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"8",value:c,onChange:function(e){console.log("handel on change was clicked "),l(e.target.value)},placeholder:"Enter text here...",style:e.style}),Object(r.jsxs)("div",{className:"container text-center ",children:[Object(r.jsx)("button",{type:"button",onClick:function(){var a=c.toUpperCase();l(a),e.alertFun("Noob coder just updated your text!")},className:"btn btn-success my-3 mx-2 ",children:"Convert to upper text"}),Object(r.jsx)("button",{type:"button",onClick:function(){var a=c.toLowerCase();l(a),e.alertFun("Noob coder just updated your text!")},className:"btn btn-warning my-3 mx-2",children:"Convert to lower text"}),Object(r.jsx)("button",{type:"button",onClick:function(){l(""),e.alertFun("Noob coder just updated your text!")},className:"btn btn-danger my-3 mx-2",children:"Clear text"})]})]}),Object(r.jsxs)("div",{className:"container my-4 text-center",children:[Object(r.jsx)("h3",{children:"Your text summary: "}),Object(r.jsxs)("p",{children:["Your text has"," ",Object(r.jsx)("span",{className:"badge bg-secondary",children:Object(r.jsx)("b",{children:c.split(" ").length})})," ","words and"," ",Object(r.jsx)("span",{className:"badge bg-secondary",children:Object(r.jsx)("b",{children:c.length})})," ","characters!"]}),Object(r.jsxs)("p",{children:["It would take around"," ",Object(r.jsxs)("span",{className:"badge bg-secondary",children:[" ",Object(r.jsx)("b",{children:.008*c.split(" ").length})]})," ","minutes if you read."]})]})]})})},b=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container my-5 p-4 text-center",style:e.style,children:[Object(r.jsx)("h1",{className:"my-4",children:"Text Util App made with react"}),Object(r.jsx)("p",{children:"Hey! This is a simple text util app made with React. Here you can do some simple editings with your text. This app is just a practice project and it is still under development. Checkout all the features and especially the Dark mode. If you find any bug please report it to the developer. Karan Sharma ig. karan_sharma.02"}),Object(r.jsxs)("div",{className:"accordion accordion-flush border my-5",id:"accordionFlushExample",children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"flush-headingOne",children:Object(r.jsx)("button",{className:"accordion-button  collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne",style:e.style,children:"Demo"})}),Object(r.jsx)("div",{id:"flush-collapseOne",className:"accordion-collapse collapse","aria-labelledby":"flush-headingOne","data-bs-parent":"#accordionFlushExample",children:Object(r.jsx)("div",{className:"accordion-body",style:e.style,children:"Demo"})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"flush-headingTwo",children:Object(r.jsx)("button",{className:"accordion-button  collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTwo","aria-expanded":"false","aria-controls":"flush-collapseTwo",style:e.style,children:"Demo"})}),Object(r.jsx)("div",{id:"flush-collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"flush-headingTwo","data-bs-parent":"#accordionFlushExample",children:Object(r.jsx)("div",{className:"accordion-body",style:e.style,children:"Demo"})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"flush-headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseThree","aria-expanded":"false","aria-controls":"flush-collapseThree",style:e.style,children:"Demo"})}),Object(r.jsx)("div",{id:"flush-collapseThree",className:"accordion-collapse collapse","aria-labelledby":"flush-headingThree","data-bs-parent":"#accordionFlushExample",children:Object(r.jsx)("div",{className:"accordion-body",style:e.style,children:"Demo"})})]})]})]})})},h=function(e){return e.alert&&Object(r.jsx)("div",{className:"alert text-center alert-warning alert-dismissible fade show",role:"alert",children:Object(r.jsx)("strong",{children:e.alert.msg})})},j=function(){var e=Object(s.useState)(null),a=Object(n.a)(e,2),t=a[0],c=a[1],l=Object(s.useState)({color:"black",backgroundColor:"white"}),o=Object(n.a)(l,2),j=o[0],u=o[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{title:"NoobCoder",currentMode:j,setMode:u}),Object(r.jsx)(h,{alert:t}),Object(r.jsx)(i,{heading:"Enter the text to analyze",style:j,alertFun:function(e){c({msg:e}),setTimeout((function(){c(null)}),1500)}}),Object(r.jsx)(b,{style:j})]})};l.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.8b036087.chunk.js.map