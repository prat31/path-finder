(this["webpackJsonppath-finder"]=this["webpackJsonppath-finder"]||[]).push([[0],[,function(e,t,a){e.exports={obstruction:"Grid_obstruction__3c8df",obstructionAnimation:"Grid_obstructionAnimation__3R3KC",visited:"Grid_visited__2vCE_",visitedAnimation:"Grid_visitedAnimation__I_pqi",path:"Grid_path__1mTV5",pathAnimation:"Grid_pathAnimation__3Qfmm",unvisited:"Grid_unvisited__3YPW8"}},,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),l=a.n(s),o=(a(14),a(15),a(16),a(2)),c=a(3),i=a(4),u=a(6),d=a(5),m=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={currentAlgorithm:"",currentAlgorithmKey:-1,currentMaze:"",currentMazeKey:-1},e}return Object(i.a)(a,[{key:"algorithmSelectorHandler",value:function(e){this.setState({currentAlgorithm:this.props.algorithms[e],currentAlgorithmKey:e}),this.props.algorithmHandler(e)}},{key:"mazeSelectorHandler",value:function(e){this.setState(Object(o.a)({},this.state,{currentMaze:this.props.mazes[e],currentMazeKey:e})),this.props.mazeHandler(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark primary-color",style:{}},r.a.createElement("a",{className:"navbar-brand",href:"#"},r.a.createElement("h2",null,r.a.createElement("b",null,"Path-Finder"))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#basicExampleNav","aria-controls":"basicExampleNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"basicExampleNav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Algorithms"),r.a.createElement("div",{className:"dropdown-menu dropdown-primaryprimary-color","aria-labelledby":"navbarDropdownMenuLink"},this.props.algorithms.map((function(t,a){return r.a.createElement("a",{className:"dropdown-item",key:a,onClick:e.algorithmSelectorHandler.bind(e,a)},t)})))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Mazes"),r.a.createElement("div",{className:"dropdown-menu dropdown-primary","aria-labelledby":"navbarDropdownMenuLink"},this.props.mazes.map((function(t,a){return r.a.createElement("a",{className:"dropdown-item",key:a,onClick:e.mazeSelectorHandler.bind(e,a)},t)})))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"btn btn-sm btn-light-blue"},r.a.createElement("b",null,"Visualize")," ",this.state.currentAlgorithm)),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"clear board")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"clear path")))))}}]),a}(n.Component),h=a(1),p=a.n(h),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"--")}}]),a}(n.Component);function v(e,t,a){var n,r;console.log("src",e),console.log("dst",a),console.log("board",t);var s,l=[],o=[],c={},i=[-1,0,1,0],u=[0,-1,0,1];for(console.log("src:",e),console.log("dst:",a),console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"),l.push(e);0!=l.length;)if(1!==(n=l.shift()).state){if(n.key===a.key){o.push(n.key),n.state=1;break}n.state=1,o.push(n.key);for(var d=0;d<i.length;d++)t[r=n.i+i[d]+"-"+(n.j+u[d])]&&0===t[r].state&&(l.push(t[r]),c[r]=n.i+"-"+n.j)}for(var m=a.key,h=[];m;)if(h.push(m),t[m].state=4,m=c[m],console.log(m),m===e.key){h.push(m),t[m].state=4;break}return s=[o,h,function(e){var t,a;t=[];for(var n=0;n<20;n++){a=[];for(var r=0;r<50;r++)a.push(e[n+"-"+r]);t.push(a)}return t}(t)],console.log("path",h),console.log("visualQueue",o),s}function g(e,t,a){for(var n=[],r=0;r<20;r++)for(var s=0;s<50;s++)r%2===0&&s%2===0&&(r+"-"+s,b(r,s,e,n,t,a));!function(e,t,a,n){for(var r,s=0;s<20;s++)for(var l=0;l<50;l++)r=e[s+"-"+l],a.key!==r&&n.key!==r&&s%2==0&&l%2==0&&(10*Math.random()>=5?(l+1<50&&b(s,l+1,e,t,a,n),10*Math.random()>=5&&s+1<20&&b(s+1,l,e,t,a,n)):s+1<20&&b(s+1,l,e,t,a,n))}(e,n,t,a);return[e,n,function(e){var t,a;t=[];for(var n=0;n<20;n++){a=[];for(var r=0;r<50;r++)a.push(e[n+"-"+r]);t.push(a)}return t}(e)]}function b(e,t,a,n,r,s){var l=e+"-"+t;l!=r.key&&l!=s.key&&(a[l].state=2,n.push(l))}function y(e,t,a){var n=function(e){var t,a;t=[];for(var n=0;n<20;n++){a=[];for(var r=0;r<50;r++)a.push(e[n+"-"+r]);t.push(a)}return t}(e);return[e,function(e,t,a,n,r,s){var l,o,c,i,u,d,m,h,p=[],f=[];f.push([t,a]),N(t,a,e,p,r,s),n[t][a]=!0;for(;0!=f.length;){l=f.pop(),console.log("currentNode:",l[0],l[1]),o=[],c=[-1,0,1,0],i=[0,-1,0,1];for(var v=0;v<c.length;v++)o.push([c[v],i[v]]);for(k(e,l[0],l[1],o,p,n,r,s),u=0,d=4,console.log("traversing");c.length>0;)u=Math.floor(10*Math.random())%d,m=l[0]+2*c[u],h=l[1]+2*i[u],c.splice(u,1),i.splice(u,1),d--,E(m,h,20,50)&&!1===n[m][h]&&(n[m][h]=!0,f.push([m,h]))}return p}(e,0,0,function(){var e,t;e=[];for(var a=0;a<20;a++){t=[];for(var n=0;n<50;n++)t.push(!1);e.push(t)}return e}(),t,a),n]}function k(e,t,a,n,r,s,l,o){for(var c,i,u,d,m=0;m<n.length;m++)u=t+n[m][0],d=a+n[m][1],c=t+2*n[m][0],i=a+2*n[m][1],E(u,d,20,50)&&E(c,i,20,50)&&!1===s[c][i]&&(N(u,d,e,r,l,o),s[u][d]=!0,N(c,i,e,r,l,o))}function E(e,t,a,n){return e>=0&&e<a&&t>=0&&t<n}function N(e,t,a,n,r,s){if(!(e==r.i&&t==r.j||e==s.i&&t==s.j)){var l=e+"-"+t;a[l].state=2,n.push(l)}}var S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).populateDS=function(){var e,t,a=function(){for(var e,t,a=[],n={},r=0;r<20;r++){e=[];for(var s=0;s<50;s++)n[(t={i:r,j:s,state:0,key:r+"-"+s}).key]=t,e.push(t);a.push(e)}return[a,n]}();e=a[0],t=a[1],n.setState(Object(o.a)({},n.state,{grid:e,cells:t,src:e[0][0],dst:e[6][5]}),(function(){n.setState(Object(o.a)({},n.state,{cellsLoaded:!0,cells:t}))}))},n.tdClickHandler=function(e){if(e!==n.state.src.key&&e!==n.state.dst.key){var t=n.state.cells[e].state;n.setState((function(a){var n=Object.assign({},a);return n.cells[e].state=2!==t?2:0,{state:n}})),document.getElementById(e).className=2!==t?p.a.obstruction:p.a.unvisited}},n.selectAlgorithmHandler=function(e){n.setState(Object(o.a)({},n.state,{currentAlgorithm:n.state.algorithms[e],currentAlgorithmKey:e}))},n.selectMazeHandler=function(e){n.setState(Object(o.a)({},n.state,{currentMaze:n.state.mazes[e],currentMazeKey:e}))},n.clearBoardHandler=function(e){for(var t=0;t<20;t++){[];for(var a=0;a<50;a++)document.getElementById(t+"-"+a).className=p.a.unvisited,e&&2===n.state.cells[t+"-"+a].state?(n.setState(n.updateCellState(t+"-"+a,2,p.a.obstruction)),document.getElementById(t+"-"+a).className=p.a.obstruction):n.setState(n.updateCellState(t+"-"+a,0,p.a.unvisited))}console.log(n.state)},n.updateCellState=function(e,t,a){return function(a){var n=Object.assign({},a);return n.cells[e].state=t,{state:n}}},n.getRecursieMaze=function(){var e;n.clearBoardHandler(!1);var t=JSON.parse(JSON.stringify(n.state.cells)),a=g(t,n.state.src,n.state.dst);t=a[0];var r=a[1],s=a[2],l=setInterval((function(){0===r.length?(n.setState(Object(o.a)({},n.state,{cells:t,src:t[n.state.src.key],dst:t[n.state.dst.key],grid:s}),(function(){})),clearInterval(l)):(e=t[r.shift()],document.getElementById(e.key).className=p.a.obstruction)}),100)},n.getDFSMaze=function(){var e;n.clearBoardHandler(!1);var t=JSON.parse(JSON.stringify(n.state.cells)),a=y(t,n.state.src,n.state.dst);t=a[0];var r=a[1],s=a[2],l=setInterval((function(){0===r.length?(n.setState(Object(o.a)({},n.state,{cells:t,src:t[n.state.src.key],dst:t[n.state.dst.key],grid:s}),(function(){})),clearInterval(l)):(e=t[r.shift()],document.getElementById(e.key).className=p.a.obstruction)}),100)},n.bfs=function(){n.clearBoardHandler(!0);var e,t,a,r=JSON.parse(JSON.stringify(n.state.cells)),s=r[n.state.src.key],l=r[n.state.dst.key],o=v(s,r,l);t=JSON.parse(JSON.stringify(o[0])),a=JSON.parse(JSON.stringify(o[1])),JSON.parse(JSON.stringify(o[2]));var c=setInterval((function(){0===t.length&&0===a.length?clearInterval(c):0!==t.length?(e=r[t.shift()],document.getElementById(e.key).className=p.a.visited):(e=r[a.pop()],document.getElementById(e.key).className=p.a.path)}),100)},n.dfs=function(){n.clearBoardHandler(!0);var e,t,a,r=JSON.parse(JSON.stringify(n.state.cells)),s=r[n.state.src.key],l=r[n.state.dst.key],o=function(e,t,a){var n,r;console.log("src",e),console.log("dst",a),console.log("board",t);var s,l=[],o=[],c={},i=[-1,0,1,0],u=[0,-1,0,1];for(console.log("src:",e),console.log("dst:",a),console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"),l.push(e);0!=l.length;)if(1!==(n=l.pop()).state){if(n.key===a.key){o.push(n.key),n.state=1;break}n.state=1,o.push(n.key);for(var d=0;d<i.length;d++)t[r=n.i+i[d]+"-"+(n.j+u[d])]&&0===t[r].state&&(l.push(t[r]),c[r]=n.i+"-"+n.j)}for(var m=a.key,h=[];m;)if(h.push(m),t[m].state=4,m=c[m],console.log(m),m===e.key){h.push(m),t[m].state=4;break}return s=[o,h,function(e){var t,a;t=[];for(var n=0;n<20;n++){a=[];for(var r=0;r<50;r++)a.push(e[n+"-"+r]);t.push(a)}return t}(t)],console.log("path",h),console.log("visualQueue",o),s}(s,r,l);t=JSON.parse(JSON.stringify(o[0])),a=JSON.parse(JSON.stringify(o[1])),JSON.parse(JSON.stringify(o[2]));var c=setInterval((function(){0===t.length&&0===a.length?clearInterval(c):0!==t.length?(e=r[t.shift()],document.getElementById(e.key).className=p.a.visited):(e=r[a.pop()],document.getElementById(e.key).className=p.a.path)}),100)},n.state={title:"Dummy Algorithm",currentAlgorithm:"",currentAlgrithmKey:-1,algorithms:["Breadth-First-Search","Depth-First-Search","Dijkstra"],mazes:["A","B","C"],cellsLoaded:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.populateDS()}},{key:"componentWillReceiveProps",value:function(e){console.log("^^^^^^^^^%^^^^^^^^^^^^^^^^^^^^^^^^^"),this.setState({title:e.title})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(m,{algorithms:this.state.algorithms,mazes:this.state.mazes,mazeHandler:this.selectMazeHandler,algorithmHandler:this.selectAlgorithmHandler}),r.a.createElement(f,null),r.a.createElement("div",{className:"card card-block"},r.a.createElement("h4",{className:"card-title"},r.a.createElement("b",null,"title")),r.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement("div",{className:"flex-row"},r.a.createElement("table",{align:"center"},r.a.createElement("thead",null,r.a.createElement("tr",null)),r.a.createElement("tbody",null,this.state.cellsLoaded?this.state.grid.map((function(t,a){return r.a.createElement("tr",{key:a},t.map((function(t,a){return r.a.createElement("td",{id:t.key,key:t.key,className:0===t.state?p.a.unvisited:1===t.state?p.a.visited:2===t.state?p.a.obstruction:4==t.state?p.a.path:null,onMouseDownCapture:e.tdClickHandler.bind(e,t.key),onDrag:e.tdClickHandler.bind(e,t.key)},e.state.src.key===t.key?r.a.createElement("i",{className:"fas fa-female"}):null,e.state.dst.key===t.key?r.a.createElement("i",{className:"fa fa-flag","aria-hidden":"true"}):null)})))})):r.a.createElement("tr",null,r.a.createElement("td",null,"Loading")))),r.a.createElement("div",null,"cfsd",r.a.createElement("button",{className:"btn",onClick:this.bfs},"Breadth First Search"),r.a.createElement("button",{className:"btn",onClick:this.clearBoardHandler.bind(this,!1)},"clear"),r.a.createElement("button",{className:"btn",onClick:this.getRecursieMaze},"recursiveMaze"),r.a.createElement("button",{className:"btn",onClick:this.getDFSMaze},"DFSMaze"),r.a.createElement("button",{className:"btn",onClick:this.dfs},"DFS"),r.a.createElement("br",null),r.a.createElement("textarea",{id:"testingTextArea"})))))}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={currentAlgorithm:"",currentAlgrithmKey:-1,algorithms:["Breadth-First-Search","Depth-First-Search","Dijkstra"],mazes:["A","B","C"]},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null))}}]),a}(n.Component);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.880cc7f7.chunk.js.map