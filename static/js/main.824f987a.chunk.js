(this.webpackJsonpjob=this.webpackJsonpjob||[]).push([[0],{22:function(e,t){e.exports={grass:"#94ffc9",poison:"#ff2189",fire:"#ff8629",flying:"#b0ffff",bug:"#994700",normal:"#3bff29",water:"#413bff"}},27:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(6),i=n.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(24),l=n(9),c=n.n(l),u=n(13),m=n(19),p=n(20),f=n(2),h=function(){var e=Object(u.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("offset,limit:",t,n),e.abrupt("return",new Promise(function(){var e=Object(u.a)(c.a.mark((function e(a,s){var r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/?offset=".concat(t,"&limit=").concat(n)).then((function(e){return e.json()})).catch((function(e){return s(e)}));case 2:r=e.sent,i=[],Promise.all(r.results.map(function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url).then((function(e){return e.json()})).then((function(e){i.push(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(){a({items:i,count:r.count})}));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){function e(){var t=this;Object(m.a)(this,e),this.pokemons=[],this.status="pending",this.itemsCount=0,this.elementPerList=20,this.currentPage=0,this.itemForModal={},this.tempArr=[],this.selectedFilters=[],this.allFiltres=[],this.pushPokemons=function(e){t.pokemons.push(e)},this.getList=function(){var e=Object(u.a)(c.a.mark((function e(n,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n,a).then((function(e){console.log("store",e);var n=[];e.items.map((function(e){e.types.map((function(e){n.push(e.type.name)}))}));var a=n.filter((function(e,t){return n.indexOf(e)==t})),s=[];a.map((function(e){s.push({value:e,label:e})})),Object(f.p)((function(){t.pokemons=e.items,t.status="success",t.itemsCount=e.count,t.allFiltres=s}))})).catch((function(e){console.log(e),Object(f.p)((function(){t.status="error"}))}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}return Object(p.a)(e,[{key:"setStatus",value:function(e){this.status=e}},{key:"setPagination",value:function(e){console.log(typeof e)}},{key:"setPage",value:function(e){this.currentPage=e}},{key:"updatePagination",value:function(e){console.log(e.target.value),this.elementPerList=parseInt(e.target.value),this.setStatus("pending"),this.getList(this.offset,this.elementPerList)}},{key:"changingPage",value:function(e){this.setPage(e.selected),this.getList(this.offset,this.elementPerList),this.setStatus("pending")}},{key:"callModal",value:function(e){console.log(e.name),this.itemForModal=e}},{key:"filterByName",value:function(e){this.tempArr.length&&(this.pokemons=this.tempArr);var t=this.pokemons.slice().filter((function(t){return t.name==e.target.value}));!t.length&&e.target.value.length&&(this.tempArr=this.pokemons),t.length?(this.tempArr=this.pokemons,this.pokemons=t):0==e.target.value.length&&(console.log("asd"),console.log("temp:",this.tempArr),console.log("main",this.pokemons),this.pokemons=this.tempArr)}},{key:"filterByTag",value:function(e){var t=[];if(this.tempArr.length&&(this.pokemons=this.tempArr),null!=e&&e.length){e.map((function(e){return t.push(e.value)}));var n=[];this.pokemons.map((function(e){e.types.map((function(a){t.indexOf(a.type.name)>-1&&n.push(e)}))})),this.tempArr=this.pokemons,this.pokemons=n}else t=this.allFiltres,this.pokemons=this.tempArr}},{key:"offset",get:function(){return this.currentPage*this.elementPerList}},{key:"pageCount",get:function(){return this.itemsCount/this.elementPerList}}]),e}();Object(f.j)(g,{pokemons:f.o,status:f.o,itemsCount:f.o,elementPerList:f.o,updatePagination:f.f,offset:f.g,changingPage:f.f,currentPage:f.o,setStatus:f.f,pageCount:f.g,itemForModal:f.o,tempArr:f.o,allFiltres:f.o,selectedFilters:f.o});var v=new g,d=n(5),y=n.n(d),k=n(21),_=n.n(k),b=function(e,t){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};Object(a.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))},E=n(22),P=n.n(E),w=n(26),j=n(25),C=Object(o.a)((function(){var e=v.status,t=v.currentPage,n=v.pageCount,r=v.elementPerList,i=v.pokemons,o=v.itemForModal,l=v.allFiltres;v.selectedFilters;Object(a.useEffect)((function(){v.getList(t,r)}),[]);var c=Object(a.useRef)();b(c,(function(){Object.keys(o).length&&v.callModal({})}));var u=Object(j.a)();return s.a.createElement("div",{className:y.a.box},s.a.createElement("div",{className:y.a.nagivation},s.a.createElement(w.a,{className:y.a.tagFilter,onChange:function(e){return v.filterByTag(e)},closeMenuOnSelect:!1,components:u,defaultValue:l,isMulti:!0,options:l}),s.a.createElement("input",{className:y.a.nameSearch,onChange:function(e){return v.filterByName(e)},placeholder:"find by fullname"}),s.a.createElement("div",{className:y.a.pagination},s.a.createElement("h3",null,"items per list:"),s.a.createElement("select",{value:r,onChange:function(e){return v.updatePagination(e)}},s.a.createElement("option",{value:"10"},"10"),s.a.createElement("option",{value:"20"},"20"),s.a.createElement("option",{value:"50"},"50"))),s.a.createElement(_.a,{previousLabel:"previous",nextLabel:"next",pageCount:n,breakLabel:"...",breakClassName:"break-me",onPageChange:function(e){return v.changingPage(e)},marginPagesDisplayed:1,pageRangeDisplayed:1,initialPage:t,containerClassName:"paginationMenu",subContainerClassName:"pages pagination",activeClassName:y.a.active})),s.a.createElement("h1",{className:y.a.loader},"pending"==e?"Retrieving data...":null),s.a.createElement("div",{className:y.a.mainArea,style:{filter:"pending"===e?"blur(10px)":null}},i.map((function(e){return s.a.createElement("div",{className:y.a.card,key:e.name+Date.now(),onClick:function(t){return v.callModal(e)}},s.a.createElement("div",null,e.name),s.a.createElement("img",{src:e.sprites.front_default,alt:e.name}),s.a.createElement("h3",null,"stats:"),s.a.createElement("p",null,e.stats[0].stat.name,": ",e.stats[0].base_stat),s.a.createElement("p",null,e.stats[1].stat.name,": ",e.stats[1].base_stat),s.a.createElement("p",null,e.stats[5].stat.name,": ",e.stats[5].base_stat),s.a.createElement("div",{className:y.a.tags},s.a.createElement("h3",null,"types:"),e.types.map((function(e){return s.a.createElement("div",{className:y.a.tag,style:{backgroundColor:P.a[e.type.name]},key:e.type.name},e.type.name)}))))}))),Object.keys(o).length?s.a.createElement("div",{className:y.a.modal,ref:c},s.a.createElement("div",{className:y.a.leftPart},s.a.createElement("img",{src:o.sprites.front_default,alt:o.name}),s.a.createElement("h1",null,o.name),s.a.createElement("p",null,"weigth: ",o.weight)),s.a.createElement("div",{className:y.a.rightPart},s.a.createElement("h2",null,"stats:"),o.stats.map((function(e){return s.a.createElement("p",{key:e.base_stat+e.stat.name},e.stat.name,": ",e.base_stat)}))),s.a.createElement("p",{className:y.a.close,onClick:function(e){return v.callModal({})}},"Close")):null)}));i.a.render(s.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){e.exports={box:"style_box__pFtgH",nagivation:"style_nagivation__1ra-M",tagFilter:"style_tagFilter__3Gkca",pagination:"style_pagination__2BrT8",active:"style_active__3NxLy",nameSearch:"style_nameSearch__2c1Pp",modal:"style_modal__3hQ3z",close:"style_close__-Puro",loader:"style_loader__2y5Ua",mainArea:"style_mainArea__1OZoJ",card:"style_card__2PpwJ",tags:"style_tags__2M0kw",tag:"style_tag__bykId"}}},[[27,1,2]]]);
//# sourceMappingURL=main.824f987a.chunk.js.map