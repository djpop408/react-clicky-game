(this["webpackJsonpreact-clicky-game"]=this["webpackJsonpreact-clicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Spider Man","image":"https://i.imgur.com/8tMKosC.jpg","count":0},{"id":2,"name":"Iron Man","image":"https://i.imgur.com/ChDxnlg.jpg","count":0},{"id":3,"name":"Black Panther","image":"https://i.imgur.com/pKp1AVJ.jpg","count":0},{"id":4,"name":"Deadpool","image":"https://i.imgur.com/sD3Vemc.jpg","count":0},{"id":5,"name":"Captain America","image":"https://i.imgur.com/yVre5mI.jpg","count":0},{"id":6,"name":"Ant-Man","image":"https://i.imgur.com/4j2cDdq.jpg","count":0},{"id":7,"name":"Guardians of the Galaxy","image":"https://i.imgur.com/4tK3uUt.jpg","count":0},{"id":8,"name":"Captain Marvel","image":"https://i.imgur.com/uiSGQG7.jpg","count":0},{"id":9,"name":"Wolverine","image":"https://i.imgur.com/0AXMd4C.jpg","count":0},{"id":10,"name":"Luke Cage","image":"https://i.imgur.com/PDN9wiD.jpg","count":0},{"id":11,"name":"Avengers","image":"https://i.imgur.com/2u48Suz.jpg","count":0},{"id":12,"name":"Jessica Jones","image":"https://i.imgur.com/Db0Ivbm.jpg","count":0}]')},,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(3),r=n.n(i),o=n(4),s=n(5),m=n(7),u=n(6),g=(n(13),function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),l=(n(14),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),h=(n(15),function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"title"},e.children),c.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),p=n(1),d=(n(16),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={cards:p,score:0,highscore:0},e.gameOver=function(){return e.state.score>e.state.highscore&&e.setState({highscore:e.state.score},(function(){console.log(this.state.highscore)})),e.state.cards.forEach((function(e){e.count=0})),alert("Game Over :( \nscore: ".concat(e.state.score)),e.setState({score:0}),!0},e.clickCount=function(t){e.state.cards.find((function(n,a){if(n.id===t){if(0===p[a].count)return p[a].count=p[a].count+1,e.setState({score:e.state.score+1},(function(){console.log(this.state.score)})),e.state.cards.sort((function(){return Math.random()-.5})),!0;e.gameOver()}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement(l,null,c.a.createElement(h,{score:this.state.score,highscore:this.state.highscore},"Clicky Game"),this.state.cards.map((function(t){return c.a.createElement(g,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})})))}}]),n}(a.Component));n(17);r.a.render(c.a.createElement(d,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.4e8ab864.chunk.js.map