(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},14:function(e,t,a){},20:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o);a(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(3),s=a(4),l=a(6),u=a(5),d=a(7),m=a(34),p=["Home","Game"],h=1;function f(){var e=p.map(function(e){return r.a.createElement("li",{key:h++,className:"menu-item"},r.a.createElement(m.a,{to:"".concat("/kobra/").concat(e)},e))});return r.a.createElement("ul",null,e)}a(10);var v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},r.a.createElement(f,null)))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).greeting=function(){var e="".concat(2,"Hello Visitor!").concat(2," Greet to see You!\u270c\ufe0f\u270c\ufe0f\u270c\ufe0f").split(""),t=setInterval(function(){if(!e[0])return clearInterval(t);a.setState(function(t){return t.showLetters+=e.shift().replace(/[2]/gi,"\u269b\ufe0f")})},50)},a.componentWillUnmount=function(){clearInterval(a.greeting())},a.state={showLetters:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"greet"},r.a.createElement("div",{className:"greeting text"},r.a.createElement("p",{id:"Text-show"},this.state.showLetters)))}},{key:"componentDidMount",value:function(){this.greeting()}}]),t}(n.Component),b=p.slice(),y=(n.Component,function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{id:"greeting"}))}}]),t}(n.Component)),O=a(18),k=a(11),w=(a(14),function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){document.addEventListener("keydown",function(e){a.setDirection(e)})},a.componentDidUpdate=function(e,t,n){e.start===!a.props.start&&a.gameStart()},a.gameStart=function(){a.state.gameOver||(a.props.playing(!0),a.setState(function(e){var t=e.snake,n=e.apple,r=(e.playing,a.appleEat()),o={playing:!0,snake:Object(k.a)({},t,{head:{row:t.head.row+t.direction.y,col:t.head.col+t.direction.x},body:[t.head].concat(Object(O.a)(t.body))}),apple:r?{row:Math.floor(19*Math.random()),col:Math.floor(19*Math.random())}:n};return r||o.snake.body.pop(),o},function(){var e=a.state,t=e.snake;e.playing;if(a.gameOver()||a.isTail(t.head))return a.props.playing(!1),void a.setState({gameOver:!0,playing:!1});setTimeout(function(){a.gameStart()},a.state.snake.body.length?a.props.speed/(a.state.snake.body.length+1)+100:a.props.speed)}))},a.getAppleOnField=function(){var e=a.state.snake,t={row:Math.floor(19*Math.random()),col:Math.floor(19*Math.random())};return a.isTail(t)||e.head.row===t.row&&e.head.col===t.col?a.getAppleOnField():t},a.gameOver=function(){var e=a.state.snake;return(e.head.col<0||e.head.row<0||e.head.col>18||e.head.row>18)&&(a.props.gameOver(!0),a.props.maxScore(e.body.length),!0)},a.appleEat=function(){var e=a.state,t=e.apple,n=e.snake;return a.props.score(n.body.length),t.row===n.head.row&&t.col===n.head.col},a.setDirection=function(e){var t=a.state.snake;if(40===e.keyCode){if(-1===t.direction.y)return;a.setState(function(e){var t=e.snake;return{snake:Object(k.a)({},t,{direction:{x:0,y:1}})}})}else if(39===e.keyCode){if(-1===t.direction.x)return;a.setState(function(e){var t=e.snake;return{snake:Object(k.a)({},t,{direction:{x:1,y:0}})}})}else if(38===e.keyCode){if(1===t.direction.y)return;a.setState(function(e){var t=e.snake;return{snake:Object(k.a)({},t,{direction:{x:0,y:-1}})}})}else if(37===e.keyCode){if(1===t.direction.x)return;a.setState(function(e){var t=e.snake;return{snake:Object(k.a)({},t,{direction:{x:-1,y:0}})}})}},a.isSnake=function(e){var t=a.state.snake;return e.row===t.head.row&&e.col===t.head.col?"snake head":""},a.isApple=function(e){var t=a.state.apple;return e.row===t.row&&e.col===t.col?"apple":""},a.isTail=function(e){return a.state.snake.body.find(function(t){return t.row===e.row&&t.col===e.col})},a.startAgain=function(e){a.setState(function(e){e.snake,e.gameOver;return{playing:!1,gameOver:!1,snake:{head:{col:9,row:9},body:[],direction:{x:1,y:0}}}}),a.props.gameOver(!1)};for(var n=[],r=0;r<19;r++){for(var o=[],c=0;c<19;c++)o.push({row:r,col:c});n.push(o)}return a.state={grid:n,playing:!1,apple:{row:Math.floor(19*Math.random()),col:Math.floor(19*Math.random())},snake:{head:{row:9,col:9},direction:{x:1,y:0},body:[]},score:0},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=(t.grid,t.snake,t.gameOver),n=t.playing;return r.a.createElement("div",{id:"snake",tabIndex:"0",onKeyPress:this.setDirection},r.a.createElement("div",{id:"gridWrap"},r.a.createElement("section",{id:"grid"},this.state.grid.map(function(t){return t.map(function(t){return r.a.createElement("div",{key:"".concat(t.row," ").concat(t.col),className:"cell ".concat(e.isSnake(t)?"head":e.isApple(t)?"apple":e.isTail(t)?"tail":"")})})})),r.a.createElement("div",null,n?"":r.a.createElement("div",{className:"modal"},r.a.createElement("button",{onClick:this.startAgain,id:"start"},a?"Start Again":"Start game")))))}}]),t}(n.Component)),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){document.getElementById("showButtons").addEventListener("mouseover",a.showButtons)},a.showButtons=function(e){if("showButon"===e.target.dataset.id)return console.log(a.state.showButon),a.setState({showButon:!0})},a.gameStart=function(){return a.setState({showButon:!a.state.showButon}),a.props.gameOver(!1)},a.changeSpeed=function(e){return a.state.buttonsMode.map(function(t){if(t.name===e.target.name)return a.props.changeSpeed(t.speed)}),a.setState({difficulty:e.target.name,showButon:!a.state.showButon})},a.state={buttonsMode:[{name:"easy",speed:900},{name:"medium",speed:600},{name:"hard",speed:300}],showButon:!1,difficulty:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"showButtons",className:"wraper"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"scoreBlock"},r.a.createElement("h3",null,"Score: ",this.props.score),r.a.createElement("h3",null,"Max score : ",this.props.maxScore)),r.a.createElement("div",{className:"speedBlock"},r.a.createElement("h3",{"data-id":"showButon"},"Speed: ",""===this.state.difficulty?"Easy":this.state.difficulty.replace(this.state.difficulty[0],this.state.difficulty[0].toUpperCase())),this.state.showButtons?"":r.a.createElement("div",{id:"buttons",className:"mode"},this.state.buttonsMode.map(function(t){return e.state.showButon&&!e.props.start?r.a.createElement("button",{key:t.speed,id:t.name,name:t.name,onClick:e.changeSpeed,className:"button_speed"},t.name.replace(t.name[0],t.name[0].toUpperCase())):""})))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).isGameOver=function(e){return a.setState({gameOver:e,score:0})},a.isMaxScore=function(e){return a.setState(function(t){return t.maxScore<e?t.maxScore=e:t.maxScore})},a.updateScore=function(e){return a.setState({score:e})},a.changeSpeed=function(e){return a.setState({speed:e})},a.updatePlaying=function(e){return a.setState({start:e})},a.state={score:0,maxScore:0,gameOver:!0,speed:900,start:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.score,a=e.maxScore,n=e.gameOver,o=e.speed,c=e.start;return r.a.createElement("div",{id:"snakeWrap",className:"SnakeApp"},r.a.createElement(S,{score:t,maxScore:a,gameOver:this.isGameOver,speed:o,start:c,changeSpeed:this.changeSpeed}),r.a.createElement(w,{score:this.updateScore,gameOver:this.isGameOver,maxScore:this.isMaxScore,start:n,playing:this.updatePlaying,speed:o}))}}]),t}(n.Component),j=a(35),x=a(37),M=a(36),B=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("main",null,r.a.createElement(x.a,null,r.a.createElement(M.a,{path:"/Game",component:E}),r.a.createElement(M.a,{path:"/",component:y})))))}}]),t}(n.Component);c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.efeb2d15.chunk.js.map