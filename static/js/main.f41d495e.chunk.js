(this["webpackJsonpreact-click"]=this["webpackJsonpreact-click"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(2),i=c.n(n),l=(c(12),c(3)),s=c(4),m=c(6),o=c(5),u=(c(13),function(e){Object(m.a)(c,e);var t=Object(o.a)(c);function c(e){var a;Object(l.a)(this,c),a=t.call(this,e);for(var r=[],n=1;n<71;n++)r.push(n);return console.log(r),a.state={score:0,highScore:0,clicked:[],imgNums:r},a}return Object(s.a)(c,[{key:"clicker",value:function(e){if(console.log("CLICK!!"),this.state.clicked.includes(e))this.state.clicked.includes(e)&&(this.state.score>this.state.highScore&&this.setState({highScore:this.state.score}),this.setState({score:0,clicked:[]}),alert("Too bad!"));else{var t=this.state.clicked;t.push(e),this.setState({score:this.state.score+1,clicked:t})}}},{key:"render",value:function(){for(var e=this,t=[];t.length<9;){var c=this.state.imgNums[Math.floor(69*Math.random())];t.includes(c)||t.push(c)}return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"React Clicky Game"),r.a.createElement("p",null,"Click on the images no more than once! Test your memory skills!")),r.a.createElement("div",null,r.a.createElement("h4",null,"Your Score: ",this.state.score," | Your Highest Score: ",this.state.highScore)),r.a.createElement("div",null,r.a.createElement("img",{className:"mr-1 mb-1",alt:"random Img",src:"https://i.pravatar.cc/150?img=".concat(t[0]),onClick:function(){return e.clicker(t[0])}}),r.a.createElement("img",{className:"mr-1 mb-1",alt:"random Img",src:"https://i.pravatar.cc/150?img=".concat(t[1]),onClick:function(){return e.clicker(t[1])}}),r.a.createElement("img",{className:"mr-1 mb-1",alt:"random Img",src:"https://i.pravatar.cc/150?img=".concat(t[2]),onClick:function(){return e.clicker(t[2])}}),r.a.createElement("br",null),r.a.createElement("img",{className:"mr-1 mb-1",alt:"random Img",src:"https://i.pravatar.cc/150?img=".concat(t[3]),onClick:function(){return e.clicker(t[3])}}),r.a.createElement("img",{className:"mr-1 mb-1",alt:"random Img",src:"https://i.pravatar.cc/150?img=".concat(t[4]),onClick:function(){return e.clicker(t[4])}}),r.a.createElement("img",{className:"mr-1 mb-1",alt:"random Img",src:"https://i.pravatar.cc/150?img=".concat(t[5]),onClick:function(){return e.clicker(t[5])}}),r.a.createElement("br",null),r.a.createElement("img",{className:"mr-1 mb-1",alt:"random Img",src:"https://i.pravatar.cc/150?img=".concat(t[6]),onClick:function(){return e.clicker(t[6])}}),r.a.createElement("img",{className:"mr-1 mb-1",alt:"random Img",src:"https://i.pravatar.cc/150?img=".concat(t[7]),onClick:function(){return e.clicker(t[7])}}),r.a.createElement("img",{className:"mr-1 mb-1",alt:"random Img",src:"https://i.pravatar.cc/150?img=".concat(t[8]),onClick:function(){return e.clicker(t[8])}}),r.a.createElement("br",null)))}}]),c}(r.a.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root"))},7:function(e,t,c){e.exports=c(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.f41d495e.chunk.js.map