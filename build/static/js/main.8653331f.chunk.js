(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),i=n.n(a),s=(n(11),n(4)),o=n.n(s),u=n(6),l=n(2),d=n(0),j=function(){return Object(d.jsx)("header",{children:Object(d.jsx)("h1",{id:"logo",children:Object(d.jsx)("a",{href:"/",children:"Pokedex"})})})},f=(n(14),function(e){e.pokemons;var t=e.children;return Object(d.jsx)("main",{children:t})}),p=function(){var e=r.a.useState("Loading"),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.useEffect((function(){var e=window.setInterval((function(){"Loading..."!==n?c(n+="."):(window.clearInterval(e),c("Loading"))}),1e3);return function(){window.clearInterval(e)}}),[n]),Object(d.jsx)("h1",{id:"loading-screen",children:n})},b=function(e){var t,n=e.pokemon,c=n.types[0].type;return Object(d.jsxs)("div",{className:"card ".concat(c.name),children:[Object(d.jsx)("img",{className:"card-image",src:n.sprites.front_default,alt:n.name}),Object(d.jsx)("p",{className:"card-title",children:n.name}),Object(d.jsxs)("p",{className:"card-subtitle",children:["Type: ",(t=c.name,"".concat(t.charAt(0).toUpperCase()+String.prototype.slice.call(t,1)))]}),Object(d.jsxs)("ul",{className:"abilities",children:[Object(d.jsx)("li",{children:"Abilities:"}),n.abilities.map((function(e){return Object(d.jsx)("li",{className:"card-subtitle",children:e.ability.name})}))]})]})};var h=function(){var e=r.a.useState(Array(150).fill()),t=Object(l.a)(e,2),n=t[0],c=t[1],a=r.a.useState(!0),i=Object(l.a)(a,2),s=i[0],h=i[1],m=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.allSettled(t).then((function(e){return e.filter((function(e){return"fulfilled"===e.status}))})).then((function(e){return e.map((function(e){return e.value}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.useEffect((function(){m(n.map((function(e,t){return fetch(function(e){return"https://pokeapi.co/api/v2/pokemon/".concat(e)}(t+1)).then((function(e){return e.json()}))}))).then((function(e){console.log(e[0]),c(e),h(!1)}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"Pokedex",children:[Object(d.jsx)(j,{}),Object(d.jsxs)(f,{children:[s&&Object(d.jsx)(p,{}),void 0!==n[0]&&n.map((function(e){return Object(d.jsx)(b,{pokemon:e},e.id)}))]})]})})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8653331f.chunk.js.map