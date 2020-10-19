(this["webpackJsonpcaesar-rot-react"]=this["webpackJsonpcaesar-rot-react"]||[]).push([[0],{13:function(t,n,e){t.exports=e.p+"static/media/julius-caesar.79e917ac.png"},18:function(t,n,e){t.exports=e(31)},23:function(t,n,e){},31:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(8),i=e.n(o),c=(e(23),e(1)),u=e(2),l=e(13),d=e.n(l);function p(){var t=Object(c.a)(["\n\tbackground: url(",");\n\tbackground-position: top;\n\twidth: 100%;\n\theight: 100vh;\n\tz-index: -1;\n\tdisplay: none;\n\n\t@media (min-width: 736px) {\n\t\tdisplay: block;\n\t}\n"]);return p=function(){return t},t}var s=u.a.div(p(),d.a);function f(){var t=Object(c.a)(["\ngrid-area: second;\n\t\tword-wrap: normal;\n\t\tletter-spacing: calc(10vh / 2);\n\t\tmargin-left: calc(10vh - 8px);\n\t\twidth: 0;\n\t\talign-self: end;\n"]);return f=function(){return t},t}function m(){var t=Object(c.a)(["\n  grid-area: first;\n\t\twidth: 0;\n\t\tword-wrap: break-word;\n"]);return m=function(){return t},t}function v(){var t=Object(c.a)(['\n  display: grid;\n\t\tgrid-template-columns: 16px auto;\n\t\tgrid-template-areas: "first second";\n\t\tcolor: var(--header-text-color);\n\t\tfont-size: 10vh;\n\t\tmargin: 0;\n']);return v=function(){return t},t}var h=u.a.h1(v()),b=u.a.span(m()),g=u.a.span(f()),w=function(){return a.a.createElement(h,null,a.a.createElement(b,null,"CAESAR"),a.a.createElement(g,null,"OT"))};function H(){var t=Object(c.a)(["\n  grid-area: header;\n\tdisplay: flex;\n\talign-items: center;\n"]);return H=function(){return t},t}var L=u.a.header(H()),x=function(){return a.a.createElement(L,null,a.a.createElement(s,null),a.a.createElement(w,null))},E=e(9),j=e(4),k=e(5),y=Object(k.b)({name:"rot",initialState:{value:13},reducers:{change:function(t,n){t.value=n.payload}}}),O=y.actions.change,z=function(t){return t.rot.value},C=y.reducer;function V(){var t=Object(c.a)(['\n\t\tposition: relative;\n\t\twidth: 40px;\n\n\t\t&::after {\n\t\t\tcontent: "\u25bc";\n\t\t\tfont-size: .8rem;\n\t\t\ttop: 10%;\n\t\t\tright: 6px;\n\t\t\tposition: absolute;\n\t\t\tcolor: var(--accent-color);\n\t\t\tz-index: -1;\n\t\t}\n']);return V=function(){return t},t}var A=u.a.div(V());function S(){var t=Object(c.a)(["\n  -webkit-appearance: none;\n\tappearance: none;\n\tdisplay: block;\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 0;\n\tborder-radius: 0;\n\tborder-bottom: 2px solid var(--accent-color);\n\tbackground: transparent;\n\twidth: 100%;\n\tfont-size: 1rem;\n\tmin-width: 40px;\n\n\t&:focus {\n\t\toutline: solid var(--accent-focus-color);\n\t}\n"]);return S=function(){return t},t}var T=u.a.select(S());function B(){var t=Object(c.a)(["\n  -webkit-appearance: none;\n\tappearance: none;\n\tdisplay: block;\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 0;\n\tborder-radius: 0;\n\tborder-bottom: 2px solid var(--accent-color);\n\tbackground: transparent;\n\twidth: 100%;\n\n\t&:focus {\n\t\toutline: solid var(--accent-focus-color);\n\t}\n"]);return B=function(){return t},t}var R=u.a.option(B()),W=Object(E.a)(Array(14).keys()),F=function(){var t=Object(j.c)(z),n=Object(j.b)(),e=W.map((function(t){return a.a.createElement(R,{value:t,key:t},t)}));return a.a.createElement(A,null,a.a.createElement(T,{value:t,onChange:function(t){var e=t.target,r=+e.options[e.selectedIndex].value;n(O(r))}},e))},I=Object(k.b)({name:"cipher",initialState:{inputValue:"",outputValue:""},reducers:{set:function(t,n){var e=n.payload,r=(e.key,e.value);t.inputValue=r},clear:function(t){t.inputValue="",t.outputValue=""},cipher:function(t,n){var e=n.payload,r=e.input,a=e.rot,o=e.alphabet,i=function(t){return t.toString()}(r),c=Object(E.a)(i),u="";if(function(t){return""===t}(i))throw new Error("Given string is empty!");c.forEach((function(t){if(!function(t){return null!==t.match(/[a-z]|[A-Z]|[0-9]/gi)}(t)||function(t){return null!==t.match(/[0-9]/gi)}(t))return u=u.concat(t);var n=function(t,n,e){return function(t,n,e){return t+e>n-1}(t,e,n)?n-(e-t):t+n}(o.indexOf(t.toLowerCase()),a,o.length),e=o[n];u=function(t){return null===t.match(/[0-9]/gi)&&t===t.toUpperCase()}(t)?u.concat(e.toUpperCase()):u.concat(e)})),t.outputValue=u}}}),J=I.actions,M=J.clear,U=J.set,Z=J.cipher,G=function(t){return t.cipher.outputValue},K=I.reducer,P={alphabet:function(){for(var t=[],n="a".charCodeAt(0),e="z".charCodeAt(0),r=n;r<e+1;r++)t.push(String.fromCharCode(r));return t}()},X=Object(k.b)({name:"alphabet",initialState:P,reducers:{}}),$=function(t){return t.alphabet.alphabet},q=X.reducer;function D(){var t=Object(c.a)(["\n  -webkit-appearance: none;\n\tappearance: none;\n\tdisplay: block;\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 0;\n\tborder-radius: 0;\n\tborder-bottom: 2px solid var(--accent-color);\n\tbackground: transparent;\n\twidth: 100%;\n\tmargin-right: 1rem;\n\n\t&:focus {\n\t\toutline: solid var(--accent-focus-color);\n\t}\n"]);return D=function(){return t},t}var N=u.a.input(D()),Q=function(){var t=Object(j.b)(),n=Object(j.c)($),e=Object(j.c)(z);return a.a.createElement(N,{onKeyPress:function(r){var a={value:r.currentTarget.value,key:r.key};"Enter"===r.key&&(t(U(a)),t(Z({input:a.value,rot:e,alphabet:n})))},onClick:function(n){n.currentTarget.value="",t(M())},onBlur:function(r){var a={value:r.currentTarget.value,key:""};t(U(a)),t(Z({input:a.value,rot:e,alphabet:n}))}})};function Y(){var t=Object(c.a)(["\n  align-self: end;\n\tjustify-self: center;\n\tgrid-area: input;\n\tdisplay: flex;\n\tmargin: .5rem 1rem;\n  min-width: 252px;\n"]);return Y=function(){return t},t}var _=u.a.section(Y()),tt=function(){return a.a.createElement(_,null,a.a.createElement(Q,null),a.a.createElement(F,null))};function nt(){var t=Object(c.a)(["\n  color: var(--body-text-color);\n\tborder-radius: 0;\n\tborder-bottom: 2px solid var(--accent-color);\n\tfont-size: 1rem;\n\tline-height: 1rem;\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\ttext-align: center;\n\tword-wrap: break-word;\n"]);return nt=function(){return t},t}var et=u.a.p(nt());function rt(){var t=Object(c.a)(["\n  align-self: end;\n\tjustify-self: center;\n\tgrid-area: output;\n\tdisplay: flex;\n\tmargin: .5rem 1rem;\n\tmin-width: 252px;\n\tbackground: transparent;\n"]);return rt=function(){return t},t}var at=u.a.section(rt()),ot=function(){var t=Object(j.c)(G);return a.a.createElement(at,null,a.a.createElement(et,null,t))};function it(){var t=Object(c.a)(['\ndisplay: grid;\n\tgrid-template-areas: "header input" "header output" "header .";\n\tgrid-template-columns: 0 4fr;\n\tgrid-template-rows: 2fr 2fr 10fr;\n\twidth: 100%;\n\n\t@media (min-width: 736px) {\n\t\tgrid-template-columns: 2fr 4fr;\n\t}\n']);return it=function(){return t},t}var ct=u.a.main(it()),ut=function(){return a.a.createElement(ct,null,a.a.createElement(x,null),a.a.createElement(tt,null),a.a.createElement(ot,null))};function lt(){var t=Object(c.a)(["\n  height: 655px;\n  position: absolute;\n\t\twidth: 100%;\n\t\tbottom: 0;\n\t\tz-index: -1;\n"]);return lt=function(){return t},t}var dt=u.a.svg.attrs({version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"})(lt()),pt=function(){var t=window.outerWidth;return a.a.createElement(dt,{width:t,fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 458.5L53 589.5L108.208 655H161.208L216.417 458.5L269.417 65.5L324.625 458.5L377.625 393L432.833 262L485.833 655L541.042 65.5H594.042L649.25 262L702.25 196.5L757.458 262L810.458 458.5L865.667 262L918.667 655H973.875L1026.87 327.5L1082.08 589.5L1135.08 327.5L1190.29 589.5L1243.29 65.5L1298.5 262L1351.5 458.5L1406.71 327.5L1459.71 262L1514.92 327.5L1567.92 65.5L1623.12 655L1676.12 393L1731.33 327.5L1784.33 524L1839.54 131L1892.54 196.5L1947.75 0L2000.75 589.5L2055.96 262L2108.96 458.5L2164.17 589.5L2217.17 393L2272.37 196.5L2325.37 327.5L2380.58 65.5L2433.58 589.5L2488.79 196.5L2541.79 655L2597 393L2650 131V655H2597H2541.79H2488.79H2433.58H2380.58H2325.37H2272.37H2217.17H2164.17H2108.96H2055.96H2000.75H1947.75H1892.54H1839.54H1784.33H1731.33H1676.12H1623.12H1567.92H1514.92H1459.71H1406.71H1351.5H1298.5H1243.29H1190.29H1135.08H1082.08H1026.87H973.875H918.667H865.667H810.458H757.458H702.25H649.25H594.042H541.042H485.833H432.833H377.625H324.625H269.417H216.417H161.208H108.208H53H0V458.5Z",fill:"#F5AF87"}))};function st(){var t=Object(c.a)(["\nbackground: var(--bg-gradient);\n\tmin-height: 100vh;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: flex;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n"]);return st=function(){return t},t}var ft=u.a.div(st()),mt=function(){return a.a.createElement(ft,null,a.a.createElement(ut,null),a.a.createElement(pt,null))},vt=Object(k.a)({reducer:{alphabet:q,rot:C,cipher:K}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(j.a,{store:vt},a.a.createElement(mt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.4eeae8b0.chunk.js.map