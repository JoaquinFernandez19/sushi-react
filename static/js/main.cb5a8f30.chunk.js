(this["webpackJsonpsushi-react"]=this["webpackJsonpsushi-react"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/line.201a2d8b.png"},function(e,a,t){e.exports=t.p+"static/media/sushi.24350322.png"},function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(6),c=t.n(i),s=t(1),o=t(2),l=t(3),m=t(4),u=(t(14),t(15),function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={currentTab:"Home"},e.changeWindow=function(a){e.setState({currentTab:a.target.textContent}),e.props.onChange(a.target.textContent)},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui Header container"},r.a.createElement("h2",{className:"ui center aligned icon header color",style:{fontFamily:"Permanent Marker",letterSpacing:"2px",color:"#3d1f3c"}},r.a.createElement("i",{className:"leaf icon animated bounceIn color"}),"Sushi Leaf"),r.a.createElement("div",{className:"ui  three item secondary  pointing menu"},r.a.createElement("p",{href:"/",className:"Menu"===this.state.currentTab?"item active":"item",onClick:this.changeWindow},"Menu"),r.a.createElement("p",{href:"/",className:"Home"===this.state.currentTab?"item active":"item",onClick:this.changeWindow},"Home"),r.a.createElement("p",{href:"/",className:"About"===this.state.currentTab?"item active":"item",onClick:this.changeWindow},"About")))}}]),t}(r.a.Component)),d=(t(16),t(7)),p=t.n(d),h=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"animated fadeIn home"},r.a.createElement("h1",{className:"ui header massive inverted custom-header"},"Traditional Sushi"),r.a.createElement("div",{className:"home-segment2 ui inverted segment"},r.a.createElement("h1",{className:"custom-header2 ui header center aligned massive",style:{color:"#ee9ca7"}},"As if you were eating in ",r.a.createElement("span",{className:"japan"}," Japan")),r.a.createElement("img",{src:p.a,className:"animated fadeInRight",alt:"black brush dash"})),r.a.createElement("h3",{className:"ui header center aligned uruguay animated fadeIn delay-1s",id:"URUGUAY"},"But made in Uruguay"))}}]),t}(r.a.Component),f=(t(17),function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"orders-list"},r.a.createElement("h1",null,"ORDERS list"))}}]),t}(r.a.Component)),E=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"addOrder",value:function(){console.log("added new item")}},{key:"render",value:function(){return r.a.createElement("div",{className:"menu-item"},r.a.createElement("h3",null,this.props.name,r.a.createElement("i",{onClick:this.addOrder,className:"ui link plus  circle icon"})),r.a.createElement("p",null,r.a.createElement("strong",null,this.props.size," piezas")),r.a.createElement("p",null,this.props.description," "),r.a.createElement("span",{className:"price"},"$",this.props.price," "))}}]),t}(r.a.Component),b=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu-container animated fadeIn "},r.a.createElement("div",{className:"menu-list "},r.a.createElement("h1",null,"Combos"),r.a.createElement(E,{name:"Combo Karate",price:360,size:16,description:"Seleccionado de las mejores piezas."}),r.a.createElement(E,{name:"Combo Jiroku",price:560,size:36,description:"Seleccionado de las mejores piezas."}),r.a.createElement(E,{name:"Combo Geysha",price:860,size:50,description:"Seleccionado de las mejores piezas."}),r.a.createElement("h1",null,"Rolls"),r.a.createElement(E,{name:"Philadelphia roll",price:150,size:9,description:"Pescado, arroz y plantita."}),r.a.createElement(E,{name:"California roll",price:150,size:9,description:"Pescado, arroz y plantita."}),r.a.createElement(E,{name:"Ebi roll",price:150,size:9,description:"Pescado, arroz y plantita."}),r.a.createElement("h1",null,"Nigiris"),r.a.createElement(E,{name:"Nigiri de salm\xf3n",price:250,size:10,description:"Pescado y arroz."}),r.a.createElement(E,{name:"Nigiri de at\xfan",price:250,size:10,description:"Pescado y arroz."})),r.a.createElement(f,null))}}]),t}(r.a.Component),v=(t(18),t(8)),y=t.n(v),g=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui text container animated fadeIn"},r.a.createElement("h1",{className:"ui header center aligned massive inverted headerStyle"},"About Us"),r.a.createElement("div",{className:"ui segment"},r.a.createElement("p",null,"Sushi Leaf es un restaurante ubicado en Montevideo, Uruguay, fundado en el a\xf1o 2020, por Joaquin Fernandez, uno de los sushiMakers m\xe1s reconocidos de la regi\xf3n. Luego de estudiar en la Sushi Academy de Jap\xf3n, volvi\xf3 a su pa\xeds de nacimiento para empezar a trabajar en el BasicSenshin, un restaurante conocido de la zona, donde fue rapidamente reconocido por su estilo y su gran cuidado del detalle.")),r.a.createElement("div",{className:"ui inverted center aligned segment"},r.a.createElement("span",{style:{fontSize:"1.5rem",fontStyle:"italic"}},'"Brinder calidad, donde cada detalle marque una diferencia y donde el trabajo en equipo sea clave para dar lo mejor."')),r.a.createElement("img",{src:y.a,alt:"sushi table",className:"ui image"}),r.a.createElement("div",{className:"ui segment"},r.a.createElement("p",null,"Hoy en d\xeda Sushi Leaf cuenta con Joaquin, junto a otros habilidosos chefs como Pedro, Roberto y Milena, 2 mozos siendo estos Judith y Marcos y por \xfaltimo pero no menos importante nuestro delivery Patricio.")),r.a.createElement("div",{className:"ui inverted center aligned segment last"},r.a.createElement("span",{style:{fontSize:"1.5rem",fontStyle:"italic"}},'"Los esperamos a todos cada noche en nuestro local, donde podran vivir la experiencia total del sushi gourmet."')),r.a.createElement("button",{className:"ui button map-style","data-tooltip":"Inca 2352 esq Risso"},r.a.createElement("i",{className:"map outline icon big icon-style"})))}}]),t}(r.a.Component),N=(t(19),function(){return r.a.createElement("div",{className:"ui center aligned segment  inverted footer"},r.a.createElement("h3",{className:"ui header "},"Made with love to practice React"),r.a.createElement("i",{className:"heart icon animated infinite pulse",style:{color:"red"}}))}),j=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={currentWidow:"Home"},e.changeWindow=function(a){e.setState({currentWidow:a})},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"site"},r.a.createElement("div",{className:"ui container site-body"},r.a.createElement(u,{onChange:this.changeWindow}),"Home"===this.state.currentWidow?r.a.createElement(h,null):"","About"===this.state.currentWidow?r.a.createElement(g,null):"","Menu"===this.state.currentWidow?r.a.createElement(b,null):""),r.a.createElement(N,null))}}]),t}(r.a.Component);c.a.render(r.a.createElement(j,null),document.querySelector("#root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.cb5a8f30.chunk.js.map