(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(12),n(3)),i=n(4),s=n(6),u=n(5),h=(n(13),function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"m-2 p-1 card shadow text-center",style:{width:"18rem",backgroundColor:"lightgreen"}},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),className:"card-img-top",alt:"robotPicture"}),r.a.createElement("div",{"card-body":"true"},r.a.createElement("h2",{"card-title":"true"},t),r.a.createElement("p",{"card-text":"true"},n)))}),m=function(e){var t=e.robots,n=t.map((function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}));return r.a.createElement("div",{className:"d-flex flex-wrap justify-content-center"},n)},d=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"p-2"},r.a.createElement("input",{className:"border border-success",type:"search",placeholder:"search robots",style:{backgroundColor:"lightblue"},onChange:t}))},f=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("main",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children))},b=(n(14),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{style:{marginTop:"10px"}},"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(m,{robots:a}))):r.a.createElement("h1",null,"Loading")}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.b421b36d.chunk.js.map