(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),c=a.n(r),i=(a(18),a(1)),s=a(2),l=a(4),u=a(3),d=a(5),m=["Home","About","Contacts"],p=1;function h(){var e=m.map(function(e){return o.a.createElement("li",{key:p++,className:"menu-item"},o.a.createElement("a",{href:e},e))});return o.a.createElement("ul",null,e)}a(6);var f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).greeting=function(){var e="".concat(2,"Hello Visitor!").concat(2," ").concat(1," Greet to see You! ").concat(1," \u270c\ufe0f\u270c\ufe0f\u270c\ufe0f").split(""),t=setInterval(function(){var a=document.getElementById("Text-show");e[0]?a.innerHTML+=e.shift().replace(/1/gi,"<br />").replace(/[2]/gi,'<span class="Atom">\u269b\ufe0f</span>'):clearInterval(t)},50)},a.moveDown=function(){document.getElementById("greet");var e=document.getElementById("short-info");window.scrollTo(0,e.offsetTop)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"greet"},o.a.createElement("div",{className:"greeting text"},o.a.createElement("p",{id:"Text-show"})))}},{key:"componentDidMount",value:function(){this.greeting()}}]),t}(n.Component),v=m.slice(),g=(n.Component,n.Component,a(11)),y=a(7),w=(a(8),function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){document.addEventListener("keydown",function(e){a.setDirection(e)})},a.componentDidUpdate=function(e,t,n){e.start===!a.props.start&&a.gameStart()},a.gameStart=function(){a.state.gameOver||(a.props.playing(!0),a.setState(function(e){var t=e.snake,n=e.apple,o=(e.playing,a.appleEat()),r={playing:!0,snake:Object(y.a)({},t,{head:{row:t.head.row+t.direction.y,col:t.head.col+t.direction.x},body:[t.head].concat(Object(g.a)(t.body))}),apple:o?{row:Math.floor(19*Math.random()),col:Math.floor(19*Math.random())}:n};return o||r.snake.body.pop(),r},function(){var e=a.state,t=e.snake;e.playing;if(a.gameOver()||a.isTail(t.head))return a.props.playing(!1),void a.setState({gameOver:!0,playing:!1});setTimeout(function(){a.gameStart()},a.state.snake.body.length?a.props.speed/(a.state.snake.body.length+1)+100:a.props.speed)}))},a.getAppleOnField=function(){var e=a.state.snake,t={row:Math.floor(19*Math.random()),col:Math.floor(19*Math.random())};return a.isTail(t)||e.head.row===t.row&&e.head.col===t.col?a.getAppleOnField():t},a.gameOver=function(){var e=a.state.snake;return(e.head.col<0||e.head.row<0||e.head.col>18||e.head.row>18)&&(a.props.gameOver(!0),a.props.maxScore(e.body.length),!0)},a.appleEat=function(){var e=a.state,t=e.apple,n=e.snake;return a.props.score(n.body.length),t.row===n.head.row&&t.col===n.head.col},a.setDirection=function(e){var t=a.state.snake;if(40===e.keyCode){if(-1===t.direction.y)return;a.setState(function(e){var t=e.snake;return{snake:Object(y.a)({},t,{direction:{x:0,y:1}})}})}else if(39===e.keyCode){if(-1===t.direction.x)return;a.setState(function(e){var t=e.snake;return{snake:Object(y.a)({},t,{direction:{x:1,y:0}})}})}else if(38===e.keyCode){if(1===t.direction.y)return;a.setState(function(e){var t=e.snake;return{snake:Object(y.a)({},t,{direction:{x:0,y:-1}})}})}else if(37===e.keyCode){if(1===t.direction.x)return;a.setState(function(e){var t=e.snake;return{snake:Object(y.a)({},t,{direction:{x:-1,y:0}})}})}},a.isSnake=function(e){var t=a.state.snake;return e.row===t.head.row&&e.col===t.head.col?"snake head":""},a.isApple=function(e){var t=a.state.apple;return e.row===t.row&&e.col===t.col?"apple":""},a.isTail=function(e){return a.state.snake.body.find(function(t){return t.row===e.row&&t.col===e.col})},a.startAgain=function(e){a.setState(function(e){e.snake,e.gameOver;return{playing:!1,gameOver:!1,snake:{head:{col:9,row:9},body:[],direction:{x:1,y:0}}}}),a.props.gameOver(!1)};for(var n=[],o=0;o<19;o++){for(var r=[],c=0;c<19;c++)r.push({row:o,col:c});n.push(r)}return a.state={grid:n,playing:!1,apple:{row:Math.floor(19*Math.random()),col:Math.floor(19*Math.random())},snake:{head:{row:9,col:9},direction:{x:1,y:0},body:[]},score:0},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=(t.grid,t.snake,t.gameOver),n=t.playing;return o.a.createElement("div",{id:"snake",tabIndex:"0",onKeyPress:this.setDirection},o.a.createElement("div",{id:"gridWrap"},o.a.createElement("section",{id:"grid"},this.state.grid.map(function(t){return t.map(function(t){return o.a.createElement("div",{key:"".concat(t.row," ").concat(t.col),className:"cell ".concat(e.isSnake(t)?"head":e.isApple(t)?"apple":e.isTail(t)?"tail":"")})})})),o.a.createElement("div",null,n?"":o.a.createElement("div",{className:"modal"},o.a.createElement("button",{onClick:this.startAgain,id:"start"},a?"Start Again":"Start game")))))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){document.getElementById("showButtons").addEventListener("mouseover",a.showButtons)},a.showButtons=function(e){if("showButon"===e.target.dataset.id)return console.log(a.state.showButon),a.setState({showButon:!0})},a.gameStart=function(){return a.setState({showButon:!a.state.showButon}),a.props.gameOver(!1)},a.changeSpeed=function(e){return a.state.buttonsMode.map(function(t){if(t.name===e.target.name)return a.props.changeSpeed(t.speed)}),a.setState({difficulty:e.target.name,showButon:!a.state.showButon})},a.state={buttonsMode:[{name:"easy",speed:900},{name:"medium",speed:600},{name:"hard",speed:300}],showButon:!1,difficulty:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"showButtons",className:"wraper"},o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"scoreBlock"},o.a.createElement("h3",null,"Score: ",this.props.score),o.a.createElement("h3",null,"Max score : ",this.props.maxScore)),o.a.createElement("div",{className:"speedBlock"},o.a.createElement("h3",{"data-id":"showButon"},"Speed: ",""===this.state.difficulty?"Easy":this.state.difficulty.replace(this.state.difficulty[0],this.state.difficulty[0].toUpperCase())),this.state.showButtons?"":o.a.createElement("div",{id:"buttons",className:"mode"},this.state.buttonsMode.map(function(t){return e.state.showButon&&!e.props.start?o.a.createElement("button",{key:t.speed,id:t.name,name:t.name,onClick:e.changeSpeed,className:"button_speed"},t.name.replace(t.name[0],t.name[0].toUpperCase())):""})))))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).isGameOver=function(e){return a.setState({gameOver:e,score:0})},a.isMaxScore=function(e){return a.setState(function(t){return t.maxScore<e?t.maxScore=e:t.maxScore})},a.updateScore=function(e){return a.setState({score:e})},a.changeSpeed=function(e){return a.setState({speed:e})},a.updatePlaying=function(e){return a.setState({start:e})},a.state={score:0,maxScore:0,gameOver:!0,speed:900,start:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.score,a=e.maxScore,n=e.gameOver,r=e.speed,c=e.start;return o.a.createElement("div",{id:"snakeWrap"},o.a.createElement(O,{score:t,maxScore:a,gameOver:this.isGameOver,speed:r,start:c,changeSpeed:this.changeSpeed}),o.a.createElement(w,{score:this.updateScore,gameOver:this.isGameOver,maxScore:this.isMaxScore,start:n,playing:this.updatePlaying,speed:r}))}}]),t}(n.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Card"},o.a.createElement("header",{className:"App-header"},o.a.createElement(h,null)),o.a.createElement(b,{className:"SnakeApp"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,a){},8:function(e,t,a){}},[[12,2,1]]]);
//# sourceMappingURL=main.6aa769e7.chunk.js.map