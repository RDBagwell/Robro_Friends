(this.webpackJsonprobo_friends=this.webpackJsonprobo_friends||[]).push([[0],{16:function(e,t,r){},17:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r(1),c=r.n(s),a=r(8),o=r.n(a),i=r(7),h=r.n(i),l=r(9),b=r(2),d=r(3),u=r(5),j=r(4),f=function(e){var t=e.roboName,r=e.roboEmail,s=e.id;return Object(n.jsxs)("div",{className:"tc bg-light-green dib br3 ma2 pa3 grow shadow-5",children:[Object(n.jsx)("img",{src:"https://robohash.org/".concat(s),className:"bg-white br3",alt:t}),Object(n.jsxs)("div",{className:"card-text",children:[Object(n.jsx)("h2",{className:"name",children:t}),Object(n.jsx)("p",{className:"email",children:r})]})]})},m=function(e){var t=e.robots;return Object(n.jsx)("div",{children:t.map((function(e,r){return Object(n.jsx)(f,{id:t[r].id,roboName:t[r].name,roboEmail:t[r].email},r)}))})},p=function(e){e.searchfield;var t=e.searchChange;return Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"bg-lightest-blue br3 ma2 pa3",type:"search",placeholder:"Search Robots",onChange:t})})},O=function(e){return Object(n.jsx)("div",{style:{overflowY:"scroll",height:"700px",border:"1px solid black"},children:e.children})},x=function(e){Object(u.a)(r,e);var t=Object(j.a)(r);function r(e){var n;return Object(b.a)(this,r),(n=t.call(this,e)).state={hasError:!1},n}return Object(d.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(n.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),r}(s.Component),v=(r(16),function(e){Object(u.a)(r,e);var t=Object(j.a)(r);function r(){var e;return Object(b.a)(this,r),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var e=Object(l.a)(h.a.mark((function e(){var t,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,this.setState({robots:r});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLocaleLowerCase().includes(e.state.searchfield)}));return 0===this.state.robots.length?Object(n.jsx)("h1",{className:"tc",children:"Loading..."}):Object(n.jsxs)("div",{className:"tc",children:[Object(n.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(n.jsx)(p,{searchChange:this.onSearchChange}),Object(n.jsx)(O,{children:Object(n.jsx)(x,{children:Object(n.jsx)(m,{robots:t})})})]})}}]),r}(s.Component));r(17),r(18);o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.811b45a1.chunk.js.map