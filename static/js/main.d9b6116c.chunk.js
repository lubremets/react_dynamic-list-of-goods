(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(3),s=n.n(o),c=n(1),l=n.n(c),u=n(4),i=n(5),d=n(7),f=n(6),p=n(8);n(15);function m(t){var e=t.good;return r.a.createElement("li",{style:{color:e.color,listStyleType:"none"}},e.name)}var y=function(t){var e=t.listOfGoods;return r.a.createElement("ul",null,e.map(function(t){return r.a.createElement(m,{good:t,key:t.id})}))},h="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json",v=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(r)))).state={listOfGoods:[]},n.getDataFromServer=function(){var t;return l.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(fetch("".concat(h)));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}})},n.loadGoods=function(){return l.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=n,t.next=3,l.a.awrap(n.getDataFromServer());case 3:t.t1=t.sent,t.t2={listOfGoods:t.t1},t.t0.setState.call(t.t0,t.t2);case 6:case"end":return t.stop()}})},n.sortByName=function(){var t;return l.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(n.getDataFromServer());case 2:t=e.sent,n.setState({listOfGoods:t.sort(function(t,e){return t.name.localeCompare(e.name)}).splice(0,5)});case 4:case"end":return e.stop()}})},n.showRedOnly=function(){var t;return l.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(n.getDataFromServer());case 2:t=e.sent,n.setState({listOfGoods:t.filter(function(t){return"red"===t.color})});case 4:case"end":return e.stop()}})},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",align:"center"},r.a.createElement("h1",null,"Goods"),r.a.createElement("button",{type:"button",onClick:this.loadGoods},"Dounload goods"),0!==this.state.listOfGoods.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:this.sortByName},"sortByName"),r.a.createElement("button",{type:"button",onClick:this.showRedOnly},"showRedOnly"),r.a.createElement(y,{listOfGoods:this.state.listOfGoods})))}}]),e}(r.a.Component);s.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d9b6116c.chunk.js.map