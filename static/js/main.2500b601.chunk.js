(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{36:function(n,e,t){},38:function(n,e,t){"use strict";t.r(e);var c,i,r,a,o,s,u,l,j,b,p=t(0),d=t(15),h=t.n(d),x=t(13),f=t.n(x),O=t(16),m=t(5),g=t(2),y=t(3),w=t(11),v=t(1),k=function(n){var e=Object(p.useState)(""),t=Object(m.a)(e,2),c=t[0],i=t[1],r=Object(p.useState)(!1),a=Object(m.a)(r,2),o=a[0],s=a[1],u=Object(p.useRef)("");return Object(p.useEffect)((function(){o&&u.current.focus()}),[o]),o?Object(v.jsx)(W,{children:Object(v.jsx)(w.a.div,{initial:{opacity:0},animate:{opacity:1},children:Object(v.jsxs)(S,{onSubmit:function(e){e.preventDefault(),n.getWeather(c)},children:[Object(v.jsx)(z,{ref:u,required:!0,value:c,onChange:function(n){i(n.target.value)}}),Object(v.jsx)(C,{type:"submit",children:"Search"}),Object(v.jsx)(F,{onClick:function(){s(!1)},children:"X"})]})})}):Object(v.jsxs)(W,{children:[Object(v.jsx)(q,{onClick:function(){s(!0)},children:n.city}),Object(v.jsx)(D,{children:n.country})]})},S=y.a.form(c||(c=Object(g.a)(["\n  display: flex;\n  position: relative;\n  background: #46618b;\n  border-radius: 5px;\n"]))),z=y.a.input(i||(i=Object(g.a)(["\n  padding: 5px;\n  background: transparent;\n  border: none;\n  color: white;\n  width: 80px;\n  &:focus {\n    outline: 0;\n  }\n"]))),C=y.a.button(r||(r=Object(g.a)(["\n  color: white;\n  padding: 5px;\n  border: none;\n  background: #394e70;\n  border-bottom-right-radius: 5px;\n  border-top-right-radius: 5px;\n  cursor: pointer;\n"]))),F=y.a.span(a||(a=Object(g.a)(["\n  display: flex;\n  font-size: 0.8rem;\n  position: absolute;\n  background: #557fc2;\n  justify-content: center;\n  align-items: center;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  cursor: pointer;\n  top: -8px;\n  right: -10px;\n  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);\n"]))),W=y.a.div(o||(o=Object(g.a)(["\n  text-align: center;\n"]))),q=y.a.h1(s||(s=Object(g.a)(['\n  font-family: "Merriweather", sans-serif;\n  font-size: 1.4rem;\n  font-weight: bold;\n  position: relative;\n  cursor: pointer;\n  &:hover {\n    top: -5px;\n  }\n']))),D=y.a.h3(u||(u=Object(g.a)(['\n  font-family: "Fira Sans", sans-serif;\n  font-size: 1.2rem;\n']))),I=function(n){return Object(v.jsx)(A,{className:"weather-icon",src:"http://openweathermap.org/img/wn/".concat(n.icon,"@2x.png"),alt:"weather icon"})},A=y.a.img(l||(l=Object(g.a)(["\n  width: 50%;\n"]))),E=t(18),J=function(n){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(E.a,{theme:M,text:"".concat(n.temp,"\xb0C")}),Object(v.jsx)(N,{children:n.condition})]})},M={reel:{height:"1em",display:"flex",alignItems:"flex-end",overflowY:"hidden",fontFamily:"Fira Sans",fontSize:"1.4rem",color:"white"},group:{transitionDelay:"0ms",transitionTimingFunction:"ease-in-out",transform:"translate(0, 0)"},number:{height:"1em"}},N=y.a.h3(j||(j=Object(g.a)(['\n  font-family: "Merriweather", sans-serif;\n  font-size: 1rem;\n']))),P=function(n){var e,t,c=0,i=0;n.temp>12?(t=(e=255*(1-(n.temp-12)/28))-150,c=255):(t=(e=255*(1-(n.temp+20)/32))-150,i=255);var r=y.a.div(b||(b=Object(g.a)(["\n    margin: 0 auto;\n    background: linear-gradient(\n      to top,\n      rgb(",", ",", ","),\n      rgb(",", ",", ",")\n    );\n    width: 200px;\n    height: 260px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    border-radius: 15px;\n  "])),c,e,i,c,t,i);return Object(v.jsx)(w.a.div,{initial:{scale:0},animate:{scale:1},children:Object(v.jsxs)(r,{children:[Object(v.jsx)(k,{city:n.city,country:n.country,getWeather:n.getWeather}),Object(v.jsx)(I,{condition:n.condition,icon:n.icon}),Object(v.jsx)(J,{temp:n.temp,condition:n.condition})]})})},R=t(19),T=t.n(R),X=function(n){var e=Object(p.useState)(!1),t=Object(m.a)(e,2),c=t[0],i=t[1],r=Object(p.useState)(!1),a=Object(m.a)(r,2),o=a[0],s=a[1],u=Object(p.useState)({temp:null,city:null,condition:null,country:null,icon:null}),l=Object(m.a)(u,2),j=l[0],b=l[1],d=function(){var n=Object(O.a)(f.a.mark((function n(e){var t,c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(!0),n.prev=1,n.next=4,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&APPID=ad9d858445c064c2d477358a7e99ce88"));case 4:return t=n.sent,n.next=7,t.json();case 7:c=n.sent,b({city:c.name,temp:c.main.temp,condition:c.weather[0].main,country:c.sys.country,icon:c.weather[0].icon}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),s(!0);case 14:i(!1);case 15:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}();return Object(p.useEffect)((function(){d(n.location)}),[n.location]),o?Object(v.jsxs)("div",{style:{color:"black"},children:["There has been an error",Object(v.jsx)("br",{}),Object(v.jsx)("button",{onClick:function(){return s(!1)},children:"Reset!"})]}):c?Object(v.jsx)("div",{style:{display:"flex",width:"200px",justifyContent:"center",height:"260px",alignItems:"center"},children:Object(v.jsx)(T.a,{size:15,color:"purple"})}):Object(v.jsx)(P,{temp:j.temp,condition:j.condition,city:j.city,country:j.country,icon:j.icon,getWeather:d})};t(36);var Y=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(X,{location:"tokyo, jp"}),Object(v.jsx)(X,{location:"london, uk"}),Object(v.jsx)(X,{location:"beijing, cn"})]})};h.a.render(Object(v.jsx)(Y,{}),document.querySelector("#root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2500b601.chunk.js.map