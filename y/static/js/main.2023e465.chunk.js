(this["webpackJsonpdashboard-gana-mudanzas"]=this["webpackJsonpdashboard-gana-mudanzas"]||[]).push([[0],{517:function(e,a,t){e.exports=t.p+"static/media/peter.7b6bc5d3.jpg"},570:function(e,a,t){e.exports=t(858)},575:function(e,a,t){},848:function(e,a,t){},856:function(e,a,t){e.exports=t.p+"static/media/ferny.ce0e96d1.png"},857:function(e,a,t){e.exports=t.p+"static/media/marcas.c4c35fbf.jpg"},858:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(22),l=t.n(o),c=(t(575),t(115)),i=t(36),s=t(24),m=t.n(s),u=t(40),d=t(23),g=t(901),p=t(412),f=t(884),h=t(411),b=t(536),E=t(413),S=t(898),j=t(498),y=t.n(j),O=t(105),v=t(410),I=t(883),w=t(68),x=t.n(w),C=(t(577),Object(v.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})));function N(e){var a=Object(n.useState)(""),t=Object(d.a)(a,2),o=t[0],l=t[1],s=Object(n.useState)({email:"",password:""}),j=Object(d.a)(s,2),v=j[0],w=j[1],N=Object(n.useState)(!1),A=Object(d.a)(N,2),H=A[0],B=A[1],R=C(),k=function(){var a=Object(u.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),B(!0),a.next=4,x.a.auth().signInWithEmailAndPassword(v.email,v.password).then((function(){e.history.push("/dashboard")})).catch((function(e){"auth/user-not-found"===e.code?l("No existe ningun usuario con ese correo"):"auth/invalid-email"===e.code?l("El correo esta mal escrito"):"auth/wrong-password"===e.code&&l("La contrase\xf1a es incorrecta")}));case 4:B(!1);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),P=function(e){w(Object(i.a)(Object(i.a)({},v),{},Object(c.a)({},e.target.name,e.target.value)))};return r.a.createElement(I.a,{component:"main",maxWidth:"xs"},r.a.createElement(f.a,null),r.a.createElement("div",{className:R.paper},r.a.createElement(g.a,{className:R.avatar},r.a.createElement(y.a,null)),r.a.createElement(O.a,{component:"h1",variant:"h5",style:{paddingBottom:10}},"Iniciar Sesion"),""!==o&&r.a.createElement(S.a,{severity:"error"},o),r.a.createElement("form",{className:R.form,onSubmit:k},r.a.createElement(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Correo Electronico",name:"email",autoComplete:"email",autoFocus:!0,onChange:P}),r.a.createElement(h.a,{variant:"outlined",margin:"normal",onChange:P,required:!0,fullWidth:!0,name:"password",label:"Contrase\xf1a",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:R.submit,style:{marginTop:20}},"Iniciar Sesion"))),r.a.createElement(b.a,{className:R.backdrop,open:H},r.a.createElement(E.a,{color:"inherit"})))}var A=t(3),H=Object(n.createContext)(),B=t(170),R=t(158),k=t.n(R),P=t(505),T=t.n(P),F=t(513),L=t.n(F),M=t(506),D=t.n(M),z=t(273),J=t.n(z),G=t(355),W=t.n(G),V=t(354),q=t.n(V),U=t(507),$=t.n(U),Y=t(508),Z=t.n(Y),X=t(510),K=t.n(X),_=t(511),Q=t.n(_),ee=t(512),ae=t.n(ee),te=t(514),ne=t.n(te),re=t(509),oe=t.n(re),le=t(347),ce=t.n(le),ie=t(515),se=t.n(ie),me={Add:Object(n.forwardRef)((function(e,a){return r.a.createElement(T.a,Object.assign({},e,{ref:a}))})),Check:Object(n.forwardRef)((function(e,a){return r.a.createElement(D.a,Object.assign({},e,{ref:a}))})),Clear:Object(n.forwardRef)((function(e,a){return r.a.createElement(q.a,Object.assign({},e,{ref:a}))})),Delete:Object(n.forwardRef)((function(e,a){return r.a.createElement($.a,Object.assign({},e,{ref:a}))})),DetailPanel:Object(n.forwardRef)((function(e,a){return r.a.createElement(W.a,Object.assign({},e,{ref:a}))})),Edit:Object(n.forwardRef)((function(e,a){return r.a.createElement(Z.a,Object.assign({},e,{ref:a}))})),Export:Object(n.forwardRef)((function(e,a){return r.a.createElement(oe.a,Object.assign({},e,{ref:a}))})),Filter:Object(n.forwardRef)((function(e,a){return r.a.createElement(K.a,Object.assign({},e,{ref:a}))})),FirstPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(Q.a,Object.assign({},e,{ref:a}))})),LastPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(ae.a,Object.assign({},e,{ref:a}))})),NextPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(W.a,Object.assign({},e,{ref:a}))})),PreviousPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(J.a,Object.assign({},e,{ref:a}))})),ResetSearch:Object(n.forwardRef)((function(e,a){return r.a.createElement(q.a,Object.assign({},e,{ref:a}))})),Search:Object(n.forwardRef)((function(e,a){return r.a.createElement(ce.a,Object.assign({},e,{ref:a}))})),SortArrow:Object(n.forwardRef)((function(e,a){return r.a.createElement(L.a,Object.assign({},e,{ref:a}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,a){return r.a.createElement(ne.a,Object.assign({},e,{ref:a}))})),ViewColumn:Object(n.forwardRef)((function(e,a){return r.a.createElement(se.a,Object.assign({},e,{ref:a}))}))},ue=t(890),de=t(165);function ge(e){return r.a.createElement(O.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,style:{color:"#ffa323"}},e.children)}var pe=t(117),fe=t.n(pe),he=x.a.initializeApp({apiKey:"AIzaSyCSoENTR1f2ZZSI74vVKYpgQVJm663MlLg",authDomain:"mudanzas-gana.firebaseapp.com",databaseURL:"https://mudanzas-gana.firebaseio.com",projectId:"mudanzas-gana",storageBucket:"mudanzas-gana.appspot.com",messagingSenderId:"672606101377",appId:"1:672606101377:web:89a8dfa26a9560af235280"}),be=(t(188),he.firestore(he)),Ee=Object(v.a)({depositContext:{flex:1}});function Se(e){var a=e.numero,t=e.esdinero,n=e.titulo,o=e.fechaMaster,l=e.botonMaster,c=e.setRefresh,i=e.refresh,s=e.GuardarDatos,d=e.fecha,g=e.datosNoVacios,f=e.numeroFolio,h=Ee(),b=function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===g.length?fe.a.fire("Datos Vacios","Al parecer no ingresaste ningun dato, ingresalos para poder continuar","warning"):0===f?fe.a.fire("Problema con el folio","Hubo un problema con el folio, recarga la pagina para resolverlo","error"):fe.a.fire({title:"\xbfEstas seguro que finalizaste?",text:"Verifica que los datos esten correctos antes de imprimir, una vez aceptado se generara la hoja de impresion",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Generar impresion",cancelButtonText:"Cancelar"}).then((function(e){e.value&&Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be.collection("datosDashboard").doc("7J2XIy9UxcodG5uElShj");case 2:return a=e.sent,e.next=5,a.get().then((function(e){var t=e.data().numerofolio+1,n=e.data().numeroFolioArcos+1;x.a.auth().onAuthStateChanged((function(e){"ivettemiazoe@gmail.com"===e.email?a.update({numeroFolioArcos:n}).then((function(){})):a.update({numerofolio:t}).then((function(){}))}))}));case 5:c(!i),s(),fe.a.fire("!Recibo exitoso!","Los datos han sido guardados correctamente.","success");case 8:case"end":return e.stop()}}),e)})))()}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,{style:{color:"#ffa323"}},n),r.a.createElement(O.a,{component:"p",variant:"h4"},(!0===t?"$":"")+a),o&&r.a.createElement(O.a,{color:"textSecondary",className:h.depositContext},d),l&&r.a.createElement("div",{style:{marginTop:80}},r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:b},"Imprimir Recibo")))}var je=t(274),ye=t.n(je),Oe=he.firestore(he),ve=Object(v.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(i.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function Ie(){var e=ve(),a=Object(n.useState)(0),t=Object(d.a)(a,2),o=t[0],l=t[1],c=Object(n.useState)(!0),s=Object(d.a)(c,2),g=(s[0],s[1],Object(n.useState)(0)),p=Object(d.a)(g,2),f=p[0],b=p[1],E=Object(n.useState)(""),S=Object(d.a)(E,2),j=S[0],y=S[1],O=Object(n.useState)(!1),v=Object(d.a)(O,2),w=v[0],C=v[1],N=new Date,H=N.getDate(),R=N.getMonth()+1,P=(1===H||2===H||3===H||4===H||5===H||6===H||7===H||8===H||9===H?"0":"")+H+"/"+(10===R||11===R||12===R?"":"0")+R+"/"+N.getFullYear(),T=Object(n.useState)(0),F=Object(d.a)(T,2),L=F[0],M=F[1],D=Object(A.a)(e.paper,e.fixedHeight),z=Object(n.useState)({columns:[{title:"Unidades",field:"name",type:"numeric"},{title:"Descripcion",field:"surname"},{title:"P. Unitario",field:"birthYear",type:"numeric"},{title:"Precio total",field:"total",emptyValue:0}],data:[]}),J=Object(d.a)(z,2),G=J[0],W=J[1],V=function(){var e=Object(u.a)(m.a.mark((function e(){var a,t,n,r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.parse(localStorage.getItem("dineroHoy")),t=JSON.parse(localStorage.getItem("llantasHoy")),n=JSON.parse(localStorage.getItem("arrayHoy")),r={nombre:j,fecha:P,folio:L,total:o,llantas:f,datosImpresion:[G.data]},l={nombre:j,fecha:P,folio:L,total:o,llantas:f,datosImpresion:[G.data[0]]},e.next=7,Oe.collection("clientes").doc().set(l);case 7:n.push(r),localStorage.setItem("arrayHoy",JSON.stringify(n)),localStorage.setItem("dineroHoy",a+=o),localStorage.setItem("llantasHoy",t+=f),localStorage.setItem("datosimpresion",JSON.stringify(G.data)),localStorage.setItem("totalpagar",o),localStorage.setItem("totalLlantas",f),localStorage.setItem("folio",L),localStorage.setItem("nombrecliente",j),localStorage.setItem("fecha",P),window.open("/dashboard/crear-recibo/imprimir");case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){null===localStorage.getItem("arrayHoy")&&localStorage.setItem("arrayHoy","[]"),Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe.collection("datosDashboard").doc("7J2XIy9UxcodG5uElShj");case 2:a=e.sent,x.a.auth().onAuthStateChanged((function(e){"ivettemiazoe@gmail.com"===e.email?Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get().then((function(e){M(e.data().numeroFolioArcos)}));case 2:case"end":return e.stop()}}),e)})))():Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get().then((function(e){M(e.data().numerofolio)}));case 2:case"end":return e.stop()}}),e)})))()}));case 4:case"end":return e.stop()}}),e)})))(),b(0),l(0),y(""),W(Object(i.a)(Object(i.a)({},G),{},{data:[]}))}),[w]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:e.content},r.a.createElement(I.a,{maxWidth:"lg",className:e.container},r.a.createElement(ue.a,{container:!0,spacing:3},r.a.createElement(ue.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(de.a,{className:D},r.a.createElement(Se,{numero:L,esdinero:!1,titulo:"Numero de Folio"}))),r.a.createElement(ue.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(de.a,{className:D},r.a.createElement(Se,{numero:P,esdinero:!1,titulo:"Fecha"}))),r.a.createElement(ue.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(de.a,{className:D},r.a.createElement(Se,{numero:f,esdinero:!1,titulo:"# Total de llantas"}))),r.a.createElement(ue.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(de.a,{className:D},r.a.createElement(Se,{numero:parseFloat(o).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"),esdinero:!0,titulo:"Total a pagar",botonMaster:!0,setRefresh:C,refresh:w,GuardarDatos:V,datosNoVacios:G.data,numeroFolio:L}))),r.a.createElement(ue.a,{item:!0,xs:12},r.a.createElement(k.a,{title:r.a.createElement(ue.a,{container:!0,alignItems:"flex-end"},r.a.createElement(ye.a,{style:{marginRight:10}}),r.a.createElement(h.a,{onChange:function(e){y(e.target.value)},id:"standard-basic",value:j,label:"Nombre del Cliente"})),icons:me,columns:G.columns,data:G.data,editable:{onRowAdd:function(e){return new Promise((function(a){setTimeout((function(){a();var t=e.name,n=t*e.birthYear;W((function(a){var t=Object(B.a)(a.data);return t.push(e),Object(i.a)(Object(i.a)({},a),{},{data:t})})),l(o+=n),b(f+=parseInt(t)),e.total=n}),600)}))},onRowUpdate:function(e,a){return new Promise((function(t){setTimeout((function(){t(),a&&W((function(t){var n=Object(B.a)(t.data);return n[n.indexOf(a)]=e,Object(i.a)(Object(i.a)({},t),{},{data:n})}))}),600)}))},onRowDelete:function(e){return new Promise((function(a){setTimeout((function(){a();var t=e.name,n=t*e.birthYear;W((function(a){var t=Object(B.a)(a.data);return t.splice(t.indexOf(e),1),Object(i.a)(Object(i.a)({},a),{},{data:t})})),l(o-=n),b(f-=parseInt(t)),e.total=n}),600)}))}}}))))))}var we=t(79),xe=t(893),Ce=t(418),Ne=t(866),Ae=t(895),He=t(341),Be=t(894),Re=t(530),ke=t.n(Re),Pe=t(531),Te=t.n(Pe),Fe=(t(343),t(417),t(342));t(351),t(161);var Le=t(315),Me=(he.firestore(he),Object(v.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),height:e.spacing(6)}},formControl:{margin:e.spacing(1),minWidth:520,marginTop:30,marginLeft:30,marginBottom:20},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),t(42)),De=t(868),ze=t(897),Je=t(436),Ge=t(518),We=t.n(Ge),Ve=t(171),qe=t.n(Ve),Ue=t(519),$e=t.n(Ue),Ye=t(520),Ze=t.n(Ye),Xe=t(537),Ke=t(419),_e=t(517),Qe=t.n(_e),ea=Object(v.a)((function(e){return{small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(14),height:e.spacing(14),marginLeft:"auto",marginRight:"auto",marginTop:20}}}));function aa(e){var a=e.open,t=ea(),n=Object(Me.f)();return r.a.createElement("div",null,r.a.createElement(Xe.a,{in:a},r.a.createElement(g.a,{className:t.large,src:Qe.a})),r.a.createElement(Xe.a,{in:a},r.a.createElement(O.a,{component:"div"},r.a.createElement(Le.a,{textAlign:"center",fontSize:12,m:1,style:{marginBottom:20}},"Juan Carlos Garfias"))),r.a.createElement(Ke.a,{title:"Inicio",placement:"right",disableHoverListener:a},r.a.createElement(De.a,{button:!0,onClick:function(){n.push("/dashboard")}},r.a.createElement(ze.a,null,r.a.createElement(We.a,null)),r.a.createElement(Je.a,{primary:"Inicio"}))),r.a.createElement(Ke.a,{title:"Clientes",placement:"right",disableHoverListener:a},r.a.createElement(De.a,{button:!0,onClick:function(){n.push("/dashboard/clientes")}},r.a.createElement(ze.a,null,r.a.createElement($e.a,null)),r.a.createElement(Je.a,{primary:"Clientes"}))),r.a.createElement(Ke.a,{title:"Todas",placement:"right",disableHoverListener:a},r.a.createElement(De.a,{button:!0,onClick:function(){n.push("/dashboard/estadisticas")}},r.a.createElement(ze.a,null,r.a.createElement(qe.a,null)),r.a.createElement(Je.a,{primary:"Todas"}))),r.a.createElement(Ke.a,{title:"Pendientes",placement:"right",disableHoverListener:a},r.a.createElement(De.a,{button:!0,onClick:function(){n.push("/dashboard/estadisticas")}},r.a.createElement(ze.a,null,r.a.createElement(qe.a,null)),r.a.createElement(Je.a,{primary:"Pendientes"}))),r.a.createElement(Ke.a,{title:"Respondidas",placement:"right",disableHoverListener:a},r.a.createElement(De.a,{button:!0,onClick:function(){n.push("/dashboard/estadisticas")}},r.a.createElement(ze.a,null,r.a.createElement(qe.a,null)),r.a.createElement(Je.a,{primary:"Respondidas"}))),r.a.createElement(Ke.a,{title:"No interesa",placement:"right",disableHoverListener:a},r.a.createElement(De.a,{button:!0,onClick:function(){n.push("/dashboard/estadisticas")}},r.a.createElement(ze.a,null,r.a.createElement(qe.a,null)),r.a.createElement(Je.a,{primary:"No interesa"}))),r.a.createElement(Ke.a,{title:"Contratadas",placement:"right",disableHoverListener:a},r.a.createElement(De.a,{button:!0,onClick:function(){n.push("/dashboard/estadisticas")}},r.a.createElement(ze.a,null,r.a.createElement(qe.a,null)),r.a.createElement(Je.a,{primary:"Contratadas"}))),r.a.createElement(Ke.a,{title:"Estadisticas",placement:"right",disableHoverListener:a},r.a.createElement(De.a,{button:!0,onClick:function(){n.push("/dashboard/estadisticas")}},r.a.createElement(ze.a,null,r.a.createElement(Ze.a,null)),r.a.createElement(Je.a,{primary:"Estadisticas"}))))}t(26),t(133);t(896),t(441),t(421),t(416),t(437),t(422);function ta(e,a,t,n,r,o){return{id:e,date:a,name:t,shipTo:n,paymentMethod:r,amount:o}}ta(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),ta(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),ta(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),ta(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),ta(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79);Object(v.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));var na=t(900),ra=t(440),oa=t(438),la=t(862),ca=t(277),ia=t.n(ca),sa=he.firestore(he);function ma(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)(""),c=Object(d.a)(l,2),s=c[0],m=c[1],u=Object(n.useState)(!1),g=Object(d.a)(u,2),f=g[0],b=g[1],E=Object(n.useState)([]),S=Object(d.a)(E,2),j=S[0],y=S[1],O=Object(n.useState)({columns:[{title:"#Folio",field:"name"},{title:"Fecha",field:"fecha"},{title:"Nombre del cliente",field:"surname"},{title:"Ejemplo",field:"birthYear"},{title:"Pago",field:"pago"}],data:j.map((function(e){return{name:e.folio,surname:e.nombre,birthYear:e.llantas,fecha:e.fecha,pago:e.total,kikiribu:e.datosImpresion}}))}),v=Object(d.a)(O,2),I=v[0],w=v[1];return Object(n.useEffect)((function(){w(Object(i.a)(Object(i.a)({},I),{},{data:j.map((function(e){return{name:e.folio,surname:e.nombre,birthYear:e.llantas,fecha:e.fecha,pago:e.total,kikiribu:e.datosImpresion}}))}))}),[f]),r.a.createElement(k.a,{title:r.a.createElement(ue.a,{container:!0},r.a.createElement(ue.a,{item:!0,style:{margin:"auto"}},r.a.createElement(ye.a,{style:{marginRight:10,marginTop:20}}),r.a.createElement(h.a,{onChange:function(e){o(e.target.value)},id:"standard-basic",value:t,label:"Ingresar busqueda.."})),r.a.createElement(ue.a,{item:!0},r.a.createElement(Fe.a,{component:"fieldset",style:{margin:30}},r.a.createElement(la.a,{component:"legend"},"Buscar por: "),r.a.createElement(ra.a,{"aria-label":"gender",name:"gender1",onChange:function(e){m(e.target.value)}},r.a.createElement(oa.a,{value:"folio",control:r.a.createElement(na.a,null),label:"Folio"}),r.a.createElement(oa.a,{value:"fecha",control:r.a.createElement(na.a,null),label:"Fecha"}),r.a.createElement(oa.a,{value:"nombre",control:r.a.createElement(na.a,null),label:"Nombre del cliente"})))),r.a.createElement(ue.a,{item:!0,style:{margin:"auto"}},r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){""!==t?""!==s?sa.collection("clientes").where(s,"==",!1===isNaN(t)?parseInt(t):t).get().then((function(e){var a=[];e.forEach((function(e){a.push(e.data())})),y(a),b(!f)})).catch((function(){console.log("Hubo Un error")})):fe.a.fire("Categoria Vacia","Selecciona una categoria para poder continuar","warning"):fe.a.fire("Datos Vacios","escribe el dato con el que quieres buscar a los clientes","warning")},style:{background:"#ffa323"}},"Buscar Clientes"))),style:{margin:50},icons:me,actions:[{icon:ia.a,tooltip:"Imprimir Comprobante",onClick:function(e,a){console.log(a),localStorage.setItem("folio",a.name),localStorage.setItem("datosimpresion",JSON.stringify(a.kikiribu)),localStorage.setItem("nombrecliente",a.surname),localStorage.setItem("totalpagar",a.pago),window.open("/dashboard/crear-recibo/imprimir")}}],columns:I.columns,data:I.data})}var ua=he.firestore(he),da=Object(v.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24,backgroundColor:"#333"},toolbarIcon:Object(i.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function ga(e){var a=e.palabra,t=da(),o=r.a.useState(!0),l=Object(d.a)(o,2),c=l[0],i=l[1],s=Object(n.useState)({efectivoHoy:0,efectivoAyer:0,llantasHoy:0,llantasAyer:0}),g=Object(d.a)(s,2),p=(g[0],g[1],new Date),h=p.getDate(),b=p.getMonth()+1,E=p.getFullYear(),S=(1===h||2===h||3===h||4===h||5===h||6===h||7===h||8===h||9===h?"0":"")+h+"/"+(10===b||11===b||12===b?"":"0")+b+"/"+E,j=Object(A.a)(t.paper,t.fixedHeight),y=Object(n.useContext)(H),v=y.cargarPagina;y.ejemploPrueba,y.funcionEjemplo,y.dinerohoy,y.dinerohyer;return Object(n.useEffect)((function(){setInterval((function(){var e=new Date,a=(e.getSeconds(),e.getMinutes(),e.getHours());9===a&&localStorage.setItem("9",localStorage.getItem("dineroHoy")),10===a&&localStorage.setItem("10",localStorage.getItem("dineroHoy")),11===a&&localStorage.setItem("11",localStorage.getItem("dineroHoy")),12===a&&localStorage.setItem("12",localStorage.getItem("dineroHoy")),13===a&&localStorage.setItem("13",localStorage.getItem("dineroHoy")),14===a&&localStorage.setItem("14",localStorage.getItem("dineroHoy")),15===a&&localStorage.setItem("15",localStorage.getItem("dineroHoy")),16===a&&localStorage.setItem("16",localStorage.getItem("dineroHoy")),17===a&&localStorage.setItem("17",localStorage.getItem("dineroHoy")),18===a&&localStorage.setItem("18",localStorage.getItem("dineroHoy")),19===a&&localStorage.setItem("19",localStorage.getItem("dineroHoy")),20===a&&localStorage.setItem("20",localStorage.getItem("dineroHoy"))}),1e3),x.a.auth().onAuthStateChanged((function(e){if(console.log(e.email),localStorage.getItem("fechaAnterior")&&localStorage.getItem("fechaActual"))S===localStorage.getItem("fechaActual")&&console.log("Son iguales"),S!==localStorage.getItem("fechaActual")&&Object(u.a)(m.a.mark((function a(){var t;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ua.collection("estadisticas").doc(b.toString());case 2:return t=a.sent,a.next=5,t.get().then((function(a){var n=localStorage.getItem("dineroHoy"),r=localStorage.getItem("llantasHoy"),o=a.data().efectivo+=parseInt(n),l=a.data().efectivo1+=parseInt(n),c=a.data().efectivoBase+=parseInt(n),i=a.data().llantas+=parseInt(r),s=a.data().llantas1+=parseInt(r),m=a.data().llantasBase+=parseInt(r);if("luistlaquepaque@gmail.com"!==e.email&&"ffernandezg1521@hotmail.com"!==e.email&&"fernys58@hotmail.com"!==e.email&&"campechano2231@gmail.com"!==e.email||t.update({efectivo:o,efectivoBase:c,llantas:i,llantasBase:m}).then((function(){for(var e=9;e<=20;e++)localStorage.setItem("".concat(e),0);localStorage.setItem("dineroAyer",localStorage.getItem("dineroHoy")),localStorage.setItem("llantasAyer",localStorage.getItem("llantasHoy")),localStorage.setItem("dineroHoy",0),localStorage.setItem("llantasHoy",0),localStorage.setItem("fechaAnterior",localStorage.getItem("fechaActual")),localStorage.setItem("fechaActual",S),localStorage.setItem("arrayHoy","[]")})),"ivettemiazoe@gmail.com"===e.email){for(var u=9;u<=20;u++)localStorage.setItem("".concat(u),0);t.update({efectivo1:l,efectivoBase:c,llantas1:s,llantasBase:m}).then((function(){localStorage.setItem("dineroAyer",localStorage.getItem("dineroHoy")),localStorage.setItem("llantasAyer",localStorage.getItem("llantasHoy")),localStorage.setItem("dineroHoy",0),localStorage.setItem("llantasHoy",0),localStorage.setItem("fechaAnterior",localStorage.getItem("fechaActual")),localStorage.setItem("fechaActual",S),localStorage.setItem("arrayHoy","[]")}))}}));case 5:case"end":return a.stop()}}),a)})))();else{for(var a=9;a<=20;a++)localStorage.setItem("".concat(a),0);localStorage.setItem("fechaActual",S),localStorage.setItem("fechaAnterior",(1===h||2===h||3===h||4===h||5===h||6===h||7===h||8===h||9===h?"0":"")+(h-1)+"/"+(10===b||11===b||12===b?"":"0")+b+"/"+E),localStorage.setItem("dineroHoy",0),localStorage.setItem("dineroAyer",0),localStorage.setItem("llantasHoy",0),localStorage.setItem("llantasAyer",0),localStorage.setItem("arrayHoy","[]")}})),console.log(a)}),[v]),r.a.createElement("div",{className:t.root},r.a.createElement(f.a,null),r.a.createElement(xe.a,{position:"absolute",className:Object(A.a)(t.appBar,c&&t.appBarShift)},r.a.createElement(Ce.a,{className:t.toolbar},r.a.createElement(He.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},className:Object(A.a)(t.menuButton,c&&t.menuButtonHidden)},r.a.createElement(ke.a,null)),r.a.createElement(O.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title},"Mudanzas Gana Dashboard"),r.a.createElement(He.a,{color:"inherit"},r.a.createElement(Be.a,{badgeContent:4,color:"secondary"},r.a.createElement(Te.a,null))))),r.a.createElement(we.a,{variant:"permanent",classes:{paper:Object(A.a)(t.drawerPaper,!c&&t.drawerPaperClose)},open:c},r.a.createElement("div",{className:t.toolbarIcon},r.a.createElement(He.a,{onClick:function(){i(!1)}},r.a.createElement(J.a,null))),r.a.createElement(Ae.a,null),r.a.createElement(Ne.a,null,r.a.createElement(aa,{open:c})),r.a.createElement(Ae.a,null)),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.appBarSpacer}),"dashboard"===a?r.a.createElement(I.a,{maxWidth:"lg",className:t.container},r.a.createElement(ue.a,{container:!0,spacing:3},r.a.createElement(ue.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(de.a,{className:j},r.a.createElement(Se,{fechaMaster:!0,numero:parseFloat(localStorage.getItem("dineroHoy")).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"),esdinero:!0,titulo:"Ejemplo datos",fecha:S}))),r.a.createElement(ue.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(de.a,{className:j},r.a.createElement(Se,{fechaMaster:!0,numero:localStorage.getItem("llantasAyer"),esdinero:!1,titulo:"Ejemplo datos",fecha:localStorage.getItem("fechaAnterior")}))),r.a.createElement(ue.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(de.a,{className:j},r.a.createElement(Se,{fechaMaster:!0,numero:localStorage.getItem("llantasHoy"),esdinero:!1,titulo:"Ejemplo datos",fecha:S}))),r.a.createElement(ue.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(de.a,{className:j},r.a.createElement(Se,{fechaMaster:!0,numero:parseFloat(localStorage.getItem("dineroAyer")).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"),esdinero:!0,titulo:"Ejemplo datos",fecha:localStorage.getItem("fechaAnterior")}))))):"recibo"===a?r.a.createElement(Ie,null):"clientes"===a?r.a.createElement(ue.a,{item:!0,xs:12},r.a.createElement(ma,null)):r.a.createElement(r.a.Fragment,null)))}var pa=function(e,a){switch(a.type){case"CASO_EJEMPLO":return Object(i.a)(Object(i.a)({},e),{},{cargarPagina:!1,ejemploPrueba:!0});default:return e}},fa=function(e){var a=Object(n.useReducer)(pa,{cargarPagina:!0,ejemploPrueba:!1,dinerohoy:0,dineroayer:0,objetosfactura:[]}),t=Object(d.a)(a,2),o=t[0],l=t[1],c=function(){var e=Object(u.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l({type:"CASO_EJEMPLO",payload:a});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(H.Provider,{value:{cargarPagina:o.cargarPagina,ejemploPrueba:o.ejemploPrueba,funcionEjemplo:c}},e.children)},ha=(t(848),t(360)),ba=t.n(ha),Ea=t(532),Sa=t.n(Ea);function ja(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),o=a[0],l=a[1],c=Object(n.useState)(""),i=Object(d.a)(c,2),s=i[0],m=i[1],u=Object(n.useState)(0),g=Object(d.a)(u,2),p=g[0],f=g[1],h=Object(n.useState)(0),b=Object(d.a)(h,2),E=b[0],S=b[1],j=Object(n.useState)(0),y=Object(d.a)(j,2),O=y[0],v=y[1],I=Object(n.useState)(null),w=Object(d.a)(I,2),x=w[0],C=w[1],N=Object(n.useState)(!1),A=Object(d.a)(N,2),H=A[0],B=A[1],R=new Date,k=R.getHours(),P=R.toLocaleTimeString("en-US",{hour12:!1,hour:"numeric",minute:"numeric"});R.getMinutes();return Object(n.useEffect)((function(){console.log(P),Sa.a.auth().onAuthStateChanged((function(e){"ivettemiazoe@gmail.com"===e.email&&B(!0)})),l(JSON.parse(localStorage.getItem("datosimpresion"))),m(localStorage.getItem("nombrecliente")),S(localStorage.getItem("folio")),v(localStorage.getItem("totalLlantas")),f(localStorage.getItem("totalpagar")),C(localStorage.getItem("fecha"))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cuerpoimpresion"},r.a.createElement("div",{className:"clearfix"},r.a.createElement("div",{id:"logo"},r.a.createElement("div",null,r.a.createElement("h1",{style:{width:100,marginTop:50,paddingRight:90,marginBottom:0}}," ","Fecha \n "+x),r.a.createElement("p",{style:{position:"absolute",marginLeft:27}},k<=11?P+" AM":P+" PM")),r.a.createElement("img",{src:t(856)}),r.a.createElement("h1",{style:{width:100,marginTop:50,paddingLeft:90}},"   Folio N\xb0 \n "+E+(!0===H?"-A":""))),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}}," ",r.a.createElement("h2",null,"Sucursal Arcos de Zapopan"),r.a.createElement("h2",null,"Sucursal Mercado del Mar")),r.a.createElement("div",{id:"company",className:"clearfix"},r.a.createElement("div",null,"Prol. Pino Suarez #349",r.a.createElement("br",null)," Mercado del campesino",r.a.createElement("br",null)," Col. El vigia",r.a.createElement("br",null)," Zapopan,Jal. C.P 45140"),r.a.createElement("div",null,r.a.createElement("h2",{style:{marginTop:10,marginBottom:0}},"Tel. 36339529")),r.a.createElement("div",null,r.a.createElement("h2",{style:{marginTop:0,marginBottom:0}},"Cel. 3318546359",r.a.createElement(ba.a,{style:{paddingLeft:5}}))),r.a.createElement("div",null,r.a.createElement("span",{style:{fontWeight:"bold",marginRight:24}},"CORREO:"),"fernys58@hotmail.com")),r.a.createElement("div",{id:"project"},r.a.createElement("div",{id:"company2",className:"clearfix",style:{fontSize:"large"}},r.a.createElement("div",{id:"company2"},"Av Torre Molinos #2232",r.a.createElement("br",null)," "," ",r.a.createElement("br",null),"  Col. Lomas de Zapopan",r.a.createElement("br",null)," Zapopan,Jal. C.P 45130"),r.a.createElement("div",{id:"company2"},r.a.createElement("h2",{style:{marginTop:10,marginBottom:0}},"Tel. 16521746")),r.a.createElement("div",{id:"company2"},r.a.createElement("h2",{style:{marginTop:0,marginBottom:0}},"Cel. 3318546359",r.a.createElement(ba.a,{style:{paddingLeft:5}}))),r.a.createElement("div",null,r.a.createElement("span",{style:{fontWeight:"bold",marginRight:24}},"NOMBRE:"),s)))),r.a.createElement("h1",{className:"titulo1"},"Recibo de pago"),r.a.createElement("main",null,r.a.createElement("table",{className:"tablaFerny"},r.a.createElement("thead",null,r.a.createElement("tr",{style:{fontWeight:"bold"}},r.a.createElement("th",{className:"desc"},"DESCRIPCION DEL PRODUCTO"),r.a.createElement("th",{style:{paddingRight:0}},"P. UNITARIO"),r.a.createElement("th",{style:{paddingRight:0}},"CANTIDAD"),r.a.createElement("th",null,"TOTAL"))),r.a.createElement("tbody",null,o.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"desc"},e.surname),r.a.createElement("td",{className:"unit"},"$"+parseFloat(e.birthYear).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")),r.a.createElement("td",{className:"qty"},e.name),r.a.createElement("td",{className:"total"},"$"+parseFloat(e.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")))})),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"3"},"TOTAL A PAGAR:"),r.a.createElement("td",{className:"total"},"$"+parseFloat(p).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"))),r.a.createElement("tr",{style:{borderBottom:"1px solid #5D6975"}},r.a.createElement("td",{colSpan:"3"},"# DE LLANTAS:"),r.a.createElement("td",{className:"total"},O)))),r.a.createElement("h1",{style:{textAlign:"center"}},"Contamos con las mejores marcas a nivel mundial"),r.a.createElement("div",{id:"notices"},r.a.createElement("p",null,"Incluye:",r.a.createElement("br",null),r.a.createElement("br",null),"\xb0Instalacion",r.a.createElement("br",null),"\xb0Balanceo",r.a.createElement("br",null),"\xb0V\xe1lvula",r.a.createElement("br",null),"\xb0Llenado de Nitr\xf3geno",r.a.createElement("br",null),"\xb0Garantia sobre defecto",r.a.createElement("br",null),"de fabricacion",r.a.createElement("br",null),"(No Baches, No Banquetasos) "),r.a.createElement("div",{id:"logo2"},r.a.createElement("img",{src:t(857)}))),r.a.createElement("h1",{style:{textAlign:"center"}},"\xa1Gracias por su preferencia!"))))}var ya=t(349);var Oa=function(){return r.a.createElement(fa,null,r.a.createElement(ya.a,null,r.a.createElement(Me.c,null,r.a.createElement(Me.a,{exact:!0,path:"/",component:N}),r.a.createElement(Me.a,{exact:!0,path:"/",component:N}),r.a.createElement(Me.a,{exact:!0,path:"/dashboard",render:function(e){return r.a.createElement(ga,Object.assign({},e,{palabra:"dashboard"}))}}),r.a.createElement(Me.a,{exact:!0,path:"/dashboard/estadisticas",render:function(e){return r.a.createElement(ga,Object.assign({},e,{palabra:"estadisticas"}))}}),r.a.createElement(Me.a,{exact:!0,path:"/dashboard/clientes",render:function(e){return r.a.createElement(ga,Object.assign({},e,{palabra:"clientes"}))}}),r.a.createElement(Me.a,{exact:!0,path:"/dashboard/crear-recibo",render:function(e){return r.a.createElement(ga,Object.assign({},e,{palabra:"recibo"}))}}),r.a.createElement(Me.a,{exact:!0,path:"/dashboard/crear-recibo/imprimir",component:ja}),r.a.createElement(Me.a,{exact:!0,path:"/dashboard/kiki",component:Ie}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Oa,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[570,1,2]]]);
//# sourceMappingURL=main.2023e465.chunk.js.map