(this["webpackJsonpgender-guess"]=this["webpackJsonpgender-guess"]||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/boy-girl.b30d8a3d.png"},104:function(e,t,a){var n={"./itsaboy.png":105,"./itsagirl.png":106};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=104},105:function(e,t,a){e.exports=a.p+"static/media/itsaboy.cd045601.png"},106:function(e,t,a){e.exports=a.p+"static/media/itsagirl.753aeb80.png"},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),l=(a(89),a(29)),s=a.n(l),c=a(48),m=a(40),d=a(20),u=a(67),h=a(68),g=a(75),p=a(16),f=a(153),y=a(149),v=a(145),E=a(154),b=a(159),w=a(11),S=a(69),C=a.n(S),k=a(147),x=a(150),j=a(151),A=a(152),F=a(73),B=a.n(F),O=a(53),L=a.n(O),W=a(4),I=a(158),D=a(148),N=a(146),T=a(34),G=a(52),U=a.n(G);a(91);U.a.initializeApp({apiKey:"AIzaSyD6b-thAnlyxQAFbwmwsXdljiZSoxm2y5s",authDomain:"gender-guess.firebaseapp.com",databaseURL:"https://gender-guess.firebaseio.com",projectId:"gender-guess",storageBucket:"gender-guess.appspot.com",messagingSenderId:"1058589686721"});var z=U.a,H=a(25),M=a.n(H),Y=(a(96),a(97),a(51)),P=a.n(Y),R=a(157),$=a(155),J=a(72),_=a.n(J),K=a(71),Q=a.n(K);function V(e){return r.a.createElement($.a,Object.assign({elevation:6,variant:"filled"},e))}a(98),P.a.setLabels(" \u05d0\u05dc\u05e4\u05d9\u05d5\u05ea \u05d4\u05e9\u05e0\u05d9\u05d9\u05d4 | \u05e9\u05e0\u05d9\u05d4 | \u05d3\u05e7\u05d4 | \u05e9\u05e2\u05d4 | \u05d9\u05d5\u05dd | \u05e9\u05d1\u05d5\u05e2 | \u05d7\u05d5\u05d3\u05e9 | \u05e9\u05e0\u05d4 | \u05e2\u05e9\u05d5\u05e8 | \u05de\u05d0\u05d4 | \u05d0\u05dc\u05e3"," \u05d0\u05dc\u05e4\u05d9\u05d5\u05ea \u05d4\u05e9\u05e0\u05d9\u05d9\u05d4| \u05e9\u05e0\u05d9\u05d5\u05ea| \u05d3\u05e7\u05d5\u05ea| \u05e9\u05e2\u05d5\u05ea| \u05d9\u05de\u05d9\u05dd| \u05e9\u05d1\u05d5\u05e2\u05d5\u05ea| \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd| \u05e9\u05e0\u05d9\u05dd| \u05e2\u05e9\u05d5\u05e8\u05d9\u05dd| \u05de\u05d0\u05d5\u05ea \u05e9\u05e0\u05d9\u05dd| \u05d0\u05dc\u05e4\u05d9 \u05e9\u05e0\u05d9\u05dd"," \u05d5- "," , ","\u05e2\u05db\u05e9\u05d9\u05d5");var X=Object(w.b)({plugins:[].concat(Object(p.a)(Object(E.a)().plugins),[C()()])}),Z=Object(W.a)({switchBase:{color:"#E281AB","&$checked":{color:"#69C3FF"},"&$checked + $track":{backgroundColor:"#69C3FF",color:"#69C3FF"}},checked:{},track:{backgroundColor:"#E281AB"}})(I.a),q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleSwChange=function(){a.setState({genderSw:!a.state.genderSw})},a.generate=function(e){return Object(p.a)(Array(a.state.votes.length).keys()).map((function(t){return r.a.cloneElement(e,{key:t})}))},a.handleNameChange=function(e){a.setState({name:e.target.value,nameError:!1})},a.handleSubmit=function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.state.name.length>0?function(){var e=Object(c.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=z.firestore(),n={name:a.state.name,gender:a.state.genderSw},r=t.collection("votes"),e.next=5,r.where("name","==",n.name).get();case 5:e.sent.empty?r.add(n).then((function(){a.setState({name:"",genderSw:!0})})):a.setState({nameError:!0});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():a.setState({nameError:!0});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getTimeStampAndGender=function(){var e=z.firestore(),t="",n="";e.collection("couple-details").limit(1).get().then((function(e){var r=e.docs[0];t=M.a.unix(r.data().endDate.seconds).format("YYYY-MM-DD HH:mm:ss"),n=r.data().realGender,a.setState({endTimeStamp:t,realGender:n,isLoading:!1})})),a.timer=setInterval((function(){var e=M()(Date.now()).countdown(t);e.value>500?a.setState({timeLeft:"\u05ea\u05e1\u05ea\u05d9\u05d9\u05dd \u05d1\u05e2\u05d5\u05d3 ".concat(e.toString())}):a.setState({timeLeft:"\u05d4\u05e1\u05ea\u05d9\u05d9\u05de\u05d4, \u05de\u05d6\u05dc \u05d8\u05d5\u05d1! \ud83d\udc96"})}),1)},a.handleSnackClose=function(e,t){"clickaway"!==t&&a.setState({nameError:!1})},a.state={votes:[],name:"",genderSw:!0,endTimeStamp:"",isLoading:!0,timeLeft:"",realGender:"boy",nameError:!1,showWinners:!1},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.body.style.overflowY="hidden",document.body.style.backgroundColor="ivory",M.a.locale("he"),function(){var t=Object(c.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=z.firestore(),n=e.state.votes,a.collection("votes").orderBy("name").onSnapshot((function(t){t.docChanges().forEach((function(e){switch(e.type){case"added":n.push(e.doc.data());break;case"removed":console.log(e.doc.data().name);var t=n.findIndex((function(t){return t.name===e.doc.data().name}));t>-1&&n.splice(t,1)}})),e.setState({votes:n})}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),this.getTimeStampAndGender()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this,t=M()(Date.now()).countdown(this.state.endTimeStamp),n=this.state.votes.sort((function(e,t){return e.name.localeCompare(t.name)}));return t.value<500&&clearInterval(this.timer),r.a.createElement(v.a,{theme:{direction:"rtl"}},r.a.createElement(b.b,{jss:X},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Header"},r.a.createElement("div",{style:{fontSize:"1.2rem",textShadow:"2px 2px 5px gray"}},"\u05d0\u05d6 \u05dc\u05de\u05d9 \u05e9\u05e0\u05d9 \u05d5\u05dc\u05d9\u05e8\u05d5\u05df \u05de\u05e6\u05e4\u05d9\u05dd?"),r.a.createElement("img",{className:"babies",style:{width:"50%"},src:a(102),alt:"Logo"}),r.a.createElement("div",null,r.a.createElement("span",{style:{color:"#69C3FF"}},"\u05d1\u05df "),"\u05d0\u05d5 ",r.a.createElement("span",{style:{color:"#E281AB"}},"\u05d1\u05ea? "))),this.state.isLoading?r.a.createElement("div",{className:"Content"},r.a.createElement(N.a,null)):r.a.createElement("div",{className:"Content"},t.value>500?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{textShadow:"2px 2px 5px gray"}},"\u05d9\u05d0\u05dc\u05dc\u05d4, \u05d2\u05dd \u05d0\u05ea/\u05d4 \u05de\u05d5\u05d6\u05de\u05df/\u05ea \u05dc\u05e0\u05d7\u05e9 :)"),r.a.createElement("form",{className:"name-form",onSubmit:this.handleSubmit,noValidate:!0,autoComplete:"off"},r.a.createElement(f.a,{id:"outlined-basic",label:"\u05e9\u05dd \u05de\u05dc\u05d0",variant:"outlined",size:"small",style:{margin:"1vh"},value:this.state.name,onChange:this.handleNameChange,error:this.state.nameError}),r.a.createElement(D.a,{style:{marginRight:-10,marginLeft:0},control:r.a.createElement(Z,{checked:this.state.genderSw,onChange:this.handleSwChange,value:"checkedA"}),label:r.a.createElement(T.a,{style:{color:this.state.genderSw?"#69C3FF":"#E281AB",fontWeight:"bold"}},this.state.genderSw?"\u05d1\u05df":"\u05d1\u05ea"),labelPlacement:"top"}),r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.handleSubmit,type:"submit"},"\u05e9\u05dc\u05d7"))):r.a.createElement(y.a,{variant:"contained",color:"primary",size:"small",style:{alignSelf:"center",width:"40vw",margin:"3%"},endIcon:this.state.showWinners?r.a.createElement(Q.a,null):r.a.createElement(_.a,null),onClick:function(){return e.setState({showWinners:!e.state.showWinners})}},this.state.showWinners?"\u05d7\u05d6\u05e8\u05d4":"\u05e6\u05e4\u05d4 \u05d1\u05d6\u05d5\u05db\u05d9\u05dd"),r.a.createElement(k.a,{style:{height:t.value<500?"45vh":"40vh",overflow:"auto"},dense:!0},this.state.isLoading||t.value<500?r.a.createElement("div",{style:{textAlign:"center",alignItems:"center",justifyContent:"center",alignSelf:"center",flexDirection:"column"}},this.state.isLoading&&r.a.createElement(N.a,null),t.value<500&&(this.state.showWinners?r.a.createElement(k.a,{style:{height:"100%",maxWidth:"90%"}},n.filter((function(t){return t.gender===("boy"===e.state.realGender)})).map((function(e,t){return r.a.createElement(x.a,{key:t},r.a.createElement(j.a,{primaryTypographyProps:{style:{fontWeight:"bold",color:"#8566BA",marginRight:"10%"}},primary:e.name,secondary:null}),r.a.createElement(A.a,{style:{justifyContent:"flex-end"}},r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{style:{color:e.gender?"#69C3FF":"#E281AB",fontWeight:"bold",marginLeft:5}},e.gender?"\u05d1\u05df":"\u05d1\u05ea"),r.a.createElement(L.a,{style:{color:e.gender?"#69C3FF":"#E281AB"}}))))}))):r.a.createElement("img",{style:{maxWidth:"70%"},src:a(104)("./itsa".concat(this.state.realGender,".png")),alt:"Logo"}))):n.length>0?n.map((function(e,t){return r.a.createElement(x.a,{key:t},r.a.createElement(A.a,null,r.a.createElement(B.a,null)),r.a.createElement(j.a,{primaryTypographyProps:{style:{fontWeight:"bold",color:"#8566BA"}},primary:e.name,secondary:null}),r.a.createElement(A.a,{style:{flex:1,paddingLeft:15,justifyContent:"flex-end"}},r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{style:{color:e.gender?"#69C3FF":"#E281AB",fontWeight:"bold",marginLeft:5}},e.gender?"\u05d1\u05df":"\u05d1\u05ea"),r.a.createElement(L.a,{style:{color:e.gender?"#69C3FF":"#E281AB"}}))))})):r.a.createElement(x.a,{style:{textAlign:"center",flex:1,alignItems:"center",justifyContent:"center",alignSelf:"center"}},r.a.createElement(j.a,{primaryTypographyProps:{style:{fontWeight:"bold",color:"#8566BA"}},primary:"\u05e2\u05d3\u05d9\u05d9\u05df \u05d0\u05d9\u05df \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea...",secondary:null})))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#8566BA",flex:"1"}},r.a.createElement("p",{style:{margin:0}},this.state.isLoading?"":"\u23f0 \u05d4\u05d4\u05e6\u05d1\u05e2\u05d4 "+this.state.timeLeft))),r.a.createElement(R.a,{open:this.state.nameError,autoHideDuration:6e3,onClose:this.handleSnackClose,anchorOrigin:{horizontal:"center",vertical:"top"}},r.a.createElement(V,{onClose:this.handleSnackClose,severity:"error"},"\u05e9\u05dd \u05db\u05d1\u05e8 \u05e7\u05d9\u05d9\u05dd \u05d0\u05d5 \u05dc\u05d0 \u05ea\u05e7\u05d9\u05df!"))))}}]),t}(n.Component),ee=a(74),te=Object(ee.a)({palette:{primary:{main:"#8566BA"},secondary:{main:"#8566BA"}},direction:"rtl",typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}});var ae=function(e){return r.a.createElement(v.a,{theme:te},e.children)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ae,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t,a){e.exports=a(107)},89:function(e,t,a){},97:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.30ddd988.chunk.js.map